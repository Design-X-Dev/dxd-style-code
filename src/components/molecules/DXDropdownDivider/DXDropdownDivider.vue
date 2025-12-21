<template>
  <DXDivider
    :color="color"
    :thickness="thickness"
    spacing="none"
    orientation="horizontal"
    data-component="DXDropdownDivider"
    :data-color="color"
  />
</template>

<script setup>
import DXDivider from '../../atoms/v2/DXDivider/DXDivider.vue';

const props = defineProps({
  /** Цвет разделителя: light | default | dark */
  color: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'light', 'dark'].includes(value)
  },
  /** Толщина: thin | default | thick */
  thickness: {
    type: String,
    default: 'default',
    validator: (value) => ['thin', 'default', 'thick'].includes(value)
  }
});
</script>

