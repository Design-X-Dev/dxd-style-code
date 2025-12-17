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
    <svg v-else class="w-1/2 h-1/2 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
    <span
      v-if="status"
      class="absolute bottom-0 right-0 block rounded-full ring-2 ring-white"
      :class="statusClasses"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

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
  "relative inline-flex items-center justify-center overflow-hidden bg-slate-100",
  sizeClasses[props.size] || sizeClasses.md,
  shapeClasses[props.shape] || shapeClasses.circle,
]);

const initialsClasses = computed(() => [
  "text-slate-600 uppercase",
  initialsSize[props.size] || initialsSize.md,
]);

const statusClasses = computed(() => [
  statusSize[props.size] || statusSize.md,
  statusColors[props.status] || "",
]);
</script>

