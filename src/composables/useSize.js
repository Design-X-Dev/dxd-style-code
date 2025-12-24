/**
 * Композабл для унификации размеров компонентов
 * @param {string} size - xs | sm | md | lg | xl (для spacing также доступен none)
 * @param {string} type - button | buttonIcon | input | icon | text | checkbox | radio | avatar | spacing | loader | progress | inputAddon | sliderTrack | sliderThumb | tooltip | toggle | badge | image
 * @returns {string|Object} Tailwind CSS классы или объект с классами для track и thumb (для toggle)
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
    loader: {
      xs: 'w-2 h-2',
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
      xl: 'w-6 h-6',
    },
    progress: {
      xs: 'h-1',
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    },
    inputAddon: {
      xs: 'h-7',
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
      xl: 'h-14',
    },
    sliderTrack: {
      xs: 'h-1',    // 4px
      sm: 'h-1.5',  // 6px
      md: 'h-2',    // 8px
      lg: 'h-2.5',  // 10px
      xl: 'h-3',    // 12px
    },
    sliderThumb: {
      xs: 'w-3 h-3',    // 12px
      sm: 'w-4 h-4',    // 16px
      md: 'w-5 h-5',    // 20px
      lg: 'w-6 h-6',    // 24px
      xl: 'w-7 h-7',    // 28px
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    tooltip: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-2.5 py-1.5 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-3 text-base',
      xl: 'px-5 py-4 text-lg',
    },
    toggle: {
      xs: { track: 'h-4 w-7', thumb: 'h-3 w-3' },
      sm: { track: 'h-5 w-9', thumb: 'h-3.5 w-3.5' },
      md: { track: 'h-6 w-11', thumb: 'h-4 w-4' },
      lg: { track: 'h-7 w-14', thumb: 'h-5 w-5' },
      xl: { track: 'h-8 w-16', thumb: 'h-6 w-6' },
    },
    badge: {
      sm: 'px-2 py-1 text-[11px]',
      md: 'px-2.5 py-1.5 text-xs',
    },
    image: {
      xs: 'w-8 h-8',
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32',
    },
  };
  
  // Для toggle возвращаем объект, для остальных - строку
  if (type === 'toggle') {
    return sizes[type]?.[size] || sizes[type]?.md || { track: '', thumb: '' };
  }
  
  return sizes[type]?.[size] || sizes[type]?.md || '';
}


