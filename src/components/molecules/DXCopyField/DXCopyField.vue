<template>
  <div class="space-y-1" data-component="DXCopyField">
    <p v-if="label" class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
      {{ label }}
    </p>
    <div :class="containerClasses">
      <p 
        class="font-semibold text-slate-900 break-all flex-1 text-center"
        :class="textSize"
      >
        {{ value || "—" }}
      </p>
      <button
        type="button"
        :class="buttonClasses"
        :aria-label="`Скопировать ${label || 'значение'}`"
        @click="copyToClipboard"
      >
        <DXIcon
          v-if="copied"
          :icon="CheckIcon"
          :size="iconSize"
          :animation="copiedIconAnimation"
          class="text-emerald-600"
        />
        <DXIcon
          v-else
          :icon="copyIcon"
          :size="iconSize"
          :animation="copyIconAnimation"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Лейбл */
  label: { type: String, default: "" },
  /** Значение для копирования */
  value: { type: String, default: "" },
  /** Размер: sm | md | lg */
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  /** Иконка для копирования */
  copyIcon: { type: [Object, Function], default: () => ClipboardDocumentIcon },
  /** Иконка успешного копирования */
  successIcon: { type: [Object, Function], default: () => ClipboardDocumentCheckIcon },
  /** Анимация иконки копирования: none | wiggle | scale | rotate */
  copyIconAnimation: { type: String, default: "scale" },
  /** Анимация иконки успеха: none | wiggle | scale | rotate */
  copiedIconAnimation: { type: String, default: "scale" },
  /** Время отображения успешного состояния (мс) */
  successDuration: { type: Number, default: 2000 },
});

const emit = defineEmits(["copied"]);

const copied = ref(false);

// Базовые классы контейнера
const BASE_CONTAINER_CLASSES = "flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white";

// Извлекаем padding из useSize для контейнера (без высоты)
const containerClasses = computed(() => {
  const fullSizeClass = useSize(props.size, 'input');
  // Извлекаем только padding классы (px-* и py-*), убираем высоту и размер текста
  const paddingClasses = fullSizeClass
    .split(' ')
    .filter(c => c.startsWith('px-') || c.startsWith('py-'))
    .join(' ');
  
  return useClassComposition(BASE_CONTAINER_CLASSES, paddingClasses);
});

// Размер текста из useSize
const textSize = computed(() => useSize(props.size, 'text'));

// Базовые классы кнопки
const BASE_BUTTON_CLASSES = "inline-flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2";

// Размер кнопки из useSize (только высота и ширина, без padding и text)
const buttonClasses = computed(() => {
  const fullSizeClass = useSize(props.size, 'buttonIcon');
  // Извлекаем только размеры (h-* и w-*), убираем padding и text
  const sizeClasses = fullSizeClass
    .split(' ')
    .filter(c => c.startsWith('h-') || c.startsWith('w-'))
    .join(' ');
  
  return useClassComposition(
    BASE_BUTTON_CLASSES,
    sizeClasses,
    { 'border-emerald-300 bg-emerald-50': copied.value }
  );
});

// Размер иконки (маппинг размера компонента на размер иконки)
const iconSize = computed(() => {
  const sizeMap = { sm: 'xs', md: 'sm', lg: 'md' };
  return sizeMap[props.size] || 'sm';
});

const copyToClipboard = async () => {
  if (!props.value) return;
  try {
    await navigator.clipboard.writeText(props.value);
    copied.value = true;
    emit("copied", props.value);
    setTimeout(() => { 
      copied.value = false; 
    }, props.successDuration);
  } catch (e) {
    console.error("Не удалось скопировать", e);
  }
};
</script>

