import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const MORE_ICONS: Personality[] = [
  // --- MILITARY & DEFENSE HEROES ---
  createPersonality({
    id: 'nigar-johar',
    name: 'Lieutenant General Nigar Johar',
    urduName: 'لیفٹیننٹ جنرل نگار جوہر',
    title: 'First Female 3-Star General in Pakistan Army',
    category: 'Military Heroes',
    lifespan: '1965 – Present',
    birthPlace: 'Panjpir, Swabi, KPK',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Focus on your competence and commitment; gender is never a barrier to service.',
    shortDescription: 'First female three-star general in Pakistan Army history and former Surgeon General of Medical Corps.',
    fullBio: 'Lt. Gen. Nigar Johar made military history in 2020 by becoming the first female officer promoted to Lieutenant General in the Pakistan Army. She served as Surgeon General and Colonel Commandant of the Army Medical Corps.',
    impactDomain: 'National',
    tags: ['First Female 3-Star General', 'Army Medical Corps', 'Swabi', 'Hilal-e-Imtiaz'],
    keyContributions: [
      'First female Lieutenant General in Pakistan Army history',
      'First female Surgeon General of Pakistan Armed Forces',
      'Hilal-e-Imtiaz (Military) recipient'
    ],
    milestones: [
      { year: '1965', title: 'Birth in Swabi', description: 'Born in Panjpir, Swabi, KPK into a military family, studying at Presentation Convent Girls High School Rawalpindi.' },
      { year: '1985', title: 'Commission in Army Medical Corps', description: 'Graduated from Army Medical College Rawalpindi and commissioned into the Pakistan Army Medical Corps.' },
      { year: '2017', title: 'Promoted to Major General', description: 'Promoted to 2-star Major General, becoming the 3rd female officer in Pakistan Army history to reach this rank.' },
      { year: '2020', title: 'First Female 3-Star Lieutenant General', description: 'Promoted to Lieutenant General, making history as the first female 3-star General and Surgeon General.' },
      { year: '2021', title: 'Hilal-e-Imtiaz & Colonel Commandant', description: 'Conferred Hilal-e-Imtiaz (Military) and appointed Colonel Commandant of Army Medical Corps.' }
    ]
  }),

  createPersonality({
    id: 'sarfaraz-rafiqui',
    name: 'Squadron Leader Sarfaraz Ahmed Rafiqui Shaheed',
    urduName: 'اسکواڈرن لیڈر سرفراز احمد رفیقی شہید',
    title: '1965 PAF Air Hero (Hilal-e-Jurat & Sitara-e-Jurat)',
    category: 'Military Heroes',
    lifespan: '1935 – 1965',
    birthPlace: 'Rajshahi, East Pakistan / Sargodha',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'My guns are jammed, but I will continue escorting my formation.',
    shortDescription: 'PAF squadron leader who led daring air strikes on Halwara airbase during 1965 war and protected his wingmen when his guns jammed.',
    fullBio: 'Squadron Leader Sarfaraz Ahmed Rafiqui was a legendary PAF fighter pilot. During a strike mission over Halwara in the 1965 war, his guns jammed after shooting down two enemy jets. Refusing to abandon his team, he flew decoy maneuvers until his aircraft was shot down.',
    impactDomain: 'National',
    tags: ['PAF', 'Hilal-e-Jurat', '1965 War', 'Halwara Airbase'],
    keyContributions: [
      'Awarded both Hilal-e-Jurat and Sitara-e-Jurat for extraordinary aerial combat bravery',
      'Downed multiple enemy Hunter fighter aircraft in dogfights'
    ],
    milestones: [
      { year: '1935', title: 'Birth in Rajshahi', description: 'Born in Rajshahi, East Pakistan, moving to Sargodha to pursue fighter aviation in PAF.' },
      { year: '1953', title: 'Commissioned in PAF', description: 'Graduated from RPAF College Risalpur, commissioned as a fighter pilot in Pakistan Air Force.' },
      { year: '1965 (Sept 1)', title: 'Sitara-e-Jurat in Chamb Sector', description: 'Shot down two enemy Vampire fighter jets over Chamb sector, awarded Sitara-e-Jurat.' },
      { year: '1965 (Sept 6)', title: 'Halwara Airbase Raid & Jammed Guns', description: 'Led 3-aircraft raid over Halwara; when his guns jammed, he flew decoy maneuvers protecting wingmen before falling.' },
      { year: '1965', title: 'Posthumous Hilal-e-Jurat', description: 'Posthumously awarded Hilal-e-Jurat, becoming one of PAF\'s most revered air heroes.' }
    ]
  }),

  createPersonality({
    id: 'cecil-chaudhry',
    name: 'Group Captain Cecil Chaudhry',
    urduName: 'گروپ کیپٹن سیسل چوہدری',
    title: '1965 & 1971 PAF War Veteran & Educationist',
    category: 'Military Heroes',
    lifespan: '1941 – 2012',
    birthPlace: 'Dalwal, Punjab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'A soldier\'s duty to the motherland transcends faith, caste, and creed.',
    shortDescription: 'Renowned Christian PAF combat pilot decorated with Sitara-e-Jurat and Tamgha-e-Jurat for his dangerous low-altitude bombing missions in 1965 and 1971.',
    fullBio: 'Group Captain Cecil Chaudhry was an elite PAF fighter pilot and educator. Flying Sabre jets alongside M. M. Alam and Sarfaraz Rafiqui, he flew critical strikes against enemy radar installations at Amritsar in 1965.',
    impactDomain: 'National',
    tags: ['PAF', 'Sitara-e-Jurat', 'Christian Hero', 'Amritsar Radar Strike'],
    keyContributions: [
      'Executed high-risk low-level bombing strikes on Amritsar radar during 1965 war',
      'Awarded Sitara-e-Jurat and Tamgha-e-Jurat',
      'Principal of St. Anthony\'s High School Lahore'
    ],
    milestones: [
      { year: '1941', title: 'Birth in Dalwal', description: 'Born in Dalwal in the Salt Range of Punjab into a distinguished Roman Catholic family.' },
      { year: '1958', title: 'Joined PAF Academy', description: 'Enrolled in PAF Academy Risalpur, specializing in F-86 Sabre jet aerial combat.' },
      { year: '1965', title: 'Amritsar Radar Strike & Sitara-e-Jurat', description: 'Executed low-altitude strike destroying Amritsar radar complex; awarded Sitara-e-Jurat.' },
      { year: '1971', title: '1971 Air Operations & Tamgha-e-Jurat', description: 'Flew deep-strike combat missions against enemy airfields, awarded Tamgha-e-Jurat.' },
      { year: '1986', title: 'Principal St. Anthony\'s & Human Rights', description: 'Appointed Principal of St. Anthony\'s High School Lahore, mentoring generations of students.' }
    ]
  }),

  // --- SPORTS CHAMPIONS CONTINUED ---
  createPersonality({
    id: 'samina-baig',
    name: 'Samina Baig',
    urduName: 'ثمینہ بیگ',
    title: 'First Pakistani Woman to Scale Mount Everest & K2',
    category: 'Sports Champions',
    lifespan: '1990 – Present',
    birthPlace: 'Shimshal, Hunza, Gilgit-Baltistan',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The highest peaks in the world yield to courage and determination.',
    shortDescription: 'High-altitude mountaineer from Hunza who became the first Pakistani woman to conquer Mount Everest (2013) and K2 (2022).',
    fullBio: 'Samina Baig is Pakistan\'s premier female high-altitude mountaineer. Hailing from Shimshal village in Hunza, she scaled Mount Everest at age 22 in 2013 and successfully summited K2 in 2022, completing all Seven Summits.',
    impactDomain: 'Global',
    tags: ['Everest', 'K2', 'Mountaineering', 'Hunza', 'Seven Summits'],
    keyContributions: [
      'First Pakistani woman to summit Mount Everest (2013)',
      'First Pakistani woman to summit K2 (2022)',
      'First Pakistani to summit all Seven Summits across seven continents'
    ],
    milestones: [
      { year: '1990', title: 'Birth in Shimshal', description: 'Born in Shimshal, Hunza, Gilgit-Baltistan, trained in high-altitude climbing by her brother Mirza Ali.' },
      { year: '2010', title: 'First Ascent of Chashkin Sar', description: 'Summited virgin peak Chashkin Sar (6,400m) in Hunza, renamed Samina Peak in her honor.' },
      { year: '2013 (May 19)', title: 'Mount Everest Historic Summit', description: 'Became the first Pakistani woman to scale Mount Everest (8,848m) at age 22.' },
      { year: '2014', title: 'Seven Summits Completion', description: 'Conquered the highest peaks across all seven continents, becoming the first Pakistani to achieve the Seven Summits.' },
      { year: '2022 (July 22)', title: 'K2 Historic Ascent', description: 'Successfully summited K2 (8,611m), becoming the first Pakistani woman atop the Savage Mountain.' }
    ]
  }),

  createPersonality({
    id: 'naila-kiani',
    name: 'Naila Kiani',
    urduName: 'نائلہ کیانی',
    title: 'First Pakistani Woman to Summit 11 Eight-Thousanders',
    category: 'Sports Champions',
    lifespan: '1986 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Mountains teach us that limits exist only in our minds.',
    shortDescription: 'Banker and mountaineer who became the first Pakistani woman to climb 11 of the world\'s 14 mountains above 8,000 meters.',
    fullBio: 'Naila Kiani is an elite mountaineer and former aerospace engineer. She made history by summiting K2, Nanga Parbat, Gasherbrum I & II, Broad Peak, Everest, Lhotse, Annapurna, and Makalu.',
    impactDomain: 'Global',
    tags: ['Mountaineering', 'K2', 'Nanga Parbat', '8000ers', 'Sitara-e-Imtiaz'],
    keyContributions: [
      'First Pakistani woman to summit 11 peaks above 8,000 meters',
      'First Pakistani woman to summit Annapurna and Lhotse',
      'Awarded Sitara-e-Imtiaz in 2023'
    ],
    milestones: [
      { year: '1986', title: 'Birth in Rawalpindi', description: 'Born in Rawalpindi, pursuing aerospace engineering and banking before embarking on high-altitude climbing.' },
      { year: '2021', title: 'Gasherbrum II Ascent', description: 'Summited Gasherbrum II (8,035m) shortly after becoming a mother, launching her professional climbing career.' },
      { year: '2022', title: 'K2 & Gasherbrum I Double Summit', description: 'Scaled K2 (8,611m) and Gasherbrum I (8,080m) in a single climbing season.' },
      { year: '2023', title: '11th Eight-Thousander Summit', description: 'Summited Mount Everest, Lhotse, Annapurna, and Nanga Parbat, becoming the first Pakistani woman atop 11 peaks over 8,000m.' },
      { year: '2023', title: 'Conferred Sitara-e-Imtiaz', description: 'Awarded Sitara-e-Imtiaz by the President of Pakistan for global mountaineering excellence.' }
    ]
  }),

  createPersonality({
    id: 'shahid-afridi',
    name: 'Shahid Afridi',
    urduName: 'شاہد آفریدی',
    title: 'Boom Boom Afridi & 2009 T20 World Cup Final Hero',
    category: 'Sports Champions',
    lifespan: '1977 – Present',
    birthPlace: 'Khyber Agency, FATA',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Hit hard, bowl fast, and play with passion for Pakistan.',
    shortDescription: 'Iconic all-rounder who held the fastest ODI century record (37 balls) for 17 years and starred in 2009 T20 World Cup triumph.',
    fullBio: 'Shahid "Boom Boom" Afridi is one of cricket\'s most captivating entertainers. At age 16 in 1996, he struck a 37-ball ODI century against Sri Lanka. He took 395 ODI wickets, 476 T20 wickets, and earned Player of the Match in 2009 T20 World Cup final.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Boom Boom', '37-Ball Century', '2009 T20 World Cup', 'Khyber'],
    keyContributions: [
      'Scored 37-ball ODI century (world record for 17 years)',
      'Player of the Match in 2009 T20 World Cup Final & Semifinal',
      'Founded Shahid Afridi Foundation for charity'
    ],
    milestones: [
      { year: '1977', title: 'Birth in Khyber', description: 'Born in Khyber Agency, FATA, showing ferocious bowling and power-hitting talent from early youth.' },
      { year: '1996 (Oct 4)', title: '37-Ball World Record ODI Century', description: 'Smashed 37-ball ODI century vs Sri Lanka in Nairobi at age 16, setting a world record that stood for 17 years.' },
      { year: '2009', title: '2009 T20 World Cup Victory', description: 'Player of the Match in both semi-final and final at Lord\'s, steering Pakistan to ICC T20 World Cup glory.' },
      { year: '2011', title: 'World Cup Semi-Final Captain', description: 'Captained Pakistan to 2011 World Cup semi-final, finishing as joint top wicket-taker (21 wickets).' },
      { year: '2014', title: 'Shahid Afridi Foundation', description: 'Established SAF charity providing healthcare, clean water, and education across Pakistan.' }
    ]
  }),

  createPersonality({
    id: 'shoaib-akhtar',
    name: 'Shoaib Akhtar',
    urduName: 'شعیب اختر',
    title: 'Rawalpindi Express (Fastest Bowler in Cricket History)',
    category: 'Sports Champions',
    lifespan: '1975 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Pace is a weapon that frightens batsmen before the ball even leaves your hand.',
    shortDescription: 'Fastest bowler in recorded cricket history who delivered the official 161.3 km/h (100.23 mph) delivery against England in 2003.',
    fullBio: 'Shoaib Akhtar, dubbed the "Rawalpindi Express", is cricket\'s fastest recorded bowler. During the 2003 World Cup, he bowled a 161.3 km/h delivery to Nick Knight, taking 178 Test and 247 ODI wickets.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Rawalpindi Express', '161.3 km/h', 'Fastest Delivery', 'Rawalpindi'],
    keyContributions: [
      'Official world record for fastest delivery in cricket history (161.3 km/h / 100.23 mph)',
      'Took 444 international wickets across Tests and ODIs'
    ],
    milestones: [
      { year: '1975', title: 'Birth in Rawalpindi', description: 'Born in Morgah, Rawalpindi, overcoming flat feet in childhood to develop explosive fast bowling mechanics.' },
      { year: '1997', title: 'Test Debut for Pakistan', description: 'Made international Test debut against West Indies at Rawalpindi Cricket Stadium.' },
      { year: '1999', title: 'Kolkata Test Double Strike', description: 'Clean bowled Rahul Dravid and Sachin Tendulkar on back-to-back deliveries at Eden Gardens Kolkata.' },
      { year: '2003 (Feb 22)', title: '161.3 km/h World Record Delivery', description: 'Clocked official 161.3 km/h (100.23 mph) fast delivery vs England, setting cricket\'s all-time speed record.' },
      { year: '2011', title: 'Retirement & Legacy', description: 'Retired from international cricket after capturing 444 wickets across Tests and ODIs.' }
    ]
  }),

  createPersonality({
    id: 'sarfaraz-ahmed',
    name: 'Sarfaraz Ahmed',
    urduName: 'سرفراز احمد',
    title: '2017 ICC Champions Trophy Winning Captain',
    category: 'Sports Champions',
    lifespan: '1987 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Belief in team spirit transforms underdog teams into world champions.',
    shortDescription: 'Wicketkeeper captain who led Pakistan to a historic victory over India in the 2017 ICC Champions Trophy final in London.',
    fullBio: 'Sarfaraz Ahmed is Pakistan\'s charismatic wicketkeeper-batsman and captain who led Pakistan to triumph at the 2017 ICC Champions Trophy at The Oval, London. He also led Pakistan to 11 consecutive T20 series wins.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Champions Trophy 2017', 'Wicketkeeper Captain', 'Karachi'],
    keyContributions: [
      'Captained Pakistan to 2017 ICC Champions Trophy title',
      'Captained Pakistan Under-19 team to World Cup victory in 2006'
    ]
  }),

  createPersonality({
    id: 'sana-mir',
    name: 'Sana Mir',
    urduName: 'ثنا میر',
    title: 'Pioneer Captain of Pakistan Women Cricket & ICC No. 1 Bowler',
    category: 'Sports Champions',
    lifespan: '1986 – Present',
    birthPlace: 'Abbottabad, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Women in sports inspire young girls to dream beyond boundaries.',
    shortDescription: 'Pioneering captain who led Pakistan Women\'s cricket team for a decade and reached No. 1 ICC ODI Bowler ranking in 2018.',
    fullBio: 'Sana Mir is Pakistan\'s premier former women\'s cricket captain. She led Pakistan to two Asian Games Gold Medals (2010, 2014) and became the first Pakistani woman to rank No. 1 in ICC ODI bowling rankings.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Women Captain', 'ICC No. 1', 'Asian Games Gold', 'Abbottabad'],
    keyContributions: [
      'First Pakistani woman to rank No. 1 in ICC ODI bowling rankings (2018)',
      'Led Pakistan to back-to-back Asian Games Gold Medals (2010, 2014)',
      'Took 151 ODI wickets in 120 matches'
    ]
  }),

  createPersonality({
    id: 'fakhar-zaman',
    name: 'Fakhar Zaman',
    urduName: 'فخر زمان',
    title: 'First Pakistani Double-Centurion in ODI Cricket (210*)',
    category: 'Sports Champions',
    lifespan: '1990 – Present',
    birthPlace: 'Katasgarhi, Mardan, KPK',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Attack when pressure is high, and victory will follow.',
    shortDescription: 'Navy veteran turned opening batsman who scored 210* vs Zimbabwe (only double-century by a Pakistani in ODIs) and 114 in 2017 Champions Trophy final.',
    fullBio: 'Fakhar Zaman is an explosive opening batsman and former Pakistan Navy sailor from Mardan. He scored 114 against India in the 2017 Champions Trophy Final and became the first Pakistani batsman to score an ODI double century (210*).',
    impactDomain: 'Global',
    tags: ['Cricket', '210 Runs', 'Double Century', 'Champions Trophy 2017', 'Mardan'],
    keyContributions: [
      'Only Pakistani batsman to score an ODI double century (210* vs Zimbabwe)',
      'Match-winning century (114) in 2017 ICC Champions Trophy final'
    ]
  }),

  // --- HISTORICAL & REFORMIST LEADERS ---
  createPersonality({
    id: 'sir-syed-ahmed-khan',
    name: 'Sir Syed Ahmed Khan',
    urduName: 'سر سید احمد خان',
    title: 'Founder of Aligarh Movement & Islamic Modernist',
    category: 'Leaders & Activists',
    lifespan: '1817 – 1898',
    birthPlace: 'Delhi, British India',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Acquire knowledge of science and modern skills to secure your dignity.',
    shortDescription: '19th-century educator and reformer who founded Muhammadan Anglo-Oriental College (Aligarh Muslim University) and launched Muslim renaissance.',
    fullBio: 'Sir Syed Ahmed Khan was a 19th-century educator, statesman, and Islamic modernist scholar. Recognizing that modern Western education was essential for Muslims, he founded the Aligarh Movement and MAO College in 1875.',
    impactDomain: 'Global',
    tags: ['Aligarh Movement', 'MAO College', 'Educational Reformer', 'Two-Nation Concept'],
    keyContributions: [
      'Founded Muhammadan Anglo-Oriental College (Aligarh Muslim University) in 1875',
      'Pioneered modern educational reform for South Asian Muslims',
      'Authored Asbab-e-Baghawat-e-Hind (The Causes of the Indian Revolt)'
    ]
  }),

  createPersonality({
    id: 'raana-liaquat-ali',
    name: 'Begum Ra\'ana Liaquat Ali Khan',
    urduName: 'بیگم رعنا لیاقت علی خان',
    title: 'Founder of APWA & First Female Governor',
    category: 'Leaders & Activists',
    lifespan: '1905 – 1990',
    birthPlace: 'Almora, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Educated women build educated families and resilient states.',
    shortDescription: 'Economist, diplomat, and founder of All Pakistan Women\'s Association (APWA) who served as Pakistan\'s first female Governor (Sindh).',
    fullBio: 'Begum Ra\'ana Liaquat Ali Khan was a leading economist and diplomat. She founded the All Pakistan Women\'s Association (APWA) in 1949, served as Ambassador to the Netherlands and Italy, and became the first female Governor of Sindh (1973–1976).',
    impactDomain: 'National',
    tags: ['APWA', 'First Female Governor', 'Diplomat', 'Karachi', 'UN Human Rights Prize'],
    keyContributions: [
      'Founded All Pakistan Women\'s Association (APWA)',
      'First female Governor of Sindh (1973–1976)',
      'United Nations Human Rights Prize laureate (1978)'
    ]
  }),

  // --- WRITERS, POETS & CULTURAL MASTERS ---
  createPersonality({
    id: 'ahmed-faraz',
    name: 'Ahmed Faraz',
    urduName: 'احمد فراز',
    title: 'Master Romantic & Resistance Poet',
    category: 'Writers & Poets',
    lifespan: '1931 – 2008',
    birthPlace: 'Kohat, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Even if my silence speaks of grief, my pen shall never submit.',
    shortDescription: 'One of the greatest Urdu poets of the 20th century whose romantic and anti-dictatorship verses resonated across generations.',
    fullBio: 'Syed Ahmad Shah (Ahmed Faraz) was a legendary Urdu poet from Kohat. Known for his romantic ghazals and bold resistance poetry during martial law regimes, he authored collections like "Janan Janan" and "Tanha Tanha".',
    impactDomain: 'Global',
    tags: ['Urdu Poetry', 'Resistance Poet', 'Hilal-e-Imtiaz', 'Kohat'],
    keyContributions: [
      'Authored poetic masterpieces Janan Janan, Tanha Tanha, and Nayaft',
      'Chairman of Pakistan Academy of Letters',
      'Hilal-e-Imtiaz recipient'
    ]
  }),

  createPersonality({
    id: 'bano-qudsia',
    name: 'Bano Qudsia',
    urduName: 'بانو قدسیہ',
    title: 'Author of "Raja Gidh" & Literary Icon',
    category: 'Writers & Poets',
    lifespan: '1928 – 2017',
    birthPlace: 'Firozpur, British India / Lahore',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Unearned gain corrupts the spiritual tranquility of a home.',
    shortDescription: 'Eminent novelist, playwright, and spiritual writer famous for her masterpiece novel "Raja Gidh" (The King Vulture).',
    fullBio: 'Bano Qudsia (Bano Aapa) was a major Urdu novelist, playwright, and spiritual thinker married to Ashfaq Ahmed. Her 1981 psychological novel "Raja Gidh" explored the concept of "Rizq-e-Haram" (unlawful earnings) and human emotional decay.',
    impactDomain: 'National',
    tags: ['Raja Gidh', 'Urdu Novelist', 'Sitara-e-Imtiaz', 'Lahore'],
    keyContributions: [
      'Authored classic philosophical novel "Raja Gidh"',
      'Wrote dozens of television plays including "Adhi Baat" and "Aasan Se Log"',
      'Sitara-e-Imtiaz and Kamal-e-Fun Award recipient'
    ]
  }),

  createPersonality({
    id: 'ibn-e-insha',
    name: 'Ibn-e-Insha',
    urduName: 'ابن انشا',
    title: 'Master Travelogue Writer, Humorist & Poet',
    category: 'Writers & Poets',
    lifespan: '1927 – 1978',
    birthPlace: 'Jalandhar, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Insha Ji Utho Ab Kooch Karo, Is Shehar Mein Ji Ko Lagana Kya.',
    shortDescription: 'Humorist, UNESCO advisor, and poet whose ghazal "Insha Ji Utho" and travelogues like "Ibn Battuta Ke Taaqat Mein" remain iconic.',
    fullBio: 'Sher Muhammad Khan (Ibn-e-Insha) was a celebrated Urdu poet, humorist, travelogue writer, and UNESCO representative. His iconic poem "Insha Ji Utho Ab Kooch Karo" sung by Ustad Amanat Ali Khan is an immortal classic.',
    impactDomain: 'Global',
    tags: ['Insha Ji Utho', 'Urdu Travelogue', 'Humorist', 'UNESCO Advisor'],
    keyContributions: [
      'Authored iconic travelogues "Ibn Battuta Ke Taaqat Mein" and "Dunya Gol Hai"',
      'Wrote immortal ghazal "Insha Ji Utho Ab Kooch Karo"'
    ]
  }),

  createPersonality({
    id: 'mustansar-hussain-tarar',
    name: 'Mustansar Hussain Tarar',
    urduName: 'مستنصر حسین تارڑ',
    title: 'King of Urdu Travelogues & Novelist',
    category: 'Writers & Poets',
    lifespan: '1939 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Travel strips away prejudice and opens the soul to nature\'s wonder.',
    shortDescription: 'Renowned novelist, travel writer, and PTV morning show host who wrote over 50 travelogues exploring K2, Hunza, and Europe.',
    fullBio: 'Mustansar Hussain Tarar is Pakistan\'s most popular travel writer and novelist. Over five decades, he published over 50 books detailing high-altitude Karakoram expeditions and novels like "Pyar Ka Pehla Shehr" and "Bahawalnagar".',
    impactDomain: 'National',
    tags: ['Travel Writer', 'K2 Expeditions', 'PTV Host', 'Lahore', 'Pride of Performance'],
    keyContributions: [
      'Pioneered modern Urdu travelogue genre with over 50 books',
      'Pioneer PTV morning show host ("Subah Bakhair")',
      'Sitara-e-Imtiaz and Pride of Performance recipient'
    ]
  }),

  createPersonality({
    id: 'amjad-islam-amjad',
    name: 'Amjad Islam Amjad',
    urduName: 'امجد اسلام امجد',
    title: 'Iconic Poet & Creator of "Waris" Drama',
    category: 'Writers & Poets',
    lifespan: '1944 – 2023',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Love is a silent river that flows through generations.',
    shortDescription: 'Legendary poet and TV screenwriter who authored the epic drama serial "Waris" and over 40 poetry collections.',
    fullBio: 'Amjad Islam Amjad was a master poet, columnist, and PTV playwright. His 1979 masterpiece drama "Waris" depicted feudal power dynamics in rural Punjab and stands as one of the highest-rated TV dramas in South Asian history.',
    impactDomain: 'Global',
    tags: ['Waris Drama', 'PTV Screenwriter', 'Urdu Poetry', 'Sitara-e-Imtiaz', 'Lahore'],
    keyContributions: [
      'Wrote legendary PTV drama serial "Waris"',
      'Authored over 40 poetry collections including "Barzakh" and "Fishaar"',
      'Sitara-e-Imtiaz and Pride of Performance recipient'
    ]
  }),

  createPersonality({
    id: 'shoaib-mansoor',
    name: 'Shoaib Mansoor',
    urduName: 'شعیب منصور',
    title: 'Visionary Director (Khuda Kay Liye, Bol, Alpha Bravo Charlie)',
    category: 'Artists & Musicians',
    lifespan: '1952 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Cinema must challenge dark dogmas and champion human dignity.',
    shortDescription: 'Visionary director who revived Pakistani cinema with blockbusters "Khuda Kay Liye" and "Bol", and directed "Alpha Bravo Charlie".',
    fullBio: 'Shoaib Mansoor (ShoMan) is a producer, director, and songwriter. He directed iconic PTV military dramas "Sunehray Din" and "Alpha Bravo Charlie", and revived modern Pakistani cinema with internationally acclaimed feature films "Khuda Kay Liye" (2007) and "Bol" (2011).',
    impactDomain: 'Global',
    tags: ['Cinema Revival', 'Khuda Kay Liye', 'Bol', 'Alpha Bravo Charlie', 'Rawalpindi'],
    keyContributions: [
      'Directed game-changing films "Khuda Kay Liye" and "Bol"',
      'Created legendary TV dramas "Sunehray Din" and "Alpha Bravo Charlie"',
      'Co-wrote iconic song "Dil Dil Pakistan"'
    ],
    awards: [{ year: '2007', title: 'Sitara-e-Imtiaz', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'vital-signs-junaid',
    name: 'Junaid Jamshed & Vital Signs',
    urduName: 'جنید جمشید و وائٹل سائنز',
    title: 'Creators of "Dil Dil Pakistan" (Pop Music Pioneers)',
    category: 'Artists & Musicians',
    lifespan: '1964 – 2016',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Dil Dil Pakistan, Jan Jan Pakistan — the heartbeat of every Pakistani.',
    shortDescription: 'Pop group fronted by Junaid Jamshed whose 1987 anthem "Dil Dil Pakistan" was voted BBC World Service 3rd most popular song globally.',
    fullBio: 'Vital Signs (Junaid Jamshed, Rohail Hyatt, Shahzad Hasan, Salman Ahmad) pioneered Pakistani pop-rock music. Their 1987 track "Dil Dil Pakistan" became an unofficial national anthem, ranking #3 in BBC World Service\'s 2003 global song poll.',
    impactDomain: 'Global',
    tags: ['Dil Dil Pakistan', 'Vital Signs', 'Pop Music Pioneer', 'BBC World Poll'],
    keyContributions: [
      'Created "Dil Dil Pakistan", voted #3 most popular song in BBC World Service poll',
      'Pioneered mainstream pop-rock genre in South Asia during the 1980s'
    ]
  }),

  createPersonality({
    id: 'zia-mohyeddin',
    name: 'Zia Mohyeddin',
    urduName: 'ضیاء محی الدین',
    title: 'Founder of NAPA & Master Orator',
    category: 'Artists & Musicians',
    lifespan: '1931 – 2023',
    birthPlace: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Diction and classical literature are the soul of performing arts.',
    shortDescription: 'Internationally acclaimed actor (Lawrence of Arabia), host of "The Zia Mohyeddin Show", and founder of NAPA.',
    fullBio: 'Zia Mohyeddin was an actor, director, narrator, and founder of the National Academy of Performing Arts (NAPA) in Karachi. Trained at RADA in London, he starred in Hollywood classics like "Lawrence of Arabia" and hosted "The Zia Mohyeddin Show".',
    impactDomain: 'Global',
    tags: ['NAPA', 'Lawrence of Arabia', 'Master Orator', 'Hilal-e-Imtiaz', 'Karachi'],
    keyContributions: [
      'Founded National Academy of Performing Arts (NAPA) in Karachi',
      'First Pakistani actor to star in Hollywood films and West End theatre',
      'Hilal-e-Imtiaz recipient'
    ]
  }),

  // --- FOUNDING LEADERS & STATESMEN ---
  createPersonality({
    id: 'liaquat-ali-khan',
    name: 'Nawabzada Liaquat Ali Khan',
    urduName: 'نوابزادہ لیاقت علی خان',
    title: 'First Prime Minister of Pakistan (Shaheed-e-Millat)',
    category: 'Leaders & Activists',
    lifespan: '1895 – 1951',
    birthPlace: 'Karnal, Punjab / Rawalpindi',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Pakistan came into being to safeguard the lives, culture, and destiny of Muslims.',
    shortDescription: 'First Prime Minister of Pakistan, key lieutenant to Quaid-e-Azam, and presenter of the historic Objectives Resolution 1949.',
    fullBio: 'Liaquat Ali Khan was Quaid-e-Azam\'s trusted right-hand leader in the All-India Muslim League and served as Pakistan\'s first Prime Minister from 1947 until his assassination in Rawalpindi in 1951. He introduced the Objectives Resolution of 1949.',
    impactDomain: 'National',
    tags: ['First PM', 'Shaheed-e-Millat', 'Objectives Resolution', 'Founding Father'],
    keyContributions: [
      'First Prime Minister of Pakistan (1947–1951)',
      'Presented Objectives Resolution 1949 laying constitutional foundation',
      'First Finance Minister of United India in 1946 Interim Government'
    ]
  }),

  createPersonality({
    id: 'sir-syed-ahmed-khan',
    name: 'Sir Syed Ahmed Khan',
    urduName: 'سرسید احمد خان',
    title: 'Founder of Aligarh Movement & Educational Pioneer',
    category: 'Leaders & Activists',
    lifespan: '1817 – 1898',
    birthPlace: 'Delhi, Subcontinent',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Acquire knowledge; it is the key to dignity and liberation.',
    shortDescription: '19th-century educational reformer who founded Muhammadan Anglo-Oriental College (Aligarh Muslim University) and launched modern Muslim renaissance.',
    fullBio: 'Sir Syed Ahmed Khan was a visionary scholar, social reformer, and founder of the Aligarh Movement. He urged Muslims to embrace modern education and science, laying the intellectual groundwork for the Two-Nation Theory.',
    impactDomain: 'National',
    tags: ['Aligarh Movement', 'Educational Reformer', 'Two-Nation Pioneer', 'MAO College'],
    keyContributions: [
      'Founded MAO College in 1875 (later Aligarh Muslim University)',
      'Pioneered modern scientific education among South Asian Muslims',
      'Authored Asbab-e-Baghawat-e-Hind and Tahzib-ul-Akhlaq'
    ]
  }),

  createPersonality({
    id: 'fatima-jinnah',
    name: 'Mohtarma Fatima Jinnah',
    urduName: 'محترمہ فاطمہ جناح',
    title: 'Mother of the Nation (Madar-e-Millat)',
    category: 'Leaders & Activists',
    lifespan: '1893 – 1967',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Women are the real guardians of national honor and future generations.',
    shortDescription: 'Dental surgeon, chief companion to Quaid-e-Azam, founder of All Pakistan Women\'s Association, and symbol of democracy.',
    fullBio: 'Mohtarma Fatima Jinnah, sister of Quaid-e-Azam Muhammad Ali Jinnah, was a qualified dental surgeon and pivotal leader in the Pakistan Movement. Affectionately called Madar-e-Millat, she championed women\'s rights and democratic principles.',
    impactDomain: 'National',
    tags: ['Madar-e-Millat', 'Mother of the Nation', 'Dental Surgeon', 'Democracy Icon'],
    keyContributions: [
      'Co-founded All-India Muslim Women\'s Committee in 1938',
      'Led democratic opposition campaign in 1965 presidential election',
      'Established health clinics and women empowerment networks across Pakistan'
    ]
  }),

  createPersonality({
    id: 'abdur-rab-nishtar',
    name: 'Sardar Abdur Rab Nishtar',
    urduName: 'سردار عبدالرب نشتر',
    title: 'Pakistan Movement Leader & Former Governor of Punjab',
    category: 'Leaders & Activists',
    lifespan: '1899 – 1958',
    birthPlace: 'Peshawar, KPK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Integrity in public service is the highest act of patriotism.',
    shortDescription: 'Peshawar-born founding leader, Minister for Communications, and second Governor of Punjab who oversaw refugee rehabilitation.',
    fullBio: 'Sardar Abdur Rab Nishtar was a stalwart of the Pakistan Movement from KPK. A close associate of Quaid-e-Azam, he served as Communications Minister in the interim government and later as Governor of Punjab.',
    impactDomain: 'National',
    tags: ['Peshawar', 'Governor of Punjab', 'Pakistan Movement', 'Founding Father'],
    keyContributions: [
      'Member of the 1946 Interim Government Cabinet',
      'Governor of Punjab during crucial post-independence restructuring',
      'President of Pakistan Muslim League (1956–1958)'
    ]
  }),

  createPersonality({
    id: 'ar-cornelius',
    name: 'Justice Alvin Robert Cornelius',
    urduName: 'جسٹس اے آر کارنیلیس',
    title: '4th Chief Justice of Pakistan & Legal Visionary',
    category: 'Leaders & Activists',
    lifespan: '1903 – 1991',
    birthPlace: 'Agra / Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The rule of law is the ultimate shield protecting the dignity of every citizen.',
    shortDescription: '4th Chief Justice of Pakistan, prominent jurist, and legal philosopher who co-authored Pakistan Cricket Board constitution.',
    fullBio: 'Justice A. R. Cornelius served as Chief Justice of Pakistan from 1960 to 1968. Renowned for his uncompromising judicial independence and landmark dissenting opinions, he also served as Vice-President of PCB.',
    impactDomain: 'National',
    tags: ['Chief Justice', 'Rule of Law', 'Legal Visionary', 'PCB Constitution'],
    keyContributions: [
      '4th Chief Justice of Pakistan (1960–1968)',
      'Famous dissenting opinion defending parliamentary democracy in Tamizuddin Khan case (1955)',
      'Co-drafted the founding constitution of Pakistan Cricket Board (PCB)'
    ]
  }),

  // --- DOCTORS & HEALTHCARE HUMANITARIANS ---
  createPersonality({
    id: 'ruth-pfau',
    name: 'Dr. Ruth Pfau',
    urduName: 'ڈاکٹر روتھ فاؤ',
    title: 'Mother Teresa of Pakistan (Leprosy Eradication Pioneer)',
    category: 'Doctors',
    lifespan: '1929 – 2017',
    birthPlace: 'Leipzig, Germany / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Love is the only force capable of transforming suffering into hope.',
    shortDescription: 'German-born physician who spent 55 years eradicating leprosy across Pakistan, establishing Marie Adelheid Leprosy Centre in Karachi.',
    fullBio: 'Dr. Ruth Pfau arrived in Karachi in 1960 and devoted her entire life to combating leprosy and tuberculosis in Pakistan. Through her efforts, WHO declared leprosy controlled in Pakistan in 1996 ahead of most Asian nations.',
    impactDomain: 'Global',
    tags: ['Leprosy Crusader', 'Marie Adelheid Centre', 'Hilal-i-Pakistan', 'Karachi'],
    keyContributions: [
      'Founded Marie Adelheid Leprosy Centre with over 157 health outposts across Pakistan',
      'Enabled WHO to declare leprosy under control in Pakistan in 1996',
      'Honored with state funeral and Hilal-i-Pakistan'
    ]
  }),

  createPersonality({
    id: 'adeeb-rizvi',
    name: 'Prof. Dr. Adeebul Hasan Rizvi',
    urduName: 'ڈاکٹر ادیب الحسن رضوی',
    title: 'Founder of SIUT (Free Transplant & Kidney Care Pioneer)',
    category: 'Doctors',
    lifespan: '1938 – Present',
    birthPlace: 'Kalanpur / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'No person should be allowed to die simply because they cannot afford healthcare.',
    shortDescription: 'Renowned transplant surgeon and founder of Sindh Institute of Urology and Transplantation (SIUT) providing 100% free medical care.',
    fullBio: 'Dr. Adeeb Rizvi established SIUT in Karachi as an 8-bed ward in 1971, expanding it into South Asia\'s premier organ transplant institute that treats millions of underprivileged patients entirely free with dignity.',
    impactDomain: 'Global',
    tags: ['SIUT Founder', 'Organ Transplant Pioneer', 'Free Healthcare', 'Ramon Magsaysay Award'],
    keyContributions: [
      'Built SIUT, treating over 1.5 million patients annually at zero cost',
      'Pioneered ethical organ transplantation laws in Pakistan',
      'Ramon Magsaysay Award and Nishan-e-Imtiaz recipient'
    ]
  }),

  // --- ENTREPRENEURS & INDUSTRIAL VISIONARIES ---
  createPersonality({
    id: 'babar-ali',
    name: 'Syed Babar Ali',
    urduName: 'سید بابر علی',
    title: 'Industrialist, Philanthropist & Founder of LUMS',
    category: 'Entrepreneurs',
    lifespan: '1926 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Invest in human capital; education is the highest yielding enterprise.',
    shortDescription: 'Industrial titan who founded Packages Limited, MilkPak (Nestlé Pakistan), and Lahore University of Management Sciences (LUMS).',
    fullBio: 'Syed Babar Ali is one of Pakistan\'s most distinguished industrial visionaries and philanthropists. He founded Packages Limited in 1956, pioneered dairy processing with MilkPak, and established LUMS in 1985.',
    impactDomain: 'Global',
    tags: ['LUMS Founder', 'Packages Limited', 'WWF President', 'Lahore'],
    keyContributions: [
      'Founder of Lahore University of Management Sciences (LUMS)',
      'Founder of Packages Limited and MilkPak (Nestlé Pakistan)',
      'President of World Wide Fund for Nature (WWF International 1996–1999)'
    ]
  }),

  createPersonality({
    id: 'ahmed-dawood',
    name: 'Seth Ahmed Dawood',
    urduName: 'سیٹھ احمد داؤد',
    title: 'Industrial Pioneer & Founder of Dawood Hercules',
    category: 'Entrepreneurs',
    lifespan: '1905 – 2002',
    birthPlace: 'Bantva, Gujarat / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Hard work, honesty, and industrial self-reliance build great nations.',
    shortDescription: 'Pioneering industrialist who established Dawood Group, Dawood Hercules Chemicals, Lawrencepur, and Dawood Foundation.',
    fullBio: 'Seth Ahmed Dawood was an architect of Pakistan\'s post-independence industrial economy. He established giant fertilizer plants, textile mills, and the Dawood Foundation which educates tens of thousands.',
    impactDomain: 'National',
    tags: ['Industrial Pioneer', 'Dawood Hercules', 'Dawood Foundation', 'Lawrencepur'],
    keyContributions: [
      'Pioneered Dawood Hercules Chemicals and Lawrencepur Textiles',
      'Established Dawood Foundation funding Dawood College of Engineering & Technology',
      'Helped fund early national development projects after 1947'
    ]
  }),

  // --- WRITERS, POETS & PHILOSOPHERS ---
  createPersonality({
    id: 'habib-jalib',
    name: 'Habib Jalib',
    urduName: 'حبیب جالب',
    title: 'People\'s Revolutionary Poet (Shair-e-Awam)',
    category: 'Writers & Poets',
    lifespan: '1928 – 1993',
    birthPlace: 'Hoshiarpur, Punjab / Lahore',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Aise Dastur Ko, Subh-e-Be-Nur Ko, Main Nahin Manta, Main Nahin Janta.',
    shortDescription: 'Legendary left-wing activist poet whose iconic verses protested authoritarian rule and gave voice to ordinary working citizens.',
    fullBio: 'Habib Jalib was a fearless Marxist poet known as Shair-e-Awam. Imprisoned repeatedly by dictatorship regimes, his poems like "Dastoor" and "Musheer" remain immortal anthems of popular resistance.',
    impactDomain: 'National',
    tags: ['Shair-e-Awam', 'Dastoor Poem', 'Resistance Poet', 'Nishan-e-Imtiaz'],
    keyContributions: [
      'Penned iconic protest anthem "Dastoor" against authoritarian constitutions',
      'Awarded Nigar Award and posthumous Nishan-e-Imtiaz'
    ]
  }),

  createPersonality({
    id: 'parveen-shakir',
    name: 'Parveen Shakir',
    urduName: 'پروین شاکر',
    title: 'Renowned Modern Urdu Poetess & Civil Servant',
    category: 'Writers & Poets',
    lifespan: '1952 – 1994',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Kushboo ki tarah aazad hoon main, hawaon mein bikharna meri pehchan hai.',
    shortDescription: 'Celebrated poetess whose debut collection "Khushbu" revolutionized modern Urdu romantic poetry and feminine literary perspective.',
    fullBio: 'Parveen Shakir was a civil servant (Customs Department) and master Urdu poetess. Her debut book "Khushbu" (1976) won the Adamjee Literary Award and introduced unprecedented grace and emotional realism to Urdu ghazal.',
    impactDomain: 'Global',
    tags: ['Khushbu Poetess', 'Urdu Ghazal', 'Pride of Performance', 'Karachi'],
    keyContributions: [
      'Published seminal poetry collections including Khushbu, Sad-barg, and Inkaar',
      'Awarded Pride of Performance (1990) and Adamjee Literary Award'
    ]
  }),

  createPersonality({
    id: 'ibn-e-safi',
    name: 'Ibn-e-Safi (Asrar Ahmad)',
    urduName: 'ابن صفی',
    title: 'Master Mystery Novelist & Creator of Imran Series',
    category: 'Writers & Poets',
    lifespan: '1928 – 1980',
    birthPlace: 'Allahabad / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Literature should entertain while elevating human intellect and ethics.',
    shortDescription: 'Fiction giant who authored 245 detective novels in Imran Series and Jasoosi Duniya, praised by Agatha Christie.',
    fullBio: 'Ibn-e-Safi (Asrar Ahmad) was South Asia\'s premier spy and mystery novelist. He created legendary literary sleuths Ali Imran (Imran Series) and Inspector Faridi (Jasoosi Duniya), selling millions of copies globally.',
    impactDomain: 'Global',
    tags: ['Imran Series', 'Jasoosi Duniya', 'Mystery Fiction', 'Karachi'],
    keyContributions: [
      'Authored 245 best-selling detective novels in Urdu language',
      'Praised by British mystery writer Agatha Christie for inventive plots'
    ]
  }),

  createPersonality({
    id: 'bano-qudsia',
    name: 'Bano Qudsia',
    urduName: 'بانو قدسیہ',
    title: 'Legendary Novelist & Author of "Raja Gidh"',
    category: 'Writers & Poets',
    lifespan: '1928 – 2017',
    birthPlace: 'Firozpur, Punjab / Lahore',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Unearned gain (Haram) corrupts human psychology like poison in blood.',
    shortDescription: 'Eminent novelist, playwright, and spiritual philosopher whose masterpiece novel "Raja Gidh" is a classic of Urdu literature.',
    fullBio: 'Bano Qudsia (Bano Aapa) was married to Ashfaq Ahmed and wrote groundbreaking novels, TV dramas (Aadhi Baat), and short stories exploring human ethics, Sufism, and society.',
    impactDomain: 'Global',
    tags: ['Raja Gidh', 'Urdu Classics', 'Sitara-e-Imtiaz', 'Lahore'],
    keyContributions: [
      'Authored modern Urdu classic novel "Raja Gidh" (1981)',
      'Awarded Sitara-e-Imtiaz and Kamal-e-Fun Award'
    ]
  }),

  createPersonality({
    id: 'hakeem-said',
    name: 'Hakeem Muhammad Said',
    urduName: 'حکیم محمد سعید',
    title: 'Founder of Hamdard & Madinat al-Hikmah',
    category: 'Social Workers',
    lifespan: '1920 – 1998',
    birthPlace: 'Delhi / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Love Pakistan, build Pakistan, serve humanity with truth.',
    shortDescription: 'Eastern medicine pioneer (Eastern Medicine/Unani), former Governor of Sindh, philanthropist, and founder of Hamdard Foundation.',
    fullBio: 'Hakeem Muhammad Said was a renowned scholar, Eastern medicine practitioner, and founder of Hamdard Pakistan and Madinat al-Hikmah (City of Education and Science) in Karachi.',
    impactDomain: 'Global',
    tags: ['Hamdard Founder', 'Madinat al-Hikmah', 'Governor of Sindh', 'Rooh Afza'],
    keyContributions: [
      'Founded Hamdard Laboratories Pakistan and Madinat al-Hikmah educational complex',
      'Governor of Sindh (1993–1996)',
      'Nishan-e-Imtiaz recipient'
    ]
  }),

  // --- ARTISTS, MUSICIANS & PERFORMERS ---
  createPersonality({
    id: 'sadequain',
    name: 'Sadequain Ahmed Naqvi',
    urduName: 'صادقین احمد نقوی',
    title: 'Master Calligrapher, Painter & Muralist',
    category: 'Artists & Musicians',
    lifespan: '1930 – 1987',
    birthPlace: 'Amroha / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Art is the reflection of divine truth and human cosmic struggle.',
    shortDescription: 'World-renowned painter and calligrapher known for monumental murals at Mangla Dam, Lahore Museum, and Frere Hall Karachi.',
    fullBio: 'Sadequain was Pakistan\'s quintessential avant-garde artist. He revolutionized Quranic calligraphy with bold figurative lines and gifted his gigantic murals freely to public institutions.',
    impactDomain: 'Global',
    tags: ['Master Calligrapher', 'Frere Hall Mural', 'Mangla Dam Mural', 'Nishan-e-Imtiaz'],
    keyContributions: [
      'Painted monumental public murals including "Arz-o-Samawat" at Frere Hall Karachi',
      'Awarded Tamgha-e-Imtiaz, Pride of Performance, and Nishan-e-Imtiaz'
    ]
  }),

  createPersonality({
    id: 'reshma',
    name: 'Reshma',
    urduName: 'ریشمہ',
    title: 'Nightingale of the Desert (Legendary Folk Singer)',
    category: 'Artists & Musicians',
    lifespan: '1947 – 2013',
    birthPlace: 'Bikaner, Rajasthan / Lahore',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Music is a gift from God born directly from the soul of the desert.',
    shortDescription: 'Iconic folk singer discovered at Radio Pakistan whose deep vocal timbre captivated millions with "Lambi Judai" and "Dama Dam Mast Qalandar".',
    fullBio: 'Reshma was an unlettered folk singing sensation with an extraordinary natural vocal range. She performed internationally across Asia and Europe and sang evergreen tracks like "Hai O Rabba" and "Lambi Judai".',
    impactDomain: 'Global',
    tags: ['Lambi Judai', 'Desert Folk Queen', 'Sitara-e-Imtiaz', 'Radio Pakistan'],
    keyContributions: [
      'Recorded timeless folk songs performed across South Asia',
      'Awarded Sitara-e-Imtiaz and Pride of Performance'
    ]
  }),

  createPersonality({
    id: 'mehdi-hassan',
    name: 'Khan Sahib Mehdi Hassan',
    urduName: 'خان صاحب مہدی حسن',
    title: 'King of Ghazal (Shahenshah-e-Ghazal)',
    category: 'Artists & Musicians',
    lifespan: '1927 – 2012',
    birthPlace: 'Jhunjhunu, Rajasthan / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Ghazal singing demands pure devotion to sur, emotion, and poetic reverence.',
    shortDescription: 'Unrivaled ghazal maestro whose classical voice defined South Asian playback music for 40 years, praised by Lata Mangeshkar.',
    fullBio: 'Mehdi Hassan was the undisputed King of Ghazal. His flawless classical mastery and baritone tone breathed immortal life into ghazals by Faiz, Ghalib, and Iqbal.',
    impactDomain: 'Global',
    tags: ['Shahenshah-e-Ghazal', 'Ranjish Hi Sahi', 'Nishan-e-Imtiaz', 'Playback Legend'],
    keyContributions: [
      'Recorded over 25,000 songs and ghazals including "Ranjish Hi Sahi"',
      'Awarded Nishan-e-Imtiaz, Pride of Performance, and Nepal\'s Order of Gorkha Dakshina Bahu'
    ]
  }),

  createPersonality({
    id: 'alamgir',
    name: 'Alamgir',
    urduName: 'عالمگیر',
    title: 'Pioneer of South Asian Pop Music',
    category: 'Artists & Musicians',
    lifespan: '1955 – Present',
    birthPlace: 'East Pakistan / Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Music is the universal language that connects hearts across borders.',
    shortDescription: 'Pop music pioneer who introduced modern acoustic-pop beats to Pakistan TV with hits like "Albela Rahi" and "Dekha Na Tha".',
    fullBio: 'Alamgir is recognized as the father of modern Urdu pop music. Performing on PTV in the 1970s, his energetic guitar playing and melodious vocals inspired generations of South Asian pop stars.',
    impactDomain: 'Global',
    tags: ['Pop Pioneer', 'Albela Rahi', 'PTV Legend', 'Pride of Performance'],
    keyContributions: [
      'Pioneered Pakistani pop music genre with evergreen hit "Albela Rahi" (1973)',
      'Awarded Pride of Performance (2013)'
    ]
  }),

  // --- SPORTS CHAMPIONS ---
  createPersonality({
    id: 'shoaib-akhtar',
    name: 'Shoaib Akhtar',
    urduName: 'شعیب اختر',
    title: 'The Rawalpindi Express (Fastest Bowler in Cricket History)',
    category: 'Sports Champions',
    lifespan: '1975 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'When I ran in to bowl, I bowled with my entire heart for my country.',
    shortDescription: 'Fast bowler who officially broke the 100 mph (161.3 km/h) speed barrier in international cricket at 2003 World Cup.',
    fullBio: 'Shoaib Akhtar, dubbed "The Rawalpindi Express", is revered as one of the most lethal fast bowlers in cricket history. He clocked the fastest delivery ever recorded (161.3 km/h) against England in 2003.',
    impactDomain: 'Global',
    tags: ['Rawalpindi Express', '161.3 kmh Record', 'Cricket Legend', 'Fast Bowler'],
    keyContributions: [
      'Official world record holder for fastest delivery in cricket history (161.3 km/h)',
      'Took 444 international wickets across Tests and ODIs for Pakistan'
    ]
  }),

  createPersonality({
    id: 'zaheer-abbas',
    name: 'Syed Zaheer Abbas Kirmani',
    urduName: 'ظہیر عباس',
    title: 'The Asian Bradman (ICC Hall of Fame Legend)',
    category: 'Sports Champions',
    lifespan: '1947 – Present',
    birthPlace: 'Sialkot, Punjab',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Timing and elegance elevate batting into a fine art form.',
    shortDescription: 'Master batsman known as "The Asian Bradman", the only Asian player to score 100 first-class centuries.',
    fullBio: 'Zaheer Abbas was one of cricket\'s most elegant stroke-makers. He scored 108 first-class centuries (5018 runs in Tests) and served as President of the International Cricket Council (ICC).',
    impactDomain: 'Global',
    tags: ['Asian Bradman', '100 First Class Centuries', 'ICC President', 'Hall of Fame'],
    keyContributions: [
      'Only Asian batsman to score over 100 first-class centuries (108 centuries)',
      'Inducted into ICC Cricket Hall of Fame in 2020'
    ]
  }),

  createPersonality({
    id: 'inzamam-ul-haq',
    name: 'Inzamam-ul-Haq',
    urduName: 'انضمام الحق',
    title: '1992 World Cup Hero & Former Test Captain',
    category: 'Sports Champions',
    lifespan: '1970 – Present',
    birthPlace: 'Multan, Punjab',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'In high-pressure moments, calmness is your greatest strength.',
    shortDescription: 'Multan-born master batsman whose explosive 60 off 37 balls won the 1992 World Cup semi-final, scoring 20,000+ international runs.',
    fullBio: 'Inzamam-ul-Haq was Pakistan\'s leading ODI run-scorer and successful Test captain. He played pivotal match-winning innings in the 1992 World Cup triumph and scored 25 Test centuries.',
    impactDomain: 'Global',
    tags: ['1992 World Cup Hero', 'Multan', 'Test Captain', 'Sitara-e-Imtiaz'],
    keyContributions: [
      'Scored 20,580 international runs for Pakistan across Tests and ODIs',
      'Match-winning hero of 1992 Cricket World Cup semi-final and final'
    ]
  }),

  createPersonality({
    id: 'muniba-mazari',
    name: 'Muniba Mazari',
    urduName: 'منیبہ مزاری',
    title: 'Iron Lady of Pakistan (Artist & UN Goodwill Ambassador)',
    category: 'Social Workers',
    lifespan: '1987 – Present',
    birthPlace: 'Rahim Yar Khan, Punjab',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Embrace your adversity; let your scars become your wings.',
    shortDescription: 'Wheelchair-bound artist, motivational speaker, TV anchor, and Pakistan\'s first National UN Women Goodwill Ambassador.',
    fullBio: 'Muniba Mazari survived a life-altering accident at age 21 that left her paralyzed. She turned her adversity into inspiration, becoming an acclaimed painter, motivational speaker, and advocate for disability rights.',
    impactDomain: 'Global',
    tags: ['Iron Lady', 'UN Goodwill Ambassador', 'Disability Rights', 'BBC 100 Women'],
    keyContributions: [
      'First Pakistani UN Women National Goodwill Ambassador',
      'Named in BBC 100 Most Influential Women (2015) and Forbes 30 Under 30'
    ]
  }),

  // --- RECENT & ICONIC HERITAGE ADDITIONS ---
  createPersonality({
    id: 'arfa-karim',
    name: 'Arfa Abdul Karim Randhawa',
    urduName: 'عارفہ عبد الکریم رندھاوا',
    title: 'World\'s Youngest Microsoft Certified Professional (MCP)',
    category: 'Engineers & Tech',
    lifespan: '1995 – 2012',
    birthPlace: 'Ram Diwali, Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'If you want to do something big in life, remember that hesitation only exists in the mind.',
    shortDescription: 'Computer prodigy who became the world\'s youngest Microsoft Certified Professional at age 9 in 2004, personally invited by Bill Gates.',
    fullBio: 'Arfa Abdul Karim Randhawa was a Pakistani computer prodigy from Faisalabad who achieved global acclaim in 2004 when she became the youngest Microsoft Certified Professional in the world at age 9. Bill Gates personally invited her to Microsoft headquarters in Redmond. She represented Pakistan at international tech forums and received the Fatima Jinnah Gold Medal and Pride of Performance award before her tragic passing in 2012.',
    impactDomain: 'Global',
    tags: ['Arfa Karim', 'Youngest MCP', 'Microsoft Prodigy', 'Bill Gates', 'Faisalabad', 'Pride of Performance'],
    keyContributions: [
      'World\'s youngest Microsoft Certified Professional at age 9 in 2004',
      'Awarded President\'s Award for Pride of Performance and Fatima Jinnah Gold Medal',
      'Represented Pakistan at TechEd developers conference in Barcelona'
    ]
  }),

  createPersonality({
    id: 'muhammad-rashid-naseem',
    name: 'Muhammad Rashid Naseem',
    urduName: 'محمد راشد نسیم',
    title: 'World Record-Breaking Martial Arts Master (100+ Guinness Records)',
    category: 'Sports Champions',
    lifespan: '1980 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'With unrelenting focus and discipline, a Pakistani athlete can conquer any world record.',
    shortDescription: 'Martial artist who holds over 100 Guinness World Records, the highest number of martial arts world records by an individual.',
    fullBio: 'Muhammad Rashid Naseem is a master martial artist and founder of the Pakistan Academy of Martial Arts in Karachi. He is internationally recognized for breaking over 100 Guinness World Records in martial arts disciplines including speed elbow strikes, headbutts, nunchaku strikes, and breaking objects.',
    impactDomain: 'Global',
    tags: ['Guinness World Records', 'Martial Arts', '100 Records', 'Karachi', 'PAMA'],
    keyContributions: [
      'Set over 100 official Guinness World Records in martial arts disciplines',
      'Founder and President of Pakistan Academy of Martial Arts (PAMA)',
      'Represented Pakistan on major global television sports platforms'
    ]
  }),

  createPersonality({
    id: 'asim-munir',
    name: 'Field Marshal General Syed Asim Munir',
    urduName: 'فیلڈ مارشل جنرل سید عاصم منیر',
    title: 'Field Marshal & Chief of Army Staff (COAS) of Pakistan',
    category: 'Military Heroes',
    lifespan: '1965 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The defense, sovereignty, and honor of Pakistan are sacred and inviolable.',
    shortDescription: '17th Chief of Army Staff of Pakistan, decorated with Nishan-e-Imtiaz (Military) and Sword of Honour from Officers Training School.',
    fullBio: 'General Syed Asim Munir NI(M) is a four-star rank army general serving as the 17th Chief of Army Staff of the Pakistan Army. Commissioned into the 23rd Battalion of the Frontier Force Regiment, he previously served as Director-General of Inter-Services Intelligence (ISI) and Director-General of Military Intelligence (MI). He was awarded the Sword of Honour at Officers Training School Mangla.',
    impactDomain: 'National',
    tags: ['Chief of Army Staff', 'COAS', 'Nishan-e-Imtiaz', 'Frontier Force', 'Sword of Honour'],
    keyContributions: [
      '17th Chief of Army Staff of the Pakistan Army',
      'Awarded Sword of Honour from OTS Mangla',
      'Served as Director-General of Inter-Services Intelligence (ISI) and Military Intelligence (MI)'
    ],
    milestones: [
      { year: '1965', title: 'Birth in Rawalpindi', description: 'Born in Dheri Hassanabad, Rawalpindi into a respected family, memorizing the Holy Quran at a young age.' },
      { year: '1986', title: 'Sword of Honour & Commission', description: 'Graduated from Officers Training School (OTS) Mangla with the prestigious Sword of Honour, commissioned into the 23rd Battalion of the Frontier Force Regiment.' },
      { year: '2017', title: 'Director-General Military Intelligence (DG MI)', description: 'Promoted to Major General and appointed DG MI, managing military intelligence operations.' },
      { year: '2018', title: 'Director-General ISI & Lt. General', description: 'Promoted to Lieutenant General and assumed office as Director-General of Inter-Services Intelligence (DG ISI).' },
      { year: '2022 (Nov 24)', title: '17th Chief of Army Staff (COAS)', description: 'Appointed 17th Chief of Army Staff of the Pakistan Army and awarded Nishan-e-Imtiaz (Military).' }
    ]
  }),

  createPersonality({
    id: 'sajid-sadpara',
    name: 'Sajid Ali Sadpara',
    urduName: 'ساجد علی سدپارہ',
    title: 'High-Altitude Mountaineer (Summited K2 & Everest Without Supplemental Oxygen)',
    category: 'Sports Champions',
    lifespan: '1998 – Present',
    birthPlace: 'Sadpara Village, Skardu, Gilgit-Baltistan',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Climbing without supplementary oxygen is my tribute to the pure spirit of the mountains and my father Ali Sadpara.',
    shortDescription: 'Prolific high-altitude mountaineer who has summited K2, Mount Everest, Nanga Parbat, Annapurna, and Manaslu without supplementary oxygen.',
    fullBio: 'Sajid Ali Sadpara is a world-renowned Pakistani high-altitude mountaineer from Skardu, Gilgit-Baltistan. Son of legendary climber Ali Sadpara, Sajid achieved international acclaim by summiting K2 twice, including a historic ascent without supplementary oxygen. He has scaled multiple 8,000-meter peaks oxygen-free.',
    impactDomain: 'Global',
    tags: ['K2', 'Mountaineering', 'Oxygen Free Ascent', 'Skardu', 'Gilgit-Baltistan', 'Ali Sadpara'],
    keyContributions: [
      'Successfully summited K2 twice, including landmark ascent without supplementary oxygen',
      'Scaled Mount Everest, Nanga Parbat, Annapurna, and Manaslu without oxygen support',
      'Pioneered safety and high-altitude rescue operations in the Karakoram range'
    ],
    milestones: [
      { year: '1998', title: 'Birth in Skardu', description: 'Born in Sadpara village near Skardu, Gilgit-Baltistan, learning high-altitude mountaineering from his father Ali Sadpara.' },
      { year: '2019', title: 'First K2 Ascent at Age 20', description: 'Summited K2 (8,611m) alongside his father Ali Sadpara at age 20.' },
      { year: '2021', title: 'Winter K2 Search Mission', description: 'Led winter search and recovery mission on K2 honoring his late father Ali Sadpara.' },
      { year: '2022', title: 'Oxygen-Free K2 Summit', description: 'Successfully scaled K2 without supplementary oxygen, setting a landmark record for Pakistan.' },
      { year: '2023', title: 'Summited Everest & Nanga Parbat Oxygen-Free', description: 'Achieved oxygen-free ascents of Mount Everest, Nanga Parbat, Annapurna, and Manaslu in a single season.' }
    ]
  })
];
