<template>
  <DXCard 
    :padding="cardPadding"
    :variant="cardVariant"
    :class="cardClasses"
    data-component="DXMenu"
    :data-compact="compact"
    :data-direction="direction"
  >
    <div :class="containerClasses">
      <!-- Заголовок -->
      <div v-if="shouldShowHeader" :class="headerClasses">
        <!-- Horizontal режим: все в одну строку -->
        <template v-if="direction === 'horizontal'">
          <slot v-if="!compact" name="header">
            <h2 v-if="title" :class="headerTitleClasses">{{ title }}</h2>
          </slot>
          
          <!-- Search inline для horizontal -->
          <DXInput 
            v-if="searchable && !compact" 
            v-model="searchQuery" 
            placeholder="Поиск..." 
            size="sm"
            class="max-w-xs"
          >
            <template #prefix>
              <DXIcon :icon="MagnifyingGlassIcon" size="sm" class="text-slate-400" />
            </template>
          </DXInput>
          
          <button
            v-if="collapsible"
            type="button"
            class="p-2 rounded-lg hover:bg-slate-100 transition-colors ml-auto"
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
        </template>
        
        <!-- Vertical режим: текущий layout -->
        <template v-else>
          <slot v-if="!compact" name="header">
            <h2 v-if="title" :class="headerTitleClasses">{{ title }}</h2>
          </slot>
          
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
        </template>
      </div>

      <!-- Поиск (только для vertical) -->
      <div v-if="searchable && !compact && direction === 'vertical'" class="px-4 pb-4">
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
      <nav :class="navClasses">
        <!-- Horizontal режим: items в строку без section titles -->
        <template v-if="direction === 'horizontal'">
          <template v-for="(section, sectionIndex) in filteredSections" :key="sectionIndex">
            <DXSidebarMenuItem
              v-for="(item, itemIndex) in section.items"
              :key="itemIndex"
              :item="item"
              :active="isItemActive(item)"
              :compact="false"
              :horizontal="true"
              @click="handleItemClick"
              @child-click="handleItemClick"
            />
          </template>
        </template>
        
        <!-- Vertical режим: текущий layout -->
        <template v-else>
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
        </template>
      </nav>

      <!-- Футер (только для vertical) -->
      <div v-if="$slots.footer && !compact && direction === 'vertical'" :class="footerClasses">
        <slot name="footer" />
      </div>
    </div>
  </DXCard>
</template>

<script setup>
import { computed, useSlots } from 'vue';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline';
import { useMenu } from '@/composables/useMenu';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXSidebarMenuItem from '../../organisms/DXSidebarMenu/DXSidebarMenuItem.vue';
import DXInput from '../DXInput/DXInput.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import DXDivider from '../../atoms/DXDivider/DXDivider.vue';

const $slots = useSlots();

const props = defineProps({
  /** Заголовок меню */
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
    default: false
  },
  /** Показывать поиск */
  searchable: {
    type: Boolean,
    default: false
  },
  /** Направление: vertical, horizontal */
  direction: {
    type: String,
    default: 'vertical',
    validator: (v) => ['vertical', 'horizontal'].includes(v)
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
  /** Padding карточки: none, sm, md, lg */
  cardPadding: {
    type: String,
    default: 'none',
    validator: (v) => ['none', 'sm', 'md', 'lg'].includes(v)
  },
  /** Вариант карточки: default, bordered, elevated, flat */
  cardVariant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'bordered', 'elevated', 'flat'].includes(v)
  }
});

const emit = defineEmits(['item-click', 'update:compact']);

const {
  searchQuery,
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

const containerClasses = computed(() => {
  if (props.direction === 'horizontal') {
    return 'flex flex-col w-full';
  }
  return 'flex flex-col h-full';
});

const cardClasses = computed(() => [
  'transition-all duration-300',
  compact.value && props.direction === 'vertical' ? 'w-auto' : ''
]);

const headerClasses = computed(() => {
  const base = 'flex items-center gap-2 border-b border-slate-200 flex-shrink-0';
  
  if (props.direction === 'horizontal') {
    return [base, 'px-4 py-3'];
  }
  
  return [
    base,
    compact.value 
      ? 'justify-center px-2 py-3' 
      : HEADER_SIZE_CLASSES[props.headerSize].container
  ];
});

const headerTitleClasses = computed(() => [
  'font-bold text-slate-900',
  props.direction === 'horizontal' ? 'text-base' : HEADER_SIZE_CLASSES[props.headerSize].title
]);

const navClasses = computed(() => {
  if (props.direction === 'horizontal') {
    return 'flex flex-row items-center gap-1 px-4 py-2 overflow-visible';
  }
  
  return [
    'flex-1 overflow-y-auto py-4 space-y-6',
    compact.value ? 'px-1' : 'px-3'
  ];
});

const footerClasses = computed(() => [
  'px-4 py-4 border-t border-slate-200 flex-shrink-0',
  compact.value && 'px-2'
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

