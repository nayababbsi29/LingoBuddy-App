// HomePage.jsx — Landing / welcome page shown on first open
import React from 'react';

const FEATURE_CARDS = [
  {
    key: 'lessons',
    icon: '📚',
    title: 'Daily Lessons',
    desc: 'Learn vocabulary, grammar & phrases at your own pace. Mark words as learned and track progress.',
  },
  {
    key: 'flashcards',
    icon: '🃏',
    title: 'Flashcards',
    desc: 'Flip through 3D cards to memorise translations and pronunciations across any category.',
  },
  {
    key: 'quiz',
    icon: '🎯',
    title: 'Quiz Mode',
    desc: 'Test yourself with 8-question multiple-choice quizzes and get instant feedback on every answer.',
  },
  {
    key: 'dashboard',
    icon: '📊',
    title: 'Dashboard',
    desc: 'View your streak, total words learned, quiz scores and language-by-language progress bars.',
  },
];

export default function HomePage({ onNavigate }) {
  return (
    <div className="page">
      <div className="home-hero">
        {/* Globe animation */}
        <div className="home-globe">🌍</div>

        <h1 className="home-title">
          Learn Any Language<br />
          <span className="grad">The Fun Way</span>
        </h1>

        <p className="home-sub">
          Vocabulary · Grammar · Phrases · Flashcards · Quizzes<br />
          7 languages, zero boring textbooks.
        </p>

        <div className="home-cta-row">
          <button className="btn-primary" onClick={() => onNavigate('lessons')}>
            📚 Start Learning
          </button>
          <button className="btn-outline" onClick={() => onNavigate('quiz')}>
            🎯 Take a Quiz
          </button>
        </div>

        {/* Feature cards grid */}
        <div className="home-cards">
          {FEATURE_CARDS.map(card => (
            <div
              key={card.key}
              className="home-card"
              onClick={() => onNavigate(card.key)}
            >
              <div className="home-card-icon">{card.icon}</div>
              <div className="home-card-title">{card.title}</div>
              <div className="home-card-desc">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
