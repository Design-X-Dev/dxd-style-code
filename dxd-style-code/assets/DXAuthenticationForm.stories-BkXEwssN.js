import{r as s,c as F,a as v,o as g,p as C,q as b,g as D,j as t,e as a,y as d,z as le,d as ue,b as p}from"./vue.esm-bundler-C1fUoNF-.js";import{u as X}from"./useClassComposition-Dym2pzZ_.js";import{u as ie}from"./useSpacing-BOHUzi8w.js";import{_ as y}from"./DXInput-BG2R0LGs.js";import{_ as q}from"./DXPasswordInput-B2m2H6Xc.js";import{_ as f}from"./DXFormControl-Dg_VsVTj.js";import{_ as E}from"./DXButton-DzgLKRkE.js";import{_ as z}from"./DXCheckbox-DQusejYU.js";import{_ as k}from"./DXLink-BApoi3ng.js";import{_ as de}from"./DXHeading-S6mljWwV.js";import{_ as me}from"./DXAlert-CisRDAlQ.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./EyeIcon-DEic3pSg.js";import"./DXText-Bu-Qlv6N.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./DXValidationIcon-n1eDkzYR.js";import"./CheckIcon-B1lKtPCn.js";import"./DX-C5LZz0an.js";import"./DXAvatar-CBvTh_o7.js";import"./DXBackdrop-D0xxNXxX.js";import"./DXBadge-Cnl9-G8k.js";import"./DXBlockquote-56KYmpO4.js";import"./DXBox-BETOFdSU.js";import"./DXCard-CLY4ojX0.js";import"./DXCode-9eJ3x3YL.js";import"./DXContainer-DdAaCCrN.js";import"./DXDivider-Cu8D1wP6.js";import"./DXDropdownItem-sgbg46Q-.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXFlex-wmS4uXZI.js";import"./DXGrid-CzBFoCRA.js";import"./DXImage-0wzmLVnc.js";import"./DXObserver-BdOJti0k.js";import"./PhotoIcon-Bus_5N6F.js";import"./DXInputAddon-DgJzdsLu.js";import"./DXLabel-CawZsE44.js";import"./DXList-BqIgZjEd.js";import"./DXLoader-DAWlORDv.js";import"./DXNav-rdhJaqaA.js";import"./DXProgress-kFfDE3m6.js";import"./DXRadio-CRh-GVY2.js";import"./DXSkeleton-Bdkkus-3.js";import"./DXSlider-BmXbmwYm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DXSpacer-Cmns9whx.js";import"./DXStack-D6-bNsWk.js";import"./DXTags-CLVQQJAQ.js";import"./XMarkIcon-DuL0Z66U.js";import"./DXToast-C7fDgW_4.js";import"./DXToggle-BJ1nSv9U.js";import"./DXToggleButton-DkgvzhFe.js";import"./DXTooltip-Dp5bmrPy.js";import"./DXCloseButton-xtCn8OZ8.js";import"./XMarkIcon-DTqRFgaM.js";const pe=["data-mode"],ce={class:"space-y-4"},ge={class:"flex items-center justify-between"},fe={class:"text-center text-sm text-slate-600"},ve={class:"space-y-4"},be={class:"text-center text-sm text-slate-600"},we={class:"space-y-4"},Fe={class:"text-center"},De={class:"space-y-4"},w={__name:"DXAuthenticationForm",props:{mode:{type:String,default:"login",validator:o=>["login","register","forgot-password","2fa"].includes(o)},loading:{type:Boolean,default:!1},error:{type:String,default:""},errors:{type:Object,default:()=>({})},showHeader:{type:Boolean,default:!0}},emits:["submit","mode-change"],setup(o,{emit:l}){const c=o,u=l,m=s({email:"",password:"",remember:!1}),r=s({name:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1}),V=s({email:""}),h=s({code:""}),_=F(()=>({login:"Вход",register:"Регистрация","forgot-password":"Восстановление пароля","2fa":"Двухфакторная аутентификация"})),ee=F(()=>X("w-full max-w-md mx-auto")),oe=F(()=>X("mb-6")),ne=F(()=>X("mb-4")),x=F(()=>X("",ie("md","padding"))),S=F(()=>c.mode==="login"?m.value.email.trim()!==""&&m.value.password.trim()!=="":c.mode==="register"?r.value.name.trim()!==""&&r.value.email.trim()!==""&&r.value.password.trim()!==""&&r.value.confirmPassword.trim()!==""&&r.value.agreeToTerms:c.mode==="forgot-password"?V.value.email.trim()!=="":c.mode==="2fa"?h.value.code.trim().length===6:!1);function te(){u("submit",{mode:"login",data:{...m.value}})}function re(){r.value.password===r.value.confirmPassword&&u("submit",{mode:"register",data:{...r.value}})}function ae(){u("submit",{mode:"forgot-password",data:{...V.value}})}function se(){u("submit",{mode:"2fa",data:{...h.value}})}function A(i){u("mode-change",i)}function ye(i){}return(i,e)=>(g(),v("div",{class:b(ee.value),"data-component":"DXAuthenticationForm","data-mode":o.mode},[o.showHeader||i.$slots.header?(g(),v("div",{key:0,class:b(oe.value)},[D(i.$slots,"header",{},()=>[t(de,{level:"2",size:"2xl",weight:"bold",color:"default",align:"center"},{default:a(()=>[d(le(_.value[o.mode]),1)]),_:1})])],2)):C("",!0),o.error||i.$slots.error?(g(),v("div",{key:1,class:b(ne.value)},[D(i.$slots,"error",{},()=>[o.error?(g(),ue(me,{key:0,type:"error",message:o.error},null,8,["message"])):C("",!0)])],2)):C("",!0),o.mode==="login"?(g(),v("div",{key:2,class:b(x.value)},[D(i.$slots,"login",{},()=>[p("div",ce,[t(f,{label:"Email",error:o.errors.email},{default:a(()=>[t(y,{modelValue:m.value.email,"onUpdate:modelValue":[e[0]||(e[0]=n=>m.value.email=n),e[1]||(e[1]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(f,{label:"Пароль",error:o.errors.password},{default:a(()=>[t(q,{modelValue:m.value.password,"onUpdate:modelValue":[e[2]||(e[2]=n=>m.value.password=n),e[3]||(e[3]=n=>void 0)],placeholder:"Введите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),p("div",ge,[t(z,{modelValue:m.value.remember,"onUpdate:modelValue":e[4]||(e[4]=n=>m.value.remember=n),size:"sm",label:"Запомнить меня"},null,8,["modelValue"]),t(k,{variant:"link",size:"sm",onClick:e[5]||(e[5]=n=>A("forgot-password"))},{default:a(()=>[...e[22]||(e[22]=[d(" Забыли пароль? ",-1)])]),_:1})]),t(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:te},{default:a(()=>[...e[23]||(e[23]=[d(" Войти ",-1)])]),_:1},8,["loading","disabled"]),p("div",fe,[e[25]||(e[25]=d(" Нет аккаунта? ",-1)),t(k,{variant:"link",size:"sm",onClick:e[6]||(e[6]=n=>A("register"))},{default:a(()=>[...e[24]||(e[24]=[d(" Зарегистрироваться ",-1)])]),_:1})])])])],2)):o.mode==="register"?(g(),v("div",{key:3,class:b(x.value)},[D(i.$slots,"register",{},()=>[p("div",ve,[t(f,{label:"Имя",error:o.errors.name},{default:a(()=>[t(y,{modelValue:r.value.name,"onUpdate:modelValue":[e[7]||(e[7]=n=>r.value.name=n),e[8]||(e[8]=n=>void 0)],placeholder:"Введите имя",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(f,{label:"Email",error:o.errors.email},{default:a(()=>[t(y,{modelValue:r.value.email,"onUpdate:modelValue":[e[9]||(e[9]=n=>r.value.email=n),e[10]||(e[10]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(f,{label:"Пароль",error:o.errors.password},{default:a(()=>[t(q,{modelValue:r.value.password,"onUpdate:modelValue":[e[11]||(e[11]=n=>r.value.password=n),e[12]||(e[12]=n=>void 0)],placeholder:"Введите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(f,{label:"Подтверждение пароля",error:o.errors.confirmPassword},{default:a(()=>[t(q,{modelValue:r.value.confirmPassword,"onUpdate:modelValue":[e[13]||(e[13]=n=>r.value.confirmPassword=n),e[14]||(e[14]=n=>void 0)],placeholder:"Подтвердите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(z,{modelValue:r.value.agreeToTerms,"onUpdate:modelValue":e[15]||(e[15]=n=>r.value.agreeToTerms=n),size:"sm",label:"Я согласен с условиями использования"},null,8,["modelValue"]),t(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:re},{default:a(()=>[...e[26]||(e[26]=[d(" Зарегистрироваться ",-1)])]),_:1},8,["loading","disabled"]),p("div",be,[e[28]||(e[28]=d(" Уже есть аккаунт? ",-1)),t(k,{variant:"link",size:"sm",onClick:e[16]||(e[16]=n=>A("login"))},{default:a(()=>[...e[27]||(e[27]=[d(" Войти ",-1)])]),_:1})])])])],2)):o.mode==="forgot-password"?(g(),v("div",{key:4,class:b(x.value)},[D(i.$slots,"forgot-password",{},()=>[p("div",we,[e[31]||(e[31]=p("p",{class:"text-sm text-slate-600 text-center"}," Введите email, и мы отправим вам инструкции по восстановлению пароля. ",-1)),t(f,{label:"Email",error:o.errors.email},{default:a(()=>[t(y,{modelValue:V.value.email,"onUpdate:modelValue":[e[17]||(e[17]=n=>V.value.email=n),e[18]||(e[18]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:ae},{default:a(()=>[...e[29]||(e[29]=[d(" Отправить ",-1)])]),_:1},8,["loading","disabled"]),p("div",Fe,[t(k,{variant:"link",size:"sm",onClick:e[19]||(e[19]=n=>A("login"))},{default:a(()=>[...e[30]||(e[30]=[d(" Вернуться к входу ",-1)])]),_:1})])])])],2)):o.mode==="2fa"?(g(),v("div",{key:5,class:b(x.value)},[D(i.$slots,"2fa",{},()=>[p("div",De,[e[33]||(e[33]=p("p",{class:"text-sm text-slate-600 text-center"}," Введите код из приложения аутентификации. ",-1)),t(f,{label:"Код",error:o.errors.code},{default:a(()=>[t(y,{modelValue:h.value.code,"onUpdate:modelValue":[e[20]||(e[20]=n=>h.value.code=n),e[21]||(e[21]=n=>void 0)],placeholder:"000000",maxlength:"6",required:""},null,8,["modelValue"])]),_:1},8,["error"]),t(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:se},{default:a(()=>[...e[32]||(e[32]=[d(" Подтвердить ",-1)])]),_:1},8,["loading","disabled"])])])],2)):C("",!0)],10,pe))}};w.__docgenInfo={exportName:"default",displayName:"DXAuthenticationForm",description:"",tags:{},props:[{name:"mode",description:"Режим формы: login | register | forgot-password | 2fa",tags:{default:[{description:"'login'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"login"'},values:["login","register","forgot-password","2fa"]},{name:"loading",description:"Состояние загрузки",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",description:"Сообщение об ошибке",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"errors",description:`Ошибки валидации
Формат: { field: 'error message' }`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showHeader",description:"Показывать header",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"submit"},{name:"mode-change"}],slots:[{name:"header"},{name:"error"},{name:"login"},{name:"register"},{name:"forgot-password"},{name:"2fa"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXAuthenticationForm/DXAuthenticationForm.vue"]};const ko={title:"Organisms/DXAuthenticationForm",component:w,tags:["autodocs"],parameters:{docs:{description:{component:`
Готовая форма аутентификации (логин/регистрация) с валидацией и обработкой ошибок.

## Назначение

DXAuthenticationForm предоставляет готовую форму аутентификации с поддержкой
различных режимов (логин, регистрация, восстановление пароля, 2FA) и валидацией.

## Архитектура

### Использует
- \`DXInput\` - для полей ввода
- \`DXPasswordInput\` - для полей пароля
- \`DXFormControl\` - для валидации
- \`DXButton\` - для отправки
- \`DXCheckbox\` - для чекбоксов
- \`DXLink\` - для ссылок
- \`DXAlert\` - для ошибок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Страницы входа в приложение
- Регистрация новых пользователей
- Восстановление пароля
- Двухфакторная аутентификация

## Внутренняя логика

### Режимы
- **login**: Форма входа
- **register**: Форма регистрации
- **forgot-password**: Восстановление пароля
- **2fa**: Двухфакторная аутентификация

### Валидация
Поддерживает валидацию через prop \`errors\` и автоматическую проверку заполненности полей.

## Особенности

### Переключение режимов
Можно переключаться между режимами через события или программно.

### Кастомизация
Все элементы формы можно кастомизировать через slots.
        `}}}},$={parameters:{docs:{description:{story:"Форма входа с email и паролем."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("login"),l=s(!1),c=s("");return{mode:o,loading:l,error:c,handleSubmit:r=>{console.log("Вход:",r),l.value=!0,setTimeout(()=>{l.value=!1},2e3)},handleModeChange:r=>{o.value=r}}},template:`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          :error="error"
          @submit="handleSubmit"
          @mode-change="handleModeChange"
        />
      </div>
    `})},B={parameters:{docs:{description:{story:"Форма регистрации с валидацией пароля."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("register"),l=s(!1);return{mode:o,loading:l,handleSubmit:u=>{console.log("Регистрация:",u)}}},template:`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `})},P={parameters:{docs:{description:{story:"Форма восстановления пароля."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("forgot-password"),l=s(!1);return{mode:o,loading:l,handleSubmit:u=>{console.log("Восстановление пароля:",u)}}},template:`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `})},T={parameters:{docs:{description:{story:"Форма двухфакторной аутентификации."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("2fa"),l=s(!1);return{mode:o,loading:l,handleSubmit:u=>{console.log("2FA:",u)}}},template:`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    `})},U={parameters:{docs:{description:{story:"Форма с ошибками валидации."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("login"),l=s({email:"Неверный email",password:"Неверный пароль"});return{mode:o,errors:l}},template:`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :errors="errors"
        />
      </div>
    `})};var M,N,L;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма входа с email и паролем.'
      }
    }
  },
  render: () => ({
    components: {
      DXAuthenticationForm
    },
    setup() {
      const mode = ref('login');
      const loading = ref(false);
      const error = ref('');
      const handleSubmit = data => {
        console.log('Вход:', data);
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 2000);
      };
      const handleModeChange = newMode => {
        mode.value = newMode;
      };
      return {
        mode,
        loading,
        error,
        handleSubmit,
        handleModeChange
      };
    },
    template: \`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          :error="error"
          @submit="handleSubmit"
          @mode-change="handleModeChange"
        />
      </div>
    \`
  })
}`,...(L=(N=$.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var j,I,O;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма регистрации с валидацией пароля.'
      }
    }
  },
  render: () => ({
    components: {
      DXAuthenticationForm
    },
    setup() {
      const mode = ref('register');
      const loading = ref(false);
      const handleSubmit = data => {
        console.log('Регистрация:', data);
      };
      return {
        mode,
        loading,
        handleSubmit
      };
    },
    template: \`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    \`
  })
}`,...(O=(I=B.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var H,R,W;P.parameters={...P.parameters,docs:{...(H=P.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма восстановления пароля.'
      }
    }
  },
  render: () => ({
    components: {
      DXAuthenticationForm
    },
    setup() {
      const mode = ref('forgot-password');
      const loading = ref(false);
      const handleSubmit = data => {
        console.log('Восстановление пароля:', data);
      };
      return {
        mode,
        loading,
        handleSubmit
      };
    },
    template: \`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    \`
  })
}`,...(W=(R=P.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма двухфакторной аутентификации.'
      }
    }
  },
  render: () => ({
    components: {
      DXAuthenticationForm
    },
    setup() {
      const mode = ref('2fa');
      const loading = ref(false);
      const handleSubmit = data => {
        console.log('2FA:', data);
      };
      return {
        mode,
        loading,
        handleSubmit
      };
    },
    template: \`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    \`
  })
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;U.parameters={...U.parameters,docs:{...(Q=U.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Форма с ошибками валидации.'
      }
    }
  },
  render: () => ({
    components: {
      DXAuthenticationForm
    },
    setup() {
      const mode = ref('login');
      const errors = ref({
        email: 'Неверный email',
        password: 'Неверный пароль'
      });
      return {
        mode,
        errors
      };
    },
    template: \`
      <div class="max-w-md mx-auto p-8">
        <DXAuthenticationForm
          :mode="mode"
          :errors="errors"
        />
      </div>
    \`
  })
}`,...(Z=(Y=U.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const $o=["Login","Register","ForgotPassword","TwoFactor","WithErrors"];export{P as ForgotPassword,$ as Login,B as Register,T as TwoFactor,U as WithErrors,$o as __namedExportsOrder,ko as default};
