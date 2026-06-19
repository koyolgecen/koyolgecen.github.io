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
var birthday = new Date(1993, 9-1, 15);

var today = new Date();
var age = Math.floor((today-birthday) / (365.25 * 24 * 60 * 60 * 1000));
$('#age').html(age +' ans');
$('#agePageTurkish').html(age +' yaşında');
$('#agePageEnglish').html(age +' years old');
//Fin calcul

//le temps de defilement image carousel
$('#my_carousel, #my_carousel2, #my_carousel3, #my_carousel4, #my_carousel5').carousel({
  interval: 2000
});

//pour afficher limage dans une fenetre quand on clique dessus
$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');
  });
});

//pour animation nom et prenom
anime.timeline({loop: false})
    .add({
      targets: '.ml15 .animate',
      translateY: [24, 0],
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 900,
      delay: function(el, i) {
        return 180 * i;
      }
    });

//initialisation de data-aos pour les animations
AOS.init({
  duration: 700,
  once: true,
  offset: 80
});
