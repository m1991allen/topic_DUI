$(document).ready(function() {
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

  $("#hammer").mousedown(function() {
    $("#hammer>img").attr("src", "img/hammer_knock.png");
  });
  $("#hammer").mouseup(function() {
    $("#hammer>img").attr("src", "img/hammer.png");
  });

  $("#result").click(function() {
    $("#info_answer").css("display", "block");
  });
  $("#result1").click(function() {
    $("#info_answer1").css("display", "block");
  });

  $(".fancybox-close").click(function() {
    $("#info_answer, #info_answer1").css("display", "none");
  });

  // $(".car_img").click(function() {
  //   $(".car_text").show(3000);
  // });
});
