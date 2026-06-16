// LessonView.jsx — Word cards by category, mark as learned
import React, { useState } from 'react';
import { LESSONS } from '../data/lessons';

const CATEGORIES = [
  { key: 'vocabulary', label: '📚 Vocabulary', activeClass: 'active-vocab' },
  { key: 'grammar',    label: '🔤 Grammar',    activeClass: 'active-grammar' },
  { key: 'phrases',    label: '💬 Phrases',    activeClass: 'active-phrases' },
];

export default function LessonView({ language, saved, onLearnWord }) {
  const [category, setCategory] = useState('vocabulary');

  const words      = LESSONS[language][category];
  const savedKey   = `${language}_${category}`;
  const learnedSet = new Set(saved[savedKey] || []);

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-hero">
          <div className="page-hero-eyebrow">Study</div>
          <h1 className="page-hero-title">Daily <span>Lessons</span></h1>
          <p className="page-hero-sub">Click a card to mark it as learned. Work through all categories.</p>
        </div>

        {/* Category tabs */}
        <div className="cat-tabs">
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

        {/* Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
          <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 700 }}>
            {learnedSet.size}/{words.length} learned
          </span>
          {learnedSet.size === words.length && (
            <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>🎉 All done!</span>
          )}
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar" style={{ width: `${(learnedSet.size / words.length) * 100}%` }} />
        </div>

        {/* Word cards */}
        <div className="lessons-grid">
          {words.map((w, i) => {
            const isLearned = learnedSet.has(i);
            return (
              <div
                key={i}
                className="lesson-card"
                style={{ opacity: isLearned ? 0.65 : 1, borderColor: isLearned ? 'var(--accent)' : undefined }}
                onClick={() => onLearnWord(savedKey, i)}
                title="Click to mark as learned"
              >
                {isLearned && <div className="learned-tick">✓</div>}
                <div className="lesson-word">{w.word}</div>
                <div className="lesson-translation">{w.translation}</div>
                <div className="lesson-pronunciation">/{w.pronunciation}/</div>
                <div className="lesson-example">"{w.example}"</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
