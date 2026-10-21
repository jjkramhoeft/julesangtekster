// Julesange – navigation, settings and wake lock.
'use strict';

const FONT_SIZES = [18, 20, 22, 24, 26, 29, 32, 36, 40, 45, 50];
const DEFAULT_FONT_SIZE = 24;

const KEYS = {
  fontSize: 'julesange.fontSize',
  theme: 'julesange.theme',
  program: 'julesange.program',
  short: 'julesange.short',
};

// localStorage can be unavailable (private mode, blocked storage), so every
// access is wrapped and falls back to the default.
const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  },
};

const $ = (id) => document.getElementById(id);

const state = {
  songs: [],
  byId: new Map(),
  cache: new Map(),
  tab: 'all',
  query: '',
  current: null,
  wakeLock: null,
};

// ---------- Data ----------

async function loadIndex() {
  const res = await fetch('songs/index.json');
  state.songs = await res.json();
  state.byId = new Map(state.songs.map((s) => [s.id, s]));
}

function loadSong(id) {
  if (!state.cache.has(id)) {
    const promise = fetch(`songs/${id}.json`).then((res) => {
      if (!res.ok) throw new Error(`Kunne ikke hente ${id}`);
      return res.json();
    });
    promise.catch(() => state.cache.delete(id));
    state.cache.set(id, promise);
  }
  return state.cache.get(id);
}

// ---------- Programme ----------

function program() {
  return store.get(KEYS.program, []).filter((id) => state.byId.has(id));
}

function setProgram(ids) {
  store.set(KEYS.program, ids);
  const count = ids.length;
  $('program-count').textContent = count ? String(count) : '';
}

function toggleInProgram(id) {
  const ids = program();
  setProgram(ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]);
}

function moveInProgram(id, delta) {
  const ids = program();
  const i = ids.indexOf(id);
  const j = i + delta;
  if (i < 0 || j < 0 || j >= ids.length) return;
  [ids[i], ids[j]] = [ids[j], ids[i]];
  setProgram(ids);
}

// Songs that prev/next walk through. Inside tonight's programme we stay in
// the programme; otherwise we go through all songs by number.
function navOrder(id) {
  const ids = program();
  if (ids.length > 1 && ids.includes(id)) return { ids, inProgram: true };
  return { ids: state.songs.map((s) => s.id), inProgram: false };
}

// ---------- Index view ----------

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[’'`´]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function matches(song, query) {
  if (!query) return true;
  if (/^\d+$/.test(query)) return String(song.idNumber) === query;
  const hay = normalize(`${song.title} ${song.firstLine} ${song.author}`);
  return normalize(query).split(' ').every((word) => hay.includes(word));
}

function starIcon() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('aria-hidden', 'true');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'm12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8z');
  svg.append(path);
  return svg;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderList() {
  const list = $('song-list');
  const ids = program();
  const inProgramTab = state.tab === 'program';
  const songs = (inProgramTab ? ids.map((id) => state.byId.get(id)) : state.songs).filter((s) =>
    matches(s, state.query),
  );

  list.replaceChildren(
    ...songs.map((song) => {
      const item = el('li', 'song-item');

      const link = el('a', 'song-link');
      link.href = `#/sang/${song.id}`;
      link.append(el('span', 'num', String(song.idNumber)), el('span', 'title', song.title));
      link.append(el('span', 'meta', song.author));
      item.append(link);

      const tools = el('div', 'song-tools');
      if (inProgramTab && !state.query) {
        const pos = ids.indexOf(song.id);
        const up = el('button', 'move-button', '↑');
        up.type = 'button';
        up.disabled = pos === 0;
        up.setAttribute('aria-label', `Flyt ${song.title} op`);
        up.addEventListener('click', () => {
          moveInProgram(song.id, -1);
          renderList();
        });
        const down = el('button', 'move-button', '↓');
        down.type = 'button';
        down.disabled = pos === ids.length - 1;
        down.setAttribute('aria-label', `Flyt ${song.title} ned`);
        down.addEventListener('click', () => {
          moveInProgram(song.id, 1);
          renderList();
        });
        tools.append(up, down);
      }
      const star = el('button', 'star-button');
      star.type = 'button';
      const starred = ids.includes(song.id);
      star.setAttribute('aria-pressed', String(starred));
      star.setAttribute('aria-label', starred ? `Fjern ${song.title} fra programmet` : `Sæt ${song.title} på programmet`);
      star.append(starIcon());
      star.addEventListener('click', () => {
        toggleInProgram(song.id);
        renderList();
      });
      tools.append(star);
      item.append(tools);
      return item;
    }),
  );

  const empty = $('list-empty');
  if (songs.length) {
    empty.hidden = true;
  } else {
    empty.hidden = false;
    empty.textContent =
      inProgramTab && !ids.length
        ? 'Programmet er tomt. Tryk på stjernen ud for en sang for at sætte den på aftenens program.'
        : 'Ingen sange passer til søgningen.';
  }
}

