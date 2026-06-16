// QuizView.jsx — Multiple-choice quiz with result screen
import React, { useState } from 'react';
import { LESSONS } from '../data/lessons';
import { generateQuiz } from '../utils/quiz';

export default function QuizView({ language, onComplete }) {
  const [quiz]                    = useState(() => generateQuiz(LESSONS[language]));
  const [current,  setCurrent]    = useState(0);
  const [answers,  setAnswers]    = useState([]);
  const [selected, setSelected]   = useState(null);
  const [showFeedback, setFeedback] = useState(false);
  const [done, setDone]           = useState(false);

  const q = quiz[current];
  const correctSoFar = answers.filter(Boolean).length;

  function pick(opt) {
    if (showFeedback) return;
    setSelected(opt);
    setFeedback(true);
    const isCorrect = opt === q.correct;

    setTimeout(() => {
      const updated = [...answers, isCorrect];
      setAnswers(updated);
      if (current + 1 < quiz.length) {
        setCurrent(c => c + 1);
        setSelected(null);
        setFeedback(false);
      } else {
        const finalScore = updated.filter(Boolean).length;
        setDone(true);
        onComplete({ language, score: finalScore, total: quiz.length, date: new Date().toLocaleDateString() });
      }
    }, 1000);
  }

  // ── Result screen
  if (done) {
    const pct   = Math.round((correctSoFar / quiz.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '🎉' : '💪';
    const msg   = pct >= 80 ? 'Excellent!' : pct >= 60 ? 'Good job!' : 'Keep practicing!';
    return (
      <div className="page">
        <div className="page-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 60 }}>
          <div className="result-card">
            <div className="result-emoji">{emoji}</div>
            <div className="result-title">{msg}</div>
            <div className="result-score">{pct}%</div>
            <p style={{ color: 'var(--muted)', margin: '8px 0 4px' }}>{correctSoFar} out of {quiz.length} correct</p>
            <p style={{ color: 'var(--muted)', marginBottom: 32 }}>{language} Quiz Complete</p>
            <button className="btn-primary" onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Question screen
  return (
    <div className="page">
      <div className="page-inner">
        <div className="page-hero">
          <div className="page-hero-eyebrow">Test Yourself</div>
          <h1 className="page-hero-title">Quiz <span>Mode</span></h1>
          <p className="page-hero-sub">Pick the correct translation for each word.</p>
        </div>

        <div className="quiz-progress">
          <div className="quiz-dots">
            {quiz.map((_, i) => {
              let cls = 'quiz-dot';
              if (i < answers.length)  cls += answers[i] ? ' done-correct' : ' done-wrong';
              else if (i === current)  cls += ' current';
              return <div key={i} className={cls} />;
            })}
          </div>
          <div className="quiz-score-text">✅ {correctSoFar}/{answers.length}</div>
        </div>

        <p style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>
          Question {current + 1} of {quiz.length}
        </p>
        <div className="quiz-q">{q.question}</div>
        <div className="quiz-sub">/{q.pronunciation}/</div>

        <div className="quiz-options">
          {q.options.map(opt => {
            let cls = 'quiz-option';
            if (showFeedback) {
              if (opt === q.correct) cls += ' correct';
              else if (opt === selected) cls += ' wrong';
            }
            return (
              <button key={opt} className={cls} onClick={() => pick(opt)} disabled={showFeedback}>
                {opt}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`quiz-feedback ${selected === q.correct ? 'correct' : 'wrong'}`}>
            {selected === q.correct ? '✅ Correct!' : `❌ Answer: ${q.correct}`}
          </div>
        )}
      </div>
    </div>
  );
}
