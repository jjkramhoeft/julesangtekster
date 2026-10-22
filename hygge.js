// Juletræssange – "Mere hygge": a slow background animation behind the index.
// Seven themes (snow, paper hearts, spruce, holly, mistletoe, stars and
// candles), each in light and dark colours. One run lasts 30 seconds.
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
  // lobe on each upper side, red strips woven through white ones.
  function heart(c) {
    let cells = '';
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) if ((i + j) % 2 === 0) cells += `<rect x="${-24 + 16 * i}" y="${-24 + 16 * j}" width="16" height="16"/>`;
    }
    return svg(
      '<g transform="translate(0 4) rotate(45)">' +
        `<path d="M-24 24A24 24 0 0 1-24-24H24V24Z" fill="${c.white}"/>` +
        `<path d="M-24-24A24 24 0 0 1 24-24Z" fill="${c.red}"/>` +
        `<g fill="${c.red}">${cells}</g>` +
        `<path d="M-24 24A24 24 0 0 1-24-24A24 24 0 0 1 24-24V24Z" fill="none" stroke="${c.red}" stroke-width="2.5" stroke-linejoin="round"/>` +
        '</g>',
    );
  }

  // Needles along a twig from its base to its tip, slanting towards the tip.
  function needles([x0, y0, x1, y1, len0, len1]) {
    const length = Math.hypot(x1 - x0, y1 - y0);
    const ux = (x1 - x0) / length;
    const uy = (y1 - y0) / length;
    let d = '';
    for (let s = 3; s <= length; s += 4.5) {
      const len = len0 + ((len1 - len0) * s) / length;
      for (const side of [1, -1]) {
        const dx = len * (0.55 * ux - 0.83 * uy * side);
        const dy = len * (0.55 * uy + 0.83 * ux * side);
        d += `M${round(x0 + ux * s)} ${round(y0 + uy * s)}l${round(dx)} ${round(dy)}`;
      }
    }
    return d;
  }

  function spruce(c) {
    const twigs = [
      [2, 46, -2, -46, 13, 6],
      [0, 12, -26, -20, 10, 5],
      [1, -10, 20, -34, 9, 5],
    ];
    return svg(
      '<g fill="none" stroke-linecap="round">' +
        `<path stroke="${c.stem}" stroke-width="3" d="${twigs.map(([x0, y0, x1, y1]) => `M${x0} ${y0}L${x1} ${y1}`).join('')}"/>` +
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

  // ---------- Themes ----------
  // size: px, speed: px per second, sway: px from side to side, spin: turning
  // in radians per second, rock: radians of tilt back and forth while swaying.
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
    item.flip = Math.random() < 0.5 ? -1 : 1;
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
