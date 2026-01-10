import { ref } from 'vue';
import DXTabs from './DXTabs.vue';
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  ChartBarIcon,
  BellIcon,
  EnvelopeIcon,
  FolderIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXTabs',
  component: DXTabs,
  tags: ['autodocs', 'category:navigation'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент вкладок с поддержкой иконок, счетчиков, различных вариантов оформления и компактного режима.

## Назначение

DXTabs предоставляет способ организации контента в виде вкладок. Компонент поддерживает различные варианты
визуального оформления, иконки, счетчики, анимации и компактный режим для адаптации под различные размеры экранов.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок во вкладках
- Анимации иконок - для интерактивности

### Используется в
- Навигация по разделам
- Переключение режимов отображения
- Фильтрация контента
- Настройки с категориями
- Любые места, требующие организации контента по вкладкам

## Внутренняя логика

### Варианты оформления

| Значение | Описание |
|----------|----------|
| \`buttons\` | Вкладки выглядят как кнопки с фоном (по умолчанию) |
| \`tabs-top\` | Классические вкладки с подчеркиванием сверху |
| \`tabs-bottom\` | Вкладки с подчеркиванием снизу |

### Выравнивание

| Значение | Описание |
|----------|----------|
| \`left\` | Выравнивание по левому краю (по умолчанию) |
| \`center\` | Выравнивание по центру |
| \`right\` | Выравнивание по правому краю |

### Структура табов
Каждый таб может содержать:
- \`value\` - уникальное значение таба (обязательно)
- \`label\` - текст таба (обязательно)
- \`icon\` - иконка (Heroicon компонент, опционально)
- \`count\` - счетчик (число, опционально)
- \`iconAnimation\` - анимация иконки для конкретного таба (опционально)

### Компактный режим
При \`compact={true}\`:
- В неактивных табах скрывается текст, показываются только иконки
- В активном табе или при наведении текст показывается
- Режим \`icon-badge\` показывает иконку и счетчик
- Режим \`icon\` показывает только иконку

### Прокрутка
При \`scrollable={true}\` (по умолчанию):
- Если табы не помещаются в контейнер, появляется горизонтальная прокрутка
- Прокрутка автоматически центрирует активный таб

### Анимации иконок
- Глобальная анимация через \`iconAnimation\` prop
- Индивидуальная анимация через \`iconAnimation\` в объекте таба
- Поддерживаемые анимации: \`none\`, \`wiggle\`, \`scale\`, \`rotate\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для значения активного таба.

### Счетчики
- Счетчики отображаются как бейджи справа от текста/иконки
- В активном табе счетчик имеет темный фон
- В неактивных табах счетчик имеет светлый фон

### Состояния
- **active** - активный таб (визуально выделен)
- **hover** - таб при наведении
- **disabled** - отключенный таб (если поддерживается)

### Доступность
- Использует \`role="tab"\` для семантики
- \`aria-selected\` для указания активного таба
- Поддержка клавиатурной навигации

### Интеграция с контентом
DXTabs управляет только самими вкладками. Контент вкладок должен управляться отдельно через условный рендеринг на основе \`v-model\` значения.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['buttons', 'tabs-top', 'tabs-bottom'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    iconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

// Sample data
const simpleTabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'features', label: 'Features' },
  { value: 'pricing', label: 'Pricing' },
  { value: 'faq', label: 'FAQ' },
];

const tabsWithCounts = [
  { value: 'all', label: 'All', count: 42 },
  { value: 'active', label: 'Active', count: 28 },
  { value: 'archived', label: 'Archived', count: 14 },
];

const tabsWithIcons = [
  { value: 'home', label: 'Home', icon: HomeIcon },
  { value: 'profile', label: 'Profile', icon: UserIcon },
  { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
];

const tabsWithIconsAndCounts = [
  { value: 'all', label: 'All', icon: DocumentTextIcon, count: 156 },
  { value: 'photos', label: 'Photos', icon: PhotoIcon, count: 89 },
  { value: 'videos', label: 'Videos', icon: VideoCameraIcon, count: 45 },
];

const manyTabs = [
  { value: 'dashboard', label: 'Dashboard', icon: ChartBarIcon },
  { value: 'notifications', label: 'Notifications', icon: BellIcon, count: 12 },
  { value: 'messages', label: 'Messages', icon: EnvelopeIcon, count: 5 },
  { value: 'documents', label: 'Documents', icon: DocumentTextIcon, count: 156 },
  { value: 'photos', label: 'Photos', icon: PhotoIcon, count: 89 },
  { value: 'videos', label: 'Videos', icon: VideoCameraIcon, count: 45 },
  { value: 'files', label: 'Files', icon: FolderIcon, count: 234 },
  { value: 'settings', label: 'Settings', icon: Cog6ToothIcon },
];

// 1. Default (Buttons variant)
export const Default = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('overview');
      return { activeTab, tabs: simpleTabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// 2. Tabs Top Variant
export const TabsTopVariant = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('overview');
      return { activeTab, tabs: simpleTabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-top" />',
  }),
};

// 3. Tabs Bottom Variant
export const TabsBottomVariant = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('overview');
      return { activeTab, tabs: simpleTabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" variant="tabs-bottom" />',
  }),
};

// 4. All Variants Comparison
export const AllVariants = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const tab1 = ref('overview');
      const tab2 = ref('overview');
      const tab3 = ref('overview');
      return { tab1, tab2, tab3, tabs: simpleTabs };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="buttons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-bottom" />
        </div>
      </div>
    `,
  }),
};

