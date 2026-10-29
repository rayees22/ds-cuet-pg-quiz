// ==========================================================================
// Web Audio API Synthesizer - Zero External Audio Files Needed
// ==========================================================================

const SoundSystem = (function () {
  let ctx = null;
  let isMuted = false;

  function initContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
  }

  function playTone(freq, type, duration, delay = 0, gainLevel = 0.15) {
    if (isMuted) return;
    try {
      initContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  return {
    init: function (muted = false) {
      isMuted = muted;
    },
    setMuted: function (muted) {
      isMuted = muted;
    },
    isMuted: function () {
      return isMuted;
    },
    playCorrect: function () {
      if (isMuted) return;
      // Cheerful chime: C5 (523Hz) followed quickly by G5 (784Hz)
      playTone(523.25, 'sine', 0.18, 0, 0.18);
      playTone(783.99, 'sine', 0.28, 0.09, 0.22);
    },
    playIncorrect: function () {
      if (isMuted) return;
      // Soft gentle error buzz: 220Hz downward to 164Hz
      playTone(220, 'triangle', 0.22, 0, 0.18);
      playTone(164.81, 'triangle', 0.25, 0.08, 0.15);
    },
    playClick: function () {
      if (isMuted) return;
      playTone(800, 'sine', 0.04, 0, 0.05);
    },
    playComplete: function () {
      if (isMuted) return;
      // Celebratory fanfare: C-E-G-C
      playTone(523.25, 'sine', 0.2, 0, 0.2);
      playTone(659.25, 'sine', 0.2, 0.12, 0.2);
      playTone(783.99, 'sine', 0.25, 0.24, 0.22);
      playTone(1046.50, 'sine', 0.45, 0.36, 0.25);
    }
  };
})();
