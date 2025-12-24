import{a as s,o,b as r,r as D,c as u,g as $,j as f,e as l,q as d,d as N,p as m,x as R,y as V,F,G as z,z as b,B as j}from"./vue.esm-bundler-C1fUoNF-.js";import{u as p}from"./useClassComposition-Dym2pzZ_.js";import{u as B}from"./useSpacing-BOHUzi8w.js";import{_ as x}from"./DXButton-DzgLKRkE.js";import{_ as X}from"./DXIcon-Bc0cQL8C.js";import{_ as ge}from"./DXBadge-Cnl9-G8k.js";import{_ as ve}from"./DXHeading-S6mljWwV.js";import{D as ye}from"./DXDropdown-DAfwPhYF.js";import{r as he}from"./BellIcon-Dyw4foDT.js";import{r as Ce}from"./CheckIcon-BtoXMcpp.js";import{r as De}from"./XMarkIcon-DTqRFgaM.js";import{r as ke}from"./XCircleIcon-CCzMyyl7.js";import{r as be}from"./ExclamationTriangleIcon-DX8m9Rs5.js";import{r as xe}from"./CheckCircleIcon-CdLAVfyU.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useAnimation-ByVAdqmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";function U(a,g){return o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"})])}const we=["data-group-by"],Ne={class:"flex items-center justify-between"},Be=["onClick"],Xe={class:"flex gap-3"},Ee={class:"flex-1"},_e={class:"flex items-center gap-2 mb-1"},Me={class:"font-semibold text-slate-900"},Se={key:0,class:"w-2 h-2 bg-blue-500 rounded-full"},$e={class:"text-sm text-slate-600 mb-1"},Re={class:"text-xs text-slate-500"},Ve={class:"flex flex-col gap-1"},w={__name:"DXNotificationCenter",props:{notifications:{type:Array,required:!0,default:()=>[]},unreadCount:{type:Number,default:0},groupBy:{type:String,default:"date",validator:a=>["date","type","none"].includes(a)},filterBy:{type:String,default:""},filterable:{type:Boolean,default:!1},filterOptions:{type:Array,default:()=>[{value:"all",label:"Все"},{value:"unread",label:"Непрочитанные"}]},showHeader:{type:Boolean,default:!0},position:{type:String,default:"bottom-right"},width:{type:String,default:"400px"},maxHeight:{type:String,default:"500px"}},emits:["mark-read","mark-all-read","delete","filter","notification-click"],setup(a,{emit:g}){const v=a,h=g,c=D(!1),C=D("all"),k=u(()=>{let e=[...v.notifications];return C.value==="unread"&&(e=e.filter(n=>!n.read)),v.filterBy&&(e=e.filter(n=>n.type===v.filterBy)),e}),Q=u(()=>{if(v.groupBy==="none")return[{key:"all",label:"",items:k.value}];const e={};return k.value.forEach(n=>{let i="",t="";if(v.groupBy==="date"){const y=new Date(n.date),L=new Date,S=new Date(L);S.setDate(S.getDate()-1),y.toDateString()===L.toDateString()?(i="today",t="Сегодня"):y.toDateString()===S.toDateString()?(i="yesterday",t="Вчера"):(i=y.toLocaleDateString("ru-RU"),t=y.toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}))}else v.groupBy==="type"&&(i=n.type||"info",t=le(n.type));e[i]||(e[i]={key:i,label:t,items:[]}),e[i].items.push(n)}),Object.values(e)}),Y=u(()=>p("relative")),ee=u(()=>p("mb-4 pb-4 border-b border-slate-200",B("md","padding"))),te=u(()=>p("flex gap-2 mb-4",B("md","padding"))),ne=u(()=>p("overflow-y-auto",B("md","padding"))),ae=u(()=>p("text-xs font-semibold text-slate-500 uppercase mb-2")),ie=u(()=>p("space-y-2"));function oe(e){return p("p-3 rounded-lg cursor-pointer transition-colors",e.read?"bg-white hover:bg-slate-50":"bg-blue-50 hover:bg-blue-100")}function re(e){const n={info:"text-blue-500",success:"text-green-500",warning:"text-yellow-500",error:"text-red-500"};return n[e]||n.info}const se=u(()=>p("p-8 text-center",B("md","padding")));function ue(e){return{info:U,success:xe,warning:be,error:ke}[e]||U}function le(e){return{info:"Информация",success:"Успех",warning:"Предупреждение",error:"Ошибка"}[e]||"Уведомление"}function de(e){if(!e)return"";const n=new Date(e),t=new Date-n;return t<6e4?"только что":t<36e5?`${Math.floor(t/6e4)} мин назад`:t<864e5?`${Math.floor(t/36e5)} ч назад`:n.toLocaleDateString("ru-RU",{month:"short",day:"numeric"})}function ce(){c.value=!c.value}function H(e){h("mark-read",e)}function fe(){h("mark-all-read")}function O(e){h("delete",e)}function me(e){C.value=e,h("filter",e)}function pe(e){h("notification-click",e)}return(e,n)=>(o(),s("div",{class:d(Y.value),"data-component":"DXNotificationCenter","data-group-by":a.groupBy},[$(e.$slots,"trigger",{},()=>[f(x,{variant:"ghost",size:"md",onClick:ce},{icon:l(()=>[f(X,{icon:R(he),size:"md"},null,8,["icon"])]),default:l(()=>[a.unreadCount>0?(o(),N(ge,{key:0,count:a.unreadCount},null,8,["count"])):m("",!0)]),_:1})]),f(ye,{open:c.value,"onUpdate:open":n[0]||(n[0]=i=>c.value=i),position:a.position,width:a.width,"max-height":a.maxHeight},{trigger:l(()=>[...n[1]||(n[1]=[r("div",null,null,-1)])]),default:l(()=>[a.showHeader||e.$slots.header?(o(),s("div",{key:0,class:d(ee.value)},[$(e.$slots,"header",{},()=>[r("div",Ne,[f(ve,{level:"3",size:"lg",weight:"semibold",color:"default"},{default:l(()=>[...n[2]||(n[2]=[V("Уведомления",-1)])]),_:1}),a.unreadCount>0?(o(),N(x,{key:0,size:"sm",variant:"ghost",onClick:fe},{default:l(()=>[...n[3]||(n[3]=[V(" Отметить все как прочитанные ",-1)])]),_:1})):m("",!0)])])],2)):m("",!0),a.filterable&&a.filterOptions.length>0?(o(),s("div",{key:1,class:d(te.value)},[(o(!0),s(F,null,z(a.filterOptions,i=>(o(),N(x,{key:i.value,size:"sm",variant:C.value===i.value?"primary":"ghost",onClick:t=>me(i.value)},{default:l(()=>[V(b(i.label),1)]),_:2},1032,["variant","onClick"]))),128))],2)):m("",!0),r("div",{class:d(ne.value)},[(o(!0),s(F,null,z(Q.value,i=>(o(),s("div",{key:i.key,class:"mb-4"},[a.groupBy?(o(),s("div",{key:0,class:d(ae.value)},b(i.label),3)):m("",!0),r("div",{class:d(ie.value)},[(o(!0),s(F,null,z(i.items,t=>(o(),s("div",{key:t.id,class:d(oe(t)),onClick:y=>pe(t)},[$(e.$slots,"notification",{notification:t,markRead:()=>H(t.id),delete:()=>O(t.id)},()=>[r("div",Xe,[f(X,{icon:ue(t.type),size:"md",class:d(re(t.type))},null,8,["icon","class"]),r("div",Ee,[r("div",_e,[r("span",Me,b(t.title),1),t.read?m("",!0):(o(),s("span",Se))]),r("p",$e,b(t.message),1),r("span",Re,b(de(t.date)),1)]),r("div",Ve,[t.read?m("",!0):(o(),N(x,{key:0,size:"sm",variant:"ghost",onClick:j(y=>H(t.id),["stop"])},{icon:l(()=>[f(X,{icon:R(Ce),size:"xs"},null,8,["icon"])]),_:1},8,["onClick"])),f(x,{size:"sm",variant:"ghost",onClick:j(y=>O(t.id),["stop"])},{icon:l(()=>[f(X,{icon:R(De),size:"xs"},null,8,["icon"])]),_:1},8,["onClick"])])])])],10,Be))),128))],2)]))),128))],2),k.value.length===0?(o(),s("div",{key:2,class:d(se.value)},[...n[4]||(n[4]=[r("p",{class:"text-sm text-slate-500"},"Нет уведомлений",-1)])],2)):m("",!0)]),_:3},8,["open","position","width","max-height"])],10,we))}};w.__docgenInfo={exportName:"default",displayName:"DXNotificationCenter",description:"",tags:{},props:[{name:"notifications",description:`Уведомления
Формат: [{ id, type, title, message, date, read, icon? }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"unreadCount",description:"Количество непрочитанных",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"groupBy",description:"Группировка: date | type | none",tags:{default:[{description:"'date'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"date"'},values:["date","type","none"]},{name:"filterBy",description:"Фильтрация по типу",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"filterable",description:"Показывать фильтры",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filterOptions",description:`Опции фильтров
Формат: [{ value, label }]`,type:{name:"array"},defaultValue:{func:!1,value:`[
  { value: "all", label: "Все" },
  { value: "unread", label: "Непрочитанные" },
]`}},{name:"showHeader",description:"Показывать header",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"position",description:"Позиция dropdown",tags:{default:[{description:"'bottom-right'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"bottom-right"'}},{name:"width",description:"Ширина dropdown",tags:{default:[{description:"'400px'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"400px"'}},{name:"maxHeight",description:"Максимальная высота dropdown",tags:{default:[{description:"'500px'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"500px"'}}],events:[{name:"mark-read"},{name:"mark-all-read"},{name:"delete"},{name:"filter"},{name:"notification-click"}],slots:[{name:"trigger"},{name:"header"},{name:"notification",scoped:!0,bindings:[{name:"notification",title:"binding"},{name:"mark-read",title:"binding"},{name:"delete",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXNotificationCenter/DXNotificationCenter.vue"]};const nt={title:"Organisms/DXNotificationCenter",component:w,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXNotificationCenter

Центр уведомлений с фильтрацией, группировкой и управлением уведомлениями.

## Назначение

DXNotificationCenter предоставляет полнофункциональный центр уведомлений с поддержкой
фильтрации, группировки, отметки как прочитанные и удаления уведомлений.

## Архитектура

### Использует
- \`DXDropdown\` - для выпадающего списка
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`DXBadge\` - для счетчика непрочитанных
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- \`DXHeaderBar\` - для иконки уведомлений
- Центры уведомлений в приложениях
- Панели уведомлений

## Внутренняя логика

### Группировка
Поддерживает группировку: date (по дате), type (по типу), none (без группировки).

### Фильтрация
Поддерживает фильтрацию по типу и статусу (все/непрочитанные).

### Типы уведомлений
- info: Информация
- success: Успех
- warning: Предупреждение
- error: Ошибка

## Особенности

### Автоматическое обновление
Можно настроить автоматическое обновление уведомлений.

### Индикация непрочитанных
Показывает количество непрочитанных уведомлений через Badge.
        `}}}},A=[{id:1,type:"info",title:"Новое сообщение",message:"У вас новое сообщение от John Doe",date:new Date,read:!1},{id:2,type:"success",title:"Задача выполнена",message:'Задача "Обновить документацию" выполнена',date:new Date(Date.now()-36e5),read:!1},{id:3,type:"warning",title:"Предупреждение",message:"Истекает срок подписки через 7 дней",date:new Date(Date.now()-72e5),read:!0}],E={parameters:{docs:{description:{story:"Базовый центр уведомлений с триггером и выпадающим списком."}}},render:()=>({components:{DXNotificationCenter:w},setup(){const a=D(A),g=D(2);return{notifications:a,unreadCount:g,handleMarkRead:c=>{const C=a.value.find(k=>k.id===c);C&&(C.read=!0,g.value=Math.max(0,g.value-1))},handleMarkAllRead:()=>{a.value.forEach(c=>c.read=!0),g.value=0}}},template:`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="unreadCount"
          @mark-read="handleMarkRead"
          @mark-all-read="handleMarkAllRead"
        />
      </div>
    `})},_={parameters:{docs:{description:{story:"Центр уведомлений с группировкой по дате."}}},render:()=>({components:{DXNotificationCenter:w},setup(){return{notifications:D(A)}},template:`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          group-by="date"
        />
      </div>
    `})},M={parameters:{docs:{description:{story:"Центр уведомлений с фильтрами для просмотра всех или только непрочитанных."}}},render:()=>({components:{DXNotificationCenter:w},setup(){return{notifications:D(A)}},template:`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          :filterable="true"
        />
      </div>
    `})};var G,I,W;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Базовый центр уведомлений с триггером и выпадающим списком.'
      }
    }
  },
  render: () => ({
    components: {
      DXNotificationCenter
    },
    setup() {
      const notifications = ref(defaultNotifications);
      const unreadCount = ref(2);
      const handleMarkRead = id => {
        const notification = notifications.value.find(n => n.id === id);
        if (notification) {
          notification.read = true;
          unreadCount.value = Math.max(0, unreadCount.value - 1);
        }
      };
      const handleMarkAllRead = () => {
        notifications.value.forEach(n => n.read = true);
        unreadCount.value = 0;
      };
      return {
        notifications,
        unreadCount,
        handleMarkRead,
        handleMarkAllRead
      };
    },
    template: \`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="unreadCount"
          @mark-read="handleMarkRead"
          @mark-all-read="handleMarkAllRead"
        />
      </div>
    \`
  })
}`,...(W=(I=E.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var q,T,P;_.parameters={..._.parameters,docs:{...(q=_.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Центр уведомлений с группировкой по дате.'
      }
    }
  },
  render: () => ({
    components: {
      DXNotificationCenter
    },
    setup() {
      const notifications = ref(defaultNotifications);
      return {
        notifications
      };
    },
    template: \`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          group-by="date"
        />
      </div>
    \`
  })
}`,...(P=(T=_.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var Z,J,K;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Центр уведомлений с фильтрами для просмотра всех или только непрочитанных.'
      }
    }
  },
  render: () => ({
    components: {
      DXNotificationCenter
    },
    setup() {
      const notifications = ref(defaultNotifications);
      return {
        notifications
      };
    },
    template: \`
      <div class="p-8">
        <DXNotificationCenter
          :notifications="notifications"
          :unread-count="2"
          :filterable="true"
        />
      </div>
    \`
  })
}`,...(K=(J=M.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const at=["Default","WithGrouping","WithFilters"];export{E as Default,M as WithFilters,_ as WithGrouping,at as __namedExportsOrder,nt as default};
