<template>
  <div
    :class="gridClasses"
    :style="gridStyles"
    data-component="DXDashboardGrid"
    :data-columns="columns"
    :data-editable="editable"
  >
    <vuedraggable
      v-model="internalWidgets"
      :animation="200"
      :disabled="!editable"
      handle=".drag-handle"
      :group="{ name: 'widgets', pull: false, put: false }"
      item-key="id"
      @start="handleDragStart"
      @end="handleDragEnd"
      @change="handleDragChange"
    >
      <template #item="{ element: widget }">
        <div
          :class="widgetClasses"
          :style="widgetStyles(widget)"
        >
          <div v-if="editable" class="drag-handle absolute top-2 right-2 z-10 cursor-move">
            <DXIcon
              :icon="Bars3Icon"
              size="sm"
              class="text-slate-400 hover:text-slate-600"
            />
          </div>
          <slot name="widget" :widget="widget">
            <div class="p-4 bg-white border border-slate-200 rounded-lg h-full">
              <h3 class="font-semibold mb-2">{{ widget.title || `Виджет ${widget.id}` }}</h3>
              <p class="text-sm text-slate-600">Используйте slot widget для кастомного контента</p>
            </div>
          </slot>
        </div>
      </template>
    </vuedraggable>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSpacing } from "@/composables/useSpacing";
import vuedraggable from "vue-draggable-next";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Массив виджетов (v-model)
   * Формат: [{ id, x, y, w, h, type, title?, config? }]
   */
  widgets: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Количество колонок в сетке
   * @default 12
   */
  columns: { type: Number, default: 12 },
  /**
   * Высота строки в пикселях
   * @default 100
   */
  rowHeight: { type: Number, default: 100 },
  /**
   * Редактируемый режим (drag-and-drop включен)
   * @default true
   */
  editable: { type: Boolean, default: true },
  /**
   * Отступ между виджетами: none | xs | sm | md | lg | xl
   * @default 'md'
   */
  gap: {
    type: String,
    default: "md",
    validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
  },
});

const emit = defineEmits([
  "update:widgets",
  "widget-move",
  "widget-resize",
  "widget-add",
  "widget-remove",
]);

const internalWidgets = ref([...props.widgets]);
const isDragging = ref(false);

/**
 * Классы для grid контейнера
 * 
 * @description
 * Вычисляет классы для grid контейнера с использованием CSS Grid.
 * 
 * @returns {Array} Массив классов
 */
const gridClasses = computed(() =>
  useClassComposition("relative w-full")
);

/**
 * Стили для grid контейнера
 * 
 * @description
 * Вычисляет стили для grid контейнера с количеством колонок и отступами.
 * 
 * @returns {Object} Объект со стилями
 */
const gridStyles = computed(() => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
  gridAutoRows: `${props.rowHeight}px`,
  gap: gapValue.value,
}));

/**
 * Стили для grid контейнера
 * 
 * @description
 * Вычисляет стили для grid контейнера с количеством колонок.
 * 
 * @returns {Object} Объект со стилями
 */
/**
 * Значение gap для CSS
 * 
 * @description
 * Преобразует gap prop в значение для CSS.
 * 
 * @returns {string} Значение gap
 */
const gapValue = computed(() => {
  const gapMap = {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  };
  return gapMap[props.gap] || gapMap.md;
});

/**
 * Классы для виджета
 * 
 * @description
 * Вычисляет классы для каждого виджета.
 * 
 * @returns {Array} Массив классов
 */
const widgetClasses = computed(() =>
  useClassComposition(
    "relative transition-all",
    {
      "cursor-move": props.editable && isDragging.value,
      "cursor-default": !props.editable,
    }
  )
);

/**
 * Стили для виджета
 * 
 * @description
 * Вычисляет стили для позиционирования виджета в grid.
 * 
 * @param {Object} widget - Виджет
 * @returns {Object} Объект со стилями
 */
function widgetStyles(widget) {
  return {
    gridColumn: `span ${widget.w || 4}`,
    gridRow: `span ${widget.h || 2}`,
  };
}

/**
 * Обработчик начала перетаскивания
 * 
 * @description
 * Вызывается при начале перетаскивания виджета.
 * 
 * @param {Object} event - Событие drag
 */
function handleDragStart(event) {
  isDragging.value = true;
}

/**
 * Обработчик окончания перетаскивания
 * 
 * @description
 * Вызывается при окончании перетаскивания виджета.
 * 
 * @param {Object} event - Событие drag
 */
function handleDragEnd(event) {
  isDragging.value = false;
  
  // Вычисляем новую позицию виджета
  const widget = internalWidgets.value[event.newIndex];
  if (widget) {
    // Обновляем позицию на основе нового индекса
    const newPosition = calculatePosition(event.newIndex);
    emit("widget-move", widget.id, newPosition);
  }
}

/**
 * Обработчик изменения при перетаскивании
 * 
 * @description
 * Вызывается при изменении порядка виджетов.
 * 
 * @param {Object} event - Событие изменения
 */
function handleDragChange(event) {
  if (event.added) {
    // Виджет добавлен
    const widget = event.added.element;
    emit("widget-add", widget);
  } else if (event.removed) {
    // Виджет удален
    const widget = event.removed.element;
    emit("widget-remove", widget);
  } else if (event.moved) {
    // Виджет перемещен
    const widget = event.moved.element;
    const newPosition = calculatePosition(event.moved.newIndex);
    emit("widget-move", widget.id, newPosition);
  }
}

/**
 * Вычисление позиции виджета
 * 
 * @description
 * Вычисляет позицию (x, y) виджета на основе его индекса в grid.
 * 
 * @param {number} index - Индекс виджета
 * @returns {Object} Объект с позицией { x, y }
 */
function calculatePosition(index) {
  // Упрощенная логика: вычисляем позицию на основе индекса
  // В реальной реализации нужно учитывать размеры виджетов
  let currentX = 0;
  let currentY = 0;
  let currentRowHeight = 0;

  for (let i = 0; i < index; i++) {
    const widget = internalWidgets.value[i];
    const widgetW = widget.w || 4;
    const widgetH = widget.h || 2;

    if (currentX + widgetW > props.columns) {
      // Переход на новую строку
      currentX = 0;
      currentY += currentRowHeight;
      currentRowHeight = widgetH;
    } else {
      currentX += widgetW;
      currentRowHeight = Math.max(currentRowHeight, widgetH);
    }
  }

  return { x: currentX, y: currentY };
}

// Синхронизация с prop widgets
watch(
  () => props.widgets,
  (newWidgets) => {
    internalWidgets.value = [...newWidgets];
  },
  { deep: true }
);

// Синхронизация изменений с родителем
watch(
  internalWidgets,
  (newWidgets) => {
    emit("update:widgets", newWidgets);
  },
  { deep: true }
);
</script>

<style scoped>
/* Стили для drag-and-drop */
:deep(.sortable-ghost) {
  opacity: 0.3;
}

:deep(.sortable-drag) {
  opacity: 0.5;
}
</style>

