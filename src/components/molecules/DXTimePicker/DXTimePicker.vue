<template>
  <div class="w-full" data-component="DXTimePicker" :data-format="format" :data-size="size">
    <div class="relative">
      <DXInput
        :model-value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :size="size"
        :error="error"
        :helper="helper"
        :label="label"
        :required="required"
        type="text"
        :suffix-icon="ClockIcon"
        @update:model-value="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <!-- Time Dropdown -->
      <div
        v-if="showDropdownState && !disabled"
        v-click-outside="closeDropdown"
        class="absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-64 overflow-y-auto"
      >
        <div class="p-2">
          <!-- Hours -->
          <div v-if="format === '12h'" class="grid grid-cols-12 gap-1 mb-2">
            <button
              v-for="hour in hours12"
              :key="hour.value"
              type="button"
              :class="[
                'px-3 py-2 text-sm rounded-lg transition-colors',
                selectedHour === hour.value
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate-100 text-slate-700',
              ]"
              @click="selectHour(hour.value)"
            >
              {{ hour.label }}
            </button>
          </div>
          <div v-else class="grid grid-cols-6 gap-1 mb-2">
            <button
              v-for="hour in hours24"
              :key="hour"
              type="button"
              :class="[
                'px-3 py-2 text-sm rounded-lg transition-colors',
                selectedHour === hour
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate-100 text-slate-700',
              ]"
              @click="selectHour(hour)"
            >
              {{ String(hour).padStart(2, '0') }}
            </button>
          </div>

          <!-- Minutes -->
          <div class="grid grid-cols-6 gap-1 mb-2">
            <button
              v-for="minute in minutes"
              :key="minute"
              type="button"
              :class="[
                'px-3 py-2 text-sm rounded-lg transition-colors',
                selectedMinute === minute
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate-100 text-slate-700',
              ]"
              @click="selectMinute(minute)"
            >
              {{ String(minute).padStart(2, '0') }}
            </button>
          </div>

          <!-- Seconds (if enabled) -->
          <div v-if="showSeconds" class="grid grid-cols-6 gap-1">
            <button
              v-for="second in seconds"
              :key="second"
              type="button"
              :class="[
                'px-3 py-2 text-sm rounded-lg transition-colors',
                selectedSecond === second
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate-100 text-slate-700',
              ]"
              @click="selectSecond(second)"
            >
              {{ String(second).padStart(2, '0') }}
            </button>
          </div>

          <!-- AM/PM для 12h формата -->
          <div v-if="format === '12h'" class="flex gap-2 mt-2 pt-2 border-t border-slate-200">
            <button
              type="button"
              :class="[
                'flex-1 px-3 py-2 text-sm rounded-lg transition-colors',
                isAM
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
              ]"
              @click="setAMPM(true)"
            >
              AM
            </button>
            <button
              type="button"
              :class="[
                'flex-1 px-3 py-2 text-sm rounded-lg transition-colors',
                !isAM
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
              ]"
              @click="setAMPM(false)"
            >
              PM
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import DXInput from "../DXInput/DXInput.vue";
import { ClockIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Значение времени (v-model) в формате HH:mm или HH:mm:ss */
  modelValue: { type: String, default: null },
  /** Формат времени: 12h | 24h */
  format: { type: String, default: "24h", validator: (v) => ["12h", "24h"].includes(v) },
  /** Показывать секунды */
  showSeconds: { type: Boolean, default: false },
  /** Placeholder */
  placeholder: { type: String, default: "" },
  /** Лейбл */
  label: { type: String, default: "" },
  /** Вспомогательный текст */
  helper: { type: String, default: "" },
  /** Текст ошибки */
  error: { type: String, default: "" },
  /** Обязательное поле */
  required: { type: Boolean, default: false },
  /** Отключенное состояние */
  disabled: { type: Boolean, default: false },
  /** Размер: xs | sm | md | lg | xl */
  size: { type: String, default: "md" },
  /** Минимальное время (HH:mm или HH:mm:ss) */
  minTime: { type: String, default: null },
  /** Максимальное время (HH:mm или HH:mm:ss) */
  maxTime: { type: String, default: null },
  /** Показывать dropdown для выбора */
  showDropdown: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue", "change", "blur", "focus"]);

const showDropdownState = ref(false);
const inputValue = ref("");

/**
 * Часы для 12-часового формата
 * 
 * @description
 * Генерирует массив часов для 12-часового формата (1-12) с метками.
 * 
 * @returns {Array} Массив объектов { value, label }
 */
const hours12 = computed(() => {
  return Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: String(i + 1),
  }));
});

