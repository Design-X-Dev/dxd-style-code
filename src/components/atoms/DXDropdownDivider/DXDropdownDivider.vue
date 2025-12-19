<template>
  <div 
    class="my-1 border-t"
    :class="colorClasses[color]"
    data-component="DXDropdownDivider"
    :data-color="color"
  />
</template>

<script setup>
const props = defineProps({
  /** Цвет разделителя: default | light | dark */
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'light', 'dark'].includes(value)
  }
});

const colorClasses = {
  default: 'border-slate-200',
  light: 'border-slate-100',
  dark: 'border-slate-300'
};
</script>

