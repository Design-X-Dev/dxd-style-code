<template>
  <div 
    :class="loaderClasses" 
    data-component="DXLoader"
    :data-size="size"
    :data-variant="variant"
  >
    <span :class="spinnerClasses"></span>
    <slot v-if="hasText">
      <template v-if="text">{{ text }}</template>
    </slot>
  </div>
</template>

<script setup>
import { computed, useSlots } from "vue";
import { useSize } from "@/composables/useSize";
import { useVariantLoader } from "@/composables/useVariant";

const props = defineProps({
  /** Размер: xs | sm | md | lg | xl */
  size: {
    type: String,
    default: "md",
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  /** Вариант цвета: default | primary | success | warning | danger | info | slate */
  variant: {
    type: String,
    default: "default",
    validator: (value) => ['default', 'primary', 'success', 'warning', 'danger', 'info', 'slate'].includes(value)
  },
  /** Текст лоадера. Если не указан и нет слота, текст не отображается */
  text: {
    type: String,
    default: "",
  },
  /** Показывать текст. Если false, текст не отображается. Если true - всегда показывать */
  showText: {
    type: Boolean,
    default: undefined,
  },
});

const slots = useSlots();
const hasText = computed(() => {
  // Если showText явно указан, используем его
  if (props.showText !== undefined) {
    return props.showText;
  }
  // Если есть слот, показываем его
  if (slots.default) {
    return true;
  }
  // Если есть текст в prop, показываем его
  return !!(props.text && props.text.trim().length > 0);
});

const loaderConfig = computed(() => useVariantLoader(props.variant));

const BASE_CLASSES = "flex items-center justify-center";
const BASE_SPINNER_CLASSES = "border-2 rounded-full animate-spin";

const loaderClasses = computed(() => [
  BASE_CLASSES,
  hasText.value ? 'gap-2' : '',
  hasText.value ? useSize(props.size, 'text') : '',
  hasText.value ? loaderConfig.value.text : ''
].filter(Boolean));

const spinnerClasses = computed(() => [
  BASE_SPINNER_CLASSES,
  useSize(props.size, 'loader'),
  loaderConfig.value.border,
  loaderConfig.value.borderTop
]);
</script>

