# TechX — AI Solutions Landing Page

> A sleek, modern dark-themed landing page for an AI SaaS product. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## 🔗 Live Preview

Open `index.html` in your browser or visit the GitHub Pages deployment (if enabled).

---

## ✨ Features

- **Dark Navy/Slate Theme** — Professional deep dark UI with indigo accent colors
- **Fully Responsive** — Adapts seamlessly to mobile, tablet, and desktop
- **Animated Interactions** — Hover effects, smooth transitions, and micro-animations
- **Multi-Page Navigation** — Landing page (`index.html`) → Signup page (`signup.html`)
- **Modern Typography** — Google Fonts: *Outfit* (headings) + *Plus Jakarta Sans* (body)
- **Glassmorphism UI** — Frosted glass card effects on the signup form
- **Password Strength Meter** — Real-time password validation on signup
- **Toast Notifications** — Animated success notification on form submit
- **SEO Ready** — Semantic HTML5, meta descriptions, single `<h1>` per page

---

## 📁 Project Structure

```
business-landing-page/
├── index.html       # Main landing page
├── signup.html      # Signup / onboarding page
├── css/
│   └── style.css    # All styles (design system, components, responsive)
├── js/
│   └── script.js    # Interactive JS (form validation, toast, animations)
├── screenshots/     # Screenshots of the completed work
└── README.md        # Project documentation
```

---

## 🖥️ Pages

### Landing Page (`index.html`)
| Section | Description |
|---------|-------------|
| **Header / Nav** | Sticky frosted-glass navbar with logo, links, search bar & Sign Up button |
| **Hero** | Full-width hero with headline, subtext and CTA button |
| **Trusted By** | Logo strip of well-known brands |
| **Features** | 4-card grid highlighting core product capabilities |
| **How It Works** | 3-step process with numbered cards |
| **Pricing** | 3-tier pricing cards (Free / Pro / Enterprise) |
| **Testimonials** | 2-column testimonial cards with quote styling |
| **Footer** | Multi-column footer with links and social icons |

### Signup Page (`signup.html`)
- Clean centered card with glassmorphism effect
- Full Name, Email, Password, Company fields
- Real-time password strength indicator
- OAuth buttons (Google / GitHub)
- Success toast notification on submit

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-light` | `#0b0f19` | Page background |
| `--bg-white` | `#131b2e` | Cards, header |
| `--primary-color` | `#6366f1` | Buttons, accents, icons |
| `--text-primary` | `#f8fafc` | Headings, main text |
| `--text-secondary` | `#94a3b8` | Body copy, descriptions |
| `--text-muted` | `#64748b` | Placeholders, captions |

### Typography
- **Headings**: `Outfit` — 700/800 weight
- **Body**: `Plus Jakarta Sans` — 400/500/600 weight

### Shadows
- `--shadow-sm` — subtle card depth
- `--shadow-md` — medium elevation
- `--shadow-lg` — indigo glow + dark depth
- `--shadow-xl` — hero/modal level depth

---

## 🚀 Getting Started

### Option 1 — Open directly
```bash
# Just double-click index.html, or open in browser:
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### Option 2 — Local HTTP Server
```bash
# With Node.js
npx http-server -p 8080

# With Python
python -m http.server 8080
```

Then visit: **http://localhost:8080**

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| `> 1024px` | Full 4-col features, 3-col pricing |
| `768px – 1024px` | 2-col features, 1-col pricing |
| `< 768px` | Single column, stacked nav |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic page structure |
| CSS3 (Vanilla) | Design system, animations, layout |
| JavaScript (ES6+) | Form logic, toast, interactivity |
| Google Fonts | Custom typography |

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">
  Built with ❤️ using pure HTML, CSS & JS — no frameworks needed.
</div>
