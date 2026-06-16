// FlashcardView.jsx — 3D flip flashcards with arrow navigation
import React, { useState, useEffect } from 'react';
import { LESSONS } from '../data/lessons';

const CATEGORIES = [
  { key: 'vocabulary', label: '📚 Vocabulary', activeClass: 'active-vocab' },
  { key: 'grammar',    label: '🔤 Grammar',    activeClass: 'active-grammar' },
  { key: 'phrases',    label: '💬 Phrases',    activeClass: 'active-phrases' },
];

export default function FlashcardView({ language }) {
  const [category, setCategory] = useState('vocabulary');
  const [index,    setIndex]    = useState(0);
  const [flipped,  setFlipped]  = useState(false);

  const words = LESSONS[language][category];

  useEffect(() => { setIndex(0); setFlipped(false); }, [language, category]);

  function go(dir) {
    setFlipped(false);
    setTimeout(() => setIndex(i => (i + dir + words.length) % words.length), 180);
  }

  const w = words[index];

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-hero">
          <div className="page-hero-eyebrow">Practice</div>
          <h1 className="page-hero-title">Flash<span>cards</span></h1>
          <p className="page-hero-sub">Tap a card to flip and reveal the translation.</p>
        </div>

        <div className="cat-tabs" style={{ marginBottom: 32 }}>
          {CATEGORIES.map(c => (
            <button
              key={c.key}
              className={`cat-tab ${category === c.key ? c.activeClass : ''}`}
              onClick={() => setCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flashcard-container" onClick={() => setFlipped(f => !f)}>
          <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
            <div className="flashcard-face flashcard-front">
              <div className="fc-label">{language} → English</div>
              <div className="fc-word">{w.word}</div>
              <div className="fc-pronunciation">/{w.pronunciation}/</div>
              <div className="fc-hint">👆 Tap to reveal</div>
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="fc-label">Translation</div>
              <div className="fc-word" style={{ color: 'var(--accent)' }}>{w.translation}</div>
              <div className="fc-example">"{w.example}"</div>
            </div>
          </div>
        </div>

        <div className="flashcard-nav">
          <button className="fc-nav-btn" onClick={() => go(-1)}>‹</button>
          <div className="fc-count">{index + 1} / {words.length}</div>
          <button className="fc-nav-btn" onClick={() => go(1)}>›</button>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13 }}>
          Tap card to flip &nbsp;·&nbsp; Use arrows to navigate
        </p>
      </div>
    </div>
  );
}
