import DXDropdown from './DXDropdown.vue';
import DXDropdownItem from '../../atoms/DXDropdownItem/DXDropdownItem.vue';
import DXDropdownDivider from '../../molecules/DXDropdownDivider/DXDropdownDivider.vue';
import DXAvatar from '../../atoms/v2/DXAvatar/DXAvatar.vue';
import DXBadge from '../../atoms/v2/DXBadge/DXBadge.vue';
import DXButton from '../../atoms/v2/DXButton/DXButton.vue';
import DXInput from '../../molecules/DXInput/DXInput.vue';
import DXIcon from '../../atoms/v2/DXIcon/DXIcon.vue';
import { 
  UserIcon, 
  CogIcon, 
  BellIcon, 
  QuestionMarkCircleIcon, 
  ArrowRightOnRectangleIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentDuplicateIcon,
  ArchiveBoxIcon,
  ShareIcon,
  HeartIcon,
  FlagIcon,
  LanguageIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  MagnifyingGlassIcon,
  InboxIcon,
  EnvelopeIcon,
  FunnelIcon,
  EllipsisVerticalIcon
} from '@heroicons/vue/24/outline';
import { ref } from 'vue';

export default {
  title: 'Organisms/DXDropdown',
  component: DXDropdown,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Позиционирование меню'
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'auto'],
      description: 'Ширина меню'
    },
    variant: {
      control: 'select',
      options: ['default', 'minimal'],
      description: 'Вариант оформления'
    },
    offset: {
      control: 'number',
      description: 'Отступ от trigger (px)'
    },
  },
};

// 1. Default - базовый пример
export const Default = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Открыть меню</span>
        </template>
        <DXDropdownItem>Профиль</DXDropdownItem>
        <DXDropdownItem>Настройки</DXDropdownItem>
        <DXDropdownItem>Выход</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 2. WithIcons - пункты с иконками
export const WithIcons = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    setup() {
      return { UserIcon, CogIcon, ArrowRightOnRectangleIcon };
    },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Меню с иконками</span>
        </template>
        <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
        <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
        <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">Выход</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 3. WithDividers - группы с разделителями
export const WithDividers = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider },
    setup() {
      return { PencilIcon, DocumentDuplicateIcon, ArchiveBoxIcon, ShareIcon, TrashIcon };
    },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Действия</span>
        </template>
        <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
        <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
        
        <DXDropdownDivider />
        
        <DXDropdownItem :icon="ArchiveBoxIcon">Архивировать</DXDropdownItem>
        <DXDropdownItem :icon="ShareIcon">Поделиться</DXDropdownItem>
        
        <DXDropdownDivider />
        
        <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 4. Positions - позиционирование
export const Positions = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    template: `
      <div class="flex gap-4 justify-center items-start p-8">
        <DXDropdown position="left">
          <template #trigger>
            <span>Left</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
          <DXDropdownItem>Пункт 3</DXDropdownItem>
        </DXDropdown>

        <DXDropdown position="center">
          <template #trigger>
            <span>Center</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
          <DXDropdownItem>Пункт 3</DXDropdownItem>
        </DXDropdown>

        <DXDropdown position="right">
          <template #trigger>
            <span>Right (default)</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
          <DXDropdownItem>Пункт 3</DXDropdownItem>
        </DXDropdown>
      </div>
    `,
  }),
};

// 5. Sizes - разные ширины
export const Sizes = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    template: `
      <div class="flex gap-4 items-start p-8">
        <DXDropdown width="sm">
          <template #trigger>
            <span>Small</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
        </DXDropdown>

        <DXDropdown width="md">
          <template #trigger>
            <span>Medium</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
        </DXDropdown>

        <DXDropdown width="lg">
          <template #trigger>
            <span>Large</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
        </DXDropdown>

        <DXDropdown width="xl">
          <template #trigger>
            <span>Extra Large</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
        </DXDropdown>
      </div>
    `,
  }),
};

