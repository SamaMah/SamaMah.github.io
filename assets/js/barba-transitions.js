barba.init({
  transitions: [{
    name: 'horizontal-slide-fade',

    // 1) Leave async: wait for the old page to slide+fade out
    async leave({ current }) {
      await gsap.to(current.container, {
        x: '-100%',
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power2.inOut'
      });
    },

    // 2) beforeEnter: set up the new page off-screen & hidden
    beforeEnter({ next }) {
      window.scrollTo(0, 0);
      gsap.set(next.container, {
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        x: '100%',
        autoAlpha: 0
      });
    },

    // 3) Enter async: only now slide+fade the new page in
    async enter({ next }) {
      // kick off the slide-in tween and await its completion
      await gsap.to(next.container, {
        x: '0%',
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power2.out'
      });

      // clear inline props so your styles/layout return to normal
      gsap.set(next.container, { clearProps: 'all' });

      // now that it's in place, do non-blocking chores:
      next.container.querySelectorAll('video').forEach(v => v.play());
      initProjectModal();
    }
  }]
});

// initProjectModal() stays exactly as you already have it.
function initProjectModal() {
  const modalEl  = document.getElementById('projectModal');
  const bodyEl   = document.getElementById('modalBody');
  const rawData  = document.getElementById('projectData');
  const projects = rawData ? JSON.parse(rawData.textContent) : [];

  modalEl.removeEventListener('show.bs.modal', modalEl._handler);

  function onShow(e) {
    const slug    = e.relatedTarget.getAttribute('data-slug');
    const project = projects.find(p => p.slug === slug);
    if (!project) return;

    modalEl.querySelector('.modal-title').textContent = project.title;
    bodyEl.innerHTML = project.images
      .map(url => `<img src="${url}" alt="${project.title}" class="img-fluid mb-2">`)
      .join('');
  }

  modalEl._handler = onShow;
  modalEl.addEventListener('show.bs.modal', onShow);
}

document.addEventListener('DOMContentLoaded', initProjectModal);
