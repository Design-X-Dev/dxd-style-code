import{_ as T}from"./DXToast-C7fDgW_4.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";const h={title:"Atoms/DXToast",component:T,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXToast

Компонент уведомления (toast) с поддержкой различных вариантов и иконок.

## Назначение

DXToast предоставляет стандартизированный способ отображения временных уведомлений.
Компонент поддерживает различные варианты (info, success, warning, danger) и автоматически
отображает соответствующие иконки.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок вариантов
- \`useVariantConfig\` composable - для конфигурации вариантов

### Используется в
- Уведомления об успешных операциях
- Сообщения об ошибках
- Предупреждения
- Информационные сообщения
- Любые места, требующие временных уведомлений

## Внутренняя логика

### Варианты
Поддерживает 4 варианта:
- **info** (по умолчанию) - информационное сообщение (синий цвет)
- **success** - успешная операция (зеленый цвет)
- **warning** - предупреждение (желтый цвет)
- **danger** - ошибка (красный цвет)

### Иконки
Каждый вариант автоматически получает соответствующую иконку:
- info → InformationCircleIcon
- success → CheckCircleIcon
- warning → ExclamationTriangleIcon
- danger → XCircleIcon

Иконки можно скрыть через \`showIcon={false}\`.

### Визуальное оформление
- Скругленные углы (\`rounded-2xl\`)
- Рамка для визуального выделения
- Padding для контента
- Иконка слева, текст справа

## Особенности

### Слоты
- **default** - основной контент (текст сообщения)

### Использование
Обычно используется в составе toast-менеджера для отображения уведомлений в определенной
области экрана (обычно сверху или снизу).
        `}}}},s={args:{variant:"success",message:"Operation completed successfully!"}},a={args:{variant:"error",message:"Something went wrong. Please try again."}},e={args:{variant:"warning",message:"Please review before continuing."}},r={args:{variant:"info",message:"New features are available."}},n={render:()=>({components:{DXToast:T},template:`
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    `})};var o,t,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "success",
    message: "Operation completed successfully!"
  }
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,m,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "error",
    message: "Something went wrong. Please try again."
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    message: "Please review before continuing."
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,f,v;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "info",
    message: "New features are available."
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var w,X,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXToast
    },
    template: \`
      <div class="space-y-4">
        <DXToast variant="success" message="Success toast message" />
        <DXToast variant="error" message="Error toast message" />
        <DXToast variant="warning" message="Warning toast message" />
        <DXToast variant="info" message="Info toast message" />
      </div>
    \`
  })
}`,...(D=(X=n.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};const x=["Success","Error","Warning","Info","AllVariants"];export{n as AllVariants,a as Error,r as Info,s as Success,e as Warning,x as __namedExportsOrder,h as default};
