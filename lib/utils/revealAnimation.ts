/**
 * Handles the reveal animation for elements with the 'reveal' class
 * This function observes elements with the 'reveal' class and reveals them when they enter the viewport
 */

export const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, {
    root: null, // Use viewport as root
    threshold: 0.15, // Reveal when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Adjust the trigger point
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
};
