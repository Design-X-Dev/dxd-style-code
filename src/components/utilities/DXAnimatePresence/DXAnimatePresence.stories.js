import { ref } from 'vue';
import DXAnimatePresence from './DXAnimatePresence.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXModal from '../../organisms/DXModal/DXModal.vue';

export default {
  title: 'Utilities/DXAnimatePresence',
  component: DXAnimatePresence,
  tags: ['autodocs', 'category:animation'],
  parameters: {
    docs: {
      description: {
        component: `
# DXAnimatePresence

Компонент для анимаций появления и исчезания элементов с поддержкой условного рендеринга.

## Назначение

DXAnimatePresence предоставляет обертку над Vue \`<Transition>\` с предустановленными анимациями
для условного рендеринга элементов. Используется для анимации модальных окон, выпадающих меню, уведомлений.

## Архитектура

### Использует
- Vue \`<Transition>\` - встроенный компонент Vue для анимаций
- \`useAnimation\` composable - для transition конфигураций
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXModal\` - для анимации открытия/закрытия
- \`DXDropdown\` - для анимации выпадающих меню
- \`DXToast\` - для анимации уведомлений
- Любые компоненты с условным рендерингом

## Внутренняя логика

### Типы анимаций
- **fade**: Плавное появление/исчезание
- **fade-scale**: Появление/исчезание с масштабированием
- **slide-right**: Скольжение справа налево
- **slide-left**: Скольжение слева направо
- **slide-up**: Скольжение снизу вверх
- **slide-down**: Скольжение сверху вниз

### Режимы
- **default**: Одновременная анимация входа и выхода
- **in-out**: Сначала выход, затем вход
- **out-in**: Сначала вход, затем выход

## Особенности

### Условный рендеринг
Компонент рендерит слот только когда \`show={true}\`, что позволяет оптимизировать производительность.

### Кастомные имена
Можно указать кастомное имя transition через prop \`name\` для использования собственных CSS классов.
        `,
      },
    },
  },
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Показывать/скрывать элемент.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    name: {
      control: 'text',
      description: 'Имя transition (используется для CSS классов).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
        category: 'Appearance',
      },
    },
    mode: {
      control: 'select',
      options: ['default', 'in-out', 'out-in'],
      description: 'Режим transition: default (одновременно) | in-out (сначала выход) | out-in (сначала вход).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Behavior',
      },
    },
    type: {
      control: 'select',
      options: ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down'],
      description: 'Тип анимации.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
        category: 'Appearance',
      },
    },
    duration: {
      control: 'number',
      min: 0,
      max: 2000,
      step: 50,
      description: 'Длительность анимации в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
        category: 'Appearance',
      },
    },
    appear: {
      control: 'boolean',
      description: 'Анимировать при первом появлении.',
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
    show: false,
    type: 'fade',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для анимации появления/исчезания элемента.',
      },
    },
  },
  render: (args) => ({
    components: { DXAnimatePresence, DXCard, DXButton },
    setup() {
      const show = ref(args.show);
      return { show, args };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Этот элемент анимируется при появлении и исчезании</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

export const FadeScale = {
  args: {
    show: false,
    type: 'fade-scale',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием - элемент появляется с увеличением масштаба.',
      },
    },
  },
  render: (args) => ({
    components: { DXAnimatePresence, DXCard, DXButton },
    setup() {
      const show = ref(args.show);
      return { show, args };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент с масштабированием</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

export const SlideUp = {
  args: {
    show: false,
    type: 'slide-up',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация скольжения снизу вверх. Полезно для модальных окон и уведомлений.',
      },
    },
  },
  render: (args) => ({
    components: { DXAnimatePresence, DXCard, DXButton },
    setup() {
      const show = ref(args.show);
      return { show, args };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент скользит снизу вверх</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

export const WithModal = {
  parameters: {
    docs: {
      description: {
        story: 'Использование с модальным окном. Модальное окно анимируется при открытии и закрытии.',
      },
    },
  },
  render: () => ({
    components: { DXAnimatePresence, DXModal, DXButton },
    setup() {
      const showModal = ref(false);
      return { showModal };
    },
    template: `
      <div>
        <DXButton @click="showModal = true">Открыть модальное окно</DXButton>
        <DXAnimatePresence type="fade-scale" :show="showModal">
          <DXModal :open="showModal" @close="showModal = false">
            <h2 class="text-xl font-semibold mb-4">Модальное окно</h2>
            <p class="mb-4">Это модальное окно анимируется при открытии и закрытии.</p>
            <DXButton @click="showModal = false">Закрыть</DXButton>
          </DXModal>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

export const ModeInOut = {
  args: {
    show: false,
    type: 'fade',
    mode: 'in-out',
  },
  parameters: {
    docs: {
      description: {
        story: 'Режим in-out - сначала выход старого элемента, затем вход нового.',
      },
    },
  },
  render: (args) => ({
    components: { DXAnimatePresence, DXCard, DXButton },
    setup() {
      const show = ref(args.show);
      const content = ref('Контент 1');
      return { show, content, args };
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton @click="show = !show">
            {{ show ? 'Скрыть' : 'Показать' }}
          </DXButton>
          <DXButton v-if="show" @click="content = content === 'Контент 1' ? 'Контент 2' : 'Контент 1'">
            Переключить контент
          </DXButton>
        </div>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard :key="content" class="p-4">
            <p>{{ content }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

export const AllTypes = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех типов анимаций. Переключайте тип через контролы.',
      },
    },
  },
  render: () => ({
    components: { DXAnimatePresence, DXCard, DXButton },
    setup() {
      const show = ref(false);
      const type = ref('fade');
      const types = ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down'];
      return { show, type, types };
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-2 flex-wrap">
          <DXButton
            v-for="t in types"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence :type="type" :show="show">
          <DXCard class="p-4">
            <p>Тип анимации: {{ type }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `,
  }),
};

