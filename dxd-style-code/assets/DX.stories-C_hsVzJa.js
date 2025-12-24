import{_ as n}from"./DX-C5LZz0an.js";import{r as $}from"./vue.esm-bundler-C1fUoNF-.js";const G={title:"Atoms/DX",component:n,tags:["autodocs","category:utility"],parameters:{docs:{description:{component:`
Универсальный polymorphic компонент, который принимает HTML тег элемента, все его свойства, методы и события, и возвращает его обратно.

## Назначение

DX - базовый компонент для создания polymorphic компонентов. Он позволяет динамически выбирать HTML тег элемента, сохраняя при этом все его нативные свойства и события.

## Архитектура

### Используется в
- Как базовый компонент для других DX-компонентов
- Как standalone компонент для гибкого рендеринга HTML элементов
- Для создания адаптивных компонентов, которые могут быть разными HTML элементами

## Внутренняя логика

### Динамический рендеринг
Компонент использует \`<component :is="componentTag">\` для динамического выбора HTML тега:
- Если указан \`as\` prop → использует его (HTML тег)
- По умолчанию → использует \`div\`

### Пропуск атрибутов
Все атрибуты (кроме \`as\` и \`class\`) автоматически передаются через \`$attrs\`:
- HTML атрибуты (id, data-*, aria-*, и т.д.)
- События (@click, @input, и т.д.)

### Поддержка slots
Компонент полностью поддерживает все slots:
- Default slot
- Named slots
- Scoped slots

## Особенности

- **Минимальный overhead** - компонент практически не добавляет дополнительной логики
- **Полная совместимость** - все свойства и события работают как с нативными HTML элементами
- **Гибкость** - может быть любым HTML элементом (div, span, button, a, nav, header, section, article и т.д.)
        `}}},argTypes:{as:{control:"text",description:"HTML тег элемента (div, span, button, a, nav, header, section, article и т.д.)"},class:{control:"text",description:"Дополнительные CSS классы"}}},s={args:{as:"div"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">Default DX component as div</DX>'})},a={args:{as:"button"},render:e=>({components:{DX:n},setup(){return{args:e,handleClick:()=>{alert("Button clicked!")}}},template:'<DX v-bind="args" @click="handleClick">Click me</DX>'})},r={args:{as:"a",href:"https://example.com",target:"_blank"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">External Link</DX>'})},o={args:{as:"div",class:"p-4 bg-blue-100 rounded-lg"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">Styled div with custom classes</DX>'})},l={args:{as:"nav"},render:e=>({components:{DX:n},setup(){return{args:e}},template:`
      <DX v-bind="args" class="flex gap-4">
        <DX as="a" href="#home">Home</DX>
        <DX as="a" href="#about">About</DX>
        <DX as="a" href="#contact">Contact</DX>
      </DX>
    `})},c={args:{as:"button"},render:e=>({components:{DX:n},setup(){const t=$(0);return{args:e,clickCount:t,handleClick:()=>{t.value++},handleMouseEnter:()=>{console.log("Mouse entered")}}},template:`
      <div class="space-y-4">
        <DX v-bind="args" @click="handleClick" @mouseenter="handleMouseEnter">
          Click me (clicked {{ clickCount }} times)
        </DX>
        <p class="text-sm text-slate-600">Check console for mouseenter events</p>
      </div>
    `})},d={args:{as:"div"},render:e=>({components:{DX:n},setup(){return{args:e}},template:`
      <DX 
        v-bind="args" 
        id="my-element"
        data-testid="dx-component"
        aria-label="Test element"
        role="region"
        class="p-4 border border-slate-200 rounded"
      >
        Element with custom attributes (id, data-testid, aria-label, role)
      </DX>
    `})},i={render:()=>({components:{DX:n},setup(){const e=$({name:"",email:""});return{formData:e,handleSubmit:p=>{p.preventDefault(),alert(`Form submitted: ${JSON.stringify(e.value)}`)}}},template:`
      <DX as="form" @submit="handleSubmit" class="space-y-4 p-4 border border-slate-200 rounded">
        <div>
          <DX as="label" for="name" class="block text-sm font-medium mb-1">Name</DX>
          <DX as="input" 
            id="name" 
            type="text" 
            v-model="formData.name"
            class="w-full px-3 py-2 border border-slate-300 rounded"
            required
          />
        </div>
        <div>
          <DX as="label" for="email" class="block text-sm font-medium mb-1">Email</DX>
          <DX as="input" 
            id="email" 
            type="email" 
            v-model="formData.email"
            class="w-full px-3 py-2 border border-slate-300 rounded"
            required
          />
        </div>
        <DX as="button" type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </DX>
      </DX>
    `})},m={render:()=>({components:{DX:n},template:`
      <div class="space-y-4">
        <DX as="header" class="p-4 bg-slate-100 rounded">
          <DX as="h1" class="text-2xl font-bold">Header</DX>
        </DX>
        
        <DX as="main" class="p-4 bg-white border border-slate-200 rounded">
          <DX as="article" class="mb-4">
            <DX as="h2" class="text-xl font-semibold mb-2">Article Title</DX>
            <DX as="p" class="text-slate-700">Article content goes here...</DX>
          </DX>
          
          <DX as="section" class="mt-4 pt-4 border-t border-slate-200">
            <DX as="h3" class="text-lg font-semibold mb-2">Section Title</DX>
            <DX as="p" class="text-slate-700">Section content...</DX>
          </DX>
        </DX>
        
        <DX as="footer" class="p-4 bg-slate-100 rounded text-center text-sm text-slate-600">
          Footer content
        </DX>
      </div>
    `})};var u,D,X;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      return {
        args
      };
    },
    template: '<DX v-bind="args">Default DX component as div</DX>'
  })
}`,...(X=(D=s.parameters)==null?void 0:D.docs)==null?void 0:X.source}}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      const handleClick = () => {
        alert('Button clicked!');
      };
      return {
        args,
        handleClick
      };
    },
    template: '<DX v-bind="args" @click="handleClick">Click me</DX>'
  })
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    as: 'a',
    href: 'https://example.com',
    target: '_blank'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      return {
        args
      };
    },
    template: '<DX v-bind="args">External Link</DX>'
  })
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,C,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    as: 'div',
    class: 'p-4 bg-blue-100 rounded-lg'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      return {
        args
      };
    },
    template: '<DX v-bind="args">Styled div with custom classes</DX>'
  })
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,A,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    as: 'nav'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DX v-bind="args" class="flex gap-4">
        <DX as="a" href="#home">Home</DX>
        <DX as="a" href="#about">About</DX>
        <DX as="a" href="#contact">Contact</DX>
      </DX>
    \`
  })
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,T,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    as: 'button'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      const clickCount = ref(0);
      const handleClick = () => {
        clickCount.value++;
      };
      const handleMouseEnter = () => {
        console.log('Mouse entered');
      };
      return {
        args,
        clickCount,
        handleClick,
        handleMouseEnter
      };
    },
    template: \`
      <div class="space-y-4">
        <DX v-bind="args" @click="handleClick" @mouseenter="handleMouseEnter">
          Click me (clicked {{ clickCount }} times)
        </DX>
        <p class="text-sm text-slate-600">Check console for mouseenter events</p>
      </div>
    \`
  })
}`,...(H=(T=c.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var L,w,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    as: 'div'
  },
  render: args => ({
    components: {
      DX
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DX 
        v-bind="args" 
        id="my-element"
        data-testid="dx-component"
        aria-label="Test element"
        role="region"
        class="p-4 border border-slate-200 rounded"
      >
        Element with custom attributes (id, data-testid, aria-label, role)
      </DX>
    \`
  })
}`,...(_=(w=d.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var N,F,W;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DX
    },
    setup() {
      const formData = ref({
        name: '',
        email: ''
      });
      const handleSubmit = e => {
        e.preventDefault();
        alert(\`Form submitted: \${JSON.stringify(formData.value)}\`);
      };
      return {
        formData,
        handleSubmit
      };
    },
    template: \`
      <DX as="form" @submit="handleSubmit" class="space-y-4 p-4 border border-slate-200 rounded">
        <div>
          <DX as="label" for="name" class="block text-sm font-medium mb-1">Name</DX>
          <DX as="input" 
            id="name" 
            type="text" 
            v-model="formData.name"
            class="w-full px-3 py-2 border border-slate-300 rounded"
            required
          />
        </div>
        <div>
          <DX as="label" for="email" class="block text-sm font-medium mb-1">Email</DX>
          <DX as="input" 
            id="email" 
            type="email" 
            v-model="formData.email"
            class="w-full px-3 py-2 border border-slate-300 rounded"
            required
          />
        </div>
        <DX as="button" type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit
        </DX>
      </DX>
    \`
  })
}`,...(W=(F=i.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var q,B,O;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DX
    },
    template: \`
      <div class="space-y-4">
        <DX as="header" class="p-4 bg-slate-100 rounded">
          <DX as="h1" class="text-2xl font-bold">Header</DX>
        </DX>
        
        <DX as="main" class="p-4 bg-white border border-slate-200 rounded">
          <DX as="article" class="mb-4">
            <DX as="h2" class="text-xl font-semibold mb-2">Article Title</DX>
            <DX as="p" class="text-slate-700">Article content goes here...</DX>
          </DX>
          
          <DX as="section" class="mt-4 pt-4 border-t border-slate-200">
            <DX as="h3" class="text-lg font-semibold mb-2">Section Title</DX>
            <DX as="p" class="text-slate-700">Section content...</DX>
          </DX>
        </DX>
        
        <DX as="footer" class="p-4 bg-slate-100 rounded text-center text-sm text-slate-600">
          Footer content
        </DX>
      </div>
    \`
  })
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const I=["Default","AsButton","AsLink","WithCustomClass","AsNav","WithEvents","WithAttributes","AsFormElement","AsSemanticElements"];export{a as AsButton,i as AsFormElement,r as AsLink,l as AsNav,m as AsSemanticElements,s as Default,d as WithAttributes,o as WithCustomClass,c as WithEvents,I as __namedExportsOrder,G as default};
