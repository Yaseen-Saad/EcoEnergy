var path = window.location.pathname;
var page = path.split("/").pop().split(".");
let header = document.querySelector("div.header");
let p = document.createElement("p");
p.innerHTML = `<span>home</span> <span>|</span><span>${
  page[0] == "About"
    ? "About Us"
    : page[0] == "Contact"
    ? "Contact Us"
    : page[0]
}</span>`;
header.prepend(p);
