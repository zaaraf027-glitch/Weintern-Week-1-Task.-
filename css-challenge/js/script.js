/**
 * WeIntern Week 1 — Task 3: CSS Challenge
 * script.js — Toast, Spinner Toggle, Fade Replay, IntersectionObserver
 */

'use strict';

/* ────────────────────────────────────────
   1. TOAST NOTIFICATION
──────────────────────────────────────── */

let toastTimer = null;

/**
 * Shows a toast notification at the bottom of the screen.
 * @param {string} message - The message to display inside the toast.
 */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  // Set message content
  toast.textContent = '✓ ' + message;

  // Clear any existing hide timer
  clearTimeout(toastTimer);

  // Show the toast
  toast.classList.add('toast--visible');

  // Hide after 2.2 seconds
  toastTimer = setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 2200);
}

/* ────────────────────────────────────────
   2. SPINNER TOGGLE
──────────────────────────────────────── */

let isSpinning = true;

/**
 * Toggles the loading spinner animation on/off.
 * Updates the spinner label text accordingly.
 */
function toggleSpinner() {
  const spinner     = document.getElementById('spinner-el');
  const spinnerText = document.getElementById('spinner-text');

  if (!spinner || !spinnerText) return;

  isSpinning = !isSpinning;

  if (isSpinning) {
    spinner.style.animationPlayState = 'running';
    spinnerText.style.animationPlayState = 'running';
    spinnerText.textContent = 'Loading…';
    showToast('Spinner resumed!');
  } else {
    spinner.style.animationPlayState = 'paused';
    spinnerText.style.animationPlayState = 'paused';
    spinnerText.textContent = 'Paused';
    showToast('Spinner paused!');
  }
}

/* ────────────────────────────────────────
   3. FADE-IN REVEAL — REPLAY
──────────────────────────────────────── */

/**
 * Replays the staggered fade-in bar animation by forcing a CSS reflow.
 * Works by briefly removing and re-adding the animation on each bar.
 */
function restartFade() {
  const bars = document.querySelectorAll('.fade-bar');

  bars.forEach((bar) => {
    // Remove animation to reset it
    bar.style.animation = 'none';
    bar.style.opacity   = '0';

    // Trigger reflow so the browser registers the change
    void bar.offsetHeight;

    // Re-apply animation
    bar.style.animation = '';
    bar.style.opacity   = '';
  });

  showToast('Animation replayed ↺');
}

/* ────────────────────────────────────────
   4. INTERSECTION OBSERVER
   Auto-trigger fade animation when the
   animations section enters the viewport
──────────────────────────────────────── */

function initFadeObserver() {
  const fadeSection = document.getElementById('fade-demo');
  if (!fadeSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          restartFade();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(fadeSection);
}

/* ────────────────────────────────────────
   5. SMOOTH SCROLL POLISH
   Ensure all nav pill links scroll to the
   correct section offset, accounting for
   any sticky header if present.
──────────────────────────────────────── */

function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return; // Skip empty anchors (underline nav links)

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ────────────────────────────────────────
   6. KEYBOARD ACCESSIBILITY
   Allow Enter/Space to trigger clickable
   non-button elements with role="button"
──────────────────────────────────────── */

function initKeyboardInteraction() {
  const roleButtons = document.querySelectorAll('[role="button"]');

  roleButtons.forEach((el) => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
}

/* ────────────────────────────────────────
   7. INIT — Run on DOMContentLoaded
──────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initFadeObserver();
  initSmoothScroll();
  initKeyboardInteraction();
});
