// Stop propogation when button is pressed
$('nav-icon-open-wrapper').on('click', function stopnav(e){ e.stopPropagation() });
// Opens nav when button is pressed
$('.nav-icon-open-wrapper, .nav-body-overlay').on('click', function(){ $('html').toggleClass('nav-open'); });

const navIcon = $('.nav-icon-open-wrapper');
const nav = $('.nav-links');

const navSlide = function(){
  navIcon.on('click', function(){ $('html').toggleClass('nav-active'); });
}
navSlide();
