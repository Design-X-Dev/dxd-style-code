<template>
  <div
    :class="containerClasses"
    data-component="DXImage"
    :data-size="size"
    :data-object-fit="objectFit"
    :data-rounded="rounded"
    :style="containerStyle"
  >
    <!-- Lazy loading wrapper -->
    <DXObserver
      v-if="lazy"
      :threshold="0.1"
      :once="true"
      @intersect="handleIntersect"
    >
      <template v-if="isVisible">
        <img
          v-if="currentSrc && !imgError"
          :src="currentSrc"
          :alt="alt"
          :srcset="srcset"
          :sizes="sizes"
          :class="imageClasses"
          :style="imageStyle"
          @load="handleLoad"
          @error="handleError"
        />
        <slot v-else-if="$slots.fallback" name="fallback" />
        <div v-else-if="fallback && !fallbackError" class="w-full h-full">
          <img
            :src="fallback"
            :alt="alt"
            :class="imageClasses"
            :style="imageStyle"
            @error="fallbackError = true"
          />
        </div>
        <div v-else :class="defaultFallbackClasses">
          <DXIcon :icon="PhotoIcon" :size="iconSize" class="text-slate-400" />
        </div>
      </template>
      <div v-else-if="showSkeleton" :class="skeletonClasses">
        <slot name="placeholder">
          <div class="w-full h-full bg-slate-200 animate-pulse" />
        </slot>
      </div>
    </DXObserver>

    <!-- Non-lazy loading -->
    <template v-else>
      <img
        v-if="currentSrc && !imgError"
        :src="currentSrc"
        :alt="alt"
        :srcset="srcset"
        :sizes="sizes"
        :class="imageClasses"
        :style="imageStyle"
        @load="handleLoad"
        @error="handleError"
      />
      <slot v-else-if="$slots.fallback" name="fallback" />
      <div v-else-if="fallback && !fallbackError" class="w-full h-full">
        <img
          :src="fallback"
          :alt="alt"
          :class="imageClasses"
          :style="imageStyle"
          @error="fallbackError = true"
        />
      </div>
      <div v-else :class="defaultFallbackClasses">
        <DXIcon :icon="PhotoIcon" :size="iconSize" class="text-slate-400" />
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { PhotoIcon } from "@heroicons/vue/24/outline";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXObserver from "../../utilities/DXObserver/DXObserver.vue";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** URL изображения */
  src: { type: String, required: true },
  /** Alt текст для доступности */
  alt: { type: String, default: "" },
  /** Ширина изображения (кастомная) */
  width: { type: [String, Number], default: null },
  /** Высота изображения (кастомная) */
  height: { type: [String, Number], default: null },
  /** Предопределенный размер: xs | sm | md | lg | xl */
  size: { type: String, default: null },
  /** object-fit: cover | contain | fill | none | scale-down */
  objectFit: { type: String, default: "cover", validator: (v) => ["cover", "contain", "fill", "none", "scale-down"].includes(v) },
  /** Lazy loading через DXObserver */
  lazy: { type: Boolean, default: false },
  /** URL fallback изображения при ошибке */
  fallback: { type: String, default: null },
  /** URL placeholder изображения */
  placeholder: { type: String, default: null },
  /** Показывать skeleton при загрузке */
  showSkeleton: { type: Boolean, default: true },
  /** Скругление: none | sm | md | lg | xl | full */
  rounded: { type: String, default: "none", validator: (v) => ["none", "sm", "md", "lg", "xl", "full"].includes(v) },
  /** Responsive изображения (srcset атрибут) */
  srcset: { type: String, default: null },
  /** Sizes атрибут для responsive */
  sizes: { type: String, default: null },
});

const emit = defineEmits(["load", "error"]);

/**
 * Флаг ошибки загрузки основного изображения
 */
const imgError = ref(false);

/**
 * Флаг ошибки загрузки fallback изображения
 */
const fallbackError = ref(false);

/**
 * Флаг видимости для lazy loading
 */
const isVisible = ref(false);

/**
 * Текущий источник изображения
 * 
 * @description
 * Определяет какой источник использовать:
 * - Если есть placeholder и изображение еще не загружено (lazy режим) → placeholder
 * - Иначе → основной src
 */
const currentSrc = computed(() => {
  if (props.placeholder && props.lazy && !isVisible.value) {
    return props.placeholder;
  }
  return props.src;
});

/**
 * Стили для контейнера
 * 
 * @description
 * Вычисляет inline стили для контейнера на основе width и height props.
 * Если указан size, размеры берутся из useSize.
 */
const containerStyle = computed(() => {
  const style = {};
  
  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }
  
  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }
  
  return Object.keys(style).length > 0 ? style : null;
});

/**
 * Стили для изображения
 */
const imageStyle = computed(() => {
  return null;
});

/**
 * Классы для контейнера
 */
const containerClasses = computed(() =>
  useClassComposition(
    "relative inline-block overflow-hidden",
    props.size ? useSize(props.size, 'image') : null,
    {
      "rounded-sm": props.rounded === "sm",
      "rounded-md": props.rounded === "md",
      "rounded-lg": props.rounded === "lg",
      "rounded-xl": props.rounded === "xl",
      "rounded-full": props.rounded === "full",
    }
  )
);

/**
 * Классы для изображения
 */
const imageClasses = computed(() => {
  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  };
  
  return useClassComposition(
    "w-full h-full",
    objectFitClasses[props.objectFit] || objectFitClasses.cover
  );
});

/**
 * Классы для skeleton
 */
const skeletonClasses = computed(() =>
  useClassComposition("w-full h-full")
);

/**
 * Классы для дефолтного fallback
 */
const defaultFallbackClasses = computed(() =>
  useClassComposition(
    "w-full h-full bg-slate-100 flex items-center justify-center"
  )
);

/**
 * Размер иконки для fallback
 */
const iconSize = computed(() => {
  if (props.size) {
    const sizeMap = {
      xs: "sm",
      sm: "md",
      md: "lg",
      lg: "xl",
      xl: "xl",
    };
    return sizeMap[props.size] || "lg";
  }
  return "lg";
});

/**
 * Обработчик успешной загрузки изображения
 */
function handleLoad() {
  emit("load");
}

/**
 * Обработчик ошибки загрузки изображения
 */
function handleError() {
  imgError.value = true;
  emit("error");
}

/**
 * Обработчик пересечения для lazy loading
 */
function handleIntersect(intersecting) {
  if (intersecting) {
    isVisible.value = true;
  }
}

// Инициализация для non-lazy режима
if (!props.lazy) {
  isVisible.value = true;
}

/**
 * Сбрасывает ошибки при изменении src
 */
watch(() => props.src, () => {
  imgError.value = false;
  fallbackError.value = false;
  if (!props.lazy) {
    isVisible.value = true;
  }
});

/**
 * Сбрасывает видимость при изменении lazy
 */
watch(() => props.lazy, (newVal) => {
  if (!newVal) {
    isVisible.value = true;
  }
});
</script>

