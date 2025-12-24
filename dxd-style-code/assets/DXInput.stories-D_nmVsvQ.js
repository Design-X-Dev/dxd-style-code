import{_ as n}from"./DXInput-BG2R0LGs.js";import{r}from"./vue.esm-bundler-C1fUoNF-.js";import{r as D}from"./EnvelopeIcon-W02SAIOs.js";import{r as le}from"./CheckCircleIcon-CdLAVfyU.js";import{r as Y}from"./MagnifyingGlassIcon-DKNfedfR.js";import{r as Z}from"./MapPinIcon-gcUGppIA.js";import{r as ee}from"./PhoneIcon-Ci3GZRnt.js";import{r as ne}from"./UserIcon-CczDTS1j.js";import{r as re}from"./CurrencyDollarIcon-JgbsZQlv.js";import{r as oe,a as pe}from"./CreditCardIcon-DMq21L2i.js";import{r as te}from"./GlobeAltIcon-BxMdSmSi.js";import{r as ce}from"./LockClosedIcon-O3AcKYly.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";const Le={title:"Molecules/DXInput",component:n,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXInput

Компонент поля ввода с поддержкой иконок, валидации и интеграции с группами полей.

## Назначение

DXInput предоставляет стандартизированное поле ввода с поддержкой различных типов (text, email, number, tel, url),
иконок слева и справа, валидации, состояний ошибок и автоматической адаптации при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок и вспомогательного текста
- \`DXIconWrapper\` - для отображения иконок слева и справа
- \`useSize\` composable - для унификации размеров (sm, md, lg)
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- \`DXFormControl\` - контроль форм
- \`DXAuthenticationForm\` - формы аутентификации
- Любые формы, требующие текстового ввода

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа:
  - Оба аддона → \`rounded-none\`
  - Только слева → \`rounded-l-none rounded-r-xl\`
  - Только справа → \`rounded-l-xl rounded-r-none\`
  - Нет аддонов → \`rounded-xl\`

### Иконки
Поддерживает иконки через:
- \`prefixIcon\` prop - иконка слева (Heroicon компонент)
- \`suffixIcon\` prop - иконка справа (Heroicon компонент)
- Слоты \`prefix\` и \`suffix\` - для кастомных элементов

Размер иконки автоматически адаптируется к размеру поля:
- sm → sm
- md → md
- lg → lg

Padding для текста автоматически увеличивается при наличии иконок:
- sm: pl-10 / pr-10
- md: pl-11 / pr-11
- lg: pl-12 / pr-12

### Валидация
- При наличии \`error\` prop, поле получает красную рамку (\`border-rose-300\`)
- Текст ошибки отображается через \`DXFormLabel\`
- Состояние ошибки синхронизируется с \`DXInputGroup\`

### Размеры
Поддерживает три размера:
- **sm** - компактный размер
- **md** - средний размер (по умолчанию)
- **lg** - крупный размер

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Number значений.

### Типы полей
Поддерживает стандартные HTML типы:
- \`text\` - обычный текст (по умолчанию)
- \`email\` - email адрес
- \`number\` - число
- \`tel\` - телефон
- \`url\` - URL адрес
- И другие стандартные типы input

### Состояния
- **disabled** - отключает поле (opacity-60, cursor-not-allowed, bg-slate-50)
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное (через DXFormLabel)

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)

### Кастомные классы
Поддерживает \`inputClass\` prop для добавления дополнительных CSS классов к input элементу.
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Размер поля"},disabled:{control:"boolean",description:"Отключенное состояние"},type:{control:"select",options:["text","email","number","tel","url"],description:"Тип input"}}},o={args:{placeholder:"Введите текст..."},render:e=>({components:{DXInput:n},setup(){return{args:e}},template:'<DXInput v-bind="args" />'})},a={args:{label:"Email",placeholder:"example@mail.com",type:"email"},render:e=>({components:{DXInput:n},setup(){return{args:e}},template:'<DXInput v-bind="args" />'})},l={args:{label:"Пароль",placeholder:"Минимум 8 символов",helper:"Используйте буквы, цифры и символы",type:"password"},render:e=>({components:{DXInput:n},setup(){return{args:e}},template:'<DXInput v-bind="args" />'})},p={args:{label:"Email",placeholder:"example@mail.com",error:"Неверный формат email",modelValue:"invalid-email"},render:e=>({components:{DXInput:n},setup(){return{args:e}},template:'<DXInput v-bind="args" />'})},t={args:{label:"Поле отключено",placeholder:"Нельзя редактировать",disabled:!0,modelValue:"Значение"},render:e=>({components:{DXInput:n},setup(){return{args:e}},template:'<DXInput v-bind="args" />'})},c={render:()=>({components:{DXInput:n},template:`
      <div class="space-y-4 max-w-md">
        <DXInput size="sm" placeholder="Small" label="Small" />
        <DXInput size="md" placeholder="Medium" label="Medium" />
        <DXInput size="lg" placeholder="Large" label="Large" />
      </div>
    `})},s={render:()=>({components:{DXInput:n},setup(){return{email:r(""),EnvelopeIcon:D}},template:`
      <DXInput
        v-model="email"
        label="Email"
        placeholder="example@mail.com"
        :prefix-icon="EnvelopeIcon"
      />
    `})},u={render:()=>({components:{DXInput:n},setup(){return{url:r("https://example.com"),CheckCircleIcon:le}},template:`
      <DXInput
        v-model="url"
        label="Website"
        placeholder="https://..."
        :suffix-icon="CheckCircleIcon"
        helper="URL is valid"
      />
    `})},i={render:()=>({components:{DXInput:n},setup(){return{search:r(""),MagnifyingGlassIcon:Y}},template:`
      <DXInput
        v-model="search"
        placeholder="Search..."
        :prefix-icon="MagnifyingGlassIcon"
      />
    `})},m={render:()=>({components:{DXInput:n},setup(){return{form:r({name:"",email:"",phone:"",address:""}),UserIcon:ne,EnvelopeIcon:D,PhoneIcon:ee,MapPinIcon:Z}},template:`
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="form.name"
          label="Full Name"
          placeholder="John Doe"
          :prefix-icon="UserIcon"
        />
        <DXInput
          v-model="form.email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          :prefix-icon="EnvelopeIcon"
        />
        <DXInput
          v-model="form.phone"
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          :prefix-icon="PhoneIcon"
        />
        <DXInput
          v-model="form.address"
          label="Address"
          placeholder="123 Main St"
          :prefix-icon="MapPinIcon"
        />
      </div>
    `})},d={render:()=>({components:{DXInput:n},setup(){const e=r(""),ae=r("");return{cardNumber:e,amount:ae,CreditCardIcon:oe,CurrencyDollarIcon:re}},template:`
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          :prefix-icon="CreditCardIcon"
        />
        <DXInput
          v-model="amount"
          label="Amount"
          type="number"
          placeholder="0.00"
          :prefix-icon="CurrencyDollarIcon"
        />
      </div>
    `})},I={render:()=>({components:{DXInput:n},setup(){return{MagnifyingGlassIcon:Y,EnvelopeIcon:D,PhoneIcon:ee,UserIcon:ne,LockClosedIcon:ce,CreditCardIcon:oe,CalendarIcon:pe,MapPinIcon:Z,CurrencyDollarIcon:re,GlobeAltIcon:te}},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXInput placeholder="Search" :prefix-icon="MagnifyingGlassIcon" />
        <DXInput placeholder="Email" :prefix-icon="EnvelopeIcon" />
        <DXInput placeholder="Phone" :prefix-icon="PhoneIcon" />
        <DXInput placeholder="Username" :prefix-icon="UserIcon" />
        <DXInput placeholder="Password" type="password" :prefix-icon="LockClosedIcon" />
        <DXInput placeholder="Card" :prefix-icon="CreditCardIcon" />
        <DXInput placeholder="Date" :prefix-icon="CalendarIcon" />
        <DXInput placeholder="Location" :prefix-icon="MapPinIcon" />
        <DXInput placeholder="Price" :prefix-icon="CurrencyDollarIcon" />
        <DXInput placeholder="Website" :prefix-icon="GlobeAltIcon" />
      </div>
    `})};var h,f,X;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст...'
  },
  render: args => ({
    components: {
      DXInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXInput v-bind="args" />'
  })
}`,...(X=(f=o.parameters)==null?void 0:f.docs)==null?void 0:X.source}}};var g,b,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    type: 'email'
  },
  render: args => ({
    components: {
      DXInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXInput v-bind="args" />'
  })
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,C,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    placeholder: 'Минимум 8 символов',
    helper: 'Используйте буквы, цифры и символы',
    type: 'password'
  },
  render: args => ({
    components: {
      DXInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXInput v-bind="args" />'
  })
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var E,S,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'example@mail.com',
    error: 'Неверный формат email',
    modelValue: 'invalid-email'
  },
  render: args => ({
    components: {
      DXInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXInput v-bind="args" />'
  })
}`,...(P=(S=p.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var M,L,G;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Поле отключено',
    placeholder: 'Нельзя редактировать',
    disabled: true,
    modelValue: 'Значение'
  },
  render: args => ({
    components: {
      DXInput
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXInput v-bind="args" />'
  })
}`,...(G=(L=t.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var W,A,F;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInput size="sm" placeholder="Small" label="Small" />
        <DXInput size="md" placeholder="Medium" label="Medium" />
        <DXInput size="lg" placeholder="Large" label="Large" />
      </div>
    \`
  })
}`,...(F=(A=c.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var w,U,B;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      const email = ref('');
      return {
        email,
        EnvelopeIcon
      };
    },
    template: \`
      <DXInput
        v-model="email"
        label="Email"
        placeholder="example@mail.com"
        :prefix-icon="EnvelopeIcon"
      />
    \`
  })
}`,...(B=(U=s.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var z,N,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      const url = ref('https://example.com');
      return {
        url,
        CheckCircleIcon
      };
    },
    template: \`
      <DXInput
        v-model="url"
        label="Website"
        placeholder="https://..."
        :suffix-icon="CheckCircleIcon"
        helper="URL is valid"
      />
    \`
  })
}`,...($=(N=u.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var k,_,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      const search = ref('');
      return {
        search,
        MagnifyingGlassIcon
      };
    },
    template: \`
      <DXInput
        v-model="search"
        placeholder="Search..."
        :prefix-icon="MagnifyingGlassIcon"
      />
    \`
  })
}`,...(H=(_=i.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var j,T,V;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      const form = ref({
        name: '',
        email: '',
        phone: '',
        address: ''
      });
      return {
        form,
        UserIcon,
        EnvelopeIcon,
        PhoneIcon,
        MapPinIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="form.name"
          label="Full Name"
          placeholder="John Doe"
          :prefix-icon="UserIcon"
        />
        <DXInput
          v-model="form.email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          :prefix-icon="EnvelopeIcon"
        />
        <DXInput
          v-model="form.phone"
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          :prefix-icon="PhoneIcon"
        />
        <DXInput
          v-model="form.address"
          label="Address"
          placeholder="123 Main St"
          :prefix-icon="MapPinIcon"
        />
      </div>
    \`
  })
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var R,J,q;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      const cardNumber = ref('');
      const amount = ref('');
      return {
        cardNumber,
        amount,
        CreditCardIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInput
          v-model="cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          :prefix-icon="CreditCardIcon"
        />
        <DXInput
          v-model="amount"
          label="Amount"
          type="number"
          placeholder="0.00"
          :prefix-icon="CurrencyDollarIcon"
        />
      </div>
    \`
  })
}`,...(q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var O,K,Q;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInput
    },
    setup() {
      return {
        MagnifyingGlassIcon,
        EnvelopeIcon,
        PhoneIcon,
        UserIcon,
        LockClosedIcon,
        CreditCardIcon,
        CalendarIcon,
        MapPinIcon,
        CurrencyDollarIcon,
        GlobeAltIcon
      };
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXInput placeholder="Search" :prefix-icon="MagnifyingGlassIcon" />
        <DXInput placeholder="Email" :prefix-icon="EnvelopeIcon" />
        <DXInput placeholder="Phone" :prefix-icon="PhoneIcon" />
        <DXInput placeholder="Username" :prefix-icon="UserIcon" />
        <DXInput placeholder="Password" type="password" :prefix-icon="LockClosedIcon" />
        <DXInput placeholder="Card" :prefix-icon="CreditCardIcon" />
        <DXInput placeholder="Date" :prefix-icon="CalendarIcon" />
        <DXInput placeholder="Location" :prefix-icon="MapPinIcon" />
        <DXInput placeholder="Price" :prefix-icon="CurrencyDollarIcon" />
        <DXInput placeholder="Website" :prefix-icon="GlobeAltIcon" />
      </div>
    \`
  })
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const Ge=["Default","WithLabel","WithHelper","WithError","Disabled","Sizes","WithPrefixIcon","WithSuffixIcon","Search","FormWithIcons","PaymentForm","AllIconTypes"];export{I as AllIconTypes,o as Default,t as Disabled,m as FormWithIcons,d as PaymentForm,i as Search,c as Sizes,p as WithError,l as WithHelper,a as WithLabel,s as WithPrefixIcon,u as WithSuffixIcon,Ge as __namedExportsOrder,Le as default};
