const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
window.SPA_SAVED = (() => {
  let ids = [];
  try { const value = JSON.parse(localStorage.getItem('spa-favorites') || '[]'); if (Array.isArray(value)) ids = value.filter(id => typeof id === 'string'); } catch {}
  const saved = new Set(ids);
  return {has: id => saved.has(id), toggle(id) {
    saved.has(id) ? saved.delete(id) : saved.add(id);
    try { localStorage.setItem('spa-favorites', JSON.stringify([...saved])); } catch {}
    document.dispatchEvent(new Event('favoriteschange'));
    return saved.has(id);
  }};
})();
