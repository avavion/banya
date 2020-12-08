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
});
