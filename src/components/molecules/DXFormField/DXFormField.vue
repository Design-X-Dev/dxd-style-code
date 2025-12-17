<template>
  <div class="w-full" data-component="DXFormField">
    <label v-if="label" class="block text-sm text-slate-600 mb-1">
      {{ label }}
      <span v-if="required" class="text-rose-500">*</span>
    </label>
    <div class="relative">
      <div v-if="$slots.prefix" class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        <slot name="prefix" />
      </div>
      <slot />
      <div v-if="$slots.suffix" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
        <slot name="suffix" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
defineProps({
  /** Лейбл поля */
  label: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
});
</script>

