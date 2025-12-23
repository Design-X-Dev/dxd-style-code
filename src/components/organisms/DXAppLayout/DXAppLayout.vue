<template>
  <div
    :class="layoutClasses"
    v-bind="dataAttrs"
  >
    <!-- Header -->
    <header v-if="$slots.header" :class="headerClasses">
      <slot name="header" />
    </header>

    <!-- Main Layout Container -->
    <div :class="mainContainerClasses">
      <!-- Sidebar -->
      <aside
        v-if="$slots.sidebar && variant !== 'minimal'"
        :class="sidebarClasses"
        :style="sidebarStyles"
      >
        <slot name="sidebar" />
      </aside>

      <!-- Backdrop для overlay режима -->
      <DXBackdrop
        v-if="showBackdrop"
        :show="showBackdrop"
        :blur="backdropBlur"
        :z-index="'20'"
        :dismissible="true"
        @close="closeSidebar"
      />

      <!-- Content Area - для split варианта -->
      <template v-if="variant === 'split'">
        <main :class="splitContentClasses" :style="splitContentStyles">
          <slot name="content-left">
            <div :class="defaultContentClasses">
              <p class="text-slate-500">Левая панель не указана</p>
            </div>
          </slot>
        </main>
        <div class="w-px bg-slate-200 flex-shrink-0" v-if="$slots['content-left'] && $slots['content-right']"></div>
        <main :class="splitContentClasses" :style="splitContentStyles">
          <slot name="content-right">
            <div :class="defaultContentClasses">
              <p class="text-slate-500">Правая панель не указана</p>
            </div>
          </slot>
        </main>
      </template>

      <!-- Content Area - для остальных вариантов -->
      <main v-else :class="contentClasses" :style="contentStyles">
        <slot name="content">
          <div :class="defaultContentClasses">
            <p class="text-slate-500">Контент не указан</p>
          </div>
        </slot>
      </main>
    </div>

    <!-- Footer -->
    <footer v-if="$slots.footer && variant !== 'minimal'" :class="footerClasses">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup>
import { computed, watch, ref, onMounted } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSpacing } from "@/composables/useSpacing";
import { useCustomDataAttributes } from "@/composables/useDataAttributes";
import DXBackdrop from "../../atoms/DXBackdrop/DXBackdrop.vue";

const props = defineProps({
  /**
   * Вариант layout для разных задач приложения.
   * - `dashboard`: Для дашбордов с множеством виджетов (полнофункциональный header и sidebar)
   * - `content`: Для блогов, статей, документации (минималистичный header, широкий контент)
   * - `minimal`: Для простых приложений (только header и content, без sidebar и footer)
   * - `split`: Для приложений с двумя панелями (редакторы, сравнение)
   * - `tabbed`: Для приложений с вкладками (header с табами, переключаемый контент)
   * @type {'dashboard'|'content'|'minimal'|'split'|'tabbed'}
   * @default 'dashboard'
   * @category Layout
   */
  variant: {
    type: String,
    default: "dashboard",
    validator: (v) => ["dashboard", "content", "minimal", "split", "tabbed"].includes(v),
  },
  /**
   * Режим отображения сайдбара.
   * - `overlay`: Сайдбар накладывается поверх контента с backdrop
   * - `push`: Сайдбар сдвигает контент вправо
   * - `static`: Сайдбар в обычном потоке документа
   * @type {'overlay'|'push'|'static'}
   * @default 'static'
   * @category Sidebar
   */
  sidebarMode: {
    type: String,
    default: "static",
    validator: (v) => ["overlay", "push", "static"].includes(v),
  },
  /**
   * Свернут ли сайдбар. В свернутом состоянии отображаются только иконки.
   * @type {boolean}
   * @default false
   * @category Sidebar
   */
  sidebarCollapsed: { type: Boolean, default: false },
  /**
   * Ширина сайдбара в пикселях, когда он развернут.
   * @type {number}
   * @default 256
   * @category Sidebar
   */
  sidebarWidth: { type: Number, default: 256 },
  /**
   * Ширина сайдбара в пикселях, когда он свернут.
   * @type {number}
   * @default 64
   * @category Sidebar
   */
  sidebarCollapsedWidth: { type: Number, default: 64 },
  /**
   * Показывать сайдбар на мобильных устройствах.
   * По умолчанию сайдбар скрыт на мобильных (кроме overlay режима).
   * @type {boolean}
   * @default false
   * @category Sidebar
   */
  showSidebarOnMobile: { type: Boolean, default: false },
  /**
   * Уровень размытия backdrop для overlay режима.
   * Используется только когда sidebarMode === "overlay".
   * @type {'none'|'sm'|'md'|'lg'|'xl'}
   * @default 'sm'
   * @category Sidebar
   */
  backdropBlur: { type: String, default: "sm", validator: (v) => ["none", "sm", "md", "lg", "xl"].includes(v) },
  /**
   * Отступы header секции. Использует систему spacing из useSpacing composable.
   * @type {'none'|'xs'|'sm'|'md'|'lg'|'xl'}
   * @default ''
   * @category Spacing
   */
  headerPadding: { type: String, default: "" },
  /**
   * Отступы контентной области. Использует систему spacing из useSpacing composable.
   * @type {'none'|'xs'|'sm'|'md'|'lg'|'xl'}
   * @default ''
   * @category Spacing
   */
  contentPadding: { type: String, default: "" },
  /**
   * Отступы sidebar секции. Использует систему spacing из useSpacing composable.
   * @type {'none'|'xs'|'sm'|'md'|'lg'|'xl'}
   * @default ''
   * @category Spacing
   */
  sidebarPadding: { type: String, default: "" },
  /**
   * Отступы footer секции. Использует систему spacing из useSpacing composable.
   * @type {'none'|'xs'|'sm'|'md'|'lg'|'xl'}
   * @default ''
   * @category Spacing
   */
  footerPadding: { type: String, default: "" },
});

