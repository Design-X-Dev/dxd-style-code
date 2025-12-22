<template>
  <span 
    :class="allClasses" 
    data-component="DXBadge" 
    :data-variant="variant"
    :data-size="size"
  >
    <DXIcon v-if="iconLeft" :icon="iconLeft" size="xs" animation="none" />
    <slot />
    <DXIcon v-if="iconRight" :icon="iconRight" size="xs" animation="none" />
  </span>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "@/composables/useSize";
import { useVariantBadge } from "@/composables/useVariant";
import { useClassComposition } from "@/composables/useClassComposition";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Вариант оформления: slate | success | warning | danger | info */
  variant: { type: String, default: "slate" },
  /** Размер: sm | md */
  size: { type: String, default: "sm" },
  /** Иконка слева */
  iconLeft: { type: [Object, Function], default: null },
  /** Иконка справа */
  iconRight: { type: [Object, Function], default: null },
});

const BASE_CLASSES = "inline-flex items-center gap-1 rounded-full border font-semibold";

/**
 * Все классы для badge
 */
const allClasses = computed(() => 
  useClassComposition(
    BASE_CLASSES,
    useSize(props.size, 'badge'),
    useVariantBadge(props.variant)
  )
);
</script>

