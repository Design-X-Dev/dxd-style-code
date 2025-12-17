<template>
  <div class="inline-flex" data-component="DXSegmentedControl">
    <p v-if="label" class="text-sm font-medium text-slate-700 mb-2">{{ label }}</p>
    <div class="relative inline-flex p-1 bg-slate-100 rounded-xl gap-1">
      <!-- Floating indicator -->
      <div
        class="absolute bg-white rounded-lg shadow-sm transition-all duration-200 ease-out"
        :style="indicatorStyle"
      />
      
      <!-- Buttons -->
      <button
        v-for="(option, index) in options"
        :key="option.value"
        type="button"
        :ref="el => { if (el) buttonRefs[index] = el }"
        class="relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-150 rounded-lg whitespace-nowrap min-w-[60px] text-center inline-flex items-center justify-center gap-1.5"
        :class="[
          modelValue === option.value
            ? 'text-slate-900'
            : 'text-slate-600 hover:text-slate-900',
          disabled && 'opacity-60 cursor-not-allowed',
        ]"
        :disabled="disabled"
        @click="select(option.value)"
      >
        <DXIcon 
          v-if="option.icon" 
          :icon="option.icon" 
          size="xs"
          :animation="getIconAnimation(option)"
        />
        <span v-if="option.label">{{ option.label }}</span>
        <span
          v-if="option.count !== undefined && option.count !== null"
          class="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-semibold rounded-full"
          :class="modelValue === option.value 
            ? 'bg-slate-800 text-white' 
            : 'bg-slate-200 text-slate-700'"
        >
          {{ option.count }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

const props = defineProps({
  modelValue: [String, Number, Boolean],
  options: {
    type: Array,
    required: true,
  },
  label: { type: String, default: "" },
  /** Анимация иконок: none | wiggle | scale | rotate */
  iconAnimation: { type: String, default: "none" },
  /** Анимировать только активную иконку */
  animateActiveOnly: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const buttonRefs = ref([]);
const indicatorStyle = ref({});

const selectedIndex = computed(() => {
  return props.options.findIndex((opt) => opt.value === props.modelValue);
});

const updateIndicator = () => {
  const index = selectedIndex.value;
  if (index >= 0 && buttonRefs.value[index]) {
    const button = buttonRefs.value[index];
    indicatorStyle.value = {
      width: `${button.offsetWidth}px`,
      height: `${button.offsetHeight}px`,
      left: `${button.offsetLeft}px`,
      top: `${button.offsetTop}px`,
    };
  }
};

const select = (value) => {
  if (!props.disabled) {
    emit("update:modelValue", value);
  }
};

// Определяет анимацию для иконки
const getIconAnimation = (option) => {
  // Если анимация отключена
  if (props.iconAnimation === 'none') return 'none';
  
  // Если анимировать только активную иконку
  if (props.animateActiveOnly) {
    return props.modelValue === option.value ? props.iconAnimation : 'none';
  }
  
  // Анимировать все иконки
  return props.iconAnimation;
};

watch(() => props.modelValue, () => {
  nextTick(updateIndicator);
});

onMounted(() => {
  nextTick(updateIndicator);
});
</script>

