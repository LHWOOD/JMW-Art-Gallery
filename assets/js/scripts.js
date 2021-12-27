let openMenu = document.querySelector(".menu-toggler");
let navList = document.querySelector(".nav-list");
let pic = document.querySelector("#yoyo");
let pics = document.querySelectorAll("img");
let mode = "small";

openMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});

pics.forEach((pic) => {
  pic.addEventListener("click", function () {
    if (mode === "small") {
      mode = "large";
      pic.setAttribute("class", "large");
    } else {
      mode = "small";
      pic.setAttribute("class", "another");
    }
  });
});
