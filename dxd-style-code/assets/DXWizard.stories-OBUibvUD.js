import{r as i,c as o,A as ce,w as k,a as p,k as D,b as m,l as f,f as A,u as g,F as me,D as ve,g as S,T as fe,m as O,o as s,e as b,z as ge,x as w}from"./vue.esm-bundler-CzLKT_w4.js";import{u as h}from"./useClassComposition-Dym2pzZ_.js";import{u as De}from"./useSpacing-BOHUzi8w.js";import{_ as he}from"./DXProgress-DmXiHqLY.js";import{_ as x}from"./DXButton-ChBdj9Dq.js";import{_ as Se}from"./DXIcon-BbhqsR95.js";import{r as be}from"./CheckIcon-CKhG8hn0.js";import{_ as H}from"./DXInput-BLwLEfW9.js";import{_ as Q}from"./DXFormControl-AlN7sECA.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";import"./DXText-DW7ThwBY.js";import"./DXValidationIcon-CNh0i5IT.js";const ze=["data-current-step"],we={key:0,class:"mt-2 text-sm text-slate-600 text-center"},xe={key:1,class:"text-sm font-medium"},ye={class:"flex-1 ml-4"},Ce={class:"text-sm font-medium text-slate-900"},Ee={key:0,class:"text-xs text-slate-500"},Xe={class:"p-8 text-center text-slate-500"},Fe={class:"text-sm mt-2"},z={__name:"DXWizard",props:{steps:{type:Array,required:!0},currentStep:{type:Number,default:1},wizardData:{type:Object,default:()=>({})},validationErrors:{type:Object,default:()=>({})},allowSkip:{type:Boolean,default:!1},saveProgressEnabled:{type:Boolean,default:!1},storageKey:{type:String,default:"dx-wizard-progress"},loading:{type:Boolean,default:!1},showProgress:{type:Boolean,default:!0},showProgressLabel:{type:Boolean,default:!0},showStepsIndicator:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},emits:["update:currentStep","update:wizardData","next","prev","complete","cancel","step-change","save-progress"],setup(e,{emit:v}){const u=e,r=v,a=i(u.currentStep),l=i({...u.wizardData}),R=o(()=>u.steps.length===0?0:(a.value-1)/u.steps.length*100),Y=o(()=>"sm"),X=o(()=>u.steps[a.value-1]||{}),P=o(()=>{var c;const t={},n=((c=X.value)==null?void 0:c.fields)||Object.keys(l.value);for(const d of n)u.validationErrors[d]&&(t[d]=u.validationErrors[d]);return t}),F=o(()=>u.allowSkip?!0:Object.keys(P.value).length===0),Z=o(()=>a.value>1),B=o(()=>Object.keys(u.validationErrors).length===0),_=o(()=>u.transition),ee=o(()=>h("w-full",De("md","padding"))),te=o(()=>h("mb-6")),ae=o(()=>h("mb-8 relative"));function ue(t){return h("flex items-center relative mb-6",t===a.value-1?"text-slate-900":"text-slate-500")}function ne(t){const n=t+1;return n<a.value?"w-10 h-10 bg-green-500 text-white":n===a.value?"w-10 h-10 bg-blue-500 text-white":"w-10 h-10 bg-slate-200 text-slate-500"}function re(t){return t+1<a.value?"bg-green-500":"bg-slate-200"}const se=o(()=>h("min-h-[300px]")),le=o(()=>h("flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200"));function oe(t){return t+1<a.value}function j(){a.value<u.steps.length&&F.value&&(a.value++,r("update:currentStep",a.value),r("next",a.value),r("step-change",a.value),W())}function V(){a.value>1&&(a.value--,r("update:currentStep",a.value),r("prev",a.value),r("step-change",a.value),W())}function ie(t){t>=1&&t<=u.steps.length&&(a.value=t,r("update:currentStep",a.value),r("step-change",a.value),W())}function N(){const t={currentStep:a.value,wizardData:{...l.value}};localStorage.setItem(u.storageKey,JSON.stringify(t)),r("save-progress",t)}function W(){u.saveProgressEnabled&&N()}function de(){B.value&&(r("complete",{wizardData:{...l.value},currentStep:a.value}),u.saveProgressEnabled&&localStorage.removeItem(u.storageKey))}function pe(){r("cancel")}return ce(()=>{if(u.saveProgressEnabled){const t=localStorage.getItem(u.storageKey);if(t)try{const n=JSON.parse(t);n.currentStep&&(a.value=n.currentStep,r("update:currentStep",a.value)),n.wizardData&&(l.value={...n.wizardData},r("update:wizardData",{...l.value}))}catch(n){console.warn("Не удалось загрузить сохраненный прогресс:",n)}}}),k(()=>u.currentStep,t=>{t!==a.value&&(a.value=t)}),k(()=>u.wizardData,t=>{l.value={...t}},{deep:!0}),k(l,t=>{r("update:wizardData",{...t})},{deep:!0}),(t,n)=>(s(),p("div",{class:f(ee.value),"data-component":"DXWizard","data-current-step":e.currentStep},[e.showProgress?(s(),p("div",{key:0,class:f(te.value)},[A(he,{value:R.value,max:100,size:Y.value,"show-label":e.showProgressLabel},null,8,["value","size","show-label"]),e.showProgressLabel?(s(),p("div",we," Шаг "+g(e.currentStep)+" из "+g(e.steps.length),1)):D("",!0)],2)):D("",!0),e.showStepsIndicator?(s(),p("div",{key:1,class:f(ae.value)},[(s(!0),p(me,null,ve(e.steps,(c,d)=>(s(),p("div",{key:d,class:f(ue(d))},[m("div",{class:f([ne(d),"flex items-center justify-center rounded-full"])},[oe(d)?(s(),b(Se,{key:0,icon:ge(be),size:"sm",class:"text-white"},null,8,["icon"])):(s(),p("span",xe,g(d+1),1))],2),m("div",ye,[m("div",Ce,g(c.title),1),c.description?(s(),p("div",Ee,g(c.description),1)):D("",!0)]),d<e.steps.length-1?(s(),p("div",{key:0,class:f([re(d),"absolute left-5 top-10 w-0.5 h-full"])},null,2)):D("",!0)],2))),128))],2)):D("",!0),m("div",{class:f(se.value)},[A(fe,{name:_.value,mode:"out-in"},{default:S(()=>[(s(),p("div",{key:e.currentStep,class:"w-full"},[O(t.$slots,`step-${e.currentStep}`,{step:X.value,stepIndex:e.currentStep-1,formData:e.wizardData,errors:P.value},()=>{var c;return[m("div",Xe,[m("p",null,"Шаг "+g(e.currentStep)+": "+g((c=X.value)==null?void 0:c.title),1),m("p",Fe," Используйте slot step-"+g(e.currentStep)+" для контента ",1)])]})]))]),_:3},8,["name"])],2),m("div",{class:f(le.value)},[O(t.$slots,"navigation",{canGoNext:F.value,canGoPrev:Z.value,goNext:j,goPrev:V,goToStep:ie,currentStep:e.currentStep,totalSteps:e.steps.length,save:N,cancel:pe},()=>[e.currentStep>1?(s(),b(x,{key:0,variant:"ghost",disabled:e.loading,onClick:V},{default:S(()=>[...n[0]||(n[0]=[w(" Назад ",-1)])]),_:1},8,["disabled"])):D("",!0),n[4]||(n[4]=m("div",{class:"flex-1"},null,-1)),e.saveProgressEnabled?(s(),b(x,{key:1,variant:"ghost",disabled:e.loading,onClick:N},{default:S(()=>[...n[1]||(n[1]=[w(" Сохранить прогресс ",-1)])]),_:1},8,["disabled"])):D("",!0),e.currentStep<e.steps.length?(s(),b(x,{key:2,variant:"primary",disabled:e.loading||!F.value,onClick:j},{default:S(()=>[...n[2]||(n[2]=[w(" Далее ",-1)])]),_:1},8,["disabled"])):(s(),b(x,{key:3,variant:"success",disabled:e.loading||!B.value,onClick:de},{default:S(()=>[...n[3]||(n[3]=[w(" Завершить ",-1)])]),_:1},8,["disabled"]))])],2)],10,ze))}};z.__docgenInfo={exportName:"default",displayName:"DXWizard",description:"",tags:{},props:[{name:"steps",description:`Шаги мастера
Формат: [{ title, description?, schema?, fields? }]`,type:{name:"array"},required:!0},{name:"currentStep",description:"Текущий шаг (начинается с 1)",tags:{default:[{description:"1",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"wizardData",description:"Данные мастера (v-model)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"validationErrors",description:`Ошибки валидации
Формат: { [field]: 'error message' }`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"allowSkip",description:"Разрешить пропуск шагов",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"saveProgressEnabled",description:"Сохранять прогресс",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"storageKey",description:"Ключ для сохранения в localStorage",tags:{default:[{description:"'dx-wizard-progress'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"dx-wizard-progress"'}},{name:"loading",description:"Состояние загрузки",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showProgress",description:"Показывать индикатор прогресса",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showProgressLabel",description:"Показывать метку прогресса",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showStepsIndicator",description:"Показывать индикатор шагов",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"transition",description:"Имя transition",tags:{default:[{description:"'fade'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"fade"'}}],events:[{name:"update:currentStep"},{name:"update:wizardData"},{name:"next"},{name:"prev"},{name:"complete"},{name:"cancel"},{name:"step-change"},{name:"save-progress"}],slots:[{name:"`step-${currentStep}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"step",title:"binding"},{name:"stepIndex",title:"binding"},{name:"formData",title:"binding"},{name:"errors",title:"binding"}]},{name:"navigation",scoped:!0,bindings:[{name:"canGoNext",title:"binding"},{name:"canGoPrev",title:"binding"},{name:"goNext",title:"binding"},{name:"goPrev",title:"binding"},{name:"goToStep",title:"binding"},{name:"currentStep",title:"binding"},{name:"totalSteps",title:"binding"},{name:"save",title:"binding"},{name:"cancel",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXWizard/DXWizard.vue"]};const He={title:"Organisms/DXWizard",component:z,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXWizard

Мастер настройки с шагами, валидацией и возможностью сохранения прогресса.

## Назначение

DXWizard предоставляет мастер настройки с поддержкой шагов, валидации,
сохранения прогресса и навигации. Отличается от DXFormWizard более общим назначением
(не только для форм, но и для любых пошаговых процессов).

## Архитектура

### Использует
- \`DXProgress\` - для индикатора прогресса
- \`DXButton\` - для навигации
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Первоначальная настройка приложения
- Мастер импорта данных
- Пошаговая настройка сложных процессов
- Онбординг новых пользователей

## Внутренняя логика

### Сохранение прогресса
При \`saveProgressEnabled={true}\` прогресс сохраняется в localStorage.

### Валидация
Поддерживает валидацию через prop \`validationErrors\`.

### Навигация
Можно переходить между шагами, пропускать опциональные шаги.

## Особенности

### Отличие от DXFormWizard
DXWizard более общий компонент для любых пошаговых процессов,
а не только для форм.

### Автоматическое сохранение
При включенном сохранении прогресс сохраняется автоматически при переходе между шагами.
        `}}}},I=[{title:"Добро пожаловать",description:"Давайте настроим ваше приложение"},{title:"Основные настройки",description:"Настройте основные параметры"},{title:"Дополнительно",description:"Настройте дополнительные параметры"},{title:"Завершение",description:"Проверьте настройки и завершите"}],y={parameters:{docs:{description:{story:"Базовый мастер настройки с шагами и навигацией."}}},render:()=>({components:{DXWizard:z,DXInput:H,DXFormControl:Q},setup(){const e=i(1),v=i({}),u=i(I);return{currentStep:e,wizardData:v,steps:u,handleNext:l=>{console.log("Переход к шагу:",l)},handleComplete:l=>{console.log("Мастер завершен:",l)}}},template:`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        @next="handleNext"
        @complete="handleComplete"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
            <p class="text-slate-600">Давайте настроим ваше приложение</p>
          </div>
        </template>
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Название проекта">
              <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
            </DXFormControl>
            <DXFormControl label="Описание">
              <DXInput v-model="wizardData.description" placeholder="Введите описание" />
            </DXFormControl>
          </div>
        </template>
        <template #step-3>
          <div class="text-center py-8">
            <p class="text-slate-600">Дополнительные настройки</p>
          </div>
        </template>
        <template #step-4>
          <div class="text-center py-8">
            <p class="text-slate-600">Проверьте настройки и завершите</p>
          </div>
        </template>
      </DXWizard>
    `})},C={parameters:{docs:{description:{story:"Мастер с сохранением прогресса. Прогресс сохраняется автоматически при переходе между шагами."}}},render:()=>({components:{DXWizard:z},setup(){const e=i(1),v=i({}),u=i(I);return{currentStep:e,wizardData:v,steps:u}},template:`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :save-progress-enabled="true"
      />
    `})},E={parameters:{docs:{description:{story:"Мастер с валидацией. Нельзя перейти к следующему шагу, если текущий не валиден."}}},render:()=>({components:{DXWizard:z,DXInput:H,DXFormControl:Q},setup(){const e=i(1),v=i({projectName:""}),u=i({}),r=i(I);return{currentStep:e,wizardData:v,validationErrors:u,steps:r,handleStepChange:l=>{l===2&&!v.value.projectName?u.value.projectName="Название проекта обязательно":delete u.value.projectName}}},template:`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :validation-errors="validationErrors"
        @step-change="handleStepChange"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
          </div>
        </template>
        <template #step-2>
          <DXFormControl label="Название проекта" :error="validationErrors.projectName">
            <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
          </DXFormControl>
        </template>
      </DXWizard>
    `})};var $,G,L;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Базовый мастер настройки с шагами и навигацией.'
      }
    }
  },
  render: () => ({
    components: {
      DXWizard,
      DXInput,
      DXFormControl
    },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({});
      const steps = ref(defaultSteps);
      const handleNext = step => {
        console.log('Переход к шагу:', step);
      };
      const handleComplete = data => {
        console.log('Мастер завершен:', data);
      };
      return {
        currentStep,
        wizardData,
        steps,
        handleNext,
        handleComplete
      };
    },
    template: \`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        @next="handleNext"
        @complete="handleComplete"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
            <p class="text-slate-600">Давайте настроим ваше приложение</p>
          </div>
        </template>
        <template #step-2>
          <div class="space-y-4">
            <DXFormControl label="Название проекта">
              <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
            </DXFormControl>
            <DXFormControl label="Описание">
              <DXInput v-model="wizardData.description" placeholder="Введите описание" />
            </DXFormControl>
          </div>
        </template>
        <template #step-3>
          <div class="text-center py-8">
            <p class="text-slate-600">Дополнительные настройки</p>
          </div>
        </template>
        <template #step-4>
          <div class="text-center py-8">
            <p class="text-slate-600">Проверьте настройки и завершите</p>
          </div>
        </template>
      </DXWizard>
    \`
  })
}`,...(L=(G=y.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var T,K,q;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Мастер с сохранением прогресса. Прогресс сохраняется автоматически при переходе между шагами.'
      }
    }
  },
  render: () => ({
    components: {
      DXWizard
    },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({});
      const steps = ref(defaultSteps);
      return {
        currentStep,
        wizardData,
        steps
      };
    },
    template: \`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :save-progress-enabled="true"
      />
    \`
  })
}`,...(q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,M,U;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Мастер с валидацией. Нельзя перейти к следующему шагу, если текущий не валиден.'
      }
    }
  },
  render: () => ({
    components: {
      DXWizard,
      DXInput,
      DXFormControl
    },
    setup() {
      const currentStep = ref(1);
      const wizardData = ref({
        projectName: ''
      });
      const validationErrors = ref({});
      const steps = ref(defaultSteps);
      const handleStepChange = step => {
        // Валидация при переходе
        if (step === 2 && !wizardData.value.projectName) {
          validationErrors.value.projectName = 'Название проекта обязательно';
        } else {
          delete validationErrors.value.projectName;
        }
      };
      return {
        currentStep,
        wizardData,
        validationErrors,
        steps,
        handleStepChange
      };
    },
    template: \`
      <DXWizard
        v-model:current-step="currentStep"
        v-model:wizard-data="wizardData"
        :steps="steps"
        :validation-errors="validationErrors"
        @step-change="handleStepChange"
      >
        <template #step-1>
          <div class="text-center py-8">
            <h3 class="text-xl font-semibold mb-2">Добро пожаловать!</h3>
          </div>
        </template>
        <template #step-2>
          <DXFormControl label="Название проекта" :error="validationErrors.projectName">
            <DXInput v-model="wizardData.projectName" placeholder="Введите название" />
          </DXFormControl>
        </template>
      </DXWizard>
    \`
  })
}`,...(U=(M=E.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Qe=["Default","WithProgressSave","WithValidation"];export{y as Default,C as WithProgressSave,E as WithValidation,Qe as __namedExportsOrder,He as default};
