document.querySelectorAll(".collapse").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("actv");
  });
});
