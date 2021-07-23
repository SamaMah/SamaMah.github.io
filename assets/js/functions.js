// Mobile nagigation pop-up
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


//dropdown
 $('.portfolio-dropdown').on('click', function(){
   // Toggle dropdown
   $('html').toggleClass('dropdown-active');
 });

$('.cube').on('click', function(){
  // Toggle nav
  $('html').toggleClass('cube-rotate');
});
