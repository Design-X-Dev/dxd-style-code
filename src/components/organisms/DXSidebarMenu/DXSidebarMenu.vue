<template>
  <aside 
    :class="sidebarClasses"
    data-component="DXSidebarMenu"
    :data-compact="compact"
  >
    <!-- Заголовок -->
    <div v-if="shouldShowHeader" :class="headerClasses">
      <slot v-if="!compact" name="header">
        <h2 v-if="title" :class="headerTitleClasses">{{ title }}</h2>
      </slot>
      
      <!-- Кнопка переключения compact режима -->
      <button
        v-if="collapsible"
        type="button"
        class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
        :class="{ 'ml-auto': !compact }"
        @click="toggleCompact"
        :title="compact ? 'Развернуть' : 'Свернуть'"
      >
        <DXIcon 
          :icon="compact ? ChevronRightIcon : ChevronLeftIcon" 
          size="md"
          animation="scale"
          class="text-slate-600"
        />
      </button>
    </div>

    <!-- Поиск -->
    <div v-if="searchable && !compact" class="px-4 pb-4">
      <DXInput
        v-model="searchQuery"
        placeholder="Поиск..."
        size="sm"
      >
        <template #prefix>
          <DXIcon :icon="MagnifyingGlassIcon" size="sm" class="text-slate-400" />
        </template>
      </DXInput>
    </div>

    <!-- Меню -->
    <nav :class="menuClasses">
      <div 
        v-for="(section, sectionIndex) in filteredSections" 
        :key="sectionIndex"
        class="space-y-1"
      >
        <!-- Заголовок секции -->
        <div 
          v-if="section.title && !compact" 
          class="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider"
        >
          {{ section.title }}
        </div>

        <!-- Разделитель для compact режима -->
        <DXDivider v-if="section.title && compact" spacing="sm" />

        <!-- Пункты меню -->
        <DXSidebarMenuItem
          v-for="(item, itemIndex) in section.items"
          :key="itemIndex"
          :item="item"
          :active="isItemActive(item)"
          :compact="compact"
          @click="handleItemClick"
          @child-click="handleItemClick"
        />
      </div>
    </nav>

    <!-- Футер -->
    <div v-if="$slots.footer && !compact" :class="footerClasses">
      <slot name="footer" />
    </div>
  </aside>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline';
import { useMenu } from '@/composables/useMenu';
import DXSidebarMenuItem from './DXSidebarMenuItem.vue';
import DXInput from '../../atoms/DXInput/DXInput.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import DXDivider from '../../atoms/DXDivider/DXDivider.vue';

const $slots = useSlots();

const props = defineProps({
  /** Заголовок сайдбара */
  title: {
    type: String,
    default: ''
  },
  /** Секции меню: [{ title?, items: [{ label, icon?, to?, href?, badge?, children? }] }] */
  sections: {
    type: Array,
    required: true
  },
  /** Текущий активный элемент (path или id) */
  activeItem: {
    type: String,
    default: ''
  },
  /** Компактный режим (только иконки) */
  compact: {
    type: Boolean,
    default: false
  },
  /** Можно ли сворачивать */
  collapsible: {
    type: Boolean,
    default: true
  },
  /** Показывать поиск */
  searchable: {
    type: Boolean,
    default: false
  },
  /** Показывать header (если undefined - автоматически) */
  showHeader: {
    type: Boolean,
    default: undefined
  },
  /** Размер header: sm, md, lg */
  headerSize: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  /** Ширина: sm | md | lg | full */
  width: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  /** Фиксированная позиция */
  fixed: {
    type: Boolean,
    default: false
  },
  /** Показывать бордер справа */
  bordered: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['item-click', 'update:compact']);

const {
  searchQuery,
  internalCompact,
  compact,
  filteredSections,
  isItemActive,
  toggleCompact,
  handleItemClick
} = useMenu(props, emit);

// Размеры header
const HEADER_SIZE_CLASSES = {
  sm: {
    container: 'px-3 py-2',
    title: 'text-base'
  },
  md: {
    container: 'px-4 py-5',
    title: 'text-lg'
  },
  lg: {
    container: 'px-6 py-8',
    title: 'text-xl'
  }
};

// Автоматическое определение видимости header
const shouldShowHeader = computed(() => {
  // Если явно указано showHeader, используем его
  if (props.showHeader !== undefined) {
    return props.showHeader;
  }
  
  // Иначе показываем если есть контент
  return !!(
    $slots.header || 
    props.title || 
    props.collapsible
  );
});

const widthClasses = {
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-96',
  full: 'w-full'
};

const sidebarClasses = computed(() => [
  'flex flex-col bg-white transition-all duration-300',
  internalCompact.value ? 'w-20' : widthClasses[props.width],
  props.fixed && 'fixed top-0 left-0 h-screen',
  props.bordered && 'border-r border-slate-200',
  'shadow-sm'
]);

const headerClasses = computed(() => [
  'flex items-center gap-2 border-b border-slate-200 flex-shrink-0',
  internalCompact.value 
    ? 'justify-center px-2 py-3' 
    : HEADER_SIZE_CLASSES[props.headerSize].container
]);

const headerTitleClasses = computed(() => [
  'font-bold text-slate-900',
  HEADER_SIZE_CLASSES[props.headerSize].title
]);

const menuClasses = computed(() => [
  'flex-1 overflow-y-auto py-4 px-3 space-y-6',
  internalCompact.value && 'px-2'
]);

const footerClasses = computed(() => [
  'px-4 py-4 border-t border-slate-200 flex-shrink-0',
  internalCompact.value && 'px-2'
]);
</script>

<style scoped>
/* Стили для скроллбара */
nav::-webkit-scrollbar {
  width: 6px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>

