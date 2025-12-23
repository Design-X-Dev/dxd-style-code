<template>
  <DXTable
    :class="tableClasses"
    :columns="columns"
    :data="displayData"
    :loading="loading"
    :paginated="paginated"
    :selectable="selectable"
    :sortable="sortable"
    :filterable="filterable"
    :size="size"
    :sticky-header="stickyHeader"
    :striped="striped"
    :bordered="bordered"
    :hoverable="hoverable"
    :dense="dense"
    data-component="DXDataTable"
    :data-editable="editable"
    :data-edit-mode="editMode"
    @row-click="handleRowClick"
  >
    <!-- Переопределение ячеек для редактирования -->
    <template
      v-for="column in editableColumns"
      :key="column.key"
      #[`cell-${column.key}`]="{ row, value, column: col }"
    >
      <div v-if="isEditing(row, column.key)" class="dx-data-table-editor">
        <!-- Текстовый редактор -->
        <DXInput
          v-if="!column.editor || column.editor === 'input'"
          v-model="editingData[row.id][column.key]"
          :type="column.type || 'text'"
          :size="size"
          @blur="handleCellBlur(row, column.key)"
          @keydown.enter="handleCellBlur(row, column.key)"
          @keydown.escape="handleCellCancel(row, column.key)"
        />

        <!-- Select редактор -->
        <DXSelect
          v-else-if="column.editor === 'select'"
          v-model="editingData[row.id][column.key]"
          :options="column.options || []"
          :size="size"
          @update:model-value="handleCellChange(row, column.key)"
        />

        <!-- Date редактор -->
        <DXDatePicker
          v-else-if="column.editor === 'date'"
          v-model="editingData[row.id][column.key]"
          :size="size"
          @update:model-value="handleCellChange(row, column.key)"
        />

        <!-- Кастомный редактор через slot -->
        <slot
          v-else
          :name="`editor-${column.editor}`"
          :row="row"
          :column="column"
          :value="editingData[row.id][column.key]"
          :update-value="(val) => updateEditingValue(row.id, column.key, val)"
        >
          <span class="text-sm text-slate-500">
            Используйте slot editor-{{ column.editor }}
          </span>
        </slot>
      </div>
      <span v-else>{{ formatCellValue(value, column) }}</span>
    </template>

    <!-- Действия для редактирования строки -->
    <template #cell-actions="{ row }">
      <div v-if="editMode === 'row' && isRowEditing(row.id)" class="flex gap-2">
        <DXButton size="sm" variant="primary" @click="handleRowSave(row)">
          Сохранить
        </DXButton>
        <DXButton size="sm" variant="ghost" @click="handleRowCancel(row)">
          Отмена
        </DXButton>
      </div>
      <div v-else-if="editMode === 'row' && editable" class="flex gap-2">
        <DXButton size="sm" variant="ghost" @click="handleRowEdit(row)">
          Редактировать
        </DXButton>
        <slot name="row-actions" :row="row" />
      </div>
      <slot v-else name="row-actions" :row="row" />
    </template>

    <!-- Передача остальных слотов -->
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </DXTable>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXTable from "../DXTable/DXTable.vue";
import DXInput from "../../molecules/DXInput/DXInput.vue";
import DXSelect from "../../molecules/DXSelect/DXSelect.vue";
import DXDatePicker from "../../molecules/DXDatePicker/DXDatePicker.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";

