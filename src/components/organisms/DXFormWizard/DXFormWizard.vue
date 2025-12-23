<template>
  <div
    :class="wizardClasses"
    data-component="DXFormWizard"
    :data-current-step="currentStep"
  >
    <!-- Индикатор прогресса -->
    <div v-if="showProgress" :class="progressClasses">
      <DXProgress
        :value="progressValue"
        :max="100"
        :size="progressSize"
        :show-label="false"
      />
      <div class="mt-2 text-sm text-slate-600 text-center">
        Шаг {{ currentStep + 1 }} из {{ steps.length }}
      </div>
    </div>

    <!-- Навигация по шагам (tabs) -->
    <div v-if="navigationStyle === 'tabs'" :class="tabsClasses">
      <button
        v-for="(step, index) in steps"
        :key="index"
        type="button"
        :class="tabClasses(index)"
        :disabled="!canNavigateToStep(index)"
        @click="goToStep(index)"
      >
        <span class="flex items-center gap-2">
          <span
            :class="tabNumberClasses(index)"
            class="flex items-center justify-center rounded-full"
          >
            {{ index + 1 }}
          </span>
          <span>{{ step.title }}</span>
        </span>
      </button>
    </div>

    <!-- Навигация по шагам (steps) -->
    <div v-if="navigationStyle === 'steps'" :class="stepsClasses">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="stepItemClasses(index)"
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

    <!-- Контент шага -->
    <div :class="contentClasses">
      <Transition :name="transitionName" mode="out-in">
        <div :key="currentStep" class="w-full">
          <slot :name="`step-${currentStep + 1}`" :step="steps[currentStep]" :stepIndex="currentStep">
            <div class="p-8 text-center text-slate-500">
              <p>Шаг {{ currentStep + 1 }}: {{ steps[currentStep]?.title }}</p>
              <p class="text-sm mt-2">Используйте slot step-{{ currentStep + 1 }} для контента</p>
            </div>
          </slot>
        </div>
      </Transition>
    </div>

    <!-- Навигация -->
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
      >
        <div class="flex items-center justify-between">
          <DXButton
            v-if="canGoPrev"
            variant="ghost"
            @click="goPrev"
          >
            Назад
          </DXButton>
          <div v-else></div>

          <div class="flex gap-2">
            <DXButton
              v-for="(step, index) in steps"
              :key="index"
              :variant="currentStep === index ? 'primary' : 'ghost'"
              size="sm"
              :disabled="!canNavigateToStep(index)"
              @click="goToStep(index)"
            >
              {{ index + 1 }}
            </DXButton>
          </div>

          <DXButton
            v-if="canGoNext"
            variant="primary"
            @click="goNext"
          >
            Далее
          </DXButton>
          <DXButton
            v-else
            variant="primary"
            @click="handleSubmit"
          >
            Завершить
          </DXButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import DXProgress from "../../atoms/DXProgress/DXProgress.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXIcon from "../../atoms/DXIcon/DXIcon.vue";
import { CheckIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  /**
   * Текущий шаг (v-model, 0-based)
   * @default 0
   */
  currentStep: { type: Number, default: 0 },
  /**
   * Массив шагов: [{ id, title, description? }]
   */
  steps: {
    type: Array,
    required: true,
    validator: (v) => v.length > 0,
  },
  /**
   * Данные формы (для валидации)
   */
  formData: { type: Object, default: () => ({}) },
  /**
   * Функция валидации для каждого шага
   * Формат: (stepIndex, formData) => boolean
   */
  validation: { type: Function, default: null },
  /**
   * Разрешить пропуск шагов
   * @default false
   */
  allowSkip: { type: Boolean, default: false },
  /**
   * Стиль навигации: tabs | steps | dots | none
   * @default 'steps'
   */
  navigationStyle: {
    type: String,
    default: "steps",
    validator: (v) => ["tabs", "steps", "dots", "none"].includes(v),
  },
  /**
   * Показывать индикатор прогресса
   * @default true
   */
  showProgress: { type: Boolean, default: true },
  /**
   * Размер индикатора прогресса: xs | sm | md | lg
   * @default 'md'
   */
  progressSize: {
    type: String,
    default: "md",
    validator: (v) => ["xs", "sm", "md", "lg"].includes(v),
  },
});

