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
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";

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

const BASE_CLASSES = "btn inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";

const VARIANT_CLASSES = {
  primary: "bg-slate-800 text-white hover:bg-slate-700",
  ghost: "border border-slate-200 text-slate-700 hover:border-slate-300 bg-white",
  danger: "bg-rose-600 text-white hover:bg-rose-500",
  outline: "border border-slate-200 text-slate-700 hover:border-slate-300 bg-white",
};

const sizeClass = computed(() => {
  if (props.iconOnly) {
    const iconSizes = {
      sm: "h-9 w-9 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-sm",
    };
    return iconSizes[props.size] || iconSizes.md;
  }
  return useComponentSize(props.size, 'button');
});

const allClasses = computed(() => 
  useClassCompositionWithConditions(
    BASE_CLASSES,
    {
      [VARIANT_CLASSES[props.variant] || VARIANT_CLASSES.primary]: true,
      [sizeClass.value]: true,
      'w-full': props.block,
      'px-0 py-0': props.iconOnly,
    }
  )
);
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

