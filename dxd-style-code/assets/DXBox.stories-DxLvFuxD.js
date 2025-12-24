import{_ as t}from"./DXBox-BvEpHmww.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useSpacing-BOHUzi8w.js";import"./useClassComposition-Dym2pzZ_.js";const y={title:"Atoms/DXBox",component:t,tags:["autodocs","category:layout"],parameters:{docs:{description:{component:`
# DXBox

Универсальный контейнер с настраиваемыми отступами, фоном, тенью и скруглением.

## Назначение

DXBox - базовый layout компонент для создания контейнеров с гибкой системой стилизации.
Предоставляет единообразный API для управления отступами, фоном, тенями, скруглением и границами.

## Архитектура

### Использует
- \`useSpacing\` composable - для унификации отступов (padding, margin)
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Все layout компоненты как базовый строительный блок
- Карточки и контейнеры контента
- Модальные окна и панели
- Любые компоненты, требующие стилизованный контейнер

## Внутренняя логика

### Система отступов
Компонент поддерживает гибкую систему отступов:
- **Общие отступы**: \`p\` (padding), \`m\` (margin)
- **Односторонние отступы**: \`px\`, \`py\` (padding), \`mx\`, \`my\` (margin)
- **Специальное значение**: \`m="auto"\` для центрирования через margin

### Динамический HTML тег
Компонент использует \`<component :is="tag">\` для поддержки различных HTML тегов:
- По умолчанию: \`div\`
- Можно использовать: \`section\`, \`article\`, \`aside\`, \`header\`, \`footer\`, и т.д.

### Условное применение классов
Все стили применяются условно - классы добавляются только если соответствующие props указаны.
Это позволяет создавать минималистичные контейнеры без лишних классов.

## Особенности

### Гибкая система отступов
\`\`\`vue
<DXBox p="md" px="lg" py="sm">Content</DXBox>
<DXBox m="auto" mx="lg">Centered</DXBox>
\`\`\`

### Семантические теги
\`\`\`vue
<DXBox tag="section" p="lg" bg="white">Section content</DXBox>
<DXBox tag="article" p="md" rounded="lg">Article content</DXBox>
\`\`\`

### Комбинирование стилей
\`\`\`vue
<DXBox p="lg" bg="white" rounded="xl" shadow="lg" border>
  Styled container
</DXBox>
\`\`\`

## Ограничения

- Отступы используют предопределенные значения из \`useSpacing\` (none, xs, sm, md, lg, xl)
- Для кастомных отступов используйте CSS классы через \`class\` prop
- \`m="auto"\` работает только для горизонтального центрирования
        `}}},argTypes:{tag:{control:"text",description:"HTML тег для рендеринга компонента. По умолчанию используется div, но можно использовать любой семантический тег (section, article, aside, header, footer и т.д.).",table:{type:{summary:"string"},defaultValue:{summary:'"div"'},category:"Layout"}},p:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Общий padding (отступ внутри) для всех сторон. Использует систему spacing из useSpacing composable.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},px:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Горизонтальный padding (отступ слева и справа). Имеет приоритет над общим p для горизонтальных отступов.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},py:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Вертикальный padding (отступ сверху и снизу). Имеет приоритет над общим p для вертикальных отступов.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},m:{control:"select",options:["none","xs","sm","md","lg","xl","auto"],description:'Общий margin (отступ снаружи) для всех сторон. Поддерживает специальное значение "auto" для центрирования.',table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},mx:{control:"select",options:["none","xs","sm","md","lg","xl","auto"],description:'Горизонтальный margin (отступ слева и справа). Поддерживает значение "auto" для горизонтального центрирования.',table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},my:{control:"select",options:["none","xs","sm","md","lg","xl","auto"],description:'Вертикальный margin (отступ сверху и снизу). Поддерживает значение "auto" для вертикального центрирования.',table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},rounded:{control:"select",options:["none","sm","md","lg","xl","2xl","full"],description:"Скругление углов контейнера. Определяет border-radius через Tailwind классы.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Appearance"}},bg:{control:"select",options:["white","slate","transparent"],description:"Цвет фона контейнера. Предопределенные варианты: white (белый), slate (светло-серый), transparent (прозрачный).",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Appearance"}},shadow:{control:"select",options:["none","sm","md","lg","xl"],description:"Тень контейнера. Определяет box-shadow через Tailwind классы. Используется для создания глубины и визуального разделения.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Appearance"}},border:{control:"boolean",description:"Добавляет рамку вокруг контейнера. Применяет класс border border-slate-200 для тонкой серой рамки.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},e={args:{p:"md",bg:"slate",rounded:"lg"},parameters:{docs:{description:{story:"Базовый пример использования DXBox с padding, фоном и скруглением. Это стандартная конфигурация для создания стилизованного контейнера."}}},render:u=>({components:{DXBox:t},setup(){return{args:u}},template:'<DXBox v-bind="args">Content inside box</DXBox>'})},o={args:{p:"lg",bg:"white",rounded:"xl",border:!0},parameters:{docs:{description:{story:"DXBox с рамкой. Используется для визуального разделения контента. Рамка имеет тонкий серый цвет (border-slate-200)."}}},render:u=>({components:{DXBox:t},setup(){return{args:u}},template:'<DXBox v-bind="args">Box with border</DXBox>'})},n={args:{p:"lg",bg:"white",rounded:"xl",shadow:"lg"},parameters:{docs:{description:{story:"DXBox с тенью. Тень создает эффект глубины и поднятия элемента над фоном. Используется для карточек, модальных окон и выделения важного контента."}}},render:u=>({components:{DXBox:t},setup(){return{args:u}},template:'<DXBox v-bind="args">Box with shadow</DXBox>'})};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    p: 'md',
    bg: 'slate',
    rounded: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый пример использования DXBox с padding, фоном и скруглением. Это стандартная конфигурация для создания стилизованного контейнера.'
      }
    }
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Content inside box</DXBox>'
  })
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    p: 'lg',
    bg: 'white',
    rounded: 'xl',
    border: true
  },
  parameters: {
    docs: {
      description: {
        story: 'DXBox с рамкой. Используется для визуального разделения контента. Рамка имеет тонкий серый цвет (border-slate-200).'
      }
    }
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Box with border</DXBox>'
  })
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,m,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    p: 'lg',
    bg: 'white',
    rounded: 'xl',
    shadow: 'lg'
  },
  parameters: {
    docs: {
      description: {
        story: 'DXBox с тенью. Тень создает эффект глубины и поднятия элемента над фоном. Используется для карточек, модальных окон и выделения важного контента.'
      }
    }
  },
  render: args => ({
    components: {
      DXBox
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXBox v-bind="args">Box with shadow</DXBox>'
  })
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Default","WithBorder","WithShadow"];export{e as Default,o as WithBorder,n as WithShadow,b as __namedExportsOrder,y as default};
