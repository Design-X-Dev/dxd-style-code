<template>
  <label
    class="inline-flex items-center gap-2 cursor-pointer"
    :class="{ 'opacity-60 cursor-not-allowed': disabled }"
    data-component="DXToggle"
  >
    <button
      type="button"
      role="switch"
      :aria-checked="modelValue"
      :disabled="disabled"
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:ring-offset-2"
      :class="modelValue ? 'bg-slate-900' : 'bg-slate-200'"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
        :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
      />
    </button>
    <span v-if="label" class="text-sm text-slate-700 select-none">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
defineProps({
  /** Значение (v-model) */
  modelValue: { type: Boolean, default: false },
  /** Текст лейбла */
  label: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);
</script>

