<template>
  <DXBackdrop 
    :show="open && variant !== 'half-right'"
    :blur="backdropBlur"
    :background-color="backdropBackgroundColor"
    :z-index="variant === 'half-right' ? '20' : '50'"
    :lock-scroll="backdropLockScroll"
    :dismissible="closable && variant !== 'half-right'"
    @close="$emit('close')"
  >
    <Transition :name="transitionName" @after-enter="$emit('opened')" @after-leave="$emit('closed')">
      <div 
        v-if="open" 
        :class="containerWrapperClass" 
        @click.self="closable && $emit('close')"
        data-component="DXModal" 
        :data-variant="variant"
      >
        <div :class="containerClass">
          <div class="flex items-center justify-between flex-shrink-0 mb-4 gap-4">
            <DXHeading level="3" size="lg" weight="semibold" color="default" class="flex-1">
              <slot name="title">Диалог</slot>
            </DXHeading>
            
            <!-- View Mode Switcher -->
            <div v-if="showModeSwitcher" class="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
              <button
                v-for="mode in viewModes"
                :key="mode.value"
                type="button"
                class="rounded-lg p-1.5 transition-colors"
                :class="variant === mode.value 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'"
                :title="mode.label"
                @click="handleVariantChange(mode.value)"
              >
                <component :is="mode.icon" class="h-4 w-4" />
              </button>
            </div>

            <DXCloseButton 
              v-if="closable" 
              size="md"
              variant="default"
              @click="$emit('close')"
            />
          </div>
          <div class="text-slate-700 overflow-y-auto flex-1 min-h-0">
            <slot />
          </div>
          <div v-if="$slots.actions" class="flex justify-end gap-2 flex-shrink-0 mt-4 pt-4 border-t border-slate-200">
            <slot name="actions" />
          </div>
        </div>
      </div>
    </Transition>
  </DXBackdrop>
</template>

<script setup>
import { computed } from "vue";
import {
  Squares2X2Icon,
  ArrowsPointingOutIcon,
  ViewColumnsIcon,
  RectangleGroupIcon,
} from "@heroicons/vue/24/outline";
import DXBackdrop from "../../atoms/DXBackdrop/DXBackdrop.vue";
import DXCloseButton from "../../molecules/DXCloseButton/DXCloseButton.vue";
import DXHeading from "../../atoms/DXHeading/DXHeading.vue";

const props = defineProps({
  /** Открыто/закрыто */
  open: { type: Boolean, default: false },
  /** Вариант: modal | fullscreen | sidebar-right | half-right */
  variant: { type: String, default: "modal" },
  /** Ширина (для modal): sm | md | lg | xl */
  width: { type: String, default: "md" },
  /** Можно ли закрыть */
  closable: { type: Boolean, default: true },
  /** Показывать переключатель режимов */
  showModeSwitcher: { type: Boolean, default: false },
  
  /** Размытие backdrop: none | sm | md | lg | xl */
  backdropBlur: {
    type: String,
    default: 'sm',
    validator: (v) => ['none', 'sm', 'md', 'lg', 'xl'].includes(v)
  },
  /** Прозрачность backdrop: 0-100 */
  backdropOpacity: {
    type: [String, Number],
    default: '40'
  },
  /** Цвет backdrop: slate-900 | gray-900 | black | white */
  backdropColor: {
    type: String,
    default: 'slate-900'
  },
  /** Блокировать скролл body */
  backdropLockScroll: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(["close", "opened", "closed", "update:variant"]);

const viewModes = [
  { value: "modal", label: "Модальное окно", icon: Squares2X2Icon },
  { value: "fullscreen", label: "На весь экран", icon: ArrowsPointingOutIcon },
  { value: "sidebar-right", label: "Боковая панель", icon: ViewColumnsIcon },
  { value: "half-right", label: "Половина справа", icon: RectangleGroupIcon },
];

const handleVariantChange = (newVariant) => {
  emit("update:variant", newVariant);
};

const transitionName = computed(() => {
  switch (props.variant) {
    case "sidebar-right":
    case "half-right":
      return "slide-right";
    default:
      return "fade-scale";
  }
});

const containerWrapperClass = computed(() => {
  switch (props.variant) {
    case "fullscreen":
      return "fixed inset-0 flex items-center justify-center p-0";
    case "sidebar-right":
      return "fixed inset-0 flex items-end justify-end";
    case "half-right":
      return "fixed top-[73px] bottom-0 right-0 z-20 flex w-1/2 pointer-events-none";
    default:
      return "fixed inset-0 flex items-center justify-center px-4 py-4 overflow-y-auto";
  }
});

const containerClass = computed(() => {
  const base = "bg-white shadow-2xl flex flex-col";
  switch (props.variant) {
    case "fullscreen":
      return `${base} w-full h-full p-8`;
    case "sidebar-right":
      return `${base} h-full w-full max-w-md p-6 border-l border-slate-200`;
    case "half-right":
      return `${base} h-full w-full p-6 border-l border-slate-200 pointer-events-auto`;
    default:
      return `${base} rounded-2xl w-full max-h-[90vh] p-6 my-auto ${widthClass.value}`;
  }
});

const widthClass = computed(() => {
  if (props.variant !== "modal") return "";
  switch (props.width) {
    case "sm": return "max-w-md";
    case "lg": return "max-w-3xl";
    case "xl": return "max-w-5xl";
    default: return "max-w-xl";
  }
});

// Формируем backgroundColor из color и opacity для совместимости
const backdropBackgroundColor = computed(() => {
  // Если opacity - стандартное значение Tailwind, используем класс
  const tailwindOpacities = ['0', '5', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '100'];
  if (tailwindOpacities.includes(String(props.backdropOpacity))) {
    return `bg-${props.backdropColor}/${props.backdropOpacity}`;
  }
  // Иначе формируем CSS значение
  const colorMap = {
    'slate-900': 'rgb(15 23 42',
    'gray-900': 'rgb(17 24 39',
    'black': 'rgb(0 0 0',
    'white': 'rgb(255 255 255',
  };
  const rgb = colorMap[props.backdropColor] || colorMap['slate-900'];
  return `${rgb} / ${props.backdropOpacity}%)`;
});
</script>

<style scoped>
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-scale-enter-from, .fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-active > div, .fade-scale-leave-active > div {
  transition: transform 0.2s ease;
}
.fade-scale-enter-from > div, .fade-scale-leave-to > div {
  transform: scale(0.95);
}
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from, .slide-right-leave-to {
  opacity: 0;
}
.slide-right-enter-active > div, .slide-right-leave-active > div {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from > div, .slide-right-leave-to > div {
  transform: translateX(100%);
}
</style>