// 5. With Alignment
export const WithAlignment = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const tab1 = ref('overview');
      const tab2 = ref('overview');
      const tab3 = ref('overview');
      return { tab1, tab2, tab3, tabs: simpleTabs };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Left (default)</h3>
          <DXTabs v-model="tab1" :tabs="tabs" variant="tabs-top" align="left" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Center</h3>
          <DXTabs v-model="tab2" :tabs="tabs" variant="tabs-top" align="center" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Right</h3>
          <DXTabs v-model="tab3" :tabs="tabs" variant="tabs-top" align="right" />
        </div>
      </div>
    `,
  }),
};

// 6. With Counts
export const WithCounts = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      return { activeTab, tabs: tabsWithCounts };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// 7. With Icons
export const WithIcons = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      return { activeTab, tabs: tabsWithIcons };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" />',
  }),
};

// 8. With Icons and Counts
export const WithIconsAndCounts = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      return { activeTab, tabs: tabsWithIconsAndCounts };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" icon-animation="scale" />',
  }),
};

// 9. With Scrolling
export const WithScrolling = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('dashboard');
      return { activeTab, tabs: manyTabs };
    },
    template: `
      <div class="max-w-2xl">
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :scrollable="true"
        />
      </div>
    `,
  }),
};


// 11. Compact Mode - Icon Only
export const CompactModeIconOnly = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      return { activeTab, tabs: tabsWithIconsAndCounts };
    },
    template: `
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon"
        />
      </div>
    `,
  }),
};

// 12. Compact Mode - Icon and Badge
export const CompactModeIconBadge = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      return { activeTab, tabs: tabsWithIconsAndCounts };
    },
    template: `
      <div>
        <p class="text-sm text-slate-600 mb-4">Наведите на таб или выберите его, чтобы увидеть полный текст</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    `,
  }),
};

// 13. Compact with Tabs Top
export const CompactTabsTop = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('dashboard');
      return { activeTab, tabs: manyTabs };
    },
    template: `
      <div>
        <p class="text-sm text-slate-600 mb-4">Компактный режим с классическими табами</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
        />
      </div>
    `,
  }),
};

// 14. Compact with Scrolling
export const CompactWithScrolling = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('dashboard');
      return { activeTab, tabs: manyTabs };
    },
    template: `
      <div class="max-w-xl">
        <p class="text-sm text-slate-600 mb-4">Компактный режим с прокруткой</p>
        <DXTabs 
          v-model="activeTab" 
          :tabs="tabs" 
          variant="tabs-top"
          :compact="true"
          compactDisplay="icon-badge"
          :scrollable="true"
        />
      </div>
    `,
  }),
};

// 15. Custom Icon Animations
export const CustomIconAnimations = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('home');
      const tabs = [
        { value: 'home', label: 'Wiggle', icon: HomeIcon, iconAnimation: 'wiggle' },
        { value: 'profile', label: 'Scale', icon: UserIcon, iconAnimation: 'scale' },
        { value: 'settings', label: 'Rotate', icon: Cog6ToothIcon, iconAnimation: 'rotate' },
        { value: 'none', label: 'None', icon: DocumentTextIcon, iconAnimation: 'none' },
      ];
      return { activeTab, tabs };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" :animateActiveOnly="false" />',
  }),
};

// 16. All Features Combined
export const AllFeatures = {
  render: () => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('dashboard');
      return { activeTab, tabs: manyTabs };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Buttons + Compact + Center</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="buttons"
            align="center"
            :compact="true"
            compactDisplay="icon-badge"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Top + Scroll + Compact</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-top"
            :compact="true"
            compactDisplay="icon-badge"
            :scrollable="true"
          />
        </div>
        
        <div class="max-w-2xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Tabs Bottom + Scroll + Right Align</h3>
          <DXTabs 
            v-model="activeTab" 
            :tabs="tabs" 
            variant="tabs-bottom"
            align="right"
            :scrollable="true"
          />
        </div>
      </div>
    `,
  }),
};

// 17. Playground
export const Playground = {
  args: {
    variant: 'buttons',
    align: 'left',
    scrollable: true,
    showScrollButtons: false,
    compact: false,
    compactDisplay: 'icon-badge',
    iconAnimation: 'wiggle',
    animateActiveOnly: true,
  },
  render: (args) => ({
    components: { DXTabs },
    setup() {
      const activeTab = ref('all');
      return { activeTab, tabs: tabsWithIconsAndCounts, args };
    },
    template: '<DXTabs v-model="activeTab" :tabs="tabs" v-bind="args" />',
  }),
};
