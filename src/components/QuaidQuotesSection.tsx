import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Copy, Check, Sparkles, BookOpen, Calendar, MapPin } from 'lucide-react';

interface QuaidQuote {
  id: string;
  quoteEn: string;
  quoteUr: string;
  theme: string;
  occasion: string;
  dateAndPlace: string;
  keyTakeaway: string;
}

const QUAID_QUOTES: QuaidQuote[] = [
  {
    id: 'empowerment-faith-discipline-devotion',
    quoteEn: 'With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.',
    quoteUr: 'ایمان، اتحاد اور تنظیم کے ساتھ، بلا غرض خدمت انجام دیں، کوئی ایسی قیمتی چیز نہیں جو آپ حاصل نہ کر سکیں۔',
    theme: 'Empowerment & National Motto',
    occasion: 'Historic Address to Citizens and Youth',
    dateAndPlace: 'October 30, 1947 • Lahore',
    keyTakeaway: 'Universal pillars of faith, discipline, and selfless devotion to duty empowering all citizens.'
  },
  {
    id: 'religious-freedom',
    quoteEn: 'You are free; you are free to go to your temples, you are free to go to your mosques or to any other place of worship in this State of Pakistan. You may belong to any religion, caste or creed—that has nothing to do with the business of the State.',
    quoteUr: 'آپ آزاد ہیں، آپ اپنے مندروں میں جانے کے لیے آزاد ہیں، آپ اپنی مساجد میں یا اس ریاست پاکستان میں کسی بھی عبادت گاہ میں جانے کے لیے آزاد ہیں۔',
    theme: 'Equal Rights & Freedom',
    occasion: 'Presidential Address to Constituent Assembly',
    dateAndPlace: 'August 11, 1947 • Karachi',
    keyTakeaway: 'Guaranteed constitutional protection and equality for all citizens regardless of faith.'
  },
  {
    id: 'relentless-work',
    quoteEn: 'Work, work and work, and we are bound to succeed.',
    quoteUr: 'کام، کام اور صرف کام؛ اور ہم یقیناً کامیاب ہوں گے۔',
    theme: 'Diligence & Education',
    occasion: 'Address to Students at Dhaka University',
    dateAndPlace: 'March 24, 1948 • Dhaka',
    keyTakeaway: 'Exhortation to youth to focus on education, skill mastery, and relentless effort.'
  },
  {
    id: 'empowerment-women',
    quoteEn: 'There are two powers in the world; one is the sword and the other is the pen. There is a third power stronger than both, that of the women.',
    quoteUr: 'دنیا میں دو عظیم ترین طاقتیں ہیں؛ ایک تلوار اور دوسری قلم۔ لیکن ایک تیسری طاقت ہے جو ان دونوں سے زیادہ مضبوط ہے، اور وہ ہے خواتین کی طاقت۔',
    theme: 'Women Empowerment',
    occasion: 'Address at Muslim University Union',
    dateAndPlace: 'March 10, 1944 • Aligarh',
    keyTakeaway: 'Recognizing female education and active participation as vital to national success.'
  },
  {
    id: 'message-hope',
    quoteEn: 'My message to you all is of hope, courage and confidence. Let us mobilize all our resources in a systematic and organized manner and tackle the grave issues that confront us with grim determination.',
    quoteUr: 'میرا پیغام آپ کے لیے امید، ہمت اور اعتماد کا پیغام ہے۔ آئیں ہم اپنے تمام وسائل کو منظم انداز میں بروئے کار لائیں۔',
    theme: 'National Resilience',
    occasion: 'Message on Independence Anniversary',
    dateAndPlace: 'August 14, 1948 • Karachi',
    keyTakeaway: 'Courageous leadership during moments of national trial and crisis.'
  },
  {
    id: 'ideology-preservation',
    quoteEn: 'Pakistan not only means freedom and independence but the Muslim Ideology which has to be preserved, which has come to us as a precious gift and treasure.',
    quoteUr: 'پاکستان کا مطلب صرف آزادی اور استقلال نہیں بلکہ وہ نظریہ ہے جسے محفوظ رکھنا ہماری اولین ذمہ داری ہے۔',
    theme: 'National Identity',
    occasion: 'Address to Punjab Muslim Students Federation',
    dateAndPlace: 'March 18, 1944 • Lahore',
    keyTakeaway: 'Preserving sovereignty, cultural heritage, and moral values for future generations.'
  }
];

export const QuaidQuotesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUAID_QUOTES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentQuote = QUAID_QUOTES[currentIndex];

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % QUAID_QUOTES.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + QUAID_QUOTES.length) % QUAID_QUOTES.length);
  };

  const handleCopy = () => {
    const textToCopy = `"${currentQuote.quoteEn}"\n— Quaid-e-Azam Muhammad Ali Jinnah (${currentQuote.dateAndPlace})`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12">
      {/* Container with Gold Accent Frame */}
      <div 
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="relative bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-amber-500/30 overflow-hidden"
      >
        {/* Background Decorative Crescent & Star Watermark */}
        <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none text-amber-300">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z" />
            <polygon points="68,22 72,32 82,32 74,38 77,48 68,42 59,48 62,38 54,32 64,32" />
          </svg>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-emerald-800/50">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Historical Archives
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-800/80 text-emerald-200">
                  Quaid-e-Azam
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight">
                Words of Wisdom
              </h2>
            </div>
          </div>

          {/* Quick Counter & Copy Button */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 text-xs font-semibold text-emerald-200 border border-emerald-700/50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'Copied' : 'Copy Quote'}</span>
            </button>
            <span className="text-xs font-bold text-emerald-300 bg-emerald-900/80 px-3 py-1 rounded-xl border border-emerald-700/50">
              {currentIndex + 1} / {QUAID_QUOTES.length}
            </span>
          </div>
        </div>

        {/* Main Quote Content Carousel */}
        <div className="my-8 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {currentQuote.theme}
            </span>
          </div>

          {/* English Quote */}
          <div className="relative pl-6 border-l-4 border-amber-400">
            <Quote className="w-8 h-8 text-amber-400/40 absolute -left-4 -top-3" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed tracking-tight">
              "{currentQuote.quoteEn}"
            </p>
          </div>

          {/* Urdu Translation */}
          <div className="bg-emerald-900/40 p-5 rounded-2xl border border-emerald-800/50 dir-rtl">
            <p className="text-lg sm:text-xl font-bold text-emerald-200 leading-loose font-sans">
              "{currentQuote.quoteUr}"
            </p>
          </div>

          {/* Metadata & Historical Context */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-amber-300 block">{currentQuote.occasion}</span>
                <span className="text-slate-400">{currentQuote.dateAndPlace}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
              <BookOpen className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="font-bold text-emerald-300 block">Core Vision</span>
                <span className="text-slate-400">{currentQuote.keyTakeaway}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls & Dot Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-emerald-800/50">
          <div className="flex items-center gap-2">
            {QUAID_QUOTES.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50' 
                    : 'w-2.5 bg-emerald-800/80 hover:bg-emerald-700'
                }`}
                title={`Quote ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700/60 transition-colors"
              title="Previous Quote"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-lg transition-colors"
              title="Next Quote"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
