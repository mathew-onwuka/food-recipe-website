$(document).ready(function(){


var  nav = $(".nav");
	hdr = $('.header').height();

  	  $(window).scroll(function(){
 	if( $(this).scrollTop() > hdr){

  	  	nav.addClass("nav-scrolled");

 	} else {

  	  nav.removeClass("nav-scrolled");
 	 }
	});
});


window.onload = function () {
    document.getElementById('closebtn').onclick = function () {
        document.getElementById('main-modal').style.display = "none"
    };
};

