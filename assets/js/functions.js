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

// Projects, modal pop-up
const openModalThumbnails = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-modal-close]')

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}
openModalThumbnails.forEach(icon => {
    icon.addEventListener('click', () => {
        const modal = document.querySelector(icon.dataset.modalTarget)
        openModal(modal)
    })
})

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project-modal-container')
        closeModal(modal)
    })
})