function setTab(tab) {
  state.tab = tab;
  $('tab-all').setAttribute('aria-pressed', String(tab === 'all'));
  $('tab-program').setAttribute('aria-pressed', String(tab === 'program'));
  renderList();
}

// ---------- Song view ----------

// Repeat marks in the data are written "//: … ://".
function renderLine(text, className = 'line') {
  const p = el('p', className);
  for (const part of text.split(/(\/\/:|:\/\/)/)) {
    if (part === '//:') p.append(el('span', 'repeat-sign', '‖: '));
    else if (part === '://') p.append(el('span', 'repeat-sign', ' :‖'));
    else if (part) p.append(part);
  }
  return p;
}

function credit(song) {
  const author = song.year && !song.translator ? `${song.author}, ${song.year}` : song.author;
  if (!song.translator) return author === 'Traditionel' ? 'Traditionel' : `Tekst: ${author}`;
  return `${song.author} · Dansk tekst: ${song.translator}${song.year ? `, ${song.year}` : ''}`;
}

function describeSkipped(numbers) {
  if (numbers.length === 1) return `Vers ${numbers[0]} springes over i den korte udgave`;
  const consecutive = numbers.every((n, i) => i === 0 || n === numbers[i - 1] + 1);
  const list = consecutive
    ? `${numbers[0]}–${numbers[numbers.length - 1]}`
    : `${numbers.slice(0, -1).join(', ')} og ${numbers[numbers.length - 1]}`;
  return `Vers ${list} springes over i den korte udgave`;
}

function renderVerses(song) {
  const container = $('verses');
  const useShort = Boolean(song.shortVersion) && store.get(KEYS.short, false);
  const nodes = [];
  let skipped = [];

  const flushSkipped = () => {
    if (skipped.length) nodes.push(el('p', 'skipped-note', describeSkipped(skipped)));
    skipped = [];
  };

  song.verses.forEach((verse, i) => {
    const number = i + 1;
    if (useShort && !song.shortVersion.includes(number)) {
      skipped.push(number);
      return;
    }
    flushSkipped();

    const lines = Array.isArray(verse) ? verse : verse.lines;
    const section = el('section', 'verse');
    section.setAttribute('aria-label', `Vers ${number}`);
    section.append(el('span', 'verse-number', String(number)));
    for (const line of lines) section.append(renderLine(line));
    if (!Array.isArray(verse) && verse.refrain?.length) {
      const refrain = el('div', 'refrain');
      for (const line of verse.refrain) refrain.append(renderLine(line));
      section.append(refrain);
    }
    nodes.push(section);

    if (song.chorus) {
      const chorus = el('div', i === 0 ? 'chorus' : 'chorus repeat');
      chorus.append(el('span', 'chorus-label', 'Omkvæd'));
      for (const line of song.chorus) chorus.append(renderLine(line));
      nodes.push(chorus);
    }
  });
  flushSkipped();
  container.replaceChildren(...nodes);
}

function renderSong(song, direction) {
  const article = $('song');
  $('song-number').textContent = `Nr. ${song.idNumber}`;
  $('song-title').textContent = song.title;
  $('song-credit').textContent = credit(song);
  $('bar-number').textContent = String(song.idNumber);
  $('bar-title').textContent = song.title;
  document.title = `${song.idNumber}. ${song.title} – Julesange`;

  const shortButton = $('short-button');
  shortButton.hidden = !song.shortVersion;
  shortButton.setAttribute('aria-pressed', String(store.get(KEYS.short, false)));
  shortButton.setAttribute('aria-label', 'Vis den korte udgave');

  renderVerses(song);

  const { ids, inProgram } = navOrder(song.id);
  const pos = ids.indexOf(song.id);
  $('prev-button').disabled = pos <= 0;
  $('next-button').disabled = pos >= ids.length - 1;
  $('position').textContent = inProgram ? `Program ${pos + 1} af ${ids.length}` : `${pos + 1} af ${ids.length}`;

  const nextCard = $('next-card');
  const next = state.byId.get(ids[pos + 1]);
  nextCard.replaceChildren();
  if (next) {
    nextCard.href = `#/sang/${next.id}`;
    nextCard.append(el('small', '', 'Næste sang'), `${next.idNumber}. ${next.title}`);
  } else {
    nextCard.href = inProgram ? '#/program' : '#/';
    nextCard.append(el('small', '', inProgram ? 'Programmet er slut' : 'Sidste sang'), 'Tilbage til oversigten');
  }

  article.classList.remove('slide-left', 'slide-right');
  if (direction) {
    void article.offsetWidth; // restart the animation
    article.classList.add(direction > 0 ? 'slide-left' : 'slide-right');
  }

  // Warm the neighbours so swiping feels instant.
  for (const id of [ids[pos - 1], ids[pos + 1]]) if (id) loadSong(id).catch(() => {});
}

