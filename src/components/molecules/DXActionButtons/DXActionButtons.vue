<template>
  <DXFlex :justify="justifyValue" gap="sm" align="center" data-component="DXActionButtons">
    <!-- View Button -->
    <DXButton
      v-if="showView"
      variant="soft"
      :size="size"
      :icon-only="iconOnly"
      :disabled="disabled"
      @click="$emit('view')"
    >
      <DXIcon :icon="viewIcon" :size="iconSize" animation="scale" />
      <span v-if="!iconOnly">{{ viewLabel }}</span>
    </DXButton>
    
    <!-- Edit Button -->
    <DXButton
      v-if="showEdit"
      variant="outline"
      :size="size"
      :icon-only="iconOnly"
      :disabled="disabled"
      @click="$emit('edit')"
    >
      <DXIcon :icon="editIcon" :size="iconSize" animation="wiggle" />
      <span v-if="!iconOnly">{{ editLabel }}</span>
    </DXButton>
    
    <!-- Delete Button -->
    <DXButton
      v-if="showDelete"
      variant="danger"
      :size="size"
      :icon-only="iconOnly"
      :disabled="disabled"
      @click="$emit('delete')"
    >
      <DXIcon :icon="deleteIcon" :size="iconSize" animation="scale" />
      <span v-if="!iconOnly">{{ deleteLabel }}</span>
    </DXButton>
    
    <!-- Дополнительные кнопки через slot -->
    <slot />
  </DXFlex>
</template>

<script setup>
import { computed } from "vue";
import DXFlex from "../../atoms/DXFlex/DXFlex.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
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

/**
 * Маппинг align prop в justify prop для DXFlex
 */
const justifyValue = computed(() => {
  const alignMap = {
    left: "start",
    center: "center",
    right: "end",
  };
  return alignMap[props.align] || "start";
});

const iconSize = computed(() => {
  if (props.size === "xs") return "xs";
  if (props.size === "md") return "sm";
  return "xs";
});
</script>

