<template>
  <component
    :is="componentTag"
    :href="componentTag === 'a' ? href : undefined"
    :to="componentTag === 'router-link' ? to : undefined"
    :target="target"
    :rel="computedRel"
    :aria-label="computedAriaLabel"
    :class="allClasses"
    :disabled="disabled"
    data-component="DXLink"
    :data-variant="variant"
    :data-size="size"
    :data-disabled="disabled"
    :data-inactive="inactive"
    :data-external="isExternal"
    @click="handleClick"
  >
    <slot />
    <DXIcon
      v-if="showExternalIcon && isExternal && !disabled && !inactive"
      :icon="ArrowTopRightOnSquareIcon"
      :size="iconSize"
      class="ml-0.5"
      aria-hidden="true"
    />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useVariantButton } from "../../../composables/useVariant";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXIcon from "../DXIcon/DXIcon.vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** URL для обычной ссылки */
  href: { type: String, default: null },
  /** Путь для Vue Router */
  to: { type: [String, Object], default: null },
  /** Target атрибут (например, "_blank") */
  target: { type: String, default: null },
  /** Rel атрибут (например, "noopener noreferrer") */
  rel: { type: String, default: null },
  /** Вариант стилизации: primary | secondary | ghost | link */
  variant: { type: String, default: "link" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Неактивное состояние (визуально приглушенная, но кликабельная) */
  inactive: { type: Boolean, default: false },
  /** Кастомный aria-label */
  ariaLabel: { type: String, default: null },
  /** Показывать иконку для внешних ссылок */
  showExternalIcon: { type: Boolean, default: true },
});

const BASE_CLASSES =
  "inline-flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

/**
 * Определяет тег компонента на основе props
 * 
 * @description
 * Динамически выбирает тег компонента:
 * - Если указан `to` prop → использует `router-link` (Vue Router)
 * - Если указан `href` prop → использует обычный `<a>` тег
 * - Если ничего не указано → использует `<span>` (fallback для disabled состояния)
 * 
 * @returns {string} Название компонента для динамического рендеринга
 */
const componentTag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "span"; // Fallback если нет href и to
});

/**
 * Определяет, является ли ссылка внешней
 * 
 * @description
 * Автоматически определяет внешние ссылки по префиксам:
 * - `http://` - внешняя ссылка
 * - `https://` - внешняя ссылка
 * - `//` - protocol-relative внешняя ссылка
 * 
 * Используется для:
 * - Автоматического добавления rel="noopener noreferrer" для безопасности
 * - Показа иконки внешней ссылки
 * 
 * @returns {boolean} true если ссылка внешняя, false если внутренняя или нет href
 */
const isExternal = computed(() => {
  if (!props.href) return false;
  return (
    props.href.startsWith("http://") ||
    props.href.startsWith("https://") ||
    props.href.startsWith("//")
  );
});

/**
 * Вычисляет rel атрибут с учетом безопасности
 * 
 * @description
 * Автоматически добавляет rel="noopener noreferrer" для внешних ссылок с target="_blank"
 * для защиты от tabnabbing атак (когда новая вкладка может получить доступ к window.opener).
 * 
 * Приоритет:
 * 1. Если rel указан явно через prop → использует его
 * 2. Если внешняя ссылка с target="_blank" → автоматически добавляет "noopener noreferrer"
 * 3. Иначе → возвращает null
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header|MDN: Referer header}
 * @returns {string|null} Значение rel атрибута или null
 */
const computedRel = computed(() => {
  // Если rel указан явно, используем его
  if (props.rel) return props.rel;
  
  // Если внешняя ссылка с target="_blank", добавляем noopener noreferrer для безопасности
  // Это защищает от tabnabbing атак
  if (isExternal.value && props.target === "_blank") {
    return "noopener noreferrer";
  }
  
  return null;
});

