import{_ as o}from"./DXInputAddon-DgJzdsLu.js";import{_ as t}from"./DXInputGroup-CJ9OIHlc.js";import{_ as r}from"./DXInput-BG2R0LGs.js";import{a as q,o as F,b as J,r as n}from"./vue.esm-bundler-C1fUoNF-.js";import{r as N}from"./MagnifyingGlassIcon-DKNfedfR.js";import{r as i}from"./CurrencyDollarIcon-JgbsZQlv.js";import{r as X}from"./GlobeAltIcon-BxMdSmSi.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";function O(e,p){return F(),q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[J("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"})])}const In={title:"Atoms/DXInputAddon",component:o,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXInputAddon

Компонент аддона для групп полей ввода, используемый для добавления префиксов и суффиксов к полям.

## Назначение

DXInputAddon предоставляет способ добавления дополнительных элементов (текста, иконок) слева или справа
от полей ввода в составе DXInputGroup. Компонент автоматически синхронизирует размер, состояние disabled/error
и правильно применяет border-radius для визуального единства группы.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (синхронизируется с DXInputGroup)
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Префиксы для URL (https://)
- Суффиксы для валют (USD, EUR)
- Иконки в группах полей
- Любые места, требующие дополнительных элементов рядом с полями

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Аддон автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой (красная рамка)
- Border-radius адаптируется в зависимости от позиции:
  - Первый аддон → \`rounded-l-xl\`
  - Последний аддон → \`rounded-r-xl\`
  - Средний аддон → \`rounded-none\`

### Содержимое
Аддон может содержать:
- Текст через default slot (например, "https://", "USD")
- Иконку через \`icon\` prop (Heroicon компонент)
- Комбинацию текста и иконки

### Визуальное оформление
- Фон: \`bg-slate-50\` (светло-серый)
- Текст: \`text-slate-600\`
- Рамка: синхронизируется с группой
- Padding: адаптируется к размеру группы

## Особенности

### Позиционирование
- Аддоны размещаются слева или справа от основного поля
- Может быть несколько аддонов (например, $ слева и USD справа)

### Размеры
Размер автоматически синхронизируется с размером DXInputGroup:
- **sm** - маленький размер
- **md** - средний размер (по умолчанию)
- **lg** - крупный размер

### Состояния
- **disabled** - наследуется от группы, аддон становится полупрозрачным
- **error** - наследуется от группы, рамка становится красной

### Иконки
- Иконка отображается слева от текста (если есть)
- Размер иконки: \`w-4 h-4\`
- Можно использовать только иконку без текста

### Использование
Аддоны всегда используются внутри DXInputGroup:
\`\`\`
<DXInputGroup label="Website">
  <DXInputAddon>https://</DXInputAddon>
  <DXInput v-model="url" placeholder="example.com" />
</DXInputGroup>
\`\`\`
        `}}},argTypes:{icon:{control:!1,description:"Heroicon компонент для отображения иконки"}}},u={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{url:n("")}},template:`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    `})},d={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{price:n("")}},template:`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},l={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{search:n(""),MagnifyingGlassIcon:N}},template:`
      <DXInputGroup label="Search">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXInput v-model="search" placeholder="Search..." />
      </DXInputGroup>
    `})},a={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{email:n(""),AtSymbolIcon:O}},template:`
      <DXInputGroup label="Email">
        <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
        <DXInput v-model="email" type="email" placeholder="username" />
      </DXInputGroup>
    `})},c={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{amount:n(""),CurrencyDollarIcon:i}},template:`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},s={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n(""),p=n(""),A=n("");return{small:e,medium:p,large:A,GlobeAltIcon:X}},template:`
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
    `})},I={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n("example.com"),p=n("100.00");return{url:e,price:p,GlobeAltIcon:X,CurrencyDollarIcon:i}},template:`
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
    `})},D={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n("invalid-url"),p=n("abc");return{url:e,price:p,GlobeAltIcon:X,CurrencyDollarIcon:i}},template:`
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
    `})},m={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n(""),p=n(""),A=n(""),Z=n("");return{website:e,price:p,search:A,email:Z,GlobeAltIcon:X,CurrencyDollarIcon:i,MagnifyingGlassIcon:N,AtSymbolIcon:O}},template:`
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
        
        <DXInputGroup label="Search">
          <DXInputAddon :icon="MagnifyingGlassIcon" />
          <DXInput v-model="search" placeholder="Search..." />
        </DXInputGroup>
        
        <DXInputGroup label="Email">
          <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
          <DXInput v-model="email" type="email" placeholder="username" />
        </DXInputGroup>
      </div>
    `})};var G,b,h;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,y,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,g,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
      <DXInputGroup label="Search">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXInput v-model="search" placeholder="Search..." />
      </DXInputGroup>
    \`
  })
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var U,w,C;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const email = ref('');
      return {
        email,
        AtSymbolIcon
      };
    },
    template: \`
      <DXInputGroup label="Email">
        <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
        <DXInput v-model="email" type="email" placeholder="username" />
      </DXInputGroup>
    \`
  })
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var W,M,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(z=(M=c.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var _,$,L;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var R,E,P;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
}`,...(P=(E=I.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var B,k,j;D.parameters={...D.parameters,docs:{...(B=D.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
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
}`,...(j=(k=D.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,H,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const website = ref('');
      const price = ref('');
      const search = ref('');
      const email = ref('');
      return {
        website,
        price,
        search,
        email,
        GlobeAltIcon,
        CurrencyDollarIcon,
        MagnifyingGlassIcon,
        AtSymbolIcon
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
        
        <DXInputGroup label="Search">
          <DXInputAddon :icon="MagnifyingGlassIcon" />
          <DXInput v-model="search" placeholder="Search..." />
        </DXInputGroup>
        
        <DXInputGroup label="Email">
          <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
          <DXInput v-model="email" type="email" placeholder="username" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(V=(H=m.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};const Dn=["Default","WithSuffix","WithIcon","WithIconAndText","BothSides","Sizes","Disabled","WithError","UseCases"];export{c as BothSides,u as Default,I as Disabled,s as Sizes,m as UseCases,D as WithError,l as WithIcon,a as WithIconAndText,d as WithSuffix,Dn as __namedExportsOrder,In as default};
