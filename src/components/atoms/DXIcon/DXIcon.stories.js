import DXIcon from './DXIcon.vue';
import {
  HeartIcon,
  StarIcon,
  BellIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/vue/24/outline';
import {
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
} from '@heroicons/vue/24/solid';

export default {
  title: 'Atoms/DXIcon',
  component: DXIcon,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент иконки для отображения Heroicons с поддержкой размеров и анимаций.

## Назначение

DXIcon предоставляет стандартизированный способ отображения иконок из библиотеки Heroicons.
Компонент поддерживает различные размеры, анимации при наведении и интеграцию с group-hover эффектами.

## Архитектура

### Использует
- Heroicons компоненты - библиотека иконок (outline и solid варианты)
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useAnimation\` composable - для анимаций при hover

### Используется в
- \`DXButton\` - иконки в кнопках
- \`DXInput\` - иконки в полях ввода
- \`DXMenu\` - иконки в меню
- \`DXBadge\` - иконки в бейджах
- \`DXAvatar\` - иконки fallback
- Любые места, требующие отображения иконок

## Внутренняя логика

### Размеры

| Значение | Описание |
|----------|----------|
| \`xs\` | Очень маленький |
| \`sm\` | Маленький |
| \`md\` | Средний (по умолчанию) |
| \`lg\` | Большой |
| \`xl\` | Очень большой |

### Анимации

| Значение | Описание |
|----------|----------|
| \`none\` | Без анимации (по умолчанию) |
| \`wiggle\` | Тряска (wiggle animation) |
| \`scale\` | Увеличение (scale 1.1) |
| \`rotate\` | Поворот на 90 градусов |

### Group Hover
При \`groupHover={true}\`:
- Анимация срабатывает при наведении на родительский элемент с классом \`group\`
- Полезно для анимации иконок в кнопках, ссылках и других интерактивных элементах

## Особенности

### Heroicons
Компонент работает с Heroicons компонентами:
- **Outline** - контурные иконки (24/outline)
- **Solid** - закрашенные иконки (24/solid)

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов:
- Цвета (text-blue-500, text-rose-500 и т.д.)
- Позиционирование
- Другие стили

### Динамический рендеринг
Использует \`<component :is="icon">\` для динамического рендеринга Heroicon компонента.

### Производительность
- Минимальный overhead
- CSS анимации для плавности
- Transition для плавных переходов
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    animation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

export const Default = {
  args: {
    icon: HeartIcon,
    size: 'md',
    animation: 'none',
  },
};

export const Sizes = () => ({
  components: { DXIcon },
  setup() {
    return { HeartIcon };
  },
  template: `
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xs" />
      <DXIcon :icon="HeartIcon" size="sm" />
      <DXIcon :icon="HeartIcon" size="md" />
      <DXIcon :icon="HeartIcon" size="lg" />
      <DXIcon :icon="HeartIcon" size="xl" />
    </div>
  `,
});

export const Animations = () => ({
  components: { DXIcon },
  setup() {
    return { HeartIcon, StarIcon, BellIcon, Cog6ToothIcon };
  },
  template: `
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="none" />
        <p class="text-xs mt-2 text-slate-600">None</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" />
        <p class="text-xs mt-2 text-slate-600">Wiggle</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="BellIcon" size="xl" animation="scale" />
        <p class="text-xs mt-2 text-slate-600">Scale</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="Cog6ToothIcon" size="xl" animation="rotate" />
        <p class="text-xs mt-2 text-slate-600">Rotate</p>
      </div>
    </div>
  `,
});

export const IconGallery = () => ({
  components: { DXIcon },
  setup() {
    return {
      icons: [
        { name: 'Heart', icon: HeartIcon },
        { name: 'Star', icon: StarIcon },
        { name: 'Bell', icon: BellIcon },
        { name: 'Home', icon: HomeIcon },
        { name: 'User', icon: UserIcon },
        { name: 'Settings', icon: Cog6ToothIcon },
        { name: 'Search', icon: MagnifyingGlassIcon },
        { name: 'Cart', icon: ShoppingCartIcon },
        { name: 'Email', icon: EnvelopeIcon },
        { name: 'Phone', icon: PhoneIcon },
      ],
    };
  },
  template: `
    <div class="grid grid-cols-5 gap-6">
      <div v-for="item in icons" :key="item.name" class="text-center">
        <DXIcon :icon="item.icon" size="xl" animation="scale" class="text-slate-700 mx-auto" />
        <p class="text-xs mt-2 text-slate-600">{{ item.name }}</p>
      </div>
    </div>
  `,
});

export const OutlineVsSolid = () => ({
  components: { DXIcon },
  setup() {
    return { HeartIcon, HeartIconSolid, StarIcon, StarIconSolid };
  },
  template: `
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="HeartIconSolid" size="xl" animation="scale" class="text-rose-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIconSolid" size="xl" animation="wiggle" class="text-amber-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
    </div>
  `,
});

export const WithColors = () => ({
  components: { DXIcon },
  setup() {
    return { HeartIcon };
  },
  template: `
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-rose-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-blue-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-emerald-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-amber-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-purple-500" />
    </div>
  `,
});

