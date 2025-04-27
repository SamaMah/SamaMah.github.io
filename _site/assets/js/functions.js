// Mobile navigation pop-up
const navSlide = function(){
  const navToggle = $('.nav-icon-open-wrapper, .nav-body-overlay');
  const nav = $('.nav-links');
  const navLinks = $('.nav-mobile .nav-links a'); // Select all links inside mobile nav

  // Toggle nav when hamburger or overlay is clicked
  navToggle.on('click', function(){
    $('html').toggleClass('nav-active');
    $('.nav-icon-open-wrapper').toggleClass('toggle');
  });

  // Close the mobile nav when a link is clicked
  navLinks.on('click', function() {
    if ($('html').hasClass('nav-active')) {
      $('html').removeClass('nav-active');
      $('.nav-icon-open-wrapper').removeClass('toggle'); // Reset hamburger animation
    }
  });
}
navSlide();

const mobileBreakpoint = 900; // Replace with the actual px value of your $switch-to-mobile

// Reset nav on resize
$(window).on('resize', function () {
  if ($(window).width() > mobileBreakpoint) {
    $('html').removeClass('nav-active');
    $('.nav-icon-open-wrapper').removeClass('toggle'); // Also reset the hamburger animation
  }
});

// Dropdown functionality
$('.portfolio-dropdown').on('click', function(){
  $('html').toggleClass('dropdown-active');
});

// Filters functionality
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("pw-thumbnail");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Toggle open/closed for each project block
function toggleProject(block) {
  const projectBlock = block.closest('.project-block');
  projectBlock.classList.toggle('open');
}