<template>
  <div
    ref="rootElement"
    class="relative w-full"
    data-component="DXSearchBar"
    :data-size="size"
    :data-loading="loading"
  >
    <DXInput
      :model-value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size"
      :error="error"
      :helper="helper"
      :label="label"
      :required="required"
      :prefix-icon="MagnifyingGlassIcon"
      @update:model-value="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown.enter="handleEnter"
      @keydown.escape="handleEscape"
      @keydown.down.prevent="handleKeyDown"
      @keydown.up.prevent="handleKeyUp"
    >
      <template #suffix>
        <div class="flex items-center gap-1">
          <DXLoader v-if="loading" size="sm" />
          <DXIcon
            v-else-if="modelValue && clearable"
            :icon="XMarkIcon"
            size="sm"
            class="cursor-pointer text-slate-400 hover:text-slate-600"
            @click="handleClear"
          />
          <span
            v-if="hotkey && !modelValue"
            class="text-xs text-slate-400 border border-slate-200 rounded px-1.5 py-0.5"
          >
            {{ hotkeyLabel }}
          </span>
        </div>
      </template>
    </DXInput>

    <!-- Dropdown с результатами -->
    <Transition name="fade">
      <div
        v-if="showDropdown && (suggestions.length > 0 || (showHistory && historyItems.length > 0) || filters.length > 0)"
        class="absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-96 overflow-y-auto"
        :class="dropdownWidthClasses"
      >
        <!-- История поиска -->
        <div v-if="showHistory && historyItems.length > 0 && !modelValue" class="p-2">
          <div class="px-2 py-1 text-xs font-semibold text-slate-500 uppercase">
            История поиска
          </div>
          <div
            v-for="(item, index) in historyItems"
            :key="index"
            class="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer flex items-center justify-between"
            :class="{ 'bg-slate-50': selectedHistoryIndex === index }"
            @click="selectHistoryItem(item)"
            @mouseenter="selectedHistoryIndex = index"
          >
            <span>{{ item }}</span>
            <DXIcon
              :icon="ClockIcon"
              size="xs"
              class="text-slate-400"
            />
          </div>
        </div>

        <!-- Автодополнение -->
        <div v-if="suggestions && suggestions.length > 0" class="p-2">
          <div
            v-for="(suggestion, index) in suggestions"
            :key="suggestion.id || index"
            class="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer"
            :class="{ 'bg-slate-50': selectedSuggestionIndex === index }"
            @click="selectSuggestion(suggestion)"
            @mouseenter="selectedSuggestionIndex = index"
          >
            <div class="font-medium">{{ suggestion.title }}</div>
            <div v-if="suggestion.category" class="text-xs text-slate-500 mt-0.5">
              {{ suggestion.category }}
            </div>
          </div>
        </div>

        <!-- Фильтры -->
        <div v-if="filters && filters.length > 0" class="p-2 border-t border-slate-200">
          <div class="px-2 py-1 text-xs font-semibold text-slate-500 uppercase mb-2">
            Фильтры
          </div>
          <div
            v-for="filter in filters"
            :key="filter.id"
            class="mb-2"
          >
            <label class="block text-xs text-slate-600 mb-1">{{ filter.label }}</label>
            <select
              v-model="selectedFilters[filter.id]"
              class="w-full text-sm border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              @change="handleFilterChange"
            >
              <option
                v-for="option in filter.options"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useSize } from "../../../composables/useSize";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXInput from "../DXInput/DXInput.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXLoader from "../../atoms/DXLoader/DXLoader.vue";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Значение поискового запроса (v-model)
   */
  modelValue: { type: String, default: "" },
  /**
   * Placeholder
   */
  placeholder: { type: String, default: "Поиск..." },
  /**
   * Лейбл
   */
  label: { type: String, default: "" },
  /**
   * Вспомогательный текст
   */
  helper: { type: String, default: "" },
  /**
   * Текст ошибки
   */
  error: { type: String, default: "" },
  /**
   * Обязательное поле
   */
  required: { type: Boolean, default: false },
  /**
   * Отключенное состояние
   */
  disabled: { type: Boolean, default: false },
  /**
   * Размер: xs | sm | md | lg | xl
   */
  size: { type: String, default: "md" },
  /**
   * Массив предложений для автодополнения
   * Формат: [{ id, title, category? }]
   */
  suggestions: {
    type: Array,
    default: () => [],
  },
  /**
   * Индикация загрузки
   */
  loading: { type: Boolean, default: false },
  /**
   * Горячая клавиша (например, "ctrl+k" или "cmd+k")
   */
  hotkey: { type: String, default: null },
  /**
   * Показывать историю поиска
   */
  showHistory: { type: Boolean, default: false },
  /**
   * Элементы истории поиска
   */
  historyItems: {
    type: Array,
    default: () => [],
  },
  /**
   * Фильтры для расширенного поиска
   * Формат: [{ id, label, options: [] }]
   */
  filters: {
    type: Array,
    default: () => [],
  },
  /**
   * Задержка debounce в миллисекундах
   */
  debounce: { type: Number, default: 300 },
  /**
   * Показывать кнопку очистки
   */
  clearable: { type: Boolean, default: true },
  /**
   * Ширина dropdown: sm | md | lg | xl | auto
   */
  dropdownWidth: { type: String, default: "auto" },
});

