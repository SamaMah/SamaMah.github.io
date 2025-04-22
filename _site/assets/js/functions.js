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
const mobileBreakpoint = 900; // Replace with the actual px value of your $switch-to-mobile

$(window).on('resize', function () {
  if ($(window).width() > mobileBreakpoint) {
    $('html').removeClass('nav-active');
    $('.nav-icon-open-wrapper').removeClass('toggle'); // Also reset the hamburger animation
  }
});

//dropdown
 $('.portfolio-dropdown').on('click', function(){
   // Toggle dropdown
   $('html').toggleClass('dropdown-active');
 });

$('.cube').on('click', function(){
  //
  $('html').toggleClass('cube-rotate');
});

// Filters
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("pw-thumbnail");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
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

// Hide elements that are not selected
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

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Page transitions
barba.init({
  transitions: [{
    name: 'horizontal-slide-fade',
    leave(data) {
      // Slide current page to the left and fade out
      return gsap.to(data.current.container, {
        opacity: 0,
        x: '-100%', // Slide to the left
        duration: 0.6,
        ease: "power2.inOut"
      });
    },
    enter(data) {
      // Slide new page from the right and fade in
      return gsap.from(data.next.container, {
        opacity: 0,
        x: '100%', // Slide in from the right
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }]
});
