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

  function restTime(setting) {
    myOption = setting;
    document.getElementById("ans_sug").innerHTML = myOption;
  }


  // 錘子
  $("#hammer").mousedown(function () {
    $("#hammer>img").attr("src", "img/hammer_knock.png");
  });
  $("#hammer").mouseup(function () {
    $("#hammer>img").attr("src", "img/hammer.png");
  });

  // 答案
  $("#result").click(function () {
    $("#info_answer").css("display", "block");
  });
  $("#result1").click(function () {
    $("#info_answer1").css("display", "block");
  });

  // 燈箱關閉
  $(".fancybox-close").click(function () {
    $("#info_answer, #info_answer1").css("display", "none");
  });

  // 人物訪談
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

  // 酒精鎖地圖
  $("#set1").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map1.png");
  });
  $("#set2").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map2.png");
  });
  $("#set3").mouseover(function () {
    $("#lockMap>img").attr("src", "img/map3.png");
  });

  // 酒精鎖切換

  $("#lock").mouseover(function () {
    $("#lock").attr("src", "img/lock1.png");
  });
  $("#lock").mouseleave(function () {
    $("#lock").attr("src", "img/lock.png");
  });

  // 倒酒
  let deg = 0;
  $("#pour_bot").mousedown(function () {
    if (deg < 7) {
      $("#pour_deg").attr("src", "img/game/wine_" + (deg + 1) + ".svg");
    }
    deg++;
  });
  $("#pour_deg").mousedown(function () {
    $("#pour_deg").attr("src", "img/game/wine_0.svg");
    let deg_null = 0;
    deg = deg_null;
  });

  // 翻牌
  // let display = 
  // $('.card').mousedown(function () {
  //   $('.back').css('display', 'none');
  // });

  $('.card').click(function (event) {
    $(event.currentTarget).toggleClass('flipped');
  });
})
