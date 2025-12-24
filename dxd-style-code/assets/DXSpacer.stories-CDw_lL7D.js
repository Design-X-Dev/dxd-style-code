import{c as n,a as C,o as S,y as w,l as y}from"./vue.esm-bundler-CzLKT_w4.js";import{u as r}from"./useClassComposition-Dym2pzZ_.js";const t={__name:"DXSpacer",props:{size:{type:[String,Number],default:"md"},direction:{type:String,default:"vertical"},grow:{type:Boolean,default:!1}},setup(f){const e=f,E={xs:{v:"h-1",h:"w-1"},sm:{v:"h-2",h:"w-2"},md:{v:"h-4",h:"w-4"},lg:{v:"h-8",h:"w-8"},xl:{v:"h-12",h:"w-12"}},x=n(()=>{if(e.grow)return r("flex-grow");if(typeof e.size=="number")return r();const u=E[e.size];return u?e.direction==="horizontal"?r(u.h):e.direction==="both"?r(u.v,u.h):r(u.v):r()}),h=n(()=>{if(e.grow)return{};if(typeof e.size=="number"){const u=`${e.size}px`;return e.direction==="horizontal"?{width:u}:e.direction==="both"?{height:u,width:u}:{height:u}}return{}});return(u,F)=>(S(),C("div",{class:y(x.value),style:w(h.value),"data-component":"DXSpacer","aria-hidden":"true"},null,6))}};t.__docgenInfo={exportName:"default",displayName:"DXSpacer",description:"",tags:{},props:[{name:"size",description:"Размер: xs | sm | md | lg | xl или число в пикселях",type:{name:"string|number"},defaultValue:{func:!1,value:'"md"'}},{name:"direction",description:"Направление: vertical | horizontal | both",type:{name:"string"},defaultValue:{func:!1,value:'"vertical"'}},{name:"grow",description:"Занять всё доступное пространство (flex-grow)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXSpacer/DXSpacer.vue"]};const z={title:"Atoms/DXSpacer",component:t,tags:["autodocs","category:layout"],parameters:{docs:{description:{component:`
Компонент для создания отступов между элементами с поддержкой различных размеров и направлений.

## Назначение

DXSpacer - вспомогательный layout компонент для создания пространства между элементами.
Поддерживает как фиксированные размеры (строковые и числовые), так и динамическое заполнение пространства (flex-grow).

## Архитектура

### Использует
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Вертикальные и горизонтальные отступы между элементами
- Flex контейнеры для распределения пространства
- Формы и группы полей
- Навигационные меню
- Любые места, где требуется добавить пространство между элементами

## Внутренняя логика

### Система размеров
Поддерживает два типа размеров:
- **Строковые значения**: \`xs\`, \`sm\`, \`md\`, \`lg\`, \`xl\`, \`2xl\` - используют предопределенные Tailwind классы
- **Числовые значения**: пиксели (например, \`size={24}\`) - используют inline стили

### Направления
- \`vertical\` - вертикальный отступ (высота)
- \`horizontal\` - горизонтальный отступ (ширина)
- \`both\` - отступ по обеим осям (высота и ширина)

### Flex-grow режим
При \`grow={true}\` компонент использует \`flex-grow\` для заполнения всего доступного пространства.
В этом режиме размеры игнорируются.

### Обработка размеров
- **Строковые значения**: применяются через Tailwind классы (\`h-*\`, \`w-*\`)
- **Числовые значения**: применяются через inline стили (\`height: Npx\`, \`width: Npx\`)
- **Grow режим**: применяется только \`flex-grow\` класс

## Особенности

### Вертикальный отступ
\`\`\`vue
<div>
  <div>Content above</div>
  <DXSpacer size="lg" />
  <div>Content below</div>
</div>
\`\`\`

### Горизонтальный отступ
\`\`\`vue
<div class="flex">
  <div>Left content</div>
  <DXSpacer size="md" direction="horizontal" />
  <div>Right content</div>
</div>
\`\`\`

### Числовые размеры
\`\`\`vue
<DXSpacer :size="32" direction="vertical" />
\`\`\`

### Flex-grow
\`\`\`vue
<div class="flex">
  <div>Start</div>
  <DXSpacer grow />
  <div>End</div>
</div>
\`\`\`

## Ограничения

- Строковые размеры ограничены предопределенными значениями
- Для кастомных размеров используйте числовые значения (px)
- Flex-grow работает только внутри flex контейнеров
- Компонент имеет \`aria-hidden="true"\` для скринридеров (не является семантическим элементом)
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Размер отступа. Поддерживает строковые значения (xs, sm, md, lg, xl, 2xl) для предопределенных размеров или числовые значения (в пикселях) для кастомных размеров.",table:{type:{summary:"string | number"},defaultValue:{summary:'"md"'},category:"Spacing"}},direction:{control:"select",options:["vertical","horizontal","both"],description:"Направление отступа. Vertical создает вертикальный отступ (высота), horizontal - горизонтальный (ширина), both - по обеим осям.",table:{type:{summary:"string"},defaultValue:{summary:'"vertical"'},category:"Layout"}},grow:{control:"boolean",description:"Использовать flex-grow для заполнения всего доступного пространства. При true размеры игнорируются, и компонент заполняет все доступное пространство в flex контейнере.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},a={parameters:{docs:{description:{story:"Вертикальный отступ между элементами. Это наиболее распространенный вариант использования DXSpacer. Создает пространство между элементами, расположенными друг под другом."}}},render:()=>({components:{DXSpacer:t},template:`
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    `})},o={parameters:{docs:{description:{story:"Горизонтальный отступ между элементами. Используется внутри flex контейнеров для создания пространства между элементами, расположенными в ряд. Требует flex контейнер для корректной работы."}}},render:()=>({components:{DXSpacer:t},template:`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    `})},s={parameters:{docs:{description:{story:"DXSpacer с flex-grow режимом. Заполняет все доступное пространство между элементами в flex контейнере. Полезен для создания макетов, где элементы должны быть по краям, а пространство между ними заполняется автоматически. В этом режиме размеры игнорируются."}}},render:()=>({components:{DXSpacer:t},template:`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    `})};var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Вертикальный отступ между элементами. Это наиболее распространенный вариант использования DXSpacer. Создает пространство между элементами, расположенными друг под другом.'
      }
    }
  },
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div>
        <div class="bg-slate-100 p-4 rounded">Above</div>
        <DXSpacer size="lg" />
        <div class="bg-slate-100 p-4 rounded">Below</div>
      </div>
    \`
  })
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Горизонтальный отступ между элементами. Используется внутри flex контейнеров для создания пространства между элементами, расположенными в ряд. Требует flex контейнер для корректной работы.'
      }
    }
  },
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Left</div>
        <DXSpacer size="lg" direction="horizontal" />
        <div class="bg-slate-100 p-4 rounded">Right</div>
      </div>
    \`
  })
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,D,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DXSpacer с flex-grow режимом. Заполняет все доступное пространство между элементами в flex контейнере. Полезен для создания макетов, где элементы должны быть по краям, а пространство между ними заполняется автоматически. В этом режиме размеры игнорируются.'
      }
    }
  },
  render: () => ({
    components: {
      DXSpacer
    },
    template: \`
      <div class="flex">
        <div class="bg-slate-100 p-4 rounded">Start</div>
        <DXSpacer grow />
        <div class="bg-slate-100 p-4 rounded">End</div>
      </div>
    \`
  })
}`,...(g=(D=s.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};const X=["Vertical","Horizontal","FlexGrow"];export{s as FlexGrow,o as Horizontal,a as Vertical,X as __namedExportsOrder,z as default};
