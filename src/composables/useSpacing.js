/**
 * Композабл для унификации padding и margin классов
 * @param {string} size - none | xs | sm | md | lg | xl
 * @param {string} type - padding | paddingX | paddingY | margin | marginX | marginY
 * @returns {string} Tailwind CSS классы
 */
export function useSpacing(size, type = 'padding') {
  const spacingMap = {
    none: '0',
    xs: '1',   // 4px
    sm: '2',   // 8px
    md: '4',   // 16px
    lg: '6',   // 24px
    xl: '8',   // 32px
  };

  const prefix = {
    padding: 'p',
    paddingX: 'px',
    paddingY: 'py',
    margin: 'm',
    marginX: 'mx',
    marginY: 'my',
  };

  if (size === 'none') {
    return `${prefix[type]}-0`;
  }

  const spacingValue = spacingMap[size];
  if (!spacingValue) {
    return '';
  }

  return `${prefix[type]}-${spacingValue}`;
}

