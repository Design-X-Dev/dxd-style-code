import { ref } from 'vue';
import DXSidebarMenu from './DXSidebarMenu.vue';
import DXCard from '../../atoms/DXCard/DXCard.vue';
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  FolderIcon,
  InboxIcon,
  CalendarIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Organisms/DXSidebarMenu/Embedded',
  component: DXSidebarMenu,
  tags: ['autodocs'],
};

export const InCard = {
  render: () => ({
    components: { DXSidebarMenu, DXCard },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users', badge: '12' },
          ]
        },
        {
          title: 'Настройки',
          items: [
            { id: 'calendar', label: 'Календарь', icon: CalendarIcon, to: '/calendar' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Встроенное меню в карточке</h1>
        
        <div class="grid grid-cols-3 gap-6">
          <DXCard class="col-span-1">
            <DXSidebarMenu 
              title="Навигация"
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :collapsible="false"
              :bordered="false"
            />
          </DXCard>
          
          <div class="col-span-2">
            <DXCard>
              <h2 class="text-lg font-semibold mb-4">Основной контент</h2>
              <p class="text-slate-600">Меню находится в карточке слева</p>
              <p class="text-sm text-slate-500 mt-2">Активный элемент: {{ activeItem }}</p>
            </DXCard>
          </div>
        </div>
      </div>
    `,
  }),
};

export const CompactInCard = {
  render: () => ({
    components: { DXSidebarMenu, DXCard },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
            { id: 'calendar', label: 'Календарь', icon: CalendarIcon, to: '/calendar' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Компактное меню в контейнере</h1>
        
        <div class="flex gap-6">
          <DXCard class="w-auto">
            <DXSidebarMenu 
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :compact="true"
              :collapsible="false"
              :bordered="false"
            />
          </DXCard>
          
          <DXCard class="flex-1">
            <h2 class="text-lg font-semibold mb-4">Контент</h2>
            <p class="text-slate-600">Компактное меню слева с иконками</p>
          </DXCard>
        </div>
      </div>
    `,
  }),
};

export const WithSearch = {
  render: () => ({
    components: { DXSidebarMenu, DXCard },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users' },
          ]
        },
        {
          title: 'Контент',
          items: [
            { id: 'documents', label: 'Документы', icon: DocumentTextIcon, to: '/documents' },
            { id: 'folders', label: 'Папки', icon: FolderIcon, to: '/folders' },
            { id: 'inbox', label: 'Входящие', icon: InboxIcon, to: '/inbox', badge: '25' },
          ]
        },
        {
          title: 'Управление',
          items: [
            { id: 'calendar', label: 'Календарь', icon: CalendarIcon, to: '/calendar' },
            { id: 'settings', label: 'Настройки', icon: Cog6ToothIcon, to: '/settings' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="p-8 bg-slate-50 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Меню с поиском в карточке</h1>
        
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-4 gap-6">
            <DXCard class="col-span-1 h-fit">
              <DXSidebarMenu 
                title="Меню"
                :sections="sections"
                :activeItem="activeItem"
                variant="embedded"
                searchable
                :collapsible="false"
                :bordered="false"
              />
            </DXCard>
            
            <div class="col-span-3">
              <DXCard>
                <h2 class="text-lg font-semibold mb-4">Основной контент</h2>
                <p class="text-slate-600">Меню с поиском в карточке слева</p>
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <p class="text-sm text-slate-600">Активный элемент: <code class="bg-white px-2 py-1 rounded">{{ activeItem }}</code></p>
                </div>
              </DXCard>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

export const FullHeightInContainer = {
  render: () => ({
    components: { DXSidebarMenu, DXCard },
    setup() {
      const activeItem = ref('/home');
      
      const sections = [
        {
          items: [
            { id: 'home', label: 'Главная', icon: HomeIcon, to: '/home' },
            { id: 'analytics', label: 'Аналитика', icon: ChartBarIcon, to: '/analytics' },
            { id: 'users', label: 'Пользователи', icon: UsersIcon, to: '/users', badge: '12' },
          ]
        },
        {
          title: 'Контент',
          items: [
            { id: 'documents', label: 'Документы', icon: DocumentTextIcon, to: '/documents' },
            { id: 'folders', label: 'Папки', icon: FolderIcon, to: '/folders' },
            { id: 'inbox', label: 'Входящие', icon: InboxIcon, to: '/inbox', badge: '25' },
          ]
        }
      ];
      
      return { sections, activeItem };
    },
    template: `
      <div class="p-8 bg-slate-50">
        <h1 class="text-2xl font-bold mb-6">Меню на всю высоту контейнера</h1>
        
        <div class="grid grid-cols-4 gap-6" style="height: 600px;">
          <DXCard class="col-span-1 overflow-hidden">
            <DXSidebarMenu 
              title="Навигация"
              :sections="sections"
              :activeItem="activeItem"
              variant="embedded"
              :collapsible="false"
              :bordered="false"
            />
          </DXCard>
          
          <div class="col-span-3">
            <DXCard class="h-full">
              <h2 class="text-lg font-semibold mb-4">Контент на всю высоту</h2>
              <p class="text-slate-600">Меню растягивается на всю высоту карточки</p>
            </DXCard>
          </div>
        </div>
      </div>
    `,
  }),
};

