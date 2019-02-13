(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//popover pour voir les infos survol de souris
$(function () {
  $('[data-toggle="popover"]').popover({
      placement: "auto",
      trigger: "hover",
      delay: { "show": 200, "hide": 200 },
  })
});

//Calcul automatiquement age
var birhtday = new Date(1993, 9-1, 15);

var today = new Date();
var age = Math.floor((today-birhtday) / (365.25 * 24 * 60 * 60 * 1000));
$('#age').html(age +' ans.');
$('#agePageTurkish').html(age +' yaşında.');
//Fin calcul

$('#my_carousel, #my_carousel2').carousel({
  interval: 2000
});

$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');
  });
});