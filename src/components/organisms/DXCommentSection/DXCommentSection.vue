<template>
  <div
    :class="sectionClasses"
    data-component="DXCommentSection"
    :data-threading="threading"
  >
    <!-- Форма добавления комментария -->
    <div v-if="showForm || $slots['comment-form']" :class="formClasses">
      <slot name="comment-form">
        <div class="space-y-3">
          <DXTextarea
            v-model="newComment"
            :placeholder="formPlaceholder"
            :rows="formRows"
            @keydown.ctrl.enter="handleSubmitComment"
          />
          <div class="flex items-center justify-end gap-2">
            <DXButton variant="ghost" @click="handleCancelComment">
              Отмена
            </DXButton>
            <DXButton variant="primary" @click="handleSubmitComment">
              Отправить
            </DXButton>
          </div>
        </div>
      </slot>
    </div>

    <!-- Список комментариев -->
    <div :class="commentsClasses">
      <div
        v-for="comment in displayedComments"
        :key="comment.id"
        :class="commentClasses(comment)"
      >
        <slot name="comment" :comment="comment" :reply="handleReply" :edit="handleEdit" :delete="handleDelete">
          <div class="flex gap-3">
            <DXAvatar
              :src="comment.author?.avatar"
              :name="comment.author?.name"
              size="md"
            />
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <DXText tag="span" weight="semibold" color="default">
                  {{ comment.author?.name || "Аноним" }}
                </DXText>
                <DXText tag="span" size="xs" color="muted">
                  {{ formatDate(comment.date) }}
                </DXText>
              </div>
              <DXText tag="div" size="sm" color="default" class="mb-2">
                {{ comment.text }}
              </DXText>
              <div class="flex items-center gap-4">
                <DXButton
                  v-if="showReactions"
                  size="sm"
                  variant="ghost"
                  @click="handleLike(comment.id)"
                >
                  👍 {{ comment.likes || 0 }}
                </DXButton>
                <DXButton
                  v-if="threading"
                  size="sm"
                  variant="ghost"
                  @click="handleReply(comment.id)"
                >
                  Ответить
                </DXButton>
                <DXButton
                  v-if="editable && comment.canEdit"
                  size="sm"
                  variant="ghost"
                  @click="handleEdit(comment.id)"
                >
                  Редактировать
                </DXButton>
                <DXButton
                  v-if="deletable && comment.canDelete"
                  size="sm"
                  variant="ghost"
                  @click="handleDelete(comment.id)"
                >
                  Удалить
                </DXButton>
              </div>
            </div>
          </div>
        </slot>

        <!-- Вложенные комментарии -->
        <div
          v-if="threading && comment.replies && comment.replies.length > 0"
          :class="repliesClasses"
        >
          <DXCommentSection
            :comments="comment.replies"
            :threading="threading"
            :editable="editable"
            :deletable="deletable"
            :show-reactions="showReactions"
            @add-comment="handleAddReply"
            @reply="handleReply"
            @edit="handleEdit"
            @delete="handleDelete"
          />
        </div>
      </div>
    </div>

    <!-- Пагинация -->
    <div v-if="paginated && totalPages > 1" :class="paginationClasses">
      <DXPagination
        v-model="currentPage"
        :total-pages="totalPages"
        @update:model-value="handlePageChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXTextarea from "../../molecules/DXTextarea/DXTextarea.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXAvatar from "../../atoms/DXAvatar/DXAvatar.vue";
import DXText from "../../atoms/DXText/DXText.vue";
import DXPagination from "../../molecules/DXPagination/DXPagination.vue";

const props = defineProps({
  /**
   * Комментарии
   * Формат: [{ id, text, author: { name, avatar }, date, likes?, replies?, canEdit?, canDelete? }]
   */
  comments: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Поддержка вложенности (threading)
   * @default true
   */
  threading: { type: Boolean, default: true },
  /**
   * Сортировка: newest | oldest | popular
   * @default 'newest'
   */
  sortBy: {
    type: String,
    default: "newest",
    validator: (v) => ["newest", "oldest", "popular"].includes(v),
  },
  /**
   * Фильтр по автору
   */
  filterBy: { type: String, default: "" },
  /**
   * Показывать форму добавления
   * @default true
   */
  showForm: { type: Boolean, default: true },
  /**
   * Placeholder для формы
   */
  formPlaceholder: {
    type: String,
    default: "Добавить комментарий...",
  },
  /**
   * Количество строк в форме
   * @default 3
   */
  formRows: { type: Number, default: 3 },
  /**
   * Можно редактировать комментарии
   * @default false
   */
  editable: { type: Boolean, default: false },
  /**
   * Можно удалять комментарии
   * @default false
   */
  deletable: { type: Boolean, default: false },
  /**
   * Показывать реакции (лайки)
   * @default true
   */
  showReactions: { type: Boolean, default: true },
  /**
   * Пагинация
   * @default false
   */
  paginated: { type: Boolean, default: false },
  /**
   * Количество комментариев на странице
   * @default 10
   */
  pageSize: { type: Number, default: 10 },
});

const emit = defineEmits([
  "add-comment",
  "reply",
  "edit",
  "delete",
  "like",
  "page-change",
]);

const newComment = ref("");
const currentPage = ref(1);
const replyingTo = ref(null);

