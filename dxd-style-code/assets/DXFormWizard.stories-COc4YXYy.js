import{r as m,c,w as ye,a as i,p as S,b as p,q as d,j as q,z as v,F as A,G as P,e as y,T as Fe,g as j,o as r,d as F,x as Ce,y as h}from"./vue.esm-bundler-C1fUoNF-.js";import{u as D}from"./useClassComposition-Dym2pzZ_.js";import{_ as xe}from"./DXProgress-kFfDE3m6.js";import{_ as C}from"./DXButton-DzgLKRkE.js";import{_ as he}from"./DXIcon-Bc0cQL8C.js";import{_ as Ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as ze}from"./CheckIcon-B1lKtPCn.js";import{_ as V}from"./DXFormControl-Dg_VsVTj.js";import{_ as G}from"./DXInput-BG2R0LGs.js";import{_ as Be}from"./DXSelect-CgmhnMxb.js";import{_ as ke}from"./DXTextarea-D9Exn-g-.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXText-Bu-Qlv6N.js";import"./DXValidationIcon-n1eDkzYR.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";const _e=["data-current-step"],we={class:"mt-2 text-sm text-slate-600 text-center"},We=["disabled","onClick"],Ne={class:"flex items-center gap-2"},Ie={key:1,class:"text-sm font-medium"},Ae={class:"flex-1 ml-4"},Pe={class:"text-sm font-medium text-slate-900"},Ve={key:0,class:"text-xs text-slate-500"},Ge={class:"p-8 text-center text-slate-500"},Te={class:"text-sm mt-2"},$e={class:"flex items-center justify-between"},qe={key:1},je={class:"flex gap-2"},ue={__name:"DXFormWizard",props:{currentStep:{type:Number,default:0},steps:{type:Array,required:!0,validator:t=>t.length>0},formData:{type:Object,default:()=>({})},validation:{type:Function,default:null},allowSkip:{type:Boolean,default:!1},navigationStyle:{type:String,default:"steps",validator:t=>["tabs","steps","dots","none"].includes(t)},showProgress:{type:Boolean,default:!0},progressSize:{type:String,default:"md",validator:t=>["xs","sm","md","lg"].includes(t)}},emits:["update:currentStep","step-change","submit","next","prev"],setup(t,{emit:f}){const s=t,g=f,w=m(s.currentStep),l=m([]),n=c({get:()=>s.currentStep,set:e=>{X(e)&&(w.value=e,g("update:currentStep",e),g("step-change",e))}}),re=c(()=>(n.value+1)/s.steps.length*100),se=c(()=>"wizard-fade"),oe=c(()=>D("w-full")),le=c(()=>D("mb-6")),ie=c(()=>D("flex border-b border-slate-200 mb-6",s.allowSkip?"":"gap-1")),pe=c(()=>D("relative mb-8 space-y-4")),me=c(()=>D("min-h-[300px] mb-6")),ce=c(()=>D("flex items-center justify-between pt-6 border-t border-slate-200"));function de(e){const a=n.value===e,o=l.value.includes(e),u=X(e);return D("px-4 py-2 text-sm font-medium transition-colors border-b-2",{"border-blue-600 text-blue-600":a,"border-transparent text-slate-600 hover:text-slate-900":!a,"text-slate-400 cursor-not-allowed":!u&&!a,"text-green-600":o&&!a})}function ve(e){const a=n.value===e,o=l.value.includes(e);return D("w-6 h-6 text-xs",{"bg-blue-600 text-white":a,"bg-green-600 text-white":o&&!a,"bg-slate-200 text-slate-600":!a&&!o})}function De(e){return D("relative flex items-start")}function fe(e){const a=n.value===e,o=l.value.includes(e);return D("w-10 h-10 flex-shrink-0 z-10",{"bg-blue-600 text-white":a,"bg-green-600 text-white":o&&!a,"bg-slate-200 text-slate-600":!a&&!o})}function ge(e){const a=l.value.includes(e+1);return D({"bg-green-600":a,"bg-slate-200":!a})}const W=c(()=>n.value>=s.steps.length-1?!1:s.validation?s.validation(n.value,s.formData):!0),N=c(()=>n.value>0);function X(e){return s.allowSkip?!0:e<=n.value||l.value.includes(e)}function T(){if(!W.value)return;l.value.includes(n.value)||l.value.push(n.value);const e=n.value+1;n.value=e,g("next",e)}function $(){if(!N.value)return;const e=n.value-1;n.value=e,g("prev",e)}function I(e){X(e)&&(n.value=e)}function be(e){return l.value.includes(e)}function Xe(){l.value.includes(n.value)||l.value.push(n.value),g("submit",s.formData)}return ye(()=>s.currentStep,e=>{w.value=e}),(e,a)=>(r(),i("div",{class:d(oe.value),"data-component":"DXFormWizard","data-current-step":n.value},[t.showProgress?(r(),i("div",{key:0,class:d(le.value)},[q(xe,{value:re.value,max:100,size:t.progressSize,"show-label":!1},null,8,["value","size"]),p("div",we," Шаг "+v(n.value+1)+" из "+v(t.steps.length),1)],2)):S("",!0),t.navigationStyle==="tabs"?(r(),i("div",{key:1,class:d(ie.value)},[(r(!0),i(A,null,P(t.steps,(o,u)=>(r(),i("button",{key:u,type:"button",class:d(de(u)),disabled:!X(u),onClick:Se=>I(u)},[p("span",Ne,[p("span",{class:d([ve(u),"flex items-center justify-center rounded-full"])},v(u+1),3),p("span",null,v(o.title),1)])],10,We))),128))],2)):S("",!0),t.navigationStyle==="steps"?(r(),i("div",{key:2,class:d(pe.value)},[(r(!0),i(A,null,P(t.steps,(o,u)=>(r(),i("div",{key:u,class:d(De())},[p("div",{class:d([fe(u),"flex items-center justify-center rounded-full"])},[be(u)?(r(),F(he,{key:0,icon:Ce(ze),size:"sm",class:"text-white"},null,8,["icon"])):(r(),i("span",Ie,v(u+1),1))],2),p("div",Ae,[p("div",Pe,v(o.title),1),o.description?(r(),i("div",Ve,v(o.description),1)):S("",!0)]),u<t.steps.length-1?(r(),i("div",{key:0,class:d([ge(u),"absolute left-5 top-10 w-0.5 h-full"])},null,2)):S("",!0)],2))),128))],2)):S("",!0),p("div",{class:d(me.value)},[q(Fe,{name:se.value,mode:"out-in"},{default:y(()=>[(r(),i("div",{key:n.value,class:"w-full"},[j(e.$slots,`step-${n.value+1}`,{step:t.steps[n.value],stepIndex:n.value},()=>{var o;return[p("div",Ge,[p("p",null,"Шаг "+v(n.value+1)+": "+v((o=t.steps[n.value])==null?void 0:o.title),1),p("p",Te,"Используйте slot step-"+v(n.value+1)+" для контента",1)])]},!0)]))]),_:3},8,["name"])],2),p("div",{class:d(ce.value)},[j(e.$slots,"navigation",{canGoNext:W.value,canGoPrev:N.value,goNext:T,goPrev:$,goToStep:I,currentStep:n.value,totalSteps:t.steps.length},()=>[p("div",$e,[N.value?(r(),F(C,{key:0,variant:"ghost",onClick:$},{default:y(()=>[...a[0]||(a[0]=[h(" Назад ",-1)])]),_:1})):(r(),i("div",qe)),p("div",je,[(r(!0),i(A,null,P(t.steps,(o,u)=>(r(),F(C,{key:u,variant:n.value===u?"primary":"ghost",size:"sm",disabled:!X(u),onClick:Se=>I(u)},{default:y(()=>[h(v(u+1),1)]),_:2},1032,["variant","disabled","onClick"]))),128))]),W.value?(r(),F(C,{key:2,variant:"primary",onClick:T},{default:y(()=>[...a[1]||(a[1]=[h(" Далее ",-1)])]),_:1})):(r(),F(C,{key:3,variant:"primary",onClick:Xe},{default:y(()=>[...a[2]||(a[2]=[h(" Завершить ",-1)])]),_:1}))])],!0)],2)],10,_e))}},b=Ee(ue,[["__scopeId","data-v-e110de01"]]);ue.__docgenInfo={exportName:"default",displayName:"DXFormWizard",description:"",tags:{},props:[{name:"currentStep",description:"Текущий шаг (v-model, 0-based)",tags:{default:[{description:"0",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"steps",description:"Массив шагов: [{ id, title, description? }]",type:{name:"array"},required:!0},{name:"formData",description:"Данные формы (для валидации)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"validation",description:`Функция валидации для каждого шага
Формат: (stepIndex, formData) => boolean`,type:{name:"func"},defaultValue:{func:!1,value:"null"}},{name:"allowSkip",description:"Разрешить пропуск шагов",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"navigationStyle",description:"Стиль навигации: tabs | steps | dots | none",tags:{default:[{description:"'steps'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"steps"'},values:["tabs","steps","dots","none"]},{name:"showProgress",description:"Показывать индикатор прогресса",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"progressSize",description:"Размер индикатора прогресса: xs | sm | md | lg",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["xs","sm","md","lg"]}],events:[{name:"update:currentStep"},{name:"step-change"},{name:"submit"},{name:"next"},{name:"prev"}],slots:[{name:"`step-${currentStep + 1}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"stepIndex",title:"binding"}]},{name:"navigation",scoped:!0,bindings:[{name:"canGoNext",title:"binding"},{name:"canGoPrev",title:"binding"},{name:"goNext",title:"binding"},{name:"goPrev",title:"binding"},{name:"goToStep",title:"binding"},{name:"currentStep",title:"binding"},{name:"totalSteps",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXFormWizard/DXFormWizard.vue"]};const x=[{id:1,title:"Личная информация",description:"Основные данные"},{id:2,title:"Работа",description:"Профессиональная информация"},{id:3,title:"Дополнительно",description:"Дополнительные сведения"}],mt={title:"Organisms/DXFormWizard",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXFormWizard

Многошаговая форма с индикатором прогресса и валидацией на каждом шаге.

## Назначение

DXFormWizard предоставляет структуру для создания многошаговых форм с навигацией,
валидацией и индикатором прогресса. Используется для регистрации, настройки профиля,
оформления заказов и других многоэтапных процессов.

## Архитектура

### Использует
- \`DXProgress\` - для индикатора прогресса
- \`DXButton\` - для навигации
- \`DXFormControl\` - для полей формы
- \`useClassComposition\` composable - для стилей

### Используется в
- Регистрация пользователей
- Настройка профиля
- Оформление заказа
- Мастер настройки приложения

## Внутренняя логика

### Навигация
- **tabs**: Навигация в виде вкладок
- **steps**: Навигация в виде шагов с соединительными линиями
- **dots**: Навигация в виде точек (будущая реализация)
- **none**: Без визуальной навигации

### Валидация
Можно указать функцию валидации для каждого шага через prop \`validation\`.
Валидация проверяется перед переходом на следующий шаг.

### Пропуск шагов
При \`allowSkip={true}\` можно переходить на любые шаги.
При \`allowSkip={false}\` можно переходить только на следующие шаги.

## Особенности

### Slots
- \`step-{n}\` - контент для каждого шага (step-1, step-2, ...)
- \`navigation\` - кастомная навигация

### Анимации
Переходы между шагами анимируются через Vue Transition.
        `}}},argTypes:{currentStep:{control:"number",min:0,max:2,description:"Текущий шаг (0-based, v-model).",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"Behavior"}},navigationStyle:{control:"select",options:["tabs","steps","dots","none"],description:"Стиль навигации: tabs | steps | dots | none.",table:{type:{summary:"string"},defaultValue:{summary:"steps"},category:"Appearance"}},showProgress:{control:"boolean",description:"Показывать индикатор прогресса.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},allowSkip:{control:"boolean",description:"Разрешить пропуск шагов.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},E={args:{currentStep:0,steps:x,navigationStyle:"steps"},parameters:{docs:{description:{story:"Базовая многошаговая форма с навигацией в стиле steps."}}},render:t=>({components:{DXFormWizard:b,DXFormControl:V,DXInput:G,DXSelect:Be,DXTextarea:ke},setup(){const f=m(t.currentStep),s=m({name:"",email:"",company:"",position:"",bio:""}),g=m([{value:"developer",label:"Разработчик"},{value:"designer",label:"Дизайнер"},{value:"manager",label:"Менеджер"}]);return{args:t,currentStep:f,formData:s,positions:g}},template:`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Компания">
              <DXInput v-model="formData.company" placeholder="Введите название компании" />
            </DXFormControl>
            <DXFormControl label="Должность">
              <DXSelect v-model="formData.position" :options="positions" placeholder="Выберите должность" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <DXFormControl label="О себе">
              <DXTextarea v-model="formData.bio" rows="5" placeholder="Расскажите о себе" />
            </DXFormControl>
          </div>
        </template>
      </DXFormWizard>
    `})},z={parameters:{docs:{description:{story:"Форма с валидацией на каждом шаге. Переход на следующий шаг возможен только при валидных данных."}}},render:()=>({components:{DXFormWizard:b,DXFormControl:V,DXInput:G},setup(){const t=m(0),f=m({name:"",email:""}),s=m(x);return{currentStep:t,formData:f,steps:s,validation:(l,n)=>l===0?n.name&&n.email:!0,handleSubmit:l=>{console.log("Форма отправлена:",l)}}},template:`
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="steps"
        :form-data="formData"
        :validation="validation"
        @submit="handleSubmit"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
            <p class="text-sm text-slate-500">Заполните все поля для продолжения</p>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 2: Работа</p>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 3: Дополнительно</p>
          </div>
        </template>
      </DXFormWizard>
    `})},B={args:{currentStep:0,steps:x,navigationStyle:"tabs"},parameters:{docs:{description:{story:"Навигация в стиле tabs. Шаги отображаются как вкладки."}}},render:t=>({components:{DXFormWizard:b,DXFormControl:V,DXInput:G},setup(){const f=m(t.currentStep),s=m({name:"",email:""});return{args:t,currentStep:f,formData:s}},template:`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <DXFormControl label="Имя">
            <DXInput v-model="formData.name" />
          </DXFormControl>
        </template>
        <template #step-2>
          <DXFormControl label="Email">
            <DXInput v-model="formData.email" />
          </DXFormControl>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    `})},k={args:{currentStep:0,steps:x,allowSkip:!0},parameters:{docs:{description:{story:"Форма с разрешенным пропуском шагов. Можно переходить на любые шаги."}}},render:t=>({components:{DXFormWizard:b},setup(){const f=m(t.currentStep);return{args:t,currentStep:f}},template:`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
      >
        <template #step-1>
          <p>Шаг 1</p>
        </template>
        <template #step-2>
          <p>Шаг 2</p>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    `})},_={parameters:{docs:{description:{story:"Форма с кастомной навигацией через slot navigation."}}},render:()=>({components:{DXFormWizard:b,DXButton:C},setup(){return{currentStep:m(0),defaultSteps:x}},template:`
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="defaultSteps"
      >
        <template #step-1>
          <p>Контент шага 1</p>
        </template>
        <template #step-2>
          <p>Контент шага 2</p>
        </template>
        <template #navigation="{ canGoNext, canGoPrev, goNext, goPrev }">
          <div class="flex justify-between">
            <DXButton v-if="canGoPrev" @click="goPrev">Назад</DXButton>
            <div v-else></div>
            <DXButton v-if="canGoNext" variant="primary" @click="goNext">Далее</DXButton>
            <DXButton v-else variant="primary">Завершить</DXButton>
          </div>
        </template>
      </DXFormWizard>
    `})};var O,L,U;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    steps: defaultSteps,
    navigationStyle: 'steps'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая многошаговая форма с навигацией в стиле steps.'
      }
    }
  },
  render: args => ({
    components: {
      DXFormWizard,
      DXFormControl,
      DXInput,
      DXSelect,
      DXTextarea
    },
    setup() {
      const currentStep = ref(args.currentStep);
      const formData = ref({
        name: '',
        email: '',
        company: '',
        position: '',
        bio: ''
      });
      const positions = ref([{
        value: 'developer',
        label: 'Разработчик'
      }, {
        value: 'designer',
        label: 'Дизайнер'
      }, {
        value: 'manager',
        label: 'Менеджер'
      }]);
      return {
        args,
        currentStep,
        formData,
        positions
      };
    },
    template: \`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Компания">
              <DXInput v-model="formData.company" placeholder="Введите название компании" />
            </DXFormControl>
            <DXFormControl label="Должность">
              <DXSelect v-model="formData.position" :options="positions" placeholder="Выберите должность" />
            </DXFormControl>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <DXFormControl label="О себе">
              <DXTextarea v-model="formData.bio" rows="5" placeholder="Расскажите о себе" />
            </DXFormControl>
          </div>
        </template>
      </DXFormWizard>
    \`
  })
}`,...(U=(L=E.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var H,J,K;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма с валидацией на каждом шаге. Переход на следующий шаг возможен только при валидных данных.'
      }
    }
  },
  render: () => ({
    components: {
      DXFormWizard,
      DXFormControl,
      DXInput
    },
    setup() {
      const currentStep = ref(0);
      const formData = ref({
        name: '',
        email: ''
      });
      const steps = ref(defaultSteps);
      const validation = (stepIndex, data) => {
        if (stepIndex === 0) {
          return data.name && data.email;
        }
        return true;
      };
      const handleSubmit = data => {
        console.log('Форма отправлена:', data);
      };
      return {
        currentStep,
        formData,
        steps,
        validation,
        handleSubmit
      };
    },
    template: \`
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="steps"
        :form-data="formData"
        :validation="validation"
        @submit="handleSubmit"
      >
        <template #step-1>
          <div class="space-y-4">
            <DXFormControl label="Имя" required>
              <DXInput v-model="formData.name" placeholder="Введите имя" />
            </DXFormControl>
            <DXFormControl label="Email" required>
              <DXInput v-model="formData.email" type="email" placeholder="Введите email" />
            </DXFormControl>
            <p class="text-sm text-slate-500">Заполните все поля для продолжения</p>
          </div>
        </template>
        
        <template #step-2>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 2: Работа</p>
          </div>
        </template>
        
        <template #step-3>
          <div class="space-y-4">
            <p class="text-slate-600">Шаг 3: Дополнительно</p>
          </div>
        </template>
      </DXFormWizard>
    \`
  })
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,R;B.parameters={...B.parameters,docs:{...(M=B.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    steps: defaultSteps,
    navigationStyle: 'tabs'
  },
  parameters: {
    docs: {
      description: {
        story: 'Навигация в стиле tabs. Шаги отображаются как вкладки.'
      }
    }
  },
  render: args => ({
    components: {
      DXFormWizard,
      DXFormControl,
      DXInput
    },
    setup() {
      const currentStep = ref(args.currentStep);
      const formData = ref({
        name: '',
        email: ''
      });
      return {
        args,
        currentStep,
        formData
      };
    },
    template: \`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
        :form-data="formData"
      >
        <template #step-1>
          <DXFormControl label="Имя">
            <DXInput v-model="formData.name" />
          </DXFormControl>
        </template>
        <template #step-2>
          <DXFormControl label="Email">
            <DXInput v-model="formData.email" />
          </DXFormControl>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    \`
  })
}`,...(R=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    currentStep: 0,
    steps: defaultSteps,
    allowSkip: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Форма с разрешенным пропуском шагов. Можно переходить на любые шаги.'
      }
    }
  },
  render: args => ({
    components: {
      DXFormWizard
    },
    setup() {
      const currentStep = ref(args.currentStep);
      return {
        args,
        currentStep
      };
    },
    template: \`
      <DXFormWizard
        v-model:current-step="currentStep"
        v-bind="args"
      >
        <template #step-1>
          <p>Шаг 1</p>
        </template>
        <template #step-2>
          <p>Шаг 2</p>
        </template>
        <template #step-3>
          <p>Шаг 3</p>
        </template>
      </DXFormWizard>
    \`
  })
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма с кастомной навигацией через slot navigation.'
      }
    }
  },
  render: () => ({
    components: {
      DXFormWizard,
      DXButton
    },
    setup() {
      const currentStep = ref(0);
      return {
        currentStep,
        defaultSteps
      };
    },
    template: \`
      <DXFormWizard
        v-model:current-step="currentStep"
        :steps="defaultSteps"
      >
        <template #step-1>
          <p>Контент шага 1</p>
        </template>
        <template #step-2>
          <p>Контент шага 2</p>
        </template>
        <template #navigation="{ canGoNext, canGoPrev, goNext, goPrev }">
          <div class="flex justify-between">
            <DXButton v-if="canGoPrev" @click="goPrev">Назад</DXButton>
            <div v-else></div>
            <DXButton v-if="canGoNext" variant="primary" @click="goNext">Далее</DXButton>
            <DXButton v-else variant="primary">Завершить</DXButton>
          </div>
        </template>
      </DXFormWizard>
    \`
  })
}`,...(ae=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const ct=["Default","WithValidation","TabsNavigation","AllowSkip","CustomNavigation"];export{k as AllowSkip,_ as CustomNavigation,E as Default,B as TabsNavigation,z as WithValidation,ct as __namedExportsOrder,mt as default};
