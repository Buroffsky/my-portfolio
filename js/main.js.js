"use strict";
const ajaxSend = async (formData) => {
  // создаем функцию отправки формы
  const fetchResp = await fetch("telegram.php", {
    // указываем обработчик формы — telegram.php
    method: "POST", // метод, которым мы отправляем форму
    body: formData, // что будет внутри формы — содержимое input
  });
  if (!fetchResp.ok) {
    // если ошибка, то...
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`
    ); // выводим статус ошибки и текст
  }
  return await fetchResp.text(); // если все хорошо, возвращаем ответ сервера
};

const forms = document.querySelectorAll("form"); // находим все теги form
forms.forEach((form) => {
  // для каждой формы...
  form.addEventListener("submit", function (e) {
    // отслеживаем событие отправки
    e.preventDefault(); // отменить стандартную отправку формы

    const formData = new FormData(this); // собираем все данные из формы
    console.log(formData);

    ajaxSend(formData) // передаем данные из формы в обработчик
      .then((response) => {
        // если все успешно, то..
        this.innerHTML =
          "Спасибо,<br> заявку получили<br>В ближайшее время мы с Вами свяжемся"; /* окно благодарности */
        form.reset(); /*  очищаем поля формы */
      })
      .catch((err) => console.error(err)); /* если ошибка, выводим в консоль */
  });
});

(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("navigation_active");
    }
    if (window.pageYOffset < 100) {
      header.classList.remove("navigation_active");
    }
  };
})();

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".navigation");
  const menuCloseItem = document.querySelector(".header_nav_close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("navigation_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("navigation_active");
  });
})();

// Scroll to anchors
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - 50;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
