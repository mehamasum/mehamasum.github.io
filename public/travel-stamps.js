// Passport stamps for travel.html, in the style of the Wise app's travel stamps:
// a badge (shield, house, arch or tall card) with a thick double outline, a chunky
// country-code banner, a scene with the place's line-art landmark, halftone ground and
// a sun or moon, and the place name and visit date printed under the badge.
//
// TravelStamps.render(city, countryName) returns the HTML for one stamp. The landmark is
// loaded from stamps/<slug>.svg and applied as a CSS mask so it takes the stamp's ink.
(function () {
  var ISO3 = {
    BD: 'BGD', IN: 'IND', JP: 'JPN', TR: 'TUR', SA: 'SAU', AE: 'ARE', MY: 'MYS', TH: 'THA',
    FR: 'FRA', DE: 'DEU', NL: 'NLD', BE: 'BEL', LU: 'LUX', ES: 'ESP', IT: 'ITA', VA: 'VAT',
    GR: 'GRC', CZ: 'CZE', HU: 'HUN', AT: 'AUT', CH: 'CHE', SK: 'SVK', SI: 'SVN', HR: 'HRV',
    'GB-ENG': 'GBR', 'GB-SCT': 'GBR', FI: 'FIN', US: 'USA', MX: 'MEX'
  };

  var INKS = ['#7f9a52', '#5b78d0', '#d9475a', '#4f97c0', '#8f5ccc', '#c9930f', '#2f9471', '#de6a33', '#c04f8a'];
  var SHAPES = ['shield', 'house', 'arch', 'card'];
  var SKIES = ['sun', 'moon', 'none'];

  // Badge geometry in a 100x120 box; the name and date sit below it, so the whole SVG is 100x148.
  // icon = [x, y, w, h] of the landmark in badge units; ground = top of the halftone hill.
  var BADGES = {
    shield: {
      outer: 'M6 4H94V76C94 99 74 113 50 117C26 113 6 99 6 76Z',
      inner: 'M11 9H89V76C89 95 72 107 50 111C28 107 11 95 11 76Z',
      banner: 'top', line: 33, codeY: 28.5,
      icon: [17, 35, 66, 54], ground: 84, sunY: 44
    },
    house: {
      outer: 'M50 3L95 26V117H5V26Z',
      inner: 'M50 9L90 29V112H10V29Z',
      banner: 'bottom', line: 88, codeY: 107,
      icon: [17, 24, 66, 60], ground: 76, sunY: 38
    },
    arch: {
      outer: 'M5 117V48A45 45 0 0 1 95 48V117Z',
      inner: 'M10 112V48A40 40 0 0 1 90 48V112Z',
      banner: 'bottom', line: 88, codeY: 107,
      icon: [17, 22, 66, 62], ground: 76, sunY: 34
    },
    card: {
      outer: 'M13 3H87A8 8 0 0 1 95 11V109A8 8 0 0 1 87 117H13A8 8 0 0 1 5 109V11A8 8 0 0 1 13 3Z',
      inner: 'M15 8H85A5 5 0 0 1 90 13V107A5 5 0 0 1 85 112H15A5 5 0 0 1 10 107V13A5 5 0 0 1 15 8Z',
      banner: 'bottom', line: 88, codeY: 107,
      icon: [17, 18, 66, 66], ground: 76, sunY: 20
    }
  };

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function slug(name) {
    return name.normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Month and year only, same as the map: "2025-11-21" -> "Nov 2025", "2026" -> "2026".
  function stampDate(date) {
    if (!date) return '';
    var parts = String(date).split('-');
    var month = MONTHS[parseInt(parts[1], 10) - 1];
    return month ? month + ' ' + parts[0] : parts[0];
  }

  // A sun or a crescent moon with a star, in a top corner of the scene.
  function sky(kind, b, flip) {
    var x = flip ? 25 : 75;
    var y = b.sunY;
    if (kind === 'sun') {
      return '<circle cx="' + x + '" cy="' + y + '" r="5.5" fill="currentColor" stroke="none"/>';
    }
    if (kind === 'moon') {
      var sx = flip ? x + 10 : x - 10;
      return '<path d="M' + (x + 1) + ' ' + (y - 6) + 'a6 6 0 1 0 5 9a4.8 4.8 0 1 1 -5 -9z" fill="currentColor" stroke="none"/>' +
        '<path d="M' + sx + ' ' + (y - 1) + 'l1 2.2 2.3.3-1.7 1.5.5 2.3-2.1-1.1-2.1 1.1.5-2.3-1.7-1.5 2.3-.3z" fill="currentColor" stroke="none"/>';
    }
    return '';
  }

  var counter = 0;

  function render(city, countryName) {
    var h = hash(city.name + '|' + city.date);
    var shapeName = SHAPES[h % SHAPES.length];
    var b = BADGES[shapeName];
    var ink = INKS[hash(city.name) % INKS.length];
    var skyKind = SKIES[(h >>> 4) % SKIES.length];
    var flip = ((h >>> 8) & 1) === 1;
    var code = ISO3[city.country] || city.country;
    var date = stampDate(city.date);
    var id = 'stp' + (counter++);
    var label = city.name + ', ' + countryName + (date ? ', ' + date : '');
    // Shrink long names (e.g. "PLITVIČKA JEZERA") to fit the stamp's width.
    var nameSize = Math.min(11, 100 / (city.name.length * 0.62)).toFixed(2);

    // Halftone hill under the landmark, clipped to the inside of the badge.
    var g = b.ground;
    var bottom = b.banner === 'top' ? 120 : b.line;
    var hill = '<path d="M0 ' + (g + 6) + 'Q25 ' + (g - 2) + ' 50 ' + (g + 3) + 'T100 ' + (g + 1) +
      'V' + bottom + 'H0Z" fill="url(#' + id + 'd)" stroke="none"/>';

    var svg = '' +
      '<svg viewBox="0 0 100 148" aria-hidden="true">' +
      '<defs>' +
      '<pattern id="' + id + 'd" width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">' +
      '<circle cx="1.6" cy="1.6" r="0.8" fill="currentColor"/></pattern>' +
      '<clipPath id="' + id + 'c"><path d="' + b.inner + '"/></clipPath>' +
      '</defs>' +
      '<g fill="none" stroke="currentColor" stroke-linejoin="round">' +
      '<g clip-path="url(#' + id + 'c)">' + hill + sky(skyKind, b, flip) + '</g>' +
      '<path d="' + b.outer + '" stroke-width="3"/>' +
      '<path d="' + b.inner + '" stroke-width="1.6"/>' +
      '<path d="M' + (b.banner === 'top' ? 11 : 10) + ' ' + b.line + 'H' + (b.banner === 'top' ? 89 : 90) + '" stroke-width="2.4"/>' +
      '</g>' +
      '<text class="stamp-code" x="50" y="' + b.codeY + '" text-anchor="middle" fill="currentColor">' +
      '<tspan class="stamp-dot">•</tspan> ' + esc(code) + ' <tspan class="stamp-dot">•</tspan></text>' +
      '<text class="stamp-name" x="50" y="133" text-anchor="middle" fill="currentColor" font-size="' + nameSize + '">' + esc(city.name.toUpperCase()) + '</text>' +
      (date ? '<text class="stamp-date" x="50" y="145" text-anchor="middle" fill="currentColor">' + esc(date) + '</text>' : '') +
      '</svg>';

    var icon = b.icon;
    var iconUrl = 'stamps/' + slug(city.name) + '.svg';
    // The icon box is in badge units; convert to percent of the 100x148 element.
    var iconStyle = 'left:' + icon[0] + '%;top:' + (icon[1] / 148 * 100).toFixed(2) + '%;' +
      'width:' + icon[2] + '%;height:' + (icon[3] / 148 * 100).toFixed(2) + '%;' +
      '-webkit-mask-image:url(' + iconUrl + ');mask-image:url(' + iconUrl + ')';

    return '' +
      '<span class="stamp stamp-' + shapeName + '" style="--ink:' + ink + '" role="img" aria-label="' + esc(label) + '">' +
      svg +
      '<span class="stamp-icon" style="' + iconStyle + '"></span>' +
      '</span>';
  }

  window.TravelStamps = { render: render, slug: slug, stampDate: stampDate };
})();
