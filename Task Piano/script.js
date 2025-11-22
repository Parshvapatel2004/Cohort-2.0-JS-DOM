let piano = document.querySelectorAll(".pianokeys");

piano.forEach(function (val) {
  val.addEventListener("click", function () {
    // console.log('hello');
    let note = val.dataset.note;
    // console.log(note);

    let audio = new Audio("Sounds/" + note + ".mp3");
    audio.play();
  });
});

document.addEventListener("keydown", function (event) {
  let press = event.key.toUpperCase();
  // console.log(press);
  let key = document.querySelector(`[data-note="${press}"]`);
  if (key) {
    let audio = new Audio("Sounds/" + press + ".mp3");
    audio.play();
  }
});
