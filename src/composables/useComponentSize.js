/**
 * Композабл для унификации размеров компонентов
 * @param {string} size - xs | sm | md | lg | xl
 * @param {string} type - button | input | icon | text | checkbox | radio | avatar | spacing
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
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    },
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    checkbox: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    radio: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    avatar: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
    spacing: {
      none: '',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  };
  
  return sizes[type]?.[size] || sizes[type]?.md || '';
}

