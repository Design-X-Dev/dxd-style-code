<template>
  <div 
    :class="accordionClasses" 
    data-component="DXAccordion"
    :data-variant="variant"
    :data-multiple="multiple"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-b border-slate-200 last:border-b-0"
    >
      <!-- Header -->
      <button
        type="button"
        class="w-full flex items-center justify-between py-4 px-1 text-left transition-colors hover:bg-slate-50"
        :class="{ 'font-semibold': isOpen(index) }"
        @click="toggle(index)"
        :aria-expanded="isOpen(index)"
      >
        <span class="flex items-center gap-2">
          <DXIcon v-if="item.icon" :icon="item.icon" size="md" animation="none" class="text-slate-500" />
          <span class="text-slate-900">{{ item.title }}</span>
        </span>
        <DXIcon
          :icon="ChevronDownIcon"
          size="md"
          animation="none"
          class="text-slate-400 transition-transform duration-200"
          :class="{ 'rotate-180': isOpen(index) }"
        />
      </button>
      
      <!-- Content -->
      <Transition v-bind="collapseTransition">
        <div v-show="isOpen(index)" class="overflow-hidden">
          <div class="pb-4 px-1 text-sm text-slate-600">
            <slot :name="`item-${index}`">
              {{ item.content }}
            </slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { useTransition } from "../../../composables/useAnimation";
import { useClassComposition } from "../../../composables/useClassComposition";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const collapseTransition = useTransition('collapse');

const props = defineProps({
  /** Элементы: [{ title, content?, icon? }] */
  items: { type: Array, required: true },
  /** Разрешить несколько открытых */
  multiple: { type: Boolean, default: false },
  /** Изначально открытые индексы */
  defaultOpen: { type: Array, default: () => [] },
  /** Вариант: default | bordered | separated */
  variant: { type: String, default: "default" },
});

const openItems = ref(new Set(props.defaultOpen));

const isOpen = (index) => openItems.value.has(index);

const toggle = (index) => {
  if (props.multiple) {
    if (openItems.value.has(index)) {
      openItems.value.delete(index);
    } else {
      openItems.value.add(index);
    }
    openItems.value = new Set(openItems.value);
  } else {
    if (openItems.value.has(index)) {
      openItems.value = new Set();
    } else {
      openItems.value = new Set([index]);
    }
  }
};

const BASE_CLASSES = "";

const VARIANT_CLASSES = {
  default: "",
  bordered: "border border-slate-200 rounded-xl overflow-hidden",
  separated: "space-y-2",
};

const accordionClasses = computed(() =>
  useClassComposition(
    BASE_CLASSES,
    VARIANT_CLASSES[props.variant] || VARIANT_CLASSES.default
  )
);
</script>

