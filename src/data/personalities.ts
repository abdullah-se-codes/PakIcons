import { CategoryType, Personality } from '../types';
import { MILITARY_HEROES } from './military';
import { SPORTS_CHAMPIONS } from './sports';
import { SCIENTISTS_AND_DOCTORS } from './scientists';
import { LEADERS_AND_SOCIAL } from './leaders';
import { CULTURE_AND_ARTS } from './culture';
import { MORE_ICONS } from './moreIcons';

export interface CategoryMeta {
  name: CategoryType;
  iconName: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { name: 'Scientists', iconName: 'Atom', description: 'Physicists, chemists, & research pioneers' },
  { name: 'Doctors', iconName: 'Stethoscope', description: 'Healers, surgeons, & medical visionaries' },
  { name: 'Engineers & Tech', iconName: 'Cpu', description: 'Innovators, nuclear scientists, & digital pioneers' },
  { name: 'Entrepreneurs', iconName: 'Briefcase', description: 'Industrialists, business leaders, & founders' },
  { name: 'Sports Champions', iconName: 'Trophy', description: 'Olympic medalists, squash icons, & cricket legends' },
  { name: 'Writers & Poets', iconName: 'BookOpen', description: 'Poets, novelists, & master literary figures' },
  { name: 'Artists & Musicians', iconName: 'Palette', description: 'Qawwali legends, painters, & cinema directors' },
  { name: 'Military Heroes', iconName: 'Shield', description: 'Nishan-e-Haider recipients & air aces' },
  { name: 'Social Workers', iconName: 'HeartHandshake', description: 'Humanitarians, philanthropists, & shelter founders' },
  { name: 'Leaders & Activists', iconName: 'Feather', description: 'Founding fathers, human rights defenders, & reformists' }
];

function getBirthYear(lifespan: string): number {
  const match = lifespan.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : 1950;
}

const rawPersonalities: Personality[] = [
  ...LEADERS_AND_SOCIAL,
  ...MILITARY_HEROES,
  ...SCIENTISTS_AND_DOCTORS,
  ...SPORTS_CHAMPIONS,
  ...CULTURE_AND_ARTS,
  ...MORE_ICONS
];

// Strict deduplication by ID and normalized name
const seenIds = new Set<string>();
const seenNames = new Set<string>();

const uniquePersonalities: Personality[] = [];

for (const p of rawPersonalities) {
  const normName = p.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!seenIds.has(p.id) && !seenNames.has(normName)) {
    seenIds.add(p.id);
    seenNames.add(normName);
    uniquePersonalities.push(p);
  }
}

export const PERSONALITIES: Personality[] = [...uniquePersonalities].sort(
  (a, b) => getBirthYear(a.lifespan) - getBirthYear(b.lifespan)
);
