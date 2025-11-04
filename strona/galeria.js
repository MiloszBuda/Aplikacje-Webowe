const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
