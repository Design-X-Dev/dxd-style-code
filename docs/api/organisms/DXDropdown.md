# DXDropdown

Выпадающее меню с поддержкой клавиатурной навигации.

## Import

```javascript
import { DXDropdown, DXDropdownItem, DXDropdownDivider } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `position` | `String` | `'right'` | Позиция: `'left'`, `'right'`, `'center'` |
| `width` | `String` | `'md'` | Ширина: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'auto'` |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'minimal'` |
| `offset` | `Number` | `8` | Отступ от trigger (px) |
| `disabled` | `Boolean` | `false` | Отключить dropdown |
| `showChevron` | `Boolean` | `true` | Показать стрелочку |

## Slots

| Slot | Description |
|------|-------------|
| `trigger` | Кнопка-триггер |
| `default` | Содержимое меню (DXDropdownItem) |

## Usage

### Basic

```vue
<DXDropdown>
  <template #trigger>
    Меню
  </template>
  
  <DXDropdownItem>Профиль</DXDropdownItem>
  <DXDropdownItem>Настройки</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem variant="danger">Выйти</DXDropdownItem>
</DXDropdown>
```

### With Icons

```vue
<DXDropdown>
  <template #trigger>
    <DXIcon :icon="EllipsisVerticalIcon" />
  </template>
  
  <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
  <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
  <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
</DXDropdown>
```

### Position

```vue
<DXDropdown position="left">
  <template #trigger>Влево</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>

<DXDropdown position="center">
  <template #trigger>По центру</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>

<DXDropdown position="right">
  <template #trigger>Вправо</template>
  <DXDropdownItem>Пункт 1</DXDropdownItem>
</DXDropdown>
```

### Widths

```vue
<DXDropdown width="sm"><!-- 192px --></DXDropdown>
<DXDropdown width="md"><!-- 224px --></DXDropdown>
<DXDropdown width="lg"><!-- 288px --></DXDropdown>
<DXDropdown width="xl"><!-- 384px --></DXDropdown>
<DXDropdown width="auto"><!-- auto --></DXDropdown>
```

### Without Chevron

```vue
<DXDropdown :showChevron="false">
  <template #trigger>
    <DXButton variant="ghost" size="sm">
      <DXIcon :icon="DotsVerticalIcon" />
    </DXButton>
  </template>
  
  <DXDropdownItem>Действие 1</DXDropdownItem>
  <DXDropdownItem>Действие 2</DXDropdownItem>
</DXDropdown>
```

### User Menu

```vue
<DXDropdown position="right" width="md">
  <template #trigger>
    <div class="flex items-center gap-2">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <span>Иван Иванов</span>
    </div>
  </template>
  
  <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
  <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
  <DXDropdownItem :icon="BellIcon">Уведомления</DXDropdownItem>
  <DXDropdownDivider />
  <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
    Выйти
  </DXDropdownItem>
</DXDropdown>
```

### With Descriptions

```vue
<DXDropdown width="lg">
  <template #trigger>Создать</template>
  
  <DXDropdownItem :icon="DocumentIcon">
    <div>
      <div class="font-medium">Документ</div>
      <div class="text-xs text-slate-500">Создать новый документ</div>
    </div>
  </DXDropdownItem>
  
  <DXDropdownItem :icon="FolderIcon">
    <div>
      <div class="font-medium">Папка</div>
      <div class="text-xs text-slate-500">Создать новую папку</div>
    </div>
  </DXDropdownItem>
</DXDropdown>
```

### Disabled

```vue
<DXDropdown disabled>
  <template #trigger>Отключено</template>
  <DXDropdownItem>Недоступно</DXDropdownItem>
</DXDropdown>
```

## Keyboard Navigation

- `↓` / `↑` - навигация по пунктам
- `Enter` / `Space` - выбор пункта
- `Escape` - закрыть

## Provide/Inject

DXDropdown предоставляет контекст для дочерних компонентов:
- `dropdown.close()` - закрыть dropdown
- `dropdown.isOpen` - состояние открытия

## See Also

- [DXDropdownItem](../atoms/DXDropdownItem.md)
- [DXDropdownDivider](../molecules/DXDropdownDivider.md)
- [DXMenu](../molecules/DXMenu.md)

