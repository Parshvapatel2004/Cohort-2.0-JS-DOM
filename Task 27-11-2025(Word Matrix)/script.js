let h4 = document.querySelector("h4");
let text = h4.innerText;
let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

// h4.addEventListener("mouseenter", function () {
//   // function add() {
//   setInterval(function(){
//     let str = text
//       .split("")
//       .map((char, idx) => {
//         if (idx < iteration) {
//           return char;
//         }

//         return random.split("")[Math.floor(Math.random() * random.length)];
//       })
//       .join("");

//     h4.innerText = str;
//     iteration += 0.5;
//   },50)
//   // }
//   // setInterval(add, 80);
// });

// let arr = "PARSHVAPATEL";

// let newarr = arr.split("")[Math.floor(Math.random() * arr.length)];
// console.log(newarr);

// let h4 = document.querySelector("h4");
// let text = h4.innerText;
// let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// let iteration = 0;
let interval = null; // <-- important

h4.addEventListener("mouseenter", function () {
  // Agar interval already chal raha hai to dubara start mat karo
  if (interval) return;

  iteration = 0;

  interval = setInterval(function () {
    let str = text
      .split("")
      .map((char, idx) => {
        if (idx < iteration) return char;
        return random[Math.floor(Math.random() * random.length)];
      })
      .join("");

    h4.innerText = str;
    iteration += 0.5;

    if (iteration >= text.length) {
      clearInterval(interval);
      interval = null; // reset so next mouseenter works
    }
  }, 50);
});
