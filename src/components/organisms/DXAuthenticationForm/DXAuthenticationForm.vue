<template>
  <div
    :class="formClasses"
    data-component="DXAuthenticationForm"
    :data-mode="mode"
  >
    <!-- Header -->
    <div v-if="showHeader || $slots.header" :class="headerClasses">
      <slot name="header">
        <h2 class="text-2xl font-bold text-slate-900 text-center">
          {{ modeLabels[mode] }}
        </h2>
      </slot>
    </div>

    <!-- Error Alert -->
    <div v-if="error || $slots.error" :class="errorClasses">
      <slot name="error">
        <DXAlert v-if="error" type="error" :message="error" />
      </slot>
    </div>

    <!-- Login Form -->
    <div v-if="mode === 'login'" :class="contentClasses">
      <slot name="login">
        <div class="space-y-4">
          <DXFormControl label="Email" :error="errors.email">
            <DXInput
              v-model="loginForm.email"
              type="email"
              placeholder="Введите email"
              required
              @update:model-value="clearError('email')"
            />
          </DXFormControl>
          <DXFormControl label="Пароль" :error="errors.password">
            <DXPasswordInput
              v-model="loginForm.password"
              placeholder="Введите пароль"
              required
              @update:model-value="clearError('password')"
            />
          </DXFormControl>
          <div class="flex items-center justify-between">
            <DXCheckbox v-model="loginForm.remember">
              Запомнить меня
            </DXCheckbox>
            <DXLink
              variant="link"
              size="sm"
              @click="handleModeChange('forgot-password')"
            >
              Забыли пароль?
            </DXLink>
          </div>
          <DXButton
            variant="primary"
            :loading="loading"
            :disabled="!canSubmit"
            block
            @click="handleLogin"
          >
            Войти
          </DXButton>
          <div class="text-center text-sm text-slate-600">
            Нет аккаунта?
            <DXLink
              variant="link"
              size="sm"
              @click="handleModeChange('register')"
            >
              Зарегистрироваться
            </DXLink>
          </div>
        </div>
      </slot>
    </div>

    <!-- Register Form -->
    <div v-else-if="mode === 'register'" :class="contentClasses">
      <slot name="register">
        <div class="space-y-4">
          <DXFormControl label="Имя" :error="errors.name">
            <DXInput
              v-model="registerForm.name"
              placeholder="Введите имя"
              required
              @update:model-value="clearError('name')"
            />
          </DXFormControl>
          <DXFormControl label="Email" :error="errors.email">
            <DXInput
              v-model="registerForm.email"
              type="email"
              placeholder="Введите email"
              required
              @update:model-value="clearError('email')"
            />
          </DXFormControl>
          <DXFormControl label="Пароль" :error="errors.password">
            <DXPasswordInput
              v-model="registerForm.password"
              placeholder="Введите пароль"
              required
              @update:model-value="clearError('password')"
            />
          </DXFormControl>
          <DXFormControl
            label="Подтверждение пароля"
            :error="errors.confirmPassword"
          >
            <DXPasswordInput
              v-model="registerForm.confirmPassword"
              placeholder="Подтвердите пароль"
              required
              @update:model-value="clearError('confirmPassword')"
            />
          </DXFormControl>
          <DXCheckbox v-model="registerForm.agreeToTerms">
            Я согласен с условиями использования
          </DXCheckbox>
          <DXButton
            variant="primary"
            :loading="loading"
            :disabled="!canSubmit"
            block
            @click="handleRegister"
          >
            Зарегистрироваться
          </DXButton>
          <div class="text-center text-sm text-slate-600">
            Уже есть аккаунт?
            <DXLink
              variant="link"
              size="sm"
              @click="handleModeChange('login')"
            >
              Войти
            </DXLink>
          </div>
        </div>
      </slot>
    </div>

    <!-- Forgot Password Form -->
    <div v-else-if="mode === 'forgot-password'" :class="contentClasses">
      <slot name="forgot-password">
        <div class="space-y-4">
          <p class="text-sm text-slate-600 text-center">
            Введите email, и мы отправим вам инструкции по восстановлению
            пароля.
          </p>
          <DXFormControl label="Email" :error="errors.email">
            <DXInput
              v-model="forgotPasswordForm.email"
              type="email"
              placeholder="Введите email"
              required
              @update:model-value="clearError('email')"
            />
          </DXFormControl>
          <DXButton
            variant="primary"
            :loading="loading"
            :disabled="!canSubmit"
            block
            @click="handleForgotPassword"
          >
            Отправить
          </DXButton>
          <div class="text-center">
            <DXLink
              variant="link"
              size="sm"
              @click="handleModeChange('login')"
            >
              Вернуться к входу
            </DXLink>
          </div>
        </div>
      </slot>
    </div>

    <!-- 2FA Form -->
    <div v-else-if="mode === '2fa'" :class="contentClasses">
      <slot name="2fa">
        <div class="space-y-4">
          <p class="text-sm text-slate-600 text-center">
            Введите код из приложения аутентификации.
          </p>
          <DXFormControl label="Код" :error="errors.code">
            <DXInput
              v-model="twoFactorForm.code"
              placeholder="000000"
              maxlength="6"
              required
              @update:model-value="clearError('code')"
            />
          </DXFormControl>
          <DXButton
            variant="primary"
            :loading="loading"
            :disabled="!canSubmit"
            block
            @click="handle2FA"
          >
            Подтвердить
          </DXButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useClassComposition } from "@/composables/useClassComposition";
