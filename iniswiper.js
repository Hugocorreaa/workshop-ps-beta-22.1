const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
        1:{
            slidesPerView: 1,
            spaceBetween: 200,
        },

        530:{
            slidesPerView: 2,
            spaceBetween: 300,

        },
        1372:{
            slidesPerView: 3,
        }

      },
  });