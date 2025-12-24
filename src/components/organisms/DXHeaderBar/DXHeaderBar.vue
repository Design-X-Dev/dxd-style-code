<template>
  <header
    :class="headerClasses"
    data-component="DXHeaderBar"
    :data-sticky="sticky"
    :data-fixed="fixed"
    :data-variant="variant || 'default'"
    :data-breakpoint="currentBreakpoint?.value || null"
    :data-mobile="isMobile"
  >
    <DXContainer :size="containerSize" :padding="containerPadding" position="relative">
      <DXFlex justify="between" align="center" gap="md" height="full">
        <!-- Логотип и название -->
        <DXFlex align="center" gap="sm" :shrink="true">
          <DXLink
            v-if="logo || appName"
            :to="logoLink"
            :href="logoHref"
            variant="ghost"
          >
            <DXFlex align="center" gap="sm">
              <DXImage
                v-if="logo"
                :src="logo"
                :alt="appName || 'Logo'"
                height="32"
                object-fit="contain"
              />
              <DXHeading v-if="appName" level="1" size="lg" weight="semibold">
                {{ appName }}
              </DXHeading>
            </DXFlex>
          </DXLink>
          <slot name="logo" />
        </DXFlex>

        <!-- Навигация (desktop) -->
        <nav
          v-if="$slots.navigation"
          class="hidden md:flex items-center gap-1 flex-1"
        >
          <slot name="navigation" />
        </nav>

        <!-- Поиск (desktop) -->
        <DXFlex
          v-if="$slots.search"
          align="center"
          class="hidden md:flex flex-1 max-w-md mx-4"
        >
          <slot name="search" />
        </DXFlex>

        <!-- Действия (desktop) -->
        <DXFlex
          v-if="$slots.actions"
          align="center"
          gap="sm"
          :shrink="true"
          class="hidden md:flex"
        >
          <slot name="actions" />
        </DXFlex>

        <!-- Мобильное меню -->
        <DXFlex align="center" gap="sm" class="md:hidden">
          <slot name="mobile-menu" />
        </DXFlex>
      </DXFlex>

      <!-- Центральная часть - абсолютное позиционирование -->
      <div
        v-if="$slots.center"
        class="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <slot name="center" />
      </div>
    </DXContainer>

    <!-- Мобильная навигация (drawer) -->
    <DXAnimatePresence
      v-if="$slots['mobile-navigation']"
      :show="showMobileMenu"
      type="slide-down"
      mode="default"
    >
      <DXBox
        position="fixed"
        inset
        z-index="50"
        bg="white"
        :class="['md:hidden', mobileMenuClasses]"
      >
        <DXBox p="md">
          <DXBox my="md">
            <DXFlex justify="between" align="center">
              <DXHeading v-if="appName" level="2" size="lg" weight="semibold">
                {{ appName }}
              </DXHeading>
              <DXButton
                variant="ghost"
                size="sm"
                @click="closeMobileMenu"
              >
                <template #icon>
                  <DXIcon :icon="XMarkIcon" size="md" />
                </template>
              </DXButton>
            </DXFlex>
          </DXBox>
          <DXStack tag="nav" gap="sm" direction="vertical">
            <slot name="mobile-navigation" />
          </DXStack>
        </DXBox>
      </DXBox>
    </DXAnimatePresence>
  </header>
</template>

<script setup>
import { ref, computed, inject } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXContainer from "../../atoms/DXContainer/DXContainer.vue";
import DXFlex from "../../atoms/DXFlex/DXFlex.vue";
import DXBox from "../../atoms/DXBox/DXBox.vue";
import DXStack from "../../atoms/DXStack/DXStack.vue";
import DXImage from "../../atoms/DXImage/DXImage.vue";
import DXHeading from "../../atoms/DXHeading/DXHeading.vue";
import DXLink from "../../atoms/DXLink/DXLink.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXAnimatePresence from "../../utilities/DXAnimatePresence/DXAnimatePresence.vue";
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
  /** Вариант стилизации: bordered | elevated | flat */
  variant: {
    type: String,
    default: null,
    validator: (value) => value === null || ['bordered', 'elevated', 'flat'].includes(value),
  },
  /** Фон: white | slate | transparent */
  bg: {
    type: String,
    default: "white",
    validator: (value) => ['white', 'slate', 'transparent'].includes(value),
  },
  /** Тень: none | sm | md | lg | xl */
  shadow: {
    type: String,
    default: null,
    validator: (value) => value === null || ['none', 'sm', 'md', 'lg', 'xl'].includes(value),
  },
  /** Рамка: none | bottom | full */
  border: {
    type: String,
    default: "bottom",
    validator: (value) => ['none', 'bottom', 'full'].includes(value),
  },
});

