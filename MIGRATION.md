# Migration Guide - DX Components v0.2.0

Это руководство поможет вам перейти на новую версию библиотеки с интегрированными Heroicons.

## 🎯 Основные изменения

### 1. Интеграция Heroicons

Библиотека теперь использует `@heroicons/vue` для всех иконок:
- ✅ Единообразный стиль иконок
- ✅ Анимации при hover
- ✅ Улучшенная доступность
- ✅ Меньше дублирования кода

### 2. Новые компоненты

**DXIcon** - базовый компонент для отображения иконок с анимацией:
```vue
<DXIcon :icon="HeartIcon" size="md" animation="scale" />
```

**DXCloseButton** - унифицированная кнопка закрытия:
```vue
<DXCloseButton @click="close" size="md" variant="default" />
```

**DXValidationIcon** - иконки для состояний валидации:
```vue
<DXValidationIcon state="success" size="md" />
```

### 3. Переименованные компоненты

| Старое название | Новое название | Примечание |
|----------------|----------------|------------|
| `DXTagsList` | `DXTags` | Старый импорт работает через alias |
| `DXInputGroupAddon` | `DXInputAddon` | Старый импорт работает через alias |
| `DXDropdownDivider` | Используйте `DXDivider` | Старый импорт работает через alias |

**Миграция:**
```vue
<!-- До -->
<DXTagsList :tags="tags" />
<DXInputGroupAddon>$</DXInputGroupAddon>

<!-- После -->
<DXTags :tags="tags" />
<DXInputAddon>$</DXInputAddon>
```

### 4. Удаленные компоненты

**DXFormError** - удален, используйте `error` prop:
```vue
<!-- До -->
<DXFormError message="Поле обязательно" />

<!-- После -->
<DXInput error="Поле обязательно" />
<DXFormControl error="Поле обязательно">
  <input />
</DXFormControl>
```

**DXFormField** - удален, используйте `DXFormControl`:
```vue
<!-- До -->
<DXFormField label="Email" error="Неверный email">
  <input />
</DXFormField>

<!-- После -->
<DXFormControl label="Email" error="Неверный email">
  <input />
</DXFormControl>
```

## 🔄 Обновление компонентов

### DXInput

Добавлена поддержка иконок:
```vue
<DXInput 
  v-model="search"
  :prefix-icon="MagnifyingGlassIcon"
  placeholder="Поиск..."
/>
```

### DXButton

Теперь использует DXIcon для анимаций:
```vue
<DXButton>
  <DXIcon :icon="PlusIcon" size="sm" />
  Добавить
</DXButton>
```

### DXAlert

Автоматические иконки для каждого variant:
```vue
<!-- Иконка добавляется автоматически -->
<DXAlert variant="success" title="Успешно">
  Данные сохранены
</DXAlert>

<!-- Отключить иконку -->
<DXAlert variant="info" :show-icon="false">
  Без иконки
</DXAlert>

<!-- Кастомная иконка -->
<DXAlert variant="info" :icon="CustomIcon">
  С кастомной иконкой
</DXAlert>
```

### DXToast

Иконки добавляются автоматически:
```vue
<DXToast variant="success">
  Успешно сохранено
</DXToast>
```

### DXPasswordInput

Обновлены иконки показа/скрытия пароля:
```vue
<!-- Без изменений в API -->
<DXPasswordInput v-model="password" />
```

### DXModal, DXDropdown, DXAccordion

Кнопка закрытия заменена на `DXCloseButton`, иконки - на Heroicons. API без изменений.

## 📦 Установка зависимостей

`@heroicons/vue` теперь в dependencies (автоматически установится):
```bash
npm install dx-components@latest
# или
yarn add dx-components@latest
```

## 🎨 Использование иконок

### Импорт иконок

```javascript
import { 
  HeartIcon, 
  StarIcon, 
  BellIcon 
} from '@heroicons/vue/24/outline';

import { 
  HeartIcon as HeartIconSolid 
} from '@heroicons/vue/24/solid';
```

### Icon Presets

Используйте готовые пресеты:
```vue
<script setup>
import { IconPresets } from 'dx-components/atoms/DXIcon/presets';
</script>

<template>
  <DXIcon v-bind="IconPresets.close" />
  <DXIcon v-bind="IconPresets.success" />
  <DXIcon v-bind="IconPresets.edit" />
</template>
```

### Composables

Хелперы для работы с иконками:
```javascript
import { useVariantIcon, useVariantColor } from 'dx-components/composables/useIcon';

const icon = useVariantIcon('success'); // CheckCircleIcon
const color = useVariantColor('success'); // 'text-emerald-500'
```

## 🎯 Размеры иконок

```vue
<DXIcon :icon="HeartIcon" size="xs" /> <!-- 12x12 -->
<DXIcon :icon="HeartIcon" size="sm" /> <!-- 16x16 -->
<DXIcon :icon="HeartIcon" size="md" /> <!-- 20x20 -->
<DXIcon :icon="HeartIcon" size="lg" /> <!-- 24x24 -->
<DXIcon :icon="HeartIcon" size="xl" /> <!-- 32x32 -->
```

## ✨ Анимации

```vue
<DXIcon :icon="HeartIcon" animation="none" />   <!-- Без анимации -->
<DXIcon :icon="HeartIcon" animation="wiggle" /> <!-- Тряска -->
<DXIcon :icon="HeartIcon" animation="scale" />  <!-- Увеличение -->
<DXIcon :icon="HeartIcon" animation="rotate" /> <!-- Поворот -->
```

## 🔧 Troubleshooting

### Проблема: "Cannot find module '@heroicons/vue'"

**Решение:** Переустановите зависимости:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Проблема: Старые импорты не работают

**Решение:** Обновите импорты на новые названия:
```javascript
// До
import { DXTagsList, DXFormError } from 'dx-components';

// После
import { DXTags } from 'dx-components';
// DXFormError удален, используйте error prop
```

### Проблема: Иконки не отображаются

**Решение:** Проверьте, что вы импортировали компонент иконки:
```vue
<script setup>
import { HeartIcon } from '@heroicons/vue/24/outline';
import DXIcon from 'dx-components/atoms/DXIcon';
</script>

<template>
  <DXIcon :icon="HeartIcon" />
</template>
```

## 📚 Дополнительные ресурсы

- [Heroicons Gallery](https://heroicons.com/) - все доступные иконки
- [Storybook](http://localhost:6006) - примеры использования компонентов
- [GitHub Issues](https://github.com/your-repo/issues) - сообщить о проблеме

## ⚡ Breaking Changes

1. **DXFormError удален** - используйте `error` prop в компонентах форм
2. **DXFormField удален** - используйте `DXFormControl`
3. **DXDropdownDivider удален** - используйте `DXDivider`
4. **@heroicons/vue** теперь обязательная зависимость

## 🎉 Новые возможности

- **Анимированные иконки** во всех интерактивных элементах
- **Icon presets** для быстрого использования
- **useIcon composables** для программной работы с иконками
- **Улучшенная композиция** компонентов
- **Меньше дублирования кода** (~30% сокращение)

---

**Версия:** 0.2.0  
**Дата:** December 2024

Если у вас возникли вопросы или проблемы с миграцией, создайте issue в GitHub.

