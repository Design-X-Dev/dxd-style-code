import { ref } from 'vue';
import DXTransitionGroup from './DXTransitionGroup.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Utilities/DXTransitionGroup',
  component: DXTransitionGroup,
  tags: ['autodocs', 'category:animation'],
  parameters: {
    docs: {
      description: {
        component: `
# DXTransitionGroup

Компонент для групповых анимаций списков элементов с поддержкой различных типов переходов.

## Назначение

DXTransitionGroup предоставляет обертку над Vue \`<TransitionGroup>\` с предустановленными анимациями
для списков, сеток и коллекций элементов. Автоматически анимирует добавление, удаление и перемещение элементов.

## Архитектура

### Использует
- Vue \`<TransitionGroup>\` - встроенный компонент Vue для групповых анимаций
- \`useAnimation\` composable - для transition конфигураций
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXList\` - для анимации элементов списка
- \`DXTable\` - для анимации строк таблицы
- Любые компоненты со списками элементов

## Внутренняя логика

### Типы анимаций
- **fade**: Плавное появление/исчезание
- **fade-scale**: Появление/исчезание с масштабированием
- **slide-right**: Скольжение справа налево
- **slide-left**: Скольжение слева направо
- **slide-up**: Скольжение снизу вверх
- **slide-down**: Скольжение сверху вниз

### Move анимация
TransitionGroup автоматически анимирует перемещение элементов при изменении порядка.

## Особенности

### Кастомные имена
Можно указать кастомное имя transition через prop \`name\` для использования собственных CSS классов.

### Длительность
Длительность анимации настраивается через prop \`duration\` и применяется ко всем CSS transitions.
        `,
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Имя transition (используется для CSS классов).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
        category: 'Appearance',
      },
    },
    tag: {
      control: 'text',
      description: 'HTML тег для TransitionGroup.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
        category: 'Appearance',
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
  },
};

export const Default = {
  args: {
    type: 'fade',
    tag: 'div',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для анимации списка элементов с fade эффектом.',
      },
    },
  },
  render: (args) => ({
    components: { DXTransitionGroup, DXCard, DXButton },
    setup() {
      const items = ref([
        { id: 1, name: 'Элемент 1' },
        { id: 2, name: 'Элемент 2' },
        { id: 3, name: 'Элемент 3' },
      ]);
      
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({ id: newId, name: `Элемент ${newId}` });
      };
      
      const removeItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
      };
      
      return { args, items, addItem, removeItem };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `,
  }),
};

export const FadeScale = {
  args: {
    type: 'fade-scale',
    tag: 'div',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием - элементы появляются с увеличением масштаба.',
      },
    },
  },
  render: (args) => ({
    components: { DXTransitionGroup, DXCard, DXButton },
    setup() {
      const items = ref([
        { id: 1, name: 'Карточка 1' },
        { id: 2, name: 'Карточка 2' },
      ]);
      
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({ id: newId, name: `Карточка ${newId}` });
      };
      
      const removeItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
      };
      
      return { args, items, addItem, removeItem };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить карточку</DXButton>
        <DXTransitionGroup v-bind="args" class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold mb-2">{{ item.name }}</h3>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `,
  }),
};

export const SlideRight = {
  args: {
    type: 'slide-right',
    tag: 'ul',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация скольжения справа налево. Элементы появляются слева и исчезают вправо.',
      },
    },
  },
  render: (args) => ({
    components: { DXTransitionGroup, DXCard, DXButton },
    setup() {
      const items = ref([
        { id: 1, name: 'Задача 1' },
        { id: 2, name: 'Задача 2' },
      ]);
      
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({ id: newId, name: `Задача ${newId}` });
      };
      
      const removeItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
      };
      
      return { args, items, addItem, removeItem };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить задачу</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2 list-none">
          <li
            v-for="item in items"
            :key="item.id"
          >
            <DXCard class="p-4 flex items-center justify-between">
              <span>{{ item.name }}</span>
              <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
                Удалить
              </DXButton>
            </DXCard>
          </li>
        </DXTransitionGroup>
      </div>
    `,
  }),
};

export const CustomDuration = {
  args: {
    type: 'fade',
    duration: 500,
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомная длительность анимации. В этом примере анимация длится 500ms вместо стандартных 200ms.',
      },
    },
  },
  render: (args) => ({
    components: { DXTransitionGroup, DXCard, DXButton },
    setup() {
      const items = ref([
        { id: 1, name: 'Элемент 1' },
        { id: 2, name: 'Элемент 2' },
      ]);
      
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({ id: newId, name: `Элемент ${newId}` });
      };
      
      const removeItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
      };
      
      return { args, items, addItem, removeItem };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
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
    components: { DXTransitionGroup, DXCard, DXButton },
    setup() {
      const type = ref('fade');
      const items = ref([
        { id: 1, name: 'Элемент 1' },
        { id: 2, name: 'Элемент 2' },
        { id: 3, name: 'Элемент 3' },
      ]);
      
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({ id: newId, name: `Элемент ${newId}` });
      };
      
      const removeItem = (id) => {
        items.value = items.value.filter(item => item.id !== id);
      };
      
      return { type, items, addItem, removeItem };
    },
    template: `
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton
            v-for="t in ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down']"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup :type="type" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `,
  }),
};

