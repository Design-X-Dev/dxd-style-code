import{c as R,A as P,w as U,a as Y,m as j,l as q,H as z,o as H,r as f}from"./vue.esm-bundler-CzLKT_w4.js";import{u as J}from"./useClassComposition-Dym2pzZ_.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as a}from"./DXCard-BX01pIOu.js";import{_ as Q}from"./DXButton-ChBdj9Dq.js";import"./DXList-gfCNtwfp.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const Z=["data-direction","data-transition"],M={__name:"DXStaggeredAnimation",props:{delay:{type:Number,default:100},direction:{type:String,default:"top-to-bottom",validator:t=>["top-to-bottom","left-to-right","right-to-left","bottom-to-top"].includes(t)},transition:{type:String,default:"fade",validator:t=>["fade","fade-slide","scale"].includes(t)},duration:{type:Number,default:300},animateOnMount:{type:Boolean,default:!0}},emits:["animation-complete"],setup(t,{emit:p}){const e=t,N=p,w=R(()=>J("w-full"));function D(){z(()=>{const o=document.querySelector('[data-component="DXStaggeredAnimation"]');if(!o)return;const g=Array.from(o.children);let y=0;g.forEach((G,W)=>{const $=W*e.delay,n=G;switch(n.style.opacity="0",n.style.transition=`all ${e.duration}ms ease-out`,e.direction){case"top-to-bottom":n.style.transform="translateY(-20px)";break;case"bottom-to-top":n.style.transform="translateY(20px)";break;case"left-to-right":n.style.transform="translateX(-20px)";break;case"right-to-left":n.style.transform="translateX(20px)";break}e.transition==="scale"&&(n.style.transform+=" scale(0.95)"),setTimeout(()=>{n.style.opacity="1",n.style.transform="translate(0, 0) scale(1)",setTimeout(()=>{y++,y===g.length&&N("animation-complete")},e.duration)},$)})})}return P(()=>{e.animateOnMount&&D()}),U([()=>e.delay,()=>e.direction,()=>e.transition],()=>{e.animateOnMount&&D()}),(o,g)=>(H(),Y("div",{ref:"containerRef",class:q(w.value),"data-component":"DXStaggeredAnimation","data-direction":t.direction,"data-transition":t.transition},[j(o.$slots,"default",{},void 0,!0)],10,Z))}},u=K(M,[["__scopeId","data-v-7116c553"]]);M.__docgenInfo={exportName:"default",displayName:"DXStaggeredAnimation",description:"",tags:{},props:[{name:"delay",description:"Задержка между элементами в миллисекундах",tags:{default:[{description:"100",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"direction",description:"Направление анимации: top-to-bottom | left-to-right | right-to-left | bottom-to-top",tags:{default:[{description:"'top-to-bottom'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"top-to-bottom"'},values:["top-to-bottom","left-to-right","right-to-left","bottom-to-top"]},{name:"transition",description:"Тип transition: fade | fade-slide | scale",tags:{default:[{description:"'fade'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"fade"'},values:["fade","fade-slide","scale"]},{name:"duration",description:"Длительность анимации в миллисекундах",tags:{default:[{description:"300",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"animateOnMount",description:"Анимировать при монтировании",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"animation-complete"}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/utilities/DXStaggeredAnimation/DXStaggeredAnimation.vue"]};const lt={title:"Utilities/DXStaggeredAnimation",component:u,tags:["autodocs","category:animation"],parameters:{docs:{description:{component:`
# DXStaggeredAnimation

Компонент для последовательных анимаций элементов с задержкой между ними.

## Назначение

DXStaggeredAnimation применяет анимацию к дочерним элементам с последовательной задержкой,
создавая эффект каскадного появления. Используется для эффектных анимаций списков, сеток и карточек.

## Архитектура

### Использует
- CSS transitions - для анимаций
- \`useClassComposition\` composable - для стилей
- JavaScript setTimeout - для задержек

### Используется в
- \`DXDashboardGrid\` - для анимации виджетов
- \`DXList\` - для эффектного появления элементов
- Любые компоненты со списками элементов

## Внутренняя логика

### Направления анимации
- **top-to-bottom**: Элементы появляются сверху вниз
- **left-to-right**: Элементы появляются слева направо
- **right-to-left**: Элементы появляются справа налево
- **bottom-to-top**: Элементы появляются снизу вверх

### Типы transition
- **fade**: Плавное появление
- **fade-slide**: Появление со скольжением
- **scale**: Появление с масштабированием

### Задержка
Каждый элемент анимируется с задержкой относительно предыдущего.

## Особенности

### Автоматическое применение
Анимация применяется автоматически при монтировании (если \`animateOnMount={true}\`).

### Оптимизация
Таймеры очищаются при размонтировании для предотвращения утечек памяти.
        `}}},argTypes:{delay:{control:"number",min:0,max:500,step:10,description:"Задержка между элементами в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"100"},category:"Animation"}},direction:{control:"select",options:["top-to-bottom","left-to-right","right-to-left","bottom-to-top"],description:"Направление анимации.",table:{type:{summary:"string"},defaultValue:{summary:"top-to-bottom"},category:"Animation"}},transition:{control:"select",options:["fade","fade-slide","scale"],description:"Тип transition.",table:{type:{summary:"string"},defaultValue:{summary:"fade"},category:"Animation"}},duration:{control:"number",min:100,max:1e3,step:50,description:"Длительность анимации в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"300"},category:"Animation"}}}},i=[{id:1,name:"Элемент 1"},{id:2,name:"Элемент 2"},{id:3,name:"Элемент 3"},{id:4,name:"Элемент 4"},{id:5,name:"Элемент 5"}],r={args:{delay:100,direction:"top-to-bottom",transition:"fade"},parameters:{docs:{description:{story:"Базовая последовательная анимация списка элементов. Элементы появляются сверху вниз с задержкой."}}},render:t=>({components:{DXStaggeredAnimation:u,DXCard:a},setup(){return{args:t,defaultItems:i}},template:`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `})},s={args:{delay:100,direction:"left-to-right",transition:"fade-slide"},parameters:{docs:{description:{story:"Анимация слева направо. Элементы появляются последовательно с левой стороны."}}},render:t=>({components:{DXStaggeredAnimation:u,DXCard:a},setup(){return{args:t,defaultItems:i}},template:`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `})},d={args:{delay:150,direction:"top-to-bottom",transition:"scale"},parameters:{docs:{description:{story:"Анимация с масштабированием. Элементы появляются с увеличением масштаба."}}},render:t=>({components:{DXStaggeredAnimation:u,DXCard:a},setup(){return{args:t,defaultItems:i}},template:`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    `})},m={parameters:{docs:{description:{story:"Анимация элементов в сетке. Карточки появляются последовательно в grid layout."}}},render:()=>({components:{DXStaggeredAnimation:u,DXCard:a},setup(){return{gridItems:f([{id:1,title:"Карточка 1"},{id:2,title:"Карточка 2"},{id:3,title:"Карточка 3"},{id:4,title:"Карточка 4"},{id:5,title:"Карточка 5"},{id:6,title:"Карточка 6"}])}},template:`
      <DXStaggeredAnimation delay="100" direction="left-to-right" transition="fade-slide">
        <div class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in gridItems"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </DXCard>
        </div>
      </DXStaggeredAnimation>
    `})},l={parameters:{docs:{description:{story:"Анимация с кнопкой для повторного запуска. Нажмите кнопку, чтобы увидеть анимацию снова."}}},render:()=>({components:{DXStaggeredAnimation:u,DXCard:a,DXButton:Q},setup(){const t=f(0),p=f(i);return{key:t,items:p,restartAnimation:()=>{t.value++}}},template:`
      <div class="space-y-4">
        <DXButton @click="restartAnimation">Запустить анимацию</DXButton>
        <DXStaggeredAnimation
          :key="key"
          delay="100"
          direction="top-to-bottom"
          transition="fade-slide"
        >
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 mb-2"
          >
            {{ item.name }}
          </DXCard>
        </DXStaggeredAnimation>
      </div>
    `})},c={parameters:{docs:{description:{story:"Демонстрация всех направлений анимации."}}},render:()=>({components:{DXStaggeredAnimation:u,DXCard:a},setup(){return{directions:[{name:"top-to-bottom",label:"Сверху вниз"},{name:"left-to-right",label:"Слева направо"},{name:"right-to-left",label:"Справа налево"},{name:"bottom-to-top",label:"Снизу вверх"}],defaultItems:i}},template:`
      <div class="space-y-8">
        <div
          v-for="dir in directions"
          :key="dir.name"
          class="space-y-2"
        >
          <h3 class="font-semibold">{{ dir.label }}</h3>
          <DXStaggeredAnimation
            :direction="dir.name"
            delay="100"
            transition="fade-slide"
          >
            <DXCard
              v-for="item in defaultItems.slice(0, 3)"
              :key="item.id"
              class="p-4 mb-2"
            >
              {{ item.name }}
            </DXCard>
          </DXStaggeredAnimation>
        </div>
      </div>
    `})};var X,A,b;r.parameters={...r.parameters,docs:{...(X=r.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    delay: 100,
    direction: 'top-to-bottom',
    transition: 'fade'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая последовательная анимация списка элементов. Элементы появляются сверху вниз с задержкой.'
      }
    }
  },
  render: args => ({
    components: {
      DXStaggeredAnimation,
      DXCard
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: \`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    \`
  })
}`,...(b=(A=r.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var C,S,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    delay: 100,
    direction: 'left-to-right',
    transition: 'fade-slide'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация слева направо. Элементы появляются последовательно с левой стороны.'
      }
    }
  },
  render: args => ({
    components: {
      DXStaggeredAnimation,
      DXCard
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: \`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    \`
  })
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var v,h,F;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    delay: 150,
    direction: 'top-to-bottom',
    transition: 'scale'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием. Элементы появляются с увеличением масштаба.'
      }
    }
  },
  render: args => ({
    components: {
      DXStaggeredAnimation,
      DXCard
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: \`
      <DXStaggeredAnimation v-bind="args">
        <DXCard
          v-for="item in defaultItems"
          :key="item.id"
          class="p-4 mb-2"
        >
          {{ item.name }}
        </DXCard>
      </DXStaggeredAnimation>
    \`
  })
}`,...(F=(h=d.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var B,k,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Анимация элементов в сетке. Карточки появляются последовательно в grid layout.'
      }
    }
  },
  render: () => ({
    components: {
      DXStaggeredAnimation,
      DXCard
    },
    setup() {
      const gridItems = ref([{
        id: 1,
        title: 'Карточка 1'
      }, {
        id: 2,
        title: 'Карточка 2'
      }, {
        id: 3,
        title: 'Карточка 3'
      }, {
        id: 4,
        title: 'Карточка 4'
      }, {
        id: 5,
        title: 'Карточка 5'
      }, {
        id: 6,
        title: 'Карточка 6'
      }]);
      return {
        gridItems
      };
    },
    template: \`
      <DXStaggeredAnimation delay="100" direction="left-to-right" transition="fade-slide">
        <div class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in gridItems"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold">{{ item.title }}</h3>
          </DXCard>
        </div>
      </DXStaggeredAnimation>
    \`
  })
}`,...(_=(k=m.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var I,x,V;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Анимация с кнопкой для повторного запуска. Нажмите кнопку, чтобы увидеть анимацию снова.'
      }
    }
  },
  render: () => ({
    components: {
      DXStaggeredAnimation,
      DXCard,
      DXButton
    },
    setup() {
      const key = ref(0);
      const items = ref(defaultItems);
      const restartAnimation = () => {
        key.value++;
      };
      return {
        key,
        items,
        restartAnimation
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="restartAnimation">Запустить анимацию</DXButton>
        <DXStaggeredAnimation
          :key="key"
          delay="100"
          direction="top-to-bottom"
          transition="fade-slide"
        >
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 mb-2"
          >
            {{ item.name }}
          </DXCard>
        </DXStaggeredAnimation>
      </div>
    \`
  })
}`,...(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source}}};var O,T,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех направлений анимации.'
      }
    }
  },
  render: () => ({
    components: {
      DXStaggeredAnimation,
      DXCard
    },
    setup() {
      const directions = [{
        name: 'top-to-bottom',
        label: 'Сверху вниз'
      }, {
        name: 'left-to-right',
        label: 'Слева направо'
      }, {
        name: 'right-to-left',
        label: 'Справа налево'
      }, {
        name: 'bottom-to-top',
        label: 'Снизу вверх'
      }];
      return {
        directions,
        defaultItems
      };
    },
    template: \`
      <div class="space-y-8">
        <div
          v-for="dir in directions"
          :key="dir.name"
          class="space-y-2"
        >
          <h3 class="font-semibold">{{ dir.label }}</h3>
          <DXStaggeredAnimation
            :direction="dir.name"
            delay="100"
            transition="fade-slide"
          >
            <DXCard
              v-for="item in defaultItems.slice(0, 3)"
              :key="item.id"
              class="p-4 mb-2"
            >
              {{ item.name }}
            </DXCard>
          </DXStaggeredAnimation>
        </div>
      </div>
    \`
  })
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const ct=["Default","LeftToRight","WithScale","GridLayout","WithButton","AllDirections"];export{c as AllDirections,r as Default,m as GridLayout,s as LeftToRight,l as WithButton,d as WithScale,ct as __namedExportsOrder,lt as default};
