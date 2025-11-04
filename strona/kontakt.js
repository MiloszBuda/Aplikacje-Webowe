// walidacja
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(id, condition, message) {
  const element = document.getElementById(id);
  const err = document.getElementById("error-" + id);

  if (!condition(element.value.trim())) {
    element.classList.add("err");
    err.textContent = message;
    return false;
  } else {
    element.classList.remove("err");
    err.textContent = "";
    return true;
  }
}

document.getElementById("name").addEventListener("blur", () => {
  validateForm("name", (v) => v.length > 0, "Imię jest wymagane.");
});

document.getElementById("email").addEventListener("blur", () => {
  validateForm(
    "email",
    (v) => emailRegex.test(v),
    "Nieprawidłowy format email."
  );
});

document.getElementById("message").addEventListener("blur", () => {
  validateForm("message", (v) => v.length > 0, "Wiadomość nie może być pusta.");
});

// localStorage
["name", "email", "subject", "message"].forEach((id) => {
  const element = document.getElementById(id);

  if (localStorage.getItem(id)) {
    element.value = localStorage.getItem(id);
  }

  element.addEventListener("blur", () => {
    let valid = false;
    if (id === "name" || id === "message")
      valid = validateForm(
        id,
        (v) => v.length > 0,
        id === "name" ? "Imię jest wymagane." : "Wiadomość nie może być pusta."
      );
    else if (id === "email")
      valid = validateForm(
        id,
        (v) => emailRegex.test(v),
        "Nieprawidłowy format email."
      );

    if (valid) localStorage.setItem(id, element.value.trim());
  });
});

// submit
document.querySelector(".formularz form").addEventListener("submit", (e) => {
  e.preventDefault();

  const validName = validateForm(
    "name",
    (v) => v.length > 0,
    "Imię jest wymagane."
  );
  const validEmail = validateForm(
    "email",
    (v) => emailRegex.test(v),
    "Nieprawidłowy format email."
  );
  const validMessage = validateForm(
    "message",
    (v) => v.length > 0,
    "Wiadomość nie może być pusta."
  );

  if (validName && validEmail && validMessage) {
    alert("Wiadomość została wysłana!");
    localStorage.clear();
    document.querySelector(".formularz form").reset();
  } else {
    alert("Proszę poprawić błędy w formularzu.");
  }
});
