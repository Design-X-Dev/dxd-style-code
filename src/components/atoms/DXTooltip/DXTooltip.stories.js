import DXTooltip from './DXTooltip.vue';

export default {
  title: 'Atoms/DXTooltip',
  component: DXTooltip,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент подсказки, появляющейся при наведении или фокусе на элементе.

## Назначение

DXTooltip предоставляет стандартизированный способ отображения дополнительной информации
при наведении или фокусе на элементе. Компонент поддерживает различные позиции, цвета, размеры
и анимации появления.

## Архитектура

### Использует
- \`DXIcon\` - для иконок (если нужно)
- \`useSize\` composable - для размеров текста
- \`useVariantTooltip\` composable - для цветовых вариантов
- \`useTooltipPosition\` composable - для позиционирования
- \`useAnimationTransition\` composable - для анимаций

### Используется в
- Подсказки для кнопок и ссылок
- Дополнительная информация об элементах
- Пояснения к иконкам
- Любые места, требующие контекстной помощи

## Внутренняя логика

### Позиции

| Значение | Описание |
|----------|----------|
| \`top\` | Сверху (по умолчанию) |
| \`bottom\` | Снизу |
| \`left\` | Слева |
| \`right\` | Справа |

### Цвета

| Значение | Описание |
|----------|----------|
| \`dark\` | Темный фон (по умолчанию) |
| \`light\` | Светлый фон |
| \`primary\` | Основной цвет |
| \`success\` | Зеленый цвет |
| \`danger\` | Красный цвет |
| \`warning\` | Желтый цвет |
| \`info\` | Синий цвет |

### Размеры

| Значение | Описание |
|----------|----------|
| \`xs\` | Очень маленький |
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |
| \`xl\` | Очень большой |

### Анимации

| Значение | Описание |
|----------|----------|
| \`fade\` | Плавное появление |
| \`fade-scale\` | Появление с масштабированием |
| \`slide-up\` | Выезд снизу |
| \`slide-down\` | Выезд сверху |
| \`slide-left\` | Выезд справа |
| \`slide-right\` | Выезд слева |
| \`tooltip-custom\` | Кастомная анимация (по умолчанию) |

### Задержка
Поддерживает настраиваемую задержку перед показом (по умолчанию 100ms).

## Особенности

### Триггеры
Tooltip появляется при:
- Наведении мыши (\`mouseenter\`)
- Фокусе на элементе (\`focus\`)

Исчезает при:
- Уходе мыши (\`mouseleave\`)
- Потере фокуса (\`blur\`)

### Стрелка
Автоматически добавляется стрелка, указывающая на элемент, в зависимости от позиции.

### Максимальная ширина
Поддерживает настраиваемую максимальную ширину (по умолчанию 200px).

### Слоты
- **default** - элемент, на который наводится курсор
- **content** - кастомный контент tooltip (если нужно)

### Доступность
- Использует \`role="tooltip"\`
- Правильные ARIA атрибуты
        `,
      },
    },
  },
  argTypes: {
    position: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
    color: { control: { type: 'select' }, options: ['dark', 'light', 'primary', 'success', 'danger', 'warning', 'info'] },
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    animation: { control: { type: 'select' }, options: ['fade', 'fade-scale', 'slide-up', 'slide-down', 'slide-left', 'slide-right', 'tooltip-custom'] },
  },
};

export const Default = {
  args: { content: 'This is a tooltip' },
  render: (args) => ({
    components: { DXTooltip },
    setup() { return { args }; },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>',
  }),
};

