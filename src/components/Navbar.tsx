import React, { useState } from 'react';
import { 
  Sparkles, 
  Bookmark, 
  ArrowRightLeft, 
  Grid, 
  Menu, 
  X,
  Compass
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeTab: 'home' | 'categories' | 'compare' | 'saved';
  setActiveTab: (tab: 'home' | 'categories' | 'compare' | 'saved') => void;
  savedCount: number;
  onSelectPersonality?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  activeTab,
  setActiveTab,
  savedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-emerald-500/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-800 via-emerald-600 to-teal-500 flex items-center justify-center text-amber-300 shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform p-2 border border-amber-400/30">
            {/* Stylized Pakistani Crescent and Star Logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-amber-300 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z" />
              <polygon points="68,22 72,32 82,32 74,38 77,48 68,42 59,48 62,38 54,32 64,32" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-white">
                Pak<span className="text-emerald-400">Icons</span>
              </span>
            </div>
            <p className="text-[11px] font-medium text-slate-400 -mt-1 hidden sm:block">
              Legends & Visionaries of Pakistan
            </p>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'home'
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Compass className="w-4 h-4" />
            Discover
          </button>

          <button
            onClick={() => setActiveTab('categories')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'categories'
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Grid className="w-4 h-4" />
            Fields
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all ${
              activeTab === 'compare'
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            Compare
          </button>

          <button
            onClick={() => setActiveTab('saved')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 relative transition-all ${
              activeTab === 'saved'
                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/50'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Saved
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full text-xs font-bold bg-emerald-600 text-white">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Heritage Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-xs font-bold text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Archive 1947–2026</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-900 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                activeTab === 'home' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'
              }`}
            >
              <Compass className="w-4 h-4" /> Discover
            </button>

            <button
              onClick={() => { setActiveTab('categories'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                activeTab === 'categories' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'
              }`}
            >
              <Grid className="w-4 h-4" /> Fields
            </button>

            <button
              onClick={() => { setActiveTab('compare'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                activeTab === 'compare' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'
              }`}
            >
              <ArrowRightLeft className="w-4 h-4" /> Compare
            </button>

            <button
              onClick={() => { setActiveTab('saved'); setMobileMenuOpen(false); }}
              className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                activeTab === 'saved' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-200'
              }`}
            >
              <Bookmark className="w-4 h-4" /> Saved ({savedCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
