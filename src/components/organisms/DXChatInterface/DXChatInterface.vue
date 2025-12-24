<template>
  <div
    :class="interfaceClasses"
    data-component="DXChatInterface"
    :data-auto-scroll="autoScroll"
  >
    <!-- Header -->
    <div v-if="showHeader || $slots.header" :class="headerClasses">
      <slot name="header">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <DXAvatar
              v-if="chatInfo?.avatar"
              :src="chatInfo.avatar"
              :name="chatInfo.name"
              size="md"
            />
            <div>
              <DXHeading level="3" weight="semibold" color="default">
                {{ chatInfo?.name || "Чат" }}
              </DXHeading>
              <DXText v-if="chatInfo?.status" tag="p" size="xs" color="muted">
                {{ chatInfo.status }}
              </DXText>
            </div>
          </div>
          <slot name="header-actions" />
        </div>
      </slot>
    </div>

    <!-- Messages List -->
    <div ref="messagesContainer" :class="messagesClasses" @scroll="handleScroll">
      <div
        v-for="(group, groupIndex) in messageGroups"
        :key="groupIndex"
        class="mb-4"
      >
        <!-- Date Separator -->
        <div v-if="group.date" :class="dateSeparatorClasses">
          {{ formatDate(group.date) }}
        </div>

        <!-- Messages in Group -->
        <div :class="groupMessagesClasses">
          <div
            v-for="message in group.messages"
            :key="message.id"
            :class="messageClasses(message)"
          >
            <slot
              name="message"
              :message="message"
              :is-own="isOwnMessage(message)"
            >
              <div class="flex gap-3" :class="isOwnMessage(message) ? 'flex-row-reverse' : ''">
                <DXAvatar
                  v-if="!isOwnMessage(message)"
                  :src="message.user?.avatar"
                  :name="message.user?.name"
                  size="sm"
                />
                <div
                  :class="[
                    'flex-1 max-w-[70%]',
                    isOwnMessage(message) ? 'items-end' : 'items-start',
                  ]"
                >
                  <div
                    v-if="!isOwnMessage(message)"
                    class="text-xs text-slate-500 mb-1"
                  >
                    {{ message.user?.name }}
                  </div>
                  <div
                    :class="[
                      'rounded-lg px-4 py-2',
                      isOwnMessage(message)
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-900',
                    ]"
                  >
                    <p class="text-sm">{{ message.text }}</p>
                    <div
                      v-if="message.files && message.files.length > 0"
                      class="mt-2 space-y-2"
                    >
                      <div
                        v-for="file in message.files"
                        :key="file.id"
                        class="flex items-center gap-2"
                      >
                        <DXIcon :icon="DocumentIcon" size="sm" />
                        <span class="text-xs">{{ file.name }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 mt-1" :class="isOwnMessage(message) ? 'justify-end' : 'justify-start'">
                    <span class="text-xs text-slate-500">
                      {{ formatTime(message.date) }}
                    </span>
                    <DXIcon
                      v-if="isOwnMessage(message) && message.status"
                      :icon="getStatusIcon(message.status)"
                      size="xs"
                      :class="statusIconClasses(message.status)"
                    />
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div :class="inputClasses">
      <slot name="input">
        <div class="flex items-end gap-2">
          <DXButton
            v-if="allowFileUpload"
            variant="ghost"
            size="sm"
            @click="triggerFileUpload"
          >
            <template #icon>
              <DXIcon :icon="PaperClipIcon" size="sm" />
            </template>
          </DXButton>
          <input
            ref="fileInput"
            type="file"
            class="hidden"
            multiple
            @change="handleFileSelect"
          />
          <DXTextarea
            v-model="messageText"
            :placeholder="inputPlaceholder"
            :rows="inputRows"
            @keydown.enter.exact.prevent="handleSend"
            @keydown.enter.shift.exact="handleNewLine"
          />
          <DXButton variant="primary" @click="handleSend" :disabled="!canSend">
            <template #icon>
              <DXIcon :icon="PaperAirplaneIcon" size="sm" />
            </template>
          </DXButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXAvatar from "../../atoms/DXAvatar/DXAvatar.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXHeading from "../../atoms/DXHeading/DXHeading.vue";
import DXText from "../../atoms/DXText/DXText.vue";
import DXTextarea from "../../molecules/DXTextarea/DXTextarea.vue";
import {
  PaperClipIcon,
  PaperAirplaneIcon,
  DocumentIcon,
  CheckIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Сообщения
   * Формат: [{ id, text, user: { id, name, avatar }, date, status?, files? }]
   */
  messages: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Текущий пользователь
   * Формат: { id, name, avatar? }
   */
  currentUser: {
    type: Object,
    required: true,
  },
  /**
   * Информация о чате
   * Формат: { name, avatar?, status? }
   */
  chatInfo: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Автоматический скролл к новым сообщениям
   * @default true
   */
  autoScroll: { type: Boolean, default: true },
  /**
   * Показывать header
   * @default true
   */
  showHeader: { type: Boolean, default: true },
  /**
   * Placeholder для поля ввода
   */
  inputPlaceholder: {
    type: String,
    default: "Введите сообщение...",
  },
  /**
   * Количество строк в поле ввода
   * @default 2
   */
  inputRows: { type: Number, default: 2 },
  /**
   * Разрешить загрузку файлов
   * @default true
   */
  allowFileUpload: { type: Boolean, default: true },
});

