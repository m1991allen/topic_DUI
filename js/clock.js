$(document).ready(function () {
  var clock = setInterval("getTime()", 1000);
});

function getTime() {
  //angles
  var secChange;
  var minChange;
  var hourChange;

  var tget = new Date();

  var seconds = tget.getSeconds();
  var minutes = tget.getMinutes();
  var hours = tget.getHours();

  hours = ((hours > 12) ? hours - 12 : hours);
  if (seconds === 0) {
    secChange = 0;
  } else {
    secChange = seconds * 6;
  }
  if (minutes === 0) {
    minChange = 0;
  } else {
    minChange = minutes * 6;
  }
  if (hours === 12) {
    hourChange = 0;
  } else {
    hourChange = (hours * 30) + (minutes / 2);
  } //0.5deg
  var secArrow = "rotate(" + secChange + "deg)";
  $(".seconds").css({ "-webkit-transform": secArrow, "-moz-transform": secArrow, "-o-transform": secArrow, "-ms-transform": secArrow, "transform": secArrow });
  var minArrow = "rotate(" + minChange + "deg)";
  $(".minutes").css({ "-webkit-transform": minArrow, "-moz-transform": minArrow, "-o-transform": minArrow, "-ms-transform": minArrow, "transform": minArrow });
  var hourArrow = "rotate(" + hourChange + "deg)";
  $(".hours").css({ "-webkit-transform": hourArrow, "-moz-transform": hourArrow, "-o-transform": hourArrow, "-ms-transform": hourArrow, "transform": hourArrow });
}
