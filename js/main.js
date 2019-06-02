// Responsive Nav
$(function() {
  menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});

// Smooth Scrolling
$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
//onscroll 
    $(window).scroll(function () {
      if ($(document).scrollTop() > ($('nav').height())) {
        $('nav').addClass('scrolled');
      }
      else { $('nav').removeClass('scrolled');
      }
    });
    $(window).scroll(function () {
      if ($(document).scrollTop() > ($('nav').height())) {
        $('ul').addClass('scrolledUL');
      }
      else { $('ul').removeClass('scrolledUL');
      }
    });
    $(window).scroll(function () {
      if ($(document).scrollTop() > ($('nav').height())) {
        $('a').addClass('scrolleda');
      }
      else { $('a').removeClass('scrolleda');
      }
    });