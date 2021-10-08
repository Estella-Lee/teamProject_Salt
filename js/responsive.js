$(document).ready(function () {
    // === latest release === //
    var owl = $('.owl-carousel'); 
    owl.owlCarousel({
        items:5,                 
        loop:true,               
        margin:25,
        responsive : {
            0 : {
                items: 3,
                margin: 15
            },
            768 : {
                items : 4,
            },
            1024 : {
                items : 5,
            }
        }
    });
})

var resizeTimer;
$(window).bind('resize', function () {
    window.clearTimeout( resizeTimer );
    resizeTimer = window.setTimeout(resizeFunction, 500);
});

function resizeFunction() {

    if (window.innerWidth < 768) { //모바일
        $(function () {
            // === salt sharing === //
            $(".link02, .sharingTxt p").hide();
            $(".sharingTxt .link01").removeAttr("href");

           
            $(".sharingTxt h3").on("click", function () {
                // var link = $(".link02");
                // $(".sharingTxt p").append(link);

                $(".sharingTxt p").not($(this).next(".sharingTxt p").slideToggle(500)).slideUp();
            });

            $(".sharingTxt h3").off().on("click", function () {
                $(".sharingTxt p").not($(this).next(".sharingTxt p").slideToggle(500)).slideUp();
            });
        })
    } else if (window.innerWidth < 1024) { //태블릿
        $(function () {
        
            // === salt sharing === //
            $(".sharingTxt h3").off("click");
            $(".sharingTxt p").show();
            
            var linkAdd = $(".sharingTxt .link02").attr("href");
            $(".sharingTxt .link01").attr("href", linkAdd);
        });    

    } else { //pc
        $(function () {
            // === salt sharing === //
            $(".sharingTxt h3").off("click");
            $(".sharingTxt p").show();
            
            var linkAdd = $(".sharingTxt .link02").attr("href");
            $(".sharingTxt .link01").attr("href", linkAdd);
            
        });
    }
}

function setResponsive() {
    resizeFunction();
}

$(window).on("load", function () {
    setResponsive();
});

$(window).on("resize", function () {
    setResponsive();
});