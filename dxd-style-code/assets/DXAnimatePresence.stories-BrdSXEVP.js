import{r as e}from"./vue.esm-bundler-C1fUoNF-.js";import{D as n}from"./DXAnimatePresence-DTb5a1uI.js";import{_ as o}from"./DXCard-CLY4ojX0.js";import{_ as t}from"./DXButton-DzgLKRkE.js";import{D as x}from"./DXModal-B2RDHCKG.js";import"./useAnimation-ByVAdqmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXBackdrop-D0xxNXxX.js";import"./DXCloseButton-xtCn8OZ8.js";import"./DXIcon-Bc0cQL8C.js";import"./XMarkIcon-DTqRFgaM.js";import"./DXHeading-S6mljWwV.js";import"./Squares2X2Icon-BfHN8L_E.js";import"./ViewColumnsIcon-DRckdqun.js";const Y={title:"Utilities/DXAnimatePresence",component:n,tags:["autodocs","category:animation"],parameters:{docs:{description:{component:`
# DXAnimatePresence

Компонент для анимаций появления и исчезания элементов с поддержкой условного рендеринга.

## Назначение

DXAnimatePresence предоставляет обертку над Vue \`<Transition>\` с предустановленными анимациями
для условного рендеринга элементов. Используется для анимации модальных окон, выпадающих меню, уведомлений.

## Архитектура

### Использует
- Vue \`<Transition>\` - встроенный компонент Vue для анимаций
- \`useAnimation\` composable - для transition конфигураций
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXModal\` - для анимации открытия/закрытия
- \`DXDropdown\` - для анимации выпадающих меню
- \`DXToast\` - для анимации уведомлений
- Любые компоненты с условным рендерингом

## Внутренняя логика

### Типы анимаций
- **fade**: Плавное появление/исчезание
- **fade-scale**: Появление/исчезание с масштабированием
- **slide-right**: Скольжение справа налево
- **slide-left**: Скольжение слева направо
- **slide-up**: Скольжение снизу вверх
- **slide-down**: Скольжение сверху вниз

### Режимы
- **default**: Одновременная анимация входа и выхода
- **in-out**: Сначала выход, затем вход
- **out-in**: Сначала вход, затем выход

## Особенности

### Условный рендеринг
Компонент рендерит слот только когда \`show={true}\`, что позволяет оптимизировать производительность.

### Кастомные имена
Можно указать кастомное имя transition через prop \`name\` для использования собственных CSS классов.
        `}}},argTypes:{show:{control:"boolean",description:"Показывать/скрывать элемент.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},name:{control:"text",description:"Имя transition (используется для CSS классов).",table:{type:{summary:"string"},defaultValue:{summary:"fade"},category:"Appearance"}},mode:{control:"select",options:["default","in-out","out-in"],description:"Режим transition: default (одновременно) | in-out (сначала выход) | out-in (сначала вход).",table:{type:{summary:"string"},defaultValue:{summary:"default"},category:"Behavior"}},type:{control:"select",options:["fade","fade-scale","slide-right","slide-left","slide-up","slide-down"],description:"Тип анимации.",table:{type:{summary:"string"},defaultValue:{summary:"fade"},category:"Appearance"}},duration:{control:"number",min:0,max:2e3,step:50,description:"Длительность анимации в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"200"},category:"Appearance"}},appear:{control:"boolean",description:"Анимировать при первом появлении.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},a={args:{show:!1,type:"fade"},parameters:{docs:{description:{story:"Базовое использование для анимации появления/исчезания элемента."}}},render:u=>({components:{DXAnimatePresence:n,DXCard:o,DXButton:t},setup(){return{show:e(u.show),args:u}},template:`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Этот элемент анимируется при появлении и исчезании</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `})},r={args:{show:!1,type:"fade-scale"},parameters:{docs:{description:{story:"Анимация с масштабированием - элемент появляется с увеличением масштаба."}}},render:u=>({components:{DXAnimatePresence:n,DXCard:o,DXButton:t},setup(){return{show:e(u.show),args:u}},template:`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент с масштабированием</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `})},c={args:{show:!1,type:"slide-up"},parameters:{docs:{description:{story:"Анимация скольжения снизу вверх. Полезно для модальных окон и уведомлений."}}},render:u=>({components:{DXAnimatePresence:n,DXCard:o,DXButton:t},setup(){return{show:e(u.show),args:u}},template:`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент скользит снизу вверх</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `})},i={parameters:{docs:{description:{story:"Использование с модальным окном. Модальное окно анимируется при открытии и закрытии."}}},render:()=>({components:{DXAnimatePresence:n,DXModal:x,DXButton:t},setup(){return{showModal:e(!1)}},template:`
      <div>
        <DXButton @click="showModal = true">Открыть модальное окно</DXButton>
        <DXAnimatePresence type="fade-scale" :show="showModal">
          <DXModal :open="showModal" @close="showModal = false">
            <h2 class="text-xl font-semibold mb-4">Модальное окно</h2>
            <p class="mb-4">Это модальное окно анимируется при открытии и закрытии.</p>
            <DXButton @click="showModal = false">Закрыть</DXButton>
          </DXModal>
        </DXAnimatePresence>
      </div>
    `})},p={args:{show:!1,type:"fade",mode:"in-out"},parameters:{docs:{description:{story:"Режим in-out - сначала выход старого элемента, затем вход нового."}}},render:u=>({components:{DXAnimatePresence:n,DXCard:o,DXButton:t},setup(){const s=e(u.show),l=e("Контент 1");return{show:s,content:l,args:u}},template:`
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton @click="show = !show">
            {{ show ? 'Скрыть' : 'Показать' }}
          </DXButton>
          <DXButton v-if="show" @click="content = content === 'Контент 1' ? 'Контент 2' : 'Контент 1'">
            Переключить контент
          </DXButton>
        </div>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard :key="content" class="p-4">
            <p>{{ content }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `})},d={parameters:{docs:{description:{story:"Демонстрация всех типов анимаций. Переключайте тип через контролы."}}},render:()=>({components:{DXAnimatePresence:n,DXCard:o,DXButton:t},setup(){const u=e(!1),s=e("fade");return{show:u,type:s,types:["fade","fade-scale","slide-right","slide-left","slide-up","slide-down"]}},template:`
      <div class="space-y-4">
        <div class="flex gap-2 flex-wrap">
          <DXButton
            v-for="t in types"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence :type="type" :show="show">
          <DXCard class="p-4">
            <p>Тип анимации: {{ type }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    `})};var D,m,X;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    show: false,
    type: 'fade'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для анимации появления/исчезания элемента.'
      }
    }
  },
  render: args => ({
    components: {
      DXAnimatePresence,
      DXCard,
      DXButton
    },
    setup() {
      const show = ref(args.show);
      return {
        show,
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Этот элемент анимируется при появлении и исчезании</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(X=(m=a.parameters)==null?void 0:m.docs)==null?void 0:X.source}}};var h,w,B;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    show: false,
    type: 'fade-scale'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием - элемент появляется с увеличением масштаба.'
      }
    }
  },
  render: args => ({
    components: {
      DXAnimatePresence,
      DXCard,
      DXButton
    },
    setup() {
      const show = ref(args.show);
      return {
        show,
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент с масштабированием</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,y,f;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    show: false,
    type: 'slide-up'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация скольжения снизу вверх. Полезно для модальных окон и уведомлений.'
      }
    }
  },
  render: args => ({
    components: {
      DXAnimatePresence,
      DXCard,
      DXButton
    },
    setup() {
      const show = ref(args.show);
      return {
        show,
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard class="p-4">
            <p>Элемент скользит снизу вверх</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(f=(y=c.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var A,E,g;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Использование с модальным окном. Модальное окно анимируется при открытии и закрытии.'
      }
    }
  },
  render: () => ({
    components: {
      DXAnimatePresence,
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
      <div>
        <DXButton @click="showModal = true">Открыть модальное окно</DXButton>
        <DXAnimatePresence type="fade-scale" :show="showModal">
          <DXModal :open="showModal" @close="showModal = false">
            <h2 class="text-xl font-semibold mb-4">Модальное окно</h2>
            <p class="mb-4">Это модальное окно анимируется при открытии и закрытии.</p>
            <DXButton @click="showModal = false">Закрыть</DXButton>
          </DXModal>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(g=(E=i.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var v,F,P;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    show: false,
    type: 'fade',
    mode: 'in-out'
  },
  parameters: {
    docs: {
      description: {
        story: 'Режим in-out - сначала выход старого элемента, затем вход нового.'
      }
    }
  },
  render: args => ({
    components: {
      DXAnimatePresence,
      DXCard,
      DXButton
    },
    setup() {
      const show = ref(args.show);
      const content = ref('Контент 1');
      return {
        show,
        content,
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton @click="show = !show">
            {{ show ? 'Скрыть' : 'Показать' }}
          </DXButton>
          <DXButton v-if="show" @click="content = content === 'Контент 1' ? 'Контент 2' : 'Контент 1'">
            Переключить контент
          </DXButton>
        </div>
        <DXAnimatePresence v-bind="args" :show="show">
          <DXCard :key="content" class="p-4">
            <p>{{ content }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(P=(F=p.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var b,M,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех типов анимаций. Переключайте тип через контролы.'
      }
    }
  },
  render: () => ({
    components: {
      DXAnimatePresence,
      DXCard,
      DXButton
    },
    setup() {
      const show = ref(false);
      const type = ref('fade');
      const types = ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down'];
      return {
        show,
        type,
        types
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex gap-2 flex-wrap">
          <DXButton
            v-for="t in types"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="show = !show">
          {{ show ? 'Скрыть' : 'Показать' }}
        </DXButton>
        <DXAnimatePresence :type="type" :show="show">
          <DXCard class="p-4">
            <p>Тип анимации: {{ type }}</p>
          </DXCard>
        </DXAnimatePresence>
      </div>
    \`
  })
}`,...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};const Z=["Default","FadeScale","SlideUp","WithModal","ModeInOut","AllTypes"];export{d as AllTypes,a as Default,r as FadeScale,p as ModeInOut,c as SlideUp,i as WithModal,Z as __namedExportsOrder,Y as default};
