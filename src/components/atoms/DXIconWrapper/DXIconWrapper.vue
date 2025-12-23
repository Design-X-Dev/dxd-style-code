<template>
  <div 
    :class="wrapperClasses"
    v-bind="dataAttrs"
  >
    <DXIcon 
      v-if="icon" 
      :icon="icon" 
      :size="size"
      :animation="animation"
      :class="iconClass"
    />
    <slot v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useClassComposition } from '../../../composables/useClassComposition';
import { useCustomDataAttributes } from '../../../composables/useDataAttributes';
import DXIcon from '../DXIcon/DXIcon.vue';

const props = defineProps({
  /** Position: left | right */
  position: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  /** Icon component (Heroicon) */
  icon: {
    type: [Object, Function],
    default: null
  },
  /** Icon size: xs | sm | md | lg */
  size: {
    type: String,
    default: 'sm'
  },
  /** Icon animation: none | wiggle | scale | rotate */
  animation: {
    type: String,
    default: 'none'
  },
  /** Additional icon classes */
  iconClass: {
    type: [String, Array, Object],
    default: 'text-slate-400'
  },
  /** Vertical position: center | top */
  verticalAlign: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'top'].includes(value)
  },
});

const BASE_CLASSES = 'absolute pointer-events-none';

const wrapperClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    {
      'left-3': props.position === 'left',
      'right-3': props.position === 'right',
      'top-1/2 -translate-y-1/2': props.verticalAlign === 'center',
      'top-3': props.verticalAlign === 'top',
    }
  )
);

const dataAttrs = computed(() =>
  useCustomDataAttributes({
    component: 'DXIconWrapper',
    position: props.position,
  })
);
</script>

