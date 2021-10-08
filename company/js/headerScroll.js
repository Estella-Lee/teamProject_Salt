$(window).on('load', function() {

  $(".logoMenu").css("width", "100%");
  let logoMenu2 = $(".logoMenu").clone().addClass("logoMenu2").appendTo("header");
  let lastScroll = 300;

  $(".logoMenu2").css({
      "position" : "fixed",
      "top" : "0",
      "opacity" : "0",
      "zIndex" : "999999",
      "transition" : "all 0.3s"
  })

  $(window).scroll(function(){
      let scrollMove = $(window).scrollTop();

      if (scrollMove == 0) {
          $(logoMenu2).css("opacity", "0");

      } else if (scrollMove > lastScroll) {
          $(".logoMenu2").css({
              "top" : "-20%",
              "backgroundColor" : "#fff"
          });

      } else {
          $(".logoMenu2").css({
              "opacity" : "1",
              "top" : "0",
          });

          $(".logoMenu2 .gnb li>a").css("color", "#000");
          $(".logoMenu2 .loginSignup li>a").css("color", "#000");
          $(".logoMenu2 .logo h1 img").attr("src", "./images/logo.png");
      } 
      lastScroll = scrollMove;
  });

    if (window.matchMedia("(max-width:768px)").matches) {
        $(".logoMenu2").hide();
    }

  $(window).resize(function () {
    if (window.matchMedia("(max-width:768px)").matches) {
        $(".logoMenu2").hide();
    }
  });
});