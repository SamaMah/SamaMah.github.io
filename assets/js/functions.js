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

//Modal
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const url = item.getAttribute('data-url');
      const type = item.getAttribute('data-type');

      let contentElement;

      if (type === "image") {
        contentElement = document.createElement('img');
        contentElement.src = url;
        contentElement.alt = "";
      } else if (type === "video") {
        contentElement = document.createElement('video');
        contentElement.src = url;
        contentElement.autoplay = true;
        contentElement.muted = true;
        contentElement.playsInline = true;
        contentElement.controls = true;
        contentElement.loop = true;
      }

      modalContent.innerHTML = '';
      if (contentElement) {
        modalContent.appendChild(contentElement);
      }

      modal.style.display = "flex";

      // Desktop Zoom (Mouse Wheel)
      if (contentElement.tagName === "IMG") {
        let scale = 1;

        // Mouse wheel zoom
        contentElement.addEventListener('wheel', function(e) {
          e.preventDefault();
          const zoomFactor = e.ctrlKey ? 0.05 : 0.1;  // More precise zoom if holding Ctrl
          if (e.deltaY < 0) {
            scale += zoomFactor; // Zoom in
          } else {
            scale -= zoomFactor; // Zoom out
          }

          // Limit the zoom level
          scale = Math.min(Math.max(scale, 1), 3);
          contentElement.style.transform = `scale(${scale})`;
        });

        // Mobile Zoom (Pinch to Zoom)
        let initialDistance = null;

        contentElement.addEventListener('touchstart', function(e) {
          if (e.touches.length === 2) {
            // Start of pinch gesture (two fingers)
            initialDistance = getDistance(e.touches[0], e.touches[1]);
          }
        });

        contentElement.addEventListener('touchmove', function(e) {
          if (e.touches.length === 2 && initialDistance !== null) {
            e.preventDefault();
            let currentDistance = getDistance(e.touches[0], e.touches[1]);
            let zoomFactor = (currentDistance - initialDistance) * 0.005;
            scale += zoomFactor;
            scale = Math.min(Math.max(scale, 1), 3);
            contentElement.style.transform = `scale(${scale})`;
            initialDistance = currentDistance;
          }
        });

        contentElement.addEventListener('touchend', function(e) {
          if (e.touches.length < 2) {
            initialDistance = null; // Reset when pinch ends
          }
        });

        // Helper function to calculate distance between two touch points
        function getDistance(touch1, touch2) {
          const dx = touch2.pageX - touch1.pageX;
          const dy = touch2.pageY - touch1.pageY;
          return Math.sqrt(dx * dx + dy * dy);
        }
      }
    });
  });

  // Close modal when clicking outside the content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) { // Only if click is on the background
      modal.style.display = "none";
      modalContent.innerHTML = '';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && modal.style.display === "flex") {
      modal.style.display = "none";
      modalContent.innerHTML = '';
    }
  });
});
