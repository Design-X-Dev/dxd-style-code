import{r as s,c as F,a as v,o as g,k as C,l as b,m as D,f as a,g as r,x as i,u as le,e as ue,b as p}from"./vue.esm-bundler-CzLKT_w4.js";import{u as X}from"./useClassComposition-Dym2pzZ_.js";import{u as de}from"./useSpacing-BOHUzi8w.js";import{_ as y}from"./DXInput-BLwLEfW9.js";import{_ as M}from"./DXPasswordInput-DYj06sp-.js";import{_ as f}from"./DXFormControl-AlN7sECA.js";import{_ as E}from"./DXButton-ChBdj9Dq.js";import{_ as q}from"./DXCheckbox-ztLTdipt.js";import{_ as k}from"./DXLink-Dne95vSb.js";import{_ as ie}from"./DXHeading-DwWVK5ab.js";import{_ as me}from"./DXAlert-Bqx8I-c3.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./EyeIcon-OVb4bIYJ.js";import"./DXText-DW7ThwBY.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./DXValidationIcon-CNh0i5IT.js";import"./CheckIcon-CKhG8hn0.js";import"./DXCloseButton-Cjo_FBNn.js";import"./XMarkIcon-B2lmC1bd.js";const pe=["data-mode"],ce={class:"space-y-4"},ge={class:"flex items-center justify-between"},fe={class:"text-center text-sm text-slate-600"},ve={class:"space-y-4"},be={class:"text-center text-sm text-slate-600"},we={class:"space-y-4"},Fe={class:"text-center"},De={class:"space-y-4"},w={__name:"DXAuthenticationForm",props:{mode:{type:String,default:"login",validator:o=>["login","register","forgot-password","2fa"].includes(o)},loading:{type:Boolean,default:!1},error:{type:String,default:""},errors:{type:Object,default:()=>({})},showHeader:{type:Boolean,default:!0}},emits:["submit","mode-change"],setup(o,{emit:l}){const c=o,u=l,m=s({email:"",password:"",remember:!1}),t=s({name:"",email:"",password:"",confirmPassword:"",agreeToTerms:!1}),V=s({email:""}),h=s({code:""}),_=F(()=>({login:"Вход",register:"Регистрация","forgot-password":"Восстановление пароля","2fa":"Двухфакторная аутентификация"})),ee=F(()=>X("w-full max-w-md mx-auto")),oe=F(()=>X("mb-6")),ne=F(()=>X("mb-4")),x=F(()=>X("",de("md","padding"))),S=F(()=>c.mode==="login"?m.value.email.trim()!==""&&m.value.password.trim()!=="":c.mode==="register"?t.value.name.trim()!==""&&t.value.email.trim()!==""&&t.value.password.trim()!==""&&t.value.confirmPassword.trim()!==""&&t.value.agreeToTerms:c.mode==="forgot-password"?V.value.email.trim()!=="":c.mode==="2fa"?h.value.code.trim().length===6:!1);function ae(){u("submit",{mode:"login",data:{...m.value}})}function te(){t.value.password===t.value.confirmPassword&&u("submit",{mode:"register",data:{...t.value}})}function re(){u("submit",{mode:"forgot-password",data:{...V.value}})}function se(){u("submit",{mode:"2fa",data:{...h.value}})}function A(d){u("mode-change",d)}function ye(d){}return(d,e)=>(g(),v("div",{class:b(ee.value),"data-component":"DXAuthenticationForm","data-mode":o.mode},[o.showHeader||d.$slots.header?(g(),v("div",{key:0,class:b(oe.value)},[D(d.$slots,"header",{},()=>[a(ie,{level:"2",size:"2xl",weight:"bold",color:"default",align:"center"},{default:r(()=>[i(le(_.value[o.mode]),1)]),_:1})])],2)):C("",!0),o.error||d.$slots.error?(g(),v("div",{key:1,class:b(ne.value)},[D(d.$slots,"error",{},()=>[o.error?(g(),ue(me,{key:0,type:"error",message:o.error},null,8,["message"])):C("",!0)])],2)):C("",!0),o.mode==="login"?(g(),v("div",{key:2,class:b(x.value)},[D(d.$slots,"login",{},()=>[p("div",ce,[a(f,{label:"Email",error:o.errors.email},{default:r(()=>[a(y,{modelValue:m.value.email,"onUpdate:modelValue":[e[0]||(e[0]=n=>m.value.email=n),e[1]||(e[1]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(f,{label:"Пароль",error:o.errors.password},{default:r(()=>[a(M,{modelValue:m.value.password,"onUpdate:modelValue":[e[2]||(e[2]=n=>m.value.password=n),e[3]||(e[3]=n=>void 0)],placeholder:"Введите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),p("div",ge,[a(q,{modelValue:m.value.remember,"onUpdate:modelValue":e[4]||(e[4]=n=>m.value.remember=n),size:"sm",label:"Запомнить меня"},null,8,["modelValue"]),a(k,{variant:"link",size:"sm",onClick:e[5]||(e[5]=n=>A("forgot-password"))},{default:r(()=>[...e[22]||(e[22]=[i(" Забыли пароль? ",-1)])]),_:1})]),a(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:ae},{default:r(()=>[...e[23]||(e[23]=[i(" Войти ",-1)])]),_:1},8,["loading","disabled"]),p("div",fe,[e[25]||(e[25]=i(" Нет аккаунта? ",-1)),a(k,{variant:"link",size:"sm",onClick:e[6]||(e[6]=n=>A("register"))},{default:r(()=>[...e[24]||(e[24]=[i(" Зарегистрироваться ",-1)])]),_:1})])])])],2)):o.mode==="register"?(g(),v("div",{key:3,class:b(x.value)},[D(d.$slots,"register",{},()=>[p("div",ve,[a(f,{label:"Имя",error:o.errors.name},{default:r(()=>[a(y,{modelValue:t.value.name,"onUpdate:modelValue":[e[7]||(e[7]=n=>t.value.name=n),e[8]||(e[8]=n=>void 0)],placeholder:"Введите имя",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(f,{label:"Email",error:o.errors.email},{default:r(()=>[a(y,{modelValue:t.value.email,"onUpdate:modelValue":[e[9]||(e[9]=n=>t.value.email=n),e[10]||(e[10]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(f,{label:"Пароль",error:o.errors.password},{default:r(()=>[a(M,{modelValue:t.value.password,"onUpdate:modelValue":[e[11]||(e[11]=n=>t.value.password=n),e[12]||(e[12]=n=>void 0)],placeholder:"Введите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(f,{label:"Подтверждение пароля",error:o.errors.confirmPassword},{default:r(()=>[a(M,{modelValue:t.value.confirmPassword,"onUpdate:modelValue":[e[13]||(e[13]=n=>t.value.confirmPassword=n),e[14]||(e[14]=n=>void 0)],placeholder:"Подтвердите пароль",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(q,{modelValue:t.value.agreeToTerms,"onUpdate:modelValue":e[15]||(e[15]=n=>t.value.agreeToTerms=n),size:"sm",label:"Я согласен с условиями использования"},null,8,["modelValue"]),a(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:te},{default:r(()=>[...e[26]||(e[26]=[i(" Зарегистрироваться ",-1)])]),_:1},8,["loading","disabled"]),p("div",be,[e[28]||(e[28]=i(" Уже есть аккаунт? ",-1)),a(k,{variant:"link",size:"sm",onClick:e[16]||(e[16]=n=>A("login"))},{default:r(()=>[...e[27]||(e[27]=[i(" Войти ",-1)])]),_:1})])])])],2)):o.mode==="forgot-password"?(g(),v("div",{key:4,class:b(x.value)},[D(d.$slots,"forgot-password",{},()=>[p("div",we,[e[31]||(e[31]=p("p",{class:"text-sm text-slate-600 text-center"}," Введите email, и мы отправим вам инструкции по восстановлению пароля. ",-1)),a(f,{label:"Email",error:o.errors.email},{default:r(()=>[a(y,{modelValue:V.value.email,"onUpdate:modelValue":[e[17]||(e[17]=n=>V.value.email=n),e[18]||(e[18]=n=>void 0)],type:"email",placeholder:"Введите email",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:re},{default:r(()=>[...e[29]||(e[29]=[i(" Отправить ",-1)])]),_:1},8,["loading","disabled"]),p("div",Fe,[a(k,{variant:"link",size:"sm",onClick:e[19]||(e[19]=n=>A("login"))},{default:r(()=>[...e[30]||(e[30]=[i(" Вернуться к входу ",-1)])]),_:1})])])])],2)):o.mode==="2fa"?(g(),v("div",{key:5,class:b(x.value)},[D(d.$slots,"2fa",{},()=>[p("div",De,[e[33]||(e[33]=p("p",{class:"text-sm text-slate-600 text-center"}," Введите код из приложения аутентификации. ",-1)),a(f,{label:"Код",error:o.errors.code},{default:r(()=>[a(y,{modelValue:h.value.code,"onUpdate:modelValue":[e[20]||(e[20]=n=>h.value.code=n),e[21]||(e[21]=n=>void 0)],placeholder:"000000",maxlength:"6",required:""},null,8,["modelValue"])]),_:1},8,["error"]),a(E,{variant:"primary",loading:o.loading,disabled:!S.value,block:"",onClick:se},{default:r(()=>[...e[32]||(e[32]=[i(" Подтвердить ",-1)])]),_:1},8,["loading","disabled"])])])],2)):C("",!0)],10,pe))}};w.__docgenInfo={exportName:"default",displayName:"DXAuthenticationForm",description:"",tags:{},props:[{name:"mode",description:"Режим формы: login | register | forgot-password | 2fa",tags:{default:[{description:"'login'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"login"'},values:["login","register","forgot-password","2fa"]},{name:"loading",description:"Состояние загрузки",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"error",description:"Сообщение об ошибке",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"errors",description:`Ошибки валидации
Формат: { field: 'error message' }`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"showHeader",description:"Показывать header",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"submit"},{name:"mode-change"}],slots:[{name:"header"},{name:"error"},{name:"login"},{name:"register"},{name:"forgot-password"},{name:"2fa"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXAuthenticationForm/DXAuthenticationForm.vue"]};const Je={title:"Organisms/DXAuthenticationForm",component:w,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},$={parameters:{docs:{description:{story:"Форма входа с email и паролем."}}},render:()=>({components:{DXAuthenticationForm:w},setup(){const o=s("login"),l=s(!1),c=s("");return{mode:o,loading:l,error:c,handleSubmit:t=>{console.log("Вход:",t),l.value=!0,setTimeout(()=>{l.value=!1},2e3)},handleModeChange:t=>{o.value=t}}},template:`
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
    `})};var z,N,L;$.parameters={...$.parameters,docs:{...(z=$.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Z=(Y=U.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ke=["Login","Register","ForgotPassword","TwoFactor","WithErrors"];export{P as ForgotPassword,$ as Login,B as Register,T as TwoFactor,U as WithErrors,Ke as __namedExportsOrder,Je as default};