const emit = defineEmits(["mobile-menu-toggle"]);

// Получение данных о breakpoint через inject (если DXBreakpointProvider доступен)
const currentBreakpoint = inject('currentBreakpoint', ref(null));
const screenWidth = inject('screenWidth', ref(null));
const screenHeight = inject('screenHeight', ref(null));
const breakpoints = inject('breakpoints', ref(null));

// Состояние мобильного меню
const showMobileMenu = ref(false);

/**
 * Проверка, является ли текущий breakpoint мобильным
 * 
 * @description
 * Определяет, находится ли приложение в мобильном режиме на основе breakpoint.
 * 
 * @returns {boolean} true если breakpoint меньше md (768px)
 */
const isMobile = computed(() => {
  if (!currentBreakpoint?.value) {
    // Fallback: проверка через screenWidth если breakpoint недоступен
    if (screenWidth?.value !== null && screenWidth?.value !== undefined) {
      return screenWidth.value < 768;
    }
    return false;
  }
  
  // Считаем мобильным если breakpoint меньше md
  const mobileBreakpoints = ['xs', 'sm'];
  return mobileBreakpoints.includes(currentBreakpoint.value);
});

/**
 * Проверка, является ли текущий breakpoint десктопным
 * 
 * @description
 * Определяет, находится ли приложение в десктопном режиме.
 * 
 * @returns {boolean} true если breakpoint >= md (768px)
 */
const isDesktop = computed(() => !isMobile.value);

/**
 * Классы фона
 * 
 * @description
 * Определяет классы для background-color в зависимости от значения bg prop.
 * 
 * @returns {string} Tailwind CSS класс для фона
 */
const bgClass = computed(() => {
  const bgClasses = {
    white: "bg-white",
    slate: "bg-slate-50",
    transparent: "bg-transparent",
  };
  
  return bgClasses[props.bg] || "bg-white";
});

/**
 * Классы тени
 * 
 * @description
 * Определяет классы для box-shadow в зависимости от значения shadow prop.
 * 
 * @returns {string|null} Tailwind CSS класс для тени или null
 */
const shadowClass = computed(() => {
  if (!props.shadow) return null;
  
  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };
  
  return shadowClasses[props.shadow] || null;
});

/**
 * Классы рамки
 * 
 * @description
 * Определяет классы для border в зависимости от значения border prop.
 * 
 * @returns {string|null} Tailwind CSS класс для рамки или null
 */
const borderClass = computed(() => {
  if (props.border === "none") return null;
  
  const borderClasses = {
    bottom: "border-b border-slate-200",
    full: "border border-slate-200",
  };
  
  return borderClasses[props.border] || "border-b border-slate-200";
});

/**
 * Классы варианта стилизации
 * 
 * @description
 * Определяет дополнительные классы в зависимости от варианта стилизации.
 * 
 * @returns {string|null} Дополнительные классы или null
 */
const variantClass = computed(() => {
  if (!props.variant) return null;
  
  const variantClasses = {
    bordered: "border-slate-300",
    elevated: null, // Тень применяется через shadow prop
    flat: "border-0",
  };
  
  return variantClasses[props.variant] || null;
});

/**
 * Финальная тень (с учетом variant)
 * 
 * @description
 * Если variant="elevated" и shadow не указан, применяется shadow-sm по умолчанию.
 * Иначе используется значение shadow prop.
 * 
 * @returns {string|null} Tailwind CSS класс для тени или null
 */
const finalShadowClass = computed(() => {
  if (props.shadow) {
    return shadowClass.value;
  }
  
  if (props.variant === "elevated") {
    return "shadow-sm";
  }
  
  return null;
});

/**
 * Классы для header
 * 
 * @description
 * Вычисляет классы для header компонента, включая позиционирование (sticky/fixed),
 * высоту, фон, тень, рамку и вариант стилизации.
 * 
 * @returns {Array} Массив классов для header
 */
const headerClasses = computed(() =>
  useClassComposition(
    "w-full",
    bgClass.value,
    finalShadowClass.value,
    borderClass.value,
    variantClass.value,
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

// Экспортируем методы и данные для использования в родительском компоненте
defineExpose({
  openMobileMenu,
  closeMobileMenu,
  showMobileMenu,
  // Breakpoint данные (если доступны через DXBreakpointProvider)
  currentBreakpoint,
  screenWidth,
  screenHeight,
  breakpoints,
  isMobile,
  isDesktop,
});
</script>