// 6. UserProfileMenu - профиль пользователя
export const UserProfileMenu = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXAvatar },
    setup() {
      return { 
        UserIcon, CogIcon, BellIcon, 
        QuestionMarkCircleIcon, ArrowRightOnRectangleIcon 
      };
    },
    template: `
      <DXDropdown position="right" width="md">
        <template #trigger>
          <DXAvatar size="sm" initials="JD" />
          <span>John Doe</span>
        </template>

        <div class="p-3 border-b border-slate-100">
          <div class="flex items-center gap-3">
            <DXAvatar size="md" initials="JD" />
            <div>
              <p class="font-semibold text-sm">John Doe</p>
              <p class="text-xs text-slate-500">john@example.com</p>
            </div>
          </div>
        </div>

        <DXDropdownItem :icon="UserIcon">Мой профиль</DXDropdownItem>
        <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
        <DXDropdownItem :icon="BellIcon" badge="3" badge-variant="danger">
          Уведомления
        </DXDropdownItem>

        <DXDropdownDivider />

        <DXDropdownItem :icon="QuestionMarkCircleIcon">Помощь</DXDropdownItem>

        <DXDropdownDivider />

        <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">
          Выйти
        </DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 7. ActionsMenu - CRUD действия
export const ActionsMenu = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider },
    setup() {
      return { EyeIcon, PencilIcon, DocumentDuplicateIcon, ShareIcon, TrashIcon };
    },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Действия</span>
        </template>

        <DXDropdownItem :icon="EyeIcon">Просмотр</DXDropdownItem>
        <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
        <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>

        <DXDropdownDivider />

        <DXDropdownItem :icon="ShareIcon">Поделиться</DXDropdownItem>

        <DXDropdownDivider />

        <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 8. NotificationsList - уведомления
export const NotificationsList = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXBadge },
    setup() {
      return { BellIcon, InboxIcon, EnvelopeIcon };
    },
    template: `
      <DXDropdown width="lg" position="right">
        <template #trigger>
          <div class="relative">
            <DXBadge variant="danger" class="absolute -top-1 -right-1 z-10">3</DXBadge>
            <BellIcon class="w-5 h-5" />
          </div>
        </template>

        <div class="p-3 border-b border-slate-100">
          <h3 class="font-semibold text-sm">Уведомления</h3>
        </div>

        <DXDropdownItem size="md">
          <div class="flex flex-col gap-1">
            <p class="font-medium text-sm">Новое сообщение</p>
            <p class="text-xs text-slate-500">Получено 5 минут назад</p>
          </div>
        </DXDropdownItem>

        <DXDropdownItem size="md">
          <div class="flex flex-col gap-1">
            <p class="font-medium text-sm">Комментарий к задаче</p>
            <p class="text-xs text-slate-500">Получено 1 час назад</p>
          </div>
        </DXDropdownItem>

        <DXDropdownItem size="md">
          <div class="flex flex-col gap-1">
            <p class="font-medium text-sm">Обновление системы</p>
            <p class="text-xs text-slate-500">Получено 2 часа назад</p>
          </div>
        </DXDropdownItem>

        <DXDropdownDivider />

        <DXDropdownItem :icon="InboxIcon">Все уведомления</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 9. LanguageSelector - выбор языка
export const LanguageSelector = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    setup() {
      const selected = ref('Русский');
      return { selected, LanguageIcon };
    },
    template: `
      <DXDropdown width="sm">
        <template #trigger>
          <LanguageIcon class="w-4 h-4" />
          <span>{{ selected }}</span>
        </template>

        <DXDropdownItem @click="selected = 'Русский'">🇷🇺 Русский</DXDropdownItem>
        <DXDropdownItem @click="selected = 'English'">🇬🇧 English</DXDropdownItem>
        <DXDropdownItem @click="selected = 'Español'">🇪🇸 Español</DXDropdownItem>
        <DXDropdownItem @click="selected = 'Français'">🇫🇷 Français</DXDropdownItem>
        <DXDropdownItem @click="selected = 'Deutsch'">🇩🇪 Deutsch</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 10. StatusSelector - выбор статуса
export const StatusSelector = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXBadge },
    setup() {
      const statuses = ref(['В работе', 'Завершено', 'Отменено', 'Ожидание']);
      return { statuses, CheckCircleIcon, ClockIcon, XCircleIcon };
    },
    template: `
      <DXDropdown width="md">
        <template #trigger>
          <span class="w-2 h-2 rounded-full bg-blue-500"></span>
          <span>В работе</span>
        </template>

        <DXDropdownItem variant="success">
          <span class="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
          <span class="flex-1">Завершено</span>
        </DXDropdownItem>

        <DXDropdownItem>
          <span class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
          <span class="flex-1">В работе</span>
        </DXDropdownItem>

        <DXDropdownItem>
          <span class="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
          <span class="flex-1">Ожидание</span>
        </DXDropdownItem>

        <DXDropdownItem variant="danger">
          <span class="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0"></span>
          <span class="flex-1">Отменено</span>
        </DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 11. WithBadges - со счетчиками
