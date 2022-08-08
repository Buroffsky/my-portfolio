// const ajaxSend = async (formData) => {
//   const fetchResp = await fetch("telegram.php", {
//     method: "POST",
//     body: formData,
//   });
//   if (!fetchResp.ok) {
//     throw new Error(
//       `Ошибка по адресу ${url}, статус ошибка ${fetchResp.status}`
//     );
//   }
//   return await fetchResp.text();
// };

// const forms = document.querySelectorAll("form");
// forms.forEach((form) => {
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formData = new FormData(this);
//     console.log(formData);

//     ajaxSend(formData)
//       .then((response) => {
//         this.innerHTML = "Спасибо, <br> заявку получили";
//         form.reset();
//       })
//       .catch((err) => console.error(err));
//   });
// });
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
          "Спасибо,<br> заявку получили"; /* окно благодарности */
        form.reset(); /*  очищаем поля формы */
      })
      .catch((err) => console.error(err)); /* если ошибка, выводим в консоль */
  });
});
