<template>
  <div 
    :class="avatarClasses" 
    data-component="DXAvatar" 
    :data-size="size"
    :data-shape="shape"
    :data-status="status"
  >
    <img
      v-if="src && !imgError"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
      @error="imgError = true"
    />
    <span v-else-if="initials" class="font-medium" :class="initialsClasses">
      {{ initials }}
    </span>
    <DXIcon 
      v-else 
      :icon="fallbackIcon" 
      :size="iconSize" 
      :animation="iconAnimation" 
      class="text-slate-400"
    />
    <span
      v-if="status"
      class="absolute bottom-0 right-0 block rounded-full ring-2 ring-white"
      :class="statusClasses"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { UserIcon } from "@heroicons/vue/24/solid";
import { useComponentSize } from "@/composables/useComponentSize";
import { useClassCompositionWithConditions } from "@/composables/useClassComposition";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** URL изображения */
  src: { type: String, default: "" },
  /** Alt текст */
  alt: { type: String, default: "Avatar" },
  /** Инициалы (если нет изображения) */
  initials: { type: String, default: "" },
  /** Размер: xs | sm | md | lg | xl | 2xl */
  size: { type: String, default: "md" },
  /** Форма: circle | square | rounded */
  shape: { type: String, default: "circle" },
  /** Статус: online | offline | busy | away */
  status: { type: String, default: "" },
  /** Кастомная иконка для fallback (по умолчанию UserIcon) */
  icon: { type: Object, default: null },
  /** Анимация иконки при hover: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "none" },
});

const imgError = ref(false);

const BASE_CLASSES = "relative inline-flex items-center justify-center overflow-hidden bg-slate-100 transition-transform";

const SHAPE_CLASSES = {
  circle: "rounded-full",
  square: "rounded-none",
  rounded: "rounded-lg",
};

const INITIALS_SIZE_CLASSES = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
  '2xl': "text-xl",
};

const STATUS_SIZE_CLASSES = {
  xs: "w-1.5 h-1.5",
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
  xl: "w-4 h-4",
  '2xl': "w-5 h-5",
};

const STATUS_COLORS = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-rose-500",
  away: "bg-amber-500",
};

const avatarClasses = computed(() =>
  useClassCompositionWithConditions(
    BASE_CLASSES,
    {
      [useComponentSize(props.size, 'avatar')]: true,
      [SHAPE_CLASSES[props.shape] || SHAPE_CLASSES.circle]: true,
      'hover:scale-105': props.iconAnimation !== 'none',
    }
  )
);

const initialsClasses = computed(() => [
  "text-slate-600 uppercase",
  INITIALS_SIZE_CLASSES[props.size] || INITIALS_SIZE_CLASSES.md,
]);

const statusClasses = computed(() => [
  STATUS_SIZE_CLASSES[props.size] || STATUS_SIZE_CLASSES.md,
  STATUS_COLORS[props.status] || "",
]);

const fallbackIcon = computed(() => props.icon || UserIcon);

const iconSizeMap = {
  xs: "sm",
  sm: "sm", 
  md: "md",
  lg: "lg",
  xl: "xl",
  '2xl': "xl",
};

const iconSize = computed(() => iconSizeMap[props.size] || "md");
</script>

