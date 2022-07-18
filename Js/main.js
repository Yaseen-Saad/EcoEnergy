let toggler = document.querySelector(".togller");
let ull = document.querySelector("nav ul");

toggler.onclick = () => {
  toggler.classList.toggle("on");
  ull.classList.toggle("on");
};
