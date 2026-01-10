import DXLoader from './DXLoader.vue';

export default {
  title: 'Atoms/DXLoader',
  component: DXLoader,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент индикатора загрузки с поддержкой различных размеров, цветов и текста.

## Назначение

DXLoader предоставляет стандартизированный способ отображения состояния загрузки.
Компонент поддерживает различные размеры, цвета и возможность отображения текста рядом с индикатором.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useVariantLoader\` composable - для цветовых вариантов

### Используется в
- Загрузка данных
- Обработка запросов
- Состояния ожидания
- Любые места, требующие индикации загрузки

## Внутренняя логика

### Размеры

| Значение | Описание |
|----------|----------|
| \`xs\` | Очень маленький (8×8px) |
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |
| \`xl\` | Очень большой |

### Цвета

| Значение | Описание |
|----------|----------|
| \`default\` | Стандартный цвет (по умолчанию) |
| \`primary\` | Основной цвет |
| \`success\` | Зеленый цвет |
| \`warning\` | Желтый цвет |
| \`danger\` | Красный цвет |
| \`info\` | Синий цвет |
| \`slate\` | Серый цвет |

### Текст
Поддерживает отображение текста рядом с индикатором:
- Через \`text\` prop
- Через default slot
- Управляется через \`showText\` prop

## Особенности

### Анимация
Использует CSS анимацию \`animate-spin\` для вращения индикатора.

### Отображение текста
Логика отображения текста:
- Если \`showText\` явно указан → используется его значение
- Если есть default slot → текст показывается
- Если есть \`text\` prop → текст показывается
- Иначе → текст не показывается

### Визуальное оформление
- Круглый индикатор с границей
- Вращающаяся анимация
- Цветная верхняя граница для визуального эффекта

### Слоты
- **default** - кастомный текст (если нужно)
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер лоадера',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger', 'info', 'slate'],
      description: 'Вариант цвета',
    },
    text: {
      control: 'text',
      description: 'Текст лоадера. Если не указан и нет слота, текст не отображается',
    },
    showText: {
      control: 'boolean',
      description: 'Показывать текст. Если false, текст не отображается. Если true - всегда показывать',
    },
  },
};

export const Default = {
  args: {
    size: 'md',
    variant: 'default',
  },
  render: (args) => ({
    components: { DXLoader },
    setup() { return { args }; },
    template: '<DXLoader v-bind="args" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex items-center gap-6">
          <DXLoader size="xs" />
          <span class="text-sm text-slate-600">xs (8×8px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="sm" />
          <span class="text-sm text-slate-600">sm (12×12px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="md" />
          <span class="text-sm text-slate-600">md (16×16px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="lg" />
          <span class="text-sm text-slate-600">lg (20×20px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="xl" />
          <span class="text-sm text-slate-600">xl (24×24px)</span>
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    `,
  }),
};

export const Variants = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="default" />
              <span class="text-xs text-slate-600">Default</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="primary" />
              <span class="text-xs text-slate-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="slate" />
              <span class="text-xs text-slate-600">Slate</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="success" />
              <span class="text-xs text-slate-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="warning" />
              <span class="text-xs text-slate-600">Warning</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="danger" />
              <span class="text-xs text-slate-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="info" />
              <span class="text-xs text-slate-600">Info</span>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | primary | success | warning | danger | info | slate
        </div>
      </div>
    `,
  }),
};

export const SizesAndVariants = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом default</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="default" />
            <DXLoader size="sm" variant="default" />
            <DXLoader size="md" variant="default" />
            <DXLoader size="lg" variant="default" />
            <DXLoader size="xl" variant="default" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="success" />
            <DXLoader size="sm" variant="success" />
            <DXLoader size="md" variant="success" />
            <DXLoader size="lg" variant="success" />
            <DXLoader size="xl" variant="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="danger" />
            <DXLoader size="sm" variant="danger" />
            <DXLoader size="md" variant="danger" />
            <DXLoader size="lg" variant="danger" />
            <DXLoader size="xl" variant="danger" />
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithText = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С текстом по умолчанию</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="info" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С кастомным текстом</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default">Загрузка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success">Обработка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="warning">Пожалуйста, подождите...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="danger">Ошибка загрузки...</DXLoader>
          </div>
        </div>
      </div>
    `,
  }),
};

export const WithoutText = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Без текста (только спиннер)</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" :show-text="false" />
            <DXLoader size="sm" :show-text="false" />
            <DXLoader size="md" :show-text="false" />
            <DXLoader size="lg" :show-text="false" />
            <DXLoader size="xl" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные варианты без текста</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="md" variant="default" :show-text="false" />
            <DXLoader size="md" variant="primary" :show-text="false" />
            <DXLoader size="md" variant="success" :show-text="false" />
            <DXLoader size="md" variant="warning" :show-text="false" />
            <DXLoader size="md" variant="danger" :show-text="false" />
            <DXLoader size="md" variant="info" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Использование без текста</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" :show-text="false" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Используйте <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">:show-text="false"</code> или не передавайте prop <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">text</code> и слот для отображения только спиннера
        </div>
      </div>
    `,
  }),
};

export const UseCases = {
  render: () => ({
    components: { DXLoader },
    template: `
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В карточке</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В списке</h3>
          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <DXLoader size="sm" variant="info" />
              <span class="text-sm text-slate-700">Синхронизация с сервером</span>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Инлайн загрузка</h3>
          <div class="flex items-center gap-2">
            <span class="text-sm text-slate-700">Статус:</span>
            <DXLoader size="xs" variant="success" :show-text="false" />
            <span class="text-sm text-emerald-700">Активен</span>
          </div>
        </div>
      </div>
    `,
  }),
};

