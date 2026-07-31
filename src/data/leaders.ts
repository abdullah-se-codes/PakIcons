import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const LEADERS_AND_SOCIAL: Personality[] = [
  createPersonality({
    id: 'jinnah',
    name: 'Quaid-e-Azam Muhammad Ali Jinnah',
    urduName: 'قائد اعظم محمد علی جناح',
    title: 'Father of the Nation (Founder of Pakistan)',
    category: 'Leaders & Activists',
    lifespan: '1876 – 1948',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.',
    shortDescription: 'Lawyer, statesman, and founder of Pakistan who led the independence movement with unyielding resolve and constitutional brilliance.',
    fullBio: 'Muhammad Ali Jinnah was a brilliant barrister, politician, and the founder of Pakistan. Known as Quaid-e-Azam ("Great Leader"), he served as leader of the All-India Muslim League from 1913 until Pakistan\'s independence on August 14, 1947, becoming the nation\'s first Governor-General.',
    impactDomain: 'Global',
    tags: ['Founder of Pakistan', 'Quaid-e-Azam', 'Father of Nation', 'Karachi', 'Barrister'],
    keyContributions: [
      'Founded the sovereign state of Pakistan on August 14, 1947',
      'First Governor-General of Pakistan',
      'United the Muslim population of South Asia through constitutional law'
    ],
    milestones: [
      { year: '1876', title: 'Birth in Karachi', description: 'Born in Wazir Mansion, Karachi, embarking on an early journey of law and education.' },
      { year: '1896', title: 'Called to the Bar at Lincoln\'s Inn', description: 'Became the youngest Indian student admitted to Lincoln\'s Inn in London to practice law.' },
      { year: '1913', title: 'Joined All-India Muslim League', description: 'Assumed pivotal leadership in advocating constitutional rights for South Asian Muslims.' },
      { year: '1940', title: 'Historic Lahore Resolution', description: 'Presided over the Lahore Session demanding an independent sovereign state for Muslims.' },
      { year: '1947', title: 'Independence & First Governor-General', description: 'Founded Pakistan on August 14, 1947, taking oath as the nation\'s first Governor-General.' }
    ],
    awards: [{ year: '1947', title: 'Father of the Nation', organization: 'Nation of Pakistan' }]
  }),

  createPersonality({
    id: 'fatima-jinnah',
    name: 'Mohtarma Fatima Jinnah',
    urduName: 'محترمہ فاطمہ جناح',
    title: 'Madar-e-Millat (Mother of the Nation)',
    category: 'Leaders & Activists',
    lifespan: '1893 – 1967',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The women of Pakistan are the pillars of our democratic resilience.',
    shortDescription: 'Dental surgeon, statesman, and younger sister of Quaid-e-Azam who co-founded the All Pakistan Women\'s Association.',
    fullBio: 'Fatima Jinnah was a dental surgeon, politician, and key figure in the Pakistan Movement. Known affectionately as Madar-e-Millat ("Mother of the Nation"), she was a fierce advocate for women\'s rights, education, and civil liberties, challenging military rule in the 1965 presidential election.',
    impactDomain: 'National',
    tags: ['Madar-e-Millat', 'Dental Surgeon', 'Women Rights', 'Karachi', 'Democracy'],
    keyContributions: [
      'Co-founded All Pakistan Women\'s Association (APWA)',
      'Key strategist alongside Muhammad Ali Jinnah during the Pakistan Movement',
      'Challenged military dictatorship in the 1965 presidential elections'
    ],
    milestones: [
      { year: '1893', title: 'Birth in Karachi', description: 'Born in Karachi, growing up with a passion for education and social empowerment.' },
      { year: '1923', title: 'Dental Surgery Pioneer', description: 'Graduated from Dr. R. Ahmed Dental College in Calcutta, opening a clinic in Bombay.' },
      { year: '1947', title: 'Co-Founded APWA & Refugee Relief', description: 'Established All Pakistan Women\'s Association to spearhead post-independence rehabilitation.' },
      { year: '1965', title: 'Presidential Democratic Campaign', description: 'Stood as joint opposition candidate demanding restoration of democratic freedoms.' },
      { year: '1967', title: 'Enduring Legacy as Madar-e-Millat', description: 'Passed away in Karachi, revered universally as the Mother of the Nation.' }
    ]
  }),

  createPersonality({
    id: 'allama-iqbal',
    name: 'Dr. Allama Muhammad Iqbal',
    urduName: 'علامہ محمد اقبال',
    title: 'Poet of the East & Visionary Philosopher',
    category: 'Leaders & Activists',
    lifespan: '1877 – 1938',
    birthPlace: 'Sialkot, Punjab',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Raise yourself to such heights that before every decree, God asks you: What is your wish?',
    shortDescription: 'Philosopher, lawyer, and spiritual father of Pakistan who proposed the concept of a separate Muslim homeland in his 1930 Allahabad Address.',
    fullBio: 'Dr. Sir Muhammad Iqbal was a philosopher, barrister, and poet known as Mufakkir-e-Pakistan ("The Thinker of Pakistan") and Shair-e-Mashriq ("Poet of the East"). His philosophical poetry in Persian and Urdu inspired self-realization (Khudi), and his 1930 Allahabad Address laid the ideological foundation for Pakistan.',
    impactDomain: 'Global',
    tags: ['Poet of the East', 'Mufakkir-e-Pakistan', 'Khudi', 'Allahabad Address', 'Sialkot'],
    keyContributions: [
      'Delivered 1930 Allahabad Address articulating the two-nation concept',
      'Authored timeless poetry books Bang-e-Dra, Bal-e-Jibril, Zarb-e-Kaleem, Asrar-e-Khudi',
      'Knighted by the British Crown in 1923 for literary greatness'
    ],
    milestones: [
      { year: '1877', title: 'Birth in Sialkot', description: 'Born in Sialkot, immersing early in Islamic literature, Arabic, and Persian poetry.' },
      { year: '1908', title: 'PhD from Munich & Bar at Lincoln\'s Inn', description: 'Completed doctoral thesis on Persian metaphysics and called to the Bar in London.' },
      { year: '1923', title: 'Knighted for Poetic Mastery', description: 'Knighted by the British Crown in recognition of extraordinary philosophical poetry.' },
      { year: '1930', title: 'Historic Allahabad Address', description: 'Articulated the definitive vision for a separate independent Muslim homeland in South Asia.' },
      { year: '1938', title: 'Spiritual Legacy', description: 'Passed away in Lahore, leaving timeless poetic masterpieces Bang-e-Dra and Bal-e-Jibril.' }
    ]
  }),

  createPersonality({
    id: 'abdul-sattar-edhi',
    name: 'Abdul Sattar Edhi',
    urduName: 'عبدالستار ایدھی',
    title: 'Angel of Mercy & Founder of Edhi Foundation',
    category: 'Social Workers',
    lifespan: '1928 – 2016',
    birthPlace: 'Bantva, Gujarat / Karachi',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'My religion is humanitarianism, which is the basis of every religion in the world.',
    shortDescription: 'Legendary humanitarian who built the world\'s largest volunteer ambulance network and rescued over 20,000 abandoned babies.',
    fullBio: 'Abdul Sattar Edhi was a world-renowned humanitarian and philanthropist who operated the Edhi Foundation for over six decades. Living in extreme simplicity with just two pairs of clothes, he created the world\'s largest volunteer ambulance service, orphanages, clinics, and animal shelters.',
    impactDomain: 'Global',
    tags: ['Edhi Foundation', 'Ambulance Network', 'Humanitarian', 'Karachi', 'Angel of Mercy'],
    keyContributions: [
      'Created the world\'s largest volunteer ambulance service (Guinness World Record)',
      'Rescued and placed over 20,000 abandoned infants via cradle drop boxes',
      'Lenin Peace Prize and Ramon Magsaysay Award recipient'
    ],
    milestones: [
      { year: '1928', title: 'Birth in Bantva', description: 'Born in Gujarat, learning compassion from caring for his paralyzed mother.' },
      { year: '1951', title: 'First Free Dispensary & Old Van', description: 'Purchased a small van in Karachi, launching a single-handed emergency care operation.' },
      { year: '1980', title: 'Cradle Movement & Orphan Network', description: 'Placed Jhoolas (cradles) outside Edhi centers, rescuing over 20,000 infants.' },
      { year: '1989', title: 'Conferred Nishan-e-Imtiaz', description: 'Awarded Pakistan\'s highest civilian honor for building the world\'s largest ambulance fleet.' },
      { year: '2016', title: 'State Funeral & Global Honor', description: 'Passed away in Karachi, honored with a rare state funeral for unparalleled humanitarianism.' }
    ],
    awards: [{ year: '1989', title: 'Nishan-e-Imtiaz', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'bilquis-edhi',
    name: 'Bilquis Bano Edhi',
    urduName: ' بلقیس ایدھی',
    title: 'Mother to Millions & Philanthropist',
    category: 'Social Workers',
    lifespan: '1947 – 2022',
    birthPlace: 'Bantva, Gujarat / Karachi',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'An orphan child needs warmth and a safe lap before anything else.',
    shortDescription: 'Professional nurse and philanthropist who co-managed the Edhi Foundation and placed over 20,000 orphan children into loving homes.',
    fullBio: 'Bilquis Bano Edhi was a humanitarian nurse and wife of Abdul Sattar Edhi. Known as the "Mother to Millions," she oversaw the Edhi home placement services, adoption networks, and women shelter homes across Pakistan.',
    impactDomain: 'Global',
    tags: ['Edhi Foundation', 'Ramon Magsaysay', 'Mother to Millions', 'Karachi'],
    keyContributions: [
      'Managed adoption services for over 20,000 orphaned children',
      'Ramon Magsaysay Award Laureate (1986)',
      'Mother Teresa Memorial International Award (2015)'
    ]
  }),

  createPersonality({
    id: 'malala-yousafzai',
    name: 'Malala Yousafzai',
    urduName: 'ملالہ یوسفزئی',
    title: 'Youngest Nobel Peace Prize Laureate (2014)',
    category: 'Leaders & Activists',
    lifespan: '1997 – Present',
    birthPlace: 'Mingora, Swat, KPK',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'One child, one teacher, one book, and one pen can change the world.',
    shortDescription: 'Education activist from Swat who survived a Taliban attack and became the youngest Nobel Peace Prize winner in history at age 17.',
    fullBio: 'Malala Yousafzai is a global advocate for female education. Born in Swat Valley, she began blogging for BBC Urdu under a pseudonym at age 11 detailing life under Taliban rule. In 2014, she became the youngest Nobel Peace Prize laureate at age 17.',
    impactDomain: 'Global',
    tags: ['Nobel Peace Prize', 'Malala Fund', 'Swat Valley', 'Girls Education', 'Oxford Graduate'],
    keyContributions: [
      'Youngest Nobel Peace Prize Laureate in history (2014)',
      'Co-founded Malala Fund investing millions in girls education worldwide',
      'Graduated from Oxford University in Philosophy, Politics and Economics (PPE)'
    ],
    awards: [{ year: '2014', title: 'Nobel Peace Prize', organization: 'Nobel Committee' }]
  }),

  createPersonality({
    id: 'asma-jahangir',
    name: 'Asma Jahangir',
    urduName: 'عاصمہ جہانگیر',
    title: 'Human Rights Champion & UN Special Rapporteur',
    category: 'Leaders & Activists',
    lifespan: '1952 – 2018',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Rights are not given; they are fought for and won.',
    shortDescription: 'Fearless lawyer and activist who co-founded Human Rights Commission of Pakistan (HRCP) and served as UN Special Rapporteur.',
    fullBio: 'Asma Jahangir was Pakistan\'s foremost human rights lawyer and democracy advocate. She co-founded the Human Rights Commission of Pakistan (HRCP) and AGHS Legal Aid Cell, serving as UN Special Rapporteur on Freedom of Religion and Extrajudicial Executions.',
    impactDomain: 'Global',
    tags: ['Human Rights', 'HRCP', 'UN Rapporteur', 'Supreme Court Bar', 'Lahore'],
    keyContributions: [
      'Co-founded Human Rights Commission of Pakistan (HRCP)',
      'First female President of the Supreme Court Bar Association of Pakistan',
      'Right Livelihood Award and UN Human Rights Prize recipient'
    ]
  }),

  createPersonality({
    id: 'hakim-said',
    name: 'Hakim Muhammad Said',
    urduName: 'حکیم محمد سعید',
    title: 'Founder of Hamdard Laboratories & Madinat al-Hikmah',
    category: 'Social Workers',
    lifespan: '1920 – 1998',
    birthPlace: 'Delhi, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Love for books and health elevates human civilization.',
    shortDescription: 'Eastern medicine scholar, former Governor of Sindh, and founder of Hamdard Pakistan and Naunehal children movement.',
    fullBio: 'Hakim Muhammad Said was an eminent scholar of Unani medicine, philanthropist, and former Governor of Sindh. He established Hamdard Laboratories Pakistan, Madinat al-Hikmah (City of Education), and authored hundreds of books for children.',
    impactDomain: 'National',
    tags: ['Hamdard', 'Madinat al-Hikmah', 'Unani Medicine', 'Naunehal', 'Karachi'],
    keyContributions: [
      'Founded Hamdard Foundation Pakistan and Madinat al-Hikmah university city',
      'Pioneered herbal Unani medicine standardization across South Asia',
      'Nishan-e-Imtiaz laureate'
    ]
  }),

  createPersonality({
    id: 'shahid-khan',
    name: 'Shahid Khan',
    urduName: 'شاہد خان',
    title: 'Global Industrialist & NFL Team Owner',
    category: 'Entrepreneurs',
    lifespan: '1950 – Present',
    birthPlace: 'Lahore, Punjab / USA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The American Dream is powered by relentless work and self-belief.',
    shortDescription: 'Lahore-born billionaire business tycoon who owns Flex-N-Gate, NFL team Jacksonville Jaguars, and Fulham FC.',
    fullBio: 'Shahid Khan is a Pakistani-American billionaire businessman. Born in Lahore, he moved to the US at age 16 with $500. He built automotive giant Flex-N-Gate, and acquired NFL franchise Jacksonville Jaguars and English Premier League club Fulham FC.',
    impactDomain: 'Global',
    tags: ['Billionaire', 'Flex-N-Gate', 'NFL Owner', 'Fulham FC', 'Lahore'],
    keyContributions: [
      'Owner of automotive manufacturing giant Flex-N-Gate',
      'Owner of NFL franchise Jacksonville Jaguars & Fulham FC',
      'Major philanthropist for engineering education at University of Illinois'
    ]
  }),

  createPersonality({
    id: 'syed-babar-ali',
    name: 'Syed Babar Ali',
    urduName: 'سید بابر علی',
    title: 'Industrialist & Founder of LUMS University',
    category: 'Entrepreneurs',
    lifespan: '1926 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Investing in world-class education builds the future of Pakistan.',
    shortDescription: 'Industrial titan who founded Packages Limited, MilkPak (Nestlé Pakistan), and co-founded LUMS University.',
    fullBio: 'Syed Babar Ali is a visionary business leader, education advocate, and former Finance Minister. He established Packages Limited, MilkPak (now Nestlé Pakistan), and co-founded Lahore University of Management Sciences (LUMS).',
    impactDomain: 'National',
    tags: ['LUMS', 'Packages Ltd', 'Nestle Pakistan', 'Industrialist', 'Lahore'],
    keyContributions: [
      'Co-founded Lahore University of Management Sciences (LUMS)',
      'Founded Packages Limited and MilkPak (Nestlé Pakistan)',
      'President of WWF International (1996–1999)'
    ]
  }),

  createPersonality({
    id: 'liaquat-ali-khan',
    name: 'Liaquat Ali Khan',
    urduName: 'لیاقت علی خان',
    title: 'Quaid-e-Millat (First Prime Minister of Pakistan)',
    category: 'Leaders & Activists',
    lifespan: '1895 – 1951',
    birthPlace: 'Karnal, British India / Rawalpindi',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The blood of martyrs nourishes the tree of national freedom.',
    shortDescription: 'First Prime Minister of Pakistan who presented the historic Objectives Resolution of 1949 as constitutional bedrock.',
    fullBio: 'Nawabzada Liaquat Ali Khan was the right-hand companion of Muhammad Ali Jinnah and the first Prime Minister of Pakistan. He guided the nascent state through post-partition refugee crises and moved the historic Objectives Resolution in 1949.',
    impactDomain: 'National',
    tags: ['First Prime Minister', 'Quaid-e-Millat', 'Objectives Resolution', 'Partition Leader'],
    keyContributions: [
      'First Prime Minister of Pakistan (1947–1951)',
      'Presented the historic Objectives Resolution of 1949',
      'Established early diplomatic relations with global powers'
    ]
  }),

  createPersonality({
    id: 'benazir-bhutto',
    name: 'Benazir Bhutto',
    urduName: 'بینظیر بھٹو',
    title: 'First Female Prime Minister of the Muslim World',
    category: 'Leaders & Activists',
    lifespan: '1953 – 2007',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Democracy is necessary to peace and to ending poverty.',
    shortDescription: 'Stateswoman and leader of Pakistan Peoples Party (PPP) who made history in 1988 as the first female Prime Minister of any Muslim-majority country.',
    fullBio: 'Benazir Bhutto was a pioneering Pakistani politician who served as Prime Minister of Pakistan from 1988 to 1990 and again from 1993 to 1996. Educated at Harvard and Oxford, she was the chairperson of the Pakistan Peoples Party (PPP) and broke historic barriers for women leadership in the Muslim world.',
    impactDomain: 'Global',
    tags: ['First Female PM', 'Muslim World Leader', 'PPP Chair', 'Oxford Graduate', 'Karachi'],
    keyContributions: [
      'First female Prime Minister of a Muslim-majority nation (1988 & 1993)',
      'Chairperson of the Pakistan Peoples Party (PPP)',
      'Pioneered women welfare programs, health centers, and democratic reform'
    ],
    awards: [{ year: '2008', title: 'United Nations Prize in the Field of Human Rights', organization: 'United Nations' }]
  }),

  createPersonality({
    id: 'ch-rahmat-ali',
    name: 'Chaudhry Rahmat Ali',
    urduName: 'چوہدری رحمت علی',
    title: 'Founding Thinker Who Coined "PAKISTAN" in 1933',
    category: 'Leaders & Activists',
    lifespan: '1897 – 1951',
    birthPlace: 'Balachaur, Punjab',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Now or Never: Are we to live or perish forever?',
    shortDescription: 'Cambridge scholar who coined the acronym "PAKISTAN" in his famous 1933 pamphlet "Now or Never".',
    fullBio: 'Chaudhry Rahmat Ali was a Muslim nationalist scholar who while studying at Emmanuel College, Cambridge in 1933, published the historic pamphlet "Now or Never". In it, he derived the name "PAKISTAN" (Punjab, Afghania, Kashmir, Sindh, BaluchisTAN).',
    impactDomain: 'Global',
    tags: ['Coined Pakistan', 'Now or Never', 'Cambridge Scholar', 'Nationalist'],
    keyContributions: [
      'Coined the name "PAKISTAN" in 1933 pamphlet',
      'Founded the Pakistan National Movement in Cambridge'
    ]
  })
];
