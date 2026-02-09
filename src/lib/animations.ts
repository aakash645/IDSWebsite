/**
 * GSAP Animation Utilities
 * Common animation presets and helpers
 */

import gsap from 'gsap';

// Animation presets
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: 'power3.out',
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    duration: 0.8,
    ease: 'power3.out',
  },
  fadeInLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: 'power3.out',
  },
  fadeInRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    duration: 0.8,
    ease: 'power3.out',
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    duration: 0.6,
    ease: 'back.out(1.7)',
  },
};

// Create a stagger animation
export const createStaggerAnimation = (
  elements: Element[],
  animationType: keyof typeof animations,
  staggerDelay: number = 0.1
) => {
  const { initial, animate, duration, ease } = animations[animationType];
  
  gsap.set(elements, initial);
  
  return gsap.to(elements, {
    ...animate,
    duration,
    ease,
    stagger: staggerDelay,
  });
};

// Create scroll-triggered animation
export const createScrollAnimation = (
  element: Element,
  animationType: keyof typeof animations,
  scrollTriggerOptions?: gsap.plugins.ScrollTriggerInstanceVars
) => {
  const { initial, animate, duration, ease } = animations[animationType];
  
  gsap.set(element, initial);
  
  return gsap.to(element, {
    ...animate,
    duration,
    ease,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...scrollTriggerOptions,
    },
  });
};

// Text reveal animation
export const createTextReveal = (element: Element, delay: number = 0) => {
  return gsap.from(element, {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: 'power4.out',
    delay,
  });
};

// Hover scale animation helper
export const createHoverAnimation = (element: Element) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    scale: 1.05,
    duration: 0.3,
    ease: 'power2.out',
  });
  
  return tl;
};
