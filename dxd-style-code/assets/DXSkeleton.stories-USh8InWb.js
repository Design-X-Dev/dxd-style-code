import{_ as e}from"./DXSkeleton-Bdkkus-3.js";import"./vue.esm-bundler-C1fUoNF-.js";const w={title:"Atoms/DXSkeleton",component:e,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXSkeleton

Компонент скелетона для отображения placeholder контента во время загрузки.

## Назначение

DXSkeleton предоставляет стандартизированный способ отображения placeholder контента
во время загрузки данных. Компонент использует анимацию пульсации для визуального
указания на загрузку.

## Архитектура

### Использует
- CSS анимация \`animate-pulse\` - для эффекта пульсации

### Используется в
- Карточки товаров при загрузке
- Списки элементов при загрузке
- Профили пользователей при загрузке
- Любые места, требующие placeholder во время загрузки

## Внутренняя логика

### Визуальное оформление
- Серый фон (\`bg-slate-200\`)
- Анимация пульсации (\`animate-pulse\`)
- Настраиваемые размеры через \`width\` и \`height\` props
- Настраиваемое скругление через \`rounded\` prop

### Размеры
Размеры настраиваются через props:
- \`width\` - ширина (по умолчанию "100%")
- \`height\` - высота (по умолчанию "1rem")
- \`rounded\` - скругление (по умолчанию "rounded-md")

## Особенности

### Гибкость
Компонент полностью настраивается через props и CSS классы:
- Можно задать любые размеры
- Можно задать любую форму (круг, квадрат, прямоугольник)
- Можно комбинировать несколько скелетонов для создания сложных placeholder

### Примеры использования
- **Текст**: \`<DXSkeleton class="h-4 w-48" />\`
- **Круг**: \`<DXSkeleton class="h-12 w-12 rounded-full" />\`
- **Карточка**: Комбинация нескольких скелетонов

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов.
        `}}}},n={render:()=>({components:{DXSkeleton:e},template:'<DXSkeleton class="h-4 w-48" />'})},s={render:()=>({components:{DXSkeleton:e},template:'<DXSkeleton class="h-12 w-12 rounded-full" />'})},o={render:()=>({components:{DXSkeleton:e},template:`
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    `})},r={render:()=>({components:{DXSkeleton:e},template:`
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    `})};var t,a,l;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: '<DXSkeleton class="h-4 w-48" />'
  })
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: '<DXSkeleton class="h-12 w-12 rounded-full" />'
  })
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,S,i;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: \`
      <div class="space-y-3 p-4 border rounded-xl">
        <DXSkeleton class="h-4 w-3/4" />
        <DXSkeleton class="h-4 w-full" />
        <DXSkeleton class="h-4 w-1/2" />
      </div>
    \`
  })
}`,...(i=(S=o.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var u,D,k;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSkeleton
    },
    template: \`
      <div class="flex items-center gap-3">
        <DXSkeleton class="h-10 w-10 rounded-full" />
        <div class="space-y-2">
          <DXSkeleton class="h-4 w-24" />
          <DXSkeleton class="h-3 w-32" />
        </div>
      </div>
    \`
  })
}`,...(k=(D=r.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const f=["Default","Circle","Card","Avatar"];export{r as Avatar,o as Card,s as Circle,n as Default,f as __namedExportsOrder,w as default};
