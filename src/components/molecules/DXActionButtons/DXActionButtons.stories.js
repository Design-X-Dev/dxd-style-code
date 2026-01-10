import { DXActionButtons } from '../../molecules';
import { DXButton, DXIcon, DXHeading, DXText, DXSpacer, DXStack, DXCard } from '../../atoms';
import { ShareIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXActionButtons',
  component: DXActionButtons,
  tags: ['autodocs', 'category:navigation', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент для отображения группы кнопок действий (просмотр, редактирование, удаление).

## Назначение

DXActionButtons предоставляет стандартизированный набор кнопок действий для работы с элементами интерфейса. Компонент автоматически управляет стилями, размерами и выравниванием кнопок, обеспечивая единообразный вид во всем приложении.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок на кнопках
- Heroicons - для стандартных иконок действий

### Используется в
- Таблицы данных - для действий со строками
- Карточки - для действий с элементами
- Списки - для действий с элементами списка
- Модальные окна - для действий с данными

## Внутренняя логика

### Кнопки действий
Компонент поддерживает три основных действия:
- **View (Просмотр)** - кнопка для просмотра деталей элемента
- **Edit (Редактирование)** - кнопка для редактирования элемента
- **Delete (Удаление)** - кнопка для удаления элемента (красная)

### Размеры
- \`xs\` - очень маленький размер, подходит для таблиц
- \`sm\` - маленький размер (по умолчанию)
- \`md\` - средний размер

### Выравнивание
- \`left\` - выравнивание по левому краю (по умолчанию)
- \`center\` - выравнивание по центру
- \`right\` - выравнивание по правому краю

### Режимы отображения
- **С текстом** - кнопки с иконками и текстом (по умолчанию)
- **Только иконки** - компактный режим с иконками без текста (\`iconOnly={true}\`)

## Особенности

### Кастомизация
- Можно настроить текст каждой кнопки через props
- Можно заменить иконки через props
- Можно добавить дополнительные кнопки через default slot

### События
Компонент эмитит три события:
- \`@view\` - при клике на кнопку просмотра
- \`@edit\` - при клике на кнопку редактирования
- \`@delete\` - при клике на кнопку удаления

### Состояния
- **Disabled** - все кнопки можно отключить одновременно через prop \`disabled\`
- **Conditional rendering** - каждая кнопка может быть скрыта через соответствующий prop (\`showView\`, \`showEdit\`, \`showDelete\`)
        `,
      },
    },
  },
  argTypes: {
    showView: {
      control: 'boolean',
      description: 'Показывать кнопку просмотра',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Visibility',
      },
    },
    showEdit: {
      control: 'boolean',
      description: 'Показывать кнопку редактирования',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Visibility',
      },
    },
    showDelete: {
      control: 'boolean',
      description: 'Показывать кнопку удаления',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Visibility',
      },
    },
    viewLabel: {
      control: 'text',
      description: 'Текст кнопки просмотра',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Просмотр"' },
        category: 'Labels',
      },
    },
    editLabel: {
      control: 'text',
      description: 'Текст кнопки редактирования',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Редактировать"' },
        category: 'Labels',
      },
    },
    deleteLabel: {
      control: 'text',
      description: 'Текст кнопки удаления',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Удалить"' },
        category: 'Labels',
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
      description: 'Размер кнопок',
      table: {
        type: { summary: 'xs | sm | md' },
        defaultValue: { summary: 'sm' },
        category: 'Appearance',
      },
    },
    iconOnly: {
      control: 'boolean',
      description: 'Показывать только иконки без текста',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Выравнивание кнопок',
      table: {
        type: { summary: 'left | center | right' },
        defaultValue: { summary: 'left' },
        category: 'Layout',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить все кнопки',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
  },
};

// Базовый вариант
export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Базовый вариант компонента с кнопками редактирования и удаления (по умолчанию).',
      },
    },
  },
};

// Только редактирование
export const EditOnly = {
  args: {
    showEdit: true,
    showDelete: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Вариант с только кнопкой редактирования. Полезно, когда удаление недоступно или не требуется.',
      },
    },
  },
};

// Только удаление
export const DeleteOnly = {
  args: {
    showEdit: false,
    showDelete: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Вариант с только кнопкой удаления. Используется для быстрого удаления элементов без возможности редактирования.',
      },
    },
  },
};

// С кнопкой просмотра
export const WithView = {
  args: {
    showView: true,
    showEdit: true,
    showDelete: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Полный набор кнопок: просмотр, редактирование и удаление. Используется когда нужен доступ ко всем действиям.',
      },
    },
  },
};

// Только иконки
export const IconOnly = {
  args: {
    iconOnly: true,
    showView: true,
    showEdit: true,
    showDelete: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Компактный режим с только иконками. Идеально подходит для таблиц и ограниченного пространства.',
      },
    },
  },
};

