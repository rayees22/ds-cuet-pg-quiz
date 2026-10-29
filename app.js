/**
 * CUET PG Data Structures Master Quiz Application
 * Pure Vanilla JavaScript (ES6+), Zero External Dependencies.
 */

(function () {
  'use strict';

  // --- Audio Context for native sound effects (Zero external MP3s) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.settings.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1); // E5
        osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(260, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(190, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (e) {
      // Audio autoplay restrictions or unsupported
    }
  }

  // --- Fisher-Yates Shuffle Utility ---
  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- Master Application State ---
  const state = {
    allQuestions: [],
    mode: 'full', // 'full', 'quick', 'unit', 'weak', 'revision'
    selectedUnitId: null,
    quickCount: 30,
    questions: [], // Active questions list
    currentIndex: 0,
    userAnswers: {}, // { [qId]: { selectedKey, isCorrect, isSkipped } }
    flagged: new Set(),
    shuffledOptionsMap: {}, // { [qId]: [shuffled options array] }
    timerSeconds: 0,
    timerInterval: null,
    isRevisionMode: false,
    settings: {
      shuffleQuestions: true,
      shuffleOptions: true,
      timerEnabled: true,
      soundEnabled: true,
      theme: 'light'
    }
  };

  // --- DOM Elements ---
  const views = {
    home: document.getElementById('view-home'),
    quiz: document.getElementById('view-quiz'),
    results: document.getElementById('view-results')
  };

  const elements = {
    // Top Bar
    timerPill: document.getElementById('quiz-timer-pill'),
    timerText: document.getElementById('quiz-timer-text'),
    paletteToggleBtn: document.getElementById('palette-toggle-btn'),
    shortcutsBtn: document.getElementById('shortcuts-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),
    brandHomeBtn: document.getElementById('brand-home-btn'),

    // Home
    resumeBanner: document.getElementById('resume-banner'),
    resumeStats: document.getElementById('resume-stats'),
    btnResumeQuiz: document.getElementById('btn-resume-quiz'),
    btnDiscardQuiz: document.getElementById('btn-discard-quiz'),
    unitsListContainer: document.getElementById('units-list-container'),
    weakQuestionsCount: document.getElementById('weak-questions-count'),
    btnStartWeak: document.getElementById('btn-start-weak'),
    quickCountGroup: document.getElementById('quick-count-group'),

    // Settings
    settingShuffleQ: document.getElementById('setting-shuffle-questions'),
    settingShuffleOpt: document.getElementById('setting-shuffle-options'),
    settingTimer: document.getElementById('setting-timer-enabled'),
    settingSound: document.getElementById('setting-sound-enabled'),

    // Quiz Status Bar
    currentUnitTag: document.getElementById('current-unit-tag'),
    currentDifficultyTag: document.getElementById('current-difficulty-tag'),
    currentScoreText: document.getElementById('current-score-text'),
    currentAccuracyText: document.getElementById('current-accuracy-text'),
    currentQIndex: document.getElementById('current-q-index'),
    totalQCount: document.getElementById('total-q-count'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),

    // Question Card
    qLabelBadge: document.getElementById('q-label-badge'),
    btnFlagQuestion: document.getElementById('btn-flag-question'),
    flagBtnText: document.getElementById('flag-btn-text'),
    qTextContent: document.getElementById('q-text-content'),
    optionsList: document.getElementById('options-list'),
    feedbackBanner: document.getElementById('feedback-banner'),
    feedbackIcon: document.getElementById('feedback-icon'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackSubtitle: document.getElementById('feedback-subtitle'),
    explanationContainer: document.getElementById('explanation-container'),
    explanationText: document.getElementById('explanation-text'),
    trapContainer: document.getElementById('trap-container'),
    trapText: document.getElementById('trap-text'),

    // Quiz Navigation
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnNextQuestion: document.getElementById('btn-next-question'),
    btnSkipQuestion: document.getElementById('btn-skip-question'),
    btnSubmitDirect: document.getElementById('btn-submit-quiz-direct'),
    btnSubmitPalette: document.getElementById('btn-submit-exam-palette'),

    // Palette
    palettePanel: document.getElementById('quiz-palette-panel'),
    paletteCloseBtn: document.getElementById('palette-close-btn'),
    paletteGridItems: document.getElementById('palette-grid-items'),

    // Results
    resultsHeadline: document.getElementById('results-headline'),
    resultFinalScore: document.getElementById('result-final-score'),
    resultFinalPercent: document.getElementById('result-final-percent'),
    resultRankStatus: document.getElementById('result-rank-status'),
    resCorrectCount: document.getElementById('res-correct-count'),
    resWrongCount: document.getElementById('res-wrong-count'),
    resSkippedCount: document.getElementById('res-skipped-count'),
    resTimeSpent: document.getElementById('res-time-spent'),
    btnRetryMistakes: document.getElementById('btn-retry-mistakes'),
    retryMistakesCount: document.getElementById('retry-mistakes-count'),
    btnRetakeQuiz: document.getElementById('btn-retake-quiz'),
    btnBackHomeResults: document.getElementById('btn-back-home-results'),
    unitBreakdownContainer: document.getElementById('unit-breakdown-container'),
    reviewListItems: document.getElementById('review-list-items'),
    tabFilterAll: document.getElementById('tab-filter-all'),
    tabFilterWrong: document.getElementById('tab-filter-wrong'),
    tabFilterSkipped: document.getElementById('tab-filter-skipped'),
    tabFilterCorrect: document.getElementById('tab-filter-correct'),
    filterCountAll: document.getElementById('filter-count-all'),
    filterCountWrong: document.getElementById('filter-count-wrong'),
    filterCountSkipped: document.getElementById('filter-count-skipped'),
    filterCountCorrect: document.getElementById('filter-count-correct')
  };

  // --- Initialize App ---
  async function init() {
    loadSettings();
    applyTheme(state.settings.theme);

    // Load Questions Data
    if (window.CUET_QUESTIONS && Array.isArray(window.CUET_QUESTIONS)) {
      state.allQuestions = window.CUET_QUESTIONS;
    } else {
      try {
        const res = await fetch('questions.json');
        state.allQuestions = await res.json();
      } catch (err) {
        console.error('Failed to load questions.json', err);
        alert('Could not load question bank. Please verify questions.json is present.');
        return;
      }
    }

    renderUnitsGrid();
    updateMistakesCountBadge();
    checkResumeSession();
    attachEventListeners();
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    state.settings.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    elements.themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    saveSettings();
  }

  function toggleTheme() {
    const newTheme = state.settings.theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }

  // --- Settings Persistence ---
  function loadSettings() {
    try {
      const saved = localStorage.getItem('cuet_ds_settings');
      if (saved) {
        state.settings = { ...state.settings, ...JSON.parse(saved) };
      }
    } catch (e) {}

    elements.settingShuffleQ.checked = state.settings.shuffleQuestions;
    elements.settingShuffleOpt.checked = state.settings.shuffleOptions;
    elements.settingTimer.checked = state.settings.timerEnabled;
    elements.settingSound.checked = state.settings.soundEnabled;
  }

  function saveSettings() {
    try {
      localStorage.setItem('cuet_ds_settings', JSON.stringify(state.settings));
    } catch (e) {}
  }

  // --- Render 12 Units on Home Page ---
  function renderUnitsGrid() {
    const unitsMap = new Map();
    state.allQuestions.forEach(q => {
      if (!unitsMap.has(q.unitId)) {
        unitsMap.set(q.unitId, {
          id: q.unitId,
          title: q.unitTitle,
          count: 0
        });
      }
      unitsMap.get(q.unitId).count++;
    });

    const units = Array.from(unitsMap.values()).sort((a, b) => a.id - b.id);
    elements.unitsListContainer.innerHTML = units.map(u => {
      // Clean up title for card display
      const shortTitle = u.title.replace(/^Unit\s*\d+:\s*/i, '').replace(/\(Q\d+.*?\)/, '').trim();
      return `
        <div class="unit-card" onclick="window.startQuizMode('unit', ${u.id})">
          <div class="unit-card-top">
            <span class="unit-num">Unit ${u.id}</span>
            <span class="unit-qcount">${u.count} MCQs</span>
          </div>
          <h4>${shortTitle}</h4>
          <span class="unit-card-btn">Practice Unit &rarr;</span>
        </div>
      `;
    }).join('');
  }

  // --- Mistakes History Storage ---
  function getMistakesHistory() {
    try {
      const saved = localStorage.getItem('cuet_ds_mistakes_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  function addMistakesToHistory(questionIds) {
    try {
      const existing = new Set(getMistakesHistory());
      questionIds.forEach(id => existing.add(id));
      localStorage.setItem('cuet_ds_mistakes_history', JSON.stringify(Array.from(existing)));
      updateMistakesCountBadge();
    } catch (e) {}
  }

  function removeMistakeFromHistory(questionId) {
    try {
      const existing = new Set(getMistakesHistory());
      existing.delete(questionId);
      localStorage.setItem('cuet_ds_mistakes_history', JSON.stringify(Array.from(existing)));
      updateMistakesCountBadge();
    } catch (e) {}
  }

  function updateMistakesCountBadge() {
    const mistakes = getMistakesHistory();
    elements.weakQuestionsCount.textContent = `${mistakes.length} Saved Mistakes`;
    elements.btnStartWeak.disabled = mistakes.length === 0;
  }

  // --- Session Resume Management ---
  function checkResumeSession() {
    try {
      const sessionData = localStorage.getItem('cuet_ds_active_session');
      if (sessionData) {
        const session = JSON.parse(sessionData);
        if (session && session.questions && session.questions.length > 0) {
          const answeredCount = Object.keys(session.userAnswers || {}).length;
          const score = Object.values(session.userAnswers || {}).filter(a => a.isCorrect).length;
          elements.resumeStats.textContent = `Mode: ${session.mode.toUpperCase()} | Answered: ${answeredCount}/${session.questions.length} | Current Score: ${score}`;
          elements.resumeBanner.style.display = 'flex';
          return;
        }
      }
    } catch (e) {}
    elements.resumeBanner.style.display = 'none';
  }

  function saveActiveSession() {
    try {
      const session = {
        mode: state.mode,
        selectedUnitId: state.selectedUnitId,
        questions: state.questions,
        currentIndex: state.currentIndex,
        userAnswers: state.userAnswers,
        flagged: Array.from(state.flagged),
        shuffledOptionsMap: state.shuffledOptionsMap,
        timerSeconds: state.timerSeconds,
        isRevisionMode: state.isRevisionMode
      };
      localStorage.setItem('cuet_ds_active_session', JSON.stringify(session));
    } catch (e) {}
  }

  function clearActiveSession() {
    try {
      localStorage.removeItem('cuet_ds_active_session');
    } catch (e) {}
    elements.resumeBanner.style.display = 'none';
  }

  function resumeQuizSession() {
    try {
      const sessionData = localStorage.getItem('cuet_ds_active_session');
      if (!sessionData) return;
      const session = JSON.parse(sessionData);

      state.mode = session.mode;
      state.selectedUnitId = session.selectedUnitId;
      state.questions = session.questions;
      state.currentIndex = session.currentIndex || 0;
      state.userAnswers = session.userAnswers || {};
      state.flagged = new Set(session.flagged || []);
      state.shuffledOptionsMap = session.shuffledOptionsMap || {};
      state.timerSeconds = session.timerSeconds || 0;
      state.isRevisionMode = !!session.isRevisionMode;

      switchView('quiz');
      startTimer();
      renderCurrentQuestion();
      updateStatusHeader();
      renderPalette();
    } catch (e) {
      console.error('Failed to resume session', e);
      clearActiveSession();
    }
  }

  // --- View Switcher ---
  function switchView(viewName) {
    Object.keys(views).forEach(v => {
      views[v].classList.remove('active');
    });
    if (views[viewName]) {
      views[viewName].classList.add('active');
    }

    if (viewName === 'quiz') {
      elements.timerPill.style.display = state.settings.timerEnabled ? 'flex' : 'none';
      elements.paletteToggleBtn.style.display = 'inline-flex';
    } else {
      elements.timerPill.style.display = 'none';
      elements.paletteToggleBtn.style.display = 'none';
      stopTimer();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Start Quiz Modes ---
  window.startQuizMode = function (mode, unitId = null) {
    state.mode = mode;
    state.selectedUnitId = unitId;
    state.userAnswers = {};
    state.flagged.clear();
    state.shuffledOptionsMap = {};
    state.currentIndex = 0;
    state.timerSeconds = 0;
    state.isRevisionMode = (mode === 'revision');

    let pool = [];

    if (mode === 'full' || mode === 'revision') {
      pool = [...state.allQuestions];
    } else if (mode === 'unit' && unitId) {
      pool = state.allQuestions.filter(q => q.unitId === unitId);
    } else if (mode === 'quick') {
      pool = [...state.allQuestions];
    } else if (mode === 'weak') {
      const mistakesIds = new Set(getMistakesHistory());
      pool = state.allQuestions.filter(q => mistakesIds.has(q.id));
      if (pool.length === 0) {
        alert('No saved mistakes found! Try practicing more questions first.');
        return;
      }
    }

    // Apply question shuffling if enabled (or if quick mode)
    if (state.settings.shuffleQuestions || mode === 'quick' || mode === 'weak') {
      pool = shuffleArray(pool);
    }

    // Slice question count for quick mode
    if (mode === 'quick') {
      pool = pool.slice(0, state.quickCount);
    }

    state.questions = pool;

    // Pre-generate shuffled options for each question to ensure consistency during revisit
    state.questions.forEach(q => {
      if (state.settings.shuffleOptions && !state.isRevisionMode) {
        state.shuffledOptionsMap[q.id] = shuffleArray(q.options);
      } else {
        state.shuffledOptionsMap[q.id] = [...q.options];
      }
    });

    clearActiveSession();
    saveActiveSession();

    switchView('quiz');
    startTimer();
    renderCurrentQuestion();
    updateStatusHeader();
    renderPalette();
  };

  // --- Timer ---
  function startTimer() {
    stopTimer();
    if (!state.settings.timerEnabled) {
      elements.timerPill.style.display = 'none';
      return;
    }
    elements.timerPill.style.display = 'flex';
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      updateTimerDisplay();
      if (state.timerSeconds % 10 === 0) {
        saveActiveSession();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    elements.timerText.textContent = formatTime(state.timerSeconds);
  }

  // --- Render Active Question ---
  function renderCurrentQuestion() {
    if (!state.questions || state.questions.length === 0) return;

    const q = state.questions[state.currentIndex];
    const isAnswered = !!state.userAnswers[q.id] && !state.userAnswers[q.id].isSkipped;
    const isSkipped = !!state.userAnswers[q.id] && state.userAnswers[q.id].isSkipped;
    const isFlagged = state.flagged.has(q.id);

    // Update Question Header Tags
    elements.qLabelBadge.textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    elements.currentUnitTag.textContent = q.unitTitle.replace(/\(Q\d+.*?\)/, '').trim();
    elements.currentDifficultyTag.textContent = q.difficulty || 'Medium';
    elements.currentDifficultyTag.className = `difficulty-tag ${q.difficulty || 'Medium'}`;

    // Flag button state
    elements.btnFlagQuestion.className = isFlagged ? 'btn-text-action active' : 'btn-text-action';
    elements.flagBtnText.textContent = isFlagged ? 'Flagged' : 'Flag';

    // Format Question Text (support multi-line and code blocks)
    renderQuestionText(q.text);

    // Render Options (using shuffled map)
    const options = state.shuffledOptionsMap[q.id] || q.options;
    const letters = ['A', 'B', 'C', 'D'];

    elements.optionsList.innerHTML = '';
    options.forEach((opt, idx) => {
      const displayLetter = letters[idx] || (idx + 1);
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.key = opt.key;

      btn.innerHTML = `
        <span class="option-key-badge">${displayLetter}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
        <span class="option-icon"></span>
      `;

      if (isAnswered) {
        btn.disabled = true;
        const userAns = state.userAnswers[q.id];
        if (opt.key === q.correct) {
          btn.classList.add('state-correct');
          btn.querySelector('.option-icon').textContent = '✓';
        } else if (opt.key === userAns.selectedKey) {
          btn.classList.add('state-wrong');
          btn.querySelector('.option-icon').textContent = '✗';
        }
      } else if (state.isRevisionMode) {
        // In Revision mode, automatically show the correct answer!
        if (opt.key === q.correct) {
          btn.classList.add('state-correct');
          btn.querySelector('.option-icon').textContent = '✓';
        }
      } else {
        btn.addEventListener('click', () => selectOption(opt.key, btn));
      }

      elements.optionsList.appendChild(btn);
    });

    // Feedback & Explanation Visibility
    if (isAnswered || state.isRevisionMode) {
      const userAns = state.userAnswers[q.id];
      if (state.isRevisionMode) {
        elements.feedbackBanner.style.display = 'none';
      } else if (userAns.isCorrect) {
        elements.feedbackBanner.style.display = 'flex';
        elements.feedbackBanner.className = 'feedback-banner correct';
        elements.feedbackIcon.textContent = '✓';
        elements.feedbackTitle.textContent = 'Correct Answer!';
        elements.feedbackSubtitle.textContent = '+1 Point awarded';
      } else {
        elements.feedbackBanner.style.display = 'flex';
        elements.feedbackBanner.className = 'feedback-banner wrong';
        elements.feedbackIcon.textContent = '✗';
        elements.feedbackTitle.textContent = 'Incorrect Answer';
        elements.feedbackSubtitle.textContent = `Correct option was (${q.correct})`;
      }

      // Show Hinglish Explanation
      elements.explanationContainer.style.display = 'block';
      elements.explanationText.innerHTML = formatExplanationText(q.explanation);

      // Show Trap if present
      if (q.trap) {
        elements.trapContainer.style.display = 'flex';
        elements.trapText.textContent = q.trap;
      } else {
        elements.trapContainer.style.display = 'none';
      }
    } else {
      elements.feedbackBanner.style.display = 'none';
      elements.explanationContainer.style.display = 'none';
      elements.trapContainer.style.display = 'none';
    }

    // Navigation buttons state
    elements.btnPrevQuestion.disabled = state.currentIndex === 0;
    if (state.currentIndex === state.questions.length - 1) {
      elements.btnNextQuestion.textContent = 'Finish Quiz &rarr;';
    } else {
      elements.btnNextQuestion.textContent = 'Next &rarr;';
    }

    updateStatusHeader();
    updatePaletteActiveState();
  }

  // --- Format Question Content (Detects code snippets) ---
  function renderQuestionText(rawText) {
    elements.qTextContent.innerHTML = '';

    // Check if question text has code block or indentation
    const lines = rawText.split('\n');
    let inCode = false;
    let codeBuffer = [];
    let fragment = document.createDocumentFragment();

    lines.forEach(line => {
      const trimmed = line.trim();
      const isCodeLine = line.startsWith('    ') || line.startsWith('\t') ||
        trimmed.startsWith('int ') || trimmed.startsWith('for ') ||
        trimmed.startsWith('void ') || trimmed.startsWith('return ') ||
        trimmed.startsWith('if ') || trimmed.includes('{') || trimmed.includes('}');

      if (isCodeLine) {
        inCode = true;
        codeBuffer.push(line);
      } else {
        if (inCode) {
          const pre = document.createElement('pre');
          const code = document.createElement('code');
          code.textContent = codeBuffer.join('\n');
          pre.appendChild(code);
          fragment.appendChild(pre);
          codeBuffer = [];
          inCode = false;
        }
        if (line.trim().length > 0) {
          const p = document.createElement('p');
          p.style.marginBottom = '8px';
          p.textContent = line;
          fragment.appendChild(p);
        }
      }
    });

    if (inCode && codeBuffer.length > 0) {
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = codeBuffer.join('\n');
      pre.appendChild(code);
      fragment.appendChild(pre);
    }

    elements.qTextContent.appendChild(fragment);
  }

  function formatExplanationText(text) {
    if (!text) return '';
    return escapeHtml(text)
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Option Selection Logic ---
  function selectOption(selectedKey, clickedBtn) {
    const q = state.questions[state.currentIndex];

    // Prevent answering twice
    if (state.userAnswers[q.id] && !state.userAnswers[q.id].isSkipped) return;

    const isCorrect = (selectedKey === q.correct);

    // Save answer
    state.userAnswers[q.id] = {
      selectedKey: selectedKey,
      isCorrect: isCorrect,
      isSkipped: false
    };

    // Update Mistake Tracking
    if (!isCorrect) {
      addMistakesToHistory([q.id]);
    } else {
      removeMistakeFromHistory(q.id);
    }

    // Play Audio Feedback
    playSound(isCorrect ? 'correct' : 'wrong');

    // Lock all option buttons
    const allBtns = elements.optionsList.querySelectorAll('.option-btn');
    allBtns.forEach(btn => {
      btn.disabled = true;
      const key = btn.dataset.key;
      if (key === q.correct) {
        btn.classList.add('state-correct');
        btn.querySelector('.option-icon').textContent = '✓';
      } else if (key === selectedKey && !isCorrect) {
        btn.classList.add('state-wrong');
        btn.querySelector('.option-icon').textContent = '✗';
      }
    });

    // Feedback banner
    elements.feedbackBanner.style.display = 'flex';
    if (isCorrect) {
      elements.feedbackBanner.className = 'feedback-banner correct';
      elements.feedbackIcon.textContent = '✓';
      elements.feedbackTitle.textContent = 'Correct Answer!';
      elements.feedbackSubtitle.textContent = '+1 Point awarded';
    } else {
      elements.feedbackBanner.className = 'feedback-banner wrong';
      elements.feedbackIcon.textContent = '✗';
      elements.feedbackTitle.textContent = 'Incorrect Answer';
      elements.feedbackSubtitle.textContent = `Correct option is (${q.correct})`;
    }

    // Reveal Explanation & Trap
    elements.explanationContainer.style.display = 'block';
    elements.explanationText.innerHTML = formatExplanationText(q.explanation);

    if (q.trap) {
      elements.trapContainer.style.display = 'flex';
      elements.trapText.textContent = q.trap;
    } else {
      elements.trapContainer.style.display = 'none';
    }

    updateStatusHeader();
    renderPalette();
    saveActiveSession();
  }

  // --- Skip Question Logic ---
  function skipCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (!state.userAnswers[q.id]) {
      state.userAnswers[q.id] = {
        selectedKey: null,
        isCorrect: false,
        isSkipped: true
      };
    }
    nextQuestion();
  }

  // --- Navigation Controls ---
  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
      saveActiveSession();
    }
  }

  function nextQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
      saveActiveSession();
    } else {
      // Reached the end of quiz -> open submit confirmation
      openSubmitModal();
    }
  }

  function toggleFlagCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    renderCurrentQuestion();
    renderPalette();
    saveActiveSession();
  }

  // --- Status Header Updates ---
  function updateStatusHeader() {
    const total = state.questions.length;
    const answeredKeys = Object.keys(state.userAnswers).filter(k => !state.userAnswers[k].isSkipped);
    const correctCount = Object.values(state.userAnswers).filter(a => a.isCorrect).length;
    const answeredCount = answeredKeys.length;

    elements.currentQIndex.textContent = state.currentIndex + 1;
    elements.totalQCount.textContent = total;
    elements.currentScoreText.textContent = correctCount;

    const acc = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    elements.currentAccuracyText.textContent = `${acc}%`;

    const progressPct = total > 0 ? ((answeredCount / total) * 100).toFixed(0) : 0;
    elements.quizProgressBar.style.width = `${progressPct}%`;
  }

  // --- Question Palette Grid ---
  function renderPalette() {
    elements.paletteGridItems.innerHTML = '';

    state.questions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = idx + 1;
      btn.dataset.index = idx;

      const ans = state.userAnswers[q.id];
      if (ans) {
        if (ans.isSkipped) {
          btn.classList.add('status-skipped');
        } else if (ans.isCorrect) {
          btn.classList.add('status-correct');
        } else {
          btn.classList.add('status-wrong');
        }
      }

      if (state.flagged.has(q.id)) {
        btn.classList.add('status-flagged');
      }

      if (idx === state.currentIndex) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        state.currentIndex = idx;
        renderCurrentQuestion();
        saveActiveSession();
        // On mobile, close palette drawer after selection
        if (window.innerWidth <= 1024) {
          elements.palettePanel.classList.remove('open');
        }
      });

      elements.paletteGridItems.appendChild(btn);
    });
  }

  function updatePaletteActiveState() {
    const allBtns = elements.paletteGridItems.querySelectorAll('.palette-btn');
    allBtns.forEach((btn, idx) => {
      if (idx === state.currentIndex) {
        btn.classList.add('active');
        btn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // --- Modals Management ---
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'flex';
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
  };

  function openSubmitModal() {
    const total = state.questions.length;
    const answeredCount = Object.values(state.userAnswers).filter(a => !a.isSkipped).length;
    const skippedCount = Object.values(state.userAnswers).filter(a => a.isSkipped).length;
    const unansweredCount = total - (answeredCount + skippedCount);

    document.getElementById('modal-stat-answered').textContent = answeredCount;
    document.getElementById('modal-stat-unanswered').textContent = unansweredCount;
    document.getElementById('modal-stat-skipped').textContent = skippedCount;

    const warningEl = document.getElementById('modal-submit-warning');
    if (unansweredCount > 0) {
      warningEl.style.display = 'block';
    } else {
      warningEl.style.display = 'none';
    }

    openModal('submit-confirm-modal');
  }

  // --- Finish & Calculate Results ---
  function submitQuiz() {
    closeModal('submit-confirm-modal');
    stopTimer();

    // Mark all remaining unanswered questions as skipped
    state.questions.forEach(q => {
      if (!state.userAnswers[q.id]) {
        state.userAnswers[q.id] = {
          selectedKey: null,
          isCorrect: false,
          isSkipped: true
        };
      }
    });

    clearActiveSession();
    renderResultsView();
    switchView('results');
  }

  // --- Render Results & Review ---
  function renderResultsView() {
    const total = state.questions.length;
    const userAnsList = Object.values(state.userAnswers);
    const correctCount = userAnsList.filter(a => a.isCorrect).length;
    const wrongCount = userAnsList.filter(a => !a.isCorrect && !a.isSkipped).length;
    const skippedCount = userAnsList.filter(a => a.isSkipped).length;

    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const timeSpent = formatTime(state.timerSeconds);

    elements.resultFinalScore.textContent = `${correctCount} / ${total}`;
    elements.resultFinalPercent.textContent = `${pct}% Accuracy`;
    elements.resCorrectCount.textContent = correctCount;
    elements.resWrongCount.textContent = wrongCount;
    elements.resSkippedCount.textContent = skippedCount;
    elements.resTimeSpent.textContent = timeSpent;

    // Rank / Performance status
    let statusText = '';
    let statusColor = '';
    if (pct >= 85) {
      statusText = '🏆 CUET PG Topper Candidate! Exceptional Performance';
      statusColor = 'var(--success-light)';
    } else if (pct >= 70) {
      statusText = '✨ Exam Ready! High Probability of Admission';
      statusColor = 'var(--primary-light)';
    } else if (pct >= 50) {
      statusText = '👍 Good Effort! Revise Weak Units to reach 85%+';
      statusColor = 'var(--warning-light)';
    } else {
      statusText = '⚠️ Needs More Revision. Re-read master Hinglish notes.';
      statusColor = 'var(--error-light)';
    }
    elements.resultRankStatus.textContent = statusText;

    // Retry Mistakes Button
    if (wrongCount > 0) {
      elements.btnRetryMistakes.style.display = 'inline-flex';
      elements.retryMistakesCount.textContent = wrongCount;
    } else {
      elements.btnRetryMistakes.style.display = 'none';
    }

    // Render Unit Breakdown Table
    renderUnitBreakdown();

    // Setup Detailed Review Filter & Questions List
    setupReviewList();
  }

  function renderUnitBreakdown() {
    const unitStats = new Map();

    state.questions.forEach(q => {
      if (!unitStats.has(q.unitId)) {
        unitStats.set(q.unitId, {
          title: q.unitTitle.replace(/\(Q\d+.*?\)/, '').trim(),
          total: 0,
          correct: 0,
          wrong: 0,
          skipped: 0
        });
      }
      const st = unitStats.get(q.unitId);
      st.total++;
      const ans = state.userAnswers[q.id];
      if (ans) {
        if (ans.isCorrect) st.correct++;
        else if (ans.isSkipped) st.skipped++;
        else st.wrong++;
      }
    });

    elements.unitBreakdownContainer.innerHTML = Array.from(unitStats.entries()).map(([uId, st]) => {
      const acc = st.total > 0 ? Math.round((st.correct / st.total) * 100) : 0;
      return `
        <div class="unit-row">
          <div class="unit-row-info">
            <div class="unit-row-title">${escapeHtml(st.title)}</div>
            <div class="unit-row-stats">${st.correct} Correct, ${st.wrong} Wrong, ${st.skipped} Skipped (${st.total} Total)</div>
          </div>
          <div class="unit-row-meter">
            <div class="unit-row-fill" style="width: ${acc}%;"></div>
          </div>
          <div class="unit-row-acc">${acc}%</div>
        </div>
      `;
    }).join('');
  }

  // --- Detailed Review Filtering ---
  let currentReviewFilter = 'all';

  function setupReviewList() {
    const wrongCount = state.questions.filter(q => {
      const ans = state.userAnswers[q.id];
      return ans && !ans.isCorrect && !ans.isSkipped;
    }).length;

    const skippedCount = state.questions.filter(q => {
      const ans = state.userAnswers[q.id];
      return ans && ans.isSkipped;
    }).length;

    const correctCount = state.questions.filter(q => {
      const ans = state.userAnswers[q.id];
      return ans && ans.isCorrect;
    }).length;

    elements.filterCountAll.textContent = state.questions.length;
    elements.filterCountWrong.textContent = wrongCount;
    elements.filterCountSkipped.textContent = skippedCount;
    elements.filterCountCorrect.textContent = correctCount;

    filterReview('all');
  }

  function filterReview(filter) {
    currentReviewFilter = filter;

    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.filter === filter);
    });

    const filtered = state.questions.filter(q => {
      const ans = state.userAnswers[q.id];
      if (!ans) return filter === 'all';
      if (filter === 'all') return true;
      if (filter === 'wrong') return !ans.isCorrect && !ans.isSkipped;
      if (filter === 'skipped') return ans.isSkipped;
      if (filter === 'correct') return ans.isCorrect;
      return true;
    });

    if (filtered.length === 0) {
      elements.reviewListItems.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--text-subtle);">
          No questions match this filter category.
        </div>
      `;
      return;
    }

    elements.reviewListItems.innerHTML = filtered.map((q, idx) => {
      const ans = state.userAnswers[q.id] || { isSkipped: true };
      let statusClass = 'skipped';
      let statusLabel = 'Skipped';

      if (ans.isCorrect) {
        statusClass = 'correct';
        statusLabel = 'Correct (+1)';
      } else if (!ans.isSkipped) {
        statusClass = 'wrong';
        statusLabel = 'Incorrect (0)';
      }

      // Find user option text and correct option text
      const userOpt = q.options.find(o => o.key === ans.selectedKey);
      const correctOpt = q.options.find(o => o.key === q.correct);

      return `
        <div class="review-item is-${statusClass}">
          <div class="review-item-header">
            <span class="review-qnum">Question ${q.id} &bull; ${escapeHtml(q.unitTitle.replace(/\(Q\d+.*?\)/, '').trim())}</span>
            <span class="review-status-badge ${statusClass}">${statusLabel}</span>
          </div>

          <div class="review-qtext">
            ${escapeHtml(q.text)}
          </div>

          <div class="review-answers-grid">
            <div class="ans-card ${ans.isCorrect ? 'user-ans-correct' : (ans.isSkipped ? '' : 'user-ans-wrong')}">
              <strong>Your Selection:</strong>
              ${userOpt ? `(${userOpt.key}) ${escapeHtml(userOpt.text)}` : '<em>Not Answered (Skipped)</em>'}
            </div>
            <div class="ans-card correct-ans-highlight">
              <strong>Correct Answer:</strong>
              (${correctOpt.key}) ${escapeHtml(correctOpt.text)}
            </div>
          </div>

          <div class="review-explanation">
            <strong>Hinglish Explanation:</strong><br>
            ${formatExplanationText(q.explanation)}
          </div>

          ${q.trap ? `
            <div class="review-trap">
              <strong>⚠️ Exam Trap &amp; Shortcut:</strong> ${escapeHtml(q.trap)}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // --- Attach Event Listeners ---
  function attachEventListeners() {
    // Header controls
    elements.themeToggleBtn.addEventListener('click', toggleTheme);
    elements.brandHomeBtn.addEventListener('click', () => {
      if (views.quiz.classList.contains('active')) {
        if (confirm('Leave current quiz session and return to main menu?')) {
          switchView('home');
        }
      } else {
        switchView('home');
      }
    });

    elements.paletteToggleBtn.addEventListener('click', () => {
      elements.palettePanel.classList.toggle('open');
    });

    elements.paletteCloseBtn.addEventListener('click', () => {
      elements.palettePanel.classList.remove('open');
    });

    elements.shortcutsBtn.addEventListener('click', () => {
      openModal('shortcuts-modal');
    });

    // Home resume controls
    elements.btnResumeQuiz.addEventListener('click', resumeQuizSession);
    elements.btnDiscardQuiz.addEventListener('click', () => {
      if (confirm('Are you sure you want to discard your saved quiz session?')) {
        clearActiveSession();
      }
    });

    // Quick quiz chips
    elements.quickCountGroup.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        elements.quickCountGroup.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.quickCount = parseInt(chip.dataset.count, 10);
      });
    });

    // Settings checkboxes
    elements.settingShuffleQ.addEventListener('change', e => {
      state.settings.shuffleQuestions = e.target.checked;
      saveSettings();
    });
    elements.settingShuffleOpt.addEventListener('change', e => {
      state.settings.shuffleOptions = e.target.checked;
      saveSettings();
    });
    elements.settingTimer.addEventListener('change', e => {
      state.settings.timerEnabled = e.target.checked;
      saveSettings();
    });
    elements.settingSound.addEventListener('change', e => {
      state.settings.soundEnabled = e.target.checked;
      saveSettings();
    });

    // Quiz Navigation Buttons
    elements.btnPrevQuestion.addEventListener('click', prevQuestion);
    elements.btnNextQuestion.addEventListener('click', nextQuestion);
    elements.btnSkipQuestion.addEventListener('click', skipCurrentQuestion);
    elements.btnFlagQuestion.addEventListener('click', toggleFlagCurrentQuestion);

    // Direct submit buttons
    elements.btnSubmitDirect.addEventListener('click', openSubmitModal);
    elements.btnSubmitPalette.addEventListener('click', openSubmitModal);
    document.getElementById('modal-confirm-submit-btn').addEventListener('click', submitQuiz);

    // Results Actions
    elements.btnRetryMistakes.addEventListener('click', () => {
      const wrongIds = state.questions
        .filter(q => {
          const ans = state.userAnswers[q.id];
          return ans && !ans.isCorrect && !ans.isSkipped;
        })
        .map(q => q.id);

      if (wrongIds.length > 0) {
        state.questions = state.allQuestions.filter(q => wrongIds.includes(q.id));
        state.mode = 'weak';
        state.userAnswers = {};
        state.flagged.clear();
        state.shuffledOptionsMap = {};
        state.currentIndex = 0;
        state.timerSeconds = 0;
        state.isRevisionMode = false;

        state.questions.forEach(q => {
          state.shuffledOptionsMap[q.id] = shuffleArray(q.options);
        });

        clearActiveSession();
        saveActiveSession();
        switchView('quiz');
        startTimer();
        renderCurrentQuestion();
        updateStatusHeader();
        renderPalette();
      }
    });

    elements.btnRetakeQuiz.addEventListener('click', () => {
      window.startQuizMode(state.mode, state.selectedUnitId);
    });

    elements.btnBackHomeResults.addEventListener('click', () => {
      switchView('home');
      checkResumeSession();
      updateMistakesCountBadge();
    });

    // Filter review tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        filterReview(tab.dataset.filter);
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  // --- Keyboard Handler ---
  function handleKeyboardShortcuts(e) {
    // Ignore keystrokes in inputs or modals (unless Escape)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'Escape') {
      closeModal('submit-confirm-modal');
      closeModal('shortcuts-modal');
      elements.palettePanel.classList.remove('open');
      return;
    }

    if (e.key === '?') {
      openModal('shortcuts-modal');
      return;
    }

    // Only active during quiz view
    if (!views.quiz.classList.contains('active')) return;

    if (e.key === 'ArrowRight' || e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      nextQuestion();
    } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      prevQuestion();
    } else if (e.key === 's' || e.key === 'S') {
      e.preventDefault();
      skipCurrentQuestion();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFlagCurrentQuestion();
    } else if (e.key === 'g' || e.key === 'G') {
      e.preventDefault();
      elements.palettePanel.classList.toggle('open');
    } else if (['1', '2', '3', '4', 'a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
      const keyIndexMap = {
        '1': 0, 'a': 0, 'A': 0,
        '2': 1, 'b': 1, 'B': 1,
        '3': 2, 'c': 2, 'C': 2,
        '4': 3, 'd': 3, 'D': 3
      };
      const optIndex = keyIndexMap[e.key];
      const buttons = elements.optionsList.querySelectorAll('.option-btn');
      if (buttons && buttons[optIndex] && !buttons[optIndex].disabled) {
        buttons[optIndex].click();
      }
    }
  }

  // --- Bootstrap on DOM Ready ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
