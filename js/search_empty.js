document.addEventListener('DOMContentLoaded', () => {
  const salesHits = new Splide('.drag-menu', {
    type: 'slide',
    gap: 10,
    isNavigation: true,
    arrows: false,
    pagination: false,
    autoWidth: true,
  }).mount();
});
document.addEventListener('DOMContentLoaded', () => {
  const salesHits = new Splide('#like-it', {
    type: 'slide',
    gap: 30,
    perPage: 4,
    perMove: 1,
    pagination: false,
    fixedWidth: 255,
    breakpoints: {
      1199.8: {
        perPage: 3,
        fixedWidth: 290,
        gap: 30,
      },
      991.8: {
        perPage: 2,
        fixedWidth: 330,
        gap: 30,
      },
      767.8: {
        perPage: 2,
        fixedWidth: 240,
        gap: 30,
      },
      575.8: {
        destroy: true,
      },
    },
  }).mount();
});
