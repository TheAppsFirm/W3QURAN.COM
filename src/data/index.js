/**
 * Data Index
 * Single Responsibility: Export all data modules
 */

// Surah data
export { SURAHS, MAX_AYAHS, TOTAL_SURAHS, JUZZ, getSurahById, getSurahsByType } from './surahs';

// Color palettes
export { PALETTES, TOPIC_PALETTES, TOPIC_ICONS, getTopicPalette, getTopicIcon } from './palettes';

// Topic categories
export { FAQ_TOPICS, getTopicById, getTopicsForSurah } from './topics';

// Names of Allah
export { NAMES_OF_ALLAH, TOTAL_NAMES } from './namesOfAllah';

// Daily verses
export { DAILY_VERSES, getTodaysVerse, getVerseByTopic, getAvailableTopics } from './dailyVerses';

// Quiz
export {
  QUIZ_QUESTIONS,
  getQuestionsByDifficulty,
  getRandomQuestions,
  getPointsForDifficulty,
} from './quizQuestions';
