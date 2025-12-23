<template>
  <div 
    :class="avatarClasses" 
    data-component="DXAvatar" 
    :data-size="size"
    :data-shape="shape"
  >
    <img
      v-if="src && !imgError"
      :src="src"
      :alt="alt"
      :class="imgClasses"
      @error="imgError = true"
    />
    <span v-else-if="initials" :class="initialsClasses">
      {{ initials }}
    </span>
    <DXIcon 
      v-else 
      :icon="fallbackIcon" 
      :size="iconSize" 
      :animation="iconAnimation" 
      :group-hover="iconAnimation !== 'none'"
      :class="iconClasses"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { UserIcon } from "@heroicons/vue/24/solid";
import { useSize } from "@/composables/useSize";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** URL изображения */
  src: { type: String, default: "" },
  /** Alt текст */
  alt: { type: String, default: "Avatar" },
  /** Инициалы (если нет изображения) */
  initials: { type: String, default: "" },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Форма: circle | square */
  shape: { type: String, default: "circle" },
  /** Кастомная иконка для fallback (по умолчанию UserIcon) */
  icon: { type: [Object, Function], default: null },
  /** Анимация иконки при hover: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "wiggle" },
});

/**
 * Флаг ошибки загрузки изображения
 * 
 * @description
 * Отслеживает ошибки загрузки изображения через @error событие.
 * При ошибке компонент автоматически переключается на fallback (инициалы или иконку).
 */
const imgError = ref(false);

/**
 * Сбрасывает ошибку при изменении src
 * 
 * @description
 * При изменении URL изображения сбрасывает флаг ошибки,
 * чтобы новое изображение могло загрузиться. Это позволяет
 * динамически менять изображение без необходимости пересоздания компонента.
 */
watch(() => props.src, () => {
  imgError.value = false;
});

const BASE_CLASSES = "relative inline-flex items-center justify-center overflow-hidden bg-slate-100 transition-transform group";

const IMG_CLASSES = "w-full h-full object-cover";

const INITIALS_BASE_CLASSES = "font-medium text-slate-600 uppercase";

const ICON_CLASSES = "text-slate-400";

const SHAPE_CLASSES = {
  circle: "rounded-full",
  square: "rounded-lg",
};

const INITIALS_SIZE_CLASSES = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

/**
 * Классы для контейнера аватара
 * 
 * @description
 * Объединяет базовые классы, размер, форму и анимацию hover.
 * Анимация scale применяется только если iconAnimation !== 'none'.
 * 
 * @returns {Array} Массив классов для :class binding
 */
const avatarClasses = computed(() => [
    BASE_CLASSES,
    useSize(props.size, 'avatar'),
    SHAPE_CLASSES[props.shape] || SHAPE_CLASSES.circle,
    { 'hover:scale-105': props.iconAnimation !== 'none' }
  ]
);

const imgClasses = computed(() => IMG_CLASSES);

/**
 * Классы для инициалов
 * 
 * @description
 * Объединяет базовые классы инициалов (font-medium, uppercase, цвет)
 * с размерными классами на основе размера аватара.
 * 
 * @returns {Array} Массив классов для инициалов
 */
const initialsClasses = computed(() => [
  INITIALS_BASE_CLASSES,
  INITIALS_SIZE_CLASSES[props.size] || INITIALS_SIZE_CLASSES.md,
]);

const iconClasses = computed(() => ICON_CLASSES);

/**
 * Иконка для fallback
 * 
 * @description
 * Определяет какую иконку использовать для fallback:
 * - Если указана кастомная иконка через prop icon → использует её
 * - Если иконка не указана → использует UserIcon по умолчанию
 * 
 * @returns {Object|Function} Компонент иконки (Heroicon)
 */
const fallbackIcon = computed(() => props.icon || UserIcon);

const iconSizeMap = {
  xs: "sm",
  sm: "sm", 
  md: "md",
  lg: "lg",
  xl: "xl",
};

/**
 * Размер иконки на основе размера аватара
 * 
 * @description
 * Вычисляет размер иконки fallback на основе размера аватара.
 * Иконка всегда немного меньше аватара для визуального баланса.
 * 
 * Маппинг размеров:
 * - xs → sm
 * - sm → sm
 * - md → md
 * - lg → lg
 * - xl → xl
 * 
 * @returns {string} Размер иконки: xs | sm | md | lg | xl
 */
const iconSize = computed(() => iconSizeMap[props.size] || "md");
</script>

