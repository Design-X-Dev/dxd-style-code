<template>
  <div 
    class="relative inline-block align-top" 
    ref="root" 
    data-component="DXDropdown"
    :data-position="position"
    :data-width="width"
    :data-variant="variant"
    :data-disabled="disabled"
  >
    <!-- Hybrid approach: styled button with slot content + chevron -->
    <button
      type="button"
      :class="triggerClasses"
      :disabled="disabled"
      @click="toggle"
      @keydown.down.prevent="handleKeyDown"
      @keydown.up.prevent="handleKeyUp"
      @keydown.escape="close"
      aria-haspopup="true"
      :aria-expanded="open"
    >
      <!-- Slot для содержимого -->
      <slot name="trigger">Меню</slot>
      
      <!-- Chevron справа (если showChevron === true) -->
      <DXIcon 
        v-if="showChevron"
        :icon="ChevronDownIcon" 
        size="sm" 
        animation="none"
        class="text-slate-400 transition-transform duration-200 flex-shrink-0"
        :class="{ 'rotate-180': open }"
      />
    </button>
    
    <Transition name="dropdown-fade">
      <div
        v-if="open"
        :class="menuClasses"
        :style="menuStyles"
        @keydown.down.prevent="focusNext"
        @keydown.up.prevent="focusPrevious"
        @keydown.escape="close"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted, onBeforeUnmount, nextTick } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Позиционирование: left | right | center */
  position: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'center'].includes(value)
  },
  /** Ширина меню: sm | md | lg | xl | auto */
  width: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'auto'].includes(value)
  },
  /** Вариант оформления: default | minimal */
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'minimal'].includes(value)
  },
  /** Отступ от trigger (px) */
  offset: {
    type: Number,
    default: 8
  },
  /** Отключить dropdown */
  disabled: {
    type: Boolean,
    default: false
  },
  /** Показать стрелочку (chevron) */
  showChevron: {
    type: Boolean,
    default: true
  }
});

const open = ref(false);
const root = ref(null);
const currentFocusIndex = ref(-1);

const toggle = () => {
  if (props.disabled) return;
  open.value = !open.value;
  
  if (open.value) {
    nextTick(() => {
      focusFirst();
    });
  }
};

const close = () => {
  open.value = false;
  currentFocusIndex.value = -1;
};

const onClickOutside = (e) => {
  if (root.value && !root.value.contains(e.target)) {
    close();
  }
};

// Provide context для DXDropdownItem
const dropdownContext = {
  close,
  isOpen: computed(() => open.value)
};

provide('dropdown', dropdownContext);

// Keyboard navigation
const getFocusableItems = () => {
  if (!root.value) return [];
  const menu = root.value.querySelector('[data-component="DXDropdown"] > div:last-child');
  if (!menu) return [];
  return Array.from(menu.querySelectorAll('button[data-component="DXDropdownItem"]:not([disabled])'));
};

const focusFirst = () => {
  const items = getFocusableItems();
  if (items.length > 0) {
    items[0].focus();
    currentFocusIndex.value = 0;
  }
};

const focusNext = () => {
  const items = getFocusableItems();
  if (items.length === 0) return;
  
  currentFocusIndex.value = (currentFocusIndex.value + 1) % items.length;
  items[currentFocusIndex.value].focus();
};

const focusPrevious = () => {
  const items = getFocusableItems();
  if (items.length === 0) return;
  
  currentFocusIndex.value = currentFocusIndex.value <= 0 
    ? items.length - 1 
    : currentFocusIndex.value - 1;
  items[currentFocusIndex.value].focus();
};

const handleKeyDown = () => {
  if (!open.value) {
    toggle();
  } else {
    focusNext();
  }
};

const handleKeyUp = () => {
  if (open.value) {
    focusPrevious();
  }
};

// Classes
const triggerClasses = computed(() => [
  "inline-flex items-center px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/10",
  props.showChevron && "gap-2", // gap только если есть chevron
  props.disabled && "opacity-60 cursor-not-allowed hover:border-slate-200",
]);

const POSITION_CLASSES = {
  left: 'left-0',
  right: 'right-0',
  center: 'left-1/2 -translate-x-1/2',
};

const WIDTH_CLASSES = {
  sm: 'w-48',
  md: 'w-56',
  lg: 'w-72',
  xl: 'w-96',
  auto: 'w-auto min-w-[12rem]',
};

const menuClasses = computed(() => [
  "absolute z-20 bg-white border border-slate-200 rounded-2xl shadow-lg py-2",
  POSITION_CLASSES[props.position],
  WIDTH_CLASSES[props.width],
  props.variant === 'minimal' && 'shadow-md border-slate-100',
]);

const menuStyles = computed(() => ({
  marginTop: `${props.offset}px`,
}));

onMounted(() => {
  document.addEventListener("click", onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", onClickOutside);
});
</script>

<style scoped>
/* Dropdown fade animation */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}

.dropdown-fade-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.dropdown-fade-enter-to,
.dropdown-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
