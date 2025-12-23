<template>
  <div
    :class="wizardClasses"
    data-component="DXWizard"
    :data-current-step="currentStep"
  >
    <!-- Progress Indicator -->
    <div v-if="showProgress" :class="progressClasses">
      <DXProgress
        :value="progressValue"
        :max="100"
        :size="progressSize"
        :show-label="showProgressLabel"
      />
      <div v-if="showProgressLabel" class="mt-2 text-sm text-slate-600 text-center">
        Шаг {{ currentStep }} из {{ steps.length }}
      </div>
    </div>

    <!-- Steps Indicator -->
    <div v-if="showStepsIndicator" :class="stepsIndicatorClasses">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="stepIndicatorClasses(index)"
      >
        <div
          :class="stepCircleClasses(index)"
          class="flex items-center justify-center rounded-full"
        >
          <DXIcon
            v-if="isStepCompleted(index)"
            :icon="CheckIcon"
            size="sm"
            class="text-white"
          />
          <span v-else class="text-sm font-medium">{{ index + 1 }}</span>
        </div>
        <div class="flex-1 ml-4">
          <div class="text-sm font-medium text-slate-900">{{ step.title }}</div>
          <div v-if="step.description" class="text-xs text-slate-500">
            {{ step.description }}
          </div>
        </div>
        <div
          v-if="index < steps.length - 1"
          :class="stepConnectorClasses(index)"
          class="absolute left-5 top-10 w-0.5 h-full"
        />
      </div>
    </div>

    <!-- Step Content -->
    <div :class="contentClasses">
      <Transition :name="transitionName" mode="out-in">
        <div :key="currentStep" class="w-full">
          <slot
            :name="`step-${currentStep}`"
            :step="currentStepData"
            :stepIndex="currentStep - 1"
            :formData="wizardData"
            :errors="stepErrors"
          >
            <div class="p-8 text-center text-slate-500">
              <p>Шаг {{ currentStep }}: {{ currentStepData?.title }}</p>
              <p class="text-sm mt-2">
                Используйте slot step-{{ currentStep }} для контента
              </p>
            </div>
          </slot>
        </div>
      </Transition>
    </div>

    <!-- Navigation -->
    <div :class="navigationClasses">
      <slot
        name="navigation"
        :canGoNext="canGoNext"
        :canGoPrev="canGoPrev"
        :goNext="goNext"
        :goPrev="goPrev"
        :goToStep="goToStep"
        :currentStep="currentStep"
        :totalSteps="steps.length"
        :save="saveProgress"
        :cancel="handleCancel"
      >
        <DXButton
          v-if="currentStep > 1"
          variant="ghost"
          :disabled="loading"
          @click="goPrev"
        >
          Назад
        </DXButton>
        <div class="flex-1"></div>
        <DXButton
          v-if="saveProgressEnabled"
          variant="ghost"
          :disabled="loading"
          @click="saveProgress"
        >
          Сохранить прогресс
        </DXButton>
        <DXButton
          v-if="currentStep < steps.length"
          variant="primary"
          :disabled="loading || !canGoNext"
          @click="goNext"
        >
          Далее
        </DXButton>
        <DXButton
          v-else
          variant="success"
          :disabled="loading || !canComplete"
          @click="handleComplete"
        >
          Завершить
        </DXButton>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useClassComposition } from "../../../composables/useClassComposition";
import { useSpacing } from "../../../composables/useSpacing";
import DXProgress from "../../atoms/DXProgress/DXProgress.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { CheckIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  /**
   * Шаги мастера
   * Формат: [{ title, description?, schema?, fields? }]
   */
  steps: {
    type: Array,
    required: true,
  },
  /**
   * Текущий шаг (начинается с 1)
   * @default 1
   */
  currentStep: {
    type: Number,
    default: 1,
  },
  /**
   * Данные мастера (v-model)
   */
  wizardData: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Ошибки валидации
   * Формат: { [field]: 'error message' }
   */
  validationErrors: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Разрешить пропуск шагов
   * @default false
   */
  allowSkip: { type: Boolean, default: false },
  /**
   * Сохранять прогресс
   * @default false
   */
  saveProgressEnabled: { type: Boolean, default: false },
  /**
   * Ключ для сохранения в localStorage
   * @default 'dx-wizard-progress'
   */
  storageKey: {
    type: String,
    default: "dx-wizard-progress",
  },
  /**
   * Состояние загрузки
   * @default false
   */
  loading: { type: Boolean, default: false },
  /**
   * Показывать индикатор прогресса
   * @default true
   */
  showProgress: { type: Boolean, default: true },
  /**
   * Показывать метку прогресса
   * @default true
   */
  showProgressLabel: { type: Boolean, default: true },
  /**
   * Показывать индикатор шагов
   * @default true
   */
  showStepsIndicator: { type: Boolean, default: true },
  /**
   * Имя transition
   * @default 'fade'
   */
  transition: {
    type: String,
    default: "fade",
  },
});

