/**
 * Система дизайна для элементов форм
 * Единые стили, высоты и отступы для всех компонентов
 */

export const FORM_TOKENS = {
  // Высоты элементов
  heights: {
    sm: 'h-8',      // 32px - компактные формы, таблицы
    md: 'h-10',     // 40px - стандарт для всех форм
    lg: 'h-12',     // 48px - акцентные элементы, CTA
  },
  
  // Отступы внутри элементов
  padding: {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2.5',
    lg: 'px-5 py-3',
  },
  
  // Размеры текста
  text: {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  },
  
  // Базовые стили
  base: 'rounded-xl border border-slate-200 bg-white transition-colors',
  
  // Состояния
  states: {
    hover: 'hover:border-slate-300',
    focus: 'focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300',
    disabled: 'disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50',
    error: 'border-rose-300 focus:ring-rose-500/10',
    success: 'border-emerald-300 focus:ring-emerald-500/10',
  },
  
  // Цвета
  colors: {
    text: {
      default: 'text-slate-700',
      placeholder: 'placeholder:text-slate-400',
      disabled: 'text-slate-400',
      error: 'text-rose-700',
      success: 'text-emerald-700',
    },
    bg: {
      default: 'bg-white',
      hover: 'hover:bg-slate-50',
      active: 'bg-slate-100',
      disabled: 'bg-slate-50',
    },
  },
  
  // Лейблы
  label: 'block text-sm text-slate-600 mb-1 font-medium',
  
  // Вспомогательный текст
  helper: 'mt-1 text-xs text-slate-500',
  
  // Текст ошибки
  error: 'mt-1 text-xs text-rose-500',

  // Badge компонент
  badge: {
    base: 'inline-flex items-center gap-1 px-2 py-1 text-[11px] rounded-full border font-semibold',
    variants: {
      slate: 'bg-slate-50 text-slate-700 border-slate-100',
      success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      warning: 'bg-amber-50 text-amber-700 border-amber-100',
      danger: 'bg-rose-50 text-rose-700 border-rose-100',
      info: 'bg-blue-50 text-blue-700 border-blue-100',
    }
  },
};

/**
 * Генерирует классы для элемента формы
 * @param {Object} options
 * @param {string} options.size - sm | md | lg
 * @param {boolean} options.disabled
 * @param {boolean} options.error
 * @param {boolean} options.success
 * @returns {string}
 */
export function getFormClasses({ size = 'md', disabled = false, error = false, success = false } = {}) {
  const classes = [
    FORM_TOKENS.base,
    FORM_TOKENS.heights[size],
    FORM_TOKENS.text[size],
    FORM_TOKENS.colors.text.default,
    FORM_TOKENS.colors.text.placeholder,
  ];
  
  if (!disabled) {
    classes.push(FORM_TOKENS.states.hover);
    classes.push(FORM_TOKENS.states.focus);
  } else {
    classes.push(FORM_TOKENS.states.disabled);
  }
  
  if (error) {
    classes.push(FORM_TOKENS.states.error);
  } else if (success) {
    classes.push(FORM_TOKENS.states.success);
  }
  
  return classes.join(' ');
}

/**
 * Генерирует классы для padding в зависимости от размера
 * @param {string} size - sm | md | lg
 * @returns {string}
 */
export function getPaddingClass(size = 'md') {
  return FORM_TOKENS.padding[size] || FORM_TOKENS.padding.md;
}

export default FORM_TOKENS;

