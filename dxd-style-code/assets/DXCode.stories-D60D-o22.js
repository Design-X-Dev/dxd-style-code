import{_ as n}from"./DXCode-9eJ3x3YL.js";import"./vue.esm-bundler-C1fUoNF-.js";const i={title:"Atoms/DXCode",component:n,tags:["autodocs","category:typography"],parameters:{docs:{description:{component:`
# DXCode

Компонент для отображения кода с поддержкой inline и block режимов.

## Назначение

DXCode предоставляет стандартизированный способ отображения кода в документации, статьях и интерфейсах.
Компонент поддерживает два режима: inline (для кода внутри текста) и block (для блоков кода).

## Архитектура

### Использует
- Динамический рендеринг HTML тегов - для семантической правильности

### Используется в
- Документация и статьи
- Примеры кода
- Технические описания
- Любые места, требующие отображения кода

## Внутренняя логика

### Режимы
- **inline** (по умолчанию): Код внутри текста, использует \`<code>\` тег
- **block**: Блок кода, использует \`<pre><code>\` теги

### Размеры
Поддерживает 3 размера:
- **xs** - очень маленький текст
- **sm** - маленький текст (по умолчанию)
- **md** - средний текст

### Визуальное оформление
- **inline**: Светлый фон (bg-slate-100), темный текст, небольшой padding
- **block**: Темный фон (bg-slate-900), светлый текст, padding, скругление, прокрутка при переполнении

## Особенности

### Inline режим
Используется для кода внутри текста:
\`\`\`vue
<DXCode>npm install</DXCode>
\`\`\`

### Block режим
Используется для блоков кода:
\`\`\`vue
<DXCode block>
const greeting = "Hello World";
console.log(greeting);
</DXCode>
\`\`\`

### Моноширинный шрифт
Всегда использует моноширинный шрифт (\`font-mono\`) для правильного отображения кода.

### Прокрутка
В block режиме при переполнении появляется горизонтальная прокрутка (\`overflow-x-auto\`).
        `}}}},e={render:()=>({components:{DXCode:n},template:"<p>Используйте <DXCode>npm install</DXCode> для установки.</p>"})},o={args:{block:!0},render:c=>({components:{DXCode:n},setup(){return{args:c}},template:`<DXCode v-bind="args">const greeting = "Hello World";
console.log(greeting);

function add(a, b) {
  return a + b;
}</DXCode>`})};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCode
    },
    template: '<p>Используйте <DXCode>npm install</DXCode> для установки.</p>'
  })
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var a,d,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    block: true
  },
  render: args => ({
    components: {
      DXCode
    },
    setup() {
      return {
        args
      };
    },
    template: \`<DXCode v-bind="args">const greeting = "Hello World";
console.log(greeting);

function add(a, b) {
  return a + b;
}</DXCode>\`
  })
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const m=["Inline","Block"];export{o as Block,e as Inline,m as __namedExportsOrder,i as default};
