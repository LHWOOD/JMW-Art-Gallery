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

      if (secondsLeft === 9) {
        welCome.classList.remove("none");
        welCome.classList.add("inandout");
      }
      if (secondsLeft === 7) {
        too.classList.remove("none");
        too.classList.add("inandout");
      }
      if (secondsLeft === 5) {
        fo.classList.remove("none");
        fo.classList.add("inandout");
      }
      if (secondsLeft === 3) {
        JMW.classList.remove("none");
      }
      if (secondsLeft === 1) {
        btn.classList.remove("none");
      }

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  timer();
});
