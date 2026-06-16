# 🌍 LingoBuddy — Language Learning App

A fully interactive language learning app built with React. Learn vocabulary, grammar, and phrases in 7 languages with flashcards, quizzes, and progress tracking.

## 🚀 Getting Started

### Prerequisites
- Node.js v16+ installed → https://nodejs.org
- Git installed → https://git-scm.com

### Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the app
npm start
```

App opens at **http://localhost:3000** automatically.

---

## 📁 Project Structure

```
lingobuddy/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top bar with logo & streak
│   │   ├── Dashboard.jsx    # Stats, progress, activity
│   │   ├── LessonView.jsx   # Word cards by category
│   │   ├── FlashcardView.jsx # 3D flip flashcards
│   │   └── QuizView.jsx     # MCQ quiz with scoring
│   ├── data/
│   │   └── lessons.js       # All language content
│   ├── hooks/
│   │   └── useStorage.js    # LocalStorage custom hook
│   ├── utils/
│   │   └── quiz.js          # Quiz generator utility
│   ├── App.jsx              # Main app + routing
│   ├── styles.css           # All styles
│   └── index.js             # React entry point
├── .gitignore
├── package.json
└── README.md
```

## 🌐 Supported Languages

| Language | Flag |
|----------|------|
| Spanish  | 🇪🇸  |
| French   | 🇫🇷  |
| Japanese | 🇯🇵  |
| Arabic   | 🇸🇦  |
| German   | 🇩🇪  |
| English  | 🇬🇧  |
| Turkish  | 🇹🇷  |

## ✨ Features

- 📚 **Lessons** — Vocabulary, Grammar, Phrases with example sentences
- 🃏 **Flashcards** — 3D flip animation, navigate word by word
- 🎯 **Quiz** — 8-question MCQ with live score tracking
- 📊 **Dashboard** — Progress per language, streak, quiz history
- 💾 **Local Storage** — All progress auto-saved in browser

