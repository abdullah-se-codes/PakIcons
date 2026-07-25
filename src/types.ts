export type CategoryType = 
  | 'Scientists'
  | 'Doctors'
  | 'Engineers & Tech'
  | 'Entrepreneurs'
  | 'Sports Champions'
  | 'Writers & Poets'
  | 'Artists & Musicians'
  | 'Military Heroes'
  | 'Social Workers'
  | 'Leaders & Activists';

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  description?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-3
  explanation: string;
}

export interface AIPrecomputedData {
  summary: string;
  examNotes: {
    overview: string;
    keyAchievements: string[];
    importantDates: { date: string; event: string }[];
    examTips: string[];
  };
  childStory: {
    title: string;
    story: string;
    moralLesson: string;
  };
  quiz: QuizQuestion[];
}

export interface Personality {
  id: string;
  name: string;
  urduName?: string;
  title: string; // e.g. "Nobel Laureate in Physics", "Nishan-e-Haider Recipient"
  category: CategoryType;
  lifespan: string; // e.g. "1926 – 1996"
  birthPlace: string;
  image: string;
  featuredQuote: string;
  shortDescription: string;
  fullBio: string;
  impactDomain: 'Global' | 'National' | 'Regional';
  tags: string[];
  milestones: Milestone[];
  awards: Award[];
  keyContributions: string[];
  aiData: AIPrecomputedData;
}

export interface CategoryInfo {
  name: CategoryType;
  iconName: string;
  description: string;
  color: string;
}
