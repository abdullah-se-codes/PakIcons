import React, { useEffect, useState } from 'react';
import { Sparkles, Trophy, Users, Award, Layers, Star } from 'lucide-react';
import { CategoryType, Personality } from '../types';
import { PredictiveSearchBar } from './PredictiveSearchBar';

interface HeroProps {
  personalities: Personality[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: CategoryType | 'All';
  setSelectedCategory: (cat: CategoryType | 'All') => void;
  totalCount: number;
  onSelectPersonality: (id: string) => void;
}

const CATEGORIES_LIST: (CategoryType | 'All')[] = [
  'All',
  'Military Heroes',
  'Sports Champions',
  'Scientists',
  'Doctors',
  'Engineers & Tech',
  'Entrepreneurs',
  'Writers & Poets',
  'Artists & Musicians',
  'Social Workers',
  'Leaders & Activists'
];

export const Hero: React.FC<HeroProps> = ({
  personalities,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  totalCount,
  onSelectPersonality,
}) => {
  // Animated Stats counter simulation
  const [personalitiesCount, setPersonalitiesCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [achievementsCount, setAchievementsCount] = useState(0);

  useEffect(() => {
    const targetCount = Math.max(100, totalCount);
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setPersonalitiesCount(Math.min(Math.floor(progress * targetCount), targetCount));
      setCategoriesCount(Math.min(Math.floor(progress * 10), 10));
      setAchievementsCount(Math.min(Math.floor(progress * 50), 50));

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [totalCount]);

  return (
    <div className="relative overflow-hidden pt-8 pb-12 bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 dark:from-slate-950 dark:via-emerald-950 dark:to-slate-950 text-white transition-colors">
      
      {/* Background Flag Spanning the Entire Hero Banner (25% White Hoist + 75% Dark Green Field with Crescent & Star + 3D Fabric Wrinkles & Folds) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 sm:opacity-30 overflow-hidden flex select-none z-0">
        {/* Extreme Left: Exactly 25% width solid WHITE vertical bar (hoist) */}
        <div className="w-1/4 h-full bg-white relative flex-shrink-0 animate-flag-wave shadow-xl overflow-hidden">
          {/* Animated 3D fabric folds overlay */}
          <div className="absolute inset-0 animate-fabric-ripple opacity-60 mix-blend-overlay" />
        </div>

        {/* Remaining 75%: Solid DARK GREEN field with centered Crescent and Star */}
        <div className="w-3/4 h-full bg-[#01411C] relative flex items-center justify-center overflow-hidden animate-flag-wave">
          {/* Animated 3D fabric folds and wrinkles overlay */}
          <div className="absolute inset-0 animate-fabric-ripple opacity-70 mix-blend-overlay" />

          {/* White Crescent and Star */}
          <div className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 transform -rotate-[15deg]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white filter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" xmlns="http://www.w3.org/2000/svg">
              {/* White Crescent */}
              <path d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z" />
              {/* White Five-Pointed Star */}
              <polygon points="68,22 72,32 82,32 74,38 77,48 68,42 59,48 62,38 54,32 64,32" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative Radial Lighting Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-500/40 shadow-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
              National Heritage & Excellence Archive
            </span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
            Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-200 to-amber-200">Icons of Pakistan</span>
          </h1>
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Celebrating the visionaries, leaders, pioneers, and legends across science, arts, sports, and social reform who shaped our nation and inspired the world.
          </p>
        </div>

        {/* Live Predictive Autocomplete Search Box */}
        <div className="mt-8 max-w-2xl mx-auto">
          <PredictiveSearchBar
            personalities={personalities}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectPersonality={onSelectPersonality}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            placeholder="Live search by name, field, or honor (e.g. Abdus Salam, Edhi, Jinnah)..."
          />
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-lg text-center group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {personalitiesCount}+
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              National Icons
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-lg text-center group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-950/80 text-teal-400 border border-teal-800/50 flex items-center justify-center mx-auto mb-2">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {categoriesCount}
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              Field Categories
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-lg text-center group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-800/50 flex items-center justify-center mx-auto mb-2">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {achievementsCount}+
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              Global & State Honors
            </div>
          </div>

          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-800 shadow-lg text-center group hover:border-emerald-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-rose-950/80 text-rose-400 border border-rose-800/50 flex items-center justify-center mx-auto mb-2">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              1947–2026
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">
              Legacy Years
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
