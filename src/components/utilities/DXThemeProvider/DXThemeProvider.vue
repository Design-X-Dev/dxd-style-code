<template>
  <div
    :class="providerClasses"
    :data-theme="currentTheme"
    data-component="DXThemeProvider"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, watch, provide, onMounted } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";

const props = defineProps({
  /**
   * Текущая тема
   * @default 'light'
   */
  theme: {
    type: String,
    default: "light",
  },
  /**
   * Объект с доступными темами
   * Формат: { themeName: { name, colors: { primary, background, text, ... } } }
   * @default {}
   */
  themes: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Сохранять тему в localStorage
   * @default false
   */
  persist: { type: Boolean, default: false },
  /**
   * Ключ для сохранения в localStorage
   * @default 'dx-theme'
   */
  storageKey: { type: String, default: "dx-theme" },
  /**
   * Использовать системную тему (prefers-color-scheme)
   * @default false
   */
  useSystemTheme: { type: Boolean, default: false },
});

const emit = defineEmits(["theme-change"]);

const currentTheme = ref(props.theme);

/**
 * Классы для провайдера
 * 
 * @description
 * Базовые классы для контейнера провайдера тем.
 * 
 * @returns {Array} Массив классов
 */
const providerClasses = computed(() => useClassComposition("w-full h-full"));

/**
 * Текущая тема с учетом системной
 * 
 * @description
 * Возвращает текущую тему, учитывая системную тему если useSystemTheme включен.
 * 
 * @returns {string} Название текущей темы
 */
const effectiveTheme = computed(() => {
  if (props.useSystemTheme) {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return systemTheme;
  }
  return currentTheme.value;
});

/**
 * Цвета текущей темы
 * 
 * @description
 * Извлекает цвета из объекта themes для текущей темы.
 * 
 * @returns {Object} Объект с цветами темы
 */
const themeColors = computed(() => {
  const theme = props.themes[effectiveTheme.value];
  if (!theme || !theme.colors) {
    return {};
  }
  return theme.colors;
});

/**
 * Применение CSS переменных темы
 * 
 * @description
 * Применяет цвета темы как CSS переменные к корневому элементу.
 */
function applyTheme() {
  const colors = themeColors.value;
  const root = document.documentElement;

  Object.keys(colors).forEach((key) => {
    const cssVar = `--color-${key}`;
    root.style.setProperty(cssVar, colors[key]);
  });

  // Применяем класс темы к body для удобства стилизации
  document.body.setAttribute("data-theme", effectiveTheme.value);
}

/**
 * Загрузка темы из localStorage
 * 
 * @description
 * Загружает сохраненную тему из localStorage если persist включен.
 */
function loadThemeFromStorage() {
  if (!props.persist) return;

  try {
    const savedTheme = localStorage.getItem(props.storageKey);
    if (savedTheme && props.themes[savedTheme]) {
      currentTheme.value = savedTheme;
      emit("theme-change", savedTheme);
    }
  } catch (error) {
    console.warn("DXThemeProvider: Ошибка загрузки темы из localStorage", error);
  }
}

/**
 * Сохранение темы в localStorage
 * 
 * @description
 * Сохраняет текущую тему в localStorage если persist включен.
 */
function saveThemeToStorage() {
  if (!props.persist) return;

  try {
    localStorage.setItem(props.storageKey, currentTheme.value);
  } catch (error) {
    console.warn("DXThemeProvider: Ошибка сохранения темы в localStorage", error);
  }
}

/**
 * Переключение темы
 * 
 * @description
 * Переключает тему на следующую из списка доступных тем.
 * 
 * @param {string} themeName - Название темы для переключения (опционально)
 */
function setTheme(themeName = null) {
  const availableThemes = Object.keys(props.themes);
  if (availableThemes.length === 0) return;

  if (themeName && props.themes[themeName]) {
    currentTheme.value = themeName;
  } else {
    // Переключение на следующую тему
    const currentIndex = availableThemes.indexOf(currentTheme.value);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    currentTheme.value = availableThemes[nextIndex];
  }

  saveThemeToStorage();
  emit("theme-change", currentTheme.value);
}

// Provide темы для дочерних компонентов
provide("theme", {
  currentTheme: computed(() => currentTheme.value),
  effectiveTheme,
  themeColors,
  setTheme,
  availableThemes: computed(() => Object.keys(props.themes)),
});

// Применение темы при изменении
watch(
  [effectiveTheme, () => props.themes],
  () => {
    applyTheme();
  },
  { immediate: true }
);

// Отслеживание изменений системной темы
let systemThemeMediaQuery = null;
if (props.useSystemTheme) {
  systemThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  systemThemeMediaQuery.addEventListener("change", () => {
    applyTheme();
  });
}

// Инициализация при монтировании
onMounted(() => {
  loadThemeFromStorage();
  applyTheme();
});

// Реакция на изменение prop theme
watch(
  () => props.theme,
  (newTheme) => {
    if (newTheme !== currentTheme.value && props.themes[newTheme]) {
      currentTheme.value = newTheme;
      saveThemeToStorage();
      emit("theme-change", newTheme);
    }
  }
);
</script>

<style scoped>
/* CSS переменные применяются динамически через JavaScript */
</style>

