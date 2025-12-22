<template>
  <div
    class="flex items-center px-3 border-r-0 bg-slate-50 text-slate-600 text-sm first:rounded-l-xl last:rounded-r-xl last:border-r transition-colors"
    :class="addonClasses"
    data-component="DXInputGroupAddon"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4" />
    <slot />
  </div>
</template>

<script setup>
import { inject, computed, onMounted, onUnmounted } from "vue";
import { useSize } from "@/composables/useSize";

const props = defineProps({
  icon: { type: [Object, Function], default: null },
});

const inputGroup = inject("inputGroup", { 
  size: "md", 
  disabled: false, 
  error: "",
  registerComponent: () => {},
  unregisterComponent: () => {},
});

// Генерируем уникальный ID для регистрации
const componentId = Date.now() + Math.random();

onMounted(() => {
  if (inputGroup.registerComponent) {
    inputGroup.registerComponent('addon', componentId);
  }
});

onUnmounted(() => {
  if (inputGroup.unregisterComponent) {
    inputGroup.unregisterComponent(componentId);
  }
});

const addonClasses = computed(() => {
  const classes = [
    'border', // Базовый класс border
    useSize(inputGroup.size, 'inputAddon'),
  ];
  
  // Синхронизация с состоянием disabled
  if (inputGroup.disabled) {
    classes.push('opacity-60 cursor-not-allowed');
  }
  
  // Синхронизация с состоянием error - цвет границы
  if (inputGroup.error) {
    classes.push('border-rose-300');
  } else {
    classes.push('border-slate-200');
  }
  
  return classes.filter(Boolean).join(' ');
});
</script>

