$('#navbarToggle').click(function(){
  if( $("#navbar").css('display') == 'none') {
    $('#navbar').attr("style", "display: block !important; flex-basis: 100%; flex-grow: 1; align-items: center; align-self: flex-start;");
    $('.navbar').attr("style","flex-wrap: wrap; display: flex; height: 100vh;");
    $('#navbar .lang-mobile').attr("style", "display: block;");
    $('.navbar-nav').attr("style", "flex-direction: column;");
    $('#navbarToggle span').removeClass("d-none");
    $('#navbarToggle span:first').addClass("d-none");
    $('.Scrolldown').addClass("d-none");
  } else {
    $('#navbar').attr("style", "");
    $('.navbar').attr("style","");
    $('#navbar .lang-mobile').attr("style", "");
    $('.navbar-nav').attr("style", "");
    $('#navbarToggle span').addClass("d-none");
    $('#navbarToggle span:first').removeClass("d-none");
  }
});
$( window ).resize(function() {
  if($( window ).width() > 1300 ) {
    $('#navbar').attr("style", "");
    $('.navbar').attr("style","");
    $('#navbar .lang-mobile').attr("style", "");
    $('.navbar-nav').attr("style", "");
    $('#navbarToggle span').addClass("d-none");
    $('#navbarToggle span:first').removeClass("d-none");
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() === 0 || ( $('.Supported-by').offset().top + $('.Supported-by').height() <  $(window).scrollTop() + $(window).height() )) {
     $('.Scrolldown').addClass("d-none");
   }else {
     $('.Scrolldown').removeClass("d-none");
   }
});

$('#ScrollButton').click(function(){
  event.preventDefault();
  $('html, body').animate({
          scrollTop: $('.Contact-us').offset().top + $('.Supported-by').innerHeight() + $('.Contact-us').innerHeight()  - $('.Contact-us').height()
        },1000, function() {
          });
});
