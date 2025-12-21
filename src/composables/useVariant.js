import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/solid';

/**
 * Конфигурация вариантов для компонентов
 */
export const VARIANT_CONFIGS = {
  // Для Alert/Toast и общих компонентов
  default: {
    bg: 'bg-slate-50',
    text: 'text-slate-800', // Для Alert/Toast (используется в useVariantClasses)
    border: 'border-slate-200',
    icon: null,
    iconColor: 'text-slate-500',
    // Для тегов
    tag: 'bg-slate-100 text-slate-800 border-slate-200',
    // Для прогресс-бара
    progress: 'bg-slate-800',
    // Для divider
    divider: 'border-slate-200',
    // Для лоадера
    loader: {
      border: 'border-slate-300',
      borderTop: 'border-t-slate-900',
      text: 'text-slate-600',
    },
  },
  slate: {
    bg: 'bg-slate-50',
    text: 'text-slate-800',
    border: 'border-slate-200',
    icon: null,
    iconColor: 'text-slate-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-slate-400",
      checked: "border-slate-700 bg-slate-700 hover:bg-slate-600",
      ring: "focus:ring-slate-900/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-slate-400",
      checked: "border-slate-700 bg-slate-50 hover:border-slate-600",
      ring: "focus:ring-slate-900/10",
      dot: "bg-slate-700",
    },
    // Для текста
    text: 'text-slate-700',
    // Для тегов
    tag: 'bg-slate-100 text-slate-800 border-slate-200',
    // Для прогресс-бара
    progress: 'bg-slate-800',
    // Для divider
    divider: 'border-slate-200',
    // Для лоадера
    loader: {
      border: 'border-slate-300',
      borderTop: 'border-t-slate-700',
      text: 'text-slate-700',
    },
  },
  primary: {
    bg: 'bg-slate-50',
    text: 'text-slate-800',
    border: 'border-slate-200',
    icon: null,
    iconColor: 'text-slate-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-slate-400",
      checked: "border-slate-900 bg-slate-900 hover:bg-slate-800",
      ring: "focus:ring-slate-900/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-slate-400",
      checked: "border-slate-900 bg-slate-50 hover:border-slate-800",
      ring: "focus:ring-slate-900/10",
      dot: "bg-slate-900",
    },
    // Для текста
    text: 'text-slate-900',
    // Для тегов
    tag: 'bg-blue-100 text-blue-800 border-blue-200',
    // Для прогресс-бара
    progress: 'bg-slate-800',
    // Для divider
    divider: 'border-slate-200',
    // Для лоадера
    loader: {
      border: 'border-slate-300',
      borderTop: 'border-t-slate-900',
      text: 'text-slate-900',
    },
  },
  info: {
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    border: 'border-blue-200',
    icon: InformationCircleIcon,
    iconColor: 'text-blue-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-blue-400",
      checked: "border-blue-600 bg-blue-600 hover:bg-blue-500",
      ring: "focus:ring-blue-500/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-blue-400",
      checked: "border-blue-600 bg-blue-50 hover:border-blue-500",
      ring: "focus:ring-blue-500/10",
      dot: "bg-blue-600",
    },
    // Для текста
    text: 'text-blue-700',
    // Для тегов
    tag: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    // Для прогресс-бара
    progress: 'bg-blue-500',
    // Для divider
    divider: 'border-blue-200',
    // Для лоадера
    loader: {
      border: 'border-blue-300',
      borderTop: 'border-t-blue-600',
      text: 'text-blue-700',
    },
  },
  success: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-800',
    border: 'border-emerald-200',
    icon: CheckCircleIcon,
    iconColor: 'text-emerald-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-emerald-400",
      checked: "border-emerald-600 bg-emerald-600 hover:bg-emerald-500",
      ring: "focus:ring-emerald-500/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-emerald-400",
      checked: "border-emerald-600 bg-emerald-50 hover:border-emerald-500",
      ring: "focus:ring-emerald-500/10",
      dot: "bg-emerald-600",
    },
    // Для текста
    text: 'text-emerald-700',
    // Для тегов
    tag: 'bg-green-100 text-green-800 border-green-200',
    // Для прогресс-бара
    progress: 'bg-emerald-500',
    // Для divider
    divider: 'border-emerald-200',
    // Для лоадера
    loader: {
      border: 'border-emerald-300',
      borderTop: 'border-t-emerald-600',
      text: 'text-emerald-700',
    },
  },
  warning: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-200',
    icon: ExclamationTriangleIcon,
    iconColor: 'text-amber-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-amber-400",
      checked: "border-amber-600 bg-amber-600 hover:bg-amber-500",
      ring: "focus:ring-amber-500/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-amber-400",
      checked: "border-amber-600 bg-amber-50 hover:border-amber-500",
      ring: "focus:ring-amber-500/10",
      dot: "bg-amber-600",
    },
    // Для текста
    text: 'text-amber-700',
    // Для тегов
    tag: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    // Для прогресс-бара
    progress: 'bg-amber-500',
    // Для divider
    divider: 'border-amber-200',
    // Для лоадера
    loader: {
      border: 'border-amber-300',
      borderTop: 'border-t-amber-600',
      text: 'text-amber-700',
    },
  },
  danger: {
    bg: 'bg-rose-50',
    text: 'text-rose-800',
    border: 'border-rose-200',
    icon: XCircleIcon,
    iconColor: 'text-rose-500',
    // Для Checkbox
    checkbox: {
      unchecked: "border-slate-300 bg-white hover:border-rose-400",
      checked: "border-rose-600 bg-rose-600 hover:bg-rose-500",
      ring: "focus:ring-rose-500/10",
    },
    // Для Radio
    radio: {
      unchecked: "border-slate-300 bg-white hover:border-rose-400",
      checked: "border-rose-600 bg-rose-50 hover:border-rose-500",
      ring: "focus:ring-rose-500/10",
      dot: "bg-rose-600",
    },
    // Для текста
    text: 'text-rose-700',
    // Для тегов
    tag: 'bg-red-100 text-red-800 border-red-200',
    // Для прогресс-бара
    progress: 'bg-rose-500',
    // Для divider
    divider: 'border-rose-200',
    // Для лоадера
    loader: {
      border: 'border-rose-300',
      borderTop: 'border-t-rose-600',
      text: 'text-rose-700',
    },
  },
  // Специальные варианты для текста
  muted: {
    text: 'text-slate-500',
  },
  // Специальные варианты для divider
  light: {
    divider: 'border-slate-100',
  },
  dark: {
    divider: 'border-slate-300',
    // Для tooltip
    tooltip: 'bg-slate-900 text-white',
  },
  // Специальные варианты для tooltip
  tooltipLight: {
    tooltip: 'bg-white text-slate-900 border border-slate-200 shadow-lg',
  },
};