const emit = defineEmits(["send-message", "upload-file", "scroll"]);

const messageText = ref("");
const messagesContainer = ref(null);
const fileInput = ref(null);
const isScrolledToBottom = ref(true);

/**
 * Сгруппированные сообщения
 * 
 * @description
 * Группирует сообщения по дате и времени для отображения.
 * 
 * @returns {Array} Массив групп сообщений
 */
const messageGroups = computed(() => {
  const groups = [];
  let currentGroup = null;

  props.messages.forEach((message) => {
    const messageDate = new Date(message.date);
    const groupDate = currentGroup
      ? new Date(currentGroup.date)
      : null;

    // Проверяем, нужно ли создать новую группу (новая дата или большой разрыв во времени)
    if (
      !currentGroup ||
      !groupDate ||
      messageDate.toDateString() !== groupDate.toDateString() ||
      messageDate - groupDate > 3600000 // 1 час
    ) {
      currentGroup = {
        date: messageDate,
        messages: [],
      };
      groups.push(currentGroup);
    }

    currentGroup.messages.push(message);
  });

  return groups;
});

/**
 * Классы для интерфейса
 * 
 * @description
 * Базовые классы для интерфейса чата.
 * 
 * @returns {Array} Массив классов
 */
const interfaceClasses = computed(() =>
  useClassComposition("flex flex-col h-full bg-white")
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
  useClassComposition(
    "flex-shrink-0 border-b border-slate-200",
    useSpacing("md", "padding")
  )
);

/**
 * Классы для списка сообщений
 * 
 * @description
 * Классы для контейнера сообщений.
 * 
 * @returns {Array} Массив классов
 */
const messagesClasses = computed(() =>
  useClassComposition(
    "flex-1 overflow-y-auto",
    useSpacing("md", "padding")
  )
);

/**
 * Классы для разделителя даты
 * 
 * @description
 * Классы для разделителя даты между группами сообщений.
 * 
 * @returns {Array} Массив классов
 */
const dateSeparatorClasses = computed(() =>
  useClassComposition(
    "text-center text-xs text-slate-500 mb-4"
  )
);

/**
 * Классы для сообщений в группе
 * 
 * @description
 * Классы для контейнера сообщений в группе.
 * 
 * @returns {Array} Массив классов
 */
const groupMessagesClasses = computed(() =>
  useClassComposition("space-y-2")
);

/**
 * Классы для сообщения
 * 
 * @description
 * Классы для отдельного сообщения.
 * 
 * @param {Object} message - Объект сообщения
 * @returns {Array} Массив классов
 */
function messageClasses(message) {
  return useClassComposition("mb-2");
}

/**
 * Классы для иконки статуса
 * 
 * @description
 * Классы для иконки статуса сообщения.
 * 
 * @param {string} status - Статус сообщения
 * @returns {string} Tailwind CSS классы
 */