const emit = defineEmits([
  "update:currentStep",
  "step-change",
  "submit",
  "next",
  "prev",
]);

const internalStep = ref(props.currentStep);
const completedSteps = ref([]);

/**
 * Текущий шаг (синхронизированный)
 * 
 * @description
 * Синхронизирует внутреннее состояние с prop currentStep.
 * 
 * @returns {number} Текущий шаг (0-based)
 */
const currentStep = computed({
  get: () => props.currentStep,
  set: (value) => {
    if (canNavigateToStep(value)) {
      internalStep.value = value;
      emit("update:currentStep", value);
      emit("step-change", value);
    }
  },
});

/**
 * Значение прогресса в процентах
 * 
 * @description
 * Вычисляет процент завершения формы на основе текущего шага.
 * 
 * @returns {number} Процент прогресса (0-100)
 */
const progressValue = computed(() => {
  return ((currentStep.value + 1) / props.steps.length) * 100;
});

/**
 * Имя transition для анимации между шагами
 * 
 * @description
 * Используется для CSS классов анимации перехода между шагами.
 * 
 * @returns {string} Имя transition
 */
const transitionName = computed(() => "wizard-fade");

/**
 * Классы для контейнера wizard
 * 
 * @description
 * Базовые классы для контейнера формы.
 * 
 * @returns {Array} Массив классов
 */
const wizardClasses = computed(() =>
  useClassComposition("w-full")
);

/**
 * Классы для индикатора прогресса
 * 
 * @description
 * Классы для секции с индикатором прогресса.
 * 
 * @returns {Array} Массив классов
 */
const progressClasses = computed(() =>
  useClassComposition("mb-6")
);

/**
 * Классы для навигации tabs
 * 
 * @description
 * Классы для навигации в стиле tabs.
 * 
 * @returns {Array} Массив классов
 */
const tabsClasses = computed(() =>
  useClassComposition(
    "flex border-b border-slate-200 mb-6",
    props.allowSkip ? "" : "gap-1"
  )
);

/**
 * Классы для навигации steps
 * 
 * @description
 * Классы для навигации в стиле steps.
 * 
 * @returns {Array} Массив классов
 */
const stepsClasses = computed(() =>
  useClassComposition("relative mb-8 space-y-4")
);

/**
 * Классы для контента
 * 
 * @description
 * Классы для секции с контентом шага.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() =>
  useClassComposition("min-h-[300px] mb-6")
);

/**
 * Классы для навигации
 * 
 * @description
 * Классы для секции с кнопками навигации.
 * 
 * @returns {Array} Массив классов
 */
const navigationClasses = computed(() =>
  useClassComposition("flex items-center justify-between pt-6 border-t border-slate-200")
);

/**
 * Классы для tab
 * 
 * @description
 * Вычисляет классы для tab на основе состояния.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function tabClasses(index) {
  const isActive = currentStep.value === index;
  const isCompleted = completedSteps.value.includes(index);
  const canNavigate = canNavigateToStep(index);

  return useClassComposition(
    "px-4 py-2 text-sm font-medium transition-colors border-b-2",
    {
      "border-blue-600 text-blue-600": isActive,
      "border-transparent text-slate-600 hover:text-slate-900": !isActive,
      "text-slate-400 cursor-not-allowed": !canNavigate && !isActive,
      "text-green-600": isCompleted && !isActive,
    }
  );
}

/**
 * Классы для номера tab
 * 
 * @description
 * Вычисляет классы для номера в tab.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function tabNumberClasses(index) {
  const isActive = currentStep.value === index;
  const isCompleted = completedSteps.value.includes(index);

  return useClassComposition(
    "w-6 h-6 text-xs",
    {
      "bg-blue-600 text-white": isActive,
      "bg-green-600 text-white": isCompleted && !isActive,
      "bg-slate-200 text-slate-600": !isActive && !isCompleted,
    }
  );
}

/**
 * Классы для элемента step
 * 
 * @description
 * Вычисляет классы для элемента в навигации steps.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function stepItemClasses(index) {
  return useClassComposition("relative flex items-start");
}

/**
 * Классы для круга step
 * 
 * @description
 * Вычисляет классы для круга в навигации steps.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function stepCircleClasses(index) {
  const isActive = currentStep.value === index;
  const isCompleted = completedSteps.value.includes(index);

  return useClassComposition(
    "w-10 h-10 flex-shrink-0 z-10",
    {
      "bg-blue-600 text-white": isActive,
      "bg-green-600 text-white": isCompleted && !isActive,
      "bg-slate-200 text-slate-600": !isActive && !isCompleted,
    }
  );
}

/**
 * Классы для соединителя step
 * 
 * @description
 * Вычисляет классы для соединительной линии между шагами.
 * 
 * @param {number} index - Индекс шага
 * @returns {Array} Массив классов
 */
