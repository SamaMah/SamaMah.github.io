barba.init({
  transitions: [{
    name: 'horizontal-slide-fade',

    leave(data) {
      const container = data.current.container;
      gsap.set(container, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1
      });

      return gsap.to(container, {
        opacity: 0,
        x: '-100%',
        duration: 0.6,
        ease: 'power2.inOut'
      });
    },

    enter(data) {
      const container = data.next.container;
      gsap.set(container, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 0
      });

      return gsap.from(container, {
        opacity: 0,
        x: '100%',
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(container, { clearProps: 'all' });
        }
      });
    }
  }]
});
