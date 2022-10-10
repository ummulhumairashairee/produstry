// Menu button starts here
$(function () {
  let myTogglerBtn = $(".myTogglerIcon");
  myTogglerBtn.click(function () {
    let logo = $(".navbar .navbar-brand");
    logo.toggleClass("activeLogo");
    let menuBar = $("#menu-bar ul");
    menuBar.toggleClass("activeMenu");
  });

  let navbar = $(".navbar");
  let topSpace = navbar.offset().top;
  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();

    if (scrTop > topSpace) {
      navbar.addClass("nav_fixed");
      toTop.fadeIn();
    } else {
      navbar.removeClass("nav_fixed");
      toTop.fadeOut();
    }
  });

  let toTop = $(".toTop");
  toTop.click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
});

// Pogo Slider initiation starts

var mySlider = $("#main-slider")
  .pogoSlider({
    pauseOnHover: false,
    autoplay: true,
    generateButtons: false,
    autoplayTimeout: 7000,
    targetWidth: 1100,
    targetHeight: 400,
    generateNav: false,
  })
  .data("plugin_pogoSlider");
$("#slider .prevArrow").on("click", function () {
  mySlider.prevSlide();
});
$("#slider .nextArrow").on("click", function () {
  mySlider.nextSlide();
});

// Service slider jquery starts

$(".services_slides").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Portfolio slides starts
$(".portfolio_slides").slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

// Counting jquery starts

$(".counting_number").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// Blogs slider starts

$(".blog_slides").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  prevArrow: "#blogs .prevArrow",
  nextArrow: "#blogs .nextArrow",
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// Testimonial Slides starts

$(".testimonial_text_slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  prevArrow: "#testimonial .prevArrow",
  nextArrow: "#testimonial .nextArrow",
  asNavFor: ".testimonial_img_slider",
});

$(".testimonial_img_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  prevArrow: "#testimonial .prevArrow",
  nextArrow: "#testimonial .nextArrow",
  asNavFor: ".testimonial_text_slider",
});

// Brand Slides starts

$(".brand_slide").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  prevArrow: "#brand .prevArrow",
  nextArrow: "#brand .nextArrow",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//Team slide starts
$(".team_member").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  arrows: true,
  prevArrow: "#team .previous",
  nextArrow: "#team .next",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//video part starts here
new VenoBox({
  selector: ".my-video",
  ratio: "16x9",
  maxWidth: "70%",
  autoplay: false,
  border: "10px",
  titleAttr: "data-title",
  titlePosition: "top",
  titleStyle: "bar",
});
