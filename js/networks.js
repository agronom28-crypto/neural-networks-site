document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('networks-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let currentCat = 'all';

  function renderCards(cat) {
    const filtered = cat === 'all' ? NETWORKS : NETWORKS.filter(n => n.category === cat);
    grid.innerHTML = filtered.map(n => `
      <div class="network-card">
        <div class="network-card-header">
          <span class="network-icon">${n.icon}</span>
          <div>
            <div class="network-name">${n.name}</div>
            <div class="network-company">${n.company}</div>
          </div>
        </div>
        <span class="network-badge badge-${n.category}">${categoryLabel(n.category)}</span>
        <p class="network-desc">${n.desc}</p>
        <a href="${n.url}" class="network-link" target="_blank" rel="noopener">Открыть сайт →</a>
      </div>
    `).join('');
  }

  function categoryLabel(cat) {
    const map = { llm: 'Языковая', image: 'Изображения', audio: 'Аудио', video: 'Видео', code: 'Код' };
    return map[cat] || cat;
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCat = this.dataset.cat;
      renderCards(currentCat);
    });
  });

  renderCards('all');
});
