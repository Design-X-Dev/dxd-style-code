import DXButton from './DXButton.vue';
import DXIcon from '../DXIcon/DXIcon.vue';
import { PlusIcon, TrashIcon, PencilIcon, HeartIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/DXButton',
  component: DXButton,
  tags: ['autodocs', 'category:form'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline', 'success', 'warning', 'danger', 'info', 'link', 'soft'],
      description: 'Вариант оформления кнопки',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    block: {
      control: 'boolean',
      description: 'Растянуть на всю ширину',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Только иконка (квадратная кнопка)',
    },
  },
};

export const Default = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Кнопка</DXButton>',
  }),
};

export const Variants = {
  render: () => ({
    components: { DXButton },
    template: `
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="primary">Primary</DXButton>
            <DXButton variant="secondary">Secondary</DXButton>
            <DXButton variant="ghost">Ghost</DXButton>
            <DXButton variant="outline">Outline</DXButton>
            <DXButton variant="soft">Soft</DXButton>
            <DXButton variant="link">Link</DXButton>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="success">Success</DXButton>
            <DXButton variant="warning">Warning</DXButton>
            <DXButton variant="danger">Danger</DXButton>
            <DXButton variant="info">Info</DXButton>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: primary | secondary | ghost | outline | soft | link | success | warning | danger | info
        </div>
      </div>
    `,
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXButton },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton size="xs">Extra Small</DXButton>
          <DXButton size="sm">Small</DXButton>
          <DXButton size="md">Medium</DXButton>
          <DXButton size="lg">Large</DXButton>
          <DXButton size="xl">Extra Large</DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs (28px) | sm (32px) | md (40px) | lg (48px) | xl (56px)
        </div>
      </div>
    `,
  }),
};

export const Disabled = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Disabled</DXButton>',
  }),
};

export const Block = {
  args: {
    block: true,
  },
  render: (args) => ({
    components: { DXButton },
    setup() { return { args }; },
    template: '<DXButton v-bind="args">Full Width</DXButton>',
  }),
};

export const WithIcon = {
  render: () => ({
    components: { DXButton, DXIcon },
    setup() {
      return { PlusIcon, TrashIcon, PencilIcon };
    },
    template: `
      <div class="flex items-center gap-4">
        <DXButton>
          <DXIcon :icon="PlusIcon" size="sm" />
          Добавить
        </DXButton>
        <DXButton variant="danger">
          <DXIcon :icon="TrashIcon" size="sm" />
          Удалить
        </DXButton>
        <DXButton variant="ghost">
          <DXIcon :icon="PencilIcon" size="sm" />
          Редактировать
        </DXButton>
      </div>
    `,
  }),
};

export const IconOnly = {
  render: () => ({
    components: { DXButton, DXIcon },
    setup() {
      return { PlusIcon, TrashIcon, HeartIcon };
    },
    template: `
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton icon-only size="xs">
            <DXIcon :icon="PlusIcon" size="xs" />
          </DXButton>
          <DXButton icon-only size="sm">
            <DXIcon :icon="PlusIcon" size="sm" />
          </DXButton>
          <DXButton icon-only>
            <DXIcon :icon="HeartIcon" size="sm" />
          </DXButton>
          <DXButton icon-only size="lg">
            <DXIcon :icon="TrashIcon" size="md" />
          </DXButton>
          <DXButton icon-only size="xl">
            <DXIcon :icon="TrashIcon" size="lg" />
          </DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Квадратные кнопки с иконками: xs (28×28px) | sm (32×32px) | md (40×40px) | lg (48×48px) | xl (56×56px)
        </div>
      </div>
    `,
  }),
};

