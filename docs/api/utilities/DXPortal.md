# DXPortal

Компонент для рендеринга контента в другой части DOM (Teleport).

## Import

```javascript
import { DXPortal } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `to` | `String\|HTMLElement` | `'body'` | Целевой контейнер для рендеринга |
| `disabled` | `Boolean` | `false` | Отключить портал (рендерить на месте) |

### to prop values

- `'body'` - рендеринг в body
- `'#id'` - CSS селектор по ID
- `'.class'` - CSS селектор по классу
- `HTMLElement` - DOM элемент напрямую

## Slots

| Slot | Description |
|------|-------------|
| `default` | Контент для портала |

## Usage

### Basic (to body)

```vue
<DXPortal>
  <DXModal v-if="isOpen">
    <p>Модальное окно</p>
  </DXModal>
</DXPortal>
```

### To Specific Container

```vue
<template>
  <div id="modals-container"></div>
  
  <DXPortal to="#modals-container">
    <DXModal v-if="isOpen">
      <p>Модальное окно в контейнере</p>
    </DXModal>
  </DXPortal>
</template>
```

### Disabled

```vue
<DXPortal :disabled="true">
  <div>Рендерится на месте</div>
</DXPortal>
```

### With Dynamic Target

```vue
<template>
  <DXPortal :to="portalTarget">
    <DXTooltip>Подсказка</DXTooltip>
  </DXPortal>
</template>

<script setup>
import { ref } from 'vue';
const portalTarget = ref('body');
</script>
```

### Use Cases

1. **Модальные окна** - рендеринг поверх всего контента
2. **Тултипы** - избежание проблем с overflow
3. **Dropdown меню** - позиционирование относительно viewport
4. **Уведомления** - глобальный контейнер нотификаций

## Fallback Behavior

Если указанный контейнер не найден, компонент:
1. Выводит предупреждение в консоль
2. Использует `body` как fallback

## See Also

- [DXModal](../organisms/DXModal.md)
- [DXTooltip](../atoms/DXTooltip.md)
- [DXDropdown](../organisms/DXDropdown.md)

