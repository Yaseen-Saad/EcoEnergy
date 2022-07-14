let Nav = document.createElement("nav");
let text =
  '<img src="../images/menulogo.png" alt=""><span class="togller"><span></span><span></span><span></span></span><ul><li><a class="active" href="">Home</a></li><li><a href="">about us</a></li><li><a href="">services</a></li><li><a href="">projects</a></li><li><a href="">contact us</a></li></ul>';
Nav.innerHTML += text;
Nav.classList += "Section";
window.onload = document.body.prepend(Nav);
//---------------------------\\
var path = window.location.pathname;
var page = path.split("/").pop().split(".");

  let lis = document.querySelectorAll("nav ul li");
  for (let i = 0; i < lis.length; i++) {
    if (
      lis[i].children[0].innerText.split(" ")[0].toLowerCase() ==
      page[0].toLowerCase()
    ) {
      lis[i].children[0].classList.add("active");
    } else {
      lis[i].children[0].classList.remove("active");
    }
};
