<template>
  <div class="flex gap-2" data-component="DXActionButtons">
    <button
      v-if="showEdit"
      type="button"
      class="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 bg-white transition"
      @click="$emit('edit')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      {{ editLabel }}
    </button>
    <button
      v-if="showDelete"
      type="button"
      class="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-xl bg-rose-600 text-white hover:bg-rose-500 transition"
      @click="$emit('delete')"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      {{ deleteLabel }}
    </button>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  /** Показывать кнопку редактирования */
  showEdit: { type: Boolean, default: true },
  /** Показывать кнопку удаления */
  showDelete: { type: Boolean, default: true },
  /** Текст кнопки редактирования */
  editLabel: { type: String, default: "Редактировать" },
  /** Текст кнопки удаления */
  deleteLabel: { type: String, default: "Удалить" },
});

defineEmits(["edit", "delete"]);
</script>

