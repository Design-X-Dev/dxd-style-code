<template>
  <div 
    :class="scrollable ? 'flex flex-col' : 'inline-flex flex-col'"
    :style="scrollable && maxWidth ? { maxWidth, width: '100%' } : {}"
    data-component="DXSegmentedControl"
    :data-scrollable="scrollable"
  >
    <p v-if="label" class="text-sm font-medium text-slate-700 mb-2">{{ label }}</p>
    
    <!-- Wrapper для градиентов -->
    <div 
      class="relative w-full"
      :class="scrollable && 'scroll-wrapper'"
    >
      <!-- Левый градиент -->
      <div 
        v-if="scrollable && showFade"
        class="fade-left"
        :class="canScrollLeft ? 'opacity-100' : 'opacity-0'"
      />
      
      <!-- Правый градиент -->
      <div 
        v-if="scrollable && showFade"
        class="fade-right"
        :class="canScrollRight ? 'opacity-100' : 'opacity-0'"
      />
      
      <!-- Scrollable container -->
      <div 
        ref="containerRef"
        class="relative p-1 bg-slate-100 rounded-xl gap-1"
        :class="[
          scrollable ? 'flex overflow-x-auto scrollbar-hide w-full' : 'inline-flex',
          isDragging && 'cursor-grabbing select-none',
          scrollable && !isDragging && 'cursor-grab'
        ]"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseup="handleMouseUp"
        @mouseleave="handleMouseUp"
        @scroll="handleScroll"
      >
        <!-- Floating indicator -->
        <div
          class="absolute bg-white rounded-lg shadow-sm transition-all duration-200 ease-out pointer-events-none"
          :style="indicatorStyle"
        />
        
        <!-- Buttons -->
        <button
          v-for="(option, index) in options"
          :key="option.value"
          type="button"
          :ref="el => { if (el) buttonRefs[index] = el }"
          class="relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-150 rounded-lg whitespace-nowrap min-w-[60px] text-center inline-flex items-center justify-center gap-1.5 shrink-0"
          :class="[
            modelValue === option.value
              ? 'text-slate-900'
              : 'text-slate-600 hover:text-slate-900',
            disabled && 'opacity-60 cursor-not-allowed',
          ]"
          :disabled="disabled"
          @click="handleButtonClick(option.value, $event)"
        >
          <DXIcon 
            v-if="option.icon" 
            :icon="option.icon" 
            size="xs"
            :animation="getIconAnimation(option)"
          />
          <span v-if="option.label">{{ option.label }}</span>
          <span
            v-if="option.count !== undefined && option.count !== null"
            class="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-semibold rounded-full"
            :class="modelValue === option.value 
              ? 'bg-slate-800 text-white' 
              : 'bg-slate-200 text-slate-700'"
          >
            {{ option.count }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const props = defineProps({
  modelValue: [String, Number, Boolean],
  options: {
    type: Array,
    required: true,
  },
  label: { type: String, default: "" },
  /** Анимация иконок: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "none" },
  /** Анимировать только активную иконку */
  animateActiveOnly: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  /** 
   * Включить режим прокрутки (без скроллбара, с поддержкой drag-to-scroll)
   * @default false
   */
  scrollable: { type: Boolean, default: false },
  /**
   * Максимальная ширина контейнера (при scrollable: true)
   * Может быть строкой CSS (например '300px', '100%', '50vw')
   * @default null
   */
  maxWidth: { type: String, default: null },
  /**
   * Показывать градиенты размытия по краям при scrollable
   * @default true
   */
  showFade: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue"]);

const containerRef = ref(null);
const buttonRefs = ref([]);
const indicatorStyle = ref({});

// Drag-to-scroll state
const isDragging = ref(false);
const startX = ref(0);
const scrollLeftPos = ref(0);
const hasDragged = ref(false);

// Scroll position state для градиентов
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

const selectedIndex = computed(() => {
  return props.options.findIndex((opt) => opt.value === props.modelValue);
});

const updateIndicator = () => {
  const index = selectedIndex.value;
  if (index >= 0 && buttonRefs.value[index]) {
    const button = buttonRefs.value[index];
    // Индикатор и кнопки находятся в одном контейнере,
    // они скроллируются вместе, поэтому offsetLeft используем напрямую
    indicatorStyle.value = {
      width: `${button.offsetWidth}px`,
      height: `${button.offsetHeight}px`,
      left: `${button.offsetLeft}px`,
      top: `${button.offsetTop}px`,
    };
  }
};

const select = (value) => {
  if (!props.disabled) {
    emit("update:modelValue", value);
  }
};

// Определяет анимацию для иконки
const getIconAnimation = (option) => {
  // Если анимация отключена
  if (props.iconAnimation === 'none') return 'none';
  
  // Если анимировать только активную иконку
  if (props.animateActiveOnly) {
    return props.modelValue === option.value ? props.iconAnimation : 'none';
  }
  
  // Анимировать все иконки
  return props.iconAnimation;
};

// Обновление состояния градиентов
const updateScrollState = () => {
  if (!containerRef.value) return;
  
  const { scrollLeft, scrollWidth, clientWidth } = containerRef.value;
  canScrollLeft.value = scrollLeft > 2; // Небольшой threshold
  canScrollRight.value = scrollLeft < scrollWidth - clientWidth - 2;
};

// Обработчик scroll события
const handleScroll = () => {
  updateScrollState(); // Обновляем только градиенты, индикатор скроллируется автоматически
};

// Drag-to-scroll handlers
const handleMouseDown = (e) => {
  if (!props.scrollable || !containerRef.value) return;
  
  isDragging.value = true;
  hasDragged.value = false;
  startX.value = e.pageX - containerRef.value.offsetLeft;
  scrollLeftPos.value = containerRef.value.scrollLeft;
};

const handleMouseMove = (e) => {
  if (!isDragging.value || !containerRef.value) return;
  
  e.preventDefault();
  const x = e.pageX - containerRef.value.offsetLeft;
  const walk = (x - startX.value) * 1.5; // Множитель скорости прокрутки
  
  // Если переместились более чем на 5px, считаем это drag
  if (Math.abs(walk) > 5) {
    hasDragged.value = true;
  }
  
  containerRef.value.scrollLeft = scrollLeftPos.value - walk;
};

const handleMouseUp = () => {
  isDragging.value = false;
  // Сбрасываем hasDragged с небольшой задержкой, чтобы click event успел проверить флаг
  setTimeout(() => {
    hasDragged.value = false;
  }, 0);
};

// Обработчик клика по кнопке с учетом drag
const handleButtonClick = (value, event) => {
  // Если был drag, не выбираем элемент
  if (hasDragged.value) {
    event.preventDefault();
    return;
  }
  select(value);
};

// Прокрутка к выбранному элементу
const scrollToSelected = (instant = false) => {
  if (!props.scrollable || !containerRef.value) return;
  
  const index = selectedIndex.value;
  if (index >= 0 && buttonRefs.value[index]) {
    const button = buttonRefs.value[index];
    const container = containerRef.value;
    
    // Центрируем выбранный элемент
    const scrollPosition = button.offsetLeft - (container.clientWidth / 2) + (button.offsetWidth / 2);
    container.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: instant ? 'instant' : 'smooth'
    });
  }
};

watch(() => props.modelValue, () => {
  nextTick(() => {
    updateIndicator();
    scrollToSelected();
  });
});

// Отслеживание изменения размера для обновления градиентов (ref для изоляции между экземплярами)
const resizeObserver = ref(null);

onMounted(() => {
  nextTick(() => {
    // Сначала мгновенно прокручиваем к выбранному элементу (без анимации)
    scrollToSelected(true);
    
    // После установки позиции скролла — обновляем индикатор и градиенты
    updateScrollState();
    updateIndicator();
    
    // ResizeObserver для отслеживания изменения размера контейнера
    if (props.scrollable && containerRef.value && window.ResizeObserver) {
      resizeObserver.value = new ResizeObserver(() => {
        updateScrollState();
        updateIndicator(); // Пересчитываем позицию индикатора при изменении размера
      });
      resizeObserver.value.observe(containerRef.value);
    }
  });
});

onBeforeUnmount(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect();
    resizeObserver.value = null;
  }
});
</script>

<style scoped>
/* Скрытие скроллбара для режима прокрутки */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

/* Wrapper для градиентов */
.scroll-wrapper {
  position: relative;
}

/* Градиенты по краям */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 24px;
  pointer-events: none;
  z-index: 20;
  transition: opacity 150ms ease;
  border-radius: 0.75rem; /* rounded-xl */
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, rgb(241 245 249 / 1) 0%, rgb(241 245 249 / 0) 100%);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, rgb(241 245 249 / 1) 0%, rgb(241 245 249 / 0) 100%);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
