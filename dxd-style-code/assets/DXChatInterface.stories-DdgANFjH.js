import{a as u,o as n,b as o,r as g,c as f,w as ve,A as De,k as d,l as i,m as C,F as E,D as F,H as we,e as b,f as w,g as S,x as O,u as p,z as V,q as P,s as q}from"./vue.esm-bundler-CzLKT_w4.js";import{u as h}from"./useClassComposition-Dym2pzZ_.js";import{u as $}from"./useSpacing-BOHUzi8w.js";import{_ as R}from"./DXAvatar-DaIMde_I.js";import{_ as J}from"./DXButton-ChBdj9Dq.js";import{_ as k}from"./DXIcon-BbhqsR95.js";import{_ as xe}from"./DXHeading-DwWVK5ab.js";import{_ as ye}from"./DXText-DW7ThwBY.js";import{_ as be}from"./DXTextarea-BWvf_8d7.js";import{r as Ie}from"./DocumentIcon-CUCYbdQ8.js";import{r as Ce}from"./CheckCircleIcon-C9JGObPW.js";import{r as j}from"./CheckIcon-CXhdKTUC.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useAnimation-ByVAdqmf.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";function Se(s,v){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})])}function ke(s,v){return n(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"})])}const _e=["data-auto-scroll"],Ue={class:"flex items-center justify-between"},Be={class:"flex items-center gap-3"},Xe={key:0,class:"text-xs text-slate-500 mb-1"},Ee={class:"text-sm"},Fe={key:0,class:"mt-2 space-y-2"},Ve={class:"text-xs"},$e={class:"text-xs text-slate-500"},je={class:"flex items-end gap-2"},B={__name:"DXChatInterface",props:{messages:{type:Array,required:!0,default:()=>[]},currentUser:{type:Object,required:!0},chatInfo:{type:Object,default:()=>({})},autoScroll:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},inputPlaceholder:{type:String,default:"Введите сообщение..."},inputRows:{type:Number,default:2},allowFileUpload:{type:Boolean,default:!0}},emits:["send-message","upload-file","scroll"],setup(s,{emit:v}){const c=s,D=v,x=g(""),I=g(null),y=g(null),M=g(!0),te=f(()=>{const a=[];let t=null;return c.messages.forEach(r=>{const l=new Date(r.date),e=t?new Date(t.date):null;(!t||!e||l.toDateString()!==e.toDateString()||l-e>36e5)&&(t={date:l,messages:[]},a.push(t)),t.messages.push(r)}),a}),ae=f(()=>h("flex flex-col h-full bg-white")),se=f(()=>h("flex-shrink-0 border-b border-slate-200",$("md","padding"))),ne=f(()=>h("flex-1 overflow-y-auto",$("md","padding"))),re=f(()=>h("text-center text-xs text-slate-500 mb-4")),oe=f(()=>h("space-y-2"));function ue(a){return h("mb-2")}function le(a){const t={sent:"text-slate-400",delivered:"text-slate-400",read:"text-blue-500"};return t[a]||t.sent}const ie=f(()=>h("flex-shrink-0 border-t border-slate-200",$("md","padding"))),T=f(()=>x.value.trim().length>0);function m(a){return a.userId===c.currentUser.id}function de(a){return{sent:j,delivered:j,read:Ce}[a]||j}function ce(a){if(!a)return"";const t=new Date(a),r=new Date,l=new Date(r);return l.setDate(l.getDate()-1),t.toDateString()===r.toDateString()?"Сегодня":t.toDateString()===l.toDateString()?"Вчера":t.toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"})}function me(a){return a?new Date(a).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}):""}function X(){I.value&&c.autoScroll&&we(()=>{I.value.scrollTop=I.value.scrollHeight})}function fe(a){const t=a.target,r=t.scrollHeight-t.scrollTop<=t.clientHeight+100;M.value=r,D("scroll",{isAtBottom:r,scrollTop:t.scrollTop})}function z(){T.value&&(D("send-message",{text:x.value,userId:c.currentUser.id,date:new Date}),x.value="",X())}function pe(){}function he(){y.value&&y.value.click()}function ge(a){const t=Array.from(a.target.files);t.length>0&&D("upload-file",t),y.value&&(y.value.value="")}return ve(()=>c.messages.length,()=>{M.value&&X()}),De(()=>{X()}),(a,t)=>(n(),u("div",{class:i(ae.value),"data-component":"DXChatInterface","data-auto-scroll":s.autoScroll},[s.showHeader||a.$slots.header?(n(),u("div",{key:0,class:i(se.value)},[C(a.$slots,"header",{},()=>{var r,l;return[o("div",Ue,[o("div",Be,[(r=s.chatInfo)!=null&&r.avatar?(n(),b(R,{key:0,src:s.chatInfo.avatar,name:s.chatInfo.name,size:"md"},null,8,["src","name"])):d("",!0),o("div",null,[w(xe,{level:"3",weight:"semibold",color:"default"},{default:S(()=>{var e;return[O(p(((e=s.chatInfo)==null?void 0:e.name)||"Чат"),1)]}),_:1}),(l=s.chatInfo)!=null&&l.status?(n(),b(ye,{key:0,tag:"p",size:"xs",color:"muted"},{default:S(()=>[O(p(s.chatInfo.status),1)]),_:1})):d("",!0)])]),C(a.$slots,"header-actions")])]})],2)):d("",!0),o("div",{ref_key:"messagesContainer",ref:I,class:i(ne.value),onScroll:fe},[(n(!0),u(E,null,F(te.value,(r,l)=>(n(),u("div",{key:l,class:"mb-4"},[r.date?(n(),u("div",{key:0,class:i(re.value)},p(ce(r.date)),3)):d("",!0),o("div",{class:i(oe.value)},[(n(!0),u(E,null,F(r.messages,e=>(n(),u("div",{key:e.id,class:i(ue())},[C(a.$slots,"message",{message:e,isOwn:m(e)},()=>{var A,N,H;return[o("div",{class:i(["flex gap-3",m(e)?"flex-row-reverse":""])},[m(e)?d("",!0):(n(),b(R,{key:0,src:(A=e.user)==null?void 0:A.avatar,name:(N=e.user)==null?void 0:N.name,size:"sm"},null,8,["src","name"])),o("div",{class:i(["flex-1 max-w-[70%]",m(e)?"items-end":"items-start"])},[m(e)?d("",!0):(n(),u("div",Xe,p((H=e.user)==null?void 0:H.name),1)),o("div",{class:i(["rounded-lg px-4 py-2",m(e)?"bg-blue-500 text-white":"bg-slate-100 text-slate-900"])},[o("p",Ee,p(e.text),1),e.files&&e.files.length>0?(n(),u("div",Fe,[(n(!0),u(E,null,F(e.files,L=>(n(),u("div",{key:L.id,class:"flex items-center gap-2"},[w(k,{icon:V(Ie),size:"sm"},null,8,["icon"]),o("span",Ve,p(L.name),1)]))),128))])):d("",!0)],2),o("div",{class:i(["flex items-center gap-1 mt-1",m(e)?"justify-end":"justify-start"])},[o("span",$e,p(me(e.date)),1),m(e)&&e.status?(n(),b(k,{key:0,icon:de(e.status),size:"xs",class:i(le(e.status))},null,8,["icon","class"])):d("",!0)],2)],2)],2)]})],2))),128))],2)]))),128))],34),o("div",{class:i(ie.value)},[C(a.$slots,"input",{},()=>[o("div",je,[s.allowFileUpload?(n(),b(J,{key:0,variant:"ghost",size:"sm",onClick:he},{icon:S(()=>[w(k,{icon:V(ke),size:"sm"},null,8,["icon"])]),_:1})):d("",!0),o("input",{ref_key:"fileInput",ref:y,type:"file",class:"hidden",multiple:"",onChange:ge},null,544),w(be,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=r=>x.value=r),placeholder:s.inputPlaceholder,rows:s.inputRows,onKeydown:[P(q(z,["exact","prevent"]),["enter"]),P(q(pe,["shift","exact"]),["enter"])]},null,8,["modelValue","placeholder","rows","onKeydown"]),w(J,{variant:"primary",onClick:z,disabled:!T.value},{icon:S(()=>[w(k,{icon:V(Se),size:"sm"},null,8,["icon"])]),_:1},8,["disabled"])])])],2)],10,_e))}};B.__docgenInfo={exportName:"default",displayName:"DXChatInterface",description:"",tags:{},props:[{name:"messages",description:`Сообщения
Формат: [{ id, text, user: { id, name, avatar }, date, status?, files? }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"currentUser",description:`Текущий пользователь
Формат: { id, name, avatar? }`,type:{name:"object"},required:!0},{name:"chatInfo",description:`Информация о чате
Формат: { name, avatar?, status? }`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"autoScroll",description:"Автоматический скролл к новым сообщениям",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showHeader",description:"Показывать header",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"inputPlaceholder",description:"Placeholder для поля ввода",type:{name:"string"},defaultValue:{func:!1,value:'"Введите сообщение..."'}},{name:"inputRows",description:"Количество строк в поле ввода",tags:{default:[{description:"2",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"allowFileUpload",description:"Разрешить загрузку файлов",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"send-message"},{name:"upload-file"},{name:"scroll"}],slots:[{name:"header"},{name:"header-actions"},{name:"message",scoped:!0,bindings:[{name:"message",title:"binding"},{name:"is-own",title:"binding"}]},{name:"input"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXChatInterface/DXChatInterface.vue"]};const st={title:"Organisms/DXChatInterface",component:B,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXChatInterface

Интерфейс чата с сообщениями, вводом текста и поддержкой различных типов сообщений.

## Назначение

DXChatInterface предоставляет полнофункциональный интерфейс чата с поддержкой
отправки сообщений, загрузки файлов, группировки сообщений по времени и статусов доставки.

## Архитектура

### Использует
- \`DXTextarea\` - для ввода сообщений
- \`DXButton\` - для отправки
- \`DXAvatar\` - для аватаров
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Чат-интерфейсы в приложениях
- Системы поддержки
- Мессенджеры
- Командные чаты

## Внутренняя логика

### Группировка сообщений
Сообщения группируются по дате и времени для удобного отображения.

### Статусы сообщений
Поддерживает статусы: sent (отправлено), delivered (доставлено), read (прочитано).

### Автоматический скролл
При \`autoScroll={true}\` автоматически прокручивается к новым сообщениям.

## Особенности

### Загрузка файлов
При \`allowFileUpload={true}\` можно загружать файлы к сообщениям.

### Горячие клавиши
- Enter - отправить сообщение
- Shift+Enter - новая строка
        `}}}},ee=[{id:1,text:"Привет! Как дела?",userId:2,user:{id:2,name:"John Doe",avatar:"/avatar1.jpg"},date:new Date(Date.now()-36e5),status:"read"},{id:2,text:"Отлично, спасибо! А у тебя?",userId:1,user:{id:1,name:"Вы",avatar:"/avatar2.jpg"},date:new Date(Date.now()-18e5),status:"read"},{id:3,text:"Тоже хорошо!",userId:2,user:{id:2,name:"John Doe",avatar:"/avatar1.jpg"},date:new Date,status:"delivered"}],Me={id:1,name:"Вы",avatar:"/avatar2.jpg"},_={parameters:{docs:{description:{story:"Базовый интерфейс чата с сообщениями и полем ввода."}}},render:()=>({components:{DXChatInterface:B},setup(){const s=g(ee),v=g({name:"John Doe",status:"В сети"});return{messages:s,chatInfo:v,handleSendMessage:D=>{console.log("Отправлено сообщение:",D),s.value.push({id:s.value.length+1,...D,user:Me})}}},template:`
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :chat-info="chatInfo"
          @send-message="handleSendMessage"
        />
      </div>
    `})},U={parameters:{docs:{description:{story:"Интерфейс чата с поддержкой загрузки файлов."}}},render:()=>({components:{DXChatInterface:B},setup(){return{messages:g(ee),handleUploadFile:c=>{console.log("Загружены файлы:",c)}}},template:`
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :allow-file-upload="true"
          @upload-file="handleUploadFile"
        />
      </div>
    `})};var G,K,W;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Базовый интерфейс чата с сообщениями и полем ввода.'
      }
    }
  },
  render: () => ({
    components: {
      DXChatInterface
    },
    setup() {
      const messages = ref(defaultMessages);
      const chatInfo = ref({
        name: 'John Doe',
        status: 'В сети'
      });
      const handleSendMessage = data => {
        console.log('Отправлено сообщение:', data);
        messages.value.push({
          id: messages.value.length + 1,
          ...data,
          user: currentUser
        });
      };
      return {
        messages,
        chatInfo,
        handleSendMessage
      };
    },
    template: \`
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :chat-info="chatInfo"
          @send-message="handleSendMessage"
        />
      </div>
    \`
  })
}`,...(W=(K=_.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Z,Q,Y;U.parameters={...U.parameters,docs:{...(Z=U.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Интерфейс чата с поддержкой загрузки файлов.'
      }
    }
  },
  render: () => ({
    components: {
      DXChatInterface
    },
    setup() {
      const messages = ref(defaultMessages);
      const handleUploadFile = files => {
        console.log('Загружены файлы:', files);
      };
      return {
        messages,
        handleUploadFile
      };
    },
    template: \`
      <div class="h-[600px] border border-slate-200 rounded-lg overflow-hidden">
        <DXChatInterface
          :messages="messages"
          :current-user="{ id: 1, name: 'Вы' }"
          :allow-file-upload="true"
          @upload-file="handleUploadFile"
        />
      </div>
    \`
  })
}`,...(Y=(Q=U.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const nt=["Default","WithFileUpload"];export{_ as Default,U as WithFileUpload,nt as __namedExportsOrder,st as default};