/**
 * Возвращает классы для варианта
 * @param {string} variant - info | success | warning | danger
 * @returns {string} Tailwind CSS классы
 */
export function useVariantClasses(variant) {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.info;
  return `${config.bg} ${config.text} ${config.border}`;
}

/**
 * Возвращает иконку для варианта
 * @param {string} variant - info | success | warning | danger
 * @returns {Component} Heroicon компонент
 */
export function useVariantIcon(variant) {
  const config = VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.info;
  return config.icon;
}

/**
 * Возвращает полную конфигурацию варианта
 * @param {string} variant - info | success | warning | danger
 * @returns {Object} Конфигурация
 */
export function useVariantConfig(variant) {
  return VARIANT_CONFIGS[variant] || VARIANT_CONFIGS.info;
}

/**
 * Возвращает классы для checkbox
 * @param {string} color - slate | primary | success | danger | warning | info
 * @returns {Object} { unchecked, checked, ring }
 */
export function useVariantCheckbox(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.primary;
  return config.checkbox || VARIANT_CONFIGS.primary.checkbox;
}

/**
 * Возвращает классы для radio
 * @param {string} color - slate | primary | success | danger | warning | info
 * @returns {Object} { unchecked, checked, ring, dot }
 */
export function useVariantRadio(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.primary;
  return config.radio || VARIANT_CONFIGS.primary.radio;
}

