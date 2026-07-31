import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const MILITARY_HEROES: Personality[] = [
  createPersonality({
    id: 'raja-aziz-bhatti',
    name: 'Major Raja Aziz Bhatti Shaheed',
    urduName: 'میجر راجہ عزیز بھٹی شہید',
    title: 'Nishan-e-Haider Recipient (1965 War Hero)',
    category: 'Military Heroes',
    lifespan: '1928 – 1965',
    birthPlace: 'Hong Kong / Gujrat, Punjab',
    image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Do not recall me. I will not come back. I will shed the last drop of my blood in defending my homeland.',
    shortDescription: 'Commanded the Burki sector during the 1965 Indo-Pak War for 6 consecutive days without rest until his martyrdom.',
    fullBio: 'Major Raja Aziz Bhatti was a staff officer in the Pakistan Army and a recipient of the Nishan-e-Haider, Pakistan\'s highest military award. As company commander in Burki sector during the 1965 war, he directed artillery fire against enemy armor and infantry, holding off enemy advances for six uninterrupted days before sacrificing his life.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', '1965 War', 'Burki Sector', 'Pakistan Army', 'Martyr'],
    keyContributions: [
      'Held the strategic Burki sector against heavy enemy offensives for 6 days',
      'Directly targeted enemy armor and artillery positions with precision',
      'Awarded the Nishan-e-Haider for supreme tactical courage and leadership'
    ],
    milestones: [
      { year: '1928', title: 'Birth in Hong Kong', description: 'Born in Hong Kong, later moving to Gujrat, Punjab to join the Pakistan military.' },
      { year: '1950', title: 'Sword of Honour at PMA Kakul', description: 'Graduated from Pakistan Military Academy Kakul, awarded the prestigious Sword of Honour and Norman Gold Medal.' },
      { year: '1965 (Sept 6)', title: 'Defense of Burki Sector', description: 'Commanded the frontline company at Burki sector near Lahore, holding off massive enemy armor attacks.' },
      { year: '1965 (Sept 12)', title: 'Supreme Martyrdom', description: 'Directing artillery strikes from an exposed vantage point, embraced martyrdom after 6 days of continuous battle.' },
      { year: '1965', title: 'Awarded Nishan-e-Haider', description: 'Posthumously awarded Pakistan\'s highest military award for legendary heroism and strategic brilliance.' }
    ],
    awards: [{ year: '1965', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'rashid-minhas',
    name: 'Pilot Officer Rashid Minhas Shaheed',
    urduName: 'پائلٹ آفیسر راشد منہاس شہید',
    title: 'Youngest Nishan-e-Haider Recipient',
    category: 'Military Heroes',
    lifespan: '1951 – 1971',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4ed168332?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Pakistan is my soul, and no traitor shall hijack its honor.',
    shortDescription: 'Youngest PAF pilot officer who sacrificed his life at age 20 to thwart an enemy aircraft hijacking.',
    fullBio: 'Rashid Minhas was a pilot officer in the Pakistan Air Force who sacrificed his life on August 20, 1971. During a training flight, his instructor Matiur Rahman attempted to hijack the T-33 trainer jet toward India. Minhas struggled for control and forced the plane to crash near the border, preserving national defense integrity.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'PAF', 'Aviation Hero', 'Karachi', 'Youngest Recipient'],
    keyContributions: [
      'Foiled the hijacking of a PAF T-33 trainer jet',
      'Showed utmost patriotic valor and composure under fatal crisis at age 20',
      'Became the youngest pilot and only PAF officer to receive Nishan-e-Haider'
    ],
    milestones: [
      { year: '1951', title: 'Birth in Karachi', description: 'Born in Karachi into a notable Rajput family, fascinated with aviation from childhood.' },
      { year: '1968', title: 'Joined Pakistan Air Force', description: 'Enrolled in 51st GD(P) course at PAF Academy Risalpur, displaying top marksmanship.' },
      { year: '1971 (Feb)', title: 'Commissioned Pilot Officer', description: 'Commissioned into Pakistan Air Force as a fighter pilot officer.' },
      { year: '1971 (Aug 20)', title: 'Heroic Foil of Hijacking', description: 'Struggled on board T-33 trainer jet to prevent unauthorized hijacking, forcing crash near border.' },
      { year: '1971', title: 'Nishan-e-Haider Award', description: 'Posthumously awarded Nishan-e-Haider, becoming the youngest recipient in history.' }
    ],
    awards: [{ year: '1971', title: 'Nishan-e-Haider', organization: 'Pakistan Air Force' }]
  }),

  createPersonality({
    id: 'karnal-sher-khan',
    name: 'Captain Karnal Sher Khan Shaheed',
    urduName: 'کیپٹن کرنل شیر خان شہید',
    title: 'Nishan-e-Haider Recipient (Kargil Hero)',
    category: 'Military Heroes',
    lifespan: '1970 – 1999',
    birthPlace: 'Swabi, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'True soldiers do not count enemy numbers; they count our resolve.',
    shortDescription: 'Kargil war hero who defended posts at 17,000 feet elevation and led counter-attacks with unmatched bravery.',
    fullBio: 'Captain Karnal Sher Khan was an army officer from Swabi, KPK. Assigned to the Northern Light Infantry during the 1999 Kargil conflict, he established tactical defense posts at 17,000 feet in Gultari. His legendary counter-attacks earned praise even from Indian commanders who recommended his gallantry award.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'Kargil War', 'Swabi', 'Northern Light Infantry', 'Mountain Warfare'],
    keyContributions: [
      'Defended extreme high-altitude posts at 17,000 feet in Kargil',
      'Led fierce counter-attacks against overwhelmingly larger forces',
      'Lauded by opponents for supreme warrior spirit and gallantry'
    ],
    awards: [{ year: '1999', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'muhammad-sarwar',
    name: 'Captain Muhammad Sarwar Shaheed',
    urduName: 'کیپٹن محمد سرور شہید',
    title: 'First Nishan-e-Haider Recipient (1948)',
    category: 'Military Heroes',
    lifespan: '1910 – 1948',
    birthPlace: 'Gujar Khan, Punjab',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The flag of Pakistan will never fall as long as a single soldier stands.',
    shortDescription: 'First recipient of Nishan-e-Haider who led the 1948 Kashmir campaign and breached barbed-wire barriers under heavy fire.',
    fullBio: 'Captain Muhammad Sarwar was the first person to be awarded Pakistan\'s highest gallantry award, the Nishan-e-Haider. During the 1948 Kashmir War in the Tilpatra sector, he voluntarily cut enemy barbed wire defenses under intense machine gun fire, paving the way for his battalion before taking a fatal strike.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'First Recipient', '1948 Kashmir War', 'Gujar Khan'],
    keyContributions: [
      'First recipient of Nishan-e-Haider in Pakistan military history',
      'Led successful breaching operations in Tilpatra sector, Kashmir',
      'Volunteered for high-risk wire-cutting mission under heavy mortar shelling'
    ],
    awards: [{ year: '1948', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'tufail-mohammad',
    name: 'Major Tufail Mohammad Shaheed',
    urduName: 'میجر طفیل محمد شہید',
    title: 'Nishan-e-Haider Recipient (1958 Lakshmipur)',
    category: 'Military Heroes',
    lifespan: '1914 – 1958',
    birthPlace: 'Hoshiarpur, British India',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Commanders lead from the front, no matter the pain.',
    shortDescription: 'Company Commander of East Pakistan Rifles who continued leading hand-to-hand combat despite three mortal bullet wounds.',
    fullBio: 'Major Tufail Mohammad was awarded the Nishan-e-Haider for extraordinary courage at Lakshmipur, East Pakistan in August 1958. When enemy forces encircled his border post, he launched a night counter-assault and, despite suffering three bullet wounds to his chest, completed the mission and captured the post.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'East Pakistan Rifles', 'Lakshmipur', 'Hand-to-Hand Combat'],
    keyContributions: [
      'Cleared illegally occupied border posts at Lakshmipur in 1958',
      'Continued commanding hand-to-hand combat after receiving fatal wounds',
      'Second recipient of Nishan-e-Haider'
    ],
    awards: [{ year: '1958', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'muhammad-akram',
    name: 'Major Muhammad Akram Shaheed',
    urduName: 'میجر محمد اکرم شہید',
    title: 'Nishan-e-Haider Recipient (Battle of Hilli)',
    category: 'Military Heroes',
    lifespan: '1938 – 1971',
    birthPlace: 'Dingha, Gujrat, Punjab',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The Battle of Hilli shall bear witness that Pakistan\'s defenders never surrender.',
    shortDescription: 'Hero of the Battle of Hilli (1971) who held off a brigade-strength attack for over two weeks.',
    fullBio: 'Major Muhammad Akram commanded 4 Frontier Force Regiment in the Battle of Hilli during the 1971 war. Outnumbered 10-to-1, his unit repelled continuous air, artillery, and armor bombardment for 15 full days, inflicting severe casualties on enemy forces before he was martyred aiming his 106mm recoil-less rifle.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'Battle of Hilli', '4 Frontier Force', '1971 War'],
    keyContributions: [
      'Held the crucial Hilli position for 15 days against overwhelming odds',
      'Personally destroyed 3 enemy tanks using a anti-tank recoil-less rifle',
      'Awarded Nishan-e-Haider for legendary tactical resilience'
    ],
    awards: [{ year: '1971', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'shabbir-sharif',
    name: 'Major Shabbir Sharif Shaheed',
    urduName: 'میجر شبیر شریف شہید',
    title: 'Nishan-e-Haider & Sitara-e-Jurat Recipient',
    category: 'Military Heroes',
    lifespan: '1943 – 1971',
    birthPlace: 'Kunjah, Gujrat, Punjab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'To die for Pakistan is not a loss; it is the ultimate victory.',
    shortDescription: 'Only officer in Pakistan Army history to receive both the Nishan-e-Haider and the Sitara-e-Jurat.',
    fullBio: 'Major Shabbir Sharif was a decorated Pakistan Army officer who received both the Sitara-e-Jurat (1965 War) and the Nishan-e-Haider (1971 War). In 1971, he led 6 Frontier Force across the high-banked Sabuna Canal, capturing enemy positions and destroying 4 enemy tanks before his martyrdom.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'Sitara-e-Jurat', 'Frontier Force', 'Sabuna Canal', 'Gujrat'],
    keyContributions: [
      'Most decorated military officer in Pakistan history',
      'Captured strategic Sabuna Canal bridgehead against intense resistance',
      'Brother of former COAS General Raheel Sharif'
    ],
    awards: [
      { year: '1965', title: 'Sitara-e-Jurat', organization: 'Pakistan Army' },
      { year: '1971', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }
    ]
  }),

  createPersonality({
    id: 'muhammad-hussain-janjua',
    name: 'Sawar Muhammad Hussain Janjua Shaheed',
    urduName: 'سوار محمد حسین جنجوعہ شہید',
    title: 'Nishan-e-Haider Recipient (Zafarwal Sector)',
    category: 'Military Heroes',
    lifespan: '1949 – 1971',
    birthPlace: 'Dhok Pir Bakhsh (Gujar Khan), Punjab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'A driver of armor carries the thunder of the nation.',
    shortDescription: 'First soldier (enlisted man) to be awarded the Nishan-e-Haider for destroying 16 enemy tanks in the 1971 war.',
    fullBio: 'Sawar Muhammad Hussain Janjua was an armored unit driver in 20 Lancers. During the 1971 war in the Zafarwal-Shakargarh sector, he spotted enemy armor movements on his own initiative and guided recoil-less rifle crews, single-handedly causing the destruction of 16 enemy tanks.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', '20 Lancers', 'Armor Driver', 'Shakargarh', 'Tank Buster'],
    keyContributions: [
      'First enlisted soldier (non-officer) to win Nishan-e-Haider',
      'Guided anti-tank gunners to destroy 16 enemy tanks in Harar Khurd',
      'Showed remarkable initiative and night reconnaissance skills'
    ],
    awards: [{ year: '1971', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'muhammad-mahfuz',
    name: 'Lance Naik Muhammad Mahfuz Shaheed',
    urduName: 'لانس نائیک محمد محفوظ شہید',
    title: 'Nishan-e-Haider Recipient (Pul Kanjri)',
    category: 'Military Heroes',
    lifespan: '1944 – 1971',
    birthPlace: 'Pind Malikan (Rawalpindi), Punjab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Even when weapons fail, courage never gives up.',
    shortDescription: 'Crawled into enemy machine gun bunkers at Pul Kanjri despite losing his legs to heavy artillery fragments.',
    fullBio: 'Lance Naik Muhammad Mahfuz served in 15 Punjab Regiment during the 1971 war at Pul Kanjri (Wagah sector). When his machine gun was destroyed by direct enemy shell fire, he crawled unarmed into enemy pillboxes and subdued an enemy gunner with his bare hands.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', '15 Punjab Regiment', 'Pul Kanjri', 'Wagah Sector'],
    keyContributions: [
      'Crawled through barbed wire while suffering severe leg injuries',
      'Silenced enemy automatic weapons bunker single-handedly',
      'Awarded Nishan-e-Haider for ultimate selfless valor'
    ],
    awards: [{ year: '1971', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'lalak-jan',
    name: 'Havildar Lalak Jan Shaheed',
    urduName: 'حوالدار لالانجان شہید',
    title: 'Nishan-e-Haider Recipient (Kargil Sector)',
    category: 'Military Heroes',
    lifespan: '1967 – 1999',
    birthPlace: 'Yasin Valley, Ghizer, Gilgit-Baltistan',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The snows of Gilgit-Baltistan are guarded by men of iron.',
    shortDescription: 'Gilgit-Baltistan hero who volunteered for front-line Kargil defense and repelled dozens of enemy assaults while injured.',
    fullBio: 'Havildar Lalak Jan was a soldier from Northern Light Infantry born in Ghizer, Gilgit-Baltistan. In May 1999 during the Kargil War, he volunteered to defend a key forward post. Despite multiple severe injuries, he refused evacuation and repelled repeated enemy battalion attacks.',
    impactDomain: 'National',
    tags: ['Nishan-e-Haider', 'Gilgit-Baltistan', 'Northern Light Infantry', 'Kargil', 'Ghizer'],
    keyContributions: [
      'Defended critical high-altitude posts in Kargil under intense artillery fire',
      'Refused medical evacuation and sustained defensive firing for 3 days',
      'First Nishan-e-Haider recipient from Gilgit-Baltistan'
    ],
    awards: [{ year: '1999', title: 'Nishan-e-Haider', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'saif-ali-janjua',
    name: 'Naik Saif Ali Janjua Shaheed',
    urduName: 'نائیک سیف علی جنجوعہ شہید',
    title: 'Hilal-e-Kashmir (Nishan-e-Haider Equivalent)',
    category: 'Military Heroes',
    lifespan: '1922 – 1948',
    birthPlace: 'Khandahar, Kotli, Azad Kashmir',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Azad Kashmir is protected by the faith of its sons.',
    shortDescription: 'Azad Kashmir Regiment defender awarded Hilal-e-Kashmir (gazetted equal to Nishan-e-Haider) for holding Pir Kalewa post in 1948.',
    fullBio: 'Naik Saif Ali Janjua was a squad commander in the Azad Kashmir Regular Force. In October 1948, he defended the strategic Pir Kalewa post against an Indian brigade attack, inflicting heavy losses and downing an enemy aircraft before falling in battle. The Government of Azad Jammu & Kashmir declared Hilal-e-Kashmir equal to Nishan-e-Haider.',
    impactDomain: 'National',
    tags: ['Hilal-e-Kashmir', 'Nishan-e-Haider Equivalent', 'Azad Kashmir', '1948 Kashmir War'],
    keyContributions: [
      'Defended Pir Kalewa post against repeated brigade assaults',
      'Downed an enemy fighter-bomber aircraft using a machine gun',
      'Officially declared Nishan-e-Haider equivalent recipient by Pakistan Armed Forces'
    ],
    awards: [{ year: '1948', title: 'Hilal-e-Kashmir (Nishan-e-Haider equivalent)', organization: 'AJK Govt / Pakistan Army' }]
  }),

  createPersonality({
    id: 'marium-mukhtiar',
    name: 'Flying Officer Marium Mukhtiar Shaheed',
    urduName: 'فلائنگ آفیسر مریم مختیار شہید',
    title: 'First Female Fighter Pilot Martyr of PAF',
    category: 'Military Heroes',
    lifespan: '1992 – 2015',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Aim for the skies and fly with honor for your nation.',
    shortDescription: 'First Pakistani female fighter pilot to be martyred in the line of duty, ensuring her aircraft crashed away from populated areas.',
    fullBio: 'Flying Officer Marium Mukhtiar was a trailblazing fighter pilot in the Pakistan Air Force. On November 24, 2015, during an operational training mission on an FT-7PG aircraft near Kundian, Mianwali, the aircraft suffered an in-flight engine emergency. Marium and her co-pilot steered the plane away from residential towns before ejecting at critical altitude.',
    impactDomain: 'National',
    tags: ['PAF', 'Female Fighter Pilot', 'Martyr', 'Tamgha-e-Basalat', 'Women Empowerment'],
    keyContributions: [
      'First Pakistani female fighter pilot martyred in the line of duty',
      'Everted civilian casualties by steering disabled jet away from populated towns',
      'Awarded Tamgha-e-Basalat for bravery and sacrifice'
    ],
    awards: [{ year: '2015', title: 'Tamgha-e-Basalat', organization: 'Pakistan Air Force' }]
  }),

  createPersonality({
    id: 'mm-alam',
    name: 'Air Commodore M. M. Alam',
    urduName: 'ایئر کموڈور ایم ایم عالم',
    title: '1965 Air Ace & World Record Holder',
    category: 'Military Heroes',
    lifespan: '1935 – 2013',
    birthPlace: 'Calcutta, British India / Dhaka',
    image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Speed and precision in the air decide the destiny of nations.',
    shortDescription: 'World-record PAF fighter ace who shot down 5 enemy Hawker Hunter jets in less than 1 minute during the 1965 war.',
    fullBio: 'Muhammad Mahmood Alam (M. M. Alam) was a legendary combat pilot in the Pakistan Air Force. Flying an F-86 Sabre jet during the 1965 war over Sargodha, he shot down 5 enemy Hawker Hunter aircraft in less than a minute—a world aviation record that stands unbeaten to this day.',
    impactDomain: 'Global',
    tags: ['PAF', 'Air Ace', 'World Record', '1965 War', 'Sargodha'],
    keyContributions: [
      'Set world record by shooting down 5 enemy combat jets in under 60 seconds',
      'Total of 9 enemy aircraft confirmed destroyed in 1965 air battles',
      'Awarded Sitara-e-Jurat with Bar for extraordinary dogfight airmanship'
    ],
    awards: [
      { year: '1965', title: 'Sitara-e-Jurat (with Bar)', organization: 'Pakistan Air Force' }
    ]
  }),

  createPersonality({
    id: 'tahira-qazi',
    name: 'Madam Tahira Qazi Shaheed',
    urduName: 'میڈم طاہرہ قاضی شہید',
    title: 'Heroic APS Principal & Sitara-e-Shujaat Recipient',
    category: 'Military Heroes',
    lifespan: '1951 – 2014',
    birthPlace: 'Peshawar, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'They are my children and I am their mother. I will not leave them.',
    shortDescription: 'Heroic Principal of Army Public School Peshawar who sacrificed her life protecting her students during the 2014 terror attack.',
    fullBio: 'Tahira Qazi was a devoted educator and the principal of Army Public School (APS) Peshawar. On December 16, 2014, when armed terrorists attacked the school, Madam Tahira Qazi demonstrated extraordinary courage by standing between the attackers and her students. She guided dozens of children and staff to safety, refused to abandon her pupils, and embraced martyrdom in defense of her school.',
    impactDomain: 'National',
    tags: ['APS Peshawar', 'National Hero', 'Martyr', 'Sitara-e-Shujaat', 'Peshawar', 'Educator Hero'],
    keyContributions: [
      'Stood courageously as a shield to protect Army Public School students during the December 2014 attack',
      'Refused to evacuate herself, ensuring scores of children were safely escorted out',
      'Posthumously awarded Sitara-e-Shujaat (Star of Bravery) for unmatched courage and maternal selflessness'
    ],
    awards: [{ year: '2015', title: 'Sitara-e-Shujaat (Posthumous)', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'aitzaz-hasan',
    name: 'Aitzaz Hasan Shaheed',
    urduName: 'اعتزاز حسن شہید',
    title: 'Teenage National Hero & Sitara-e-Shujaat Recipient',
    category: 'Military Heroes',
    lifespan: '1998 – 2014',
    birthPlace: 'Hangu, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'My son made his mother cry, but saved hundreds of mothers from crying for their children.',
    shortDescription: '15-year-old student from Hangu who sacrificed his life by tackling a suicide bomber outside his school, saving nearly 2,000 students.',
    fullBio: 'Aitzaz Hasan Shaheed was a 15-year-old schoolboy from Ibrahimzai village in Hangu District, Khyber Pakhtunkhwa. On January 6, 2014, Aitzaz demonstrated remarkable bravery when he spotted a suicide bomber approaching his school during morning assembly, where nearly 2,000 students were gathered. Refusing to let the attacker enter, Aitzaz bravely tackled the bomber outside the school gate, triggering the explosive vest away from his schoolmates. His supreme sacrifice saved hundreds of innocent young lives and immortalized him as a global symbol of courage.',
    impactDomain: 'National',
    tags: ['Hangu', 'National Hero', 'Martyr', 'Sitara-e-Shujaat', 'School Hero', 'Young Icon', 'Khyber Pakhtunkhwa'],
    keyContributions: [
      'Intercepted and tackled a suicide bomber outside Government High School Ibrahimzai in Hangu on January 6, 2014',
      'Sacrificed his own life at age 15 to save nearly 2,000 fellow students and teachers gathered for morning assembly',
      'Posthumously conferred the Sitara-e-Shujaat (Star of Bravery) and honored globally as a national icon of selfless valor'
    ],
    awards: [
      { year: '2014', title: 'Sitara-e-Shujaat (Posthumous)', organization: 'Government of Pakistan' },
      { year: '2014', title: 'Global Bravery Award', organization: 'International Youth Honors' }
    ]
  })
];
