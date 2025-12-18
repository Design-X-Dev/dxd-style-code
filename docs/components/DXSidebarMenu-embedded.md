# DXSidebarMenu - Embedded Mode

Режим `embedded` позволяет использовать меню внутри контейнеров, таких как `DXCard`, вместо фиксированной боковой панели.

## Отличия от sidebar режима

| Свойство | Sidebar (по умолчанию) | Embedded |
|----------|------------------------|----------|
| Позиционирование | Фиксированная боковая панель | Внутри контейнера |
| Ширина | Фиксированная (sm, md, lg, xl) | 100% контейнера |
| Высота | 100vh (на весь экран) | 100% контейнера |
| Бордер | Справа (border-r) | Вокруг (border + rounded) |
| Тень | shadow-sm | Без тени |

## Базовый пример

```vue
<template>
  <DXCard>
    <DXSidebarMenu 
      title="Навигация"
      :sections="sections"
      :activeItem="activeItem"
      variant="embedded"
      :collapsible="false"
      :bordered="false"
    />
  </DXCard>
</template>

<script setup>
import { ref } from 'vue';
import { DXSidebarMenu, DXCard } from 'dxd-style-code';
import { HomeIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const activeItem = ref('/home');

const sections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
      { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
      { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
    ]
  }
];
</script>
```

## Меню в сетке с контентом

```vue
<template>
  <div class="grid grid-cols-3 gap-6">
    <!-- Меню в карточке -->
    <DXCard class="col-span-1">
      <DXSidebarMenu 
        title="Меню"
        :sections="sections"
        :activeItem="activeItem"
        variant="embedded"
        :collapsible="false"
        :bordered="false"
      />
    </DXCard>
    
    <!-- Основной контент -->
    <div class="col-span-2">
      <DXCard>
        <h2>Контент</h2>
        <p>Активный элемент: {{ activeItem }}</p>
      </DXCard>
    </div>
  </div>
</template>
```

## Компактное меню в контейнере

```vue
<template>
  <div class="flex gap-6">
    <!-- Компактное меню -->
    <DXCard class="w-auto">
      <DXSidebarMenu 
        :sections="sections"
        :activeItem="activeItem"
        variant="embedded"
        :compact="true"
        :collapsible="false"
        :bordered="false"
      />
    </DXCard>
    
    <!-- Контент -->
    <DXCard class="flex-1">
      <h2>Основной контент</h2>
    </DXCard>
  </div>
</template>
```

## С поиском

```vue
<template>
  <div class="grid grid-cols-4 gap-6">
    <DXCard class="col-span-1 h-fit">
      <DXSidebarMenu 
        title="Навигация"
        :sections="sections"
        :activeItem="activeItem"
        variant="embedded"
        searchable
        :collapsible="false"
        :bordered="false"
      />
    </DXCard>
    
    <div class="col-span-3">
      <DXCard>
        <h2>Контент</h2>
      </DXCard>
    </div>
  </div>
</template>
```

## На всю высоту контейнера

```vue
<template>
  <div class="grid grid-cols-4 gap-6" style="height: 600px;">
    <!-- Меню растягивается на всю высоту -->
    <DXCard class="col-span-1 overflow-hidden">
      <DXSidebarMenu 
        title="Меню"
        :sections="sections"
        :activeItem="activeItem"
        variant="embedded"
        :collapsible="false"
        :bordered="false"
      />
    </DXCard>
    
    <div class="col-span-3">
      <DXCard class="h-full">
        <h2>Контент</h2>
      </DXCard>
    </div>
  </div>
</template>
```

## Рекомендации

### Когда использовать embedded

- ✅ Меню внутри дашборда или админ-панели
- ✅ Навигация в боковой колонке контента
- ✅ Меню настроек в модальном окне
- ✅ Фильтры или категории в карточке

### Когда использовать sidebar (по умолчанию)

- ✅ Главная навигация приложения
- ✅ Фиксированное меню на всю высоту экрана
- ✅ Навигация, которая всегда видна

## Props для embedded режима

```javascript
{
  variant: 'embedded',      // Обязательно для встроенного режима
  collapsible: false,       // Обычно отключают для embedded
  bordered: false,          // Убирают бордер, т.к. карточка уже имеет границы
  fixed: false,             // Не используется в embedded
  width: 'md'               // Не влияет в embedded (всегда 100%)
}
```

## Стилизация контейнера

### Фиксированная высота

```vue
<DXCard style="height: 500px;" class="overflow-hidden">
  <DXSidebarMenu variant="embedded" ... />
</DXCard>
```

### Минимальная высота

```vue
<DXCard style="min-height: 400px;">
  <DXSidebarMenu variant="embedded" ... />
</DXCard>
```

### Flex контейнер

```vue
<div class="flex" style="height: 600px;">
  <DXCard class="w-80">
    <DXSidebarMenu variant="embedded" ... />
  </DXCard>
  <div class="flex-1">
    <!-- Контент -->
  </div>
</div>
```

## Примеры использования

### Dashboard с боковым меню

```vue
<template>
  <div class="p-8 bg-slate-50 min-h-screen">
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
    
    <div class="grid grid-cols-5 gap-6">
      <!-- Меню -->
      <DXCard class="col-span-1">
        <DXSidebarMenu 
          title="Навигация"
          :sections="sections"
          :activeItem="currentPage"
          variant="embedded"
          searchable
          :collapsible="false"
          :bordered="false"
        />
      </DXCard>
      
      <!-- Контент -->
      <div class="col-span-4 space-y-6">
        <DXCard>
          <h2>Статистика</h2>
          <!-- Графики, данные -->
        </DXCard>
        
        <DXCard>
          <h2>Таблица</h2>
          <!-- Таблица данных -->
        </DXCard>
      </div>
    </div>
  </div>
</template>
```

### Модальное окно с меню

```vue
<template>
  <DXModal :open="showSettings" @close="showSettings = false">
    <template #title>Настройки</template>
    
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-1">
        <DXSidebarMenu 
          :sections="settingsSections"
          :activeItem="activeSection"
          variant="embedded"
          :collapsible="false"
          :bordered="true"
        />
      </div>
      
      <div class="col-span-2">
        <!-- Контент настроек -->
      </div>
    </div>
  </DXModal>
</template>
```

## Accessibility

- Меню остается полностью доступным в embedded режиме
- Поддержка клавиатурной навигации
- ARIA атрибуты работают корректно
- Семантический HTML сохраняется

## Производительность

Embedded режим не влияет на производительность, так как:
- Использует те же компоненты
- Не добавляет дополнительных слушателей
- Рендерится так же эффективно

