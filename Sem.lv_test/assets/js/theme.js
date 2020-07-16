$('#navbarToggle').click(function(){
  if( $("#navbar").css('display') == 'none') {
    $('#navbar').attr("style", "display: block !important; flex-basis: 100%; flex-grow: 1; align-items: center;");
    $('.navbar').attr("style","flex-wrap: wrap; display: flex;");
    $('#navbar .lang-mobile').attr("style", "display: block;");
    $('.navbar-nav').attr("style", "flex-direction: column;");
  } else {
    $('#navbar').attr("style", "");
    $('.navbar').attr("style","");
    $('#navbar .lang-mobile').attr("style", "");
    $('.navbar-nav').attr("style", "");
  }
});
$( window ).resize(function() {
  if($( window ).width() > 1300 ) {
    $('#navbar').attr("style", "");
    $('.navbar').attr("style","");
    $('#navbar .lang-mobile').attr("style", "");
    $('.navbar-nav').attr("style", "");
  }
});
