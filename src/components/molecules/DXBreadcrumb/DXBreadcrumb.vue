<template>
  <nav aria-label="Breadcrumb" data-component="DXBreadcrumb">
    <ol class="flex items-center flex-wrap" :class="sizeClasses">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <!-- Separator -->
        <span v-if="index > 0" class="mx-2 text-slate-400" aria-hidden="true">
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
        <component
          :is="getLinkComponent(item)"
          :href="item.href"
          :to="item.to"
          :class="[
            itemClasses,
            index === items.length - 1 ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700',
          ]"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          <DXIcon 
            v-if="item.icon" 
            :icon="item.icon" 
            :size="iconSize"
            :animation="getIconAnimation(item, index)"
            class="mr-1.5"
          />
          {{ item.label }}
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import DXIcon from "../../atoms/v2/DXIcon/DXIcon.vue";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /** Элементы: [{ label, href?, to?, icon?, iconAnimation? }] */
  items: { type: Array, required: true },
  /** Разделитель: slash | chevron */
  separator: { type: String, default: "chevron" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
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

const itemClasses = "inline-flex items-center transition-colors";

const getLinkComponent = (item) => {
  if (item.to) return "router-link";
  if (item.href) return "a";
  return "span";
};

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

