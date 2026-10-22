// Juletræssange – "Mere hygge": a slow background animation behind the index.
// Nine themes (snow, paper hearts, spruce, holly, mistletoe, stars, Danish
// flags, advent wreaths and candles), each in light and dark colours. One run
// lasts 30 seconds.
'use strict';

const hygge = (() => {
  const DURATION = 30000;
  const FADE_IN = 1500;
  const FADE_OUT = 2500;

  const canvas = document.getElementById('hygge');
  const ctx = canvas.getContext('2d');
  const darkMode = matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // ---------- Graphics ----------
  // Each graphic is an SVG in a 100×100 box centred on 0,0. It is drawn once
  // into a small canvas and then copied for every falling item.

  const svg = (body) =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-50 -50 100 100">${body}</svg>`;

  const round = (n) => Math.round(n * 10) / 10;

  // A soft round glow, transparent at the edge.
  const glow = (color, opacity, radius = 50) =>
    `<defs><radialGradient id="glow"><stop offset="0" stop-color="${color}" stop-opacity="${opacity}"/>` +
    `<stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs><circle r="${radius}" fill="url(#glow)"/>`;

  // Six arms, each drawn pointing up and turned into place.
  const snowflake = (arm, tip) => (c) =>
    svg(
      `<g fill="${c.flake}" stroke="${c.flake}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">` +
        [0, 60, 120, 180, 240, 300]
          .map((a) => `<g transform="rotate(${a})"><path fill="none" d="${arm}"/>${tip ? `<circle cy="${-tip}" r="5" stroke="none"/>` : ''}</g>`)
          .join('') +
        '</g>',
    );

  // A woven Danish paper heart: a square standing on its point with a round
  // lobe on each upper side, red strips woven through white ones. A red paper
  // strip rises from between the lobes as the loop it hangs by.
  function heart(c) {
    let cells = '';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) if ((i + j) % 2 === 0) cells += `<rect x="${-24 + 16 * i}" y="${-24 + 16 * j}" width="16" height="16"/>`;
    }
    return svg(
      `<rect x="-4" y="-48" width="8" height="30" rx="3" fill="${c.red}"/>` +
        '<g transform="translate(0 9) scale(.9) rotate(45)">' +
        `<path d="M-24 24A24 24 0 0 1-24-24H24V24Z" fill="${c.white}"/>` +
        `<path d="M-24-24A24 24 0 0 1 24-24Z" fill="${c.red}"/>` +
        `<g fill="${c.red}">${cells}</g>` +
        `<path d="M-24 24A24 24 0 0 1-24-24A24 24 0 0 1 24-24V24Z" fill="none" stroke="${c.red}" stroke-width="2.5" stroke-linejoin="round"/>` +
        '</g>',
    );
  }

  // A twig bends gently from its base (x0, y0) past (cx, cy) to its tip.
  const twigPath = ([x0, y0, cx, cy, x1, y1]) => `M${x0} ${y0}Q${cx} ${cy} ${x1} ${y1}`;

  // Needles along a twig, slanting towards the tip and bending a little that
  // way. They are a bit shorter at the base, and near the end they shorten and
  // turn forward, so the twig has a soft oval outline and a round tip.
  function needles([x0, y0, cx, cy, x1, y1, len0, len1]) {
    const at = (t, a, b, c) => (1 - t) * (1 - t) * a + 2 * (1 - t) * t * b + t * t * c;
    const steps = Math.round((Math.hypot(cx - x0, cy - y0) + Math.hypot(x1 - cx, y1 - cy)) / 4.5);
    // forward: the cosine of the needle's angle to the twig.
    const needle = (x, y, ux, uy, len, forward, side) => {
      const along = (f, l) => {
        const out = Math.sqrt(1 - f * f) * side;
        return `${round(l * (f * ux - out * uy))} ${round(l * (f * uy + out * ux))}`;
      };
      return `M${round(x)} ${round(y)}q${along(Math.max(0, forward - 0.15), len / 2)} ${along(forward, len)}`;
    };
    let d = '';
    let ux = 0;
    let uy = 0;
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      const tx = (1 - t) * (cx - x0) + t * (x1 - cx);
      const ty = (1 - t) * (cy - y0) + t * (y1 - cy);
      const norm = Math.hypot(tx, ty);
      ux = tx / norm;
      uy = ty / norm;
      const len = (len0 + (len1 - len0) * t) * (1 - 0.3 * (1 - t) ** 4) * (1 - 0.45 * t ** 6);
      for (const side of [1, -1]) d += needle(at(t, x0, cx, x1), at(t, y0, cy, y1), ux, uy, len, 0.5 + 0.4 * t ** 3, side);
    }
    return d + needle(x1, y1, ux, uy, len1 * 0.6, 1, 1);
  }

  function spruce(c) {
    const twigs = [
      [2, 46, -2, 0, -2, -44, 14.5, 7.5],
      [0, 12, -16, 0, -25, -19, 11, 6.5],
      [1, -10, 13, -19, 19, -33, 10, 6.5],
    ];
    return svg(
      '<g fill="none" stroke-linecap="round">' +
        `<path stroke="${c.stem}" stroke-width="3" d="${twigs.map(twigPath).join('')}"/>` +
        `<path stroke="${c.needle}" stroke-width="2.8" d="${twigs.map(needles).join('')}"/>` +
        '</g>',
    );
  }

  const HOLLY_LEAF = 'M0 2Q-5-4-9-2Q-8-9-15-14Q-10-20-15-27Q-8-30-9-38Q-3-39 0-46Q3-39 9-38Q8-30 15-27Q10-20 15-14Q8-9 9-2Q5-4 0 2Z';

  function holly(c) {
    const leaf = (transform) =>
      `<g transform="${transform}"><path d="${HOLLY_LEAF}" fill="${c.leaf}"/>` +
      `<path d="M0 0V-40" fill="none" stroke="${c.vein}" stroke-width="1.6" stroke-linecap="round"/></g>`;
    const berry = ([x, y]) =>
      `<circle cx="${x}" cy="${y}" r="6.5" fill="${c.berry}"/><circle cx="${x - 2}" cy="${y - 2.2}" r="1.8" fill="#fff" fill-opacity=".55"/>`;
    return svg(
      '<g transform="translate(0 4) scale(1.25)">' +
        leaf('translate(0 10) rotate(-38)') +
        leaf('translate(0 10) rotate(42) scale(.9)') +
        [[-5, 14], [6, 13], [0, 6]].map(berry).join('') +
        '</g>',
    );
  }

  const MISTLETOE_LEAF = 'M0 0C-7-6-9-22-4-29C-2-32 2-32 4-29C9-22 7-6 0 0Z';

  function mistletoe(c) {
    const leaf = ([x, y, a]) => `<path transform="translate(${x} ${y}) rotate(${a})" d="${MISTLETOE_LEAF}"/>`;
    const leaves = [[-14, -12, -60], [-14, -12, -8], [14, -12, 8], [14, -12, 60], [0, 30, -70], [0, 30, 70]];
    return svg(
      `<path d="M0 44V10L-14-12M0 10L14-12" fill="none" stroke="${c.stem}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<g fill="${c.leaf}">${leaves.map(leaf).join('')}</g>` +
        `<g fill="${c.berry}" stroke="${c.edge}" stroke-width="1.2">` +
        [[-5, 12], [5, 12], [0, 5]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5"/>`).join('') +
        '</g>',
    );
  }

  function starPath(points, outer, inner) {
    const corners = [];
    for (let i = 0; i < points * 2; i++) {
      const r = i % 2 ? inner : outer;
      const a = (Math.PI * i) / points - Math.PI / 2;
      corners.push(`${round(r * Math.cos(a))} ${round(r * Math.sin(a))}`);
    }
    return `M${corners.join('L')}Z`;
  }

  const star = (c) =>
    svg(glow(c.glow, 0.45) + `<path d="${starPath(5, 30, 12.5)}" fill="${c.star}" stroke="${c.star}" stroke-width="4" stroke-linejoin="round"/>`);

  const sparkle = (c) => svg(glow(c.glow, 0.45) + `<path d="M0-40Q4-4 40 0Q4 4 0 40Q-4 4-40 0Q-4-4 0-40Z" fill="${c.star}"/>`);

  // Dannebrog, waving a little: red with a white cross set towards the pole,
  // in the flag's proportions of 12+4+21 across and 12+4+12 down (×2), but
  // with the cross a fifth wider. Turned a quarter clockwise, so it hangs
  // from its top edge like a banner.
  // wave: how far the cloth bends.
  const flag = (wave) => (c) => {
    const band = (top, bottom) =>
      `M-37 ${top}C-12 ${top - wave} 12 ${top + wave} 37 ${top}V${bottom}C12 ${bottom + wave}-12 ${bottom - wave}-37 ${bottom}Z`;
    const cloth = band(-28, 28);
    return svg(
      '<defs><clipPath id="cloth">' +
        `<path d="${cloth}"/></clipPath><linearGradient id="folds" x1="-37" x2="37" gradientUnits="userSpaceOnUse">` +
        '<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".3" stop-color="#fff" stop-opacity=".16"/>' +
        '<stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset=".78" stop-color="#000" stop-opacity=".14"/>' +
        '<stop offset="1" stop-color="#fff" stop-opacity=".08"/></linearGradient></defs>' +
        '<g transform="rotate(90)" clip-path="url(#cloth)">' +
        `<path d="${cloth}" fill="${c.red}"/>` +
        `<g fill="${c.white}"><rect x="-13.8" y="-40" width="9.6" height="80"/><path d="${band(-4.8, 4.8)}"/></g>` +
        `<path d="${cloth}" fill="url(#folds)"/>` +
        '</g>',
    );
  };

  // An advent wreath of spruce with four candles, seen from a little above.
  // Laid flat it has a bow at the front; hung, four red ribbons rise from it
  // to a bow at the top.
  const wreath = (hung) => (c) => {
    const R = 36;
    const tilt = 1 / 3; // how much the ring is squashed seen from above
    const cy = hung ? 26 : 12;
    const at = (a, r = R) => [r * Math.cos(a), cy + tilt * r * Math.sin(a)];
    const isBack = (a) => Math.sin(a) < 0;

    // Needles around the ring: out, in and up from each point, each a little
    // to one side. Directions are [radial, along, up] before the squash.
    let back = '';
    let front = '';
    for (let i = 0; i < 60; i++) {
      const a = (2 * Math.PI * i) / 60;
      const side = i % 2 ? 1 : -1;
      const [x, y] = at(a, R + 3 * Math.sin(i * 2.4));
      for (const [radial, along, up, len] of [[0.85, 0.5, 0.25, 9], [-0.75, 0.5, 0.4, 7], [0.3, 0.35, 0.9, 6]]) {
        const dx = radial * Math.cos(a) - along * side * Math.sin(a);
        const dy = radial * Math.sin(a) + along * side * Math.cos(a);
        const d = `M${round(x)} ${round(y)}l${round(len * dx)} ${round(len * (tilt * dy - 0.94 * up))}`;
        if (isBack(a)) back += d;
        else front += d;
      }
    }
    const ring = (half, needles) =>
      `<path d="M${-R * half} ${cy}A${R} ${R * tilt} 0 0 1 ${R * half} ${cy}" fill="none" stroke="${c.shade}" stroke-width="12"/>` +
      `<path d="${needles}" fill="none" stroke="${c.needle}" stroke-width="2.4" stroke-linecap="round"/>`;

    const candle = (a) => {
      const [x, y] = at(a);
      const s = isBack(a) ? 0.92 : 1;
      const top = round(y - 3 - 22 * s);
      return (
        `<circle cx="${round(x)}" cy="${round(top - 7)}" r="11" fill="url(#halo)"/>` +
        `<rect x="${round(x - 4 * s)}" y="${top}" width="${round(8 * s)}" height="${round(22 * s)}" rx="1.5" fill="url(#wax)"/>` +
        `<path d="M${round(x)} ${top}v-3" stroke="${c.wick}" stroke-width="1.2" stroke-linecap="round"/>` +
        `<path d="M${round(x)} ${top - 1.5}c-3.5-2-3-7 0-11c3 4 3.5 9 0 11Z" fill="url(#flame)"/>`
      );
    };
    // Turned a little, so no candle hides another or stands in a ribbon's way.
    const candles = (side) =>
      [12, 102, 192, 282]
        .map((deg) => (deg * Math.PI) / 180)
        .filter((a) => isBack(a) === (side === 'back'))
        .map(candle)
        .join('');

    const ribbon = (a) => {
      const [x, y] = at(a);
      return `<path d="M${round(x)} ${round(y)}L0-45" fill="none" stroke="${c.ribbon}" stroke-width="2.6"/>`;
    };
    const bow = ([x, y], size) =>
      `<g fill="${c.ribbon}" transform="translate(${round(x)} ${round(y)}) scale(${size})">` +
      '<path d="M0 0C-4-6-11-6-10 0C-11 6-4 6 0 0ZM0 0C4-6 11-6 10 0C11 6 4 6 0 0Z"/>' +
      '<path d="M-1 1L-5 9L-2 9L0 3L2 9L5 9L1 1Z"/><circle r="2.2"/></g>';

    return svg(
      '<defs>' +
        `<radialGradient id="halo"><stop offset="0" stop-color="${c.glow}" stop-opacity=".55"/><stop offset="1" stop-color="${c.glow}" stop-opacity="0"/></radialGradient>` +
        `<linearGradient id="wax"><stop offset="0" stop-color="${c.waxShade}"/><stop offset=".45" stop-color="${c.wax}"/><stop offset="1" stop-color="${c.waxShade}"/></linearGradient>` +
        '<linearGradient id="flame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff6d6"/><stop offset=".5" stop-color="#ffcf5a"/><stop offset="1" stop-color="#ff9a2e"/></linearGradient>' +
        '</defs>' +
        (hung ? ribbon((3 * Math.PI) / 2) : '') +
        ring(1, back) +
        candles('back') +
        (hung ? ribbon(0) + ribbon(Math.PI) : '') +
        ring(-1, front) +
        candles('front') +
        (hung ? ribbon(Math.PI / 2) + bow([0, -44], 0.75) : bow(at(1, R + 2), 0.7)),
    );
  };

  // ---------- Themes ----------
  // size: px, speed: px per second, sway: px from side to side, spin: turning
  // in radians per second, rock: radians of tilt back and forth while swaying,
  // noFlip: never drawn mirrored, so the flag's cross stays by the pole.
  // Smaller items are further away: slower and fainter.

  const THEMES = [
    {
      name: 'sne',
      colors: { light: { flake: '#9bb7d1' }, dark: { flake: '#e6f0fb' } },
      sprites: [
        snowflake('M0 0V-44M0-16l-10-10M0-16l10-10M0-30l-7-7M0-30l7-7'),
        snowflake('M0 0V-36M0-20l-12-8M0-20l12-8', 42),
        (c) => svg(glow(c.flake, 1, 26)),
      ],
      density: 6, size: [14, 30], speed: [22, 45], sway: 26, spin: 0.5, rock: 0,
    },
    {
      name: 'julehjerter',
      colors: { light: { red: '#c62828', white: '#ffffff' }, dark: { red: '#d94848', white: '#f4eee6' } },
      sprites: [heart],
      density: 2.6, size: [24, 40], speed: [26, 46], sway: 30, spin: 0, rock: 0.45, upright: true,
    },
    {
      name: 'grankviste',
      colors: { light: { needle: '#2f6e45', stem: '#6b4a2e' }, dark: { needle: '#5aa874', stem: '#8d6e4f' } },
      sprites: [spruce],
      density: 2, size: [40, 64], speed: [24, 42], sway: 30, spin: 0.12, rock: 0.4,
    },
    {
      name: 'kristtorn',
      colors: {
        light: { leaf: '#2a6b40', vein: '#5f9e74', berry: '#c62828' },
        dark: { leaf: '#3f9160', vein: '#7cc493', berry: '#e04848' },
      },
      sprites: [holly],
      density: 2.2, size: [34, 52], speed: [24, 42], sway: 28, spin: 0.15, rock: 0.4,
    },
    {
      name: 'mistelten',
      colors: {
        light: { leaf: '#6f8f3a', stem: '#5e7a30', berry: '#ffffff', edge: '#8f8a72' },
        dark: { leaf: '#a9c46c', stem: '#8eaa58', berry: '#f6f3e7', edge: '#d6d0b8' },
      },
      sprites: [mistletoe],
      density: 2.2, size: [38, 58], speed: [24, 42], sway: 28, spin: 0.15, rock: 0.4,
    },
    {
      name: 'stjerner',
      colors: { light: { star: '#d0a024', glow: '#e8c35a' }, dark: { star: '#f3d06e', glow: '#f3d06e' } },
      sprites: [star, sparkle],
      density: 5, size: [12, 26], speed: [12, 26], sway: 12, spin: 0.15, rock: 0, upright: true, twinkle: true,
    },
    {
      name: 'dannebrog',
      colors: { light: { red: '#c8102e', white: '#ffffff' }, dark: { red: '#d42a3c', white: '#f4eee6' } },
      sprites: [flag(6), flag(-5)],
      density: 2.4, size: [26, 44], speed: [24, 42], sway: 30, spin: 0, rock: 0.3, upright: true, noFlip: true,
    },
    {
      name: 'adventskrans',
      colors: {
        light: { needle: '#2f6e45', shade: '#24563a', wax: '#c0392b', waxShade: '#8f2a20', wick: '#2b1d12', ribbon: '#c62828', glow: '#ffb04a' },
        dark: { needle: '#5aa874', shade: '#356f4b', wax: '#efe6d2', waxShade: '#b8ad96', wick: '#3a2a1a', ribbon: '#e04848', glow: '#ffba5c' },
      },
      sprites: [wreath(false), wreath(true)],
      density: 1.3, size: [46, 76], speed: [22, 38], sway: 26, spin: 0, rock: 0.18, upright: true,
    },
    {
      name: 'stearinlys',
      colors: {
        light: { body: '#c0392b', shade: '#8f2a20', wick: '#2b1d12', glow: '255 170 70', glowAlpha: 0.28 },
        dark: { body: '#efe6d2', shade: '#b8ad96', wick: '#3a2a1a', glow: '255 186 92', glowAlpha: 0.32 },
      },
      candles: true,
    },
  ];

  const palette = (theme) => theme.colors[darkMode.matches ? 'dark' : 'light'];

  // ---------- Running ----------

  let run = null;
  let lastTheme = null;

  function fitCanvas(r) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (r.w === w && r.h === h && r.dpr === dpr) return;
    Object.assign(r, { w, h, dpr });
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
  }

  function rasterise(markup, size) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const sprite = document.createElement('canvas');
        sprite.width = sprite.height = size;
        sprite.getContext('2d').drawImage(img, 0, 0, size, size);
        resolve(sprite);
      };
      img.onerror = reject;
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
    });
  }

  function loadSprites(r) {
    const size = Math.ceil(r.theme.size[1] * r.dpr);
    return Promise.all(r.theme.sprites.map((draw) => rasterise(draw(palette(r.theme)), size)));
  }

  // Puts an item at a random depth, anywhere on screen or just above it.
  function place(item, r, anywhere) {
    const { theme } = r;
    const depth = Math.random();
    const between = ([a, b]) => a + (b - a) * depth;
    item.size = between(theme.size);
    item.speed = between(theme.speed);
    item.alpha = 0.5 + 0.5 * depth;
    item.x = Math.random() * r.w;
    item.y = anywhere ? Math.random() * (r.h + item.size) - item.size / 2 : -item.size / 2 - Math.random() * 40;
    item.sway = theme.sway * (0.5 + Math.random() * 0.5);
    item.swayRate = 0.25 + Math.random() * 0.35;
    item.phase = Math.random() * Math.PI * 2;
    item.angle = theme.upright ? (Math.random() - 0.5) * 0.6 : Math.random() * Math.PI * 2;
    item.spin = (Math.random() - 0.5) * 2 * theme.spin;
    item.flip = !theme.noFlip && Math.random() < 0.5 ? -1 : 1;
    item.sprite = Math.floor(Math.random() * theme.sprites.length);
    item.twinkleRate = 1.5 + Math.random() * 1.5;
    return item;
  }

  function populate(r) {
    if (r.theme.candles) {
      const count = Math.max(4, Math.min(10, Math.round(r.w / 90)));
      r.items = Array.from({ length: count }, (_, i) => ({
        slot: i,
        jitter: (Math.random() - 0.5) * 0.4,
        width: 14 + Math.random() * 8,
        height: 0.08 + Math.random() * 0.1,
        phase: Math.random() * 100,
      }));
    } else {
      const count = Math.max(6, Math.min(50, Math.round((r.theme.density * r.w * r.h) / 100000)));
      r.items = Array.from({ length: count }, () => place({}, r, true));
    }
  }

  function update(r, dt) {
    for (const item of r.items) {
      item.y += item.speed * dt;
      item.angle += item.spin * dt;
      if (item.y - item.size / 2 > r.h) place(item, r, false);
    }
  }

  function drawFalling(r, alpha, t) {
    const { theme, dpr } = r;
    for (const item of r.items) {
      const wave = t * item.swayRate + item.phase;
      const x = item.x + item.sway * Math.sin(wave);
      const angle = item.angle + theme.rock * Math.cos(wave);
      const cos = Math.cos(angle) * dpr;
      const sin = Math.sin(angle) * dpr;
      const twinkle = theme.twinkle ? 0.6 + 0.4 * Math.sin(t * item.twinkleRate + item.phase * 3) : 1;
      ctx.globalAlpha = alpha * item.alpha * twinkle;
      ctx.setTransform(cos * item.flip, sin * item.flip, -sin, cos, x * dpr, item.y * dpr);
      ctx.drawImage(r.sprites[item.sprite], -item.size / 2, -item.size / 2, item.size, item.size);
    }
  }

  // A row of candles standing on the bottom edge, each with a flickering flame.
  function drawCandles(r, alpha, t, still) {
    const c = palette(r.theme);
    const slot = r.w / r.items.length;
    ctx.setTransform(r.dpr, 0, 0, r.dpr, 0, 0);

    const candles = r.items.map((item) => {
      const flicker = still ? 1 : 1 + 0.07 * Math.sin(t * 9 + item.phase) + 0.05 * Math.sin(t * 15.3 + item.phase * 2);
      return {
        x: slot * (item.slot + 0.5 + item.jitter),
        top: r.h - Math.max(48, Math.min(150, r.h * item.height)),
        width: item.width,
        flicker,
        lean: still ? 0 : 1.4 * Math.sin(t * 2.7 + item.phase),
      };
    });

    for (const { x, top, flicker } of candles) {
      const y = top - 14;
      const radius = 80 * (0.94 + 0.06 * flicker);
      const halo = ctx.createRadialGradient(x, y, 0, x, y, radius);
      halo.addColorStop(0, `rgb(${c.glow} / ${c.glowAlpha})`);
      halo.addColorStop(1, `rgb(${c.glow} / 0)`);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = halo;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    for (const { x, top, width, flicker, lean } of candles) {
      ctx.globalAlpha = alpha * 0.75;
      const body = ctx.createLinearGradient(x - width / 2, 0, x + width / 2, 0);
      body.addColorStop(0, c.shade);
      body.addColorStop(0.45, c.body);
      body.addColorStop(1, c.shade);
      ctx.fillStyle = body;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - width / 2, top, width, r.h - top + 8, [3, 3, 0, 0]);
      else ctx.rect(x - width / 2, top, width, r.h - top + 8);
      ctx.fill();

      ctx.strokeStyle = c.wick;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x + lean * 0.3, top - 6);
      ctx.stroke();

      const base = top - 3;
      const height = 20 * flicker;
      const half = 5.5;
      const flame = ctx.createLinearGradient(0, base, 0, base - height);
      flame.addColorStop(0, '#a9c8ff');
      flame.addColorStop(0.2, '#fff6d6');
      flame.addColorStop(0.6, '#ffcf5a');
      flame.addColorStop(1, '#ff9a2e');
      ctx.globalAlpha = alpha;
      ctx.fillStyle = flame;
      ctx.beginPath();
      ctx.moveTo(x, base + 2);
      ctx.bezierCurveTo(x - half * 1.3, base - height * 0.15, x - half * 0.6, base - height * 0.65, x + lean, base - height);
      ctx.bezierCurveTo(x + half * 0.6, base - height * 0.65, x + half * 1.3, base - height * 0.15, x, base + 2);
      ctx.fill();
    }
  }

  function draw(r, alpha, still) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const t = r.elapsed / 1000;
    if (r.theme.candles) drawCandles(r, alpha, t, still);
    else drawFalling(r, alpha, t);
  }

  function frame(now) {
    const r = run;
    if (!r) return;
    // Time only counts while the page is showing, and never jumps.
    const dt = Math.min(now - (r.prev ?? now), 100);
    r.prev = now;
    r.elapsed += dt;
    if (r.elapsed >= DURATION) {
      stop();
      return;
    }
    update(r, dt / 1000);
    draw(r, Math.min(1, r.elapsed / FADE_IN, (DURATION - r.elapsed) / FADE_OUT), false);
    r.frame = requestAnimationFrame(frame);
  }

  // Starts a run with the named theme, or a random one other than the last.
  // A run that is already going is stopped first.
  async function start(name) {
    stop();
    const choices = THEMES.filter((t) => (name ? t.name === name : t !== lastTheme));
    const theme = choices[Math.floor(Math.random() * choices.length)];
    if (!theme) return;
    lastTheme = theme;

    const r = { theme, elapsed: 0, items: [], sprites: [], frame: 0, timer: 0 };
    run = r;
    fitCanvas(r);
    if (!theme.candles) {
      try {
        r.sprites = await loadSprites(r);
      } catch {
        if (run === r) stop();
        return;
      }
      if (run !== r) return;
    }
    populate(r);
    canvas.hidden = false;

    // With reduced motion the scene stands still for the same 30 seconds.
    if (reducedMotion.matches) {
      draw(r, 1, true);
      r.timer = setTimeout(stop, DURATION);
    } else {
      r.frame = requestAnimationFrame(frame);
    }
  }

  function stop() {
    if (!run) return;
    cancelAnimationFrame(run.frame);
    clearTimeout(run.timer);
    run = null;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.hidden = true;
  }

  window.addEventListener('resize', () => {
    if (!run) return;
    fitCanvas(run);
    if (reducedMotion.matches) draw(run, 1, true);
  });

  // Follow a switch between light and dark mode during a run.
  darkMode.addEventListener('change', async () => {
    const r = run;
    if (!r) return;
    if (!r.theme.candles) {
      try {
        const sprites = await loadSprites(r);
        if (run === r) r.sprites = sprites;
      } catch {}
    }
    if (run === r && reducedMotion.matches) draw(r, 1, true);
  });

  return { start, stop };
})();
