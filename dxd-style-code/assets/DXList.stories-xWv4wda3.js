import{_ as n}from"./DXList-BqIgZjEd.js";import"./vue.esm-bundler-C1fUoNF-.js";const X={title:"Atoms/DXList",component:n,tags:["autodocs","category:typography"],parameters:{docs:{description:{component:`
# DXList

Компонент списка с поддержкой упорядоченных и неупорядоченных списков, различных стилей маркеров и размеров.

## Назначение

DXList предоставляет стандартизированный способ создания списков с настраиваемыми параметрами
типографики. Компонент автоматически рендерится как \`<ul>\` или \`<ol>\` для семантической правильности.

## Архитектура

### Использует
- Динамический рендеринг HTML тегов - для семантической правильности

### Используется в
- Списки элементов
- Навигационные меню
- Оглавления
- Любые места, требующие структурированных списков

## Внутренняя логика

### Типы списков
- **unordered** (по умолчанию): Неупорядоченный список (\`<ul>\`)
- **ordered**: Упорядоченный список (\`<ol>\`) - при \`ordered={true}\`

### Стили маркеров
Поддерживает различные стили маркеров:
- **disc** - заполненные круги (по умолчанию для ul)
- **circle** - пустые круги
- **square** - квадраты
- **decimal** - числа (по умолчанию для ol)
- **none** - без маркеров

### Размеры
Поддерживает 3 размера текста:
- **sm** - маленький текст
- **md** - средний текст (по умолчанию)
- **lg** - большой текст

### Отступы между элементами
Поддерживает 4 варианта отступов:
- **none** - без отступов
- **sm** - маленькие отступы (по умолчанию)
- **md** - средние отступы
- **lg** - большие отступы

## Особенности

### Семантика
Компонент использует семантически правильные HTML теги:
- \`<ul>\` для неупорядоченных списков
- \`<ol>\` для упорядоченных списков

Это важно для:
- SEO (поисковые системы понимают структуру)
- Доступности (скринридеры используют списки для навигации)
- Семантической правильности HTML

### Элементы списка
Элементы списка должны быть обернуты в \`<li>\` теги через slot:
\`\`\`vue
<DXList>
  <li>Первый элемент</li>
  <li>Второй элемент</li>
</DXList>
\`\`\`
        `}}}},u={render:()=>({components:{DXList:n},template:`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    `})},e={args:{ordered:!0},render:s=>({components:{DXList:n},setup(){return{args:s}},template:`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    `})},r={args:{marker:"none"},render:s=>({components:{DXList:n},setup(){return{args:s}},template:`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    `})};var t,i,o;u.parameters={...u.parameters,docs:{...(t=u.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXList
    },
    template: \`
      <DXList>
        <li>Первый элемент</li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </DXList>
    \`
  })
}`,...(o=(i=u.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var a,l,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    ordered: true
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Шаг первый</li>
        <li>Шаг второй</li>
        <li>Шаг третий</li>
      </DXList>
    \`
  })
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    marker: 'none'
  },
  render: args => ({
    components: {
      DXList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXList v-bind="args">
        <li>Элемент без маркера</li>
        <li>Ещё один элемент</li>
      </DXList>
    \`
  })
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const g=["Unordered","Ordered","NoMarker"];export{r as NoMarker,e as Ordered,u as Unordered,g as __namedExportsOrder,X as default};
