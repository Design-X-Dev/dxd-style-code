<template>
  <div class="flex flex-wrap gap-2" data-component="DXTabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="tab-btn px-3 py-2 rounded-xl text-sm font-semibold border transition"
      :class="modelValue === tab.value 
        ? 'bg-slate-800 text-white border-slate-800' 
        : 'border-slate-200 text-slate-700 hover:border-slate-300'"
      @click="$emit('update:modelValue', tab.value)"
    >
      <span class="flex items-center gap-2">
        <component v-if="tab.icon" :is="tab.icon" class="w-4 h-4" />
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.count !== undefined"
          class="inline-flex items-center justify-center min-w-[24px] px-2 py-1 text-[11px] rounded-full"
          :class="modelValue === tab.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'"
        >
          {{ tab.count }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  /** Текущее значение (v-model) */
  modelValue: [String, Number],
  /** Табы: [{ value, label, icon?, count? }] */
  tabs: { type: Array, default: () => [] },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
@keyframes tab-wiggle {
  0% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  50% { transform: translateX(0) rotate(0deg); }
  75% { transform: translateX(1px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}
.tab-btn svg {
  transition: transform 150ms ease;
}
.tab-btn:hover svg {
  animation: tab-wiggle 0.28s ease-in-out;
}
</style>