/**
 * Возвращает класс для текста
 * @param {string} color - default | muted | primary | success | warning | danger
 * @returns {string} Tailwind CSS класс
 */
export function useVariantText(color) {
  // Для default используем text-slate-700 вместо text-slate-800
  if (color === 'default') {
    return 'text-slate-700';
  }
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.default;
  return config.text || 'text-slate-700';
}

/**
 * Возвращает классы для тега
 * @param {string} color - default | primary | success | warning | danger | info
 * @returns {string} Tailwind CSS классы
 */
export function useVariantTag(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.default;
  return config.tag || VARIANT_CONFIGS.default.tag;
}

/**
 * Возвращает класс для прогресс-бара
 * @param {string} color - default | success | warning | danger | info
 * @returns {string} Tailwind CSS класс
 */
export function useVariantProgress(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.default;
  return config.progress || VARIANT_CONFIGS.default.progress;
}

/**
 * Возвращает конфигурацию для лоадера
 * @param {string} color - default | primary | success | warning | danger | info | slate
 * @returns {Object} { border, borderTop, text }
 */
export function useVariantLoader(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.default;
  return config.loader || VARIANT_CONFIGS.default.loader;
}

/**
 * Предопределенные классы для всех комбинаций толщины и цвета divider
 */
const DIVIDER_BORDER_CLASSES = {
  horizontal: {
    thin: {
      light: "border-t border-slate-100",
      default: "border-t border-slate-200",
      dark: "border-t border-slate-300",
    },
    default: {
      light: "border-t border-slate-100",
      default: "border-t border-slate-200",
      dark: "border-t border-slate-300",
    },
    thick: {
      light: "border-t-2 border-slate-100",
      default: "border-t-2 border-slate-200",
      dark: "border-t-2 border-slate-300",
    },
  },
  vertical: {
    thin: {
      light: "border-l border-slate-100",
      default: "border-l border-slate-200",
      dark: "border-l border-slate-300",
    },
    default: {
      light: "border-l border-slate-100",
      default: "border-l border-slate-200",
      dark: "border-l border-slate-300",
    },
    thick: {
      light: "border-l-2 border-slate-100",
      default: "border-l-2 border-slate-200",
      dark: "border-l-2 border-slate-300",
    },
  },
};

/**
 * Возвращает классы для divider с учетом ориентации, толщины и цвета
 * @param {string} orientation - horizontal | vertical
 * @param {string} thickness - thin | default | thick
 * @param {string} color - light | default | dark
 * @returns {string} Tailwind CSS классы
 */
export function useVariantDividerBorder(orientation, thickness, color) {
  const orientationKey = orientation === "vertical" ? "vertical" : "horizontal";
  return DIVIDER_BORDER_CLASSES[orientationKey]?.[thickness]?.[color] 
    || DIVIDER_BORDER_CLASSES[orientationKey]?.default?.default
    || "border-t border-slate-200";
}

/**
 * Возвращает цвет для divider (только цвет, без border-)
 * @param {string} color - light | default | dark
 * @returns {string} Цвет для использования в border-{direction}-{color}
 * @deprecated Используйте useVariantDividerBorder вместо этой функции
 */
export function useVariantDivider(color) {
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.default;
  const dividerClass = config.divider || VARIANT_CONFIGS.default.divider;
  // Извлекаем цвет из класса (например, "border-slate-200" -> "slate-200")
  const match = dividerClass.match(/border-(.+)/);
  return match ? match[1] : 'slate-200';
}

/**
 * Возвращает классы для tooltip
 * @param {string} color - dark | light
 * @returns {string} Tailwind CSS классы
 */
export function useVariantTooltip(color) {
  if (color === 'light') {
    return VARIANT_CONFIGS.tooltipLight?.tooltip || 'bg-white text-slate-900 border border-slate-200 shadow-lg';
  }
  const config = VARIANT_CONFIGS[color] || VARIANT_CONFIGS.dark;
  return config.tooltip || VARIANT_CONFIGS.dark.tooltip;
}

