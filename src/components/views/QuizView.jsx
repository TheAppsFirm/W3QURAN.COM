/**
 * QuizView Component
 * Single Responsibility: Display and manage Quran quiz
 */

import { useState } from 'react';
import { Icons } from '../common/Icons';
import { QUIZ_QUESTIONS } from '../../data';
import { useGamification } from '../../hooks/useGamification';
import { useTranslation } from '../../contexts/LocaleContext';

function QuizView({ darkMode, onEarnPoints }) {
  const { t, isRTL } = useTranslation();
  const gamification = useGamification();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [difficulty, setDifficulty] = useState('all');

  const filteredQuestions = difficulty === 'all' ? QUIZ_QUESTIONS : QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty);

  const question = filteredQuestions[currentQuestion];

  // Handle back navigation
  const handleBack = () => {
    window.history.back();
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === question.correct) {
      setScore(score + 1);
      if (gamification.isActive) gamification.recordAction('quiz_correct');
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <div className={`h-full flex flex-col items-center justify-center p-6 ${darkMode ? 'text-white' : ''}`}>
        <div className={`rounded-3xl p-8 text-center max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <Icons.Award className="w-20 h-20 mx-auto mb-4 text-amber-500" />
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t('quiz.title')}!</h2>
          <p
            className={`text-6xl font-bold my-6 ${
              percentage >= 70 ? 'text-emerald-500' : percentage >= 50 ? 'text-amber-500' : 'text-red-500'
            }`}
          >
            {percentage}%
          </p>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            You got {score} out of {filteredQuestions.length} questions correct!
          </p>
          <button
            onClick={restartQuiz}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold"
          >
            {t('quiz.tryAgain')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col overflow-auto ${darkMode ? 'text-white' : ''}`}
      style={{ paddingBottom: 'max(6rem, calc(env(safe-area-inset-bottom, 0px) + 6rem))' }}
    >
      {/* Header with back button */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}
        style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}>
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={handleBack}
            className={`p-2.5 rounded-full transition-all active:scale-95 ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
            title="Go back"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <Icons.ChevronLeft className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-600'}`} />
          </button>
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {t('quiz.title')}
          </h2>
        </div>
      </div>

      <div className="p-6">
      <div className="text-center mb-6">

        {/* Difficulty Selector */}
        <div className="flex justify-center gap-2 mt-4">
          {['all', 'easy', 'medium', 'hard'].map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                restartQuiz();
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                difficulty === d
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
              }`}
            >
              {d.charAt(0).toUpperCase() + d.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-lg mx-auto w-full mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {filteredQuestions.length}
          </span>
          <span className="text-emerald-500 font-bold">{t('quiz.score')}: {score}</span>
        </div>
        <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className={`rounded-3xl p-6 max-w-lg w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
              question.difficulty === 'easy'
                ? 'bg-green-100 text-green-700'
                : question.difficulty === 'medium'
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-red-100 text-red-700'
            }`}
          >
            {question.difficulty}
          </div>

          <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{question.question}</h3>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let bgColor = darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100';
              if (showResult) {
                if (idx === question.correct) {
                  bgColor = 'bg-emerald-500 text-white';
                } else if (idx === selectedAnswer && idx !== question.correct) {
                  bgColor = 'bg-red-500 text-white';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => !showResult && handleAnswer(idx)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-2xl text-left font-medium transition-all ${bgColor} ${
                    !showResult ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <span className="mr-3">{String.fromCharCode(65 + idx)}.</span>
                  {option}
                </button>
              );
            })}
          </div>

          {showResult && (
            <button
              onClick={nextQuestion}
              className="w-full mt-6 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl font-bold"
            >
              {currentQuestion < filteredQuestions.length - 1 ? t('quiz.nextQuestion') : t('quiz.viewResults')}
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default QuizView;