async function showSong(id, direction = 0) {
  const meta = state.byId.get(id);
  if (!meta) {
    location.replace('#/');
    return;
  }
  state.current = id;
  $('index-view').hidden = true;
  $('song-view').hidden = false;
  try {
    const song = await loadSong(id);
    if (state.current !== id) return;
    renderSong(song, direction);
  } catch {
    $('song-title').textContent = meta.title;
    $('verses').replaceChildren(el('p', 'line', 'Sangen kunne ikke hentes. Prøv igen, når der er forbindelse.'));
  }
  if (!direction) window.scrollTo(0, 0);
  requestWakeLock();
}

function go(delta) {
  if (!state.current) return;
  const { ids } = navOrder(state.current);
  const next = ids[ids.indexOf(state.current) + delta];
  if (!next) return;
  // Replace rather than push, so the back button returns to the index.
  history.replaceState(null, '', `#/sang/${next}`);
  window.scrollTo(0, 0);
  showSong(next, delta);
}

function showIndex(tab) {
  state.current = null;
  releaseWakeLock();
  document.title = 'Julesange';
  $('song-view').hidden = true;
  $('index-view').hidden = false;
  setTab(tab);
}

function route() {
  const hash = location.hash;
  const song = /^#\/sang\/([a-z0-9-]+)$/.exec(hash);
  if (song) showSong(song[1]);
  else showIndex(hash === '#/program' ? 'program' : 'all');
}

// ---------- Gestures ----------

function isZoomed() {
  return window.visualViewport ? window.visualViewport.scale > 1.01 : false;
}

function setupGestures() {
  const area = $('song');
  let start = null;

  area.addEventListener(
    'touchstart',
    (e) => {
      start = e.touches.length === 1 && !isZoomed() ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
    },
    { passive: true },
  );
  area.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) start = null;
  }, { passive: true });
  area.addEventListener(
    'touchend',
    (e) => {
      if (!start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      start = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    },
    { passive: true },
  );

  // A tap on the outer edges of the text moves to the previous/next song.
  area.addEventListener('click', (e) => {
    if (e.target.closest('a, button') || isZoomed()) return;
    if (String(window.getSelection()).length) return;
    const edge = Math.min(64, window.innerWidth * 0.14);
    if (e.clientX < edge) go(-1);
    else if (e.clientX > window.innerWidth - edge) go(1);
  });

  document.addEventListener('keydown', (e) => {
    if ($('song-view').hidden || document.querySelector('dialog[open]')) return;
    if (e.key === 'ArrowRight') go(1);
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'Escape') location.hash = '#/';
  });
}

// ---------- Wake lock ----------

async function requestWakeLock() {
  if (!('wakeLock' in navigator) || state.wakeLock || document.visibilityState !== 'visible') return;
  try {
    state.wakeLock = await navigator.wakeLock.request('screen');
    state.wakeLock.addEventListener('release', () => {
      state.wakeLock = null;
    });
  } catch {
    state.wakeLock = null;
  }
}

function releaseWakeLock() {
  state.wakeLock?.release().catch(() => {});
  state.wakeLock = null;
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.current) requestWakeLock();
});

// ---------- Settings ----------

function currentFontSize() {
  return store.get(KEYS.fontSize, DEFAULT_FONT_SIZE);
}

function applyFontSize(px) {
  document.documentElement.style.setProperty('--lyric-size', `${px}px`);
  const i = FONT_SIZES.indexOf(px);
  for (const id of ['smaller-button', 'settings-smaller']) $(id).disabled = i <= 0;
  for (const id of ['larger-button', 'settings-larger']) $(id).disabled = i >= FONT_SIZES.length - 1;
}

