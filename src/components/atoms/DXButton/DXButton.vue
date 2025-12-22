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
import { useVariantButton } from "@/composables/useVariant";
import { useClassComposition } from "@/composables/useClassComposition";

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

const BASE_CLASSES = "btn group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";

/**
 * Определяет тег компонента (button, router-link или a)
 */
const componentTag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

/**
 * Классы размера
 */
const sizeClass = computed(() => {
  return useSize(props.size, props.iconOnly ? 'buttonIcon' : 'button');
});

/**
 * Все классы для кнопки
 */
const allClasses = computed(() => 
  useClassComposition(
    BASE_CLASSES,
    useVariantButton(props.variant),
    sizeClass.value,
    {
      'w-full': props.block,
      'px-0 py-0': props.iconOnly,
    }
  )
);
</script>

