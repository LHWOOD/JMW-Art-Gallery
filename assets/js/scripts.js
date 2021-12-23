let openMenu = document.querySelector(".menu-toggler");
let navList = document.querySelector(".nav-list");

openMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});
