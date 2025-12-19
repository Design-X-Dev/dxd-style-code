<template>
  <DXFormLabel
    :label="label"
    :error="error"
    :helper="helper"
    :required="required"
    data-component="DXPasswordInput"
    :data-disabled="disabled"
    :data-error="!!error"
  >
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :class="inputClasses"
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
  </DXFormLabel>
</template>

<script setup>
import { ref, computed } from "vue";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";
import DXFormLabel from "../../atoms/DXFormLabel/DXFormLabel.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: { type: String, default: "" },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
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

const BASE_CLASSES = "w-full pr-11 h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 transition-colors";

const inputClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_CLASSES,
    {
      'hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300': !props.disabled,
      'opacity-60 cursor-not-allowed bg-slate-50': props.disabled,
      'border-rose-300 focus:ring-rose-500/10': props.error,
    }
  )
);
</script>

