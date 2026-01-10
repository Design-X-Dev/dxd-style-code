import DXInputGroup from './DXInputGroup.vue';
import DXInputAddon from '../../atoms/DXInputAddon/DXInputAddon.vue';
import DXInput from '../DXInput/DXInput.vue';
import DXSelect from '../DXSelect/DXSelect.vue';
import DXTextarea from '../DXTextarea/DXTextarea.vue';
import { ref } from 'vue';
import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXInputGroup',
  component: DXInputGroup,
  tags: ['autodocs', 'category:form', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Группа полей ввода с поддержкой аддонов (префиксов и суффиксов) и синхронизацией состояний.

## Назначение

DXInputGroup предоставляет способ группировки полей ввода с дополнительными элементами (аддонами)
слева и справа. Компонент автоматически управляет синхронизацией размеров, состояний disabled/error
и правильным применением border-radius для создания визуально единой группы.

## Архитектура

### Использует
- \`DXInput\` - основное поле ввода (автоматически адаптируется при использовании внутри группы)
- \`DXInputAddon\` - аддоны слева и справа от поля
- \`DXSelect\` - может использоваться вместо DXInput
- \`DXTextarea\` - может использоваться вместо DXInput
- \`provide/inject\` - для передачи контекста группы к дочерним компонентам
- Система регистрации компонентов - для отслеживания структуры и правильного применения стилей

### Используется в
- Формы с префиксами (например, https:// для URL)
- Формы с суффиксами (например, валюта для цены)
- Формы с обоими аддонами (например, $ и .00 для суммы)
- Интеграция с селектами и textarea

## Внутренняя логика

### Система регистрации компонентов
Компонент отслеживает порядок регистрации дочерних компонентов для:
- Определения наличия аддонов слева и справа от каждого поля
- Правильного применения border-radius:
  - Оба аддона → \`rounded-none\` (без скругления)
  - Только слева → \`rounded-l-none rounded-r-xl\` (скругление справа)
  - Только справа → \`rounded-l-xl rounded-r-none\` (скругление слева)
  - Нет аддонов → \`rounded-xl\` (полное скругление)
- Синхронизации размеров всех компонентов в группе

### Интеграция с дочерними компонентами
При использовании дочерних компонентов внутри группы:
- **DXInput**: Автоматически регистрируется как 'input', получает информацию о позиции аддонов
- **DXInputAddon**: Автоматически регистрируется как 'addon', синхронизирует размер и состояние
- **DXSelect**: Может использоваться вместо DXInput, также регистрируется
- **DXTextarea**: Может использоваться вместо DXInput, также регистрируется

### Синхронизация состояний
- **size**: Размер применяется ко всем компонентам в группе
- **disabled**: Состояние disabled наследуется всеми компонентами
- **error**: Состояние ошибки синхронизируется со всеми компонентами (красная рамка)

## Особенности

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.
Размер применяется ко всем компонентам в группе автоматически.

### Label и Helper
- **label**: Отображается над группой полей
- **helper**: Вспомогательный текст под группой полей
- **error**: Текст ошибки (заменяет helper при наличии)

### Аддоны
Аддоны могут содержать:
- Текст (например, "https://", "USD", "$")
- Иконки (через \`icon\` prop в DXInputAddon)
- Комбинацию текста и иконки

### Гибкость
Группа может содержать:
- Только поле без аддонов
- Поле с аддоном слева
- Поле с аддоном справа
- Поле с аддонами с обеих сторон
- Несколько полей с аддонами

### Визуальное единство
Все компоненты в группе визуально объединены:
- Общие границы между элементами
- Синхронизированные размеры
- Единое состояние (disabled/error)
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXInputGroup, DXInputAddon, DXInput },
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
    components: { DXInputGroup, DXInputAddon, DXInput },
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

export const BothSides = {
  render: () => ({
    components: { DXInputGroup, DXInputAddon, DXInput },
    setup() {
      const amount = ref('');
      return { amount, CurrencyDollarIcon };
    },
    template: `
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>.00</DXInputAddon>
      </DXInputGroup>
    `,
  }),
};

export const WithSelect = {
  render: () => ({
    components: { DXInputGroup, DXInputAddon, DXSelect },
    setup() {
      const country = ref('');
      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'de', label: 'Germany' },
      ];
      return { country, countries, GlobeAltIcon };
    },
    template: `
      <DXInputGroup label="Country">
        <DXInputAddon :icon="GlobeAltIcon" />
        <DXSelect v-model="country" :options="countries" placeholder="Select country" />
      </DXInputGroup>
    `,
  }),
};

export const WithTextarea = {
  render: () => ({
    components: { DXInputGroup, DXInputAddon, DXTextarea },
    setup() {
      const message = ref('');
      return { message, MagnifyingGlassIcon };
    },
    template: `
      <DXInputGroup label="Message">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXTextarea v-model="message" placeholder="Enter your message..." :rows="4" />
      </DXInputGroup>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXInputGroup, DXInputAddon, DXInput },
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
    components: { DXInputGroup, DXInputAddon, DXInput },
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
    components: { DXInputGroup, DXInputAddon, DXInput },
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
    components: { DXInputGroup, DXInputAddon, DXInput, DXSelect },
    setup() {
      const website = ref('');
      const price = ref('');
      const country = ref('');
      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
      ];
      return {
        website,
        price,
        country,
        countries,
        GlobeAltIcon,
        CurrencyDollarIcon,
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
        
        <DXInputGroup label="Country">
          <DXInputAddon :icon="GlobeAltIcon" />
          <DXSelect v-model="country" :options="countries" placeholder="Select country" />
        </DXInputGroup>
      </div>
    `,
  }),
};

