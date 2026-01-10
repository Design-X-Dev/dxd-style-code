import { ref } from 'vue';
import DXStaggeredAnimation from './DXStaggeredAnimation.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXList from '../../atoms/DXList/DXList.vue';

export default {
  title: 'Utilities/DXStaggeredAnimation',
  component: DXStaggeredAnimation,
  tags: ['autodocs', 'category:animation', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент для последовательных анимаций элементов с задержкой между ними.

## Назначение

DXStaggeredAnimation применяет анимацию к дочерним элементам с последовательной задержкой,
создавая эффект каскадного появления. Используется для эффектных анимаций списков, сеток и карточек.

## Архитектура

### Использует
- CSS transitions - для анимаций
- \`useClassComposition\` composable - для стилей
- JavaScript setTimeout - для задержек

### Используется в
- \`DXDashboardGrid\` - для анимации виджетов
- \`DXList\` - для эффектного появления элементов
- Любые компоненты со списками элементов

## Внутренняя логика

### Направления анимации
- **top-to-bottom**: Элементы появляются сверху вниз
- **left-to-right**: Элементы появляются слева направо
- **right-to-left**: Элементы появляются справа налево
- **bottom-to-top**: Элементы появляются снизу вверх

### Типы transition
- **fade**: Плавное появление
- **fade-slide**: Появление со скольжением
- **scale**: Появление с масштабированием

### Задержка
Каждый элемент анимируется с задержкой относительно предыдущего.

## Особенности

### Автоматическое применение
Анимация применяется автоматически при монтировании (если \`animateOnMount={true}\`).

### Оптимизация
Таймеры очищаются при размонтировании для предотвращения утечек памяти.
        `,
      },
    },
  },
  argTypes: {
    delay: {
      control: 'number',
      min: 0,
      max: 500,
      step: 10,
      description: 'Задержка между элементами в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
        category: 'Animation',
      },
    },
    direction: {
      control: 'select',
      options: ['top-to-bottom', 'left-to-right', 'right-to-left', 'bottom-to-top'],
      description: 'Направление анимации.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top-to-bottom' },
        category: 'Animation',
      },
    },
    transition: {
      control: 'select',
      options: ['fade', 'fade-slide', 'scale'],
      description: 'Тип transition.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fade' },
        category: 'Animation',
      },
    },
    duration: {
      control: 'number',
      min: 100,
      max: 1000,
      step: 50,
      description: 'Длительность анимации в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
        category: 'Animation',
      },
    },
  },
};

const defaultItems = [
  { id: 1, name: 'Элемент 1' },
  { id: 2, name: 'Элемент 2' },
  { id: 3, name: 'Элемент 3' },
  { id: 4, name: 'Элемент 4' },
  { id: 5, name: 'Элемент 5' },
];

export const Default = {
  args: {
    delay: 100,
    direction: 'top-to-bottom',
    transition: 'fade',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая последовательная анимация списка элементов. Элементы появляются сверху вниз с задержкой.',
      },
    },
  },
  render: (args) => ({
    components: { DXStaggeredAnimation, DXCard },
    setup() {
      return { args, defaultItems };
    },
    template: `
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `,
  }),
};

export const LeftToRight = {
  args: {
    delay: 100,
    direction: 'left-to-right',
    transition: 'fade-slide',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация слева направо. Элементы появляются последовательно с левой стороны.',
      },
    },
  },
  render: (args) => ({
    components: { DXStaggeredAnimation, DXCard },
    setup() {
      return { args, defaultItems };
    },
    template: `
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `,
  }),
};

export const WithScale = {
  args: {
    delay: 150,
    direction: 'top-to-bottom',
    transition: 'scale',
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием. Элементы появляются с увеличением масштаба.',
      },
    },
  },
  render: (args) => ({
    components: { DXStaggeredAnimation, DXCard },
    setup() {
      return { args, defaultItems };
    },
    template: `
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `,
  }),
};

export const GridLayout = {
  parameters: {
    docs: {
      description: {
        story: 'Анимация элементов в сетке. Карточки появляются последовательно в grid layout.',
      },
    },
  },
  render: () => ({
    components: { DXStaggeredAnimation, DXCard },
    setup() {
      const gridItems = ref([
        { id: 1, title: 'Карточка 1' },
        { id: 2, title: 'Карточка 2' },
        { id: 3, title: 'Карточка 3' },
        { id: 4, title: 'Карточка 4' },
        { id: 5, title: 'Карточка 5' },
        { id: 6, title: 'Карточка 6' },
      ]);
      return { gridItems };
    },
    template: `
      <DXStaggeredAnimation delay="100" direction="left-to-right" transition="fade-slide">
        <div class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in gridItems"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </DXCard>
        </div>
      </DXStaggeredAnimation>
    `,
  }),
};

export const WithButton = {
  parameters: {
    docs: {
      description: {
        story: 'Анимация с кнопкой для повторного запуска. Нажмите кнопку, чтобы увидеть анимацию снова.',
      },
    },
  },
  render: () => ({
    components: { DXStaggeredAnimation, DXCard, DXButton },
    setup() {
      const key = ref(0);
      const items = ref(defaultItems);
      
      const restartAnimation = () => {
        key.value++;
      };
      
      return { key, items, restartAnimation };
    },
    template: `
      <div class="space-y-4">
        <DXButton @click="restartAnimation">Запустить анимацию</DXButton>
        <DXStaggeredAnimation
          :key="key"
          delay="100"
          direction="top-to-bottom"
          transition="fade-slide"
        >
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 mb-2"
          >
            {{ item.name }}
          </DXCard>
        </DXStaggeredAnimation>
      </div>
    `,
  }),
};

export const AllDirections = {
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех направлений анимации.',
      },
    },
  },
  render: () => ({
    components: { DXStaggeredAnimation, DXCard },
    setup() {
      const directions = [
        { name: 'top-to-bottom', label: 'Сверху вниз' },
        { name: 'left-to-right', label: 'Слева направо' },
        { name: 'right-to-left', label: 'Справа налево' },
        { name: 'bottom-to-top', label: 'Снизу вверх' },
      ];
      return { directions, defaultItems };
    },
    template: `
      <div class="space-y-8">
        <div
          v-for="dir in directions"
          :key="dir.name"
          class="space-y-2"
        >
          <h3 class="font-semibold">{{ dir.label }}</h3>
          <DXStaggeredAnimation
            :direction="dir.name"
            delay="100"
            transition="fade-slide"
          >
            <DXCard
              v-for="item in defaultItems.slice(0, 3)"
              :key="item.id"
              class="p-4 mb-2"
            >
              {{ item.name }}
            </DXCard>
          </DXStaggeredAnimation>
        </div>
      </div>
    `,
  }),
};

