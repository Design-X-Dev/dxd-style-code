<template>
  <div
    :class="ratingClasses"
    data-component="DXRating"
    :data-size="size"
    :data-readonly="readonly"
    :data-symbol="symbol"
    :data-color="color"
    role="radiogroup"
    :aria-label="ariaLabel || 'Рейтинг'"
  >
    <button
      v-for="index in max"
      :key="index"
      type="button"
      :class="itemClasses(index)"
      :disabled="readonly"
      :aria-label="`Оценка ${index} из ${max}`"
      :aria-checked="isItemActive(index)"
      role="radio"
      tabindex="0"
      @click="handleClick(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
      @keydown.enter="handleClick(index)"
      @keydown.space.prevent="handleClick(index)"
    >
      <component
        v-if="isItemFilled(index)"
        :is="filledIconComponent"
        :class="iconClasses(index)"
      />
      <component
        v-else
        :is="iconComponent"
        :class="iconClasses(index)"
      />
      <!-- Половина иконки для allowHalf -->
      <component
        v-if="allowHalf && isHalfFilled(index)"
        :is="filledIconComponent"
        :class="halfIconClasses(index)"
      />
    </button>
    <!-- Количество оценок -->
    <span v-if="count" :class="countClasses">
      ({{ count }})
    </span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";
import {
  StarIcon,
  HeartIcon,
} from "@heroicons/vue/24/solid";
import {
  StarIcon as StarIconOutline,
  HeartIcon as HeartIconOutline,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Значение рейтинга (v-model)
   * Может быть целым числом или дробным (например, 4.5)
   */
  modelValue: { type: Number, default: 0 },
  /**
   * Максимальное значение рейтинга
   * @default 5
   */
  max: { type: Number, default: 5 },
  /**
   * Только для чтения (не интерактивный)
   * @default false
   */
  readonly: { type: Boolean, default: false },
  /**
   * Разрешить половину значения (например, 4.5)
   * @default false
   */
  allowHalf: { type: Boolean, default: false },
  /**
   * Символ для отображения: star | heart | number
   * @default 'star'
   */
  symbol: {
    type: String,
    default: "star",
    validator: (v) => ["star", "heart", "number"].includes(v),
  },
  /**
   * Цвет: yellow | red | blue | green | purple
   * @default 'yellow'
   */
  color: {
    type: String,
    default: "yellow",
    validator: (v) =>
      ["yellow", "red", "blue", "green", "purple"].includes(v),
  },
  /**
   * Размер: xs | sm | md | lg | xl
   * @default 'md'
   */
  size: {
    type: String,
    default: "md",
    validator: (v) => ["xs", "sm", "md", "lg", "xl"].includes(v),
  },
  /**
   * Количество оценок для отображения
   */
  count: { type: Number, default: null },
  /**
   * Кастомный aria-label
   */
  ariaLabel: { type: String, default: null },
});

const emit = defineEmits(["update:modelValue", "change"]);

const hoverValue = ref(0);

/**
 * Иконка для отображения
 * 
 * @description
 * Определяет какую иконку использовать в зависимости от symbol:
 * - star → StarIcon
 * - heart → HeartIcon
 * - number → не используется (отображаются числа)
 * 
 * @returns {Object|Function} Компонент иконки
 */
const iconComponent = computed(() => {
  if (props.symbol === "heart") {
    return HeartIconOutline;
  }
  return StarIconOutline;
});

/**
 * Заполненная иконка
 * 
 * @description
 * Определяет заполненную версию иконки для активных элементов.
 * 
 * @returns {Object|Function} Компонент заполненной иконки
 */
const filledIconComponent = computed(() => {
  if (props.symbol === "heart") {
    return HeartIcon;
  }
  return StarIcon;
});

/**
 * Классы для контейнера рейтинга
 * 
 * @description
 * Базовые классы для контейнера с выравниванием элементов.
 * 
 * @returns {Array} Массив классов
 */
const ratingClasses = computed(() =>
  useClassComposition("inline-flex items-center gap-1")
);

/**
 * Классы для элемента рейтинга
 * 
 * @description
 * Вычисляет классы для каждого элемента рейтинга на основе состояния.
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {Array} Массив классов
 */
function itemClasses(index) {
  const isActive = isItemActive(index);
  const isHovered = hoverValue.value >= index;
  const currentValue = hoverValue.value || props.modelValue;

  return useClassComposition(
    "relative inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded",
    {
      "cursor-pointer": !props.readonly,
      "cursor-default": props.readonly,
      [colorClasses.value.active]: isActive || isHovered,
      [colorClasses.value.inactive]: !isActive && !isHovered,
      [sizeClasses.value]: true,
    }
  );
}

