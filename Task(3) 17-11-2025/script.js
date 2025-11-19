let main = document.querySelector("main");

main.addEventListener("mousemove", function () {
  let btn = document.createElement("button");
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  btn.style.position = "absolute";
  btn.style.left = x + "%";
  btn.style.top = y + "%";
  btn.style.border = `2px solid rgb(${c1},${c2},${c3})`;
//   btn.style.backgroundColor="red"
  btn.style.boxShadow = `0 4px 12px rgba(255, 255, 255, 0.15);`;

  main.appendChild(btn);
});
