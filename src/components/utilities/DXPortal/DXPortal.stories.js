import { ref, onMounted } from 'vue';
import DXPortal from './DXPortal.vue';
import DXModal from '../../organisms/DXModal/DXModal.vue';
import DXTooltip from '../../atoms/DXTooltip/DXTooltip.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';

export default {
  title: 'Utilities/DXPortal',
  component: DXPortal,
  tags: ['autodocs', 'category:overlay', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент-обертка над Vue Teleport для рендеринга контента вне текущей DOM-иерархии.

## Назначение

DXPortal позволяет рендерить контент в указанный контейнер (по умолчанию body), что необходимо для:
- Модальных окон (чтобы они были поверх всего контента)
- Tooltips и подсказок (чтобы они не обрезались родительскими overflow)
- Выпадающих меню (чтобы они правильно позиционировались)
- Уведомлений (чтобы они были поверх всего)

## Архитектура

### Использует
- Vue 3 \`Teleport\` - встроенный компонент Vue для порталов

### Используется в
- \`DXModal\` - для рендеринга модальных окон в body
- \`DXTooltip\` - для рендеринга подсказок в body
- \`DXDropdown\` - для рендеринга выпадающих меню
- \`DXToast\` - для рендеринга уведомлений

## Внутренняя логика

### Определение целевого контейнера
Компонент автоматически определяет целевой контейнер:
- \`"body"\` → рендеринг в body
- \`"#selector"\` → поиск элемента по ID
- \`".selector"\` → поиск элемента по классу
- \`HTMLElement\` → использование элемента напрямую

Если контейнер не найден, используется body как fallback.

### Сохранение контекста Vue
Teleport сохраняет контекст Vue (provide/inject, slots, события), поэтому все работает как обычно.

## Особенности

### Автоматическая очистка
При размонтировании компонента контент автоматически удаляется из целевого контейнера благодаря Vue Teleport.

### Несколько порталов
Можно использовать несколько порталов одновременно, они будут рендериться в указанные контейнеры независимо.

### Отключение портала
С помощью prop \`disabled\` можно временно отключить портал и рендерить контент в текущем месте (полезно для тестирования).
        `,
      },
    },
  },
  argTypes: {
    to: {
      control: 'text',
      description: 'Целевой контейнер для рендеринга. Может быть "body", селектор (#id, .class) или HTMLElement.',
      table: {
        type: { summary: 'string | HTMLElement' },
        defaultValue: { summary: 'body' },
        category: 'Behavior',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить портал (рендерить в текущем месте).',
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
    to: 'body',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование портала для рендеринга в body. Контент будет отрендерен в body, но сохранит контекст Vue компонента.',
      },
    },
  },
  render: (args) => ({
    components: { DXPortal, DXCard },
    setup() { 
      return { args }; 
    },
    template: `
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-blue-50 border-blue-200">
            <p>Этот контент рендерится в body через Portal</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    `,
  }),
};

export const WithModal = {
  parameters: {
    docs: {
      description: {
        story: 'Использование портала с модальным окном. Модальное окно рендерится в body, что позволяет ему быть поверх всего контента.',
      },
    },
  },
  render: () => ({
    components: { DXPortal, DXModal, DXButton },
    setup() {
      const showModal = ref(false);
      return { showModal };
    },
    template: `
      <div class="p-4">
        <DXButton @click="showModal = true">
          Открыть модальное окно
        </DXButton>
        
        <DXPortal to="body">
          <DXModal 
            v-if="showModal"
            :open="showModal"
            @close="showModal = false"
          >
            <h2>Модальное окно</h2>
            <p>Это содержимое рендерится в body через Portal</p>
          </DXModal>
        </DXPortal>
      </div>
    `,
  }),
};

export const CustomContainer = {
  parameters: {
    docs: {
      description: {
        story: 'Использование кастомного контейнера. Контент будет рендериться в указанный элемент по селектору.',
      },
    },
  },
  render: () => ({
    components: { DXPortal, DXCard },
    setup() {
      onMounted(() => {
        // Создаем кастомный контейнер если его нет
        if (!document.getElementById('custom-portal')) {
          const container = document.createElement('div');
          container.id = 'custom-portal';
          container.className = 'p-4 border-2 border-dashed border-blue-300 rounded-lg';
          document.body.appendChild(container);
        }
      });
      return {};
    },
    template: `
      <div class="p-4">
        <p class="mb-4">Контент в основном потоке</p>
        <DXPortal to="#custom-portal">
          <DXCard class="p-4 bg-green-50 border-green-200">
            <p>Этот контент рендерится в кастомном контейнере</p>
          </DXCard>
        </DXPortal>
      </div>
    `,
  }),
};

export const Disabled = {
  args: {
    to: 'body',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключенный портал. Контент рендерится в текущем месте вместо целевого контейнера. Полезно для тестирования или условного рендеринга.',
      },
    },
  },
  render: (args) => ({
    components: { DXPortal, DXCard },
    setup() { 
      return { args }; 
    },
    template: `
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-yellow-50 border-yellow-200">
            <p>Этот контент рендерится здесь (портал отключен)</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    `,
  }),
};

export const MultiplePortals = {
  parameters: {
    docs: {
      description: {
        story: 'Несколько порталов могут использоваться одновременно. Каждый портал независимо рендерит свой контент в указанный контейнер.',
      },
    },
  },
  render: () => ({
    components: { DXPortal, DXCard },
    setup() {
      onMounted(() => {
        // Создаем контейнеры если их нет
        if (!document.getElementById('portal-1')) {
          const container1 = document.createElement('div');
          container1.id = 'portal-1';
          container1.className = 'p-2 border border-blue-300 rounded mb-2';
          document.body.appendChild(container1);
        }
        if (!document.getElementById('portal-2')) {
          const container2 = document.createElement('div');
          container2.id = 'portal-2';
          container2.className = 'p-2 border border-green-300 rounded';
          document.body.appendChild(container2);
        }
      });
      return {};
    },
    template: `
      <div class="p-4">
        <p class="mb-4">Основной контент</p>
        
        <DXPortal to="#portal-1">
          <DXCard class="p-2 bg-blue-50">
            Портал 1
          </DXCard>
        </DXPortal>
        
        <DXPortal to="#portal-2">
          <DXCard class="p-2 bg-green-50">
            Портал 2
          </DXCard>
        </DXPortal>
      </div>
    `,
  }),
};

