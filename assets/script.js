const welCome = document.querySelector("#welcome");
const too = document.querySelector("#to");
const JMW = document.querySelector("#jmw");
const fo = document.querySelector("#of");
const btn = document.querySelector("#card-btn");
let secondsLeft = 10;

document.addEventListener("DOMContentLoaded", () => {
  function timer() {
    let timerInterval = setInterval(function () {
      secondsLeft--;

      if (secondsLeft === 8) {
        welCome.classList.remove("none");
        welCome.classList.add("inandout");
      }
      if (secondsLeft === 6) {
        too.classList.remove("none");
        too.classList.add("inandout");
      }
      if (secondsLeft === 4) {
        fo.classList.remove("none");
        fo.classList.add("inandout");
      }
      if (secondsLeft === 2) {
        JMW.classList.remove("none");
      }
      if (secondsLeft === 0) {
        btn.classList.remove("none");
      }

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
});
