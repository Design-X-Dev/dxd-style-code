import { ref } from 'vue';
import DXMediaGallery from './DXMediaGallery.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

const defaultItems = [
  {
    id: 1,
    src: 'https://via.placeholder.com/800x600',
    thumbnail: 'https://via.placeholder.com/300x300',
    title: 'Изображение 1',
    type: 'image',
  },
  {
    id: 2,
    src: 'https://via.placeholder.com/800x600/0066CC',
    thumbnail: 'https://via.placeholder.com/300x300/0066CC',
    title: 'Изображение 2',
    type: 'image',
  },
  {
    id: 3,
    src: 'https://via.placeholder.com/800x600/CC6600',
    thumbnail: 'https://via.placeholder.com/300x300/CC6600',
    title: 'Изображение 3',
    type: 'image',
  },
  {
    id: 4,
    src: 'https://via.placeholder.com/800x600/00CC66',
    thumbnail: 'https://via.placeholder.com/300x300/00CC66',
    title: 'Изображение 4',
    type: 'image',
  },
  {
    id: 5,
    src: 'https://via.placeholder.com/800x600/CC0066',
    thumbnail: 'https://via.placeholder.com/300x300/CC0066',
    title: 'Изображение 5',
    type: 'image',
  },
  {
    id: 6,
    src: 'https://via.placeholder.com/800x600/6600CC',
    thumbnail: 'https://via.placeholder.com/300x300/6600CC',
    title: 'Изображение 6',
    type: 'image',
  },
];

export default {
  title: 'Organisms/DXMediaGallery',
  component: DXMediaGallery,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXMediaGallery

Галерея изображений или видео с превью, полноэкранным просмотром и навигацией.

## Назначение

DXMediaGallery предоставляет компонент для отображения коллекций изображений и видео
с поддержкой grid и list layouts, lightbox режима и ленивой загрузки.

## Архитектура

### Использует
- \`DXGrid\` - для grid layout
- \`DXModal\` - для lightbox
- \`DXObserver\` - для ленивой загрузки
- \`DXButton\` - для навигации в lightbox
- \`DXIcon\` - для иконок навигации
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Галереи товаров в интернет-магазинах
- Портфолио фотографий
- Галереи документов с превью
- Медиа-библиотеки

## Внутренняя логика

### Layouts
- **grid**: Сетка изображений с настраиваемым количеством колонок
- **list**: Список изображений с описаниями

### Lightbox
При клике на элемент открывается модальное окно с полноэкранным просмотром
и навигацией между элементами.

### Ленивая загрузка
При \`lazy={true}\` изображения загружаются только при появлении в viewport
через DXObserver.

## Особенности

### Кастомные элементы
Можно использовать slot \`item\` для кастомного отображения элементов.

### Навигация в lightbox
Стрелки влево/вправо для навигации между элементами в lightbox.
        `,
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['grid', 'list'],
      description: 'Layout галереи: grid (сетка) | list (список).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'grid' },
        category: 'Layout',
      },
    },
    columns: {
      control: 'number',
      min: 1,
      max: 12,
      description: 'Количество колонок для grid layout.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '3' },
        category: 'Layout',
      },
    },
    lightbox: {
      control: 'boolean',
      description: 'Показывать lightbox при клике.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    lazy: {
      control: 'boolean',
      description: 'Ленивая загрузка изображений.',
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
    layout: 'grid',
    columns: 3,
    lightbox: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая галерея в grid layout с lightbox. Кликните на изображение для полноэкранного просмотра.',
      },
    },
  },
  render: (args) => ({
    components: { DXMediaGallery },
    setup() {
      return { args, defaultItems };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" />',
  }),
};

export const ListLayout = {
  args: {
    items: defaultItems.slice(0, 3),
    layout: 'list',
    lightbox: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея в list layout. Элементы отображаются в виде списка с превью и описаниями.',
      },
    },
  },
  render: (args) => ({
    components: { DXMediaGallery },
    setup() {
      const items = ref([
        {
          id: 1,
          src: 'https://via.placeholder.com/800x600',
          thumbnail: 'https://via.placeholder.com/300x300',
          title: 'Изображение 1',
          description: 'Описание изображения 1',
          type: 'image',
        },
        {
          id: 2,
          src: 'https://via.placeholder.com/800x600/0066CC',
          thumbnail: 'https://via.placeholder.com/300x300/0066CC',
          title: 'Изображение 2',
          description: 'Описание изображения 2',
          type: 'image',
        },
      ]);
      return { args, items };
    },
    template: '<DXMediaGallery v-bind="args" :items="items" />',
  }),
};

export const WithLazyLoading = {
  args: {
    layout: 'grid',
    columns: 3,
    lazy: true,
    lightbox: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея с ленивой загрузкой. Изображения загружаются только при появлении в viewport.',
      },
    },
  },
  render: (args) => ({
    components: { DXMediaGallery },
    setup() {
      return { args, defaultItems };
    },
    template: `
      <div>
        <div class="h-screen bg-slate-50 p-8 mb-4">
          <p>Прокрутите вниз для загрузки изображений</p>
        </div>
        <DXMediaGallery v-bind="args" :items="defaultItems" />
      </div>
    `,
  }),
};

export const WithoutLightbox = {
  args: {
    layout: 'grid',
    columns: 3,
    lightbox: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея без lightbox. Клик по элементу эмитит событие item-click.',
      },
    },
  },
  render: (args) => ({
    components: { DXMediaGallery },
    setup() {
      const handleItemClick = (item, index) => {
        console.log('Клик по элементу:', item, index);
      };
      return { args, defaultItems, handleItemClick };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" @item-click="handleItemClick" />',
  }),
};

export const CustomColumns = {
  parameters: {
    docs: {
      description: {
        story: 'Галерея с различным количеством колонок на разных экранах.',
      },
    },
  },
  render: () => ({
    components: { DXMediaGallery },
    setup() {
      const defaultItems = ref([
        {
          id: 1,
          src: 'https://via.placeholder.com/800x600',
          thumbnail: 'https://via.placeholder.com/300x300',
          title: 'Изображение 1',
          type: 'image',
        },
        {
          id: 2,
          src: 'https://via.placeholder.com/800x600/0066CC',
          thumbnail: 'https://via.placeholder.com/300x300/0066CC',
          title: 'Изображение 2',
          type: 'image',
        },
        {
          id: 3,
          src: 'https://via.placeholder.com/800x600/CC6600',
          thumbnail: 'https://via.placeholder.com/300x300/CC6600',
          title: 'Изображение 3',
          type: 'image',
        },
        {
          id: 4,
          src: 'https://via.placeholder.com/800x600/00CC66',
          thumbnail: 'https://via.placeholder.com/300x300/00CC66',
          title: 'Изображение 4',
          type: 'image',
        },
      ]);
      return { defaultItems };
    },
    template: `
      <DXMediaGallery
        :items="defaultItems"
        :columns="2"
        :columns-sm="2"
        :columns-md="3"
        :columns-lg="4"
        layout="grid"
      />
    `,
  }),
};

export const WithOverlay = {
  args: {
    layout: 'grid',
    columns: 3,
    showOverlay: true,
    lightbox: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея с overlay. При наведении показывается overlay с информацией об элементе.',
      },
    },
  },
  render: (args) => ({
    components: { DXMediaGallery },
    setup() {
      return { args, defaultItems };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" />',
  }),
};

