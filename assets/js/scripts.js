let openMenu = document.querySelector(".menu-toggler");
let navList = document.querySelector(".nav-list");
let that = document.querySelector("#yoyo");

openMenu.addEventListener("click", function () {
  navList.classList.toggle("active");
});

// function handle() {
//   enlarge();
// }

// function enlarge() {
//   if (that.height === 360) {
//     that.classList.add("another");
//   } else {
//     that.classList.add("large");
//   }
// }

// that.addEventListener("click", handle);
