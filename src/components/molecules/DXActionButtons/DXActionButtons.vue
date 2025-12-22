<template>
  <div class="flex gap-2" :class="{ 'justify-end': align === 'right', 'justify-center': align === 'center' }" data-component="DXActionButtons">
    <!-- View Button -->
    <button
      v-if="showView"
      type="button"
      class="inline-flex items-center gap-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
      :class="buttonSizeClass"
      :disabled="disabled"
      @click="$emit('view')"
    >
      <DXIcon :icon="viewIcon" :size="iconSize" animation="scale" />
      <span v-if="!iconOnly">{{ viewLabel }}</span>
    </button>
    
    <!-- Edit Button -->
    <button
      v-if="showEdit"
      type="button"
      class="inline-flex items-center gap-1.5 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :class="buttonSizeClass"
      :disabled="disabled"
      @click="$emit('edit')"
    >
      <DXIcon :icon="editIcon" :size="iconSize" animation="wiggle" />
      <span v-if="!iconOnly">{{ editLabel }}</span>
    </button>
    
    <!-- Delete Button -->
    <button
      v-if="showDelete"
      type="button"
      class="inline-flex items-center gap-1.5 bg-rose-600 text-white hover:bg-rose-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :class="buttonSizeClass"
      :disabled="disabled"
      @click="$emit('delete')"
    >
      <DXIcon :icon="deleteIcon" :size="iconSize" animation="scale" />
      <span v-if="!iconOnly">{{ deleteLabel }}</span>
    </button>
    
    <!-- Дополнительные кнопки через slot -->
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Показывать кнопку просмотра */
  showView: { type: Boolean, default: false },
  /** Показывать кнопку редактирования */
  showEdit: { type: Boolean, default: true },
  /** Показывать кнопку удаления */
  showDelete: { type: Boolean, default: true },
  
  /** Текст кнопки просмотра */
  viewLabel: { type: String, default: "Просмотр" },
  /** Текст кнопки редактирования */
  editLabel: { type: String, default: "Редактировать" },
  /** Текст кнопки удаления */
  deleteLabel: { type: String, default: "Удалить" },
  
  /** Иконка для кнопки просмотра */
  viewIcon: { type: [Object, Function], default: () => EyeIcon },
  /** Иконка для кнопки редактирования */
  editIcon: { type: [Object, Function], default: () => PencilIcon },
  /** Иконка для кнопки удаления */
  deleteIcon: { type: [Object, Function], default: () => TrashIcon },
  
  /** Размер кнопок: xs | sm | md */
  size: { type: String, default: "sm" },
  /** Только иконки без текста */
  iconOnly: { type: Boolean, default: false },
  /** Выравнивание: left | center | right */
  align: { type: String, default: "left" },
  /** Отключить все кнопки */
  disabled: { type: Boolean, default: false },
});

defineEmits(["view", "edit", "delete"]);

const iconSize = computed(() => {
  if (props.size === "xs") return "xs";
  if (props.size === "md") return "sm";
  return "xs";
});

const buttonSizeClass = computed(() => {
  const baseClasses = "font-semibold rounded-xl";
  
  if (props.iconOnly) {
    if (props.size === "xs") return `${baseClasses} p-1.5`;
    if (props.size === "md") return `${baseClasses} p-2.5`;
    return `${baseClasses} p-2`;
  }
  
  if (props.size === "xs") return `${baseClasses} px-2 py-1 text-xs`;
  if (props.size === "md") return `${baseClasses} px-4 py-2.5 text-sm`;
  return `${baseClasses} px-3 py-2 text-xs`;
});
</script>

