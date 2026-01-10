import DXSegmentedControl from './DXSegmentedControl.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import DXStack from '../../atoms/DXStack/DXStack.vue';
import DXText from '../../atoms/DXText/DXText.vue';
import { ref } from 'vue';
import {
  Squares2X2Icon,
  ListBulletIcon,
  TableCellsIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXSegmentedControl',
  component: DXSegmentedControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент сегментированного контрола для выбора одного значения из группы с плавающим индикатором.

## Назначение

DXSegmentedControl предоставляет способ выбора одного значения из группы опций с визуальным
индикатором выбранного сегмента. Компонент поддерживает иконки, счетчики, анимации и
автоматически адаптирует размер индикатора под выбранный сегмент.

## Архитектура

### Использует
- \`DXIcon\` - для иконок в опциях
- Динамическое позиционирование - для плавающего индикатора

### Используется в
- Переключение режимов отображения
- Фильтры и сортировка
- Настройки и опции
- Любые места, требующие выбора одного значения из группы

## Внутренняя логика

### Плавающий индикатор
Компонент использует абсолютно позиционированный индикатор, который автоматически
перемещается к выбранному сегменту:
- Размер индикатора соответствует размеру выбранной кнопки
- Позиция вычисляется динамически на основе offset выбранной кнопки
- Плавная анимация перемещения через CSS transitions

### Структура опций
Каждая опция может содержать:
- \`value\` - значение опции (обязательно)
- \`label\` - текст опции
- \`icon\` - иконка (Heroicon компонент)
- \`count\` - счетчик (число)

### Анимации иконок
- Глобальная анимация через \`iconAnimation\` prop
- При \`animateActiveOnly={true}\` (по умолчанию) - анимируется только активная иконка
- При \`animateActiveOnly={false}\` - анимируются все иконки

### Счетчики
Счетчики отображаются как бейджи справа от текста/иконки:
- В активном сегменте: темный фон (\`bg-slate-800 text-white\`)
- В неактивных сегментах: светлый фон (\`bg-slate-200 text-slate-700\`)

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String, Number или Boolean значений.

### Визуальное оформление
- Фон группы: \`bg-slate-100\`
- Скругление: \`rounded-xl\`
- Индикатор: белый фон с тенью (\`bg-white shadow-sm\`)
- Активный сегмент: темный текст (\`text-slate-900\`)
- Неактивные сегменты: серый текст (\`text-slate-600\`)

### Состояния

| Состояние | Описание |
|-----------|----------|
| \`disabled\` | Отключает весь контрол |
| \`selected\` | Визуально выделяет выбранный сегмент |

### Лейбл
Поддерживает опциональный \`label\` prop для отображения лейбла над контролом.
        `,
      },
    },
  },
  argTypes: {
    iconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const WithCounts = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('all');
      const options = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" />',
  }),
};

export const WithIcons = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" />',
  }),
};

export const IconsOnly = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" />',
  }),
};

export const Navigation = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const page = ref('home');
      const options = [
        { value: 'home', icon: HomeIcon, label: 'Home' },
        { value: 'profile', icon: UserIcon, label: 'Profile' },
        { value: 'settings', icon: Cog6ToothIcon, label: 'Settings' },
      ];
      return { page, options };
    },
    template: '<DXSegmentedControl v-model="page" :options="options" />',
  }),
};

export const NotificationTypes = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const type = ref('all');
      const options = [
        { value: 'all', icon: BellIcon, label: 'All', count: 42 },
        { value: 'email', icon: EnvelopeIcon, label: 'Email', count: 12 },
        { value: 'chat', icon: ChatBubbleLeftIcon, label: 'Chat', count: 30 },
      ];
      return { type, options };
    },
    template: '<DXSegmentedControl v-model="type" :options="options" />',
  }),
};

export const ThemeSelector = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const theme = ref('light');
      const options = [
        { value: 'light', icon: SunIcon, label: 'Light' },
        { value: 'dark', icon: MoonIcon, label: 'Dark' },
        { value: 'auto', icon: ComputerDesktopIcon, label: 'Auto' },
      ];
      return { theme, options };
    },
    template: '<DXSegmentedControl v-model="theme" :options="options" />',
  }),
};

export const MediaTypes = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const media = ref('all');
      const options = [
        { value: 'all', icon: DocumentTextIcon, count: 156 },
        { value: 'photos', icon: PhotoIcon, count: 89 },
        { value: 'videos', icon: VideoCameraIcon, count: 45 },
        { value: 'audio', icon: MusicalNoteIcon, count: 22 },
      ];
      return { media, options };
    },
    template: '<DXSegmentedControl v-model="media" :options="options" icon-animation="scale" />',
  }),
};

