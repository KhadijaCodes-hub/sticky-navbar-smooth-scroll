const navbar     = document.getElementById('navbar');
const navLinks   = document.querySelectorAll('.nav-link');
const hamburger  = document.getElementById('hamburger');
const navMenu    = document.getElementById('navLinks');
const progressBar = document.getElementById('progressBar');

const sections = document.querySelectorAll('section[id]');

function debounce(fn, delay = 10) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function handleNavbarScroll() {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function updateProgressBar() {
  const scrollTop    = window.scrollY;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled     = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = scrolled + '%';
}

const navHeight = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
) || 72;

function setActiveLink(sectionId) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.section === sectionId) {
      link.classList.add('active');
    }
  });
}

const observerOptions = {
  root: null,
  rootMargin: `-${navHeight}px 0px -55% 0px`,
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActiveLink(entry.target.id);
    }
  });
}, observerOptions);

sections.forEach(sec => observer.observe(sec));

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId  = this.getAttribute('href').substring(1); // strip '#'
    const targetEl  = document.getElementById(targetId);

    if (!targetEl) return;

    const y = targetEl.getBoundingClientRect().top
              + window.scrollY
              - navHeight;

    window.scrollTo({ top: y, behavior: 'smooth' });

    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

hamburger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
  }
});

const onScroll = debounce(() => {
  handleNavbarScroll();
  updateProgressBar();
}, 10);

window.addEventListener('scroll', onScroll, { passive: true });

handleNavbarScroll();
updateProgressBar();