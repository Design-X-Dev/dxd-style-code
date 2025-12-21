/**
 * Универсальный composable для управления классами анимаций
 * @param {string} animation - тип анимации (none | wiggle | scale | rotate | fade | slide | bounce | pulse | spin | shake | stripes)
 * @param {string} type - тип компонента (icon | button | general | progress) - определяет префикс классов
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

  // Для general типа не используется groupHover
  return generalAnimations[animation] || "";
}

