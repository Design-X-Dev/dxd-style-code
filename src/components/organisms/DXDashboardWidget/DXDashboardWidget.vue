<template>
  <DXCard
    :class="widgetClasses"
    :variant="cardVariant"
    :padding="padding"
    data-component="DXDashboardWidget"
    :data-type="type"
    :data-editable="editable"
  >
    <!-- Header -->
    <div v-if="title || $slots.header || editable" :class="headerClasses">
      <slot name="header">
        <div class="flex items-center justify-between">
          <h3 v-if="title" class="text-lg font-semibold text-slate-900">
            {{ title }}
          </h3>
          <div v-if="editable" class="flex items-center gap-2">
            <DXButton
              v-if="refreshable"
              variant="ghost"
              size="sm"
              @click="handleRefresh"
            >
              <template #icon>
                <DXIcon :icon="ArrowPathIcon" size="sm" />
              </template>
            </DXButton>
            <DXButton
              variant="ghost"
              size="sm"
              @click="handleEdit"
            >
              <template #icon>
                <DXIcon :icon="Cog6ToothIcon" size="sm" />
              </template>
            </DXButton>
            <DXButton
              v-if="deletable"
              variant="ghost"
              size="sm"
              @click="handleDelete"
            >
              <template #icon>
                <DXIcon :icon="XMarkIcon" size="sm" />
              </template>
            </DXButton>
          </div>
        </div>
      </slot>
    </div>

    <!-- Content -->
    <div :class="contentClasses">
      <slot name="content">
        <!-- Статистика -->
        <DXStatCard
          v-if="type === 'stat'"
          :title="config?.title"
          :value="config?.value"
          :description="config?.description"
          :trend="config?.trend"
          :icon="config?.icon"
          :color="config?.color || 'primary'"
          :size="config?.size || 'md'"
        />

        <!-- График -->
        <DXChartContainer
          v-else-if="type === 'chart'"
          :title="config?.title"
          :type="config?.chartType || 'line'"
          :data="config?.data"
          :options="config?.options"
          :legend="config?.legend !== false"
          :legend-data="config?.legendData"
          :controls="config?.controls"
          :height="config?.height || '300px'"
        >
          <template #chart>
            <slot name="chart" :config="config" />
          </template>
        </DXChartContainer>

        <!-- Таблица -->
        <DXTable
          v-else-if="type === 'table'"
          :columns="config?.columns || []"
          :data="config?.data || []"
          :paginated="config?.paginated !== false"
          :size="config?.size || 'sm'"
        />

        <!-- Текст -->
        <div v-else-if="type === 'text'" :class="textClasses">
          <p v-if="config?.text" class="text-slate-700">
            {{ config.text }}
          </p>
          <slot name="text" :config="config" />
        </div>

        <!-- Кастомный контент -->
        <slot v-else :type="type" :config="config" />
      </slot>
    </div>
  </DXCard>
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSize } from "@/composables/useSize";
import DXCard from "../../atoms/DXCard/DXCard.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXStatCard from "../../molecules/DXStatCard/DXStatCard.vue";
import DXChartContainer from "../DXChartContainer/DXChartContainer.vue";
import DXTable from "../DXTable/DXTable.vue";
import {
  ArrowPathIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * ID виджета
   */
  id: { type: [String, Number], required: true },
  /**
   * Тип виджета: stat | chart | table | text
   * @default 'stat'
   */
  type: {
    type: String,
    default: "stat",
    validator: (v) => ["stat", "chart", "table", "text"].includes(v),
  },
  /**
   * Заголовок виджета
   */
  title: { type: String, default: "" },
  /**
   * Конфигурация виджета (зависит от типа)
   */
  config: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Редактируемый виджет
   * @default false
   */
  editable: { type: Boolean, default: false },
  /**
   * Можно ли удалять виджет
   * @default true
   */
  deletable: { type: Boolean, default: true },
  /**
   * Можно ли обновлять данные
   * @default true
   */
  refreshable: { type: Boolean, default: true },
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

const emit = defineEmits(["edit", "delete", "refresh"]);

/**
 * Классы для виджета
 * 
 * @description
 * Базовые классы для виджета дашборда.
 * 
 * @returns {Array} Массив классов
 */
const widgetClasses = computed(() => useClassComposition("w-full h-full"));

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-4 pb-4 border-b border-slate-200")
);

/**
 * Классы для контента
 * 
 * @description
 * Классы для секции контента.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() => useClassComposition("w-full"));

/**
 * Классы для текстового контента
 * 
 * @description
 * Классы для текстового типа виджета.
 * 
 * @returns {Array} Массив классов
 */
const textClasses = computed(() =>
  useClassComposition("text-slate-700")
);

/**
 * Обработчик редактирования
 * 
 * @description
 * Эмитит событие редактирования виджета.
 */
function handleEdit() {
  emit("edit", props.id);
}

/**
 * Обработчик удаления
 * 
 * @description
 * Эмитит событие удаления виджета.
 */
function handleDelete() {
  emit("delete", props.id);
}

/**
 * Обработчик обновления
 * 
 * @description
 * Эмитит событие обновления данных виджета.
 */
function handleRefresh() {
  emit("refresh", props.id);
}
</script>