function stepFontSize(delta) {
  const current = currentFontSize();
  let i = FONT_SIZES.findIndex((s) => s >= current);
  if (i < 0) i = FONT_SIZES.length - 1;
  const next = FONT_SIZES[Math.max(0, Math.min(FONT_SIZES.length - 1, i + delta))];
  store.set(KEYS.fontSize, next);
  applyFontSize(next);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#fbf6ec' : '#120e0b';
  for (const input of document.querySelectorAll('input[name="theme"]')) input.checked = input.value === theme;
}

function setupSettings() {
  applyFontSize(currentFontSize());
  applyTheme(store.get(KEYS.theme, 'dark'));

  $('smaller-button').addEventListener('click', () => stepFontSize(-1));
  $('larger-button').addEventListener('click', () => stepFontSize(1));
  $('settings-smaller').addEventListener('click', () => stepFontSize(-1));
  $('settings-larger').addEventListener('click', () => stepFontSize(1));

  for (const input of document.querySelectorAll('input[name="theme"]')) {
    input.addEventListener('change', () => {
      store.set(KEYS.theme, input.value);
      applyTheme(input.value);
    });
  }

  $('short-button').addEventListener('click', async () => {
    store.set(KEYS.short, !store.get(KEYS.short, false));
    if (state.current) renderSong(await loadSong(state.current));
  });

  $('wake-lock-note').textContent =
    'wakeLock' in navigator
      ? 'Skærmen holdes tændt, mens en sang er åben.'
      : 'Denne browser kan ikke holde skærmen tændt. Slå automatisk lås fra i telefonens indstillinger i aften.';
}

// ---------- Dialogs ----------

function openDialog(dialog) {
  dialog.showModal();
}

function setupDialogs() {
  for (const dialog of document.querySelectorAll('dialog')) {
    // Tapping the dimmed backdrop closes the sheet.
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  $('settings-button').addEventListener('click', () => openDialog($('settings-dialog')));
  $('about-button').addEventListener('click', () => openDialog($('about-dialog')));

  $('info-button').addEventListener('click', async () => {
    if (!state.current) return;
    const song = await loadSong(state.current);
    $('info-title').textContent = `${song.idNumber}. ${song.title}`;
    const facts = [
      ['Type', song.type],
      [song.translator ? 'Original' : 'Tekst', song.author],
      ['Dansk tekst', song.translator],
      ['År', song.year],
      ['Den Danske Salmebog', song.dds && `nr. ${song.dds}`],
      ['Højskolesangbogen', song.hsb && `nr. ${song.hsb}`],
      ['Vers', song.verses.length],
    ].filter(([, value]) => value);
    $('info-facts').replaceChildren(...facts.flatMap(([k, v]) => [el('dt', '', k), el('dd', '', String(v))]));
    $('info-text').textContent = song.extraInfo ?? '';
    $('info-source').href = song.source?.url ?? 'https://da.wikisource.org/';
    openDialog($('info-dialog'));
  });

  $('share-button').addEventListener('click', () => {
    const url = location.href.split('#')[0];
    $('share-url').textContent = url;
    $('qr').replaceChildren(qrSvg(url));
    openDialog($('share-dialog'));
  });
}

function qrSvg(text) {
  if (typeof qrcode !== 'function') return el('p', '', text);
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount();
  let d = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) if (qr.isDark(r, c)) d += `M${c} ${r}h1v1h-1z`;
  }
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${n} ${n}`);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', 'QR-kode til julesangene');
  svg.setAttribute('shape-rendering', 'crispEdges');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  path.setAttribute('fill', '#000');
  svg.append(path);
  return svg;
}

// ---------- Start ----------

async function start() {
  setupSettings();
  setupDialogs();
  setupGestures();

  $('back-button').addEventListener('click', () => {
    location.hash = state.tab === 'program' ? '#/program' : '#/';
  });
  $('prev-button').addEventListener('click', () => go(-1));
  $('next-button').addEventListener('click', () => go(1));
  $('tab-all').addEventListener('click', () => {
    history.replaceState(null, '', '#/');
    setTab('all');
  });
  $('tab-program').addEventListener('click', () => {
    history.replaceState(null, '', '#/program');
    setTab('program');
  });
  $('search').addEventListener('input', (e) => {
    state.query = e.target.value.trim();
    renderList();
  });
  $('search').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const first = document.querySelector('.song-link');
    if (first) location.hash = first.getAttribute('href');
  });

  try {
    await loadIndex();
  } catch {
    $('index-view').hidden = false;
    $('list-empty').hidden = false;
    $('list-empty').textContent = 'Sangene kunne ikke hentes. Prøv igen, når der er forbindelse.';
    return;
  }
  setProgram(program());
  window.addEventListener('hashchange', route);
  route();
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

start();
