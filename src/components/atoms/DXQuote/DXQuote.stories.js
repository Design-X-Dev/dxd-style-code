import DXQuote from './DXQuote.vue';
import DXText from '../DXText/DXText.vue';

export default {
  title: 'Atoms/DXQuote',
  component: DXQuote,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент для отображения inline-цитат в текстовом контенте.

## Назначение

DXQuote предоставляет семантический способ отображения inline-цитат с поддержкой
различных стилей кавычек и визуального выделения. Используется для цитирования
в статьях, блогах и комментариях.

## Архитектура

### Использует
- Семантический HTML тег \`<q>\` - для inline-цитат
- \`useClassComposition\` composable - для стилей

### Используется в
- Статьи и блоги
- Комментарии и обсуждения
- Вместе с \`DXText\` и \`DXBlockquote\`

## Внутренняя логика

### Варианты
- **default**: Обычная цитата без выделения
- **highlighted**: Цитата с фоном для выделения

### Стили кавычек
- **default**: Стандартные кавычки браузера
- **french**: Французские кавычки « »
- **german**: Немецкие кавычки „ "

## Особенности

### Семантика
Использует семантический тег \`<q>\` для правильной разметки цитат.

### Атрибут cite
Поддерживает атрибут \`cite\` для указания источника цитаты.
        `,
      },
    },
  },
  argTypes: {
    cite: {
      control: 'text',
      description: 'URL источника цитаты.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Content',
      },
    },
    variant: {
      control: 'select',
      options: ['default', 'highlighted'],
      description: 'Вариант стилизации: default (обычная) | highlighted (с выделением).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    quoteStyle: {
      control: 'select',
      options: ['default', 'french', 'german'],
      description: 'Стиль кавычек: default | french (« ») | german („ ").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
  },
};

export const Default = {
  args: {
    variant: 'default',
    quoteStyle: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая inline-цитата без выделения. Использует стандартные кавычки браузера.',
      },
    },
  },
  render: (args) => ({
    components: { DXQuote, DXText },
    setup() {
      return { args };
    },
    template: `
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    `,
  }),
};

export const WithCite = {
  args: {
    cite: 'https://example.com/einstein',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с указанием источника через атрибут cite.',
      },
    },
  },
  render: (args) => ({
    components: { DXQuote, DXText },
    setup() {
      return { args };
    },
    template: `
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    `,
  }),
};

export const Highlighted = {
  args: {
    variant: 'highlighted',
    quoteStyle: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с выделением. Имеет фон для визуального выделения.',
      },
    },
  },
  render: (args) => ({
    components: { DXQuote, DXText },
    setup() {
      return { args };
    },
    template: `
      <DXText>
        В своей книге автор отмечает, что
        <DXQuote v-bind="args">успех приходит к тем, кто действует</DXQuote>
        , а не к тем, кто только мечтает.
      </DXText>
    `,
  }),
};

export const FrenchQuotes = {
  args: {
    quoteStyle: 'french',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с французскими кавычками « ». Используется во французской типографике.',
      },
    },
  },
  render: (args) => ({
    components: { DXQuote, DXText },
    setup() {
      return { args };
    },
    template: `
      <DXText>
        <DXQuote v-bind="args">Французский стиль кавычек</DXQuote>
        используется во французской типографике.
      </DXText>
    `,
  }),
};

export const GermanQuotes = {
  args: {
    quoteStyle: 'german',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с немецкими кавычками „ ". Используется в немецкой типографике.',
      },
    },
  },
  render: (args) => ({
    components: { DXQuote, DXText },
    setup() {
      return { args };
    },
    template: `
      <DXText>
        <DXQuote v-bind="args">Немецкий стиль кавычек</DXQuote>
        используется в немецкой типографике.
      </DXText>
    `,
  }),
};

export const AllStyles = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех стилей кавычек и вариантов.',
      },
    },
  },
  render: () => ({
    components: { DXQuote, DXText },
    setup() {
      return {};
    },
    template: `
      <div class="space-y-4">
        <DXText>
          Default: <DXQuote>Обычная цитата</DXQuote>
        </DXText>
        <DXText>
          Highlighted: <DXQuote variant="highlighted">Выделенная цитата</DXQuote>
        </DXText>
        <DXText>
          French: <DXQuote quote-style="french">Французские кавычки</DXQuote>
        </DXText>
        <DXText>
          German: <DXQuote quote-style="german">Немецкие кавычки</DXQuote>
        </DXText>
        <DXText>
          Highlighted + French: <DXQuote variant="highlighted" quote-style="french">Комбинация</DXQuote>
        </DXText>
      </div>
    `,
  }),
};

