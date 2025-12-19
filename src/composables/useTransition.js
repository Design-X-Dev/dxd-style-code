/**
 * Composable for standard Vue transition configurations
 * Provides consistent transition classes across the component library
 */

/**
 * Collapse transition - for accordions and dropdowns
 */
export const COLLAPSE_TRANSITION = {
  enterActiveClass: 'transition-all duration-200 ease-out',
  enterFromClass: 'opacity-0 max-h-0',
  enterToClass: 'opacity-100 max-h-96',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 max-h-96',
  leaveToClass: 'opacity-0 max-h-0',
};

/**
 * Fade transition - simple opacity fade
 */
export const FADE_TRANSITION = {
  enterActiveClass: 'transition-opacity duration-200 ease-out',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveActiveClass: 'transition-opacity duration-200 ease-in',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0',
};

/**
 * Fade + Scale transition - for modals
 */
export const FADE_SCALE_TRANSITION = {
  enterActiveClass: 'transition-all duration-200 ease-out',
  enterFromClass: 'opacity-0 scale-95',
  enterToClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 scale-100',
  leaveToClass: 'opacity-0 scale-95',
};

/**
 * Slide Right transition - for right sidebars
 */
export const SLIDE_RIGHT_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 translate-x-full',
  enterToClass: 'opacity-100 translate-x-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-x-0',
  leaveToClass: 'opacity-0 translate-x-full',
};

/**
 * Slide Left transition - for left sidebars
 */
export const SLIDE_LEFT_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 -translate-x-full',
  enterToClass: 'opacity-100 translate-x-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-x-0',
  leaveToClass: 'opacity-0 -translate-x-full',
};

/**
 * Slide Up transition - for bottom sheets
 */
export const SLIDE_UP_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 translate-y-full',
  enterToClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveToClass: 'opacity-0 translate-y-full',
};

/**
 * Slide Down transition - for top notifications
 */
export const SLIDE_DOWN_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 -translate-y-full',
  enterToClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveToClass: 'opacity-0 -translate-y-full',
};

/**
 * Get transition configuration by name
 * 
 * @param {string} name - Transition name: collapse | fade | fade-scale | slide-right | slide-left | slide-up | slide-down
 * @returns {Object} Transition configuration object
 * 
 * @example
 * import { useTransition } from '@/composables/useTransition';
 * 
 * const transitionProps = useTransition('collapse');
 * 
 * <Transition v-bind="transitionProps">
 *   <div v-show="isOpen">Content</div>
 * </Transition>
 */
export function useTransition(name = 'fade') {
  const transitions = {
    collapse: COLLAPSE_TRANSITION,
    fade: FADE_TRANSITION,
    'fade-scale': FADE_SCALE_TRANSITION,
    'slide-right': SLIDE_RIGHT_TRANSITION,
    'slide-left': SLIDE_LEFT_TRANSITION,
    'slide-up': SLIDE_UP_TRANSITION,
    'slide-down': SLIDE_DOWN_TRANSITION,
  };
  
  return transitions[name] || transitions.fade;
}

