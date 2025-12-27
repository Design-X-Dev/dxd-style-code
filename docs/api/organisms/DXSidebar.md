# DXSidebar

Базовый компонент боковой панели с поддержкой overlay, push и static режимов.

## Import

```javascript
import { DXSidebar } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `Boolean` | `true` | Открыт ли сайдбар |
| `mode` | `String` | `'static'` | Режим: `'overlay'`, `'push'`, `'static'` |
| `width` | `Number` | `256` | Ширина сайдбара (px) |
| `collapsedWidth` | `Number` | `64` | Ширина свёрнутого сайдбара (px) |
| `collapsed` | `Boolean` | `false` | Свёрнут ли сайдбар |
| `showOnMobile` | `Boolean` | `false` | Показывать на мобильных |
| `backdropBlur` | `String` | `'sm'` | Размытие backdrop: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:open` | `Boolean` | Изменение состояния открытия |
| `toggle` | `Boolean` | Переключение |
| `collapse` | `Boolean` | Сворачивание/разворачивание |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Шапка сайдбара |
| `content` | Основной контент |
| `footer` | Подвал сайдбара |

## Usage

### Basic

```vue
<DXSidebar>
  <template #header>
    <h2>Меню</h2>
  </template>
  
  <template #content>
    <nav>
      <a href="/">Главная</a>
      <a href="/about">О нас</a>
    </nav>
  </template>
</DXSidebar>
```

### Static Mode (Default)

```vue
<DXSidebar mode="static" :width="280">
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Overlay Mode

```vue
<DXSidebar
  :open="sidebarOpen"
  mode="overlay"
  @update:open="sidebarOpen = $event"
>
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Push Mode

```vue
<DXSidebar
  :open="sidebarOpen"
  mode="push"
  :width="300"
>
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
</DXSidebar>
```

### Collapsible

```vue
<DXSidebar
  :collapsed="isCollapsed"
  :width="280"
  :collapsedWidth="64"
  @collapse="isCollapsed = $event"
>
  <template #header>
    <DXButton @click="isCollapsed = !isCollapsed">
      <DXIcon :icon="isCollapsed ? ChevronRightIcon : ChevronLeftIcon" />
    </DXButton>
  </template>
  
  <template #content>
    <DXSidebarMenu :sections="sections" :compact="isCollapsed" />
  </template>
</DXSidebar>
```

### With Header and Footer

```vue
<DXSidebar :width="280">
  <template #header>
    <div class="flex items-center gap-2">
      <img src="/logo.svg" class="h-8" />
      <span class="font-bold">MyApp</span>
    </div>
  </template>
  
  <template #content>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #footer>
    <div class="flex items-center gap-2">
      <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      <span>Иван Иванов</span>
    </div>
  </template>
</DXSidebar>
```

### Custom Width

```vue
<DXSidebar :width="320" :collapsedWidth="80">
  <template #content>
    <!-- Широкий сайдбар с кастомным контентом -->
  </template>
</DXSidebar>
```

### Mobile Overlay

```vue
<template>
  <DXHeaderBar>
    <template #mobile-menu>
      <DXButton @click="showMobileSidebar = true">
        <DXIcon :icon="Bars3Icon" />
      </DXButton>
    </template>
  </DXHeaderBar>
  
  <DXSidebar
    :open="showMobileSidebar"
    mode="overlay"
    :showOnMobile="true"
    @update:open="showMobileSidebar = $event"
  >
    <template #content>
      <DXSidebarMenu :sections="sections" />
    </template>
  </DXSidebar>
</template>
```

## Mode Comparison

| Mode | Description |
|------|-------------|
| `static` | Сайдбар в обычном потоке документа |
| `push` | Сайдбар сдвигает контент |
| `overlay` | Сайдбар поверх контента с backdrop |

## See Also

- [DXSidebarMenu](./DXSidebarMenu.md)
- [DXAppLayout](./DXAppLayout.md)

