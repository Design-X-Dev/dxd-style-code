import{_ as o}from"./DXPasswordInput-B2m2H6Xc.js";import{r as a}from"./vue.esm-bundler-C1fUoNF-.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./EyeIcon-DEic3pSg.js";const g={title:"Molecules/DXPasswordInput",component:o,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXPasswordInput

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
        `}}}},s={render:()=>({components:{DXPasswordInput:o},setup(){return{password:a("")}},template:'<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'})},r={render:()=>({components:{DXPasswordInput:o},setup(){return{password:a("secretpassword")}},template:'<DXPasswordInput v-model="password" label="Password" />'})},e={render:()=>({components:{DXPasswordInput:o},setup(){return{password:a("")}},template:'<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'})};var n,p,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'
  })
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('secretpassword');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" />'
  })
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,w,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'
  })
}`,...(i=(w=e.parameters)==null?void 0:w.docs)==null?void 0:i.source}}};const E=["Default","WithValue","WithHelper"];export{s as Default,e as WithHelper,r as WithValue,E as __namedExportsOrder,g as default};
