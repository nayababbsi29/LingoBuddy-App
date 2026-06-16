// App.jsx — Root: page routing + language selector bar
import React, { useState } from 'react';
import { LANGUAGES } from './data/lessons';
import { useStorage }    from './hooks/useStorage';

import Header        from './components/Header';
import HomePage      from './components/HomePage';
import Dashboard     from './components/Dashboard';
import LessonView    from './components/LessonView';
import FlashcardView from './components/FlashcardView';
import QuizView      from './components/QuizView';

// Pages that show the language selector bar
const PAGES_WITH_LANG = new Set(['lessons', 'flashcards', 'quiz']);

export default function App() {
  const [page,     setPage]     = useState('home');
  const [language, setLanguage] = useState('Spanish');

  const { saved, history, learnWord, saveResult } = useStorage();
  const streak = Math.min(history.length, 7);

  function navigate(dest) {
    setPage(dest);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app">
      {/* Sticky top: dev bar + navbar */}
      <Header currentPage={page} onNavigate={navigate} streak={streak} />

      {/* Language selector — only on relevant pages */}
      {PAGES_WITH_LANG.has(page) && (
        <div style={{ maxWidth: 960, margin: '24px auto 0', padding: '0 24px' }}>
          <div className="lang-bar">
            <span className="lang-bar-label">🌐 Language:</span>
            {LANGUAGES.map(({ code, flag }) => (
              <button
                key={code}
                className={`lang-btn ${language === code ? 'active' : ''}`}
                onClick={() => setLanguage(code)}
              >
                {flag} {code}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Page routing */}
      {page === 'home'       && <HomePage   onNavigate={navigate} />}
      {page === 'dashboard'  && <Dashboard  saved={saved} history={history} />}
      {page === 'lessons'    && <LessonView language={language} saved={saved} onLearnWord={learnWord} />}
      {page === 'flashcards' && <FlashcardView language={language} />}
      {page === 'quiz'       && (
        <QuizView
          key={`${language}-${history.length}`}
          language={language}
          onComplete={saveResult}
        />
      )}
    </div>
  );
}
