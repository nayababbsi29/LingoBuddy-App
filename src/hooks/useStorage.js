// ─────────────────────────────────────────────────────────────────────────────
// useStorage.js — Custom hook for localStorage with JSON serialization
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'lingobuddy_v2';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { saved: {}, history: [] };
  } catch {
    return { saved: {}, history: [] };
  }
}

function persist(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage might be full — fail silently
  }
}

export function useStorage() {
  const [saved, setSaved]     = useState(() => load().saved);
  const [history, setHistory] = useState(() => load().history);

  // Write to localStorage whenever state changes
  useEffect(() => {
    persist({ saved, history });
  }, [saved, history]);

  // Mark a word as learned
  function learnWord(key, index) {
    setSaved(prev => {
      const arr = prev[key] || [];
      if (arr.includes(index)) return prev;          // already marked
      return { ...prev, [key]: [...arr, index] };
    });
  }

  // Save a completed quiz result
  function saveResult(result) {
    setHistory(prev => [...prev, result]);
  }

  // Reset all progress
  function resetAll() {
    setSaved({});
    setHistory([]);
  }

  return { saved, history, learnWord, saveResult, resetAll };
}
