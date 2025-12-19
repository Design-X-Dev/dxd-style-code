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
export { 
  useClassComposition, 
  useClassCompositionWithConditions 
} from './composables/useClassComposition';
export { 
  useTransition,
  COLLAPSE_TRANSITION,
  FADE_TRANSITION,
  FADE_SCALE_TRANSITION,
  SLIDE_RIGHT_TRANSITION,
  SLIDE_LEFT_TRANSITION,
  SLIDE_UP_TRANSITION,
  SLIDE_DOWN_TRANSITION
} from './composables/useTransition';
export {
  useDataAttributes,
  useCustomDataAttributes,
  useBooleanDataAttributes
} from './composables/useDataAttributes';
export { useMenu } from './composables/useMenu';
export { useTableData } from './composables/useTableData';
export { useTableSort } from './composables/useTableSort';
export { useTableFilter } from './composables/useTableFilter';
export { useTablePagination } from './composables/useTablePagination';
export { useTableSelection } from './composables/useTableSelection';
export { useTableColumns } from './composables/useTableColumns';
export { useTabsScroll } from './composables/useTabsScroll';

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
