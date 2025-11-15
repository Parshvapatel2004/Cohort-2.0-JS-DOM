// Math.random Concept

// let a = Math.floor(Math.random() * 101);
// // Number randomly comes form 0 to 100
// console.log(a);

// let arr = ['Parshva','Patel','Kashish','Hey','Hello']

// let a = Math.floor(Math.random()*arr.length)

// console.log(arr[a]);

let box = document.querySelector("#box");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {

  setInterval(function(){
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    //   console.log(c1,c2,c3);
    box.style.background = `rgb(${c1},${c2},${c3})`;
    //   box.innerHTML = `rgb(${c1},${c2},${c3})`;
  },1000)

});

