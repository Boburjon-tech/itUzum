import "./dark-mode.js";
import "./loader.js";
const cardMinus = document.getElementById("card-minus");
const cardPlus = document.getElementById("card-plus");
const cardVale = document.getElementById("card-value");
const deleteEl = document.getElementById("delete");
let count = 0;
cardMinus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    cardVale.textContent = count;
  }
});

cardPlus.addEventListener("click", () => {
  count++;
  cardVale.textContent = count;
});

deleteEl.addEventListener("click", () => {
  count = 0;
  cardVale.textContent = count;
});
