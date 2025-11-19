let btn = document.querySelector("#btn");
let h1 = document.querySelector("#progress");
let inner = document.querySelector(".inneri");
let count = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  var num = 50 + Math.floor(Math.random() * 50);
  let inte = setInterval(function () {
    count++;
    inner.style.width = count + "%";
    h1.textContent = count + "%";
    btn.textContent = `Downloading...${num / 10}s`;
    btn.style.opacity = 0.5;
  }, num);
  setTimeout(function () {
    clearInterval(inte);
    btn.innerHTML = `Downloaded`;
    btn.style.opacity = 0.5;
  }, num * 100);
});

// Cohort code

// chat gpt code
// let btn = document.querySelector("#btn");
// let h1 = document.querySelector("#progress");
// let inner = document.querySelector(".inneri");
//
// btn.addEventListener("click", function () {
//   btn.style.pointerEvents = "none";
//   btn.style.opacity = 0.5;
//   btn.textContent = "Downloading...";
//
//   let count = 0; // reset progress each time
//   inner.style.width = "0%";
//   h1.textContent = "0%";
//
//   // Random speed for realistic effect
//   let speed = 20 + Math.floor(Math.random() * 30); // 20–50 ms
//
//   let interval = setInterval(() => {
//     count++;
//
//     inner.style.width = count + "%";
//     h1.textContent = count + "%";
//
//     if (count >= 100) {
//       clearInterval(interval);
//       btn.textContent = "Downloaded";
//       return;
//     }
//   }, speed);
// });
