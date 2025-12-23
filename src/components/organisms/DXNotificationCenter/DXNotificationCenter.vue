<template>
  <div
    :class="centerClasses"
    data-component="DXNotificationCenter"
    :data-group-by="groupBy"
  >
    <!-- Trigger -->
    <slot name="trigger">
      <DXButton variant="ghost" size="md" @click="toggleDropdown">
        <template #icon>
          <DXIcon :icon="BellIcon" size="md" />
        </template>
        <DXBadge v-if="unreadCount > 0" :count="unreadCount" />
      </DXButton>
    </slot>

    <!-- Dropdown -->
    <DXDropdown
      v-model:open="isOpen"
      :position="position"
      :width="width"
      :max-height="maxHeight"
    >
      <template #trigger>
        <div></div>
      </template>

      <!-- Header -->
      <div v-if="showHeader || $slots.header" :class="headerClasses">
        <slot name="header">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-slate-900">Уведомления</h3>
            <DXButton
              v-if="unreadCount > 0"
              size="sm"
              variant="ghost"
              @click="handleMarkAllRead"
            >
              Отметить все как прочитанные
            </DXButton>
          </div>
        </slot>
      </div>

      <!-- Filters -->
      <div v-if="filterable && filterOptions.length > 0" :class="filtersClasses">
        <DXButton
          v-for="option in filterOptions"
          :key="option.value"
          size="sm"
          :variant="activeFilter === option.value ? 'primary' : 'ghost'"
          @click="handleFilter(option.value)"
        >
          {{ option.label }}
        </DXButton>
      </div>

      <!-- Notifications List -->
      <div :class="listClasses">
        <div
          v-for="group in groupedNotifications"
          :key="group.key"
          class="mb-4"
        >
          <div v-if="groupBy" :class="groupHeaderClasses">
            {{ group.label }}
          </div>
          <div :class="notificationsClasses">
            <div
              v-for="notification in group.items"
              :key="notification.id"
              :class="notificationClasses(notification)"
              @click="handleNotificationClick(notification)"
            >
              <slot
                name="notification"
                :notification="notification"
                :mark-read="() => handleMarkRead(notification.id)"
                :delete="() => handleDelete(notification.id)"
              >
                <div class="flex gap-3">
                  <DXIcon
                    :icon="getNotificationIcon(notification.type)"
                    :size="'md'"
                    :class="iconClasses(notification.type)"
                  />
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                      <span class="font-semibold text-slate-900">
                        {{ notification.title }}
                      </span>
                      <span
                        v-if="!notification.read"
                        class="w-2 h-2 bg-blue-500 rounded-full"
                      ></span>
                    </div>
                    <p class="text-sm text-slate-600 mb-1">
                      {{ notification.message }}
                    </p>
                    <span class="text-xs text-slate-500">
                      {{ formatTime(notification.date) }}
                    </span>
                  </div>
                  <div class="flex flex-col gap-1">
                    <DXButton
                      v-if="!notification.read"
                      size="sm"
                      variant="ghost"
                      @click.stop="handleMarkRead(notification.id)"
                    >
                      <template #icon>
                        <DXIcon :icon="CheckIcon" size="xs" />
                      </template>
                    </DXButton>
                    <DXButton
                      size="sm"
                      variant="ghost"
                      @click.stop="handleDelete(notification.id)"
                    >
                      <template #icon>
                        <DXIcon :icon="XMarkIcon" size="xs" />
                      </template>
                    </DXButton>
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredNotifications.length === 0" :class="emptyClasses">
        <p class="text-sm text-slate-500">Нет уведомлений</p>
      </div>
    </DXDropdown>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSpacing } from "@/composables/useSpacing";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXBadge from "../../atoms/DXBadge/DXBadge.vue";
