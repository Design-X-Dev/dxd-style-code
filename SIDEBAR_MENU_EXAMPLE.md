# Примеры использования DXSidebarMenu

## Быстрый старт

### 1. Базовая правая панель меню

```vue
<template>
  <div class="flex h-screen">
    <!-- Основной контент -->
    <main class="flex-1 p-8">
      <h1>Мой контент</h1>
    </main>
    
    <!-- Правая панель меню -->
    <DXSidebarMenu 
      title="Навигация"
      :sections="menuSections"
      :activeItem="currentPage"
      width="md"
      @item-click="handleNavigation"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';
import 'dxd-style-code/style.css';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline';

const currentPage = ref('/home');

const menuSections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
      { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users', badge: '12' },
      { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
    ]
  },
  {
    title: 'Настройки',
    items: [
      { 
        id: 'settings', 
        label: 'Настройки', 
        icon: Cog6ToothIcon,
        children: [
          { id: 'profile', label: 'Профиль', to: '/settings/profile' },
          { id: 'security', label: 'Безопасность', to: '/settings/security' }
        ]
      }
    ]
  }
];

const handleNavigation = (item) => {
  currentPage.value = item.to || item.id;
  console.log('Переход на:', item.label);
};
</script>
```

## 2. Левая панель с переключением компактного режима

```vue
<template>
  <div class="flex h-screen">
    <!-- Левая панель меню -->
    <DXSidebarMenu 
      :sections="menuSections"
      :activeItem="currentPage"
      :compact="isCompact"
      collapsible
      searchable
      @update:compact="isCompact = $event"
      @item-click="handleNavigation"
    >
      <template #header>
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div v-if="!isCompact">
            <h2 class="text-sm font-bold">Admin Panel</h2>
            <p class="text-xs text-slate-500">v2.0.0</p>
          </div>
        </div>
      </template>
    </DXSidebarMenu>
    
    <!-- Основной контент -->
    <main class="flex-1 p-8 bg-slate-50">
      <h1 class="text-2xl font-bold">{{ currentPageTitle }}</h1>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';

const isCompact = ref(false);
const currentPage = ref('/home');

const currentPageTitle = computed(() => {
  // Логика определения заголовка страницы
  return 'Главная страница';
});

const handleNavigation = (item) => {
  currentPage.value = item.to || item.id;
};
</script>
```

## 3. Интеграция с Vue Router

```vue
<template>
  <div class="flex h-screen">
    <DXSidebarMenu 
      :sections="menuSections"
      :activeItem="currentRoute"
      @item-click="handleNavigation"
    />
    
    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { DXSidebarMenu } from 'dxd-style-code';

const route = useRoute();
const router = useRouter();

const currentRoute = computed(() => route.path);

const menuSections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { id: 'about', label: 'О нас', icon: InformationCircleIcon, to: '/about' },
      { id: 'contact', label: 'Контакты', icon: EnvelopeIcon, to: '/contact' },
    ]
  }
];

const handleNavigation = (item) => {
  if (item.to) {
    router.push(item.to);
  }
};
</script>
```

## 4. E-commerce панель с футером

