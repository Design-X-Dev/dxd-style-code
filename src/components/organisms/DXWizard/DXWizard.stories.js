import { ref } from 'vue';
import DXWizard from './DXWizard.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import DXFormControl from '../../molecules/DXFormControl/DXFormControl.vue';

export default {
  title: 'Organisms/DXWizard',
  component: DXWizard,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Мастер настройки с шагами, валидацией и возможностью сохранения прогресса.

## Назначение

DXWizard предоставляет мастер настройки с поддержкой шагов, валидации,
сохранения прогресса и навигации. Отличается от DXFormWizard более общим назначением
(не только для форм, но и для любых пошаговых процессов).

## Архитектура

### Использует
- \`DXProgress\` - для индикатора прогресса
- \`DXButton\` - для навигации
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Первоначальная настройка приложения
- Мастер импорта данных
- Пошаговая настройка сложных процессов
- Онбординг новых пользователей

## Внутренняя логика

### Сохранение прогресса
При \`saveProgressEnabled={true}\` прогресс сохраняется в localStorage.

### Валидация
Поддерживает валидацию через prop \`validationErrors\`.

### Навигация
Можно переходить между шагами, пропускать опциональные шаги.

## Особенности

### Отличие от DXFormWizard
DXWizard более общий компонент для любых пошаговых процессов,
а не только для форм.

### Автоматическое сохранение
При включенном сохранении прогресс сохраняется автоматически при переходе между шагами.
        `,
      },
    },
  },
};

const defaultSteps = [
  { title: 'Добро пожаловать', description: 'Давайте настроим ваше приложение' },
  { title: 'Основные настройки', description: 'Настройте основные параметры' },
  { title: 'Дополнительно', description: 'Настройте дополнительные параметры' },
  { title: 'Завершение', description: 'Проверьте настройки и завершите' },
];

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'Базовый мастер настройки с шагами и навигацией.',
      },
    },
  },
  render: () => ({
    components: { DXWizard, DXInput, DXFormControl },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({});
      const steps = ref(defaultSteps);
      
      const handleNext = (step) => {
        console.log('Переход к шагу:', step);
      };
      
      const handleComplete = (data) => {
        console.log('Мастер завершен:', data);
      };
      
      return { currentStep, wizardData, steps, handleNext, handleComplete };
    },
    template: `
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        @next="handleNext"
        @complete="handleComplete"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
            <p class="text-slate-600">Давайте настроим ваше приложение</p>
          </div>
        </template>
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Название проекта">
              <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
            </DXFormControl>
            <DXFormControl label="Описание">
              <DXInput v-model="wizardData.description" placeholder="Введите описание" />
            </DXFormControl>
          </div>
        </template>
        <template #step-3>
          <div class="text-center py-8">
            <p class="text-slate-600">Дополнительные настройки</p>
          </div>
        </template>
        <template #step-4>
          <div class="text-center py-8">
            <p class="text-slate-600">Проверьте настройки и завершите</p>
          </div>
        </template>
      </DXWizard>
    `,
  }),
};

export const WithProgressSave = {
  parameters: {
    docs: {
      description: {
        story: 'Мастер с сохранением прогресса. Прогресс сохраняется автоматически при переходе между шагами.',
      },
    },
  },
  render: () => ({
    components: { DXWizard },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({});
      const steps = ref(defaultSteps);
      
      return { currentStep, wizardData, steps };
    },
    template: `
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :save-progress-enabled="true"
      />
    `,
  }),
};

export const WithValidation = {
  parameters: {
    docs: {
      description: {
        story: 'Мастер с валидацией. Нельзя перейти к следующему шагу, если текущий не валиден.',
      },
    },
  },
  render: () => ({
    components: { DXWizard, DXInput, DXFormControl },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({ projectName: '' });
      const validationErrors = ref({});
      const steps = ref(defaultSteps);
      
      const handleStepChange = (step) => {
        // Валидация при переходе
        if (step === 2 && !wizardData.value.projectName) {
          validationErrors.value.projectName = 'Название проекта обязательно';
        } else {
          delete validationErrors.value.projectName;
        }
      };
      
      return { currentStep, wizardData, validationErrors, steps, handleStepChange };
    },
    template: `
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :validation-errors="validationErrors"
        @step-change="handleStepChange"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
          </div>
        </template>
        <template #step-2>
          <DXFormControl label="Название проекта" :error="validationErrors.projectName">
            <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
          </DXFormControl>
        </template>
      </DXWizard>
    `,
  }),
};

