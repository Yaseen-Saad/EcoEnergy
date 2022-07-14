let toTop = document.createElement("img");
let toTopHome = document.createElement("img")
toTop.src = "../images/toTop.png";
toTop.alt = "To Top";
toTop.classList = "notHome";
//-------------------------------------------\\
toTopHome.src = "images/toTop.png";
toTopHome.alt = "To Top";
document.body.prepend(toTop);
document.body.prepend(toTopHome);
window.onscroll = () => {
  if (scrollY >= 1000) {
    toTop.style.transform = "translatey(0)";
    toTopHome.style.transform = "translatey(0)";
  } else {
    toTop.style.transform = "translatey(100px)";
    toTopHome.style.transform = "translatey(100px)";
  }
};
toTop.onclick = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};
toTopHome.onclick = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};
