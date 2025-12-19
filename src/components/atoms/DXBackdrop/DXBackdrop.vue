<template>
  <Teleport to="body">
    <Transition :name="transitionName">
      <div
        v-if="show"
        :class="backdropClasses"
        :style="backdropStyles"
        @click="handleClick"
        data-component="DXBackdrop"
        :data-blur="blur"
        :data-dismissible="dismissible"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, onBeforeUnmount } from 'vue';

const props = defineProps({
  /** Показать/скрыть backdrop */
  show: { 
    type: Boolean, 
    default: false 
  },
  
  /** Уровень размытия: none | sm | md | lg | xl | 2xl | 3xl */
  blur: { 
    type: String, 
    default: 'sm',
    validator: (v) => ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(v)
  },
  
  /** Цвет фона: slate-900 | gray-900 | black | white */
  color: {
    type: String,
    default: 'slate-900'
  },
  
  /** Прозрачность фона: 0-100 */
  opacity: {
    type: [String, Number],
    default: '40'
  },
  
  /** z-index */
  zIndex: {
    type: [String, Number],
    default: '50'
  },
  
  /** Можно ли закрыть кликом */
  dismissible: {
    type: Boolean,
    default: true
  },
  
  /** Тип анимации: fade | none */
  transition: {
    type: String,
    default: 'fade',
    validator: (v) => ['fade', 'none'].includes(v)
  },
  
  /** Блокировать скролл body */
  lockScroll: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['click', 'close']);

// Blur classes mapping
const BLUR_CLASSES = {
  none: '',
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
  '2xl': 'backdrop-blur-2xl',
  '3xl': 'backdrop-blur-3xl',
};

const backdropClasses = computed(() => [
  'fixed inset-0',
  BLUR_CLASSES[props.blur],
  props.dismissible && 'cursor-pointer',
]);

const backdropStyles = computed(() => ({
  backgroundColor: getBackgroundColor(),
  zIndex: props.zIndex,
}));

const getBackgroundColor = () => {
  // Map common color names to rgba values
  const colorMap = {
    'slate-900': 'rgb(15 23 42 / ' + props.opacity + '%)',
    'gray-900': 'rgb(17 24 39 / ' + props.opacity + '%)',
    'black': 'rgb(0 0 0 / ' + props.opacity + '%)',
    'white': 'rgb(255 255 255 / ' + props.opacity + '%)',
  };
  
  return colorMap[props.color] || colorMap['slate-900'];
};

const transitionName = computed(() => 
  props.transition === 'fade' ? 'backdrop-fade' : ''
);

const handleClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('click', event);
    if (props.dismissible) {
      emit('close');
    }
  }
};

// Lock/unlock body scroll
watch(() => props.show, (isShown) => {
  if (props.lockScroll) {
    if (isShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}, { immediate: true });

onBeforeUnmount(() => {
  if (props.lockScroll) {
    document.body.style.overflow = '';
  }
});
</script>

<style scoped>
.backdrop-fade-enter-active,
.backdrop-fade-leave-active {
  transition: opacity 200ms ease;
}

.backdrop-fade-enter-from,
.backdrop-fade-leave-to {
  opacity: 0;
}
</style>

