const button = document.getElementById("button");
const nav = document.getElementById("nav");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  nav.classList.toggle("active");
});
