/**
 * vibrationUtils.js
 * Haptic feedback patterns for Hajj/Umrah journey
 * Uses the Vibration API (Android + some browsers, no-op on iOS/desktop)
 */

const vibrate = (pattern) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
};

export const haptics = {
  tap: () => vibrate(20),
  checkpoint: () => vibrate([30, 20, 30]),
  roundComplete: () => vibrate([40, 30, 40, 30, 40]),
  stepComplete: () => vibrate([50, 40, 50, 40, 50, 40, 50]),
  celebration: () => vibrate([100, 50, 100, 50, 100, 50, 100, 50, 200]),
  impact: () => vibrate(50),
  footstep: () => vibrate(10),
  runStep: () => vibrate(15),
  duaMoment: () => vibrate([30, 50, 30]),
};
