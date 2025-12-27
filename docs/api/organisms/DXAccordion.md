# DXAccordion

Компонент раскрывающихся панелей (аккордеон).

## Import

```javascript
import { DXAccordion } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array` | `required` | Элементы: `[{ title, content?, icon? }]` |
| `multiple` | `Boolean` | `false` | Разрешить несколько открытых панелей |
| `defaultOpen` | `Array` | `[]` | Изначально открытые индексы |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'bordered'`, `'separated'` |

## Items Structure

```typescript
interface AccordionItem {
  title: string;       // Заголовок панели
  content?: string;    // Текстовое содержимое
  icon?: Component;    // Иконка в заголовке
}
```

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `item-{index}` | - | Кастомный контент для панели по индексу |

## Usage

### Basic

```vue
<DXAccordion
  :items="[
    { title: 'Что такое Vue?', content: 'Vue.js — это прогрессивный фреймворк...' },
    { title: 'Что такое Vite?', content: 'Vite — это инструмент сборки...' },
    { title: 'Что такое Tailwind?', content: 'Tailwind CSS — это utility-first...' }
  ]"
/>
```

### Multiple Open

```vue
<DXAccordion
  :items="items"
  multiple
/>
```

### Default Open Items

```vue
<DXAccordion
  :items="items"
  :defaultOpen="[0, 2]"
/>
```

### Variants

```vue
<DXAccordion :items="items" variant="default" />
<DXAccordion :items="items" variant="bordered" />
<DXAccordion :items="items" variant="separated" />
```

### With Icons

```vue
<DXAccordion
  :items="[
    { title: 'Доставка', content: '...', icon: TruckIcon },
    { title: 'Оплата', content: '...', icon: CreditCardIcon },
    { title: 'Возврат', content: '...', icon: ArrowPathIcon }
  ]"
/>
```

### Custom Content Slot

```vue
<DXAccordion :items="items">
  <template #item-0>
    <div class="space-y-4">
      <p>Кастомный контент с разметкой</p>
      <DXButton>Действие</DXButton>
    </div>
  </template>
</DXAccordion>
```

### FAQ Example

```vue
<DXAccordion
  :items="faqItems"
  variant="bordered"
/>

<script setup>
const faqItems = [
  {
    title: 'Как оформить заказ?',
    content: 'Добавьте товары в корзину и перейдите к оформлению...'
  },
  {
    title: 'Какие способы оплаты доступны?',
    content: 'Мы принимаем банковские карты, электронные кошельки...'
  },
  {
    title: 'Как отследить заказ?',
    content: 'После отправки заказа вы получите трек-номер...'
  }
];
</script>
```

## Animations

Использует `useTransition('collapse')` для плавной анимации открытия/закрытия.

## Accessibility

- `aria-expanded` на кнопках заголовков
- Клавиатурная навигация (Enter, Space)

## See Also

- [DXTabs](./DXTabs.md)
- [DXCard](../atoms/DXCard.md)

