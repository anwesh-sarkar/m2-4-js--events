let container = document.querySelector(".container");

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.setAttribute("id", i);
  button.style.left = Math.floor(Math.random() * 100) + "vw";
  button.style.top = Math.floor(Math.random() * 100) + "vh";
  container.appendChild(button);

  button.addEventListener("click", function () {
    button.classList.toggle("green");
  });
}
