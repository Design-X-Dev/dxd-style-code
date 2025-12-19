<template>
  <div 
    :class="loaderClasses" 
    data-component="DXLoader"
    :data-size="size"
  >
    <span :class="spinnerClasses"></span>
    <slot>Загрузка...</slot>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /** Размер: sm | md | lg */
  size: {
    type: String,
    default: "md",
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
});

const BASE_CLASSES = "flex items-center justify-center gap-2 text-slate-600";
const BASE_SPINNER_CLASSES = "border-2 border-slate-300 border-t-slate-900 rounded-full animate-spin";

const SIZE_CLASSES = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const SPINNER_SIZE_CLASSES = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

const loaderClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    SIZE_CLASSES[props.size]
  )
);

const spinnerClasses = computed(() =>
  useClassComposition(
    BASE_SPINNER_CLASSES,
    SPINNER_SIZE_CLASSES[props.size]
  )
);
</script>

