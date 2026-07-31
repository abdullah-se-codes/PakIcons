import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const SPORTS_CHAMPIONS: Personality[] = [
  createPersonality({
    id: 'jahangir-khan',
    name: 'Jahangir Khan',
    urduName: 'جہانگیر خان',
    title: 'Unbeaten Squash Legend (555 Match Streak)',
    category: 'Sports Champions',
    lifespan: '1963 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'When you are winning, you train like you are losing.',
    shortDescription: 'Greatest squash player in history who achieved an incredible 555 consecutive match win streak and 10 British Open titles.',
    fullBio: 'Jahangir Khan is widely regarded as the greatest squash player of all time. Between 1981 and 1986, he won 555 consecutive matches, recorded in the Guinness Book of World Records as the longest winning streak by any professional athlete in sports history. He won 10 British Open titles and 6 World Open titles.',
    impactDomain: 'Global',
    tags: ['Squash', '555 Streak', 'World Champion', 'British Open', 'Guinness World Record'],
    keyContributions: [
      '555 consecutive match win streak (longest in professional sports history)',
      '10-time British Open Champion (1982–1991)',
      '6-time World Open Champion',
      'President of the World Squash Federation (2002–2008)'
    ],
    milestones: [
      { year: '1963', title: 'Birth in Karachi', description: 'Born into a distinguished squash dynasty, overcoming physical frailty as a child through intense discipline.' },
      { year: '1979', title: 'World Amateur Champion at 15', description: 'Became the youngest winner of the World Amateur Squash Championship at age 15.' },
      { year: '1981', title: 'Start of Unbeaten 555-Match Streak', description: 'Defeated Geoff Hunt to become youngest World Open Champion, commencing a 5-year unbeaten streak.' },
      { year: '1991', title: '10th Consecutive British Open', description: 'Claimed a 10th consecutive British Open title, a Guinness World Record unmatched in racket sports.' },
      { year: '2002', title: 'World Squash Federation President', description: 'Elected President of the World Squash Federation, guiding international squash governance.' }
    ],
    awards: [{ year: '1984', title: 'Hilal-e-Imtiaz', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'jansher-khan',
    name: 'Jansher Khan',
    urduName: 'جانشیر خان',
    title: '8-Time World Open Squash Champion',
    category: 'Sports Champions',
    lifespan: '1969 – Present',
    birthPlace: 'Peshawar, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Fitness and focus can conquer any wall.',
    shortDescription: 'Dominant squash king who won 8 World Open titles and 6 British Open crowns during the 1990s.',
    fullBio: 'Jansher Khan dominated world squash throughout the late 1980s and 1990s. Hailing from Peshawar, he won a record 8 World Open titles and 6 British Open championships, maintaining the World No. 1 ranking for over 97 months.',
    impactDomain: 'Global',
    tags: ['Squash', '8 World Opens', 'World No. 1', 'Peshawar'],
    keyContributions: [
      'Record 8 World Open titles',
      '6 British Open titles',
      'World No. 1 ranking held for 97 consecutive months'
    ]
  }),

  createPersonality({
    id: 'hashim-khan',
    name: 'Hashim Khan',
    urduName: 'ہاشم خان',
    title: 'Patriarch of the Khan Squash Dynasty',
    category: 'Sports Champions',
    lifespan: '1914 – 2014',
    birthPlace: 'Nawan Shehr, Peshawar, KPK',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Play hard, respect the court, never surrender.',
    shortDescription: 'Founding patriarch of Pakistan\'s world squash dominance who won 7 British Open titles starting at age 37.',
    fullBio: 'Hashim Khan was the pioneer who established Pakistan as the undisputed superpower of world squash. Starting his international career in his late 30s, he won 7 British Open titles between 1951 and 1958, laying the groundwork for decades of Pakistani squash dominance.',
    impactDomain: 'Global',
    tags: ['Squash', '7 British Opens', 'Pioneer', 'Peshawar'],
    keyContributions: [
      'Pioneered Pakistani squash supremacy in the 1950s',
      'Won 7 British Open titles (1951–1958)',
      'Trained generations of world champions including Azam Khan and Jahangir Khan'
    ]
  }),

  createPersonality({
    id: 'imran-khan',
    name: 'Imran Khan',
    urduName: 'عمران خان',
    title: '1992 World Cup Winning Captain & 22nd Prime Minister',
    category: 'Sports Champions',
    lifespan: '1952 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Never give up, no matter how hard the struggle; truth always prevails.',
    shortDescription: '1992 World Cup winning cricket captain, 22nd Prime Minister of Pakistan, founder of PTI, and builder of Shaukat Khanum Cancer Hospital.',
    fullBio: 'Imran Khan is one of cricket\'s greatest all-rounders who captained Pakistan to victory in the 1992 World Cup. He later served as the 22nd Prime Minister of Pakistan (2018–2022), founded the Pakistan Tehreek-e-Insaf (PTI), and established Shaukat Khanum Memorial Cancer Hospital and Namal University.',
    impactDomain: 'Global',
    tags: ['Cricket', '1992 World Cup', 'Prime Minister', 'PTI Founder', 'Shaukat Khanum', 'Namal University'],
    keyContributions: [
      'Captained Pakistan to the 1992 ICC Cricket World Cup victory in Melbourne',
      '22nd Prime Minister of Pakistan (2018–2022)',
      'Built Shaukat Khanum Memorial Cancer Hospital providing 75% free patient care',
      'Founded Namal Knowledge City University in Mianwali'
    ],
    milestones: [
      { year: '1952', title: 'Birth in Lahore', description: 'Born in Lahore, studying at Aitchison College and Oxford University.' },
      { year: '1971', title: 'Test Debut for Pakistan', description: 'Made international Test debut at age 18 against England at Edgbaston.' },
      { year: '1992', title: '1992 Cricket World Cup Glory', description: 'Captained Pakistan to historic victory in the ICC Cricket World Cup at the Melbourne Cricket Ground.' },
      { year: '1994', title: 'Shaukat Khanum Cancer Hospital', description: 'Built Pakistan\'s first state-of-the-art cancer hospital offering free treatment to underprivileged patients.' },
      { year: '2018', title: '22nd Prime Minister of Pakistan', description: 'Elected Prime Minister of Pakistan, introducing Sehat Sahulat card healthcare reforms.' }
    ]
  }),

  createPersonality({
    id: 'wasim-akram',
    name: 'Wasim Akram',
    urduName: 'وسیم اکرم',
    title: 'Sultan of Swing',
    category: 'Sports Champions',
    lifespan: '1966 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The ball talks when you bowl with heart and wrist.',
    shortDescription: 'Greatest left-arm fast bowler in cricket history who took 502 ODI and 414 Test wickets.',
    fullBio: 'Wasim Akram is celebrated worldwide as the "Sultan of Swing." Master of reverse swing, he took 502 ODI wickets and 414 Test wickets, taking two back-to-back wickets in the 1992 World Cup final that sealed Pakistan\'s world title.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Sultan of Swing', '500 Wickets', '1992 World Cup', 'Fast Bowler'],
    keyContributions: [
      'First bowler in ODI history to reach 500 wickets',
      '414 Test wickets and 502 ODI wickets',
      'Key match-winner in 1992 ICC World Cup Final'
    ]
  }),

  createPersonality({
    id: 'javed-miandad',
    name: 'Javed Miandad',
    urduName: 'جاوید میانداد',
    title: 'Street-Smart Hero of Sharjah',
    category: 'Sports Champions',
    lifespan: '1957 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Every ball is a battle. Fight until the last run.',
    shortDescription: 'Legendary batsman famous for hit-on-last-ball six in Sharjah (1986) and scoring 8,832 Test runs.',
    fullBio: 'Javed Miandad is Pakistan\'s legendary middle-order batsman known for his tactical genius and high-pressure clutch performances. Famous for hitting a iconic last-ball six off Chetan Sharma at Sharjah in 1986 to win the Austral-Asia Cup.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Sharjah Six', '8832 Runs', 'Karachi', 'Clutch Batsman'],
    keyContributions: [
      'Hit iconic last-ball six in Sharjah 1986 to win Austral-Asia Cup',
      'Scored 8,832 Test runs with 23 centuries',
      '6 consecutive World Cup appearances (1975–1996)'
    ]
  }),

  createPersonality({
    id: 'arshad-nadeem',
    name: 'Arshad Nadeem',
    urduName: 'ارشد ندیم',
    title: 'Paris 2024 Olympic Gold Medalist (Javelin Throw)',
    category: 'Sports Champions',
    lifespan: '1997 – Present',
    birthPlace: 'Mian Channu, Khanewal, Punjab',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'When you represent 240 million Pakistanis, failure is not an option.',
    shortDescription: 'Olympic Gold Medalist who shattered the Olympic Javelin record with a historic 92.97m throw at Paris 2024.',
    fullBio: 'Arshad Nadeem made international history at the Paris 2024 Olympic Games by winning Pakistan\'s first individual Olympic gold medal in athletics. He set a new Olympic Record of 92.97 meters, defeating top world competitors and ending a 32-year Olympic medal drought for Pakistan.',
    impactDomain: 'Global',
    tags: ['Olympic Gold', 'Javelin Record', 'Paris 2024', 'Mian Channu', 'Athletics Hero'],
    keyContributions: [
      'Won Gold Medal at Paris 2024 Olympics',
      'Set new Olympic Games Record in Javelin (92.97 meters)',
      'Commonwealth Games Gold Medalist (2022)'
    ],
    awards: [{ year: '2024', title: 'Hilal-e-Imtiaz', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'younis-khan',
    name: 'Younis Khan',
    urduName: 'یونس خان',
    title: '10,000 Test Runs Legend & 2009 T20 World Champion',
    category: 'Sports Champions',
    lifespan: '1977 – Present',
    birthPlace: 'Mardan, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Work hard in silence and let your bat make the noise.',
    shortDescription: 'Only Pakistani batsman to score 10,000+ Test runs and captain who led Pakistan to 2009 ICC T20 World Cup title.',
    fullBio: 'Younis Khan is Pakistan\'s highest run-scorer in Test cricket history (10,099 runs with 34 centuries). He captained Pakistan to victory in the 2009 ICC World Twenty20 in England.',
    impactDomain: 'Global',
    tags: ['Cricket', '10000 Test Runs', 'T20 World Champion', 'Mardan', 'Captain'],
    keyContributions: [
      '10,099 Test runs (1st Pakistani to cross 10,000 runs)',
      '34 Test centuries (Highest for Pakistan)',
      'Captained Pakistan to 2009 ICC T20 World Cup victory'
    ]
  }),

  createPersonality({
    id: 'babar-azam',
    name: 'Babar Azam',
    urduName: 'بابر اعظم',
    title: 'Modern Master & Multi-Format Captain',
    category: 'Sports Champions',
    lifespan: '1994 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Consistency is the true test of greatness.',
    shortDescription: 'World\'s leading modern cover-drive master who ranked No. 1 ICC ODI batsman for years.',
    fullBio: 'Babar Azam is Pakistan\'s star modern cricket captain and batsman. Famous for his majestic cover drives and elegant technique, he broke records as the fastest batsman to reach several ODI century milestones.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Babar Azam', 'Cover Drive', 'ICC No. 1', 'Lahore'],
    keyContributions: [
      'Ranked No. 1 ICC ODI Batsman for over 1000 days',
      'Fastest player to 19 ODI centuries in world cricket history',
      'Led Pakistan to ICC T20 World Cup 2022 Final'
    ],
    milestones: [
      { year: '1994', title: 'Birth in Lahore', description: 'Born in Lahore, serving as a ball boy at Gaddafi Stadium while perfecting his classic strokeplay.' },
      { year: '2015', title: 'International Debut', description: 'Made ODI debut against Zimbabwe in Lahore, scoring a fluent half-century.' },
      { year: '2016', title: 'Three Consecutive ODI Centuries', description: 'Smashed 3 back-to-back ODI centuries against West Indies in UAE, announcing world-class genius.' },
      { year: '2021', title: 'Ranked ICC World No. 1 ODI Batsman', description: 'Surpassed top global stars to achieve No. 1 ICC ODI batsman ranking, holding it for over 1,000 days.' },
      { year: '2023', title: 'Conferred Sitara-e-Imtiaz', description: 'Became the youngest cricketer in Pakistan history to be awarded the Sitara-e-Imtiaz.' }
    ]
  }),

  createPersonality({
    id: 'sohail-abbas',
    name: 'Sohail Abbas',
    urduName: 'سهیل عباس',
    title: 'World Record Drag-Flick Scorer (348 Goals)',
    category: 'Sports Champions',
    lifespan: '1975 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'The drag-flick requires rhythm, speed, and lethal intent.',
    shortDescription: 'Field hockey legend who holds the all-time world record for most international goals scored (348 goals).',
    fullBio: 'Sohail Abbas is universally regarded as the king of drag-flicks in international field hockey. During his prolific career, he scored 348 international goals, an official world record.',
    impactDomain: 'Global',
    tags: ['Hockey', '348 Goals', 'Drag-Flick King', 'Karachi', 'World Record'],
    keyContributions: [
      'All-time highest international goal scorer in field hockey history (348 goals)',
      'Fastest player to score 100 and 200 international goals',
      'Asian Games Gold Medalist'
    ]
  }),

  createPersonality({
    id: 'samiullah-khan',
    name: 'Samiullah Khan',
    urduName: 'سمیع اللہ خان',
    title: 'The Flying Horse of World Hockey',
    category: 'Sports Champions',
    lifespan: '1951 – Present',
    birthPlace: 'Bhawawalpur, Punjab',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Speed on the flank breaks any defense.',
    shortDescription: 'Legendary left-winger hockey maestro known as "The Flying Horse" for his breathtaking sprinting speed.',
    fullBio: 'Samiullah Khan was Pakistan\'s legendary left-winger in field hockey during the golden era of the 1970s and 1980s. Known as "The Flying Horse," his rapid flank runs guided Pakistan to World Cup and Asian Games gold medals.',
    impactDomain: 'Global',
    tags: ['Hockey', 'Flying Horse', 'World Champion', 'Bahawalpur'],
    keyContributions: [
      '1978 and 1982 Field Hockey World Cup Winner',
      'Captained Pakistan to 1982 Champions Trophy triumph'
    ]
  }),

  createPersonality({
    id: 'hassan-sardar',
    name: 'Hassan Sardar',
    urduName: 'حسن سردار',
    title: '1984 Olympic Gold & World Cup Hockey Hero',
    category: 'Sports Champions',
    lifespan: '1957 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Dribbling past defenders is an art form of joy.',
    shortDescription: 'Center-forward genius who scored 11 goals in 1982 World Cup and led Pakistan to 1984 Olympic Gold in Los Angeles.',
    fullBio: 'Hassan Sardar is one of the deadliest center-forwards in field hockey history. He was named Player of the Tournament in the 1982 World Cup where he scored 11 goals, and led Pakistan to Olympic Gold at the 1984 Los Angeles Games.',
    impactDomain: 'Global',
    tags: ['Hockey', 'Olympic Gold 1984', 'World Cup MVP', 'Karachi'],
    keyContributions: [
      'Gold Medalist at 1984 Los Angeles Olympic Games',
      'Player of the Tournament at 1982 World Cup (11 goals)'
    ]
  }),

  createPersonality({
    id: 'shahbaz-ahmed',
    name: 'Shahbaz Ahmed',
    urduName: 'شہباز احمد',
    title: 'The Marathon Man of Hockey (1994 World Champion)',
    category: 'Sports Champions',
    lifespan: '1968 – Present',
    birthPlace: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Hockey is played in the mind before it touches the turf.',
    shortDescription: 'World Cup winning hockey captain known as "The Marathon Man" for his unmatched dribbling and speed.',
    fullBio: 'Shahbaz Ahmed Senior is considered one of the finest wingers in field hockey history. He captained Pakistan to win the 1994 Hockey World Cup in Sydney, Australia, earning the tournament MVP award.',
    impactDomain: 'Global',
    tags: ['Hockey', '1994 World Cup', 'Marathon Man', 'Faisalabad'],
    keyContributions: [
      'Captained Pakistan to 1994 World Cup victory in Sydney',
      'Voted Best Player of World Cup in 1990 and 1994'
    ]
  }),

  createPersonality({
    id: 'muhammad-asif',
    name: 'Muhammad Asif',
    urduName: 'محمد آصف',
    title: '2-Time IBSF World Snooker Champion',
    category: 'Sports Champions',
    lifespan: '1982 – Present',
    birthPlace: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1584813539806-1a27d422aa53?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Patience and cue ball control win championships.',
    shortDescription: 'Master cueist who won the IBSF World Snooker Championship twice (2012 and 2019).',
    fullBio: 'Muhammad Asif is Pakistan\'s premier snooker player who won the IBSF World Amateur Snooker Championship in 2012 (Bulgaria) and 2019 (Turkey).',
    impactDomain: 'Global',
    tags: ['Snooker', 'World Champion', 'IBSF', 'Faisalabad'],
    keyContributions: [
      '2-Time IBSF World Snooker Champion (2012, 2019)',
      'Asian Team Snooker Champion'
    ]
  }),

  createPersonality({
    id: 'aisam-ul-haq',
    name: 'Aisam-ul-Haq Qureshi',
    urduName: 'اعصام الحق قریشی',
    title: 'Grand Slam Tennis Finalist & Peace Ambassador',
    category: 'Sports Champions',
    lifespan: '1980 – Present',
    birthPlace: 'Lahore, Punjab',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Sport has no borders; it builds bridges of friendship.',
    shortDescription: 'Pakistan\'s top international tennis star who reached the US Open finals and won 18 ATP Doubles titles.',
    fullBio: 'Aisam-ul-Haq Qureshi is Pakistan\'s most successful professional tennis player. He reached the finals of the 2010 US Open in Men\'s Doubles and Mixed Doubles, and won 18 ATP Tour doubles titles.',
    impactDomain: 'Global',
    tags: ['Tennis', 'US Open Finalist', 'ATP Champion', 'Lahore', 'Peace Ambassador'],
    keyContributions: [
      'Finalist at US Open 2010 (Men\'s Doubles & Mixed Doubles)',
      '18 ATP Tour Doubles titles',
      'Arthur Ashe Humanitarian of the Year Award recipient'
    ]
  }),

  createPersonality({
    id: 'hanif-mohammad',
    name: 'Hanif Mohammad',
    urduName: 'حنیف محمد',
    title: 'The Little Master (337 Runs Legendary Marathon)',
    category: 'Sports Champions',
    lifespan: '1934 – 2016',
    birthPlace: 'Junagadh, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Defend your wicket as if it is your motherland.',
    shortDescription: 'Cricket pioneer who batted for 16 hours to score 337 runs against West Indies, saving a Test match in 1958.',
    fullBio: 'Hanif Mohammad was known as "The Little Master" and was Pakistan\'s original batting giant. In 1958 at Bridgetown, he batted for 970 minutes (16 hours 10 minutes) to score 337 runs against West Indies—the longest innings in Test cricket history.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Little Master', '337 Runs', 'Marathon Innings'],
    keyContributions: [
      'Scored 337 runs in 970 minutes vs West Indies (Longest Test innings in history)',
      'Scored 499 runs in first-class cricket (world record for 35 years)'
    ]
  }),

  createPersonality({
    id: 'zaheer-abbas',
    name: 'Zaheer Abbas',
    urduName: 'ظہیر عباس',
    title: 'Asian Bradman',
    category: 'Sports Champions',
    lifespan: '1947 – Present',
    birthPlace: 'Sialkot, Punjab',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Spectacles never blur vision when your eyes see the ball early.',
    shortDescription: 'Batting genius known as "Asian Bradman", the only Asian batsman to score 100 first-class centuries.',
    fullBio: 'Zaheer Abbas is celebrated as the "Asian Bradman" for his elegant batting style. He is the only Asian cricketer to score 100 centuries in first-class cricket.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Asian Bradman', '100 First Class Centuries', 'Sialkot'],
    keyContributions: [
      '108 first-class centuries (Only Asian player in 100-century club)',
      'President of ICC (2015–2016)'
    ]
  }),

  createPersonality({
    id: 'waqar-younis',
    name: 'Waqar Younis',
    urduName: 'وقار یونس',
    title: 'Toe-Crushing Reverse Swing Master',
    category: 'Sports Champions',
    lifespan: '1971 – Present',
    birthPlace: 'Vehari, Punjab',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'A yorker at 150 km/h leaves no room for excuses.',
    shortDescription: 'Lethal fast bowler who took 373 Test and 416 ODI wickets forming the iconic "Two Ws" tandem with Wasim Akram.',
    fullBio: 'Waqar Younis is one of the fastest and most devastating bowlers in cricket history. Famed for his in-swinging yorkers, he took 373 Test wickets and 416 ODI wickets.',
    impactDomain: 'Global',
    tags: ['Cricket', 'Toe Crusher', 'Reverse Swing', 'Vehari Express'],
    keyContributions: [
      '373 Test wickets & 416 ODI wickets',
      'Youngest Pakistan Test captain at age 22'
    ]
  }),

  createPersonality({
    id: 'inzamam-ul-haq',
    name: 'Inzamam-ul-Haq',
    urduName: 'انضمام الحق',
    title: '1992 World Cup Match Winner & 11,000 ODI Runs',
    category: 'Sports Champions',
    lifespan: '1970 – Present',
    birthPlace: 'Multan, Punjab',
    image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Power combined with patience conquers any bowling attack.',
    shortDescription: 'Multan-born master batsman who scored 60 off 37 balls in 1992 World Cup semifinal and 11,739 ODI runs.',
    fullBio: 'Inzamam-ul-Haq is Pakistan\'s legendary middle-order batsman and captain from Multan. He burst onto the global stage in 1992 with match-winning innings in the World Cup semifinal and final, scoring over 20,000 international runs.',
    impactDomain: 'Global',
    tags: ['Cricket', '1992 World Cup', '11000 Runs', 'Multan'],
    keyContributions: [
      '11,739 ODI runs and 8,830 Test runs',
      'Hero of 1992 World Cup Semifinal (60 off 37 balls)'
    ]
  }),

  createPersonality({
    id: 'hajra-khan',
    name: 'Hajra Khan',
    urduName: 'ہاجرہ خان',
    title: 'Pioneer Captain of Pakistan Women Football',
    category: 'Sports Champions',
    lifespan: '1993 – Present',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Football is a universal language of strength for girls.',
    shortDescription: 'Trailblazing captain of Pakistan Women National Football Team and first Pakistani player to sign for European clubs.',
    fullBio: 'Hajra Khan is the star skipper of Pakistan\'s Women National Football Team. She broke barriers as the first Pakistani footballer to play professionally for international clubs in the Maldives and Europe.',
    impactDomain: 'National',
    tags: ['Football', 'Women Captain', 'Trailblazer', 'Karachi'],
    keyContributions: [
      'Captain of Pakistan Women\'s National Football Team',
      'First Pakistani female footballer to play in foreign leagues'
    ]
  })
];