const emit = defineEmits([
  "update:currentStep",
  "update:wizardData",
  "next",
  "prev",
  "complete",
  "cancel",
  "step-change",
  "save-progress",
]);

const internalCurrentStep = ref(props.currentStep);
const internalWizardData = ref({ ...props.wizardData });

/**
 * Значение прогресса
 * 
 * @description
 * Вычисляет процент выполнения мастера.
 * 
 * @returns {number} Процент прогресса
 */
const progressValue = computed(() => {
  if (props.steps.length === 0) return 0;
  return ((internalCurrentStep.value - 1) / props.steps.length) * 100;
});

/**
 * Размер прогресса
 * 
 * @description
 * Определяет размер прогресс-бара.
 * 
 * @returns {'sm' | 'md' | 'lg'} Размер
 */
const progressSize = computed(() => "sm");

/**
 * Данные текущего шага
 * 
 * @description
 * Возвращает объект текущего шага.
 * 
 * @returns {Object} Объект шага
 */
const currentStepData = computed(() => {
  return props.steps[internalCurrentStep.value - 1] || {};
});

/**
 * Ошибки текущего шага
 * 
 * @description
 * Фильтрует ошибки валидации для текущего шага.
 * 
 * @returns {Object} Объект ошибок
 */
const stepErrors = computed(() => {
  const errors = {};
  const currentStepFields =
    currentStepData.value?.fields ||
    Object.keys(internalWizardData.value);
  for (const field of currentStepFields) {
    if (props.validationErrors[field]) {
      errors[field] = props.validationErrors[field];
    }
  }
  return errors;
});

/**
 * Можно ли перейти к следующему шагу
 * 
 * @description
 * Проверяет, можно ли перейти к следующему шагу.
 * 
 * @returns {boolean} true, если можно перейти
 */
const canGoNext = computed(() => {
  if (props.allowSkip) return true;
  return Object.keys(stepErrors.value).length === 0;
});

/**
 * Можно ли перейти к предыдущему шагу
 * 
 * @description
 * Проверяет, можно ли перейти к предыдущему шагу.
 * 
 * @returns {boolean} true, если можно перейти
 */
const canGoPrev = computed(() => {
  return internalCurrentStep.value > 1;
});

/**
 * Можно ли завершить мастер
 * 
 * @description
 * Проверяет, можно ли завершить мастер.
 * 
 * @returns {boolean} true, если можно завершить
 */
const canComplete = computed(() => {
  return Object.keys(props.validationErrors).length === 0;
});

/**
 * Имя transition
 * 
 * @description
 * Возвращает имя transition для анимации.
 * 
 * @returns {string} Имя transition
 */
const transitionName = computed(() => props.transition);

/**
 * Классы для мастера
 * 
 * @description
 * Базовые классы для мастера.
 * 
 * @returns {Array} Массив классов
 */
const wizardClasses = computed(() =>
  useClassComposition("w-full", useSpacing("md", "padding"))
);

/**
 * Классы для прогресса
 * 
 * @description
 * Классы для секции прогресса.
 * 
 * @returns {Array} Массив классов
 */
const progressClasses = computed(() =>
  useClassComposition("mb-6")
);

/**
 * Классы для индикатора шагов
 * 
 * @description
 * Классы для индикатора шагов.
 * 
 * @returns {Array} Массив классов
 */
const stepsIndicatorClasses = computed(() =>
  useClassComposition("mb-8 relative")
);

/**
 * Классы для индикатора шага
 * 
 * @description
 * Классы для отдельного индикатора шага.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function stepIndicatorClasses(index) {
  return useClassComposition(
    "flex items-center relative mb-6",
    index === internalCurrentStep.value - 1 ? "text-slate-900" : "text-slate-500"
  );
}

/**
 * Классы для круга шага
 * 
 * @description
 * Классы для круга индикатора шага.
 * 
 * @param {number} index - Индекс шага
 * @returns {string} Tailwind CSS классы
 */
function stepCircleClasses(index) {
  const stepIndex = index + 1;
  if (stepIndex < internalCurrentStep.value) {
    return "w-10 h-10 bg-green-500 text-white";
  } else if (stepIndex === internalCurrentStep.value) {
    return "w-10 h-10 bg-blue-500 text-white";
  } else {
    return "w-10 h-10 bg-slate-200 text-slate-500";
  }
}

