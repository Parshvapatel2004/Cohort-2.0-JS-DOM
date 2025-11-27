let h4 = document.querySelector("h4");
let text = h4.innerText;
let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

h4.addEventListener("mouseenter", function () {
  function add() {
    let str = text
      .split("")
      .map((char, idx) => {
        if (idx < iteration) {
          return char;
        }

        return random.split("")[Math.floor(Math.random() * random.length)];
      })
      .join("");

    h4.innerText = str;
    iteration += 0.5;
  }
  setInterval(add, 80);
});

// let arr = "PARSHVAPATEL";

// let newarr = arr.split("")[Math.floor(Math.random() * arr.length)];
// console.log(newarr);
