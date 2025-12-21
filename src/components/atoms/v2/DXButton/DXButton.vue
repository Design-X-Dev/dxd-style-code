<template>
  <component
    :is="componentTag"
    :type="componentTag === 'button' ? type : undefined"
    :disabled="disabled"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :class="allClasses"
    data-component="DXButton"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
    :data-icon-only="iconOnly"
    :data-block="block"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "@/composables/useSize";

const props = defineProps({
  /** Вариант оформления: primary | secondary | ghost | outline | success | warning | danger | info | link | soft */
  variant: { type: String, default: "primary" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Растянуть на всю ширину */
  block: { type: Boolean, default: false },
  /** Только иконка (квадратная кнопка) */
  iconOnly: { type: Boolean, default: false },
  /** Тип кнопки для form */
  type: { type: String, default: "button" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Vue Router путь */
  to: { type: [String, Object], default: null },
  /** Обычная ссылка */
  href: { type: String, default: null },
  /** Target для ссылки */
  target: { type: String, default: null },
  /** Rel для ссылки */
  rel: { type: String, default: null },
});

const componentTag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

const BASE_CLASSES = "btn group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";

const VARIANT_CLASSES = {
  // Основные варианты
  primary: "bg-slate-800 text-white hover:bg-slate-700",
  secondary: "bg-slate-200 text-slate-700 hover:bg-slate-300",
  ghost: "text-slate-700 hover:bg-slate-100 bg-transparent",
  outline: "border border-slate-200 text-slate-700 hover:border-slate-300 bg-white",
  // Семантические варианты
  success: "bg-emerald-600 text-white hover:bg-emerald-500",
  warning: "bg-amber-600 text-white hover:bg-amber-500",
  danger: "bg-rose-600 text-white hover:bg-rose-500",
  info: "bg-blue-600 text-white hover:bg-blue-500",
  // Дополнительные варианты
  link: "text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline bg-transparent",
  soft: "bg-slate-50 text-slate-700 hover:bg-slate-100",
};

const sizeClass = computed(() => {
  return useSize(props.size, props.iconOnly ? 'buttonIcon' : 'button');
});

const allClasses = computed(() => [
  BASE_CLASSES,
  VARIANT_CLASSES[props.variant] || VARIANT_CLASSES.primary,
  sizeClass.value,
  {
    'w-full': props.block,
    'px-0 py-0': props.iconOnly,
  }
]);
</script>

