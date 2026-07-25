import { Personality } from '../types';
import { createPersonality } from './dataUtils';

export const CULTURE_AND_ARTS: Personality[] = [
  createPersonality({
    id: 'faiz-ahmed-faiz',
    name: 'Faiz Ahmed Faiz',
    urduName: 'فیض احمد فیض',
    title: 'Lenin Peace Prize Laureate & Master Poet',
    category: 'Writers & Poets',
    lifespan: '1911 – 1984',
    birthPlace: 'Sialkot, Punjab',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Speak, for your lips are free; Speak, for your tongue is still your own.',
    shortDescription: 'Revolutionary Urdu poet, intellectual, and editor who became the first Asian poet to win the Lenin Peace Prize in 1962.',
    fullBio: 'Faiz Ahmed Faiz was an iconic Urdu poet, army officer, journalist, and Nobel nominee in Literature. His verses merged exquisite classical ghazal beauty with revolutionary themes of social justice, anti-imperialism, and human freedom.',
    impactDomain: 'Global',
    tags: ['Lenin Peace Prize', 'Urdu Poetry', 'Revolutionary Poet', 'Nishan-e-Imtiaz', 'Sialkot'],
    keyContributions: [
      'First Asian poet awarded the Lenin Peace Prize (1962)',
      'Nominated for the Nobel Prize in Literature',
      'Authored poetic collections Naqsh-e-Faryadi, Dast-e-Saba, and Zindan-Nama'
    ],
    awards: [
      { year: '1962', title: 'Lenin Peace Prize', organization: 'International Lenin Peace Committee' },
      { year: '1990', title: 'Nishan-e-Imtiaz (Posthumous)', organization: 'Government of Pakistan' }
    ]
  }),

  createPersonality({
    id: 'nusrat-fateh-ali-khan',
    name: 'Ustad Nusrat Fateh Ali Khan',
    urduName: 'استاد نصرت فتح علی خان',
    title: 'Shahenshah-e-Qawwali (King of Qawwali)',
    category: 'Artists & Musicians',
    lifespan: '1948 – 1997',
    birthPlace: 'Faisalabad, Punjab',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'When you sing Qawwali, you do not perform for audience; you perform for the Divine.',
    shortDescription: 'World-renowned Qawwali maestro whose legendary vocal range popularized Sufi devotional music across international concert halls.',
    fullBio: 'Ustad Nusrat Fateh Ali Khan was a music legend with a 25-year international career. Possessing an extraordinary vocal stamina and pitch range, he introduced the traditional devotional Sufi music of Qawwali to global audiences, collaborating with Peter Gabriel, Eddie Vedder, and Hollywood soundtracks.',
    impactDomain: 'Global',
    tags: ['Qawwali', 'Shahenshah-e-Qawwali', 'Sufi Music', 'UNESCO', 'Faisalabad'],
    keyContributions: [
      'Introduced authentic Sufi Qawwali music to mainstream world music',
      'UNESCO Music Prize laureate (1995)',
      'Recorded soundtrack collaborations for Dead Man Walking and Last Temptation of Christ'
    ],
    awards: [{ year: '1987', title: 'President\'s Pride of Performance', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'abida-parveen',
    name: 'Abida Parveen',
    urduName: 'عابدہ پروین',
    title: 'Queen of Sufi Music',
    category: 'Artists & Musicians',
    lifespan: '1954 – Present',
    birthPlace: 'Larkana, Sindh',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Sufism is the path of pure unconditional love.',
    shortDescription: 'Iconic Sufi vocalist whose soulful renditions of Shah Abdul Latif Bhittai and Bulleh Shah have spellbound audiences worldwide.',
    fullBio: 'Abida Parveen is one of Pakistan\'s most revered spiritual vocalists. Born in Larkana, Sindh, she trained under her father Ustad Ghulam Haider and Ustad Salamat Ali Khan, earning the title "Queen of Sufi Music" for her powerful ghazal and kafi performances.',
    impactDomain: 'Global',
    tags: ['Sufi Queen', 'Kafi', 'Ghazal', 'Nishan-e-Imtiaz', 'Larkana'],
    keyContributions: [
      'Global ambassador for Sindhi, Punjabi, and Urdu Sufi poetry',
      'Awarded Nishan-e-Imtiaz (2021) and Hilal-e-Imtiaz (2012)',
      'Iconic lead performer on Coke Studio seasons'
    ]
  }),

  createPersonality({
    id: 'noor-jehan',
    name: 'Madam Noor Jehan',
    urduName: 'ملکہ ترنم نور جہاں',
    title: 'Malika-e-Tarannum (Queen of Melody)',
    category: 'Artists & Musicians',
    lifespan: '1926 – 2000',
    birthPlace: 'Kasur, Punjab',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'A song born from the soul lives forever in the hearts of the nation.',
    shortDescription: 'Legendary singer and actress who sang over 10,000 songs and inspired national morale during the 1965 war with iconic patriotic anthems.',
    fullBio: 'Madam Noor Jehan (Allah Wasai) was Pakistan\'s greatest playback singer and film director. Spanning six decades, her career yielded over 10,000 songs in Punjabi, Urdu, and Sindhi. Her patriotic milli naghmay during the 1965 war became immortal national treasures.',
    impactDomain: 'Global',
    tags: ['Malika-e-Tarannum', 'Queen of Melody', '1965 War Songs', 'Kasur', 'Cinema Icon'],
    keyContributions: [
      'Recorded over 10,000 film and non-film songs in Urdu, Punjabi, and Sindhi',
      'Sang iconic patriotic anthems during the 1965 war boosting national morale',
      'First Pakistani female film director'
    ],
    awards: [{ year: '1965', title: 'Tamgha-e-Imtiaz', organization: 'Government of Pakistan' }]
  }),

  createPersonality({
    id: 'saadat-hasan-manto',
    name: 'Saadat Hasan Manto',
    urduName: 'سعادت حسن منٹو',
    title: 'Master Short-Story Writer & Satirist',
    category: 'Writers & Poets',
    lifespan: '1912 – 1955',
    birthPlace: 'Samrala, Ludhiana / Lahore',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'If you cannot bear my stories, it means the time we live in is unbearable.',
    shortDescription: 'Literary giant whose unflinching short stories like "Toba Tek Singh" captured the raw human tragedy of Partition.',
    fullBio: 'Saadat Hasan Manto is considered one of the greatest short-story writers in South Asian literary history. He authored 22 collections of short stories, a novel, radio plays, and essays, holding up an unvarnished mirror to societal hypocrisy and the trauma of Partition.',
    impactDomain: 'Global',
    tags: ['Short Story Genius', 'Toba Tek Singh', 'Partition Literature', 'Lahore'],
    keyContributions: [
      'Authored masterpieces like "Toba Tek Singh", "Khol Do", and "Thanda Gosht"',
      'Nishan-e-Imtiaz awarded posthumously in 2012'
    ]
  }),

  createPersonality({
    id: 'sadequain',
    name: 'Syed Sadequain Ahmed Naqvi',
    urduName: 'سید صادقین احمد نقوی',
    title: 'Master Muralist, Calligrapher & Painter',
    category: 'Artists & Musicians',
    lifespan: '1930 – 1987',
    birthPlace: 'Amroha, British India / Karachi',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'I paint not for buyers, but to express the ecstasy and agony of human existence.',
    shortDescription: 'Iconic artist renowned for monumental public murals at Mangla Dam and Lahore Museum and modern Quranic calligraphy.',
    fullBio: 'Sadequain was Pakistan\'s legendary painter, calligrapher, and poet. Famed for his large-scale murals (including "Quest for Knowledge" at Punjab University and Mangla Dam), he brought modern figurative expressionism and Quranic calligraphy to world fame.',
    impactDomain: 'Global',
    tags: ['Master Painter', 'Calligraphy', 'Murals', 'Nishan-e-Imtiaz', 'Karachi'],
    keyContributions: [
      'Painted monumental public murals at Mangla Dam, Lahore Museum, and Frere Hall',
      'Pioneered modern calligraphic art form in South Asia',
      'Awarded Laureat Biennale de Paris (1961)'
    ]
  }),

  createPersonality({
    id: 'ismail-gulgee',
    name: 'Ismail Gulgee',
    urduName: 'اسماعیل گلجی',
    title: 'Master Abstract Artist & Calligrapher',
    category: 'Artists & Musicians',
    lifespan: '1926 – 2007',
    birthPlace: 'Peshawar, Khyber Pakhtunkhwa',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Color and light are the divine brushstrokes of the universe.',
    shortDescription: 'Engineer-turned-artist famous for brilliant Islamic abstract calligraphic paintings and royal portraits.',
    fullBio: 'Ismail Gulgee was an internationally acclaimed artist trained in civil engineering at Columbia and Harvard. He became world-famous for his vibrant action paintings, Islamic abstract calligraphy, and lapis lazuli mosaics.',
    impactDomain: 'Global',
    tags: ['Abstract Painting', 'Calligraphy', 'Lapis Lazuli', 'Peshawar', 'Nishan-e-Imtiaz'],
    keyContributions: [
      'Painted portraits for world leaders including JFK, Zhou Enlai, and King Faisal',
      'Awarded Sitara-e-Imtiaz, Pride of Performance, and Hilal-e-Imtiaz'
    ]
  }),

  createPersonality({
    id: 'parveen-shakir',
    name: 'Parveen Shakir',
    urduName: 'پروین شاکر',
    title: 'Poetess of Fragrance (Khushbu)',
    category: 'Writers & Poets',
    lifespan: '1952 – 1994',
    birthPlace: 'Karachi, Sindh',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'I am the fragrance that lives in the breeze; how will you trap me in walls?',
    shortDescription: 'Celebrated Urdu poetess and civil servant whose debut collection "Khushbu" revolutionized female expression in Urdu poetry.',
    fullBio: 'Parveen Shakir was a distinguished Urdu poet, educator, and civil servant. Her debut poetry book "Khushbu" (Fragrance) won the Adamjee Literary Award in 1976 and gave an authentic, sensitive voice to young women\'s emotions.',
    impactDomain: 'Global',
    tags: ['Khushbu', 'Urdu Poetry', 'Pride of Performance', 'Civil Servant', 'Karachi'],
    keyContributions: [
      'Published timeless collections Khushbu, Sad-barg, Khud Kalami, and Inkaar',
      'Served as Deputy Collector in Central Excise & Customs',
      'Pride of Performance laureate'
    ]
  }),

  createPersonality({
    id: 'ashfaq-ahmed',
    name: 'Ashfaq Ahmed',
    urduName: 'اشفاق احمد',
    title: 'Iconic Intellectual, Playwright & Host of Zavia',
    category: 'Writers & Poets',
    lifespan: '1925 – 2004',
    birthPlace: 'Muktsar, British India / Lahore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Ease the lives of others, and God will ease your path.',
    shortDescription: 'Intellectual, broadcaster, and author whose TV program "Zavia" imparted profound spiritual wisdom and human empathy.',
    fullBio: 'Ashfaq Ahmed was a revered Urdu writer, playwright, and broadcaster. He authored classic radio plays, TV dramas like "Fehmida Ki Adalat", and hosted the television series "Zavia", offering simple yet deep Sufi reflections on everyday human ethics.',
    impactDomain: 'National',
    tags: ['Zavia', 'Playwright', 'Radio Pakistan', 'Lahore', 'Sitara-e-Imtiaz'],
    keyContributions: [
      'Authored classic books and TV plays including Zavia, Gaddarya, and Aik Muhabbat Sau Afsane',
      'Awarded Sitara-e-Imtiaz and Pride of Performance'
    ]
  }),

  createPersonality({
    id: 'rohail-hyatt',
    name: 'Rohail Hyatt',
    urduName: 'روحیل حیات',
    title: 'Music Producer & Founder of Coke Studio',
    category: 'Artists & Musicians',
    lifespan: '1966 – Present',
    birthPlace: 'Rawalpindi, Punjab',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Eastern heritage and modern arrangement can sing in perfect harmony.',
    shortDescription: 'Founding member of Vital Signs and creator of Coke Studio Pakistan, redefining South Asian fusion music.',
    fullBio: 'Rohail Hyatt is a pioneering Pakistani record producer, keyboardist, and composer. Co-founder of legendary pop band Vital Signs ("Dil Dil Pakistan"), he went on to conceptualize and produce Coke Studio, establishing a global benchmark for fusion music.',
    impactDomain: 'Global',
    tags: ['Coke Studio', 'Vital Signs', 'Music Producer', 'Fusion', 'Rawalpindi'],
    keyContributions: [
      'Created and produced Coke Studio Pakistan',
      'Key keyboardist & producer for Vital Signs',
      'Introduced Pakistani folk and Sufi artists to global streaming platforms'
    ]
  }),

  createPersonality({
    id: 'anwar-maqsood',
    name: 'Anwar Maqsood',
    urduName: 'انور مقصود',
    title: 'Legendary Satirist, Playwright & Painter',
    category: 'Writers & Poets',
    lifespan: '1935 – Present',
    birthPlace: 'Hyderabad Deccan / Karachi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    featuredQuote: 'Laughter is the most dignified medicine for national pain.',
    shortDescription: 'Master satirist, television presenter, and playwright behind iconic shows "Loose Talk", "Fifty Fifty", and "Aangan Terha".',
    fullBio: 'Anwar Maqsood Hameedi is an iconic Pakistani satirist, humorist, playwright, and painter. For over 50 years, his witty dialogues and sharp political satire in shows like Fifty Fifty, Aangan Terha, and Loose Talk (with Moin Akhtar) defined Pakistani television.',
    impactDomain: 'National',
    tags: ['Loose Talk', 'Satirist', 'Aangan Terha', 'Karachi', 'Hilal-e-Imtiaz'],
    keyContributions: [
      'Wrote legendary TV shows Aangan Terha, Fifty Fifty, Studio Dhai, and Loose Talk',
      'Hilal-e-Imtiaz recipient'
    ]
  })
];
