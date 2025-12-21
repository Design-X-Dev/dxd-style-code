<template>
  <div class="w-full" data-component="DXInputGroup">
    <label v-if="label" class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    <div class="flex">
      <slot />
    </div>
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

const props = defineProps({
  label: { type: String, default: "" },
  helper: { type: String, default: "" },
  size: { type: String, default: "md" },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: "" },
});

// Система регистрации компонентов для отслеживания структуры
const components = ref([]);
let componentCounter = 0;

const registerComponent = (type, id) => {
  if (!components.value.find(c => c.id === id)) {
    // Используем счетчик для гарантии правильного порядка
    const order = componentCounter++;
    components.value.push({ type, id, order });
    // Сортируем по порядку регистрации
    components.value.sort((a, b) => a.order - b.order);
  }
};

const unregisterComponent = (id) => {
  components.value = components.value.filter(c => c.id !== id);
};

const getComponentPosition = (id) => {
  const currentIndex = components.value.findIndex(c => c.id === id);
  if (currentIndex === -1) {
    return { hasLeftAddon: false, hasRightAddon: false };
  }
  
  const leftComponents = components.value.slice(0, currentIndex);
  const rightComponents = components.value.slice(currentIndex + 1);
  
  return {
    hasLeftAddon: leftComponents.some(c => c.type === 'addon'),
    hasRightAddon: rightComponents.some(c => c.type === 'addon'),
  };
};

provide("inputGroup", {
  size: props.size,
  disabled: props.disabled,
  error: props.error,
  registerComponent,
  unregisterComponent,
  getComponentPosition,
});
</script>

