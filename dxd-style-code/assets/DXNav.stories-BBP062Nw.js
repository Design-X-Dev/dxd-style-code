import{_ as n}from"./DXNav-rdhJaqaA.js";import{_ as t}from"./DXLink-BApoi3ng.js";import{_ as A}from"./DXButton-DzgLKRkE.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";const $={title:"Atoms/DXNav",component:n,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXNav

Универсальный компонент для обертки навигационных элементов с автоматическим управлением accessibility.

## Назначение

DXNav - атомарный компонент для создания семантически правильных навигационных элементов.
Автоматически добавляет правильные \`aria-label\` атрибуты на основе типа навигации,
что улучшает accessibility и соответствие стандартам.

## Архитектура

### Используется в
- \`DXBreadcrumb\` - для хлебных крошек
- \`DXPagination\` - для пагинации
- \`DXMenu\` - для навигационных меню
- \`DXSidebarMenu\` - для боковых меню
- \`DXHeaderBar\` - для основной навигации в шапке
- Любые другие компоненты, требующие навигации

## Внутренняя логика

### Автоматические aria-label
Компонент автоматически добавляет \`aria-label\` на основе типа:
- \`breadcrumb\` → \`aria-label="Breadcrumb"\`
- \`pagination\` → \`aria-label="Pagination"\`
- \`menu\` → \`aria-label="Navigation menu"\`
- \`main\` → \`aria-label="Main navigation"\`
- \`custom\` → без автоматического label (требует \`ariaLabel\` prop)

### Приоритет aria-label
1. Если передан \`ariaLabel\` prop → используется он (переопределяет тип)
2. Если \`type !== 'custom'\` → используется автоматический label
3. Если \`type === 'custom'\` и нет \`ariaLabel\` → aria-label не добавляется

### Передача атрибутов
Все атрибуты (кроме \`class\` и \`aria-label\`) автоматически передаются через \`$attrs\`:
- HTML атрибуты (id, data-*, и т.д.)
- События (@click, @input, и т.д.)

## Особенности

### Типы навигации
- **breadcrumb**: Для хлебных крошек (показывает путь к текущей странице)
- **pagination**: Для пагинации (навигация по страницам)
- **menu**: Для навигационных меню (боковые панели, выпадающие меню)
- **main**: Для основной навигации (главное меню сайта)
- **custom**: Для кастомных случаев (требует явного \`ariaLabel\`)

### Accessibility
Компонент автоматически обеспечивает правильную семантику и accessibility:
- Семантический \`<nav>\` тег
- Правильные \`aria-label\` для screen readers
- Поддержка всех стандартных HTML атрибутов
- Совместимость с клавиатурной навигацией

## Ограничения

- Для \`custom\` типа рекомендуется всегда указывать \`ariaLabel\` для accessibility
- Компонент не добавляет стили - используйте \`class\` prop для стилизации
- Все атрибуты передаются как есть (кроме \`class\` и \`aria-label\`)
        `}}},argTypes:{type:{control:{type:"select"},options:["breadcrumb","pagination","menu","main","custom"],description:"Тип навигации",table:{type:{summary:"string"},defaultValue:{summary:"main"}}},ariaLabel:{control:{type:"text"},description:"Кастомный aria-label (переопределяет автоматический)",table:{type:{summary:"string"},defaultValue:{summary:"null"}}},class:{control:{type:"text"},description:"Дополнительные CSS классы",table:{type:{summary:"string | array | object"},defaultValue:{summary:"null"}}}}},e={args:{type:"main"},render:a=>({components:{DXNav:n,DXLink:t},setup(){return{args:a}},template:`
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
    `})},r={args:{type:"breadcrumb"},render:a=>({components:{DXNav:n,DXLink:t},setup(){return{args:a}},template:`
      <DXNav v-bind="args" class="flex items-center gap-2">
        <DXLink href="/">Home</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products">Products</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products/current" inactive>Current Page</DXLink>
      </DXNav>
    `})},s={args:{type:"pagination"},render:a=>({components:{DXNav:n,DXButton:A},setup(){return{args:a}},template:`
      <DXNav v-bind="args" class="flex items-center gap-1">
        <DXButton variant="ghost" size="sm">Previous</DXButton>
        <DXButton variant="primary" size="sm">1</DXButton>
        <DXButton variant="ghost" size="sm">2</DXButton>
        <DXButton variant="ghost" size="sm">3</DXButton>
        <DXButton variant="ghost" size="sm">Next</DXButton>
      </DXNav>
    `})},i={args:{type:"menu"},render:a=>({components:{DXNav:n,DXLink:t},setup(){return{args:a}},template:`
      <DXNav v-bind="args" class="flex flex-col gap-1">
        <DXLink href="/dashboard" variant="ghost">Dashboard</DXLink>
        <DXLink href="/settings" variant="ghost">Settings</DXLink>
        <DXLink href="/profile" variant="ghost">Profile</DXLink>
      </DXNav>
    `})},o={args:{type:"custom",ariaLabel:"Site navigation"},render:a=>({components:{DXNav:n,DXLink:t},setup(){return{args:a}},template:`
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Используется кастомный aria-label: "Site navigation"
      </p>
    `})},u={args:{type:"main"},render:a=>({components:{DXNav:n,DXLink:t},setup(){return{args:a}},template:`
      <DXNav 
        v-bind="args" 
        id="main-nav"
        class="flex gap-4 p-4 bg-slate-50 rounded-lg"
        data-testid="navigation"
      >
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Все атрибуты (id, data-testid, class) передаются корректно
      </p>
    `})};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: 'main'
  },
  render: args => ({
    components: {
      DXNav,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
    \`
  })
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,D,X;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'breadcrumb'
  },
  render: args => ({
    components: {
      DXNav,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav v-bind="args" class="flex items-center gap-2">
        <DXLink href="/">Home</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products">Products</DXLink>
        <span class="text-slate-400">/</span>
        <DXLink href="/products/current" inactive>Current Page</DXLink>
      </DXNav>
    \`
  })
}`,...(X=(D=r.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var g,d,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'pagination'
  },
  render: args => ({
    components: {
      DXNav,
      DXButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav v-bind="args" class="flex items-center gap-1">
        <DXButton variant="ghost" size="sm">Previous</DXButton>
        <DXButton variant="primary" size="sm">1</DXButton>
        <DXButton variant="ghost" size="sm">2</DXButton>
        <DXButton variant="ghost" size="sm">3</DXButton>
        <DXButton variant="ghost" size="sm">Next</DXButton>
      </DXNav>
    \`
  })
}`,...(v=(d=s.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var b,L,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'menu'
  },
  render: args => ({
    components: {
      DXNav,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav v-bind="args" class="flex flex-col gap-1">
        <DXLink href="/dashboard" variant="ghost">Dashboard</DXLink>
        <DXLink href="/settings" variant="ghost">Settings</DXLink>
        <DXLink href="/profile" variant="ghost">Profile</DXLink>
      </DXNav>
    \`
  })
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var f,h,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'custom',
    ariaLabel: 'Site navigation'
  },
  render: args => ({
    components: {
      DXNav,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav v-bind="args" class="flex gap-4">
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Используется кастомный aria-label: "Site navigation"
      </p>
    \`
  })
}`,...(N=(h=o.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var y,x,B;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'main'
  },
  render: args => ({
    components: {
      DXNav,
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXNav 
        v-bind="args" 
        id="main-nav"
        class="flex gap-4 p-4 bg-slate-50 rounded-lg"
        data-testid="navigation"
      >
        <DXLink href="/">Home</DXLink>
        <DXLink href="/about">About</DXLink>
        <DXLink href="/contact">Contact</DXLink>
      </DXNav>
      <p class="text-sm text-slate-600 mt-4">
        Все атрибуты (id, data-testid, class) передаются корректно
      </p>
    \`
  })
}`,...(B=(x=u.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const W=["Default","Breadcrumb","Pagination","Menu","CustomAriaLabel","WithAttributes"];export{r as Breadcrumb,o as CustomAriaLabel,e as Default,i as Menu,s as Pagination,u as WithAttributes,W as __namedExportsOrder,$ as default};