/**
 * Вычисляет aria-label с учетом внешних ссылок
 * 
 * @description
 * Управляет aria-label для улучшения доступности:
 * - Если ariaLabel указан явно → использует его
 * - Для внешних ссылок можно было бы добавить информацию о том, что ссылка внешняя,
 *   но для простоты возвращаем null, так как screen readers могут использовать
 *   содержимое ссылки и визуальную иконку
 * 
 * @returns {string|null} Значение aria-label или null
 */
const computedAriaLabel = computed(() => {
  // Если aria-label указан явно, используем его
  if (props.ariaLabel) return props.ariaLabel;
  
  // Для внешних ссылок добавляем информацию о том, что ссылка внешняя
  if (isExternal.value && props.showExternalIcon) {
    // Получаем текст из слота для базового aria-label
    // В реальности это будет работать через provide/inject или другой механизм
    // Для простоты возвращаем null, так как screen readers могут использовать содержимое
    return null;
  }
  
  return null;
});

/**
 * Классы размера текста
 */
const textSizeClass = computed(() => {
  return useSize(props.size, "text");
});

/**
 * Классы padding для вариантов (кроме link)
 */
const variantPaddingClass = computed(() => {
  if (props.variant === "link") return "";
  
  // Небольшие отступы в зависимости от размера
  const paddingMap = {
    xs: "px-1 py-0.5",
    sm: "px-1.5 py-0.5",
    md: "px-2 py-0.5",
    lg: "px-2.5 py-1",
    xl: "px-3 py-1",
  };
  return paddingMap[props.size] || paddingMap.md;
});

/**
 * Классы для неактивного состояния
 */
const inactiveVariantClass = computed(() => {
  if (props.variant === "link") {
    return "text-slate-600 no-underline cursor-default";
  }
  
  // Для остальных вариантов - базовые цвета без hover, с меньшей opacity для яркости
  const baseColors = {
    primary: "bg-slate-800 text-white",
    secondary: "bg-slate-200 text-slate-700",
    ghost: "text-slate-600 bg-transparent",
    outline: "border border-slate-200 text-slate-600 bg-white",
    success: "bg-emerald-600 text-white",
    warning: "bg-amber-600 text-white",
    danger: "bg-rose-600 text-white",
    info: "bg-blue-600 text-white",
    soft: "bg-slate-50 text-slate-600",
  };
  
  return useClassComposition(
    baseColors[props.variant] || baseColors.primary,
    variantPaddingClass.value,
    "rounded-lg opacity-75"
  );
});

/**
 * Классы варианта стилизации
 */
const variantClass = computed(() => {
  if (props.inactive) {
    return inactiveVariantClass.value;
  }
  
  if (props.variant === "link") {
    // Кастомные классы для варианта link
    return "text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline";
  }
  // Для остальных вариантов используем useVariantButton + padding + border-radius
  return useClassComposition(
    useVariantButton(props.variant),
    variantPaddingClass.value,
    "rounded-lg"
  );
});

/**
 * Размер иконки внешней ссылки
 * 
 * @description
 * Вычисляет размер иконки внешней ссылки на основе размера текста.
 * Иконка всегда немного меньше текста для визуального баланса.
 * 
 * @returns {string} Размер иконки: xs | sm | md
 */
const iconSize = computed(() => {
  // Иконка немного меньше текста для визуального баланса
  const sizeMap = {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "sm",
    xl: "md",
  };
  return sizeMap[props.size] || "sm";
});

/**
 * Все классы для ссылки
 */
const allClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    variantClass.value,
    textSizeClass.value,
    {
      "opacity-60 cursor-not-allowed pointer-events-none": props.disabled,
      "cursor-pointer": !props.disabled,
    }
  )
);

/**
 * Обработчик клика для disabled состояния
 * 
 * @description
 * Блокирует клик для отключенных ссылок:
 * - preventDefault() - предотвращает переход по ссылке
 * - stopPropagation() - останавливает всплытие события
 * 
 * @param {Event} event - Событие клика
 */
const handleClick = (event) => {
  if (props.disabled) {
    event.preventDefault();
    event.stopPropagation();
  }
};
</script>

