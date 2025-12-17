<template>
  <div
    v-if="!dismissed"
    :class="alertClasses"
    role="alert"
    data-component="DXAlert"
    :data-variant="variant"
  >
    <div class="flex items-start gap-3">
      <DXIcon v-if="iconToShow" :icon="iconToShow" size="md" animation="none" :class="iconClasses" />
      <div class="flex-1 min-w-0">
        <p v-if="title" class="font-semibold" :class="titleClasses">{{ title }}</p>
        <div :class="contentClasses">
          <slot />
        </div>
      </div>
      <DXCloseButton
        v-if="dismissible"
        size="sm"
        variant="default"
        @click="dismiss"
      />
    </div>
    <div v-if="$slots.actions" class="mt-3 flex gap-2">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/solid";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXCloseButton from "../../atoms/DXCloseButton/DXCloseButton.vue";

const props = defineProps({
  /** Вариант: info | success | warning | danger */
  variant: { type: String, default: "info" },
  /** Заголовок */
  title: { type: String, default: "" },
  /** Иконка (компонент), если null - используется иконка по умолчанию для variant */
  icon: { type: Object, default: undefined },
  /** Показывать иконку */
  showIcon: { type: Boolean, default: true },
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
    defaultIcon: InformationCircleIcon,
  },
  success: {
    bg: "bg-emerald-50 border-emerald-200",
    icon: "text-emerald-500",
    title: "text-emerald-900",
    content: "text-emerald-800",
    close: "text-emerald-500",
    defaultIcon: CheckCircleIcon,
  },
  warning: {
    bg: "bg-amber-50 border-amber-200",
    icon: "text-amber-500",
    title: "text-amber-900",
    content: "text-amber-800",
    close: "text-amber-500",
    defaultIcon: ExclamationTriangleIcon,
  },
  danger: {
    bg: "bg-rose-50 border-rose-200",
    icon: "text-rose-500",
    title: "text-rose-900",
    content: "text-rose-800",
    close: "text-rose-500",
    defaultIcon: XCircleIcon,
  },
};

const styles = computed(() => variantStyles[props.variant] || variantStyles.info);
const iconToShow = computed(() => {
  if (!props.showIcon) return null;
  return props.icon !== undefined ? props.icon : styles.value.defaultIcon;
});

const alertClasses = computed(() => [
  "rounded-xl border p-4",
  styles.value.bg,
]);

const iconClasses = computed(() => ["w-5 h-5 flex-shrink-0 mt-0.5", styles.value.icon]);
const titleClasses = computed(() => styles.value.title);
const contentClasses = computed(() => ["text-sm", styles.value.content, props.title && "mt-1"]);
const closeClasses = computed(() => styles.value.close);
</script>

