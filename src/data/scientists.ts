import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const SCIENTISTS_AND_DOCTORS: Personality[] = [
  createPersonality({
    id: 'abdus-salam',
    name: 'Dr. Abdus Salam',
    urduName: 'ڈاکٹر عبدالسلام',
    title: 'Nobel Laureate in Theoretical Physics (1979)',
    category: 'Scientists',
    lifespan: '1926 – 1996',
    birthPlace: 'Jhang, Punjab',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Scientific thought is the common heritage of all mankind.',
    shortDescription: 'First Pakistani and first Muslim scientist to win a Nobel Prize in Physics for his Electroweak Unification Theory.',
    fullBio: 'Dr. Abdus Salam co-awarded the 1979 Nobel Prize in Physics for unifying electromagnetic and weak nuclear forces into the Electroweak theory. He founded ICTP in Trieste, Italy, and set up SUPARCO, Pakistan\'s space agency.',
    impactDomain: 'Global',
    tags: ['Nobel Prize', 'Electroweak Theory', 'Physics', 'SUPARCO', 'Jhang'],
    keyContributions: [
      'Co-formulated Electroweak Unification Theory (Nobel Prize 1979)',
      'Predicted W and Z bosons and weak neutral currents',
      'Founded International Centre for Theoretical Physics (ICTP) in Trieste',
      'Founded SUPARCO, Pakistan\'s space exploration agency'
    ],
    milestones: [
      { year: '1926', title: 'Birth in Jhang', description: 'Born in Jhang, setting record marks at Government College Lahore at age 14.' },
      { year: '1951', title: 'Cambridge Doctorate & Smith\'s Prize', description: 'Awarded PhD in Theoretical Physics from Cambridge for fundamental electrodynamics research.' },
      { year: '1961', title: 'Founded SUPARCO Space Agency', description: 'Advised government to establish Pakistan\'s Space and Upper Atmosphere Research Commission.' },
      { year: '1964', title: 'Founded ICTP in Trieste', description: 'Established International Centre for Theoretical Physics to foster scientific talent worldwide.' },
      { year: '1979', title: 'Nobel Prize in Physics', description: 'Awarded Nobel Prize in Physics for unifying electromagnetic and weak nuclear fundamental forces.' }
    ],
    awards: [{ year: '1979', title: 'Nobel Prize in Physics', organization: 'Nobel Committee' }]
  }),

  createPersonality({
    id: 'abdul-qadeer-khan',
    name: 'Dr. Abdul Qadeer Khan',
    urduName: 'ڈاکٹر عبد القدیر خان',
    title: 'Father of Pakistan Nuclear Defense',
    category: 'Engineers & Tech',
    lifespan: '1936 – 2021',
    birthPlace: 'Bhopal, British India / Islamabad',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'A nation that cannot defend its sovereignty cannot safeguard its freedom.',
    shortDescription: 'Metallurgical engineer who established Kahuta Research Laboratories (KRL) and developed Pakistan\'s nuclear deterrent.',
    fullBio: 'Dr. A. Q. Khan was a German-trained metallurgical engineer who spearheaded Pakistan\'s uranium enrichment project at Kahuta Research Laboratories (KRL), ensuring national strategic deterrence.',
    impactDomain: 'National',
    tags: ['KRL', 'Nuclear Science', 'Nishan-e-Imtiaz', 'Metallurgy'],
    keyContributions: [
      'Established Kahuta Research Laboratories (KRL)',
      'Pioneered gas centrifuge technology for uranium enrichment in Pakistan',
      'Awarded Nishan-e-Imtiaz twice for national defense service'
    ],
    milestones: [
      { year: '1936', title: 'Birth in Bhopal', description: 'Born in Bhopal, later migrating to Karachi to pursue science and metallurgy.' },
      { year: '1972', title: 'Metallurgical Doctorate in Leuven', description: 'Completed doctorate in metallurgical engineering in Belgium, joining URENCO in Holland.' },
      { year: '1976', title: 'Established KRL Kahuta', description: 'Returned to Pakistan to establish Kahuta Research Laboratories for uranium enrichment.' },
      { year: '1998', title: 'Strategic Deterrence Success', description: 'Delivered sovereign nuclear deterrence capability for national territorial defense.' },
      { year: '2021', title: 'Double Nishan-e-Imtiaz Legacy', description: 'Passed away in Islamabad, honored nationwide as Mohsin-e-Pakistan (Benefactor of Pakistan).' }
    ],
    awards: [
      { year: '1996', title: 'Nishan-e-Imtiaz', organization: 'Government of Pakistan' },
      { year: '1999', title: 'Nishan-e-Imtiaz (Bar)', organization: 'Government of Pakistan' }
    ]
  }),

  createPersonality({
    id: 'atta-ur-rahman',
    name: 'Dr. Atta-ur-Rahman',
    urduName: 'ڈاکٹر عطا الرحمن',
    title: 'Organic Chemistry Pioneer & UNESCO Laureate',
    category: 'Scientists',
    lifespan: '1942 – Present',
    birthPlace: 'Delhi, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Knowledge economy is the ultimate engine of national prosperity.',
    shortDescription: 'World-renowned organic chemist with 1,200+ publications and Fellow of the Royal Society (FRS).',
    fullBio: 'Dr. Atta-ur-Rahman is a leading organic chemist who revolutionized higher education in Pakistan as Chairman of HEC. He has published over 1,200 research papers and books and was elected Fellow of the Royal Society (FRS) in 2006.',
    impactDomain: 'Global',
    tags: ['Chemistry', 'FRS', 'HEC', 'UNESCO Laureate', 'Karachi'],
    keyContributions: [
      'Elected Fellow of the Royal Society (FRS) London',
      'Transformed Pakistan higher education sector as Chairman HEC',
      'Won UNESCO Science Prize (1999)'
    ]
  }),

  createPersonality({
    id: 'ruth-pfau',
    name: 'Dr. Ruth Pfau',
    urduName: 'ڈاکٹر روتھ فاؤ',
    title: 'The Angel of Karachi (Eradicated Leprosy in Pakistan)',
    category: 'Doctors',
    lifespan: '1929 – 2017',
    birthPlace: 'Leipzig, Germany / Karachi',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Love is the greatest medicine for human suffering.',
    shortDescription: 'German-born physician who devoted 55 years to eradicating leprosy in Pakistan, founding Marie Adelheid Leprosy Centre.',
    fullBio: 'Dr. Ruth Pfau was a physician and nun who moved from Germany to Karachi in 1960. She spent 55 years curing leprosy patients across Pakistan, establishing 157 medical centers. Thanks to her efforts, WHO declared leprosy controlled in Pakistan in 1996.',
    impactDomain: 'Global',
    tags: ['Leprosy Eradication', 'Doctor', 'MALC', 'Nishan-e-Quaid-e-Azam', 'Karachi'],
    keyContributions: [
      'Founded Marie Adelheid Leprosy Centre (MALC) in Karachi',
      'Controlled leprosy across Pakistan ahead of WHO targets',
      'Honored with state funeral in Pakistan'
    ],
    milestones: [
      { year: '1929', title: 'Birth in Leipzig', description: 'Born in Leipzig, Germany, pursuing medicine at the University of Mainz.' },
      { year: '1960', title: 'Arrival in Karachi', description: 'Arrived in Karachi, visiting leprosy patient colonies in slums and establishing MALC clinic.' },
      { year: '1996', title: 'WHO Leprosy Eradication Milestone', description: 'Led national campaign resulting in WHO declaring leprosy controlled in Pakistan ahead of schedule.' },
      { year: '2006', title: 'Hilal-i-Pakistan Honor', description: 'Conferred Hilal-i-Pakistan for 46 years of selfless medical service to marginalized patients.' },
      { year: '2017', title: 'State Funeral & Legacy', description: 'Passed away in Karachi, honored with a rare state funeral at St. Patrick\'s Cathedral.' }
    ],
    awards: [{ year: '1989', title: 'Nishan-e-Quaid-e-Azam', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'adeeb-rizvi',
    name: 'Dr. Adeeb Rizvi',
    urduName: 'ڈاکٹر ادیب الرضوی',
    title: 'Founder of SIUT (Free Healthcare & Organ Transplants)',
    category: 'Doctors',
    lifespan: '1938 – Present',
    birthPlace: 'Kalanpur, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'No one should die because they cannot afford healthcare.',
    shortDescription: 'Visionary transplant surgeon who founded SIUT, providing 100% free organ transplants and kidney care to millions.',
    fullBio: 'Dr. Adeeb Rizvi is a pioneering urologist and organ transplant surgeon who founded the Sindh Institute of Urology and Transplantation (SIUT) in Karachi. Operating on the principle that healthcare is a fundamental human right, SIUT provides free, world-class medical treatments.',
    impactDomain: 'Global',
    tags: ['SIUT', 'Organ Transplants', 'Urology', 'Free Healthcare', 'Ramon Magsaysay'],
    keyContributions: [
      'Founded SIUT, performing thousands of free kidney transplants',
      'Pioneered ethical organ transplantation law in Pakistan',
      'Ramon Magsaysay Award Laureate (1998)'
    ],
    milestones: [
      { year: '1938', title: 'Birth in Kalanpur', description: 'Born in British India, earning MBBS from Dow Medical College Karachi and surgical training in UK.' },
      { year: '1971', title: '8-Bed Urology Ward at Civil Hospital', description: 'Started an 8-bed urology ward at Civil Hospital Karachi delivering free patient care.' },
      { year: '1991', title: 'Autonomous SIUT Charter', description: 'Expanded ward into the Sindh Institute of Urology and Transplantation (SIUT).' },
      { year: '1998', title: 'Ramon Magsaysay Award', description: 'Awarded Ramon Magsaysay Award for Public Service in medical healthcare.' },
      { year: '2018', title: '5,000+ Free Transplants Milestone', description: 'SIUT completed over 5,000 free organ transplants treating 1.5 million poor patients annually.' }
    ]
  }),

  createPersonality({
    id: 'nergis-mavalvala',
    name: 'Dr. Nergis Mavalvala',
    urduName: 'ڈاکٹر نرگس ماولوالا',
    title: 'Dean of Science at MIT & LIGO Gravitational Wave Scientist',
    category: 'Scientists',
    lifespan: '1968 – Present',
    birthPlace: 'Lahore, Punjab / USA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Curiosity and persistent testing unlock nature\'s hidden whispers.',
    shortDescription: 'Pakistani-American astrophysicist who played a key role in detecting gravitational waves at LIGO and became MIT Dean of Science.',
    fullBio: 'Dr. Nergis Mavalvala is a world-renowned astrophysicist born in Lahore. She was part of the scientific team at LIGO that made the historic first observation of gravitational waves in 2015. In 2020, she was appointed Dean of the School of Science at MIT.',
    impactDomain: 'Global',
    tags: ['MIT', 'LIGO', 'Gravitational Waves', 'Astrophysics', 'MacArthur Fellow'],
    keyContributions: [
      'Core contributor to LIGO team detecting Einstein\'s predicted gravitational waves',
      'Appointed Dean of Science at MIT (2020)',
      'MacArthur "Genius Grant" Fellow (2010)'
    ],
    milestones: [
      { year: '1968', title: 'Birth in Lahore', description: 'Born in Lahore, raised in Karachi, attending Convent of Jesus and Mary.' },
      { year: '1997', title: 'PhD in Physics from MIT', description: 'Completed PhD at MIT developing quantum non-demolition measurement techniques.' },
      { year: '2010', title: 'MacArthur Genius Fellow', description: 'Awarded prestigious MacArthur Fellowship for breakthroughs in optical instrumentation.' },
      { year: '2015', title: 'Gravitational Wave Discovery', description: 'Co-detected Einstein\'s predicted gravitational waves at LIGO, proving cosmic ripple existence.' },
      { year: '2020', title: 'Dean of Science at MIT', description: 'Appointed Dean of the School of Science at Massachusetts Institute of Technology (MIT).' }
    ]
  }),

  createPersonality({
    id: 'arfa-karim',
    name: 'Arfa Karim Randhawa',
    urduName: 'ارفع کریم رندھاوا',
    title: 'World Youngest Microsoft Certified Professional (MCP)',
    category: 'Engineers & Tech',
    lifespan: '1995 – 2012',
    birthPlace: 'Ram Diwali, Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'If you want to do something big in life, start young and think without limits.',
    shortDescription: 'Computer prodigy who became the youngest Microsoft Certified Professional in the world at age 9 in 2004.',
    fullBio: 'Arfa Karim Randhawa was a brilliant computer prodigy from Faisalabad. At age 9 in 2004, she passed Microsoft\'s certification exam to become the youngest Microsoft Certified Professional (MCP) in the world. Bill Gates invited her to Microsoft headquarters in Seattle.',
    impactDomain: 'Global',
    tags: ['Microsoft', 'Computer Prodigy', 'MCP', 'Faisalabad', 'Young Genius'],
    keyContributions: [
      'World\'s youngest Microsoft Certified Professional at age 9',
      'Represented Pakistan at international tech summits in Barcelona and Seattle',
      'Awarded Fatima Jinnah Gold Medal and President\'s Pride of Performance'
    ],
    milestones: [
      { year: '1995', title: 'Birth in Faisalabad', description: 'Born in Ram Diwali, Faisalabad, showing extraordinary curiosity for computing from age 5.' },
      { year: '2004', title: 'World Youngest MCP at Age 9', description: 'Passed Microsoft certification exam, becoming the youngest Microsoft Certified Professional in the world.' },
      { year: '2005', title: 'Invited by Bill Gates', description: 'Personally invited by Bill Gates to Microsoft headquarters in Redmond, Washington.' },
      { year: '2006', title: 'TechEd Conference Barcelona', description: 'Represented Pakistan as keynote delegate at Microsoft TechEd conference in Barcelona.' },
      { year: '2012', title: 'Legacy & Pride of Performance', description: 'Tragically passed away in Lahore at age 16; honored with Fatima Jinnah Gold Medal and Pride of Performance.' }
    ]
  }),

  createPersonality({
    id: 'umar-saif',
    name: 'Dr. Umar Saif',
    urduName: 'ڈاکٹر عمر سیف',
    title: 'Tech Innovator & Founder of PITB & Plan9',
    category: 'Engineers & Tech',
    lifespan: '1979 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Digital technology empowers governments to serve citizens with transparency.',
    shortDescription: 'MIT-trained computer scientist who spearheaded Punjab IT Board (PITB) digitizing public health and education.',
    fullBio: 'Dr. Umar Saif is a prominent Pakistani computer scientist, entrepreneur, and former Minister of IT. He founded Plan9, Pakistan\'s first tech incubator, and digitized governance, dengue tracking, and police records as Chairman PITB.',
    impactDomain: 'National',
    tags: ['Tech Incubator', 'PITB', 'Plan9', 'MIT', 'Digital Pakistan'],
    keyContributions: [
      'Founded Plan9 tech incubator, starting Pakistan\'s startup ecosystem',
      'Digitized public services and epidemic tracking in Punjab',
      'MIT TR35 Top Innovator under 35'
    ],
    milestones: [
      { year: '1979', title: 'Birth in Lahore', description: 'Born in Lahore, completing PhD in Computer Science at University of Cambridge.' },
      { year: '2011', title: 'MIT TR35 Top Innovator', description: 'Named among world\'s top 35 innovators under 35 by MIT Technology Review.' },
      { year: '2012', title: 'Founded Plan9 Incubator', description: 'Launched Plan9, Pakistan\'s pioneer technology startup incubator, spawning hundreds of tech companies.' },
      { year: '2014', title: 'Chairman PITB Governance Digitization', description: 'Digitized public health, dengue surveillance, citizen feedback, and education portals across Punjab.' },
      { year: '2023', title: 'Federal Minister of IT', description: 'Appointed Federal Minister for Information Technology and Telecommunication.' }
    ]
  }),

  createPersonality({
    id: 'naweed-syed',
    name: 'Dr. Naweed Syed',
    urduName: 'ڈاکٹر نوید سید',
    title: 'Neuroscientist (Connected Brain Cells to Silicon Chip)',
    category: 'Scientists',
    lifespan: '1961 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Merging biology with silicon unlocks new horizons for neural healing.',
    shortDescription: 'Bio-scientist who became the first person in the world to connect brain neurons to a microchip.',
    fullBio: 'Dr. Naweed Syed is a Pakistani-Canadian neuroscientist at the University of Calgary. He gained international fame by becoming the first scientist to connect brain cells to a silicon microchip, opening pathways for bionic brain implants.',
    impactDomain: 'Global',
    tags: ['Neuroscience', 'Bionic Brain', 'Silicon Chip', 'Calgary', 'Pioneer'],
    keyContributions: [
      'First scientist to successfully integrate brain neurons with a silicon microchip',
      'Professor at University of Calgary Department of Cell Biology'
    ],
    milestones: [
      { year: '1961', title: 'Birth in Rawalpindi', description: 'Born in Rawalpindi, graduating from University of Agriculture Faisalabad before earning PhD in Neurophysiology.' },
      { year: '2004', title: 'First Brain-Silicon Microchip', description: 'Became first scientist in history to connect brain neurons directly to a silicon microchip at University of Calgary.' },
      { year: '2010', title: 'Department Chair at Calgary', description: 'Appointed Head of Cell Biology and Anatomy at University of Calgary Cumming School of Medicine.' },
      { year: '2017', title: 'Tamgha-e-Imtiaz Conferred', description: 'Awarded Tamgha-e-Imtiaz by Government of Pakistan for pioneering bio-tech innovation.' }
    ]
  }),

  createPersonality({
    id: 'salimuzzaman-siddiqui',
    name: 'Dr. Salimuzzaman Siddiqui',
    urduName: 'ڈاکٹر سلیم الزماں صدیقی',
    title: 'Father of Natural Product Chemistry in Pakistan',
    category: 'Scientists',
    lifespan: '1897 – 1994',
    birthPlace: 'Suahedpur, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Nature holds the cure for every ailment known to humanity.',
    shortDescription: 'Chemist who isolated anti-hypertensive medicinal compounds from Neem and Rauwolfia and established HEJ Research Institute.',
    fullBio: 'Dr. Salimuzzaman Siddiqui was a legendary organic chemist and painter. He isolated active medicinal compounds from Neem and Rauwolfia serpentina and founded the HEJ Research Institute of Chemistry in Karachi.',
    impactDomain: 'Global',
    tags: ['Natural Chemistry', 'HEJ', 'Neem Research', 'FRS', 'Karachi'],
    keyContributions: [
      'Isolated Ajmaline and anti-hypertensive alkaloids from Rauwolfia',
      'Founded PCSIR (Pakistan Council of Scientific and Industrial Research)',
      'Founded HEJ Research Institute of Chemistry'
    ],
    milestones: [
      { year: '1897', title: 'Birth in Suahedpur', description: 'Born in British India, studying chemistry at Frankfurt University Germany.' },
      { year: '1931', title: 'Isolation of Ajmaline', description: 'Isolated Ajmaline anti-arrhythmic alkaloid from Rauwolfia serpentina plant.' },
      { year: '1953', title: 'Founded PCSIR', description: 'Founded Pakistan Council of Scientific and Industrial Research (PCSIR).' },
      { year: '1961', title: 'Fellow of Royal Society (FRS)', description: 'Elected Fellow of the Royal Society (FRS) London.' },
      { year: '1967', title: 'Founded HEJ Institute of Chemistry', description: 'Established HEJ Research Institute of Chemistry at Karachi University, building a premier center for chemical research.' }
    ]
  })
];
