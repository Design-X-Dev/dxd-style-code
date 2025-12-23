<template>
  <div
    :class="panelClasses"
    data-component="DXSettingsPanel"
    :data-searchable="searchable"
  >
    <!-- Search -->
    <div v-if="searchable" :class="searchClasses">
      <DXInput
        v-model="searchQuery"
        placeholder="Поиск настроек..."
        :prefix-icon="MagnifyingGlassIcon"
      />
    </div>

    <!-- Layout: Tabs or Sidebar -->
    <div :class="layoutClasses">
      <!-- Categories (Tabs or Sidebar) -->
      <div v-if="layout === 'tabs'" class="mb-6">
        <DXTabs v-model="activeCategory" :tabs="categoryTabs">
          <template
            v-for="category in categories"
            :key="category.id"
            #[`tab-${category.id}`]
          >
            <slot :name="`category-${category.id}`" :category="category" :settings="filteredSettings">
              <div class="space-y-6">
                <div
                  v-for="group in getCategoryGroups(category.id)"
                  :key="group.id || group.title"
                  class="space-y-4"
                >
                  <h4 v-if="group.title" class="text-sm font-semibold text-slate-700">
                    {{ group.title }}
                  </h4>
                  <div class="space-y-3">
                    <slot
                      :name="`setting-${group.id || group.title}`"
                      :group="group"
                      :settings="filteredSettings"
                    >
                      <div
                        v-for="setting in group.settings"
                        :key="setting.id"
                        class="flex items-center justify-between"
                      >
                        <div class="flex-1">
                          <label class="text-sm font-medium text-slate-900">
                            {{ setting.label }}
                          </label>
                          <p v-if="setting.description" class="text-xs text-slate-500 mt-1">
                            {{ setting.description }}
                          </p>
                        </div>
                        <div class="ml-4">
                          <component
                            :is="getSettingComponent(setting.type)"
                            v-model="filteredSettings[setting.id]"
                            v-bind="getSettingProps(setting)"
                            @update:model-value="handleSettingChange(setting.id, $event)"
                          />
                        </div>
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </slot>
          </template>
        </DXTabs>
      </div>

      <div v-else-if="layout === 'sidebar'" class="flex gap-6">
        <!-- Sidebar -->
        <div :class="sidebarClasses">
          <nav class="space-y-1">
            <button
              v-for="category in categories"
              :key="category.id"
              :class="categoryButtonClasses(category.id)"
              @click="activeCategory = category.id"
            >
              {{ category.label }}
            </button>
          </nav>
        </div>

        <!-- Content -->
        <div :class="contentClasses">
          <div
            v-for="category in categories"
            :key="category.id"
            v-show="activeCategory === category.id"
            class="space-y-6"
          >
            <slot :name="`category-${category.id}`" :category="category" :settings="filteredSettings">
              <div
                v-for="group in getCategoryGroups(category.id)"
                :key="group.id || group.title"
                class="space-y-4"
              >
                <h4 v-if="group.title" class="text-sm font-semibold text-slate-700">
                  {{ group.title }}
                </h4>
                <div class="space-y-3">
                  <div
                    v-for="setting in group.settings"
                    :key="setting.id"
                    class="flex items-center justify-between"
                  >
                    <div class="flex-1">
                      <label class="text-sm font-medium text-slate-900">
                        {{ setting.label }}
                      </label>
                      <p v-if="setting.description" class="text-xs text-slate-500 mt-1">
                        {{ setting.description }}
                      </p>
                    </div>
                    <div class="ml-4">
                      <component
                        :is="getSettingComponent(setting.type)"
                        v-model="filteredSettings[setting.id]"
                        v-bind="getSettingProps(setting)"
                        @update:model-value="handleSettingChange(setting.id, $event)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div v-if="$slots.actions || showActions" :class="actionsClasses">
      <slot name="actions">
        <DXButton variant="ghost" @click="handleReset">Сбросить</DXButton>
        <DXButton variant="primary" @click="handleSave">Сохранить</DXButton>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXInput from "../../molecules/DXInput/DXInput.vue";
import DXSelect from "../../molecules/DXSelect/DXSelect.vue";
import DXToggle from "../../atoms/DXToggle/DXToggle.vue";
import DXTabs from "../DXTabs/DXTabs.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Настройки (v-model)
   * Формат: { [settingId]: value }
   */
  settings: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  /**
   * Категории настроек
   * Формат: [{ id, label, groups?: [{ title, settings: [{ id, label, type, ... }] }] }]
   */
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Поиск по настройкам
   * @default false
   */
  searchable: { type: Boolean, default: false },
  /**
   * Макет: tabs | sidebar
   * @default 'tabs'
   */
  layout: {
    type: String,
    default: "tabs",
    validator: (v) => ["tabs", "sidebar"].includes(v),
  },
  /**
   * Показывать кнопки действий
   * @default true
   */
  showActions: { type: Boolean, default: true },
});

const emit = defineEmits([
  "update:settings",
  "save",
  "reset",
  "change",
  "category-change",
]);

const activeCategory = ref(props.categories[0]?.id || "");
const searchQuery = ref("");
const filteredSettings = ref({ ...props.settings });