const emit = defineEmits([
  "update:modelValue",
  "search",
  "select-suggestion",
  "filter-change",
  "clear",
]);

const showDropdown = ref(false);
const selectedSuggestionIndex = ref(-1);
const selectedHistoryIndex = ref(-1);
const selectedFilters = ref({});
let debounceTimer = null;

/**
 * Классы ширины dropdown
 * 
 * @description
 * Вычисляет классы ширины для dropdown на основе prop dropdownWidth.
 * 
 * @returns {string} Классы ширины
 */
const dropdownWidthClasses = computed(() => {
  const widthMap = {
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    xl: "w-[28rem]",
    auto: "w-full",
  };
  return widthMap[props.dropdownWidth] || widthMap.auto;
});

/**
 * Метка для горячей клавиши
 * 
 * @description
 * Форматирует горячую клавишу для отображения (например, "Ctrl+K" или "⌘K").
 * 
 * @returns {string} Отформатированная метка горячей клавиши
 */
const hotkeyLabel = computed(() => {
  if (!props.hotkey) return "";
  const parts = props.hotkey.toLowerCase().split("+");
  const modifiers = parts.slice(0, -1);
  const key = parts[parts.length - 1].toUpperCase();

  const modifierLabels = {
    ctrl: "Ctrl",
    cmd: "⌘",
    meta: "⌘",
    alt: "Alt",
    shift: "Shift",
  };

  const labels = modifiers.map((m) => modifierLabels[m] || m);
  return [...labels, key].join("+");
});

/**
 * Обработчик ввода
 * 
 * @description
 * Обрабатывает ввод текста с debounce для оптимизации запросов.
 * 
 * @param {string} value - Введенное значение
 */
function handleInput(value) {
  emit("update:modelValue", value);
  showDropdown.value = true;

  // Debounce для поиска
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }

  debounceTimer = setTimeout(() => {
    if (value.trim()) {
      emit("search", value);
    }
  }, props.debounce);
}

/**
 * Обработчик фокуса
 * 
 * @description
 * Показывает dropdown при фокусе на input.
 */
function handleFocus() {
  showDropdown.value = true;
}

/**
 * Обработчик blur
 * 
 * @description
 * Скрывает dropdown при потере фокуса (с небольшой задержкой для клика по результатам).
 */
function handleBlur() {
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
}

/**
 * Обработчик Enter
 * 
 * @description
 * Выполняет поиск при нажатии Enter.
 */
function handleEnter() {
  if (selectedSuggestionIndex.value >= 0 && props.suggestions[selectedSuggestionIndex.value]) {
    selectSuggestion(props.suggestions[selectedSuggestionIndex.value]);
  } else if (props.modelValue.trim()) {
    emit("search", props.modelValue);
  }
}

/**
 * Обработчик Escape
 * 
 * @description
 * Скрывает dropdown при нажатии Escape.
 */
function handleEscape() {
  showDropdown.value = false;
}

/**
 * Обработчик стрелки вниз
 * 
 * @description
 * Перемещает выделение вниз по списку предложений.
 */
