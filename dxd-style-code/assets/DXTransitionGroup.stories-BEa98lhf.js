import{c as v,d as A,m as _,V as N,R as V,o as $,e as M,g as z,r as i}from"./vue.esm-bundler-C1fUoNF-.js";import{u as L}from"./useClassComposition-Dym2pzZ_.js";import{S as R,d as j,e as O,f as P,F as H,g as f}from"./useAnimation-ByVAdqmf.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as o}from"./DXCard-CLY4ojX0.js";import{_ as d}from"./DXButton-DzgLKRkE.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const x={__name:"DXTransitionGroup",props:{name:{type:String,default:"fade"},tag:{type:String,default:"div"},type:{type:String,default:"fade",validator:t=>["fade","fade-scale","slide-right","slide-left","slide-up","slide-down"].includes(t)},duration:{type:Number,default:200}},setup(t){V(u=>({v37e563e6:t.duration+"ms"}));const e=t,a=v(()=>e.name!=="fade"?e.name:e.type),s=v(()=>L());return v(()=>({fade:f,"fade-scale":H,"slide-right":P,"slide-left":O,"slide-up":j,"slide-down":R})[e.type]||f),(u,n)=>($(),A(N,_({tag:t.tag,name:a.value,class:s.value,"data-component":"DXTransitionGroup","data-type":t.type,"data-duration":t.duration},u.$attrs),{default:M(()=>[z(u.$slots,"default",{},void 0,!0)]),_:3},16,["tag","name","class","data-type","data-duration"]))}},r=U(x,[["__scopeId","data-v-a13cf31c"]]);x.__docgenInfo={exportName:"default",displayName:"DXTransitionGroup",description:"",tags:{},props:[{name:"name",description:"Имя transition (используется для CSS классов)",tags:{default:[{description:"'fade'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"fade"'}},{name:"tag",description:"HTML тег для TransitionGroup",tags:{default:[{description:"'div'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"type",description:"Тип анимации: fade | fade-scale | slide-right | slide-left | slide-up | slide-down",tags:{default:[{description:"'fade'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"fade"'},values:["fade","fade-scale","slide-right","slide-left","slide-up","slide-down"]},{name:"duration",description:"Длительность анимации в миллисекундах",tags:{default:[{description:"200",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"200"}}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/utilities/DXTransitionGroup/DXTransitionGroup.vue"]};const ae={title:"Utilities/DXTransitionGroup",component:r,tags:["autodocs","category:animation"],parameters:{docs:{description:{component:`
# DXTransitionGroup

Компонент для групповых анимаций списков элементов с поддержкой различных типов переходов.

## Назначение

DXTransitionGroup предоставляет обертку над Vue \`<TransitionGroup>\` с предустановленными анимациями
для списков, сеток и коллекций элементов. Автоматически анимирует добавление, удаление и перемещение элементов.

## Архитектура

### Использует
- Vue \`<TransitionGroup>\` - встроенный компонент Vue для групповых анимаций
- \`useAnimation\` composable - для transition конфигураций
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXList\` - для анимации элементов списка
- \`DXTable\` - для анимации строк таблицы
- Любые компоненты со списками элементов

## Внутренняя логика

### Типы анимаций
- **fade**: Плавное появление/исчезание
- **fade-scale**: Появление/исчезание с масштабированием
- **slide-right**: Скольжение справа налево
- **slide-left**: Скольжение слева направо
- **slide-up**: Скольжение снизу вверх
- **slide-down**: Скольжение сверху вниз

### Move анимация
TransitionGroup автоматически анимирует перемещение элементов при изменении порядка.

## Особенности

### Кастомные имена
Можно указать кастомное имя transition через prop \`name\` для использования собственных CSS классов.

### Длительность
Длительность анимации настраивается через prop \`duration\` и применяется ко всем CSS transitions.
        `}}},argTypes:{name:{control:"text",description:"Имя transition (используется для CSS классов).",table:{type:{summary:"string"},defaultValue:{summary:"fade"},category:"Appearance"}},tag:{control:"text",description:"HTML тег для TransitionGroup.",table:{type:{summary:"string"},defaultValue:{summary:"div"},category:"Appearance"}},type:{control:"select",options:["fade","fade-scale","slide-right","slide-left","slide-up","slide-down"],description:"Тип анимации.",table:{type:{summary:"string"},defaultValue:{summary:"fade"},category:"Appearance"}},duration:{control:"number",min:0,max:2e3,step:50,description:"Длительность анимации в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"200"},category:"Appearance"}}}},m={args:{type:"fade",tag:"div"},parameters:{docs:{description:{story:"Базовое использование для анимации списка элементов с fade эффектом."}}},render:t=>({components:{DXTransitionGroup:r,DXCard:o,DXButton:d},setup(){const e=i([{id:1,name:"Элемент 1"},{id:2,name:"Элемент 2"},{id:3,name:"Элемент 3"}]);return{args:t,items:e,addItem:()=>{const u=Math.max(...e.value.map(n=>n.id))+1;e.value.push({id:u,name:`Элемент ${u}`})},removeItem:u=>{e.value=e.value.filter(n=>n.id!==u)}}},template:`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `})},c={args:{type:"fade-scale",tag:"div"},parameters:{docs:{description:{story:"Анимация с масштабированием - элементы появляются с увеличением масштаба."}}},render:t=>({components:{DXTransitionGroup:r,DXCard:o,DXButton:d},setup(){const e=i([{id:1,name:"Карточка 1"},{id:2,name:"Карточка 2"}]);return{args:t,items:e,addItem:()=>{const u=Math.max(...e.value.map(n=>n.id))+1;e.value.push({id:u,name:`Карточка ${u}`})},removeItem:u=>{e.value=e.value.filter(n=>n.id!==u)}}},template:`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить карточку</DXButton>
        <DXTransitionGroup v-bind="args" class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold mb-2">{{ item.name }}</h3>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `})},p={args:{type:"slide-right",tag:"ul"},parameters:{docs:{description:{story:"Анимация скольжения справа налево. Элементы появляются слева и исчезают вправо."}}},render:t=>({components:{DXTransitionGroup:r,DXCard:o,DXButton:d},setup(){const e=i([{id:1,name:"Задача 1"},{id:2,name:"Задача 2"}]);return{args:t,items:e,addItem:()=>{const u=Math.max(...e.value.map(n=>n.id))+1;e.value.push({id:u,name:`Задача ${u}`})},removeItem:u=>{e.value=e.value.filter(n=>n.id!==u)}}},template:`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить задачу</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2 list-none">
          <li
            v-for="item in items"
            :key="item.id"
          >
            <DXCard class="p-4 flex items-center justify-between">
              <span>{{ item.name }}</span>
              <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
                Удалить
              </DXButton>
            </DXCard>
          </li>
        </DXTransitionGroup>
      </div>
    `})},l={args:{type:"fade",duration:500},parameters:{docs:{description:{story:"Кастомная длительность анимации. В этом примере анимация длится 500ms вместо стандартных 200ms."}}},render:t=>({components:{DXTransitionGroup:r,DXCard:o,DXButton:d},setup(){const e=i([{id:1,name:"Элемент 1"},{id:2,name:"Элемент 2"}]);return{args:t,items:e,addItem:()=>{const u=Math.max(...e.value.map(n=>n.id))+1;e.value.push({id:u,name:`Элемент ${u}`})},removeItem:u=>{e.value=e.value.filter(n=>n.id!==u)}}},template:`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `})},D={parameters:{docs:{description:{story:"Демонстрация всех типов анимаций. Переключайте тип через контролы."}}},render:()=>({components:{DXTransitionGroup:r,DXCard:o,DXButton:d},setup(){const t=i("fade"),e=i([{id:1,name:"Элемент 1"},{id:2,name:"Элемент 2"},{id:3,name:"Элемент 3"}]);return{type:t,items:e,addItem:()=>{const u=Math.max(...e.value.map(n=>n.id))+1;e.value.push({id:u,name:`Элемент ${u}`})},removeItem:u=>{e.value=e.value.filter(n=>n.id!==u)}}},template:`
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton
            v-for="t in ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down']"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup :type="type" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    `})};var X,y,g;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'fade',
    tag: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для анимации списка элементов с fade эффектом.'
      }
    }
  },
  render: args => ({
    components: {
      DXTransitionGroup,
      DXCard,
      DXButton
    },
    setup() {
      const items = ref([{
        id: 1,
        name: 'Элемент 1'
      }, {
        id: 2,
        name: 'Элемент 2'
      }, {
        id: 3,
        name: 'Элемент 3'
      }]);
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({
          id: newId,
          name: \`Элемент \${newId}\`
        });
      };
      const removeItem = id => {
        items.value = items.value.filter(item => item.id !== id);
      };
      return {
        args,
        items,
        addItem,
        removeItem
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    \`
  })
}`,...(g=(y=m.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var I,B,C;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'fade-scale',
    tag: 'div'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация с масштабированием - элементы появляются с увеличением масштаба.'
      }
    }
  },
  render: args => ({
    components: {
      DXTransitionGroup,
      DXCard,
      DXButton
    },
    setup() {
      const items = ref([{
        id: 1,
        name: 'Карточка 1'
      }, {
        id: 2,
        name: 'Карточка 2'
      }]);
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({
          id: newId,
          name: \`Карточка \${newId}\`
        });
      };
      const removeItem = id => {
        items.value = items.value.filter(item => item.id !== id);
      };
      return {
        args,
        items,
        addItem,
        removeItem
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить карточку</DXButton>
        <DXTransitionGroup v-bind="args" class="grid grid-cols-3 gap-4">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4"
          >
            <h3 class="font-semibold mb-2">{{ item.name }}</h3>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    \`
  })
}`,...(C=(B=c.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var T,h,E;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'slide-right',
    tag: 'ul'
  },
  parameters: {
    docs: {
      description: {
        story: 'Анимация скольжения справа налево. Элементы появляются слева и исчезают вправо.'
      }
    }
  },
  render: args => ({
    components: {
      DXTransitionGroup,
      DXCard,
      DXButton
    },
    setup() {
      const items = ref([{
        id: 1,
        name: 'Задача 1'
      }, {
        id: 2,
        name: 'Задача 2'
      }]);
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({
          id: newId,
          name: \`Задача \${newId}\`
        });
      };
      const removeItem = id => {
        items.value = items.value.filter(item => item.id !== id);
      };
      return {
        args,
        items,
        addItem,
        removeItem
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить задачу</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2 list-none">
          <li
            v-for="item in items"
            :key="item.id"
          >
            <DXCard class="p-4 flex items-center justify-between">
              <span>{{ item.name }}</span>
              <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
                Удалить
              </DXButton>
            </DXCard>
          </li>
        </DXTransitionGroup>
      </div>
    \`
  })
}`,...(E=(h=p.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var G,w,k;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'fade',
    duration: 500
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомная длительность анимации. В этом примере анимация длится 500ms вместо стандартных 200ms.'
      }
    }
  },
  render: args => ({
    components: {
      DXTransitionGroup,
      DXCard,
      DXButton
    },
    setup() {
      const items = ref([{
        id: 1,
        name: 'Элемент 1'
      }, {
        id: 2,
        name: 'Элемент 2'
      }]);
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({
          id: newId,
          name: \`Элемент \${newId}\`
        });
      };
      const removeItem = id => {
        items.value = items.value.filter(item => item.id !== id);
      };
      return {
        args,
        items,
        addItem,
        removeItem
      };
    },
    template: \`
      <div class="space-y-4">
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup v-bind="args" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    \`
  })
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,b,F;D.parameters={...D.parameters,docs:{...(S=D.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех типов анимаций. Переключайте тип через контролы.'
      }
    }
  },
  render: () => ({
    components: {
      DXTransitionGroup,
      DXCard,
      DXButton
    },
    setup() {
      const type = ref('fade');
      const items = ref([{
        id: 1,
        name: 'Элемент 1'
      }, {
        id: 2,
        name: 'Элемент 2'
      }, {
        id: 3,
        name: 'Элемент 3'
      }]);
      const addItem = () => {
        const newId = Math.max(...items.value.map(i => i.id)) + 1;
        items.value.push({
          id: newId,
          name: \`Элемент \${newId}\`
        });
      };
      const removeItem = id => {
        items.value = items.value.filter(item => item.id !== id);
      };
      return {
        type,
        items,
        addItem,
        removeItem
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex gap-2">
          <DXButton
            v-for="t in ['fade', 'fade-scale', 'slide-right', 'slide-left', 'slide-up', 'slide-down']"
            :key="t"
            :variant="type === t ? 'primary' : 'ghost'"
            size="sm"
            @click="type = t"
          >
            {{ t }}
          </DXButton>
        </div>
        <DXButton @click="addItem">Добавить элемент</DXButton>
        <DXTransitionGroup :type="type" class="space-y-2">
          <DXCard
            v-for="item in items"
            :key="item.id"
            class="p-4 flex items-center justify-between"
          >
            <span>{{ item.name }}</span>
            <DXButton size="sm" variant="ghost" @click="removeItem(item.id)">
              Удалить
            </DXButton>
          </DXCard>
        </DXTransitionGroup>
      </div>
    \`
  })
}`,...(F=(b=D.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};const se=["Default","FadeScale","SlideRight","CustomDuration","AllTypes"];export{D as AllTypes,l as CustomDuration,m as Default,c as FadeScale,p as SlideRight,se as __namedExportsOrder,ae as default};
