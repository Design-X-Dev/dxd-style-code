<template>
  <DXCard
    :class="containerClasses"
    :variant="cardVariant"
    :padding="padding"
    data-component="DXChartContainer"
    :data-type="type"
  >
    <!-- Заголовок -->
    <div v-if="title || $slots.header" :class="headerClasses">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-slate-900">
          {{ title }}
        </h3>
      </slot>
    </div>

    <!-- Контролы -->
    <div v-if="controls || $slots.controls" :class="controlsClasses">
      <slot name="controls">
        <div class="flex items-center gap-2">
          <DXSelect
            v-if="chartTypes && chartTypes.length > 0"
            v-model="internalChartType"
            :options="chartTypes"
            size="sm"
            @update:model-value="handleChartTypeChange"
          />
        </div>
      </slot>
    </div>

    <!-- График -->
    <div :class="chartClasses" :style="chartStyles">
      <slot name="chart">
        <div class="flex items-center justify-center h-full text-slate-400">
          <p class="text-sm">Используйте slot "chart" для вашей библиотеки графиков</p>
        </div>
      </slot>
    </div>

    <!-- Легенда -->
    <div v-if="legend && (legendData || $slots.legend)" :class="legendClasses">
      <slot name="legend">
        <div class="flex flex-wrap items-center gap-4">
          <div
            v-for="(item, index) in legendData"
            :key="index"
            :class="legendItemClasses"
            @click="toggleLegendItem(index)"
          >
            <div
              :class="[
                'w-3 h-3 rounded-full',
                item.color || 'bg-slate-400',
                { 'opacity-50': !item.visible },
              ]"
            ></div>
            <span
              :class="[
                'text-sm text-slate-700',
                { 'line-through opacity-50': !item.visible },
              ]"
            >
              {{ item.label }}
            </span>
          </div>
        </div>
      </slot>
    </div>
  </DXCard>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXCard from "../../atoms/DXCard/DXCard.vue";
import DXSelect from "../../molecules/DXSelect/DXSelect.vue";

const props = defineProps({
  /**
   * Тип графика (для информации, не влияет на рендеринг)
   */
  type: { type: String, default: "line" },
  /**
   * Данные графика (передаются в slot для использования библиотекой)
   */
  data: { type: Object, default: () => ({}) },
  /**
   * Опции графика (передаются в slot для использования библиотекой)
   */
  options: { type: Object, default: () => ({}) },
  /**
   * Заголовок графика
   */
  title: { type: String, default: "" },
  /**
   * Показывать легенду
   * @default true
   */
  legend: { type: Boolean, default: true },
  /**
   * Данные легенды
   * Формат: [{ label, color, visible }]
   */
  legendData: {
    type: Array,
    default: () => [],
  },
  /**
   * Показывать контролы
   * @default false
   */
  controls: { type: Boolean, default: false },
  /**
   * Типы графиков для селекта
   * Формат: [{ value, label }]
   */
  chartTypes: {
    type: Array,
    default: () => [],
  },
  /**
   * Высота графика
   */
  height: { type: String, default: "400px" },
  /**
   * Вариант DXCard
   * @default 'default'
   */
  cardVariant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "bordered", "elevated", "flat"].includes(v),
  },
  /**
   * Padding для DXCard
   * @default 'md'
   */
  padding: {
    type: String,
    default: "md",
    validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
  },
});

const emit = defineEmits(["export", "legend-toggle", "chart-type-change"]);

const internalChartType = ref(props.type);

/**
 * Классы для контейнера
 * 
 * @description
 * Базовые классы для контейнера графика.
 * 
 * @returns {Array} Массив классов
 */
const containerClasses = computed(() => useClassComposition("w-full"));

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-4")
);

/**
 * Классы для контролов
 * 
 * @description
 * Классы для секции контролов.
 * 
 * @returns {Array} Массив классов
 */
const controlsClasses = computed(() =>
  useClassComposition("mb-4 flex items-center justify-end gap-2")
);

/**
 * Классы для области графика
 * 
 * @description
 * Классы для области отображения графика.
 * 
 * @returns {Array} Массив классов
 */
const chartClasses = computed(() =>
  useClassComposition("w-full relative")
);

/**
 * Стили для области графика
 * 
 * @description
 * Инлайн стили для высоты графика.
 * 
 * @returns {Object} Объект стилей
 */
const chartStyles = computed(() => ({
  height: props.height,
  minHeight: props.height,
}));

/**
 * Классы для легенды
 * 
 * @description
 * Классы для секции легенды.
 * 
 * @returns {Array} Массив классов
 */
const legendClasses = computed(() =>
  useClassComposition("mt-4 pt-4 border-t border-slate-200")
);

/**
 * Классы для элемента легенды
 * 
 * @description
 * Классы для каждого элемента легенды.
 * 
 * @returns {Array} Массив классов
 */
const legendItemClasses = computed(() =>
  useClassComposition(
    "flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
  )
);

/**
 * Переключение видимости элемента легенды
 * 
 * @description
 * Переключает видимость элемента легенды и эмитит событие.
 * 
 * @param {number} index - Индекс элемента легенды
 */
function toggleLegendItem(index) {
  if (props.legendData && props.legendData[index]) {
    const item = props.legendData[index];
    item.visible = !item.visible;
    emit("legend-toggle", { index, item, visible: item.visible });
  }
}

/**
 * Обработчик изменения типа графика
 * 
 * @description
 * Обрабатывает изменение типа графика через селект.
 * 
 * @param {string} newType - Новый тип графика
 */
function handleChartTypeChange(newType) {
  emit("chart-type-change", newType);
}

// Синхронизация с prop type
watch(
  () => props.type,
  (newType) => {
    internalChartType.value = newType;
  }
);
</script>

