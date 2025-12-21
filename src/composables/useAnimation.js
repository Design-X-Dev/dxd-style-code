/**
 * Vue transition конфигурации
 */
export const COLLAPSE_TRANSITION = {
  enterActiveClass: 'transition-all duration-200 ease-out',
  enterFromClass: 'opacity-0 max-h-0',
  enterToClass: 'opacity-100 max-h-96',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 max-h-96',
  leaveToClass: 'opacity-0 max-h-0',
};

export const FADE_TRANSITION = {
  enterActiveClass: 'transition-opacity duration-200 ease-out',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveActiveClass: 'transition-opacity duration-200 ease-in',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0',
};

export const FADE_SCALE_TRANSITION = {
  enterActiveClass: 'transition-all duration-200 ease-out',
  enterFromClass: 'opacity-0 scale-95',
  enterToClass: 'opacity-100 scale-100',
  leaveActiveClass: 'transition-all duration-200 ease-in',
  leaveFromClass: 'opacity-100 scale-100',
  leaveToClass: 'opacity-0 scale-95',
};

export const SLIDE_RIGHT_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 translate-x-full',
  enterToClass: 'opacity-100 translate-x-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-x-0',
  leaveToClass: 'opacity-0 translate-x-full',
};

export const SLIDE_LEFT_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 -translate-x-full',
  enterToClass: 'opacity-100 translate-x-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-x-0',
  leaveToClass: 'opacity-0 -translate-x-full',
};

export const SLIDE_UP_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 translate-y-full',
  enterToClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveToClass: 'opacity-0 translate-y-full',
};

export const SLIDE_DOWN_TRANSITION = {
  enterActiveClass: 'transition-all duration-300 ease-out',
  enterFromClass: 'opacity-0 -translate-y-full',
  enterToClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'transition-all duration-300 ease-in',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveToClass: 'opacity-0 -translate-y-full',
};

/**
 * Кастомная анимация для tooltip (fade + translate)
 * Оптимизирована для GPU-ускорения и плавности
 * Использует transition-all для плавной анимации без скачков
 * 
 * @param {string} position - Позиция tooltip: top | bottom | left | right
 * @returns {Object} Transition конфигурация
 */
export function useTooltipCustomTransition(position = 'top') {
  // Определяем направление анимации в зависимости от позиции
  const directionClasses = {
    top: {
      enterFrom: 'opacity-0 translate-y-1',
      enterTo: 'opacity-100 translate-y-0',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 translate-y-1',
    },
    bottom: {
      enterFrom: 'opacity-0 -translate-y-1',
      enterTo: 'opacity-100 translate-y-0',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 -translate-y-1',
    },
    left: {
      enterFrom: 'opacity-0 translate-x-1',
      enterTo: 'opacity-100 translate-x-0',
      leaveFrom: 'opacity-100 translate-x-0',
      leaveTo: 'opacity-0 translate-x-1',
    },
    right: {
      enterFrom: 'opacity-0 -translate-x-1',
      enterTo: 'opacity-100 translate-x-0',
      leaveFrom: 'opacity-100 translate-x-0',
      leaveTo: 'opacity-0 -translate-x-1',
    },
  };

  const classes = directionClasses[position] || directionClasses.top;

  return {
    enterActiveClass: 'transition-all duration-150 ease-out',
    enterFromClass: classes.enterFrom,
    enterToClass: classes.enterTo,
    leaveActiveClass: 'transition-all duration-150 ease-in',
    leaveFromClass: classes.leaveFrom,
    leaveToClass: classes.leaveTo,
  };
}

/**
 * @deprecated Используйте useTooltipCustomTransition(position) для адаптивной анимации
 * Кастомная анимация для tooltip (fade + translateY) - только для top позиции
 */
export const TOOLTIP_CUSTOM_TRANSITION = {
  enterActiveClass: 'transition-all duration-150 ease-out',
  enterFromClass: 'opacity-0 translate-y-1',
  enterToClass: 'opacity-100 translate-y-0',
  leaveActiveClass: 'transition-all duration-150 ease-in',
  leaveFromClass: 'opacity-100 translate-y-0',
  leaveToClass: 'opacity-0 translate-y-1',
};

