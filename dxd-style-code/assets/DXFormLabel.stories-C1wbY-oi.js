import{_ as r}from"./DXFormLabel-DO2rZe0p.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";const k={title:"Atoms/DXFormLabel",component:r,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXFormLabel

Компонент обертки для полей форм с поддержкой лейбла, ошибок, вспомогательного текста и счетчика символов.

## Назначение

DXFormLabel предоставляет комплексную обертку для полей форм, объединяя лейбл, поле ввода,
сообщения об ошибках, вспомогательный текст, сообщения об успехе и счетчик символов в единый компонент.

## Архитектура

### Использует
- \`DXIcon\` - для иконок валидации (ошибка, успех)

### Используется в
- \`DXInput\` - обертка для полей ввода
- \`DXSelect\` - обертка для выпадающих списков
- \`DXTextarea\` - обертка для многострочных полей
- Любые поля форм, требующие полную структуру с лейблом и сообщениями

## Внутренняя логика

### Структура
Компонент состоит из:
1. **Лейбл** - отображается над полем (если указан \`label\`)
2. **Счетчик символов** - отображается справа от лейбла (если \`showCount={true}\`)
3. **Поле** - слот для input/textarea/select
4. **Сообщение об ошибке** - отображается под полем (если указан \`error\`)
5. **Вспомогательный текст** - отображается под полем (если нет ошибки и указан \`helper\`)
6. **Сообщение об успехе** - отображается под полем (если нет ошибки и указан \`success\`)

### Приоритет сообщений
Приоритет отображения сообщений:
1. Ошибка (если есть) - всегда показывается
2. Успех (если нет ошибки) - показывается вместо helper
3. Helper (если нет ошибки и успеха) - показывается как вспомогательный текст

### Счетчик символов
При \`showCount={true}\` и указанном \`maxLength\`:
- Отображается в формате "текущее / максимальное" (например, "150 / 500")
- Показывается справа от лейбла

### Иконки валидации
При \`showValidationIcon={true}\` (по умолчанию):
- Иконка ошибки (ExclamationCircleIcon) для сообщений об ошибке
- Иконка успеха (CheckCircleIcon) для сообщений об успехе

## Особенности

### Обязательное поле
При \`required={true}\` автоматически добавляется красная звездочка (*) справа от лейбла.

### Валидация
Компонент поддерживает три состояния валидации:
- **error** - ошибка (красный цвет, иконка)
- **success** - успех (зеленый цвет, иконка)
- **helper** - вспомогательный текст (серый цвет)

### Слоты
- **default** - поле ввода (input/textarea/select)
- **label** - кастомный лейбл (если нужно)
        `}}},argTypes:{label:{control:"text",description:"Label text"},error:{control:"text",description:"Error message"},helper:{control:"text",description:"Helper text"},success:{control:"text",description:"Success message"},required:{control:"boolean",description:"Show required asterisk"},showValidationIcon:{control:"boolean",description:"Show validation icon in messages"},maxLength:{control:"number",description:"Maximum length for character count"},currentLength:{control:"number",description:"Current length for character count"},showCount:{control:"boolean",description:"Show character count"}}},t={args:{label:"Email Address",helper:"We will never share your email with anyone else."},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `})},n={args:{label:"Username",error:"Username is already taken",showValidationIcon:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    `})},o={args:{label:"Full Name",required:!0,helper:"Please enter your legal name"},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    `})},a={args:{label:"Bio",helper:"Tell us about yourself",maxLength:150,currentLength:45,showCount:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    `})},s={args:{label:"Email Verification",success:"Email verified successfully!",showValidationIcon:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    `})},l={args:{label:"Description",required:!0,helper:"Provide a detailed description",maxLength:200,currentLength:125,showCount:!0},render:e=>({components:{DXFormLabel:r},setup(){return{args:e}},template:`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    `})};var u,c,i;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    helper: 'We will never share your email with anyone else.'
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          placeholder="Enter your email"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    \`
  })
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'Username is already taken',
    showValidationIcon: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="Choose a username"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-rose-300 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/10"
        />
      </DXFormLabel>
    \`
  })
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,h,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    required: true,
    helper: 'Please enter your legal name'
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="text" 
          placeholder="John Doe"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        />
      </DXFormLabel>
    \`
  })
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,f,L;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    helper: 'Tell us about yourself',
    maxLength: 150,
    currentLength: 45,
    showCount: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Write your bio..."
          rows="3"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >This is my bio text that takes up some space...</textarea>
      </DXFormLabel>
    \`
  })
}`,...(L=(f=a.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var D,w,X;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Email Verification',
    success: 'Email verified successfully!',
    showValidationIcon: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <input 
          type="email" 
          value="user@example.com"
          class="w-full h-10 px-4 py-2.5 text-sm rounded-xl border border-emerald-300 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/10"
        />
      </DXFormLabel>
    \`
  })
}`,...(X=(w=s.parameters)==null?void 0:w.docs)==null?void 0:X.source}}};var F,y,v;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    required: true,
    helper: 'Provide a detailed description',
    maxLength: 200,
    currentLength: 125,
    showCount: true
  },
  render: args => ({
    components: {
      DXFormLabel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXFormLabel v-bind="args">
        <textarea 
          placeholder="Enter description..."
          rows="4"
          class="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</textarea>
      </DXFormLabel>
    \`
  })
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const T=["Default","WithError","Required","WithCharacterCount","WithSuccess","Complete"];export{l as Complete,t as Default,o as Required,a as WithCharacterCount,n as WithError,s as WithSuccess,T as __namedExportsOrder,k as default};
