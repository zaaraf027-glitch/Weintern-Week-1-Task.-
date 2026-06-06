# CSS Challenge — WeIntern Week 1 · Task 3

A professional, responsive, and visually polished CSS Challenge project demonstrating advanced Flexbox layouts, CSS Grid, and smooth CSS Animations. Built as part of the **WeIntern Web Development Internship** programme.

---

## 📋 Project Overview

This project is a single-page showcase implementing three core CSS challenges:

1. **Flexbox Layout** — A responsive feature card row with interactive hover effects
2. **CSS Grid Gallery** — A dynamic dashboard-style gallery with responsive column behavior
3. **Animation Showcase** — Five polished CSS animation components with JavaScript interactivity

---

## ✨ Features

- 🎨 **Premium Design System** — Custom CSS variables for a warm, editorial beige/brown palette
- 📐 **Flexbox Layout** — 3 → 2 → 1 column responsive card row using `flex-wrap` and `gap`
- 🗃️ **CSS Grid Gallery** — 8+ item gallery with spanning cards using `repeat(auto-fill, minmax())`
- 🎬 **5 Animation Demos** — Button hover, loading spinner, fade-in reveal, card lift, underline nav
- 📱 **Mobile-First Responsive** — Fluid breakpoints at 600px, 700px, and 900px
- ♿ **Accessible** — Semantic HTML, visible focus states, ARIA roles and live regions
- 🔔 **Toast Notifications** — Contextual feedback on every interactive click
- 👁️ **IntersectionObserver** — Auto-triggers fade animation when scrolled into view
- 🖋️ **Premium Typography** — Playfair Display (headings) + Plus Jakarta Sans (body)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** | Design system, layouts, animations |
| **Vanilla JavaScript** | Toast, spinner toggle, fade replay, IntersectionObserver |
| **Google Fonts** | Playfair Display · Plus Jakarta Sans |

> ⚠️ No frameworks used — no Bootstrap, Tailwind, jQuery, React, or Vue.

---

## 📁 Folder Structure

```
css-challenge/
│
├── index.html          ← Main page (single-page layout)
├── css/
│   └── style.css       ← All styles (design tokens, layouts, animations)
├── js/
│   └── script.js       ← Spinner toggle, fade replay, toast, IntersectionObserver
├── screenshots/
│   ├── flex-desktop.png
│   ├── flex-mobile.png
│   ├── grid-layout.png
│   └── animation-demo.png
└── README.md           ← This file
```

---

## 🚀 Setup Instructions

### Run Locally

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/css-challenge.git
   ```

2. Navigate into the project folder:
   ```bash
   cd css-challenge
   ```

3. Open `index.html` directly in your browser:
   - Double-click `index.html`, **or**
   - Right-click → *Open With* → your browser, **or**
   - Use a local dev server (recommended):
     ```bash
     # Using VS Code Live Server extension — click "Go Live"
     # Or using Python:
     python -m http.server 3000
     # Then open http://localhost:3000
     ```

### Deploy Free Online

| Platform | Steps |
|---|---|
| **GitHub Pages** | Push to GitHub → Settings → Pages → Deploy from `main` branch |
| **Netlify** | Drag and drop the `css-challenge/` folder to [netlify.com/drop](https://netlify.com/drop) |
| **Vercel** | `npx vercel` in the project folder |

---

## 📐 Responsive Design Breakpoints

| Breakpoint | Flexbox Cards | Grid Gallery |
|---|---|---|
| Desktop (≥ 900px) | 3 columns | Auto-fill, items 1 & 5 span 2 cols |
| Tablet (600–899px) | 2 columns | Auto-fill, spanning removed |
| Mobile (< 600px) | 1 column stacked | 2-column or 1-column |

---

## 🎬 Animation Details

| Component | CSS Technique |
|---|---|
| **Button Hover** | `transform: translateY + scale`, `box-shadow`, `::after` overlay |
| **Loading Spinner** | `@keyframes spin`, `@keyframes pulse-opacity`, JS toggle |
| **Fade-In Reveal** | `@keyframes fadeSlideIn`, staggered `animation-delay`, IntersectionObserver |
| **Card Lift** | `transform: translateY(-12px) rotate(-0.5deg)`, deep `box-shadow` |
| **Underline Nav** | `::after` `width: 0 → 100%` with `cubic-bezier` transition |

---

## 📸 Screenshots

> Add screenshots to the `screenshots/` folder after capturing them.

| View | File |
|---|---|
| Flexbox — Desktop | `screenshots/flex-desktop.png` |
| Flexbox — Mobile | `screenshots/flex-mobile.png` |
| Grid Gallery | `screenshots/grid-layout.png` |
| Animation Demo | `screenshots/animation-demo.png` |

**How to capture:**
- Open Chrome DevTools → Toggle Device Toolbar (`Ctrl+Shift+M`) for mobile view
- Right-click → Inspect → More Tools → Capture Screenshot

---

## 📊 WeIntern Grading Alignment

| Criterion | Implementation |
|---|---|
| **Clean Code & File Structure (25%)** | Separate `css/`, `js/` folders; semantic HTML; meaningful class names; CSS variables |
| **Responsive Design (25%)** | Mobile-first CSS; `flex-wrap`; `auto-fill` grid; 3 breakpoints |
| **Visual Design Quality (25%)** | Premium palette; Playfair Display typography; smooth transitions; shadow system |
| **README + Screenshots + Deployment (15%)** | This README; `screenshots/` folder; ready for GitHub Pages / Netlify |
| **Bonus & Creativity (10%)** | Toast system; IntersectionObserver; keyboard accessibility; 5 animation demos |

---

## 👤 Author

**Zaara Firdaus**
WeIntern Web Development Intern — Batch 2025

---

## 📄 License

This project was created for educational purposes as part of the WeIntern internship programme.
