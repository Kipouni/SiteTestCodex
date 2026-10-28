const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.animal-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.type !== button.dataset.filter;
    });
  });
});
const portraits = {
  Milo: 'Un grand tendre, toujours partant pour une balade et un moment de complicité. Ce portrait illustre une fiche d’adoption accueillante, qui laisse la place au caractère de l’animal.',
  Plume: 'Curieuse et délicate, Plume aime observer le monde avant de venir chercher une caresse. Une fiche pourrait ici préciser ses habitudes et le foyer qui lui conviendrait.',
  Oscar: 'Un compagnon paisible pour partager les petits bonheurs du quotidien. Ce portrait imagine une mise en lumière des animaux plus âgés, qui ont eux aussi tant à offrir.'
};
const dialog = document.querySelector('#animal-dialog');
document.querySelectorAll('[data-animal]').forEach(button => button.addEventListener('click', () => {
  document.querySelector('#dialog-title').textContent = button.dataset.animal;
  document.querySelector('#dialog-description').textContent = portraits[button.dataset.animal];
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
}});
