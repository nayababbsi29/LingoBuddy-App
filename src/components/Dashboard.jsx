// Dashboard.jsx — Stats, per-language progress, recent quiz history
import React from 'react';
import { LANGUAGES, LESSONS } from '../data/lessons';

export default function Dashboard({ saved, history }) {
  const totalLearned = Object.values(saved).reduce((s, a) => s + a.length, 0);
  const totalQuizzes = history.length;
  const avgScore     = totalQuizzes
    ? Math.round(history.reduce((s, h) => s + h.score / h.total, 0) / totalQuizzes * 100)
    : 0;
  const streak = Math.min(totalQuizzes, 7);

  const stats = [
    { value: totalLearned,   label: 'Words Learned', color: 'var(--primary)',   icon: '📖' },
    { value: totalQuizzes,   label: 'Quizzes Done',  color: 'var(--secondary)', icon: '🎯' },
    { value: avgScore + '%', label: 'Avg Score',     color: 'var(--accent)',    icon: '⭐' },
    { value: streak + ' 🔥', label: 'Day Streak',    color: 'var(--gold)',      icon: '🔥' },
  ];

  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-hero">
          <div className="page-hero-eyebrow">Overview</div>
          <h1 className="page-hero-title">Your <span>Dashboard</span></h1>
          <p className="page-hero-sub">Track your learning progress across all languages.</p>
        </div>

        {/* Stat cards */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.07}s` }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div className="stat-number" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Per-language progress */}
        <div className="section-title" style={{ marginBottom: 14 }}>📊 Language Progress</div>
        {LANGUAGES.map(({ code, flag }) => {
          const cats    = ['vocabulary', 'grammar', 'phrases'];
          const learned = cats.reduce((s, c) => s + ((saved[`${code}_${c}`] || []).length), 0);
          const total   = cats.reduce((s, c) => s + LESSONS[code][c].length, 0);
          const pct     = total > 0 ? Math.round((learned / total) * 100) : 0;
          return (
            <div key={code} style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{flag} {code}</span>
                <span style={{ fontSize: 13, color: 'var(--muted)' }}>{learned}/{total}</span>
              </div>
              <div className="progress-bar-wrap">
                <div className="progress-bar" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}

        {/* Recent activity */}
        <div className="section-title" style={{ margin: '28px 0 14px' }}>🏆 Recent Activity</div>
        {history.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">🎮</div>
            <p>No quizzes yet! Head to Quiz to get started.</p>
          </div>
        ) : (
          [...history].reverse().slice(0, 6).map((h, i) => (
            <div key={i} className="activity-row">
              <div className="activity-icon" style={{ background: 'rgba(108,99,255,0.15)' }}>🎯</div>
              <div className="activity-info">
                <div className="activity-name">{h.language} Quiz</div>
                <div className="activity-meta">{h.date}</div>
              </div>
              <div className="activity-score">{h.score}/{h.total}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