function handleKeyDown() {
  if (props.suggestions.length > 0) {
    selectedSuggestionIndex.value = Math.min(
      selectedSuggestionIndex.value + 1,
      props.suggestions.length - 1
    );
  } else if (props.historyItems.length > 0) {
    selectedHistoryIndex.value = Math.min(
      selectedHistoryIndex.value + 1,
      props.historyItems.length - 1
    );
  }
}

/**
 * Обработчик стрелки вверх
 * 
 * @description
 * Перемещает выделение вверх по списку предложений.
 */
function handleKeyUp() {
  if (props.suggestions.length > 0) {
    selectedSuggestionIndex.value = Math.max(selectedSuggestionIndex.value - 1, -1);
  } else if (props.historyItems.length > 0) {
    selectedHistoryIndex.value = Math.max(selectedHistoryIndex.value - 1, -1);
  }
}

/**
 * Выбор предложения
 * 
 * @description
 * Выбирает предложение из автодополнения.
 * 
 * @param {Object} suggestion - Выбранное предложение
 */
function selectSuggestion(suggestion) {
  emit("update:modelValue", suggestion.title);
  emit("select-suggestion", suggestion);
  showDropdown.value = false;
}

/**
 * Выбор элемента истории
 * 
 * @description
 * Выбирает элемент из истории поиска.
 * 
 * @param {string} item - Элемент истории
 */
function selectHistoryItem(item) {
  emit("update:modelValue", item);
  emit("search", item);
  showDropdown.value = false;
}

/**
 * Обработчик изменения фильтров
 * 
 * @description
 * Эмитит событие при изменении фильтров.
 */
function handleFilterChange() {
  emit("filter-change", { ...selectedFilters.value });
}

/**
 * Очистка поиска
 * 
 * @description
 * Очищает поисковый запрос.
 */
function handleClear() {
  emit("update:modelValue", "");
  emit("clear");
  showDropdown.value = false;
}

/**
 * Обработчик горячей клавиши
 * 
 * @description
 * Обрабатывает нажатие горячей клавиши для фокуса на поиск.
 * 
 * @param {KeyboardEvent} event - Событие клавиатуры
 */
function handleHotkey(event) {
  if (!props.hotkey) return;

  const parts = props.hotkey.toLowerCase().split("+");
  const key = parts[parts.length - 1].toLowerCase();
  const modifiers = parts.slice(0, -1);

  const isKeyMatch = event.key.toLowerCase() === key;
  const isCtrlMatch = modifiers.includes("ctrl") ? event.ctrlKey : !event.ctrlKey;
  const isCmdMatch = modifiers.includes("cmd") || modifiers.includes("meta")
    ? event.metaKey
    : !event.metaKey;
  const isAltMatch = modifiers.includes("alt") ? event.altKey : !event.altKey;
  const isShiftMatch = modifiers.includes("shift") ? event.shiftKey : !event.shiftKey;

  if (isKeyMatch && isCtrlMatch && isCmdMatch && isAltMatch && isShiftMatch) {
    event.preventDefault();
    // Фокус на input (нужно получить ref к DXInput)
    const inputElement = document.querySelector('[data-component="DXSearchBar"] input');
    if (inputElement) {
      inputElement.focus();
    }
  }
}

/**
 * Обработчик клика вне компонента
 * 
 * @description
 * Закрывает dropdown при клике вне компонента.
 * 
 * @param {MouseEvent} event - Событие клика
 */
function handleClickOutside(event) {
  if (rootElement.value && !rootElement.value.contains(event.target)) {
    showDropdown.value = false;
  }
}

// Инициализация горячей клавиши и обработчика клика вне
onMounted(() => {
  if (props.hotkey) {
    document.addEventListener("keydown", handleHotkey);
  }
  document.addEventListener("click", handleClickOutside);
});

// Очистка
onBeforeUnmount(() => {
  if (props.hotkey) {
    document.removeEventListener("keydown", handleHotkey);
  }
  document.removeEventListener("click", handleClickOutside);
  if (debounceTimer) {
    clearTimeout(debounceTimer);
  }
});

// Инициализация фильтров
watch(
  () => props.filters,
  (filters) => {
    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        if (!selectedFilters.value[filter.id]) {
          selectedFilters.value[filter.id] = filter.options[0] || "";
        }
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

