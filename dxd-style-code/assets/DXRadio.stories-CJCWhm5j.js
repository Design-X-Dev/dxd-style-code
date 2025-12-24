import{_ as e}from"./DXRadio-CRh-GVY2.js";import{r as a}from"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const Z={title:"Atoms/DXRadio",component:e,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXRadio

Компонент радиокнопки с поддержкой двух вариантов (нативный и кастомный), различных размеров и цветов.

## Назначение

DXRadio предоставляет стандартизированную радиокнопку для выбора одного значения из группы.
Компонент поддерживает два варианта оформления (нативный и кастомный), различные размеры, цвета
и работу в группах радиокнопок.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useVariantRadio\` composable - для вариантов оформления кастомной радиокнопки
- \`Transition\` - для анимации точки в кастомном варианте

### Используется в
- \`DXRadioGroup\` - группы радиокнопок
- Формы с выбором одного варианта из нескольких
- Настройки и конфигурация
- Фильтры с одним выбором
- Любые места, требующие выбора одного значения из группы

## Внутренняя логика

### Варианты
- **default** (по умолчанию): Нативный HTML radio с кастомной стилизацией
- **custom**: Кастомная радиокнопка с точкой и настраиваемыми цветами

### Работа в группах
Радиокнопки работают в группах через общий \`v-model\`:
- Все радиокнопки в группе имеют одинаковый \`v-model\`
- Каждая радиокнопка имеет уникальный \`value\`
- При выборе одной радиокнопки, остальные автоматически снимаются

### Кастомный вариант
При \`variant="custom"\`:
- Поддерживает различные цвета: \`slate\`, \`primary\`, \`success\`, \`danger\`, \`warning\`, \`info\`
- Отображает точку в центре при выборе
- Анимация появления точки через Transition

### Размеры
Поддерживает 5 размеров:
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой
- **xl** - очень большой

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- \`v-model="selected"\` где selected - String, Number или Boolean
- Каждая радиокнопка имеет свой \`value\` prop
- При выборе, \`v-model\` получает значение выбранной радиокнопки

### Лейбл
- Текст лейбла через \`label\` prop
- Лейбл кликабелен и выбирает радиокнопку

### Состояния
- **disabled** - отключает радиокнопку
- **checked** - выбранное состояние (когда \`modelValue === value\`)
- **unchecked** - невыбранное состояние

### Доступность
- Нативный radio: полная поддержка нативной доступности
- Кастомный radio: использует \`role="radio"\`, \`aria-checked\`, \`aria-disabled\`
- Поддержка клавиатурной навигации (Space для выбора)
- Автоматическая группировка через name атрибут (для нативного варианта)

### Отличие от Checkbox
- Radio: выбор одного значения из группы (взаимоисключающий)
- Checkbox: выбор нескольких значений или boolean переключатель
        `}}},argTypes:{variant:{control:"select",options:["default","custom"],description:"Radio variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Radio size"},color:{control:"select",options:["slate","primary","success","danger","warning","info"],description:"Color for custom variant"}}},t={render:()=>({components:{DXRadio:e},setup(){return{selected:a("option1")}},template:`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Option 1" />
        <DXRadio v-model="selected" value="option2" label="Option 2" />
        <DXRadio v-model="selected" value="option3" label="Option 3" />
      </div>
    `})},o={render:()=>({components:{DXRadio:e},setup(){return{selected:a("option1")}},template:`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Selected and disabled" disabled />
        <DXRadio v-model="selected" value="option2" label="Not selected and disabled" disabled />
      </div>
    `})},s={render:()=>({components:{DXRadio:e},setup(){return{selected:a("md")}},template:`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXRadio v-model="selected" value="xs" size="xs" label="Extra small radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (14px)</p>
          <DXRadio v-model="selected" value="sm" size="sm" label="Small radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (16px) - Default</p>
          <DXRadio v-model="selected" value="md" size="md" label="Medium radio (default)" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (20px)</p>
          <DXRadio v-model="selected" value="lg" size="lg" label="Large radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXRadio v-model="selected" value="xl" size="xl" label="Extra large radio" />
        </div>
      </div>
    `})},n={render:()=>({components:{DXRadio:e},setup(){return{selected:a("option2")}},template:`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select one option:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="selected" value="option1" label="Option 1" />
          <DXRadio v-model="selected" value="option2" label="Option 2" />
          <DXRadio v-model="selected" value="option3" label="Option 3" />
          <DXRadio v-model="selected" value="option4" label="Option 4" />
        </div>
      </div>
    `})},d={render:()=>({components:{DXRadio:e},setup(){return{selected:a("option2")}},template:`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" variant="custom" label="Option 1" />
        <DXRadio v-model="selected" value="option2" variant="custom" label="Option 2 (selected)" />
        <DXRadio v-model="selected" value="option3" variant="custom" label="Option 3" />
      </div>
    `})},i={render:()=>({components:{DXRadio:e},setup(){return{selected:a("primary")}},template:`
      <div class="space-y-3">
        <DXRadio v-model="selected" value="slate" variant="custom" color="slate" label="Slate" />
        <DXRadio v-model="selected" value="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXRadio v-model="selected" value="success" variant="custom" color="success" label="Success" />
        <DXRadio v-model="selected" value="danger" variant="custom" color="danger" label="Danger" />
        <DXRadio v-model="selected" value="warning" variant="custom" color="warning" label="Warning" />
        <DXRadio v-model="selected" value="info" variant="custom" color="info" label="Info" />
      </div>
    `})},r={render:()=>({components:{DXRadio:e},setup(){return{selected:a("md")}},template:`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXRadio v-model="selected" value="xs" variant="custom" size="xs" label="Extra small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (14px)</p>
          <DXRadio v-model="selected" value="sm" variant="custom" size="sm" label="Small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (16px) - Default</p>
          <DXRadio v-model="selected" value="md" variant="custom" size="md" label="Medium custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (20px)</p>
          <DXRadio v-model="selected" value="lg" variant="custom" size="lg" label="Large custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXRadio v-model="selected" value="xl" variant="custom" size="xl" label="Extra large custom" />
        </div>
      </div>
    `})},c={render:()=>({components:{DXRadio:e},setup(){return{plan:a("pro")}},template:`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select your plan:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="plan" value="free" variant="custom" color="slate" label="Free" />
          <DXRadio v-model="plan" value="basic" variant="custom" color="info" label="Basic" />
          <DXRadio v-model="plan" value="pro" variant="custom" color="success" label="Pro" />
          <DXRadio v-model="plan" value="enterprise" variant="custom" color="primary" label="Enterprise" />
        </div>
      </div>
    `})},m={render:()=>({components:{DXRadio:e},setup(){return{method:a("card")}},template:`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Payment Method</h3>
        <div class="space-y-3">
          <DXRadio v-model="method" value="card" variant="custom" color="primary" label="Credit Card" />
          <DXRadio v-model="method" value="paypal" variant="custom" color="info" label="PayPal" />
          <DXRadio v-model="method" value="bank" variant="custom" color="success" label="Bank Transfer" />
          <DXRadio v-model="method" value="crypto" variant="custom" color="warning" label="Cryptocurrency" />
        </div>
      </div>
    `})},p={render:()=>({components:{DXRadio:e},setup(){return{shipping:a("standard")}},template:`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Shipping Options</h3>
        <div class="space-y-3">
          <DXRadio v-model="shipping" value="standard" variant="custom" color="slate" label="Standard (5-7 days) - Free" />
          <DXRadio v-model="shipping" value="express" variant="custom" color="info" label="Express (2-3 days) - $9.99" />
          <DXRadio v-model="shipping" value="overnight" variant="custom" color="danger" label="Overnight (1 day) - $24.99" />
        </div>
      </div>
    `})},v={render:()=>({components:{DXRadio:e},setup(){return{difficulty:a("medium")}},template:`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Select Difficulty</h3>
        <div class="space-y-3">
          <DXRadio v-model="difficulty" value="easy" variant="custom" color="success" label="Easy - Perfect for beginners" />
          <DXRadio v-model="difficulty" value="medium" variant="custom" color="warning" label="Medium - Some experience needed" />
          <DXRadio v-model="difficulty" value="hard" variant="custom" color="danger" label="Hard - For experts only" />
        </div>
      </div>
    `})};var u,x,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('option1');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Option 1" />
        <DXRadio v-model="selected" value="option2" label="Option 2" />
        <DXRadio v-model="selected" value="option3" label="Option 3" />
      </div>
    \`
  })
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,D,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('option1');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" label="Selected and disabled" disabled />
        <DXRadio v-model="selected" value="option2" label="Not selected and disabled" disabled />
      </div>
    \`
  })
}`,...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var R,X,y;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('md');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXRadio v-model="selected" value="xs" size="xs" label="Extra small radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (14px)</p>
          <DXRadio v-model="selected" value="sm" size="sm" label="Small radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (16px) - Default</p>
          <DXRadio v-model="selected" value="md" size="md" label="Medium radio (default)" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (20px)</p>
          <DXRadio v-model="selected" value="lg" size="lg" label="Large radio" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXRadio v-model="selected" value="xl" size="xl" label="Extra large radio" />
        </div>
      </div>
    \`
  })
}`,...(y=(X=s.parameters)==null?void 0:X.docs)==null?void 0:y.source}}};var h,S,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('option2');
      return {
        selected
      };
    },
    template: \`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select one option:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="selected" value="option1" label="Option 1" />
          <DXRadio v-model="selected" value="option2" label="Option 2" />
          <DXRadio v-model="selected" value="option3" label="Option 3" />
          <DXRadio v-model="selected" value="option4" label="Option 4" />
        </div>
      </div>
    \`
  })
}`,...(z=(S=n.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var O,w,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('option2');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-2">
        <DXRadio v-model="selected" value="option1" variant="custom" label="Option 1" />
        <DXRadio v-model="selected" value="option2" variant="custom" label="Option 2 (selected)" />
        <DXRadio v-model="selected" value="option3" variant="custom" label="Option 3" />
      </div>
    \`
  })
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,L,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('primary');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-3">
        <DXRadio v-model="selected" value="slate" variant="custom" color="slate" label="Slate" />
        <DXRadio v-model="selected" value="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXRadio v-model="selected" value="success" variant="custom" color="success" label="Success" />
        <DXRadio v-model="selected" value="danger" variant="custom" color="danger" label="Danger" />
        <DXRadio v-model="selected" value="warning" variant="custom" color="warning" label="Warning" />
        <DXRadio v-model="selected" value="info" variant="custom" color="info" label="Info" />
      </div>
    \`
  })
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,k,F;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const selected = ref('md');
      return {
        selected
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXRadio v-model="selected" value="xs" variant="custom" size="xs" label="Extra small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (14px)</p>
          <DXRadio v-model="selected" value="sm" variant="custom" size="sm" label="Small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (16px) - Default</p>
          <DXRadio v-model="selected" value="md" variant="custom" size="md" label="Medium custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (20px)</p>
          <DXRadio v-model="selected" value="lg" variant="custom" size="lg" label="Large custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXRadio v-model="selected" value="xl" variant="custom" size="xl" label="Extra large custom" />
        </div>
      </div>
    \`
  })
}`,...(F=(k=r.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,T,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const plan = ref('pro');
      return {
        plan
      };
    },
    template: \`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select your plan:</p>
        <div class="flex flex-wrap items-center">
          <DXRadio v-model="plan" value="free" variant="custom" color="slate" label="Free" />
          <DXRadio v-model="plan" value="basic" variant="custom" color="info" label="Basic" />
          <DXRadio v-model="plan" value="pro" variant="custom" color="success" label="Pro" />
          <DXRadio v-model="plan" value="enterprise" variant="custom" color="primary" label="Enterprise" />
        </div>
      </div>
    \`
  })
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var B,$,H;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const method = ref('card');
      return {
        method
      };
    },
    template: \`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Payment Method</h3>
        <div class="space-y-3">
          <DXRadio v-model="method" value="card" variant="custom" color="primary" label="Credit Card" />
          <DXRadio v-model="method" value="paypal" variant="custom" color="info" label="PayPal" />
          <DXRadio v-model="method" value="bank" variant="custom" color="success" label="Bank Transfer" />
          <DXRadio v-model="method" value="crypto" variant="custom" color="warning" label="Cryptocurrency" />
        </div>
      </div>
    \`
  })
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var N,V,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const shipping = ref('standard');
      return {
        shipping
      };
    },
    template: \`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Shipping Options</h3>
        <div class="space-y-3">
          <DXRadio v-model="shipping" value="standard" variant="custom" color="slate" label="Standard (5-7 days) - Free" />
          <DXRadio v-model="shipping" value="express" variant="custom" color="info" label="Express (2-3 days) - $9.99" />
          <DXRadio v-model="shipping" value="overnight" variant="custom" color="danger" label="Overnight (1 day) - $24.99" />
        </div>
      </div>
    \`
  })
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var A,G,j;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadio
    },
    setup() {
      const difficulty = ref('medium');
      return {
        difficulty
      };
    },
    template: \`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Select Difficulty</h3>
        <div class="space-y-3">
          <DXRadio v-model="difficulty" value="easy" variant="custom" color="success" label="Easy - Perfect for beginners" />
          <DXRadio v-model="difficulty" value="medium" variant="custom" color="warning" label="Medium - Some experience needed" />
          <DXRadio v-model="difficulty" value="hard" variant="custom" color="danger" label="Hard - For experts only" />
        </div>
      </div>
    \`
  })
}`,...(j=(G=v.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};const ee=["Default","Disabled","Sizes","InlineLayout","CustomDefault","CustomColors","CustomSizes","CustomInlineLayout","PaymentMethod","ShippingOptions","DifficultyLevel"];export{i as CustomColors,d as CustomDefault,c as CustomInlineLayout,r as CustomSizes,t as Default,v as DifficultyLevel,o as Disabled,n as InlineLayout,m as PaymentMethod,p as ShippingOptions,s as Sizes,ee as __namedExportsOrder,Z as default};
