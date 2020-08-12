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
  if($(document).scrollTop() > window.innerHeight && !$('#myCheck').prop('checked')){
    $("#changeColor").css('background', clrdark);
  }
  else{
    $("#changeColor").css('background',clrlight);
  }
  //for scroling
  $(document.body).on('touchmove', onScroll); // for mobile
  $(window).on('scroll', onScroll);//for desktop
});

function onScroll() {
  // alert("triggered");
  if($(document).scrollTop() > window.innerHeight && !$('#myCheck').prop('checked')){
    $("#changeColor").css('background', clrdark);
  }
  else{
    $("#changeColor").css('background',clrlight);
  }
};

//change color when menu is called/uncalled
$('#myCheck').change(function(){
  if (this.checked) {
    // window.alert("checked!");
    $("#changeColor").css('background', clrlight);
  }else{
    if($(document).scrollTop() > window.innerHeight){
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
});

// slick
$('.box').slick({
  prevArrow: '<div class="slider-arrow slider-prev fas fa-chevron-circle-left fa-2x"></div>',
  nextArrow: '<div class="slider-arrow slider-next fas fa-chevron-circle-right fa-2x"></div>',
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [{
      breakpoint: 2000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});