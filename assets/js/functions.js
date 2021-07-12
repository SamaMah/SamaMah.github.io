// Stop propogation when button is pressed
// $('nav-icon-open-wrapper').on('click', function stopnav(e){ e.stopPropagation() });
// Opens nav when button is pressed
//$('.nav-icon-open-wrapper, .nav-body-overlay').on('click', function(){ $('html').toggleClass('nav-open'); });

const navSlide = function(){
  const navIcon = $('.nav-icon-open-wrapper');
  const nav = $('.nav-links');

  navIcon.on('click', function(){
    // Toggle nav
    $('html').toggleClass('nav-active');
    // Nav button animation
    $('.nav-icon-open-wrapper').toggleClass('toggle');
  });
}
navSlide();
