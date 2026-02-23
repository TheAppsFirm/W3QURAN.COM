/**
 * HajjJourney.jsx
 * Interactive Hajj journey with all 14 steps over 5 days
 * PREMIUM FEATURE
 */

import React, { useState, useCallback, useMemo } from 'react';
import { Icons } from '../../common/Icons';
import { HAJJ_STEPS, HAJJ_DAYS, HAJJ_COMPLETION } from './data/hajjSteps';
import StepCard from './StepCard';

// Progress utilities
const getSavedProgress = () => {
  try {
    const saved = localStorage.getItem('hajj_journey_progress');
    return saved ? JSON.parse(saved) : { completedSteps: [], currentStep: 1, currentDay: 1 };
  } catch {
    return { completedSteps: [], currentStep: 1, currentDay: 1 };
  }
};

const saveProgress = (progress) => {
  try {
    localStorage.setItem('hajj_journey_progress', JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
};

// Day tab component
const DayTab = ({ day, dayInfo, isActive, completedCount, totalCount, onClick, language }) => {
  const isRTL = language === 'ar' || language === 'ur';
  const isComplete = completedCount === totalCount;

  const getDayName = () => {
    switch (language) {
      case 'ar': return dayInfo.nameAr;
      case 'ur': return dayInfo.nameUr;
      default: return dayInfo.nameEn;
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        flex-shrink-0 px-4 py-3 rounded-xl transition-all
        ${isActive
          ? 'bg-white shadow-lg scale-105'
          : 'bg-white/20 hover:bg-white/40'
        }
      `}
    >
      <div className="text-center">
        <p className={`text-xs font-medium ${isActive ? 'text-gray-500' : 'text-white/70'}`}>
          {language === 'ar' ? `اليوم ${day}` : language === 'ur' ? `دن ${day}` : `Day ${day}`}
        </p>
        <p
          className={`text-sm font-bold ${isActive ? 'text-gray-800' : 'text-white'}`}
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {getDayName()}
        </p>
        <div className="flex items-center justify-center gap-1 mt-1">
          {isComplete ? (
            <span className="text-emerald-500">✅</span>
          ) : (
            <span className={`text-xs ${isActive ? 'text-gray-400' : 'text-white/60'}`}>
              {completedCount}/{totalCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

// Step marker for journey
const StepMarker = ({ step, isActive, isCompleted, onClick, language, size = 'normal' }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const getStepName = () => {
    switch (language) {
      case 'ar': return step.nameAr;
      case 'ur': return step.nameUr;
      default: return step.name;
    }
  };

  const sizeClasses = size === 'small'
    ? 'w-14 h-14 text-2xl'
    : 'w-18 h-18 sm:w-20 sm:h-20 text-3xl';

  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center transition-all duration-300
        ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}
      `}
    >
      {/* Marker circle */}
      <div
        className={`
          relative ${sizeClasses} rounded-full flex items-center justify-center
          shadow-lg transition-all duration-300
          ${isActive ? 'ring-4 ring-white/50' : ''}
        `}
        style={{
          background: isCompleted
            ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            : `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
        }}
      >
        <span>{isCompleted ? '✅' : step.emoji}</span>

        {/* Completed star */}
        {isCompleted && (
          <div className="absolute -top-1 -right-1 text-lg">⭐</div>
        )}

        {/* Glow effect when active */}
        {isActive && (
          <div
            className="absolute inset-0 rounded-full blur-xl opacity-50 -z-10"
            style={{ background: step.color }}
          />
        )}
      </div>

      {/* Step name */}
      <div
        className={`
          mt-2 px-2 py-1 rounded-lg text-center transition-all
          ${isActive ? 'bg-white shadow-lg' : 'bg-white/80'}
        `}
        style={{ minWidth: '70px', maxWidth: '90px' }}
      >
        <p
          className="text-[10px] font-bold text-gray-800 truncate"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          {getStepName()}
        </p>
      </div>
    </button>
  );
};

// Completion celebration modal
const CompletionModal = ({ language, onClose }) => {
  const isRTL = language === 'ar' || language === 'ur';

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-bounce-in"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <div className="text-6xl mb-4">🎉🕋🎉</div>
        <h2
          className="text-2xl font-bold text-gray-800 mb-2"
          style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
        >
          {HAJJ_COMPLETION.title[language]}
        </h2>
        <p
          className="text-gray-600 mb-4 text-sm leading-relaxed"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
            lineHeight: isRTL ? '2' : '1.6',
          }}
        >
          {HAJJ_COMPLETION.message[language]}
        </p>

        {/* Hadith */}
        <div className="bg-amber-50 rounded-xl p-4 mb-4 border-2 border-amber-200">
          <p
            className="text-amber-800 text-lg font-bold mb-2"
            style={{ fontFamily: "'Scheherazade New', serif" }}
          >
            {HAJJ_COMPLETION.hadith.arabic}
          </p>
          <p
            className="text-amber-600 text-sm italic"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            {HAJJ_COMPLETION.hadith.translation[language]}
          </p>
          <p className="text-amber-500 text-xs mt-2">
            {HAJJ_COMPLETION.hadith.source}
          </p>
        </div>

        <button
          onClick={onClose}
          className="px-8 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all"
        >
          {language === 'ar' ? 'الحمد لله' : language === 'ur' ? 'الحمد للہ' : 'Alhamdulillah'}
        </button>
      </div>

      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

const HajjJourney = ({ language, onBack }) => {
  const [progress, setProgress] = useState(getSavedProgress);
  const [currentDay, setCurrentDay] = useState(progress.currentDay);
  const [currentStep, setCurrentStep] = useState(progress.currentStep);
  const [showStepCard, setShowStepCard] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const isRTL = language === 'ar' || language === 'ur';

  // Get steps for current day
  const daySteps = useMemo(() => {
    return HAJJ_STEPS.filter(s => s.day === currentDay);
  }, [currentDay]);

  // Current step data
  const currentStepData = useMemo(() => {
    return HAJJ_STEPS.find(s => s.id === currentStep) || HAJJ_STEPS[0];
  }, [currentStep]);

  // Get day info
  const currentDayInfo = useMemo(() => {
    return HAJJ_DAYS.find(d => d.day === currentDay) || HAJJ_DAYS[0];
  }, [currentDay]);

  // Calculate completions per day
  const getDayCompletion = (day) => {
    const daySteps = HAJJ_STEPS.filter(s => s.day === day);
    const completed = daySteps.filter(s => progress.completedSteps.includes(s.id));
    return { completed: completed.length, total: daySteps.length };
  };

  // Handle step completion
  const handleStepComplete = useCallback((stepId) => {
    setProgress(prev => {
      if (prev.completedSteps.includes(stepId)) return prev;

      const newCompleted = [...prev.completedSteps, stepId];
      const currentStepIndex = HAJJ_STEPS.findIndex(s => s.id === stepId);
      const nextStep = currentStepIndex < HAJJ_STEPS.length - 1
        ? HAJJ_STEPS[currentStepIndex + 1]
        : HAJJ_STEPS[currentStepIndex];

      const newProgress = {
        completedSteps: newCompleted,
        currentStep: nextStep.id,
        currentDay: nextStep.day,
      };
      saveProgress(newProgress);

      // Check if all steps completed
      if (newCompleted.length === HAJJ_STEPS.length) {
        setTimeout(() => setShowCompletion(true), 500);
      }

      return newProgress;
    });

    setShowStepCard(false);

    // Move to next step
    const currentIndex = HAJJ_STEPS.findIndex(s => s.id === stepId);
    if (currentIndex < HAJJ_STEPS.length - 1) {
      const nextStep = HAJJ_STEPS[currentIndex + 1];
      setCurrentStep(nextStep.id);
      setCurrentDay(nextStep.day);
    }
  }, []);

  // Open step card
  const openStepCard = (stepId) => {
    const step = HAJJ_STEPS.find(s => s.id === stepId);
    if (step) {
      setCurrentStep(stepId);
      setCurrentDay(step.day);
      setShowStepCard(true);
    }
  };

  // Localized text
  const text = {
    title: { en: 'Hajj Journey', ur: 'حج کا سفر', ar: 'رحلة الحج' },
  };

  // Get background gradient based on day
  const getDayGradient = () => {
    switch (currentDay) {
      case 1: return 'linear-gradient(180deg, #60A5FA 0%, #3B82F6 50%, #1D4ED8 100%)';
      case 2: return 'linear-gradient(180deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)'; // Arafah - sunny
      case 3: return 'linear-gradient(180deg, #F472B6 0%, #EC4899 50%, #DB2777 100%)'; // Eid - celebration
      case 4:
      case 5: return 'linear-gradient(180deg, #34D399 0%, #10B981 50%, #059669 100%)';
      default: return 'linear-gradient(180deg, #60A5FA 0%, #3B82F6 100%)';
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{ background: getDayGradient() }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Day 2 (Arafah) - sun */}
        {currentDay === 2 && (
          <div
            className="absolute w-24 h-24 rounded-full"
            style={{
              right: '10%',
              top: '10%',
              background: 'radial-gradient(circle, #FEF3C7 0%, #FBBF24 70%)',
              boxShadow: '0 0 80px rgba(251, 191, 36, 0.6)',
            }}
          />
        )}

        {/* Night scenes - stars */}
        {(currentDay === 1 || currentDay >= 4) && (
          <>
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 40}%`,
                  width: `${1 + Math.random() * 2}px`,
                  height: `${1 + Math.random() * 2}px`,
                  opacity: 0.4 + Math.random() * 0.4,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 font-bold hover:bg-white transition-all shadow-lg text-sm"
          >
            <Icons.ArrowLeft className="w-4 h-4" />
            <span>{language === 'ar' ? 'رجوع' : language === 'ur' ? 'واپس' : 'Back'}</span>
          </button>

          <div
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/90 backdrop-blur-sm rounded-full text-white shadow-lg"
            style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
          >
            <span className="text-lg">🕋</span>
            <span className="font-bold text-sm">{text.title[language]}</span>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-amber-500 font-bold text-sm">
              {progress.completedSteps.length}/{HAJJ_STEPS.length}
            </span>
            <span>⭐</span>
          </div>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {HAJJ_DAYS.map((dayInfo) => {
            const { completed, total } = getDayCompletion(dayInfo.day);
            return (
              <DayTab
                key={dayInfo.day}
                day={dayInfo.day}
                dayInfo={dayInfo}
                isActive={currentDay === dayInfo.day}
                completedCount={completed}
                totalCount={total}
                onClick={() => {
                  setCurrentDay(dayInfo.day);
                  const firstStepOfDay = HAJJ_STEPS.find(s => s.day === dayInfo.day);
                  if (firstStepOfDay) setCurrentStep(firstStepOfDay.id);
                }}
                language={language}
              />
            );
          })}
        </div>
      </div>

      {/* Steps for current day */}
      <div className="absolute inset-0 flex items-center justify-center pt-36 pb-40">
        <div className="flex items-center gap-3 sm:gap-6 px-4 overflow-x-auto max-w-full">
          {daySteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepMarker
                step={step}
                isActive={currentStep === step.id}
                isCompleted={progress.completedSteps.includes(step.id)}
                onClick={() => openStepCard(step.id)}
                language={language}
                size="small"
              />

              {/* Connection line */}
              {index < daySteps.length - 1 && (
                <div
                  className={`
                    w-6 sm:w-10 h-1 rounded-full
                    ${progress.completedSteps.includes(step.id)
                      ? 'bg-emerald-400'
                      : 'bg-white/30'
                    }
                  `}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Current step info panel */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div
          className="max-w-lg mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: currentStepData.color }}
            >
              {currentStepData.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs">
                {language === 'ar' ? `اليوم ${currentDayInfo.day} • الخطوة ${currentStep}` :
                 language === 'ur' ? `دن ${currentDayInfo.day} • مرحلہ ${currentStep}` :
                 `Day ${currentDayInfo.day} • Step ${currentStep}`}
              </p>
              <h3
                className="text-base font-bold text-gray-800 truncate"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                {language === 'ar' ? currentStepData.nameAr :
                 language === 'ur' ? currentStepData.nameUr :
                 currentStepData.name}
              </h3>
              <p
                className="text-gray-500 text-xs truncate"
                style={{ fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit' }}
              >
                📍 {language === 'ar' ? currentStepData.locationAr :
                    language === 'ur' ? currentStepData.locationUr :
                    currentStepData.location}
              </p>
            </div>
            <button
              onClick={() => setShowStepCard(true)}
              className="flex-shrink-0 px-4 py-2 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-all text-sm"
            >
              {language === 'ar' ? 'تعلم' : language === 'ur' ? 'سیکھیں' : 'Learn'}
            </button>
          </div>
        </div>
      </div>

      {/* Step card modal */}
      {showStepCard && (
        <StepCard
          step={currentStepData}
          language={language}
          onClose={() => setShowStepCard(false)}
          onComplete={() => handleStepComplete(currentStepData.id)}
          isCompleted={progress.completedSteps.includes(currentStepData.id)}
        />
      )}

      {/* Completion modal */}
      {showCompletion && (
        <CompletionModal
          language={language}
          onClose={() => setShowCompletion(false)}
        />
      )}

      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default HajjJourney;
