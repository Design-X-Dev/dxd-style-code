import{_ as e}from"./DXProgress-kFfDE3m6.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const T={title:"Atoms/DXProgress",component:e,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXProgress

Компонент прогресс-бара для отображения прогресса выполнения задачи с поддержкой различных размеров, цветов и режимов отображения.

## Назначение

DXProgress предоставляет стандартизированный способ отображения прогресса выполнения задачи.
Компонент поддерживает различные размеры, цвета, анимации, полосатый фон и различные варианты
отображения значения.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg)
- \`useVariantProgress\` composable - для цветовых вариантов
- \`useAnimation\` composable - для анимаций

### Используется в
- Загрузка файлов
- Процесс выполнения задач
- Индикаторы прогресса
- Любые места, требующие отображения прогресса

## Внутренняя логика

### Расчет прогресса
Прогресс рассчитывается как процент от диапазона:
\`\`\`
percentage = ((value - min) / (max - min)) * 100
\`\`\`

### Размеры
Поддерживает 4 размера:
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой

### Цвета
Поддерживает 5 цветовых вариантов:
- **default** - стандартный цвет (по умолчанию)
- **success** - зеленый цвет
- **warning** - желтый цвет
- **danger** - красный цвет
- **info** - синий цвет

### Режимы отображения значения
- **showLabel** - показывать лейбл слева (через slot или prop)
- **showValue** - показывать значение справа (в процентах)
- **showInnerValue** - показывать значение внутри бара (только если процент > 10)

### Анимации
- **animated** - анимация заполнения бара
- **striped** - полосатый фон для визуального эффекта

## Особенности

### Минимальные и максимальные значения
Поддерживает настраиваемые \`min\` и \`max\` значения (по умолчанию 0 и 100).

### Доступность
- Использует \`role="progressbar"\`
- Правильные ARIA атрибуты (\`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`)

