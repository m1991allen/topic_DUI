$(function() {
  // pour beer
  var mugHeight;
  var beerHeight;
  var percentFilled;
  var roundedPercent;

  $("#percent-filled").html("現在毫升數: " + 0 + "cc / 2000 cc");
  function getHeights() {
    mugHeight = $("#mug").height();
    beerHeight = $("#beer").height();
    percentFilled = (beerHeight / mugHeight) * 100;
    roundedPercent = Math.round(percentFilled);
    $("#percent-filled").html(
      "現在毫升數: " + Math.round(percentFilled * 20) + "cc / 2000 cc"
    );
  }

  $("#handle").mousedown(function() {
    $("#beer").addClass("fill");
    $("#beer").css("animation-play-state", "running");
    $("#pour").addClass("pouring");
  });

  $("#handle").mouseup(function() {
    getHeights();
    $("#beer").css("animation-play-state", "paused");
    $("#pour").removeClass("pouring");
  });

  $("#mug").click(function() {
    $("#beer").removeClass("fill");
    getHeights();
  });
});
