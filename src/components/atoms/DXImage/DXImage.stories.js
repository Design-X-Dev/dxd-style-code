import DXImage from './DXImage.vue';

export default {
  title: 'Atoms/DXImage',
  component: DXImage,
  tags: ['autodocs', 'category:data-display'],
  parameters: {
    docs: {
      description: {
        component: `
# DXImage

Универсальный компонент для отображения изображений с поддержкой lazy loading, fallback и обработки ошибок.

## Назначение

DXImage предоставляет улучшенную функциональность по сравнению с обычным \`<img>\` тегом:
- Lazy loading через DXObserver
- Автоматический fallback при ошибке загрузки
- Skeleton/placeholder при загрузке
- Поддержка responsive изображений (srcset)
- Различные размеры и режимы отображения

## Архитектура

### Использует
- \`useSize\` composable - для предопределенных размеров
- \`useClassComposition\` composable - для объединения классов
- \`DXObserver\` - для lazy loading
- \`DXIcon\` - для fallback иконки

### Используется в
- Логотипы и брендинг
- Галереи изображений
- Карточки товаров
- Профили пользователей
- Любые места, где требуется отображение изображений

## Внутренняя логика

### Обработка ошибок
При ошибке загрузки основного изображения:
1. Если указан \`fallback\` → загружает fallback изображение
2. Если есть slot \`fallback\` → показывает кастомный fallback
3. Иначе показывает дефолтный placeholder с иконкой

### Lazy Loading
- Использует \`DXObserver\` для отслеживания видимости
- Показывает skeleton/placeholder до загрузки
- Загружает изображение только при появлении в viewport

### Размеры
- Предопределенные размеры через \`size\` prop (xs, sm, md, lg, xl)
- Кастомные размеры через \`width\` и \`height\` props
- Использует \`useSize\` composable для унификации

## Особенности

### Базовое использование
\`\`\`vue
<DXImage src="/logo.png" alt="Logo" size="md" />
\`\`\`

### С lazy loading
\`\`\`vue
<DXImage src="/image.jpg" alt="Image" lazy />
\`\`\`

### С fallback
\`\`\`vue
<DXImage src="/image.jpg" fallback="/fallback.jpg" alt="Image" />
\`\`\`

### Responsive изображения
\`\`\`vue
<DXImage 
  src="/image.jpg" 
  srcset="/image-small.jpg 400w, /image-large.jpg 800w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Responsive image"
/>
\`\`\`

### Кастомные размеры
\`\`\`vue
<DXImage src="/image.jpg" :width="200" :height="150" alt="Image" />
\`\`\`

## Ограничения

- Lazy loading работает только с DXObserver
- Fallback изображение также может вызвать ошибку (отслеживается отдельно)
- Skeleton показывается только при lazy loading
        `,
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL изображения. Обязательный параметр.',
      table: {
        type: { summary: 'string' },
        category: 'Image',
      },
    },
    alt: {
      control: 'text',
      description: 'Alt текст для доступности. Важен для SEO и скринридеров.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
        category: 'Image',
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Предопределенный размер изображения. Использует useSize composable для унификации размеров.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Size',
      },
    },
    width: {
      control: 'text',
      description: 'Кастомная ширина изображения. Может быть числом (пиксели) или строкой (например, "200px", "50%").',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'null' },
        category: 'Size',
      },
    },
    height: {
      control: 'text',
      description: 'Кастомная высота изображения. Может быть числом (пиксели) или строкой (например, "200px", "50%").',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'null' },
        category: 'Size',
      },
    },
    objectFit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      description: 'CSS object-fit свойство. Определяет, как изображение вписывается в контейнер.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"cover"' },
        category: 'Appearance',
      },
    },
    lazy: {
      control: 'boolean',
      description: 'Включить lazy loading. Изображение загружается только при появлении в viewport через DXObserver.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    fallback: {
      control: 'text',
      description: 'URL fallback изображения при ошибке загрузки основного изображения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Error Handling',
      },
    },
    placeholder: {
      control: 'text',
      description: 'URL placeholder изображения. Показывается до загрузки основного изображения при lazy loading.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Loading',
      },
    },
    showSkeleton: {
      control: 'boolean',
      description: 'Показывать skeleton при загрузке (только для lazy loading).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Loading',
      },
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Скругление углов изображения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"none"' },
        category: 'Appearance',
      },
    },
    srcset: {
      control: 'text',
      description: 'Responsive изображения (srcset атрибут). Позволяет браузеру выбирать оптимальное изображение.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Responsive',
      },
    },
    sizes: {
      control: 'text',
      description: 'Sizes атрибут для responsive изображений. Определяет размер изображения в разных условиях.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Responsive',
      },
    },
  },
};

