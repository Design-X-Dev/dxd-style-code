<template>
  <DXButton
    :variant="buttonVariant"
    :size="size"
    icon-only
    :aria-label="ariaLabel"
    :class="customClasses"
    @click="$emit('click', $event)"
    data-component="DXCloseButton"
    :data-size="size"
    :data-variant="variant"
  >
    <DXIcon :icon="XMarkIcon" :size="iconSize" animation="scale" />
  </DXButton>
</template>

<script setup>
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import DXButton from "../../atoms/v2/DXButton/DXButton.vue";
import DXIcon from "../../atoms/v2/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Вариант цвета: default | light | danger */
  variant: { type: String, default: "default" },
  /** Aria label */
  ariaLabel: { type: String, default: "Закрыть" },
});

defineEmits(["click"]);

// Маппинг вариантов DXCloseButton на варианты DXButton
const buttonVariant = computed(() => {
  const map = {
    default: 'ghost',
    light: 'ghost',
    danger: 'danger'
  };
  return map[props.variant] || 'ghost';
});

// Дополнительные классы для варианта "light"
const customClasses = computed(() => {
  if (props.variant === 'light') {
    return '!text-white/70 hover:!text-white hover:!bg-transparent';
  }
  // Для варианта "default" переопределяем цвет текста ghost кнопки
  if (props.variant === 'default') {
    return 'text-slate-400 hover:text-slate-600';
  }
  return '';
});

// Маппинг размеров для иконки
const iconSize = computed(() => {
  const map = { sm: 'xs', md: 'sm', lg: 'md' };
  return map[props.size] || 'sm';
});
</script>

