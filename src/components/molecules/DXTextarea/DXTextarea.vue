<template>
  <DXFormLabel
    :label="label"
    :error="error"
    :helper="helper"
    :required="required"
    :maxLength="maxLength"
    :currentLength="currentLength"
    :showCount="showCount"
    data-component="DXTextarea"
    :data-disabled="disabled"
    :data-error="!!error"
  >
    <div class="relative">
      <DXIconWrapper
        v-if="prefixIcon"
        position="left"
        verticalAlign="top"
        :icon="prefixIcon"
        size="md"
      />
      
      <textarea
        :rows="rows"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :maxlength="maxLength > 0 ? maxLength : null"
        :class="textareaClasses"
        @input="handleInput"
      />
      
      <DXIconWrapper
        v-if="suffixIcon"
        position="right"
        verticalAlign="top"
        :icon="suffixIcon"
        size="md"
      />
    </div>
  </DXFormLabel>
</template>

<script setup>
import { computed, ref, watch, inject, onMounted, onUnmounted } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXFormLabel from "../../atoms/DXFormLabel/DXFormLabel.vue";
import DXIconWrapper from "../../atoms/DXIconWrapper/DXIconWrapper.vue";

const inputGroup = inject("inputGroup", null);

// Генерируем уникальный ID для регистрации
const componentId = Date.now() + Math.random();

onMounted(() => {
  if (inputGroup?.registerComponent) {
    inputGroup.registerComponent('textarea', componentId);
  }
});

onUnmounted(() => {
  if (inputGroup?.unregisterComponent) {
    inputGroup.unregisterComponent(componentId);
  }
});

// Получаем информацию о позиции addon
const addonPosition = computed(() => {
  if (!inputGroup?.getComponentPosition) {
    return { hasLeftAddon: false, hasRightAddon: false };
  }
  return inputGroup.getComponentPosition(componentId);
});

const props = defineProps({
  /** Значение (v-model) */
  modelValue: String,
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Количество строк */
  rows: { type: Number, default: 3 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Иконка слева (в верхнем левом углу) */
  prefixIcon: { type: [Object, Function], default: null },
  /** Иконка справа (в верхнем правом углу) */
  suffixIcon: { type: [Object, Function], default: null },
  /** Максимальная длина */
  maxLength: { type: Number, default: 0 },
  /** Показывать счетчик символов */
  showCount: { type: Boolean, default: false },
  /** Автоматическое изменение размера */
  autoResize: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const currentLength = ref(props.modelValue?.length || 0);

const handleInput = (event) => {
  const value = event.target.value;
  currentLength.value = value.length;
  emit("update:modelValue", value);
  
  // Auto-resize functionality
  if (props.autoResize) {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }
};

watch(() => props.modelValue, (newValue) => {
  currentLength.value = newValue?.length || 0;
});

const BASE_CLASSES = "w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-colors resize-y";

// Адаптивные отступы для иконок
const getPaddingClasses = (hasIcon, position) => {
  if (!hasIcon) return '';
  // Для textarea используем средние отступы, так как размер не передается
  return position === 'left' ? 'pl-11' : 'pr-11';
};

// Получаем классы скругления в зависимости от позиции addon
const getBorderRadiusClasses = () => {
  if (addonPosition.value.hasLeftAddon && addonPosition.value.hasRightAddon) {
    return 'rounded-none'; // Оба addon - без скругления
  } else if (addonPosition.value.hasLeftAddon) {
    return 'rounded-l-none rounded-r-xl'; // Только слева
  } else if (addonPosition.value.hasRightAddon) {
    return 'rounded-l-xl rounded-r-none'; // Только справа
  } else {
    return 'rounded-xl'; // Нет addon - полное скругление
  }
};

const textareaClasses = computed(() =>
  useClassComposition(
    `${BASE_CLASSES} ${getBorderRadiusClasses()}`,
    {
      'opacity-60 cursor-not-allowed bg-slate-50': props.disabled,
      'border-rose-300 focus:ring-rose-500/10': props.error,
    },
    getPaddingClasses(props.prefixIcon, 'left'),
    getPaddingClasses(props.suffixIcon, 'right')
  )
);
</script>

