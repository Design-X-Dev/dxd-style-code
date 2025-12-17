import DXActionButtons from './DXActionButtons.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';
import DXIcon from '../../atoms/DXIcon/DXIcon.vue';
import { ShareIcon, ArrowDownTrayIcon, PrinterIcon } from '@heroicons/vue/24/outline';

export default {
  title: 'Molecules/DXActionButtons',
  component: DXActionButtons,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

// Базовый вариант
export const Default = {
  args: {},
};

// Только редактирование
export const EditOnly = {
  args: {
    showEdit: true,
    showDelete: false,
  },
};

// Только удаление
export const DeleteOnly = {
  args: {
    showEdit: false,
    showDelete: true,
  },
};

// С кнопкой просмотра
export const WithView = {
  args: {
    showView: true,
    showEdit: true,
    showDelete: true,
  },
};

// Только иконки
export const IconOnly = {
  args: {
    iconOnly: true,
    showView: true,
    showEdit: true,
    showDelete: true,
  },
};

// Размеры
export const Sizes = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Extra Small (xs)</p>
          <DXActionButtons size="xs" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Small (sm) - Default</p>
          <DXActionButtons size="sm" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (md)</p>
          <DXActionButtons size="md" />
        </div>
      </div>
    `,
  }),
};

// Выравнивание
export const Alignment = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="space-y-6">
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Left (default)</p>
          <DXActionButtons align="left" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Center</p>
          <DXActionButtons align="center" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Right</p>
          <DXActionButtons align="right" />
        </div>
      </div>
    `,
  }),
};

// С дополнительными кнопками (slot)
export const WithCustomButtons = {
  render: () => ({
    components: { DXActionButtons, DXButton, DXIcon },
    setup() {
      return { ShareIcon, ArrowDownTrayIcon };
    },
    template: `
      <DXActionButtons>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ShareIcon" size="xs" />
          Share
        </DXButton>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ArrowDownTrayIcon" size="xs" />
          Download
        </DXButton>
      </DXActionButtons>
    `,
  }),
};

// В таблице
export const InTable = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="overflow-hidden rounded-xl border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Name</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Role</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">John Doe</td>
              <td class="px-6 py-4 text-sm text-slate-600">john@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Admin</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Jane Smith</td>
              <td class="px-6 py-4 text-sm text-slate-600">jane@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">User</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Bob Johnson</td>
              <td class="px-6 py-4 text-sm text-slate-600">bob@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Moderator</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
};

// В карточках
export const InCards = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Product Title</h3>
          <p class="text-sm text-slate-600 mb-4">Product description goes here...</p>
          <DXActionButtons show-view />
        </div>
        
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Another Product</h3>
          <p class="text-sm text-slate-600 mb-4">Another product description...</p>
          <DXActionButtons show-view />
        </div>
      </div>
    `,
  }),
};

// Отключенное состояние
export const Disabled = {
  args: {
    disabled: true,
    showView: true,
  },
};

// Интерактивный пример
export const Interactive = {
  render: () => ({
    components: { DXActionButtons },
    setup() {
      const handleView = () => alert('View clicked!');
      const handleEdit = () => alert('Edit clicked!');
      const handleDelete = () => {
        if (confirm('Are you sure you want to delete this item?')) {
          alert('Item deleted!');
        }
      };
      
      return { handleView, handleEdit, handleDelete };
    },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Try clicking the buttons</h3>
        <DXActionButtons 
          show-view
          @view="handleView"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>
    `,
  }),
};

// Все варианты
export const AllVariants = {
  render: () => ({
    components: { DXActionButtons },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Standard (Edit + Delete)</h3>
          <DXActionButtons />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With View</h3>
          <DXActionButtons show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Icon Only</h3>
          <DXActionButtons icon-only show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Different Sizes</h3>
          <div class="space-y-3">
            <DXActionButtons size="xs" />
            <DXActionButtons size="sm" />
            <DXActionButtons size="md" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Alignment</h3>
          <div class="space-y-3">
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="left" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="center" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="right" />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

