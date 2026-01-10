import { ref } from 'vue';
import DXAuthenticationForm from './DXAuthenticationForm.vue';

export default {
  title: 'Organisms/DXAuthenticationForm',
  component: DXAuthenticationForm,
  tags: ['autodocs', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Готовая форма аутентификации (логин/регистрация) с валидацией и обработкой ошибок.

## Назначение

DXAuthenticationForm предоставляет готовую форму аутентификации с поддержкой
различных режимов (логин, регистрация, восстановление пароля, 2FA) и валидацией.

## Архитектура

### Использует
- \`DXInput\` - для полей ввода
- \`DXPasswordInput\` - для полей пароля
- \`DXFormControl\` - для валидации
- \`DXButton\` - для отправки
- \`DXCheckbox\` - для чекбоксов
- \`DXLink\` - для ссылок
- \`DXAlert\` - для ошибок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Страницы входа в приложение
- Регистрация новых пользователей
- Восстановление пароля
- Двухфакторная аутентификация

## Внутренняя логика

### Режимы
- **login**: Форма входа
- **register**: Форма регистрации
- **forgot-password**: Восстановление пароля
- **2fa**: Двухфакторная аутентификация

### Валидация
Поддерживает валидацию через prop \`errors\` и автоматическую проверку заполненности полей.

## Особенности

### Переключение режимов
Можно переключаться между режимами через события или программно.

### Кастомизация
Все элементы формы можно кастомизировать через slots.
        `,
      },
    },
  },
};

export const Login = {
  parameters: {
    docs: {
      description: {
        story: 'Форма входа с email и паролем.',
      },
    },
  },
  render: () => ({
    components: { DXAuthenticationForm },
    setup() {
      const mode = ref('login');
      const loading = ref(false);
      const error = ref('');
      
      const handleSubmit = (data) => {
        console.log('Вход:', data);
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 2000);
      };
      
      const handleModeChange = (newMode) => {
        mode.value = newMode;
      };
      
      return { mode, loading, error, handleSubmit, handleModeChange };
    },
    template: `
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          :error="error"
          @submit="handleSubmit"
          @mode-change="handleModeChange"
        />
      </div>
    `,
  }),
};

export const Register = {
  parameters: {
    docs: {
      description: {
        story: 'Форма регистрации с валидацией пароля.',
      },
    },
  },
  render: () => ({
    components: { DXAuthenticationForm },
    setup() {
      const mode = ref('register');
      const loading = ref(false);
      
      const handleSubmit = (data) => {
        console.log('Регистрация:', data);
      };
      
      return { mode, loading, handleSubmit };
    },
    template: `
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `,
  }),
};

export const ForgotPassword = {
  parameters: {
    docs: {
      description: {
        story: 'Форма восстановления пароля.',
      },
    },
  },
  render: () => ({
    components: { DXAuthenticationForm },
    setup() {
      const mode = ref('forgot-password');
      const loading = ref(false);
      
      const handleSubmit = (data) => {
        console.log('Восстановление пароля:', data);
      };
      
      return { mode, loading, handleSubmit };
    },
    template: `
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `,
  }),
};

export const TwoFactor = {
  parameters: {
    docs: {
      description: {
        story: 'Форма двухфакторной аутентификации.',
      },
    },
  },
  render: () => ({
    components: { DXAuthenticationForm },
    setup() {
      const mode = ref('2fa');
      const loading = ref(false);
      
      const handleSubmit = (data) => {
        console.log('2FA:', data);
      };
      
      return { mode, loading, handleSubmit };
    },
    template: `
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `,
  }),
};

export const WithErrors = {
  parameters: {
    docs: {
      description: {
        story: 'Форма с ошибками валидации.',
      },
    },
  },
  render: () => ({
    components: { DXAuthenticationForm },
    setup() {
      const mode = ref('login');
      const errors = ref({
        email: 'Неверный email',
        password: 'Неверный пароль',
      });
      
      return { mode, errors };
    },
    template: `
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :errors="errors"
        />
      </div>
    `,
  }),
};

