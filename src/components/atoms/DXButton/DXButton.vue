<template>
  <component
    :is="componentTag"
    :type="componentTag === 'button' ? type : undefined"
    :disabled="disabled"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    class="btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60"
    :class="[sizeClass, variantClass, { 'w-full': block, 'px-0 py-0': iconOnly }]"
    data-component="DXButton"
    :data-variant="variant"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Вариант оформления: primary | ghost | danger | outline */
  variant: { type: String, default: "primary" },
  /** Размер: sm | md | lg */
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

const sizeClass = computed(() => {
  if (props.iconOnly) {
    if (props.size === "sm") return "h-9 w-9 text-xs";
    if (props.size === "lg") return "h-12 w-12 text-sm";
    return "h-10 w-10 text-sm";
  }
  if (props.size === "sm") return "px-3 py-2 text-xs";
  if (props.size === "lg") return "px-5 py-3 text-base";
  return "px-4 py-2 text-sm";
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "ghost":
      return "border border-slate-200 text-slate-700 hover:border-slate-300 bg-white";
    case "danger":
      return "bg-rose-600 text-white hover:bg-rose-500";
    case "outline":
      return "border border-slate-200 text-slate-700 hover:border-slate-300 bg-white";
    default:
      return "bg-slate-800 text-white hover:bg-slate-700";
  }
});
</script>

<style scoped>
@keyframes btn-wiggle {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(1px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}
.btn :deep(svg) {
  transition: transform 150ms ease;
}
.btn:hover :deep(svg) {
  animation: btn-wiggle 0.28s ease-in-out;
}
</style>

