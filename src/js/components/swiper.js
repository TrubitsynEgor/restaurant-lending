import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const sliderMenu = document.querySelector('.menu__slider');
if (sliderMenu) {
  const menuSlider = new Swiper(sliderMenu, {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
  });
}

const sliderTestimonials = document.querySelector('.testimonials__slider');
if (sliderTestimonials) {
  const testimonialsSlider = new Swiper(sliderTestimonials, {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.testimonials__slider-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
}
