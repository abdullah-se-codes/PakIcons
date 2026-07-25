import React from 'react';
import { Heart, Compass, Shield, BookOpen, Sparkles, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'categories' | 'compare' | 'saved') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-20 border-t border-emerald-900/40 bg-slate-950 transition-colors text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-amber-300 shadow-lg shadow-emerald-600/30 p-2 border border-amber-400/30">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-300 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z" />
                  <polygon points="68,22 72,32 82,32 74,38 77,48 68,42 59,48 62,38 54,32 64,32" />
                </svg>
              </div>
              <span className="text-2xl font-black text-white">
                Pak<span className="text-emerald-400">Icons</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              An interactive digital tribute documenting the visionaries, thinkers, leaders, scientists, and humanitarians who built Pakistan's legacy and enriched humanity.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Verifiable Historical Archive</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors">
                  Discover All Icons
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('categories')} className="hover:text-emerald-400 transition-colors">
                  10 Field Categories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('compare')} className="hover:text-emerald-400 transition-colors">
                  Side-by-Side Comparison Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('saved')} className="hover:text-emerald-400 transition-colors">
                  Saved Bookmarks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quote of the Day */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900 border border-emerald-900/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Globe className="w-4 h-4" />
              <span>Empowering Words of the Founder</span>
            </div>
            <p className="text-xs italic text-slate-200 leading-relaxed">
              "With faith, discipline, and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."
            </p>
            <p className="text-xs font-semibold text-amber-300/90 text-right font-sans" dir="rtl">
              "ایمان، اتحاد اور تنظیم کے ساتھ، بلا غرض خدمت انجام دیں، کوئی ایسی قیمتی چیز نہیں جو آپ حاصل نہ کر سکیں۔"
            </p>
            <p className="text-[11px] font-bold text-emerald-400 text-right">
              — Quaid-e-Azam Muhammad Ali Jinnah
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PakIcons Archive. Preserving Pakistan's National Heritage.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for Pakistani youth & history enthusiasts worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
