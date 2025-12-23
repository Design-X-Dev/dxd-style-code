import{a as s,o as r,b as l,c as i,e as h,g as X,f as _,T as P,k as p,z as q,l as b,m as B,q as G,F as U,B as H,p as J,r as c}from"./vue.esm-bundler-Nfu98kES.js";import{_ as K}from"./DXBackdrop-CWsT_mCr.js";import{_ as Q}from"./DXCloseButton-D07dhHMp.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as Y}from"./Squares2X2Icon-1ooYpuOE.js";import{r as ee}from"./ViewColumnsIcon-z06zZ7Kw.js";import{_ as g}from"./DXButton-D4QV5g9V.js";import"./DXIcon-DQdlGsO1.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./XMarkIcon-BiPc0SME.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";function te(e,a){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"})])}function ue(e,a){return r(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"})])}const ne=["data-variant"],ae={class:"flex items-center justify-between flex-shrink-0 mb-4 gap-4"},oe={class:"text-lg font-semibold tracking-tight text-slate-900 flex-1"},re={key:0,class:"flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1"},le=["title","onClick"],se={class:"text-slate-700 overflow-y-auto flex-1 min-h-0"},ie={key:0,class:"flex justify-end gap-2 flex-shrink-0 mt-4 pt-4 border-t border-slate-200"},L={__name:"DXModal",props:{open:{type:Boolean,default:!1},variant:{type:String,default:"modal"},width:{type:String,default:"md"},closable:{type:Boolean,default:!0},showModeSwitcher:{type:Boolean,default:!1},backdropBlur:{type:String,default:"sm",validator:e=>["none","sm","md","lg","xl"].includes(e)},backdropOpacity:{type:[String,Number],default:"40"},backdropColor:{type:String,default:"slate-900"},backdropLockScroll:{type:Boolean,default:!0}},emits:["close","opened","closed","update:variant"],setup(e,{emit:a}){const n=e,O=a,N=[{value:"modal",label:"Модальное окно",icon:Y},{value:"fullscreen",label:"На весь экран",icon:te},{value:"sidebar-right",label:"Боковая панель",icon:ee},{value:"half-right",label:"Половина справа",icon:ue}],j=t=>{O("update:variant",t)},z=i(()=>{switch(n.variant){case"sidebar-right":case"half-right":return"slide-right";default:return"fade-scale"}}),T=i(()=>{switch(n.variant){case"fullscreen":return"fixed inset-0 flex items-center justify-center p-0";case"sidebar-right":return"fixed inset-0 flex items-end justify-end";case"half-right":return"fixed top-[73px] bottom-0 right-0 z-20 flex w-1/2 pointer-events-none";default:return"fixed inset-0 flex items-center justify-center px-4 py-4 overflow-y-auto"}}),I=i(()=>{const t="bg-white shadow-2xl flex flex-col";switch(n.variant){case"fullscreen":return`${t} w-full h-full p-8`;case"sidebar-right":return`${t} h-full w-full max-w-md p-6 border-l border-slate-200`;case"half-right":return`${t} h-full w-full p-6 border-l border-slate-200 pointer-events-auto`;default:return`${t} rounded-2xl w-full max-h-[90vh] p-6 my-auto ${W.value}`}}),W=i(()=>{if(n.variant!=="modal")return"";switch(n.width){case"sm":return"max-w-md";case"lg":return"max-w-3xl";case"xl":return"max-w-5xl";default:return"max-w-xl"}}),Z=i(()=>{if(["0","5","10","20","30","40","50","60","70","80","90","95","100"].includes(String(n.backdropOpacity)))return`bg-${n.backdropColor}/${n.backdropOpacity}`;const u={"slate-900":"rgb(15 23 42","gray-900":"rgb(17 24 39",black:"rgb(0 0 0",white:"rgb(255 255 255"};return`${u[n.backdropColor]||u["slate-900"]} / ${n.backdropOpacity}%)`});return(t,u)=>(r(),h(K,{show:e.open&&e.variant!=="half-right",blur:e.backdropBlur,"background-color":Z.value,"z-index":e.variant==="half-right"?"20":"50","lock-scroll":e.backdropLockScroll,dismissible:e.closable&&e.variant!=="half-right",onClose:u[4]||(u[4]=o=>t.$emit("close"))},{default:X(()=>[_(P,{name:z.value,onAfterEnter:u[2]||(u[2]=o=>t.$emit("opened")),onAfterLeave:u[3]||(u[3]=o=>t.$emit("closed"))},{default:X(()=>[e.open?(r(),s("div",{key:0,class:b(T.value),onClick:u[1]||(u[1]=q(o=>e.closable&&t.$emit("close"),["self"])),"data-component":"DXModal","data-variant":e.variant},[l("div",{class:b(I.value)},[l("div",ae,[l("h3",oe,[B(t.$slots,"title",{},()=>[u[5]||(u[5]=G("Диалог",-1))],!0)]),e.showModeSwitcher?(r(),s("div",re,[(r(),s(U,null,H(N,o=>l("button",{key:o.value,type:"button",class:b(["rounded-lg p-1.5 transition-colors",e.variant===o.value?"bg-white text-slate-900 shadow-sm":"text-slate-400 hover:text-slate-600 hover:bg-white/50"]),title:o.label,onClick:ce=>j(o.value)},[(r(),h(J(o.icon),{class:"h-4 w-4"}))],10,le)),64))])):p("",!0),e.closable?(r(),h(Q,{key:1,size:"md",variant:"default",onClick:u[0]||(u[0]=o=>t.$emit("close"))})):p("",!0)]),l("div",se,[B(t.$slots,"default",{},void 0,!0)]),t.$slots.actions?(r(),s("div",ie,[B(t.$slots,"actions",{},void 0,!0)])):p("",!0)],2)],10,ne)):p("",!0)]),_:3},8,["name"])]),_:3},8,["show","blur","background-color","z-index","lock-scroll","dismissible"]))}},d=R(L,[["__scopeId","data-v-fc45c283"]]);L.__docgenInfo={exportName:"default",displayName:"DXModal",description:"",tags:{},props:[{name:"open",description:"Открыто/закрыто",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",description:"Вариант: modal | fullscreen | sidebar-right | half-right",type:{name:"string"},defaultValue:{func:!1,value:'"modal"'}},{name:"width",description:"Ширина (для modal): sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"closable",description:"Можно ли закрыть",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showModeSwitcher",description:"Показывать переключатель режимов",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"backdropBlur",description:"Размытие backdrop: none | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:"'sm'"},values:["none","sm","md","lg","xl"]},{name:"backdropOpacity",description:"Прозрачность backdrop: 0-100",type:{name:"string|number"},defaultValue:{func:!1,value:"'40'"}},{name:"backdropColor",description:"Цвет backdrop: slate-900 | gray-900 | black | white",type:{name:"string"},defaultValue:{func:!1,value:"'slate-900'"}},{name:"backdropLockScroll",description:"Блокировать скролл body",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"},{name:"opened"},{name:"closed"},{name:"update:variant"}],slots:[{name:"title"},{name:"default"},{name:"actions"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXModal/DXModal.vue"]};const Ce={title:"Organisms/DXModal",component:d,tags:["autodocs"],argTypes:{variant:{control:"select",options:["modal","fullscreen","sidebar-right","half-right"],description:"Тип модального окна"},width:{control:"select",options:["sm","md","lg","xl"],description:"Ширина (только для modal)"},closable:{control:"boolean",description:"Можно ли закрыть"},showModeSwitcher:{control:"boolean",description:"Показать переключатель режимов"}}},m={render:e=>({components:{DXModal:d,DXButton:g},setup(){const a=c(!1);return{args:e,open:a}},template:`
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
    `})},f={args:{variant:"sidebar-right"},render:e=>({components:{DXModal:d,DXButton:g},setup(){const a=c(!1);return{args:e,open:a}},template:`
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
    `})},v={args:{variant:"fullscreen"},render:e=>({components:{DXModal:d,DXButton:g},setup(){const a=c(!1);return{args:e,open:a}},template:`
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
    `})},D={args:{showModeSwitcher:!0},render:e=>({components:{DXModal:d,DXButton:g},setup(){const a=c(!1),n=c("modal");return{args:e,open:a,variant:n}},template:`
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
    `})};var k,w,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var x,C,y;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(C=f.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var M,$,S;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(S=($=v.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var A,F,V;D.parameters={...D.parameters,docs:{...(A=D.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(F=D.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};const ye=["Default","Sidebar","Fullscreen","WithModeSwitcher"];export{m as Default,v as Fullscreen,f as Sidebar,D as WithModeSwitcher,ye as __namedExportsOrder,Ce as default};
