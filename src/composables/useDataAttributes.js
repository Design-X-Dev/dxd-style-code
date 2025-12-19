/**
 * Composable for generating data-attributes from component props
 * Creates consistent data-* attributes for debugging and testing
 * 
 * @param {Object} props - Component props object
 * @param {Array<string>} attributeNames - Array of prop names to convert to data-attributes
 * @returns {Object} Object with data-* attributes
 * 
 * @example
 * const dataAttrs = useDataAttributes(props, ['variant', 'size', 'disabled']);
 * // Returns: { 'data-variant': 'primary', 'data-size': 'md', 'data-disabled': true }
 * 
 * <div v-bind="dataAttrs">...</div>
 */
export function useDataAttributes(props, attributeNames = []) {
  const attributes = {};
  
  attributeNames.forEach(name => {
    const value = props[name];
    
    // Only add if value exists and is not null/undefined
    if (value !== undefined && value !== null) {
      // Convert camelCase to kebab-case for data attributes
      const attrName = `data-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      attributes[attrName] = value;
    }
  });
  
  return attributes;
}

/**
 * Generate data-attributes with custom logic
 * 
 * @param {Object} attributesMap - Object mapping data-attribute names to their values
 * @returns {Object} Object with data-* attributes
 * 
 * @example
 * const dataAttrs = useCustomDataAttributes({
 *   variant: props.variant,
 *   size: props.size,
 *   active: isActive.value,
 *   disabled: props.disabled || props.loading
 * });
 */
export function useCustomDataAttributes(attributesMap = {}) {
  const attributes = {};
  
  Object.entries(attributesMap).forEach(([name, value]) => {
    if (value !== undefined && value !== null && value !== false) {
      const attrName = name.startsWith('data-') ? name : `data-${name}`;
      attributes[attrName] = value;
    }
  });
  
  return attributes;
}

/**
 * Convert boolean props to data-attributes (omits false values)
 * 
 * @param {Object} props - Component props
 * @param {Array<string>} booleanPropNames - Array of boolean prop names
 * @returns {Object} Object with data-* attributes for truthy values only
 * 
 * @example
 * const dataAttrs = useBooleanDataAttributes(props, ['disabled', 'loading', 'active']);
 * // If props.disabled = true, props.loading = false
 * // Returns: { 'data-disabled': true }
 */
export function useBooleanDataAttributes(props, booleanPropNames = []) {
  const attributes = {};
  
  booleanPropNames.forEach(name => {
    if (props[name] === true) {
      const attrName = `data-${name.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      attributes[attrName] = true;
    }
  });
  
  return attributes;
}

