/*
    We target a window object and we would attach an event listener for a load event
    Load event for the window object is going to happen once the images and scripts have been loaded
*/ 

window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))




$(document).ready(function(){
    $(".js--scroll-to-char").click(function (){
        $('html, body').animate({scrollTop: $('.js--section-chars').offset().top}, 1000);
    });
})
