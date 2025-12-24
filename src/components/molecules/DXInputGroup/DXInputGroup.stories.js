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
  tags: ['autodocs', 'category:form'],
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

