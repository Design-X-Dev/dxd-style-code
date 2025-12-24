<template>
  <div
    :class="filterClasses"
    data-component="DXDataFilter"
    :data-grouping="grouping"
  >
    <!-- Заголовок -->
    <div v-if="title || $slots.header" :class="headerClasses">
      <slot name="header">
        <DXHeading v-if="title" level="3" size="lg" weight="semibold" color="default">
          {{ title }}
        </DXHeading>
      </slot>
    </div>

    <!-- Группы фильтров -->
    <div :class="filtersClasses">
      <div
        v-for="(group, groupIndex) in filterGroups"
        :key="groupIndex"
        :class="groupClasses"
      >
        <!-- Группировка AND/OR -->
        <div v-if="groupIndex > 0" :class="groupingClasses">
          <DXButton
            :variant="grouping === 'AND' ? 'primary' : 'ghost'"
            size="sm"
            @click="toggleGrouping"
          >
            {{ grouping }}
          </DXButton>
        </div>

        <!-- Фильтры в группе -->
        <div :class="filtersInGroupClasses">
          <div
            v-for="(filter, filterIndex) in group"
            :key="filter.id || filterIndex"
            :class="filterItemClasses"
          >
            <!-- Удаление фильтра -->
            <DXButton
              v-if="removable"
              variant="ghost"
              size="sm"
              @click="removeFilter(filter.id)"
            >
              <template #icon>
                <DXIcon :icon="XMarkIcon" size="sm" />
              </template>
            </DXButton>

            <!-- Определение фильтра -->
            <div class="flex-1">
              <DXText tag="label" size="sm" weight="medium" color="default" class="block mb-1">
                {{ filter.label || filterDefinitions[filter.id]?.label }}
              </DXText>

              <!-- Текстовый фильтр -->
              <DXInput
                v-if="filter.type === 'text' || !filter.type"
                v-model="filter.value"
                :placeholder="filter.placeholder || 'Введите значение'"
                @update:model-value="handleFilterChange"
              />

              <!-- Числовой фильтр -->
              <div v-else-if="filter.type === 'number'" class="flex gap-2">
                <DXInput
                  v-model="filter.value.min"
                  type="number"
                  placeholder="От"
                  @update:model-value="handleFilterChange"
                />
                <DXInput
                  v-model="filter.value.max"
                  type="number"
                  placeholder="До"
                  @update:model-value="handleFilterChange"
                />
              </div>

              <!-- Select фильтр -->
              <DXSelect
                v-else-if="filter.type === 'select'"
                v-model="filter.value"
                :options="filter.options || filterDefinitions[filter.id]?.options"
                :placeholder="filter.placeholder || 'Выберите значение'"
                @update:model-value="handleFilterChange"
              />

              <!-- Date фильтр -->
              <DXDatePicker
                v-else-if="filter.type === 'date'"
                v-model="filter.value"
                :range="filter.range"
                @update:model-value="handleFilterChange"
              />

              <!-- Кастомный фильтр через slot -->
              <slot
                v-else
                :name="`filter-${filter.type}`"
                :filter="filter"
                :filter-definition="filterDefinitions[filter.id]"
              >
                <DXText tag="p" size="sm" color="muted">
                  Используйте slot filter-{{ filter.type }} для кастомного фильтра
                </DXText>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Действия -->
    <div v-if="$slots.actions || showActions" :class="actionsClasses">
      <slot name="actions">
        <DXButton variant="ghost" @click="handleReset">Сбросить</DXButton>
        <DXButton variant="primary" @click="handleApply">Применить</DXButton>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXInput from "../DXInput/DXInput.vue";
import DXSelect from "../DXSelect/DXSelect.vue";
import DXDatePicker from "../DXDatePicker/DXDatePicker.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXHeading from "../../atoms/DXHeading/DXHeading.vue";
import DXText from "../../atoms/DXText/DXText.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Активные фильтры (v-model)
   * Формат: [{ id, type, value, label?, placeholder?, options?, range? }]
   */
  filters: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Определения фильтров
   * Формат: [{ id, label, type, options?, placeholder? }]
   */
  filterDefinitions: {
    type: Array,
    default: () => [],
  },
  /**
   * Группировка условий: AND | OR
   * @default 'AND'
   */
  grouping: {
    type: String,
    default: "AND",
    validator: (v) => ["AND", "OR"].includes(v),
  },
  /**
   * Заголовок фильтра
   */
  title: { type: String, default: "" },
  /**
   * Можно ли удалять фильтры
   * @default true
   */
  removable: { type: Boolean, default: true },
  /**
   * Показывать кнопки действий
   * @default true
   */
  showActions: { type: Boolean, default: true },
});

