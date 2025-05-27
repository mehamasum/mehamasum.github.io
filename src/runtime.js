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

    
    const duration = endDate.diff(startDate, 'month') + 1;
    const years = Math.floor(duration / 12);
    const months = duration % 12;

    const yearsStr = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsStr = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
    let durationStr = '';
    if (yearsStr && monthsStr) {
      durationStr = `${yearsStr} ${monthsStr}`;
    } else if (yearsStr) {
      durationStr = yearsStr;
    } else if (monthsStr) {
      durationStr = monthsStr;
    } else {
      durationStr = 'Less than a month';
    }
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

    // allow larger padding on mobile, default is 60px
    const allowedPadding = window.innerWidth < 768 ? 120 : 60;

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

function expandEmailLinks() {
  document.querySelectorAll('.cryptedmail').forEach(function (el) {
    el.outerHTML = '<a href="mailto:mehamasum@gmail.com" title="Send Email">mehamasum@gmail.com</a>';
  });

  document.querySelectorAll('.criptedmail-btn').forEach(function (el) {
    el.parentElement.href = "mailto:mehamasum@gmail.com";
    el.innerText = 'Email me';
  });
}

function setQuote(elements, quote, animate = true) {
  const { container, quoteElement, quoteeElement, quoteSrcElement, dateElement } = elements;

  const setQuote = () => {
    quoteeElement.innerText = quote.quotee;
    quoteSrcElement.innerHTML = quote.source;
    dateElement.innerText = quote.date;
    quoteElement.innerHTML = quote.quote;
  };

  if (!animate) {
    setQuote();
    return;
  }

  container.classList.add('fade');

  setTimeout(function () {
    container.classList.remove('fade');
    setQuote();
  }, 500);
}

function setQuoteCounter(counter, position, quotes) {
  const totalQuotes = quotes.length;
  counter.innerText = `${position + 1} of ${totalQuotes}`;
}

function setupQuotesCarousel() {
  const quoteContainer = document.querySelectorAll('.quotes-container .quotes-data blockquote');
  if (! quoteContainer || quoteContainer.length === 0) {
    return;
  }

  const quoteData = [...quoteContainer].map((el) => {
    const quote = el.querySelector('.quote-data-quote').innerHTML;
    const quotee = el.querySelector('.quote-data-quotee').innerText;
    const source = el.querySelector('.quote-data-source').innerHTML;
    const date = el.querySelector('.quote-data-date').innerText;
    return {
      quote,
      quotee,
      source,
      date
    };
  });

  if (!quoteData) {
    return;
  }

  // keep first three, shuffle the rest
  const shuffledQuotes = quoteData.slice(3).sort(() => Math.random() - 0.5);
  const quotes = quoteData.slice(0, 3).concat(shuffledQuotes);

  const container = document.querySelector('.quotes-container .quote');
  const quoteElement = document.querySelector('.quotes-container .quote blockquote p');
  const quoteeElement = document.querySelector('.quotes-container .quote cite');
  const quoteSrcElement = document.querySelector('.quotes-container .quote .quote-src');
  const dateElement = document.querySelector('.quotes-container .quote time');
  const elements = {
    container,
    quoteElement,
    quoteeElement,
    quoteSrcElement,
    dateElement
  };


  const rightBtn = document.querySelector('.quotes-container .btn-right');
  const leftBtn = document.querySelector('.quotes-container .btn-left');
  const counter = document.querySelector('.quotes-container .quote-counter');

  if (quotes.length > 1) {
    rightBtn.style.display = 'block';
    leftBtn.style.display = 'block';
    counter.style.display = 'block';

    setQuote(elements, quotes[0], false);
    setQuoteCounter(counter, 0, quotes);
  }

  let position = 0;

  const moveRight = () => {
    if (position >= quotes.length - 1) {
      position = 0;
      setQuoteCounter(counter, position, quotes);
      setQuote(elements, quotes[position]);
      return;
    }

    setQuoteCounter(counter, position + 1, quotes);
    setQuote(elements, quotes[position + 1]);
    position++;
  }

  const moveLeft = () => {
    if (position < 1) {
      position = quotes.length - 1;
      setQuoteCounter(counter, position, quotes);
      setQuote(elements, quotes[position]);
      return;
    }
    setQuoteCounter(counter, position - 1, quotes);
    setQuote(elements, quotes[position - 1]);
    position--;
  }

  rightBtn.addEventListener("click", moveRight);
  leftBtn.addEventListener("click", moveLeft);
}

window.onload = function () {
  expandEmailLinks();

  try { addEaseAnimation(); } catch (e) { };
  try { setupTheme(); } catch (e) { };

  addTenures();

  window.addEventListener('scroll', toggleStickyNavVisibility);
  window.addEventListener('scroll', debounce(highlightNavLink, 100));
  toggleStickyNavVisibility();

  setupQuotesCarousel();
};
