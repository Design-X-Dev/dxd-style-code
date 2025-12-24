# DXWizard

**Категория:** Organism  
**Импорт:** `import { DXWizard } from 'dxd-style-code'`

## Назначение

Мастер настройки с шагами, валидацией и возможностью сохранения прогресса. Отличается от DXFormWizard более общим назначением (не только для форм, но и для любых пошаговых процессов).

## Props

| Prop | Тип | По умолчанию | Описание |
|------|-----|--------------|----------|
| `steps` | `Array` | **required** | Шаги мастера: `[{ title, description?, schema?, fields? }]` |
| `currentStep` | `number` | `1` | Текущий шаг (начинается с 1) (v-model) |
| `wizardData` | `Object` | `{}` | Данные мастера (v-model) |
| `validationErrors` | `Object` | `{}` | Ошибки валидации: `{ [field]: 'error message' }` |
| `allowSkip` | `boolean` | `false` | Разрешить пропуск шагов |
| `saveProgressEnabled` | `boolean` | `false` | Сохранять прогресс |
| `storageKey` | `string` | `'dx-wizard-progress'` | Ключ для сохранения в localStorage |
| `loading` | `boolean` | `false` | Состояние загрузки |
| `showProgress` | `boolean` | `true` | Показывать индикатор прогресса |
| `showProgressLabel` | `boolean` | `true` | Показывать метку прогресса |
| `showStepsIndicator` | `boolean` | `true` | Показывать индикатор шагов |
| `transition` | `string` | `'fade'` | Имя transition |

## Events

| Event | Параметры | Описание |
|-------|-----------|----------|
| `update:currentStep` | `number` | Обновление текущего шага |
| `update:wizardData` | `Object` | Обновление данных мастера |
| `next` | `{ step, data }` | Переход к следующему шагу |
| `prev` | `{ step, data }` | Переход к предыдущему шагу |
| `complete` | `{ data }` | Завершение мастера |
| `cancel` | - | Отмена мастера |
| `step-change` | `{ from, to }` | Изменение шага |
| `save-progress` | `{ step, data }` | Сохранение прогресса |

## Slots

| Slot | Параметры | Описание |
|------|-----------|----------|
| `step-[number]` | `{ step, stepIndex, formData, errors }` | Контент шага (например, step-1, step-2) |
| `navigation` | `{ canGoNext, canGoPrev, goNext, goPrev, goToStep, currentStep, totalSteps, save, cancel }` | Кастомная навигация |

## Примеры использования

### Базовый мастер

```vue
<template>
  <DXWizard
    :steps="steps"
    v-model:current-step="currentStep"
    v-model:wizard-data="wizardData"
    @complete="handleComplete"
  >
    <template #step-1>
      <div>Шаг 1: Введение</div>
    </template>
    <template #step-2>
      <div>Шаг 2: Настройки</div>
    </template>
  </DXWizard>
</template>

<script setup>
const steps = [
  { title: 'Введение', description: 'Добро пожаловать' },
  { title: 'Настройки', description: 'Настройте параметры' },
  { title: 'Завершение', description: 'Проверьте и завершите' },
];
</script>
```

### Мастер с сохранением прогресса

```vue
<template>
  <DXWizard
    :steps="steps"
    :save-progress-enabled="true"
    storage-key="my-wizard-progress"
    @save-progress="handleSaveProgress"
  >
    <!-- Шаги -->
  </DXWizard>
</template>
```

## Особенности

- **Сохранение прогресса:** При `saveProgressEnabled={true}` прогресс сохраняется в localStorage
- **Валидация:** Поддерживает валидацию через prop `validationErrors`
- **Навигация:** Можно переходить между шагами, пропускать опциональные шаги
- **Отличие от DXFormWizard:** DXWizard более общий компонент для любых пошаговых процессов, а не только для форм

## Использует

- `DXProgress` - для индикатора прогресса
- `DXButton` - для навигации
- `DXIcon` - для иконок
- `useClassComposition` - для стилей
- `useSpacing` - для отступов

## Используется в

- Первоначальная настройка приложения
- Мастер импорта данных
- Пошаговая настройка сложных процессов
- Онбординг новых пользователей

