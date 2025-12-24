<template>
  <div 
    class="inline-flex flex-col" 
    data-component="DXButtonGroup"
    :data-size="size"
    :data-multiple="multiple"
    :data-disabled="disabled"
  >
    <label v-if="label" class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    <div
      class="inline-flex border border-slate-200 rounded-xl overflow-hidden divide-x divide-slate-200"
      :class="sizeClass"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { provide, computed, ref } from "vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: [String, Number, Array],
  /** Лейбл */
  label: { type: String, default: "" },
  /** Множественный выбор */
  multiple: { type: Boolean, default: false },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const SIZE_CLASSES = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

const sizeClass = computed(() => SIZE_CLASSES[props.size] || SIZE_CLASSES.md);

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
    return { isFirst: false, isLast: false, isMiddle: false };
  }
  
  const totalComponents = components.value.length;
  
  return {
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalComponents - 1,
    isMiddle: currentIndex > 0 && currentIndex < totalComponents - 1,
  };
};

const handleSelect = (value) => {
  if (props.disabled) return;
  if (props.multiple) {
    const currentValues = Array.isArray(props.modelValue) ? props.modelValue : [];
    const index = currentValues.indexOf(value);
    if (index > -1) {
      const newValues = [...currentValues];
      newValues.splice(index, 1);
      emit("update:modelValue", newValues);
    } else {
      emit("update:modelValue", [...currentValues, value]);
    }
  } else {
    emit("update:modelValue", value);
  }
};

const isSelected = (value) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

provide("buttonGroup", {
  modelValue: props.modelValue,
  multiple: props.multiple,
  size: props.size,
  disabled: props.disabled,
  handleSelect,
  isSelected,
  registerComponent,
  unregisterComponent,
  getComponentPosition,
});
</script>

