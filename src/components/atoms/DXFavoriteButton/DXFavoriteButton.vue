<template>
  <button
    v-if="isAuthenticated"
    type="button"
    class="favorite-btn inline-flex justify-center items-center transition-all duration-200 rounded-xl border focus:outline-none focus:ring-2 focus:ring-offset-2"
    :class="[
      size === 'sm' ? 'w-10 h-10' : 'px-3 py-2',
      isFavorite
        ? 'border-amber-200 bg-amber-50 text-amber-700 focus:ring-amber-400'
        : 'border-slate-200 text-slate-700 hover:border-slate-300 bg-white focus:ring-slate-400',
    ]"
    @click="$emit('toggle')"
    :aria-label="isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'"
    data-component="DXFavoriteButton"
  >
    <DXIcon
      :icon="isFavorite ? StarSolid : StarOutline"
      size="sm"
      animation="wiggle"
      :class="isFavorite ? 'text-amber-500' : 'text-slate-600'"
    />
  </button>
</template>

<script setup>
import DXIcon from "../DXIcon/DXIcon.vue";
import { StarIcon as StarOutline } from "@heroicons/vue/24/outline";
import { StarIcon as StarSolid } from "@heroicons/vue/24/solid";

defineProps({
  isFavorite: { type: Boolean, default: false },
  isAuthenticated: { type: Boolean, default: false },
  size: { type: String, default: "sm" },
});

defineEmits(["toggle"]);
</script>

<style scoped>
.favorite-btn:active {
  transform: scale(0.95);
}
</style>

