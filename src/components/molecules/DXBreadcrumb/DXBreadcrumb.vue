<template>
  <nav aria-label="Breadcrumb" data-component="DXBreadcrumb">
    <ol class="flex items-center" :class="sizeClasses">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <!-- Separator -->
        <span v-if="index > 0" class="mx-2 text-slate-400" aria-hidden="true">
          <slot name="separator">
            <svg v-if="separator === 'chevron'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span v-else>/</span>
          </slot>
        </span>
        
        <!-- Item -->
        <component
          :is="item.href || item.to ? 'a' : 'span'"
          :href="item.href"
          :to="item.to"
          :class="[
            itemClasses,
            index === items.length - 1 ? 'text-slate-900 font-medium' : 'text-slate-500 hover:text-slate-700',
          ]"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-1" />
          {{ item.label }}
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  /** Элементы: [{ label, href?, to?, icon? }] */
  items: { type: Array, required: true },
  /** Разделитель: slash | chevron */
  separator: { type: String, default: "chevron" },
  /** Размер: sm | md | lg */
  size: { type: String, default: "md" },
});

const sizes = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const sizeClasses = computed(() => sizes[props.size] || sizes.md);

const itemClasses = "inline-flex items-center transition-colors";
</script>

