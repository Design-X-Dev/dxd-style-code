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
        <DXIcon v-if="tab.icon" :icon="tab.icon" size="sm" animation="wiggle" />
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
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

defineProps({
  /** Текущее значение (v-model) */
  modelValue: [String, Number],
  /** Табы: [{ value, label, icon?, count? }] */
  tabs: { type: Array, default: () => [] },
});

defineEmits(["update:modelValue"]);
</script>


