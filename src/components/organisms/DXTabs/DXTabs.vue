<template>
  <div 
    ref="tabsContainer"
    :class="containerClasses" 
    data-component="DXTabs"
    :data-variant="variant"
    :data-align="align"
  >
    <!-- Tabs -->
    <button
      v-for="tab in tabs"
      :key="tab.value"
      :class="getTabClasses(tab)"
      @click="selectTab(tab.value)"
      @mouseenter="hoveredTab = tab.value"
      @mouseleave="hoveredTab = null"
      type="button"
      :aria-selected="modelValue === tab.value"
      role="tab"
      class="group"
    >
      <span class="flex items-center gap-2">
        <!-- Icon -->
        <DXIcon 
          v-if="tab.icon" 
          :icon="tab.icon" 
          size="sm" 
          :animation="getIconAnimation(tab)"
          :groupHover="true"
          class="flex-shrink-0"
        />
        
        <!-- Label (hidden in compact mode when not active/hovered) -->
        <span
          v-show="!isCompactAndHidden(tab)"
          class="tab-label whitespace-nowrap"
        >
          {{ tab.label }}
        </span>
        
        <!-- Count Badge -->
        <span
          v-if="tab.count !== undefined && shouldShowBadge(tab)"
          class="tab-badge inline-flex items-center justify-center min-w-[24px] px-2 py-1 text-[11px] rounded-full flex-shrink-0"
          :class="getBadgeClasses(tab)"
        >
          {{ tab.count }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';

const props = defineProps({
  /** Текущее значение (v-model) */
  modelValue: {
    type: [String, Number],
  },
  
  /** Табы: [{ value, label, icon?, count?, iconAnimation? }] */
  tabs: {
    type: Array,
    default: () => [],
  },
  
  /** Вариант отображения */
  variant: {
    type: String,
    default: 'buttons',
    validator: (v) => ['buttons', 'tabs-top', 'tabs-bottom'].includes(v),
  },
  
  /** Выравнивание табов */
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center', 'right'].includes(v),
  },
  
  /** Включить прокрутку при overflow */
  scrollable: {
    type: Boolean,
    default: true,
  },
  
  /** Компактный режим */
  compact: {
    type: Boolean,
    default: false,
  },
  
  /** Что показывать в компактном режиме */
  compactDisplay: {
    type: String,
    default: 'icon-badge',
    validator: (v) => ['icon', 'icon-badge'].includes(v),
  },
  
  /** Анимация иконок: none | wiggle | scale | rotate */
  iconAnimation: {
    type: String,
    default: 'wiggle',
  },
  
  /** Анимировать только активную иконку */
  animateActiveOnly: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue']);

// Refs
const tabsContainer = ref(null);
const hoveredTab = ref(null);

// Container classes
const containerClasses = computed(() => [
  'dx-tabs',
  'flex',
  'items-center',
  
  // Variant
  props.variant === 'buttons' && 'flex-wrap gap-2',
  props.variant === 'tabs-top' && 'border-b border-slate-200',
  props.variant === 'tabs-bottom' && 'border-t border-slate-200',
  
  // Align
  props.align === 'left' && 'justify-start',
  props.align === 'center' && 'justify-center',
  props.align === 'right' && 'justify-end',
  
  // Scrollable
  props.scrollable && 'overflow-x-auto',
  props.scrollable && 'scroll-smooth',
]);

// Tab classes
const getTabClasses = (tab) => {
  const isActive = props.modelValue === tab.value;
  const isHovered = hoveredTab.value === tab.value;
  const isCompact = props.compact && !isActive && !isHovered;
  
  return [
    'tab-btn',
    'text-sm',
    'font-semibold',
    'transition-all',
    'duration-200',
    'flex-shrink-0',
    
    // Variant base styles
    props.variant === 'buttons' && 'px-3 py-2.5 rounded-xl border',
    props.variant === 'tabs-top' && [
      'px-4 py-2.5 rounded-t-xl border-x border-t',
      isActive ? '-mb-px' : 'border-b-0',
    ],
    props.variant === 'tabs-bottom' && [
      'px-4 py-2.5 rounded-b-xl border-x border-b',
      isActive ? '-mt-px' : 'border-t-0',
    ],
    
    // Active/Inactive for buttons variant
    props.variant === 'buttons' && isActive && 'bg-slate-800 text-white border-slate-800',
    props.variant === 'buttons' && !isActive && 'border-slate-200 text-slate-700 hover:border-slate-300',
    
    // Active/Inactive for tabs variants
    (props.variant === 'tabs-top' || props.variant === 'tabs-bottom') && isActive && [
      'bg-white text-slate-900 border-slate-200',
      props.variant === 'tabs-top' && 'border-b-white',
      props.variant === 'tabs-bottom' && 'border-t-white',
    ],
    (props.variant === 'tabs-top' || props.variant === 'tabs-bottom') && !isActive && [
      'bg-slate-50 text-slate-600 border-slate-200',
      'hover:bg-slate-100 hover:text-slate-900',
    ],
    
    // Compact mode
    isCompact && 'px-2',
  ];
};

// Badge classes
const getBadgeClasses = (tab) => {
  const isActive = props.modelValue === tab.value;
  
  if (props.variant === 'buttons') {
    return isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700';
  }
  
  return isActive ? 'bg-slate-200 text-slate-900' : 'bg-slate-200 text-slate-600';
};

// Check if tab is active
const isActive = (tab) => props.modelValue === tab.value;

// Check if tab is hovered
const isHovered = (tab) => hoveredTab.value === tab.value;

// Check if compact and should hide label
const isCompactAndHidden = (tab) => {
  if (!props.compact) return false;
  if (isActive(tab)) return false;
  if (isHovered(tab)) return false;
  return true;
};

// Check if should show badge in compact mode
const shouldShowBadge = (tab) => {
  if (!props.compact) return true;
  if (props.compactDisplay === 'icon') return false;
  if (props.compactDisplay === 'icon-badge') {
    // Show badge always in compact mode if compactDisplay is icon-badge
    return true;
  }
  return true;
};

// Get icon animation for tab
const getIconAnimation = (tab) => {
  // If tab has its own animation
  if (tab.iconAnimation) return tab.iconAnimation;
  
  // If tab is hovered - always animate
  if (isHovered(tab)) return props.iconAnimation;
  
  // If animate only active tab
  if (props.animateActiveOnly) {
    return isActive(tab) ? props.iconAnimation : 'none';
  }
  
  // Global animation
  return props.iconAnimation;
};

// Select tab
const selectTab = (value) => {
  emit('update:modelValue', value);
};

// Scroll to active tab when it changes
watch(() => props.modelValue, async () => {
  if (props.scrollable && tabsContainer.value) {
    await nextTick();
    const activeTab = tabsContainer.value.querySelector('.tab-btn[aria-selected="true"]');
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }
}, { immediate: true });
</script>

<style scoped>
.dx-tabs {
  position: relative;
}

/* Скрытие скроллбара для более чистого вида */
.dx-tabs::-webkit-scrollbar {
  height: 4px;
}

.dx-tabs::-webkit-scrollbar-track {
  background: transparent;
}

.dx-tabs::-webkit-scrollbar-thumb {
  background: rgb(203 213 225);
  border-radius: 2px;
}

.dx-tabs::-webkit-scrollbar-thumb:hover {
  background: rgb(148 163 184);
}

/* Плавные переходы для компактного режима */
.tab-btn {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.tab-label {
  transition: opacity 0.2s ease;
}

/* Tabs variants - дополнительные стили */
.tab-btn[data-variant="tabs-top"],
.tab-btn[data-variant="tabs-bottom"] {
  position: relative;
}
</style>