/**
 * Отсортированные комментарии
 * 
 * @description
 * Сортирует комментарии в зависимости от sortBy.
 * 
 * @returns {Array} Отсортированный массив комментариев
 */
const sortedComments = computed(() => {
  const comments = [...props.comments];
  switch (props.sortBy) {
    case "oldest":
      return comments.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    case "popular":
      return comments.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    case "newest":
    default:
      return comments.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
  }
});

/**
 * Отфильтрованные комментарии
 * 
 * @description
 * Фильтрует комментарии по автору если указан filterBy.
 * 
 * @returns {Array} Отфильтрованный массив комментариев
 */
const filteredComments = computed(() => {
  if (!props.filterBy) return sortedComments.value;
  return sortedComments.value.filter(
    (comment) =>
      comment.author?.name
        ?.toLowerCase()
        .includes(props.filterBy.toLowerCase())
  );
});

/**
 * Отображаемые комментарии
 * 
 * @description
 * Возвращает комментарии для текущей страницы если включена пагинация.
 * 
 * @returns {Array} Массив комментариев для отображения
 */
const displayedComments = computed(() => {
  if (!props.paginated) return filteredComments.value;
  const start = (currentPage.value - 1) * props.pageSize;
  const end = start + props.pageSize;
  return filteredComments.value.slice(start, end);
});

/**
 * Всего страниц
 * 
 * @description
 * Вычисляет общее количество страниц для пагинации.
 * 
 * @returns {number} Количество страниц
 */
const totalPages = computed(() => {
  if (!props.paginated) return 1;
  return Math.ceil(filteredComments.value.length / props.pageSize);
});

/**
 * Классы для секции
 * 
 * @description
 * Базовые классы для секции комментариев.
 * 
 * @returns {Array} Массив классов
 */
const sectionClasses = computed(() =>
  useClassComposition("w-full space-y-6")
);

/**
 * Классы для формы
 * 
 * @description
 * Классы для формы добавления комментария.
 * 
 * @returns {Array} Массив классов
 */
const formClasses = computed(() =>
  useClassComposition("mb-6", useSpacing("md", "padding"))
);

/**
 * Классы для списка комментариев
 * 
 * @description
 * Классы для списка комментариев.
 * 
 * @returns {Array} Массив классов
 */
const commentsClasses = computed(() =>
  useClassComposition("space-y-4")
);

/**
 * Классы для комментария
 * 
 * @description
 * Классы для отдельного комментария.
 * 
 * @param {Object} comment - Объект комментария
 * @returns {Array} Массив классов
 */
function commentClasses(comment) {
  return useClassComposition(
    "pb-4",
    comment.parentId ? "ml-8 border-l-2 border-slate-200 pl-4" : ""
  );
}

/**
 * Классы для вложенных комментариев
 * 
 * @description
 * Классы для контейнера вложенных комментариев.
 * 
 * @returns {Array} Массив классов
 */
const repliesClasses = computed(() =>
  useClassComposition("mt-4 ml-8 space-y-4")
);

/**
 * Классы для пагинации
 * 
 * @description
 * Классы для секции пагинации.
 * 
 * @returns {Array} Массив классов
 */
const paginationClasses = computed(() =>
  useClassComposition("mt-6 flex justify-center")
);

/**
 * Форматирование даты
 * 
 * @description
 * Форматирует дату для отображения.
 * 
 * @param {Date|string} date - Дата
 * @returns {string} Отформатированная дата
 */
function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Обработчик отправки комментария
 * 
 * @description
 * Эмитит событие добавления комментария.
 */
function handleSubmitComment() {
  if (!newComment.value.trim()) return;
  emit("add-comment", {
    text: newComment.value,
    parentId: replyingTo.value,
  });
  newComment.value = "";
  replyingTo.value = null;
}

/**
 * Обработчик отмены комментария
 * 
 * @description
 * Очищает форму комментария.
 */
function handleCancelComment() {
  newComment.value = "";
  replyingTo.value = null;
}

/**
 * Обработчик ответа
 * 
 * @description
 * Начинает ответ на комментарий.
 * 
 * @param {number|string} commentId - ID комментария
 */
function handleReply(commentId) {
  replyingTo.value = commentId;
  emit("reply", commentId);
}

/**
 * Обработчик редактирования
 * 
 * @description
 * Эмитит событие редактирования комментария.
 * 
 * @param {number|string} commentId - ID комментария
 */
function handleEdit(commentId) {
  emit("edit", commentId);
}

/**
 * Обработчик удаления
 * 
 * @description
 * Эмитит событие удаления комментария.
 * 
 * @param {number|string} commentId - ID комментария
 */
function handleDelete(commentId) {
  emit("delete", commentId);
}

/**
 * Обработчик лайка
 * 
 * @description
 * Эмитит событие лайка комментария.
 * 
 * @param {number|string} commentId - ID комментария
 */
function handleLike(commentId) {
  emit("like", commentId);
}

/**
 * Обработчик добавления ответа
 * 
 * @description
 * Обрабатывает добавление ответа на комментарий.
 * 
 * @param {Object} data - Данные ответа
 */
function handleAddReply(data) {
  emit("add-comment", data);
}

/**
 * Обработчик изменения страницы
 * 
 * @description
 * Обрабатывает изменение страницы пагинации.
 * 
 * @param {number} page - Номер страницы
 */
function handlePageChange(page) {
  currentPage.value = page;
  emit("page-change", page);
}
</script>

