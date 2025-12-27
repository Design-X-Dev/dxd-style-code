# DXDropdownDivider

Разделитель для визуального разделения групп элементов в выпадающих меню.

## Import

```javascript
import { DXDropdownDivider } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `String` | `'default'` | Цвет: `'light'`, `'default'`, `'dark'` |
| `thickness` | `String` | `'default'` | Толщина: `'thin'`, `'default'`, `'thick'` |

## Usage

### Basic

```vue
<DXDropdown>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
  <DXDropdownItem>Пункт 2</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem>Пункт 3</DXDropdownItem>
</DXDropdown>
```

### With Colors

```vue
<DXDropdownDivider color="light" />
<DXDropdownDivider color="default" />
<DXDropdownDivider color="dark" />
```

### With Thickness

```vue
<DXDropdownDivider thickness="thin" />
<DXDropdownDivider thickness="default" />
<DXDropdownDivider thickness="thick" />
```

### In Menu Groups

```vue
<DXDropdown>
  <template #header>
    <span class="text-xs text-slate-500 px-2">Аккаунт</span>
  </template>
  
  <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
  <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
  
  <DXDropdownDivider />
  
  <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
    Выйти
  </DXDropdownItem>
</DXDropdown>
```

## Implementation

Компонент использует `DXDivider` внутри с предустановленными значениями:
- `spacing="none"` - без отступов
- `orientation="horizontal"` - горизонтальная ориентация

## See Also

- [DXDropdown](../organisms/DXDropdown.md)
- [DXDropdownItem](../atoms/DXDropdownItem.md)
- [DXDivider](../atoms/DXDivider.md)