const props = defineProps({
  /**
   * Колонки таблицы
   * Формат: [{ key, label, editable?, editor?, type?, options? }]
   */
  columns: {
    type: Array,
    required: true,
  },
  /**
   * Данные таблицы
   */
  data: {
    type: Array,
    required: true,
  },
  /**
   * Редактируемая таблица
   * @default false
   */
  editable: { type: Boolean, default: false },
  /**
   * Режим редактирования: cell | row
   * @default 'cell'
   */
  editMode: {
    type: String,
    default: "cell",
    validator: (v) => ["cell", "row"].includes(v),
  },
  /**
   * Валидация при редактировании
   * Формат: { [columnKey]: (value) => boolean | string }
   */
  validation: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Загрузка данных
   * @default false
   */
  loading: { type: Boolean, default: false },
  /**
   * Пагинация
   * @default true
   */
  paginated: { type: Boolean, default: true },
  /**
   * Выбор строк
   * @default false
   */
  selectable: { type: Boolean, default: false },
  /**
   * Сортировка
   * @default true
   */
  sortable: { type: Boolean, default: true },
  /**
   * Фильтрация
   * @default false
   */
  filterable: { type: Boolean, default: false },
  /**
   * Размер таблицы
   * @default 'md'
   */
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  /**
   * Липкий заголовок
   * @default false
   */
  stickyHeader: { type: Boolean, default: false },
  /**
   * Чередующиеся строки
   * @default false
   */
  striped: { type: Boolean, default: false },
  /**
   * Границы
   * @default true
   */
  bordered: { type: Boolean, default: true },
  /**
   * Подсветка при наведении
   * @default true
   */
  hoverable: { type: Boolean, default: true },
  /**
   * Плотный режим
   * @default false
   */
  dense: { type: Boolean, default: false },
});

const emit = defineEmits([
  "cell-edit",
  "row-edit",
  "row-save",
  "row-cancel",
  "row-click",
  "update:data",
]);

const editingData = ref({});
const editingRows = ref(new Set());
const editingCells = ref({});

/**
 * Колонки, доступные для редактирования
 * 
 * @description
 * Фильтрует колонки, которые можно редактировать.
 * 
 * @returns {Array} Массив редактируемых колонок
 */
const editableColumns = computed(() => {
  return props.columns.filter((col) => col.editable !== false);
});

/**
 * Отображаемые данные
 * 
 * @description
 * Возвращает данные с учетом редактирования.
 * 
 * @returns {Array} Массив данных
 */
const displayData = computed(() => {
  if (!props.editable) return props.data;

  return props.data.map((row) => {
    if (editingData.value[row.id]) {
      return { ...row, ...editingData.value[row.id] };
    }
    return row;
  });
});

/**
 * Классы для таблицы
 * 
 * @description
 * Базовые классы для таблицы данных.
 * 
 * @returns {Array} Массив классов
 */
const tableClasses = computed(() => useClassComposition("w-full"));

/**
 * Проверка, редактируется ли строка
 * 
 * @description
 * Проверяет, находится ли строка в режиме редактирования.
 * 
 * @param {number|string} rowId - ID строки
 * @returns {boolean} true, если строка редактируется
 */
function isRowEditing(rowId) {
  return editingRows.value.has(rowId);
}

/**
 * Проверка, редактируется ли ячейка
 * 
 * @description
 * Проверяет, находится ли ячейка в режиме редактирования.
 * 
 * @param {Object} row - Объект строки
 * @param {string} columnKey - Ключ колонки
 * @returns {boolean} true, если ячейка редактируется
 */
function isEditing(row, columnKey) {
  if (props.editMode === "row") {
    return isRowEditing(row.id);
  }
  return editingCells.value[`${row.id}-${columnKey}`] === true;
}

/**
 * Форматирование значения ячейки
 * 
 * @description
 * Форматирует значение ячейки для отображения.
 * 
 * @param {any} value - Значение
 * @param {Object} column - Колонка
 * @returns {string} Отформатированное значение
 */
function formatCellValue(value, column) {
  if (value === null || value === undefined) return "";
  if (column.format) {
    return column.format(value);
  }
  return String(value);
}

/**
 * Обновление значения редактирования
 * 
 * @description
 * Обновляет значение в объекте редактирования.
 * 
 * @param {number|string} rowId - ID строки
 * @param {string} columnKey - Ключ колонки
 * @param {any} value - Новое значение
 */
function updateEditingValue(rowId, columnKey, value) {
  if (!editingData.value[rowId]) {
    editingData.value[rowId] = {};
  }
  editingData.value[rowId][columnKey] = value;
}

/**
 * Обработчик изменения ячейки
 * 
 * @description
 * Обрабатывает изменение значения ячейки.
 * 
 * @param {Object} row - Объект строки
 * @param {string} columnKey - Ключ колонки
 */
