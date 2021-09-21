$(document).ready(function(){
	$('.artistList').slick({
	  centerMode: true,
	  centerPadding: '100px',
	  infinite: true,
	  slidesToShow: 5,
	  autoplay: true,
	  speed: 1000,
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