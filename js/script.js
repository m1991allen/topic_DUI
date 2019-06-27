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
    $(".mask").css("display", "block")
  });
  $("#result1").click(function () {
    $("#info_answer1").css("display", "block");
    $(".mask").css("display", "block")
  });

  $(".mask").click(function () {
    $(".mask").css("display", "none");
    $("#info_answer").css("display", "none");
    $("#info_answer1").css("display", "none");
  });

  // 燈箱關閉
  $(".fancybox-close").click(function () {
    $("#info_answer, #info_answer1").css("display", "none");
    $(".mask").css("display", "none");
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
  $('.card').click(function (event) {
    $(event.currentTarget).toggleClass('flipped');
  });

  // gotop
  $('#gotop').click(function (event) {
    $('html, body').animate({
      scrollTop: 0
    }, '1000');
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() < 100) { //判斷捲軸小於200座標位置時，消失
      $('#gotop').stop().fadeOut('fast');
    } else {
      $('#gotop').stop().fadeIn('fast'); //stop()可以讓使用者停止滾動時也跟著停止，不會持續做完
      // $('#gotop').stop().fadeTo('fast', 1);
      // fadeIn及fadeOut同時使用可能會有衝突，所以可以用fadeTo替換，但要加上透明度參數)
    }
  });


})
