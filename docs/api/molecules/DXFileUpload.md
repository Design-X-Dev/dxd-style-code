# DXFileUpload

Компонент для загрузки файлов с поддержкой drag-and-drop и предпросмотра.

## Import

```javascript
import { DXFileUpload } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Array` | `[]` | Загруженные файлы (v-model) |
| `accept` | `String` | `''` | Допустимые типы файлов (MIME или расширения) |
| `multiple` | `Boolean` | `false` | Разрешить множественный выбор |
| `maxFiles` | `Number` | `10` | Максимум файлов |
| `maxSize` | `Number` | `5242880` | Максимальный размер файла (в байтах, default 5MB) |
| `disabled` | `Boolean` | `false` | Отключенное состояние |
| `label` | `String` | `''` | Лейбл поля |
| `helper` | `String` | `''` | Вспомогательный текст |
| `error` | `String` | `''` | Текст ошибки |
| `required` | `Boolean` | `false` | Обязательное поле |
| `showPreview` | `Boolean` | `true` | Показывать превью изображений |
| `showFileList` | `Boolean` | `true` | Показывать список файлов |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'button'` |
| `dropzoneText` | `String` | `'Перетащите файлы...'` | Текст в зоне drag-drop |
| `browseText` | `String` | `'Выбрать файлы'` | Текст кнопки выбора |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Array` | Изменение списка файлов |
| `upload` | `File[]` | Новые файлы добавлены |
| `remove` | `{ file, index }` | Файл удалён |
| `error` | `{ type, file, message }` | Ошибка валидации |
| `preview` | `File` | Клик по превью файла |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `dropzone` | `{ isDragActive }` | Кастомная зона drop |
| `file` | `{ file, index, remove }` | Кастомный рендер файла |
| `preview` | `{ file }` | Кастомное превью |

## Usage

### Basic

```vue
<DXFileUpload
  v-model="files"
  label="Загрузите документы"
/>
```

### Image Upload

```vue
<DXFileUpload
  v-model="images"
  accept="image/*"
  multiple
  :maxSize="10485760"
  label="Загрузите изображения"
  helper="PNG, JPG до 10MB"
/>
```

### Single File

```vue
<DXFileUpload
  v-model="document"
  accept=".pdf,.doc,.docx"
  label="Загрузите резюме"
  helper="PDF или Word документ"
/>
```

### With Validation

```vue
<DXFileUpload
  v-model="files"
  accept="image/png,image/jpeg"
  :maxSize="2097152"
  :maxFiles="5"
  :error="errors.files"
  @error="handleUploadError"
/>

<script setup>
function handleUploadError({ type, file, message }) {
  if (type === 'size') {
    showToast(`Файл ${file.name} слишком большой`);
  } else if (type === 'type') {
    showToast(`Неподдерживаемый тип файла`);
  } else if (type === 'count') {
    showToast('Превышен лимит файлов');
  }
}
</script>
```

### Compact Variant

```vue
<DXFileUpload
  v-model="avatar"
  variant="compact"
  accept="image/*"
  label="Аватар"
/>
```

### Button Variant

```vue
<DXFileUpload
  v-model="files"
  variant="button"
  browseText="Прикрепить файлы"
/>
```

### Custom Dropzone

```vue
<DXFileUpload v-model="files">
  <template #dropzone="{ isDragActive }">
    <div :class="['p-8 border-2 border-dashed rounded-xl text-center', 
                  isDragActive ? 'border-blue-500 bg-blue-50' : 'border-slate-300']">
      <DXIcon :icon="CloudArrowUpIcon" size="xl" class="mb-2" />
      <p>{{ isDragActive ? 'Отпустите файлы' : 'Перетащите файлы сюда' }}</p>
    </div>
  </template>
</DXFileUpload>
```

### Custom File List

```vue
<DXFileUpload v-model="files" :showFileList="false">
  <template #file="{ file, index, remove }">
    <div class="flex items-center gap-2 p-2 bg-slate-100 rounded">
      <DXIcon :icon="DocumentIcon" />
      <span class="flex-1">{{ file.name }}</span>
      <span class="text-xs text-slate-500">
        {{ (file.size / 1024).toFixed(1) }} KB
      </span>
      <DXCloseButton size="xs" @click="remove" />
    </div>
  </template>
</DXFileUpload>
```

## Error Types

| Type | Description |
|------|-------------|
| `size` | Файл превышает maxSize |
| `type` | Файл не соответствует accept |
| `count` | Превышен лимит maxFiles |

## See Also

- [DXInput](./DXInput.md)
- [DXFormControl](./DXFormControl.md)
- [DXProgress](../atoms/DXProgress.md)

