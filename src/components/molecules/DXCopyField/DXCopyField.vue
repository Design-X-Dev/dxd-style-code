<template>
  <div class="space-y-1" data-component="DXCopyField">
    <p v-if="label" class="text-[11px] uppercase tracking-wide text-slate-500 font-semibold">
      {{ label }}
    </p>
    <div class="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3">
      <p class="text-base font-semibold text-slate-900 break-all flex-1 text-center">
        {{ value || "—" }}
      </p>
      <button
        type="button"
        class="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 bg-white transition"
        :aria-label="`Скопировать ${label || 'значение'}`"
        @click="copyToClipboard"
      >
        <svg v-if="copied" class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  /** Лейбл */
  label: { type: String, default: "" },
  /** Значение для копирования */
  value: { type: String, default: "" },
});

const copied = ref(false);

const copyToClipboard = async () => {
  if (!props.value) return;
  try {
    await navigator.clipboard.writeText(props.value);
    copied.value = true;
    setTimeout(() => { copied.value = false; }, 2000);
  } catch (e) {
    console.error("Не удалось скопировать", e);
  }
};
</script>

