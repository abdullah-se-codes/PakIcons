import React from 'react';
import { 
  Atom, 
  Stethoscope, 
  Cpu, 
  Trophy, 
  BookOpen, 
  Palette, 
  Shield, 
  HeartHandshake, 
  Feather, 
  Plane,
  Crosshair,
  Flame,
  Award,
  Sparkles,
  Zap,
  Target,
  Activity,
  Mountain,
  Building,
  Music,
  GraduationCap
} from 'lucide-react';
import { CategoryType } from '../types';

interface SymbolicVisualProps {
  name: string;
  category: CategoryType;
  title: string;
  className?: string;
  showDetails?: boolean;
}

export const SymbolicVisual: React.FC<SymbolicVisualProps> = ({
  name,
  category,
  title,
  className = 'h-60',
  showDetails = true
}) => {
  const lowerName = name.toLowerCase();
  const lowerTitle = title.toLowerCase();

  // Determine specific symbolic theme & colors
  let bgGradient = 'from-emerald-950 via-slate-900 to-emerald-900';
  let accentColor = 'text-amber-400';
  let badgeText = category;

  // Custom icon determination
  const renderSymbolicIcon = () => {
    // 1. Military Heroes
    if (category === 'Military Heroes' || lowerTitle.includes('nishan-e-haider') || lowerName.includes('shaheed')) {
      if (lowerName.includes('marium') || lowerName.includes('rashid minhas') || lowerTitle.includes('paf') || lowerTitle.includes('pilot')) {
        return (
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full bg-cyan-500/20 animate-ping opacity-40" />
            <Plane className="w-16 h-16 text-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <div className="absolute w-28 h-28 rounded-full bg-amber-500/20 animate-pulse" />
          <Shield className="w-16 h-16 text-amber-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)]" />
          <Award className="w-8 h-8 text-emerald-400 absolute" />
        </div>
      );
    }

    // 2. Scientists & Tech
    if (category === 'Scientists' || category === 'Engineers & Tech' || lowerName.includes('salam') || lowerName.includes('khan')) {
      if (lowerName.includes('arfa') || lowerName.includes('saif') || lowerTitle.includes('computer') || lowerTitle.includes('microsoft')) {
        return (
          <div className="relative flex items-center justify-center">
            <Cpu className="w-16 h-16 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse" />
            <Zap className="w-6 h-6 text-amber-300 absolute" />
          </div>
        );
      }
      if (lowerName.includes('qadeer') || lowerTitle.includes('nuclear') || lowerTitle.includes('physics')) {
        return (
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full border border-cyan-400/30 animate-spin" />
            <Atom className="w-16 h-16 text-cyan-300 drop-shadow-[0_0_20px_rgba(103,232,249,0.9)] animate-pulse" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <Atom className="w-16 h-16 text-emerald-300 drop-shadow-[0_0_15px_rgba(110,231,183,0.8)]" />
        </div>
      );
    }

    // 3. Social Workers & Doctors
    if (category === 'Social Workers' || category === 'Doctors' || lowerName.includes('edhi') || lowerName.includes('pfau') || lowerName.includes('rizvi')) {
      if (lowerName.includes('edhi')) {
        return (
          <div className="relative flex items-center justify-center">
            <HeartHandshake className="w-16 h-16 text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)] animate-pulse" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <Stethoscope className="w-16 h-16 text-teal-300 drop-shadow-[0_0_15px_rgba(94,234,212,0.8)]" />
          <Activity className="w-6 h-6 text-emerald-400 absolute" />
        </div>
      );
    }

    // 4. Sports Champions
    if (category === 'Sports Champions') {
      if (lowerName.includes('jahangir') || lowerName.includes('jansher') || lowerTitle.includes('squash')) {
        return (
          <div className="relative flex items-center justify-center">
            <Trophy className="w-16 h-16 text-amber-300 drop-shadow-[0_0_20px_rgba(252,211,77,0.9)]" />
            <Target className="w-8 h-8 text-cyan-300 absolute -top-1 -right-1" />
          </div>
        );
      }
      if (lowerName.includes('arshad') || lowerTitle.includes('javelin') || lowerTitle.includes('athletics')) {
        return (
          <div className="relative flex items-center justify-center">
            <Flame className="w-16 h-16 text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-bounce" />
          </div>
        );
      }
      if (lowerName.includes('samina') || lowerName.includes('sadpara') || lowerTitle.includes('mountain')) {
        return (
          <div className="relative flex items-center justify-center">
            <Mountain className="w-16 h-16 text-blue-300 drop-shadow-[0_0_15px_rgba(147,197,253,0.8)]" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <Trophy className="w-16 h-16 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
        </div>
      );
    }

    // 5. Writers, Poets, Culture
    if (category === 'Writers & Poets' || category === 'Artists & Musicians' || lowerName.includes('iqbal') || lowerName.includes('faiz')) {
      if (category === 'Artists & Musicians' || lowerTitle.includes('music') || lowerTitle.includes('qawwali') || lowerTitle.includes('singer')) {
        return (
          <div className="relative flex items-center justify-center">
            <Music className="w-16 h-16 text-violet-300 drop-shadow-[0_0_15px_rgba(196,181,253,0.8)] animate-pulse" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <Feather className="w-16 h-16 text-amber-300 drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]" />
          <BookOpen className="w-8 h-8 text-emerald-400 absolute -bottom-2" />
        </div>
      );
    }

    // 6. Founders & Leaders
    if (category === 'Leaders & Activists' || lowerName.includes('jinnah') || lowerName.includes('malala')) {
      if (lowerName.includes('malala') || lowerTitle.includes('nobel') || lowerTitle.includes('education')) {
        return (
          <div className="relative flex items-center justify-center">
            <GraduationCap className="w-16 h-16 text-amber-300 drop-shadow-[0_0_15px_rgba(252,211,77,0.8)]" />
            <BookOpen className="w-8 h-8 text-emerald-300 absolute -bottom-2" />
          </div>
        );
      }
      return (
        <div className="relative flex items-center justify-center">
          <Building className="w-16 h-16 text-emerald-300 drop-shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
          <Sparkles className="w-6 h-6 text-amber-300 absolute -top-2 -right-2" />
        </div>
      );
    }

    return (
      <div className="relative flex items-center justify-center">
        <Award className="w-16 h-16 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
      </div>
    );
  };

  return (
    <div className={`relative w-full ${className} overflow-hidden bg-gradient-to-br ${bgGradient} flex flex-col items-center justify-center p-6 border-b border-emerald-800/40 select-none group`}>
      
      {/* Background Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Decorative Crescent Watermark */}
      <div className="absolute -right-8 -bottom-8 w-44 h-44 opacity-10 pointer-events-none text-emerald-300">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M 50 10 A 40 40 0 1 0 90 50 A 32 32 0 1 1 50 10 Z" />
          <polygon points="68,22 72,32 82,32 74,38 77,48 68,42 59,48 62,38 54,32 64,32" />
        </svg>
      </div>

      {/* Main Symbolic Graphic Emblem */}
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500 my-auto">
        {renderSymbolicIcon()}
      </div>

      {/* Symbolic Field Title Label Overlay */}
      {showDetails && (
        <div className="relative z-10 w-full text-center mt-3 pt-3 border-t border-emerald-800/50 flex flex-col items-center">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300/90 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Symbolic Field Emblem
          </span>
          <span className="text-xs font-bold text-slate-200 line-clamp-1 max-w-xs mt-0.5">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};
