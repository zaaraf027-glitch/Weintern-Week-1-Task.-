/* ============================================
   ZAARA FIRDAUS — PORTFOLIO SCRIPTS
   script.js  (Fixed & Refactored)
   ============================================ */

/* ── 1. MOBILE NAV TOGGLE ── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger spans
    const spans = navToggle.querySelectorAll('span');
    navLinks.classList.contains('open')
      ? spans.forEach((s, i) => {
          if (i === 0) s.style.transform = 'translateY(7px) rotate(45deg)';
          if (i === 1) s.style.opacity = '0';
          if (i === 2) s.style.transform = 'translateY(-7px) rotate(-45deg)';
        })
      : spans.forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });
}


/* ── 2. ACTIVE NAV LINK ON SCROLL ── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}, { passive: true });


/* ── 3. STAGGERED SCROLL ANIMATIONS ── */
const animateOnScroll = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0)';
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach((el, index) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(25px)';
    el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s,
                            transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`;
    observer.observe(el);
  });
};

animateOnScroll('.project-card');
animateOnScroll('.glass-card');
animateOnScroll('.tech-badge');
animateOnScroll('.comm-card');


/* ── 4. CONTACT FORM SUBMIT ── */
const sendBtn = document.querySelector('.btn-send');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('name')?.value.trim();
    const email   = document.getElementById('email')?.value.trim();
    const subject = document.getElementById('subject')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email) {
      alert('Please fill in your name and email.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Success feedback
    sendBtn.textContent = '✓ Message Sent!';
    sendBtn.style.background  = '#10b981';
    sendBtn.style.boxShadow   = '0 4px 15px rgba(16,185,129,0.3)';
    sendBtn.disabled = true;

    // Reset after 3 s
    setTimeout(() => {
      ['name','email','subject','message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
      });
      sendBtn.textContent      = 'Send Message';
      sendBtn.style.background = '';
      sendBtn.style.boxShadow  = '';
      sendBtn.disabled = false;
    }, 3000);
  });
}


/* ── 5. SMOOTH SCROLL FOR ALL ANCHOR LINKS ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return; // skip bare '#' links
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});