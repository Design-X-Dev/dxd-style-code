import DXFormControl from './DXFormControl.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXFormControl',
  component: DXFormControl,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент обертки для полей форм с поддержкой лейбла, валидации, иконок и счетчика символов.

## Назначение

DXFormControl предоставляет комплексную обертку для полей форм, объединяя лейбл, поле ввода,
иконки валидации, сообщения об ошибках и вспомогательный текст в единый компонент. Компонент
поддерживает различные состояния валидации и автоматически управляет отступами для иконок.

## Архитектура

### Использует
- \`DXText\` - для лейбла, ошибок и вспомогательного текста
- \`DXIcon\` - для иконки-префикса
- \`DXValidationIcon\` - для иконки валидации (успех/ошибка)

### Используется в
- Обертка для любых полей форм
- Кастомные поля ввода
- Интеграция с нативными input элементами
- Любые места, требующие полную структуру поля формы

## Внутренняя логика

### Структура
Компонент состоит из:
1. **Лейбл** - отображается над полем (если указан \`label\`)
2. **Счетчик символов** - отображается справа от лейбла (если \`showCount={true}\`)
3. **Поле** - слот для input/textarea/select
4. **Иконка-префикс** - слева от поля (если указан \`prefixIcon\` или слот \`prefix\`)
5. **Иконка валидации** - справа от поля (если \`validationState\` установлен)
6. **Сообщение об ошибке** - отображается под полем (если указан \`error\`)
7. **Вспомогательный текст** - отображается под полем (если нет ошибки и указан \`helper\`)

### Состояния валидации

| Значение | Описание |
|----------|----------|
| \`success\` | Успешная валидация (зеленая иконка) |
| \`error\` | Ошибка валидации (красная иконка) |
| \`""\` | Нет валидации (пустая строка) |

### Отступы для иконок
Автоматически управляет отступами:
- При наличии префикс-иконки: \`pl-11\` (padding-left)
- При наличии иконки валидации: \`pr-10\` (padding-right)

### Счетчик символов
При \`showCount={true}\` и указанном \`maxLength\`:
- Отображается в формате "текущее / максимальное" (например, "150 / 500")
- Показывается справа от лейбла

## Особенности

### Слоты
- **default** - поле ввода (input/textarea/select)
- **prefix** - кастомная префикс-иконка или элемент

### Обязательное поле
При \`required={true}\` автоматически добавляется красная звездочка (*) справа от лейбла.

### Валидация
Компонент поддерживает визуальную индикацию валидации:
- Иконка валидации справа от поля
- Цветные сообщения об ошибках/успехе
- Автоматическое скрытие helper при наличии ошибки

### Интеграция
Компонент предназначен для обертки любых полей ввода, включая нативные HTML элементы.
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('');
      return { value };
    },
    template: `
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    `,
  }),
};

export const WithCounter = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('Hello');
      return { value };
    },
    template: `
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    `,
  }),
};

export const ValidationSuccess = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('valid@email.com');
      return { value };
    },
    template: `
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `,
  }),
};

export const ValidationError = {
  render: () => ({
    components: { DXFormControl },
    setup() {
      const value = ref('invalid');
      return { value };
    },
    template: `
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `,
  }),
};

