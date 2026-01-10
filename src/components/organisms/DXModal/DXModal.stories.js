import { ref } from 'vue';
import DXModal from './DXModal.vue';
import DXButton from '../../atoms/DXButton/DXButton.vue';

export default {
  title: 'Organisms/DXModal',
  component: DXModal,
  tags: ['autodocs', 'category:overlay'],
  parameters: {
    docs: {
      description: {
        component: `
Универсальный компонент модального окна с поддержкой различных вариантов отображения и режимов.

## Назначение

DXModal предоставляет полнофункциональное модальное окно с поддержкой различных вариантов отображения
(модальное окно, полноэкранный режим, боковая панель, половина экрана справа), настраиваемым backdrop,
переключателем режимов и слотами для кастомизации контента.

## Архитектура

### Использует
- \`DXBackdrop\` - фон модального окна с размытием и блокировкой скролла
- \`DXCloseButton\` - кнопка закрытия
- \`DXHeading\` - заголовок модального окна
- \`Transition\` - анимации появления/исчезновения

### Используется в
- Формы редактирования
- Диалоги подтверждения
- Детальные просмотры
- Настройки и конфигурация
- Любые места, требующие фокусированного взаимодействия

## Внутренняя логика

### Варианты отображения

| Значение | Описание |
|----------|----------|
| \`modal\` | Классическое модальное окно по центру экрана с настраиваемой шириной (по умолчанию) |
| \`fullscreen\` | Полноэкранный режим, занимает весь экран |
| \`sidebar-right\` | Боковая панель справа, выезжает с правой стороны |
| \`half-right\` | Половина экрана справа, фиксированная позиция |

### Анимации
- **modal/fullscreen**: Использует анимацию \`fade-scale\` (появление с масштабированием)
- **sidebar-right/half-right**: Использует анимацию \`slide-right\` (выезд справа)

### Управление состоянием
- Управляется через \`open\` prop (Boolean)
- События: \`close\`, \`opened\`, \`closed\`
- Поддержка \`update:variant\` для динамического изменения режима

### Backdrop
- Настраиваемое размытие: \`none\`, \`sm\`, \`md\`, \`lg\`, \`xl\`
- Настраиваемая прозрачность (0-100)
- Настраиваемый цвет: \`slate-900\`, \`gray-900\`, \`black\`, \`white\`
- Блокировка скролла body (по умолчанию включена)
- Возможность закрытия по клику на backdrop (через \`closable\`)

### Переключатель режимов
При \`showModeSwitcher={true}\` отображается переключатель режимов в заголовке:
- Иконки для каждого режима
- Визуальное выделение текущего режима
- Событие \`update:variant\` при смене режима

## Особенности

### Слоты

| Слот | Описание |
|------|----------|
| \`default\` | Основной контент модального окна |
| \`title\` | Заголовок (по умолчанию "Диалог") |
| \`actions\` | Кнопки действий внизу модального окна |

### Ширина (для modal)

| Значение | Описание |
|----------|----------|
| \`sm\` | Маленькая ширина |
| \`md\` | Средняя ширина (по умолчанию) |
| \`lg\` | Большая ширина |
| \`xl\` | Очень большая ширина |

### Закрытие
- Кнопка закрытия в заголовке (если \`closable={true}\`)
- Закрытие по клику на backdrop (если \`closable={true}\`)
- Событие \`close\` для программного закрытия

### Структура контента
Модальное окно имеет три секции:
1. **Заголовок** - заголовок, переключатель режимов (опционально), кнопка закрытия
2. **Контент** - основной контент с прокруткой
3. **Действия** - кнопки действий (если используется слот \`actions\`)

### Специальные варианты
- **half-right**: Не использует backdrop, фиксированная позиция справа, z-index 20
- **sidebar-right**: Backdrop с z-index 50, выезжает справа
- **fullscreen**: Занимает весь экран, padding 8
        `,
      },
    },
  },
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

