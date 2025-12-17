<template>
  <div class="w-full" data-component="DXDatePicker">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    <div class="relative">
      <input
        :type="range ? 'text' : 'date'"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-slate-50"
        :readonly="range"
        @change="!range && handleChange($event.target.value)"
        @click="range && toggleCalendar()"
      />
      <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    
    <!-- Range Picker -->
    <div v-if="range && showCalendar" class="absolute z-20 mt-2 p-4 bg-white border border-slate-200 rounded-xl shadow-lg">
      <div class="space-y-3">
        <div>
          <label class="text-xs text-slate-600">От</label>
          <input
            type="date"
            v-model="rangeStart"
            class="w-full mt-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>
        <div>
          <label class="text-xs text-slate-600">До</label>
          <input
            type="date"
            v-model="rangeEnd"
            class="w-full mt-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          />
        </div>
        <div class="flex gap-2">
          <button
            type="button"
            class="flex-1 px-3 py-2 text-sm bg-slate-900 text-white rounded-lg hover:bg-slate-800"
            @click="applyRange"
          >
            Применить
          </button>
          <button
            type="button"
            class="px-3 py-2 text-sm border border-slate-200 rounded-lg hover:bg-slate-50"
            @click="showCalendar = false"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
    
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  /** Значение (v-model) - строка или { start, end } для range */
  modelValue: [String, Object],
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Режим диапазона */
  range: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const showCalendar = ref(false);
const rangeStart = ref("");
const rangeEnd = ref("");

const displayValue = computed(() => {
  if (props.range && typeof props.modelValue === "object" && props.modelValue) {
    const { start, end } = props.modelValue;
    if (start && end) {
      return `${formatDate(start)} - ${formatDate(end)}`;
    }
    return "";
  }
  return props.modelValue || "";
});

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU");
};

const handleChange = (value) => emit("update:modelValue", value);

const toggleCalendar = () => {
  if (props.disabled) return;
  showCalendar.value = !showCalendar.value;
  if (showCalendar.value && typeof props.modelValue === "object" && props.modelValue) {
    rangeStart.value = props.modelValue.start || "";
    rangeEnd.value = props.modelValue.end || "";
  }
};

const applyRange = () => {
  if (rangeStart.value && rangeEnd.value) {
    emit("update:modelValue", { start: rangeStart.value, end: rangeEnd.value });
  }
  showCalendar.value = false;
};
</script>