export const Positions = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const Colors = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Dark tooltip" color="dark">
          <button class="px-4 py-2 bg-slate-100 rounded">Dark</button>
        </DXTooltip>
        <DXTooltip content="Light tooltip" color="light">
          <button class="px-4 py-2 bg-slate-800 text-white rounded">Light</button>
        </DXTooltip>
        <DXTooltip content="Primary tooltip" color="primary">
          <button class="px-4 py-2 bg-slate-100 rounded">Primary</button>
        </DXTooltip>
        <DXTooltip content="Info tooltip" color="info">
          <button class="px-4 py-2 bg-slate-100 rounded">Info</button>
        </DXTooltip>
        <DXTooltip content="Success tooltip" color="success">
          <button class="px-4 py-2 bg-slate-100 rounded">Success</button>
        </DXTooltip>
        <DXTooltip content="Warning tooltip" color="warning">
          <button class="px-4 py-2 bg-slate-100 rounded">Warning</button>
        </DXTooltip>
        <DXTooltip content="Danger tooltip" color="danger">
          <button class="px-4 py-2 bg-slate-100 rounded">Danger</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-4 justify-center py-12 items-center">
        <DXTooltip content="Extra small tooltip" size="xs">
          <button class="px-4 py-2 bg-slate-100 rounded">XS</button>
        </DXTooltip>
        <DXTooltip content="Small tooltip" size="sm">
          <button class="px-4 py-2 bg-slate-100 rounded">SM</button>
        </DXTooltip>
        <DXTooltip content="Medium tooltip" size="md">
          <button class="px-4 py-2 bg-slate-100 rounded">MD</button>
        </DXTooltip>
        <DXTooltip content="Large tooltip" size="lg">
          <button class="px-4 py-2 bg-slate-100 rounded">LG</button>
        </DXTooltip>
        <DXTooltip content="Extra large tooltip" size="xl">
          <button class="px-4 py-2 bg-slate-100 rounded">XL</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const Animations = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Fade animation" animation="fade">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade</button>
        </DXTooltip>
        <DXTooltip content="Fade scale animation" animation="fade-scale">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade Scale</button>
        </DXTooltip>
        <DXTooltip content="Slide up animation" animation="slide-up">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Up</button>
        </DXTooltip>
        <DXTooltip content="Slide down animation" animation="slide-down">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Down</button>
        </DXTooltip>
        <DXTooltip content="Slide left animation" animation="slide-left">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Left</button>
        </DXTooltip>
        <DXTooltip content="Slide right animation" animation="slide-right">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Right</button>
        </DXTooltip>
        <DXTooltip content="Custom tooltip animation" animation="tooltip-custom">
          <button class="px-4 py-2 bg-slate-100 rounded">Custom</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const WithSlotContent = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip>
          <template #content>
            <div class="flex items-center gap-2">
              <span>Custom content with</span>
              <span class="font-semibold">bold text</span>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Slot Content</button>
        </DXTooltip>
        <DXTooltip color="info">
          <template #content>
            <div>
              <div class="font-semibold mb-1">Rich Content</div>
              <div class="text-xs opacity-90">With multiple lines and formatting</div>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Rich Slot</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const MaxWidth = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="flex gap-4 justify-center py-12 flex-wrap items-center">
        <DXTooltip content="Narrow tooltip with limited width" maxWidth="120px">
          <button class="px-4 py-2 bg-slate-100 rounded">120px</button>
        </DXTooltip>
        <DXTooltip content="Medium width tooltip with more space for content" maxWidth="200px">
          <button class="px-4 py-2 bg-slate-100 rounded">200px</button>
        </DXTooltip>
        <DXTooltip content="Wide tooltip with even more space for longer text content that might wrap to multiple lines" maxWidth="300px">
          <button class="px-4 py-2 bg-slate-100 rounded">300px</button>
        </DXTooltip>
      </div>
    `,
  }),
};

export const Combinations = {
  render: () => ({
    components: { DXTooltip },
    template: `
      <div class="space-y-8 py-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Color + Size Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Success large" color="success" size="lg">
              <button class="px-4 py-2 bg-slate-100 rounded">Success LG</button>
            </DXTooltip>
            <DXTooltip content="Warning small" color="warning" size="sm">
              <button class="px-4 py-2 bg-slate-100 rounded">Warning SM</button>
            </DXTooltip>
            <DXTooltip content="Danger extra small" color="danger" size="xs">
              <button class="px-4 py-2 bg-slate-100 rounded">Danger XS</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Position + Color Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Info top" position="top" color="info">
              <button class="px-4 py-2 bg-slate-100 rounded">Top Info</button>
            </DXTooltip>
            <DXTooltip content="Success bottom" position="bottom" color="success">
              <button class="px-4 py-2 bg-slate-100 rounded">Bottom Success</button>
            </DXTooltip>
            <DXTooltip content="Warning left" position="left" color="warning">
              <button class="px-4 py-2 bg-slate-100 rounded">Left Warning</button>
            </DXTooltip>
            <DXTooltip content="Danger right" position="right" color="danger">
              <button class="px-4 py-2 bg-slate-100 rounded">Right Danger</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Full Featured Example</h3>
          <div class="flex justify-center">
            <DXTooltip 
              content="This is a fully customized tooltip with all features combined: large size, success color, and custom animation" 
              size="lg" 
              color="success" 
              animation="fade-scale"
              maxWidth="250px"
            >
              <button class="px-4 py-2 bg-slate-100 rounded">Full Featured</button>
            </DXTooltip>
          </div>
        </div>
      </div>
    `,
  }),
};

export const LightTheme = {
  args: { content: 'Light theme tooltip', color: 'light' },
  render: (args) => ({
    components: { DXTooltip },
    setup() { return { args }; },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>',
  }),
};

