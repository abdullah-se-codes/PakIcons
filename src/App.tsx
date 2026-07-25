import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryGrid } from './components/CategoryGrid';
import { PersonalityCard } from './components/PersonalityCard';
import { ProfileDetail } from './components/ProfileDetail';
import { ComparisonTool } from './components/ComparisonTool';
import { QuaidQuotesSection } from './components/QuaidQuotesSection';
import { Footer } from './components/Footer';
import { PERSONALITIES } from './data/personalities';
import { CategoryType } from './types';
import { Bookmark, Search, ChevronUp } from 'lucide-react';

export default function App() {
  // Dark mode state (unified dark theme)
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Active view tab
  const [activeTab, setActiveTab] = useState<'home' | 'categories' | 'compare' | 'saved'>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Floating scroll to top state
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Selected profile for Detail View
  const [selectedPersonalityId, setSelectedPersonalityId] = useState<string | null>(null);

  // Compare selection state
  const [compareAId, setCompareAId] = useState<string>(PERSONALITIES[0]?.id || '');
  const [compareBId, setCompareBId] = useState<string>(PERSONALITIES[1]?.id || '');

  // Saved / Bookmarked icons in LocalStorage
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pakicons_saved_ids');
      return saved ? JSON.parse(saved) : ['abdus-salam', 'abdul-sattar-edhi'];
    } catch {
      return ['abdus-salam', 'abdul-sattar-edhi'];
    }
  });

  // Track scroll position for Floating Scroll to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply dark mode class to root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('pakicons_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Persist saved IDs
  useEffect(() => {
    localStorage.setItem('pakicons_saved_ids', JSON.stringify(savedIds));
  }, [savedIds]);

  const handleToggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectForCompare = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCompareAId(id);
    setActiveTab('compare');
    setSelectedPersonalityId(null);
  };

  const handleSelectPersonality = (id: string) => {
    setSelectedPersonalityId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter personalities based on category and search query
  const filteredPersonalities = PERSONALITIES.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      (p.urduName && p.urduName.includes(query)) ||
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  // Category counts
  const categoryCounts = PERSONALITIES.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<CategoryType, number>);

  const savedPersonalities = PERSONALITIES.filter((p) => savedIds.includes(p.id));
  const selectedPersonality = PERSONALITIES.find((p) => p.id === selectedPersonalityId);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white transition-colors duration-300">
      
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedPersonalityId(null);
        }}
        savedCount={savedIds.length}
      />

      {/* Main View Router */}
      <main>
        {/* DETAIL VIEW MODE */}
        {selectedPersonality ? (
          <ProfileDetail
            personality={selectedPersonality}
            onBack={() => setSelectedPersonalityId(null)}
            isSaved={savedIds.includes(selectedPersonality.id)}
            onToggleSave={handleToggleSave}
            onSelectForCompare={(id) => handleSelectForCompare(id)}
          />
        ) : (
          <>
            {/* HOME TAB */}
            {activeTab === 'home' && (
              <div>
                <Hero
                  personalities={PERSONALITIES}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  totalCount={PERSONALITIES.length}
                  onSelectPersonality={handleSelectPersonality}
                />

                <CategoryGrid
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    const el = document.getElementById('featured-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  personalityCounts={categoryCounts}
                />

                {/* Featured Personalities Section */}
                <section id="featured-grid" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
                  
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        {selectedCategory === 'All' ? 'Complete Archive' : `${selectedCategory} Icons`}
                      </span>
                      <h2 className="text-3xl font-black tracking-tight text-amber-400">
                        Featured Personalities ({filteredPersonalities.length})
                      </h2>
                    </div>

                    {selectedCategory !== 'All' && (
                      <button
                        onClick={() => setSelectedCategory('All')}
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Show All Categories
                      </button>
                    )}
                  </div>

                  {filteredPersonalities.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredPersonalities.map((personality) => (
                        <PersonalityCard
                          key={personality.id}
                          personality={personality}
                          onSelect={handleSelectPersonality}
                          isSaved={savedIds.includes(personality.id)}
                          onToggleSave={handleToggleSave}
                          onCompare={(id, e) => handleSelectForCompare(id, e)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="py-16 text-center bg-slate-900/90 rounded-3xl border border-slate-800">
                      <Search className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-slate-200">No Personalities Found</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Try clearing search terms or selecting a different category filter.
                      </p>
                      <button
                        onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                        className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  )}

                </section>

                {/* Quaid-e-Azam Words of Wisdom Carousel Section */}
                <QuaidQuotesSection />
              </div>
            )}

            {/* CATEGORIES TAB */}
            {activeTab === 'categories' && (
              <div className="pt-8">
                <CategoryGrid
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    setActiveTab('home');
                  }}
                  personalityCounts={categoryCounts}
                />
              </div>
            )}

            {/* COMPARE TAB */}
            {activeTab === 'compare' && (
              <ComparisonTool
                personalities={PERSONALITIES}
                initialIconAId={compareAId}
                initialIconBId={compareBId}
                onSelectPersonality={handleSelectPersonality}
              />
            )}

            {/* SAVED TAB */}
            {activeTab === 'saved' && (
              <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    <Bookmark className="w-4 h-4 fill-current text-amber-500" />
                    <span>Personal Bookmarks</span>
                  </div>
                  <h2 className="text-3xl font-black text-amber-400">
                    Saved Personalities ({savedPersonalities.length})
                  </h2>
                </div>

                {savedPersonalities.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {savedPersonalities.map((personality) => (
                      <PersonalityCard
                        key={personality.id}
                        personality={personality}
                        onSelect={handleSelectPersonality}
                        isSaved={true}
                        onToggleSave={handleToggleSave}
                        onCompare={(id, e) => handleSelectForCompare(id, e)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center bg-slate-900/90 rounded-3xl border border-slate-800">
                    <Bookmark className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-200">No Saved Icons Yet</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Click the bookmark icon on any personality card to save it here for quick access.
                    </p>
                    <button
                      onClick={() => setActiveTab('home')}
                      className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      Browse Personalities
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => { setActiveTab(tab); setSelectedPersonalityId(null); }} />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Scroll to Top"
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/80 border border-emerald-400/40 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <ChevronUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
