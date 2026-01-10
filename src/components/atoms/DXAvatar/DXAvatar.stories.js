import DXAvatar from './DXAvatar.vue';
import { 
  UserIcon,
  HeartIcon, 
  StarIcon, 
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/vue/24/solid';

export default {
  title: 'Atoms/DXAvatar',
  component: DXAvatar,
  tags: ['autodocs', 'category:data-display', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию


Компонент аватара пользователя с поддержкой изображений, инициалов и иконок.

## Назначение

DXAvatar - атомарный компонент для отображения аватаров пользователей.
Поддерживает изображения, инициалы или иконки с автоматическим fallback.

## Архитектура

### Использует
- \`useSize\` composable - для размеров аватара (xs, sm, md, lg, xl)
- \`DXIcon\` - для отображения иконок fallback
- \`UserIcon\` (Heroicons) - дефолтная иконка fallback

### Используется в
- \`DXChatInterface\` - аватары в сообщениях
- Профили пользователей
- Списки пользователей
- Комментарии и отзывы

## Внутренняя логика

### Fallback система
Компонент использует трехуровневую систему fallback:
1. **Изображение** - если указан \`src\` и загрузка успешна
2. **Инициалы** - если нет изображения, но указаны \`initials\`
3. **Иконка** - если нет ни изображения, ни инициалов (по умолчанию UserIcon)

### Обработка ошибок изображения
- При ошибке загрузки изображения автоматически переключается на fallback
- Ошибка отслеживается через \`@error\` событие на \`<img>\`
- При изменении \`src\` ошибка сбрасывается для новой попытки загрузки

### Размеры иконки
Размер иконки автоматически вычисляется на основе размера аватара:
- xs → sm
- sm → sm
- md → md
- lg → lg
- xl → xl

### Анимации
- Поддержка анимаций иконки при hover: none, wiggle, scale, rotate
- Анимация scale на самом аватаре при hover (если iconAnimation !== 'none')

## Особенности

### Формы
- \`circle\` - круглая форма (по умолчанию)
- \`square\` - квадратная форма с закругленными углами

### Кастомные иконки
Можно указать кастомную иконку через prop \`icon\`:
\`\`\`vue
<DXAvatar :icon="HeartIcon" />
\`\`\`

### Инициалы
Инициалы автоматически преобразуются в uppercase:
\`\`\`vue
<DXAvatar initials="JD" /> <!-- Покажет "JD" -->
\`\`\`

## Ограничения

- Инициалы должны быть короткими (1-3 символа) для лучшего отображения
- Изображения должны быть квадратными для правильного отображения
- При ошибке загрузки изображения автоматически переключается на fallback
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'URL изображения аватара. При ошибке загрузки автоматически переключается на fallback.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
        category: 'Content',
      },
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt текст для изображения. Используется для доступности.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Avatar"' },
        category: 'Content',
      },
    },
    initials: {
      control: { type: 'text' },
      description: 'Инициалы пользователя. Отображаются если нет изображения. Автоматически преобразуются в uppercase.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
        category: 'Content',
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер аватара. Влияет на размер контейнера, текста и иконки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"md"' },
        category: 'Appearance',
      },
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Форма аватара. Circle - круглая, square - квадратная с закругленными углами.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"circle"' },
        category: 'Appearance',
      },
    },
    icon: {
      control: false,
      description: 'Кастомная иконка для fallback. Если не указана, используется UserIcon по умолчанию.',
      table: {
        type: { summary: 'Object | Function' },
        defaultValue: { summary: 'null' },
        category: 'Content',
      },
    },
    iconAnimation: {
      control: { type: 'select' },
      options: ['none', 'wiggle', 'scale', 'rotate'],
      description: 'Анимация иконки при hover. Также влияет на анимацию scale самого аватара.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"wiggle"' },
        category: 'Appearance',
      },
    },
  },
};

export const Default = {
  args: { initials: 'JD' },
  parameters: {
    docs: {
      description: {
        story: 'Базовый аватар с инициалами. Инициалы автоматически преобразуются в uppercase и отображаются, если нет изображения.',
      },
    },
  },
};

export const WithImage = {
  args: { src: 'https://i.pravatar.cc/100', alt: 'User' },
  parameters: {
    docs: {
      description: {
        story: 'Аватар с изображением. При ошибке загрузки изображения автоматически переключается на fallback (инициалы или иконку).',
      },
    },
  },
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры аватаров. Размер влияет на размер контейнера, текста иконки и инициалов.',
      },
    },
  },
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    `,
  }),
};

export const Shapes = {
  parameters: {
    docs: {
      description: {
        story: 'Две доступные формы аватара: circle (круглая) и square (квадратная с закругленными углами).',
      },
    },
  },
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    `,
  }),
};

export const WithCustomIcons = {
  parameters: {
    docs: {
      description: {
        story: 'Кастомные иконки для fallback. Можно использовать любую иконку из Heroicons. Если иконка не указана, используется UserIcon по умолчанию.',
      },
    },
  },
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { UserIcon, HeartIcon, StarIcon, SparklesIcon, RocketLaunchIcon };
    },
    template: `
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    `,
  }),
};

export const FallbackScenarios = {
  parameters: {
    docs: {
      description: {
        story: 'Все варианты fallback системы: изображение (приоритет 1), инициалы (приоритет 2), дефолтная иконка UserIcon (приоритет 3), кастомная иконка (приоритет 3, если указана).',
      },
    },
  },
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { HeartIcon };
    },
    template: `
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    `,
  }),
};

export const WithAnimations = {
  parameters: {
    docs: {
      description: {
        story: 'Анимации иконки при hover. При iconAnimation !== "none" также применяется анимация scale на самом аватаре. Доступны варианты: none (без анимации), wiggle (тряска), scale (масштабирование), rotate (вращение).',
      },
    },
  },
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { UserIcon, HeartIcon, StarIcon, SparklesIcon };
    },
    template: `
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    `,
  }),
};
