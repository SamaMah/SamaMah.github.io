// Mobile nagigation pop-up
const navSlide = function(){
  const navToggle = $('.nav-icon-open-wrapper, .nav-body-overlay');
  const nav = $('.nav-links');

  navToggle.on('click', function(){
    // Toggle nav
    $('html').toggleClass('nav-active');
    // Nav button animation
    $('.nav-icon-open-wrapper').toggleClass('toggle');
  });
}
navSlide();


//dropdown
 $('.portfolio-dropdown').on('click', function(){
   // Toggle dropdown
   $('html').toggleClass('dropdown-active');
 });

$('.cube').on('click', function(){
  //
  $('html').toggleClass('cube-rotate');
});
