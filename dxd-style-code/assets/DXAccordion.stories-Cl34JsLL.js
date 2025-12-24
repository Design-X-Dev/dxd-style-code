import{r as $,c as j,a as f,o as l,F,G as L,q as v,b as s,j as b,d as q,p as P,z as y,x as _,e as W,H as G,g as H,y as M,Q,m as R,T as U}from"./vue.esm-bundler-C1fUoNF-.js";import{c as Y}from"./useAnimation-ByVAdqmf.js";import{u as J}from"./useClassComposition-Dym2pzZ_.js";import{_ as h}from"./DXIcon-Bc0cQL8C.js";import{r as K}from"./ChevronDownIcon-DF-4rgxU.js";import"./useSize-DIMNv1Ms.js";const Z=["data-variant","data-multiple"],ee=["onClick","aria-expanded"],te={class:"flex items-center gap-2"},ae={class:"text-slate-900"},se={class:"overflow-hidden"},oe={class:"pb-4 px-1 text-sm text-slate-600"},ne="",B={__name:"DXAccordion",props:{items:{type:Array,required:!0},multiple:{type:Boolean,default:!1},defaultOpen:{type:Array,default:()=>[]},variant:{type:String,default:"default"}},setup(o){const N=Y("collapse"),m=o,e=$(new Set(m.defaultOpen)),n=t=>e.value.has(t),k=t=>{m.multiple?(e.value.has(t)?e.value.delete(t):e.value.add(t),e.value=new Set(e.value)):e.value.has(t)?e.value=new Set:e.value=new Set([t])},g={default:"",bordered:"border border-slate-200 rounded-xl overflow-hidden",separated:"space-y-2"},z=j(()=>J(ne,g[m.variant]||g.default));return(t,re)=>(l(),f("div",{class:v(z.value),"data-component":"DXAccordion","data-variant":o.variant,"data-multiple":o.multiple},[(l(!0),f(F,null,L(o.items,(r,a)=>(l(),f("div",{key:a,class:"border-b border-slate-200 last:border-b-0"},[s("button",{type:"button",class:v(["w-full flex items-center justify-between py-4 px-1 text-left transition-colors hover:bg-slate-50",{"font-semibold":n(a)}]),onClick:le=>k(a),"aria-expanded":n(a)},[s("span",te,[r.icon?(l(),q(h,{key:0,icon:r.icon,size:"md",animation:"none",class:"text-slate-500"},null,8,["icon"])):P("",!0),s("span",ae,y(r.title),1)]),b(h,{icon:_(K),size:"md",animation:"none",class:v(["text-slate-400 transition-transform duration-200",{"rotate-180":n(a)}])},null,8,["icon","class"])],10,ee),b(U,R({ref_for:!0},_(N)),{default:W(()=>[G(s("div",se,[s("div",oe,[H(t.$slots,`item-${a}`,{},()=>[M(y(r.content),1)])])],512),[[Q,n(a)]])]),_:2},1040)]))),128))],10,Z))}};B.__docgenInfo={exportName:"default",displayName:"DXAccordion",description:"",tags:{},props:[{name:"items",description:"Элементы: [{ title, content?, icon? }]",type:{name:"array"},required:!0},{name:"multiple",description:"Разрешить несколько открытых",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultOpen",description:"Изначально открытые индексы",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"variant",description:"Вариант: default | bordered | separated",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"`item-${index}`",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXAccordion/DXAccordion.vue"]};const fe={title:"Organisms/DXAccordion",component:B,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXAccordion

Компонент аккордеона для отображения раскрывающихся секций контента.

## Назначение

DXAccordion предоставляет способ организации контента в раскрывающиеся секции. Компонент
поддерживает одиночный и множественный режимы открытия, различные варианты оформления
и возможность задать изначально открытые секции.

## Архитектура

### Использует
- \`DXIcon\` - для иконок в заголовках и chevron
- \`useTransition\` composable - для анимации раскрытия/сворачивания
- \`useClassComposition\` composable - для стилей

### Используется в
- FAQ секции
- Настройки с категориями
- Раскрывающиеся списки
- Любые места, требующие организации контента в секции

## Внутренняя логика

### Структура элементов
Элементы передаются через массив объектов:
\`\`\`
[{ title: 'Title', content: 'Content', icon?: Icon }]
\`\`\`

Каждый элемент может содержать:
- \`title\` - заголовок секции (обязательно)
- \`content\` - содержимое секции (опционально, можно использовать слот)
- \`icon\` - иконка в заголовке (опционально)

### Режимы открытия
- **single** (по умолчанию): Только одна секция может быть открыта одновременно
- **multiple**: Несколько секций могут быть открыты одновременно

### Варианты оформления
- **default** (по умолчанию): Без дополнительного оформления
- **bordered**: Рамка вокруг всего аккордеона, скругление
- **separated**: Отступы между секциями

### Изначально открытые секции
Можно указать индексы изначально открытых секций через \`defaultOpen\` prop (массив индексов).

## Особенности

### Слоты
Для каждого элемента можно использовать именованный слот:
- \`item-0\` - для первого элемента
- \`item-1\` - для второго элемента
- И так далее

Это позволяет кастомизировать содержимое каждой секции.

### Анимация
Использует collapse transition для плавного раскрытия/сворачивания секций.

### Chevron
Каждая секция имеет иконку ChevronDownIcon справа, которая поворачивается при открытии.

### Доступность
- Использует \`aria-expanded\` для указания состояния секции
- Поддержка клавиатурной навигации
        `}}},argTypes:{variant:{control:{type:"select"},options:["default","bordered","separated"]}}},p=[{title:"What is DX Components?",content:"DX Components is a Vue 3 UI component library built with Tailwind CSS."},{title:"How to install?",content:"Run npm install dxd-style-code to add the library to your project."},{title:"Is it customizable?",content:"Yes, all components are fully customizable using Tailwind CSS classes."}],i={args:{items:p}},c={args:{items:p,variant:"bordered"}},d={args:{items:p,multiple:!0,defaultOpen:[0]}},u={args:{items:p,defaultOpen:[0,1]}};var S,D,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,w,x;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'bordered'
  }
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var O,X,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items,
    multiple: true,
    defaultOpen: [0]
  }
}`,...(T=(X=d.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var V,E,I;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items,
    defaultOpen: [0, 1]
  }
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ve=["Default","Bordered","Multiple","WithDefaultOpen"];export{c as Bordered,i as Default,d as Multiple,u as WithDefaultOpen,ve as __namedExportsOrder,fe as default};
