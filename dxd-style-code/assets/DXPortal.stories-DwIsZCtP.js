import{c as M,d as h,g as w,l as _,o as T,r as V,s as v}from"./vue.esm-bundler-C1fUoNF-.js";import{D as I}from"./DXModal-B2RDHCKG.js";import"./DXTooltip-Dp5bmrPy.js";import{_ as N}from"./DXButton-DzgLKRkE.js";import{_ as l}from"./DXCard-CLY4ojX0.js";import"./DXBackdrop-D0xxNXxX.js";import"./DXCloseButton-xtCn8OZ8.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./XMarkIcon-DTqRFgaM.js";import"./DXHeading-S6mljWwV.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Squares2X2Icon-BfHN8L_E.js";import"./ViewColumnsIcon-DRckdqun.js";import"./useClassComposition-Dym2pzZ_.js";import"./useSpacing-BOHUzi8w.js";const e={__name:"DXPortal",props:{to:{type:[String,Object],default:"body",validator:u=>typeof u=="string"?u==="body"||u.startsWith("#")||u.startsWith("."):u instanceof HTMLElement},disabled:{type:Boolean,default:!1}},setup(u){const o=u,F=M(()=>{if(o.to==="body")return"body";if(typeof o.to=="string"){const t=document.querySelector(o.to);return t||(console.warn(`DXPortal: Контейнер "${o.to}" не найден, используется body`),"body")}return o.to instanceof HTMLElement?o.to:"body"});return(t,S)=>(T(),h(_,{to:F.value,disabled:u.disabled},[w(t.$slots,"default")],8,["to","disabled"]))}};e.__docgenInfo={exportName:"default",displayName:"DXPortal",description:"",tags:{},props:[{name:"to",description:`Целевой контейнер для рендеринга
Может быть строкой (селектор или 'body') или DOM элементом`,tags:{default:[{description:"'body'",title:"default"}]},type:{name:"string|object"},defaultValue:{func:!1,value:'"body"'}},{name:"disabled",description:"Отключить портал (рендерить в текущем месте)",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/utilities/DXPortal/DXPortal.vue"]};const o4={title:"Utilities/DXPortal",component:e,tags:["autodocs","category:overlay"],parameters:{docs:{description:{component:`
# DXPortal

Компонент-обертка над Vue Teleport для рендеринга контента вне текущей DOM-иерархии.

## Назначение

DXPortal позволяет рендерить контент в указанный контейнер (по умолчанию body), что необходимо для:
- Модальных окон (чтобы они были поверх всего контента)
- Tooltips и подсказок (чтобы они не обрезались родительскими overflow)
- Выпадающих меню (чтобы они правильно позиционировались)
- Уведомлений (чтобы они были поверх всего)

## Архитектура

### Использует
- Vue 3 \`Teleport\` - встроенный компонент Vue для порталов

### Используется в
- \`DXModal\` - для рендеринга модальных окон в body
- \`DXTooltip\` - для рендеринга подсказок в body
- \`DXDropdown\` - для рендеринга выпадающих меню
- \`DXToast\` - для рендеринга уведомлений

## Внутренняя логика

### Определение целевого контейнера
Компонент автоматически определяет целевой контейнер:
- \`"body"\` → рендеринг в body
- \`"#selector"\` → поиск элемента по ID
- \`".selector"\` → поиск элемента по классу
- \`HTMLElement\` → использование элемента напрямую

Если контейнер не найден, используется body как fallback.

### Сохранение контекста Vue
Teleport сохраняет контекст Vue (provide/inject, slots, события), поэтому все работает как обычно.

## Особенности

### Автоматическая очистка
При размонтировании компонента контент автоматически удаляется из целевого контейнера благодаря Vue Teleport.

### Несколько порталов
Можно использовать несколько порталов одновременно, они будут рендериться в указанные контейнеры независимо.

### Отключение портала
С помощью prop \`disabled\` можно временно отключить портал и рендерить контент в текущем месте (полезно для тестирования).
        `}}},argTypes:{to:{control:"text",description:'Целевой контейнер для рендеринга. Может быть "body", селектор (#id, .class) или HTMLElement.',table:{type:{summary:"string | HTMLElement"},defaultValue:{summary:"body"},category:"Behavior"}},disabled:{control:"boolean",description:"Отключить портал (рендерить в текущем месте).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},r={args:{to:"body"},parameters:{docs:{description:{story:"Базовое использование портала для рендеринга в body. Контент будет отрендерен в body, но сохранит контекст Vue компонента."}}},render:u=>({components:{DXPortal:e,DXCard:l},setup(){return{args:u}},template:`
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-blue-50 border-blue-200">
            <p>Этот контент рендерится в body через Portal</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    `})},n={parameters:{docs:{description:{story:"Использование портала с модальным окном. Модальное окно рендерится в body, что позволяет ему быть поверх всего контента."}}},render:()=>({components:{DXPortal:e,DXModal:I,DXButton:N},setup(){return{showModal:V(!1)}},template:`
      <div class="p-4">
        <DXButton @click="showModal = true">
          Открыть модальное окно
        </DXButton>
        
        <DXPortal to="body">
          <DXModal 
            v-if="showModal"
            :open="showModal"
            @close="showModal = false"
          >
            <h2>Модальное окно</h2>
            <p>Это содержимое рендерится в body через Portal</p>
          </DXModal>
        </DXPortal>
      </div>
    `})},a={parameters:{docs:{description:{story:"Использование кастомного контейнера. Контент будет рендериться в указанный элемент по селектору."}}},render:()=>({components:{DXPortal:e,DXCard:l},setup(){return v(()=>{if(!document.getElementById("custom-portal")){const u=document.createElement("div");u.id="custom-portal",u.className="p-4 border-2 border-dashed border-blue-300 rounded-lg",document.body.appendChild(u)}}),{}},template:`
      <div class="p-4">
        <p class="mb-4">Контент в основном потоке</p>
        <DXPortal to="#custom-portal">
          <DXCard class="p-4 bg-green-50 border-green-200">
            <p>Этот контент рендерится в кастомном контейнере</p>
          </DXCard>
        </DXPortal>
      </div>
    `})},s={args:{to:"body",disabled:!0},parameters:{docs:{description:{story:"Отключенный портал. Контент рендерится в текущем месте вместо целевого контейнера. Полезно для тестирования или условного рендеринга."}}},render:u=>({components:{DXPortal:e,DXCard:l},setup(){return{args:u}},template:`
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-yellow-50 border-yellow-200">
            <p>Этот контент рендерится здесь (портал отключен)</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    `})},d={parameters:{docs:{description:{story:"Несколько порталов могут использоваться одновременно. Каждый портал независимо рендерит свой контент в указанный контейнер."}}},render:()=>({components:{DXPortal:e,DXCard:l},setup(){return v(()=>{if(!document.getElementById("portal-1")){const u=document.createElement("div");u.id="portal-1",u.className="p-2 border border-blue-300 rounded mb-2",document.body.appendChild(u)}if(!document.getElementById("portal-2")){const u=document.createElement("div");u.id="portal-2",u.className="p-2 border border-green-300 rounded",document.body.appendChild(u)}}),{}},template:`
      <div class="p-4">
        <p class="mb-4">Основной контент</p>
        
        <DXPortal to="#portal-1">
          <DXCard class="p-2 bg-blue-50">
            Портал 1
          </DXCard>
        </DXPortal>
        
        <DXPortal to="#portal-2">
          <DXCard class="p-2 bg-green-50">
            Портал 2
          </DXCard>
        </DXPortal>
      </div>
    `})};var p,c,D;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    to: 'body'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование портала для рендеринга в body. Контент будет отрендерен в body, но сохранит контекст Vue компонента.'
      }
    }
  },
  render: args => ({
    components: {
      DXPortal,
      DXCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-blue-50 border-blue-200">
            <p>Этот контент рендерится в body через Portal</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    \`
  })
}`,...(D=(c=r.parameters)==null?void 0:c.docs)==null?void 0:D.source}}};var i,m,E;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Использование портала с модальным окном. Модальное окно рендерится в body, что позволяет ему быть поверх всего контента.'
      }
    }
  },
  render: () => ({
    components: {
      DXPortal,
      DXModal,
      DXButton
    },
    setup() {
      const showModal = ref(false);
      return {
        showModal
      };
    },
    template: \`
      <div class="p-4">
        <DXButton @click="showModal = true">
          Открыть модальное окно
        </DXButton>
        
        <DXPortal to="body">
          <DXModal 
            v-if="showModal"
            :open="showModal"
            @close="showModal = false"
          >
            <h2>Модальное окно</h2>
            <p>Это содержимое рендерится в body через Portal</p>
          </DXModal>
        </DXPortal>
      </div>
    \`
  })
}`,...(E=(m=n.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};var b,X,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Использование кастомного контейнера. Контент будет рендериться в указанный элемент по селектору.'
      }
    }
  },
  render: () => ({
    components: {
      DXPortal,
      DXCard
    },
    setup() {
      onMounted(() => {
        // Создаем кастомный контейнер если его нет
        if (!document.getElementById('custom-portal')) {
          const container = document.createElement('div');
          container.id = 'custom-portal';
          container.className = 'p-4 border-2 border-dashed border-blue-300 rounded-lg';
          document.body.appendChild(container);
        }
      });
      return {};
    },
    template: \`
      <div class="p-4">
        <p class="mb-4">Контент в основном потоке</p>
        <DXPortal to="#custom-portal">
          <DXCard class="p-4 bg-green-50 border-green-200">
            <p>Этот контент рендерится в кастомном контейнере</p>
          </DXCard>
        </DXPortal>
      </div>
    \`
  })
}`,...(y=(X=a.parameters)==null?void 0:X.docs)==null?void 0:y.source}}};var C,B,g;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    to: 'body',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключенный портал. Контент рендерится в текущем месте вместо целевого контейнера. Полезно для тестирования или условного рендеринга.'
      }
    }
  },
  render: args => ({
    components: {
      DXPortal,
      DXCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="p-4">
        <p class="mb-4">Контент выше портала</p>
        <DXPortal v-bind="args">
          <DXCard class="p-4 bg-yellow-50 border-yellow-200">
            <p>Этот контент рендерится здесь (портал отключен)</p>
          </DXCard>
        </DXPortal>
        <p class="mt-4">Контент ниже портала</p>
      </div>
    \`
  })
}`,...(g=(B=s.parameters)==null?void 0:B.docs)==null?void 0:g.source}}};var f,P,A;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Несколько порталов могут использоваться одновременно. Каждый портал независимо рендерит свой контент в указанный контейнер.'
      }
    }
  },
  render: () => ({
    components: {
      DXPortal,
      DXCard
    },
    setup() {
      onMounted(() => {
        // Создаем контейнеры если их нет
        if (!document.getElementById('portal-1')) {
          const container1 = document.createElement('div');
          container1.id = 'portal-1';
          container1.className = 'p-2 border border-blue-300 rounded mb-2';
          document.body.appendChild(container1);
        }
        if (!document.getElementById('portal-2')) {
          const container2 = document.createElement('div');
          container2.id = 'portal-2';
          container2.className = 'p-2 border border-green-300 rounded';
          document.body.appendChild(container2);
        }
      });
      return {};
    },
    template: \`
      <div class="p-4">
        <p class="mb-4">Основной контент</p>
        
        <DXPortal to="#portal-1">
          <DXCard class="p-2 bg-blue-50">
            Портал 1
          </DXCard>
        </DXPortal>
        
        <DXPortal to="#portal-2">
          <DXCard class="p-2 bg-green-50">
            Портал 2
          </DXCard>
        </DXPortal>
      </div>
    \`
  })
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};const t4=["Default","WithModal","CustomContainer","Disabled","MultiplePortals"];export{a as CustomContainer,r as Default,s as Disabled,d as MultiplePortals,n as WithModal,t4 as __namedExportsOrder,o4 as default};
