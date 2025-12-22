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
    <p class="text-base font-semibold text-slate-900">{{ title }}</p>
    <p v-if="description" class="text-sm text-slate-600">{{ description }}</p>
    <slot name="action" />
  </div>
</template>

<script setup>
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

