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
  const cardImage = new Splide('#card-image', {
    type: 'slide',
    gap: 10,
    pagination: false,
    arrows: false,
    breakpoints: {
      991.8: {
        pagination: true,
      },
    },
  });

  const cardThumbs = new Splide('#card-thumbs', {
    type: 'slide',
    direction: 'ttb',
    gap: 10,
    pagination: false,
    isNavigation: true,
    perPage: 5,
    perMove: 1,
    height: '100%',
    fixedWidth: 80,
    fixedHeight: 80,
  });

  cardImage.sync(cardThumbs);
  cardImage.mount();
  cardThumbs.mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const sellOut = new Splide('#buy-with', {
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
        perPage: 2,
        fixedWidth: 170,
        gap: 20,
      },
    },
  }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const sellOut = new Splide('#similar-products', {
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
        perPage: 2,
        fixedWidth: 170,
        gap: 20,
      },
    },
  }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const salesHits = new Splide('#product-reviews', {
    type: 'slide',
    gap: 30,
    perPage: 4,
    perMove: 1,
    arrows: true,
    pagination: false,
    fixedWidth: 255,
    breakpoints: {
      1199.8: {
        arrows: true,
        perPage: 3,
        fixedWidth: 290,
        gap: 30,
      },
      991.8: {
        arrows: true,
        perPage: 2,
        fixedWidth: 330,
        gap: 30,
      },
      767.8: {
        arrows: false,
        fixedWidth: 300,
        perPage: 1,
        gap: 20,
      },
    },
  }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const sellOut = new Splide('#recently-viewed', {
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
        perPage: 2,
        fixedWidth: 170,
        gap: 20,
      },
    },
  }).mount();
});
