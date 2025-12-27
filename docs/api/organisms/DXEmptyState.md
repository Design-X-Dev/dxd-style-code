# DXEmptyState

Компонент для отображения пустого состояния с иконкой, текстом и действием.

## Import

```javascript
import { DXEmptyState } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `Object\|Function` | `required` | Иконка (HeroIcon) |
| `title` | `String` | `required` | Заголовок |
| `description` | `String` | `''` | Описание |
| `animated` | `Boolean` | `false` | Анимация иконки |

## Slots

| Slot | Description |
|------|-------------|
| `action` | Кнопка или ссылка для действия |

## Usage

### Basic

```vue
<DXEmptyState
  :icon="InboxIcon"
  title="Нет сообщений"
  description="Ваш почтовый ящик пуст"
/>
```

### With Action

```vue
<DXEmptyState
  :icon="FolderPlusIcon"
  title="Нет проектов"
  description="Создайте свой первый проект"
>
  <template #action>
    <DXButton @click="createProject">
      Создать проект
    </DXButton>
  </template>
</DXEmptyState>
```

### With Animation

```vue
<DXEmptyState
  :icon="MagnifyingGlassIcon"
  title="Ничего не найдено"
  description="Попробуйте изменить параметры поиска"
  animated
/>
```

### In Table

```vue
<DXTable :data="data" :columns="columns">
  <template #empty>
    <DXEmptyState
      :icon="TableCellsIcon"
      title="Нет данных"
      description="Таблица пуста"
    />
  </template>
</DXTable>
```

### Search Results

```vue
<DXEmptyState
  :icon="DocumentMagnifyingGlassIcon"
  title="По запросу ничего не найдено"
  :description="`Результаты по запросу '${searchQuery}' отсутствуют`"
>
  <template #action>
    <DXButton variant="ghost" @click="clearSearch">
      Сбросить поиск
    </DXButton>
  </template>
</DXEmptyState>
```

### Error State

```vue
<DXEmptyState
  :icon="ExclamationTriangleIcon"
  title="Произошла ошибка"
  description="Не удалось загрузить данные"
>
  <template #action>
    <DXButton @click="retry">
      Повторить
    </DXButton>
  </template>
</DXEmptyState>
```

### No Access

```vue
<DXEmptyState
  :icon="LockClosedIcon"
  title="Доступ запрещён"
  description="У вас нет прав для просмотра этой страницы"
>
  <template #action>
    <DXLink to="/dashboard">Вернуться на главную</DXLink>
  </template>
</DXEmptyState>
```

### Different Icons

```vue
<!-- Пустая корзина -->
<DXEmptyState
  :icon="ShoppingCartIcon"
  title="Корзина пуста"
  description="Добавьте товары для оформления заказа"
/>

<!-- Нет уведомлений -->
<DXEmptyState
  :icon="BellSlashIcon"
  title="Нет уведомлений"
  description="Все уведомления прочитаны"
/>

<!-- Нет комментариев -->
<DXEmptyState
  :icon="ChatBubbleLeftIcon"
  title="Нет комментариев"
  description="Будьте первым, кто оставит комментарий"
/>
```

## Animation

При `animated="true"` иконка плавно покачивается для привлечения внимания.

## See Also

- [DXTable](./DXTable.md)
- [DXCard](../atoms/DXCard.md)

