<template>
  <div
    class="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm"
    :class="variantClasses"
    data-component="DXToast"
    :data-variant="variant"
  >
    <DXIcon v-if="variantIcon" :icon="variantIcon" size="md" animation="none" :class="iconColorClass" class="shrink-0 mt-0.5" />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useVariantConfig } from "../../../composables/useVariant";
import DXIcon from "../DXIcon/DXIcon.vue";

const props = defineProps({
  /** Вариант: info | success | warning | danger */
  variant: { type: String, default: "info" },
  /** Показывать иконку */
  showIcon: { type: Boolean, default: true },
});

const config = computed(() => useVariantConfig(props.variant));
const variantClasses = computed(() => `${config.value.bg} ${config.value.border} ${config.value.text}`);
const variantIcon = computed(() => props.showIcon ? config.value.icon : null);
const iconColorClass = computed(() => config.value.iconColor);
</script>