const emit = defineEmits([
  "update:filters",
  "apply",
  "reset",
  "filter-change",
  "grouping-change",
]);

const internalFilters = ref([...props.filters]);
const internalGrouping = ref(props.grouping);

/**
 * Группы фильтров
 * 
 * @description
 * Разбивает фильтры на группы для отображения с группировкой AND/OR.
 * 
 * @returns {Array} Массив групп фильтров
 */
const filterGroups = computed(() => {
  // Упрощенная логика: все фильтры в одной группе
  // В реальной реализации можно разбивать на несколько групп
  return [internalFilters.value];
});

/**
 * Классы для контейнера фильтра
 * 
 * @description
 * Базовые классы для контейнера фильтра.
 * 
 * @returns {Array} Массив классов
 */
const filterClasses = computed(() =>
  useClassComposition("w-full")
);

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-4", useSpacing("md", "padding"))
);

/**
 * Классы для контейнера фильтров
 * 
 * @description
 * Классы для контейнера с фильтрами.
 * 
 * @returns {Array} Массив классов
 */
const filtersClasses = computed(() =>
  useClassComposition("space-y-4")
);

/**
 * Классы для группы фильтров
 * 
 * @description
 * Классы для группы фильтров.
 * 
 * @returns {Array} Массив классов
 */
const groupClasses = computed(() =>
  useClassComposition("space-y-2")
);

/**
 * Классы для группировки AND/OR
 * 
 * @description
 * Классы для кнопки группировки.
 * 
 * @returns {Array} Массив классов
 */
const groupingClasses = computed(() =>
  useClassComposition("flex items-center justify-center py-2")
);

/**
 * Классы для фильтров в группе
 * 
 * @description
 * Классы для контейнера фильтров в группе.
 * 
 * @returns {Array} Массив классов
 */
const filtersInGroupClasses = computed(() =>
  useClassComposition("space-y-3")
);

/**
 * Классы для элемента фильтра
 * 
 * @description
 * Классы для каждого элемента фильтра.
 * 
 * @returns {Array} Массив классов
 */
const filterItemClasses = computed(() =>
  useClassComposition("flex items-start gap-2")
);

/**
 * Классы для секции действий
 * 
 * @description
 * Классы для секции с кнопками действий.
 * 
 * @returns {Array} Массив классов
 */
const actionsClasses = computed(() =>
  useClassComposition(
    "flex items-center justify-end gap-2 mt-4",
    useSpacing("md", "padding")
  )
);

/**
 * Обработчик изменения фильтра
 * 
 * @description
 * Эмитит событие при изменении значения фильтра.
 */
function handleFilterChange() {
  emit("update:filters", [...internalFilters.value]);
  emit("filter-change", [...internalFilters.value]);
}

/**
 * Переключение группировки
 * 
 * @description
 * Переключает группировку между AND и OR.
 */
function toggleGrouping() {
  internalGrouping.value = internalGrouping.value === "AND" ? "OR" : "AND";
  emit("grouping-change", internalGrouping.value);
}

/**
 * Удаление фильтра
 * 
 * @description
 * Удаляет фильтр по ID.
 * 
 * @param {string|number} filterId - ID фильтра
 */
function removeFilter(filterId) {
  internalFilters.value = internalFilters.value.filter(
    (f) => f.id !== filterId
  );
  handleFilterChange();
}

/**
 * Применение фильтров
 * 
 * @description
 * Эмитит событие применения фильтров.
 */
function handleApply() {
  emit("apply", {
    filters: [...internalFilters.value],
    grouping: internalGrouping.value,
  });
}

/**
 * Сброс фильтров
 * 
 * @description
 * Сбрасывает все фильтры.
 */
function handleReset() {
  internalFilters.value = [];
  internalGrouping.value = "AND";
  emit("reset");
  emit("update:filters", []);
}

// Синхронизация с prop filters
watch(
  () => props.filters,
  (newFilters) => {
    internalFilters.value = [...newFilters];
  },
  { deep: true }
);

// Синхронизация с prop grouping
watch(
  () => props.grouping,
  (newGrouping) => {
    internalGrouping.value = newGrouping;
  }
);
</script>

