// Header.jsx — Top navbar with page links + streak badge
import React from 'react';

const NAV_ITEMS = [
  { key: 'home',       icon: '🏠', label: 'Home'       },
  { key: 'dashboard',  icon: '📊', label: 'Dashboard'  },
  { key: 'lessons',    icon: '📚', label: 'Lessons'    },
  { key: 'flashcards', icon: '🃏', label: 'Flashcards' },
  { key: 'quiz',       icon: '🎯', label: 'Quiz'       },
];

export default function Header({ currentPage, onNavigate, streak }) {
  return (
    <>
      {/* Developer credit bar */}
      <div className="dev-bar">
        Developed by <span>Nayab Jabbar</span> &nbsp;·&nbsp; LingoBuddy Language Learning App
      </div>

      {/* Main navbar */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => onNavigate('home')}>
          <div className="nav-logo-icon">🌍</div>
          <div className="nav-logo-text">Lingo<span>Buddy</span></div>
        </div>

        <div className="nav-links">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>

        <div className="nav-streak">🔥 {streak} day streak</div>
      </nav>
    </>
  );
}
