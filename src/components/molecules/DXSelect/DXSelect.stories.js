import DXSelect from './DXSelect.vue';
import { ref } from 'vue';
import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  BriefcaseIcon,
  LanguageIcon,
  FlagIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXSelect',
  component: DXSelect,
  tags: ['autodocs', 'category:form'],
  parameters: {
    docs: {
      description: {
        component: `
# DXSelect

Компонент выпадающего списка с поддержкой иконок, валидации и интеграции с группами полей.

## Назначение

DXSelect предоставляет стандартизированный выпадающий список для выбора одного значения из списка опций.
Компонент поддерживает иконки, валидацию, состояния ошибок и автоматическую адаптацию при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок и вспомогательного текста
- \`DXIconWrapper\` - для отображения иконки слева
- \`DXIcon\` - для иконки chevron справа
- \`useSize\` composable - для унификации размеров (sm, md, lg)
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Формы выбора значений
- Фильтры и сортировка
- Любые места, требующие выбора из списка опций

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value1', label: 'Label 1' }, { value: 'value2', label: 'Label 2' }]
\`\`\`
- \`value\` - значение опции (String или Number)
- \`label\` - отображаемый текст

### Иконки
- **prefixIcon**: Иконка слева от селекта (Heroicon компонент)
- **chevron**: Иконка справа (ChevronDownIcon, всегда отображается)
- Размер иконки автоматически адаптируется к размеру поля

### Валидация
- При наличии \`error\` prop, поле получает красную рамку (\`border-rose-300\`)
- Текст ошибки отображается через \`DXFormLabel\`
- Состояние ошибки синхронизируется с \`DXInputGroup\`

### Размеры
Поддерживает три размера:
- **sm** - компактный размер
- **md** - средний размер (по умолчанию)
- **lg** - крупный размер

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Number значений.

### Placeholder
- Поддерживает \`placeholder\` prop для отображения подсказки
- Placeholder отображается как disabled опция в начале списка

### Состояния
- **disabled** - отключает поле (opacity-60, cursor-not-allowed, bg-slate-50)
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное (через DXFormLabel)

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)

### Нативный select
Компонент использует нативный HTML \`<select>\` элемент, что обеспечивает:
- Нативную доступность
- Работу с клавиатурой
- Поддержку мобильных устройств
        `,
      },
    },
  },
};

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
];

export const Default = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('banana');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Fruit" />',
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const value = ref('apple');
      return { value, options };
    },
    template: '<DXSelect v-model="value" :options="options" label="Disabled" disabled />',
  }),
};

// С иконками
export const WithPrefixIcon = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const country = ref('');
      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
      ];
      return { country, countries, GlobeAltIcon };
    },
    template: `
      <DXSelect
        v-model="country"
        label="Country"
        :options="countries"
        :prefix-icon="GlobeAltIcon"
        placeholder="Select country"
      />
    `,
  }),
};

export const Currency = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const currency = ref('');
      const currencies = [
        { value: 'usd', label: 'USD - US Dollar' },
        { value: 'eur', label: 'EUR - Euro' },
        { value: 'gbp', label: 'GBP - British Pound' },
        { value: 'jpy', label: 'JPY - Japanese Yen' },
      ];
      return { currency, currencies, CurrencyDollarIcon };
    },
    template: `
      <DXSelect
        v-model="currency"
        label="Currency"
        :options="currencies"
        :prefix-icon="CurrencyDollarIcon"
        placeholder="Select currency"
      />
    `,
  }),
};

export const Location = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const city = ref('');
      const cities = [
        { value: 'nyc', label: 'New York' },
        { value: 'lon', label: 'London' },
        { value: 'tok', label: 'Tokyo' },
        { value: 'par', label: 'Paris' },
      ];
      return { city, cities, MapPinIcon };
    },
    template: `
      <DXSelect
        v-model="city"
        label="City"
        :options="cities"
        :prefix-icon="MapPinIcon"
        placeholder="Select city"
      />
    `,
  }),
};

export const FormWithIcons = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const form = ref({
        language: '',
        country: '',
        currency: '',
        role: '',
      });
      
      const languages = [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' },
      ];
      
      const countries = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
      ];
      
      const currencies = [
        { value: 'usd', label: 'USD' },
        { value: 'eur', label: 'EUR' },
        { value: 'gbp', label: 'GBP' },
      ];
      
      const roles = [
        { value: 'dev', label: 'Developer' },
        { value: 'des', label: 'Designer' },
        { value: 'pm', label: 'Product Manager' },
      ];
      
      return { 
        form, languages, countries, currencies, roles,
        LanguageIcon, GlobeAltIcon, CurrencyDollarIcon, BriefcaseIcon 
      };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="form.language"
          label="Language"
          :options="languages"
          :prefix-icon="LanguageIcon"
          placeholder="Select language"
        />
        
        <DXSelect
          v-model="form.country"
          label="Country"
          :options="countries"
          :prefix-icon="GlobeAltIcon"
          placeholder="Select country"
        />
        
        <DXSelect
          v-model="form.currency"
          label="Currency"
          :options="currencies"
          :prefix-icon="CurrencyDollarIcon"
          placeholder="Select currency"
        />
        
        <DXSelect
          v-model="form.role"
          label="Role"
          :options="roles"
          :prefix-icon="BriefcaseIcon"
          placeholder="Select role"
        />
      </div>
    `,
  }),
};

export const AllSizes = {
  render: () => ({
    components: { DXSelect },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      const priorities = [
        { value: 'low', label: 'Low' },
        { value: 'med', label: 'Medium' },
        { value: 'high', label: 'High' },
      ];
      return { small, medium, large, priorities, FlagIcon };
    },
    template: `
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="small"
          size="sm"
          label="Small"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="medium"
          size="md"
          label="Medium (default)"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="large"
          size="lg"
          label="Large"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
      </div>
    `,
  }),
};