```vue
<template>
  <div class="flex h-screen">
    <DXSidebarMenu 
      :sections="ecommerceSections"
      :activeItem="currentPage"
      width="md"
      searchable
      @item-click="handleNavigation"
    >
      <template #header>
        <div class="flex items-center gap-3 w-full">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <div class="flex-1">
            <h2 class="text-sm font-bold text-slate-900">Shop Admin</h2>
            <p class="text-xs text-slate-500">Магазин v1.0</p>
          </div>
        </div>
      </template>
      
      <template #footer>
        <div class="space-y-2">
          <button 
            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            @click="openProfile"
          >
            <UserCircleIcon class="w-5 h-5" />
            <span class="text-sm font-medium">Профиль</span>
          </button>
          <button 
            class="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors"
            @click="logout"
          >
            <ArrowRightOnRectangleIcon class="w-5 h-5" />
            <span class="text-sm font-medium">Выйти</span>
          </button>
        </div>
      </template>
    </DXSidebarMenu>
    
    <main class="flex-1 p-8 bg-slate-50">
      <!-- Контент магазина -->
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';
import {
  HomeIcon,
  ShoppingCartIcon,
  InboxIcon,
  UsersIcon,
  CreditCardIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline';

const currentPage = ref('/');

const ecommerceSections = [
  {
    items: [
      { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' },
      { 
        id: 'orders', 
        label: 'Заказы', 
        icon: ShoppingCartIcon, 
        to: '/orders',
        badge: '8',
        badgeVariant: 'danger'
      },
    ]
  },
  {
    title: 'Продажи',
    items: [
      { id: 'products', label: 'Товары', icon: InboxIcon, to: '/products' },
      { 
        id: 'customers', 
        label: 'Клиенты', 
        icon: UsersIcon, 
        to: '/customers',
        badge: '156'
      },
      { id: 'payments', label: 'Платежи', icon: CreditCardIcon, to: '/payments' },
    ]
  },
  {
    title: 'Отчеты',
    items: [
      { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
      { id: 'reports', label: 'Отчеты', icon: DocumentTextIcon, to: '/reports' },
    ]
  }
];

const handleNavigation = (item) => {
  currentPage.value = item.to || item.id;
};

const openProfile = () => {
  console.log('Открыть профиль');
};

const logout = () => {
  console.log('Выход из системы');
};
</script>
```

## 5. Мобильная адаптация с кнопкой

```vue
<template>
  <div class="relative h-screen">
    <!-- Кнопка для мобильных -->
    <button 
      class="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-xl shadow-lg"
      @click="showMenu = !showMenu"
    >
      <Bars3Icon class="w-6 h-6" />
    </button>
    
    <!-- Overlay для мобильных -->
    <div 
      v-if="showMenu"
      class="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
      @click="showMenu = false"
    />
    
    <!-- Меню -->
    <div 
      class="fixed left-0 top-0 h-full z-50 transition-transform lg:relative lg:translate-x-0"
      :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <DXSidebarMenu 
        :sections="menuSections"
        :activeItem="currentPage"
        @item-click="handleMobileNavigation"
      />
    </div>
    
    <!-- Контент -->
    <main class="h-full overflow-auto p-8 lg:ml-80">
      <h1>Адаптивный контент</h1>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DXSidebarMenu } from 'dxd-style-code';
import { Bars3Icon } from '@heroicons/vue/24/outline';

const showMenu = ref(false);
const currentPage = ref('/home');

const handleMobileNavigation = (item) => {
  currentPage.value = item.to || item.id;
  showMenu.value = false; // Закрыть меню на мобильных
};
</script>
```

## Полезные советы

### Динамические счетчики

```javascript
const notifications = ref(5);

const menuSections = computed(() => [
  {
    items: [
      { 
        id: 'notifications', 
        label: 'Уведомления', 
        icon: BellIcon,
        badge: notifications.value > 0 ? String(notifications.value) : undefined,
        badgeVariant: 'danger'
      }
    ]
  }
]);
```

### Условное отображение элементов

```javascript
const user = ref({ role: 'admin' });

const menuSections = computed(() => {
  const sections = [
    {
      items: [
        { id: 'home', label: 'Главная', icon: HomeIcon, to: '/' }
      ]
    }
  ];
  
  // Показывать админ-панель только для админов
  if (user.value.role === 'admin') {
    sections.push({
      title: 'Администрирование',
      items: [
        { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/admin/users' }
      ]
    });
  }
  
  return sections;
});
```

### Сохранение состояния компактного режима

```javascript
import { ref, watch } from 'vue';

const isCompact = ref(
  localStorage.getItem('sidebar-compact') === 'true'
);

watch(isCompact, (value) => {
  localStorage.setItem('sidebar-compact', String(value));
});
```

