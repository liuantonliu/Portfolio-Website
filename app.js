const clrprimary = 'rgb(254,150,119)';
const clrdark = 'rgb(1, 15, 41)';
const clrneutral = 'rgb(184, 184, 184)';
const clrlight = 'rgb(245,245,245)';

//smooth scroll
$(document).ready(function() {
  var scrollLink = $('.scroll');
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
})

//get hamburger to change color
$(document).ready(function(){
  //for refresh
  if($(document).scrollTop() > $(window).height() && !$('#myCheck').prop('checked')){
    $("#changeColor").css('background', clrdark);
  }
  else{
    $("#changeColor").css('background',clrlight);
  }
  //for scroling
  $(window).scroll(function () {
    if($(document).scrollTop() > $(window).height() && !$('#myCheck').prop('checked')){
      $("#changeColor").css('background', clrdark);
    }
    else{
      $("#changeColor").css('background',clrlight);
    }
  });
});
//change color when menu is called/uncalled
$('#myCheck').change(function(){
  if (this.checked) {
    // window.alert("checked!");
    $("#changeColor").css('background', clrlight);
  }else{
    if($(document).scrollTop() > $(window).height()){
      $("#changeColor").css('background', clrdark);
    }
    else{
      $("#changeColor").css('background',clrlight);
    }
  }
}) 

//retract menu after clicking li
$(document).ready(function(){
  $(".uncheck").click(function(){
      $("#myCheck").prop("checked", false);
  });
});

//particle.js
particlesJS.load('particles-js', 'particles.json', function(){
  console.log('particles.json loaded...');
  });

// vanta.js
VANTA.GLOBE({
el: "#skills",
mouseControls: true,
touchControls: true,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
color: 0x62d8c,
color2: 0x343434,
size: 0.70,
backgroundColor: 0xd7d7d7
})