export const WithBadges = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider },
    setup() {
      return { InboxIcon, BellIcon, EnvelopeIcon, FlagIcon };
    },
    template: `
      <DXDropdown width="md">
        <template #trigger>
          <span>Сообщения</span>
        </template>
        <DXDropdownItem :icon="InboxIcon" badge="12" badge-variant="slate">
          Входящие
        </DXDropdownItem>
        <DXDropdownItem :icon="BellIcon" badge="3" badge-variant="danger">
          Уведомления
        </DXDropdownItem>
        <DXDropdownItem :icon="EnvelopeIcon" badge="5" badge-variant="info">
          Письма
        </DXDropdownItem>
        <DXDropdownItem :icon="FlagIcon" badge="1" badge-variant="warning">
          Важные
        </DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 12. NestedMenu - вложенное подменю (индикатор)
export const NestedMenu = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider },
    setup() {
      return { ShareIcon, DocumentDuplicateIcon, ArchiveBoxIcon };
    },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Файл</span>
        </template>
        <DXDropdownItem>Создать</DXDropdownItem>
        <DXDropdownItem>Открыть</DXDropdownItem>
        
        <DXDropdownDivider />
        
        <DXDropdownItem :icon="ShareIcon" submenu>Поделиться</DXDropdownItem>
        <DXDropdownItem :icon="DocumentDuplicateIcon">Дублировать</DXDropdownItem>
        
        <DXDropdownDivider />
        
        <DXDropdownItem :icon="ArchiveBoxIcon">Архивировать</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 13. CustomContent - форма поиска
export const CustomContent = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXInput },
    setup() {
      const search = ref('');
      return { search, MagnifyingGlassIcon };
    },
    template: `
      <DXDropdown width="lg">
        <template #trigger>
          <MagnifyingGlassIcon class="w-4 h-4" />
          <span>Поиск</span>
        </template>

        <div class="p-3">
          <DXInput 
            v-model="search" 
            placeholder="Поиск..." 
            size="sm"
            :prefix-icon="MagnifyingGlassIcon"
          />
        </div>

        <DXDropdownDivider />

        <div class="px-3 py-2">
          <p class="text-xs font-semibold text-slate-500 mb-2">НЕДАВНИЕ</p>
        </div>

        <DXDropdownItem>Проект Alpha</DXDropdownItem>
        <DXDropdownItem>Документация</DXDropdownItem>
        <DXDropdownItem>Команда разработки</DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 14. MixedContent - смешанный контент
export const MixedContent = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXBadge, DXButton },
    setup() {
      return { HeartIcon, ShareIcon };
    },
    template: `
      <DXDropdown width="md">
        <template #trigger>
          <span>Смешанный контент</span>
        </template>

        <div class="p-3 bg-slate-50">
          <p class="text-sm font-medium">Premium функции</p>
          <p class="text-xs text-slate-500 mt-1">Обновитесь до Pro</p>
        </div>

        <DXDropdownDivider />

        <DXDropdownItem :icon="HeartIcon">Избранное</DXDropdownItem>
        <DXDropdownItem :icon="ShareIcon">Поделиться</DXDropdownItem>

        <DXDropdownDivider />

        <div class="px-3 py-2">
          <DXButton block size="sm" variant="primary">Обновить</DXButton>
        </div>
      </DXDropdown>
    `,
  }),
};

// 15. Disabled - отключенное состояние
export const Disabled = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    template: `
      <div class="flex gap-4">
        <DXDropdown disabled>
          <template #trigger>
            <span>Отключен (dropdown)</span>
          </template>
          <DXDropdownItem>Пункт 1</DXDropdownItem>
          <DXDropdownItem>Пункт 2</DXDropdownItem>
        </DXDropdown>

        <DXDropdown>
          <template #trigger>
            <span>С отключенными пунктами</span>
          </template>
          <DXDropdownItem>Активный пункт</DXDropdownItem>
          <DXDropdownItem disabled>Отключенный пункт</DXDropdownItem>
          <DXDropdownItem>Активный пункт</DXDropdownItem>
        </DXDropdown>
      </div>
    `,
  }),
};

