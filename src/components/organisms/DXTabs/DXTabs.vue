<template>
  <div class="flex flex-wrap gap-2" data-component="DXTabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      class="tab-btn px-3 py-2 rounded-xl text-sm font-semibold border transition"
      :class="modelValue === tab.value 
        ? 'bg-slate-800 text-white border-slate-800' 
        : 'border-slate-200 text-slate-700 hover:border-slate-300'"
      @click="$emit('update:modelValue', tab.value)"
    >
      <span class="flex items-center gap-2">
        <DXIcon v-if="tab.icon" :icon="tab.icon" size="sm" :animation="getIconAnimation(tab)" />
        <span>{{ tab.label }}</span>
        <span
          v-if="tab.count !== undefined"
          class="inline-flex items-center justify-center min-w-[24px] px-2 py-1 text-[11px] rounded-full"
          :class="modelValue === tab.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'"
        >
          {{ tab.count }}
        </span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const props = defineProps({
  /** Текущее значение (v-model) */
  modelValue: [String, Number],
  /** Табы: [{ value, label, icon?, count?, iconAnimation? }] */
  tabs: { type: Array, default: () => [] },
  /** Анимация иконок: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "wiggle" },
  /** Анимировать только активную иконку */
  animateActiveOnly: { type: Boolean, default: true },
});

defineEmits(["update:modelValue"]);

const getIconAnimation = (tab) => {
  // Если у таба своя анимация
  if (tab.iconAnimation) return tab.iconAnimation;
  
  // Если анимировать только активный таб
  if (props.animateActiveOnly) {
    return props.modelValue === tab.value ? props.iconAnimation : "none";
  }
  
  // Глобальная анимация
  return props.iconAnimation;
};
</script>


