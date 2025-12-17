<template>
  <div class="space-y-2" data-component="DXFilterGroup">
    <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">{{ label }}</p>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="option in options"
        :key="option.value"
        type="button"
        class="px-3 py-2 rounded-full text-xs font-semibold border transition"
        :class="modelValue === option.value 
          ? 'bg-slate-800 text-white border-slate-800' 
          : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white'"
        @click="$emit('update:modelValue', option.value)"
      >
        {{ option.label }}
      </button>
      <button
        v-if="modelValue && clearable"
        type="button"
        class="px-3 py-2 rounded-full text-xs font-semibold border border-amber-300 text-amber-700 bg-amber-50 hover:bg-amber-100 transition"
        @click="$emit('update:modelValue', null)"
      >
        Сбросить
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  /** Лейбл группы */
  label: { type: String, required: true },
  /** Опции: [{ value, label }] */
  options: { type: Array, default: () => [] },
  /** Текущее значение (v-model) */
  modelValue: [String, Boolean],
  /** Показывать кнопку сброса */
  clearable: { type: Boolean, default: true },
});

defineEmits(["update:modelValue"]);
</script>