// Размеры
export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех доступных размеров компонента. Размер влияет на padding и размер текста кнопок.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons, DXText, DXSpacer },
    template: `
      <div class="space-y-6">
        <div>
          <DXText size="xs" color="muted">Extra Small (xs)</DXText>
          <DXSpacer size="md"/>
          <DXActionButtons size="xs" />
        </div>
        
        <div>
          <DXText size="xs" color="muted">Small (sm) - Default</DXText>
          <DXSpacer size="md"/>
          <DXActionButtons size="sm" />
        </div>
        
        <div>
          <DXText size="xs" color="muted">Medium (md)</DXText>
          <DXSpacer size="md"/>
          <DXActionButtons size="md" />
        </div>
      </div>
    `,
  }),
};

// Выравнивание
export const Alignment = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты выравнивания кнопок. Выравнивание по правому краю часто используется в таблицах.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons, DXText, DXStack, DXCard, DXSpacer },
    template: `
      <DXStack gap="lg" direction="vertical">
        <DXCard padding="md" variant="bordered">
          <DXText size="xs" color="muted">Left (default)</DXText>
          <DXSpacer size="sm"/>
          <DXActionButtons align="left" />
        </DXCard>
        
        <DXCard padding="md" variant="bordered">
          <DXText size="xs" color="muted">Center</DXText>
          <DXSpacer size="sm"/>
          <DXActionButtons align="center" />
        </DXCard>
        
        <DXCard padding="md" variant="bordered">
          <DXText size="xs" color="muted">Right</DXText>
          <DXSpacer size="sm"/>
          <DXActionButtons align="right" />
        </DXCard>
      </DXStack>
    `,
  }),
};

// С дополнительными кнопками (slot)
export const WithCustomButtons = {
  parameters: {
    docs: {
      description: {
        story: 'Добавление дополнительных кнопок через default slot. Позволяет расширить функциональность компонента кастомными действиями.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons, DXButton, DXIcon },
    setup() {
      return { ShareIcon, ArrowDownTrayIcon };
    },
    template: `
      <DXActionButtons>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ShareIcon" size="xs" />
          Share
        </DXButton>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ArrowDownTrayIcon" size="xs" />
          Download
        </DXButton>
      </DXActionButtons>
    `,
  }),
};

// В таблице
export const InTable = {
  parameters: {
    docs: {
      description: {
        story: 'Использование компонента в таблице данных. Обычно используется размер `xs` и выравнивание `right` для компактного отображения в колонке действий.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="overflow-hidden rounded-xl border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Name</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Role</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">John Doe</td>
              <td class="px-6 py-4 text-sm text-slate-600">john@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Admin</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Jane Smith</td>
              <td class="px-6 py-4 text-sm text-slate-600">jane@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">User</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Bob Johnson</td>
              <td class="px-6 py-4 text-sm text-slate-600">bob@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Moderator</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};

// В карточках
export const InCards = {
  parameters: {
    docs: {
      description: {
        story: 'Использование компонента в карточках. Компонент размещается в нижней части карточки для действий с элементом.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons, DXHeading, DXText },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <DXHeading level="3" size="lg" weight="semibold" color="default" class="mb-2">Product Title</DXHeading>
          <DXText tag="p" size="sm" color="muted" class="mb-4">Product description goes here...</DXText>
          <DXActionButtons show-view />
        </div>
        
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <DXHeading level="3" size="lg" weight="semibold" color="default" class="mb-2">Another Product</DXHeading>
          <DXText tag="p" size="sm" color="muted" class="mb-4">Another product description...</DXText>
          <DXActionButtons show-view />
        </div>
      </div>
    `,
  }),
};

// Отключенное состояние
export const Disabled = {
  args: {
    disabled: true,
    showView: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние, когда все кнопки отключены. Используется когда действия недоступны (например, нет прав доступа).',
      },
    },
  },
};

// Интерактивный пример
export const Interactive = {
  parameters: {
    docs: {
      description: {
        story: 'Интерактивный пример с обработчиками событий. Демонстрирует работу всех событий компонента: `@view`, `@edit`, `@delete`, а также кастомную кнопку через slot.',
      },
    },
  },
  render: () => ({
    components: { DXActionButtons, DXButton, DXIcon },
    setup() {
      const handleView = () => alert('View clicked!');
      const handleEdit = () => alert('Edit clicked!');
      const handleDelete = () => {
        if (confirm('Are you sure you want to delete this item?')) {
          alert('Item deleted!');
        }
      };
      const handleShare = () => {
        alert('Share clicked! Custom button action.');
      };
      
      return { 
        handleView, 
        handleEdit, 
        handleDelete, 
        handleShare,
        ShareIcon 
      };
    },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Try clicking the buttons</h3>
        <DXActionButtons 
          show-view
          @view="handleView"
          @edit="handleEdit"
          @delete="handleDelete"
        >
          <DXButton variant="outline" size="sm" @click="handleShare">
            <DXIcon :icon="ShareIcon" size="xs" />
            Share
          </DXButton>
        </DXActionButtons>
      </div>
    `,
  }),
};