/**
 * Часы для 24-часового формата
 * 
 * @description
 * Генерирует массив часов для 24-часового формата (0-23).
 * 
 * @returns {Array} Массив чисел от 0 до 23
 */
const hours24 = computed(() => {
  return Array.from({ length: 24 }, (_, i) => i);
});

/**
 * Минуты
 * 
 * @description
 * Генерирует массив минут с шагом 5 (0, 5, 10, ..., 55).
 * 
 * @returns {Array} Массив минут
 */
const minutes = computed(() => {
  return Array.from({ length: 12 }, (_, i) => i * 5);
});

/**
 * Секунды
 * 
 * @description
 * Генерирует массив секунд с шагом 5 (0, 5, 10, ..., 55).
 * 
 * @returns {Array} Массив секунд
 */
const seconds = computed(() => {
  return Array.from({ length: 12 }, (_, i) => i * 5);
});

/**
 * Выбранный час
 * 
 * @description
 * Извлекает час из текущего значения времени.
 * Для 12h формата возвращает час в диапазоне 1-12.
 * 
 * @returns {number|null} Выбранный час или null
 */
const selectedHour = computed(() => {
  if (!props.modelValue) return null;
  const time = parseTime(props.modelValue);
  if (!time) return null;
  
  if (props.format === "12h") {
    // Преобразуем 0-23 в 1-12 для отображения
    if (time.hour === 0) return 12;
    if (time.hour > 12) return time.hour - 12;
    return time.hour;
  }
  
  return time.hour;
});

/**
 * Выбранная минута
 * 
 * @description
 * Извлекает минуту из текущего значения времени.
 * 
 * @returns {number|null} Выбранная минута или null
 */
const selectedMinute = computed(() => {
  if (!props.modelValue) return null;
  const time = parseTime(props.modelValue);
  if (!time) return null;
  return time.minute;
});

/**
 * Выбранная секунда
 * 
 * @description
 * Извлекает секунду из текущего значения времени.
 * 
 * @returns {number|null} Выбранная секунда или null
 */
const selectedSecond = computed(() => {
  if (!props.modelValue) return null;
  const time = parseTime(props.modelValue);
  if (!time) return null;
  return time.second || 0;
});

/**
 * Определяет, является ли время AM (для 12h формата)
 * 
 * @description
 * Для 12-часового формата определяет, является ли время до полудня (AM).
 * 
 * @returns {boolean} true если AM, false если PM
 */
const isAM = computed(() => {
  if (!props.modelValue || props.format !== "12h") return true;
  const time = parseTime(props.modelValue);
  if (!time) return true;
  return time.hour < 12;
});

/**
 * Отображаемое значение времени
 * 
 * @description
 * Форматирует значение времени для отображения в input в зависимости от формата.
 * 
 * @returns {string} Отформатированное время
 */
const displayValue = computed(() => {
  if (!props.modelValue) return inputValue.value || "";
  
  const time = parseTime(props.modelValue);
  if (!time) return props.modelValue;

  if (props.format === "12h") {
    let hour = time.hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;

    if (props.showSeconds) {
      return `${String(hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second || 0).padStart(2, "0")} ${ampm}`;
    }
    return `${String(hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")} ${ampm}`;
  }

  // 24h format
  if (props.showSeconds) {
    return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second || 0).padStart(2, "0")}`;
  }
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`;
});


