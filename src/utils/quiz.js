// ─────────────────────────────────────────────────────────────────────────────
// quiz.js — Generates a randomized multiple-choice quiz from lesson data
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Build a quiz from a language's lesson set.
 * @param {Object} lessons   - { vocabulary, grammar, phrases } arrays
 * @param {number} count     - number of questions (default 8)
 * @returns {Array}          - array of question objects
 */
export function generateQuiz(lessons, count = 8) {
  // Combine all categories into one flat pool
  const pool = [
    ...lessons.vocabulary,
    ...lessons.grammar,
    ...lessons.phrases,
  ];

  // Pick random questions from the pool
  const questions = shuffle([...pool]).slice(0, Math.min(count, pool.length));

  return questions.map(item => {
    // Pick 3 wrong answers from the rest of the pool
    const wrongOptions = pool
      .filter(w => w.translation !== item.translation)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(w => w.translation);

    // Shuffle correct answer in with wrong options
    const options = shuffle([...wrongOptions, item.translation]);

    return {
      question:      item.word,
      correct:       item.translation,
      pronunciation: item.pronunciation,
      options,
    };
  });
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
