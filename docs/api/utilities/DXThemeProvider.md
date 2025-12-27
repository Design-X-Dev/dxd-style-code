# DXThemeProvider

Провайдер тем для приложения с поддержкой системной темы и localStorage.

## Import

```javascript
import { DXThemeProvider } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `String` | `'light'` | Текущая тема |
| `themes` | `Object` | `{}` | Доступные темы с цветами |
| `persist` | `Boolean` | `false` | Сохранять в localStorage |
| `storageKey` | `String` | `'dx-theme'` | Ключ localStorage |
| `useSystemTheme` | `Boolean` | `false` | Использовать системную тему |

## Theme Structure

```typescript
interface ThemeConfig {
  [themeName: string]: {
    name: string;
    colors: {
      primary: string;
      background: string;
      text: string;
      // ... другие цвета
    };
  };
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `theme-change` | `themeName: String` | Изменение темы |

## Provided Values

Доступны через `inject('theme')`:

| Key | Type | Description |
|-----|------|-------------|
| `currentTheme` | `ComputedRef<string>` | Текущая тема |
| `effectiveTheme` | `ComputedRef<string>` | Эффективная тема (с учётом системной) |
| `themeColors` | `ComputedRef<Object>` | Цвета текущей темы |
| `setTheme` | `Function` | Переключить тему |
| `availableThemes` | `ComputedRef<string[]>` | Список тем |

## Usage

### Basic

```vue
<DXThemeProvider
  :themes="{
    light: {
      name: 'Светлая',
      colors: {
        primary: '#3b82f6',
        background: '#ffffff',
        text: '#1f2937'
      }
    },
    dark: {
      name: 'Тёмная',
      colors: {
        primary: '#60a5fa',
        background: '#1f2937',
        text: '#f9fafb'
      }
    }
  }"
  theme="light"
>
  <App />
</DXThemeProvider>
```

### With Persistence

```vue
<DXThemeProvider
  :themes="themes"
  persist
  storageKey="my-app-theme"
>
  <App />
</DXThemeProvider>
```

### System Theme

```vue
<DXThemeProvider
  :themes="themes"
  useSystemTheme
  @theme-change="onThemeChange"
>
  <App />
</DXThemeProvider>
```

### Theme Switcher (child component)

```vue
<template>
  <DXSelect
    :modelValue="theme.currentTheme.value"
    :options="theme.availableThemes.value"
    @update:modelValue="theme.setTheme"
  />
</template>

<script setup>
import { inject } from 'vue';
const theme = inject('theme');
</script>
```

### Toggle Theme

```vue
<script setup>
import { inject } from 'vue';
const theme = inject('theme');

function toggleTheme() {
  // Без аргументов переключает на следующую тему
  theme.setTheme();
}
</script>

<template>
  <DXButton @click="toggleTheme">
    Переключить тему
  </DXButton>
</template>
```

### Using CSS Variables

CSS переменные автоматически применяются к `document.documentElement`:

```css
.my-component {
  background: var(--color-background);
  color: var(--color-text);
  border-color: var(--color-primary);
}
```

## See Also

- [DXBreakpointProvider](./DXBreakpointProvider.md)

