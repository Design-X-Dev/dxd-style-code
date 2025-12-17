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
  title: 'Atoms/DXSelect',
  component: DXSelect,
  tags: ['autodocs'],
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

