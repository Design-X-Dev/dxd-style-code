<template>
  <div
    :class="sidebarClasses"
    :style="sidebarStyles"
    data-component="DXSidebar"
    :data-mode="mode"
    :data-open="open"
    :data-collapsed="collapsed"
  >
    <!-- Header -->
    <div v-if="$slots.header" :class="headerClasses">
      <slot name="header" />
    </div>

    <!-- Content -->
    <div v-if="$slots.content" :class="contentClasses">
      <slot name="content" />
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" :class="footerClasses">
      <slot name="footer" />
    </div>

    <!-- Backdrop для overlay режима -->
    <DXBackdrop
      v-if="showBackdrop"
      :show="showBackdrop"
      :blur="backdropBlur"
      :dismissible="true"
      @close="closeSidebar"
    />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXBackdrop from "../../atoms/DXBackdrop/DXBackdrop.vue";

const props = defineProps({
  /**
   * Открыт ли сайдбар
   * @default true
   */
  open: { type: Boolean, default: true },
  /**
   * Режим отображения: overlay | push | static
   * @default 'static'
   */
  mode: {
    type: String,
    default: "static",
    validator: (v) => ["overlay", "push", "static"].includes(v),
  },
  /**
   * Ширина сайдбара в пикселях
   * @default 256
   */
  width: { type: Number, default: 256 },
  /**
   * Ширина свернутого сайдбара в пикселях
   * @default 64
   */
  collapsedWidth: { type: Number, default: 64 },
  /**
   * Свернут ли сайдбар
   * @default false
   */
  collapsed: { type: Boolean, default: false },
  /**
   * Показывать сайдбар на мобильных
   * @default false
   */
  showOnMobile: { type: Boolean, default: false },
  /**
   * Размытие backdrop для overlay режима: none | sm | md | lg | xl
   * @default 'sm'
   */
  backdropBlur: {
    type: String,
    default: "sm",
    validator: (v) => ["none", "sm", "md", "lg", "xl"].includes(v),
  },
});

const emit = defineEmits(["update:open", "toggle", "collapse"]);

/**
 * Показывать ли backdrop
 * 
 * @description
 * Backdrop показывается только в overlay режиме и когда сайдбар открыт.
 * 
 * @returns {boolean} true если нужно показать backdrop
 */
const showBackdrop = computed(() => {
  return props.mode === "overlay" && props.open;
});

/**
 * Классы для сайдбара
 * 
 * @description
 * Вычисляет классы для сайдбара в зависимости от режима и состояния.
 * 
 * @returns {Array} Массив классов
 */
const sidebarClasses = computed(() =>
  useClassComposition(
    "flex flex-col bg-white border-r border-slate-200 transition-all duration-300 z-20",
    {
      // Overlay режим: фиксированная позиция
      "fixed inset-y-0 left-0": props.mode === "overlay",
      // Push режим: обычный поток, но с transition
      "relative": props.mode === "push",
      // Static режим: обычный поток
      "relative": props.mode === "static",
      // Скрытие на мобильных (если не showOnMobile)
      "hidden md:flex": !props.showOnMobile && props.mode !== "overlay",
      // Показ на мобильных только в overlay режиме
      "md:flex": props.showOnMobile || props.mode === "overlay",
      // Скрытие если не открыт (для overlay)
      "hidden": props.mode === "overlay" && !props.open,
    }
  )
);

/**
 * Стили для сайдбара
 * 
 * @description
 * Вычисляет ширину сайдбара в зависимости от состояния (свернут/развернут).
 * 
 * @returns {Object} Объект со стилями
 */
const sidebarStyles = computed(() => {
  const width = props.collapsed ? props.collapsedWidth : props.width;

  return {
    width: `${width}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
  };
});

/**
 * Классы для header
 * 
 * @description
 * Вычисляет классы для header секции.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("flex-shrink-0 p-4 border-b border-slate-200")
);

/**
 * Классы для content
 * 
 * @description
 * Вычисляет классы для content секции.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() =>
  useClassComposition("flex-1 overflow-y-auto")
);

/**
 * Классы для footer
 * 
 * @description
 * Вычисляет классы для footer секции.
 * 
 * @returns {Array} Массив классов
 */
const footerClasses = computed(() =>
  useClassComposition("flex-shrink-0 p-4 border-t border-slate-200")
);

/**
 * Закрытие сайдбара
 * 
 * @description
 * Закрывает сайдбар (для overlay режима).
 */
function closeSidebar() {
  if (props.mode === "overlay") {
    emit("update:open", false);
    emit("toggle", false);
  }
}

// Отслеживание изменений open
watch(
  () => props.open,
  (isOpen) => {
    emit("toggle", isOpen);
  }
);

// Отслеживание изменений collapsed
watch(
  () => props.collapsed,
  (isCollapsed) => {
    emit("collapse", isCollapsed);
  }
);
</script>

