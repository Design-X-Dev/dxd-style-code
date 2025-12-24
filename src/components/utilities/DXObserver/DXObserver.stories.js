import { ref } from 'vue';
import DXObserver from './DXObserver.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Utilities/DXObserver',
  component: DXObserver,
  tags: ['autodocs', 'category:utility'],
  parameters: {
    docs: {
      description: {
        component: `
# DXObserver

Компонент для отслеживания видимости элементов с использованием Intersection Observer API.

## Назначение

DXObserver позволяет отслеживать, когда элемент становится видимым в viewport или указанном контейнере.
Используется для оптимизации производительности через ленивую загрузку, бесконечную прокрутку и анимации.

## Архитектура

### Использует
- Intersection Observer API - нативный браузерный API
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXMediaGallery\` - для ленивой загрузки изображений
- \`DXTable\` - для бесконечной прокрутки
- Любые компоненты, требующие отслеживания видимости

## Внутренняя логика

### Intersection Observer
Компонент создает Intersection Observer при монтировании и отслеживает видимость корневого элемента.
При изменении видимости эмитит событие \`intersect\` с информацией о пересечении.

### Режим once
Если \`once={true}\`, observer срабатывает только один раз и автоматически отключается после первого пересечения.

### Реактивность
Observer автоматически пересоздается при изменении \`threshold\`, \`rootMargin\` или \`root\`.

## Особенности

### Производительность
Intersection Observer API оптимизирован браузером и работает асинхронно, не блокируя основной поток.

### Доступность
Компонент не влияет на доступность, так как является утилитой для отслеживания видимости.

### Fallback
Для браузеров без поддержки Intersection Observer можно добавить полифилл, но это не входит в компонент.
        `,
      },
    },
  },
  argTypes: {
    threshold: {
      control: 'number',
      min: 0,
      max: 1,
      step: 0.1,
      description: 'Порог видимости (0.0 - 1.0). Определяет, какая часть элемента должна быть видна.',
      table: {
        type: { summary: 'number | array' },
        defaultValue: { summary: '0.1' },
        category: 'Behavior',
      },
    },
    rootMargin: {
      control: 'text',
      description: 'Отступы от root элемента (формат CSS margin).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"0px"' },
        category: 'Behavior',
      },
    },
    once: {
      control: 'boolean',
      description: 'Срабатывать только один раз. После первого срабатывания observer отключается.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить observer.',
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
    threshold: 0.1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование observer для отслеживания видимости элемента.',
      },
    },
  },
  render: (args) => ({
    components: { DXObserver, DXCard },
    setup() {
      const isVisible = ref(false);
      const handleIntersect = (intersecting) => {
        isVisible.value = intersecting;
      };
      return { args, isVisible, handleIntersect };
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-slate-600">
          Статус: {{ isVisible ? 'Видим' : 'Не видим' }}
        </p>
        <div class="h-screen bg-slate-50 p-4">
          <p class="mb-4">Прокрутите вниз, чтобы увидеть элемент</p>
        </div>
        <DXObserver v-bind="args" @intersect="handleIntersect">
          <DXCard class="p-4">
            <p>Этот элемент отслеживается observer</p>
            <p v-if="isVisible" class="text-green-600 mt-2">Элемент видим!</p>
          </DXCard>
        </DXObserver>
      </div>
    `,
  }),
};

export const LazyLoading = {
  parameters: {
    docs: {
      description: {
        story: 'Использование для ленивой загрузки изображений. Изображение загружается только когда становится видимым.',
      },
    },
  },
  render: () => ({
    components: { DXObserver },
    setup() {
      const isVisible = ref(false);
      const handleIntersect = (intersecting) => {
        if (intersecting) {
          isVisible.value = true;
        }
      };
      return { isVisible, handleIntersect };
    },
    template: `
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p>Прокрутите вниз для загрузки изображения</p>
        </div>
        <DXObserver threshold="0.1" @intersect="handleIntersect">
          <div class="w-full">
            <div v-if="!isVisible" class="h-64 bg-slate-200 flex items-center justify-center">
              <p class="text-slate-500">Загрузка изображения...</p>
            </div>
            <img
              v-else
              src="https://via.placeholder.com/800x400"
              alt="Lazy loaded"
              class="w-full h-auto rounded-lg"
            />
          </div>
        </DXObserver>
      </div>
    `,
  }),
};

export const InfiniteScroll = {
  parameters: {
    docs: {
      description: {
        story: 'Использование для бесконечной прокрутки. Новые элементы загружаются при достижении конца списка.',
      },
    },
  },
  render: () => ({
    components: { DXObserver, DXCard },
    setup() {
      const items = ref([
        { id: 1, content: 'Элемент 1' },
        { id: 2, content: 'Элемент 2' },
        { id: 3, content: 'Элемент 3' },
      ]);
      const isLoading = ref(false);
      
      const loadMore = (intersecting) => {
        if (intersecting && !isLoading.value) {
          isLoading.value = true;
          setTimeout(() => {
            const newId = Math.max(...items.value.map(i => i.id)) + 1;
            items.value.push({
              id: newId,
              content: `Элемент ${newId}`,
            });
            isLoading.value = false;
          }, 1000);
        }
      };
      
      return { items, isLoading, loadMore };
    },
    template: `
      <div class="space-y-2">
        <DXCard v-for="item in items" :key="item.id" class="p-4">
          {{ item.content }}
        </DXCard>
        <DXObserver threshold="0.5" @intersect="loadMore">
          <div v-if="isLoading" class="p-4 text-center text-slate-500">
            Загрузка...
          </div>
          <div v-else class="p-4 text-center text-slate-400 text-sm">
            Прокрутите для загрузки
          </div>
        </DXObserver>
      </div>
    `,
  }),
};

export const OnceMode = {
  args: {
    threshold: 0.3,
    once: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Режим once - observer срабатывает только один раз. Полезно для анимаций появления.',
      },
    },
  },
  render: (args) => ({
    components: { DXObserver, DXCard },
    setup() {
      const isAnimated = ref(false);
      const handleIntersect = (intersecting) => {
        if (intersecting) {
          isAnimated.value = true;
        }
      };
      return { args, isAnimated, handleIntersect };
    },
    template: `
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p>Прокрутите вниз</p>
        </div>
        <DXObserver v-bind="args" @intersect="handleIntersect">
          <DXCard
            class="p-4 transition-all duration-500"
            :class="{
              'opacity-100 translate-y-0': isAnimated,
              'opacity-0 translate-y-8': !isAnimated,
            }"
          >
            <p>Этот элемент анимируется только один раз</p>
            <p v-if="isAnimated" class="text-green-600 mt-2">Анимация завершена!</p>
          </DXCard>
        </DXObserver>
      </div>
    `,
  }),
};

export const WithThreshold = {
  parameters: {
    docs: {
      description: {
        story: 'Различные пороги видимости. Элемент считается видимым при достижении указанного процента.',
      },
    },
  },
  render: () => ({
    components: { DXObserver, DXCard },
    setup() {
      const thresholds = [0.1, 0.5, 1.0];
      const visibleStates = ref({});
      
      const handleIntersect = (threshold) => (intersecting) => {
        visibleStates.value[threshold] = intersecting;
      };
      
      return { thresholds, visibleStates, handleIntersect };
    },
    template: `
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p>Прокрутите вниз</p>
        </div>
        <div
          v-for="threshold in thresholds"
          :key="threshold"
          class="space-y-2"
        >
          <DXObserver :threshold="threshold" @intersect="handleIntersect(threshold)">
            <DXCard class="p-4">
              <p>Порог: {{ threshold * 100 }}%</p>
              <p :class="visibleStates[threshold] ? 'text-green-600' : 'text-slate-400'">
                {{ visibleStates[threshold] ? 'Видим' : 'Не видим' }}
              </p>
            </DXCard>
          </DXObserver>
        </div>
      </div>
    `,
  }),
};

