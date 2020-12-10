const scrollButton = document.querySelector(".scroll");
const catalogShowMoreButton = document.querySelector("#catalogShowMoreButton");

// Функция: вернуть страницу на координаты int $x = 0; int %y = 0;
const scrollUp = (x = 0, y = 0) => {
  window.scrollTo(x, y);
};

// Функция: включение скролла на страницы
const scrollOn = () => {
  document.body.style.overflow = "";
};

// Функция: отключение скролла на страницы
const scrollOff = () => {
  document.body.style.overflow = "hidden";
};

// Слайдер

// Слайдер
const slider = (sliderSelector, sliderItemsSelector, nextButtonSelector, prevButtonSelector) => {
  const slider = document.querySelector(sliderSelector),
    sliderItems = slider.querySelectorAll(sliderItemsSelector),
    nextButton = document.querySelector(nextButtonSelector),
    prevButton = document.querySelector(prevButtonSelector),
    sliderWrapper = document.querySelector(".slider__wrapper");
  let currentSlide = 0;
  let sliderWidth = sliderWrapper.offsetWidth;
  slider.style.width = `${sliderWidth}px`;
  slider.style.height = `600px`;

  sliderItems.forEach((item, index) => {
    item.style.width = `100%`;
    item.style.height = `600px`;
  });

  const slide = () => {
    for (let index = 0; index < sliderItems.length; index++) {
      sliderItems[index].classList.remove("active");
    }
    sliderItems[currentSlide].classList.add("active");
  };

  nextButton.addEventListener("click", () => {
    if (currentSlide + 1 == sliderItems.length) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    slide();
  });

  prevButton.addEventListener("click", () => {
    if (currentSlide - 1 == -1) {
      currentSlide = sliderItems.length - 1;
    } else {
      currentSlide--;
    }
    slide();
  });

  // Первичная иницилизация слайдера, чтобы первый элемент был активный сразу
  slide();
};

// Модальное окно
const modalWindow = (modalSelector, openSelectors) => {
  const modalWindow = document.querySelector(modalSelector);
  const openButtons = document.querySelectorAll(openSelectors);
  const closeButton = document.querySelector(".js-closeModal");

  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      scrollOff();
      event.preventDefault();
      modalWindow.classList.add("modal--active");
    });
  });
  modalWindow.addEventListener("click", (event) => {
    if (event.target === modalWindow) {
      scrollOn();
      modalWindow.classList.remove("modal--active");
    }
  });
};

// Исключаем случаи, когда JS уже загружен, а HTML не сформирован
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      scrollButton.classList.add("scroll--active");
    } else {
      scrollButton.classList.remove("scroll--active");
    }
  });
  scrollButton.addEventListener("click", scrollUp);
  modalWindow(".js-modal", ".js-openModal");
  slider(".slider", ".slider-item", ".slider-prev-arrow", ".slider-next-arrow");
});
