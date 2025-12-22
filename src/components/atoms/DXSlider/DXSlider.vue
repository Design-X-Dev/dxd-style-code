<template>
  <div 
    class="w-full" 
    data-component="DXSlider"
    :data-size="size"
    :data-variant="variant"
  >
    <div :class="['flex items-center justify-between', labelSpacing]">
      <label v-if="label" :class="[textSize, 'font-medium', sliderVariant.text]">{{ label }}</label>
      <span v-if="showValue" :class="[textSize, 'font-semibold', sliderVariant.textValue]">
        {{ displayValue }}
      </span>
    </div>
    
    <div :class="['relative', trackSpacing]">
      <!-- Visual ticks (засечки на линии) -->
      <div v-if="ticks" class="absolute top-1/2 w-full pointer-events-none" style="transform: translateY(-50%)">
        <div
          v-for="(tick, index) in tickValues"
          :key="`tick-${index}`"
          :class="['absolute w-0.5 h-3 rounded-full', sliderVariant.tick]"
          :style="getTickStyle(tick)"
        />
      </div>
      
      <input
        type="range"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        class="slider w-full appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed relative z-10"
        :style="sliderStyles"
        @input="handleInput"
      />
    </div>
    
    <!-- Labels for ticks -->
    <div v-if="ticks && (showTickLabels || tickIcons)" :class="['relative w-full', tickLabelSpacing]" style="min-height: 3rem;">
      <span 
        v-for="(tick, index) in tickValues" 
        :key="tick" 
        class="absolute flex flex-col items-center gap-0.5 transition-transform duration-200"
        :class="{ 'scale-110': isActiveIcon(index) }"
        :style="getTickStyle(tick)"
      >
        <DXIcon 
          v-if="tickIcons && tickIcons[index]" 
          :icon="tickIcons[index]" 
          :size="size" 
          :animation="getIconAnimation(index)"
          :class="isActiveIcon(index) ? sliderVariant.textActive : sliderVariant.text"
        />
        <span 
          v-if="showTickLabels" 
          :class="[
            textSize, 
            'transition-colors duration-200 whitespace-nowrap',
            isActiveIcon(index) ? [sliderVariant.textActive, 'font-semibold'] : sliderVariant.text
          ]"
        >
          {{ tick }}{{ unit }}
        </span>
      </span>
    </div>
    
    <p v-if="helper" :class="[textSize, tickLabelSpacing, sliderVariant.text]">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useSize } from "@/composables/useSize";
import { useVariantSlider } from "@/composables/useVariant";
import { useSpacing } from "@/composables/useSpacing";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Значение (v-model) */
  modelValue: { type: Number, default: 0 },
  /** Минимум */
  min: { type: Number, default: 0 },
  /** Максимум */
  max: { type: Number, default: 100 },
  /** Шаг */
  step: { type: Number, default: 1 },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Показывать текущее значение */
  showValue: { type: Boolean, default: true },
  /** Показывать засечки (ticks) */
  ticks: { type: Boolean, default: false },
  /** Показывать подписи к засечкам */
  showTickLabels: { type: Boolean, default: true },
  /** Количество засечек */
  tickCount: { type: Number, default: 5 },
  /** Массив иконок для засечек (Heroicon компоненты) */
  tickIcons: { type: Array, default: null },
  /** Анимация активной иконки: wiggle | scale | rotate | none */
  tickIconAnimation: { type: String, default: "wiggle" },
  /** Единица измерения */
  unit: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: xs | sm | md | lg | xl */
  size: { 
    type: String, 
    default: "md",
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v)
  },
  /** Вариант цвета: slate | primary | success | danger | warning | info */
  variant: { 
    type: String, 
    default: "primary",
    validator: (v) => ['slate', 'primary', 'success', 'danger', 'warning', 'info', 'default'].includes(v)
  },
  /** Отступы между элементами: none | xs | sm | md | lg | xl */
  spacing: { 
    type: String, 
    default: "sm",
    validator: (v) => ['none', 'xs', 'sm', 'md', 'lg', 'xl'].includes(v)
  },
});

const emit = defineEmits(["update:modelValue"]);

// Используем composables
const sliderVariant = useVariantSlider(props.variant);
const trackHeight = useSize(props.size, 'sliderTrack');
const thumbSize = useSize(props.size, 'sliderThumb');
const textSize = useSize(props.size, 'text');
const labelSpacing = useSpacing(props.spacing, 'marginY');
const trackSpacing = useSpacing(props.spacing, 'paddingY');
const tickLabelSpacing = useSpacing(props.spacing, 'marginTop');

// Получаем размер thumb в пикселях для расчета позиций
const thumbSizePx = computed(() => {
  const sizeMap = { xs: 12, sm: 16, md: 20, lg: 24, xl: 28 };
  return sizeMap[props.size] || 20;
});

// Получаем высоту трека в пикселях
const trackHeightPx = computed(() => {
  const heightMap = { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 };
  return heightMap[props.size] || 8;
});

const displayValue = computed(() => `${props.modelValue}${props.unit}`);

