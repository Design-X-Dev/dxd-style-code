<template>
  <DXIcon
    v-if="icon"
    :icon="icon"
    :size="size"
    animation="scale"
    :class="colorClass"
    data-component="DXValidationIcon"
    :data-state="state"
  />
</template>

<script setup>
import { computed } from "vue";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/solid";
import DXIcon from "../../atoms/v2/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Состояние: success | error | warning | info */
  state: { type: String, required: true },
  /** Размер иконки */
  size: { type: String, default: "md" },
});

const stateConfig = {
  success: {
    icon: CheckCircleIcon,
    color: "text-emerald-500",
  },
  error: {
    icon: ExclamationCircleIcon,
    color: "text-rose-500",
  },
  warning: {
    icon: ExclamationTriangleIcon,
    color: "text-amber-500",
  },
  info: {
    icon: InformationCircleIcon,
    color: "text-blue-500",
  },
};

const config = computed(() => stateConfig[props.state] || stateConfig.info);
const icon = computed(() => config.value.icon);
const colorClass = computed(() => config.value.color);
</script>

