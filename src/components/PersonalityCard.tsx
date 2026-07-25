import React from 'react';
import { Bookmark, ArrowRight, Quote } from 'lucide-react';
import { Personality } from '../types';
import { ThematicIconBadge } from './ThematicIconBadge';
import { SymbolicVisual } from './SymbolicVisual';

interface PersonalityCardProps {
  personality: Personality;
  onSelect: (id: string) => void;
  isSaved: boolean;
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  onCompare: (id: string, e: React.MouseEvent) => void;
}

export const PersonalityCard: React.FC<PersonalityCardProps> = ({
  personality,
  onSelect,
  isSaved,
  onToggleSave,
  onCompare,
}) => {
  return (
    <div
      id={`card-${personality.id}`}
      onClick={() => onSelect(personality.id)}
      className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/90 shadow-xl hover:shadow-2xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer h-auto"
    >
      {/* Top Symbolic Canvas (NO human faces) */}
      <div className="relative overflow-hidden bg-slate-950">
        <SymbolicVisual 
          name={personality.name} 
          category={personality.category} 
          title={personality.title}
          className="h-44"
          showDetails={false}
        />

        {/* Category & Field Badge Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-950/90 text-emerald-200 backdrop-blur-md shadow-md border border-emerald-600/50 flex items-center gap-1">
            <ThematicIconBadge category={personality.category} title={personality.title} className="w-3 h-3" />
            <span>{personality.category}</span>
          </span>
          <span className="px-2 py-1 rounded-full text-[10px] font-semibold bg-slate-950/80 text-slate-300 backdrop-blur-md border border-slate-700/60">
            {personality.impactDomain}
          </span>
        </div>

        {/* Top-Right Action Control: Bookmark Button Only */}
        <button
          onClick={(e) => onToggleSave(personality.id, e)}
          title={isSaved ? "Remove from Saved" : "Save Icon"}
          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all z-20 ${
            isSaved
              ? 'bg-amber-500 text-slate-950 font-bold shadow-lg ring-2 ring-amber-400/50'
              : 'bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/50'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Card Body - Clean Flow Layout */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-900">
        
        {/* Name, Urdu Name & Title */}
        <div>
          <div className="flex flex-col gap-1 mb-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-2">
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-amber-300 transition-colors leading-snug break-words flex-1 min-w-0">
                {personality.name}
              </h3>
              {personality.urduName && (
                <span className="text-sm sm:text-base font-bold text-amber-400 font-sans break-words dir-rtl leading-snug">
                  {personality.urduName}
                </span>
              )}
            </div>

            <p className="text-xs font-semibold text-emerald-400 leading-snug break-words">
              {personality.title} • <span className="text-slate-400 font-normal">{personality.lifespan}</span>
            </p>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed break-words">
            {personality.shortDescription}
          </p>
        </div>

        {/* Featured Quote */}
        <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
          <div className="flex items-start gap-2">
            <Quote className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] italic text-emerald-200/90 line-clamp-2 leading-tight">
              "{personality.featuredQuote}"
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
          <button
            onClick={(e) => onCompare(personality.id, e)}
            className="font-semibold text-slate-400 hover:text-amber-300 transition-colors"
          >
            + Compare
          </button>

          <div className="inline-flex items-center gap-1 font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
            <span>Explore Legacy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>
    </div>
  );
};