import { useSpacing } from "@/composables/useSpacing";
import DXInput from "../../molecules/DXInput/DXInput.vue";
import DXPasswordInput from "../../molecules/DXPasswordInput/DXPasswordInput.vue";
import DXFormControl from "../../molecules/DXFormControl/DXFormControl.vue";
import DXButton from "../../atoms/DXButton/DXButton.vue";
import DXCheckbox from "../../atoms/DXCheckbox/DXCheckbox.vue";
import DXLink from "../../atoms/DXLink/DXLink.vue";
import DXAlert from "../../molecules/DXAlert/DXAlert.vue";

const props = defineProps({
  /**
   * Режим формы: login | register | forgot-password | 2fa
   * @default 'login'
   */
  mode: {
    type: String,
    default: "login",
    validator: (v) =>
      ["login", "register", "forgot-password", "2fa"].includes(v),
  },
  /**
   * Состояние загрузки
   * @default false
   */
  loading: { type: Boolean, default: false },
  /**
   * Сообщение об ошибке
   */
  error: { type: String, default: "" },
  /**
   * Ошибки валидации
   * Формат: { field: 'error message' }
   */
  errors: {
    type: Object,
    default: () => ({}),
  },
  /**
   * Показывать header
   * @default true
   */
  showHeader: { type: Boolean, default: true },
});

const emit = defineEmits(["submit", "mode-change"]);

const loginForm = ref({
  email: "",
  password: "",
  remember: false,
});

const registerForm = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
});

const forgotPasswordForm = ref({
  email: "",
});

const twoFactorForm = ref({
  code: "",
});

/**
 * Метки режимов
 * 
 * @description
 * Метки для различных режимов формы.
 * 
 * @returns {Object} Объект с метками режимов
 */
const modeLabels = computed(() => ({
  login: "Вход",
  register: "Регистрация",
  "forgot-password": "Восстановление пароля",
  "2fa": "Двухфакторная аутентификация",
}));

/**
 * Классы для формы
 * 
 * @description
 * Базовые классы для формы аутентификации.
 * 
 * @returns {Array} Массив классов
 */
const formClasses = computed(() =>
  useClassComposition("w-full max-w-md mx-auto")
);

/**
 * Классы для header
 * 
 * @description
 * Классы для секции заголовка.
 * 
 * @returns {Array} Массив классов
 */
const headerClasses = computed(() =>
  useClassComposition("mb-6")
);

/**
 * Классы для ошибки
 * 
 * @description
 * Классы для секции ошибки.
 * 
 * @returns {Array} Массив классов
 */
const errorClasses = computed(() =>
  useClassComposition("mb-4")
);

/**
 * Классы для контента
 * 
 * @description
 * Классы для секции контента формы.
 * 
 * @returns {Array} Массив классов
 */
const contentClasses = computed(() =>
  useClassComposition("", useSpacing("md", "padding"))
);

/**
 * Можно ли отправить форму
 * 
 * @description
 * Проверяет, можно ли отправить форму (все обязательные поля заполнены).
 * 
 * @returns {boolean} true, если можно отправить
 */
const canSubmit = computed(() => {
  if (props.mode === "login") {
    return (
      loginForm.value.email.trim() !== "" &&
      loginForm.value.password.trim() !== ""
    );
  } else if (props.mode === "register") {
    return (
      registerForm.value.name.trim() !== "" &&
      registerForm.value.email.trim() !== "" &&
      registerForm.value.password.trim() !== "" &&
      registerForm.value.confirmPassword.trim() !== "" &&
      registerForm.value.agreeToTerms
    );
  } else if (props.mode === "forgot-password") {
    return forgotPasswordForm.value.email.trim() !== "";
  } else if (props.mode === "2fa") {
    return twoFactorForm.value.code.trim().length === 6;
  }
  return false;
});

/**
 * Обработчик входа
 * 
 * @description
 * Эмитит событие входа с данными формы.
 */
function handleLogin() {
  emit("submit", {
    mode: "login",
    data: { ...loginForm.value },
  });
}

/**
 * Обработчик регистрации
 * 
 * @description
 * Эмитит событие регистрации с данными формы.
 */
function handleRegister() {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    return;
  }
  emit("submit", {
    mode: "register",
    data: { ...registerForm.value },
  });
}

/**
 * Обработчик восстановления пароля
 * 
 * @description
 * Эмитит событие восстановления пароля с данными формы.
 */
function handleForgotPassword() {
  emit("submit", {
    mode: "forgot-password",
    data: { ...forgotPasswordForm.value },
  });
}

/**
 * Обработчик 2FA
 * 
 * @description
 * Эмитит событие подтверждения 2FA с данными формы.
 */
function handle2FA() {
  emit("submit", {
    mode: "2fa",
    data: { ...twoFactorForm.value },
  });
}

/**
 * Обработчик изменения режима
 * 
 * @description
 * Эмитит событие изменения режима формы.
 * 
 * @param {string} newMode - Новый режим
 */
function handleModeChange(newMode) {
  emit("mode-change", newMode);
}

/**
 * Очистка ошибки поля
 * 
 * @description
 * Очищает ошибку для указанного поля.
 * 
 * @param {string} field - Название поля
 */
function clearError(field) {
  // Очистка ошибки обрабатывается родительским компонентом
}
</script>

