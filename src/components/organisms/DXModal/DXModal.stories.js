import { ref } from 'vue';
import DXModal from './DXModal.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Organisms/DXModal',
  component: DXModal,
  tags: ['autodocs', 'category:overlay'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['modal', 'fullscreen', 'sidebar-right', 'half-right'],
      description: 'Тип модального окна',
    },
    width: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Ширина (только для modal)',
    },
    closable: {
      control: 'boolean',
      description: 'Можно ли закрыть',
    },
    showModeSwitcher: {
      control: 'boolean',
      description: 'Показать переключатель режимов',
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { DXModal, DXButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <DXButton @click="open = true">Открыть модал</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Заголовок</template>
          <p>Контент модального окна. Здесь может быть любое содержимое.</p>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Отмена</DXButton>
            <DXButton @click="open = false">Сохранить</DXButton>
          </template>
        </DXModal>
      </div>
    `,
  }),
};

export const Sidebar = {
  args: {
    variant: 'sidebar-right',
  },
  render: (args) => ({
    components: { DXModal, DXButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <DXButton @click="open = true">Открыть сайдбар</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Боковая панель</template>
          <div class="space-y-4">
            <p>Этот вариант отлично подходит для форм редактирования.</p>
            <p>Контент может быть любой длины.</p>
          </div>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `,
  }),
};

export const Fullscreen = {
  args: {
    variant: 'fullscreen',
  },
  render: (args) => ({
    components: { DXModal, DXButton },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <div>
        <DXButton @click="open = true">Открыть на весь экран</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Полноэкранный режим</template>
          <p>Этот вариант занимает весь экран.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `,
  }),
};

export const WithModeSwitcher = {
  args: {
    showModeSwitcher: true,
  },
  render: (args) => ({
    components: { DXModal, DXButton },
    setup() {
      const open = ref(false);
      const variant = ref('modal');
      return { args, open, variant };
    },
    template: `
      <div>
        <DXButton @click="open = true">Открыть с переключателем</DXButton>
        <DXModal 
          v-bind="args" 
          :open="open" 
          :variant="variant"
          @close="open = false"
          @update:variant="variant = $event"
        >
          <template #title>Переключатель режимов</template>
          <p>Используйте кнопки справа от заголовка для смены режима отображения.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `,
  }),
};

