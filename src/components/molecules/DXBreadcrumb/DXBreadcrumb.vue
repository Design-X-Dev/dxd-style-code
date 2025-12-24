<template>
  <DXNav type="breadcrumb" data-component="DXBreadcrumb">
    <ol class="flex items-center flex-wrap" :class="sizeClasses">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <!-- Separator -->
        <span v-if="index > 0" class="mx-1 text-slate-400" aria-hidden="true">
          <slot name="separator">
            <DXIcon 
              v-if="separator === 'chevron'" 
              :icon="ChevronRightIcon" 
              :size="iconSize"
              animation="none"
            />
            <span v-else>/</span>
          </slot>
        </span>
        
        <!-- Item -->
        <DXLink
          :href="item.href"
          :to="item.to"
          :size="linkSize"
          :variant="variant"
          :inactive="index === items.length - 1"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          <DXIcon 
            v-if="item.icon" 
            :icon="item.icon" 
            :size="iconSize"
            :animation="getIconAnimation(item, index)"

          />
          {{ item.label }}
        </DXLink>
      </li>
    </ol>
  </DXNav>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import DXLink from "../../atoms/DXLink/DXLink.vue";
import DXNav from "../../atoms/DXNav/DXNav.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Элементы: [{ label, href?, to?, icon?, iconAnimation? }] */
  items: { type: Array, required: true },
  /** Разделитель: slash | chevron */
  separator: { type: String, default: "chevron" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
  /** Вариант стилизации ссылок: link | primary | secondary | ghost | outline */
  variant: { type: String, default: "ghost" },
  /** Анимация иконок: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "none" },
  /** Анимировать только иконку текущей страницы */
  animateCurrentOnly: { type: Boolean, default: false },
});

const sizes = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const sizeClasses = computed(() => sizes[props.size] || sizes.md);

const iconSize = computed(() => {
  if (props.size === "sm") return "xs";
  if (props.size === "lg") return "sm";
  return "xs";
});

// Маппинг размера breadcrumb на размер DXLink
const linkSize = computed(() => {
  const sizeMap = {
    sm: "xs",
    md: "sm",
    lg: "md",
  };
  return sizeMap[props.size] || "sm";
});

const getIconAnimation = (item, index) => {
  // Если у элемента своя анимация
  if (item.iconAnimation) return item.iconAnimation;
  
  // Если анимировать только текущую страницу
  if (props.animateCurrentOnly) {
    return index === props.items.length - 1 ? props.iconAnimation : "none";
  }
  
  // Глобальная анимация для всех иконок
  return props.iconAnimation;
};
</script>

