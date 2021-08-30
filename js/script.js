$(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    autoplay: {
      delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
