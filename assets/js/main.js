/**
 * Scrolls to an element with header offset
 */

var fixmeTop = $(".main_nav").offset().top;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $(".main_nav").css({
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
    });
  } else {
    $(".main_nav").css({
      position: "static",
    });
  }
});

/**
 * Modal Open when Page load
 */
window.addEventListener("load", () => {
  // $("#StartModal").modal("show");
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

// Chairman’s Desk Slider Content

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Search Archive Slider

var swiper = new Swiper(".archive_swiper", {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Chairman’s Desk Video

var myVideo = document.getElementById("video1");

function playPause1() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

// Video

$("#big_video").on("shown.bs.modal", function () {
  $("#bigVideo")[0].play();
});

$("#video_MD").on("shown.bs.modal", function () {
  $("#md_small_video")[0].play();
});

// Back to top

var btn = $("#backtop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 450) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "150");
});

// *******Sticky Box When Scroll Page*******

// var stickitLeft = $(".stickthis").offset.left;
// var stickitWidth = $(".stickthis").width() + "px";
// var stickySidebarToTop = $(".stickthis").offset().top;
// $(window).scroll(function () {
//   var windowToTop = $(window).scrollTop();
//   if (windowToTop + 10 > stickySidebarToTop) {
//     $(".stickthis").css({
//       position: "fixed",
//       top: "10px",
//       left: stickitLeft,
//       width: stickitWidth,
//     });
//   } else {
//     $(".stickthis").removeAttr("style");
//   }
// });

// *******Custom Tabs*******

$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
// *****************