// CSS переменные для динамических стилей
const sliderStyles = computed(() => {
  // Извлекаем цвета из классов Tailwind
  const getColorFromClass = (className) => {
    // Простая маппинг для основных цветов
    const colorMap = {
      'bg-slate-200': '#e2e8f0',
      'bg-slate-900': '#0f172a',
      'bg-slate-800': '#1e293b',
      'bg-slate-700': '#334155',
      'bg-slate-600': '#475569',
      'bg-blue-200': '#bfdbfe',
      'bg-blue-600': '#2563eb',
      'bg-blue-500': '#3b82f6',
      'bg-blue-400': '#60a5fa',
      'bg-emerald-200': '#a7f3d0',
      'bg-emerald-600': '#059669',
      'bg-emerald-500': '#10b981',
      'bg-emerald-400': '#34d399',
      'bg-amber-200': '#fde68a',
      'bg-amber-600': '#d97706',
      'bg-amber-500': '#f59e0b',
      'bg-amber-400': '#fbbf24',
      'bg-rose-200': '#fecdd3',
      'bg-rose-600': '#e11d48',
      'bg-rose-500': '#f43f5e',
      'bg-rose-400': '#fb7185',
    };
    return colorMap[className] || '#0f172a';
  };

  return {
    '--slider-track-color': getColorFromClass(sliderVariant.track),
    '--slider-thumb-color': getColorFromClass(sliderVariant.thumb),
    '--slider-thumb-hover-color': getColorFromClass(sliderVariant.thumbHover),
    '--slider-thumb-size': `${thumbSizePx.value}px`,
    '--slider-track-height': `${trackHeightPx.value}px`,
    '--slider-thumb-margin-top': `${(thumbSizePx.value - trackHeightPx.value) / 2}px`,
  };
});

const tickValues = computed(() => {
  if (!props.ticks) return [];
  const count = props.tickCount;
  const step = (props.max - props.min) / (count - 1);
  return Array.from({ length: count }, (_, i) => Math.round(props.min + step * i));
});

const handleInput = (event) => {
  emit("update:modelValue", Number(event.target.value));
};

// Определяет, какая иконка активна (ближайшая к текущему значению)
const getClosestTickIndex = computed(() => {
  if (!props.ticks || !tickValues.value.length) return -1;
  
  let closestIndex = 0;
  let minDistance = Math.abs(props.modelValue - tickValues.value[0]);
  
  tickValues.value.forEach((tick, index) => {
    const distance = Math.abs(props.modelValue - tick);
    if (distance < minDistance) {
      minDistance = distance;
      closestIndex = index;
    }
  });
  
  return closestIndex;
});

const isActiveIcon = (index) => {
  return getClosestTickIndex.value === index;
};

const getIconAnimation = (index) => {
  // Активная иконка анимируется выбранной анимацией
  if (isActiveIcon(index)) {
    return props.tickIconAnimation;
  }
  return 'none';
};

// Рассчитывает позицию засечки с учетом размера thumb
const getTickStyle = (tickValue) => {
  const range = props.max - props.min;
  if (range === 0) return { left: '0', transform: 'translateX(-50%)' };
  
  // Процент от диапазона значений
  const percentage = ((tickValue - props.min) / range) * 100;
  
  // Используем динамический размер thumb
  const thumbSize = thumbSizePx.value;
  
  // Вычисляем offset в процентах от ширины контейнера
  // На краях thumb центрируется, поэтому его половина выходит за край
  // Формула: процент * (1 - thumbSize/containerWidth) + половина thumbSize
  // Упрощенная формула для CSS: используем calc
  
  return {
    left: `calc(${percentage}% + ${(0.5 - percentage / 100) * thumbSize}px)`,
    transform: 'translateX(-50%)'
  };
};
</script>

<style scoped>
/* Input range base */
.slider {
  height: var(--slider-thumb-size, 20px); /* Высота для правильного центрирования thumb */
  background: transparent;
}

/* Webkit (Chrome, Safari, Edge) */
.slider::-webkit-slider-runnable-track {
  width: 100%;
  height: var(--slider-track-height, 8px);
  background: var(--slider-track-color, #e2e8f0);
  border-radius: 4px;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: var(--slider-thumb-size, 20px);
  height: var(--slider-thumb-size, 20px);
  border-radius: 50%;
  background: var(--slider-thumb-color, #0f172a);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s, box-shadow 0.15s, background-color 0.15s;
  margin-top: calc(var(--slider-thumb-margin-top, -6px) * -1);
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: var(--slider-thumb-hover-color, var(--slider-thumb-color, #0f172a));
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.slider::-webkit-slider-thumb:active {
  transform: scale(0.95);
}

/* Firefox */
.slider::-moz-range-track {
  width: 100%;
  height: var(--slider-track-height, 8px);
  background: var(--slider-track-color, #e2e8f0);
  border-radius: 4px;
  border: none;
}

.slider::-moz-range-thumb {
  width: var(--slider-thumb-size, 20px);
  height: var(--slider-thumb-size, 20px);
  border-radius: 50%;
  background: var(--slider-thumb-color, #0f172a);
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s, box-shadow 0.15s, background-color 0.15s;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.1);
  background: var(--slider-thumb-hover-color, var(--slider-thumb-color, #0f172a));
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.slider::-moz-range-thumb:active {
  transform: scale(0.95);
}

/* Focus styles */
.slider:focus {
  outline: none;
}

.slider:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
}

.slider:focus::-moz-range-thumb {
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>

