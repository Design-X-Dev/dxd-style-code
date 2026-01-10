import DXPasswordInput from './DXPasswordInput.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXPasswordInput',
  component: DXPasswordInput,
  tags: ['autodocs', 'category:form'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент поля ввода пароля с кнопкой показа/скрытия пароля.

## Назначение

DXPasswordInput предоставляет специализированное поле ввода для паролей с автоматическим
скрытием введенного текста и возможностью показать пароль при необходимости. Компонент
интегрируется с DXFormLabel для поддержки лейблов, ошибок и вспомогательного текста.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок и вспомогательного текста
- \`DXIcon\` - для иконок показа/скрытия пароля (EyeIcon, EyeSlashIcon)
- \`useClassComposition\` composable - для объединения CSS классов

### Используется в
- Формы регистрации и входа
- Смена пароля
- Настройки безопасности
- Любые места, требующие ввода пароля

## Внутренняя логика

### Переключение видимости
- По умолчанию пароль скрыт (\`type="password"\`)
- При клике на иконку пароль показывается (\`type="text"\`)
- Иконка автоматически меняется: EyeIcon ↔ EyeSlashIcon

### Валидация
- При наличии \`error\` prop, поле получает красную рамку (\`border-rose-300\`)
- Текст ошибки отображается через \`DXFormLabel\`

### Размеры
Использует фиксированный размер, соответствующий стандартным полям ввода:
- Высота: \`h-10\` (40px)
- Padding: \`px-4 py-2.5\`
- Размер текста: \`text-sm\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String значений.

### Состояния
- **disabled** - отключает поле и кнопку показа/скрытия
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)

### Доступность
- Кнопка показа/скрытия имеет \`aria-label\` для описания действия
- Поддержка клавиатурной навигации
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />',
  }),
};

export const WithValue = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('secretpassword');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" />',
  }),
};

export const WithHelper = {
  render: () => ({
    components: { DXPasswordInput },
    setup() {
      const password = ref('');
      return { password };
    },
    template: '<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />',
  }),
};

