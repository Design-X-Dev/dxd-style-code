import{_ as n}from"./DXButtonGroup-DRUOeH9a.js";import{_ as u}from"./DXButton-DzgLKRkE.js";import{_ as L}from"./DXFlex-wmS4uXZI.js";import{_ as A}from"./DXIcon-Bc0cQL8C.js";import{a as _,o as z,b as F,r as t}from"./vue.esm-bundler-C1fUoNF-.js";import{r as x,a as E}from"./TableCellsIcon-DXBW3Ypz.js";import{r as R}from"./Squares2X2Icon-BfHN8L_E.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./useAnimation-ByVAdqmf.js";function w(e,c){return z(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[F("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"})])}const W={title:"Molecules/DXButtonGroup",component:n,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`

Группа связанных кнопок для выбора одного или нескольких значений с поддержкой v-model.

## Назначение

DXButtonGroup предоставляет способ группировки кнопок для создания интерфейсов выбора,
аналогичных segmented controls или toggle groups. Компонент автоматически управляет
состоянием выбора, визуальным оформлением и синхронизацией размеров кнопок.

## Архитектура

### Использует
- \`DXButton\` - кнопки в группе (автоматически адаптируются при использовании внутри группы)
- \`provide/inject\` - для передачи контекста группы к дочерним компонентам
- Система регистрации компонентов - для отслеживания позиции кнопок и правильного применения стилей

### Используется в
- Фильтры и сортировка
- Переключение режимов отображения
- Выбор опций форматирования
- Навигационные элементы
- Настройки с переключателями

## Внутренняя логика

### Режимы выбора
- **single** (по умолчанию): Выбор одного значения, \`modelValue\` - String или Number
- **multiple**: Множественный выбор, \`modelValue\` - Array

### Система регистрации компонентов
Компонент отслеживает порядок регистрации дочерних \`DXButton\` компонентов для:
- Правильного применения border-radius (первая/последняя/средние кнопки)
- Корректного отображения разделителей между кнопками
- Синхронизации размеров всех кнопок в группе

### Интеграция с DXButton
При использовании \`DXButton\` внутри группы:
- Кнопка автоматически регистрируется в группе
- Размер кнопки синхронизируется с размером группы
- Состояние disabled синхронизируется с группой
- Применяется правильный border-radius в зависимости от позиции
- Автоматически применяется состояние selected (bg-slate-900 text-white)
- Убираются индивидуальные границы (группа обрабатывает их через divide-x)

## Особенности

### Размеры
Поддерживает три размера: \`sm\` (h-8), \`md\` (h-10), \`lg\` (h-12).
Размер применяется ко всем кнопкам в группе автоматически.

### Label
Label отображается над группой кнопок, аналогично другим компонентам форм (DXInputGroup).

### Состояния
- **disabled**: Отключает всю группу и все кнопки внутри
- **selected**: Визуально выделяет выбранные кнопки темным фоном

### Разделители
Между кнопками автоматически отображаются вертикальные разделители (border-left),
кроме первой кнопки.

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single mode: значение - String или Number
- Для multiple mode: значение - Array
        `}}}},o={render:()=>({components:{DXButtonGroup:n,DXButton:u},setup(){return{selected:t("left")}},template:`
      <DXButtonGroup v-model="selected" label="Select alignment">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    `})},r={render:()=>({components:{DXButtonGroup:n,DXButton:u},setup(){return{selected:t(["bold","italic"])}},template:`
      <DXButtonGroup v-model="selected" multiple label="Text formatting">
        <DXButton value="bold">Bold</DXButton>
        <DXButton value="italic">Italic</DXButton>
        <DXButton value="underline">Underline</DXButton>
      </DXButtonGroup>
    `})},l={render:()=>({components:{DXButtonGroup:n,DXButton:u,DXFlex:L},setup(){const e=t("left"),c=t("left"),S=t("left");return{small:e,medium:c,large:S}},template:`
      <DXFlex direction="col" gap="md" align="start">
        <DXButtonGroup v-model="small" size="sm" label="Small">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="medium" size="md" label="Medium (default)">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="large" size="lg" label="Large">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
      </DXFlex>
    `})},s={render:()=>({components:{DXButtonGroup:n,DXButton:u},setup(){return{selected:t("left")}},template:`
      <DXButtonGroup v-model="selected" disabled label="Disabled group">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    `})},a={parameters:{docs:{description:{story:"Пример группы кнопок с иконками. Иконки размещаются внутри DXButton компонентов и автоматически адаптируются к стилю группы."}}},render:()=>({components:{DXButtonGroup:n,DXButton:u,DXIcon:A},setup(){return{selected:t("grid"),Squares2X2Icon:R,ListBulletIcon:E,TableCellsIcon:x,SquaresPlusIcon:w}},template:`
      <DXButtonGroup v-model="selected" label="View mode">
        <DXButton value="grid">
          <DXIcon :icon="Squares2X2Icon" size="sm" />
          Grid
        </DXButton>
        <DXButton value="list">
          <DXIcon :icon="ListBulletIcon" size="sm" />
          List
        </DXButton>
        <DXButton value="table">
          <DXIcon :icon="TableCellsIcon" size="sm" />
          Table
        </DXButton>
        <DXButton value="cards">
          <DXIcon :icon="SquaresPlusIcon" size="sm" />
          Cards
        </DXButton>
      </DXButtonGroup>
    `})};var D,X,i;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButtonGroup,
      DXButton
    },
    setup() {
      const selected = ref('left');
      return {
        selected
      };
    },
    template: \`
      <DXButtonGroup v-model="selected" label="Select alignment">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    \`
  })
}`,...(i=(X=o.parameters)==null?void 0:X.docs)==null?void 0:i.source}}};var B,d,m;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButtonGroup,
      DXButton
    },
    setup() {
      const selected = ref(['bold', 'italic']);
      return {
        selected
      };
    },
    template: \`
      <DXButtonGroup v-model="selected" multiple label="Text formatting">
        <DXButton value="bold">Bold</DXButton>
        <DXButton value="italic">Italic</DXButton>
        <DXButton value="underline">Underline</DXButton>
      </DXButtonGroup>
    \`
  })
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,v,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButtonGroup,
      DXButton,
      DXFlex
    },
    setup() {
      const small = ref('left');
      const medium = ref('left');
      const large = ref('left');
      return {
        small,
        medium,
        large
      };
    },
    template: \`
      <DXFlex direction="col" gap="md" align="start">
        <DXButtonGroup v-model="small" size="sm" label="Small">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="medium" size="md" label="Medium (default)">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
        
        <DXButtonGroup v-model="large" size="lg" label="Large">
          <DXButton value="left">Left</DXButton>
          <DXButton value="center">Center</DXButton>
          <DXButton value="right">Right</DXButton>
        </DXButtonGroup>
      </DXFlex>
    \`
  })
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,G,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXButtonGroup,
      DXButton
    },
    setup() {
      const selected = ref('left');
      return {
        selected
      };
    },
    template: \`
      <DXButtonGroup v-model="selected" disabled label="Disabled group">
        <DXButton value="left">Left</DXButton>
        <DXButton value="center">Center</DXButton>
        <DXButton value="right">Right</DXButton>
      </DXButtonGroup>
    \`
  })
}`,...(b=(G=s.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var h,I,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Пример группы кнопок с иконками. Иконки размещаются внутри DXButton компонентов и автоматически адаптируются к стилю группы.'
      }
    }
  },
  render: () => ({
    components: {
      DXButtonGroup,
      DXButton,
      DXIcon
    },
    setup() {
      const selected = ref('grid');
      return {
        selected,
        Squares2X2Icon,
        ListBulletIcon,
        TableCellsIcon,
        SquaresPlusIcon
      };
    },
    template: \`
      <DXButtonGroup v-model="selected" label="View mode">
        <DXButton value="grid">
          <DXIcon :icon="Squares2X2Icon" size="sm" />
          Grid
        </DXButton>
        <DXButton value="list">
          <DXIcon :icon="ListBulletIcon" size="sm" />
          List
        </DXButton>
        <DXButton value="table">
          <DXIcon :icon="TableCellsIcon" size="sm" />
          Table
        </DXButton>
        <DXButton value="cards">
          <DXIcon :icon="SquaresPlusIcon" size="sm" />
          Cards
        </DXButton>
      </DXButtonGroup>
    \`
  })
}`,...(C=(I=a.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const O=["Default","Multiple","Sizes","Disabled","WithIcons"];export{o as Default,s as Disabled,r as Multiple,l as Sizes,a as WithIcons,O as __namedExportsOrder,W as default};
