<template>
  <button
    v-if="isAuthenticated"
    type="button"
    class="favorite-btn inline-flex justify-center items-center transition rounded-xl border"
    :class="[
      size === 'sm' ? 'w-10 h-10' : 'px-3 py-2',
      isFavorite
        ? 'border-amber-200 bg-amber-50 text-amber-700'
        : 'border-slate-200 text-slate-700 hover:border-slate-300',
    ]"
    @click="$emit('toggle')"
    :aria-label="isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'"
    data-component="DXFavoriteButton"
  >
    <svg
      class="w-4 h-4"
      :class="isFavorite ? 'fill-amber-400 text-amber-500' : 'text-slate-600'"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </button>
</template>

<script setup>
defineProps({
  isFavorite: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  size: { type: String, default: "sm" },
});

defineEmits(["toggle"]);
</script>

<style scoped>
.favorite-btn:hover svg {
  animation: wiggle 0.28s ease-in-out;
}

@keyframes wiggle {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-1px) rotate(-3deg); }
  75% { transform: translateX(1px) rotate(3deg); }
}
</style>