/**
 * Вкладки категорий
 * 
 * @description
 * Преобразует категории в формат для DXTabs.
 * 
 * @returns {Array} Массив вкладок
 */
const categoryTabs = computed(() => {
  return props.categories.map((category) => ({
    id: category.id,
    label: category.label,
  }));
});

/**
 * Отфильтрованные настройки
 * 
 * @description
 * Фильтрует настройки по поисковому запросу.
 * 
 * @returns {Object} Отфильтрованные настройки
 */
const filteredSettingsComputed = computed(() => {
  if (!props.searchable || !searchQuery.value.trim()) {
    return filteredSettings.value;
  }

  const query = searchQuery.value.toLowerCase();
  const filtered = {};

  props.categories.forEach((category) => {
    category.groups?.forEach((group) => {
      group.settings?.forEach((setting) => {
        if (
          setting.label.toLowerCase().includes(query) ||
          setting.description?.toLowerCase().includes(query)
        ) {
          filtered[setting.id] = filteredSettings.value[setting.id];
        }
      });
    });
  });

  return filtered;
});

/**
 * Классы для панели
 * 
 * @description
 * Базовые классы для панели настроек.
 * 
 * @returns {Array} Массив классов
 */
const panelClasses = computed(() =>
  useClassComposition("w-full", useSpacing("md", "padding"))
);

/**
 * Классы для поиска
 * 
 * @description
 * Классы для секции поиска.
 * 
 * @returns {Array} Массив классов
 */
const searchClasses = computed(() =>
  useClassComposition("mb-6")
);

/**
 * Классы для layout
 * 
 * @description
 * Классы для контейнера layout.
 * 
 * @returns {Array} Массив классов
 */
const layoutClasses = computed(() =>
  useClassComposition("w-full")
);

/**
 * Классы для sidebar
 * 
 * @description
 * Классы для боковой панели категорий.
 * 
 * @returns {Array} Массив классов
 */
const sidebarClasses = computed(() =>
  useClassComposition("w-48 flex-shrink-0")
);

/**
 * Классы для контента
 * 
 * @description
 * Классы для области контента.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() =>
  useClassComposition("flex-1")
);

/**
 * Классы для кнопки категории
 * 
 * @description
 * Классы для кнопки категории в sidebar.
 * 
 * @param {string} categoryId - ID категории
 * @returns {Array} Массив классов
 */
function categoryButtonClasses(categoryId) {
  return useClassComposition(
    "w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
    activeCategory.value === categoryId
      ? "bg-slate-900 text-white"
      : "text-slate-700 hover:bg-slate-100"
  );
}

/**
 * Классы для действий
 * 
 * @description
 * Классы для секции действий.
 * 
 * @returns {Array} Массив классов
 */
const actionsClasses = computed(() =>
  useClassComposition("flex justify-end gap-2 mt-6 pt-6 border-t border-slate-200")
);

/**
 * Получение групп категории
 * 
 * @description
 * Возвращает группы настроек для указанной категории.
 * 
 * @param {string} categoryId - ID категории
 * @returns {Array} Массив групп
 */
function getCategoryGroups(categoryId) {
  const category = props.categories.find((c) => c.id === categoryId);
  return category?.groups || [];
}

/**
 * Получение компонента для настройки
 * 
 * @description
 * Возвращает компонент для типа настройки.
 * 
 * @param {string} type - Тип настройки
 * @returns {Object} Компонент
 */
function getSettingComponent(type) {
  const components = {
    input: DXInput,
    select: DXSelect,
    toggle: DXToggle,
  };
  return components[type] || DXInput;
}

/**
 * Получение props для настройки
 * 
 * @description
 * Возвращает props для компонента настройки.
 * 
 * @param {Object} setting - Объект настройки
 * @returns {Object} Props
 */
function getSettingProps(setting) {
  const baseProps = {
    placeholder: setting.placeholder,
    disabled: setting.disabled,
  };

  if (setting.type === "select") {
    return {
      ...baseProps,
      options: setting.options || [],
    };
  }

  return baseProps;
}

/**
 * Обработчик изменения настройки
 * 
 * @description
 * Обрабатывает изменение значения настройки.
 * 
 * @param {string} settingId - ID настройки
 * @param {any} value - Новое значение
 */
function handleSettingChange(settingId, value) {
  filteredSettings.value[settingId] = value;
  emit("update:settings", { ...filteredSettings.value });
  emit("change", { settingId, value });
}

/**
 * Обработчик сохранения
 * 
 * @description
 * Эмитит событие сохранения настроек.
 */
function handleSave() {
  emit("save", { ...filteredSettings.value });
}

/**
 * Обработчик сброса
 * 
 * @description
 * Сбрасывает настройки к значениям по умолчанию.
 */
function handleReset() {
  filteredSettings.value = { ...props.settings };
  emit("reset");
  emit("update:settings", { ...filteredSettings.value });
}

// Синхронизация с prop settings
watch(
  () => props.settings,
  (newSettings) => {
    filteredSettings.value = { ...newSettings };
  },
  { deep: true }
);

// Синхронизация activeCategory
watch(activeCategory, (newCategory) => {
  emit("category-change", newCategory);
});
</script>