const emit = defineEmits(["sidebar-toggle", "sidebar-collapse"]);

// Флаг для отключения backdrop в Storybook документации
const isStorybookDocs = ref(false);

/**
 * Data-атрибуты для компонента
 * 
 * @description
 * Генерирует data-атрибуты для отладки и тестирования используя useCustomDataAttributes.
 * 
 * @returns {Object} Объект с data-атрибутами
 */
const dataAttrs = computed(() =>
  useCustomDataAttributes({
    component: "DXAppLayout",
    variant: props.variant,
    sidebarMode: props.sidebarMode,
    sidebarCollapsed: props.sidebarCollapsed,
  })
);

onMounted(() => {
  // Проверяем, находимся ли мы в Storybook документации
  if (typeof window !== 'undefined') {
    isStorybookDocs.value = !!(
      document.querySelector('.docs-story') || 
      document.querySelector('[data-storybook-docs]') ||
      document.querySelector('.sbdocs') ||
      window.location.pathname.includes('/docs/')
    );
  }
});

/**
 * Показывать ли backdrop
 * 
 * @description
 * Backdrop показывается только в overlay режиме и когда сайдбар открыт на мобильных.
 * В Storybook документации backdrop отключается, чтобы не перекрывать документацию.
 * 
 * @returns {boolean} true если нужно показать backdrop
 */
const showBackdrop = computed(() => {
  // Отключаем backdrop в Storybook документации
  if (isStorybookDocs.value) {
    return false;
  }
  
  return props.sidebarMode === "overlay" && !props.sidebarCollapsed;
});

/**
 * Классы для основного контейнера layout
 * 
 * @description
 * Вычисляет классы для корневого контейнера DXAppLayout с учетом варианта.
 * 
 * @returns {Array} Массив классов
 */
const layoutClasses = computed(() =>
  useClassComposition(
    "flex flex-col h-screen w-full bg-slate-50",
    {
      // Для content варианта - более светлый фон для читаемости
      "bg-white": props.variant === "content",
      // Для minimal варианта - минималистичный фон
      "bg-slate-50": props.variant === "minimal",
    }
  )
);

/**
 * Классы для header
 * 
 * @description
 * Вычисляет классы для header секции с учетом варианта layout и отступов.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() => {
  const paddingClass = props.headerPadding ? useSpacing(props.headerPadding, 'padding') : null;
  return useClassComposition(
    "flex-shrink-0 z-30",
    paddingClass
  );
});

/**
 * Классы для sidebar
 * 
 * @description
 * Вычисляет классы для sidebar в зависимости от режима, состояния и варианта layout.
 * 
 * @returns {Array} Массив классов
 */
