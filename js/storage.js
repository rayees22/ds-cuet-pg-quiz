// ==========================================================================
// Storage System - LocalStorage Persistence & Auto-Save
// ==========================================================================

const QuizStorage = (function () {
  const SESSION_KEY = 'cuet_ds_quiz_session_v1';
  const SETTINGS_KEY = 'cuet_ds_quiz_settings_v1';
  const HISTORY_KEY = 'cuet_ds_quiz_history_v1';

  return {
    saveSession: function (sessionData) {
      try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      } catch (e) {
        console.warn('LocalStorage save failed:', e);
      }
    },

    loadSession: function () {
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        console.warn('LocalStorage load failed:', e);
        return null;
      }
    },

    clearSession: function () {
      try {
        localStorage.removeItem(SESSION_KEY);
      } catch (e) {}
    },

    hasActiveSession: function () {
      const s = this.loadSession();
      return !!(s && !s.isSubmitted && s.questions && s.questions.length > 0);
    },

    saveSettings: function (settings) {
      try {
        const current = this.loadSettings();
        const updated = Object.assign({}, current, settings);
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
      } catch (e) {}
    },

    loadSettings: function () {
      try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        return raw ? JSON.parse(raw) : { theme: 'light', sound: true };
      } catch (e) {
        return { theme: 'light', sound: true };
      }
    },

    saveHistory: function (attempt) {
      try {
        const raw = localStorage.getItem(HISTORY_KEY);
        const list = raw ? JSON.parse(raw) : [];
        list.unshift(attempt);
        // Keep last 25 attempts
        if (list.length > 25) list.length = 25;
        localStorage.setItem(HISTORY_KEY, JSON.stringify(list));
      } catch (e) {}
    },

    loadHistory: function () {
      try {
        const raw = localStorage.getItem(HISTORY_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    }
  };
})();
