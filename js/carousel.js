$(document).ready(function(){
	$('.artistList').slick({
	  centerMode: true,
	  centerPadding: '10px',
	  infinite: true,
	  slidesToShow: 5,
	  autoplay: true,
	  speed: 1500,
	  index: 1,
	  focusOnSelect: true
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
});
   });