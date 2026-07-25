import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Compass, ArrowRight, Sparkles, Tag, ChevronRight } from 'lucide-react';
import { Personality, CategoryType } from '../types';
import { ThematicIconBadge } from './ThematicIconBadge';

interface PredictiveSearchBarProps {
  personalities: Personality[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectPersonality: (id: string) => void;
  onSelectCategory?: (category: CategoryType | 'All') => void;
  placeholder?: string;
  className?: string;
}

export const PredictiveSearchBar: React.FC<PredictiveSearchBarProps> = ({
  personalities,
  searchQuery,
  setSearchQuery,
  onSelectPersonality,
  onSelectCategory,
  placeholder = "Search by name, field, or achievement (e.g. Abdus Salam, Edhi, Jinnah)...",
  className = "max-w-2xl mx-auto"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const trimQuery = searchQuery.trim().toLowerCase();

  // Filter personality suggestions
  const matches = React.useMemo(() => {
    if (!trimQuery) return [];
    return personalities.filter((p) => {
      const matchName = p.name.toLowerCase().includes(trimQuery);
      const matchUrdu = p.urduName ? p.urduName.toLowerCase().includes(trimQuery) : false;
      const matchTitle = p.title.toLowerCase().includes(trimQuery);
      const matchCategory = p.category.toLowerCase().includes(trimQuery);
      const matchTags = p.tags.some(t => t.toLowerCase().includes(trimQuery));
      return matchName || matchUrdu || matchTitle || matchCategory || matchTags;
    }).slice(0, 6);
  }, [personalities, trimQuery]);

  // Unique category suggestions
  const matchedCategories = React.useMemo(() => {
    if (!trimQuery) return [];
    const allCategories: CategoryType[] = [
      'Scientists', 'Doctors', 'Engineers & Tech', 'Entrepreneurs',
      'Sports Champions', 'Writers & Poets', 'Artists & Musicians',
      'Military Heroes', 'Social Workers', 'Leaders & Activists'
    ];
    return allCategories.filter(c => c.toLowerCase().includes(trimQuery));
  }, [trimQuery]);

  const handleSelectSuggestion = (id: string) => {
    setIsOpen(false);
    onSelectPersonality(id);
    const element = document.getElementById(`card-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectCat = (cat: CategoryType) => {
    setIsOpen(false);
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  return (
    <div ref={containerRef} className={`relative z-40 ${className}`}>
      {/* Input Field Box */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-amber-400 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center p-2 border border-emerald-500/30">
          <Search className="w-5 h-5 text-amber-400 ml-3 mr-2 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full bg-transparent py-2.5 px-2 text-white text-sm sm:text-base focus:outline-none placeholder-slate-400 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors mr-1"
              aria-label="Clear Search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Real-time Google/YouTube Predictive Autocomplete Dropdown */}
      {isOpen && trimQuery.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-emerald-500/40 shadow-2xl overflow-hidden divide-y divide-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-200">
          
          {/* Header Summary */}
          <div className="px-4 py-2.5 bg-emerald-950/60 flex items-center justify-between text-xs font-bold text-emerald-300 border-b border-emerald-800/40">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Live Predictive Matches ({matches.length})
            </span>
            <span className="text-[10px] text-slate-400">
              Press Esc to dismiss
            </span>
          </div>

          {/* Matches List */}
          {matches.length > 0 ? (
            <div className="max-h-80 overflow-y-auto no-scrollbar py-1">
              {matches.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item.id)}
                  className="px-4 py-3 hover:bg-emerald-900/40 cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-emerald-500/30 flex items-center justify-center text-amber-300 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <ThematicIconBadge category={item.category} title={item.title} className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors truncate">
                          {item.name}
                        </span>
                        {item.urduName && (
                          <span className="text-xs text-emerald-400 font-sans hidden sm:inline">
                            ({item.urduName})
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 truncate">
                        {item.title} • <span className="text-emerald-400 font-semibold">{item.category}</span>
                      </p>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-400 text-sm">
              No matching icons found for "<span className="text-white font-bold">{searchQuery}</span>".
            </div>
          )}

          {/* Matched Categories Badges */}
          {matchedCategories.length > 0 && (
            <div className="p-3 bg-slate-950/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 flex-shrink-0">
                <Tag className="w-3 h-3 text-emerald-400" /> Filter Field:
              </span>
              {matchedCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleSelectCat(cat)}
                  className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 flex-shrink-0 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
