
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	fitscreen 			 = window_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("i", this).toggleClass("fa-bars fa-times");
        $(".main-menu").addClass('mobile-menu');
    });


 });


let fab1 = document.getElementById('fab1');
let innerFabs = document.getElementsByClassName('inner-fabs')[0];

fab1.addEventListener('click', function () {
  innerFabs.classList.toggle('show');
});

document.addEventListener('click', function (e) {
  switch (e.target.id) {
    case "fab1":
    case "fab2":
    case "fab3":
    case "fab4":
    case "fabIcon":
      break;
    default:
      innerFabs.classList.remove('show');
      break;}

});