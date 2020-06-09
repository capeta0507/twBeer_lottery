$(function(){
  $('.menu-m').click(function(){
    $('.menu-block-mb').stop().fadeToggle(300);
    $(this).toggleClass("active");
  });
  $('.menu li a').click(function(){
    $('.menu-block-mb').fadeOut()
    $(".menu-m").removeClass("active");
  })
  // 快速至頂
  $("#goTop").on("click",function () {
    // alert('至頂');
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
  });
  $(window).scroll(function(){
    var window_scrollTop = $(window).scrollTop();
    // 側邊按鈕
    if(window_scrollTop > 200){
      $('#goTop').css('right', '10px');
    } else {
      $('#goTop').css('right', '-100px');
    }
  });
})