// barba.init({
//   transitions: [{
//     name: 'horizontal-slide-fade',

//     leave(data) {
//       const container = data.current.container;
//       gsap.set(container, {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 1
//       });

//       return gsap.to(container, {
//         opacity: 0,
//         x: '-100%',
//         duration: 0.6,
//         ease: 'power2.inOut'
//       });
//     },

//     beforeEnter() {
//       // Ensure you start at the top of the page before entering a new one
//       window.scrollTo(0, 0);
//     },

//     enter(data) {
//       const container = data.next.container;
//       gsap.set(container, {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         zIndex: 0
//       });

//       // Run your slide-in tween
//       return gsap.from(container, {
//         opacity: 0,
//         x: '100%',
//         duration: 0.6,
//         ease: 'power2.out',
//         onComplete: () => {
//           // 1) Clear GSAP props so the page returns to normal flow
//           gsap.set(container, { clearProps: 'all' });

//           // 2) Autoplay any <video> elements in the new container
//           container.querySelectorAll('video').forEach(v => {
//             // some browsers require muted to autoplay
//             v.muted = true;
//             v.play().catch(() => {
//               /* optional: handle play failure (e.g. show a play button) */
//             });
//           });

//           // 3) Re-bind your modal logic
//           initProjectModal();
//         }
//       });
//     }
//   }]
// });

// // Bootstrap-modal loader (runs on first load and after each transition)
// function initProjectModal() {
//   const modalEl  = document.getElementById('projectModal');
//   const bodyEl   = document.getElementById('modalBody');
//   const rawData  = document.getElementById('projectData');
//   const projects = rawData ? JSON.parse(rawData.textContent) : [];

//   // Remove old listener if any, to avoid duplicates
//   modalEl.removeEventListener('show.bs.modal', modalEl._handler);

//   function onShow(e) {
//     const slug    = e.relatedTarget.getAttribute('data-slug');
//     const project = projects.find(p => p.slug === slug);
//     if (!project) return;

//     modalEl.querySelector('.modal-title').textContent = project.title;
//     bodyEl.innerHTML = project.images
//       .map(url => `<img src="${url}" alt="${project.title}" class="img-fluid mb-2">`)
//       .join('');
//   }

//   modalEl._handler = onShow;
//   modalEl.addEventListener('show.bs.modal', onShow);
// }

// // Initialize the modal logic on the very first page load
// document.addEventListener('DOMContentLoaded', initProjectModal);
