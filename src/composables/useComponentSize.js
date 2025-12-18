/**
 * Композабл для унификации размеров компонентов
 * @param {string} size - xs | sm | md | lg | xl
 * @param {string} type - button | input | icon | text
 * @returns {string} Tailwind CSS классы
 */
export function useComponentSize(size, type = 'input') {
  const sizes = {
    button: {
      sm: 'h-8 px-3 py-1.5 text-xs',
      md: 'h-10 px-4 py-2.5 text-sm',
      lg: 'h-12 px-5 py-3 text-base',
    },
    input: {
      sm: 'h-8 px-3 py-1.5 text-xs',
      md: 'h-10 px-4 py-2.5 text-sm',
      lg: 'h-12 px-5 py-3 text-base',
    },
    icon: {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }
  };
  
  return sizes[type]?.[size] || sizes[type]?.md || '';
}

