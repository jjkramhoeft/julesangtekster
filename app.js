// Juletræssange – navigation, wake lock and sharing.
'use strict';

const $ = (id) => document.getElementById(id);

// "all" shows every verse, "short" only the verses listed in shortVersion.
const VERSES_KEY = 'julesange.verses';

// "Udvalgte vers" is the default. localStorage can be unavailable (private
// mode, blocked storage), so fall back to the default there too.
function versesSetting() {
  try {
    return localStorage.getItem(VERSES_KEY) === 'all' ? 'all' : 'short';
  } catch {
    return 'short';
  }
}

function saveVersesSetting(value) {
  try {
    localStorage.setItem(VERSES_KEY, value);
  } catch {}
}

const state = {
  songs: [],
  byId: new Map(),
  cache: new Map(),
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

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ---------- Index view ----------

function renderSongItem(song) {
  const item = el('li', 'song-item');
  const link = el('a', 'song-link');
  link.href = `#/sang/${song.id}`;
  link.append(el('span', 'num', String(song.idNumber)), el('span', 'title', song.title));
  item.append(link);
  return item;
}

// The songs are grouped in sections (Om Kristus, Advent og Nytår, Traditioner, Udenlandske),
// in the order they come in songs/index.json.
function renderList() {
  const sections = [];
  for (const song of state.songs) {
    let section = sections.at(-1);
    if (!section || section.name !== song.section) {
      section = { name: song.section, songs: [] };
      sections.push(section);
    }
    section.songs.push(song);
  }
  $('song-list').replaceChildren(
    ...sections.map(({ name, songs }) => {
      const group = el('section', 'song-section');
      if (name) group.append(el('h2', 'section-title', name));
      const list = el('ol', 'song-list-items');
      list.append(...songs.map(renderSongItem));
      group.append(list);
      return group;
    }),
  );
}

function renderVerseSwitch() {
  const all = versesSetting() === 'all';
  $('all-verses').checked = all;
  $('label-all').setAttribute('aria-current', String(all));
  $('label-short').setAttribute('aria-current', String(!all));
}

function setupVerseSwitch() {
  const set = (value) => {
    saveVersesSetting(value);
    renderVerseSwitch();
  };
  $('all-verses').addEventListener('change', (e) => set(e.target.checked ? 'all' : 'short'));
  $('label-short').addEventListener('click', () => set('short'));
  $('label-all').addEventListener('click', () => set('all'));
  renderVerseSwitch();
}

// ---------- Song view ----------

// Repeat marks in the data are written "//: … ://" and can span several
// lines. The marked lines are written out twice instead.
function expandRepeats(lines) {
  const out = [];
  let group = null;
  for (const line of lines) {
    const opens = line.includes('//:');
    const closes = line.includes('://');
    const text = line.replace(/\/\/:\s*|\s*:\/\//g, '').trim();
    if (opens) group = [];
    if (group) group.push(text);
    else out.push(text);
    if (closes && group) {
      out.push(...group, ...group);
      group = null;
    }
  }
  if (group) out.push(...group);
  return out;
}

function renderVerses(song) {
  const nodes = [];
  const chosen = versesSetting() === 'short' ? state.byId.get(song.id)?.shortVersion : null;

  song.verses.forEach((verse, i) => {
    const number = i + 1;
    if (chosen?.length && !chosen.includes(number)) return;
    // Refrain and chorus lines are shown as ordinary lines of the verse.
    const lines = Array.isArray(verse) ? verse : [...verse.lines, ...(verse.refrain ?? [])];
    const section = el('section', 'verse');
    section.setAttribute('aria-label', `Vers ${number}`);
    section.append(el('span', 'verse-number', String(number)));
    for (const line of expandRepeats([...lines, ...(song.chorus ?? [])])) section.append(el('p', 'line', line));
    nodes.push(section);
  });
  // Songs whose text is still protected ship without verses, to be filled in by hand.
  if (!song.verses.length) nodes.push(el('p', 'line', 'Teksten er ikke skrevet ind endnu.'));
  $('verses').replaceChildren(...nodes);
}

function renderSong(song, direction) {
  const article = $('song');
  $('song-number').textContent = `Nr. ${song.idNumber}`;
  $('song-title').textContent = song.title;
  document.title = `${song.idNumber}. ${song.title} – Juletræssange`;

  renderVerses(song);

  const ids = state.songs.map((s) => s.id);
  const pos = ids.indexOf(song.id);
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
  hygge.stop();
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
  const ids = state.songs.map((s) => s.id);
  const next = ids[ids.indexOf(state.current) + delta];
  if (!next) return;
  // Replace rather than push, so the back button returns to the index.
  history.replaceState(null, '', `#/sang/${next}`);
  window.scrollTo(0, 0);
  showSong(next, delta);
}

function showIndex() {
  state.current = null;
  releaseWakeLock();
  document.title = 'Juletræssange';
  $('song-view').hidden = true;
  $('index-view').hidden = false;
}

function route() {
  const song = /^#\/sang\/([a-z0-9-]+)$/.exec(location.hash);
  if (song) showSong(song[1]);
  else showIndex();
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

// ---------- Dialogs ----------

function setupDialogs() {
  for (const dialog of document.querySelectorAll('dialog')) {
    // Tapping the dimmed backdrop closes the sheet.
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
  }

  $('info-button').addEventListener('click', async () => {
    if (!state.current) return;
    const song = await loadSong(state.current);
    $('info-title').textContent = song.title;
    const facts = [
      [song.translator ? 'Original' : 'Tekst', song.author],
      ['Dansk tekst', song.translator],
      ['År', song.year],
      ['Melodi', song.composer],
      ['Den Danske Salmebog', song.dds && `nr. ${song.dds}`],
      ['Højskolesangbogen', song.hsb && `nr. ${song.hsb}`],
    ].filter(([, value]) => value);
    $('info-facts').replaceChildren(...facts.flatMap(([k, v]) => [el('dt', '', k), el('dd', '', String(v))]));
    $('info-text').textContent = song.extraInfo ?? '';
    $('info-dialog').showModal();
  });
}

function qrSvg(text) {
  if (typeof qrcode !== 'function') return document.createTextNode('');
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
  svg.setAttribute('aria-label', 'QR-kode til juletræssangene');
  svg.setAttribute('shape-rendering', 'crispEdges');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  path.setAttribute('fill', '#000');
  svg.append(path);
  return svg;
}

// ---------- Start ----------

async function start() {
  setupDialogs();
  setupGestures();
  setupVerseSwitch();

  $('back-button').addEventListener('click', () => {
    location.hash = '#/';
  });
  $('hygge-button').addEventListener('click', () => hygge.start());

  try {
    await loadIndex();
  } catch {
    $('index-view').hidden = false;
    $('list-empty').hidden = false;
    $('list-empty').textContent = 'Sangene kunne ikke hentes. Prøv igen, når der er forbindelse.';
    return;
  }
  renderList();
  // QR code for the app's own address, so others can scan it from this phone.
  $('qr').replaceChildren(qrSvg(location.href.split('#')[0]));
  window.addEventListener('hashchange', route);
  route();
  // A little "Mere hygge" to welcome you, when the app opens on the index.
  if (!state.current) hygge.start(hygge.SHORT_DURATION);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

start();