### Слоты
- **label** - кастомный лейбл (если нужно)
- **default** - основной контент (если нужно)
        `}}},argTypes:{value:{control:{type:"range",min:0,max:100},description:"Текущее значение прогресса"},min:{control:{type:"number"},description:"Минимальное значение"},max:{control:{type:"number"},description:"Максимальное значение"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Размер прогресс-бара"},color:{control:{type:"select"},options:["default","success","warning","danger","info"],description:"Цвет прогресс-бара"},label:{control:{type:"text"},description:"Текст лейбла"},showLabel:{control:{type:"boolean"},description:"Показывать лейбл"},showValue:{control:{type:"boolean"},description:"Показывать значение справа"},showInnerValue:{control:{type:"boolean"},description:"Показывать значение внутри бара"},striped:{control:{type:"boolean"},description:"Полосатый фон"},animated:{control:{type:"boolean"},description:"Анимированные полосы"}}},s={args:{value:60,size:"md",color:"default"},render:F=>({components:{DXProgress:e},setup(){return{args:F}},template:'<DXProgress v-bind="args" />'})},l={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">xs (h-1)</span>
          <DXProgress :value="60" size="xs" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">sm (h-2)</span>
          <DXProgress :value="60" size="sm" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">md (h-3)</span>
          <DXProgress :value="60" size="md" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">lg (h-4)</span>
          <DXProgress :value="60" size="lg" />
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg
        </div>
      </div>
    `})},u={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4 w-full">
          <h3 class="text-sm font-semibold text-slate-700">Цветовые варианты</h3>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Default</span>
              <DXProgress :value="75" color="default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Success</span>
              <DXProgress :value="75" color="success" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Warning</span>
              <DXProgress :value="75" color="warning" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Danger</span>
              <DXProgress :value="75" color="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Info</span>
              <DXProgress :value="75" color="info" />
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | success | warning | danger | info
        </div>
      </div>
    `})},a={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и значением</h3>
          <DXProgress 
            :value="75" 
            label="Загрузка файлов" 
            :show-label="true" 
            :show-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только лейбл</h3>
          <DXProgress 
            :value="50" 
            label="Обработка данных" 
            :show-label="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только значение</h3>
          <DXProgress 
            :value="90" 
            :show-value="true" 
          />
        </div>
      </div>
    `})},t={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Значение внутри бара</h3>
          <DXProgress 
            :value="65" 
            color="success"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и внутренним значением</h3>
          <DXProgress 
            :value="80" 
            label="Синхронизация"
            color="info"
            :show-label="true"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные значения</h3>
          <DXProgress :value="25" color="danger" :show-inner-value="true" />
          <DXProgress :value="50" color="warning" :show-inner-value="true" />
          <DXProgress :value="75" color="success" :show-inner-value="true" />
        </div>
      </div>
    `})},r={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Полосатый (без анимации)</h3>
          <DXProgress :value="70" color="default" :striped="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Анимированные полосы</h3>
          <DXProgress :value="70" color="success" :striped="true" :animated="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные цвета с анимацией</h3>
          <DXProgress :value="60" color="default" :striped="true" :animated="true" />
          <DXProgress :value="60" color="success" :striped="true" :animated="true" />
          <DXProgress :value="60" color="warning" :striped="true" :animated="true" />
          <DXProgress :value="60" color="danger" :striped="true" :animated="true" />
          <DXProgress :value="60" color="info" :striped="true" :animated="true" />
        </div>
      </div>
    `})},n={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="space-y-4">
            <DXProgress :value="70" size="xs" color="success" />
            <DXProgress :value="70" size="sm" color="success" />
            <DXProgress :value="70" size="md" color="success" />
            <DXProgress :value="70" size="lg" color="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="space-y-4">
            <DXProgress :value="40" size="xs" color="danger" />
            <DXProgress :value="40" size="sm" color="danger" />
            <DXProgress :value="40" size="md" color="danger" />
            <DXProgress :value="40" size="lg" color="danger" />
          </div>
        </div>
      </div>
    `})},o={render:()=>({components:{DXProgress:e},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Загрузка файла</h3>
          <DXProgress 
            :value="45" 
            label="Загрузка файла.pdf" 
            :show-label="true" 
            :show-value="true"
            color="info"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Обработка данных</h3>
          <DXProgress 
            :value="80" 
            label="Обработка данных" 
            :show-label="true" 
            :show-inner-value="true"
            color="success"
            :striped="true"
            :animated="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Ошибка загрузки</h3>
          <DXProgress 
            :value="30" 
            label="Ошибка загрузки" 
            :show-label="true" 
            :show-value="true"
            color="danger"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Кастомный диапазон</h3>
          <DXProgress 
            :value="150" 
            :min="0" 
            :max="200"
            label="Прогресс: 150/200" 
            :show-label="true" 
            :show-value="true"
            color="warning"
          />
        </div>
      </div>
    `})};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'md',
    color: 'default'
  },
  render: args => ({
    components: {
      DXProgress
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXProgress v-bind="args" />'
  })
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var v,x,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">xs (h-1)</span>
          <DXProgress :value="60" size="xs" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">sm (h-2)</span>
          <DXProgress :value="60" size="sm" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">md (h-3)</span>
          <DXProgress :value="60" size="md" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">lg (h-4)</span>
          <DXProgress :value="60" size="lg" />
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg
        </div>
      </div>
    \`
  })
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var p,g,f;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4 w-full">
          <h3 class="text-sm font-semibold text-slate-700">Цветовые варианты</h3>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Default</span>
              <DXProgress :value="75" color="default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Success</span>
              <DXProgress :value="75" color="success" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Warning</span>
              <DXProgress :value="75" color="warning" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Danger</span>
              <DXProgress :value="75" color="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Info</span>
              <DXProgress :value="75" color="info" />
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | success | warning | danger | info
        </div>
      </div>
    \`
  })
}`,...(f=(g=u.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,h,P;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и значением</h3>
          <DXProgress 
            :value="75" 
            label="Загрузка файлов" 
            :show-label="true" 
            :show-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только лейбл</h3>
          <DXProgress 
            :value="50" 
            label="Обработка данных" 
            :show-label="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только значение</h3>
          <DXProgress 
            :value="90" 
            :show-value="true" 
          />
        </div>
      </div>
    \`
  })
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var X,b,w;t.parameters={...t.parameters,docs:{...(X=t.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Значение внутри бара</h3>
          <DXProgress 
            :value="65" 
            color="success"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и внутренним значением</h3>
          <DXProgress 
            :value="80" 
            label="Синхронизация"
            color="info"
            :show-label="true"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные значения</h3>
          <DXProgress :value="25" color="danger" :show-inner-value="true" />
          <DXProgress :value="50" color="warning" :show-inner-value="true" />
          <DXProgress :value="75" color="success" :show-inner-value="true" />
        </div>
      </div>
    \`
  })
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var z,B,E;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Полосатый (без анимации)</h3>
          <DXProgress :value="70" color="default" :striped="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Анимированные полосы</h3>
          <DXProgress :value="70" color="success" :striped="true" :animated="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные цвета с анимацией</h3>
          <DXProgress :value="60" color="default" :striped="true" :animated="true" />
          <DXProgress :value="60" color="success" :striped="true" :animated="true" />
          <DXProgress :value="60" color="warning" :striped="true" :animated="true" />
          <DXProgress :value="60" color="danger" :striped="true" :animated="true" />
          <DXProgress :value="60" color="info" :striped="true" :animated="true" />
        </div>
      </div>
    \`
  })
}`,...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var y,A,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="space-y-4">
            <DXProgress :value="70" size="xs" color="success" />
            <DXProgress :value="70" size="sm" color="success" />
            <DXProgress :value="70" size="md" color="success" />
            <DXProgress :value="70" size="lg" color="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="space-y-4">
            <DXProgress :value="40" size="xs" color="danger" />
            <DXProgress :value="40" size="sm" color="danger" />
            <DXProgress :value="40" size="md" color="danger" />
            <DXProgress :value="40" size="lg" color="danger" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var S,V,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Загрузка файла</h3>
          <DXProgress 
            :value="45" 
            label="Загрузка файла.pdf" 
            :show-label="true" 
            :show-value="true"
            color="info"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Обработка данных</h3>
          <DXProgress 
            :value="80" 
            label="Обработка данных" 
            :show-label="true" 
            :show-inner-value="true"
            color="success"
            :striped="true"
            :animated="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Ошибка загрузки</h3>
          <DXProgress 
            :value="30" 
            label="Ошибка загрузки" 
            :show-label="true" 
            :show-value="true"
            color="danger"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Кастомный диапазон</h3>
          <DXProgress 
            :value="150" 
            :min="0" 
            :max="200"
            label="Прогресс: 150/200" 
            :show-label="true" 
            :show-value="true"
            color="warning"
          />
        </div>
      </div>
    \`
  })
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const j=["Default","Sizes","Variants","WithLabel","WithInnerValue","Striped","SizesAndVariants","UseCases"];export{s as Default,l as Sizes,n as SizesAndVariants,r as Striped,o as UseCases,u as Variants,t as WithInnerValue,a as WithLabel,j as __namedExportsOrder,T as default};
