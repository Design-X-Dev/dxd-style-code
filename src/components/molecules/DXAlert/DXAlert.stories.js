import DXAlert from './DXAlert.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Molecules/DXAlert',
  component: DXAlert,
  tags: ['autodocs', 'category:feedback'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'danger'] },
    actionsAlign: { control: { type: 'select' }, options: ['left', 'center', 'right'] },
  },
};

export const Info = {
  args: { variant: 'info', title: 'Information' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">This is an informational message.</DXAlert>',
  }),
};

export const Success = {
  args: { variant: 'success', title: 'Success' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>',
  }),
};

export const Warning = {
  args: { variant: 'warning', title: 'Warning' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Please review before continuing.</DXAlert>',
  }),
};

export const Danger = {
  args: { variant: 'danger', title: 'Error' },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>',
  }),
};

export const Dismissible = {
  args: { variant: 'info', title: 'Dismissible', dismissible: true },
  render: (args) => ({
    components: { DXAlert },
    setup() { return { args }; },
    template: '<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>',
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXAlert },
    template: `
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    `,
  }),
};

export const WithActions = {
  parameters: {
    docs: {
      description: {
        story: 'Пример использования слота `actions` для добавления кнопок действий в alert.',
      },
    },
  },
  render: () => ({
    components: { DXAlert, DXButton },
    setup() {
      const handleConfirm = () => alert('Подтверждено!');
      const handleCancel = () => alert('Отменено');
      const handleRetry = () => alert('Повторная попытка...');
      const handleUpdate = () => alert('Обновление...');
      const handleLater = () => alert('Отложено');
      
      return {
        handleConfirm,
        handleCancel,
        handleRetry,
        handleUpdate,
        handleLater,
      };
    },
    template: `
      <div class="space-y-4">
        <DXAlert variant="warning" title="Подтвердите действие">
          Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Отменить</DXButton>
            <DXButton variant="danger" size="sm" @click="handleConfirm">Удалить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="danger" title="Ошибка загрузки">
          Не удалось загрузить данные. Пожалуйста, попробуйте еще раз.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleRetry">Повторить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Доступно обновление">
          Доступна новая версия приложения. Рекомендуем обновить для получения новых функций и исправлений.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleUpdate">Обновить</DXButton>
            <DXButton variant="ghost" size="sm" @click="handleLater">Позже</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="success" title="Изменения сохранены" dismissible>
          Все ваши изменения были успешно сохранены.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Закрыть</DXButton>
          </template>
        </DXAlert>
      </div>
    `,
  }),
};

export const ActionsAlignment = {
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты выравнивания кнопок действий через проп `actionsAlign`.',
      },
    },
  },
  render: () => ({
    components: { DXAlert, DXButton },
    setup() {
      const handleAction = () => alert('Действие выполнено!');
      
      return { handleAction };
    },
    template: `
      <div class="space-y-4">
        <DXAlert variant="info" title="Выравнивание слева (по умолчанию)" actions-align="left">
          Кнопки действий выровнены по левому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание по центру" actions-align="center">
          Кнопки действий выровнены по центру.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание справа" actions-align="right">
          Кнопки действий выровнены по правому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>
      </div>
    `,
  }),
};

