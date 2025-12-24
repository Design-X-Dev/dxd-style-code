import{_ as o}from"./DXInputGroup-CJ9OIHlc.js";import{_ as t}from"./DXInputAddon-DgJzdsLu.js";import{_ as p}from"./DXInput-BG2R0LGs.js";import{_ as O}from"./DXSelect-CgmhnMxb.js";import{_ as q}from"./DXTextarea-D9Exn-g-.js";import{r as n}from"./vue.esm-bundler-C1fUoNF-.js";import{r as i}from"./CurrencyDollarIcon-JgbsZQlv.js";import{r as u}from"./GlobeAltIcon-BxMdSmSi.js";import{r as F}from"./MagnifyingGlassIcon-DKNfedfR.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";const Dn={title:"Molecules/DXInputGroup",component:o,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXInputGroup

Группа полей ввода с поддержкой аддонов (префиксов и суффиксов) и синхронизацией состояний.

## Назначение

DXInputGroup предоставляет способ группировки полей ввода с дополнительными элементами (аддонами)
слева и справа. Компонент автоматически управляет синхронизацией размеров, состояний disabled/error
и правильным применением border-radius для создания визуально единой группы.

## Архитектура

### Использует
- \`DXInput\` - основное поле ввода (автоматически адаптируется при использовании внутри группы)
- \`DXInputAddon\` - аддоны слева и справа от поля
- \`DXSelect\` - может использоваться вместо DXInput
- \`DXTextarea\` - может использоваться вместо DXInput
- \`provide/inject\` - для передачи контекста группы к дочерним компонентам
- Система регистрации компонентов - для отслеживания структуры и правильного применения стилей

### Используется в
- Формы с префиксами (например, https:// для URL)
- Формы с суффиксами (например, валюта для цены)
- Формы с обоими аддонами (например, $ и .00 для суммы)
- Интеграция с селектами и textarea

## Внутренняя логика

### Система регистрации компонентов
Компонент отслеживает порядок регистрации дочерних компонентов для:
- Определения наличия аддонов слева и справа от каждого поля
- Правильного применения border-radius:
  - Оба аддона → \`rounded-none\` (без скругления)
  - Только слева → \`rounded-l-none rounded-r-xl\` (скругление справа)
  - Только справа → \`rounded-l-xl rounded-r-none\` (скругление слева)
  - Нет аддонов → \`rounded-xl\` (полное скругление)
- Синхронизации размеров всех компонентов в группе

### Интеграция с дочерними компонентами
При использовании дочерних компонентов внутри группы:
- **DXInput**: Автоматически регистрируется как 'input', получает информацию о позиции аддонов
- **DXInputAddon**: Автоматически регистрируется как 'addon', синхронизирует размер и состояние
- **DXSelect**: Может использоваться вместо DXInput, также регистрируется
- **DXTextarea**: Может использоваться вместо DXInput, также регистрируется

### Синхронизация состояний
- **size**: Размер применяется ко всем компонентам в группе
- **disabled**: Состояние disabled наследуется всеми компонентами
- **error**: Состояние ошибки синхронизируется со всеми компонентами (красная рамка)

## Особенности

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.
Размер применяется ко всем компонентам в группе автоматически.

### Label и Helper
- **label**: Отображается над группой полей
- **helper**: Вспомогательный текст под группой полей
- **error**: Текст ошибки (заменяет helper при наличии)

### Аддоны
Аддоны могут содержать:
- Текст (например, "https://", "USD", "$")
- Иконки (через \`icon\` prop в DXInputAddon)
- Комбинацию текста и иконки

### Гибкость
Группа может содержать:
- Только поле без аддонов
- Поле с аддоном слева
- Поле с аддоном справа
- Поле с аддонами с обеих сторон
- Несколько полей с аддонами

### Визуальное единство
Все компоненты в группе визуально объединены:
- Общие границы между элементами
- Синхронизированные размеры
- Единое состояние (disabled/error)
        `}}}},l={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{url:n("")}},template:`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    `})},d={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{price:n("")}},template:`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},a={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{amount:n(""),CurrencyDollarIcon:i}},template:`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>.00</DXInputAddon>
      </DXInputGroup>
    `})},c={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXSelect:O},setup(){return{country:n(""),countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"de",label:"Germany"}],GlobeAltIcon:u}},template:`
      <DXInputGroup label="Country">
        <DXInputAddon :icon="GlobeAltIcon" />
        <DXSelect v-model="country" :options="countries" placeholder="Select country" />
      </DXInputGroup>
    `})},s={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXTextarea:q},setup(){return{message:n(""),MagnifyingGlassIcon:F}},template:`
      <DXInputGroup label="Message">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXTextarea v-model="message" placeholder="Enter your message..." :rows="4" />
      </DXInputGroup>
    `})},I={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n(""),r=n(""),b=n("");return{small:e,medium:r,large:b,GlobeAltIcon:u}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Small" size="sm">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="small" size="sm" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Medium (default)" size="md">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="medium" size="md" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Large" size="lg">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="large" size="lg" placeholder="example.com" />
        </DXInputGroup>
      </div>
    `})},D={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n("example.com"),r=n("100.00");return{url:e,price:r,GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Disabled Website" disabled>
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" disabled placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Disabled Price" disabled>
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" disabled placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `})},m={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n("invalid-url"),r=n("abc");return{url:e,price:r,GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Website URL" error="Invalid URL format">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" error="Invalid URL format" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price" error="Must be a number">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" error="Must be a number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `})},X={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p,DXSelect:O},setup(){const e=n(""),r=n(""),b=n("");return{website:e,price:r,country:b,countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"}],GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
      <div class="space-y-6 max-w-md">
        <DXInputGroup label="Website URL">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="website" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
        
        <DXInputGroup label="Country">
          <DXInputAddon :icon="GlobeAltIcon" />
          <DXSelect v-model="country" :options="countries" placeholder="Select country" />
        </DXInputGroup>
      </div>
    `})};var A,G,v;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const url = ref('');
      return {
        url
      };
    },
    template: \`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    \`
  })
}`,...(v=(G=l.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var y,h,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const price = ref('');
      return {
        price
      };
    },
    template: \`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,g,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const amount = ref('');
      return {
        amount,
        CurrencyDollarIcon
      };
    },
    template: \`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>.00</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var U,C,_;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXSelect
    },
    setup() {
      const country = ref('');
      const countries = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }, {
        value: 'de',
        label: 'Germany'
      }];
      return {
        country,
        countries,
        GlobeAltIcon
      };
    },
    template: \`
      <DXInputGroup label="Country">
        <DXInputAddon :icon="GlobeAltIcon" />
        <DXSelect v-model="country" :options="countries" placeholder="Select country" />
      </DXInputGroup>
    \`
  })
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var W,$,w;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXTextarea
    },
    setup() {
      const message = ref('');
      return {
        message,
        MagnifyingGlassIcon
      };
    },
    template: \`
      <DXInputGroup label="Message">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXTextarea v-model="message" placeholder="Enter your message..." :rows="4" />
      </DXInputGroup>
    \`
  })
}`,...(w=($=s.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var z,M,L;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      return {
        small,
        medium,
        large,
        GlobeAltIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Small" size="sm">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="small" size="sm" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Medium (default)" size="md">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="medium" size="md" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Large" size="lg">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="large" size="lg" placeholder="example.com" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(L=(M=I.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var R,P,T;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const url = ref('example.com');
      const price = ref('100.00');
      return {
        url,
        price,
        GlobeAltIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Disabled Website" disabled>
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" disabled placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Disabled Price" disabled>
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" disabled placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    \`
  })
}`,...(T=(P=D.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,k,K;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput
    },
    setup() {
      const url = ref('invalid-url');
      const price = ref('abc');
      return {
        url,
        price,
        GlobeAltIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Website URL" error="Invalid URL format">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" error="Invalid URL format" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price" error="Must be a number">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" error="Must be a number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    \`
  })
}`,...(K=(k=m.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var B,j,H;X.parameters={...X.parameters,docs:{...(B=X.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput,
      DXSelect
    },
    setup() {
      const website = ref('');
      const price = ref('');
      const country = ref('');
      const countries = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }];
      return {
        website,
        price,
        country,
        countries,
        GlobeAltIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-6 max-w-md">
        <DXInputGroup label="Website URL">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="website" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
        
        <DXInputGroup label="Country">
          <DXInputAddon :icon="GlobeAltIcon" />
          <DXSelect v-model="country" :options="countries" placeholder="Select country" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(H=(j=X.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const mn=["Default","WithSuffix","BothSides","WithSelect","WithTextarea","Sizes","Disabled","WithError","UseCases"];export{a as BothSides,l as Default,D as Disabled,I as Sizes,X as UseCases,m as WithError,c as WithSelect,d as WithSuffix,s as WithTextarea,mn as __namedExportsOrder,Dn as default};
