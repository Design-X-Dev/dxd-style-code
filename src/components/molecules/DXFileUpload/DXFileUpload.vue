<template>
  <div class="w-full" data-component="DXFileUpload">
    <label v-if="label" class="block text-sm font-medium text-slate-700 mb-1">{{ label }}</label>
    
    <!-- Drop Zone -->
    <div
      ref="dropZone"
      class="relative border-2 border-dashed rounded-xl p-6 transition-all"
      :class="[
        isDragging
          ? 'border-slate-900 bg-slate-50 scale-105'
          : 'border-slate-300 bg-white hover:border-slate-400',
        disabled && 'opacity-60 cursor-not-allowed',
      ]"
      @dragenter.prevent="handleDragEnter"
      @dragover.prevent
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <input
        ref="fileInput"
        type="file"
        :accept="accept"
        :multiple="multiple"
        :disabled="disabled"
        class="hidden"
        @change="handleFileSelect"
      />
      
      <!-- Upload Icon & Text -->
      <div v-if="!files.length" class="text-center">
        <svg class="w-12 h-12 mx-auto text-slate-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p class="text-sm font-medium text-slate-700 mb-1">
          Перетащите файлы сюда или 
          <button
            type="button"
            class="text-slate-900 underline hover:no-underline"
            :disabled="disabled"
            @click="fileInput?.click()"
          >
            выберите
          </button>
        </p>
        <p class="text-xs text-slate-500">
          {{ accept || 'Любые файлы' }}
          {{ maxSize ? `• Макс. ${maxSize}` : '' }}
        </p>
      </div>
      
      <!-- File List -->
      <div v-else class="space-y-2">
        <div
          v-for="(file, index) in files"
          :key="index"
          class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
        >
          <!-- Preview for images -->
          <div
            v-if="file.type?.startsWith('image/')"
            class="w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-slate-200"
          >
            <img
              :src="file.preview"
              :alt="file.name"
              class="w-full h-full object-cover"
            />
          </div>
          <svg v-else class="w-6 h-6 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-900 truncate">
              {{ file.name }}
            </p>
            <p class="text-xs text-slate-500">
              {{ formatFileSize(file.size) }}
            </p>
          </div>
          
          <button
            type="button"
            class="text-slate-400 hover:text-slate-600"
            @click="removeFile(index)"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Add More Button -->
        <button
          v-if="multiple"
          type="button"
          class="w-full py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50"
          :disabled="disabled"
          @click="fileInput?.click()"
        >
          <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Добавить ещё
        </button>
      </div>
    </div>
    
    <p v-if="helper" class="mt-1 text-xs text-slate-500">{{ helper }}</p>
    <p v-if="error" class="mt-1 text-xs text-rose-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: [File, FileList, Array],
  label: { type: String, default: "" },
  helper: { type: String, default: "" },
  accept: { type: String, default: "" },
  multiple: { type: Boolean, default: false },
  maxSize: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "upload"]);

const fileInput = ref(null);
const dropZone = ref(null);
const isDragging = ref(false);
const files = ref([]);
const error = ref("");

const handleFileSelect = (event) => {
  const selectedFiles = Array.from(event.target.files || []);
  processFiles(selectedFiles);
};

const handleDrop = (event) => {
  isDragging.value = false;
  if (props.disabled) return;
  
  const droppedFiles = Array.from(event.dataTransfer?.files || []);
  processFiles(droppedFiles);
};

const handleDragEnter = () => {
  if (!props.disabled) {
    isDragging.value = true;
  }
};

const handleDragLeave = (event) => {
  if (event.target === dropZone.value) {
    isDragging.value = false;
  }
};

const processFiles = (newFiles) => {
  error.value = "";
  
  const validFiles = newFiles.map((file) => {
    if (file.type.startsWith("image/")) {
      const preview = URL.createObjectURL(file);
      return Object.assign(file, { preview });
    }
    return file;
  });
  
  if (props.multiple) {
    files.value = [...files.value, ...validFiles];
  } else {
    files.value = validFiles.slice(0, 1);
  }
  
  emit("update:modelValue", props.multiple ? files.value : files.value[0]);
};

const removeFile = (index) => {
  const removed = files.value[index];
  if (removed.preview) {
    URL.revokeObjectURL(removed.preview);
  }
  files.value.splice(index, 1);
  emit("update:modelValue", props.multiple ? files.value : files.value[0] || null);
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
};

watch(() => props.modelValue, (newVal) => {
  if (!newVal) {
    files.value = [];
  }
});
</script>

