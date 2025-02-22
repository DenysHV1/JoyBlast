import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/pagination";

export const reviews = () => {
  let reviewsSwiper = null;

  const initReviewsSwiper = () => {
    if (window.innerWidth < 1200) {
      if (!reviewsSwiper) {
        reviewsSwiper = new Swiper(".swiper-reviews", {
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
            el: ".swiper-pagination-reviews",
            type: "bullets",
            clickable: true,
          },
        });
      }
    } else {
      if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
      }
    }
  };

  initReviewsSwiper();
  window.addEventListener("resize", initReviewsSwiper);
};
