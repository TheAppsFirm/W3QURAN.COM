/**
 * Quiz Questions
 * Single Responsibility: Define quiz content for learning
 */

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How many surahs are in the Quran?',
    options: ['112', '113', '114', '115'],
    correct: 2,
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which surah is known as the "Heart of the Quran"?',
    options: ['Al-Fatiha', 'Ya-Sin', 'Al-Baqarah', 'Al-Ikhlas'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Which is the longest surah in the Quran?',
    options: ['Al-Imran', 'An-Nisa', 'Al-Baqarah', 'Al-Araf'],
    correct: 2,
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which surah does not begin with "Bismillah"?',
    options: ['Al-Fatiha', 'At-Tawbah', 'Al-Baqarah', 'An-Nas'],
    correct: 1,
    difficulty: 'medium',
  },
  {
    id: 5,
    question: 'Which surah is equivalent to 1/3 of the Quran?',
    options: ['Al-Fatiha', 'Al-Falaq', 'Al-Ikhlas', 'An-Nas'],
    correct: 2,
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'In which surah is Ayatul Kursi found?',
    options: ['Al-Imran', 'Al-Baqarah', 'An-Nisa', 'Al-Maidah'],
    correct: 1,
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'How many times is the word "Allah" mentioned in the Quran?',
    options: ['1,000', '2,698', '3,500', '4,000'],
    correct: 1,
    difficulty: 'hard',
  },
  {
    id: 8,
    question: 'Which prophet is mentioned most in the Quran?',
    options: ['Ibrahim', 'Isa', 'Musa', 'Muhammad'],
    correct: 2,
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'Which surah is recited in every unit of prayer?',
    options: ['Al-Ikhlas', 'Al-Fatiha', 'Al-Baqarah', 'Ya-Sin'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 10,
    question: 'What was the first word revealed of the Quran?',
    options: ['Bismillah', 'Iqra', 'Qul', 'Alhamdulillah'],
    correct: 1,
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'Which surah mentions the story of the Sleepers of the Cave?',
    options: ['Al-Hijr', 'Al-Kahf', 'Maryam', 'Ta-Ha'],
    correct: 1,
    difficulty: 'easy',
  },
  {
    id: 12,
    question: 'How many Juzz (parts) is the Quran divided into?',
    options: ['20', '25', '30', '35'],
    correct: 2,
    difficulty: 'easy',
  },
  {
    id: 13,
    question: 'Which surah is named after a woman?',
    options: ['An-Nisa', 'Maryam', 'Al-Mumtahanah', 'All of these'],
    correct: 1,
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'The first complete surah revealed was?',
    options: ['Al-Fatiha', 'Al-Alaq', 'Al-Muddaththir', 'Al-Muzzammil'],
    correct: 0,
    difficulty: 'hard',
  },
  {
    id: 15,
    question: 'Which animal is mentioned in Surah An-Naml?',
    options: ['Cow', 'Ant', 'Elephant', 'Spider'],
    correct: 1,
    difficulty: 'easy',
  },
];

/**
 * Get questions by difficulty
 */
export const getQuestionsByDifficulty = (difficulty) => {
  if (difficulty === 'all') return QUIZ_QUESTIONS;
  return QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty);
};

/**
 * Get random questions
 */
export const getRandomQuestions = (count = 10) => {
  const shuffled = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * Calculate points for correct answer
 */
export const getPointsForDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'easy':
      return 5;
    case 'medium':
      return 10;
    case 'hard':
      return 20;
    default:
      return 10;
  }
};
