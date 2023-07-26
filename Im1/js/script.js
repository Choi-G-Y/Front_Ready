jQuery(document).ready(function(){
	// 메뉴에 슬라이드 기능 추가 js
    $('.navi>li').mouseover(function(){
      $('.submenu').stop().slideDown(500);
      $("#menu_bg").stop().slideDown(500);
    }).mouseout(function(){
      $('.submenu').stop().slideUp(500);
      $("#menu_bg").stop().slideUp(500);
    });
    // 메인 포토 슬라이드 효과
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
      $('.imgslide a:first-child')
      .fadeOut()
      .next('a')
      .fadeIn()
      .end()
      .appendTo('.imgslide');
    },3000); 

});