# DXAppLayout

Компонент макета приложения с header, sidebar, content и footer.

## Import

```javascript
import { DXAppLayout } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `String` | `'dashboard'` | Вариант: `'dashboard'`, `'content'`, `'minimal'`, `'split'`, `'tabbed'` |
| `sidebarMode` | `String` | `'static'` | Режим sidebar: `'overlay'`, `'push'`, `'static'` |
| `sidebarCollapsed` | `Boolean` | `false` | Свернут ли sidebar |
| `sidebarWidth` | `Number` | `256` | Ширина sidebar (px) |
| `sidebarCollapsedWidth` | `Number` | `64` | Ширина свёрнутого sidebar (px) |
| `showSidebarOnMobile` | `Boolean` | `false` | Показывать sidebar на мобильных |
| `backdropBlur` | `String` | `'sm'` | Размытие backdrop: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `headerPadding` | `String` | `''` | Отступы header |
| `contentPadding` | `String` | `''` | Отступы content |
| `sidebarPadding` | `String` | `''` | Отступы sidebar |
| `footerPadding` | `String` | `''` | Отступы footer |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `sidebar-toggle` | `Boolean` | Переключение sidebar |
| `sidebar-collapse` | `Boolean` | Сворачивание/разворачивание sidebar |

## Slots

| Slot | Description |
|------|-------------|
| `header` | Шапка приложения |
| `sidebar` | Боковая панель |
| `content` | Основной контент |
| `content-left` | Левая панель (для split варианта) |
| `content-right` | Правая панель (для split варианта) |
| `footer` | Подвал |

## Usage

### Dashboard Layout

```vue
<DXAppLayout variant="dashboard">
  <template #header>
    <DXHeaderBar appName="Dashboard" />
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="menuSections" />
  </template>
  
  <template #content>
    <div class="p-6">
      <h1>Dashboard Content</h1>
    </div>
  </template>
</DXAppLayout>
```

### Content Layout (Blog/Docs)

```vue
<DXAppLayout variant="content" contentPadding="lg">
  <template #header>
    <DXHeaderBar appName="Blog" />
  </template>
  
  <template #content>
    <article class="prose max-w-3xl mx-auto">
      <slot />
    </article>
  </template>
</DXAppLayout>
```

### Minimal Layout

```vue
<DXAppLayout variant="minimal">
  <template #header>
    <DXHeaderBar appName="App" />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### Split Layout (Editor)

```vue
<DXAppLayout variant="split">
  <template #header>
    <DXHeaderBar appName="Editor" />
  </template>
  
  <template #content-left>
    <div class="p-4">
      <h2>Source</h2>
      <CodeEditor v-model="source" />
    </div>
  </template>
  
  <template #content-right>
    <div class="p-4">
      <h2>Preview</h2>
      <Preview :content="source" />
    </div>
  </template>
</DXAppLayout>
```

### Collapsible Sidebar

```vue
<DXAppLayout
  variant="dashboard"
  :sidebarCollapsed="isCollapsed"
  :sidebarWidth="280"
  :sidebarCollapsedWidth="64"
  @sidebar-collapse="isCollapsed = $event"
>
  <template #sidebar>
    <DXSidebarMenu 
      :sections="sections" 
      :compact="isCollapsed"
      collapsible
    />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### Overlay Sidebar (Mobile)

```vue
<DXAppLayout
  variant="dashboard"
  sidebarMode="overlay"
  :sidebarCollapsed="!sidebarOpen"
  @sidebar-toggle="sidebarOpen = $event"
>
  <template #header>
    <DXHeaderBar>
      <template #mobile-menu>
        <DXButton @click="sidebarOpen = true">
          <DXIcon :icon="Bars3Icon" />
        </DXButton>
      </template>
    </DXHeaderBar>
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #content>
    <slot />
  </template>
</DXAppLayout>
```

### With Footer

```vue
<DXAppLayout variant="dashboard">
  <template #header>
    <DXHeaderBar />
  </template>
  
  <template #sidebar>
    <DXSidebarMenu :sections="sections" />
  </template>
  
  <template #content>
    <slot />
  </template>
  
  <template #footer>
    <div class="text-center text-sm text-slate-500 py-4">
      © 2024 Company Name
    </div>
  </template>
</DXAppLayout>
```

## Variants Description

| Variant | Description |
|---------|-------------|
| `dashboard` | Полнофункциональный дашборд с header, sidebar, footer |
| `content` | Для блогов, статей (минималистичный header, широкий контент) |
| `minimal` | Только header и content, без sidebar и footer |
| `split` | Две панели контента (редакторы, сравнение) |
| `tabbed` | Header с табами, переключаемый контент |

## See Also

- [DXHeaderBar](./DXHeaderBar.md)
- [DXSidebarMenu](./DXSidebarMenu.md)
- [DXSidebar](./DXSidebar.md)

