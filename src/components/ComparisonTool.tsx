import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, Award, MapPin, Calendar, Quote, Check, Loader2 } from 'lucide-react';
import { Personality } from '../types';
import { SymbolicVisual } from './SymbolicVisual';

interface ComparisonToolProps {
  personalities: Personality[];
  initialIconAId?: string;
  initialIconBId?: string;
  onSelectPersonality: (id: string) => void;
}

export const ComparisonTool: React.FC<ComparisonToolProps> = ({
  personalities,
  initialIconAId,
  initialIconBId,
  onSelectPersonality,
}) => {
  const [iconAId, setIconAId] = useState<string>(
    initialIconAId || personalities[0]?.id || ''
  );
  const [iconBId, setIconBId] = useState<string>(
    initialIconBId || personalities[1]?.id || ''
  );

  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const iconA = personalities.find((p) => p.id === iconAId) || personalities[0];
  const iconB = personalities.find((p) => p.id === iconBId) || personalities[1];

  const handleGenerateAiComparison = async () => {
    if (!iconA || !iconB) return;
    setLoadingAi(true);

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Provide a side-by-side comparative analysis of Pakistani icons ${iconA.name} (${iconA.category}) and ${iconB.name} (${iconB.category}). Contrast their fields, methodologies, national impact, and shared ideals. Keep it under 250 words in a bulleted overview format.`,
          personalityName: `${iconA.name} vs ${iconB.name}`,
          type: 'comparison'
        })
      });
      const data = await res.json();
      if (data.result) {
        setAiAnalysis(data.result);
      } else {
        setAiAnalysis(`Both ${iconA.name} and ${iconB.name} represent pinnacle achievement in Pakistan's national history. While ${iconA.name} pioneered breakthroughs in ${iconA.category}, ${iconB.name} transformed ${iconB.category}. Together, their legacies reflect Pakistan's multifaceted intellectual and humanitarian heritage.`);
      }
    } catch (e) {
      console.error(e);
      setAiAnalysis(`Both ${iconA.name} and ${iconB.name} represent extraordinary dedication to humanity and state-building.`);
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <ArrowRightLeft className="w-3.5 h-3.5" /> Side-by-Side Matrix
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-amber-400">
          Compare National Icons
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Select any two Pakistani visionaries to analyze their field contributions, historical lifespans, major honors, and societal impact.
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            First Personality (A)
          </label>
          <select
            value={iconAId}
            onChange={(e) => {
              setIconAId(e.target.value);
              setAiAnalysis(null);
            }}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {personalities.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.category})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Second Personality (B)
          </label>
          <select
            value={iconBId}
            onChange={(e) => {
              setIconBId(e.target.value);
              setAiAnalysis(null);
            }}
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {personalities.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.category})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Grid Table */}
      {iconA && iconB && (
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xl overflow-hidden">
          
          {/* Top Cards Row */}
          <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80">
            
            {/* Personality A Card */}
            <div className="p-6 text-center space-y-3 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/30 shadow-xl">
                <SymbolicVisual name={iconA.name} category={iconA.category} title={iconA.title} className="h-full" showDetails={false} />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  {iconA.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {iconA.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {iconA.title}
                </p>
              </div>
              <button
                onClick={() => onSelectPersonality(iconA.id)}
                className="text-xs font-bold text-slate-600 dark:text-slate-300 underline hover:text-emerald-600"
              >
                View Full Profile →
              </button>
            </div>

            {/* Personality B Card */}
            <div className="p-6 text-center space-y-3 bg-gradient-to-b from-teal-50/50 to-transparent dark:from-teal-950/20">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-2xl overflow-hidden border-2 border-teal-500/30 shadow-xl">
                <SymbolicVisual name={iconB.name} category={iconB.category} title={iconB.title} className="h-full" showDetails={false} />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                  {iconB.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {iconB.name}
                </h3>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {iconB.title}
                </p>
              </div>
              <button
                onClick={() => onSelectPersonality(iconB.id)}
                className="text-xs font-bold text-slate-600 dark:text-slate-300 underline hover:text-teal-600"
              >
                View Full Profile →
              </button>
            </div>

          </div>

          {/* Detailed Matrix Rows */}
          <div className="divide-y divide-slate-100 dark:divide-slate-700/60 text-xs sm:text-sm">
            
            {/* Row 1: Field / Domain */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 text-center font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              Primary Domain & Impact
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80 p-4">
              <div className="text-center font-semibold text-slate-800 dark:text-slate-200">
                {iconA.category} ({iconA.impactDomain} Impact)
              </div>
              <div className="text-center font-semibold text-slate-800 dark:text-slate-200">
                {iconB.category} ({iconB.impactDomain} Impact)
              </div>
            </div>

            {/* Row 2: Lifespan & Birthplace */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 text-center font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              Lifespan & Origin
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80 p-4">
              <div className="text-center text-slate-700 dark:text-slate-300">
                <span className="font-bold block text-slate-900 dark:text-white">{iconA.lifespan}</span>
                <span className="text-xs text-slate-500">{iconA.birthPlace}</span>
              </div>
              <div className="text-center text-slate-700 dark:text-slate-300">
                <span className="font-bold block text-slate-900 dark:text-white">{iconB.lifespan}</span>
                <span className="text-xs text-slate-500">{iconB.birthPlace}</span>
              </div>
            </div>

            {/* Row 3: Key Contribution */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 text-center font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              Major Achievement & Legacy
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80 p-4 leading-relaxed">
              <div className="text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-medium">{iconA.shortDescription}</p>
              </div>
              <div className="text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-medium">{iconB.shortDescription}</p>
              </div>
            </div>

            {/* Row 4: Famous Quote */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 text-center font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              Notable Wisdom
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80 p-4 italic text-xs">
              <div className="p-2 text-slate-700 dark:text-slate-300">
                "{iconA.featuredQuote}"
              </div>
              <div className="p-2 text-slate-700 dark:text-slate-300">
                "{iconB.featuredQuote}"
              </div>
            </div>

            {/* Row 5: Highest State Honors */}
            <div className="p-4 bg-slate-50/50 dark:bg-slate-900/40 text-center font-bold text-slate-400 uppercase tracking-wider text-[10px]">
              Highest Honors
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700/80 p-4">
              <div className="space-y-1 text-center">
                {iconA.awards.slice(0, 2).map((a, i) => (
                  <span key={i} className="inline-block px-2.5 py-1 rounded-lg text-xs bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold m-0.5">
                    {a.title} ({a.year})
                  </span>
                ))}
              </div>
              <div className="space-y-1 text-center">
                {iconB.awards.slice(0, 2).map((a, i) => (
                  <span key={i} className="inline-block px-2.5 py-1 rounded-lg text-xs bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold m-0.5">
                    {a.title} ({a.year})
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* AI Comparative Analysis Section */}
          <div className="p-6 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-emerald-600/10 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  AI Comparative Synthesis
                </h4>
              </div>

              <button
                onClick={handleGenerateAiComparison}
                disabled={loadingAi}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loadingAi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Generate AI Comparative Insights</span>
                  </>
                )}
              </button>
            </div>

            {aiAnalysis ? (
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {aiAnalysis}
              </div>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click "Generate AI Comparative Insights" to let Gemini AI perform an in-depth comparative synthesis between {iconA.name} and {iconB.name}.
              </p>
            )}
          </div>

        </div>
      )}

    </div>
  );
};
