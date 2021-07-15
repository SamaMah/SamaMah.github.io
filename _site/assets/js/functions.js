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

$(document).ready(function(){

  $(".btn-project-open").on('click', function(){
    $(".project-modal-container").addClass("active")
  });

  $(".btn-project-close").on('click', function(){
    $(".project-modal-container").removeClass("active")
  });

});
