# DXHeaderBar

Компонент шапки приложения с логотипом, навигацией и действиями.

## Import

```javascript
import { DXHeaderBar } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logo` | `String` | `null` | URL логотипа |
| `appName` | `String` | `''` | Название приложения |
| `logoLink` | `String\|Object` | `null` | Vue Router ссылка для логотипа |
| `logoHref` | `String` | `null` | Обычная ссылка для логотипа |
| `sticky` | `Boolean` | `false` | Sticky позиционирование |
| `fixed` | `Boolean` | `false` | Fixed позиционирование |
| `containerSize` | `String` | `'lg'` | Размер контейнера: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'2xl'`, `'full'` |
| `containerPadding` | `String` | `'md'` | Отступы контейнера |
| `height` | `String` | `'auto'` | Высота: `'auto'`, `'sm'`, `'md'`, `'lg'` |
| `variant` | `String` | `null` | Вариант: `'bordered'`, `'elevated'`, `'flat'` |
| `bg` | `String` | `'white'` | Фон: `'white'`, `'slate'`, `'transparent'` |
| `shadow` | `String` | `null` | Тень: `'none'`, `'sm'`, `'md'`, `'lg'`, `'xl'` |
| `border` | `String` | `'bottom'` | Рамка: `'none'`, `'bottom'`, `'full'` |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `mobile-menu-toggle` | `Boolean` | Переключение мобильного меню |

## Slots

| Slot | Description |
|------|-------------|
| `logo` | Кастомный логотип |
| `navigation` | Навигация (desktop) |
| `search` | Поиск (desktop) |
| `actions` | Действия (desktop) |
| `center` | Центральный контент |
| `mobile-menu` | Кнопка мобильного меню |
| `mobile-navigation` | Мобильная навигация (drawer) |

## Usage

### Basic

```vue
<DXHeaderBar
  appName="MyApp"
  logo="/logo.svg"
  logoLink="/"
/>
```

### With Navigation

```vue
<DXHeaderBar appName="Dashboard">
  <template #navigation>
    <DXLink to="/dashboard">Главная</DXLink>
    <DXLink to="/projects">Проекты</DXLink>
    <DXLink to="/team">Команда</DXLink>
  </template>
  
  <template #actions>
    <DXButton variant="ghost" size="sm">
      <DXIcon :icon="BellIcon" />
    </DXButton>
    <DXButton>Профиль</DXButton>
  </template>
</DXHeaderBar>
```

### With Search

```vue
<DXHeaderBar appName="Store">
  <template #search>
    <DXSearchBar
      v-model="searchQuery"
      placeholder="Поиск товаров..."
      @search="handleSearch"
    />
  </template>
  
  <template #actions>
    <DXButton variant="ghost">
      <DXIcon :icon="ShoppingCartIcon" />
    </DXButton>
  </template>
</DXHeaderBar>
```

### Sticky Header

```vue
<DXHeaderBar
  appName="Blog"
  sticky
  shadow="sm"
/>
```

### Fixed Header

```vue
<DXHeaderBar
  appName="App"
  fixed
  variant="elevated"
/>
```

### With Mobile Menu

```vue
<DXHeaderBar appName="App">
  <template #navigation>
    <DXLink to="/">Главная</DXLink>
    <DXLink to="/about">О нас</DXLink>
  </template>
  
  <template #mobile-menu>
    <DXButton variant="ghost" @click="$refs.header.openMobileMenu()">
      <DXIcon :icon="Bars3Icon" />
    </DXButton>
  </template>
  
  <template #mobile-navigation>
    <DXLink to="/" class="block py-2">Главная</DXLink>
    <DXLink to="/about" class="block py-2">О нас</DXLink>
    <DXLink to="/contact" class="block py-2">Контакты</DXLink>
  </template>
</DXHeaderBar>
```

### Height Variants

```vue
<DXHeaderBar height="sm" /> <!-- 56px -->
<DXHeaderBar height="md" /> <!-- 64px -->
<DXHeaderBar height="lg" /> <!-- 80px -->
```

### Background Variants

```vue
<DXHeaderBar bg="white" />
<DXHeaderBar bg="slate" />
<DXHeaderBar bg="transparent" />
```

### Center Content

```vue
<DXHeaderBar appName="Editor">
  <template #center>
    <DXTabs v-model="currentTab" :tabs="tabs" variant="buttons" />
  </template>
</DXHeaderBar>
```

### With Actions

```vue
<DXHeaderBar appName="Dashboard">
  <template #actions>
    <DXDropdown>
      <template #trigger>
        <img src="/avatar.jpg" class="w-8 h-8 rounded-full" />
      </template>
      <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
      <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
      <DXDropdownDivider />
      <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
        Выйти
      </DXDropdownItem>
    </DXDropdown>
  </template>
</DXHeaderBar>
```

## Exposed Methods

```javascript
const headerRef = ref(null);

// Открыть мобильное меню
headerRef.value.openMobileMenu();

// Закрыть мобильное меню
headerRef.value.closeMobileMenu();

// Доступ к breakpoint данным
headerRef.value.isMobile;
headerRef.value.isDesktop;
headerRef.value.currentBreakpoint;
```

## See Also

- [DXAppLayout](./DXAppLayout.md)
- [DXSidebarMenu](./DXSidebarMenu.md)