import DXDropdown from "../DXDropdown/DXDropdown.vue";
import {
  BellIcon,
  CheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Уведомления
   * Формат: [{ id, type, title, message, date, read, icon? }]
   */
  notifications: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Количество непрочитанных
   */
  unreadCount: {
    type: Number,
    default: 0,
  },
  /**
   * Группировка: date | type | none
   * @default 'date'
   */
  groupBy: {
    type: String,
    default: "date",
    validator: (v) => ["date", "type", "none"].includes(v),
  },
  /**
   * Фильтрация по типу
   */
  filterBy: { type: String, default: "" },
  /**
   * Показывать фильтры
   * @default false
   */
  filterable: { type: Boolean, default: false },
  /**
   * Опции фильтров
   * Формат: [{ value, label }]
   */
  filterOptions: {
    type: Array,
    default: () => [
      { value: "all", label: "Все" },
      { value: "unread", label: "Непрочитанные" },
    ],
  },
  /**
   * Показывать header
   * @default true
   */
  showHeader: { type: Boolean, default: true },
  /**
   * Позиция dropdown
   * @default 'bottom-right'
   */
  position: {
    type: String,
    default: "bottom-right",
  },
  /**
   * Ширина dropdown
   * @default '400px'
   */
  width: { type: String, default: "400px" },
  /**
   * Максимальная высота dropdown
   * @default '500px'
   */
  maxHeight: { type: String, default: "500px" },
});

const emit = defineEmits([
  "mark-read",
  "mark-all-read",
  "delete",
  "filter",
  "notification-click",
]);

const isOpen = ref(false);
const activeFilter = ref("all");

/**
 * Отфильтрованные уведомления
 * 
 * @description
 * Фильтрует уведомления по активному фильтру.
 * 
 * @returns {Array} Отфильтрованный массив уведомлений
 */
const filteredNotifications = computed(() => {
  let notifications = [...props.notifications];

  if (activeFilter.value === "unread") {
    notifications = notifications.filter((n) => !n.read);
  }

  if (props.filterBy) {
    notifications = notifications.filter(
      (n) => n.type === props.filterBy
    );
  }

  return notifications;
});

/**
 * Сгруппированные уведомления
 * 
 * @description
 * Группирует уведомления в зависимости от groupBy.
 * 
 * @returns {Array} Массив групп уведомлений
 */
const groupedNotifications = computed(() => {
  if (props.groupBy === "none") {
    return [{ key: "all", label: "", items: filteredNotifications.value }];
  }

  const groups = {};
  filteredNotifications.value.forEach((notification) => {
    let key = "";
    let label = "";

    if (props.groupBy === "date") {
      const date = new Date(notification.date);
      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      if (date.toDateString() === today.toDateString()) {
        key = "today";
        label = "Сегодня";
      } else if (date.toDateString() === yesterday.toDateString()) {
        key = "yesterday";
        label = "Вчера";
      } else {
        key = date.toLocaleDateString("ru-RU");
        label = date.toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }
    } else if (props.groupBy === "type") {
      key = notification.type || "info";
      label = getTypeLabel(notification.type);
    }

    if (!groups[key]) {
      groups[key] = { key, label, items: [] };
    }
    groups[key].items.push(notification);
  });

  return Object.values(groups);
});

/**
 * Классы для центра
 * 
 * @description
 * Базовые классы для центра уведомлений.
 * 
 * @returns {Array} Массив классов
 */
const centerClasses = computed(() => useClassComposition("relative"));

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-4 pb-4 border-b border-slate-200", useSpacing("md", "padding"))
);

/**
 * Классы для фильтров
 * 
 * @description
 * Классы для секции фильтров.
 * 
 * @returns {Array} Массив классов
 */
const filtersClasses = computed(() =>
  useClassComposition("flex gap-2 mb-4", useSpacing("md", "padding"))
);

/**
 * Классы для списка
 * 
 * @description
 * Классы для списка уведомлений.
 * 
 * @returns {Array} Массив классов
 */
const listClasses = computed(() =>
  useClassComposition("overflow-y-auto", useSpacing("md", "padding"))
);

/**
 * Классы для заголовка группы
 * 
 * @description
 * Классы для заголовка группы уведомлений.
 * 
 * @returns {Array} Массив классов
 */
const groupHeaderClasses = computed(() =>
  useClassComposition("text-xs font-semibold text-slate-500 uppercase mb-2")
);

