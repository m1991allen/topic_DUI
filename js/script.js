$(document).ready(function () {
  $(".various").fancybox({
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: "70%",
    height: "70%",
    autoSize: false,
    closeClick: false,
    openEffect: "none",
    closeEffect: "none"
  });

  $("#hammer").mousedown(function () {
    $("#hammer>img").attr("src", "img/hammer_knock.png");
  });
  $("#hammer").mouseup(function () {
    $("#hammer>img").attr("src", "img/hammer.png");
  });

  $("#result").click(function () {
    $("#info_answer").css("display", "block");
  });
  $("#result1").click(function () {
    $("#info_answer1").css("display", "block");
  });

  $(".fancybox-close").click(function () {
    $("#info_answer, #info_answer1").css("display", "none");
  });

  $("#ask1").mouseover(function () {
    $("#ask1_hover").css("display", "block");
  });
  $("#ask2").mouseover(function () {
    $("#ask2_hover").css("display", "block");
  });
  $("#ask3").mouseover(function () {
    $("#ask3_hover").css("display", "block");
  });
  $("#ask1,#ask2,#ask3").mouseleave(function () {
    $("#ask1_hover,#ask2_hover,#ask3_hover").css("display", "none");
  });

  $("#set1").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map1.png");
  });
  $("#set2").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map2.png");
  });
  $("#set3").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map3.png");
  });
});

function restTime(setting) {
  myOption = setting;
  document.getElementById("ans_sug").innerHTML = myOption;
}
