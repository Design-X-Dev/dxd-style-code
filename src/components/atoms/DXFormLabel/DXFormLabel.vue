<template>
  <div class="w-full" data-component="DXFormLabel">
    <!-- Label with optional required indicator -->
    <div v-if="label || showCount" class="flex items-center justify-between mb-1">
      <label v-if="label" class="text-sm font-medium text-slate-700">
        {{ label }}
        <span v-if="required" class="text-rose-500 ml-0.5">*</span>
      </label>
      
      <!-- Character count -->
      <span v-if="showCount && maxLength" class="text-xs text-slate-500">
        {{ currentLength }} / {{ maxLength }}
      </span>
    </div>
    
    <!-- Slot for input/textarea/select -->
    <slot />
    
    <!-- Error message -->
    <p v-if="error" class="mt-1 text-xs text-rose-500 flex items-center gap-1">
      <DXValidationIcon v-if="showValidationIcon" state="error" size="xs" />
      {{ error }}
    </p>
    
    <!-- Helper text (only shown if no error) -->
    <p v-else-if="helper" class="mt-1 text-xs text-slate-500">
      {{ helper }}
    </p>
    
    <!-- Success message -->
    <p v-if="success && !error" class="mt-1 text-xs text-emerald-600 flex items-center gap-1">
      <DXValidationIcon v-if="showValidationIcon" state="success" size="xs" />
      {{ success }}
    </p>
  </div>
</template>

<script setup>
import DXValidationIcon from '../../molecules/DXValidationIcon/DXValidationIcon.vue';

const props = defineProps({
  /** Label text */
  label: {
    type: String,
    default: ''
  },
  /** Error message */
  error: {
    type: String,
    default: ''
  },
  /** Helper text */
  helper: {
    type: String,
    default: ''
  },
  /** Success message */
  success: {
    type: String,
    default: ''
  },
  /** Show required asterisk */
  required: {
    type: Boolean,
    default: false
  },
  /** Show validation icon in messages */
  showValidationIcon: {
    type: Boolean,
    default: true
  },
  /** Maximum length for character count */
  maxLength: {
    type: Number,
    default: 0
  },
  /** Current length for character count */
  currentLength: {
    type: Number,
    default: 0
  },
  /** Show character count */
  showCount: {
    type: Boolean,
    default: false
  },
});
</script>