function stepConnectorClasses(index) {
  const isCompleted = completedSteps.value.includes(index + 1);

  return useClassComposition(
    {
      "bg-green-600": isCompleted,
      "bg-slate-200": !isCompleted,
    }
  );
}

/**
 * Можно ли перейти на следующий шаг
 * 
 * @description
 * Проверяет, можно ли перейти на следующий шаг.
 * 
 * @returns {boolean} true если можно перейти дальше
 */
const canGoNext = computed(() => {
  if (currentStep.value >= props.steps.length - 1) return false;
  
  // Валидация текущего шага
  if (props.validation) {
    return props.validation(currentStep.value, props.formData);
  }
  
  return true;
});

/**
 * Можно ли перейти на предыдущий шаг
 * 
 * @description
 * Проверяет, можно ли перейти на предыдущий шаг.
 * 
 * @returns {boolean} true если можно вернуться назад
 */
const canGoPrev = computed(() => {
  return currentStep.value > 0;
});

/**
 * Можно ли перейти на указанный шаг
 * 
 * @description
 * Проверяет, можно ли перейти на указанный шаг.
 * Если allowSkip=false, можно переходить только на следующие шаги.
 * 
 * @param {number} stepIndex - Индекс шага
 * @returns {boolean} true если можно перейти
 */
function canNavigateToStep(stepIndex) {
  if (props.allowSkip) return true;
  
  // Можно перейти только на следующие шаги или уже пройденные
  return stepIndex <= currentStep.value || completedSteps.value.includes(stepIndex);
}

/**
 * Переход на следующий шаг
 * 
 * @description
 * Переходит на следующий шаг с валидацией.
 */
function goNext() {
  if (!canGoNext.value) return;

  // Отмечаем текущий шаг как завершенный
  if (!completedSteps.value.includes(currentStep.value)) {
    completedSteps.value.push(currentStep.value);
  }

  const nextStep = currentStep.value + 1;
  currentStep.value = nextStep;
  emit("next", nextStep);
}

/**
 * Переход на предыдущий шаг
 * 
 * @description
 * Переходит на предыдущий шаг.
 */
function goPrev() {
  if (!canGoPrev.value) return;

  const prevStep = currentStep.value - 1;
  currentStep.value = prevStep;
  emit("prev", prevStep);
}

/**
 * Переход на указанный шаг
 * 
 * @description
 * Переходит на указанный шаг (если разрешено).
 * 
 * @param {number} stepIndex - Индекс шага
 */
function goToStep(stepIndex) {
  if (!canNavigateToStep(stepIndex)) return;
  currentStep.value = stepIndex;
}

/**
 * Проверка завершения шага
 * 
 * @description
 * Проверяет, завершен ли указанный шаг.
 * 
 * @param {number} index - Индекс шага
 * @returns {boolean} true если шаг завершен
 */
function isStepCompleted(index) {
  return completedSteps.value.includes(index);
}

/**
 * Обработчик отправки формы
 * 
 * @description
 * Вызывается при нажатии кнопки "Завершить" на последнем шаге.
 */
function handleSubmit() {
  // Отмечаем последний шаг как завершенный
  if (!completedSteps.value.includes(currentStep.value)) {
    completedSteps.value.push(currentStep.value);
  }

  emit("submit", props.formData);
}

// Синхронизация с prop currentStep
watch(
  () => props.currentStep,
  (newStep) => {
    internalStep.value = newStep;
  }
);
</script>

<style scoped>
.wizard-fade-enter-active,
.wizard-fade-leave-active {
  transition: opacity 0.3s ease;
}

.wizard-fade-enter-from,
.wizard-fade-leave-to {
  opacity: 0;
}
</style>

