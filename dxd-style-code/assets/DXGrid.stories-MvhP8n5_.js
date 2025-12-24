import{_ as n}from"./DXGrid-D82L3AhL.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useSize-DIMNv1Ms.js";import"./useSpacing-BOHUzi8w.js";import"./useClassComposition-Dym2pzZ_.js";const X={title:"Atoms/DXGrid",component:n,tags:["autodocs","category:layout"],parameters:{docs:{description:{component:`
# DXGrid

CSS Grid контейнер с адаптивными колонками и гибкой системой отступов.

## Назначение

DXGrid - layout компонент для создания grid макетов с использованием CSS Grid.
Предоставляет простой API для управления количеством колонок, адаптивностью и отступами между элементами.

## Архитектура

### Использует
- \`useSize\` composable - для унификации общего gap между элементами
- \`useSpacing\` composable - для унификации раздельных gapX и gapY
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Галереи изображений
- Карточки товаров и продуктов
- Сетки контента
- Адаптивные макеты страниц
- Любые места, требующие grid структуры

## Внутренняя логика

### Система колонок
Поддерживает фиксированное количество колонок от 1 до 12:
- \`cols={1}\` → \`grid-cols-1\`
- \`cols={12}\` → \`grid-cols-12\`
- \`cols="auto"\` → автоматический размер с минимальной шириной 250px

### Адаптивные колонки
Поддерживает адаптивные колонки для различных breakpoints:
- \`colsSm\` - количество колонок на sm экранах (≥640px)
- \`colsMd\` - количество колонок на md экранах (≥768px)
- \`colsLg\` - количество колонок на lg экранах (≥1024px)

### Система gap
Поддерживает три варианта отступов:
- \`gap\` - общий отступ для всех направлений (использует \`useSize\` с типом \`spacing\`)
- \`gapX\` - горизонтальный отступ (между колонками, использует \`useSpacing\`)
- \`gapY\` - вертикальный отступ (между рядами, использует \`useSpacing\`)

Если указаны \`gapX\` или \`gapY\`, они имеют приоритет над общим \`gap\`.
Для общего gap используется \`useSize\` для единообразия с другими layout компонентами.

### Auto-fit режим
При \`cols="auto"\` используется CSS Grid \`auto-fit\` с минимальной шириной элемента 250px.
Элементы автоматически подстраиваются под доступное пространство.

## Особенности

### Фиксированные колонки
\`\`\`vue
<DXGrid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</DXGrid>
\`\`\`

### Адаптивные колонки
\`\`\`vue
<DXGrid cols={1} colsSm={2} colsMd={3} colsLg={4} gap="lg">
  <!-- Элементы -->
</DXGrid>
\`\`\`

### Auto-fit
\`\`\`vue
<DXGrid cols="auto" gap="md">
  <!-- Элементы автоматически подстраиваются -->
</DXGrid>
\`\`\`

### Раздельные отступы
\`\`\`vue
<DXGrid cols={3} gapX="lg" gapY="md">
  <!-- Больше отступ по горизонтали, меньше по вертикали -->
</DXGrid>
\`\`\`

## Ограничения

- Максимальное количество колонок: 12 (стандарт Tailwind)
- Auto-fit использует фиксированную минимальную ширину 250px
- Для более сложных grid макетов используйте CSS классы через \`class\` prop
- Gap использует предопределенные значения из \`useSpacing\` (none, xs, sm, md, lg, xl)
        `}}},argTypes:{cols:{control:"select",options:[1,2,3,4,5,6,7,8,9,10,11,12,"auto"],description:'Количество колонок в grid. Поддерживает значения от 1 до 12 или "auto" для автоматического размера с минимальной шириной 250px.',table:{type:{summary:"number | string"},defaultValue:{summary:"12"},category:"Layout"}},colsSm:{control:"select",options:[1,2,3,4,5,6,7,8,9,10,11,12],description:"Количество колонок на sm экранах (≥640px). Используется для создания адаптивных grid макетов.",table:{type:{summary:"number | string"},defaultValue:{summary:'""'},category:"Layout"}},colsMd:{control:"select",options:[1,2,3,4,5,6,7,8,9,10,11,12],description:"Количество колонок на md экранах (≥768px). Используется для создания адаптивных grid макетов.",table:{type:{summary:"number | string"},defaultValue:{summary:'""'},category:"Layout"}},colsLg:{control:"select",options:[1,2,3,4,5,6,7,8,9,10,11,12],description:"Количество колонок на lg экранах (≥1024px). Используется для создания адаптивных grid макетов.",table:{type:{summary:"number | string"},defaultValue:{summary:'""'},category:"Layout"}},gap:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Общий отступ между элементами grid (и по горизонтали, и по вертикали). Используется, если не указаны gapX или gapY.",table:{type:{summary:"string"},defaultValue:{summary:'"md"'},category:"Spacing"}},gapX:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Горизонтальный отступ между колонками. Имеет приоритет над общим gap для горизонтального направления.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}},gapY:{control:"select",options:["none","xs","sm","md","lg","xl"],description:"Вертикальный отступ между рядами. Имеет приоритет над общим gap для вертикального направления.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Spacing"}}}},o='<div class="bg-slate-100 rounded-lg p-4 text-center">Item</div>',r={args:{cols:3,gap:"md"},parameters:{docs:{description:{story:"Базовый grid с 3 колонками и средним отступом. Это стандартная конфигурация для создания сетки элементов. Элементы равномерно распределяются по 3 колонкам."}}},render:u=>({components:{DXGrid:n},setup(){return{args:u}},template:`
      <DXGrid v-bind="args">
        ${Array(6).fill(o).join("")}
      </DXGrid>
    `})},s={args:{cols:1,colsSm:2,colsMd:3,colsLg:4},parameters:{docs:{description:{story:"Адаптивный grid с разным количеством колонок на разных экранах. На мобильных (по умолчанию) - 1 колонка, на sm (≥640px) - 2 колонки, на md (≥768px) - 3 колонки, на lg (≥1024px) - 4 колонки. Это типичный паттерн для адаптивных макетов."}}},render:u=>({components:{DXGrid:n},setup(){return{args:u}},template:`
      <DXGrid v-bind="args">
        ${Array(8).fill(o).join("")}
      </DXGrid>
    `})},e={args:{cols:"auto",gap:"md"},parameters:{docs:{description:{story:"Grid с автоматическим количеством колонок (auto-fit). Элементы автоматически подстраиваются под доступное пространство с минимальной шириной 250px. Полезен для галерей и карточек, где количество колонок должно зависеть от ширины экрана."}}},render:u=>({components:{DXGrid:n},setup(){return{args:u}},template:`
      <DXGrid v-bind="args">
        ${Array(5).fill(o).join("")}
      </DXGrid>
    `})};var t,a,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый grid с 3 колонками и средним отступом. Это стандартная конфигурация для создания сетки элементов. Элементы равномерно распределяются по 3 колонкам.'
      }
    }
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(6).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,d,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    cols: 1,
    colsSm: 2,
    colsMd: 3,
    colsLg: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Адаптивный grid с разным количеством колонок на разных экранах. На мобильных (по умолчанию) - 1 колонка, на sm (≥640px) - 2 колонки, на md (≥768px) - 3 колонки, на lg (≥1024px) - 4 колонки. Это типичный паттерн для адаптивных макетов.'
      }
    }
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(8).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    cols: 'auto',
    gap: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Grid с автоматическим количеством колонок (auto-fit). Элементы автоматически подстраиваются под доступное пространство с минимальной шириной 250px. Полезен для галерей и карточек, где количество колонок должно зависеть от ширины экрана.'
      }
    }
  },
  render: args => ({
    components: {
      DXGrid
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXGrid v-bind="args">
        \${Array(5).fill(gridItem).join('')}
      </DXGrid>
    \`
  })
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const B=["Default","Responsive","AutoFit"];export{e as AutoFit,r as Default,s as Responsive,B as __namedExportsOrder,X as default};
