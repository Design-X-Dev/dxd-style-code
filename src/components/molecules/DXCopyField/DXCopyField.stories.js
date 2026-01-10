import DXCopyField from './DXCopyField.vue';
import {
  ClipboardDocumentIcon,
  KeyIcon,
  LinkIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXCopyField',
  component: DXCopyField,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент для отображения значения с возможностью копирования в буфер обмена.

## Назначение

DXCopyField предоставляет удобный способ отображения значений (ссылок, кодов, API ключей и т.д.)
с одной кнопкой для копирования в буфер обмена. Компонент автоматически показывает состояние успеха
после копирования и поддерживает различные анимации иконок.

## Архитектура

### Использует
- \`DXIcon\` - для иконок копирования и успеха
- \`useSize\` composable - для унификации размеров с другими компонентами формы

### Используется в
- Отображение API ключей и токенов
- Ссылки для шаринга
- Команды установки и коды
- Любые значения, которые нужно быстро скопировать

## Внутренняя логика

### Копирование в буфер обмена
Компонент использует \`navigator.clipboard.writeText()\` для копирования значения.
После успешного копирования показывается состояние успеха с зеленой рамкой и иконкой галочки.

### Анимации иконок

| Значение | Описание |
|----------|----------|
| \`none\` | Без анимации |
| \`wiggle\` | Покачивание |
| \`scale\` | Масштабирование (по умолчанию) |
| \`rotate\` | Вращение |

### Размерная сетка

| Значение | Описание |
|----------|----------|
| \`sm\` | Компактный (h-8, text-xs, px-3 py-1.5) |
| \`md\` | Стандартный (h-10, text-sm, px-4 py-2.5, по умолчанию) |
| \`lg\` | Крупный (h-12, text-base, px-5 py-3) |

Размеры автоматически синхронизируются:
- Padding контейнера соответствует размерам input
- Размер текста соответствует размерам текста
- Размер кнопки соответствует размерам buttonIcon
- Размер иконки адаптируется под размер компонента

## Особенности

### Скругления
- Контейнер: \`rounded-xl\` (12px) - соответствует стандартам дизайн-системы
- Кнопка: \`rounded-xl\` (12px) - соответствует стандартам дизайн-системы

### Состояния
- **default**: Обычное состояние с иконкой копирования
- **copied**: Состояние успеха с зеленой рамкой и иконкой галочки
- Автоматическое возвращение к default через \`successDuration\` (по умолчанию 2000мс)

### События
- \`@copied\` - эмитится при успешном копировании, передает скопированное значение

## Ограничения

- Требует поддержки \`navigator.clipboard\` API (современные браузеры)
- При ошибке копирования выводит сообщение в консоль
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Размер компонента',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    copyIconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
      description: 'Анимация иконки копирования',
    },
    copiedIconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
      description: 'Анимация иконки успеха',
    },
  },
};

export const Default = {
  args: { 
    value: 'https://example.com/share/abc123', 
    label: 'Share Link' 
  },
};

export const Code = {
  args: { 
    value: 'npm install dxd-style-code', 
    label: 'Installation' 
  },
};

export const ApiKey = {
  args: { 
    value: 'sk_live_abc123xyz789', 
    label: 'API Key' 
  },
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Примеры всех размеров компонента. Размеры синхронизированы с другими элементами формы (DXInput, DXButton).',
      },
    },
  },
  render: () => ({
    components: { DXCopyField },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Small (sm)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="sm"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Medium (md) - Default</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="md"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Large (lg)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="lg"
          />
        </div>
      </div>
    `,
  }),
};

// С анимацией wiggle
export const WiggleAnimation = {
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'wiggle',
  },
};

// С анимацией scale (по умолчанию)
export const ScaleAnimation = {
  args: {
    value: 'npm install dxd-style-code',
    label: 'Installation',
    copyIconAnimation: 'scale',
    copiedIconAnimation: 'scale',
  },
};

// С анимацией rotate
export const RotateAnimation = {
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key',
    copyIconAnimation: 'rotate',
    copiedIconAnimation: 'rotate',
  },
};

// Без анимации
export const NoAnimation = {
  args: {
    value: 'https://example.com/share',
    label: 'Link',
    copyIconAnimation: 'none',
    copiedIconAnimation: 'none',
  },
};

// Кастомные иконки
export const CustomIcons = {
  render: () => ({
    components: { DXCopyField },
    setup() {
      return { 
        KeyIcon,
        LinkIcon,
        CodeBracketIcon,
      };
    },
    template: `
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dxd-style-code'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    `,
  }),
};

// Разные анимации для состояний
export const MixedAnimations = {
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'scale',
  },
};

// Все варианты
export const AllVariants = {
  render: () => ({
    components: { DXCopyField },
    setup() {
      return {
        ClipboardDocumentIcon,
        KeyIcon,
        LinkIcon,
        DocumentDuplicateIcon,
      };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    `,
  }),
};

// Interactive Example
export const Interactive = {
  render: () => ({
    components: { DXCopyField },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    `,
  }),
};

