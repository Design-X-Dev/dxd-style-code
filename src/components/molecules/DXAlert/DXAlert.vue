<template>
  <div
    v-if="!dismissed"
    :class="alertClasses"
    role="alert"
    data-component="DXAlert"
    :data-variant="variant"
  >
    <div class="flex items-start gap-3">
      <component v-if="icon" :is="icon" :class="iconClasses" />
      <div class="flex-1 min-w-0">
        <p v-if="title" class="font-semibold" :class="titleClasses">{{ title }}</p>
        <div :class="contentClasses">
          <slot />
        </div>
      </div>
      <button
        v-if="dismissible"
        type="button"
        class="flex-shrink-0 -mr-1 p-1 rounded hover:bg-black/5 transition-colors"
        :class="closeClasses"
        @click="dismiss"
        aria-label="Закрыть"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div v-if="$slots.actions" class="mt-3 flex gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  /** Вариант: info | success | warning | danger */
  variant: { type: String, default: "info" },
  /** Заголовок */
  title: { type: String, default: "" },
  /** Иконка (компонент) */
  icon: { type: Object, default: null },
  /** Можно закрыть */
  dismissible: { type: Boolean, default: false },
});

const emit = defineEmits(["dismiss"]);

const dismissed = ref(false);

const dismiss = () => {
  dismissed.value = true;
  emit("dismiss");
};

const variantStyles = {
  info: {
    bg: "bg-blue-50 border-blue-200",
    icon: "text-blue-500",
    title: "text-blue-900",
    content: "text-blue-800",
    close: "text-blue-500",
  },
  success: {
    bg: "bg-emerald-50 border-emerald-200",
    icon: "text-emerald-500",
    title: "text-emerald-900",
    content: "text-emerald-800",
    close: "text-emerald-500",
  },
  warning: {
    bg: "bg-amber-50 border-amber-200",
    icon: "text-amber-500",
    title: "text-amber-900",
    content: "text-amber-800",
    close: "text-amber-500",
  },
  danger: {
    bg: "bg-rose-50 border-rose-200",
    icon: "text-rose-500",
    title: "text-rose-900",
    content: "text-rose-800",
    close: "text-rose-500",
  },
};

const styles = computed(() => variantStyles[props.variant] || variantStyles.info);

const alertClasses = computed(() => [
  "rounded-xl border p-4",
  styles.value.bg,
]);

const iconClasses = computed(() => ["w-5 h-5 flex-shrink-0 mt-0.5", styles.value.icon]);
const titleClasses = computed(() => styles.value.title);
const contentClasses = computed(() => ["text-sm", styles.value.content, props.title && "mt-1"]);
const closeClasses = computed(() => styles.value.close);
</script>

