// Passport view for travel.html: a Map / Passport switch and a passport book that opens
// top-to-bottom, with 4 stamps per page in date order. Pages turn by clicking a page,
// the prev/next buttons, arrow keys or swiping. Clicking a stamp shows the place on the map.
//
// Relies on globals from travel.html: cities, getCountryMeta, map, setActiveCity, TravelStamps.
(function () {
  var STAMPS_PER_PAGE = 4;
  // Centre of each stamp slot on a page, in percent: four columns, staggered up and down
  // so the stamps look scattered like real entry stamps without overlapping.
  var SLOT_POS = [[17, 38], [39, 62], [61, 37], [83, 61]];

  var body = document.body;
  var viewSwitch = document.getElementById('view-switch');
  var stage = document.getElementById('book-stage');
  var book = document.getElementById('book');
  var prevBtn = document.getElementById('passport-prev');
  var nextBtn = document.getElementById('passport-next');
  var statusEl = document.getElementById('passport-status');

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // ---------- Content ----------

  var stamped = cities.filter(function (c) { return c.name !== 'Home'; })
    .map(function (c, i) { return { city: c, i: i }; })
    .sort(function (a, b) {
      var da = a.city.date ? String(a.city.date) : null;
      var db = b.city.date ? String(b.city.date) : null;
      if (da !== db) {
        if (!da) return 1;
        if (!db) return -1;
        return da < db ? -1 : 1;
      }
      return a.i - b.i;
    })
    .map(function (x) { return x.city; });

  var countryCount = Object.keys(stamped.reduce(function (acc, c) { acc[c.country] = true; return acc; }, {})).length;

  // Bangladesh flag: 10:6 bottle green with a red disc set slightly toward the hoist.
  var FLAG = '<svg class="cover-flag" viewBox="0 0 100 60" role="img" aria-label="Flag of Bangladesh">' +
    '<rect width="100" height="60" fill="#006a4e"/><circle cx="45" cy="30" r="20" fill="#f42a41"/></svg>';

  function coverFront() {
    return '<div class="cover-title">PASSPORT</div>' + FLAG +
      '<div class="cover-sub">TRAVEL LOG · MEHA MASUM</div>' +
      '<div class="cover-hint">Tap to open</div>';
  }

  function coverBack() {
    return '<div class="cover-sub">' + stamped.length + ' STAMPS · ' + countryCount + ' COUNTRIES</div>' +
      '<div class="cover-hint">Tap to go back</div>';
  }

  function head(left, right) {
    return '<div class="page-head"><span>' + left + '</span><span>' + (right || 'mehamasum.github.io') + '</span></div>';
  }

  function stampPage(list, pageNo, offset) {
    var html = head('Visas', list.length && list[0].date ? String(list[0].date).slice(0, 4) : '');
    for (var s = 0; s < STAMPS_PER_PAGE; s++) {
      var pos = SLOT_POS[s];
      var city = list[s];
      if (!city) {
        html += '<div class="slot slot-empty" style="left:' + pos[0] + '%;top:' + pos[1] + '%"></div>';
        continue;
      }
      var h = hash(city.name + city.date);
      var rot = (h % 15) - 7;
      var dx = ((h >>> 5) % 3) - 1;
      var dy = ((h >>> 9) % 7) - 3;
      html += '<div class="slot" style="left:' + (pos[0] + dx) + '%;top:' + (pos[1] + dy) + '%;--rot:' + rot + 'deg"' +
        ' data-stamp="' + (offset + s) + '">' + TravelStamps.render(city, getCountryMeta(city.country).name) + '</div>';
    }
    return html + '<div class="page-num">' + pageNo + '</div>';
  }

  function endPage(pageNo) {
    return '<div class="end-page">More stamps to come</div><div class="page-num">' + pageNo + '</div>';
  }

  // Pages in reading order. Leaf k shows pages[2k] on its front (lower page) and
  // pages[2k+1] on its back (upper page once turned).
  var pages = [{ cls: 'cover', html: coverFront() }];
  for (var p = 0; p < stamped.length; p += STAMPS_PER_PAGE) {
    pages.push({ cls: 'paper', html: stampPage(stamped.slice(p, p + STAMPS_PER_PAGE), pages.length, p) });
  }
  // One spare page of empty slots, then pad so the inside back cover lands on a front.
  pages.push({ cls: 'paper', html: stampPage([], pages.length, 0) });
  if (pages.length % 2 === 1) pages.push({ cls: 'paper', html: stampPage([], pages.length, 0) });
  pages.push({ cls: 'paper', html: endPage(pages.length) });
  pages.push({ cls: 'cover', html: coverBack() });

  var leafCount = pages.length / 2;
  var innerPages = pages.length - 2;

  // ---------- Book DOM ----------

  var leaves = [];
  for (var k = 0; k < leafCount; k++) {
    var leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.innerHTML =
      '<div class="face face-front ' + pages[2 * k].cls + '">' + pages[2 * k].html + '</div>' +
      '<div class="face face-back ' + pages[2 * k + 1].cls + '">' + pages[2 * k + 1].html + '</div>';
    leaf.dataset.index = k;
    book.appendChild(leaf);
    leaves.push(leaf);
  }

  // Stamps open on the map.
  book.querySelectorAll('.slot[data-stamp] .stamp').forEach(function (el) {
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', el.getAttribute('aria-label') + ', show on map');
  });

  // ---------- State ----------

  var current = 1; // number of turned leaves; 0 = closed on the front cover

  // `turning` is the leaf being turned: it stays on top of both stacks until it lands.
  function render(turning) {
    stage.classList.toggle('at-cover', current === 0);
    stage.classList.toggle('at-back', current === leafCount);

    leaves.forEach(function (leaf, i) {
      var flipped = i < current;
      leaf.classList.toggle('is-flipped', flipped);
      leaf.style.zIndex = i === turning ? leafCount + 5 : (flipped ? i + 1 : leafCount - i);

      var front = leaf.children[0];
      var back = leaf.children[1];
      var frontShown = i === current;
      var backShown = i === current - 1;
      front.inert = !frontShown;
      back.inert = !backShown;
    });

    if (turning !== undefined) {
      var leaf = leaves[turning];
      var settle = function () {
        leaf.removeEventListener('transitionend', onEnd);
        if (leaf.style.zIndex === String(leafCount + 5)) {
          leaf.style.zIndex = turning < current ? turning + 1 : leafCount - turning;
        }
      };
      var onEnd = function (e) { if (e.target === leaf) settle(); };
      leaf.addEventListener('transitionend', onEnd);
      // Fallback for when no transition runs (e.g. reduced motion).
      setTimeout(settle, 1000);
    }

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === leafCount;
    if (current === 0) statusEl.textContent = 'Cover';
    else if (current === leafCount) statusEl.textContent = 'Back cover';
    else statusEl.textContent = 'Pages ' + (2 * current - 1) + '–' + Math.min(2 * current, innerPages) + ' of ' + innerPages;
  }

  function next() {
    if (current >= leafCount) return;
    current += 1;
    render(current - 1);
  }

  function prev() {
    if (current <= 0) return;
    current -= 1;
    render(current);
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  var suppressClick = false;

  book.addEventListener('click', function (e) {
    if (suppressClick) return;
    var stampEl = e.target.closest('.slot[data-stamp]');
    if (stampEl) {
      showOnMap(stamped[+stampEl.dataset.stamp]);
      return;
    }
    var leaf = e.target.closest('.leaf');
    if (!leaf) return;
    var i = +leaf.dataset.index;
    if (i === current) next();
    else if (i === current - 1) prev();
  });

  book.addEventListener('keydown', function (e) {
    var stampEl = e.target.closest('.slot[data-stamp]');
    if (stampEl && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      showOnMap(stamped[+stampEl.dataset.stamp]);
    }
  });

  // Swipe up / left = next page, down / right = previous.
  var start = null;
  stage.addEventListener('pointerdown', function (e) {
    start = { x: e.clientX, y: e.clientY };
  });
  stage.addEventListener('pointerup', function (e) {
    if (!start) return;
    var dx = e.clientX - start.x;
    var dy = e.clientY - start.y;
    start = null;
    var d = Math.abs(dx) > Math.abs(dy) ? dx : dy;
    if (Math.abs(d) < 40) return;
    suppressClick = true;
    setTimeout(function () { suppressClick = false; }, 0);
    if (d < 0) next(); else prev();
  });

  document.addEventListener('keydown', function (e) {
    if (!body.classList.contains('is-passport') || e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); next(); }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); prev(); }
  });

  // ---------- View switch ----------

  function setView(view) {
    body.classList.toggle('is-passport', view === 'passport');
    Array.from(viewSwitch.children).forEach(function (b) {
      var on = b.dataset.view === view;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    try { localStorage.setItem('travel-view', view); } catch (err) {}
    if (history.replaceState) history.replaceState(null, '', view === 'passport' ? '#passport' : location.pathname + location.search);
  }

  function showOnMap(city) {
    setView('map');
    map.flyTo(city.coordinates, Math.max(map.getZoom(), 10));
    city.marker.openPopup();
    setActiveCity(city);
  }

  viewSwitch.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-view]');
    if (btn) setView(btn.dataset.view);
  });

  var storedView = null;
  try { storedView = localStorage.getItem('travel-view'); } catch (err) {}
  setView(location.hash === '#passport' ? 'passport' : (storedView === 'passport' ? 'passport' : 'map'));
  render();
})();
