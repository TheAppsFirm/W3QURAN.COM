/**
 * Family Quran Circle
 * Multi-user collaborative Quran reading for families
 */

import { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Icons } from './Icons';
import { SURAHS } from '../../data';
import {
  AVATARS,
  ACHIEVEMENTS,
  getFamilyData,
  createFamily,
  addFamilyMember,
  removeFamilyMember,
  recordMemberProgress,
  getFamilyLeaderboard,
} from '../../data/familyStorage';

// Avatar Selector Component
const AvatarSelector = memo(function AvatarSelector({ isKid, selectedAvatar, onSelect }) {
  const avatars = isKid ? AVATARS.kids : AVATARS.adults;

  return (
    <div className="grid grid-cols-6 gap-2">
      {avatars.map((avatar) => (
        <button
          key={avatar.id}
          onClick={() => onSelect(avatar.id)}
          className={`p-2 rounded-xl text-2xl transition-all ${
            selectedAvatar === avatar.id
              ? 'bg-white/20 ring-2 ring-white/50 scale-110'
              : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          {avatar.emoji}
        </button>
      ))}
    </div>
  );
});

// Member Card Component
const MemberCard = memo(function MemberCard({
  member,
  isSelected,
  onClick,
  onRemove,
  showProgress,
}) {
  const avatar = [...AVATARS.adults, ...AVATARS.kids].find(a => a.id === member.avatar);
  const points = useMemo(() => {
    let pts = member.progress.surahsRead.length * 5 + member.progress.streak * 2;
    member.achievements.forEach(achId => {
      const ach = ACHIEVEMENTS[achId];
      if (ach) pts += ach.points;
    });
    return pts;
  }, [member]);

  return (
    <div
      onClick={() => onClick && onClick(member)}
      className={`p-4 rounded-xl transition-all cursor-pointer ${
        isSelected
          ? 'bg-white/20 ring-2 ring-cyan-500/50'
          : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl">{avatar?.emoji || '👤'}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{member.name}</span>
            {member.isKid && (
              <span className="px-2 py-0.5 rounded-full bg-pink-500/30 text-pink-400 text-xs">
                Kid
              </span>
            )}
          </div>
          {showProgress && (
            <div className="flex items-center gap-3 mt-1 text-sm">
              <span className="text-amber-400">{points} pts</span>
              <span className="text-white/40">|</span>
              <span className="text-white/60">{member.progress.streak} day streak</span>
            </div>
          )}
        </div>
        {onRemove && (
          <button
            onClick={(e) => { e.stopPropagation(); onRemove(member.id); }}
            className="p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-red-400"
          >
            <Icons.X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showProgress && member.achievements.length > 0 && (
        <div className="flex gap-1 mt-3">
          {member.achievements.slice(0, 4).map(achId => {
            const ach = ACHIEVEMENTS[achId];
            const Icon = Icons[ach?.icon] || Icons.Award;
            return (
              <div
                key={achId}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${ach?.color}30` }}
                title={ach?.name}
              >
                <Icon className="w-4 h-4" style={{ color: ach?.color }} />
              </div>
            );
          })}
          {member.achievements.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white/60 text-xs">+{member.achievements.length - 4}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

// Add Member Form
const AddMemberForm = memo(function AddMemberForm({ onAdd, onCancel }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isKid, setIsKid] = useState(false);
  const [avatar, setAvatar] = useState('man1');

  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;
    onAdd({
      name: name.trim(),
      age: parseInt(age) || null,
      isKid,
      avatar,
    });
  }, [name, age, isKid, avatar, onAdd]);

  useEffect(() => {
    // Auto-select appropriate avatar type
    setAvatar(isKid ? 'boy1' : 'man1');
  }, [isKid]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Family member name"
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">Age (optional)</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            min="1"
            max="120"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50"
          />
        </div>

        <div className="flex-1">
          <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">Type</label>
          <div className="flex gap-2">
            <button
              onClick={() => setIsKid(false)}
              className={`flex-1 py-3 rounded-xl transition-all ${
                !isKid ? 'bg-cyan-500/30 text-white ring-2 ring-cyan-500/50' : 'bg-white/5 text-white/60'
              }`}
            >
              Adult
            </button>
            <button
              onClick={() => setIsKid(true)}
              className={`flex-1 py-3 rounded-xl transition-all ${
                isKid ? 'bg-pink-500/30 text-white ring-2 ring-pink-500/50' : 'bg-white/5 text-white/60'
              }`}
            >
              Kid
            </button>
          </div>
        </div>
      </div>

      <div>
        <label className="text-white/60 text-xs uppercase tracking-wide mb-2 block">Avatar</label>
        <AvatarSelector isKid={isKid} selectedAvatar={avatar} onSelect={setAvatar} />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onCancel}
          className="flex-1 py-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          disabled={!name.trim()}
          className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium disabled:opacity-50"
        >
          Add Member
        </button>
      </div>
    </div>
  );
});

// Leaderboard Component
const Leaderboard = memo(function Leaderboard({ members }) {
  const leaderboard = useMemo(() => getFamilyLeaderboard(), [members]);

  return (
    <div className="space-y-3">
      {leaderboard.map((member, index) => {
        const avatar = [...AVATARS.adults, ...AVATARS.kids].find(a => a.id === member.avatar);
        const medals = ['🥇', '🥈', '🥉'];

        return (
          <div
            key={member.id}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              index === 0 ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30' :
              index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-500/20 border border-gray-400/30' :
              index === 2 ? 'bg-gradient-to-r from-orange-700/20 to-orange-800/20 border border-orange-700/30' :
              'bg-white/5 border border-white/10'
            }`}
          >
            <div className="w-8 text-center">
              {index < 3 ? (
                <span className="text-2xl">{medals[index]}</span>
              ) : (
                <span className="text-white/40 font-bold">{index + 1}</span>
              )}
            </div>
            <div className="text-2xl">{avatar?.emoji || '👤'}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">{member.name}</span>
                {member.isKid && (
                  <span className="text-pink-400 text-xs">👶</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-xs text-white/50">
                <span>{member.surahsRead} surahs</span>
                <span>{member.streak} day streak</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-amber-400 font-bold text-lg">{member.points}</p>
              <p className="text-white/40 text-xs">points</p>
            </div>
          </div>
        );
      })}
    </div>
  );
});

// Achievements Gallery
const AchievementsGallery = memo(function AchievementsGallery({ earnedAchievements }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.values(ACHIEVEMENTS).map((ach) => {
        const Icon = Icons[ach.icon] || Icons.Award;
        const isEarned = earnedAchievements.includes(ach.id);

        return (
          <div
            key={ach.id}
            className={`p-4 rounded-xl transition-all ${
              isEarned
                ? 'bg-white/10 border border-white/20'
                : 'bg-white/5 border border-white/5 opacity-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isEarned ? '' : 'grayscale'
                }`}
                style={{ backgroundColor: `${ach.color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color: isEarned ? ach.color : '#666' }} />
              </div>
              <div>
                <p className={`font-medium ${isEarned ? 'text-white' : 'text-white/40'}`}>
                  {ach.name}
                </p>
                <p className="text-white/40 text-xs">{ach.points} pts</p>
              </div>
            </div>
            <p className="text-white/50 text-xs mt-2">{ach.description}</p>
          </div>
        );
      })}
    </div>
  );
});

// Main Component
const FamilyCircle = memo(function FamilyCircle({
  isVisible,
  onClose,
  onNavigateToSurah,
}) {
  const [familyData, setFamilyData] = useState(null);
  const [view, setView] = useState('members'); // 'members' | 'leaderboard' | 'achievements' | 'add'
  const [selectedMember, setSelectedMember] = useState(null);

  // Load family data
  useEffect(() => {
    if (isVisible) {
      const data = getFamilyData();
      if (!data.familyId) {
        // Create a new family if none exists
        const newFamily = createFamily('My Family');
        setFamilyData(newFamily);
      } else {
        setFamilyData(data);
      }
    }
  }, [isVisible]);

  const handleAddMember = useCallback((memberData) => {
    const member = addFamilyMember(memberData);
    setFamilyData(getFamilyData());
    setView('members');
  }, []);

  const handleRemoveMember = useCallback((memberId) => {
    removeFamilyMember(memberId);
    setFamilyData(getFamilyData());
  }, []);

  const handleSelectMember = useCallback((member) => {
    setSelectedMember(member.id === selectedMember?.id ? null : member);
  }, [selectedMember]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'bubblePopIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Header */}
        <div className="flex-shrink-0 p-6 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <Icons.Family className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Family Circle</h2>
                <p className="text-white/60 text-sm">
                  {familyData?.members?.length || 0} members
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-all"
            >
              <Icons.X className="w-6 h-6 text-white/70" />
            </button>
          </div>

          {/* View Tabs */}
          <div className="flex gap-2">
            {[
              { id: 'members', icon: 'Users', label: 'Members' },
              { id: 'leaderboard', icon: 'Trophy', label: 'Leaderboard' },
              { id: 'achievements', icon: 'Award', label: 'Badges' },
            ].map((tab) => {
              const Icon = Icons[tab.icon];
              return (
                <button
                  key={tab.id}
                  onClick={() => setView(tab.id)}
                  className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                    view === tab.id
                      ? 'bg-white/20 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {view === 'add' ? (
            <AddMemberForm
              onAdd={handleAddMember}
              onCancel={() => setView('members')}
            />
          ) : view === 'members' ? (
            <div className="space-y-4">
              {/* Add member button */}
              <button
                onClick={() => setView('add')}
                className="w-full p-4 rounded-xl border-2 border-dashed border-white/20 hover:border-white/40 transition-colors flex items-center justify-center gap-2 text-white/60 hover:text-white"
              >
                <Icons.Plus className="w-5 h-5" />
                Add Family Member
              </button>

              {/* Members list */}
              {familyData?.members?.length > 0 ? (
                <div className="space-y-3">
                  {familyData.members.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      isSelected={selectedMember?.id === member.id}
                      onClick={handleSelectMember}
                      onRemove={handleRemoveMember}
                      showProgress={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icons.Users className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p className="text-white/60">No family members yet</p>
                  <p className="text-white/40 text-sm mt-1">Add members to start tracking together</p>
                </div>
              )}
            </div>
          ) : view === 'leaderboard' ? (
            familyData?.members?.length > 0 ? (
              <Leaderboard members={familyData.members} />
            ) : (
              <div className="text-center py-12">
                <Icons.Trophy className="w-12 h-12 text-white/20 mx-auto mb-4" />
                <p className="text-white/60">Add family members to see the leaderboard</p>
              </div>
            )
          ) : view === 'achievements' ? (
            <AchievementsGallery
              earnedAchievements={
                selectedMember?.achievements ||
                (familyData?.members?.flatMap(m => m.achievements) || [])
              }
            />
          ) : null}
        </div>

        {/* Selected member details */}
        {selectedMember && view === 'members' && (
          <div className="flex-shrink-0 p-4 border-t border-white/10 bg-white/5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">{selectedMember.name}'s Progress</p>
                <p className="text-white/60 text-sm">
                  {selectedMember.progress.surahsRead.length} surahs read
                </p>
              </div>
              <button
                onClick={() => {
                  // Navigate to a recommended surah for this member
                  const unread = SURAHS.filter(s => !selectedMember.progress.surahsRead.includes(s.id));
                  const next = unread[0] || SURAHS[0];
                  onNavigateToSurah && onNavigateToSurah(next.id);
                  onClose();
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium"
              >
                Continue Reading
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default FamilyCircle;
