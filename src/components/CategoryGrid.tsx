import React from 'react';
import { 
  Atom, 
  Stethoscope, 
  Cpu, 
  Briefcase, 
  Trophy, 
  BookOpen, 
  Feather, 
  Palette, 
  Shield, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '../data/personalities';
import { CategoryType } from '../types';

interface CategoryGridProps {
  onSelectCategory: (cat: CategoryType) => void;
  selectedCategory: CategoryType | 'All';
  personalityCounts: Record<CategoryType, number>;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Atom,
  Stethoscope,
  Cpu,
  Briefcase,
  Trophy,
  BookOpen,
  Feather,
  Palette,
  Shield,
  HeartHandshake,
};

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  selectedCategory,
  personalityCounts,
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
            Explore By Domain
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-amber-400">
            10 Key Fields of Achievement
          </h2>
        </div>
        <p className="text-sm text-slate-300 max-w-md">
          From groundbreaking Nobel-winning physics to lifelong humanitarian service, select a field to filter personalities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {CATEGORIES.filter((cat) => (personalityCounts[cat.name] || 0) > 0).map((cat) => {
          const IconComponent = ICON_MAP[cat.iconName] || Atom;
          const count = personalityCounts[cat.name] || 0;
          const isSelected = selectedCategory === cat.name;

          return (
            <div
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                isSelected
                  ? 'bg-gradient-to-b from-emerald-600 to-teal-700 text-white border-emerald-400 shadow-xl shadow-emerald-600/30 scale-[1.02]'
                  : 'bg-slate-900/90 hover:bg-slate-800 border-slate-800 shadow-lg hover:shadow-xl hover:border-emerald-500/50'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  {count} {count === 1 ? 'Icon' : 'Icons'}
                </span>
              </div>

              <h3
                className={`text-base font-bold mb-1 ${
                  isSelected ? 'text-white' : 'text-white'
                }`}
              >
                {cat.name}
              </h3>

              <p
                className={`text-xs line-clamp-2 leading-relaxed ${
                  isSelected ? 'text-emerald-100' : 'text-slate-400'
                }`}
              >
                {cat.description}
              </p>

              <div
                className={`mt-4 flex items-center text-xs font-semibold gap-1 group-hover:translate-x-1 transition-transform ${
                  isSelected ? 'text-white' : 'text-emerald-400'
                }`}
              >
                <span>View {cat.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
