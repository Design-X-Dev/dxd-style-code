// useIcon composable - хелперы для работы с иконками
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/solid';

import {
  ArrowPathIcon,
} from '@heroicons/vue/24/outline';

/**
 * Возвращает подходящую иконку для variant
 * @param {string} variant - info | success | warning | danger
 * @returns {Component} Heroicon компонент
 */
export function useVariantIcon(variant) {
  const icons = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    danger: XCircleIcon,
    error: XCircleIcon,
  };
  
  return icons[variant] || icons.info;
}

/**
 * Возвращает подходящую иконку для state (loading/error/success)
 * @param {string} state - loading | error | success | idle
 * @returns {Component|null} Heroicon компонент или null
 */
export function useStateIcon(state) {
  const icons = {
    loading: ArrowPathIcon,
    error: XCircleIcon,
    success: CheckCircleIcon,
    idle: null,
  };
  
  return icons[state] || null;
}

/**
 * Возвращает цвет для variant
 * @param {string} variant - info | success | warning | danger
 * @returns {string} Tailwind CSS класс
 */
export function useVariantColor(variant) {
  const colors = {
    info: 'text-blue-500',
    success: 'text-emerald-500',
    warning: 'text-amber-500',
    danger: 'text-rose-500',
    error: 'text-rose-500',
  };
  
  return colors[variant] || colors.info;
}

/**
 * Возвращает конфигурацию иконки для variant (иконка + цвет)
 * @param {string} variant - info | success | warning | danger
 * @returns {Object} { icon: Component, color: string }
 */
export function useVariantIconConfig(variant) {
  return {
    icon: useVariantIcon(variant),
    color: useVariantColor(variant),
  };
}

/**
 * Хелпер для анимации в зависимости от контекста
 * @param {string} context - button | link | static
 * @returns {string} Тип анимации
 */
export function useContextAnimation(context) {
  const animations = {
    button: 'wiggle',
    link: 'scale',
    static: 'none',
  };
  
  return animations[context] || 'none';
}