// Bonus: Interactive example
export const Interactive = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider },
    setup() {
      const handleAction = (action) => {
        alert(`Выполнено: ${action}`);
      };
      return { handleAction, PencilIcon, TrashIcon, ShareIcon };
    },
    template: `
      <DXDropdown>
        <template #trigger>
          <span>Кликните для теста</span>
        </template>
        <DXDropdownItem :icon="PencilIcon" @click="handleAction('Редактирование')">
          Редактировать
        </DXDropdownItem>
        <DXDropdownItem :icon="ShareIcon" @click="handleAction('Поделиться')">
          Поделиться
        </DXDropdownItem>
        <DXDropdownDivider />
        <DXDropdownItem :icon="TrashIcon" variant="danger" @click="handleAction('Удаление')">
          Удалить
        </DXDropdownItem>
      </DXDropdown>
    `,
  }),
};

// 16. WithoutChevronIcon - только иконка без стрелочки (используется для всех иконок)
export const WithoutChevronIcon = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXIcon },
    setup() {
      return { 
        EllipsisVerticalIcon, 
        PencilIcon, 
        TrashIcon, 
        EyeIcon,
        FunnelIcon,
        BellIcon,
        CogIcon,
        UserIcon,
        ShareIcon,
        HeartIcon
      };
    },
    template: `
      <div class="p-4 space-y-6">
        <div>
          <h3 class="text-sm font-semibold mb-2">Иконки без стрелочки</h3>
          <p class="text-xs text-slate-600 mb-4">
            Используйте этот паттерн для всех иконок без стрелочки. Иконка является триггером для открытия меню.
            Не используйте button внутри trigger - просто иконка.
          </p>
          
          <div class="flex flex-wrap gap-6 items-center">
            <!-- Пример 1: Три точки (действия) -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Действия</p>
              <DXDropdown :showChevron="false" position="right" width="auto" variant="minimal">
                <template #trigger>
                  <DXIcon :icon="EllipsisVerticalIcon" size="md" class="cursor-pointer text-slate-600 hover:text-slate-900" />
                </template>
                <DXDropdownItem :icon="EyeIcon">Просмотр</DXDropdownItem>
                <DXDropdownItem :icon="PencilIcon">Редактировать</DXDropdownItem>
                <DXDropdownDivider />
                <DXDropdownItem :icon="TrashIcon" variant="danger">Удалить</DXDropdownItem>
              </DXDropdown>
            </div>

            <!-- Пример 2: Фильтр -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Фильтр</p>
              <DXDropdown :showChevron="false" position="bottom" width="auto" variant="minimal">
                <template #trigger>
                  <DXIcon :icon="FunnelIcon" size="xs" class="cursor-pointer text-slate-400 hover:text-blue-600" />
                </template>
                <DXDropdownItem>Все</DXDropdownItem>
                <DXDropdownItem>Активные</DXDropdownItem>
                <DXDropdownItem>Неактивные</DXDropdownItem>
              </DXDropdown>
            </div>

            <!-- Пример 3: Уведомления -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Уведомления</p>
              <DXDropdown :showChevron="false" position="right" width="auto" variant="minimal">
                <template #trigger>
                  <div class="relative cursor-pointer">
                    <DXIcon :icon="BellIcon" size="md" class="text-slate-600 hover:text-slate-900" />
                    <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </div>
                </template>
                <DXDropdownItem>Новое сообщение</DXDropdownItem>
                <DXDropdownItem>Комментарий</DXDropdownItem>
                <DXDropdownItem>Обновление</DXDropdownItem>
              </DXDropdown>
            </div>

            <!-- Пример 4: Настройки -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Настройки</p>
              <DXDropdown :showChevron="false" position="right" width="auto" variant="minimal">
                <template #trigger>
                  <DXIcon :icon="CogIcon" size="md" class="cursor-pointer text-slate-600 hover:text-slate-900" />
                </template>
                <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
                <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
                <DXDropdownDivider />
                <DXDropdownItem>Выход</DXDropdownItem>
              </DXDropdown>
            </div>

            <!-- Пример 5: Поделиться -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Поделиться</p>
              <DXDropdown :showChevron="false" position="right" width="auto" variant="minimal">
                <template #trigger>
                  <DXIcon :icon="ShareIcon" size="md" class="cursor-pointer text-slate-600 hover:text-slate-900" />
                </template>
                <DXDropdownItem>Email</DXDropdownItem>
                <DXDropdownItem>Социальные сети</DXDropdownItem>
                <DXDropdownItem>Скопировать ссылку</DXDropdownItem>
              </DXDropdown>
            </div>

            <!-- Пример 6: Избранное -->
            <div>
              <p class="text-xs text-slate-500 mb-2">Избранное</p>
              <DXDropdown :showChevron="false" position="right" width="auto" variant="minimal">
                <template #trigger>
                  <DXIcon :icon="HeartIcon" size="md" class="cursor-pointer text-rose-500 hover:text-rose-600" />
                </template>
                <DXDropdownItem>Добавить в избранное</DXDropdownItem>
                <DXDropdownItem>Удалить из избранного</DXDropdownItem>
              </DXDropdown>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// 17. WithoutChevronText - только текст без стрелочки
export const WithoutChevronText = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    setup() {
      return { UserIcon, CogIcon, ArrowRightOnRectangleIcon };
    },
    template: `
      <div class="p-4 space-y-4">
        <div>
          <h3 class="text-sm font-semibold mb-2">Только текст без стрелочки</h3>
          <DXDropdown :showChevron="false">
            <template #trigger>
              <span class="text-slate-700 hover:text-slate-900 cursor-pointer">Меню</span>
            </template>
            <DXDropdownItem :icon="UserIcon">Профиль</DXDropdownItem>
            <DXDropdownItem :icon="CogIcon">Настройки</DXDropdownItem>
            <DXDropdownItem :icon="ArrowRightOnRectangleIcon" variant="danger">Выход</DXDropdownItem>
          </DXDropdown>
        </div>
      </div>
    `,
  }),
};

// 18. WithoutChevronIconText - иконка + текст без стрелочки
export const WithoutChevronIconText = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem, DXDropdownDivider, DXIcon },
    setup() {
      return { BellIcon, InboxIcon, EnvelopeIcon, FlagIcon };
    },
    template: `
      <div class="p-4 space-y-4">
        <div>
          <h3 class="text-sm font-semibold mb-2">Иконка + текст без стрелочки</h3>
          <DXDropdown :showChevron="false">
            <template #trigger>
              <div class="flex items-center gap-2">
                <DXIcon :icon="BellIcon" size="sm" />
                <span>Уведомления</span>
              </div>
            </template>
            <DXDropdownItem :icon="InboxIcon" badge="12" badge-variant="slate">
              Входящие
            </DXDropdownItem>
            <DXDropdownItem :icon="BellIcon" badge="3" badge-variant="danger">
              Уведомления
            </DXDropdownItem>
            <DXDropdownItem :icon="EnvelopeIcon" badge="5" badge-variant="info">
              Письма
            </DXDropdownItem>
            <DXDropdownItem :icon="FlagIcon" badge="1" badge-variant="warning">
              Важные
            </DXDropdownItem>
          </DXDropdown>
        </div>
      </div>
    `,
  }),
};

// 19. Comparison - сравнение с и без стрелочки
export const Comparison = {
  render: () => ({
    components: { DXDropdown, DXDropdownItem },
    template: `
      <div class="p-4 space-y-6">
        <div>
          <h3 class="text-sm font-semibold mb-4">Сравнение: с стрелочкой и без</h3>
          <div class="flex gap-4 items-center">
            <div>
              <p class="text-xs text-slate-500 mb-2">С стрелочкой (по умолчанию)</p>
              <DXDropdown>
                <template #trigger>
                  <span>Меню</span>
                </template>
                <DXDropdownItem>Пункт 1</DXDropdownItem>
                <DXDropdownItem>Пункт 2</DXDropdownItem>
                <DXDropdownItem>Пункт 3</DXDropdownItem>
              </DXDropdown>
            </div>
            
            <div>
              <p class="text-xs text-slate-500 mb-2">Без стрелочки</p>
              <DXDropdown :showChevron="false">
                <template #trigger>
                  <span>Меню</span>
                </template>
                <DXDropdownItem>Пункт 1</DXDropdownItem>
                <DXDropdownItem>Пункт 2</DXDropdownItem>
                <DXDropdownItem>Пункт 3</DXDropdownItem>
              </DXDropdown>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
