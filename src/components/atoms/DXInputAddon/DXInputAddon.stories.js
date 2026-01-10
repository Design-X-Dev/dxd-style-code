import DXInputAddon from './DXInputAddon.vue';
import DXInputGroup from '../../molecules/DXInputGroup/DXInputGroup.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import { ref } from 'vue';
import {
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  AtSymbolIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/DXInputAddon',
  component: DXInputAddon,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент аддона для групп полей ввода, используемый для добавления префиксов и суффиксов к полям.

## Назначение

DXInputAddon предоставляет способ добавления дополнительных элементов (текста, иконок) слева или справа
от полей ввода в составе DXInputGroup. Компонент автоматически синхронизирует размер, состояние disabled/error
и правильно применяет border-radius для визуального единства группы.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (синхронизируется с DXInputGroup)
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Префиксы для URL (https://)
- Суффиксы для валют (USD, EUR)
- Иконки в группах полей
- Любые места, требующие дополнительных элементов рядом с полями

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Аддон автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой (красная рамка)
- Border-radius адаптируется в зависимости от позиции:
  - Первый аддон → \`rounded-l-xl\`
  - Последний аддон → \`rounded-r-xl\`
  - Средний аддон → \`rounded-none\`

### Содержимое
Аддон может содержать:
- Текст через default slot (например, "https://", "USD")
- Иконку через \`icon\` prop (Heroicon компонент)
- Комбинацию текста и иконки

### Визуальное оформление
- Фон: \`bg-slate-50\` (светло-серый)
- Текст: \`text-slate-600\`
- Рамка: синхронизируется с группой
- Padding: адаптируется к размеру группы

## Особенности

### Позиционирование
- Аддоны размещаются слева или справа от основного поля
- Может быть несколько аддонов (например, $ слева и USD справа)

### Размеры
Размер автоматически синхронизируется с размером DXInputGroup:
- **sm** - маленький размер
- **md** - средний размер (по умолчанию)
- **lg** - крупный размер

### Состояния
- **disabled** - наследуется от группы, аддон становится полупрозрачным
- **error** - наследуется от группы, рамка становится красной

### Иконки
- Иконка отображается слева от текста (если есть)
- Размер иконки: \`w-4 h-4\`
- Можно использовать только иконку без текста

### Использование
Аддоны всегда используются внутри DXInputGroup:
\`\`\`
<DXInputGroup label="Website">
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="url" placeholder="example.com" />
</DXInputGroup>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Heroicon компонент для отображения иконки',
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const url = ref('');
      return { url };
    },
    template: `
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    `,
  }),
};

export const WithSuffix = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const price = ref('');
      return { price };
    },
    template: `
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `,
  }),
};

export const WithIcon = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const search = ref('');
      return { search, MagnifyingGlassIcon };
    },
    template: `
      <DXInputGroup label="Search">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXInput v-model="search" placeholder="Search..." />
      </DXInputGroup>
    `,
  }),
};

export const WithIconAndText = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const email = ref('');
      return { email, AtSymbolIcon };
    },
    template: `
      <DXInputGroup label="Email">
        <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
        <DXInput v-model="email" type="email" placeholder="username" />
      </DXInputGroup>
    `,
  }),
};

export const BothSides = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const amount = ref('');
      return { amount, CurrencyDollarIcon };
    },
    template: `
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      return { small, medium, large, GlobeAltIcon };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Small" size="sm">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="small" size="sm" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Medium (default)" size="md">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="medium" size="md" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Large" size="lg">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="large" size="lg" placeholder="example.com" />
        </DXInputGroup>
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const url = ref('example.com');
      const price = ref('100.00');
      return { url, price, GlobeAltIcon, CurrencyDollarIcon };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Disabled Website" disabled>
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" disabled placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Disabled Price" disabled>
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" disabled placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `,
  }),
};

export const WithError = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const url = ref('invalid-url');
      const price = ref('abc');
      return { url, price, GlobeAltIcon, CurrencyDollarIcon };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Website URL" error="Invalid URL format">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" error="Invalid URL format" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price" error="Must be a number">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" error="Must be a number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `,
  }),
};

export const UseCases = {
  render: () => ({
    components: { DXInputAddon, DXInputGroup, DXInput },
    setup() {
      const website = ref('');
      const price = ref('');
      const search = ref('');
      const email = ref('');
      return {
        website,
        price,
        search,
        email,
        GlobeAltIcon,
        CurrencyDollarIcon,
        MagnifyingGlassIcon,
        AtSymbolIcon,
      };
    },
    template: `
      <div class="space-y-6 max-w-md">
        <DXInputGroup label="Website URL">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="website" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
        
        <DXInputGroup label="Search">
          <DXInputAddon :icon="MagnifyingGlassIcon" />
          <DXInput v-model="search" placeholder="Search..." />
        </DXInputGroup>
        
        <DXInputGroup label="Email">
          <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
          <DXInput v-model="email" type="email" placeholder="username" />
        </DXInputGroup>
      </div>
    `,
  }),
};

