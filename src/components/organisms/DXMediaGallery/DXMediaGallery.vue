<template>
  <div
    :class="galleryClasses"
    data-component="DXMediaGallery"
    :data-layout="layout"
    :data-columns="columns"
    :data-lightbox="lightbox"
  >
    <!-- Grid Layout -->
    <DXGrid
      v-if="layout === 'grid'"
      :cols="columns"
      :cols-sm="columnsSm"
      :cols-md="columnsMd"
      :cols-lg="columnsLg"
      :gap="gap"
    >
      <div
        v-for="(item, index) in items"
        :key="item.id || index"
        :class="itemClasses"
        @click="handleItemClick(item, index)"
      >
        <slot name="item" :item="item" :index="index">
          <DXObserver
            v-if="lazy"
            :threshold="0.1"
            :once="true"
            @intersect="handleIntersect(index)"
          >
            <div v-if="isItemVisible(index)" class="relative w-full h-full">
              <img
                v-if="item.type === 'image' || !item.type"
                :src="item.thumbnail || item.src"
                :alt="item.title || item.alt || 'Image'"
                :class="imageClasses"
                @error="handleImageError(index)"
              />
              <video
                v-else-if="item.type === 'video'"
                :src="item.src"
                :poster="item.thumbnail"
                :class="imageClasses"
                controls
              />
              <div v-if="item.title || showOverlay" :class="overlayClasses">
                <div v-if="item.title" class="text-white font-medium">
                  {{ item.title }}
                </div>
              </div>
            </div>
            <div v-else class="w-full h-full bg-slate-200 animate-pulse flex items-center justify-center">
              <span class="text-slate-400 text-sm">Загрузка...</span>
            </div>
          </DXObserver>
          <div v-else class="relative w-full h-full">
            <img
              v-if="item.type === 'image' || !item.type"
              :src="item.thumbnail || item.src"
              :alt="item.title || item.alt || 'Image'"
              :class="imageClasses"
              @error="handleImageError(index)"
            />
            <video
              v-else-if="item.type === 'video'"
              :src="item.src"
              :poster="item.thumbnail"
              :class="imageClasses"
              controls
            />
            <div v-if="item.title || showOverlay" :class="overlayClasses">
              <div v-if="item.title" class="text-white font-medium">
                {{ item.title }}
              </div>
            </div>
          </div>
        </slot>
      </div>
    </DXGrid>

    <!-- List Layout -->
    <div v-else-if="layout === 'list'" :class="listClasses">
      <div
        v-for="(item, index) in items"
        :key="item.id || index"
        :class="listItemClasses"
        @click="handleItemClick(item, index)"
      >
        <slot name="item" :item="item" :index="index">
          <img
            v-if="item.type === 'image' || !item.type"
            :src="item.thumbnail || item.src"
            :alt="item.title || item.alt || 'Image'"
            class="w-24 h-24 object-cover rounded-lg flex-shrink-0"
          />
          <div class="flex-1 ml-4">
            <div v-if="item.title" class="font-medium text-slate-900">
              {{ item.title }}
            </div>
            <div v-if="item.description" class="text-sm text-slate-500 mt-1">
              {{ item.description }}
            </div>
          </div>
        </slot>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <DXModal
      v-if="lightbox && selectedItem"
      :open="showLightbox"
      @close="closeLightbox"
      size="xl"
    >
      <div class="relative">
        <img
          v-if="selectedItem.type === 'image' || !selectedItem.type"
          :src="selectedItem.src"
          :alt="selectedItem.title || selectedItem.alt || 'Image'"
          class="w-full h-auto max-h-[80vh] object-contain"
        />
        <video
          v-else-if="selectedItem.type === 'video'"
          :src="selectedItem.src"
          :poster="selectedItem.thumbnail"
          class="w-full h-auto max-h-[80vh]"
          controls
          autoplay
        />
        <div v-if="selectedItem.title || selectedItem.description" class="mt-4">
          <h3 v-if="selectedItem.title" class="text-lg font-semibold text-slate-900">
            {{ selectedItem.title }}
          </h3>
          <p v-if="selectedItem.description" class="text-sm text-slate-600 mt-1">
            {{ selectedItem.description }}
          </p>
        </div>
      </div>
      
      <!-- Навигация в lightbox -->
      <div v-if="items.length > 1" class="absolute inset-y-0 left-0 flex items-center">
        <DXButton
          variant="ghost"
          size="lg"
          :disabled="selectedIndex === 0"
          @click="previousItem"
        >
          <template #icon>
            <DXIcon :icon="ChevronLeftIcon" size="lg" />
          </template>
        </DXButton>
      </div>
      <div v-if="items.length > 1" class="absolute inset-y-0 right-0 flex items-center">
        <DXButton
          variant="ghost"
          size="lg"
          :disabled="selectedIndex === items.length - 1"
          @click="nextItem"
        >
          <template #icon>
            <DXIcon :icon="ChevronRightIcon" size="lg" />
          </template>
        </DXButton>
      </div>
    </DXModal>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSpacing } from "@/composables/useSpacing";
