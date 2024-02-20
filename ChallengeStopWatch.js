let SpanSecound = document.querySelector(".secound");
let SpanMinutes = document.querySelector(".minutes");
let SpanHours = document.querySelector(".hours");

let BtnStart = document.querySelector(".Start");
let BtnStop = document.querySelector(".Stop");
let BtnReset = document.querySelector(".Reset");

let init;

let parent = document.querySelector(".parentTwo");
let btn = document.querySelector(".btn");

let myFunction = function (cound, min, hour) {
  let stopWatch = () => {
    cound++;
    if (cound <= 9) {
      SpanSecound.innerText = "0" + cound;  // Concatenation
    }

    if (cound > 9) {
      SpanSecound.innerText = cound;
    }

    if (cound > 99) {
      min++;
      SpanMinutes.innerText = "0" + min;  // Concatenation
      cound = 0;
      SpanSecound.innerText = "0" + 0;
    }

    if (min > 9) {
      SpanMinutes.innerText = min;
    }

    if (min > 59) {
      hour++;
      SpanHours.innerText = "0" + hour; // Concatenation
      min = 0;
      SpanMinutes.innerText = "0" + 0;
    }

    if (hour > 9) {
      SpanHours.innerText = hour;
    }
  };

  BtnStart.onclick = function () {
    init = setInterval(stopWatch, 100);
  };

  BtnStop.onclick = () => {
    clearInterval(init);
  };

  BtnReset.onclick = function () {
    parent.classList.add('active');
  };

  btn.addEventListener("click", function () {
    parent.classList.remove('active');

    [cound, min, hour] = ["00", "00", "00"];

    SpanSecound.innerHTML = cound;
    SpanMinutes.innerText = min;
    SpanHours.innerHTML = hour;
  });
};

myFunction(0, 0, 0);