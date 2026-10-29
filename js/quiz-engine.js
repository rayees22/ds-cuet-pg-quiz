// ==========================================================================
// Quiz Logic Engine - Shuffling, Scoring & Analytics
// ==========================================================================

const QuizEngine = (function () {
  /**
   * Fisher-Yates (Knuth) Shuffle algorithm for unbiased randomization
   */
  function shuffleArray(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  /**
   * Prepares a question for quiz by shuffling its 4 options while
   * maintaining full correct answer association and mapping.
   */
  function prepareQuestion(rawQuestion) {
    // Shuffle the 4 options
    const shuffledRawOptions = shuffleArray(rawQuestion.options);

    // Assign display keys A, B, C, D to the shuffled positions
    const displayKeys = ['A', 'B', 'C', 'D'];
    const preparedOptions = shuffledRawOptions.map((opt, index) => {
      const isCorrect = (opt.key === rawQuestion.correctAnswer);
      return {
        displayKey: displayKeys[index],
        originalKey: opt.key,
        text: opt.text,
        rawText: opt.raw,
        isCorrect: isCorrect
      };
    });

    return {
      id: rawQuestion.id,
      originalNum: rawQuestion.originalNum,
      sectionId: rawQuestion.sectionId,
      sectionTitle: rawQuestion.sectionTitle,
      question: rawQuestion.question,
      rawQuestion: rawQuestion.rawQuestion,
      options: preparedOptions,
      originalCorrectAnswer: rawQuestion.correctAnswer,
      difficulty: rawQuestion.difficulty || 'Medium',
      explanation: rawQuestion.explanation,
      trap: rawQuestion.trap || null
    };
  }

  return {
    /**
     * Initializes a fresh randomized quiz session
     */
    createSession: function (allQuestions, options = {}) {
      const {
        sectionId = 'all',
        limit = 'all',
        filterIds = null // used for 'Retake Missed Questions Only'
      } = options;

      let filtered = allQuestions.slice();

      // Filter by specific IDs if retaking missed questions
      if (Array.isArray(filterIds) && filterIds.length > 0) {
        const idSet = new Set(filterIds);
        filtered = filtered.filter(q => idSet.has(q.id));
      } else if (sectionId !== 'all') {
        const secNum = parseInt(sectionId, 10);
        filtered = filtered.filter(q => q.sectionId === secNum);
      }

      // Randomly shuffle the order of all selected questions
      const shuffledQuestions = shuffleArray(filtered);

      // Limit count if specified (e.g. 10, 25, 50, 100)
      let finalQuestions = shuffledQuestions;
      if (limit !== 'all') {
        const count = parseInt(limit, 10);
        if (!isNaN(count) && count > 0) {
          finalQuestions = shuffledQuestions.slice(0, count);
        }
      }

      // For each question, randomly shuffle the 4 options
      const preparedQuestions = finalQuestions.map(q => prepareQuestion(q));

      return {
        id: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        startTime: Date.now(),
        sectionId: sectionId,
        limit: limit,
        totalQuestions: preparedQuestions.length,
        questions: preparedQuestions,
        currentIndex: 0,
        userAnswers: {}, // key: questionId -> { selectedDisplayKey, selectedOriginalKey, isCorrect, timestamp }
        flaggedQuestions: [], // array of questionIds
        score: 0,
        timeElapsed: 0,
        isSubmitted: false
      };
    },

    /**
     * Records user answer for a question
     * Ensures an answer can only be registered once (lock after click).
     */
    recordAnswer: function (session, questionId, selectedDisplayKey) {
      if (!session || session.isSubmitted) return null;
      if (session.userAnswers[questionId]) {
        // Already answered! Do not allow multiple answers or duplicate points
        return session.userAnswers[questionId];
      }

      const q = session.questions.find(item => item.id === questionId);
      if (!q) return null;

      const chosenOption = q.options.find(opt => opt.displayKey === selectedDisplayKey);
      if (!chosenOption) return null;

      const isCorrect = chosenOption.isCorrect;
      if (isCorrect) {
        session.score += 1;
      }

      const answerRecord = {
        questionId: questionId,
        selectedDisplayKey: selectedDisplayKey,
        selectedOriginalKey: chosenOption.originalKey,
        isCorrect: isCorrect,
        timestamp: Date.now()
      };

      session.userAnswers[questionId] = answerRecord;
      return answerRecord;
    },

    /**
     * Generates comprehensive analytics and results report
     */
    generateResults: function (session) {
      if (!session) return null;

      const total = session.questions.length;
      let correctCount = 0;
      let incorrectCount = 0;
      let skippedCount = 0;
      const missedQuestionIds = [];

      // Section breakdown map
      const sectionStats = {};

      session.questions.forEach(q => {
        if (!sectionStats[q.sectionTitle]) {
          sectionStats[q.sectionTitle] = {
            sectionId: q.sectionId,
            title: q.sectionTitle,
            total: 0,
            correct: 0,
            incorrect: 0,
            skipped: 0
          };
        }
        sectionStats[q.sectionTitle].total += 1;

        const ans = session.userAnswers[q.id];
        if (!ans) {
          skippedCount += 1;
          sectionStats[q.sectionTitle].skipped += 1;
        } else if (ans.isCorrect) {
          correctCount += 1;
          sectionStats[q.sectionTitle].correct += 1;
        } else {
          incorrectCount += 1;
          sectionStats[q.sectionTitle].incorrect += 1;
          missedQuestionIds.push(q.id);
        }
      });

      const attempted = correctCount + incorrectCount;
      const accuracy = attempted > 0 ? Math.round((correctCount / attempted) * 100) : 0;
      const scorePercentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

      let gradeBadge = 'Needs Revision';
      let gradeColor = '#f43f5e';
      if (scorePercentage >= 90) {
        gradeBadge = 'Top Ranker (90%+ Ready)';
        gradeColor = '#10b981';
      } else if (scorePercentage >= 75) {
        gradeBadge = 'CUET PG Qualified (Excellent)';
        gradeColor = '#3b82f6';
      } else if (scorePercentage >= 60) {
        gradeBadge = 'Good (Solid Concepts)';
        gradeColor = '#6366f1';
      } else if (scorePercentage >= 40) {
        gradeBadge = 'Average (Needs More Practice)';
        gradeColor = '#f59e0b';
      }

      return {
        totalQuestions: total,
        attemptedCount: attempted,
        correctCount: correctCount,
        incorrectCount: incorrectCount,
        skippedCount: skippedCount,
        score: correctCount,
        scorePercentage: scorePercentage,
        accuracy: accuracy,
        timeElapsed: session.timeElapsed,
        gradeBadge: gradeBadge,
        gradeColor: gradeColor,
        sectionBreakdown: Object.values(sectionStats),
        missedQuestionIds: missedQuestionIds
      };
    }
  };
})();
