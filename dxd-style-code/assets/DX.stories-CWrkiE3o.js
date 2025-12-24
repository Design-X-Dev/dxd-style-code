import{N as U,c as D,e as z,o as K,g as Q,t as R,p as Y,m as Z,r as I}from"./vue.esm-bundler-CzLKT_w4.js";const n={__name:"DX",props:{as:{type:String,default:"div"},class:{type:[String,Array,Object],default:null}},setup(e){const t=e,a=U(),X=D(()=>{const{class:s,...b}=a;return b}),J=D(()=>t.as||"div"),G=D(()=>{const s=[];return t.class&&s.push(t.class),a.class&&s.push(a.class),s.length>1?s:s[0]||null});return(s,b)=>(K(),z(Y(J.value),R({class:G.value,"data-component":"DX"},X.value),{default:Q(()=>[Z(s.$slots,"default")]),_:3},16,["class"]))}};n.__docgenInfo={exportName:"default",displayName:"DX",description:"",tags:{},props:[{name:"as",description:"HTML тег элемента (div, span, button, a, nav, header, section, article и т.д.)",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"class",description:"Дополнительные CSS классы",type:{name:"string|array|object"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DX/DX.vue"]};const ne={title:"Atoms/DX",component:n,tags:["autodocs","category:utility"],parameters:{docs:{description:{component:`
# DX

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
        `}}},argTypes:{as:{control:"text",description:"HTML тег элемента (div, span, button, a, nav, header, section, article и т.д.)"},class:{control:"text",description:"Дополнительные CSS классы"}}},r={args:{as:"div"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">Default DX component as div</DX>'})},o={args:{as:"button"},render:e=>({components:{DX:n},setup(){return{args:e,handleClick:()=>{alert("Button clicked!")}}},template:'<DX v-bind="args" @click="handleClick">Click me</DX>'})},l={args:{as:"a",href:"https://example.com",target:"_blank"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">External Link</DX>'})},c={args:{as:"div",class:"p-4 bg-blue-100 rounded-lg"},render:e=>({components:{DX:n},setup(){return{args:e}},template:'<DX v-bind="args">Styled div with custom classes</DX>'})},d={args:{as:"nav"},render:e=>({components:{DX:n},setup(){return{args:e}},template:`
      <DX v-bind="args" class="flex gap-4">
        <DX as="a" href="#home">Home</DX>
        <DX as="a" href="#about">About</DX>
        <DX as="a" href="#contact">Contact</DX>
      </DX>
    `})},i={args:{as:"button"},render:e=>({components:{DX:n},setup(){const t=I(0);return{args:e,clickCount:t,handleClick:()=>{t.value++},handleMouseEnter:()=>{console.log("Mouse entered")}}},template:`
      <div class="space-y-4">
        <DX v-bind="args" @click="handleClick" @mouseenter="handleMouseEnter">
          Click me (clicked {{ clickCount }} times)
        </DX>
        <p class="text-sm text-slate-600">Check console for mouseenter events</p>
      </div>
    `})},m={args:{as:"div"},render:e=>({components:{DX:n},setup(){return{args:e}},template:`
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
    `})},u={render:()=>({components:{DX:n},setup(){const e=I({name:"",email:""});return{formData:e,handleSubmit:a=>{a.preventDefault(),alert(`Form submitted: ${JSON.stringify(e.value)}`)}}},template:`
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
    `})},p={render:()=>({components:{DX:n},template:`
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
    `})};var g,v,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,x,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(x=o.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,S,C;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var E,A,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var M,_,L;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var H,w,N;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var F,B,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var O,q,V;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var $,j,P;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(j=p.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const te=["Default","AsButton","AsLink","WithCustomClass","AsNav","WithEvents","WithAttributes","AsFormElement","AsSemanticElements"];export{o as AsButton,u as AsFormElement,l as AsLink,d as AsNav,p as AsSemanticElements,r as Default,m as WithAttributes,c as WithCustomClass,i as WithEvents,te as __namedExportsOrder,ne as default};
