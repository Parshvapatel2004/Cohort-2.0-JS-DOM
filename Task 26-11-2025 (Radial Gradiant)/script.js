document.addEventListener("mousemove", (elem) => {
  document.body.style.setProperty("--x",elem.clientX + 'px');
  document.body.style.setProperty("--y",elem.clientY + 'px');


});
