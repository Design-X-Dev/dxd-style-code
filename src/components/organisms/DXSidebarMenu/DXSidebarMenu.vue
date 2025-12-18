<template>
  <aside 
    :class="sidebarClasses"
    data-component="DXSidebarMenu"
    :data-compact="compact"
  >
    <!-- Заголовок -->
    <div v-if="($slots.header || title || collapsible)" :class="headerClasses">
      <slot v-if="!compact" name="header">
        <h2 v-if="title" class="text-lg font-bold text-slate-900">{{ title }}</h2>
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
        <component 
          :is="compact ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon" 
          class="w-5 h-5 text-slate-600"
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
          <component :is="MagnifyingGlassIcon" class="w-4 h-4 text-slate-400" />
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
        <div v-if="section.title && compact" class="h-px bg-slate-200 my-2 mx-4" />

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
import { ref, computed, provide, onMounted } from 'vue';
import { 
  ChevronDoubleLeftIcon, 
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon 
} from '@heroicons/vue/24/outline';
import DXSidebarMenuItem from './DXSidebarMenuItem.vue';
import DXInput from '../../atoms/DXInput/DXInput.vue';

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

const searchQuery = ref('');
const internalCompact = ref(props.compact);

// Computed для использования в template
const compact = computed(() => internalCompact.value);

// Check if vue-router is available
let hasRouter = false;
onMounted(() => {
  try {
    // Try to detect router
    hasRouter = !!window?.$router || false;
  } catch (e) {
    hasRouter = false;
  }
});

provide('hasRouter', hasRouter);

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
  internalCompact.value ? 'justify-center px-2 py-3' : 'px-4 py-5'
]);

const menuClasses = computed(() => [
  'flex-1 overflow-y-auto py-4 px-3 space-y-6',
  internalCompact.value && 'px-2'
]);

const footerClasses = computed(() => [
  'px-4 py-4 border-t border-slate-200 flex-shrink-0',
  internalCompact.value && 'px-2'
]);

const filteredSections = computed(() => {
  if (!searchQuery.value.trim()) return props.sections;

  const query = searchQuery.value.toLowerCase();
  return props.sections
    .map(section => ({
      ...section,
      items: section.items.filter(item => {
        const labelMatch = item.label?.toLowerCase().includes(query);
        const childrenMatch = item.children?.some(child => 
          child.label?.toLowerCase().includes(query)
        );
        return labelMatch || childrenMatch;
      })
    }))
    .filter(section => section.items.length > 0);
});

const isItemActive = (item) => {
  if (!props.activeItem) return false;
  
  // Проверка основного элемента
  if (item.to === props.activeItem || item.id === props.activeItem) {
    return true;
  }
  
  // Проверка дочерних элементов
  if (item.children) {
    return item.children.some(child => 
      child.to === props.activeItem || child.id === props.activeItem
    );
  }
  
  return false;
};

const toggleCompact = () => {
  internalCompact.value = !internalCompact.value;
  emit('update:compact', internalCompact.value);
};

const handleItemClick = (item, event) => {
  emit('item-click', item, event);
};
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

