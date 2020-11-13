(function ($) {
  "use strict";

  // Enable Bootstrap tooltips via data-attributes globally
  $('[data-toggle="tooltip"]').tooltip();

  // Enable Bootstrap popovers via data-attributes globally
  $('[data-toggle="popover"]').popover();

  $(".popover-dismiss").popover({
    trigger: "focus",
  });

  // Activate Feather icons
  feather.replace();

  // Activate Bootstrap scrollspy for the sticky nav component
  $("body").scrollspy({
    target: "#stickyNav",
    offset: 82,
  });

  // Scrolls to an offset anchor when a sticky nav link is clicked
  $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 81,
          },
          200
        );
        return false;
      }
    }
  });

  // Collapse Navbar
  // Add styling fallback for when a transparent background .navbar-marketing is scrolled
  var navbarCollapse = function () {
    if ($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
      return;
    }
    if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
      $(".navbar-marketing").addClass("navbar-scrolled");
    } else {
      $(".navbar-marketing").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery);

// Typewriting
var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("Hi there.")
  .pauseFor(900)
  .typeString(" Nice to meet you!")
  .pauseFor(3000)
  .deleteAll()
  .typeString("I'm a ")
  .pauseFor(500)
  .typeString("<em>life lover</em>")
  .pauseFor(2500)
  .deleteChars(10)
  .typeString("<strong>developer</strong>")
  .pauseFor(2500)
  .deleteAll()
  .typeString("...and a <strong>geek</strong> 🤓. ")
  .pauseFor(4500)
  .start();

//animation
const mouse = document.querySelector(".cursor");

function cursorAnimate(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function cursorActive(e) {
  const element = e.target;
  if (
    element.classList.contains("hover") ||
    element.classList.contains("nav-item")
  ) {
    mouse.classList.add("active");
  } else {
    mouse.classList.remove("active");
  }
}

window.addEventListener("mousemove", cursorAnimate);
window.addEventListener("mouseover", cursorActive);
