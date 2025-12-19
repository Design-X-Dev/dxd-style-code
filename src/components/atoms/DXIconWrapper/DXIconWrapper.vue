<template>
  <div 
    :class="wrapperClasses"
    data-component="DXIconWrapper"
    :data-position="position"
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
    type: Object,
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

const wrapperClasses = computed(() => [
  'absolute',
  props.position === 'left' ? 'left-3' : 'right-3',
  props.verticalAlign === 'center' ? 'top-1/2 -translate-y-1/2' : 'top-3',
  'pointer-events-none',
]);
</script>

