let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = [
  "Happiness is not something ready-made",
//   "Laugh as much as you breathe and love as long as you live",
//   "If I'm gonna tell a real story, I'm gonna start with my name",
  "Change the world by being yourself",
//   "To live is the rarest thing in the world",
  "If you build it, they will come",
//   "If you are going through hell, keep going.",
  "Stay hungry, stay foolish",
//   "It always seems impossible until its done",
];

btn.addEventListener("click", function () {
  let ar = arr[Math.floor(Math.random() * arr.length)];
  let h1 = document.createElement("h1");
  let x = Math.random() * 100;
  let y = Math.random() * 100;

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);
  //   let r = Math.random() * 360;
  let s = Math.random() * 2;
  h1.innerHTML = ar;
  h1.style.color = `rgb(${c1},${c2},${c3})`;
  h1.style.position = "absolute";
  h1.style.left = y + "%";
  h1.style.top = x + "%";

  //   h1.style.rotate = r + "deg";
  h1.style.scale = s;

  main.appendChild(h1);
});
