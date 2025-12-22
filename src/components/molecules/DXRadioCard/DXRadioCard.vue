<template>
  <label
    class="block relative cursor-pointer group"
    :class="{ 'cursor-not-allowed opacity-60': disabled }"
    data-component="DXRadioCard"
  >
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      class="sr-only peer"
      @change="$emit('update:modelValue', value)"
    />
    <div
      class="border-2 rounded-xl p-4 transition-all"
      :class="[
        modelValue === value
          ? 'border-slate-900 bg-slate-50'
          : 'border-slate-200 bg-white',
        !disabled && 'hover:border-slate-300 hover:shadow-sm',
        disabled && 'bg-slate-50',
      ]"
    >
      <div class="flex items-start gap-3">
        <component
          v-if="icon"
          :is="icon"
          class="w-6 h-6 flex-shrink-0"
          :class="modelValue === value ? 'text-slate-900' : 'text-slate-400'"
        />
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <p
              class="font-semibold"
              :class="modelValue === value ? 'text-slate-900' : 'text-slate-700'"
            >
              {{ title }}
            </p>
            <div
              v-if="modelValue === value"
              class="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0"
            >
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p v-if="description" class="text-sm text-slate-600 mt-1">
            {{ description }}
          </p>
          <slot />
        </div>
      </div>
    </div>
  </label>
</template>

<script setup>
defineProps({
  modelValue: [String, Number, Boolean],
  value: { type: [String, Number, Boolean], required: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  icon: { type: [Object, Function], default: null },
  disabled: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);
</script>

