import DXInputMask from './DXInputMask.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXInputMask',
  component: DXInputMask,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# DXInputMask

Компонент поля ввода с маской для форматирования ввода (телефоны, карты, даты и т.д.).

## Назначение

DXInputMask предоставляет способ форматирования ввода данных по заданной маске.
Компонент автоматически применяет маску при вводе и извлекает сырое значение для v-model.

## Архитектура

### Использует
- Нативный input - для ввода текста
- Логика маскирования - для форматирования

### Используется в
- Ввод телефонов
- Ввод номеров карт
- Ввод дат в определенном формате
- Ввод SSN и других форматов
- Любые места, требующие форматированный ввод

## Внутренняя логика

### Маска
Маска задается через \`mask\` prop:
- \`#\` - цифра (0-9)
- Любые другие символы - статичные символы маски

Примеры:
- \`"+7 (###) ###-##-##"\` - телефон
- \`"#### #### #### ####"\` - номер карты
- \`"##/##/####"\` - дата

### Форматирование
- При вводе автоматически применяется маска
- Извлекаются только цифры для v-model
- Статичные символы маски добавляются автоматически

### Валидация ввода
- Разрешаются только цифры (для масок с #)
- Служебные клавиши (Backspace, Delete, стрелки) разрешены
- Остальные символы блокируются

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Значение содержит только цифры (без форматирования)
- При установке значения автоматически применяется маска

### Позиция курсора
Курсор автоматически позиционируется в конец введенного текста.

### Примеры масок
- Телефон: \`"+7 (###) ###-##-##"\`
- Карта: \`"#### #### #### ####"\`
- Дата: \`"##/##/####"\`
- SSN: \`"###-##-####"\`
        `,
      },
    },
  },
};

export const Phone = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const phone = ref('');
      return { phone };
    },
    template: '<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />',
  }),
};

export const CreditCard = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const card = ref('');
      return { card };
    },
    template: '<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />',
  }),
};

export const Date = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const date = ref('');
      return { date };
    },
    template: '<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />',
  }),
};

export const SSN = {
  render: () => ({
    components: { DXInputMask },
    setup() {
      const ssn = ref('');
      return { ssn };
    },
    template: '<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />',
  }),
};

