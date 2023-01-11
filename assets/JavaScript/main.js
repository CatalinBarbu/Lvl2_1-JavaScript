const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const headLine = document.getElementById("headLine");

button.addEventListener("click", () => {
  headLine.classList.add("button");
});
button1.addEventListener("click", () => {
  headLine.classList.remove("button");
});
