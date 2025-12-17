<template>
  <div :class="avatarClasses" data-component="DXAvatar" :data-size="size">
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
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** URL изображения */
  src: { type: String, default: "" },
  /** Alt текст */
  alt: { type: String, default: "Avatar" },
  /** Инициалы (если нет изображения) */
  initials: { type: String, default: "" },
  /** Размер: xs | sm | md | lg | xl */
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

const sizeClasses = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

const shapeClasses = {
  circle: "rounded-full",
  square: "rounded-none",
  rounded: "rounded-lg",
};

const initialsSize = {
  xs: "text-xs",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

const statusSize = {
  xs: "w-1.5 h-1.5",
  sm: "w-2 h-2",
  md: "w-2.5 h-2.5",
  lg: "w-3 h-3",
  xl: "w-4 h-4",
};

const statusColors = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-rose-500",
  away: "bg-amber-500",
};

const avatarClasses = computed(() => [
  "relative inline-flex items-center justify-center overflow-hidden bg-slate-100 transition-transform",
  sizeClasses[props.size] || sizeClasses.md,
  shapeClasses[props.shape] || shapeClasses.circle,
  props.iconAnimation !== 'none' && 'hover:scale-105',
]);

const initialsClasses = computed(() => [
  "text-slate-600 uppercase",
  initialsSize[props.size] || initialsSize.md,
]);

const statusClasses = computed(() => [
  statusSize[props.size] || statusSize.md,
  statusColors[props.status] || "",
]);

const fallbackIcon = computed(() => props.icon || UserIcon);

const iconSizeMap = {
  xs: "sm",
  sm: "sm", 
  md: "md",
  lg: "lg",
  xl: "xl",
};

const iconSize = computed(() => iconSizeMap[props.size] || "md");
</script>

