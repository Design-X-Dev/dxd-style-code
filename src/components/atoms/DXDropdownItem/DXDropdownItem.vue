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
import { useSize } from "../../../composables/useSize";
import { useVariantDropdownItem } from "../../../composables/useVariant";
import { useClassComposition } from "../../../composables/useClassComposition";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../DXIcon/DXIcon.vue";
import DXBadge from "../DXBadge/DXBadge.vue";

const props = defineProps({
  /** Иконка (Heroicon компонент) */
  icon: { type: [Object, Function], default: null },
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

/**
 * Все классы для dropdown item
 */
const allClasses = computed(() => 
  useClassComposition(
    BASE_CLASSES,
    useVariantDropdownItem(props.variant),
    useSize(props.size, 'button'),
    {
      'opacity-60 cursor-not-allowed': props.disabled,
    }
  )
);

/**
 * Размер иконки в зависимости от размера item
 */
const iconSize = computed(() => props.size === 'sm' ? 'xs' : 'sm');

/**
 * Обработчик клика
 */
const handleClick = (event) => {
  if (props.disabled) return;
  
  emit("click", event);
  
  if (props.closeOnClick && dropdown?.close) {
    dropdown.close();
  }
};
</script>
