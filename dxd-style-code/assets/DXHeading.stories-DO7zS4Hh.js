import{_ as l}from"./DXHeading-S6mljWwV.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const h={title:"Atoms/DXHeading",component:l,tags:["autodocs","category:typography"],parameters:{docs:{description:{component:`
# DXHeading

Компонент заголовка с поддержкой уровней (h1-h6), размеров, весов и цветов.

## Назначение

DXHeading предоставляет стандартизированный способ создания заголовков с настраиваемыми параметрами
типографики. Компонент автоматически рендерится как соответствующий HTML тег (h1-h6) для семантической
правильности и SEO.

## Архитектура

### Использует
- Динамический рендеринг HTML тегов - для семантической правильности
- \`useSize\` composable - для унификации размеров (опционально)

### Используется в
- Заголовки страниц и разделов
- Заголовки карточек
- Заголовки форм
- Любые места, требующие семантических заголовков

## Внутренняя логика

### Уровни заголовков
Поддерживает 6 уровней через \`level\` prop:
- **1** - h1 (самый важный, самый крупный)
- **2** - h2
- **3** - h3
- **4** - h4
- **5** - h5
- **6** - h6 (наименее важный, самый маленький)

### Размеры
Поддерживает 8 размеров (независимо от level):
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний
- **lg** - большой
- **xl** - очень большой
- **2xl** - extra large
- **3xl** - 3x large
- **4xl** - 4x large

### Веса шрифта
Поддерживает 4 веса:
- **normal** - обычный вес
- **medium** - средний вес
- **semibold** - полужирный (по умолчанию для заголовков)
- **bold** - жирный

### Цвета
Поддерживает 6 цветовых вариантов:
- **default** - цвет по умолчанию (text-slate-900)
- **muted** - приглушенный цвет (text-slate-600)
- **primary** - основной цвет
- **success** - зеленый цвет
- **warning** - желтый цвет
- **danger** - красный цвет

## Особенности

### Семантика
Компонент автоматически рендерится как соответствующий HTML тег (h1-h6) на основе \`level\` prop:
- \`level={1}\` → \`<h1>\`
- \`level={2}\` → \`<h2>\`
- И так далее

Это важно для:
- SEO (поисковые системы понимают иерархию заголовков)
- Доступности (скринридеры используют заголовки для навигации)
- Семантической правильности HTML

### Независимость level и size
Уровень заголовка (\`level\`) и его визуальный размер (\`size\`) независимы:
- Можно использовать h1 с маленьким размером
- Можно использовать h3 с большим размером
- Это позволяет разделять семантику и визуальное представление

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов.
        `}}},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl","3xl","4xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]}}},e={args:{level:1},render:D=>({components:{DXHeading:l},setup(){return{args:D}},template:'<DXHeading v-bind="args">Заголовок страницы</DXHeading>'})},n={render:()=>({components:{DXHeading:l},template:`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    `})},a={render:()=>({components:{DXHeading:l},template:`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    `})};var o,r,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    level: 1
  },
  render: args => ({
    components: {
      DXHeading
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXHeading v-bind="args">Заголовок страницы</DXHeading>'
  })
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var i,s,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-4">
        <DXHeading :level="1">Heading 1</DXHeading>
        <DXHeading :level="2">Heading 2</DXHeading>
        <DXHeading :level="3">Heading 3</DXHeading>
        <DXHeading :level="4">Heading 4</DXHeading>
        <DXHeading :level="5">Heading 5</DXHeading>
        <DXHeading :level="6">Heading 6</DXHeading>
      </div>
    \`
  })
}`,...(g=(s=n.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var t,c,H;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXHeading
    },
    template: \`
      <div class="space-y-2">
        <DXHeading :level="3" color="default">Default Color</DXHeading>
        <DXHeading :level="3" color="muted">Muted Color</DXHeading>
        <DXHeading :level="3" color="success">Success Color</DXHeading>
        <DXHeading :level="3" color="warning">Warning Color</DXHeading>
        <DXHeading :level="3" color="danger">Danger Color</DXHeading>
      </div>
    \`
  })
}`,...(H=(c=a.parameters)==null?void 0:c.docs)==null?void 0:H.source}}};const x=["Default","AllLevels","Colors"];export{n as AllLevels,a as Colors,e as Default,x as __namedExportsOrder,h as default};
