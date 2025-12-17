<template>
  <div class="relative" ref="root" data-component="DXComboBox">
    <label v-if="label" class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    
    <!-- Input Field -->
    <div class="relative">
      <input
        ref="inputRef"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full pr-10 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-300 focus:outline-none transition-colors"
        :class="disabled && 'opacity-60 cursor-not-allowed bg-slate-50'"
        @input="handleInput"
        @focus="handleFocus"
        @keydown.down.prevent="navigateDown"
        @keydown.up.prevent="navigateUp"
        @keydown.enter.prevent="selectHighlighted"
        @keydown.escape="open = false"
      />
      <svg
        class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform"
        :class="{ 'rotate-180': open }"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    
    <!-- Dropdown -->
    <div
      v-if="open && (filtered.length > 0 || (allowCustom && inputValue))"
      class="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg py-2 max-h-48 overflow-y-auto"
    >
      <button
        v-for="(opt, index) in filtered"
        :key="opt.value"
        type="button"
        class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center justify-between"
        :class="{ 'bg-slate-100': index === highlightedIndex }"
        @click="selectOption(opt)"
        @mouseenter="highlightedIndex = index"
      >
        <span class="flex items-center gap-2">
          <component v-if="opt.icon" :is="opt.icon" class="w-4 h-4 text-slate-500" />
          {{ opt.label }}
        </span>
        <svg v-if="modelValue === opt.value" class="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </button>
      
      <div
        v-if="filtered.length === 0 && inputValue"
        class="px-4 py-2 text-sm text-slate-500"
      >
        <span v-if="allowCustom">Нажмите Enter для "{{ inputValue }}"</span>
        <span v-else>Не найдено</span>
      </div>
    </div>
    
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: [String, Number],
  options: { type: Array, default: () => [] },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  helper: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  filterable: { type: Boolean, default: true },
  allowCustom: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const root = ref(null);
const inputRef = ref(null);
const inputValue = ref("");
const open = ref(false);
const highlightedIndex = ref(0);

const currentOption = computed(() => {
  return props.options.find((o) => o.value === props.modelValue);
});

const filtered = computed(() => {
  if (!props.filterable || !inputValue.value) {
    return props.options;
  }
  const term = inputValue.value.toLowerCase();
  return props.options.filter((o) => o.label.toLowerCase().includes(term));
});

const handleInput = () => {
  open.value = true;
  highlightedIndex.value = 0;
  
  if (!props.filterable) return;
  
  const exactMatch = props.options.find((o) => o.label === inputValue.value);
  if (!exactMatch && !props.allowCustom) {
    emit("update:modelValue", null);
  }
};

const handleFocus = () => {
  open.value = true;
  highlightedIndex.value = 0;
};

const selectOption = (option) => {
  inputValue.value = option.label;
  emit("update:modelValue", option.value);
  open.value = false;
};

const navigateDown = () => {
  if (!open.value) {
    open.value = true;
    return;
  }
  if (highlightedIndex.value < filtered.value.length - 1) {
    highlightedIndex.value++;
  }
};

const navigateUp = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--;
  }
};

const selectHighlighted = () => {
  if (open.value && filtered.value.length > 0) {
    const option = filtered.value[highlightedIndex.value];
    if (option) selectOption(option);
  } else if (props.allowCustom && inputValue.value) {
    emit("update:modelValue", inputValue.value);
    open.value = false;
  }
};

const onClickOutside = (e) => {
  if (root.value && !root.value.contains(e.target)) {
    open.value = false;
    if (!props.allowCustom && currentOption.value) {
      inputValue.value = currentOption.value.label;
    }
  }
};

watch(() => props.modelValue, (newVal) => {
  const option = props.options.find((o) => o.value === newVal);
  inputValue.value = option ? option.label : (props.allowCustom ? String(newVal || "") : "");
}, { immediate: true });

onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>

