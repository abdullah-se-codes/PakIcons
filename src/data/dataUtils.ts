import { Personality, CategoryType, Milestone, Award, AIPrecomputedData } from '../types';

export function createPersonality(data: {
  id: string;
  name: string;
  urduName?: string;
  title: string;
  category: CategoryType;
  lifespan: string;
  birthPlace: string;
  image: string;
  featuredQuote: string;
  shortDescription: string;
  fullBio: string;
  impactDomain: 'Global' | 'National' | 'Regional';
  tags: string[];
  keyContributions: string[];
  milestones?: Milestone[];
  awards?: Award[];
  customAiData?: Partial<AIPrecomputedData>;
}): Personality {
  const milestones: Milestone[] = data.milestones || [
    { year: data.lifespan.split('–')[0].trim(), title: 'Early Life & Heritage', description: `Born in ${data.birthPlace}, showing early dedication and talent in ${data.category}.` },
    { year: 'Mid Career', title: 'National Prominence', description: `Achieved historic breakthroughs and earned widespread acclaim in ${data.category}.` },
    { year: 'Legacy', title: 'Enduring Impact', description: `Remembered across Pakistan and globally as a pillar of excellence and inspiration.` }
  ];

  const awards: Award[] = data.awards || [
    { year: 'National Honor', title: 'State Commendation', organization: 'Government of Pakistan', description: 'Awarded for extraordinary service to the nation.' }
  ];

  const defaultAiSummary = `${data.name} is a monumental figure in Pakistan's history, recognized globally for groundbreaking achievements in ${data.category}. ${data.shortDescription}`;

  const defaultAiData: AIPrecomputedData = {
    summary: data.customAiData?.summary || defaultAiSummary,
    examNotes: data.customAiData?.examNotes || {
      overview: `${data.name} (${data.lifespan}) played a critical role in ${data.category}. Key study points include major awards and core historical achievements.`,
      keyAchievements: data.keyContributions,
      importantDates: milestones.map(m => ({ date: m.year, event: m.title })),
      examTips: [
        `Remember the primary title: "${data.title}"`,
        `Focus on their core achievement: ${data.keyContributions[0] || data.shortDescription}`,
        `Note their impact domain: ${data.impactDomain}`
      ]
    },
    childStory: data.customAiData?.childStory || {
      title: `The Story of ${data.name}`,
      story: `Once upon a time in ${data.birthPlace}, a young child named ${data.name} dreamed of making the world a better place. Through hard work, courage, and honesty, ${data.name} became a legendary hero of Pakistan!`,
      moralLesson: `Hard work and dedication can help you achieve any great goal.`
    },
    quiz: data.customAiData?.quiz || [
      {
        id: 1,
        question: `What field is ${data.name} famous for?`,
        options: [data.category, 'Aviation', 'Architecture', 'Sculpting'],
        correctAnswer: 0,
        explanation: `${data.name} is renowned as a key icon in ${data.category}.`
      },
      {
        id: 2,
        question: `Where was ${data.name} born?`,
        options: [data.birthPlace, 'London', 'Cairo', 'Istanbul'],
        correctAnswer: 0,
        explanation: `${data.name} was born in ${data.birthPlace}.`
      }
    ]
  };

  return {
    id: data.id,
    name: data.name,
    urduName: data.urduName,
    title: data.title,
    category: data.category,
    lifespan: data.lifespan,
    birthPlace: data.birthPlace,
    image: data.image,
    featuredQuote: data.featuredQuote,
    shortDescription: data.shortDescription,
    fullBio: data.fullBio,
    impactDomain: data.impactDomain,
    tags: data.tags,
    keyContributions: data.keyContributions,
    milestones,
    awards,
    aiData: defaultAiData
  };
}
