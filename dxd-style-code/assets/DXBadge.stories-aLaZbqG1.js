import{_ as n}from"./DXBadge-Cnl9-G8k.js";import{a as Q,r as U}from"./InformationCircleIcon-BdSdF6Ec.js";import{r as Y}from"./useVariant-2nzc00zP.js";import{r as m}from"./CheckCircleIcon-BfzIyqt6.js";import{r as ee}from"./StarIcon-BfBLtMMD.js";import{a as B,o as D,b as p}from"./vue.esm-bundler-C1fUoNF-.js";import{r as ne}from"./SparklesIcon-BvnHtV9x.js";import{r as se}from"./XMarkIcon-DuL0Z66U.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";function ae(e,X){return D(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[p("path",{"fill-rule":"evenodd",d:"M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z","clip-rule":"evenodd"})])}function re(e,X){return D(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[p("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z","clip-rule":"evenodd"})])}function te(e,X){return D(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[p("path",{"fill-rule":"evenodd",d:"M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z","clip-rule":"evenodd"})])}const ve={title:"Atoms/DXBadge",component:n,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXBadge

Компонент бейджа для отображения статусов, меток и индикаторов с поддержкой иконок.

## Назначение

DXBadge предоставляет компактный способ отображения статусов, меток, счетчиков и других индикаторов.
Компонент поддерживает различные цветовые варианты, размеры и возможность добавления иконок слева и справа.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок слева и справа
- \`useSize\` composable - для унификации размеров (sm, md)
- \`useVariantBadge\` composable - для вариантов оформления
- \`useClassComposition\` composable - для объединения CSS классов

### Используется в
- Статусы элементов (активен, неактивен, в ожидании)
- Счетчики уведомлений
- Метки категорий и тегов
- Индикаторы состояния
- Бейджи в таблицах и списках
- Элементы меню с счетчиками

## Внутренняя логика

### Варианты оформления
- **slate** (по умолчанию): Нейтральный серый цвет
- **success**: Зеленый цвет для успешных состояний
- **warning**: Желтый цвет для предупреждений
- **danger**: Красный цвет для ошибок и критических состояний
- **info**: Синий цвет для информационных меток

### Размеры
Поддерживает два размера:
- **sm** (по умолчанию) - маленький размер
- **md** - средний размер

### Иконки
- **iconLeft** - иконка слева от текста (Heroicon компонент)
- **iconRight** - иконка справа от текста (Heroicon компонент)
- Размер иконок автоматически адаптируется к размеру бейджа (xs)

## Особенности

### Форма
Все бейджи имеют форму \`rounded-full\` (полностью скругленные углы) для единообразного внешнего вида.

### Структура
Бейдж состоит из:
1. Иконка слева (опционально)
2. Текст (через default slot)
3. Иконка справа (опционально)

### Использование
Бейджи обычно используются для:
- Статусов: "Активен", "Неактивен", "В ожидании"
- Счетчиков: количество уведомлений, элементов
- Меток: категории, теги, типы
- Индикаторов: "Новое", "Горячее", "Популярное"

### Комбинации
Можно комбинировать:
- Только текст
- Текст + иконка слева
- Текст + иконка справа
- Текст + обе иконки
- Только иконки (без текста)

### Стилизация
- Все варианты имеют рамку (\`border\`)
- Фон и текст автоматически подбираются для каждого варианта
- Шрифт: \`font-semibold\` для лучшей читаемости
        `}}},argTypes:{variant:{control:"select",options:["slate","success","warning","danger","info"],description:"Вариант оформления"},size:{control:"select",options:["sm","md"],description:"Размер бейджа"}}},a={args:{variant:"slate"},render:e=>({components:{DXBadge:n},setup(){return{args:e}},template:'<DXBadge v-bind="args">Статус</DXBadge>'})},r={args:{variant:"success"},render:e=>({components:{DXBadge:n},setup(){return{args:e}},template:'<DXBadge v-bind="args">Активен</DXBadge>'})},t={args:{variant:"warning"},render:e=>({components:{DXBadge:n},setup(){return{args:e}},template:'<DXBadge v-bind="args">Ожидание</DXBadge>'})},s={args:{variant:"danger"},render:e=>({components:{DXBadge:n},setup(){return{args:e}},template:'<DXBadge v-bind="args">Ошибка</DXBadge>'})},i={args:{variant:"info"},render:e=>({components:{DXBadge:n},setup(){return{args:e}},template:'<DXBadge v-bind="args">Информация</DXBadge>'})},o={render:()=>({components:{DXBadge:n},template:`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate">Slate</DXBadge>
        <DXBadge variant="success">Success</DXBadge>
        <DXBadge variant="warning">Warning</DXBadge>
        <DXBadge variant="danger">Danger</DXBadge>
        <DXBadge variant="info">Info</DXBadge>
      </div>
    `})},c={render:()=>({components:{DXBadge:n},setup(){return{CheckCircleIcon:m,ExclamationTriangleIcon:U,XCircleIcon:Y,InformationCircleIcon:Q}},template:`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon">Активен</DXBadge>
        <DXBadge variant="warning" :icon-left="ExclamationTriangleIcon">Ожидание</DXBadge>
        <DXBadge variant="danger" :icon-left="XCircleIcon">Ошибка</DXBadge>
        <DXBadge variant="info" :icon-left="InformationCircleIcon">Новое</DXBadge>
      </div>
    `})},d={render:()=>({components:{DXBadge:n},setup(){return{ClockIcon:re,FireIcon:te,BoltIcon:ae,StarIcon:ee}},template:`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate" :icon-right="ClockIcon">Скоро</DXBadge>
        <DXBadge variant="danger" :icon-right="FireIcon">Горячее</DXBadge>
        <DXBadge variant="warning" :icon-right="BoltIcon">Быстро</DXBadge>
        <DXBadge variant="info" :icon-right="StarIcon">Новинка</DXBadge>
      </div>
    `})},g={render:()=>({components:{DXBadge:n},setup(){return{CheckCircleIcon:m,XMarkIcon:se,SparklesIcon:ne}},template:`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon" :icon-right="XMarkIcon">
          Закрываемый
        </DXBadge>
        <DXBadge variant="info" :icon-left="SparklesIcon" :icon-right="SparklesIcon">
          Премиум
        </DXBadge>
      </div>
    `})},u={render:()=>({components:{DXBadge:n},setup(){return{CheckCircleIcon:m}},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm, default)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="sm">Slate</DXBadge>
            <DXBadge variant="success" size="sm" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="sm">Warning</DXBadge>
            <DXBadge variant="danger" size="sm">Danger</DXBadge>
            <DXBadge variant="info" size="sm">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="md">Slate</DXBadge>
            <DXBadge variant="success" size="md" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="md">Warning</DXBadge>
            <DXBadge variant="danger" size="md">Danger</DXBadge>
            <DXBadge variant="info" size="md">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Size Comparison</p>
          <div class="flex flex-wrap gap-3 items-center">
            <DXBadge variant="info" size="sm">Small Badge</DXBadge>
            <DXBadge variant="info" size="md">Medium Badge</DXBadge>
          </div>
        </div>
      </div>
    `})},l={render:()=>({components:{DXBadge:n},setup(){return{CheckCircleIcon:m,XCircleIcon:Y,ExclamationTriangleIcon:U,InformationCircleIcon:Q,FireIcon:te,BoltIcon:ae,ClockIcon:re,StarIcon:ee,SparklesIcon:ne}},template:`
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Статусы</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="success" :icon-left="CheckCircleIcon">Завершено</DXBadge>
            <DXBadge variant="warning" :icon-left="ClockIcon">В процессе</DXBadge>
            <DXBadge variant="danger" :icon-left="XCircleIcon">Отклонено</DXBadge>
            <DXBadge variant="info" :icon-left="InformationCircleIcon">Новый</DXBadge>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Специальные</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="danger" :icon-left="FireIcon">Популярное</DXBadge>
            <DXBadge variant="warning" :icon-left="BoltIcon">Срочно</DXBadge>
            <DXBadge variant="info" :icon-left="StarIcon">Избранное</DXBadge>
            <DXBadge variant="success" :icon-left="SparklesIcon">Новинка</DXBadge>
          </div>
        </div>
      </div>
    `})};var v,f,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'slate'
  },
  render: args => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBadge v-bind="args">Статус</DXBadge>'
  })
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var x,C,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  render: args => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBadge v-bind="args">Активен</DXBadge>'
  })
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var S,w,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'warning'
  },
  render: args => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBadge v-bind="args">Ожидание</DXBadge>'
  })
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,b,z;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  },
  render: args => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBadge v-bind="args">Ошибка</DXBadge>'
  })
}`,...(z=(b=s.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var F,W,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  },
  render: args => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBadge v-bind="args">Информация</DXBadge>'
  })
}`,...(A=(W=i.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var M,_,$;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate">Slate</DXBadge>
        <DXBadge variant="success">Success</DXBadge>
        <DXBadge variant="warning">Warning</DXBadge>
        <DXBadge variant="danger">Danger</DXBadge>
        <DXBadge variant="info">Info</DXBadge>
      </div>
    \`
  })
}`,...($=(_=o.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var y,T,V;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        CheckCircleIcon,
        ExclamationTriangleIcon,
        XCircleIcon,
        InformationCircleIcon
      };
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon">Активен</DXBadge>
        <DXBadge variant="warning" :icon-left="ExclamationTriangleIcon">Ожидание</DXBadge>
        <DXBadge variant="danger" :icon-left="XCircleIcon">Ошибка</DXBadge>
        <DXBadge variant="info" :icon-left="InformationCircleIcon">Новое</DXBadge>
      </div>
    \`
  })
}`,...(V=(T=c.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var Z,L,H;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        ClockIcon,
        FireIcon,
        BoltIcon,
        StarIcon
      };
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="slate" :icon-right="ClockIcon">Скоро</DXBadge>
        <DXBadge variant="danger" :icon-right="FireIcon">Горячее</DXBadge>
        <DXBadge variant="warning" :icon-right="BoltIcon">Быстро</DXBadge>
        <DXBadge variant="info" :icon-right="StarIcon">Новинка</DXBadge>
      </div>
    \`
  })
}`,...(H=(L=d.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var R,N,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        CheckCircleIcon,
        XMarkIcon,
        SparklesIcon
      };
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <DXBadge variant="success" :icon-left="CheckCircleIcon" :icon-right="XMarkIcon">
          Закрываемый
        </DXBadge>
        <DXBadge variant="info" :icon-left="SparklesIcon" :icon-right="SparklesIcon">
          Премиум
        </DXBadge>
      </div>
    \`
  })
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,q,G;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        CheckCircleIcon
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small (sm, default)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="sm">Slate</DXBadge>
            <DXBadge variant="success" size="sm" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="sm">Warning</DXBadge>
            <DXBadge variant="danger" size="sm">Danger</DXBadge>
            <DXBadge variant="info" size="sm">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium (md)</p>
          <div class="flex flex-wrap gap-2 items-center">
            <DXBadge variant="slate" size="md">Slate</DXBadge>
            <DXBadge variant="success" size="md" :icon-left="CheckCircleIcon">Success</DXBadge>
            <DXBadge variant="warning" size="md">Warning</DXBadge>
            <DXBadge variant="danger" size="md">Danger</DXBadge>
            <DXBadge variant="info" size="md">Info</DXBadge>
          </div>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Size Comparison</p>
          <div class="flex flex-wrap gap-3 items-center">
            <DXBadge variant="info" size="sm">Small Badge</DXBadge>
            <DXBadge variant="info" size="md">Medium Badge</DXBadge>
          </div>
        </div>
      </div>
    \`
  })
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,P;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBadge
    },
    setup() {
      return {
        CheckCircleIcon,
        XCircleIcon,
        ExclamationTriangleIcon,
        InformationCircleIcon,
        FireIcon,
        BoltIcon,
        ClockIcon,
        StarIcon,
        SparklesIcon
      };
    },
    template: \`
      <div class="space-y-4">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Статусы</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="success" :icon-left="CheckCircleIcon">Завершено</DXBadge>
            <DXBadge variant="warning" :icon-left="ClockIcon">В процессе</DXBadge>
            <DXBadge variant="danger" :icon-left="XCircleIcon">Отклонено</DXBadge>
            <DXBadge variant="info" :icon-left="InformationCircleIcon">Новый</DXBadge>
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Специальные</h3>
          <div class="flex flex-wrap gap-2">
            <DXBadge variant="danger" :icon-left="FireIcon">Популярное</DXBadge>
            <DXBadge variant="warning" :icon-left="BoltIcon">Срочно</DXBadge>
            <DXBadge variant="info" :icon-left="StarIcon">Избранное</DXBadge>
            <DXBadge variant="success" :icon-left="SparklesIcon">Новинка</DXBadge>
          </div>
        </div>
      </div>
    \`
  })
}`,...(P=(K=l.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const fe=["Default","Success","Warning","Danger","Info","AllVariants","WithIconLeft","WithIconRight","WithBothIcons","Sizes","IconsShowcase"];export{o as AllVariants,s as Danger,a as Default,l as IconsShowcase,i as Info,u as Sizes,r as Success,t as Warning,g as WithBothIcons,c as WithIconLeft,d as WithIconRight,fe as __namedExportsOrder,ve as default};
