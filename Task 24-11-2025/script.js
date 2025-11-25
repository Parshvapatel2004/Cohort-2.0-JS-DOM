let btn = document.querySelectorAll("button");

btn.forEach(function (elem) {
  elem.style.backgroundColor = "green";
      elem.style.color = "white";


  elem.addEventListener("click", function () {
    if (elem.innerHTML === "Add Friend") {
      elem.innerHTML = "Remove Friend";
      elem.style.backgroundColor = "red";
      elem.style.color = "white";
    } else {
      elem.textContent = "Add Friend";
      elem.style.color = "white";
      elem.style.backgroundColor = "green";
    }
  });
});
