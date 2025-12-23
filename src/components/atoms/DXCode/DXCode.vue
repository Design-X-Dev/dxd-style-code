<template>
  <component
    :is="block ? 'pre' : 'code'"
    :class="codeClasses"
    data-component="DXCode"
    :data-block="block"
  >
    <code v-if="block"><slot /></code>
    <slot v-else />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Блочный код (pre) или inline */
  block: { type: Boolean, default: false },
  /** Размер: xs | sm | md */
  size: { type: String, default: "sm" },
  /** Показывать номера строк (только для block) */
  lineNumbers: { type: Boolean, default: false },
});

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
};

const codeClasses = computed(() => {
  if (props.block) {
    return [
      "block w-full overflow-x-auto rounded-xl bg-slate-900 text-slate-100 p-4",
      sizeClasses[props.size] || sizeClasses.sm,
      "font-mono leading-relaxed",
    ];
  }
  return [
    "inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-800",
    sizeClasses[props.size] || sizeClasses.sm,
    "font-mono",
  ];
});
</script>

