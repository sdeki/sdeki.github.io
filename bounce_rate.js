function fixBounce(){
  var stored_height = $('#section1').outerHeight() + $('#section2').outerHeight() + $('#section3').outerHeight() + $('#section4').outerHeight();
  var a = 0;
  $(document).bind('scroll',function(){
    if (($(window).scrollTop() > stored_height) && (a == 0)) {
     ga('send','event','fix-bounce-rate','scroll','over 50%');
     a = 1;
    }
  })
}

$(document).ready(fixBounce);
