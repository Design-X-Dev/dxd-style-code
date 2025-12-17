import DXCopyField from './DXCopyField.vue';

export default {
  title: 'Molecules/DXCopyField',
  component: DXCopyField,
  tags: ['autodocs'],
};

export const Default = {
  args: { value: 'https://example.com/share/abc123', label: 'Share Link' },
};

export const Code = {
  args: { value: 'npm install dx-components', label: 'Installation' },
};

export const ApiKey = {
  args: { value: 'sk_live_abc123xyz789', label: 'API Key' },
};

