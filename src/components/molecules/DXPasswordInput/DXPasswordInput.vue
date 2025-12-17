<template>
  <div class="w-full" data-component="DXPasswordInput">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        class="w-full pr-11 h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 transition-colors hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
        :class="{ 'border-rose-300 focus:ring-rose-500/10': error }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
        :disabled="disabled"
        @click="showPassword = !showPassword"
        :aria-label="showPassword ? 'Скрыть пароль' : 'Показать пароль'"
      >
        <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
      </button>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  /** Значение (v-model) */
  modelValue: { type: String, default: "" },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);

const showPassword = ref(false);
</script>