/**
 * Парсит строку времени в объект
 * 
 * @description
 * Парсит строку времени в формате HH:mm или HH:mm:ss в объект с hour, minute, second.
 * Поддерживает как 12h, так и 24h форматы.
 * 
 * @param {string} timeStr - Строка времени
 * @returns {Object|null} Объект { hour, minute, second } или null при ошибке
 */
function parseTime(timeStr) {
  if (!timeStr) return null;

  // Парсинг 12h формата (например, "02:30 PM")
  if (props.format === "12h") {
    const match12h = timeStr.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);
    if (match12h) {
      let hour = parseInt(match12h[1], 10);
      const minute = parseInt(match12h[2], 10);
      const second = match12h[3] ? parseInt(match12h[3], 10) : 0;
      const ampm = match12h[4]?.toUpperCase();

      if (ampm === "PM" && hour !== 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;

      return { hour, minute, second };
    }
  }

  // Парсинг 24h формата (например, "14:30" или "14:30:45")
  const match24h = timeStr.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);
  if (match24h) {
    const hour = parseInt(match24h[1], 10);
    const minute = parseInt(match24h[2], 10);
    const second = match24h[3] ? parseInt(match24h[3], 10) : 0;

    if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
      return { hour, minute, second };
    }
  }

  return null;
}

/**
 * Форматирует время в строку
 * 
 * @description
 * Форматирует объект времени в строку в зависимости от формата и настроек.
 * 
 * @param {Object} time - Объект { hour, minute, second }
 * @returns {string} Отформатированная строка времени
 */
