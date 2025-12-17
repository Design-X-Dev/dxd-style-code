<template>
  <div class="relative" ref="root" data-component="DXSearchSelect">
    <label v-if="label" class="block text-sm text-slate-600 mb-1 font-medium">{{ label }}</label>
    
    <!-- Multiple: Tags Display -->
    <div v-if="multiple && selectedOptions.length > 0" class="flex flex-wrap gap-2 mb-2">
      <span
        v-for="option in selectedOptions"
        :key="option.value"
        class="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-lg"
      >
        <component v-if="option.icon" :is="option.icon" class="w-3 h-3" />
        {{ option.label }}
        <button type="button" class="hover:text-slate-900" @click.stop="removeOption(option.value)">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </span>
    </div>

    <!-- Trigger Button -->
    <button
      type="button"
      class="w-full flex items-center justify-between h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white transition-colors"
      :class="[
        !open && 'hover:border-slate-300',
        open && 'ring-2 ring-slate-900/10 border-slate-300',
      ]"
      @click="toggle"
    >
      <span class="truncate flex items-center gap-2">
        <component v-if="!multiple && selectedOption?.icon" :is="selectedOption.icon" class="w-4 h-4 text-slate-500" />
        {{ displayLabel }}
      </span>
      <svg class="w-4 h-4 text-slate-400 transition-transform" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <!-- Dropdown Menu -->
    <div v-if="open" class="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg p-3 space-y-2">
      <!-- Search Input -->
      <div class="relative">
        <input
          ref="searchInput"
          v-model="search"
          class="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/10"
          :placeholder="searchPlaceholder"
          @keydown.stop
          @keydown.escape="open = false"
        />
        <svg class="absolute right-3 top-2.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <!-- Options List -->
      <div class="max-h-48 overflow-y-auto space-y-1">
        <button
          v-for="opt in filtered"
          :key="opt.value"
          type="button"
          class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm flex items-center justify-between gap-2"
          :class="{ 'bg-slate-100': isSelected(opt.value) }"
          @click="select(opt.value)"
        >
          <span class="flex items-center gap-2 flex-1 truncate">
            <component v-if="opt.icon" :is="opt.icon" class="w-4 h-4 text-slate-500" />
            {{ opt.label }}
          </span>
          <svg v-if="isSelected(opt.value)" class="w-4 h-4 text-slate-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
        
        <!-- Create New Option -->
        <button
          v-if="creatable && search && !filtered.length"
          type="button"
          class="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm flex items-center gap-2 text-slate-600"
          @click="createOption"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Создать "{{ search }}"
        </button>
        
        <p v-else-if="!filtered.length" class="text-xs text-slate-500 px-3 py-2">Не найдено</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from "vue";

const props = defineProps({
  /** Значение (v-model) - строка или массив для multiple */
  modelValue: [String, Number, Array],
  /** Опции: [{ value, label, icon? }] */
  options: { type: Array, default: () => [] },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Placeholder */
  placeholder: { type: String, default: "Выбрать" },
  /** Placeholder поиска */
  searchPlaceholder: { type: String, default: "Поиск..." },
  /** Множественный выбор */
  multiple: { type: Boolean, default: false },
  /** Возможность создавать новые опции */
  creatable: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "create"]);

const open = ref(false);
const search = ref("");
const root = ref(null);
const searchInput = ref(null);

const selectedOption = computed(() => {
  if (props.multiple) return null;
  return props.options.find((o) => String(o.value) === String(props.modelValue));
});

const selectedOptions = computed(() => {
  if (!props.multiple) return [];
  const values = Array.isArray(props.modelValue) ? props.modelValue : [];
  return props.options.filter((o) => values.includes(o.value));
});

const displayLabel = computed(() => {
  if (props.multiple) {
    const count = selectedOptions.value.length;
    return count > 0 ? `Выбрано: ${count}` : props.placeholder;
  }
  return selectedOption.value ? selectedOption.value.label : props.placeholder;
});

const filtered = computed(() => {
  const term = search.value.toLowerCase().trim();
  if (!term) return props.options;
  return props.options.filter((o) => o.label.toLowerCase().includes(term));
});

const isSelected = (value) => {
  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? props.modelValue : [];
    return values.includes(value);
  }
  return props.modelValue === value;
};

const toggle = () => {
  open.value = !open.value;
  if (open.value) {
    nextTick(() => searchInput.value?.focus());
  }
};

const select = (val) => {
  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? props.modelValue : [];
    const index = values.indexOf(val);
    if (index > -1) {
      const newValues = [...values];
      newValues.splice(index, 1);
      emit("update:modelValue", newValues);
    } else {
      emit("update:modelValue", [...values, val]);
    }
  } else {
    emit("update:modelValue", val);
    open.value = false;
  }
  search.value = "";
};

const removeOption = (val) => {
  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? props.modelValue : [];
    emit("update:modelValue", values.filter((v) => v !== val));
  }
};

const createOption = () => {
  if (props.creatable && search.value) {
    emit("create", search.value);
    search.value = "";
  }
};

const onClickOutside = (e) => {
  if (root.value && !root.value.contains(e.target)) {
    open.value = false;
    search.value = "";
  }
};

watch(open, (newVal) => { if (!newVal) search.value = ""; });

onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>

