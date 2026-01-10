import { ref } from 'vue';
import DXFormWizard from './DXFormWizard.vue';
import DXFormControl from '../../molecules/DXFormControl/DXFormControl.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import DXSelect from '../../molecules/DXSelect/DXSelect.vue';
import DXTextarea from '../../molecules/DXTextarea/DXTextarea.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

const defaultSteps = [
  { id: 1, title: 'Личная информация', description: 'Основные данные' },
  { id: 2, title: 'Работа', description: 'Профессиональная информация' },
  { id: 3, title: 'Дополнительно', description: 'Дополнительные сведения' },
];

export default {
  title: 'Organisms/DXFormWizard',
  component: DXFormWizard,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Многошаговая форма с индикатором прогресса и валидацией на каждом шаге.

## Назначение

DXFormWizard предоставляет структуру для создания многошаговых форм с навигацией,
валидацией и индикатором прогресса. Используется для регистрации, настройки профиля,
оформления заказов и других многоэтапных процессов.

## Архитектура

### Использует
- \`DXProgress\` - для индикатора прогресса
- \`DXButton\` - для навигации
- \`DXFormControl\` - для полей формы
- \`useClassComposition\` composable - для стилей

### Используется в
- Регистрация пользователей
- Настройка профиля
- Оформление заказа
- Мастер настройки приложения

## Внутренняя логика

### Навигация
- **tabs**: Навигация в виде вкладок
- **steps**: Навигация в виде шагов с соединительными линиями
- **dots**: Навигация в виде точек (будущая реализация)
- **none**: Без визуальной навигации

### Валидация
Можно указать функцию валидации для каждого шага через prop \`validation\`.
Валидация проверяется перед переходом на следующий шаг.

### Пропуск шагов
При \`allowSkip={true}\` можно переходить на любые шаги.
При \`allowSkip={false}\` можно переходить только на следующие шаги.

## Особенности

### Slots
- \`step-{n}\` - контент для каждого шага (step-1, step-2, ...)
- \`navigation\` - кастомная навигация

### Анимации
Переходы между шагами анимируются через Vue Transition.
        `,
      },
    },
  },
  argTypes: {
    currentStep: {
      control: 'number',
      min: 0,
      max: 2,
      description: 'Текущий шаг (0-based, v-model).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
        category: 'Behavior',
      },
    },
    navigationStyle: {
      control: 'select',
      options: ['tabs', 'steps', 'dots', 'none'],
      description: 'Стиль навигации: tabs | steps | dots | none.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'steps' },
        category: 'Appearance',
      },
    },
    showProgress: {
      control: 'boolean',
      description: 'Показывать индикатор прогресса.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
    allowSkip: {
      control: 'boolean',
      description: 'Разрешить пропуск шагов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
  },
};

export const Default = {
  args: {
    currentStep: 0,
    steps: defaultSteps,
    navigationStyle: 'steps',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая многошаговая форма с навигацией в стиле steps.',
      },
    },
  },
  render: (args) => ({
    components: { DXFormWizard, DXFormControl, DXInput, DXSelect, DXTextarea },
    setup() {
      const currentStep = ref(args.currentStep);
      const formData = ref({
        name: '',
        email: '',
        company: '',
        position: '',
        bio: '',
      });
      
      const positions = ref([
        { value: 'developer', label: 'Разработчик' },
        { value: 'designer', label: 'Дизайнер' },
        { value: 'manager', label: 'Менеджер' },
      ]);
      
      return { args, currentStep, formData, positions };
    },
    template: `
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Компания">
              <DXInput v-model="formData.company" placeholder="Введите название компании" />
            </DXFormControl>
            <DXFormControl label="Должность">
              <DXSelect v-model="formData.position" :options="positions" placeholder="Выберите должность" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <DXFormControl label="О себе">
              <DXTextarea v-model="formData.bio" rows="5" placeholder="Расскажите о себе" />
            </DXFormControl>
          </div>
        </template>
      </DXFormWizard>
    `,
  }),
};

export const WithValidation = {
  parameters: {
    docs: {
      description: {
        story: 'Форма с валидацией на каждом шаге. Переход на следующий шаг возможен только при валидных данных.',
      },
    },
  },
  render: () => ({
    components: { DXFormWizard, DXFormControl, DXInput },
    setup() {
      const currentStep = ref(0);
      const formData = ref({
        name: '',
        email: '',
      });
      
      const steps = ref(defaultSteps);
      
      const validation = (stepIndex, data) => {
        if (stepIndex === 0) {
          return data.name && data.email;
        }
        return true;
      };
      
      const handleSubmit = (data) => {
        console.log('Форма отправлена:', data);
      };
      
      return { currentStep, formData, steps, validation, handleSubmit };
    },
    template: `
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="steps"
        :form-data="formData"
        :validation="validation"
        @submit="handleSubmit"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
            <p class="text-sm text-slate-500">Заполните все поля для продолжения</p>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 2: Работа</p>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 3: Дополнительно</p>
          </div>
        </template>
      </DXFormWizard>
    `,
  }),
};

export const TabsNavigation = {
  args: {
    currentStep: 0,
    steps: defaultSteps,
    navigationStyle: 'tabs',
  },
  parameters: {
    docs: {
      description: {
        story: 'Навигация в стиле tabs. Шаги отображаются как вкладки.',
      },
    },
  },
  render: (args) => ({
    components: { DXFormWizard, DXFormControl, DXInput },
    setup() {
      const currentStep = ref(args.currentStep);
      const formData = ref({ name: '', email: '' });
      return { args, currentStep, formData };
    },
    template: `
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <DXFormControl label="Имя">
            <DXInput v-model="formData.name" />
          </DXFormControl>
        </template>
        <template #step-2>
          <DXFormControl label="Email">
            <DXInput v-model="formData.email" />
          </DXFormControl>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    `,
  }),
};

export const AllowSkip = {
  args: {
    currentStep: 0,
    steps: defaultSteps,
    allowSkip: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Форма с разрешенным пропуском шагов. Можно переходить на любые шаги.',
      },
    },
  },
  render: (args) => ({
    components: { DXFormWizard },
    setup() {
      const currentStep = ref(args.currentStep);
      return { args, currentStep };
    },
    template: `
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
      >
        <template #step-1>
          <p>Шаг 1</p>
        </template>
        <template #step-2>
          <p>Шаг 2</p>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    `,
  }),
};

export const CustomNavigation = {
  parameters: {
    docs: {
      description: {
        story: 'Форма с кастомной навигацией через slot navigation.',
      },
    },
  },
  render: () => ({
    components: { DXFormWizard, DXButton },
    setup() {
      const currentStep = ref(0);
      return { currentStep, defaultSteps };
    },
    template: `
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="defaultSteps"
      >
        <template #step-1>
          <p>Контент шага 1</p>
        </template>
        <template #step-2>
          <p>Контент шага 2</p>
        </template>
        <template #navigation="{ canGoNext, canGoPrev, goNext, goPrev }">
          <div class="flex justify-between">
            <DXButton v-if="canGoPrev" @click="goPrev">Назад</DXButton>
            <div v-else></div>
            <DXButton v-if="canGoNext" variant="primary" @click="goNext">Далее</DXButton>
            <DXButton v-else variant="primary">Завершить</DXButton>
          </div>
        </template>
      </DXFormWizard>
    `,
  }),
};

