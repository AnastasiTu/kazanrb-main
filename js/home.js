document.addEventListener('DOMContentLoaded', () => {
  const MAIN_SLIDER = document.getElementById('main-slider');
  const EXTRA_LARGE = 1110;
  const LARGE = 930;
  const MEDIUM = 690;
  const SMALL = 510;
  const EXTRA_SMALL = 360;

  const setArrowPosition = (sliderWidth, arrowPosition) => {
    const ARROW_PREV = document.querySelector('#main-slider .splide__arrow--prev');
    const ARROW_NEXT = document.querySelector('#main-slider .splide__arrow--next');

    const CALCULATED_POSITION = (MAIN_SLIDER.offsetWidth - sliderWidth) / 2 + arrowPosition + 'px';

    ARROW_PREV.style.left = ARROW_NEXT.style.right = CALCULATED_POSITION;
  };

  const getMainSliderOptions = () => {
    if (window.innerWidth > 1199) {
      return {
        padding: (MAIN_SLIDER.offsetWidth - EXTRA_LARGE) / 2,
        fixedWidth: EXTRA_LARGE,
      };
    } else if (window.innerWidth < 1200 && window.innerWidth > 991) {
      return {
        padding: (MAIN_SLIDER.offsetWidth - LARGE) / 2,
        fixedWidth: LARGE,
      };
    } else if (window.innerWidth < 992 && window.innerWidth > 767) {
      return {
        padding: (MAIN_SLIDER.offsetWidth - MEDIUM) / 2,
        fixedWidth: MEDIUM,
      };
    } else if (window.innerWidth < 768 && window.innerWidth > 575) {
      return {
        padding: (MAIN_SLIDER.offsetWidth - SMALL) / 2,
        fixedWidth: SMALL,
      };
    } else if (window.innerWidth < 576) {
      return {
        padding: (MAIN_SLIDER.offsetWidth - EXTRA_SMALL) / 2,
        fixedWidth: EXTRA_SMALL,
      };
    }
  };

  const mainSlider = new Splide('#main-slider', {
    type: 'loop',
    gap: 15,
    perPage: 1,
    arrowPath:
      'M1.25029 6.75969C0.859766 7.15021 0.859766 7.78338 1.25029 8.1739L7.61425 14.5379C8.00478 14.9284 8.63794 14.9284 9.02847 14.5379C9.41899 14.1473 9.41899 13.5142 9.02847 13.1237L3.37161 7.4668L9.02847 1.80994C9.41899 1.41942 9.41899 0.786253 9.02847 0.395729C8.63794 0.00520468 8.00478 0.00520468 7.61425 0.395729L1.25029 6.75969ZM3.13825 6.4668H1.9574V8.4668H3.13825V6.4668Z',
    padding: getMainSliderOptions().padding,
    fixedWidth: getMainSliderOptions().fixedWidth,
  }).mount();

  if (window.innerWidth > 767) {
    arrowPosition = getMainSliderOptions().fixedWidth === 930 ? 50 : 30;
    setArrowPosition(getMainSliderOptions().fixedWidth, arrowPosition);
  }

  window.addEventListener('resize', () => {
    mainSlider.options = getMainSliderOptions();
    arrowPosition = getMainSliderOptions().fixedWidth === 930 ? 50 : 30;
    setArrowPosition(getMainSliderOptions().fixedWidth, arrowPosition);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const salesHits = new Splide('#sales-hits', {
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
  const sellOut = new Splide('#sell-out', {
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
  const sellOut = new Splide('#beneficial-bundles', {
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
  const salesHits = new Splide('#order-forming', {
    type: 'slide',
    gap: 30,
    isNavigation: true,
    arrows: false,
    pagination: false,
    fixedWidth: 255,
  }).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutShop = new Splide('#about-shop', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
  });

  const aboutShopThumbs = new Splide('#about-shop-thumbs', {
    type: 'slide',
    gap: 30,
    pagination: false,
    isNavigation: true,
    perPage: 4,
    perMove: 1,
    fixedWidth: 255,
    breakpoints: {
      1199.8: {
        perPage: 3,
        fixedWidth: 290,
      },
      991.8: {
        perPage: 2,
        fixedWidth: 330,
      },
      767.8: {
        perPage: 2,
        fixedWidth: 240,
      },
      575.8: {
        perPage: 1,
        fixedWidth: 360,
      },
    },
  });

  aboutShop.sync(aboutShopThumbs);
  aboutShop.mount();
  aboutShopThumbs.mount();
});

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = Array.from(document.querySelectorAll('.like'));
  const likeCounts = Array.from(document.querySelectorAll('.count'));

  likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');
      const current = Number(likeCounts[index].innerHTML);
      const inc = button.classList.contains('is-active') ? 1 : -1;
      likeCounts[index].innerHTML = current + inc;
    });
  });
});

/* document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.dp-product__amount-group');
  if (counters) {
    counters.forEach((counter) => {
      counter.addEventListener('click', (e) => {
        const target = e.target;

        if (target.closest('.dp-product__amount-group')) {
          if (
            target.closest('.dp-product__amount-group').querySelector('#product_amount').value ==
              '' &&
            (target.classList.contains('product_amount_decrease') ||
              target.classList.contains('product_amount_increase'))
          ) {
            target.closest('.dp-product__amount-group').querySelector('#product_amount').value = 0;
          }

          let value = parseInt(
            target.closest('.dp-product__amount-group').querySelector('#product_amount').value,
          );

          if (target.classList.contains('product_amount_increase')) {
            value++;
          } else {
            --value;
          }

          target.closest('.dp-product__amount-group').querySelector('#product_amount').value =
            value;
        }
      });
    });
  }
}); */

document.addEventListener('DOMContentLoaded', () => {
  const counter = function () {
    const btns = document.querySelectorAll('.counter__btn');

    btns.forEach((btn) => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('#product_amount');
        const currentValue = +inp.value;
        let newValue;

        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }

        inp.value = newValue;
      });
    });
  };

  counter();
});
