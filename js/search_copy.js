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
