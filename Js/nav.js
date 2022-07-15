let Nav = document.createElement("nav");
let text =
  '<img src="../images/menulogo.png" alt=""><span class="togller"><span></span><span></span><span></span></span><ul><li><a class="active" href="../index.html">Home</a></li><li><a href="About.html">about us</a></li><li><a href="services.html">services</a></li><li><a href="projects.html">projects</a></li><li><a href="contact.html">contact us</a></li></ul>';
Nav.innerHTML += text;
let main = document.querySelector("main");
main.prepend(Nav);
var path = window.location.pathname;
var page = path.split("/").pop().split(".");
let lis = document.querySelectorAll("nav ul li");
let toggler = document.querySelector(".togller");
let ull = document.querySelector("nav ul");
for (let i = 0; i < lis.length; i++) {
  if (
    lis[i].children[0].innerText.split(" ")[0].toLowerCase() ==
    page[0].toLowerCase()
  ) {
    lis[i].children[0].classList.add("active");
  } else {
    lis[i].children[0].classList.remove("active");
  }
}
toggler.onclick = () => {
  toggler.classList.toggle("on");
  ull.classList.toggle("on");
};
console.log(ull);