export const AnimatedIcons = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const wiggle = ref('grid');
      const scale = ref('grid');
      const rotate = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      return { wiggle, scale, rotate, options };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Wiggle Animation</p>
          <DXSegmentedControl v-model="wiggle" :options="options" icon-animation="wiggle" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Scale Animation</p>
          <DXSegmentedControl v-model="scale" :options="options" icon-animation="scale" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Rotate Animation</p>
          <DXSegmentedControl v-model="rotate" :options="options" icon-animation="rotate" />
        </div>
      </div>
    `,
  }),
};

export const AnimateAll = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const view = ref('grid');
      const options = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      return { view, options };
    },
    template: '<DXSegmentedControl v-model="view" :options="options" icon-animation="wiggle" :animate-active-only="false" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const selected = ref('option1');
      const options = [
        { value: 'option1', icon: HomeIcon, label: 'Option 1' },
        { value: 'option2', icon: UserIcon, label: 'Option 2' },
      ];
      return { selected, options };
    },
    template: '<DXSegmentedControl v-model="selected" :options="options" disabled />',
  }),
};

export const Interactive = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const tab = ref('data');
      const options = [
        { value: 'data', icon: ChartBarIcon, label: 'Analytics', count: 24 },
        { value: 'messages', icon: EnvelopeIcon, label: 'Messages', count: 5 },
        { value: 'notifications', icon: BellIcon, label: 'Alerts', count: 12 },
      ];
      return { tab, options };
    },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Dashboard Tabs</h3>
        <DXSegmentedControl 
          v-model="tab" 
          :options="options" 
          icon-animation="wiggle"
        />
        <div class="p-4 bg-white rounded-lg border border-slate-200">
          <p class="text-sm text-slate-600">
            Current tab: <strong class="text-slate-900">{{ tab }}</strong>
          </p>
        </div>
      </div>
    `,
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const simple = ref('all');
      const withCounts = ref('all');
      const withIcons = ref('grid');
      const iconsOnly = ref('grid');
      const animated = ref('grid');
      
      const simpleOptions = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ];
      
      const countOptions = [
        { value: 'all', label: 'All', count: 42 },
        { value: 'active', label: 'Active', count: 28 },
        { value: 'archived', label: 'Archived', count: 14 },
      ];
      
      const iconOptions = [
        { value: 'grid', icon: Squares2X2Icon, label: 'Grid' },
        { value: 'list', icon: ListBulletIcon, label: 'List' },
        { value: 'table', icon: TableCellsIcon, label: 'Table' },
      ];
      
      const iconOnlyOptions = [
        { value: 'grid', icon: Squares2X2Icon },
        { value: 'list', icon: ListBulletIcon },
        { value: 'table', icon: TableCellsIcon },
      ];
      
      return { simple, withCounts, withIcons, iconsOnly, animated, simpleOptions, countOptions, iconOptions, iconOnlyOptions };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Simple</p>
          <DXSegmentedControl v-model="simple" :options="simpleOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">With Counts</p>
          <DXSegmentedControl v-model="withCounts" :options="countOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">With Icons</p>
          <DXSegmentedControl v-model="withIcons" :options="iconOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Icons Only</p>
          <DXSegmentedControl v-model="iconsOnly" :options="iconOnlyOptions" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Animated Icons</p>
          <DXSegmentedControl v-model="animated" :options="iconOnlyOptions" icon-animation="scale" />
        </div>
      </div>
    `,
  }),
};

export const Scrollable = {
  parameters: {
    docs: {
      description: {
        story: `
**Режим прокрутки (scrollable)**

Включает горизонтальную прокрутку внутри контейнера:
- Скроллбар скрыт
- Поддержка drag-to-scroll (перетаскивание мышью)
- Автоматическое центрирование выбранного элемента
- Курсор меняется на grab/grabbing

