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
        <DXIcon :icon="showPassword ? EyeSlashIcon : EyeIcon" size="md" animation="scale" />
      </button>
    </div>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

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

