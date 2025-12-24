import DXDatePicker from './DXDatePicker.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXDatePicker',
  component: DXDatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXDatePicker

Компонент выбора даты с поддержкой одиночной даты и диапазона дат.

## Назначение

DXDatePicker предоставляет стандартизированный способ выбора даты или диапазона дат.
Компонент использует нативный input type="date" для одиночной даты и кастомный интерфейс
для выбора диапазона.

## Архитектура

### Использует
- Нативный input type="date" - для одиночной даты
- Кастомный интерфейс - для диапазона дат

### Используется в
- Формы с датами
- Фильтры по датам
- Календари событий
- Любые места, требующие выбор даты

## Внутренняя логика

### Режимы
- **single** (по умолчанию): Выбор одной даты
- **range**: Выбор диапазона дат (от и до)

### Формат значений
- **single**: Строка в формате YYYY-MM-DD
- **range**: Объект \`{ start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' }\`

### Отображение диапазона
При range режиме:
- Отображается форматированная строка "DD.MM.YYYY - DD.MM.YYYY"
- При клике открывается календарь с двумя полями (от/до)
- Кнопки "Применить" и "Отмена" для подтверждения выбора

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single: String (YYYY-MM-DD)
- Для range: Object ({ start, end })

### Форматирование
Даты форматируются в локализованном формате (ru-RU) для отображения.

### Иконка календаря
Отображается иконка календаря справа от поля для визуальной индикации.
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Date" />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('2024-01-15');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Selected Date" />',
  }),
};

export const WithPlaceholder = {
  render: () => ({
    components: { DXDatePicker },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />',
  }),
};

