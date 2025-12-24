<template>
  <div
    class="bg-white border border-slate-100 rounded-3xl shadow-sm p-8 text-center space-y-3"
    data-component="DXEmptyState"
  >
    <component
      :is="icon"
      class="w-10 h-10 text-slate-500 mx-auto"
      :class="animated && 'animate-bounce-slow'"
    />
    <DXText tag="p" size="md" weight="semibold" color="default">{{ title }}</DXText>
    <DXText v-if="description" tag="p" size="sm" color="muted">{{ description }}</DXText>
    <slot name="action" />
  </div>
</template>

<script setup>
import DXText from "../../atoms/DXText/DXText.vue";

defineProps({
  /** Иконка (компонент) */
  icon: { type: [Object, Function], required: true },
  /** Заголовок */
  title: { type: String, required: true },
  /** Описание */
  description: { type: String, default: "" },
  /** Анимация иконки */
  animated: { type: Boolean, default: false },
});
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-2px, -1px) rotate(-3deg); }
  50% { transform: translate(2px, 1px) rotate(3deg); }
  75% { transform: translate(-1px, 1.5px) rotate(-2deg); }
}
.animate-bounce-slow {
  animation: bounce-slow 3.2s infinite ease-in-out;
}
</style>

