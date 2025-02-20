export const faq = () => {
  const questionsBtn = document.querySelectorAll('.faq-question-button-js');

  questionsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAlreadyOpen = btn.nextElementSibling.classList.contains('open');

      questionsBtn.forEach(btns => {
        [...btns.children].forEach(item => {
          if (item.nodeName === 'SPAN') {
            item.style.backgroundColor = 'transparent';
            item.style.borderColor = 'black';
            [...item.children].forEach(svg => {
              svg.style.transform = 'rotate(0deg)';
              svg.style.stroke = 'black';
            });
          }
        });
      });

      questionsBtn.forEach(btnNext => {
        btnNext.nextElementSibling.classList.remove('open');
      });

      if (!isAlreadyOpen) {
        btn.nextElementSibling.classList.add('open');
        [...btn.children].forEach(item => {
          if (item.nodeName === 'SPAN') {
            item.style.backgroundColor = '#723243';
            item.style.borderColor = 'transparent';
            [...item.children].forEach(svg => {
              svg.style.transform = 'rotate(90deg)';
              svg.style.stroke = 'white';
            });
          }
        });
      }
    });
  });
};
