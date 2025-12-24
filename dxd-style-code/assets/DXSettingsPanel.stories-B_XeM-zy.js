import{r as C,c as p,w as O,a as i,k as f,b as r,l as v,f as w,z as pe,S as ge,D as b,F as S,m as k,o as s,g as D,e as E,x as P,u as h,p as M,t as W,E as fe,O as ve}from"./vue.esm-bundler-CzLKT_w4.js";import{u as y}from"./useClassComposition-Dym2pzZ_.js";import{u as be}from"./useSpacing-BOHUzi8w.js";import{_ as F}from"./DXInput-BLwLEfW9.js";import{_ as he}from"./DXSelect-BFLeTBtC.js";import{_ as ye}from"./DXToggle-C0jPsjWP.js";import{D as Se}from"./DXTabs-CRILrHso.js";import{_ as I}from"./DXButton-ChBdj9Dq.js";import{_ as G}from"./DXHeading-DwWVK5ab.js";import{_ as De}from"./DXText-DW7ThwBY.js";import{r as Ce}from"./MagnifyingGlassIcon-ssG6g_B7.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _e=["data-searchable"],Ee={key:0,class:"mb-6"},Pe={class:"space-y-6"},Xe={class:"space-y-3"},xe={class:"flex-1"},Ve={class:"text-sm font-medium text-slate-900"},we={class:"ml-4"},ke={key:1,class:"flex gap-6"},$e={class:"space-y-1"},Ae=["onClick"],Be={class:"space-y-3"},Ne={class:"flex-1"},Fe={class:"text-sm font-medium text-slate-900"},Ue={key:0,class:"text-xs text-slate-500 mt-1"},ze={class:"ml-4"},X={__name:"DXSettingsPanel",props:{settings:{type:Object,required:!0,default:()=>({})},categories:{type:Array,required:!0,default:()=>[]},searchable:{type:Boolean,default:!1},layout:{type:String,default:"tabs",validator:o=>["tabs","sidebar"].includes(o)},showActions:{type:Boolean,default:!0}},emits:["update:settings","save","reset","change","category-change"],setup(o,{emit:_}){var L;const c=o,g=_,m=C(((L=c.categories[0])==null?void 0:L.id)||""),x=C(""),u=C({...c.settings}),ae=p(()=>c.categories.map(e=>({id:e.id,label:e.label})));p(()=>{if(!c.searchable||!x.value.trim())return u.value;const e=x.value.toLowerCase(),a={};return c.categories.forEach(t=>{var l;(l=t.groups)==null||l.forEach(n=>{var d;(d=n.settings)==null||d.forEach(V=>{var q;(V.label.toLowerCase().includes(e)||(q=V.description)!=null&&q.toLowerCase().includes(e))&&(a[V.id]=u.value[V.id])})})}),a});const ne=p(()=>y("w-full",be("md","padding"))),le=p(()=>y("mb-6")),ie=p(()=>y("w-full")),oe=p(()=>y("w-48 flex-shrink-0")),ue=p(()=>y("flex-1"));function re(e){return y("w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",m.value===e?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100")}const de=p(()=>y("flex justify-end gap-2 mt-6 pt-6 border-t border-slate-200"));function z(e){const a=c.categories.find(t=>t.id===e);return(a==null?void 0:a.groups)||[]}function R(e){return{input:F,select:he,toggle:ye}[e]||F}function T(e){const a={placeholder:e.placeholder,disabled:e.disabled};return e.type==="select"?{...a,options:e.options||[]}:a}function j(e,a){u.value[e]=a,g("update:settings",{...u.value}),g("change",{settingId:e,value:a})}function ce(){g("save",{...u.value})}function me(){u.value={...c.settings},g("reset"),g("update:settings",{...u.value})}return O(()=>c.settings,e=>{u.value={...e}},{deep:!0}),O(m,e=>{g("category-change",e)}),(e,a)=>(s(),i("div",{class:v(ne.value),"data-component":"DXSettingsPanel","data-searchable":o.searchable},[o.searchable?(s(),i("div",{key:0,class:v(le.value)},[w(F,{modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=t=>x.value=t),placeholder:"Поиск настроек...","prefix-icon":pe(Ce)},null,8,["modelValue","prefix-icon"])],2)):f("",!0),r("div",{class:v(ie.value)},[o.layout==="tabs"?(s(),i("div",Ee,[w(Se,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t),tabs:ae.value},ge({_:2},[b(o.categories,t=>({name:`tab-${t.id}`,fn:D(()=>[k(e.$slots,`category-${t.id}`,{category:t,settings:u.value},()=>[r("div",Pe,[(s(!0),i(S,null,b(z(t.id),l=>(s(),i("div",{key:l.id||l.title,class:"space-y-4"},[l.title?(s(),E(G,{key:0,level:"4",size:"sm",weight:"semibold",color:"default"},{default:D(()=>[P(h(l.title),1)]),_:2},1024)):f("",!0),r("div",Xe,[k(e.$slots,`setting-${l.id||l.title}`,{group:l,settings:u.value},()=>[(s(!0),i(S,null,b(l.settings,n=>(s(),i("div",{key:n.id,class:"flex items-center justify-between"},[r("div",xe,[r("label",Ve,h(n.label),1),n.description?(s(),E(De,{key:0,tag:"p",size:"xs",color:"muted",class:"mt-1"},{default:D(()=>[P(h(n.description),1)]),_:2},1024)):f("",!0)]),r("div",we,[(s(),E(M(R(n.type)),W({modelValue:u.value[n.id],"onUpdate:modelValue":d=>u.value[n.id]=d},{ref_for:!0},T(n),{"onUpdate:modelValue":d=>j(n.id,d)}),null,16,["modelValue","onUpdate:modelValue"]))])]))),128))])])]))),128))])])])}))]),1032,["modelValue","tabs"])])):o.layout==="sidebar"?(s(),i("div",ke,[r("div",{class:v(oe.value)},[r("nav",$e,[(s(!0),i(S,null,b(o.categories,t=>(s(),i("button",{key:t.id,class:v(re(t.id)),onClick:l=>m.value=t.id},h(t.label),11,Ae))),128))])],2),r("div",{class:v(ue.value)},[(s(!0),i(S,null,b(o.categories,t=>fe((s(),i("div",{key:t.id,class:"space-y-6"},[k(e.$slots,`category-${t.id}`,{category:t,settings:u.value},()=>[(s(!0),i(S,null,b(z(t.id),l=>(s(),i("div",{key:l.id||l.title,class:"space-y-4"},[l.title?(s(),E(G,{key:0,level:"4",size:"sm",weight:"semibold",color:"default"},{default:D(()=>[P(h(l.title),1)]),_:2},1024)):f("",!0),r("div",Be,[(s(!0),i(S,null,b(l.settings,n=>(s(),i("div",{key:n.id,class:"flex items-center justify-between"},[r("div",Ne,[r("label",Fe,h(n.label),1),n.description?(s(),i("p",Ue,h(n.description),1)):f("",!0)]),r("div",ze,[(s(),E(M(R(n.type)),W({modelValue:u.value[n.id],"onUpdate:modelValue":d=>u.value[n.id]=d},{ref_for:!0},T(n),{"onUpdate:modelValue":d=>j(n.id,d)}),null,16,["modelValue","onUpdate:modelValue"]))])]))),128))])]))),128))])])),[[ve,m.value===t.id]])),128))],2)])):f("",!0)],2),e.$slots.actions||o.showActions?(s(),i("div",{key:1,class:v(de.value)},[k(e.$slots,"actions",{},()=>[w(I,{variant:"ghost",onClick:me},{default:D(()=>[...a[2]||(a[2]=[P("Сбросить",-1)])]),_:1}),w(I,{variant:"primary",onClick:ce},{default:D(()=>[...a[3]||(a[3]=[P("Сохранить",-1)])]),_:1})])],2)):f("",!0)],10,_e))}};X.__docgenInfo={exportName:"default",displayName:"DXSettingsPanel",description:"",tags:{},props:[{name:"settings",description:`Настройки (v-model)
Формат: { [settingId]: value }`,type:{name:"object"},required:!0,defaultValue:{func:!1,value:"{}"}},{name:"categories",description:`Категории настроек
Формат: [{ id, label, groups?: [{ title, settings: [{ id, label, type, ... }] }] }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"searchable",description:"Поиск по настройкам",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"layout",description:"Макет: tabs | sidebar",tags:{default:[{description:"'tabs'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"tabs"'},values:["tabs","sidebar"]},{name:"showActions",description:"Показывать кнопки действий",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:settings"},{name:"save"},{name:"reset"},{name:"change"},{name:"category-change"}],slots:[{name:"`category-${category.id}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"category",title:"binding"},{name:"settings",title:"binding"}]},{name:"`setting-${group.id || group.title}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"group",title:"binding"},{name:"settings",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXSettingsPanel/DXSettingsPanel.vue"]};const it={title:"Organisms/DXSettingsPanel",component:X,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXSettingsPanel

Панель настроек с категориями, группами настроек и сохранением изменений.

## Назначение

DXSettingsPanel предоставляет полнофункциональную панель настроек с поддержкой
категорий, групп настроек, различных типов полей и поиска.

## Архитектура

### Использует
- \`DXTabs\` - для категорий (в режиме tabs)
- \`DXInput\` - для текстовых полей
- \`DXSelect\` - для полей выбора
- \`DXToggle\` - для переключателей
- \`DXButton\` - для действий
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Настройки приложения
- Настройки профиля пользователя
- Конфигурация системы
- Панели администратора

## Внутренняя логика

### Макеты
- **tabs**: Категории в виде вкладок
- **sidebar**: Категории в боковой панели

### Типы настроек
- **input**: Текстовое поле
- **select**: Поле выбора
- **toggle**: Переключатель

### Поиск
При \`searchable={true}\` можно искать настройки по названию и описанию.

## Особенности

### Группировка
Настройки могут быть сгруппированы внутри категорий.

### Валидация
Поддерживает валидацию через обработку событий.
        `}}}},U=[{id:"general",label:"Общие",groups:[{title:"Язык и регион",settings:[{id:"language",label:"Язык",type:"select",options:[{value:"ru",label:"Русский"},{value:"en",label:"English"}]},{id:"timezone",label:"Часовой пояс",type:"select",options:[{value:"Europe/Moscow",label:"Москва (UTC+3)"},{value:"Europe/London",label:"Лондон (UTC+0)"}]}]}]},{id:"notifications",label:"Уведомления",groups:[{title:"Типы уведомлений",settings:[{id:"emailNotifications",label:"Email уведомления",type:"toggle",description:"Получать уведомления на email"},{id:"pushNotifications",label:"Push уведомления",type:"toggle",description:"Получать push уведомления"},{id:"smsNotifications",label:"SMS уведомления",type:"toggle",description:"Получать SMS уведомления"}]}]},{id:"privacy",label:"Приватность",groups:[{title:"Настройки приватности",settings:[{id:"publicProfile",label:"Публичный профиль",type:"toggle",description:"Ваш профиль виден всем пользователям"},{id:"showEmail",label:"Показывать email",type:"toggle",description:"Показывать email в профиле"}]}]}],N={language:"ru",timezone:"Europe/Moscow",emailNotifications:!0,pushNotifications:!1,smsNotifications:!1,publicProfile:!0,showEmail:!1},$={args:{settings:N,categories:U,layout:"tabs",searchable:!1},parameters:{docs:{description:{story:"Базовая панель настроек с категориями в виде вкладок."}}},render:o=>({components:{DXSettingsPanel:X},setup(){const _=C(o.settings);return{args:o,settings:_,handleSave:m=>{console.log("Настройки сохранены:",m),_.value={...m}},handleReset:()=>{console.log("Настройки сброшены"),_.value={...N}}}},template:`
      <DXSettingsPanel
        v-model:settings="settings"
        v-bind="args"
        @save="handleSave"
        @reset="handleReset"
      />
    `})},A={parameters:{docs:{description:{story:"Панель настроек с боковой панелью категорий."}}},render:()=>({components:{DXSettingsPanel:X},setup(){return{settings:C(N),defaultCategories:U}},template:`
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        layout="sidebar"
      />
    `})},B={parameters:{docs:{description:{story:"Панель настроек с поиском по настройкам."}}},render:()=>({components:{DXSettingsPanel:X},setup(){return{settings:C(N),defaultCategories:U}},template:`
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        :searchable="true"
      />
    `})};var Q,H,J;$.parameters={...$.parameters,docs:{...(Q=$.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    settings: defaultSettings,
    categories: defaultCategories,
    layout: 'tabs',
    searchable: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая панель настроек с категориями в виде вкладок.'
      }
    }
  },
  render: args => ({
    components: {
      DXSettingsPanel
    },
    setup() {
      const settings = ref(args.settings);
      const handleSave = data => {
        console.log('Настройки сохранены:', data);
        settings.value = {
          ...data
        };
      };
      const handleReset = () => {
        console.log('Настройки сброшены');
        settings.value = {
          ...defaultSettings
        };
      };
      return {
        args,
        settings,
        handleSave,
        handleReset
      };
    },
    template: \`
      <DXSettingsPanel
        v-model:settings="settings"
        v-bind="args"
        @save="handleSave"
        @reset="handleReset"
      />
    \`
  })
}`,...(J=(H=$.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Y,Z;A.parameters={...A.parameters,docs:{...(K=A.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Панель настроек с боковой панелью категорий.'
      }
    }
  },
  render: () => ({
    components: {
      DXSettingsPanel
    },
    setup() {
      const settings = ref(defaultSettings);
      return {
        settings,
        defaultCategories
      };
    },
    template: \`
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        layout="sidebar"
      />
    \`
  })
}`,...(Z=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Панель настроек с поиском по настройкам.'
      }
    }
  },
  render: () => ({
    components: {
      DXSettingsPanel
    },
    setup() {
      const settings = ref(defaultSettings);
      return {
        settings,
        defaultCategories
      };
    },
    template: \`
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        :searchable="true"
      />
    \`
  })
}`,...(se=(te=B.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ot=["Default","WithSidebar","WithSearch"];export{$ as Default,B as WithSearch,A as WithSidebar,ot as __namedExportsOrder,it as default};
