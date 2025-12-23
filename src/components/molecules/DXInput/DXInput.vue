<template>
  <DXFormLabel
    :label="label"
    :error="error"
    :helper="helper"
    :required="required"
    data-component="DXInput"
    :data-size="size"
    :data-disabled="disabled"
    :data-error="!!error"
  >
    <div class="relative">
      <DXIconWrapper
        v-if="prefixIcon || $slots.prefix"
        position="left"
        :icon="prefixIcon"
        :size="getIconSize()"
      >
        <slot name="prefix" />
      </DXIconWrapper>
      
      <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      
      <DXIconWrapper
        v-if="suffixIcon || $slots.suffix"
        position="right"
        :icon="suffixIcon"
        :size="getIconSize()"
      >
        <slot name="suffix" />
      </DXIconWrapper>
    </div>
  </DXFormLabel>
</template>

<script setup>
import { computed, useSlots, inject, onMounted, onUnmounted } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXFormLabel from "../../atoms/DXFormLabel/DXFormLabel.vue";
import DXIconWrapper from "../../atoms/DXIconWrapper/DXIconWrapper.vue";

const slots = useSlots();
const inputGroup = inject("inputGroup", null);

// Генерируем уникальный ID для регистрации
const componentId = Date.now() + Math.random();

onMounted(() => {
  if (inputGroup?.registerComponent) {
    inputGroup.registerComponent('input', componentId);
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
  /** Значение поля (v-model) */
  modelValue: [String, Number],
  /** Тип input */
  type: { type: String, default: "text" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Лейбл над полем */
  label: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Дополнительные классы */
  inputClass: { type: [String, Array, Object], default: "" },
  /** Иконка слева (Heroicon компонент) */
  prefixIcon: { type: [Object, Function], default: null },
  /** Иконка справа (Heroicon компонент) */
  suffixIcon: { type: [Object, Function], default: null },
});

defineEmits(["update:modelValue"]);

// Размер иконки в зависимости от размера инпута
const getIconSize = () => {
  const sizeMap = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  };
  return sizeMap[props.size] || 'md';
};

const BASE_CLASSES = "w-full border border-slate-200 bg-white transition-colors text-slate-700 placeholder:text-slate-400";

// Адаптивные отступы для иконок в зависимости от размера инпута
const getPaddingClasses = (hasIcon, position) => {
  if (!hasIcon) return '';
  const paddingMap = {
    sm: position === 'left' ? 'pl-10' : 'pr-10',
    md: position === 'left' ? 'pl-11' : 'pr-11',
    lg: position === 'left' ? 'pl-12' : 'pr-12',
  };
  return paddingMap[props.size] || paddingMap.md;
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

const inputClasses = computed(() => 
  useClassComposition(
    `${BASE_CLASSES} ${getBorderRadiusClasses()}`,
    {
      [useSize(props.size, 'input')]: true,
      'hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300': !props.disabled,
      'opacity-60 cursor-not-allowed bg-slate-50': props.disabled,
      'border-rose-300 focus:ring-rose-500/10': props.error,
      [getPaddingClasses(props.prefixIcon || slots.prefix, 'left')]: true,
      [getPaddingClasses(props.suffixIcon || slots.suffix, 'right')]: true,
    },
    props.inputClass
  )
);
</script>

