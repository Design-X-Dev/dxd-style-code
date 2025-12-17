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
        <DXIcon :icon="CloudArrowUpIcon" size="xl" animation="none" class="mx-auto text-slate-400 mb-3 w-12 h-12" />
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
          <DXIcon v-else :icon="DocumentIcon" size="lg" animation="none" class="text-slate-400 flex-shrink-0" />
          
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
            class="text-slate-400 hover:text-slate-600 transition-colors"
            @click="removeFile(index)"
            aria-label="Удалить файл"
          >
            <DXIcon :icon="XMarkIcon" size="md" animation="scale" />
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
          <DXIcon :icon="PlusIcon" size="sm" animation="none" class="inline mr-1" />
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
import { CloudArrowUpIcon, DocumentIcon, XMarkIcon, PlusIcon } from "@heroicons/vue/24/outline";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";

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

