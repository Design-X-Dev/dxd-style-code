<template>
  <div class="relative inline-block" ref="root" data-component="DXDropdown">
    <button
      type="button"
      class="dropdown-btn inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:border-slate-300 transition"
      @click="toggle"
    >
      <slot name="trigger">Меню</slot>
      <span class="text-slate-400">▼</span>
    </button>
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-lg py-2 z-20"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const open = ref(false);
const root = ref(null);

const toggle = () => (open.value = !open.value);
const close = () => (open.value = false);

const onClickOutside = (e) => {
  if (root.value && !root.value.contains(e.target)) {
    close();
  }
};

onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>

<style scoped>
@keyframes btn-wiggle {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(1px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}
.dropdown-btn :deep(svg) {
  transition: transform 150ms ease;
}
.dropdown-btn:hover :deep(svg) {
  animation: btn-wiggle 0.28s ease-in-out;
}
</style>

