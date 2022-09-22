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
  const salesHits = new Splide('#promotion-carousel', {
    type: 'slide',
    perPage: 1,
    perMove: 1,
  }).mount();
});
document.addEventListener('DOMContentLoaded', () => {
  const salesHits = new Splide('#product-reviews', {
    type: 'slide',
    gap: 30,
    perPage: 4,
    perMove: 1,
    arrows: true,
    autoWidth: false,
    pagination: false,
    fixedWidth: 255,
    breakpoints: {
      1199.8: {
        arrows: true,
        autoWidth: false,
        perPage: 3,
        fixedWidth: 290,
        gap: 30,
      },
      991.8: {
        arrows: false,
        autoWidth: true,
        perPage: 1,
      },
    },
  }).mount();
});
