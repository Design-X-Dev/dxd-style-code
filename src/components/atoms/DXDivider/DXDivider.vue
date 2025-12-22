<template>
  <div 
    :class="dividerClasses" 
    data-component="DXDivider" 
    :data-orientation="props.orientation"
    :data-color="props.color"
    :data-thickness="props.thickness"
    :data-spacing="props.spacing"
  >
    <!-- Горизонтальный divider с текстом -->
    <div v-if="hasText && isHorizontal" class="flex items-center w-full">
      <div :class="lineClasses" />
      <span class="px-3 text-sm text-slate-500 whitespace-nowrap">
        <slot />
      </span>
      <div :class="lineClasses" />
    </div>
    <!-- Горизонтальный divider без текста -->
    <div v-else-if="isHorizontal" :class="lineClasses" />
    <!-- Вертикальный divider -->
    <div v-else :class="lineClasses" />
  </div>
</template>

<script setup>
import { computed, useSlots } from "vue";
import { useSpacing } from "@/composables/useSpacing";
import { useVariantDividerBorder } from "@/composables/useVariant";

const props = defineProps({
  /** Ориентация: horizontal | vertical */
  orientation: { type: String, default: "horizontal" },
  /** Цвет: light | default | dark */
  color: { type: String, default: "default" },
  /** Толщина: thin | default | thick */
  thickness: { type: String, default: "default" },
  /** Отступы: none | sm | md | lg */
  spacing: { type: String, default: "md" },
});

const slots = useSlots();
const isHorizontal = computed(() => props.orientation === 'horizontal');
const hasText = computed(() => !!slots.default);

const dividerClasses = computed(() => [
  props.orientation === "vertical" ? "inline-flex h-full" : "w-full",
  props.orientation === "horizontal" 
    ? useSpacing(props.spacing, 'marginY')
    : useSpacing(props.spacing, 'marginX'),
]);

const lineClasses = computed(() => {
  const borderClass = useVariantDividerBorder(
    props.orientation,
    props.thickness,
    props.color
  );
  
  if (props.orientation === "vertical") {
    // Вертикальный divider: нужна минимальная ширина и высота
    return [
      "h-full min-h-[1rem] w-0",
      borderClass,
    ];
  } else {
    // Горизонтальный divider: нужна минимальная высота и ширина
    return [
      "flex-1 min-w-[1rem] h-0",
      borderClass,
    ];
  }
});
</script>

