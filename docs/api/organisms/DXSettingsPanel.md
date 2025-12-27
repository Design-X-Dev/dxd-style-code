# DXSettingsPanel

Панель настроек с группами параметров.

## Import

```javascript
import { DXSettingsPanel } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sections` | `Array` | `[]` | Секции настроек |
| `modelValue` | `Object` | `{}` | Значения настроек (v-model) |
| `variant` | `String` | `'default'` | Вариант: `'default'`, `'compact'`, `'cards'` |
| `showSearch` | `Boolean` | `false` | Показать поиск |
| `showReset` | `Boolean` | `false` | Показать кнопку сброса |
| `loading` | `Boolean` | `false` | Состояние загрузки |

## Section Structure

```typescript
interface Section {
  id: string;
  title: string;
  description?: string;
  icon?: Component;
  settings: Setting[];
}

interface Setting {
  key: string;
  label: string;
  description?: string;
  type: 'toggle' | 'select' | 'input' | 'slider' | 'color' | 'radio';
  options?: Array;     // Для select и radio
  min?: number;        // Для slider
  max?: number;        // Для slider
  step?: number;       // Для slider
  placeholder?: string;
  disabled?: boolean;
  validation?: (value) => string | null;
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `Object` | Изменение настроек |
| `change` | `{ key, value }` | Изменение конкретной настройки |
| `reset` | - | Сброс настроек |
| `save` | `Object` | Сохранение настроек |

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `setting-{key}` | `{ setting, value }` | Кастомная настройка |
| `section-{id}` | `{ section }` | Кастомная секция |
| `footer` | - | Футер панели |

## Usage

### Basic

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'general',
      title: 'Основные',
      settings: [
        { key: 'darkMode', label: 'Тёмная тема', type: 'toggle' },
        { key: 'language', label: 'Язык', type: 'select', options: ['Русский', 'English'] }
      ]
    }
  ]"
/>
```

### With Icons

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'notifications',
      title: 'Уведомления',
      icon: BellIcon,
      settings: [
        { key: 'email', label: 'Email уведомления', type: 'toggle' },
        { key: 'push', label: 'Push уведомления', type: 'toggle' },
        { key: 'frequency', label: 'Частота', type: 'select', options: ['Мгновенно', 'Ежедневно', 'Еженедельно'] }
      ]
    },
    {
      id: 'privacy',
      title: 'Приватность',
      icon: ShieldCheckIcon,
      settings: [
        { key: 'profileVisibility', label: 'Видимость профиля', type: 'radio', options: ['Все', 'Только друзья', 'Никто'] },
        { key: 'showOnline', label: 'Показывать онлайн статус', type: 'toggle' }
      ]
    }
  ]"
/>
```

### With Descriptions

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="[
    {
      id: 'appearance',
      title: 'Внешний вид',
      description: 'Настройте внешний вид приложения',
      settings: [
        {
          key: 'theme',
          label: 'Тема',
          description: 'Выберите цветовую схему',
          type: 'select',
          options: ['Светлая', 'Тёмная', 'Системная']
        },
        {
          key: 'fontSize',
          label: 'Размер шрифта',
          description: 'Базовый размер текста',
          type: 'slider',
          min: 12,
          max: 24,
          step: 2
        }
      ]
    }
  ]"
/>
```

### With Search

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  showSearch
/>
```

### With Reset

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  showReset
  @reset="resetToDefaults"
/>
```

### Cards Variant

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  variant="cards"
/>
```

### Custom Setting

```vue
<DXSettingsPanel v-model="settings" :sections="sections">
  <template #setting-avatar>
    <div class="flex items-center gap-4">
      <img :src="settings.avatar" class="w-16 h-16 rounded-full" />
      <DXButton size="sm" @click="changeAvatar">Изменить</DXButton>
    </div>
  </template>
</DXSettingsPanel>
```

### With Save Button

```vue
<DXSettingsPanel
  v-model="settings"
  :sections="sections"
  :loading="isSaving"
>
  <template #footer>
    <DXButton @click="saveSettings" :loading="isSaving">
      Сохранить изменения
    </DXButton>
  </template>
</DXSettingsPanel>
```

### Full Example

```vue
<template>
  <DXCard>
    <DXSettingsPanel
      v-model="userSettings"
      :sections="settingsSections"
      showSearch
      showReset
      @change="handleSettingChange"
      @reset="confirmReset"
    >
      <template #footer>
        <div class="flex justify-end gap-2">
          <DXButton variant="ghost" @click="cancel">Отмена</DXButton>
          <DXButton @click="save" :loading="saving">Сохранить</DXButton>
        </div>
      </template>
    </DXSettingsPanel>
  </DXCard>
</template>
```

## See Also

- [DXToggle](../atoms/DXToggle.md)
- [DXSelect](../molecules/DXSelect.md)
- [DXSlider](../atoms/DXSlider.md)

