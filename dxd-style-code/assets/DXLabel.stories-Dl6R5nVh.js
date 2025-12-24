import{_ as s}from"./DXLabel-CawZsE44.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const z={title:"Atoms/DXLabel",component:s,tags:["autodocs","category:typography"],parameters:{docs:{description:{component:`
# DXLabel

Компонент лейбла для форм с поддержкой различных размеров, весов и цветов.

## Назначение

DXLabel предоставляет стандартизированный лейбл для форм с настраиваемыми параметрами типографики.
Компонент поддерживает различные размеры, веса шрифта, цвета и автоматическое отображение индикатора
обязательного поля.

## Архитектура

### Использует
- \`useVariantText\` composable - для цветовых вариантов

### Используется в
- Формы с полями ввода
- Связанные с input элементами лейблы
- Любые места, требующие текстовых меток

## Внутренняя логика

### Размеры
Поддерживает 4 размера:
- **xs** - очень маленький текст
- **sm** - маленький текст (по умолчанию)
- **md** - средний текст
- **lg** - большой текст

### Веса шрифта
Поддерживает 3 веса:
- **normal** - обычный вес
- **medium** - средний вес (по умолчанию)
- **semibold** - полужирный

### Цвета
Поддерживает 3 цветовых варианта:
- **default** - цвет по умолчанию
- **muted** - приглушенный цвет
- **primary** - основной цвет

### Обязательное поле
При \`required={true}\` автоматически добавляется красная звездочка (*) справа от текста.

## Особенности

### Связь с input
Поддерживает \`htmlFor\` prop для связи с input элементом через \`id\`:
- Улучшает доступность
- Позволяет кликать на лейбл для фокуса на input

### Семантика
Использует нативный HTML \`<label>\` тег для правильной семантики и доступности.
        `}}}},e={args:{},render:n=>({components:{DXLabel:s},setup(){return{args:n}},template:'<DXLabel v-bind="args">Email адрес</DXLabel>'})},a={args:{required:!0},render:n=>({components:{DXLabel:s},setup(){return{args:n}},template:'<DXLabel v-bind="args">Обязательное поле</DXLabel>'})},r={render:()=>({components:{DXLabel:s},template:`
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    `})};var t,l,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      DXLabel
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLabel v-bind="args">Email адрес</DXLabel>'
  })
}`,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var u,m,i;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    required: true
  },
  render: args => ({
    components: {
      DXLabel
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLabel v-bind="args">Обязательное поле</DXLabel>'
  })
}`,...(i=(m=a.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,b,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLabel
    },
    template: \`
      <div class="space-y-2">
        <DXLabel size="xs">Extra Small Label</DXLabel>
        <DXLabel size="sm">Small Label (default)</DXLabel>
        <DXLabel size="md">Medium Label</DXLabel>
        <DXLabel size="lg">Large Label</DXLabel>
      </div>
    \`
  })
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const S=["Default","Required","Sizes"];export{e as Default,a as Required,r as Sizes,S as __namedExportsOrder,z as default};
