<template>
  <div
    :class="generatorClasses"
    data-component="DXReportGenerator"
  >
    <!-- Header -->
    <div v-if="showHeader || $slots.header" :class="headerClasses">
      <slot name="header">
        <h2 class="text-2xl font-bold text-slate-900">Генератор отчетов</h2>
      </slot>
    </div>

    <!-- Filters -->
    <div v-if="$slots.filters || showFilters" :class="filtersClasses">
      <slot name="filters" :filters="reportFilters" :update-filter="updateFilter">
        <DXDataFilter
          v-if="showFilters"
          v-model:filters="reportFilters"
          :filter-definitions="filterDefinitions"
          @apply="handleFiltersApply"
        />
      </slot>
    </div>

    <!-- Settings -->
    <div v-if="$slots.settings || showSettings" :class="settingsClasses">
      <slot name="settings" :settings="reportSettings" :update-setting="updateSetting">
        <DXCard v-if="showSettings" class="p-4">
          <h3 class="font-semibold mb-4">Настройки отчета</h3>
          <div class="space-y-4">
            <DXFormControl label="Формат экспорта">
              <DXSelect
                v-model="reportSettings.format"
                :options="exportFormats"
              />
            </DXFormControl>
            <DXFormControl label="Период">
              <DXDatePicker
                v-model="reportSettings.dateRange"
                range
              />
            </DXFormControl>
          </div>
        </DXCard>
      </slot>
    </div>

    <!-- Preview -->
    <div v-if="$slots.preview || showPreview" :class="previewClasses">
      <slot name="preview" :data="previewData" :columns="columns">
        <DXCard v-if="showPreview" class="p-4">
          <h3 class="font-semibold mb-4">Предпросмотр</h3>
          <DXTable
            :columns="columns"
            :data="previewData"
            :paginated="false"
            :size="'sm'"
          />
        </DXCard>
      </slot>
    </div>

    <!-- Actions -->
    <div v-if="$slots.actions || showActions" :class="actionsClasses">
      <slot name="actions" :generate="handleGenerate" :export="handleExport">
        <DXButton
          v-if="showActions"
          variant="ghost"
          :loading="generating"
          @click="handleGenerate"
        >
          Сгенерировать
        </DXButton>
        <DXButton
          v-if="showActions"
          variant="primary"
          :loading="exporting"
          :disabled="!canExport"
          @click="handleExport"
        >
          Экспортировать
        </DXButton>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXCard from "../../atoms/DXCard/DXCard.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXTable from "../DXTable/DXTable.vue";
import DXDataFilter from "../../molecules/DXDataFilter/DXDataFilter.vue";
import DXSelect from "../../molecules/DXSelect/DXSelect.vue";
import DXDatePicker from "../../molecules/DXDatePicker/DXDatePicker.vue";
import DXFormControl from "../../molecules/DXFormControl/DXFormControl.vue";

const props = defineProps({
  /**
   * Данные для отчета
   */
  data: {
    type: Array,
    default: () => [],
  },
  /**
   * Колонки отчета
   * Формат: [{ key, label, format? }]
   */
  columns: {
    type: Array,
    required: true,
  },
  /**
   * Форматы экспорта
   * Формат: [{ value, label }]
   * @default [{ value: 'pdf', label: 'PDF' }, { value: 'excel', label: 'Excel' }, { value: 'csv', label: 'CSV' }]
   */
  exportFormats: {
    type: Array,
    default: () => [
      { value: "pdf", label: "PDF" },
      { value: "excel", label: "Excel" },
      { value: "csv", label: "CSV" },
    ],
  },
  /**
   * Определения фильтров
   * Формат: [{ id, label, type, options? }]
   */
  filterDefinitions: {
    type: Array,
    default: () => [],
  },
  /**
   * Показывать header
   * @default true
   */
  showHeader: { type: Boolean, default: true },
  /**
   * Показывать фильтры
   * @default true
   */
  showFilters: { type: Boolean, default: true },
  /**
   * Показывать настройки
   * @default true
   */
  showSettings: { type: Boolean, default: true },
  /**
   * Показывать предпросмотр
   * @default true
   */
  showPreview: { type: Boolean, default: true },
  /**
   * Показывать действия
   * @default true
   */
  showActions: { type: Boolean, default: true },
  /**
   * Состояние генерации
   * @default false
   */
  generating: { type: Boolean, default: false },
  /**
   * Состояние экспорта
   * @default false
   */
  exporting: { type: Boolean, default: false },
});

