import{_ as s}from"./DXText-Bu-Qlv6N.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const E={title:"Atoms/DXText",component:s,tags:["autodocs","category:typography"],parameters:{docs:{description:{component:`
# DXText

Компонент текста с поддержкой различных размеров, весов, цветов и выравнивания.

## Назначение

DXText предоставляет стандартизированный способ отображения текста с настраиваемыми параметрами
типографики. Компонент поддерживает различные размеры, веса шрифта, цвета и выравнивание текста.

## Архитектура

### Использует
- \`useSize\` composable - для унификации размеров текста (xs, sm, md, lg, xl)
- Динамический рендеринг HTML тегов - для семантической правильности

### Используется в
- Параграфы и описания
- Текстовые блоки в карточках
- Вспомогательный текст
- Любые места, требующие отображения текста

## Внутренняя логика

### HTML теги
Компонент может рендериться как различные HTML теги через \`tag\` prop:
- \`p\` (по умолчанию) - параграф
- \`span\` - инлайн текст
- \`div\` - блочный контейнер
- Другие текстовые теги

### Размеры
Поддерживает 5 размеров:
- **xs** - очень маленький текст
- **sm** - маленький текст
- **md** - средний текст (по умолчанию)
- **lg** - большой текст
- **xl** - очень большой текст

### Веса шрифта
Поддерживает 4 веса:
- **normal** - обычный вес
- **medium** - средний вес
- **semibold** - полужирный
- **bold** - жирный

### Цвета
Поддерживает 6 цветовых вариантов:
- **default** - цвет по умолчанию (text-slate-900)
- **muted** - приглушенный цвет (text-slate-600)
- **primary** - основной цвет
- **success** - зеленый цвет
- **warning** - желтый цвет
- **danger** - красный цвет

### Выравнивание
Поддерживает 4 варианта выравнивания:
- **left** (по умолчанию) - по левому краю
- **center** - по центру
- **right** - по правому краю
- **justify** - по ширине

## Особенности

### Обрезка текста
При \`truncate={true}\`:
- Текст обрезается с многоточием при переполнении
- Используется \`text-overflow: ellipsis\`
- Требует \`overflow: hidden\` и \`white-space: nowrap\`

### Семантика
Компонент использует семантически правильные HTML теги для лучшей доступности и SEO.

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов.
        `}}},argTypes:{size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},weight:{control:{type:"select"},options:["normal","medium","semibold","bold"]},color:{control:{type:"select"},options:["default","muted","primary","success","warning","danger"]},align:{control:{type:"select"},options:["left","center","right","justify"]}}},e={args:{},render:r=>({components:{DXText:s},setup(){return{args:r}},template:'<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'})},t={render:()=>({components:{DXText:s},template:`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    `})},u={args:{truncate:!0},render:r=>({components:{DXText:s},setup(){return{args:r}},template:'<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'})};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXText v-bind="args">Это обычный текстовый параграф с настройками по умолчанию.</DXText>'
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,x,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXText
    },
    template: \`
      <div class="space-y-2">
        <DXText size="xs">Extra Small Text</DXText>
        <DXText size="sm">Small Text</DXText>
        <DXText size="md">Medium Text (default)</DXText>
        <DXText size="lg">Large Text</DXText>
        <DXText size="xl">Extra Large Text</DXText>
      </div>
    \`
  })
}`,...(c=(x=t.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var l,m,p;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    truncate: true
  },
  render: args => ({
    components: {
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: '<div class="w-48"><DXText v-bind="args">Это очень длинный текст который будет обрезан с многоточием</DXText></div>'
  })
}`,...(p=(m=u.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const f=["Default","Sizes","Truncated"];export{e as Default,t as Sizes,u as Truncated,f as __namedExportsOrder,E as default};
