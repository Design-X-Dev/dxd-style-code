<template>
  <div class="flex flex-wrap gap-2" data-component="DXTags">
    <span
      v-for="(tag, index) in normalizedTags"
      :key="getTagKey(tag, index)"
      :class="getTagClasses(tag)"
      class="group inline-flex items-center gap-1.5 transition-all duration-200"
    >
      <!-- Left Icon -->
      <DXIcon
        v-if="tag.icon"
        :icon="tag.icon"
        :size="variant === 'large' ? 'sm' : 'xs'"
        :animation="tag.iconAnimation || 'none'"
        :group-hover="true"
      />
      
      <!-- Tag Label -->
      <span>{{ tag.label }}</span>
      
      <!-- Close Button -->
      <button
        v-if="tag.closable"
        type="button"
        @click="handleRemove(tag, index)"
        class="ml-0.5 -mr-1 hover:bg-slate-200/50 rounded-full p-0.5 transition-colors"
        :aria-label="`Remove ${tag.label}`"
      >
        <DXIcon
          :icon="XMarkIcon"
          size="xs"
          animation="scale"
        />
      </button>
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../v2/DXIcon/DXIcon.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { useVariantTag } from "@/composables/useVariant";

const props = defineProps({
  /** Массив тегов: строки или объекты { label, icon?, closable?, color?, iconAnimation? } */
  tags: { type: Array, default: () => [] },
  /** Размер тегов: default | large */
  variant: { type: String, default: "default" },
  /** Цвет по умолчанию: default | primary | success | warning | danger | info */
  color: { type: String, default: "default" },
  /** Все теги удаляемые */
  closable: { type: Boolean, default: false },
});

const emit = defineEmits(["remove"]);

// Нормализация тегов: строки преобразуются в объекты
const normalizedTags = computed(() => {
  return props.tags.map(tag => {
    if (typeof tag === "string") {
      return {
        label: tag,
        icon: null,
        closable: props.closable,
        color: props.color,
        iconAnimation: 'none',
      };
    }
    return {
      label: tag.label || tag,
      icon: tag.icon || null,
      closable: tag.closable !== undefined ? tag.closable : props.closable,
      color: tag.color || props.color,
      iconAnimation: tag.iconAnimation || 'none',
    };
  });
});

const getTagKey = (tag, index) => {
  return `${tag.label}-${index}`;
};

const getTagClasses = (tag) => {
  const sizeClasses = props.variant === 'large' 
    ? 'px-3 py-1.5 text-sm'
    : 'px-2 py-1 text-xs';
  
  const colors = useVariantTag(tag.color);
  
  return `${sizeClasses} ${colors} rounded-full border`;
};

const handleRemove = (tag, index) => {
  emit("remove", { tag, index });
};
</script>