/**
 * Классы для уведомлений в группе
 * 
 * @description
 * Классы для контейнера уведомлений в группе.
 * 
 * @returns {Array} Массив классов
 */
const notificationsClasses = computed(() =>
  useClassComposition("space-y-2")
);

/**
 * Классы для уведомления
 * 
 * @description
 * Классы для отдельного уведомления.
 * 
 * @param {Object} notification - Объект уведомления
 * @returns {Array} Массив классов
 */
function notificationClasses(notification) {
  return useClassComposition(
    "p-3 rounded-lg cursor-pointer transition-colors",
    notification.read
      ? "bg-white hover:bg-slate-50"
      : "bg-blue-50 hover:bg-blue-100"
  );
}

/**
 * Классы для иконки
 * 
 * @description
 * Классы для иконки уведомления в зависимости от типа.
 * 
 * @param {string} type - Тип уведомления
 * @returns {string} Tailwind CSS классы
 */
function iconClasses(type) {
  const classes = {
    info: "text-blue-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    error: "text-red-500",
  };
  return classes[type] || classes.info;
}

/**
 * Классы для пустого состояния
 * 
 * @description
 * Классы для пустого состояния.
 * 
 * @returns {Array} Массив классов
 */
const emptyClasses = computed(() =>
  useClassComposition("p-8 text-center", useSpacing("md", "padding"))
);

/**
 * Получение иконки уведомления
 * 
 * @description
 * Возвращает иконку в зависимости от типа уведомления.
 * 
 * @param {string} type - Тип уведомления
 * @returns {Object} Компонент иконки
 */
function getNotificationIcon(type) {
  const icons = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
  };
  return icons[type] || InformationCircleIcon;
}

/**
 * Получение метки типа
 * 
 * @description
 * Возвращает метку для типа уведомления.
 * 
 * @param {string} type - Тип уведомления
 * @returns {string} Метка типа
 */
function getTypeLabel(type) {
  const labels = {
    info: "Информация",
    success: "Успех",
    warning: "Предупреждение",
    error: "Ошибка",
  };
  return labels[type] || "Уведомление";
}

/**
 * Форматирование времени
 * 
 * @description
 * Форматирует время для отображения.
 * 
 * @param {Date|string} date - Дата
 * @returns {string} Отформатированное время
 */
function formatTime(date) {
  if (!date) return "";
  const d = new Date(date);
  const now = new Date();
  const diff = now - d;

  if (diff < 60000) return "только что";
  if (diff < 3600000) return `${Math.floor(diff / 60000)} мин назад`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} ч назад`;
  return d.toLocaleDateString("ru-RU", {
    month: "short",
    day: "numeric",
  });
}

/**
 * Переключение dropdown
 * 
 * @description
 * Переключает состояние dropdown.
 */
function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

/**
 * Обработчик отметки как прочитанное
 * 
 * @description
 * Эмитит событие отметки уведомления как прочитанного.
 * 
 * @param {number|string} notificationId - ID уведомления
 */
function handleMarkRead(notificationId) {
  emit("mark-read", notificationId);
}

/**
 * Обработчик отметки всех как прочитанных
 * 
 * @description
 * Эмитит событие отметки всех уведомлений как прочитанных.
 */
function handleMarkAllRead() {
  emit("mark-all-read");
}

/**
 * Обработчик удаления
 * 
 * @description
 * Эмитит событие удаления уведомления.
 * 
 * @param {number|string} notificationId - ID уведомления
 */
function handleDelete(notificationId) {
  emit("delete", notificationId);
}

/**
 * Обработчик фильтра
 * 
 * @description
 * Обрабатывает изменение фильтра.
 * 
 * @param {string} filterValue - Значение фильтра
 */
function handleFilter(filterValue) {
  activeFilter.value = filterValue;
  emit("filter", filterValue);
}

/**
 * Обработчик клика по уведомлению
 * 
 * @description
 * Обрабатывает клик по уведомлению.
 * 
 * @param {Object} notification - Объект уведомления
 */
function handleNotificationClick(notification) {
  emit("notification-click", notification);
}
</script>

