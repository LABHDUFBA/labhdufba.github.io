(() => {
  'use strict';
  const deck = document.querySelector('#deck');
  const overview = document.querySelector('#overview');
  const progress = document.querySelector('#progressBar');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const STORAGE_KEY = 'misoginia-agentes-current-slide';
  let current = 0;
  const pad = n => String(n).padStart(2, '0');
  function fitDeck() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    document.documentElement.style.setProperty('--deck-scale', String(scale));
  }
  function slideTemplate(slide, index) {
    return `<article class="slide ${slide.className || ''}" id="${slide.id}" data-index="${index}" aria-label="Slide ${index + 1}: ${slide.title}">
      <div class="slide-grid" aria-hidden="true"></div>
      <header class="slide-head"><p class="eyebrow">${slide.kicker || ''}</p>${index > 0 ? `<p class="slide-number">slide ${index + 1}/${window.SLIDES.length}</p>` : ''}</header>
      <div class="slide-body">${slide.html}</div>
      <footer class="slide-foot"><span>LABHDUFBA · 2026</span><span class="section-name">${slide.section || ''}</span></footer>
    </article>`;
  }
  function initClusterExplorer() {
    const root = document.querySelector('#clusterExplorer');
    if (!root || !window.CLUSTER_PREVIEWS) return;
    root.addEventListener('click', e => {
      const button = e.target.closest('[data-cluster]');
      if (!button) return;
      const cluster = window.CLUSTER_PREVIEWS.find(c => c.id === button.dataset.cluster);
      if (!cluster) return;
      root.querySelectorAll('.cluster-tab').forEach(x => x.classList.toggle('active', x === button));
      root.querySelector('#clusterTitle').textContent = `${cluster.label} · ${cluster.id}`;
      root.querySelector('#clusterCount').textContent = `${cluster.count} imagens no cluster`;
      root.querySelector('#clusterImages').innerHTML = cluster.images.map(src => `<img src="${src}" alt="Imagem representativa do cluster ${cluster.label}">`).join('');
    });
  }
  function render() {
    deck.innerHTML = window.SLIDES.map(slideTemplate).join('');
    overview.innerHTML = window.SLIDES.map((slide, i) => `<button class="overview-item" type="button" data-go="${i}"><span>${pad(i + 1)}</span><b>${slide.title}</b></button>`).join('');
    overview.addEventListener('click', e => { const item = e.target.closest('[data-go]'); if (!item) return; overview.hidden = true; go(Number(item.dataset.go)); });
    initClusterExplorer();
  }
  function getInitial() {
    const hash = Number(location.hash.replace('#slide-', ''));
    if (Number.isInteger(hash) && hash >= 1 && hash <= window.SLIDES.length) return hash - 1;
    return 0;
  }
  function go(index, updateHash = true) {
    current = Math.max(0, Math.min(index, window.SLIDES.length - 1));
    document.querySelectorAll('.slide').forEach((slide, i) => { slide.classList.toggle('active', i === current); slide.setAttribute('aria-hidden', i === current ? 'false' : 'true'); });
    progress.style.width = `${((current + 1) / window.SLIDES.length) * 100}%`;
    prev.disabled = current === 0; next.disabled = current === window.SLIDES.length - 1;
    localStorage.setItem(STORAGE_KEY, String(current));
    if (updateHash) history.replaceState(null, '', `#slide-${current + 1}`);
  }
  function toggleOverview() { overview.hidden = !overview.hidden; if (!overview.hidden) overview.querySelector(`[data-go="${current}"]`)?.focus(); }
  function toggleFullscreen() { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); }
  prev.addEventListener('click', () => go(current - 1)); next.addEventListener('click', () => go(current + 1));
  window.addEventListener('hashchange', () => go(getInitial(), false)); window.addEventListener('resize', fitDeck);
  window.addEventListener('keydown', e => {
    if (!overview.hidden && e.key === 'Escape') { overview.hidden = true; return; }
    if (['ArrowRight','PageDown',' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
    if (['ArrowLeft','PageUp'].includes(e.key)) { e.preventDefault(); go(current - 1); }
    if (e.key === 'Home') go(0); if (e.key === 'End') go(window.SLIDES.length - 1);
    if (e.key.toLowerCase() === 'f') toggleFullscreen(); if (e.key.toLowerCase() === 'o' || e.key === 'Escape') toggleOverview();
  });
  window.goToSlide = go;
  render(); fitDeck(); go(getInitial(), false);
})();