const sidebarClasses = computed(() => {
  const paddingClass = props.sidebarPadding ? useSpacing(props.sidebarPadding, 'padding') : null;
  
  return useClassComposition(
    "flex-shrink-0 bg-white border-r border-slate-200 transition-all duration-300 z-20",
    paddingClass,
    {
      // Overlay режим: фиксированная позиция
      "fixed inset-y-0 left-0": props.sidebarMode === "overlay",
      // Push режим: обычный поток, но с transition
      "relative": props.sidebarMode === "push",
      // Static режим: обычный поток
      "relative": props.sidebarMode === "static",
      // Скрытие на мобильных (если не showSidebarOnMobile)
      "hidden md:flex": !props.showSidebarOnMobile && props.sidebarMode !== "overlay",
      // Показ на мобильных только в overlay режиме
      "md:flex": props.showSidebarOnMobile || props.sidebarMode === "overlay",
      // Для content и minimal вариантов sidebar скрыт по умолчанию
      "hidden": (props.variant === "content" || props.variant === "minimal") && props.sidebarMode !== "overlay",
      // Для content варианта sidebar всегда в overlay режиме
      "md:hidden": props.variant === "content" && props.sidebarMode === "overlay",
    }
  );
});

/**
 * Стили для sidebar
 * 
 * @description
 * Вычисляет ширину sidebar в зависимости от состояния (свернут/развернут).
 * 
 * @returns {Object} Объект со стилями
 */
const sidebarStyles = computed(() => {
  const width = props.sidebarCollapsed
    ? props.sidebarCollapsedWidth
    : props.sidebarWidth;

  return {
    width: `${width}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
  };
});

/**
 * Классы для основного контейнера (main container)
 * 
 * @description
 * Вычисляет классы для контейнера, содержащего sidebar и content.
 * 
 * @returns {Array} Массив классов
 */
const mainContainerClasses = computed(() =>
  useClassComposition(
    "flex flex-1 overflow-hidden",
    {
      // Для split варианта - горизонтальное разделение
      "flex-row": props.variant === "split",
    }
  )
);

/**
 * Классы для контентной области
 * 
 * @description
 * Вычисляет классы для main контентной области с учетом варианта layout и отступов.
 * В push режиме добавляется margin-left для компенсации sidebar.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() => {
  const paddingClass = props.contentPadding ? useSpacing(props.contentPadding, 'padding') : null;
  
  return useClassComposition(
    "flex-1 overflow-y-auto",
    paddingClass,
    {
      // В push режиме добавляем margin для компенсации sidebar
      "transition-all duration-300": props.sidebarMode === "push",
      // Для content варианта - максимальная ширина для читаемости
      "max-w-full": props.variant === "content",
    }
  );
});

/**
 * Классы для split контентных областей
 * 
 * @description
 * Вычисляет классы для левой и правой панелей в split варианте.
 * 
 * @returns {Array} Массив классов
 */
const splitContentClasses = computed(() => {
  const paddingClass = props.contentPadding ? useSpacing(props.contentPadding, 'padding') : null;
  
  return useClassComposition(
    "flex-1 overflow-y-auto",
    paddingClass
  );
});

/**
 * Стили для split контентных областей
 * 
 * @description
 * Вычисляет стили для split панелей (равная ширина по умолчанию).
 * 
 * @returns {Object} Объект со стилями
 */
const splitContentStyles = computed(() => {
  return {
    minWidth: 0, // Позволяет панелям сжиматься
  };
});

/**
 * Стили для контентной области
 * 
 * @description
 * Вычисляет margin-left для контентной области в push режиме.
 * 
 * @returns {Object} Объект со стилями
 */
const contentStyles = computed(() => {
  if (props.sidebarMode === "push" && !props.sidebarCollapsed) {
    return {
      marginLeft: `${props.sidebarWidth}px`,
    };
  }
  if (props.sidebarMode === "push" && props.sidebarCollapsed) {
    return {
      marginLeft: `${props.sidebarCollapsedWidth}px`,
    };
  }
  return {};
});

/**
 * Классы для footer
 * 
 * @description
 * Вычисляет классы для footer секции с учетом отступов.
 * 
 * @returns {Array} Массив классов
 */
const footerClasses = computed(() => {
  const paddingClass = props.footerPadding ? useSpacing(props.footerPadding, 'padding') : null;
  
  return useClassComposition(
    "flex-shrink-0",
    paddingClass
  );
});

/**
 * Классы для дефолтного контента (когда content slot не указан)
 * 
 * @description
 * Вычисляет классы для дефолтного контента с использованием useSpacing.
 * 
 * @returns {Array} Массив классов
 */
const defaultContentClasses = computed(() => {
  return useClassComposition(
    useSpacing(props.contentPadding || "md", "padding")
  );
});

/**
 * Закрытие sidebar
 * 
 * @description
 * Закрывает sidebar (для overlay режима).
 */
function closeSidebar() {
  if (props.sidebarMode === "overlay") {
    emit("sidebar-toggle", false);
  }
}

// Отслеживание изменений sidebarCollapsed
watch(
  () => props.sidebarCollapsed,
  (collapsed) => {
    emit("sidebar-collapse", collapsed);
  }
);
</script>

