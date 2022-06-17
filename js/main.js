// $(window).scroll(function () {
//   let topScroll = $(window).scrollTop()
//   console.log(topScroll)
//   if (topScroll > 100){
//     $(".header-top").addClass('d-none')
//     $('.header-bottom').addClass('fixed-top')
//   }else{
//     $(".header-top").removeClass('d-none')
//     $('.header-bottom').removeClass('fixed-top')
//   }
// })

function owlCarousel_slider() {
  //  carousal of the start
  $(".owl-theme").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    animateOut: "fadeOut",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  //  carousal of new
  $(".pro-cat-slider").owlCarousel({
    items: 6,
    margin: 10,
    nav: true,
    dots: false,
    loop: true,
    // autoplay:true,
    // autoplayTimeout:5000,
    // autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1770: {
        items: 6,
      },
    },
  });

  $("#top-cat-pro").owlCarousel({
    items: 5,
    nav: true,
    dots: false,
    margin: 40,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      460: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1770: {
        items: 5,
      },
    },
  });

  $("#blog").owlCarousel({
    items: 4,
    nav: true,
    dots: false,
    margin: 20,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1770: {
        items: 4,
      },
    },
  });
}

function responsive_dropdown() {
  /* ---- For Footer JS Start ---- */
  $(".icon-click i").on("click", function () {
    if ($(this).hasClass("fa-plus")) {
      $(this).removeClass("fa-plus");
      $(this).addClass("fa-minus");
      $(this).parent().parent().find(".footer-block-contant").slideDown()
      // console.log("yes");
    } else {
      $(this).addClass("fa-plus");
      $(this).removeClass("fa-minus");
      $(this).parent().parent().find(".footer-block-contant").slideUp();
      // console.log("no");
    }
  });
  /* ---- For Footer JS End ---- */
}

$(document).ready(function () {
  owlCarousel_slider();
  responsive_dropdown();
});

$(".nav-link").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().find(".nav-link").removeClass("active");
});

// breakpoints(1200, function(oldPoint, newPoint) {
//   alert('The screen width just changed');
// });
$(window).resize(function () {
  var width = $(window).width();
  if (width < 991) {

  }
});