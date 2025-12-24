import{r as n}from"./vue.esm-bundler-CzLKT_w4.js";import{D as e}from"./DXModal-Dr4OJHYN.js";import{_ as s}from"./DXButton-ChBdj9Dq.js";import"./DXBackdrop-CRxYx67P.js";import"./DXCloseButton-Cjo_FBNn.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./XMarkIcon-B2lmC1bd.js";import"./DXHeading-DwWVK5ab.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Squares2X2Icon-q8K6JZ8n.js";import"./ViewColumnsIcon-DiU4uUWi.js";import"./useClassComposition-Dym2pzZ_.js";const z={title:"Organisms/DXModal",component:e,tags:["autodocs","category:overlay"],argTypes:{variant:{control:"select",options:["modal","fullscreen","sidebar-right","half-right"],description:"Тип модального окна"},width:{control:"select",options:["sm","md","lg","xl"],description:"Ширина (только для modal)"},closable:{control:"boolean",description:"Можно ли закрыть"},showModeSwitcher:{control:"boolean",description:"Показать переключатель режимов"}}},o={render:u=>({components:{DXModal:e,DXButton:s},setup(){const t=n(!1);return{args:u,open:t}},template:`
      <div>
        <DXButton @click="open = true">Открыть модал</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Заголовок</template>
          <p>Контент модального окна. Здесь может быть любое содержимое.</p>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Отмена</DXButton>
            <DXButton @click="open = false">Сохранить</DXButton>
          </template>
        </DXModal>
      </div>
    `})},a={args:{variant:"sidebar-right"},render:u=>({components:{DXModal:e,DXButton:s},setup(){const t=n(!1);return{args:u,open:t}},template:`
      <div>
        <DXButton @click="open = true">Открыть сайдбар</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Боковая панель</template>
          <div class="space-y-4">
            <p>Этот вариант отлично подходит для форм редактирования.</p>
            <p>Контент может быть любой длины.</p>
          </div>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})},r={args:{variant:"fullscreen"},render:u=>({components:{DXModal:e,DXButton:s},setup(){const t=n(!1);return{args:u,open:t}},template:`
      <div>
        <DXButton @click="open = true">Открыть на весь экран</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Полноэкранный режим</template>
          <p>Этот вариант занимает весь экран.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})},p={args:{showModeSwitcher:!0},render:u=>({components:{DXModal:e,DXButton:s},setup(){const t=n(!1),C=n("modal");return{args:u,open:t,variant:C}},template:`
      <div>
        <DXButton @click="open = true">Открыть с переключателем</DXButton>
        <DXModal 
          v-bind="args" 
          :open="open" 
          :variant="variant"
          @close="open = false"
          @update:variant="variant = $event"
        >
          <template #title>Переключатель режимов</template>
          <p>Используйте кнопки справа от заголовка для смены режима отображения.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})};var l,i,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть модал</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Заголовок</template>
          <p>Контент модального окна. Здесь может быть любое содержимое.</p>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Отмена</DXButton>
            <DXButton @click="open = false">Сохранить</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var D,d,m;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-right'
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть сайдбар</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Боковая панель</template>
          <div class="space-y-4">
            <p>Этот вариант отлично подходит для форм редактирования.</p>
            <p>Контент может быть любой длины.</p>
          </div>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var B,X,v;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'fullscreen'
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть на весь экран</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Полноэкранный режим</template>
          <p>Этот вариант занимает весь экран.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(v=(X=r.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};var E,f,g;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showModeSwitcher: true
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      const variant = ref('modal');
      return {
        args,
        open,
        variant
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть с переключателем</DXButton>
        <DXModal 
          v-bind="args" 
          :open="open" 
          :variant="variant"
          @close="open = false"
          @update:variant="variant = $event"
        >
          <template #title>Переключатель режимов</template>
          <p>Используйте кнопки справа от заголовка для смены режима отображения.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const G=["Default","Sidebar","Fullscreen","WithModeSwitcher"];export{o as Default,r as Fullscreen,a as Sidebar,p as WithModeSwitcher,G as __namedExportsOrder,z as default};
