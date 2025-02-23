export const cookiePolicy = () => {
  const btnEl1 = document.querySelector('.cookie-policy-button1-js');
  const btnEl2 = document.querySelector('.cookie-policy-button2-js');
  const modalEl = document.querySelector('.cookie-policy');

  if (JSON.parse(localStorage.getItem('status'))) {
    modalEl.style.display = 'none';
    return;
  }

  btnEl1.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('status', JSON.stringify(true));
  });

  btnEl2.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('status', JSON.stringify(false));
  });
};
