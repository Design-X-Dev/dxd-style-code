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
        class="h-9 w-9 inline-flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:border-slate-300 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        :class="{ 'border-emerald-300 bg-emerald-50': copied }"
        :aria-label="`Скопировать ${label || 'значение'}`"
        @click="copyToClipboard"
      >
        <DXIcon
          v-if="copied"
          :icon="CheckIcon"
          size="sm"
          :animation="copiedIconAnimation"
          class="text-emerald-600"
        />
        <DXIcon
          v-else
          :icon="copyIcon"
          size="sm"
          :animation="copyIconAnimation"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DXIcon from "../../atoms/v2/DXIcon/DXIcon.vue";
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon, CheckIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Лейбл */
  label: { type: String, default: "" },
  /** Значение для копирования */
  value: { type: String, default: "" },
  /** Иконка для копирования */
  copyIcon: { type: Object, default: () => ClipboardDocumentIcon },
  /** Иконка успешного копирования */
  successIcon: { type: Object, default: () => ClipboardDocumentCheckIcon },
  /** Анимация иконки копирования: none | wiggle | scale | rotate */
  copyIconAnimation: { type: String, default: "scale" },
  /** Анимация иконки успеха: none | wiggle | scale | rotate */
  copiedIconAnimation: { type: String, default: "scale" },
  /** Время отображения успешного состояния (мс) */
  successDuration: { type: Number, default: 2000 },
});

const emit = defineEmits(["copied"]);

const copied = ref(false);

const copyToClipboard = async () => {
  if (!props.value) return;
  try {
    await navigator.clipboard.writeText(props.value);
    copied.value = true;
    emit("copied", props.value);
    setTimeout(() => { 
      copied.value = false; 
    }, props.successDuration);
  } catch (e) {
    console.error("Не удалось скопировать", e);
  }
};
</script>

