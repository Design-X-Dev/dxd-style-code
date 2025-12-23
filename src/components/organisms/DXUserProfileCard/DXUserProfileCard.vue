<template>
  <DXCard
    :class="cardClasses"
    :variant="cardVariant"
    :padding="padding"
    data-component="DXUserProfileCard"
    :data-size="size"
    :data-clickable="clickable"
    @click="handleClick"
  >
    <!-- Avatar -->
    <div v-if="$slots.avatar || user?.avatar" :class="avatarClasses">
      <slot name="avatar">
        <DXAvatar
          :src="user?.avatar"
          :name="user?.name"
          :size="avatarSize"
        />
      </slot>
    </div>

    <!-- Info -->
    <div :class="infoClasses">
      <slot name="info">
        <h3 v-if="user?.name" :class="nameClasses">
          {{ user.name }}
        </h3>
        <p v-if="user?.role" :class="roleClasses">
          {{ user.role }}
        </p>
        <p v-if="user?.bio" :class="bioClasses">
          {{ user.bio }}
        </p>
      </slot>
    </div>

    <!-- Stats -->
    <div v-if="$slots.stats || (user?.stats && showStats)" :class="statsClasses">
      <slot name="stats">
        <div class="flex items-center gap-4">
          <div
            v-for="(value, key) in user?.stats"
            :key="key"
            class="text-center"
          >
            <div :class="statValueClasses">{{ value }}</div>
            <div :class="statLabelClasses">{{ getStatLabel(key) }}</div>
          </div>
        </div>
      </slot>
    </div>

    <!-- Badges -->
    <div v-if="$slots.badges || (user?.badges && user.badges.length > 0)" :class="badgesClasses">
      <slot name="badges">
        <div class="flex flex-wrap gap-2">
          <DXBadge
            v-for="badge in user?.badges"
            :key="badge.id || badge"
            :variant="badge.variant || 'default'"
            :size="badgeSize"
          >
            {{ badge.label || badge }}
          </DXBadge>
        </div>
      </slot>
    </div>

    <!-- Actions -->
    <div v-if="($slots.actions || showActions) && !clickable" :class="actionsClasses">
      <slot name="actions">
        <DXButton
          v-if="showActions"
          variant="primary"
          size="sm"
          @click="handleMessage"
        >
          Написать
        </DXButton>
        <DXButton
          v-if="showActions && editable"
          variant="ghost"
          size="sm"
          @click="handleEdit"
        >
          Редактировать
        </DXButton>
      </slot>
    </div>
  </DXCard>
</template>

<script setup>
import { computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSize } from "../../../composables/useSize";
import DXCard from "../../atoms/DXCard/DXCard.vue";
import DXAvatar from "../../atoms/DXAvatar/DXAvatar.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXBadge from "../../atoms/DXBadge/DXBadge.vue";

