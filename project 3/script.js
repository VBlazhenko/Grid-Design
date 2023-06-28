const closeButton = document.querySelector(".close-nav");
const nac = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
    navigator.classList.remove("navigation-open");
});
