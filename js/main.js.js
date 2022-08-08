const ajaxSend = async (FormData) => {
  const fetchResp = await fetch("telegram.php", {
    method: "POST",
    body: formData,
  });
  if (!fetchResp.ok) {
    throw new Error(
      `Ошибка по адресу ${url}, статус ошибка ${fetchResp.status}`
    );
  }
  return await fetchResp.text();
};

const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log(formData);

    ajaxSend(formData)
      .then((response) => {
        this.innerHTML = "Спасибо, <br> заявку получили";
        form.reset();
      })
      .catch((err) => console.error(err));
  });
});
