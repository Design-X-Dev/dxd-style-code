import{_ as n}from"./DXButton-DzgLKRkE.js";import{_ as w}from"./DXIcon-Bc0cQL8C.js";import{r as C}from"./PencilIcon-BVI5idyX.js";import{r as E}from"./TrashIcon-DHw2oPM1.js";import{r as A}from"./PlusIcon-Dnen0WQA.js";import{r as _}from"./HeartIcon-DNFEd_wb.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./useAnimation-ByVAdqmf.js";const K={title:"Atoms/DXButton",component:n,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXButton

Универсальный компонент кнопки с поддержкой различных вариантов оформления, размеров и режимов использования.

## Назначение

DXButton предоставляет стандартизированный способ создания кнопок в приложении. Компонент поддерживает
множество вариантов оформления, размеров, может работать как обычная кнопка, ссылка или router-link,
а также автоматически адаптируется при использовании внутри DXButtonGroup.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useVariantButton\` composable - для вариантов оформления
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXButtonGroup

### Используется в
- \`DXButtonGroup\` - группы кнопок для выбора значений
- \`DXPagination\` - кнопки навигации по страницам
- \`DXModal\` - кнопки действий в модальных окнах
- \`DXAlert\` - кнопки действий в уведомлениях
- \`DXFormControl\` - кнопки в формах
- Любые места, где требуется интерактивная кнопка

## Внутренняя логика

### Динамический рендеринг
Компонент использует \`<component :is="componentTag">\` для выбора HTML тега:
- Если указан \`to\` prop → рендерится как \`router-link\` (Vue Router)
- Если указан \`href\` prop → рендерится как \`<a>\` (обычная ссылка)
- По умолчанию → рендерится как \`<button>\`

### Интеграция с DXButtonGroup
При использовании внутри \`DXButtonGroup\`:
- Кнопка автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы (sm → sm, md → md, lg → lg)
- Состояние \`disabled\` наследуется от группы
- Border-radius адаптируется в зависимости от позиции (первая/последняя/средняя)
- Визуальное состояние (selected/not selected) управляется группой
- При клике с \`value\` prop, выбор обрабатывается через группу

### Варианты оформления
- **primary** - основная кнопка (темный фон)
- **secondary** - вторичная кнопка (светлый фон)
- **ghost** - прозрачная кнопка (без фона)
- **outline** - кнопка с рамкой
- **soft** - мягкая кнопка (светлый фон)
- **link** - стиль ссылки
- **success**, **warning**, **danger**, **info** - семантические варианты

### Размеры
Поддерживает 5 размеров:
- **xs** - 28px высота
- **sm** - 32px высота
- **md** - 40px высота (по умолчанию)
- **lg** - 48px высота
- **xl** - 56px высота

## Особенности

### Режим iconOnly
При \`iconOnly={true}\` кнопка становится квадратной (одинаковая ширина и высота),
padding убирается, используется только размер иконки.

### Режим block
При \`block={true}\` кнопка растягивается на всю ширину контейнера (\`w-full\`).

### Поддержка Vue Router
При указании \`to\` prop, кнопка автоматически становится \`router-link\` и поддерживает
все возможности Vue Router (навигация, активные состояния и т.д.).

### Обычные ссылки
При указании \`href\` prop, кнопка становится обычной ссылкой с поддержкой
\`target\` и \`rel\` атрибутов для внешних ссылок.

### Состояния
- **disabled** - отключает кнопку (opacity-60, cursor-not-allowed)
- **selected** (в группе) - визуально выделяет выбранную кнопку темным фоном

### Обработка кликов
- В группе с \`value\`: клик обрабатывается через группу, стандартное поведение предотвращается
- Router-link/ссылка: стандартное поведение навигации
- Обычная кнопка: стандартное поведение кнопки
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","outline","success","warning","danger","info","link","soft"],description:"Вариант оформления кнопки"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер кнопки"},disabled:{control:"boolean",description:"Отключенное состояние"},block:{control:"boolean",description:"Растянуть на всю ширину"},iconOnly:{control:"boolean",description:"Только иконка (квадратная кнопка)"}}},o={args:{variant:"primary"},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Кнопка</DXButton>'})},e={render:()=>({components:{DXButton:n},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="primary">Primary</DXButton>
            <DXButton variant="secondary">Secondary</DXButton>
            <DXButton variant="ghost">Ghost</DXButton>
            <DXButton variant="outline">Outline</DXButton>
            <DXButton variant="soft">Soft</DXButton>
            <DXButton variant="link">Link</DXButton>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="success">Success</DXButton>
            <DXButton variant="warning">Warning</DXButton>
            <DXButton variant="danger">Danger</DXButton>
            <DXButton variant="info">Info</DXButton>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: primary | secondary | ghost | outline | soft | link | success | warning | danger | info
        </div>
      </div>
    `})},s={render:()=>({components:{DXButton:n},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton size="xs">Extra Small</DXButton>
          <DXButton size="sm">Small</DXButton>
          <DXButton size="md">Medium</DXButton>
          <DXButton size="lg">Large</DXButton>
          <DXButton size="xl">Extra Large</DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs (28px) | sm (32px) | md (40px) | lg (48px) | xl (56px)
        </div>
      </div>
    `})},r={args:{disabled:!0},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Disabled</DXButton>'})},u={args:{block:!0},render:t=>({components:{DXButton:n},setup(){return{args:t}},template:'<DXButton v-bind="args">Full Width</DXButton>'})},a={render:()=>({components:{DXButton:n,DXIcon:w},setup(){return{PlusIcon:A,TrashIcon:E,PencilIcon:C}},template:`
      <div class="flex items-center gap-4">
        <DXButton>
          <DXIcon :icon="PlusIcon" size="sm" />
          Добавить
        </DXButton>
        <DXButton variant="danger">
          <DXIcon :icon="TrashIcon" size="sm" />
          Удалить
        </DXButton>
        <DXButton variant="ghost">
          <DXIcon :icon="PencilIcon" size="sm" />
          Редактировать
        </DXButton>
      </div>
    `})},i={render:()=>({components:{DXButton:n,DXIcon:w},setup(){return{PlusIcon:A,TrashIcon:E,HeartIcon:_}},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton icon-only size="xs">
            <DXIcon :icon="PlusIcon" size="xs" />
          </DXButton>
          <DXButton icon-only size="sm">
            <DXIcon :icon="PlusIcon" size="sm" />
          </DXButton>
          <DXButton icon-only>
            <DXIcon :icon="HeartIcon" size="sm" />
          </DXButton>
          <DXButton icon-only size="lg">
            <DXIcon :icon="TrashIcon" size="md" />
          </DXButton>
          <DXButton icon-only size="xl">
            <DXIcon :icon="TrashIcon" size="lg" />
          </DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Квадратные кнопки с иконками: xs (28×28px) | sm (32×32px) | md (40×40px) | lg (48×48px) | xl (56×56px)
        </div>
      </div>
    `})};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Кнопка</DXButton>'
  })
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var D,m,d;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="primary">Primary</DXButton>
            <DXButton variant="secondary">Secondary</DXButton>
            <DXButton variant="ghost">Ghost</DXButton>
            <DXButton variant="outline">Outline</DXButton>
            <DXButton variant="soft">Soft</DXButton>
            <DXButton variant="link">Link</DXButton>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXButton variant="success">Success</DXButton>
            <DXButton variant="warning">Warning</DXButton>
            <DXButton variant="danger">Danger</DXButton>
            <DXButton variant="info">Info</DXButton>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: primary | secondary | ghost | outline | soft | link | success | warning | danger | info
        </div>
      </div>
    \`
  })
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var X,B,x;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton size="xs">Extra Small</DXButton>
          <DXButton size="sm">Small</DXButton>
          <DXButton size="md">Medium</DXButton>
          <DXButton size="lg">Large</DXButton>
          <DXButton size="xl">Extra Large</DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs (28px) | sm (32px) | md (40px) | lg (48px) | xl (56px)
        </div>
      </div>
    \`
  })
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Disabled</DXButton>'
  })
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var I,z,y;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: args => ({
    components: {
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXButton v-bind="args">Full Width</DXButton>'
  })
}`,...(y=(z=u.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var h,b,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton,
      DXIcon
    },
    setup() {
      return {
        PlusIcon,
        TrashIcon,
        PencilIcon
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <DXButton>
          <DXIcon :icon="PlusIcon" size="sm" />
          Добавить
        </DXButton>
        <DXButton variant="danger">
          <DXIcon :icon="TrashIcon" size="sm" />
          Удалить
        </DXButton>
        <DXButton variant="ghost">
          <DXIcon :icon="PencilIcon" size="sm" />
          Редактировать
        </DXButton>
      </div>
    \`
  })
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,P,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButton,
      DXIcon
    },
    setup() {
      return {
        PlusIcon,
        TrashIcon,
        HeartIcon
      };
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4">
          <DXButton icon-only size="xs">
            <DXIcon :icon="PlusIcon" size="xs" />
          </DXButton>
          <DXButton icon-only size="sm">
            <DXIcon :icon="PlusIcon" size="sm" />
          </DXButton>
          <DXButton icon-only>
            <DXIcon :icon="HeartIcon" size="sm" />
          </DXButton>
          <DXButton icon-only size="lg">
            <DXIcon :icon="TrashIcon" size="md" />
          </DXButton>
          <DXButton icon-only size="xl">
            <DXIcon :icon="TrashIcon" size="lg" />
          </DXButton>
        </div>
        <div class="text-sm text-slate-600">
          Квадратные кнопки с иконками: xs (28×28px) | sm (32×32px) | md (40×40px) | lg (48×48px) | xl (56×56px)
        </div>
      </div>
    \`
  })
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const N=["Default","Variants","Sizes","Disabled","Block","WithIcon","IconOnly"];export{u as Block,o as Default,r as Disabled,i as IconOnly,s as Sizes,e as Variants,a as WithIcon,N as __namedExportsOrder,K as default};