import DXGrid from "../../layout/DXGrid/DXGrid.vue";
import DXModal from "../DXModal/DXModal.vue";
import DXObserver from "../../utilities/DXObserver/DXObserver.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * Массив элементов галереи
   * Формат: [{ id, src, thumbnail?, title?, description?, type?, alt? }]
   */
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  /**
   * Количество колонок для grid layout
   * @default 3
   */
  columns: { type: Number, default: 3 },
  /**
   * Количество колонок на sm
   */
  columnsSm: { type: Number, default: null },
  /**
   * Количество колонок на md
   */
  columnsMd: { type: Number, default: null },
  /**
   * Количество колонок на lg
   */
  columnsLg: { type: Number, default: null },
  /**
   * Layout: grid | list
   * @default 'grid'
   */
  layout: {
    type: String,
    default: "grid",
    validator: (v) => ["grid", "list"].includes(v),
  },
  /**
   * Отступ между элементами: none | xs | sm | md | lg | xl
   * @default 'md'
   */
  gap: {
    type: String,
    default: "md",
    validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
  },
  /**
   * Показывать lightbox при клике
   * @default true
   */
  lightbox: { type: Boolean, default: true },
  /**
   * Ленивая загрузка изображений
   * @default false
   */
  lazy: { type: Boolean, default: false },
  /**
   * Показывать overlay с информацией
   * @default false
   */
  showOverlay: { type: Boolean, default: false },
});

const emit = defineEmits(["item-click", "lightbox-open", "lightbox-close"]);

const showLightbox = ref(false);
const selectedItem = ref(null);
const selectedIndex = ref(0);
const visibleItems = ref(new Set());

/**
 * Классы для контейнера галереи
 * 
 * @description
 * Базовые классы для контейнера галереи.
 * 
 * @returns {Array} Массив классов
 */
const galleryClasses = computed(() => useClassComposition("w-full"));

/**
 * Классы для элемента галереи (grid)
 * 
 * @description
 * Классы для каждого элемента в grid layout.
 * 
 * @returns {Array} Массив классов
 */
const itemClasses = computed(() =>
  useClassComposition(
    "relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105",
    props.lightbox && "group"
  )
);

/**
 * Классы для списка (list layout)
 * 
 * @description
 * Классы для контейнера списка.
 * 
 * @returns {Array} Массив классов
 */
const listClasses = computed(() =>
  useClassComposition("space-y-2", useSpacing(props.gap, "gap"))
);

/**
 * Классы для элемента списка
 * 
 * @description
 * Классы для каждого элемента в list layout.
 * 
 * @returns {Array} Массив классов
 */
const listItemClasses = computed(() =>
  useClassComposition(
    "flex items-center p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow",
    props.lightbox && "group"
  )
);

/**
 * Классы для изображения
 * 
 * @description
 * Классы для изображения в элементе галереи.
 * 
 * @returns {Array} Массив классов
 */
const imageClasses = computed(() =>
  useClassComposition("w-full h-full object-cover")
);

/**
 * Классы для overlay
 * 
 * @description
 * Классы для overlay с информацией об элементе.
 * 
 * @returns {Array} Массив классов
 */
const overlayClasses = computed(() =>
  useClassComposition(
    "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4"
  )
);

/**
 * Проверяет, видим ли элемент (для lazy loading)
 * 
 * @description
 * Проверяет, был ли элемент загружен через lazy loading.
 * 
 * @param {number} index - Индекс элемента
 * @returns {boolean} true если элемент видим
 */
function isItemVisible(index) {
  return visibleItems.value.has(index);
}

/**
 * Обработчик пересечения (для lazy loading)
 * 
 * @description
 * Отмечает элемент как видимый при пересечении с viewport.
 * 
 * @param {number} index - Индекс элемента
 */
function handleIntersect(index) {
  visibleItems.value.add(index);
}

/**
 * Обработчик ошибки загрузки изображения
 * 
 * @description
 * Обрабатывает ошибки загрузки изображения.
 * 
 * @param {number} index - Индекс элемента
 */
function handleImageError(index) {
  console.warn(`DXMediaGallery: Ошибка загрузки изображения ${index}`);
}

/**
 * Обработчик клика по элементу
 * 
 * @description
 * Обрабатывает клик по элементу галереи и открывает lightbox если включен.
 * 
 * @param {Object} item - Элемент галереи
 * @param {number} index - Индекс элемента
 */
function handleItemClick(item, index) {
  emit("item-click", item, index);

  if (props.lightbox) {
    selectedItem.value = item;
    selectedIndex.value = index;
    showLightbox.value = true;
    emit("lightbox-open", item, index);
  }
}

/**
 * Закрытие lightbox
 * 
 * @description
 * Закрывает lightbox и эмитит событие.
 */
function closeLightbox() {
  showLightbox.value = false;
  selectedItem.value = null;
  emit("lightbox-close");
}

/**
 * Переход к предыдущему элементу
 * 
 * @description
 * Переходит к предыдущему элементу в lightbox.
 */
function previousItem() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
    selectedItem.value = props.items[selectedIndex.value];
  }
}

/**
 * Переход к следующему элементу
 * 
 * @description
 * Переходит к следующему элементу в lightbox.
 */
function nextItem() {
  if (selectedIndex.value < props.items.length - 1) {
    selectedIndex.value++;
    selectedItem.value = props.items[selectedIndex.value];
  }
}
</script>

