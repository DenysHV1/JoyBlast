import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/pagination";

export const gallery = () => {
  let gallerySwiper = null;

  const initGallerySwiper = () => {
    if (window.innerWidth < 1200) {
      if (!gallerySwiper) {
        gallerySwiper = new Swiper(".swiper-gallery", { // ✅ Уникальный класс
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
            el: ".swiper-pagination-gallery", // ✅ Уникальный класс пагинации
            type: "bullets",
            clickable: true,
          },
        });
      }
    } else {
      if (gallerySwiper) {
        gallerySwiper.destroy(true, true);
        gallerySwiper = null;
      }
    }
  };

  initGallerySwiper();
  window.addEventListener("resize", initGallerySwiper);
};