/**
 * Get transition configuration by name
 * 
 * @param {string} name - Transition name: collapse | fade | fade-scale | slide-right | slide-left | slide-up | slide-down | tooltip-custom
 * @returns {Object} Transition configuration object
 * 
 * @example
 * import { useAnimationTransition } from '@/composables/useAnimation';
 * 
 * const transitionProps = useAnimationTransition('collapse');
 * 
 * <Transition v-bind="transitionProps">
 *   <div v-show="isOpen">Content</div>
 * </Transition>
 */
export function useAnimationTransition(name = 'fade') {
  const transitions = {
    collapse: COLLAPSE_TRANSITION,
    fade: FADE_TRANSITION,
    'fade-scale': FADE_SCALE_TRANSITION,
    'slide-right': SLIDE_RIGHT_TRANSITION,
    'slide-left': SLIDE_LEFT_TRANSITION,
    'slide-up': SLIDE_UP_TRANSITION,
    'slide-down': SLIDE_DOWN_TRANSITION,
    'tooltip-custom': TOOLTIP_CUSTOM_TRANSITION,
  };
  
  return transitions[name] || transitions.fade;
}

/**
 * @deprecated Use useAnimationTransition instead. This alias is kept for backward compatibility.
 * Get transition configuration by name
 * 
 * @param {string} name - Transition name: collapse | fade | fade-scale | slide-right | slide-left | slide-up | slide-down | tooltip-custom
 * @returns {Object} Transition configuration object
 */
export const useTransition = useAnimationTransition;

/**
 * Универсальный composable для управления классами анимаций
 * @param {string} animation - тип анимации (none | wiggle | scale | rotate | fade | slide | bounce | pulse | spin | shake | stripes | custom | smooth)
 * @param {string} type - тип компонента (icon | button | general | progress | tooltip | toggle) - определяет префикс классов
 * @param {boolean} groupHover - использовать group-hover вместо обычного hover (только для hover-анимаций)
 * @returns {string} CSS класс для анимации
 */
export function useAnimation(animation = 'none', type = 'icon', groupHover = false) {
  // Анимации для иконок (hover-based)
  const iconAnimations = {
    none: "",
    wiggle: "dx-icon-wiggle",
    scale: "dx-icon-scale",
    rotate: "dx-icon-rotate",
  };

  const iconGroupAnimations = {
    none: "",
    wiggle: "dx-icon-wiggle-group",
    scale: "dx-icon-scale-group",
    rotate: "dx-icon-rotate-group",
  };

  // Анимации для кнопок (hover-based)
  const buttonAnimations = {
    none: "",
    wiggle: "dx-btn-wiggle",
    scale: "dx-btn-scale",
    rotate: "dx-btn-rotate",
  };

  const buttonGroupAnimations = {
    none: "",
    wiggle: "dx-btn-wiggle-group",
    scale: "dx-btn-scale-group",
    rotate: "dx-btn-rotate-group",
  };

  // Общие анимации (не hover-based)
  const generalAnimations = {
    none: "",
    fade: "dx-animate-fade-in",
    'fade-out': "dx-animate-fade-out",
    slide: "dx-animate-slide-in",
    bounce: "dx-animate-bounce-slow",
    pulse: "dx-animate-pulse",
    spin: "dx-animate-spin",
    shake: "dx-animate-shake",
  };

  // Анимации для progress bar
  const progressAnimations = {
    none: "",
    stripes: "dx-animate-stripes",
  };

  // Анимации для tooltip (кастомные CSS классы, если нужны)
  const tooltipAnimations = {
    none: "",
    custom: "dx-tooltip-custom", // Можно использовать для кастомных анимаций через CSS
  };

  // Анимации для toggle
  const toggleAnimations = {
    none: "",
    smooth: "transition-transform duration-200 ease-in-out", // Плавная анимация движения индикатора
  };

  // Выбор правильного набора анимаций
  if (type === 'icon') {
    return groupHover 
      ? (iconGroupAnimations[animation] || "")
      : (iconAnimations[animation] || "");
  }

  if (type === 'button') {
    return groupHover
      ? (buttonGroupAnimations[animation] || "")
      : (buttonAnimations[animation] || "");
  }

  if (type === 'progress') {
    return progressAnimations[animation] || "";
  }

  if (type === 'tooltip') {
    return tooltipAnimations[animation] || "";
  }

  if (type === 'toggle') {
    return toggleAnimations[animation] || toggleAnimations.smooth;
  }

  // Для general типа не используется groupHover
  return generalAnimations[animation] || "";
}

