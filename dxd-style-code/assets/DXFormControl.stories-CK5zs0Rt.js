import{_ as e}from"./DXFormControl-Dg_VsVTj.js";import{r as l}from"./vue.esm-bundler-C1fUoNF-.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXText-Bu-Qlv6N.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXValidationIcon-n1eDkzYR.js";import"./ExclamationCircleIcon-4GpTxUBf.js";const V={title:"Molecules/DXFormControl",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXFormControl

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
Поддерживает три состояния:
- **success** - успешная валидация (зеленая иконка)
- **error** - ошибка валидации (красная иконка)
- **""** (пустая строка) - нет валидации

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
        `}}}},r={render:()=>({components:{DXFormControl:e},setup(){return{value:l("")}},template:`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    `})},o={render:()=>({components:{DXFormControl:e},setup(){return{value:l("Hello")}},template:`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    `})},t={render:()=>({components:{DXFormControl:e},setup(){return{value:l("valid@email.com")}},template:`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})},n={render:()=>({components:{DXFormControl:e},setup(){return{value:l("invalid")}},template:`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    `})};var s,m,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email">
        <input v-model="value" type="email" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" placeholder="Enter email" />
      </DXFormControl>
    \`
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,d,i;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('Hello');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Bio" :max-length="100" :current-length="5" show-count>
        <textarea v-model="value" class="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" rows="3"></textarea>
      </DXFormControl>
    \`
  })
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,v,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('valid@email.com');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="success">
        <input v-model="value" type="email" class="w-full rounded-xl border border-emerald-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var D,C,X;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFormControl
    },
    setup() {
      const value = ref('invalid');
      return {
        value
      };
    },
    template: \`
      <DXFormControl label="Email" validation-state="error" error="Invalid email format">
        <input v-model="value" type="email" class="w-full rounded-xl border border-rose-300 px-4 py-3 text-sm" />
      </DXFormControl>
    \`
  })
}`,...(X=(C=n.parameters)==null?void 0:C.docs)==null?void 0:X.source}}};const H=["Default","WithCounter","ValidationSuccess","ValidationError"];export{r as Default,n as ValidationError,t as ValidationSuccess,o as WithCounter,H as __namedExportsOrder,V as default};
