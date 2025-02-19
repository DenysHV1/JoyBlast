export const scrollUp = () => {
  const scrollUp = document.querySelector('.scroll-up');

  window.addEventListener('scroll', () => {
    scrollUp.classList.toggle('is-open-scroll', window.scrollY > 500);
  });
};