/**
 * Классы для соединителя шагов
 * 
 * @description
 * Классы для линии между шагами.
 * 
 * @param {number} index - Индекс шага
 * @returns {string} Tailwind CSS классы
 */
function stepConnectorClasses(index) {
  const stepIndex = index + 1;
  if (stepIndex < internalCurrentStep.value) {
    return "bg-green-500";
  } else {
    return "bg-slate-200";
  }
}

/**
 * Классы для контента
 * 
 * @description
 * Классы для секции контента шага.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() =>
  useClassComposition("min-h-[300px]")
);

/**
 * Классы для навигации
 * 
 * @description
 * Классы для секции навигации.
 * 
 * @returns {Array} Массив классов
 */
const navigationClasses = computed(() =>
  useClassComposition("flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200")
);

/**
 * Проверка, завершен ли шаг
 * 
 * @description
 * Проверяет, завершен ли указанный шаг.
 * 
 * @param {number} index - Индекс шага
 * @returns {boolean} true, если шаг завершен
 */
function isStepCompleted(index) {
  return index + 1 < internalCurrentStep.value;
}

/**
 * Переход к следующему шагу
 * 
 * @description
 * Переходит к следующему шагу, если это возможно.
 */
function goNext() {
  if (internalCurrentStep.value < props.steps.length && canGoNext.value) {
    internalCurrentStep.value++;
    emit("update:currentStep", internalCurrentStep.value);
    emit("next", internalCurrentStep.value);
    emit("step-change", internalCurrentStep.value);
    saveProgressIfEnabled();
  }
}

/**
 * Переход к предыдущему шагу
 * 
 * @description
 * Переходит к предыдущему шагу.
 */
function goPrev() {
  if (internalCurrentStep.value > 1) {
    internalCurrentStep.value--;
    emit("update:currentStep", internalCurrentStep.value);
    emit("prev", internalCurrentStep.value);
    emit("step-change", internalCurrentStep.value);
    saveProgressIfEnabled();
  }
}

/**
 * Переход к указанному шагу
 * 
 * @description
 * Переходит к указанному шагу.
 * 
 * @param {number} step - Номер шага
 */
function goToStep(step) {
  if (step >= 1 && step <= props.steps.length) {
    internalCurrentStep.value = step;
    emit("update:currentStep", internalCurrentStep.value);
    emit("step-change", internalCurrentStep.value);
    saveProgressIfEnabled();
  }
}

/**
 * Сохранение прогресса
 * 
 * @description
 * Сохраняет прогресс мастера в localStorage.
 */
function saveProgress() {
  const progress = {
    currentStep: internalCurrentStep.value,
    wizardData: { ...internalWizardData.value },
  };
  localStorage.setItem(props.storageKey, JSON.stringify(progress));
  emit("save-progress", progress);
}

/**
 * Сохранение прогресса если включено
 * 
 * @description
 * Сохраняет прогресс автоматически, если включено.
 */
function saveProgressIfEnabled() {
  if (props.saveProgressEnabled) {
    saveProgress();
  }
}

/**
 * Обработчик завершения
 * 
 * @description
 * Эмитит событие завершения мастера.
 */
function handleComplete() {
  if (canComplete.value) {
    emit("complete", {
      wizardData: { ...internalWizardData.value },
      currentStep: internalCurrentStep.value,
    });
    // Очищаем сохраненный прогресс
    if (props.saveProgressEnabled) {
      localStorage.removeItem(props.storageKey);
    }
  }
}

/**
 * Обработчик отмены
 * 
 * @description
 * Эмитит событие отмены мастера.
 */
function handleCancel() {
  emit("cancel");
}

// Загрузка сохраненного прогресса при монтировании
onMounted(() => {
  if (props.saveProgressEnabled) {
    const saved = localStorage.getItem(props.storageKey);
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        if (progress.currentStep) {
          internalCurrentStep.value = progress.currentStep;
          emit("update:currentStep", internalCurrentStep.value);
        }
        if (progress.wizardData) {
          internalWizardData.value = { ...progress.wizardData };
          emit("update:wizardData", { ...internalWizardData.value });
        }
      } catch (e) {
        console.warn("Не удалось загрузить сохраненный прогресс:", e);
      }
    }
  }
});

// Синхронизация с prop currentStep
watch(
  () => props.currentStep,
  (newStep) => {
    if (newStep !== internalCurrentStep.value) {
      internalCurrentStep.value = newStep;
    }
  }
);

// Синхронизация с prop wizardData
watch(
  () => props.wizardData,
  (newData) => {
    internalWizardData.value = { ...newData };
  },
  { deep: true }
);

// Синхронизация internalWizardData с prop
watch(
  internalWizardData,
  (newData) => {
    emit("update:wizardData", { ...newData });
  },
  { deep: true }
);
</script>

