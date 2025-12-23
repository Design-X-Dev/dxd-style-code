<template>
  <DXCard
    :class="cardClasses"
    :padding="padding"
    :variant="cardVariant"
    data-component="DXStatCard"
    :data-size="size"
    :data-color="color"
    :data-clickable="clickable"
    @click="handleClick"
  >
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <!-- Заголовок -->
        <div v-if="title" class="text-sm font-medium text-slate-600 mb-1">
          {{ title }}
        </div>

        <!-- Значение -->
        <div class="flex items-baseline gap-2">
          <span :class="valueClasses">
            {{ formattedValue }}
          </span>
          <!-- Тренд -->
          <div
            v-if="trend"
            :class="trendClasses"
            class="flex items-center gap-0.5 text-xs font-medium"
          >
            <DXIcon
              :icon="trend.direction === 'up' ? ArrowUpIcon : ArrowDownIcon"
              size="xs"
            />
            <span>{{ Math.abs(trend.value) }}%</span>
          </div>
        </div>

        <!-- Описание -->
        <div v-if="description" class="text-xs text-slate-500 mt-1">
          {{ description }}
        </div>

        <!-- Сравнение -->
        <div v-if="comparison" class="text-xs text-slate-500 mt-1">
          {{ comparison }}
        </div>
      </div>

      <!-- Иконка -->
      <div v-if="icon" :class="iconWrapperClasses">
        <DXIcon :icon="icon" :size="iconSize" :animation="iconAnimation" />
      </div>
    </div>
  </DXCard>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useSpacing } from "../../../composables/useSpacing";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useVariantButton } from "../../../composables/useVariant";
import DXCard from "../../atoms/DXCard/DXCard.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Заголовок карточки
   */
  title: { type: String, default: "" },
  /**
   * Значение для отображения
   */
  value: { type: [Number, String], required: true },
  /**
   * Формат значения: number | currency | percentage
   * @default 'number'
   */
  valueFormat: {
    type: String,
    default: "number",
    validator: (v) => ["number", "currency", "percentage"].includes(v),
  },
  /**
   * Валюта для currency формата
   * @default 'USD'
   */
  currency: { type: String, default: "USD" },
  /**
   * Тренд: { value: number, direction: 'up' | 'down' }
   */
  trend: {
    type: Object,
    default: null,
    validator: (v) => {
      if (!v) return true;
      return (
        typeof v.value === "number" &&
        (v.direction === "up" || v.direction === "down")
      );
    },
  },
  /**
   * Текст сравнения (например, "vs прошлый месяц")
   */
  comparison: { type: String, default: "" },
  /**
   * Описание
   */
  description: { type: String, default: "" },
  /**
   * Иконка (Heroicon компонент)
   */
  icon: { type: [Object, Function], default: null },
  /**
   * Цветовая схема: primary | secondary | success | warning | danger
   * @default 'primary'
   */
  color: {
    type: String,
    default: "primary",
    validator: (v) =>
      ["primary", "secondary", "success", "warning", "danger"].includes(v),
  },
  /**
   * Размер: sm | md | lg
   * @default 'md'
   */
  size: { type: String, default: "md", validator: (v) => ["sm", "md", "lg"].includes(v) },
  /**
   * Кликабельная карточка
   * @default false
   */
  clickable: { type: Boolean, default: false },
  /**
   * Padding карточки: none | xs | sm | md | lg | xl
   * @default 'md'
   */
  padding: {
    type: String,
    default: "md",
    validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
  },
  /**
   * Вариант карточки: default | bordered | elevated | flat
   * @default 'default'
   */
  cardVariant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "bordered", "elevated", "flat"].includes(v),
  },
  /**
   * Анимация иконки: none | wiggle | scale | rotate
   * @default 'none'
   */
  iconAnimation: {
    type: String,
    default: "none",
    validator: (v) => ["none", "wiggle", "scale", "rotate"].includes(v),
  },
});

const emit = defineEmits(["click"]);

/**
 * Отформатированное значение
 * 
 * @description
 * Форматирует значение в зависимости от valueFormat:
 * - number: обычное число с разделителями тысяч
 * - currency: валюта с символом
 * - percentage: процент с символом %
 * 
 * @returns {string} Отформатированное значение
 */
const formattedValue = computed(() => {
  const numValue = typeof props.value === "string" ? parseFloat(props.value) : props.value;

  if (props.valueFormat === "currency") {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: props.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(numValue);
  }

  if (props.valueFormat === "percentage") {
    return `${numValue.toFixed(1)}%`;
  }

  // number format
  return new Intl.NumberFormat("ru-RU").format(numValue);
});

/**
 * Классы для значения
 * 
 * @description
 * Вычисляет классы для отображения значения на основе размера.
 * 
 * @returns {Array} Массив классов
 */
const valueClasses = computed(() => {
  const sizeMap = {
    sm: "text-2xl font-bold text-slate-900",
    md: "text-3xl font-bold text-slate-900",
    lg: "text-4xl font-bold text-slate-900",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для тренда
 * 
 * @description
 * Вычисляет классы для отображения тренда на основе направления.
 * 
 * @returns {Array} Массив классов
 */
const trendClasses = computed(() => {
  if (!props.trend) return [];
  
  const directionClasses = {
    up: "text-green-600",
    down: "text-rose-600",
  };
  
  return directionClasses[props.trend.direction] || "";
});

/**
 * Классы для обертки иконки
 * 
 * @description
 * Вычисляет классы для обертки иконки на основе цвета и размера.
 * 
 * @returns {Array} Массив классов
 */
const iconWrapperClasses = computed(() => {
  const colorMap = {
    primary: "text-blue-600 bg-blue-50",
    secondary: "text-slate-600 bg-slate-50",
    success: "text-green-600 bg-green-50",
    warning: "text-amber-600 bg-amber-50",
    danger: "text-rose-600 bg-rose-50",
  };
  
  const sizeMap = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };
  
  return useClassComposition(
    "flex items-center justify-center rounded-lg flex-shrink-0",
    colorMap[props.color] || colorMap.primary,
    sizeMap[props.size] || sizeMap.md
  );
});

/**
 * Размер иконки
 * 
 * @description
 * Вычисляет размер иконки на основе размера карточки.
 * 
 * @returns {string} Размер иконки
 */
const iconSize = computed(() => {
  const sizeMap = {
    sm: "md",
    md: "lg",
    lg: "xl",
  };
  return sizeMap[props.size] || "lg";
});

/**
 * Классы для карточки
 * 
 * @description
 * Вычисляет классы для карточки, включая hover эффект для кликабельных карточек.
 * 
 * @returns {Array} Массив классов
 */
const cardClasses = computed(() =>
  useClassComposition(
    props.clickable && "cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
  )
);

/**
 * Обработчик клика
 * 
 * @description
 * Эмитит событие click при клике на карточку (если clickable={true}).
 * 
 * @param {MouseEvent} event - Событие клика
 */
function handleClick(event) {
  if (props.clickable) {
    emit("click", event);
  }
}
</script>

