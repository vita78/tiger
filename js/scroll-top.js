$(function(){
  $.fn.scrollToTop=function(){
    $(this).hide().removeAttr("href");
    if($(window).scrollTop() > "300"){
        $(this).fadeIn("slow")
  }
  var scrollDiv=$(this);
  $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
    $(scrollDiv).fadeOut("slow")
    }else{
    $(scrollDiv).fadeIn("slow")
  }
  });
    $(this).click(function(){
      $("html, body").animate({scrollTop:0},"slow")
    })
  }
});
$(function() {
  $(".scroll-to-top").scrollToTop();

  $('.bxslider').bxSlider({
    pager:false
  });

    var pull = $('.menu-pull');
    var menu = $('.menu');
    var menuHeight  = menu.height();

    $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });

    // $(window).resize(function(){
    // var w = $(window).width();
    // if(w > 320 && menu.is(':hidden')) {
    //     menu.removeAttr('style');
    // });

});
