<template>
  <div class="border border-slate-200 rounded-2xl overflow-hidden" data-component="DXTable">
    <table class="min-w-full divide-y divide-slate-200">
      <thead class="bg-slate-50">
        <tr>
          <th
            v-for="h in headers"
            :key="h"
            class="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 bg-white">
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  /** Массив заголовков колонок */
  headers: { type: Array, default: () => [] },
});
</script>

