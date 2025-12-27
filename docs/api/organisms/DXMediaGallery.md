# DXMediaGallery

Галерея изображений и медиафайлов с lightbox.

## Import

```javascript
import { DXMediaGallery } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `[]` | Список медиафайлов |
| `columns` | `Number` | `4` | Количество колонок |
| `gap` | `String` | `'md'` | Отступы: `'sm'`, `'md'`, `'lg'` |
| `aspectRatio` | `String` | `'square'` | Соотношение сторон: `'square'`, `'video'`, `'portrait'`, `'auto'` |
| `lightbox` | `Boolean` | `true` | Включить lightbox |
| `selectable` | `Boolean` | `false` | Режим выбора |
| `selected` | `Array` | `[]` | Выбранные элементы (v-model) |
| `maxSelect` | `Number` | `0` | Максимум выбранных (0 = неограничено) |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Media Item Structure

```typescript
interface MediaItem {
  id: string | number;
  src: string;              // URL изображения
  thumbnail?: string;       // URL превью
  alt?: string;             // Alt текст
  title?: string;           // Заголовок
  type?: 'image' | 'video'; // Тип медиа
  metadata?: {
    size?: string;
    dimensions?: string;
    date?: string;
  };
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:selected` | `Array` | Изменение выбора |
| `item-click` | `MediaItem` | Клик по элементу |
| `lightbox-open` | `number` | Открытие lightbox (индекс) |
| `lightbox-close` | - | Закрытие lightbox |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `item` | `{ item, index, selected }` | Кастомный элемент |
| `overlay` | `{ item }` | Overlay на элементе |
| `empty` | - | Пустое состояние |

## Usage

### Basic

```vue
<DXMediaGallery
  :items="[
    { id: 1, src: '/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image3.jpg', alt: 'Image 3' }
  ]"
/>
```

### With Thumbnails

```vue
<DXMediaGallery
  :items="[
    { id: 1, src: '/full/image1.jpg', thumbnail: '/thumb/image1.jpg' },
    { id: 2, src: '/full/image2.jpg', thumbnail: '/thumb/image2.jpg' }
  ]"
/>
```

### Custom Columns

```vue
<DXMediaGallery
  :items="images"
  :columns="6"
  gap="sm"
/>
```

### Aspect Ratios

```vue
<DXMediaGallery :items="images" aspectRatio="square" />   <!-- 1:1 -->
<DXMediaGallery :items="images" aspectRatio="video" />    <!-- 16:9 -->
<DXMediaGallery :items="images" aspectRatio="portrait" /> <!-- 3:4 -->
<DXMediaGallery :items="images" aspectRatio="auto" />     <!-- Оригинальное -->
```

### Selectable

```vue
<DXMediaGallery
  v-model:selected="selectedImages"
  :items="images"
  selectable
  :maxSelect="5"
/>
```

### Without Lightbox

```vue
<DXMediaGallery
  :items="images"
  :lightbox="false"
  @item-click="handleImageClick"
/>
```

### With Overlay

```vue
<DXMediaGallery :items="images">
  <template #overlay="{ item }">
    <div class="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white">
      {{ item.title }}
    </div>
  </template>
</DXMediaGallery>
```

### Loading State

```vue
<DXMediaGallery
  :items="images"
  :loading="isLoading"
/>
```

### Image Picker

```vue
<template>
  <div>
    <DXMediaGallery
      v-model:selected="selectedImages"
      :items="availableImages"
      selectable
      :maxSelect="3"
    />
    
    <div class="mt-4">
      <p>Выбрано: {{ selectedImages.length }} / 3</p>
      <DXButton @click="confirmSelection">Выбрать</DXButton>
    </div>
  </div>
</template>
```

### Product Gallery

```vue
<div class="flex gap-4">
  <DXMediaGallery
    :items="productImages"
    :columns="1"
    aspectRatio="auto"
    class="w-16"
    :lightbox="false"
    @item-click="setMainImage"
  />
  
  <div class="flex-1">
    <img :src="mainImage" class="w-full rounded-xl" />
  </div>
</div>
```

## Lightbox Features

- Клавиатурная навигация (←, →, Escape)
- Свайпы на мобильных
- Зум
- Счётчик изображений

## See Also

- [DXFileUpload](../molecules/DXFileUpload.md)
- [DXModal](./DXModal.md)

