import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/pagination";

export const gallery = () => {
  let swiperInstance = null;

  const initSwiper = () => {
    if (window.innerWidth < 1200) {
      if (!swiperInstance) {
        swiperInstance = new Swiper(".swiper", {
          slidesPerView: 1,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          spaceBetween: 10,
          speed: 800,
          simulateTouch: true,
          touchRatio: 1,
          mousewheel: {
            sensitivity: 0.5,
          },
          keyboard: {
            enabled: true,
            onlyInViewport: true,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });
      }
    } else {

      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };


  initSwiper();

  window.addEventListener('resize', initSwiper);
};