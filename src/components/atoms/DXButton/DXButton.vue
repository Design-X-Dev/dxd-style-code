<template>
  <component
    :is="componentTag"
    :type="componentTag === 'button' ? type : undefined"
    :disabled="effectiveDisabled"
    :to="to"
    :href="href"
    :target="target"
    :rel="rel"
    :class="allClasses"
    data-component="DXButton"
    :data-variant="variant"
    :data-size="effectiveSize"
    :data-disabled="effectiveDisabled"
    :data-icon-only="iconOnly"
    :data-block="block"
    :data-in-group="!!buttonGroup"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed, inject, onMounted, onUnmounted } from "vue";
import { useSize } from "../../../composables/useSize";
import { useVariantButton } from "../../../composables/useVariant";
import { useClassComposition } from "../../../composables/useClassComposition";

const props = defineProps({
  /** Вариант оформления: primary | secondary | ghost | outline | success | warning | danger | info | link | soft */
  variant: { type: String, default: "primary" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Растянуть на всю ширину */
  block: { type: Boolean, default: false },
  /** Только иконка (квадратная кнопка) */
  iconOnly: { type: Boolean, default: false },
  /** Тип кнопки для form */
  type: { type: String, default: "button" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Vue Router путь */
  to: { type: [String, Object], default: null },
  /** Обычная ссылка */
  href: { type: String, default: null },
  /** Target для ссылки */
  target: { type: String, default: null },
  /** Rel для ссылки */
  rel: { type: String, default: null },
  /** Значение для использования в DXButtonGroup */
  value: { type: [String, Number], default: null },
});

const buttonGroup = inject("buttonGroup", null);

// Генерируем уникальный ID для регистрации
const componentId = Date.now() + Math.random();

onMounted(() => {
  if (buttonGroup?.registerComponent) {
    buttonGroup.registerComponent('button', componentId);
  }
});

onUnmounted(() => {
  if (buttonGroup?.unregisterComponent) {
    buttonGroup.unregisterComponent(componentId);
  }
});

// Получаем информацию о позиции кнопки в группе
const buttonPosition = computed(() => {
  if (!buttonGroup?.getComponentPosition) {
    return { isFirst: false, isLast: false, isMiddle: false };
  }
  return buttonGroup.getComponentPosition(componentId);
});

// Эффективный размер: используем размер группы, если кнопка в группе
const effectiveSize = computed(() => {
  if (buttonGroup) {
    // Маппинг размеров группы на размеры кнопки
    const sizeMap = {
      sm: 'sm',
      md: 'md',
      lg: 'lg',
    };
    return sizeMap[buttonGroup.size] || 'md';
  }
  return props.size;
});

// Эффективное состояние disabled: учитываем состояние группы
const effectiveDisabled = computed(() => {
  return props.disabled || (buttonGroup?.disabled ?? false);
});

// Проверяем, выбрана ли кнопка
const isSelected = computed(() => {
  if (!buttonGroup || props.value === null || props.value === undefined) {
    return false;
  }
  return buttonGroup.isSelected(props.value);
});

const BASE_CLASSES = "btn group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";

/**
 * Определяет тег компонента (button, router-link или a)
 */
const componentTag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

/**
 * Классы размера
 */
const sizeClass = computed(() => {
  if (buttonGroup && !props.iconOnly) {
    // В группе используем только padding и размер текста, высоту контролирует группа
    const fullSizeClass = useSize(effectiveSize.value, 'button');
    // Извлекаем только padding и text размер, убираем height
    return fullSizeClass.replace(/\bh-\d+\b/g, '').trim();
  }
  return useSize(effectiveSize.value, props.iconOnly ? 'buttonIcon' : 'button');
});

/**
 * Классы border-radius для кнопки в группе
 */
const getBorderRadiusClasses = () => {
  if (!buttonGroup) {
    return 'rounded-xl';
  }
  
  if (buttonPosition.value.isFirst) {
    return 'rounded-l-xl rounded-r-none';
  } else if (buttonPosition.value.isLast) {
    return 'rounded-l-none rounded-r-xl';
  } else {
    return 'rounded-none';
  }
};

/**
 * Обработчик клика
 */
const handleClick = (event) => {
  // Если кнопка в группе и имеет value, обрабатываем через группу
  if (buttonGroup && props.value !== null && props.value !== undefined) {
    event.preventDefault();
    event.stopPropagation();
    buttonGroup.handleSelect(props.value);
    return;
  }
  
  // Если это router-link или обычная ссылка, не предотвращаем стандартное поведение
  if (props.to || props.href) {
    return;
  }
  
  // Для обычной кнопки стандартное поведение
};

/**
 * Все классы для кнопки
 */
const allClasses = computed(() => {
  const baseClasses = buttonGroup 
    ? BASE_CLASSES.replace('rounded-xl', getBorderRadiusClasses())
    : BASE_CLASSES;
  
  // В группе: выбранная кнопка - темная, невыбранная - светлая
  // Вне группы: используем стандартные варианты
  let variantClasses;
  if (buttonGroup) {
    if (isSelected.value) {
      variantClasses = 'bg-slate-900 text-white hover:bg-slate-800';
    } else {
      variantClasses = 'bg-white text-slate-700 hover:bg-slate-50';
    }
  } else {
    variantClasses = useVariantButton(props.variant);
  }
  
  // Классы для разделителей в группе
  const dividerClasses = computed(() => {
    if (!buttonGroup) return {};
    // divide-x добавляет border-left ко всем элементам кроме первого
    // Но для надежности добавляем явно
    return {
      'border-l border-slate-200': !buttonPosition.value.isFirst,
    };
  });

  return useClassComposition(
    baseClasses,
    variantClasses,
    sizeClass.value,
    {
      'w-full': props.block,
      'px-0 py-0': props.iconOnly,
      // В группе не применяем border-0, чтобы divide-x мог добавить разделители
      // Варианты кнопок в группе уже не содержат границ (переопределены выше)
      // В группе высота контролируется группой
      'h-full': buttonGroup && !props.iconOnly,
      // В группе используем flex-1 для равномерного распределения
      'flex-1': buttonGroup && !props.iconOnly,
      // Явно добавляем разделители
      ...dividerClasses.value,
    }
  );
});
</script>

