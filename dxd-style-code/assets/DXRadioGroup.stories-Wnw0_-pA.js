import{_ as n}from"./DXRadioGroup-CSQTQ2ly.js";import{r as e}from"./vue.esm-bundler-C1fUoNF-.js";import"./DXRadio-CRh-GVY2.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const Re={title:"Molecules/DXRadioGroup",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXRadioGroup

Компонент группы радиокнопок для выбора одного значения из списка опций.

## Назначение

DXRadioGroup предоставляет способ группировки радиокнопок для выбора одного значения.
Компонент автоматически управляет состоянием выбора, синхронизирует стили и поддерживает
вертикальное и горизонтальное расположение.

## Архитектура

### Использует
- \`DXRadio\` - отдельные радиокнопки в группе

### Используется в
- Формы с выбором одного варианта
- Настройки и конфигурация
- Фильтры с одним выбором
- Любые места, требующие выбор одного значения из группы

## Внутренняя логика

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value1', label: 'Label 1' }, { value: 'value2', label: 'Label 2' }]
\`\`\`

Каждая опция может содержать:
- \`value\` - значение опции (обязательно)
- \`label\` - текст опции (обязательно)
- \`disabled\` - отключить конкретную опцию
- \`color\` - цвет для custom variant (переопределяет глобальный цвет)

### Расположение
- **vertical** (по умолчанию): Вертикальное расположение (\`flex-col\`)
- **horizontal**: Горизонтальное расположение (\`flex flex-wrap\`)

### Варианты
- **default**: Нативные радиокнопки с кастомной стилизацией
- **custom**: Кастомные радиокнопки с точкой и настраиваемыми цветами

### Размеры
Поддерживает 3 размера:
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой

### Цвета (для custom variant)
Поддерживает 6 цветовых вариантов:
- **slate** - нейтральный серый
- **primary** - основной цвет (по умолчанию)
- **success** - зеленый цвет
- **danger** - красный цвет
- **warning** - желтый цвет
- **info** - синий цвет

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String, Number или Boolean значений.

### Лейбл и вспомогательный текст
- \`label\` - отображается над группой
- \`helper\` - вспомогательный текст под группой

### Состояния
- **disabled** - отключает всю группу
- Можно отключить отдельные опции через \`disabled\` в объекте опции

### Синхронизация
Все радиокнопки в группе автоматически синхронизируются:
- Размер применяется ко всем кнопкам
- Вариант применяется ко всем кнопкам
- Цвет применяется ко всем кнопкам (если не переопределен в опции)
        `}}},argTypes:{variant:{control:"select",options:["default","custom"],description:"Radio variant"},color:{control:"select",options:["slate","primary","success","danger","warning","info"],description:"Color for custom variant"},size:{control:"select",options:["sm","md","lg"],description:"Radio size"},layout:{control:"select",options:["vertical","horizontal"],description:"Layout direction"}}},t=[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],X=[{value:"free",label:"Free Plan"},{value:"basic",label:"Basic Plan"},{value:"pro",label:"Pro Plan"},{value:"enterprise",label:"Enterprise Plan"}],r={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("medium"),sizeOptions:t}},template:'<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" />'})},a={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("medium"),sizeOptions:t}},template:'<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" layout="horizontal" />'})},l={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("medium"),sizeOptions:t}},template:'<DXRadioGroup v-model="selected" :options="sizeOptions" label="T-shirt size" helper="Select your preferred size" />'})},i={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("pro"),planOptions:X}},template:'<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" />'})},d={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("pro"),planOptions:X}},template:'<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" color="success" />'})},c={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("basic"),planOptions:X}},template:'<DXRadioGroup v-model="selected" :options="planOptions" label="Choose your plan" variant="custom" color="info" layout="horizontal" />'})},p={render:()=>({components:{DXRadioGroup:n},setup(){const o=e("medium"),s=e("medium"),R=e("medium"),de=e("medium"),ce=e("medium"),pe=e("medium");return{slate:o,primary:s,success:R,danger:de,warning:ce,info:pe,sizeOptions:t}},template:`
      <div class="space-y-6">
        <DXRadioGroup v-model="slate" :options="sizeOptions" label="Slate" variant="custom" color="slate" />
        <DXRadioGroup v-model="primary" :options="sizeOptions" label="Primary (default)" variant="custom" color="primary" />
        <DXRadioGroup v-model="success" :options="sizeOptions" label="Success" variant="custom" color="success" />
        <DXRadioGroup v-model="danger" :options="sizeOptions" label="Danger" variant="custom" color="danger" />
        <DXRadioGroup v-model="warning" :options="sizeOptions" label="Warning" variant="custom" color="warning" />
        <DXRadioGroup v-model="info" :options="sizeOptions" label="Info" variant="custom" color="info" />
      </div>
    `})},u={render:()=>({components:{DXRadioGroup:n},setup(){const o=e("medium"),s=e("medium"),R=e("medium");return{sm:o,md:s,lg:R,sizeOptions:t}},template:`
      <div class="space-y-6">
        <DXRadioGroup v-model="sm" :options="sizeOptions" label="Small" size="sm" variant="custom" />
        <DXRadioGroup v-model="md" :options="sizeOptions" label="Medium (default)" size="md" variant="custom" />
        <DXRadioGroup v-model="lg" :options="sizeOptions" label="Large" size="lg" variant="custom" />
      </div>
    `})},m={render:()=>({components:{DXRadioGroup:n},setup(){const o=[{value:"free",label:"Free Plan",color:"slate"},{value:"basic",label:"Basic Plan",color:"info"},{value:"pro",label:"Pro Plan",color:"success"},{value:"enterprise",label:"Enterprise Plan",color:"danger"}];return{selected:e("pro"),options:o}},template:'<DXRadioGroup v-model="selected" :options="options" label="Select plan (each with own color)" variant="custom" />'})},v={render:()=>({components:{DXRadioGroup:n},setup(){return{selected:e("medium"),sizeOptions:t}},template:'<DXRadioGroup v-model="selected" :options="sizeOptions" label="Disabled group" disabled />'})},b={render:()=>({components:{DXRadioGroup:n},setup(){const o=[{value:"small",label:"Small"},{value:"medium",label:"Medium (disabled)",disabled:!0},{value:"large",label:"Large"}];return{selected:e("small"),options:o}},template:'<DXRadioGroup v-model="selected" :options="options" label="With disabled option" variant="custom" />'})},f={render:()=>({components:{DXRadioGroup:n},setup(){const o=[{value:"card",label:"Credit Card",color:"primary"},{value:"paypal",label:"PayPal",color:"info"},{value:"bank",label:"Bank Transfer",color:"success"},{value:"crypto",label:"Cryptocurrency",color:"warning"}];return{method:e("card"),options:o}},template:`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="method" 
          :options="options" 
          label="Payment Method"
          helper="Choose your preferred payment method"
          variant="custom"
        />
      </div>
    `})},D={render:()=>({components:{DXRadioGroup:n},setup(){const o=[{value:"easy",label:"Easy - Perfect for beginners",color:"success"},{value:"medium",label:"Medium - Some experience needed",color:"warning"},{value:"hard",label:"Hard - For experts only",color:"danger"}];return{difficulty:e("medium"),options:o}},template:`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="difficulty" 
          :options="options" 
          label="Select Difficulty"
          variant="custom"
        />
      </div>
    `})},g={render:()=>({components:{DXRadioGroup:n},setup(){const o=e("medium"),s=e("medium");return{defaultSelected:o,customSelected:s,sizeOptions:t}},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Default Variant</h3>
          <DXRadioGroup 
            v-model="defaultSelected" 
            :options="sizeOptions" 
            label="Native radio buttons"
          />
        </div>
        
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Custom Variant</h3>
          <DXRadioGroup 
            v-model="customSelected" 
            :options="sizeOptions" 
            label="Custom styled radio"
            variant="custom"
            color="success"
          />
        </div>
      </div>
    `})};var G,z,y;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('medium');
      return {
        selected,
        sizeOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" />'
  })
}`,...(y=(z=r.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var h,O,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('medium');
      return {
        selected,
        sizeOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Choose size" layout="horizontal" />'
  })
}`,...(S=(O=a.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var C,x,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('medium');
      return {
        selected,
        sizeOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="T-shirt size" helper="Select your preferred size" />'
  })
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var w,M,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('pro');
      return {
        selected,
        planOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" />'
  })
}`,...(L=(M=i.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var H,V,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('pro');
      return {
        selected,
        planOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Select plan" variant="custom" color="success" />'
  })
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,E,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('basic');
      return {
        selected,
        planOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="planOptions" label="Choose your plan" variant="custom" color="info" layout="horizontal" />'
  })
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,T,k;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const slate = ref('medium');
      const primary = ref('medium');
      const success = ref('medium');
      const danger = ref('medium');
      const warning = ref('medium');
      const info = ref('medium');
      return {
        slate,
        primary,
        success,
        danger,
        warning,
        info,
        sizeOptions
      };
    },
    template: \`
      <div class="space-y-6">
        <DXRadioGroup v-model="slate" :options="sizeOptions" label="Slate" variant="custom" color="slate" />
        <DXRadioGroup v-model="primary" :options="sizeOptions" label="Primary (default)" variant="custom" color="primary" />
        <DXRadioGroup v-model="success" :options="sizeOptions" label="Success" variant="custom" color="success" />
        <DXRadioGroup v-model="danger" :options="sizeOptions" label="Danger" variant="custom" color="danger" />
        <DXRadioGroup v-model="warning" :options="sizeOptions" label="Warning" variant="custom" color="warning" />
        <DXRadioGroup v-model="info" :options="sizeOptions" label="Info" variant="custom" color="info" />
      </div>
    \`
  })
}`,...(k=(T=p.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,N,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const sm = ref('medium');
      const md = ref('medium');
      const lg = ref('medium');
      return {
        sm,
        md,
        lg,
        sizeOptions
      };
    },
    template: \`
      <div class="space-y-6">
        <DXRadioGroup v-model="sm" :options="sizeOptions" label="Small" size="sm" variant="custom" />
        <DXRadioGroup v-model="md" :options="sizeOptions" label="Medium (default)" size="md" variant="custom" />
        <DXRadioGroup v-model="lg" :options="sizeOptions" label="Large" size="lg" variant="custom" />
      </div>
    \`
  })
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var q,A,J;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const options = [{
        value: 'free',
        label: 'Free Plan',
        color: 'slate'
      }, {
        value: 'basic',
        label: 'Basic Plan',
        color: 'info'
      }, {
        value: 'pro',
        label: 'Pro Plan',
        color: 'success'
      }, {
        value: 'enterprise',
        label: 'Enterprise Plan',
        color: 'danger'
      }];
      const selected = ref('pro');
      return {
        selected,
        options
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="options" label="Select plan (each with own color)" variant="custom" />'
  })
}`,...(J=(A=m.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const selected = ref('medium');
      return {
        selected,
        sizeOptions
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="sizeOptions" label="Disabled group" disabled />'
  })
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const options = [{
        value: 'small',
        label: 'Small'
      }, {
        value: 'medium',
        label: 'Medium (disabled)',
        disabled: true
      }, {
        value: 'large',
        label: 'Large'
      }];
      const selected = ref('small');
      return {
        selected,
        options
      };
    },
    template: '<DXRadioGroup v-model="selected" :options="options" label="With disabled option" variant="custom" />'
  })
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const options = [{
        value: 'card',
        label: 'Credit Card',
        color: 'primary'
      }, {
        value: 'paypal',
        label: 'PayPal',
        color: 'info'
      }, {
        value: 'bank',
        label: 'Bank Transfer',
        color: 'success'
      }, {
        value: 'crypto',
        label: 'Cryptocurrency',
        color: 'warning'
      }];
      const method = ref('card');
      return {
        method,
        options
      };
    },
    template: \`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="method" 
          :options="options" 
          label="Payment Method"
          helper="Choose your preferred payment method"
          variant="custom"
        />
      </div>
    \`
  })
}`,...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var se,te,re;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const options = [{
        value: 'easy',
        label: 'Easy - Perfect for beginners',
        color: 'success'
      }, {
        value: 'medium',
        label: 'Medium - Some experience needed',
        color: 'warning'
      }, {
        value: 'hard',
        label: 'Hard - For experts only',
        color: 'danger'
      }];
      const difficulty = ref('medium');
      return {
        difficulty,
        options
      };
    },
    template: \`
      <div class="bg-white p-6 rounded-xl border border-slate-200 max-w-md">
        <DXRadioGroup 
          v-model="difficulty" 
          :options="options" 
          label="Select Difficulty"
          variant="custom"
        />
      </div>
    \`
  })
}`,...(re=(te=D.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,le,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXRadioGroup
    },
    setup() {
      const defaultSelected = ref('medium');
      const customSelected = ref('medium');
      return {
        defaultSelected,
        customSelected,
        sizeOptions
      };
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Default Variant</h3>
          <DXRadioGroup 
            v-model="defaultSelected" 
            :options="sizeOptions" 
            label="Native radio buttons"
          />
        </div>
        
        <div class="p-6 bg-slate-50 rounded-xl">
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Custom Variant</h3>
          <DXRadioGroup 
            v-model="customSelected" 
            :options="sizeOptions" 
            label="Custom styled radio"
            variant="custom"
            color="success"
          />
        </div>
      </div>
    \`
  })
}`,...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Xe=["Default","Horizontal","WithHelper","CustomVariant","CustomWithColor","CustomHorizontal","DifferentColors","Sizes","IndividualColors","Disabled","DisabledOption","PaymentMethod","DifficultyLevel","DefaultVsCustom"];export{c as CustomHorizontal,i as CustomVariant,d as CustomWithColor,r as Default,g as DefaultVsCustom,p as DifferentColors,D as DifficultyLevel,v as Disabled,b as DisabledOption,a as Horizontal,m as IndividualColors,f as PaymentMethod,u as Sizes,l as WithHelper,Xe as __namedExportsOrder,Re as default};
