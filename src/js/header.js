export const header = () => {
  const openMenuBtn = document.querySelector('.burger_menu-js');
  const menu = document.querySelector('.mobile-nav-js');
  const menuItems = document.querySelectorAll('.mobile-menu-item-js');

  openMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('is-open');
    });
  });
};
