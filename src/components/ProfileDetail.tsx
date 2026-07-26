import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  Share2, 
  Sparkles, 
  Award, 
  Calendar, 
  MapPin, 
  Quote, 
  BookOpen, 
  GraduationCap, 
  Smile, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Send, 
  Copy, 
  Check, 
  ArrowRightLeft,
  Loader2,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Personality, QuizQuestion } from '../types';
import { ThematicIconBadge } from './ThematicIconBadge';
import { SymbolicVisual } from './SymbolicVisual';

interface ProfileDetailProps {
  personality: Personality;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: (id: string, e: React.MouseEvent) => void;
  onSelectForCompare: (id: string) => void;
}

export const ProfileDetail: React.FC<ProfileDetailProps> = ({
  personality,
  onBack,
  isSaved,
  onToggleSave,
  onSelectForCompare,
}) => {
  const [activeAiTab, setActiveAiTab] = useState<'summary' | 'exam' | 'child' | 'quiz' | 'ask'>('summary');
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Quiz State
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion[]>(personality.aiData.quiz);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Ask AI state
  const [userQuestion, setUserQuestion] = useState('');
  const [aiChatHistory, setAiChatHistory] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    {
      role: 'ai',
      text: `Assalamu Alaikum! I am your AI assistant for ${personality.name}. Ask me any question about their life, achievements, historical impact, or legacy!`
    }
  ]);
  const [aiLoading, setAiLoading] = useState(false);

  // Gemini Live AI Regeneration for Summary
  const [customSummary, setCustomSummary] = useState<string | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${personality.featuredQuote}" — ${personality.name}`);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const handleQuizOptionSelect = (questionId: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    currentQuiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleRegenerateSummary = async () => {
    setSummaryLoading(true);
    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Provide a detailed 2-paragraph inspiring biography summary for ${personality.name} (${personality.title}). Focus on major contributions, legacy, and national significance.`,
          personalityName: personality.name,
          type: 'summary'
        })
      });
      const data = await res.json();
      if (data.result) {
        setCustomSummary(data.result);
      } else {
        setCustomSummary(personality.aiData.summary);
      }
    } catch (e) {
      console.error(e);
      setCustomSummary(personality.aiData.summary);
    } finally {
      setSummaryLoading(false);
    }
  };

  const handleSendQuestion = async () => {
    if (!userQuestion.trim() || aiLoading) return;
    const q = userQuestion.trim();
    setUserQuestion('');
    setAiChatHistory((prev) => [...prev, { role: 'user', text: q }]);
    setAiLoading(true);

    try {
      const res = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: `Question regarding Pakistani icon ${personality.name} (${personality.title}, ${personality.category}): "${q}". Context: ${personality.shortDescription}. Answer accurately, precisely, and directly with factual historical detail.`,
          personalityName: personality.name,
          type: 'ask'
        })
      });
      const data = await res.json();
      if (data.result) {
        setAiChatHistory((prev) => [...prev, { role: 'ai', text: data.result }]);
      } else {
        setAiChatHistory((prev) => [...prev, { role: 'ai', text: `${personality.name} was a key pioneer in ${personality.category}. ${personality.shortDescription}` }]);
      }
    } catch (err) {
      console.error(err);
      setAiChatHistory((prev) => [...prev, { role: 'ai', text: `${personality.name} made historic contributions in ${personality.category}. Learn more in the milestones section!` }]);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Discover</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectForCompare(personality.id)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition-colors"
          >
            <ArrowRightLeft className="w-4 h-4" />
            <span>Compare Icon</span>
          </button>

          <button
            onClick={(e) => onToggleSave(personality.id, e)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isSaved
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Main Profile Header Card */}
      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Symbolic Canvas (NO human faces) */}
        <div className="lg:col-span-5 relative bg-slate-950 min-h-[220px] sm:min-h-[280px] lg:min-h-[520px] flex items-center justify-center">
          <SymbolicVisual
            name={personality.name}
            category={personality.category}
            title={personality.title}
            className="w-full h-full min-h-[220px] sm:min-h-[280px] lg:min-h-[520px]"
          />
        </div>

        {/* Right Info Header */}
        <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-slate-900">
          
          <div className="space-y-4">
            <div className="flex items-center flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/50 flex items-center gap-1.5">
                <ThematicIconBadge category={personality.category} title={personality.title} className="w-3.5 h-3.5" />
                <span>{personality.category}</span>
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-slate-700/60">
                {personality.impactDomain} Impact
              </span>
            </div>

            <div className="space-y-1">
              {personality.urduName && (
                <span className="text-base sm:text-lg font-bold text-amber-400 block font-sans whitespace-normal [word-break:normal] [overflow-wrap:anywhere] leading-snug dir-rtl">
                  {personality.urduName}
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight whitespace-normal [word-break:normal] [overflow-wrap:anywhere]">
                {personality.name}
              </h1>
              <p className="text-xs sm:text-sm lg:text-base font-semibold text-emerald-400 mt-1 leading-snug whitespace-normal [word-break:normal] [overflow-wrap:anywhere]">
                {personality.title}
              </p>
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 min-w-0">
                <Calendar className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Lifespan</p>
                  <p className="text-xs font-bold text-slate-200 truncate">{personality.lifespan}</p>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 min-w-0">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Birthplace</p>
                  <p className="text-xs font-bold text-slate-200 break-words">{personality.birthPlace}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {personality.fullBio}
            </p>
          </div>

          {/* Featured Quote Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-emerald-950/80 border border-emerald-800/60 relative group">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium italic text-slate-200 leading-relaxed">
                  "{personality.featuredQuote}"
                </p>
              </div>
              <button
                onClick={handleCopyQuote}
                title="Copy quote"
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300"
              >
                {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {personality.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Main Grid: Milestones & Awards (Left 7 cols) + AI Hub (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Key Contributions, Timeline & Awards */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Key Contributions */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              Key Contributions & Legacy
            </h3>
            <ul className="space-y-3">
              {personality.keyContributions.map((kc, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Milestone Timeline */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              Milestone Timeline
            </h3>

            <div className="relative pl-6 space-y-6 border-l-2 border-emerald-800/60">
              {personality.milestones.map((m, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900 group-hover:scale-125 transition-transform" />

                  <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-emerald-950 text-emerald-300 border border-emerald-800/50 inline-block">
                      {m.year}
                    </span>
                    <h4 className="text-sm font-bold text-white">{m.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Awards */}
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Major State & Global Honors
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personality.awards.map((award, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase">
                      {award.year}
                    </span>
                    <h4 className="text-xs font-bold text-white">{award.title}</h4>
                    <p className="text-[11px] text-slate-400">{award.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: AI Interactive Hub */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-slate-900 rounded-3xl border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col">
            
            {/* AI Header Banner */}
            <div className="p-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight">AI Insights & Study Center</h3>
                  <p className="text-[11px] text-emerald-100">Powered by Gemini AI Engine</p>
                </div>
              </div>
            </div>

            {/* AI Feature Tabs */}
            <div className="grid grid-cols-5 p-2 bg-slate-950 border-b border-slate-800 text-xs font-semibold text-slate-300">
              <button
                onClick={() => setActiveAiTab('summary')}
                className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                  activeAiTab === 'summary' ? 'bg-slate-800 text-emerald-400 shadow-sm font-bold border border-emerald-800/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="text-[10px]">Summary</span>
              </button>

              <button
                onClick={() => setActiveAiTab('exam')}
                className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                  activeAiTab === 'exam' ? 'bg-slate-800 text-emerald-400 shadow-sm font-bold border border-emerald-800/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="text-[10px]">Exam Notes</span>
              </button>

              <button
                onClick={() => setActiveAiTab('child')}
                className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                  activeAiTab === 'child' ? 'bg-slate-800 text-emerald-400 shadow-sm font-bold border border-emerald-800/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <Smile className="w-3.5 h-3.5" />
                <span className="text-[10px]">Kids Story</span>
              </button>

              <button
                onClick={() => setActiveAiTab('quiz')}
                className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                  activeAiTab === 'quiz' ? 'bg-slate-800 text-emerald-400 shadow-sm font-bold border border-emerald-800/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span className="text-[10px]">AI Quiz</span>
              </button>

              <button
                onClick={() => setActiveAiTab('ask')}
                className={`py-2 px-1 rounded-xl text-center flex flex-col items-center gap-1 transition-all ${
                  activeAiTab === 'ask' ? 'bg-slate-800 text-emerald-400 shadow-sm font-bold border border-emerald-800/50' : 'hover:bg-slate-800/50'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="text-[10px]">AI Ask</span>
              </button>
            </div>

            {/* AI Tab Content */}
            <div className="p-5 sm:p-6 space-y-4 flex-1 overflow-y-auto">
              
              {/* TAB 1: Short Summary */}
              {activeAiTab === 'summary' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Short AI Summary
                    </span>
                    <button
                      onClick={handleRegenerateSummary}
                      disabled={summaryLoading}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/50 hover:bg-emerald-900 flex items-center gap-1.5 disabled:opacity-50 transition-colors"
                    >
                      {summaryLoading ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Regenerate AI</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-normal break-words space-y-3">
                    <p>{customSummary || personality.aiData.summary}</p>
                  </div>
                </div>
              )}

              {/* TAB 2: Exam Notes */}
              {activeAiTab === 'exam' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 text-blue-200 space-y-1">
                    <span className="font-bold block text-blue-300 text-xs uppercase tracking-wider mb-1">Exam Overview</span>
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-normal break-words">{personality.aiData.examNotes.overview}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="font-bold text-white block text-xs uppercase tracking-wider text-amber-400 mb-1">Key Exam Points:</span>
                    <ul className="space-y-2 list-disc pl-5 text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-normal break-words">
                      {personality.aiData.examNotes.keyAchievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-2">
                    <span className="font-bold text-xs text-emerald-400 uppercase tracking-wider block mb-1">Exam Success Tip:</span>
                    <ul className="space-y-1.5 text-xs text-emerald-300 leading-relaxed whitespace-normal break-words">
                      {personality.aiData.examNotes.examTips.map((tip, i) => (
                        <li key={i}>• {tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: Child-Friendly Story */}
              {activeAiTab === 'child' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/30 border border-amber-800/40 space-y-2">
                    <h4 className="font-bold text-amber-300 text-sm sm:text-base leading-snug">
                      {personality.aiData.childStory.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-normal break-words">
                      {personality.aiData.childStory.story}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm leading-relaxed">
                    <Sparkles className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1 whitespace-normal break-words">
                      <span className="font-bold text-emerald-300 block">Moral Lesson for Kids:</span>
                      <p>{personality.aiData.childStory.moralLesson}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: Interactive Quiz Generator */}
              {activeAiTab === 'quiz' && (
                <div className="space-y-4 text-xs sm:text-sm">
                  {!quizSubmitted ? (
                    <div className="space-y-4">
                      {currentQuiz.map((q, idx) => (
                        <div key={q.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                          <p className="font-bold text-slate-100 text-xs sm:text-sm leading-relaxed whitespace-normal break-words">
                            Q{idx + 1}: {q.question}
                          </p>
                          <div className="space-y-2">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = quizAnswers[q.id] === optIdx;
                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleQuizOptionSelect(q.id, optIdx)}
                                  className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium transition-all leading-snug whitespace-normal break-words flex items-start gap-2.5 ${
                                    isSelected
                                      ? 'bg-emerald-600 text-white font-bold shadow-md ring-2 ring-emerald-400/40'
                                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white'
                                  }`}
                                >
                                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5 ${
                                    isSelected ? 'bg-white text-emerald-700' : 'bg-slate-800 text-slate-400'
                                  }`}>
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <span className="flex-1">{opt}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={handleSubmitQuiz}
                        disabled={Object.keys(quizAnswers).length < currentQuiz.length}
                        className="w-full py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/80 disabled:opacity-50 transition-colors text-xs sm:text-sm"
                      >
                        Submit Answers
                      </button>
                    </div>
                  ) : (
                    /* Quiz Results */
                    <div className="space-y-4 text-center">
                      <div className="p-5 rounded-2xl bg-emerald-950/90 border border-emerald-800 space-y-1.5">
                        <span className="text-3xl sm:text-4xl font-black text-emerald-300">
                          {quizScore} / {currentQuiz.length}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-200">
                          {quizScore === currentQuiz.length ? 'Perfect Score! Outstanding!' : 'Great effort! Keep learning!'}
                        </p>
                      </div>

                      <div className="space-y-3 text-left">
                        {currentQuiz.map((q, idx) => {
                          const userAns = quizAnswers[q.id];
                          const isCorrect = userAns === q.correctAnswer;
                          return (
                            <div key={q.id} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs sm:text-sm space-y-1.5">
                              <div className="flex items-start gap-2 font-bold text-slate-100 whitespace-normal break-words">
                                {isCorrect ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                ) : (
                                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                                )}
                                <span>Q{idx + 1}: {q.question}</span>
                              </div>
                              <p className="text-slate-400 pl-6 text-xs leading-relaxed whitespace-normal break-words">
                                {q.explanation}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={handleResetQuiz}
                        className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800 text-slate-100 flex items-center gap-2 mx-auto hover:bg-slate-700 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Retake Quiz</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 5: Ask AI Assistant */}
              {activeAiTab === 'ask' && (
                <div className="space-y-3 flex flex-col h-[340px]">
                  <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 no-scrollbar text-xs sm:text-sm">
                    {aiChatHistory.map((msg, i) => (
                      <div
                        key={i}
                        className={`p-3.5 rounded-2xl max-w-[88%] leading-relaxed whitespace-normal break-words ${
                          msg.role === 'user'
                            ? 'ml-auto bg-emerald-600 text-white font-medium shadow-md'
                            : 'bg-slate-900 text-slate-200 border border-slate-800'
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                    {aiLoading && (
                      <div className="p-3.5 rounded-2xl bg-slate-900 text-slate-400 flex items-center gap-2 text-xs border border-slate-800">
                        <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                        <span>Consulting Gemini AI...</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
                    <input
                      type="text"
                      value={userQuestion}
                      onChange={(e) => setUserQuestion(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                      placeholder={`Ask anything about ${personality.name}...`}
                      className="flex-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900 text-slate-100 border border-slate-800 focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      onClick={handleSendQuestion}
                      disabled={!userQuestion.trim() || aiLoading}
                      className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
