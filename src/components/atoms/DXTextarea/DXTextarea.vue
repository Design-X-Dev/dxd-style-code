<template>
  <div class="w-full" data-component="DXTextarea">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <textarea
      :rows="rows"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-colors disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
defineProps({
  /** Значение (v-model) */
  modelValue: String,
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Количество строк */
  rows: { type: Number, default: 3 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
});

defineEmits(["update:modelValue"]);
</script>

