function fixBounce(){
  var stored_height = $('#section1').outerHeight() + $('#section2').outerHeight() 
  + $('#section3').outerHeight() + $('#section4').outerHeight() + $('#section5').outerHeight()
  + $('#section6').outerHeight() + $('#section7').outerHeight();
  var a = 0;
  $(document).bind('scroll',function(){
    if (($(window).scrollTop() > stored_height) && (a == 0)) {
     ga('send','event','fix-bounce-rate','scroll','over 50%');
     a = 1;
     console.log($(window).scrollTop())
    }
  })
}

$(document).ready(fixBounce);
