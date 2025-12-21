<template>
  <div class="w-full" data-component="DXSlider">
    <div class="flex items-center justify-between mb-2">
      <label v-if="label" class="text-sm font-medium text-slate-700">{{ label }}</label>
      <span v-if="showValue" class="text-sm font-semibold text-slate-900">
        {{ displayValue }}
      </span>
    </div>
    
    <div class="relative pt-2 pb-2">
      <!-- Visual ticks (засечки на линии) -->
      <div v-if="ticks" class="absolute top-1/2 w-full pointer-events-none" style="transform: translateY(-50%)">
        <div
          v-for="(tick, index) in tickValues"
          :key="`tick-${index}`"
          class="absolute w-0.5 h-3 bg-slate-400 rounded-full"
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
        @input="handleInput"
      />
    </div>
    
    <!-- Labels for ticks -->
    <div v-if="ticks && (showTickLabels || tickIcons)" class="relative mt-1 w-full" style="min-height: 3rem;">
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
          size="sm" 
          :animation="getIconAnimation(index)"
          :class="isActiveIcon(index) ? 'text-slate-900' : 'text-slate-400'"
        />
        <span 
          v-if="showTickLabels" 
          class="text-xs transition-colors duration-200 whitespace-nowrap"
          :class="isActiveIcon(index) ? 'text-slate-900 font-semibold' : 'text-slate-500'"
        >
          {{ tick }}{{ unit }}
        </span>
      </span>
    </div>
    
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../v2/DXIcon/DXIcon.vue";

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
});

const emit = defineEmits(["update:modelValue"]);

const displayValue = computed(() => `${props.modelValue}${props.unit}`);

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
// Thumb имеет ширину 20px, поэтому нужно учитывать offset
const getTickStyle = (tickValue) => {
  const range = props.max - props.min;
  if (range === 0) return { left: '0', transform: 'translateX(-50%)' };
  
  // Процент от диапазона значений
  const percentage = ((tickValue - props.min) / range) * 100;
  
  // Размер thumb в пикселях
  const thumbSize = 20;
  
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
  height: 20px; /* Высота для правильного центрирования thumb */
  background: transparent;
}

/* Webkit (Chrome, Safari, Edge) */
.slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0f172a;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s, box-shadow 0.15s;
  margin-top: -6px; /* (thumb_height - track_height) / 2 = (20 - 8) / 2 = 6px */
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.slider::-webkit-slider-thumb:active {
  transform: scale(0.95);
}

/* Firefox */
.slider::-moz-range-track {
  width: 100%;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  border: none;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0f172a;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.15s, box-shadow 0.15s;
}

.slider::-moz-range-thumb:hover {
  transform: scale(1.1);
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

