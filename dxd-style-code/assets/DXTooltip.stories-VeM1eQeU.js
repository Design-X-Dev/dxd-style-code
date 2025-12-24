import{_ as t}from"./DXTooltip-Dp5bmrPy.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useAnimation-ByVAdqmf.js";const O={title:"Atoms/DXTooltip",component:t,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXTooltip

Компонент подсказки, появляющейся при наведении или фокусе на элементе.

## Назначение

DXTooltip предоставляет стандартизированный способ отображения дополнительной информации
при наведении или фокусе на элементе. Компонент поддерживает различные позиции, цвета, размеры
и анимации появления.

## Архитектура

### Использует
- \`DXIcon\` - для иконок (если нужно)
- \`useSize\` composable - для размеров текста
- \`useVariantTooltip\` composable - для цветовых вариантов
- \`useTooltipPosition\` composable - для позиционирования
- \`useAnimationTransition\` composable - для анимаций

### Используется в
- Подсказки для кнопок и ссылок
- Дополнительная информация об элементах
- Пояснения к иконкам
- Любые места, требующие контекстной помощи

## Внутренняя логика

### Позиции
Поддерживает 4 позиции:
- **top** (по умолчанию) - сверху
- **bottom** - снизу
- **left** - слева
- **right** - справа

### Цвета
Поддерживает 7 цветовых вариантов:
- **dark** (по умолчанию) - темный фон
- **light** - светлый фон
- **primary** - основной цвет
- **success** - зеленый цвет
- **danger** - красный цвет
- **warning** - желтый цвет
- **info** - синий цвет

### Размеры
Поддерживает 5 размеров текста:
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой
- **xl** - очень большой

### Анимации
Поддерживает 7 типов анимаций:
- **fade** - плавное появление
- **fade-scale** - появление с масштабированием
- **slide-up** - выезд снизу
- **slide-down** - выезд сверху
- **slide-left** - выезд справа
- **slide-right** - выезд слева
- **tooltip-custom** (по умолчанию) - кастомная анимация

### Задержка
Поддерживает настраиваемую задержку перед показом (по умолчанию 100ms).

## Особенности

### Триггеры
Tooltip появляется при:
- Наведении мыши (\`mouseenter\`)
- Фокусе на элементе (\`focus\`)

Исчезает при:
- Уходе мыши (\`mouseleave\`)
- Потере фокуса (\`blur\`)

### Стрелка
Автоматически добавляется стрелка, указывающая на элемент, в зависимости от позиции.

### Максимальная ширина
Поддерживает настраиваемую максимальную ширину (по умолчанию 200px).

### Слоты
- **default** - элемент, на который наводится курсор
- **content** - кастомный контент tooltip (если нужно)

### Доступность
- Использует \`role="tooltip"\`
- Правильные ARIA атрибуты
        `}}},argTypes:{position:{control:{type:"select"},options:["top","bottom","left","right"]},color:{control:{type:"select"},options:["dark","light","primary","success","danger","warning","info"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},animation:{control:{type:"select"},options:["fade","fade-scale","slide-up","slide-down","slide-left","slide-right","tooltip-custom"]}}},o={args:{content:"This is a tooltip"},render:c=>({components:{DXTooltip:t},setup(){return{args:c}},template:'<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>'})},n={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    `})},e={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Dark tooltip" color="dark">
          <button class="px-4 py-2 bg-slate-100 rounded">Dark</button>
        </DXTooltip>
        <DXTooltip content="Light tooltip" color="light">
          <button class="px-4 py-2 bg-slate-800 text-white rounded">Light</button>
        </DXTooltip>
        <DXTooltip content="Primary tooltip" color="primary">
          <button class="px-4 py-2 bg-slate-100 rounded">Primary</button>
        </DXTooltip>
        <DXTooltip content="Info tooltip" color="info">
          <button class="px-4 py-2 bg-slate-100 rounded">Info</button>
        </DXTooltip>
        <DXTooltip content="Success tooltip" color="success">
          <button class="px-4 py-2 bg-slate-100 rounded">Success</button>
        </DXTooltip>
        <DXTooltip content="Warning tooltip" color="warning">
          <button class="px-4 py-2 bg-slate-100 rounded">Warning</button>
        </DXTooltip>
        <DXTooltip content="Danger tooltip" color="danger">
          <button class="px-4 py-2 bg-slate-100 rounded">Danger</button>
        </DXTooltip>
      </div>
    `})},s={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-4 justify-center py-12 items-center">
        <DXTooltip content="Extra small tooltip" size="xs">
          <button class="px-4 py-2 bg-slate-100 rounded">XS</button>
        </DXTooltip>
        <DXTooltip content="Small tooltip" size="sm">
          <button class="px-4 py-2 bg-slate-100 rounded">SM</button>
        </DXTooltip>
        <DXTooltip content="Medium tooltip" size="md">
          <button class="px-4 py-2 bg-slate-100 rounded">MD</button>
        </DXTooltip>
        <DXTooltip content="Large tooltip" size="lg">
          <button class="px-4 py-2 bg-slate-100 rounded">LG</button>
        </DXTooltip>
        <DXTooltip content="Extra large tooltip" size="xl">
          <button class="px-4 py-2 bg-slate-100 rounded">XL</button>
        </DXTooltip>
      </div>
    `})},i={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Fade animation" animation="fade">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade</button>
        </DXTooltip>
        <DXTooltip content="Fade scale animation" animation="fade-scale">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade Scale</button>
        </DXTooltip>
        <DXTooltip content="Slide up animation" animation="slide-up">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Up</button>
        </DXTooltip>
        <DXTooltip content="Slide down animation" animation="slide-down">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Down</button>
        </DXTooltip>
        <DXTooltip content="Slide left animation" animation="slide-left">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Left</button>
        </DXTooltip>
        <DXTooltip content="Slide right animation" animation="slide-right">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Right</button>
        </DXTooltip>
        <DXTooltip content="Custom tooltip animation" animation="tooltip-custom">
          <button class="px-4 py-2 bg-slate-100 rounded">Custom</button>
        </DXTooltip>
      </div>
    `})},l={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip>
          <template #content>
            <div class="flex items-center gap-2">
              <span>Custom content with</span>
              <span class="font-semibold">bold text</span>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Slot Content</button>
        </DXTooltip>
        <DXTooltip color="info">
          <template #content>
            <div>
              <div class="font-semibold mb-1">Rich Content</div>
              <div class="text-xs opacity-90">With multiple lines and formatting</div>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Rich Slot</button>
        </DXTooltip>
      </div>
    `})},p={render:()=>({components:{DXTooltip:t},template:`
      <div class="flex gap-4 justify-center py-12 flex-wrap items-center">
        <DXTooltip content="Narrow tooltip with limited width" maxWidth="120px">
          <button class="px-4 py-2 bg-slate-100 rounded">120px</button>
        </DXTooltip>
        <DXTooltip content="Medium width tooltip with more space for content" maxWidth="200px">
          <button class="px-4 py-2 bg-slate-100 rounded">200px</button>
        </DXTooltip>
        <DXTooltip content="Wide tooltip with even more space for longer text content that might wrap to multiple lines" maxWidth="300px">
          <button class="px-4 py-2 bg-slate-100 rounded">300px</button>
        </DXTooltip>
      </div>
    `})},a={render:()=>({components:{DXTooltip:t},template:`
      <div class="space-y-8 py-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Color + Size Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Success large" color="success" size="lg">
              <button class="px-4 py-2 bg-slate-100 rounded">Success LG</button>
            </DXTooltip>
            <DXTooltip content="Warning small" color="warning" size="sm">
              <button class="px-4 py-2 bg-slate-100 rounded">Warning SM</button>
            </DXTooltip>
            <DXTooltip content="Danger extra small" color="danger" size="xs">
              <button class="px-4 py-2 bg-slate-100 rounded">Danger XS</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Position + Color Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Info top" position="top" color="info">
              <button class="px-4 py-2 bg-slate-100 rounded">Top Info</button>
            </DXTooltip>
            <DXTooltip content="Success bottom" position="bottom" color="success">
              <button class="px-4 py-2 bg-slate-100 rounded">Bottom Success</button>
            </DXTooltip>
            <DXTooltip content="Warning left" position="left" color="warning">
              <button class="px-4 py-2 bg-slate-100 rounded">Left Warning</button>
            </DXTooltip>
            <DXTooltip content="Danger right" position="right" color="danger">
              <button class="px-4 py-2 bg-slate-100 rounded">Right Danger</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Full Featured Example</h3>
          <div class="flex justify-center">
            <DXTooltip 
              content="This is a fully customized tooltip with all features combined: large size, success color, and custom animation" 
              size="lg" 
              color="success" 
              animation="fade-scale"
              maxWidth="250px"
            >
              <button class="px-4 py-2 bg-slate-100 rounded">Full Featured</button>
            </DXTooltip>
          </div>
        </div>
      </div>
    `})},r={args:{content:"Light theme tooltip",color:"light"},render:c=>({components:{DXTooltip:t},setup(){return{args:c}},template:'<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>'})};var d,u,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip'
  },
  render: args => ({
    components: {
      DXTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-100 rounded">Hover me</button></DXTooltip>'
  })
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var m,g,D;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-8 justify-center py-12">
        <DXTooltip content="Top tooltip" position="top">
          <button class="px-4 py-2 bg-slate-100 rounded">Top</button>
        </DXTooltip>
        <DXTooltip content="Bottom tooltip" position="bottom">
          <button class="px-4 py-2 bg-slate-100 rounded">Bottom</button>
        </DXTooltip>
        <DXTooltip content="Left tooltip" position="left">
          <button class="px-4 py-2 bg-slate-100 rounded">Left</button>
        </DXTooltip>
        <DXTooltip content="Right tooltip" position="right">
          <button class="px-4 py-2 bg-slate-100 rounded">Right</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(D=(g=n.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var T,X,x;e.parameters={...e.parameters,docs:{...(T=e.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Dark tooltip" color="dark">
          <button class="px-4 py-2 bg-slate-100 rounded">Dark</button>
        </DXTooltip>
        <DXTooltip content="Light tooltip" color="light">
          <button class="px-4 py-2 bg-slate-800 text-white rounded">Light</button>
        </DXTooltip>
        <DXTooltip content="Primary tooltip" color="primary">
          <button class="px-4 py-2 bg-slate-100 rounded">Primary</button>
        </DXTooltip>
        <DXTooltip content="Info tooltip" color="info">
          <button class="px-4 py-2 bg-slate-100 rounded">Info</button>
        </DXTooltip>
        <DXTooltip content="Success tooltip" color="success">
          <button class="px-4 py-2 bg-slate-100 rounded">Success</button>
        </DXTooltip>
        <DXTooltip content="Warning tooltip" color="warning">
          <button class="px-4 py-2 bg-slate-100 rounded">Warning</button>
        </DXTooltip>
        <DXTooltip content="Danger tooltip" color="danger">
          <button class="px-4 py-2 bg-slate-100 rounded">Danger</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(x=(X=e.parameters)==null?void 0:X.docs)==null?void 0:x.source}}};var y,f,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 items-center">
        <DXTooltip content="Extra small tooltip" size="xs">
          <button class="px-4 py-2 bg-slate-100 rounded">XS</button>
        </DXTooltip>
        <DXTooltip content="Small tooltip" size="sm">
          <button class="px-4 py-2 bg-slate-100 rounded">SM</button>
        </DXTooltip>
        <DXTooltip content="Medium tooltip" size="md">
          <button class="px-4 py-2 bg-slate-100 rounded">MD</button>
        </DXTooltip>
        <DXTooltip content="Large tooltip" size="lg">
          <button class="px-4 py-2 bg-slate-100 rounded">LG</button>
        </DXTooltip>
        <DXTooltip content="Extra large tooltip" size="xl">
          <button class="px-4 py-2 bg-slate-100 rounded">XL</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,S,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip content="Fade animation" animation="fade">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade</button>
        </DXTooltip>
        <DXTooltip content="Fade scale animation" animation="fade-scale">
          <button class="px-4 py-2 bg-slate-100 rounded">Fade Scale</button>
        </DXTooltip>
        <DXTooltip content="Slide up animation" animation="slide-up">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Up</button>
        </DXTooltip>
        <DXTooltip content="Slide down animation" animation="slide-down">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Down</button>
        </DXTooltip>
        <DXTooltip content="Slide left animation" animation="slide-left">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Left</button>
        </DXTooltip>
        <DXTooltip content="Slide right animation" animation="slide-right">
          <button class="px-4 py-2 bg-slate-100 rounded">Slide Right</button>
        </DXTooltip>
        <DXTooltip content="Custom tooltip animation" animation="tooltip-custom">
          <button class="px-4 py-2 bg-slate-100 rounded">Custom</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(w=(S=i.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,W,C;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap">
        <DXTooltip>
          <template #content>
            <div class="flex items-center gap-2">
              <span>Custom content with</span>
              <span class="font-semibold">bold text</span>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Slot Content</button>
        </DXTooltip>
        <DXTooltip color="info">
          <template #content>
            <div>
              <div class="font-semibold mb-1">Rich Content</div>
              <div class="text-xs opacity-90">With multiple lines and formatting</div>
            </div>
          </template>
          <button class="px-4 py-2 bg-slate-100 rounded">Rich Slot</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var L,j,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="flex gap-4 justify-center py-12 flex-wrap items-center">
        <DXTooltip content="Narrow tooltip with limited width" maxWidth="120px">
          <button class="px-4 py-2 bg-slate-100 rounded">120px</button>
        </DXTooltip>
        <DXTooltip content="Medium width tooltip with more space for content" maxWidth="200px">
          <button class="px-4 py-2 bg-slate-100 rounded">200px</button>
        </DXTooltip>
        <DXTooltip content="Wide tooltip with even more space for longer text content that might wrap to multiple lines" maxWidth="300px">
          <button class="px-4 py-2 bg-slate-100 rounded">300px</button>
        </DXTooltip>
      </div>
    \`
  })
}`,...(F=(j=p.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var R,M,I;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTooltip
    },
    template: \`
      <div class="space-y-8 py-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Color + Size Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Success large" color="success" size="lg">
              <button class="px-4 py-2 bg-slate-100 rounded">Success LG</button>
            </DXTooltip>
            <DXTooltip content="Warning small" color="warning" size="sm">
              <button class="px-4 py-2 bg-slate-100 rounded">Warning SM</button>
            </DXTooltip>
            <DXTooltip content="Danger extra small" color="danger" size="xs">
              <button class="px-4 py-2 bg-slate-100 rounded">Danger XS</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Position + Color Combinations</h3>
          <div class="flex gap-4 justify-center flex-wrap">
            <DXTooltip content="Info top" position="top" color="info">
              <button class="px-4 py-2 bg-slate-100 rounded">Top Info</button>
            </DXTooltip>
            <DXTooltip content="Success bottom" position="bottom" color="success">
              <button class="px-4 py-2 bg-slate-100 rounded">Bottom Success</button>
            </DXTooltip>
            <DXTooltip content="Warning left" position="left" color="warning">
              <button class="px-4 py-2 bg-slate-100 rounded">Left Warning</button>
            </DXTooltip>
            <DXTooltip content="Danger right" position="right" color="danger">
              <button class="px-4 py-2 bg-slate-100 rounded">Right Danger</button>
            </DXTooltip>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-4">Full Featured Example</h3>
          <div class="flex justify-center">
            <DXTooltip 
              content="This is a fully customized tooltip with all features combined: large size, success color, and custom animation" 
              size="lg" 
              color="success" 
              animation="fade-scale"
              maxWidth="250px"
            >
              <button class="px-4 py-2 bg-slate-100 rounded">Full Featured</button>
            </DXTooltip>
          </div>
        </div>
      </div>
    \`
  })
}`,...(I=(M=a.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var k,P,E;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    content: 'Light theme tooltip',
    color: 'light'
  },
  render: args => ({
    components: {
      DXTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXTooltip v-bind="args"><button class="px-4 py-2 bg-slate-800 text-white rounded">Hover me</button></DXTooltip>'
  })
}`,...(E=(P=r.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const V=["Default","Positions","Colors","Sizes","Animations","WithSlotContent","MaxWidth","Combinations","LightTheme"];export{i as Animations,e as Colors,a as Combinations,o as Default,r as LightTheme,p as MaxWidth,n as Positions,s as Sizes,l as WithSlotContent,V as __namedExportsOrder,O as default};
