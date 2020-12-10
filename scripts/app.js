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

const slider = (sliderSelector, sliderHeight = 500) => {
  let SliderHeight = sliderHeight;

  const Slider = document.querySelector(sliderSelector);
  Slider.style.height = `${SliderHeight}px`;
  const list = Slider.querySelector(".slider-list");
  list.style.height = `${SliderHeight}px`;
  const items = list.querySelectorAll(".slider-item");
  const dots = Slider.querySelectorAll(".slider-dot");

  let slideWidth = 0;

  console.log(slideWidth);

  items.forEach((item) => {
    item.style.height = `${SliderHeight - 50}px`;
    slideWidth += item.offsetWidth;
    item.setAttribute("data-width", slideWidth);
    item.style.transform = `translateX(${slideWidth}px)`;
    console.log(`translateX(${slideWidth}px)`);
  });

  dots.forEach((dot, index) => {
    let nextSlide = index + 1;
    let prevSlide = dots.length - 1;
    dot.addEventListener("click", () => {
      if (prevSlide < 0) {
        prevSlide = dots.length;
        console.log(prevSlide);
      }
      if (nextSlide >= dots.length) {
        nextSlide = 0;
      }
      console.log(items[prevSlide]);
      items[prevSlide].style.transform = `translateX(-${items[index].getAttribute("data-width")}px)`;
      items[index].style.transform = `translateX(0px)`;
      let prepareNextSlide = items[nextSlide].getAttribute("data-width") - items[index].getAttribute("data-width");
      items[nextSlide].style.transform = `translateX(${prepareNextSlide}px)`;
    });
  });
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
  slider(".slider");
});
