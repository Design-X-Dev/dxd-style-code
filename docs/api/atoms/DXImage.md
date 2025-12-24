# DXImage

**Категория:** Atom  
**Импорт:** `import { DXImage } from 'dxd-style-code'`

## Назначение

Компонент изображения с поддержкой lazy loading, fallback изображений и адаптивных размеров.

## Props

| Prop           | Тип                                                        | По умолчанию | Описание                                  |
| -------------- | ---------------------------------------------------------- | ------------ | ----------------------------------------- |
| `src`          | `string`                                                   | **required** | URL изображения                           |
| `alt`          | `string`                                                   | `''`         | Alt текст                                 |
| `fallback`     | `string`                                                   | -            | URL fallback изображения                  |
| `size`         | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`           | `'md'`       | Размер изображения                        |
| `objectFit`    | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'cover'`    | Способ заполнения контейнера              |
| `rounded`      | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`         | `'none'`     | Скругление углов                          |
| `lazy`         | `boolean`                                                  | `false`      | Lazy loading                              |
| `srcset`       | `string`                                                   | -            | Атрибут srcset для адаптивных изображений |
| `sizes`        | `string`                                                   | -            | Атрибут sizes для адаптивных изображений  |
| `width`        | `string \| number`                                         | -            | Ширина изображения                        |
| `height`       | `string \| number`                                         | -            | Высота изображения                        |
| `showSkeleton` | `boolean`                                                  | `true`       | Показывать скелетон при lazy loading      |

## Slots

| Slot          | Описание                               |
| ------------- | -------------------------------------- |
| `fallback`    | Кастомный fallback контент             |
| `placeholder` | Кастомный placeholder при lazy loading |

## Примеры использования

### Базовое изображение

```vue
<template>
  <DXImage src="/image.jpg" alt="Описание" />
</template>
```

### Изображение с fallback

```vue
<template>
  <DXImage src="/image.jpg" fallback="/fallback.jpg" alt="Описание" />
</template>
```

### Lazy loading

```vue
<template>
  <DXImage src="/image.jpg" :lazy="true" alt="Описание" />
</template>
```

### Адаптивное изображение

```vue
<template>
  <DXImage
    src="/image.jpg"
    srcset="/image-400.jpg 400w, /image-800.jpg 800w"
    sizes="(max-width: 600px) 400px, 800px"
    alt="Описание"
  />
</template>
```

## Особенности

- **Lazy loading:** Поддерживает отложенную загрузку через Intersection Observer
- **Fallback:** Автоматически показывает fallback изображение при ошибке загрузки
- **Адаптивность:** Поддерживает srcset и sizes для адаптивных изображений
- **Скелетон:** Показывает placeholder при lazy loading

## Использует

- `DXObserver` - для lazy loading
- `DXIcon` - для fallback иконки

## Используется в

- Галереи изображений
- Карточки товаров
- Аватары и профили
- Медиа контент