function formatTime(time) {
  if (!time) return "";

  if (props.format === "12h") {
    let hour = time.hour;
    const ampm = hour >= 12 ? "PM" : "AM";
    if (hour === 0) hour = 12;
    else if (hour > 12) hour -= 12;

    if (props.showSeconds) {
      return `${String(hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second || 0).padStart(2, "0")} ${ampm}`;
    }
    return `${String(hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")} ${ampm}`;
  }

  // 24h format
  if (props.showSeconds) {
    return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}:${String(time.second || 0).padStart(2, "0")}`;
  }
  return `${String(time.hour).padStart(2, "0")}:${String(time.minute).padStart(2, "0")}`;
}

/**
 * Валидирует время
 * 
 * @description
 * Проверяет, что время находится в допустимом диапазоне (если указаны minTime/maxTime)
 * и соответствует формату.
 * 
 * @param {Object} time - Объект { hour, minute, second }
 * @returns {boolean} true если время валидно
 */
function validateTime(time) {
  if (!time) return false;

  // Проверка диапазона
  if (props.minTime) {
    const min = parseTime(props.minTime);
    if (min) {
      const timeMinutes = time.hour * 60 + time.minute + (time.second || 0) / 60;
      const minMinutes = min.hour * 60 + min.minute + (min.second || 0) / 60;
      if (timeMinutes < minMinutes) return false;
    }
  }

  if (props.maxTime) {
    const max = parseTime(props.maxTime);
    if (max) {
      const timeMinutes = time.hour * 60 + time.minute + (time.second || 0) / 60;
      const maxMinutes = max.hour * 60 + max.minute + (max.second || 0) / 60;
      if (timeMinutes > maxMinutes) return false;
    }
  }

  return true;
}

/**
 * Обработчик ввода времени
 * 
 * @description
 * Обрабатывает ручной ввод времени пользователем, парсит и валидирует значение.
 * 
 * @param {string} value - Введенное значение
 */
function handleInput(value) {
  inputValue.value = value;
  const time = parseTime(value);
  
  if (time && validateTime(time)) {
    const formatted = formatTime(time);
    emit("update:modelValue", formatted);
    emit("change", formatted);
  }
}

/**
 * Выбор часа
 * 
 * @description
 * Устанавливает выбранный час и обновляет значение времени.
 * Для 12h формата учитывает текущий период (AM/PM).
 * 
 * @param {number} hour - Выбранный час (1-12 для 12h, 0-23 для 24h)
 */
function selectHour(hour) {
  const currentTime = props.modelValue ? parseTime(props.modelValue) : { hour: 0, minute: 0, second: 0 };
  let newHour = hour;

  if (props.format === "12h") {
    // Для 12h формата: hour это 1-12, нужно преобразовать в 0-23
    if (hour === 12) {
      newHour = isAM.value ? 0 : 12;
    } else {
      newHour = isAM.value ? hour : hour + 12;
    }
  }

  const newTime = {
    hour: newHour,
    minute: currentTime?.minute || 0,
    second: currentTime?.second || 0,
  };

  if (validateTime(newTime)) {
    const formatted = formatTime(newTime);
    emit("update:modelValue", formatted);
    emit("change", formatted);
  }
}

/**
 * Выбор минуты
 * 
 * @description
 * Устанавливает выбранную минуту и обновляет значение времени.
 * 
 * @param {number} minute - Выбранная минута
 */
function selectMinute(minute) {
  const currentTime = props.modelValue ? parseTime(props.modelValue) : { hour: 0, minute: 0, second: 0 };
  const newTime = {
    hour: currentTime?.hour || 0,
    minute,
    second: currentTime?.second || 0,
  };

  if (validateTime(newTime)) {
    const formatted = formatTime(newTime);
    emit("update:modelValue", formatted);
    emit("change", formatted);
  }
}

/**
 * Выбор секунды
 * 
 * @description
 * Устанавливает выбранную секунду и обновляет значение времени.
 * 
 * @param {number} second - Выбранная секунда
 */
function selectSecond(second) {
  const currentTime = props.modelValue ? parseTime(props.modelValue) : { hour: 0, minute: 0, second: 0 };
  const newTime = {
    hour: currentTime?.hour || 0,
    minute: currentTime?.minute || 0,
    second,
  };

  if (validateTime(newTime)) {
    const formatted = formatTime(newTime);
    emit("update:modelValue", formatted);
    emit("change", formatted);
  }
}

/**
 * Установка AM/PM
 * 
 * @description
 * Устанавливает период дня (AM/PM) для 12-часового формата.
 * 
 * @param {boolean} am - true для AM, false для PM
 */
function setAMPM(am) {
  if (props.format !== "12h") return;
  
  const currentTime = props.modelValue ? parseTime(props.modelValue) : { hour: 0, minute: 0, second: 0 };
  if (!currentTime) return;

  let hour = currentTime.hour;
  if (am && hour >= 12) {
    hour -= 12;
    if (hour === 0) hour = 12;
  } else if (!am && hour < 12) {
    if (hour === 0) hour = 12;
    hour += 12;
  }

  const newTime = { ...currentTime, hour };
  if (validateTime(newTime)) {
    const formatted = formatTime(newTime);
    emit("update:modelValue", formatted);
    emit("change", formatted);
  }
}

/**
 * Обработчик фокуса
 * 
 * @description
 * Открывает dropdown при фокусе на input (если showDropdown включен).
 * 
 * @param {Event} event - Событие фокуса
 */
function handleFocus(event) {
  if (props.showDropdown) {
    showDropdownState.value = true;
  }
  emit("focus", event);
}

/**
 * Обработчик blur
 * 
 * @description
 * Закрывает dropdown при потере фокуса и валидирует введенное значение.
 * 
 * @param {Event} event - Событие blur
 */
function handleBlur(event) {
  showDropdownState.value = false;
  
  // Валидация при blur
  if (inputValue.value) {
    const time = parseTime(inputValue.value);
    if (time && validateTime(time)) {
      const formatted = formatTime(time);
      emit("update:modelValue", formatted);
    } else {
      // Если значение невалидно, восстанавливаем предыдущее
      inputValue.value = displayValue.value;
    }
  }
  
  emit("blur", event);
}

/**
 * Закрытие dropdown
 * 
 * @description
 * Закрывает dropdown при клике вне компонента.
 */
function closeDropdown() {
  showDropdownState.value = false;
}

// Директива для клика вне элемента
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

// Синхронизация showDropdownState с prop showDropdown
watch(
  () => props.showDropdown,
  (newVal) => {
    if (!newVal) {
      showDropdownState.value = false;
    }
  }
);
</script>