function handleCellChange(row, columnKey) {
  const value = editingData.value[row.id]?.[columnKey];
  emit("cell-edit", { row, column: columnKey, value });
}

/**
 * Обработчик blur ячейки
 * 
 * @description
 * Сохраняет изменения ячейки при потере фокуса.
 * 
 * @param {Object} row - Объект строки
 * @param {string} columnKey - Ключ колонки
 */
function handleCellBlur(row, columnKey) {
  if (props.editMode === "cell") {
    const value = editingData.value[row.id]?.[columnKey];
    const originalValue = row[columnKey];

    if (value !== originalValue) {
      // Валидация
      const column = props.columns.find((col) => col.key === columnKey);
      if (column && props.validation[columnKey]) {
        const validationResult = props.validation[columnKey](value);
        if (validationResult !== true) {
          console.warn("Валидация не пройдена:", validationResult);
          return;
        }
      }

      emit("cell-edit", { row, column: columnKey, value, originalValue });
      emit("update:data", displayData.value);
    }

    delete editingCells.value[`${row.id}-${columnKey}`];
    if (editingData.value[row.id]) {
      delete editingData.value[row.id][columnKey];
      if (Object.keys(editingData.value[row.id]).length === 0) {
        delete editingData.value[row.id];
      }
    }
  }
}

/**
 * Обработчик отмены редактирования ячейки
 * 
 * @description
 * Отменяет изменения ячейки.
 * 
 * @param {Object} row - Объект строки
 * @param {string} columnKey - Ключ колонки
 */
function handleCellCancel(row, columnKey) {
  if (editingData.value[row.id]) {
    delete editingData.value[row.id][columnKey];
    if (Object.keys(editingData.value[row.id]).length === 0) {
      delete editingData.value[row.id];
    }
  }
  delete editingCells.value[`${row.id}-${columnKey}`];
}

/**
 * Обработчик клика по строке
 * 
 * @description
 * Обрабатывает клик по строке для начала редактирования (в режиме cell).
 * 
 * @param {Object} row - Объект строки
 */
function handleRowClick(row) {
  if (props.editable && props.editMode === "cell") {
    // Начинаем редактирование ячейки при клике
    // В реальной реализации можно добавить логику выбора ячейки
  }
  emit("row-click", row);
}

/**
 * Обработчик начала редактирования строки
 * 
 * @description
 * Начинает редактирование строки (в режиме row).
 * 
 * @param {Object} row - Объект строки
 */
function handleRowEdit(row) {
  editingRows.value.add(row.id);
  editingData.value[row.id] = { ...row };
  emit("row-edit", row);
}

/**
 * Обработчик сохранения строки
 * 
 * @description
 * Сохраняет изменения строки.
 * 
 * @param {Object} row - Объект строки
 */
function handleRowSave(row) {
  const editedRow = editingData.value[row.id];
  if (editedRow) {
    // Валидация
    let isValid = true;
    for (const column of editableColumns.value) {
      if (props.validation[column.key]) {
        const validationResult = props.validation[column.key](
          editedRow[column.key]
        );
        if (validationResult !== true) {
          console.warn("Валидация не пройдена:", validationResult);
          isValid = false;
          break;
        }
      }
    }

    if (isValid) {
      emit("row-save", { row, editedRow });
      emit("update:data", displayData.value);
      editingRows.value.delete(row.id);
      delete editingData.value[row.id];
    }
  }
}

/**
 * Обработчик отмены редактирования строки
 * 
 * @description
 * Отменяет изменения строки.
 * 
 * @param {Object} row - Объект строки
 */
function handleRowCancel(row) {
  editingRows.value.delete(row.id);
  delete editingData.value[row.id];
  emit("row-cancel", row);
}

// Синхронизация с prop data
watch(
  () => props.data,
  () => {
    // Очищаем редактирование при изменении данных
    editingData.value = {};
    editingRows.value.clear();
    editingCells.value = {};
  },
  { deep: true }
);
</script>

<style scoped>
.dx-data-table-editor {
  min-width: 100px;
}
</style>

