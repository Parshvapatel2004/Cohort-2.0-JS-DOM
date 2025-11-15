let h2 = document.querySelector("h2");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let rec = document.querySelector("#rec");

let counter = 0;

inc.addEventListener("click", function () {
  counter++;
  h2.innerHTML = counter;
  if (counter > 0) {
    h2.style.color = "white";
  }
});

dec.addEventListener("click", function () {
  counter--;
  h2.innerHTML = counter;
  if (counter < 0) {
    h2.style.color = "red";
  }
});

rec.addEventListener("click", function () {
  counter = 0;
  h2.innerHTML = counter;
});
