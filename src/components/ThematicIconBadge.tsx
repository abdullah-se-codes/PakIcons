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
  Briefcase,
  Activity,
  Award,
  Compass,
  Building,
  Scale,
  Music,
  Mountain,
  Flame
} from 'lucide-react';
import { CategoryType } from '../types';

interface ThematicIconBadgeProps {
  category: CategoryType;
  title: string;
  className?: string;
}

export const ThematicIconBadge: React.FC<ThematicIconBadgeProps> = ({ category, title, className = 'w-6 h-6' }) => {
  const lowerTitle = title.toLowerCase();

  if (category === 'Scientists' || lowerTitle.includes('physics') || lowerTitle.includes('chemist')) {
    return <Atom className={`${className} text-cyan-400`} />;
  }

  if (category === 'Engineers & Tech' || lowerTitle.includes('nuclear') || lowerTitle.includes('microsoft') || lowerTitle.includes('silicon')) {
    return <Cpu className={`${className} text-emerald-400`} />;
  }

  if (category === 'Doctors' || lowerTitle.includes('leprosy') || lowerTitle.includes('surgeon') || lowerTitle.includes('hospital')) {
    return <Stethoscope className={`${className} text-teal-300`} />;
  }

  if (category === 'Social Workers' || lowerTitle.includes('ambulance') || lowerTitle.includes('edhi') || lowerTitle.includes('mercy')) {
    return <HeartHandshake className={`${className} text-rose-400`} />;
  }

  if (category === 'Military Heroes' || lowerTitle.includes('nishan-e-haider') || lowerTitle.includes('hilal') || lowerTitle.includes('paf')) {
    return <Shield className={`${className} text-amber-300`} />;
  }

  if (category === 'Sports Champions') {
    if (lowerTitle.includes('everest') || lowerTitle.includes('k2') || lowerTitle.includes('mountaineer')) {
      return <Mountain className={`${className} text-blue-300`} />;
    }
    return <Trophy className={`${className} text-amber-400`} />;
  }

  if (category === 'Writers & Poets') {
    return <Feather className={`${className} text-amber-300`} />;
  }

  if (category === 'Artists & Musicians') {
    if (lowerTitle.includes('singer') || lowerTitle.includes('qawwali') || lowerTitle.includes('music') || lowerTitle.includes('coke studio')) {
      return <Music className={`${className} text-violet-400`} />;
    }
    return <Palette className={`${className} text-pink-400`} />;
  }

  if (category === 'Leaders & Activists') {
    if (lowerTitle.includes('human rights') || lowerTitle.includes('lawyer')) {
      return <Scale className={`${className} text-amber-300`} />;
    }
    return <Building className={`${className} text-emerald-300`} />;
  }

  return <Award className={`${className} text-amber-400`} />;
};
