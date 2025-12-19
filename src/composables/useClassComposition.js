/**
 * Composable for merging BASE_CLASSES and additional classes
 * Accepts base classes and any number of additional class sources
 * 
 * @param {string} baseClasses - Base classes that are always applied
 * @param {...(string|Array|Object)} additionalClasses - Any number of additional class sources
 * @returns {Array} Array of class strings/objects suitable for Vue :class binding
 * 
 * @example
 * // Single additional class source
 * useClassComposition(BASE_CLASSES, VARIANT_CLASSES[props.variant])
 * 
 * @example
 * // Multiple class sources
 * useClassComposition(
 *   BASE_CLASSES,
 *   SIZE_CLASSES[props.size],
 *   VARIANT_CLASSES[props.variant],
 *   props.class
 * )
 */
export function useClassComposition(baseClasses, ...additionalClasses) {
  const classes = [baseClasses];
  
  // Add all additional classes, filtering out empty values
  additionalClasses.forEach(classSource => {
    if (classSource) {
      classes.push(classSource);
    }
  });
  
  return classes;
}

/**
 * Merges multiple class sources with conditional logic
 * 
 * @param {string} baseClasses - Base classes
 * @param {Object} conditionalClasses - Object of conditional classes { 'class-name': boolean }
 * @param {string|Array|Object} customClasses - Custom classes
 * @returns {Array} Array of classes
 * 
 * @example
 * const allClasses = computed(() =>
 *   useClassCompositionWithConditions(
 *     BASE_CLASSES,
 *     {
 *       'opacity-60': props.disabled,
 *       'w-full': props.block
 *     },
 *     props.class
 *   )
 * );
 */
export function useClassCompositionWithConditions(baseClasses, conditionalClasses = {}, customClasses = '') {
  const classes = [baseClasses];
  
  // Add conditional classes
  classes.push(conditionalClasses);
  
  // Add custom classes
  if (customClasses) {
    classes.push(customClasses);
  }
  
  return classes;
}

