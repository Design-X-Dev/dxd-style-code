<template>
  <Teleport to="body">
    <Transition v-bind="FADE_TRANSITION">
      <div
        v-if="show"
        :class="backdropClasses"
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

// Fade transition configuration (Tailwind classes)
const FADE_TRANSITION = {
  enterActiveClass: 'transition-opacity duration-200 ease-out',
  enterFromClass: 'opacity-0',
  enterToClass: 'opacity-100',
  leaveActiveClass: 'transition-opacity duration-200 ease-in',
  leaveFromClass: 'opacity-100',
  leaveToClass: 'opacity-0',
};

const props = defineProps({
  /** Показать/скрыть backdrop */
  show: { type: Boolean, default: false },
  /** Уровень размытия: none | sm | md | lg | xl */
  blur: { type: String, default: 'sm', validator: (v) => ['none', 'sm', 'md', 'lg', 'xl'].includes(v)},
  /** Цвет фона (Tailwind класс): bg-slate-900/40 | bg-black/50 */
  backgroundColor: { type: String, default: 'bg-slate-900/40' },
  /** z-index: 0 | 10 | 20 | 30 | 40 | 50 | auto */
  zIndex: { 
    type: String, 
    default: '50',
    validator: (v) => ['0', '10', '20', '30', '40', '50', 'auto'].includes(v)
  },
  /** Можно ли закрыть кликом */
  dismissible: { type: Boolean, default: true },
  /** Блокировать скролл body */
  lockScroll: { type: Boolean, default: true }
});

const emit = defineEmits(['click', 'close']);

// Blur classes mapping
const BLUR_CLASSES = {
  none: 'backdrop-blur-none',
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
};

// Z-index classes mapping
const Z_INDEX_CLASSES = {
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50',
  'auto': 'z-auto',
};

const backdropClasses = computed(() => [
  'fixed inset-0',
  BLUR_CLASSES[props.blur],
  props.backgroundColor || 'bg-slate-900/40',
  Z_INDEX_CLASSES[props.zIndex] || 'z-50',
  props.dismissible && 'cursor-pointer',
]);

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
    document.body.classList.toggle('overflow-hidden', isShown);
  }
}, { immediate: true });

onBeforeUnmount(() => {
  if (props.lockScroll) {
    document.body.classList.remove('overflow-hidden');
  }
});
</script>

