<template>
  <header
    :class="headerClasses"
    data-component="DXHeaderBar"
    :data-sticky="sticky"
    :data-fixed="fixed"
  >
    <DXContainer :size="containerSize" :padding="containerPadding">
      <div class="flex items-center justify-between gap-4 h-full">
        <!-- Логотип и название -->
        <div class="flex items-center gap-3 flex-shrink-0">
          <DXLink
            v-if="logo || appName"
            :to="logoLink"
            :href="logoHref"
            variant="ghost"
            class="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              v-if="logo"
              :src="logo"
              :alt="appName || 'Logo'"
              class="h-8 w-auto object-contain"
            />
            <h1 v-if="appName" class="text-lg font-semibold text-slate-900">
              {{ appName }}
            </h1>
          </DXLink>
          <slot name="logo" />
        </div>

        <!-- Навигация (desktop) -->
        <nav
          v-if="$slots.navigation"
          class="hidden md:flex items-center gap-1 flex-1"
        >
          <slot name="navigation" />
        </nav>

        <!-- Поиск (desktop) -->
        <div
          v-if="$slots.search"
          class="hidden md:flex items-center flex-1 max-w-md mx-4"
        >
          <slot name="search" />
        </div>

        <!-- Действия (desktop) -->
        <div
          v-if="$slots.actions"
          class="hidden md:flex items-center gap-2 flex-shrink-0"
        >
          <slot name="actions" />
        </div>

        <!-- Мобильное меню -->
        <div class="flex md:hidden items-center gap-2">
          <slot name="mobile-menu" />
        </div>
      </div>
    </DXContainer>

    <!-- Мобильная навигация (drawer) -->
    <Transition v-if="showMobileMenu && $slots['mobile-navigation']">
      <div
        class="md:hidden fixed inset-0 z-50 bg-white"
        :class="mobileMenuClasses"
      >
        <div class="p-4">
          <div class="flex items-center justify-between mb-4">
            <h2 v-if="appName" class="text-lg font-semibold text-slate-900">
              {{ appName }}
            </h2>
            <DXButton
              variant="ghost"
              size="sm"
              @click="closeMobileMenu"
            >
              <template #icon>
                <DXIcon :icon="XMarkIcon" size="md" />
              </template>
            </DXButton>
          </div>
          <nav class="space-y-2">
            <slot name="mobile-navigation" />
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXContainer from "../../atoms/DXContainer/DXContainer.vue";
import DXLink from "../../atoms/DXLink/DXLink.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** URL логотипа */
  logo: { type: String, default: null },
  /** Название приложения */
  appName: { type: String, default: "" },
  /** Ссылка для логотипа (Vue Router) */
  logoLink: { type: [String, Object], default: null },
  /** Ссылка для логотипа (обычная ссылка) */
  logoHref: { type: String, default: null },
  /** Sticky позиционирование */
  sticky: { type: Boolean, default: false },
  /** Fixed позиционирование */
  fixed: { type: Boolean, default: false },
  /** Размер контейнера: sm | md | lg | xl | 2xl | full */
  containerSize: { type: String, default: "lg" },
  /** Горизонтальные отступы контейнера: none | xs | sm | md | lg | xl */
  containerPadding: { type: String, default: "md" },
  /** Высота header */
  height: { type: String, default: "auto", validator: (v) => ["auto", "sm", "md", "lg"].includes(v) },
});

const emit = defineEmits(["mobile-menu-toggle"]);

const showMobileMenu = ref(false);

/**
 * Классы для header
 * 
 * @description
 * Вычисляет классы для header компонента, включая позиционирование (sticky/fixed),
 * высоту и фон.
 * 
 * @returns {Array} Массив классов для header
 */
const headerClasses = computed(() =>
  useClassComposition(
    "w-full bg-white border-b border-slate-200",
    {
      "sticky top-0 z-40": props.sticky && !props.fixed,
      "fixed top-0 left-0 right-0 z-40": props.fixed,
      "h-14": props.height === "sm",
      "h-16": props.height === "md",
      "h-20": props.height === "lg",
    }
  )
);

/**
 * Классы для мобильного меню
 * 
 * @description
 * Вычисляет классы для мобильного меню drawer.
 * 
 * @returns {Array} Массив классов для мобильного меню
 */
const mobileMenuClasses = computed(() =>
  useClassComposition("overflow-y-auto")
);

/**
 * Закрытие мобильного меню
 * 
 * @description
 * Закрывает мобильное меню и эмитит событие.
 */
function closeMobileMenu() {
  showMobileMenu.value = false;
  emit("mobile-menu-toggle", false);
}

/**
 * Открытие мобильного меню
 * 
 * @description
 * Открывает мобильное меню и эмитит событие.
 */
function openMobileMenu() {
  showMobileMenu.value = true;
  emit("mobile-menu-toggle", true);
}

// Экспортируем методы для использования в родительском компоненте
defineExpose({
  openMobileMenu,
  closeMobileMenu,
  showMobileMenu,
});
</script>

