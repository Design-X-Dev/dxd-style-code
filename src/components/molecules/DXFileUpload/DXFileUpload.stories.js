import DXFileUpload from './DXFileUpload.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFileUpload',
  component: DXFileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXFileUpload

Компонент загрузки файлов с поддержкой drag & drop, предпросмотра и множественного выбора.

## Назначение

DXFileUpload предоставляет полнофункциональный компонент для загрузки файлов с поддержкой
перетаскивания, предпросмотра изображений, множественного выбора и валидации типов/размеров.

## Архитектура

### Использует
- \`DXIcon\` - для иконок загрузки и удаления
- Нативный input type="file" - для выбора файлов

### Используется в
- Загрузка документов
- Загрузка изображений
- Множественная загрузка файлов
- Любые места, требующие загрузку файлов

## Внутренняя логика

### Drag & Drop
Поддерживает перетаскивание файлов:
- Визуальная индикация при наведении (scale, изменение цвета)
- Обработка событий dragenter, dragover, dragleave, drop

### Предпросмотр
Для изображений:
- Автоматически создается preview через FileReader
- Отображается миниатюра 48×48px
- Для других файлов отображается иконка документа

### Множественный выбор
При \`multiple={true}\`:
- Можно выбрать несколько файлов
- Отображается кнопка "Добавить ещё" для добавления дополнительных файлов

### Валидация
- \`accept\` - ограничение типов файлов (например, "image/*", ".pdf")
- \`maxSize\` - максимальный размер файла (отображается в подсказке)

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single: File объект или null
- Для multiple: Array файлов

### События
- \`@change\` - эмитится при изменении файлов

### Удаление файлов
Каждый файл имеет кнопку удаления для удаления из списка.

### Форматирование размера
Размер файла автоматически форматируется в читаемый формат (KB, MB).
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Upload file" />',
  }),
};

export const Multiple = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const files = ref([]);
      return { files };
    },
    template: '<DXFileUpload v-model="files" label="Upload files" multiple />',
  }),
};

export const ImagesOnly = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXFileUpload },
    setup() {
      const file = ref(null);
      return { file };
    },
    template: '<DXFileUpload v-model="file" label="Disabled upload" disabled />',
  }),
};