export const Default = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Placeholder image',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование DXImage. Простое отображение изображения с alt текстом.',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: '<DXImage v-bind="args" />',
  }),
};

export const Sizes = {
  parameters: {
    docs: {
      description: {
        story: 'Предопределенные размеры изображений. Использует useSize composable для унификации размеров.',
      },
    },
  },
  render: () => ({
    components: { DXImage },
    template: `
      <div class="flex items-end gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/64x64" alt="XS" size="xs" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XS</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/96x96" alt="SM" size="sm" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/128x128" alt="MD" size="md" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/192x192" alt="LG" size="lg" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/256x256" alt="XL" size="xl" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XL</p>
        </div>
      </div>
    `,
  }),
};

export const CustomSizes = {
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Custom size image',
    width: 200,
    height: 150,
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомные размеры через width и height props. Размеры могут быть числами (пиксели) или строками (например, "200px", "50%").',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: '<DXImage v-bind="args" rounded="lg" />',
  }),
};

export const ObjectFit = {
  parameters: {
    docs: {
      description: {
        story: 'Различные режимы object-fit. Определяет, как изображение вписывается в контейнер.',
      },
    },
  },
  render: () => ({
    components: { DXImage },
    template: `
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Cover" 
            :width="200" 
            :height="150" 
            object-fit="cover"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Cover</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Contain" 
            :width="200" 
            :height="150" 
            object-fit="contain"
            rounded="lg"
            class="bg-slate-100"
          />
          <p class="text-xs text-slate-500 mt-2">Contain</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Fill" 
            :width="200" 
            :height="150" 
            object-fit="fill"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Fill</p>
        </div>
      </div>
    `,
  }),
};

export const Rounded = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты скругления углов изображения.',
      },
    },
  },
  render: () => ({
    components: { DXImage },
    template: `
      <div class="flex gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="None" rounded="none" />
          <p class="text-xs text-slate-500 mt-2">None</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="SM" rounded="sm" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="MD" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="LG" rounded="lg" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="Full" rounded="full" />
          <p class="text-xs text-slate-500 mt-2">Full</p>
        </div>
      </div>
    `,
  }),
};

export const LazyLoading = {
  args: {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Lazy loaded image',
    lazy: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Lazy loading изображения. Изображение загружается только при появлении в viewport. Прокрутите вниз, чтобы увидеть загрузку.',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: `
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p class="text-slate-600">Прокрутите вниз для загрузки изображения</p>
        </div>
        <DXImage v-bind="args" :width="800" :height="600" rounded="lg" />
      </div>
    `,
  }),
};

export const WithFallback = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image with fallback',
    fallback: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Fallback',
  },
  parameters: {
    docs: {
      description: {
        story: 'Изображение с fallback. При ошибке загрузки основного изображения автоматически загружается fallback изображение.',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: '<DXImage v-bind="args" :width="400" :height="300" rounded="lg" />',
  }),
};

export const WithCustomFallback = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image with custom fallback',
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомный fallback через slot. Позволяет использовать любой контент в качестве fallback.',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: `
      <DXImage v-bind="args" :width="400" :height="300" rounded="lg">
        <template #fallback>
          <div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center rounded-lg">
            <div class="text-center">
              <p class="text-slate-600 font-medium">Изображение не загружено</p>
              <p class="text-slate-400 text-sm mt-1">Используется кастомный fallback</p>
            </div>
          </div>
        </template>
      </DXImage>
    `,
  }),
};

export const Responsive = {
  args: {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Responsive image',
    srcset: 'https://via.placeholder.com/400x300 400w, https://via.placeholder.com/800x600 800w, https://via.placeholder.com/1200x900 1200w',
    sizes: '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive изображение с srcset и sizes. Браузер автоматически выбирает оптимальное изображение в зависимости от размера экрана и плотности пикселей.',
      },
    },
  },
  render: (args) => ({
    components: { DXImage },
    setup() { return { args }; },
    template: '<DXImage v-bind="args" class="w-full" rounded="lg" />',
  }),
};

