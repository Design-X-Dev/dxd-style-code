<template>
  <div data-component="DXSidebarMenuItem">
    <!-- Horizontal режим с submenu: используем DXDropdown -->
    <DXDropdown v-if="horizontal && item.children" position="bottom" width="auto">
      <template #trigger>
        <DXIcon 
          v-if="item.icon" 
          :icon="item.icon" 
          size="md"
          animation="scale"
          :class="iconClasses"
        />
        <span class="text-sm font-medium">{{ item.label }}</span>
        <DXBadge 
          v-if="item.badge" 
          :variant="item.badgeVariant || 'info'"
          size="sm"
          class="ml-2"
        >
          {{ item.badge }}
        </DXBadge>
      </template>
      
      <DXDropdownItem
        v-for="(child, index) in item.children"
        :key="index"
        :icon="child.icon"
        @click="handleChildClick(child)"
      >
        {{ child.label }}
        <template v-if="child.badge" #badge>
          <DXBadge 
            :variant="child.badgeVariant || 'info'"
            size="sm"
          >
            {{ child.badge }}
          </DXBadge>
        </template>
      </DXDropdownItem>
    </DXDropdown>
    
    <!-- Обычный пункт меню (без submenu или не horizontal) -->
    <component
      v-else-if="!item.children"
      :is="getLinkComponent"
      :to="item.to"
      :href="item.href"
      :class="itemClasses"
      @click="handleClick"
    >
      <div :class="['flex items-center flex-1', horizontal ? 'gap-2' : 'gap-3']">
        <!-- Иконка -->
        <DXIcon 
          v-if="item.icon" 
          :icon="item.icon" 
          size="md"
          animation="scale"
          :class="iconClasses"
        />
        
        <!-- Текст -->
        <span v-if="!compact" :class="['flex-1 font-medium text-left', horizontal ? 'text-sm' : 'text-sm']">
          {{ item.label }}
        </span>
      </div>
      
      <!-- Счетчик/Badge -->
      <DXBadge 
        v-if="item.badge && !compact" 
        :variant="item.badgeVariant || 'info'"
        size="sm"
      >
        {{ item.badge }}
      </DXBadge>
    </component>

    <!-- Пункт с подменю (только для vertical) -->
    <div v-else>
      <button
        type="button"
        :class="itemClasses"
        @click="toggleSubmenu"
      >
        <div class="flex items-center gap-3 flex-1">
          <DXIcon 
            v-if="item.icon" 
            :icon="item.icon" 
            size="md"
            animation="scale"
            :class="iconClasses"
          />
          <span v-if="!compact" class="flex-1 text-sm font-medium text-left">
            {{ item.label }}
          </span>
        </div>
        
        <DXIcon 
          v-if="!compact"
          :icon="ChevronDownIcon" 
          size="sm"
          animation="none"
          class="text-slate-400 transition-transform duration-200"
          :class="{ 'rotate-180': submenuOpen }"
        />
      </button>

            <!-- Подменю -->
            <Transition v-bind="collapseTransition">
        <div v-show="submenuOpen && !compact" class="overflow-hidden">
          <div class="pl-11 py-1 space-y-1">
            <component
              v-for="(child, index) in item.children"
              :key="index"
              :is="getChildLinkComponent(child)"
              :to="child.to"
              :href="child.href"
              :class="getChildItemClasses(child)"
              @click="handleChildClick(child)"
            >
              {{ child.label }}
              <DXBadge 
                v-if="child.badge" 
                :variant="child.badgeVariant || 'info'"
                size="sm"
                class="ml-auto"
              >
                {{ child.badge }}
              </DXBadge>
            </component>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { useTransition } from "@/composables/useAnimation";
import DXBadge from '../../atoms/DXBadge/DXBadge.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import DXDropdown from '../../organisms/DXDropdown/DXDropdown.vue';
import DXDropdownItem from '../../atoms/DXDropdownItem/DXDropdownItem.vue';

const collapseTransition = useTransition('collapse');

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  compact: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'child-click']);

const submenuOpen = ref(false);

// Inject router check
const hasRouter = inject('hasRouter', false);

const toggleSubmenu = () => {
  submenuOpen.value = !submenuOpen.value;
};

const getLinkComponent = computed(() => {
  if (props.item.to && hasRouter) return 'router-link';
  if (props.item.href) return 'a';
  return 'button';
});

const getChildLinkComponent = (child) => {
  if (child.to && hasRouter) return 'router-link';
  if (child.href) return 'a';
  return 'button';
};

const itemClasses = computed(() => {
  const base = 'flex items-center transition-all duration-200 text-left';
  
  if (props.horizontal) {
    // Горизонтальный: inline, меньше padding
    return [
      base,
      'gap-2 px-3 py-2 rounded-lg whitespace-nowrap',
      props.active 
        ? 'bg-slate-900 text-white shadow-sm' 
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
      props.item.disabled && 'opacity-50 cursor-not-allowed'
    ];
  }
  
  // Вертикальный: текущие классы
  return [
    base,
    'w-full gap-3 px-4 py-2.5 rounded-xl',
    props.active
      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    props.item.disabled && 'opacity-50 cursor-not-allowed',
    props.compact && 'justify-center px-2'
  ];
});

const iconClasses = computed(() => [
  'flex-shrink-0',
  props.active ? 'text-white' : 'text-slate-400'
]);

const getChildItemClasses = (child) => [
  'w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors text-left',
  child.active
    ? 'bg-slate-100 text-slate-900 font-medium'
    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
];

const handleClick = (event) => {
  if (props.item.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', props.item, event);
};

const handleChildClick = (child) => {
  if (child.disabled) return;
  emit('child-click', child);
};
</script>

<style scoped>
button[type="button"]:not(:disabled),
a {
  cursor: pointer;
}
</style>

