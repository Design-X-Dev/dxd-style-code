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
  info: {
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    border: 'border-blue-200',
    icon: InformationCircleIcon,
    iconColor: 'text-blue-500',
  },
  success: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-800',
    border: 'border-emerald-200',
    icon: CheckCircleIcon,
    iconColor: 'text-emerald-500',
  },
  warning: {
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-200',
    icon: ExclamationTriangleIcon,
    iconColor: 'text-amber-500',
  },
  danger: {
    bg: 'bg-rose-50',
    text: 'text-rose-800',
    border: 'border-rose-200',
    icon: XCircleIcon,
    iconColor: 'text-rose-500',
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

