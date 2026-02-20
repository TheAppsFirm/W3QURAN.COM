/**
 * Common Components Index
 * Single Responsibility: Export all common/shared components
 *
 * This file exports all reusable components from the common directory.
 * Components here are shared across multiple features and views.
 */

// Core UI Components
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as LoadingSpinner } from './LoadingSpinner';
export { Icons } from './Icons';
export { default as Modal } from './Modal';
export { default as BubbleModal } from './BubbleModal';
export { default as BubbleOverlay } from './BubbleOverlay';
export { default as YouTubePlayer } from './YouTubePlayer';

// Branding
export { Logo, LogoIcon, LogoFull, FusionLogo, FusionLogoWithText, FusionFavicon, FusionAppIcon } from './Logo';

// Main Reader
export { default as BubbleReaderOverlay } from './BubbleReaderOverlay';
export { default as SearchPanel } from './SearchPanel';
export { default as HifzMode } from './HifzMode';

// Progress & Tracking
export { default as ProgressDashboard } from './ProgressDashboard';
export { default as OfflineManager } from './OfflineManager';
export { default as EmotionalTracker, MoodEntryForm, MoodSelector } from './EmotionalTracker';

// Donation
export { default as DonateModal } from './DonateModal';
export { default as DonationBanner } from './DonationBanner';

// Verse Features
export { default as VerseArtGenerator } from './VerseArtGenerator';
export { default as AyahConnectionMap } from './AyahConnectionMap';
export { default as ScholarVideoSync } from './ScholarVideoSync';
export { default as WordSearchMap } from './WordSearchMap';

// Interactive Features
export { default as PropheticMap } from './PropheticMap';
export { default as InteractiveMap } from './InteractiveMap';
export { default as QuranCompanionAI } from './QuranCompanionAI';
export { default as TalkToQuran } from './TalkToQuran';

// Social & Community
export { default as GlobalUmmahPulse, trackReadingActivity } from './GlobalUmmahPulse';
export { default as FamilyCircle } from './FamilyCircle';

// Wellness & Meditation
export { default as VerseWeatherSync } from './VerseWeatherSync';
export { default as SoundHealingRoom } from './SoundHealingRoom';
export { default as HeartbeatMeditation } from './HeartbeatMeditation';
export { default as LivingVisualization } from './LivingVisualization';

// Utility Features
export { default as QuranicBabyNames } from './QuranicBabyNames';
export { default as TimeCapsule } from './TimeCapsule';
export { default as VoiceControl } from './VoiceControl';
export { default as AudioVisualizer } from './AudioVisualizer';

// Gamification
export { default as GamificationHub } from './GamificationHub';
export { default as FeatureBubbles } from './FeatureBubbles';
export { default as FeaturePanels } from './FeaturePanels';

// Grammar Analysis
export { TreebankOverlay, GrammarButton, OntologyView } from './TreebankAnalysis';
