import DXTable from './DXTable.vue';

export default {
  title: 'Organisms/DXTable',
  component: DXTable,
  tags: ['autodocs'],
};

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
];

export const Default = {
  args: { columns, data },
};

export const Empty = {
  args: { columns, data: [] },
};

export const Loading = {
  args: { columns, data: [], loading: true },
};