function statusIconClasses(status) {
  const classes = {
    sent: "text-slate-400",
    delivered: "text-slate-400",
    read: "text-blue-500",
  };
  return classes[status] || classes.sent;
}

/**
 * Классы для области ввода
 * 
 * @description
 * Классы для секции ввода сообщения.
 * 
 * @returns {Array} Массив классов
 */
const inputClasses = computed(() =>
  useClassComposition(
    "flex-shrink-0 border-t border-slate-200",
    useSpacing("md", "padding")
  )
);

/**
 * Можно ли отправить сообщение
 * 
 * @description
 * Проверяет, можно ли отправить сообщение (не пустое).
 * 
 * @returns {boolean} true, если можно отправить
 */
const canSend = computed(() => {
  return messageText.value.trim().length > 0;
});

/**
 * Проверка, является ли сообщение собственным
 * 
 * @description
 * Проверяет, принадлежит ли сообщение текущему пользователю.
 * 
 * @param {Object} message - Объект сообщения
 * @returns {boolean} true, если сообщение собственное
 */
function isOwnMessage(message) {
  return message.userId === props.currentUser.id;
}

/**
 * Получение иконки статуса
 * 
 * @description
 * Возвращает иконку в зависимости от статуса сообщения.
 * 
 * @param {string} status - Статус сообщения
 * @returns {Object} Компонент иконки
 */
function getStatusIcon(status) {
  const icons = {
    sent: CheckIcon,
    delivered: CheckIcon,
    read: CheckCircleIcon,
  };
  return icons[status] || CheckIcon;
}

/**
 * Форматирование даты
 * 
 * @description
 * Форматирует дату для разделителя групп.
 * 
 * @param {Date} date - Дата
 * @returns {string} Отформатированная дата
 */
function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (d.toDateString() === today.toDateString()) {
    return "Сегодня";
  } else if (d.toDateString() === yesterday.toDateString()) {
    return "Вчера";
  } else {
    return d.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
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
  return d.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Скролл к низу
 * 
 * @description
 * Прокручивает контейнер сообщений к самому низу.
 */
function scrollToBottom() {
  if (messagesContainer.value && props.autoScroll) {
    nextTick(() => {
      messagesContainer.value.scrollTop =
        messagesContainer.value.scrollHeight;
    });
  }
}

/**
 * Обработчик скролла
 * 
 * @description
 * Отслеживает позицию скролла для определения, находится ли пользователь внизу.
 * 
 * @param {Event} event - Событие скролла
 */
function handleScroll(event) {
  const container = event.target;
  const isAtBottom =
    container.scrollHeight - container.scrollTop <=
    container.clientHeight + 100;
  isScrolledToBottom.value = isAtBottom;
  emit("scroll", { isAtBottom, scrollTop: container.scrollTop });
}

/**
 * Обработчик отправки сообщения
 * 
 * @description
 * Эмитит событие отправки сообщения и очищает поле ввода.
 */
function handleSend() {
  if (!canSend.value) return;

  emit("send-message", {
    text: messageText.value,
    userId: props.currentUser.id,
    date: new Date(),
  });

  messageText.value = "";
  scrollToBottom();
}

/**
 * Обработчик новой строки
 * 
 * @description
 * Позволяет вводить новую строку при Shift+Enter.
 */
function handleNewLine() {
  // Позволяем вводить новую строку
}

/**
 * Триггер загрузки файла
 * 
 * @description
 * Открывает диалог выбора файла.
 */
function triggerFileUpload() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

/**
 * Обработчик выбора файла
 * 
 * @description
 * Обрабатывает выбор файлов и эмитит событие загрузки.
 * 
 * @param {Event} event - Событие выбора файла
 */
function handleFileSelect(event) {
  const files = Array.from(event.target.files);
  if (files.length > 0) {
    emit("upload-file", files);
  }
  // Очищаем input
  if (fileInput.value) {
    fileInput.value.value = "";
  }
}

// Автоматический скролл при новых сообщениях
watch(
  () => props.messages.length,
  () => {
    if (isScrolledToBottom.value) {
      scrollToBottom();
    }
  }
);

// Скролл при монтировании
onMounted(() => {
  scrollToBottom();
});
</script>

