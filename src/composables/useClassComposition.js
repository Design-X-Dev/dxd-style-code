/**
 * Composable for merging BASE_CLASSES, VARIANT_CLASSES, and custom classes
 * Reduces boilerplate in component class composition
 * 
 * @param {string} baseClasses - Base classes that are always applied
 * @param {string|Array|Object} variantClasses - Classes based on variant/state
 * @param {string|Array|Object} customClasses - Additional custom classes from props
 * @returns {Array} Array of class strings/objects suitable for Vue :class binding
 * 
 * @example
 * const allClasses = computed(() => 
 *   useClassComposition(
 *     BASE_CLASSES,
 *     VARIANT_CLASSES[props.variant],
 *     props.class
 *   )
 * );
 */
export function useClassComposition(baseClasses, variantClasses = '', customClasses = '') {
  const classes = [baseClasses];
  
  if (variantClasses) {
    classes.push(variantClasses);
  }
  
  if (customClasses) {
    classes.push(customClasses);
  }
  
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

