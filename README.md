# Hasnain Karimain — Sticky Navbar with Smooth Scroll & Active Link Highlighting

A responsive, production-ready navigation system built with **pure HTML, CSS & JavaScript** — no frameworks, no libraries.

---

## 🚀 Live Features

| Feature | Status |
|---|---|
| Sticky navbar (fixed at top) | ✅ |
| Background change on scroll | ✅ |
| Smooth scrolling to sections | ✅ |
| Active link highlighting | ✅ |
| Auto-update active link on scroll | ✅ |
| Hover effects on nav links | ✅ |
| Mobile hamburger menu | ✅ |
| Scroll progress indicator | ✅ |
| Debounced scroll event | ✅ |
| Responsive design | ✅ |

---

## 📁 Project Structure

```
sticky-navbar-smooth-scroll/
│
├── index.html      ← Main HTML file (all sections & navbar)
├── style.css       ← All styling (sticky nav, active states, responsive)
└── script.js       ← JS logic (scroll detection, active links, hamburger)
```

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure with section IDs
- **CSS3** — Sticky navbar, transitions, animations, media queries
- **JavaScript (ES6)** — IntersectionObserver, scroll events, debounce

---

## 📄 Sections

| Section ID | Description |
|---|---|
| `#home` | Hero section with animated background circles |
| `#about` | About section with stats |
| `#services` | Services cards grid |
| `#gallery` | Gallery grid with color blocks |
| `#contact` | Contact form |

---

## ⚙️ How It Works

### 1. Sticky Navbar
The navbar is fixed at the top using `position: fixed`. On scroll, JavaScript adds a `.scrolled` class that changes the background to a frosted glass effect using `backdrop-filter: blur()`.

```css
.navbar.scrolled {
  background: rgba(10, 10, 15, 0.88);
  backdrop-filter: blur(18px);
}
```

### 2. Smooth Scrolling
Two methods used together:
- CSS: `scroll-behavior: smooth` on `html`
- JS: `window.scrollTo({ behavior: 'smooth' })` with navbar height offset so sections don't hide behind the fixed bar

```js
window.scrollTo({ top: y, behavior: 'smooth' });
```

### 3. Active Link Highlighting
Uses **IntersectionObserver** — the most accurate method — to detect which section is currently in the viewport and update the active nav link automatically.

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActiveLink(entry.target.id);
  });
}, { rootMargin: `-72px 0px -55% 0px` });
```

### 4. Debounced Scroll Event
The scroll handler is wrapped in a `debounce()` function to limit execution and improve performance.

```js
const onScroll = debounce(() => {
  handleNavbarScroll();
  updateProgressBar();
}, 10);
```

### 5. Mobile Hamburger Menu
A hamburger button appears on screens ≤ 768px. Clicking it toggles the mobile nav with a smooth slide-down animation. It auto-closes on outside click or window resize.

### 6. Scroll Progress Bar
A thin gradient bar at the very top of the page grows from left to right as the user scrolls down — calculated as a percentage of total page scroll.

---

## 🖥️ Setup & Usage

1. **Clone the repo**
   ```bash
   git clone https://github.com/KhadijaCodes-hub/sticky-navbar-smooth-scroll.git
   ```

2. **Open in browser**
   ```bash
   cd sticky-navbar-smooth-scroll
   open index.html
   ```
   > No build tools, no npm, no server required. Just open the HTML file directly.

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 768px` | Full horizontal navbar |
| `≤ 768px` | Hamburger menu, stacked nav links |
| `≤ 480px` | Single column cards & gallery |

---

## 🎨 Design Highlights

- **Font**: Bebas Neue (headings) + DM Sans (body)
- **Color Palette**: Dark theme with `#e8ff47` accent (yellow-green)
- **Active State**: Accent color + animated underline slide-in
- **Hover State**: Subtle background highlight + underline preview
- **Transitions**: All interactions use `cubic-bezier(0.4, 0, 0.2, 1)` easing

---
