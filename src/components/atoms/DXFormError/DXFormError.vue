<template>
  <div
    v-if="message"
    class="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700"
    data-component="DXFormError"
  >
    <svg class="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p class="text-sm">{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  message: { type: String, default: "" },
});
</script>

