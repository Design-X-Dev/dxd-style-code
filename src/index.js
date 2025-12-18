// DX Components - Vue 3 UI Component Library
// Export all components

// Typography
export * from './components/typography';

// Layout
export * from './components/layout';

// Atoms
export * from './components/atoms';

// Molecules
export * from './components/molecules';

// Organisms
export * from './components/organisms';

// Composables
export { useComponentSize } from './composables/useComponentSize';
export { 
  useVariantClasses, 
  useVariantIcon, 
  useVariantConfig, 
  VARIANT_CONFIGS 
} from './composables/useVariant';

// Utilities
export { 
  sizeProp, 
  variantProp, 
  buttonVariantProp,
  iconAnimationProp,
  disabledProp,
  labelProp,
  placeholderProp,
  errorProp,
  helperProp,
} from './utils/propTypes';

export { 
  TOGGLE_PRESETS, 
  useTogglePreset 
} from './utils/toggleButtonPresets';

// Styles
import './styles/index.css';
