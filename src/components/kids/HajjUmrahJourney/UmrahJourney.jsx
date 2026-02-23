/**
 * UmrahJourney.jsx
 * Interactive Umrah journey with all 5 steps
 */

import React, { useState, useCallback, useMemo } from 'react';
import { Icons } from '../../common/Icons';
import { UMRAH_STEPS, UMRAH_COMPLETION } from './data/umrahSteps';
import StepCard from './StepCard';

// Progress utilities
const getSavedProgress = () => {
  try {
    const saved = localStorage.getItem('umrah_journey_progress');
    return saved ? JSON.parse(saved) : { completedSteps: [], currentStep: 1 };
  } catch {
    return { completedSteps: [], currentStep: 1 };
  }
};

const saveProgress = (progress) => {
  try {
    localStorage.setItem('umrah_journey_progress', JSON.stringify(progress));
  } catch (e) {
    console.warn('Could not save progress:', e);
  }
};

// Milestone marker component
const StepMarker = ({ step, isActive, isCompleted, onClick, language }) => {
  const isRTL = language === 'ar' || language === 'ur';

  const getStepName = () => {
    switch (language) {
      case 'ar': return step.nameAr;
      case 'ur': return step.nameUr;
      default: return step.name;
    }
  };

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
          relative w-20 h-20 rounded-full flex items-center justify-center
          shadow-lg transition-all duration-300
          ${isActive ? 'ring-4 ring-white/50' : ''}
        `}
        style={{
          background: isCompleted
            ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            : `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
        }}
      >
        <span className="text-3xl">{isCompleted ? '✅' : step.emoji}</span>

        {/* Completed star */}
        {isCompleted && (
          <div className="absolute -top-1 -right-1 text-xl">⭐</div>
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
          mt-2 px-3 py-1 rounded-lg text-center transition-all
          ${isActive ? 'bg-white shadow-lg' : 'bg-white/80'}
        `}
        style={{
          minWidth: '80px',
          maxWidth: '100px',
        }}
      >
        <p
          className="text-xs font-bold text-gray-800"
          style={{
            fontFamily: isRTL
              ? "'Noto Nastaliq Urdu', serif"
              : 'inherit',
            direction: isRTL ? 'rtl' : 'ltr',
          }}
        >
          {getStepName()}
        </p>
      </div>

      {/* Tap hint when active */}
      {isActive && !isCompleted && (
        <div
          className="mt-1 px-2 py-0.5 bg-emerald-500 rounded-full text-white text-[10px] font-bold animate-bounce"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
          }}
        >
          {language === 'ar' ? 'اضغط' : language === 'ur' ? 'ٹیپ کریں' : 'Tap'}
        </div>
      )}
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
        <div className="text-6xl mb-4">🎉</div>
        <h2
          className="text-2xl font-bold text-gray-800 mb-2"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
          }}
        >
          {UMRAH_COMPLETION.title[language]}
        </h2>
        <p
          className="text-gray-600 mb-4 text-sm leading-relaxed"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
            lineHeight: isRTL ? '2' : '1.6',
          }}
        >
          {UMRAH_COMPLETION.message[language]}
        </p>

        {/* Hadith */}
        <div className="bg-emerald-50 rounded-xl p-4 mb-4">
          <p
            className="text-emerald-800 text-lg font-bold mb-2"
            style={{ fontFamily: "'Scheherazade New', serif" }}
          >
            {UMRAH_COMPLETION.hadith.arabic}
          </p>
          <p
            className="text-emerald-600 text-sm italic"
            style={{
              fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
            }}
          >
            {UMRAH_COMPLETION.hadith.translation[language]}
          </p>
          <p className="text-emerald-500 text-xs mt-2">
            {UMRAH_COMPLETION.hadith.source}
          </p>
        </div>

        <button
          onClick={onClose}
          className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all"
        >
          {language === 'ar' ? 'استمر' : language === 'ur' ? 'جاری رکھیں' : 'Continue'}
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

const UmrahJourney = ({ language, onBack }) => {
  const [progress, setProgress] = useState(getSavedProgress);
  const [currentStep, setCurrentStep] = useState(progress.currentStep);
  const [showStepCard, setShowStepCard] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  const isRTL = language === 'ar' || language === 'ur';

  // Current step data
  const currentStepData = useMemo(() => {
    return UMRAH_STEPS.find(s => s.id === currentStep) || UMRAH_STEPS[0];
  }, [currentStep]);

  // Handle step completion
  const handleStepComplete = useCallback((stepId) => {
    setProgress(prev => {
      if (prev.completedSteps.includes(stepId)) return prev;

      const newCompleted = [...prev.completedSteps, stepId];
      const nextStep = stepId < UMRAH_STEPS.length ? stepId + 1 : stepId;

      const newProgress = {
        completedSteps: newCompleted,
        currentStep: nextStep,
      };
      saveProgress(newProgress);

      // Check if all steps completed
      if (newCompleted.length === UMRAH_STEPS.length) {
        setTimeout(() => setShowCompletion(true), 500);
      }

      return newProgress;
    });

    setShowStepCard(false);

    // Move to next step
    if (currentStep < UMRAH_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep]);

  // Open step card
  const openStepCard = (stepId) => {
    setCurrentStep(stepId);
    setShowStepCard(true);
  };

  // Localized text
  const text = {
    title: { en: 'Umrah Journey', ur: 'عمرہ کا سفر', ar: 'رحلة العمرة' },
    step: { en: 'Step', ur: 'مرحلہ', ar: 'خطوة' },
    of: { en: 'of', ur: 'از', ar: 'من' },
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #60A5FA 0%, #93C5FD 30%, #10B981 70%, #059669 100%)',
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Clouds */}
        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-pulse">☁️</div>
        <div className="absolute top-20 right-20 text-5xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>☁️</div>

        {/* Kaaba silhouette at bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10">
          <svg width="300" height="200" viewBox="0 0 300 200">
            <rect x="50" y="20" width="200" height="180" fill="white" rx="5" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 font-bold hover:bg-white transition-all shadow-lg text-sm"
        >
          <Icons.ArrowLeft className="w-4 h-4" />
          <span>{language === 'ar' ? 'رجوع' : language === 'ur' ? 'واپس' : 'Back'}</span>
        </button>

        <div
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-full text-white shadow-lg"
          style={{
            fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
          }}
        >
          <span className="text-lg">🕌</span>
          <span className="font-bold text-sm">{text.title[language]}</span>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-1 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
          <span className="text-emerald-500 font-bold text-sm">
            {progress.completedSteps.length}/{UMRAH_STEPS.length}
          </span>
          <span>✅</span>
        </div>
      </div>

      {/* Steps container */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 pb-32">
        <div className="flex items-center gap-4 sm:gap-8 px-4 overflow-x-auto max-w-full">
          {UMRAH_STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepMarker
                step={step}
                isActive={currentStep === step.id}
                isCompleted={progress.completedSteps.includes(step.id)}
                onClick={() => openStepCard(step.id)}
                language={language}
              />

              {/* Connection line */}
              {index < UMRAH_STEPS.length - 1 && (
                <div
                  className={`
                    w-8 sm:w-16 h-1 rounded-full
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
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{ background: currentStepData.color }}
            >
              {currentStepData.emoji}
            </div>
            <div className="flex-1">
              <p className="text-gray-500 text-xs">
                {text.step[language]} {currentStep} {text.of[language]} {UMRAH_STEPS.length}
              </p>
              <h3
                className="text-lg font-bold text-gray-800"
                style={{
                  fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
                }}
              >
                {language === 'ar' ? currentStepData.nameAr :
                 language === 'ur' ? currentStepData.nameUr :
                 currentStepData.name}
              </h3>
              <p
                className="text-gray-500 text-sm"
                style={{
                  fontFamily: isRTL ? "'Noto Nastaliq Urdu', serif" : 'inherit',
                }}
              >
                📍 {language === 'ar' ? currentStepData.locationAr :
                    language === 'ur' ? currentStepData.locationUr :
                    currentStepData.location}
              </p>
            </div>
            <button
              onClick={() => setShowStepCard(true)}
              className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition-all text-sm"
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

export default UmrahJourney;
