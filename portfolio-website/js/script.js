/* ==========================================================
   ZAARA FIRDAUS — PORTFOLIO JAVASCRIPT
   Clean, Accessible, Modular Interactive Logic
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. THEME TOGGLE (LIGHT / DARK) ── */
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Initialize theme from localStorage or system preference
  const savedTheme = localStorage.getItem('zf_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  htmlRoot.setAttribute('data-theme', currentTheme);
  updateThemeButtonAria(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('zf_portfolio_theme', newTheme);
      updateThemeButtonAria(newTheme);

      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function updateThemeButtonAria(theme) {
    if (!themeToggle) return;
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
  }


  /* ── 2. MOBILE NAVIGATION MENU ── */
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('open');
      navToggle.classList.toggle('open', isOpen);
      navMenu.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen && window.innerWidth <= 768 ? 'hidden' : '';
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking any nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close when clicking outside of navbar
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    // Reset overflow on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }


  /* ── 3. TOAST NOTIFICATION HELPER ── */
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');
    if (!toast) return;

    if (toastText) {
      toastText.textContent = message;
    }

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }


  /* ── 4. EMAIL COPY TRIGGER ── */
  const emailTriggers = document.querySelectorAll('.email-copy-trigger');
  const emailAddress = 'zaaraf027@gmail.com';

  const copyEmail = (e) => {
    if (e) e.preventDefault();

    const onSuccess = () => {
      showToast(`Email copied: ${emailAddress}`);
    };

    const onFallback = () => {
      // Fallback using textarea
      const tempArea = document.createElement('textarea');
      tempArea.value = emailAddress;
      tempArea.style.position = 'fixed';
      tempArea.style.opacity = '0';
      document.body.appendChild(tempArea);
      tempArea.select();
      try {
        document.execCommand('copy');
        onSuccess();
      } catch (err) {
        showToast(`Email: ${emailAddress}`);
      }
      document.body.removeChild(tempArea);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailAddress).then(onSuccess).catch(onFallback);
    } else {
      onFallback();
    }
  };

  emailTriggers.forEach(btn => {
    btn.addEventListener('click', copyEmail);
  });


  /* ── 5. ACTIVE NAV LINK DETECTION ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });


  /* ── 6. CONTACT FORM SUBMISSION ── */
  const contactForm = document.getElementById('contactForm');
  const contactSubmitBtn = document.getElementById('contactSubmitBtn');

  if (contactForm && contactSubmitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const originalHTML = contactSubmitBtn.innerHTML;
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.innerHTML = '✓ Message Sent!';
      showToast('Thank you! Your message has been sent.');

      setTimeout(() => {
        contactSubmitBtn.innerHTML = originalHTML;
        contactSubmitBtn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }

});