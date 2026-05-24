const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.backdrop');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
};

closeBtn.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);