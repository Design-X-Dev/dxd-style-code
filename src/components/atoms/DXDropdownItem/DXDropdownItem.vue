<template>
  <button
    type="button"
    class="dropdown-item w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition"
    :class="[
      danger
        ? 'text-rose-600 hover:bg-rose-50'
        : 'text-slate-700 hover:bg-slate-50',
      disabled && 'opacity-60 cursor-not-allowed',
    ]"
    :disabled="disabled"
    @click="handleClick"
    data-component="DXDropdownItem"
  >
    <component v-if="icon" :is="icon" class="w-4 h-4 flex-shrink-0" />
    <span class="flex-1">
      <slot />
    </span>
    <svg v-if="submenu" class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
</template>

<script setup>
import { inject } from "vue";

const props = defineProps({
  icon: { type: Object, default: null },
  danger: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  submenu: { type: Boolean, default: false },
  closeOnClick: { type: Boolean, default: true },
});

const emit = defineEmits(["click"]);

const dropdown = inject("dropdown", null);

const handleClick = (event) => {
  if (props.disabled) return;
  
  emit("click", event);
  
  if (props.closeOnClick && dropdown) {
    dropdown.close();
  }
};
</script>

<style scoped>
.dropdown-item:hover :deep(svg) {
  animation: wiggle 0.28s ease-in-out;
}

@keyframes wiggle {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  75% { transform: translateX(1px) rotate(3deg); }
}
</style>

