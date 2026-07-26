import { Personality, CategoryType, Milestone, Award, AIPrecomputedData } from '../types';

function buildPersonalizedChildStory(data: {
  name: string;
  title: string;
  category: CategoryType;
  birthPlace: string;
  shortDescription: string;
  keyContributions: string[];
  featuredQuote: string;
}) {
  let story = '';
  let moralLesson = '';

  const primaryContrib = data.keyContributions[0] || data.shortDescription;

  if (data.category === 'Military Heroes') {
    story = `Long ago in ${data.birthPlace}, a brave soul named ${data.name} grew up with a deep passion to protect others. Known as "${data.title}", ${data.name} stood strong in moments of immense trial. Demonstrating supreme courage, ${data.name} made an unforgettable contribution by ${primaryContrib.toLowerCase()}. Through this selfless devotion and bravery, ${data.name} saved lives and became a cherished national hero of Pakistan.`;
    moralLesson = `True courage means standing up to protect others with bravery and selflessness.`;
  } else if (data.category === 'Sports Champions') {
    story = `In ${data.birthPlace}, young ${data.name} loved sports and dreamed of reaching the highest peaks. Through tireless daily practice, perseverance, and unbreakable focus, ${data.name} earned the title "${data.title}". Facing the best competitors in the world, ${data.name} achieved historic glory by ${primaryContrib.toLowerCase()}, raising Pakistan's green flag high on global podiums.`;
    moralLesson = `With passion, hard work, and discipline, you can achieve greatness and make your nation proud.`;
  } else if (data.category === 'Scientists' || data.category === 'Doctors' || data.category === 'Engineers & Tech') {
    story = `Growing up in ${data.birthPlace}, young ${data.name} was always curious, asking big questions and exploring how things work. Recognized as "${data.title}", ${data.name} worked with relentless dedication in research and learning. Through brilliant discovery, ${data.name} made monumental breakthroughs by ${primaryContrib.toLowerCase()}, showing young minds that knowledge can transform the world.`;
    moralLesson = `Curiosity, learning, and hard work can unlock the greatest mysteries and help humanity.`;
  } else if (data.category === 'Leaders & Activists') {
    story = `Born in ${data.birthPlace}, ${data.name} grew up with a noble vision of justice, dignity, and unity for all people. Revered as "${data.title}", ${data.name} led with honesty and unwavering purpose. By ${primaryContrib.toLowerCase()}, ${data.name} helped lay the foundation of Pakistan, leaving an enduring legacy of freedom, unity, and hope.`;
    moralLesson = `Honesty, unity, and visionary leadership can build a brighter future for millions.`;
  } else if (data.category === 'Social Workers') {
    story = `In ${data.birthPlace}, ${data.name} looked around and saw people in need of healing, shelter, and hope. Guided by deep love and compassion, ${data.name} became known as "${data.title}". Day and night, ${data.name} served humanity by ${primaryContrib.toLowerCase()}, proving that helping others is the highest purpose in life.`;
    moralLesson = `Selfless kindness and helping those in need brings true joy and lasting peace to the world.`;
  } else {
    story = `In the vibrant city of ${data.birthPlace}, ${data.name} discovered a magical gift for creative expression and wisdom. Celebrated as "${data.title}", ${data.name} created works that touched millions of hearts by ${primaryContrib.toLowerCase()}. ${data.name}'s legacy continues to inspire dreamers and thinkers across Pakistan and beyond.`;
    moralLesson = `Sharing your talents with sincerity and passion can touch hearts and inspire generations.`;
  }

  return {
    title: `The Story of ${data.name}`,
    story,
    moralLesson
  };
}

function buildPersonalizedQuiz(data: {
  name: string;
  title: string;
  category: CategoryType;
  birthPlace: string;
  shortDescription: string;
  keyContributions: string[];
  featuredQuote: string;
  awards?: Award[];
}) {
  const primaryContrib = data.keyContributions[0] || data.shortDescription;
  const secondaryContrib = data.keyContributions[1] || `Key figure in ${data.category}`;
  const topAward = data.awards?.[0]?.title || 'State Commendation & National Honor';

  return [
    {
      id: 1,
      question: `What primary title or honor is ${data.name} celebrated for in Pakistan?`,
      options: [
        data.title,
        `Chief Pioneer of Modern Maritime Trade`,
        `Governor of Central Treasury`,
        `Master Architect of Central Asia`
      ],
      correctAnswer: 0,
      explanation: `${data.name} is celebrated across Pakistan as "${data.title}".`
    },
    {
      id: 2,
      question: `Which key achievement or contribution is directly attributed to ${data.name}?`,
      options: [
        primaryContrib,
        `Drafting the 1909 Maritime Navigation Treaty`,
        `Constructing South Asia's first telegraph network`,
        `Authoring the 1850 Agricultural Reform Code`
      ],
      correctAnswer: 0,
      explanation: `${data.name} achieved national prominence for: ${primaryContrib}.`
    },
    {
      id: 3,
      question: `In which city or region was ${data.name} born?`,
      options: [
        data.birthPlace,
        data.birthPlace.includes('Karachi') ? 'Lahore, Punjab' : 'Karachi, Sindh',
        data.birthPlace.includes('Peshawar') ? 'Quetta, Balochistan' : 'Peshawar, Khyber Pakhtunkhwa',
        'London, United Kingdom'
      ],
      correctAnswer: 0,
      explanation: `${data.name} was born in ${data.birthPlace}.`
    },
    {
      id: 4,
      question: `Which famous quote reflects the core philosophy and spirit of ${data.name}?`,
      options: [
        `"${data.featuredQuote}"`,
        `"Peace can only be sustained through total isolation."`,
        `"Commerce is the sole metric of human progress."`,
        `"History belongs strictly to those who conquer territory."`
      ],
      correctAnswer: 0,
      explanation: `"${data.featuredQuote}" expresses the central principles of ${data.name}.`
    },
    {
      id: 5,
      question: `Which prestigious recognition or impact domain highlights the legacy of ${data.name}?`,
      options: [
        `${topAward} (${secondaryContrib})`,
        `Medal of Commercial Expansion`,
        `Order of Maritime Navigation`,
        `Cross of Industrial Automation`
      ],
      correctAnswer: 0,
      explanation: `${data.name}'s enduring legacy is recognized through ${topAward} in ${data.category}.`
    }
  ];
}

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

  const generatedChildStory = buildPersonalizedChildStory(data);
  const generatedQuiz = buildPersonalizedQuiz(data);

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
    childStory: data.customAiData?.childStory || generatedChildStory,
    quiz: data.customAiData?.quiz || generatedQuiz
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

