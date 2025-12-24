import DXSkeleton from './DXSkeleton.vue';

export default {
  title: 'Atoms/DXSkeleton',
  component: DXSkeleton,
  tags: ['autodocs', 'category:feedback'],
  parameters: {
    docs: {
      description: {
        component: `
# DXSkeleton

Компонент скелетона для отображения placeholder контента во время загрузки.

## Назначение

DXSkeleton предоставляет стандартизированный способ отображения placeholder контента
во время загрузки данных. Компонент использует анимацию пульсации для визуального
указания на загрузку.

## Архитектура

### Использует
- CSS анимация \`animate-pulse\` - для эффекта пульсации

### Используется в
- Карточки товаров при загрузке
- Списки элементов при загрузке
- Профили пользователей при загрузке
- Любые места, требующие placeholder во время загрузки

## Внутренняя логика

### Визуальное оформление
- Серый фон (\`bg-slate-200\`)
- Анимация пульсации (\`animate-pulse\`)
- Настраиваемые размеры через \`width\` и \`height\` props
- Настраиваемое скругление через \`rounded\` prop

### Размеры
Размеры настраиваются через props:
- \`width\` - ширина (по умолчанию "100%")
- \`height\` - высота (по умолчанию "1rem")
- \`rounded\` - скругление (по умолчанию "rounded-md")

## Особенности

### Гибкость
Компонент полностью настраивается через props и CSS классы:
- Можно задать любые размеры
- Можно задать любую форму (круг, квадрат, прямоугольник)
- Можно комбинировать несколько скелетонов для создания сложных placeholder

### Примеры использования
- **Текст**: \`<DXSkeleton class="h-4 w-48" />\`
- **Круг**: \`<DXSkeleton class="h-12 w-12 rounded-full" />\`
- **Карточка**: Комбинация нескольких скелетонов

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов.
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXSkeleton },
    template: '<DXSkeleton class="h-4 w-48" />',
  }),
};

export const Circle = {
  render: () => ({
    components: { DXSkeleton },
    template: '<DXSkeleton class="h-12 w-12 rounded-full" />',
  }),
};

export const Card = {
  render: () => ({
    components: { DXSkeleton },
    template: `
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    `,
  }),
};

export const Avatar = {
  render: () => ({
    components: { DXSkeleton },
    template: `
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    `,
  }),
};

