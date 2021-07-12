$('.toggled-nav-wrapper').on('click', function(e) {
  e.stopPropagation();
});
$('.nav-icon-open-wrapper, .nav-icon-close-wrapper, header .nav-toggle-body-overlay').on('click', function{
  $('html').toggleClass('nav-open');
});
