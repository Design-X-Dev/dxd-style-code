import{_ as l}from"./DXSelect-CgmhnMxb.js";import{a as V,o as Y,b as j,r as e}from"./vue.esm-bundler-C1fUoNF-.js";import{r as _}from"./GlobeAltIcon-BxMdSmSi.js";import{r as W}from"./CurrencyDollarIcon-JgbsZQlv.js";import{r as H}from"./MapPinIcon-gcUGppIA.js";import{r as N,a as $}from"./LanguageIcon-DdWBHzSa.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";function J(n,r){return Y(),V("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"})])}const ue={title:"Molecules/DXSelect",component:l,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXSelect

Компонент выпадающего списка с поддержкой иконок, валидации и интеграции с группами полей.

## Назначение

DXSelect предоставляет стандартизированный выпадающий список для выбора одного значения из списка опций.
Компонент поддерживает иконки, валидацию, состояния ошибок и автоматическую адаптацию при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок и вспомогательного текста
- \`DXIconWrapper\` - для отображения иконки слева
- \`DXIcon\` - для иконки chevron справа
- \`useSize\` composable - для унификации размеров (sm, md, lg)
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Формы выбора значений
- Фильтры и сортировка
- Любые места, требующие выбора из списка опций

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value1', label: 'Label 1' }, { value: 'value2', label: 'Label 2' }]
\`\`\`
- \`value\` - значение опции (String или Number)
- \`label\` - отображаемый текст

### Иконки
- **prefixIcon**: Иконка слева от селекта (Heroicon компонент)
- **chevron**: Иконка справа (ChevronDownIcon, всегда отображается)
- Размер иконки автоматически адаптируется к размеру поля

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

### Placeholder
- Поддерживает \`placeholder\` prop для отображения подсказки
- Placeholder отображается как disabled опция в начале списка

### Состояния
- **disabled** - отключает поле (opacity-60, cursor-not-allowed, bg-slate-50)
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное (через DXFormLabel)

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)

### Нативный select
Компонент использует нативный HTML \`<select>\` элемент, что обеспечивает:
- Нативную доступность
- Работу с клавиатурой
- Поддержку мобильных устройств
        `}}}},d=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"}],o={render:()=>({components:{DXSelect:l},setup(){return{value:e(""),options:d}},template:'<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />'})},a={render:()=>({components:{DXSelect:l},setup(){return{value:e("banana"),options:d}},template:'<DXSelect v-model="value" :options="options" label="Fruit" />'})},c={render:()=>({components:{DXSelect:l},setup(){return{value:e("apple"),options:d}},template:'<DXSelect v-model="value" :options="options" label="Disabled" disabled />'})},t={render:()=>({components:{DXSelect:l},setup(){return{country:e(""),countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],GlobeAltIcon:_}},template:`
      <DXSelect
        v-model="country"
        label="Country"
        :options="countries"
        :prefix-icon="GlobeAltIcon"
        placeholder="Select country"
      />
    `})},s={render:()=>({components:{DXSelect:l},setup(){return{currency:e(""),currencies:[{value:"usd",label:"USD - US Dollar"},{value:"eur",label:"EUR - Euro"},{value:"gbp",label:"GBP - British Pound"},{value:"jpy",label:"JPY - Japanese Yen"}],CurrencyDollarIcon:W}},template:`
      <DXSelect
        v-model="currency"
        label="Currency"
        :options="currencies"
        :prefix-icon="CurrencyDollarIcon"
        placeholder="Select currency"
      />
    `})},i={render:()=>({components:{DXSelect:l},setup(){return{city:e(""),cities:[{value:"nyc",label:"New York"},{value:"lon",label:"London"},{value:"tok",label:"Tokyo"},{value:"par",label:"Paris"}],MapPinIcon:H}},template:`
      <DXSelect
        v-model="city"
        label="City"
        :options="cities"
        :prefix-icon="MapPinIcon"
        placeholder="Select city"
      />
    `})},u={render:()=>({components:{DXSelect:l},setup(){return{form:e({language:"",country:"",currency:"",role:""}),languages:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"}],countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"}],currencies:[{value:"usd",label:"USD"},{value:"eur",label:"EUR"},{value:"gbp",label:"GBP"}],roles:[{value:"dev",label:"Developer"},{value:"des",label:"Designer"},{value:"pm",label:"Product Manager"}],LanguageIcon:N,GlobeAltIcon:_,CurrencyDollarIcon:W,BriefcaseIcon:J}},template:`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="form.language"
          label="Language"
          :options="languages"
          :prefix-icon="LanguageIcon"
          placeholder="Select language"
        />
        
        <DXSelect
          v-model="form.country"
          label="Country"
          :options="countries"
          :prefix-icon="GlobeAltIcon"
          placeholder="Select country"
        />
        
        <DXSelect
          v-model="form.currency"
          label="Currency"
          :options="currencies"
          :prefix-icon="CurrencyDollarIcon"
          placeholder="Select currency"
        />
        
        <DXSelect
          v-model="form.role"
          label="Role"
          :options="roles"
          :prefix-icon="BriefcaseIcon"
          placeholder="Select role"
        />
      </div>
    `})},p={render:()=>({components:{DXSelect:l},setup(){const n=e(""),r=e(""),m=e("");return{small:n,medium:r,large:m,priorities:[{value:"low",label:"Low"},{value:"med",label:"Medium"},{value:"high",label:"High"}],FlagIcon:$}},template:`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="small"
          size="sm"
          label="Small"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="medium"
          size="md"
          label="Medium (default)"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="large"
          size="lg"
          label="Large"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
      </div>
    `})};var v,b,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />'
  })
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var g,D,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('banana');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Fruit" />'
  })
}`,...(y=(D=a.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var f,h,X;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('apple');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Disabled" disabled />'
  })
}`,...(X=(h=c.parameters)==null?void 0:h.docs)==null?void 0:X.source}}};var I,x,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
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
      }, {
        value: 'fr',
        label: 'France'
      }];
      return {
        country,
        countries,
        GlobeAltIcon
      };
    },
    template: \`
      <DXSelect
        v-model="country"
        label="Country"
        :options="countries"
        :prefix-icon="GlobeAltIcon"
        placeholder="Select country"
      />
    \`
  })
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var G,L,P;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const currency = ref('');
      const currencies = [{
        value: 'usd',
        label: 'USD - US Dollar'
      }, {
        value: 'eur',
        label: 'EUR - Euro'
      }, {
        value: 'gbp',
        label: 'GBP - British Pound'
      }, {
        value: 'jpy',
        label: 'JPY - Japanese Yen'
      }];
      return {
        currency,
        currencies,
        CurrencyDollarIcon
      };
    },
    template: \`
      <DXSelect
        v-model="currency"
        label="Currency"
        :options="currencies"
        :prefix-icon="CurrencyDollarIcon"
        placeholder="Select currency"
      />
    \`
  })
}`,...(P=(L=s.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var F,w,U;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const city = ref('');
      const cities = [{
        value: 'nyc',
        label: 'New York'
      }, {
        value: 'lon',
        label: 'London'
      }, {
        value: 'tok',
        label: 'Tokyo'
      }, {
        value: 'par',
        label: 'Paris'
      }];
      return {
        city,
        cities,
        MapPinIcon
      };
    },
    template: \`
      <DXSelect
        v-model="city"
        label="City"
        :options="cities"
        :prefix-icon="MapPinIcon"
        placeholder="Select city"
      />
    \`
  })
}`,...(U=(w=i.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var k,B,A;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const form = ref({
        language: '',
        country: '',
        currency: '',
        role: ''
      });
      const languages = [{
        value: 'en',
        label: 'English'
      }, {
        value: 'es',
        label: 'Spanish'
      }, {
        value: 'fr',
        label: 'French'
      }];
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
      const currencies = [{
        value: 'usd',
        label: 'USD'
      }, {
        value: 'eur',
        label: 'EUR'
      }, {
        value: 'gbp',
        label: 'GBP'
      }];
      const roles = [{
        value: 'dev',
        label: 'Developer'
      }, {
        value: 'des',
        label: 'Designer'
      }, {
        value: 'pm',
        label: 'Product Manager'
      }];
      return {
        form,
        languages,
        countries,
        currencies,
        roles,
        LanguageIcon,
        GlobeAltIcon,
        CurrencyDollarIcon,
        BriefcaseIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="form.language"
          label="Language"
          :options="languages"
          :prefix-icon="LanguageIcon"
          placeholder="Select language"
        />
        
        <DXSelect
          v-model="form.country"
          label="Country"
          :options="countries"
          :prefix-icon="GlobeAltIcon"
          placeholder="Select country"
        />
        
        <DXSelect
          v-model="form.currency"
          label="Currency"
          :options="currencies"
          :prefix-icon="CurrencyDollarIcon"
          placeholder="Select currency"
        />
        
        <DXSelect
          v-model="form.role"
          label="Role"
          :options="roles"
          :prefix-icon="BriefcaseIcon"
          placeholder="Select role"
        />
      </div>
    \`
  })
}`,...(A=(B=u.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var M,E,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      const priorities = [{
        value: 'low',
        label: 'Low'
      }, {
        value: 'med',
        label: 'Medium'
      }, {
        value: 'high',
        label: 'High'
      }];
      return {
        small,
        medium,
        large,
        priorities,
        FlagIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="small"
          size="sm"
          label="Small"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="medium"
          size="md"
          label="Medium (default)"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="large"
          size="lg"
          label="Large"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
      </div>
    \`
  })
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const pe=["Default","WithValue","Disabled","WithPrefixIcon","Currency","Location","FormWithIcons","AllSizes"];export{p as AllSizes,s as Currency,o as Default,c as Disabled,u as FormWithIcons,i as Location,t as WithPrefixIcon,a as WithValue,pe as __namedExportsOrder,ue as default};
