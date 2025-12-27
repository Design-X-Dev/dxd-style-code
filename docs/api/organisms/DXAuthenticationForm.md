# DXAuthenticationForm

Готовая форма аутентификации с поддержкой входа, регистрации и восстановления пароля.

## Import

```javascript
import { DXAuthenticationForm } from 'dxd-style-code';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `String` | `'login'` | Режим: `'login'`, `'register'`, `'forgot-password'`, `'reset-password'` |
| `title` | `String` | `auto` | Заголовок формы |
| `submitText` | `String` | `auto` | Текст кнопки отправки |
| `showSocialLogin` | `Boolean` | `false` | Показать кнопки соцсетей |
| `socialProviders` | `Array` | `['google', 'github']` | Провайдеры соцсетей |
| `showRememberMe` | `Boolean` | `true` | Показать "Запомнить меня" |
| `showForgotPassword` | `Boolean` | `true` | Показать "Забыли пароль?" |
| `loading` | `Boolean` | `false` | Состояние загрузки |
| `errors` | `Object` | `{}` | Ошибки валидации |
| `logo` | `String` | `null` | URL логотипа |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `submit` | `FormData` | Отправка формы |
| `social-login` | `String` | Клик по соцсети |
| `mode-change` | `String` | Изменение режима |
| `forgot-password` | - | Клик "Забыли пароль?" |

## Usage

### Login Form

```vue
<DXAuthenticationForm
  mode="login"
  @submit="handleLogin"
  @forgot-password="showForgotPassword = true"
  @social-login="handleSocialLogin"
/>
```

### Registration Form

```vue
<DXAuthenticationForm
  mode="register"
  title="Создать аккаунт"
  submitText="Зарегистрироваться"
  :errors="validationErrors"
  @submit="handleRegister"
/>
```

### Forgot Password

```vue
<DXAuthenticationForm
  mode="forgot-password"
  @submit="handleForgotPassword"
  @mode-change="currentMode = $event"
/>
```

### With Social Login

```vue
<DXAuthenticationForm
  mode="login"
  showSocialLogin
  :socialProviders="['google', 'github', 'facebook']"
  @social-login="handleSocialLogin"
/>
```

### With Logo

```vue
<DXAuthenticationForm
  mode="login"
  logo="/logo.svg"
  title="Войти в MyApp"
/>
```

### Custom Submit

```vue
<DXAuthenticationForm
  mode="login"
  submitText="Войти в систему"
  :loading="isLoading"
  @submit="handleLogin"
/>
```

### With Errors

```vue
<DXAuthenticationForm
  mode="login"
  :errors="{
    email: 'Неверный email',
    password: 'Пароль слишком короткий'
  }"
  @submit="handleLogin"
/>
```

### Full Example

```vue
<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-100">
    <DXCard class="w-full max-w-md">
      <DXAuthenticationForm
        :mode="authMode"
        logo="/logo.svg"
        showSocialLogin
        :loading="isLoading"
        :errors="errors"
        @submit="handleSubmit"
        @social-login="handleSocialLogin"
        @mode-change="authMode = $event"
        @forgot-password="authMode = 'forgot-password'"
      />
    </DXCard>
  </div>
</template>

<script setup>
const authMode = ref('login');
const isLoading = ref(false);
const errors = ref({});

async function handleSubmit(formData) {
  isLoading.value = true;
  errors.value = {};
  
  try {
    if (authMode.value === 'login') {
      await auth.login(formData);
    } else if (authMode.value === 'register') {
      await auth.register(formData);
    }
  } catch (e) {
    errors.value = e.errors;
  } finally {
    isLoading.value = false;
  }
}
</script>
```

## Form Data Structure

### Login

```typescript
interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}
```

### Register

```typescript
interface RegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
```

### Forgot Password

```typescript
interface ForgotPasswordData {
  email: string;
}
```

## See Also

- [DXFormControl](../molecules/DXFormControl.md)
- [DXInput](../molecules/DXInput.md)
- [DXPasswordInput](../molecules/DXPasswordInput.md)
