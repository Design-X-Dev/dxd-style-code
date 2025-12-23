<template>
  <div :class="gridClasses" :style="gridStyle" data-component="DXGrid">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "@/composables/useSize";
import { useSpacing } from "@/composables/useSpacing";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /** Количество колонок: 1-12 или auto */
  cols: { type: [Number, String], default: 12 },
  /** Количество колонок на sm */
  colsSm: { type: [Number, String], default: "" },
  /** Количество колонок на md */
  colsMd: { type: [Number, String], default: "" },
  /** Количество колонок на lg */
  colsLg: { type: [Number, String], default: "" },
  /** Отступ между элементами: none | xs | sm | md | lg | xl */
  gap: { type: String, default: "md" },
  /** Горизонтальный отступ */
  gapX: { type: String, default: "" },
  /** Вертикальный отступ */
  gapY: { type: String, default: "" },
});

const BASE_CLASSES = "grid";

/**
 * Классы количества колонок
 * 
 * @description
 * Определяет количество колонок в grid контейнере.
 * Поддерживает значения от 1 до 12 или "auto" для автоматического размера.
 * 
 * @returns {string} Tailwind CSS класс для grid-cols
 */
const colsClass = computed(() => {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
    7: "grid-cols-7",
    8: "grid-cols-8",
    9: "grid-cols-9",
    10: "grid-cols-10",
    11: "grid-cols-11",
    12: "grid-cols-12",
    auto: "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
  };
  
  return colsClasses[props.cols] || `grid-cols-${props.cols}`;
});

/**
 * Классы адаптивных колонок
 * 
 * @description
 * Определяет количество колонок для различных брейкпоинтов (sm, md, lg).
 * Используется для создания адаптивных grid макетов.
 * 
 * @returns {Object} Объект с классами для условного применения
 */
const responsiveColsClasses = computed(() => {
  const classes = {};
  
  if (props.colsSm) {
    classes[`sm:grid-cols-${props.colsSm}`] = true;
  }
  
  if (props.colsMd) {
    classes[`md:grid-cols-${props.colsMd}`] = true;
  }
  
  if (props.colsLg) {
    classes[`lg:grid-cols-${props.colsLg}`] = true;
  }
  
  return Object.keys(classes).length > 0 ? classes : null;
});

/**
 * Классы отступов между элементами
 * 
 * @description
 * Использует useSize для общего gap и useSpacing для раздельных gapX/gapY.
 * Поддерживает общий gap, а также раздельные gapX и gapY.
 * 
 * @returns {string|Object} Классы gap или объект для условных классов
 */
const gapClasses = computed(() => {
  // Если указаны gapX или gapY, используем их вместо общего gap
  if (props.gapX || props.gapY) {
    const classes = {};
    
    if (props.gapX) {
      // Извлекаем значение из useSpacing и формируем gap-x класс
      const spacingClass = useSpacing(props.gapX, 'padding');
      const match = spacingClass ? spacingClass.match(/-(\d+)$/) : null;
      if (match) {
        classes[`gap-x-${match[1]}`] = true;
      } else if (props.gapX === "none") {
        classes["gap-x-0"] = true;
      } else {
        classes[`gap-x-${props.gapX}`] = true;
      }
    }
    
    if (props.gapY) {
      // Извлекаем значение из useSpacing и формируем gap-y класс
      const spacingClass = useSpacing(props.gapY, 'padding');
      const match = spacingClass ? spacingClass.match(/-(\d+)$/) : null;
      if (match) {
        classes[`gap-y-${match[1]}`] = true;
      } else if (props.gapY === "none") {
        classes["gap-y-0"] = true;
      } else {
        classes[`gap-y-${props.gapY}`] = true;
      }
    }
    
    return Object.keys(classes).length > 0 ? classes : null;
  }
  
  // Используем useSize для общего gap
  return useSize(props.gap, 'spacing') || 'gap-4';
});

/**
 * Все классы для grid компонента
 * 
 * @description
 * Объединяет все классы grid контейнера (базовый класс, колонки,
 * адаптивные колонки, отступы) с использованием useClassComposition.
 * 
 * @returns {Array} Массив классов для применения к элементу
 */
const gridClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    colsClass.value,
    responsiveColsClasses.value,
    gapClasses.value
  )
);

/**
 * Инлайн стили для grid
 * 
 * @description
 * В настоящее время не используется, но оставлен для будущих расширений,
 * например, для кастомных grid шаблонов.
 * 
 * @returns {Object} Объект со стилями или пустой объект
 */
const gridStyle = computed(() => {
  if (props.cols === "auto") return {};
  return {};
});
</script>