Используйте \`maxWidth\` для ограничения ширины контейнера.
        `,
      },
    },
  },
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const month = ref(1);
      const monthOptions = [
        { value: 1, label: 'Январь' },
        { value: 2, label: 'Февраль' },
        { value: 3, label: 'Март' },
        { value: 4, label: 'Апрель' },
        { value: 5, label: 'Май' },
        { value: 6, label: 'Июнь' },
        { value: 7, label: 'Июль' },
        { value: 8, label: 'Август' },
        { value: 9, label: 'Сентябрь' },
        { value: 10, label: 'Октябрь' },
        { value: 11, label: 'Ноябрь' },
        { value: 12, label: 'Декабрь' },
      ];
      return { month, monthOptions };
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Scrollable с maxWidth="350px" — зажмите и перетащите</p>
          <DXSegmentedControl 
            v-model="month" 
            :options="monthOptions" 
            scrollable 
            maxWidth="350px"
          />
        </div>
        <p class="text-sm text-slate-600">Выбрано: <strong>{{ monthOptions.find(o => o.value === month)?.label }}</strong></p>
      </div>
    `,
  }),
};

export const ScrollableDays = {
  parameters: {
    docs: {
      description: {
        story: 'Выбор дня недели с прокруткой.',
      },
    },
  },
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const day = ref('mon');
      const dayOptions = [
        { value: 'mon', label: 'Пн' },
        { value: 'tue', label: 'Вт' },
        { value: 'wed', label: 'Ср' },
        { value: 'thu', label: 'Чт' },
        { value: 'fri', label: 'Пт' },
        { value: 'sat', label: 'Сб' },
        { value: 'sun', label: 'Вс' },
      ];
      return { day, dayOptions };
    },
    template: `
      <div class="space-y-4">
        <p class="text-xs text-slate-500 mb-2">Дни недели — обычный режим (без прокрутки)</p>
        <DXSegmentedControl v-model="day" :options="dayOptions" />
        
        <p class="text-xs text-slate-500 mb-2 mt-6">Дни недели — scrollable с maxWidth="200px"</p>
        <DXSegmentedControl 
          v-model="day" 
          :options="dayOptions" 
          scrollable 
          maxWidth="200px"
        />
      </div>
    `,
  }),
};

export const ScrollableWithIcons = {
  parameters: {
    docs: {
      description: {
        story: 'Scrollable режим с иконками и счётчиками.',
      },
    },
  },
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const category = ref('all');
      const categoryOptions = [
        { value: 'all', icon: DocumentTextIcon, label: 'Все', count: 156 },
        { value: 'photos', icon: PhotoIcon, label: 'Фото', count: 89 },
        { value: 'videos', icon: VideoCameraIcon, label: 'Видео', count: 45 },
        { value: 'audio', icon: MusicalNoteIcon, label: 'Аудио', count: 22 },
        { value: 'docs', icon: DocumentTextIcon, label: 'Документы', count: 34 },
        { value: 'charts', icon: ChartBarIcon, label: 'Графики', count: 12 },
      ];
      return { category, categoryOptions };
    },
    template: `
      <div class="space-y-4">
        <p class="text-xs text-slate-500 mb-2">Категории с иконками — scrollable maxWidth="400px"</p>
        <DXSegmentedControl 
          v-model="category" 
          :options="categoryOptions" 
          scrollable 
          maxWidth="400px"
          icon-animation="scale"
        />
        <p class="text-sm text-slate-600">Выбрано: <strong>{{ categoryOptions.find(o => o.value === category)?.label }}</strong></p>
      </div>
    `,
  }),
};

export const ScrollableResponsive = {
  parameters: {
    docs: {
      description: {
        story: 'Scrollable с maxWidth="100%" — занимает всю доступную ширину контейнера. Пример с DX-компонентами.',
      },
    },
  },
  render: () => ({
    components: { DXSegmentedControl, DXCard, DXStack, DXText },
    setup() {
      const selected = ref('item1');
      const options = Array.from({ length: 15 }, (_, i) => ({
        value: `item${i + 1}`,
        label: `Элемент ${i + 1}`,
      }));
      return { selected, options };
    },
    template: `
      <DXStack gap="4">
        <DXText size="xs" variant="secondary">15 элементов — scrollable maxWidth="100%"</DXText>
        <DXCard padding="4" variant="outlined">
          <DXSegmentedControl 
            v-model="selected" 
            :options="options" 
            scrollable 
            maxWidth="100%"
          />
        </DXCard>
        <DXText size="sm" variant="secondary">Выбрано: <strong>{{ selected }}</strong></DXText>
      </DXStack>
    `,
  }),
};

export const ScrollableFadeEffect = {
  parameters: {
    docs: {
      description: {
        story: `
**Градиенты размытия по краям**

При прокрутке появляются градиенты слева/справа, указывающие на наличие скрытого контента.
- Градиент **исчезает** когда достигнут край
- Градиент **появляется** когда есть контент за пределами видимой области
- Можно отключить через showFade={false}
        `,
      },
    },
  },
  render: () => ({
    components: { DXSegmentedControl },
    setup() {
      const withFade = ref(6);
      const withoutFade = ref(6);
      const monthOptions = [
        { value: 1, label: 'Январь' },
        { value: 2, label: 'Февраль' },
        { value: 3, label: 'Март' },
        { value: 4, label: 'Апрель' },
        { value: 5, label: 'Май' },
        { value: 6, label: 'Июнь' },
        { value: 7, label: 'Июль' },
        { value: 8, label: 'Август' },
        { value: 9, label: 'Сентябрь' },
        { value: 10, label: 'Октябрь' },
        { value: 11, label: 'Ноябрь' },
        { value: 12, label: 'Декабрь' },
      ];
      return { withFade, withoutFade, monthOptions };
    },
    template: `
      <div class="space-y-8">
        <div>
          <p class="text-xs text-slate-500 mb-2">С градиентами (по умолчанию) — прокрутите к краям, градиенты исчезнут</p>
          <DXSegmentedControl 
            v-model="withFade" 
            :options="monthOptions" 
            scrollable 
            maxWidth="300px"
          />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Без градиентов (showFade=false)</p>
          <DXSegmentedControl 
            v-model="withoutFade" 
            :options="monthOptions" 
            scrollable 
            maxWidth="300px"
            :showFade="false"
          />
        </div>
      </div>
    `,
  }),
};