const props = defineProps({
  /**
   * Данные пользователя
   * Формат: { name, role?, bio?, avatar?, stats?, badges? }
   */
  user: {
    type: Object,
    required: true,
  },
  /**
   * Показывать действия
   * @default true
   */
  showActions: { type: Boolean, default: true },
  /**
   * Можно редактировать
   * @default false
   */
  editable: { type: Boolean, default: false },
  /**
   * Показывать статистику
   * @default true
   */
  showStats: { type: Boolean, default: true },
  /**
   * Размер карточки: sm | md | lg
   * @default 'md'
   */
  size: {
    type: String,
    default: "md",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  /**
   * Кликабельная карточка
   * @default false
   */
  clickable: { type: Boolean, default: false },
  /**
   * Вариант DXCard
   * @default 'default'
   */
  cardVariant: {
    type: String,
    default: "default",
    validator: (v) => ["default", "bordered", "elevated", "flat"].includes(v),
  },
  /**
   * Padding для DXCard
   * @default 'md'
   */
  padding: {
    type: String,
    default: "md",
    validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
  },
});

const emit = defineEmits(["click", "edit", "message"]);

/**
 * Размер аватара
 * 
 * @description
 * Определяет размер аватара в зависимости от размера карточки.
 * 
 * @returns {'xs' | 'sm' | 'md' | 'lg' | 'xl'} Размер аватара
 */
const avatarSize = computed(() => {
  const sizeMap = {
    sm: "md",
    md: "lg",
    lg: "xl",
  };
  return sizeMap[props.size] || "lg";
});

/**
 * Размер badge
 * 
 * @description
 * Определяет размер badge в зависимости от размера карточки.
 * 
 * @returns {'sm' | 'md'} Размер badge
 */
const badgeSize = computed(() => {
  return props.size === "sm" ? "sm" : "md";
});

/**
 * Классы для карточки
 * 
 * @description
 * Базовые классы для карточки профиля.
 * 
 * @returns {Array} Массив классов
 */
const cardClasses = computed(() =>
  useClassComposition(
    "w-full",
    props.clickable ? "cursor-pointer hover:border-slate-300 transition-all" : ""
  )
);

/**
 * Классы для аватара
 * 
 * @description
 * Классы для секции аватара.
 * 
 * @returns {Array} Массив классов
 */
const avatarClasses = computed(() =>
  useClassComposition("flex justify-center mb-4")
);

/**
 * Классы для информации
 * 
 * @description
 * Классы для секции информации о пользователе.
 * 
 * @returns {Array} Массив классов
 */
const infoClasses = computed(() =>
  useClassComposition("text-center mb-4")
);

/**
 * Классы для имени
 * 
 * @description
 * Классы для имени пользователя.
 * 
 * @returns {string} Tailwind CSS классы
 */
const nameClasses = computed(() => {
  const sizeMap = {
    sm: "text-lg font-semibold text-slate-900",
    md: "text-xl font-semibold text-slate-900",
    lg: "text-2xl font-semibold text-slate-900",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для роли
 * 
 * @description
 * Классы для роли пользователя.
 * 
 * @returns {string} Tailwind CSS классы
 */
const roleClasses = computed(() => {
  const sizeMap = {
    sm: "text-sm text-slate-600 mt-1",
    md: "text-base text-slate-600 mt-1",
    lg: "text-lg text-slate-600 mt-1",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для биографии
 * 
 * @description
 * Классы для биографии пользователя.
 * 
 * @returns {string} Tailwind CSS классы
 */
const bioClasses = computed(() => {
  const sizeMap = {
    sm: "text-xs text-slate-500 mt-2",
    md: "text-sm text-slate-500 mt-2",
    lg: "text-base text-slate-500 mt-2",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для статистики
 * 
 * @description
 * Классы для секции статистики.
 * 
 * @returns {Array} Массив классов
 */
const statsClasses = computed(() =>
  useClassComposition("mb-4 pt-4 border-t border-slate-200")
);

/**
 * Классы для значения статистики
 * 
 * @description
 * Классы для значения статистики.
 * 
 * @returns {string} Tailwind CSS классы
 */
const statValueClasses = computed(() => {
  const sizeMap = {
    sm: "text-lg font-semibold text-slate-900",
    md: "text-xl font-semibold text-slate-900",
    lg: "text-2xl font-semibold text-slate-900",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для метки статистики
 * 
 * @description
 * Классы для метки статистики.
 * 
 * @returns {string} Tailwind CSS классы
 */
const statLabelClasses = computed(() => {
  const sizeMap = {
    sm: "text-xs text-slate-500 mt-1",
    md: "text-sm text-slate-500 mt-1",
    lg: "text-base text-slate-500 mt-1",
  };
  return sizeMap[props.size] || sizeMap.md;
});

/**
 * Классы для badges
 * 
 * @description
 * Классы для секции badges.
 * 
 * @returns {Array} Массив классов
 */
const badgesClasses = computed(() =>
  useClassComposition("mb-4 flex justify-center")
);

/**
 * Классы для действий
 * 
 * @description
 * Классы для секции действий.
 * 
 * @returns {Array} Массив классов
 */
const actionsClasses = computed(() =>
  useClassComposition("flex justify-center gap-2")
);

/**
 * Получение метки статистики
 * 
 * @description
 * Возвращает метку для ключа статистики.
 * 
 * @param {string} key - Ключ статистики
 * @returns {string} Метка
 */
function getStatLabel(key) {
  const labels = {
    posts: "Постов",
    followers: "Подписчиков",
    following: "Подписок",
    views: "Просмотров",
    likes: "Лайков",
  };
  return labels[key] || key;
}

/**
 * Обработчик клика
 * 
 * @description
 * Эмитит событие клика по карточке.
 */
function handleClick() {
  if (props.clickable) {
    emit("click", props.user);
  }
}

/**
 * Обработчик редактирования
 * 
 * @description
 * Эмитит событие редактирования профиля.
 */
function handleEdit() {
  emit("edit", props.user);
}

/**
 * Обработчик сообщения
 * 
 * @description
 * Эмитит событие отправки сообщения.
 */
function handleMessage() {
  emit("message", props.user);
}
</script>