const emit = defineEmits(["generate", "export", "filter-change", "setting-change"]);

const reportFilters = ref([]);
const reportSettings = ref({
  format: "pdf",
  dateRange: null,
});
const previewData = ref([...props.data]);

/**
 * Можно ли экспортировать
 * 
 * @description
 * Проверяет, можно ли экспортировать отчет (есть данные).
 * 
 * @returns {boolean} true, если можно экспортировать
 */
const canExport = computed(() => {
  return previewData.value.length > 0;
});

/**
 * Классы для генератора
 * 
 * @description
 * Базовые классы для генератора отчетов.
 * 
 * @returns {Array} Массив классов
 */
const generatorClasses = computed(() =>
  useClassComposition("w-full space-y-6", useSpacing("md", "padding"))
);

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-6")
);

/**
 * Классы для фильтров
 * 
 * @description
 * Классы для секции фильтров.
 * 
 * @returns {Array} Массив классов
 */
const filtersClasses = computed(() =>
  useClassComposition("")
);

/**
 * Классы для настроек
 * 
 * @description
 * Классы для секции настроек.
 * 
 * @returns {Array} Массив классов
 */
const settingsClasses = computed(() =>
  useClassComposition("")
);

/**
 * Классы для предпросмотра
 * 
 * @description
 * Классы для секции предпросмотра.
 * 
 * @returns {Array} Массив классов
 */
const previewClasses = computed(() =>
  useClassComposition("")
);

/**
 * Классы для действий
 * 
 * @description
 * Классы для секции действий.
 * 
 * @returns {Array} Массив классов
 */
const actionsClasses = computed(() =>
  useClassComposition("flex justify-end gap-2")
);

/**
 * Обновление фильтра
 * 
 * @description
 * Обновляет значение фильтра.
 * 
 * @param {string} filterId - ID фильтра
 * @param {any} value - Новое значение
 */
function updateFilter(filterId, value) {
  const filter = reportFilters.value.find((f) => f.id === filterId);
  if (filter) {
    filter.value = value;
  } else {
    reportFilters.value.push({ id: filterId, value });
  }
  emit("filter-change", { filterId, value });
}

/**
 * Обновление настройки
 * 
 * @description
 * Обновляет значение настройки.
 * 
 * @param {string} settingKey - Ключ настройки
 * @param {any} value - Новое значение
 */
function updateSetting(settingKey, value) {
  reportSettings.value[settingKey] = value;
  emit("setting-change", { settingKey, value });
}

/**
 * Обработчик применения фильтров
 * 
 * @description
 * Обрабатывает применение фильтров и обновляет предпросмотр.
 * 
 * @param {Object} data - Данные фильтров
 */
function handleFiltersApply(data) {
  // В реальной реализации здесь будет фильтрация данных
  previewData.value = [...props.data];
  emit("filter-change", data);
}

/**
 * Обработчик генерации
 * 
 * @description
 * Эмитит событие генерации отчета.
 */
function handleGenerate() {
  emit("generate", {
    filters: reportFilters.value,
    settings: reportSettings.value,
    data: previewData.value,
  });
}

/**
 * Обработчик экспорта
 * 
 * @description
 * Эмитит событие экспорта отчета.
 */
function handleExport() {
  emit("export", {
    format: reportSettings.value.format,
    filters: reportFilters.value,
    settings: reportSettings.value,
    data: previewData.value,
    columns: props.columns,
  });
}
</script>

