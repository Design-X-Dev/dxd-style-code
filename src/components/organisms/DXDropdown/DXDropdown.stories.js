import DXDropdown from './DXDropdown.vue';

export default {
  title: 'Organisms/DXDropdown',
  component: DXDropdown,
  tags: ['autodocs'],
};

export const Default = {
  render: () => ({
    components: { DXDropdown },
    template: `
      <DXDropdown>
        <template #trigger>
          <button class="px-4 py-2 bg-slate-100 rounded-xl">Open Menu</button>
        </template>
        <template #content>
          <div class="p-2">
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-lg">Profile</button>
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-lg">Settings</button>
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-lg">Logout</button>
          </div>
        </template>
      </DXDropdown>
    `,
  }),
};

export const WithDivider = {
  render: () => ({
    components: { DXDropdown },
    template: `
      <DXDropdown>
        <template #trigger>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl">Actions</button>
        </template>
        <template #content>
          <div class="p-2">
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-lg">Edit</button>
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 rounded-lg">Duplicate</button>
            <div class="h-px bg-slate-200 my-2"></div>
            <button class="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 rounded-lg">Delete</button>
          </div>
        </template>
      </DXDropdown>
    `,
  }),
};

