<template>
  <button
    type="button"
    :class="allClasses"
    class="group"
    :disabled="disabled"
    @click="handleClick"
    @keydown.enter="handleClick"
    data-component="DXDropdownItem"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
  >
    <DXIcon 
      v-if="icon" 
      :icon="icon" 
      :size="iconSize" 
      :animation="iconAnimation"
      :group-hover="true"
      class="flex-shrink-0" 
    />
    <span class="flex-1 text-left">
      <slot />
    </span>
    <DXIcon 
      v-if="submenu" 
      :icon="ChevronRightIcon" 
      size="xs" 
      :animation="iconAnimation"
      :group-hover="true"
      class="text-slate-400 flex-shrink-0" 
    />
    <DXBadge v-if="badge" :variant="badgeVariant" size="sm" class="flex-shrink-0">{{ badge }}</DXBadge>
  </button>
</template>

<script setup>
import { inject, computed } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../v2/DXIcon/DXIcon.vue";
import DXBadge from "../v2/DXBadge/DXBadge.vue";

const props = defineProps({
  /** Иконка (Heroicon компонент) */
  icon: { type: Object, default: null },
  /** Вариант: default | danger | success */
  variant: { 
    type: String, 
    default: 'default',
    validator: (value) => ['default', 'danger', 'success'].includes(value)
  },
  /** Размер: sm | md */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value)
  },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Показать индикатор подменю */
  submenu: { type: Boolean, default: false },
  /** Закрыть dropdown при клике */
  closeOnClick: { type: Boolean, default: true },
  /** Текст badge */
  badge: { type: [String, Number], default: null },
  /** Вариант badge */
  badgeVariant: { type: String, default: 'slate' },
  /** Анимация иконки: none | wiggle | scale | rotate */
  iconAnimation: {
    type: String,
    default: 'wiggle',
    validator: (value) => ['none', 'wiggle', 'scale', 'rotate'].includes(value)
  },
});

const emit = defineEmits(["click"]);

const dropdown = inject("dropdown", null);

const BASE_CLASSES = "w-full flex items-center gap-3 rounded-lg transition-colors";

const VARIANT_CLASSES = {
  default: "text-slate-700 hover:bg-slate-50",
  danger: "text-rose-600 hover:bg-rose-50",
  success: "text-emerald-600 hover:bg-emerald-50",
};

const SIZE_CLASSES = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
};

const allClasses = computed(() => [
  BASE_CLASSES,
  VARIANT_CLASSES[props.variant] || VARIANT_CLASSES.default,
  SIZE_CLASSES[props.size] || SIZE_CLASSES.md,
  props.disabled && "opacity-60 cursor-not-allowed",
]);

const iconSize = computed(() => props.size === 'sm' ? 'xs' : 'sm');

const handleClick = (event) => {
  if (props.disabled) return;
  
  emit("click", event);
  
  if (props.closeOnClick && dropdown?.close) {
    dropdown.close();
  }
};
</script>
