<template>
  <div
    class="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm"
    :class="variantClasses"
    data-component="DXToast"
    :data-variant="variant"
  >
    <DXIcon v-if="variantIcon" :icon="variantIcon" size="md" animation="none" :class="iconColorClass" class="flex-shrink-0 mt-0.5" />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/solid";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Вариант: info | success | warning | danger */
  variant: { type: String, default: "info" },
  /** Показывать иконку */
  showIcon: { type: Boolean, default: true },
});

const variantConfig = {
  info: {
    classes: "bg-blue-50 border-blue-200 text-blue-800",
    icon: InformationCircleIcon,
    iconColor: "text-blue-500",
  },
  success: {
    classes: "bg-emerald-50 border-emerald-200 text-emerald-800",
    icon: CheckCircleIcon,
    iconColor: "text-emerald-500",
  },
  warning: {
    classes: "bg-amber-50 border-amber-200 text-amber-800",
    icon: ExclamationTriangleIcon,
    iconColor: "text-amber-500",
  },
  danger: {
    classes: "bg-rose-50 border-rose-200 text-rose-800",
    icon: XCircleIcon,
    iconColor: "text-rose-500",
  },
};

const config = computed(() => variantConfig[props.variant] || variantConfig.info);
const variantClasses = computed(() => config.value.classes);
const variantIcon = computed(() => props.showIcon ? config.value.icon : null);
const iconColorClass = computed(() => config.value.iconColor);
</script>

