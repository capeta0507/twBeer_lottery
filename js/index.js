$(function(){
  $('.menu-m').click(function(){
    $('.menu-block-mb').stop().fadeToggle(300);
    $(this).toggleClass("active");
    let active = $(this).attr('class')
    active = active.split(' ')[1]
    console.log(active)
    if(active){
      $('.bar1').css( 'transform','rotate(60deg) translate(16px, -32px)');
      $('.bar2').css( 'transform','rotate(60deg) translate(10px, -35px)');
      $('.bar3').css( 'transform','rotate(60deg) translate(3px, -39px)');
      setTimeout(function(){
        $('.bar1').css( 'transform','rotate(-48deg) translate(4px, 0px)');
        $('.bar2').css( 'opacity','0');
        $('.bar3').css( 'transform','rotate(50deg) translate(5px, -36px)');
      },200)
    } else {
      $('.bar1').css( 'transform','rotate(60deg) translate(16px, -32px)');
      $('.bar2').css( 'transform','rotate(60deg) translate(10px, -35px)');
      $('.bar3').css( 'transform','rotate(60deg) translate(3px, -39px)');
      setTimeout(function(){
        $('.bar1').css( 'transform','rotate(60deg) translate(5px, -37px)');
        $('.bar2').css( 'opacity','1');
        $('.bar3').css( 'transform','rotate(60deg) translate(15px, -33px)');
      },200)
    }
  });
  $('.menu li a').click(function(){
    $('.menu-block-mb').fadeOut()
    $(".menu-m").removeClass("active");

    $('.bar1').css( 'transform','rotate(60deg) translate(16px, -32px)');
    $('.bar2').css( 'transform','rotate(60deg) translate(10px, -35px)');
    $('.bar3').css( 'transform','rotate(60deg) translate(3px, -39px)');
    setTimeout(function(){
      $('.bar1').css( 'transform','rotate(60deg) translate(5px, -37px)');
      $('.bar2').css( 'opacity','1');
      $('.bar3').css( 'transform','rotate(60deg) translate(15px, -33px)');
    },200)
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