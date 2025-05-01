import dayjs from 'dayjs';

import "./style.css";

function addTenures() {
  document.querySelectorAll('.tenure').forEach(function (el) {
    const work = {
      startDate: el.dataset.start,
      endDate: el.dataset.end,
    }

    const startDate = dayjs(work.startDate, 'YYYY-MM-DD');
    const endDate = work.endDate ? dayjs(work.endDate, 'YYYY-MM-DD') : dayjs();
    const formattedStartDate = startDate.format('MMM YYYY');
    const formattedEndDate = endDate.format('MMM YYYY');
    const tenureStr = work.endDate ? `${formattedStartDate} to ${formattedEndDate}` : `Since ${formattedStartDate}`;

    const diffInMonths = Math.ceil(endDate.diff(startDate, 'month', true));
    const diffInYears = Math.floor(endDate.diff(startDate, 'year', true));
    const durationStr = diffInYears > 0 ? `${diffInYears} year${diffInYears === 1 ? '' : 's'}, ${(diffInMonths % 12)} month${diffInMonths % 12 === 1 ? '' : 's'}` : `${diffInMonths} month${diffInMonths === 1 ? '' : 's'}`

    el.innerHTML = `${tenureStr} (${durationStr})`;
  });
}

function addEaseAnimation() {
  const timeline = document.querySelectorAll('.section-ease-in');
  const duration = 500;
  timeline.forEach((element, index) => {
    element.style.opacity = 0;
    window.setTimeout(() => {
      element.animate([
        { transform: "translateY(24px)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 },
      ], {
        duration,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
      });
      element.style.opacity = 1;
    }, duration * index)
  });

  const element = document.querySelector('.hero-img');
  element.animate([
    { transform: "scale(1.1)", opacity: 0 },
    { transform: "scale(1)", opacity: 1 },
    { transform: "scale(1.01)", opacity: 1 },
    { transform: "scale(1)", opacity: 1 }
  ], {
    duration: duration * 3,
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"
  });
  element.style.opacity = 1;
}

function saveThemePreference() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function setupTheme() {
  saveThemePreference();

  const navLinks = document.querySelector('body > div > nav > div');
  const defaultDark = document.documentElement.classList.contains("dark");

  const makeButton = () => `<button class="nav-link btn mode-switch" title="Switch Theme"><i class="mode-switch-icon fa-lg fas fa-${defaultDark ? 'moon' : 'sun'}"></i></button>`;
  navLinks.innerHTML = makeButton() + navLinks.innerHTML;
  const icon = document.querySelector('.mode-switch-icon');

  const toggle = function () {
    document.documentElement.classList.toggle('dark');
    icon.classList.toggle(`fa-moon`);
    icon.classList.toggle(`fa-sun`);

    saveThemePreference();
  };

  document.querySelector('.mode-switch').addEventListener("click", toggle);
}

function toggleStickyNavVisibility() {
  const header = document.querySelector('body > header');
  const isSticky = header.classList.contains('sticky');
  if (window.scrollY > window.innerHeight * 0.8 && !isSticky) {
    header.classList.add('sticky');
  } else if (window.scrollY < window.innerHeight * 0.8 && isSticky) {
    header.classList.remove('sticky');
  }
}

// highlight corresonding nav link on scroll
function highlightNavLink() {
  const navLinks = document.querySelectorAll('.quick-nav-items li');

  navLinks.forEach((navLink) => {
    const sectionId = navLink.querySelector('a').getAttribute('href');
    if (!sectionId) return;

    const section = document.querySelector(sectionId);
    if (!section) return;


    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const allowedPadding = 60;

    if (window.scrollY >= sectionTop - allowedPadding && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
      return;
    }
  });
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.onload = function () {
  document.getElementsByClassName('cryptedmail')[0].outerHTML = '<a href="mailto:mehamasum@gmail.com" title="Send Email">mehamasum@gmail.com</a>';

  try { addEaseAnimation(); } catch (e) { };
  try { setupTheme(); } catch (e) { };

  addTenures();

  window.addEventListener('scroll', toggleStickyNavVisibility);
  window.addEventListener('scroll', debounce(highlightNavLink, 100));
  toggleStickyNavVisibility();
};
