/**
 * Стандартные prop types для переиспользования в компонентах
 * 
 * Использование:
 * import { sizeProp, variantProp } from '@/utils/propTypes';
 * 
 * defineProps({
 *   size: sizeProp,
 *   variant: variantProp,
 * });
 */

/**
 * @typedef {'xs' | 'sm' | 'md' | 'lg' | 'xl'} Size
 * @typedef {'info' | 'success' | 'warning' | 'danger'} Variant
 * @typedef {'none' | 'wiggle' | 'scale' | 'rotate'} IconAnimation
 * @typedef {'primary' | 'ghost' | 'danger' | 'success' | 'warning' | 'outline'} ButtonVariant
 */

// Размеры компонентов
export const sizeProp = {
  type: String,
  default: 'md',
  validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
};

// Варианты для alert/toast/badge
export const variantProp = {
  type: String,
  default: 'info',
  validator: (value) => ['info', 'success', 'warning', 'danger'].includes(value),
};

// Варианты для кнопок
export const buttonVariantProp = {
  type: String,
  default: 'primary',
  validator: (value) => ['primary', 'ghost', 'danger', 'success', 'warning', 'outline'].includes(value),
};

// Анимации иконок
export const iconAnimationProp = {
  type: String,
  default: 'none',
  validator: (value) => ['none', 'wiggle', 'scale', 'rotate'].includes(value),
};

// Отключенное состояние
export const disabledProp = {
  type: Boolean,
  default: false,
};

// Лейбл
export const labelProp = {
  type: String,
  default: '',
};

// Placeholder
export const placeholderProp = {
  type: String,
  default: '',
};

// Текст ошибки
export const errorProp = {
  type: String,
  default: '',
};

// Вспомогательный текст
export const helperProp = {
  type: String,
  default: '',
};

