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
export { useSize } from './composables/useSize';
export { 
  useVariantClasses, 
  useVariantIcon, 
  useVariantConfig, 
  useVariantTooltip,
  useTooltipPosition,
  useTooltipArrow,
  useVariantToggle,
  useVariantBadge,
  useVariantButton,
  useVariantDropdownItem,
  VARIANT_CONFIGS 
} from './composables/useVariant';
export { useClassComposition } from './composables/useClassComposition';
export { 
  useTransition,
  useAnimationTransition,
  useTooltipCustomTransition,
  useAnimation,
  COLLAPSE_TRANSITION,
  FADE_TRANSITION,
  FADE_SCALE_TRANSITION,
  SLIDE_RIGHT_TRANSITION,
  SLIDE_LEFT_TRANSITION,
  SLIDE_UP_TRANSITION,
  SLIDE_DOWN_TRANSITION,
  TOOLTIP_CUSTOM_TRANSITION
} from './composables/useAnimation';
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
