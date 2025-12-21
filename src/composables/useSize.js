/**
 * Композабл для унификации размеров компонентов
 * @param {string} size - xs | sm | md | lg | xl (для spacing также доступен none)
 * @param {string} type - button | buttonIcon | input | icon | text | checkbox | radio | avatar | spacing
 * @returns {string} Tailwind CSS классы
 */
export function useSize(size, type = 'input') {
  const sizes = {
    button: {
      xs: 'h-7 px-2.5 py-1 text-xs',
      sm: 'h-8 px-3 py-1.5 text-xs',
      md: 'h-10 px-4 py-2.5 text-sm',
      lg: 'h-12 px-5 py-3 text-base',
      xl: 'h-14 px-6 py-3.5 text-lg',
    },
    buttonIcon: {
      xs: 'h-7 w-7 text-xs',
      sm: 'h-8 w-8 text-xs',
      md: 'h-10 w-10 text-sm',
      lg: 'h-12 w-12 text-sm',
      xl: 'h-14 w-14 text-base',
    },
    input: {
      xs: 'h-7 px-2.5 py-1 text-xs',
      sm: 'h-8 px-3 py-1.5 text-xs',
      md: 'h-10 px-4 py-2.5 text-sm',
      lg: 'h-12 px-5 py-3 text-base',
      xl: 'h-14 px-6 py-3.5 text-lg',
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
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-6 w-6',
    },
    radio: {
      xs: 'h-3 w-3',
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
    avatar: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  };
  
  return sizes[type]?.[size] || sizes[type]?.md || '';
}