/**
 * Классы для иконки
 * 
 * @description
 * Вычисляет классы для иконки элемента.
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {Array} Массив классов
 */
function iconClasses(index) {
  return useClassComposition(
    sizeClasses.value,
    {
      [colorClasses.value.active]: isItemFilled(index),
      [colorClasses.value.inactive]: !isItemFilled(index),
    }
  );
}

/**
 * Классы для половины иконки
 * 
 * @description
 * Вычисляет классы для половины заполненной иконки (для allowHalf).
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {Array} Массив классов
 */
function halfIconClasses(index) {
  return useClassComposition(
    sizeClasses.value,
    colorClasses.value.active,
    "absolute left-0 top-0 overflow-hidden"
  );
}

/**
 * Классы для количества оценок
 * 
 * @description
 * Вычисляет классы для отображения количества оценок.
 * 
 * @returns {Array} Массив классов
 */
const countClasses = computed(() => {
  const sizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };
  return useClassComposition(
    sizeMap[props.size] || sizeMap.md,
    "text-slate-500 ml-1"
  );
});

/**
 * Классы размеров
 * 
 * @description
 * Вычисляет классы размеров для элементов рейтинга.
 * 
 * @returns {Object} Объект с классами размеров
 */
const sizeClasses = computed(() => {
  const sizeMap = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
  };
  return {
    value: sizeMap[props.size] || sizeMap.md,
  };
});

/**
 * Классы цветов
 * 
 * @description
 * Вычисляет классы цветов для активных и неактивных элементов.
 * 
 * @returns {Object} Объект с классами цветов
 */
const colorClasses = computed(() => {
  const colorMap = {
    yellow: {
      active: "text-yellow-400",
      inactive: "text-slate-300",
    },
    red: {
      active: "text-rose-500",
      inactive: "text-slate-300",
    },
    blue: {
      active: "text-blue-500",
      inactive: "text-slate-300",
    },
    green: {
      active: "text-green-500",
      inactive: "text-slate-300",
    },
    purple: {
      active: "text-purple-500",
      inactive: "text-slate-300",
    },
  };
  return colorMap[props.color] || colorMap.yellow;
});

/**
 * Проверяет, активен ли элемент
 * 
 * @description
 * Определяет, должен ли элемент быть активным (заполненным) на основе текущего значения.
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {boolean} true если элемент активен
 */
function isItemActive(index) {
  const currentValue = hoverValue.value || props.modelValue;
  return currentValue >= index;
}

/**
 * Проверяет, заполнен ли элемент
 * 
 * @description
 * Определяет, должен ли элемент быть полностью заполненным.
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {boolean} true если элемент заполнен
 */
function isItemFilled(index) {
  const currentValue = hoverValue.value || props.modelValue;
  return Math.floor(currentValue) >= index;
}

/**
 * Проверяет, заполнена ли половина элемента
 * 
 * @description
 * Определяет, должна ли быть заполнена половина элемента (для allowHalf).
 * 
 * @param {number} index - Индекс элемента (1-based)
 * @returns {boolean} true если половина заполнена
 */
function isHalfFilled(index) {
  if (!props.allowHalf) return false;
  const currentValue = hoverValue.value || props.modelValue;
  const floorValue = Math.floor(currentValue);
  return floorValue === index - 1 && currentValue % 1 >= 0.5;
}

/**
 * Обработчик клика
 * 
 * @description
 * Обрабатывает клик по элементу рейтинга и обновляет значение.
 * 
 * @param {number} index - Индекс элемента (1-based)
 */
function handleClick(index) {
  if (props.readonly) return;

  let newValue = index;

  // Если allowHalf и клик по уже выбранному элементу, устанавливаем половину
  if (props.allowHalf && props.modelValue === index) {
    newValue = index - 0.5;
  }

  emit("update:modelValue", newValue);
  emit("change", newValue);
}

/**
 * Обработчик mouseenter
 * 
 * @description
 * Устанавливает hover значение при наведении (для визуальной обратной связи).
 * 
 * @param {number} index - Индекс элемента (1-based)
 */
function handleMouseEnter(index) {
  if (props.readonly) return;
  hoverValue.value = index;
}

/**
 * Обработчик mouseleave
 * 
 * @description
 * Сбрасывает hover значение при уходе курсора.
 */
function handleMouseLeave() {
  if (props.readonly) return;
  hoverValue.value = 0;
}
</script>

