// ==========================================================================
// Main Application Controller - UI Wiring, Event Handling & Lifecycle
// CUET PG Data Structures Quiz Platform
// ==========================================================================

(function () {
  'use strict';

  // Application State
  let questionBankData = null; // Full data bundle: { sections: [], questions: [] }
  let activeSession = null;    // Current quiz session
  let timerInterval = null;    // Live exam timer interval
  let currentReviewFilter = 'all'; // Filter for results review: 'all', 'incorrect', 'skipped', 'correct'

  // DOM Elements Cache
  const DOM = {
    // Screens
    screenSetup: document.getElementById('screen-setup'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenResults: document.getElementById('screen-results'),

    // Header Controls
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),
    soundToggleBtn: document.getElementById('sound-toggle-btn'),
    soundIcon: document.getElementById('sound-icon'),
    paletteToggleBtn: document.getElementById('palette-toggle-btn'),

    // Setup Screen Elements
    topicsContainer: document.getElementById('topics-container'),
    limitPills: document.getElementById('limit-pills'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnResumeQuiz: document.getElementById('btn-resume-quiz'),
    resumeBanner: document.getElementById('resume-banner'),
    resumeText: document.getElementById('resume-text'),

    // Quiz Arena Elements
    quizScopeBadge: document.getElementById('quiz-scope-badge'),
    statCorrect: document.getElementById('stat-correct'),
    statIncorrect: document.getElementById('stat-incorrect'),
    statScore: document.getElementById('stat-score'),
    statTimer: document.getElementById('stat-timer'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    progressPercent: document.getElementById('progress-percent'),

    qNumberBadge: document.getElementById('q-number-badge'),
    qOrigBadge: document.getElementById('q-orig-badge'),
    qSectionBadge: document.getElementById('q-section-badge'),
    flagBtn: document.getElementById('btn-flag-q'),
    qStatement: document.getElementById('q-statement'),
    optionsGrid: document.getElementById('options-grid'),
    feedbackBanner: document.getElementById('feedback-banner'),
    feedbackMsg: document.getElementById('feedback-msg'),
    explanationBox: document.getElementById('explanation-box'),
    explanationContent: document.getElementById('explanation-content'),

    // Quiz Navigation Buttons
    btnPrev: document.getElementById('btn-prev'),
    btnSkip: document.getElementById('btn-skip'),
    btnNext: document.getElementById('btn-next'),
    btnSubmit: document.getElementById('btn-submit'),
    btnRestartSession: document.getElementById('btn-restart-session'),

    // Drawer Elements
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    paletteDrawer: document.getElementById('palette-drawer'),
    drawerCloseBtn: document.getElementById('drawer-close-btn'),
    paletteGrid: document.getElementById('palette-grid'),

    // Modal
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalTitle: document.getElementById('modal-title'),
    modalDesc: document.getElementById('modal-desc'),
    modalBtnConfirm: document.getElementById('modal-btn-confirm'),
    modalBtnCancel: document.getElementById('modal-btn-cancel'),

    // Results Screen Elements
    resScoreNumber: document.getElementById('res-score-number'),
    resScoreTotal: document.getElementById('res-score-total'),
    resGradeBadge: document.getElementById('res-grade-badge'),
    resSummaryText: document.getElementById('res-summary-text'),
    resStatAttempted: document.getElementById('res-stat-attempted'),
    resStatCorrect: document.getElementById('res-stat-correct'),
    resStatIncorrect: document.getElementById('res-stat-incorrect'),
    resStatSkipped: document.getElementById('res-stat-skipped'),
    resStatAccuracy: document.getElementById('res-stat-accuracy'),
    resStatTime: document.getElementById('res-stat-time'),
    resBreakdownContainer: document.getElementById('res-breakdown-container'),
    reviewCardsContainer: document.getElementById('review-cards-container'),
    reviewFilterPills: document.getElementById('review-filter-pills'),

    btnRetakeMistakes: document.getElementById('btn-retake-mistakes'),
    btnRestartQuiz: document.getElementById('btn-restart-quiz'),
    btnNewQuiz: document.getElementById('btn-new-quiz'),
    btnReviewMistakesFilter: document.getElementById('btn-filter-mistakes')
  };

  // ==========================================================================
  // INITIALIZATION & DATA LOADING
  // ==========================================================================

  function initApp() {
    loadSettings();
    wireEventListeners();

    // Check if data is already loaded in window.CUET_DS_DATA
    if (window.CUET_DS_DATA && window.CUET_DS_DATA.questions) {
      onDataLoaded(window.CUET_DS_DATA);
    } else {
      // Fallback: fetch questions.json
      fetch('questions.json')
        .then(response => {
          if (!response.ok) throw new Error('Network error loading questions.json');
          return response.json();
        })
        .then(data => {
          onDataLoaded(data);
        })
        .catch(err => {
          console.error('Failed to load questions data:', err);
          alert('Error loading question bank data. Please ensure data/questions.js or questions.json is present.');
        });
    }
  }

  function onDataLoaded(data) {
    questionBankData = data;
    renderSetupTopics(data.sections, data.totalQuestions);
    checkSavedSession();
  }

  function loadSettings() {
    const settings = QuizStorage.loadSettings();
    applyTheme(settings.theme || 'light');
    SoundSystem.init(!settings.sound);
    updateSoundIcon(!settings.sound);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (DOM.themeIcon) {
      DOM.themeIcon.innerHTML = (theme === 'dark')
        ? `<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>` // Moon
        : `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>`; // Sun
    }
    QuizStorage.saveSettings({ theme: theme });
  }

  function updateSoundIcon(muted) {
    if (DOM.soundIcon) {
      DOM.soundIcon.innerHTML = muted
        ? `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>` // Mute
        : `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`; // Volume Up
    }
  }

  // ==========================================================================
  // NAVIGATION & SCREENS
  // ==========================================================================

  function switchScreen(screenName) {
    DOM.screenSetup.classList.remove('active');
    DOM.screenQuiz.classList.remove('active');
    DOM.screenResults.classList.remove('active');

    if (screenName === 'setup') {
      DOM.screenSetup.classList.add('active');
      stopTimer();
      checkSavedSession();
    } else if (screenName === 'quiz') {
      DOM.screenQuiz.classList.add('active');
      startTimer();
    } else if (screenName === 'results') {
      DOM.screenResults.classList.add('active');
      stopTimer();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================================================
  // SETUP SCREEN LOGIC
  // ==========================================================================

  function renderSetupTopics(sections, totalCount) {
    if (!DOM.topicsContainer) return;

    let html = `
      <label class="topic-option active" data-topic="all">
        <div class="topic-info">
          <input type="radio" name="quiz-topic" value="all" class="topic-radio" checked>
          <span class="topic-name">All 12 Units (Complete DS Syllabus)</span>
        </div>
        <span class="topic-count">${totalCount} MCQs</span>
      </label>
    `;

    sections.forEach(sec => {
      html += `
        <label class="topic-option" data-topic="${sec.id}">
          <div class="topic-info">
            <input type="radio" name="quiz-topic" value="${sec.id}" class="topic-radio">
            <span class="topic-name">Unit ${sec.id}: ${escapeHtml(sec.title)}</span>
          </div>
          <span class="topic-count">${sec.questionCount} MCQs</span>
        </label>
      `;
    });

    DOM.topicsContainer.innerHTML = html;

    // Attach click events
    DOM.topicsContainer.querySelectorAll('.topic-option').forEach(opt => {
      opt.addEventListener('click', function () {
        DOM.topicsContainer.querySelectorAll('.topic-option').forEach(o => o.classList.remove('active'));
        this.classList.add('active');
        const radio = this.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        SoundSystem.playClick();
      });
    });
  }

  function getSelectedSetupConfig() {
    const activeTopic = DOM.topicsContainer.querySelector('input[name="quiz-topic"]:checked');
    const topicId = activeTopic ? activeTopic.value : 'all';

    const activeLimitBtn = DOM.limitPills.querySelector('.pill-btn.active');
    const limit = activeLimitBtn ? activeLimitBtn.getAttribute('data-limit') : 'all';

    return { topicId, limit };
  }

  function checkSavedSession() {
    if (QuizStorage.hasActiveSession()) {
      const s = QuizStorage.loadSession();
      if (DOM.resumeBanner && DOM.resumeText) {
        DOM.resumeBanner.classList.add('show');
        const answeredCount = Object.keys(s.userAnswers || {}).length;
        DOM.resumeText.innerHTML = `
          <h4>Resume Ongoing Quiz (${answeredCount}/${s.totalQuestions} Answered)</h4>
          <p>Score: ${s.score} | Current: Q${s.currentIndex + 1} | Time: ${formatTime(s.timeElapsed || 0)}</p>
        `;
      }
    } else {
      if (DOM.resumeBanner) {
        DOM.resumeBanner.classList.remove('show');
      }
    }
  }

  function startNewQuiz(customConfig = null) {
    if (!questionBankData || !questionBankData.questions) return;

    const config = customConfig || getSelectedSetupConfig();
    SoundSystem.playClick();

    // Create a fresh randomized quiz session
    activeSession = QuizEngine.createSession(questionBankData.questions, {
      sectionId: config.topicId,
      limit: config.limit,
      filterIds: config.filterIds || null
    });

    // Save to storage
    QuizStorage.saveSession(activeSession);

    // Switch to quiz arena
    switchScreen('quiz');
    renderQuestion(activeSession.currentIndex);
    renderQuestionPalette();
  }

  function resumeQuiz() {
    if (!QuizStorage.hasActiveSession()) return;
    activeSession = QuizStorage.loadSession();
    SoundSystem.playClick();
    switchScreen('quiz');
    renderQuestion(activeSession.currentIndex);
    renderQuestionPalette();
  }

  // ==========================================================================
  // QUIZ ARENA LOGIC
  // ==========================================================================

  function renderQuestion(index) {
    if (!activeSession || !activeSession.questions || index < 0 || index >= activeSession.questions.length) return;

    activeSession.currentIndex = index;
    QuizStorage.saveSession(activeSession);

    const q = activeSession.questions[index];
    const total = activeSession.questions.length;
    const isAnswered = !!(activeSession.userAnswers && activeSession.userAnswers[q.id]);
    const userAnswer = isAnswered ? activeSession.userAnswers[q.id] : null;

    // Update Topbar Badges & Scope
    if (activeSession.sectionId === 'all') {
      DOM.quizScopeBadge.textContent = 'All 12 Units (Full Master Bank)';
    } else {
      DOM.quizScopeBadge.textContent = `Unit ${q.sectionId}: ${q.sectionTitle}`;
    }

    // Update Live Score & Stats
    updateLiveStats();

    // Question Header
    DOM.qNumberBadge.textContent = `Q${index + 1} of ${total}`;
    DOM.qOrigBadge.textContent = `Bank Q${q.originalNum}`;
    DOM.qSectionBadge.textContent = q.sectionTitle;

    // Flag / Bookmark State
    const isFlagged = activeSession.flaggedQuestions && activeSession.flaggedQuestions.includes(q.id);
    DOM.flagBtn.classList.toggle('flagged', isFlagged);
    DOM.flagBtn.innerHTML = isFlagged
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> Bookmarked`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> Bookmark`;

    // Question Statement (Text preserved with line breaks & code formatting)
    renderStatement(DOM.qStatement, q.question);

    // Render Options
    DOM.optionsGrid.innerHTML = '';
    q.options.forEach((opt, optIndex) => {
      const optBtn = document.createElement('button');
      optBtn.className = 'option-btn';
      optBtn.setAttribute('data-key', opt.displayKey);
      optBtn.setAttribute('type', 'button');

      let stateClass = '';
      if (isAnswered) {
        optBtn.disabled = true;
        if (opt.displayKey === userAnswer.selectedDisplayKey) {
          stateClass = userAnswer.isCorrect ? 'selected-correct' : 'selected-incorrect';
        } else if (opt.isCorrect && !userAnswer.isCorrect) {
          stateClass = 'reveal-correct';
        }
      }

      if (stateClass) {
        optBtn.classList.add(stateClass);
      }

      optBtn.innerHTML = `
        <span class="option-key">${opt.displayKey}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
        <svg class="option-status-icon correct-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <svg class="option-status-icon incorrect-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      `;

      if (!isAnswered) {
        optBtn.addEventListener('click', () => handleOptionSelection(opt.displayKey));
      }

      DOM.optionsGrid.appendChild(optBtn);
    });

    // Feedback Banner
    if (isAnswered) {
      DOM.feedbackBanner.classList.add('show');
      DOM.feedbackBanner.className = `feedback-banner show ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`;
      DOM.feedbackMsg.textContent = userAnswer.isCorrect
        ? '✓ Correct Answer! Well done (+1 point)'
        : `✗ Incorrect Answer. Correct option is (${q.options.find(o => o.isCorrect).displayKey})`;
    } else {
      DOM.feedbackBanner.classList.remove('show');
    }

    // Hinglish Explanation Box
    if (isAnswered) {
      DOM.explanationBox.classList.add('show');
      let expHtml = formatExplanation(q.explanation);
      if (q.trap) {
        expHtml += `
          <div class="exam-trap-callout">
            <span class="trap-icon">⚠️</span>
            <div>
              <strong>CUET PG Exam Trap &amp; Shortcut:</strong>
              <p>${escapeHtml(q.trap)}</p>
            </div>
          </div>
        `;
      }
      DOM.explanationContent.innerHTML = expHtml;
    } else {
      DOM.explanationBox.classList.remove('show');
    }

    // Navigation Controls State
    DOM.btnPrev.disabled = (index === 0);
    DOM.btnSkip.style.display = isAnswered ? 'none' : 'inline-flex';

    if (index === total - 1) {
      DOM.btnNext.style.display = 'none';
      DOM.btnSubmit.style.display = 'inline-flex';
    } else {
      DOM.btnNext.style.display = 'inline-flex';
      DOM.btnSubmit.style.display = 'none';
      if (isAnswered) {
        DOM.btnNext.classList.add('btn-primary');
        DOM.btnNext.classList.remove('btn-secondary');
      } else {
        DOM.btnNext.classList.remove('btn-primary');
        DOM.btnNext.classList.add('btn-secondary');
      }
    }

    // Update Palette Active State
    updatePaletteActiveChip(index);
  }

  function renderStatement(container, text) {
    container.innerHTML = '';
    const lines = text.split('\n');
    let inCode = false;
    let codeBuffer = [];

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
          container.appendChild(pre);
          codeBuffer = [];
          inCode = false;
        }
        if (line.length > 0) {
          const div = document.createElement('div');
          div.style.marginBottom = '6px';
          div.textContent = line;
          container.appendChild(div);
        }
      }
    });

    if (inCode && codeBuffer.length > 0) {
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = codeBuffer.join('\n');
      pre.appendChild(code);
      container.appendChild(pre);
    }
  }

  function handleOptionSelection(selectedDisplayKey) {
    if (!activeSession) return;
    const q = activeSession.questions[activeSession.currentIndex];
    if (!q) return;

    // Record answer in engine
    const answerRecord = QuizEngine.recordAnswer(activeSession, q.id, selectedDisplayKey);
    if (!answerRecord) return;

    // Play sound
    if (answerRecord.isCorrect) {
      SoundSystem.playCorrect();
    } else {
      SoundSystem.playIncorrect();
    }

    // Save session immediately
    QuizStorage.saveSession(activeSession);

    // Re-render current question with feedback state
    renderQuestion(activeSession.currentIndex);
    renderQuestionPalette();
  }

  function updateLiveStats() {
    if (!activeSession) return;

    const total = activeSession.questions.length;
    let correct = 0;
    let incorrect = 0;

    Object.values(activeSession.userAnswers || {}).forEach(ans => {
      if (ans.isCorrect) correct++;
      else incorrect++;
    });

    const answeredCount = correct + incorrect;
    const progressPercent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

    DOM.statCorrect.textContent = correct;
    DOM.statIncorrect.textContent = incorrect;
    DOM.statScore.textContent = `${activeSession.score} / ${total}`;
    DOM.progressFill.style.width = `${progressPercent}%`;
    DOM.progressText.textContent = `${answeredCount} of ${total} Answered`;
    DOM.progressPercent.textContent = `${progressPercent}%`;
  }

  // ==========================================================================
  // NAVIGATION CONTROLS (NEXT, PREV, SKIP, SUBMIT)
  // ==========================================================================

  function goToNextQuestion() {
    if (!activeSession) return;
    if (activeSession.currentIndex < activeSession.questions.length - 1) {
      SoundSystem.playClick();
      renderQuestion(activeSession.currentIndex + 1);
    }
  }

  function goToPrevQuestion() {
    if (!activeSession) return;
    if (activeSession.currentIndex > 0) {
      SoundSystem.playClick();
      renderQuestion(activeSession.currentIndex - 1);
    }
  }

  function skipQuestion() {
    if (!activeSession) return;
    SoundSystem.playClick();
    goToNextQuestion();
  }

  function toggleFlagQuestion() {
    if (!activeSession) return;
    const q = activeSession.questions[activeSession.currentIndex];
    if (!q) return;

    if (!activeSession.flaggedQuestions) {
      activeSession.flaggedQuestions = [];
    }

    const idx = activeSession.flaggedQuestions.indexOf(q.id);
    if (idx === -1) {
      activeSession.flaggedQuestions.push(q.id);
    } else {
      activeSession.flaggedQuestions.splice(idx, 1);
    }

    SoundSystem.playClick();
    QuizStorage.saveSession(activeSession);
    renderQuestion(activeSession.currentIndex);
    renderQuestionPalette();
  }

  function promptSubmitQuiz() {
    if (!activeSession) return;
    const total = activeSession.questions.length;
    const answered = Object.keys(activeSession.userAnswers || {}).length;
    const unanswered = total - answered;

    DOM.modalTitle.textContent = 'Submit Data Structures Quiz?';
    DOM.modalDesc.textContent = (unanswered > 0)
      ? `You have answered ${answered} out of ${total} questions. ${unanswered} questions are still unanswered. Are you ready to see your final score and detailed Hinglish analysis?`
      : `You have answered all ${total} questions! Ready to see your final score, rank tier, and question breakdown?`;

    DOM.modalBtnConfirm.onclick = function () {
      closeModal();
      finishQuiz();
    };

    DOM.modalBtnCancel.onclick = closeModal;
    openModal();
  }

  function finishQuiz() {
    if (!activeSession) return;
    stopTimer();
    activeSession.isSubmitted = true;
    QuizStorage.saveSession(activeSession);

    const results = QuizEngine.generateResults(activeSession);

    // Save history
    QuizStorage.saveHistory({
      date: new Date().toISOString(),
      score: results.score,
      total: results.totalQuestions,
      accuracy: results.accuracy,
      section: activeSession.sectionId
    });

    SoundSystem.playComplete();
    renderResults(results);
    switchScreen('results');
  }

  // ==========================================================================
  // QUESTION DRAWER / PALETTE
  // ==========================================================================

  function renderQuestionPalette() {
    if (!activeSession || !DOM.paletteGrid) return;

    DOM.paletteGrid.innerHTML = '';
    activeSession.questions.forEach((q, idx) => {
      const chip = document.createElement('button');
      chip.className = 'palette-chip';
      chip.textContent = idx + 1;
      chip.setAttribute('type', 'button');

      const ans = activeSession.userAnswers && activeSession.userAnswers[q.id];
      if (ans) {
        chip.classList.add(ans.isCorrect ? 'answered-correct' : 'answered-incorrect');
      }

      if (activeSession.flaggedQuestions && activeSession.flaggedQuestions.includes(q.id)) {
        chip.classList.add('flagged');
      }

      if (idx === activeSession.currentIndex) {
        chip.classList.add('current');
      }

      chip.addEventListener('click', () => {
        closeDrawer();
        renderQuestion(idx);
      });

      DOM.paletteGrid.appendChild(chip);
    });
  }

  function updatePaletteActiveChip(currentIndex) {
    if (!DOM.paletteGrid) return;
    DOM.paletteGrid.querySelectorAll('.palette-chip').forEach((chip, i) => {
      chip.classList.toggle('current', i === currentIndex);
    });
  }

  function openDrawer() {
    renderQuestionPalette();
    DOM.drawerBackdrop.classList.add('open');
    DOM.paletteDrawer.classList.add('open');
  }

  function closeDrawer() {
    DOM.drawerBackdrop.classList.remove('open');
    DOM.paletteDrawer.classList.remove('open');
  }

  // ==========================================================================
  // MODAL CONTROLS
  // ==========================================================================

  function openModal() {
    DOM.modalBackdrop.classList.add('open');
  }

  function closeModal() {
    DOM.modalBackdrop.classList.remove('open');
  }

  // ==========================================================================
  // TIMER FUNCTIONS
  // ==========================================================================

  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      if (activeSession && !activeSession.isSubmitted) {
        activeSession.timeElapsed = (activeSession.timeElapsed || 0) + 1;
        updateTimerDisplay();
        if (activeSession.timeElapsed % 5 === 0) {
          QuizStorage.saveSession(activeSession);
        }
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    if (!activeSession) return;
    DOM.statTimer.textContent = formatTime(activeSession.timeElapsed || 0);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // ==========================================================================
  // SCREEN 3: RESULTS & IN-DEPTH REVIEW
  // ==========================================================================

  function renderResults(results) {
    // Score Gauge & Badges
    DOM.resScoreNumber.textContent = results.score;
    DOM.resScoreTotal.textContent = `/ ${results.totalQuestions} (${results.scorePercentage}%)`;
    DOM.resGradeBadge.textContent = results.gradeBadge;
    DOM.resGradeBadge.style.color = results.gradeColor;

    DOM.resSummaryText.textContent = `Completed in ${formatTime(results.timeElapsed)}. Accuracy rate is ${results.accuracy}% across attempted questions.`;

    DOM.resStatAttempted.textContent = results.attemptedCount;
    DOM.resStatCorrect.textContent = results.correctCount;
    DOM.resStatIncorrect.textContent = results.incorrectCount;
    DOM.resStatSkipped.textContent = results.skippedCount;
    DOM.resStatAccuracy.textContent = `${results.accuracy}%`;
    DOM.resStatTime.textContent = formatTime(results.timeElapsed);

    // Section Breakdown Bars
    renderSectionBreakdown(results.sectionBreakdown);

    // Retake Missed Questions button visibility
    DOM.btnRetakeMistakes.style.display = (results.missedQuestionIds.length > 0) ? 'inline-flex' : 'none';

    // Render Review Cards
    currentReviewFilter = 'all';
    updateReviewFilterPills();
    renderReviewCards();
  }

  function renderSectionBreakdown(sections) {
    if (!DOM.resBreakdownContainer) return;

    let html = '';
    sections.forEach(sec => {
      const pct = sec.total > 0 ? Math.round((sec.correct / sec.total) * 100) : 0;
      html += `
        <div class="section-bar-item">
          <div class="section-bar-header">
            <span>${escapeHtml(sec.title)}</span>
            <span><strong>${sec.correct}/${sec.total}</strong> (${pct}%)</span>
          </div>
          <div class="section-bar-track">
            <div class="section-bar-fill" style="width: ${pct}%;"></div>
          </div>
        </div>
      `;
    });
    DOM.resBreakdownContainer.innerHTML = html;
  }

  function updateReviewFilterPills() {
    DOM.reviewFilterPills.querySelectorAll('.filter-pill').forEach(pill => {
      const filter = pill.getAttribute('data-filter');
      pill.classList.toggle('active', filter === currentReviewFilter);
    });
  }

  function renderReviewCards() {
    if (!activeSession || !DOM.reviewCardsContainer) return;

    let questions = activeSession.questions.slice();

    if (currentReviewFilter === 'incorrect') {
      questions = questions.filter(q => {
        const a = activeSession.userAnswers[q.id];
        return a && !a.isCorrect;
      });
    } else if (currentReviewFilter === 'skipped') {
      questions = questions.filter(q => !activeSession.userAnswers[q.id]);
    } else if (currentReviewFilter === 'correct') {
      questions = questions.filter(q => {
        const a = activeSession.userAnswers[q.id];
        return a && a.isCorrect;
      });
    }

    if (questions.length === 0) {
      DOM.reviewCardsContainer.innerHTML = `
        <div class="empty-review">
          <p>No questions found under the "<strong>${currentReviewFilter}</strong>" filter.</p>
        </div>
      `;
      return;
    }

    let html = '';
    questions.forEach((q, idx) => {
      const ans = activeSession.userAnswers[q.id];
      let statusBadge = '';
      let statusBorderClass = '';

      if (!ans) {
        statusBadge = `<span class="review-status skipped">Skipped</span>`;
        statusBorderClass = 'skipped-card';
      } else if (ans.isCorrect) {
        statusBadge = `<span class="review-status correct">✓ Correct (+1)</span>`;
        statusBorderClass = 'correct-card';
      } else {
        statusBadge = `<span class="review-status incorrect">✗ Incorrect (0)</span>`;
        statusBorderClass = 'incorrect-card';
      }

      // Build options list
      let optionsHtml = '';
      q.options.forEach(opt => {
        let optState = '';
        if (ans && opt.displayKey === ans.selectedDisplayKey) {
          optState = ans.isCorrect ? 'user-correct' : 'user-incorrect';
        } else if (opt.isCorrect) {
          optState = 'is-correct-target';
        }

        optionsHtml += `
          <div class="review-option ${optState}">
            <span class="rev-opt-key">${opt.displayKey}</span>
            <span class="rev-opt-text">${escapeHtml(opt.text)}</span>
            ${opt.isCorrect ? '<span class="rev-correct-badge">Correct Answer</span>' : ''}
            ${ans && opt.displayKey === ans.selectedDisplayKey && !ans.isCorrect ? '<span class="rev-user-badge">Your Selection</span>' : ''}
          </div>
        `;
      });

      // Build explanation + trap
      let expHtml = formatExplanation(q.explanation);
      if (q.trap) {
        expHtml += `
          <div class="exam-trap-callout" style="margin-top: 10px;">
            <span class="trap-icon">⚠️</span>
            <div>
              <strong>CUET PG Exam Trap &amp; Shortcut:</strong>
              <p>${escapeHtml(q.trap)}</p>
            </div>
          </div>
        `;
      }

      html += `
        <article class="review-card ${statusBorderClass}">
          <div class="review-card-header">
            <div class="q-badge-group">
              <span class="q-number-badge">Q${q.originalNum}</span>
              <span class="q-orig-badge">${escapeHtml(q.sectionTitle)}</span>
            </div>
            ${statusBadge}
          </div>

          <div class="review-statement">${escapeHtml(q.question)}</div>

          <div class="review-options-list">
            ${optionsHtml}
          </div>

          <div class="review-explanation">
            <div class="rev-exp-header">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              Step-by-Step Hinglish Solution
            </div>
            <div class="rev-exp-body">
              ${expHtml}
            </div>
          </div>
        </article>
      `;
    });

    DOM.reviewCardsContainer.innerHTML = html;
  }

  // ==========================================================================
  // EVENT LISTENERS & SHORTCUTS
  // ==========================================================================

  function wireEventListeners() {
    // Brand header button
    const brandBtn = document.getElementById('brand-logo-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', () => {
        if (DOM.screenQuiz.classList.contains('active')) {
          DOM.modalTitle.textContent = 'Return to Setup Menu?';
          DOM.modalDesc.textContent = 'Your current session progress is automatically saved. You can resume it anytime.';
          DOM.modalBtnConfirm.onclick = () => {
            closeModal();
            switchScreen('setup');
          };
          DOM.modalBtnCancel.onclick = closeModal;
          openModal();
        } else {
          switchScreen('setup');
        }
      });
    }

    // Theme Toggle
    DOM.themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      SoundSystem.playClick();
    });

    // Sound Toggle
    DOM.soundToggleBtn.addEventListener('click', () => {
      const isMuted = !SoundSystem.isMuted();
      SoundSystem.setMuted(isMuted);
      updateSoundIcon(isMuted);
      QuizStorage.saveSettings({ sound: !isMuted });
      if (!isMuted) SoundSystem.playClick();
    });

    // Palette Drawer
    DOM.paletteToggleBtn.addEventListener('click', openDrawer);
    DOM.drawerCloseBtn.addEventListener('click', closeDrawer);
    DOM.drawerBackdrop.addEventListener('click', closeDrawer);

    // Limit Pill Buttons
    DOM.limitPills.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        DOM.limitPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        SoundSystem.playClick();
      });
    });

    // Setup Start & Resume Buttons
    DOM.btnStartQuiz.addEventListener('click', () => startNewQuiz());
    DOM.btnResumeQuiz.addEventListener('click', () => resumeQuiz());

    // Navigation Buttons
    DOM.btnNext.addEventListener('click', goToNextQuestion);
    DOM.btnPrev.addEventListener('click', goToPrevQuestion);
    DOM.btnSkip.addEventListener('click', skipQuestion);
    DOM.flagBtn.addEventListener('click', toggleFlagQuestion);
    DOM.btnSubmit.addEventListener('click', promptSubmitQuiz);

    // Restart Session during quiz
    DOM.btnRestartSession.addEventListener('click', () => {
      DOM.modalTitle.textContent = 'Restart Quiz Session?';
      DOM.modalDesc.textContent = 'Are you sure you want to restart? Your current answers and progress in this session will be cleared.';
      DOM.modalBtnConfirm.onclick = () => {
        closeModal();
        startNewQuiz();
      };
      DOM.modalBtnCancel.onclick = closeModal;
      openModal();
    });

    // Results Actions
    DOM.btnNewQuiz.addEventListener('click', () => {
      QuizStorage.clearSession();
      switchScreen('setup');
    });

    DOM.btnRestartQuiz.addEventListener('click', () => {
      startNewQuiz();
    });

    DOM.btnRetakeMistakes.addEventListener('click', () => {
      if (!activeSession) return;
      const results = QuizEngine.generateResults(activeSession);
      if (results.missedQuestionIds.length > 0) {
        startNewQuiz({
          topicId: 'all',
          limit: 'all',
          filterIds: results.missedQuestionIds
        });
      }
    });

    // Review Filter Pills
    DOM.reviewFilterPills.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', function () {
        currentReviewFilter = this.getAttribute('data-filter');
        updateReviewFilterPills();
        renderReviewCards();
        SoundSystem.playClick();
      });
    });

    // Quick mistake filter from results
    DOM.btnReviewMistakesFilter.addEventListener('click', () => {
      currentReviewFilter = 'incorrect';
      updateReviewFilterPills();
      renderReviewCards();
      const el = document.getElementById('review-section-heading');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyNavigation);
  }

  function handleKeyNavigation(e) {
    if (!DOM.screenQuiz.classList.contains('active')) return;
    if (DOM.modalBackdrop.classList.contains('open') || DOM.paletteDrawer.classList.contains('open')) return;
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    const key = e.key.toUpperCase();

    // Option Keys: 1, 2, 3, 4 or A, B, C, D
    const keyMap = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', 'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D' };
    if (keyMap[key]) {
      e.preventDefault();
      handleOptionSelection(keyMap[key]);
      return;
    }

    // Navigation Keys
    if (e.key === 'ArrowRight' || key === 'N') {
      e.preventDefault();
      goToNextQuestion();
    } else if (e.key === 'ArrowLeft' || key === 'P') {
      e.preventDefault();
      goToPrevQuestion();
    } else if (key === 'S') {
      e.preventDefault();
      skipQuestion();
    } else if (key === 'F') {
      e.preventDefault();
      toggleFlagQuestion();
    } else if (e.key === 'Enter') {
      if (activeSession && activeSession.userAnswers[activeSession.questions[activeSession.currentIndex].id]) {
        e.preventDefault();
        if (activeSession.currentIndex === activeSession.questions.length - 1) {
          promptSubmitQuiz();
        } else {
          goToNextQuestion();
        }
      }
    }
  }

  // ==========================================================================
  // UTILITY HELPERS
  // ==========================================================================

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatExplanation(text) {
    if (!text) return '';
    let escaped = escapeHtml(text);
    escaped = escaped.replace(/-&gt;/g, '→');
    escaped = escaped.replace(/&lt;=/g, '≤');
    escaped = escaped.replace(/&gt;=/g, '≥');
    escaped = escaped.replace(/\n\n/g, '<br><br>');
    escaped = escaped.replace(/\n/g, '<br>');
    return escaped;
  }

  // Start on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
