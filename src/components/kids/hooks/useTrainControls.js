import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useTrainControls - Manages keyboard, mouse, and touch controls for the Train Journey game
 *
 * @param {Object} options
 * @param {Array} options.stations - Array of station objects with positions
 * @param {number} options.initialPosition - Starting position (0-100)
 * @param {number} options.maxSpeed - Maximum speed multiplier
 * @param {number} options.acceleration - How fast train accelerates
 * @param {number} options.deceleration - How fast train slows down (friction)
 * @param {Function} options.onStationEnter - Callback when entering station
 *
 * @returns {Object} Train control state and methods
 */
const useTrainControls = ({
  stations = [],
  initialPosition = 0,
  maxSpeed = 1,
  acceleration = 0.1,
  deceleration = 0.05,
  onStationEnter,
} = {}) => {
  // State
  const [trainPosition, setTrainPosition] = useState(initialPosition);
  const [trainSpeed, setTrainSpeed] = useState(0);
  const [targetSpeed, setTargetSpeed] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [direction, setDirection] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Refs
  const touchRef = useRef({ startX: 0, startY: 0, startTime: 0 });
  const dragStartX = useRef(0);
  const speedRef = useRef(0);
  const positionRef = useRef(initialPosition);

  // Update refs when state changes (for animation frame access)
  useEffect(() => {
    speedRef.current = trainSpeed;
  }, [trainSpeed]);

  useEffect(() => {
    positionRef.current = trainPosition;
  }, [trainPosition]);

  // Update direction and isMoving based on speed
  useEffect(() => {
    if (Math.abs(trainSpeed) < 0.01) {
      setIsMoving(false);
      setDirection(null);
    } else {
      setIsMoving(true);
      setDirection(trainSpeed > 0 ? 'right' : 'left');
    }
  }, [trainSpeed]);

  // Auto-select nearby station
  useEffect(() => {
    if (stations.length === 0) return;

    // Find station closest to current train position
    const nearestStation = stations.reduce((nearest, station) => {
      const distance = Math.abs(station.position - trainPosition);
      if (!nearest || distance < nearest.distance) {
        return { station, distance };
      }
      return nearest;
    }, null);

    // If within selection range (2% of track), select it
    if (nearestStation && nearestStation.distance < 2) {
      setSelectedStation(nearestStation.station.id);
    } else {
      setSelectedStation(null);
    }
  }, [trainPosition, stations]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent default for arrow keys to avoid page scrolling
      if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setTargetSpeed(-1);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setTargetSpeed(1);
          break;
        case 'Enter':
        case ' ':
          if (selectedStation) {
            onStationEnter?.(selectedStation);
          }
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd', 'A', 'D'].includes(e.key)) {
        setTargetSpeed(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedStation, onStationEnter]);

  // Physics/Animation loop
  useEffect(() => {
    let animationFrame;
    let lastTime = performance.now();

    const updatePosition = (currentTime) => {
      // Calculate delta time for frame-rate independent movement
      const deltaTime = Math.min((currentTime - lastTime) / 16.667, 2); // Normalize to ~60fps, cap at 2x
      lastTime = currentTime;

      setTrainSpeed((prevSpeed) => {
        let newSpeed = prevSpeed;

        if (targetSpeed !== 0) {
          // Accelerate towards target speed
          const speedDiff = targetSpeed - prevSpeed;
          newSpeed += speedDiff * acceleration * deltaTime;
        } else {
          // Decelerate (friction)
          newSpeed *= Math.pow(1 - deceleration, deltaTime);
          if (Math.abs(newSpeed) < 0.01) newSpeed = 0;
        }

        // Clamp to max speed
        return Math.max(-maxSpeed, Math.min(maxSpeed, newSpeed));
      });

      setTrainPosition((prevPos) => {
        const currentSpeed = speedRef.current;
        const movementScale = 0.5 * deltaTime; // Adjust for smooth movement
        const newPos = prevPos + currentSpeed * movementScale;
        return Math.max(0, Math.min(100, newPos));
      });

      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [targetSpeed, acceleration, deceleration, maxSpeed]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
      startTime: Date.now(),
    };
  }, []);

  const handleTouchMove = useCallback((e) => {
    const deltaX = e.touches[0].clientX - touchRef.current.startX;
    // Convert deltaX to speed (-1 to 1) with sensitivity adjustment
    const speed = Math.max(-1, Math.min(1, deltaX / 100));
    setTargetSpeed(speed);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setTargetSpeed(0);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStartX.current;
    const speed = Math.max(-1, Math.min(1, deltaX / 100));
    setTargetSpeed(speed);
    dragStartX.current = e.clientX; // Update for continuous drag
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTargetSpeed(0);
  }, []);

  // Public methods
  const moveTo = useCallback((position) => {
    const clampedPosition = Math.max(0, Math.min(100, position));
    const delta = clampedPosition - positionRef.current;

    if (Math.abs(delta) < 0.5) {
      // Already at target
      setTrainPosition(clampedPosition);
      setTargetSpeed(0);
      return;
    }

    // Set direction based on where we need to go
    setTargetSpeed(delta > 0 ? 1 : -1);

    // Auto-stop when reaching target (checked in animation loop)
    const checkReached = () => {
      const currentPos = positionRef.current;
      const distanceToTarget = Math.abs(clampedPosition - currentPos);

      if (distanceToTarget < 1) {
        setTrainPosition(clampedPosition);
        setTargetSpeed(0);
      } else {
        requestAnimationFrame(checkReached);
      }
    };

    requestAnimationFrame(checkReached);
  }, []);

  const selectStation = useCallback((stationId) => {
    const station = stations.find((s) => s.id === stationId);
    if (station) {
      moveTo(station.position);
    }
  }, [stations, moveTo]);

  const stopTrain = useCallback(() => {
    setTargetSpeed(0);
  }, []);

  return {
    // State
    trainPosition,
    trainSpeed,
    isMoving,
    direction,
    selectedStation,
    isDragging,

    // Methods
    moveTo,
    selectStation,
    stopTrain,

    // Event handlers for component attachment
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
    },
  };
};

export default useTrainControls;
