import{r as _,c as p,w as M,a as i,p as f,b as r,q as v,j as E,x as pe,U as ge,G as b,e as h,F as D,g as k,o as s,d as P,y as X,z as y,f as O,m as W,H as fe,Q as ve}from"./vue.esm-bundler-C1fUoNF-.js";import{u as S}from"./useClassComposition-Dym2pzZ_.js";import{u as be}from"./useSpacing-BOHUzi8w.js";import{_ as U}from"./DXInput-BG2R0LGs.js";import{_ as he}from"./DXSelect-CgmhnMxb.js";import{_ as ye}from"./DXToggle-BJ1nSv9U.js";import{D as Se}from"./DXTabs-aO3r3RLy.js";import{_ as G}from"./DXButton-DzgLKRkE.js";import{_ as I}from"./DXHeading-S6mljWwV.js";import{_ as De}from"./DXText-Bu-Qlv6N.js";import{_ as _e}from"./DXNav-rdhJaqaA.js";import{r as Ce}from"./MagnifyingGlassIcon-DKNfedfR.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ee=["data-searchable"],Pe={key:0,class:"mb-6"},Xe={class:"space-y-6"},xe={class:"space-y-3"},Ve={class:"flex-1"},we={class:"text-sm font-medium text-slate-900"},ke={class:"ml-4"},$e={key:1,class:"flex gap-6"},Ae=["onClick"],Be={class:"space-y-3"},Ne={class:"flex-1"},Ue={class:"text-sm font-medium text-slate-900"},Fe={key:0,class:"text-xs text-slate-500 mt-1"},je={class:"ml-4"},x={__name:"DXSettingsPanel",props:{settings:{type:Object,required:!0,default:()=>({})},categories:{type:Array,required:!0,default:()=>[]},searchable:{type:Boolean,default:!1},layout:{type:String,default:"tabs",validator:o=>["tabs","sidebar"].includes(o)},showActions:{type:Boolean,default:!0}},emits:["update:settings","save","reset","change","category-change"],setup(o,{emit:C}){var q;const c=o,g=C,m=_(((q=c.categories[0])==null?void 0:q.id)||""),V=_(""),u=_({...c.settings}),ae=p(()=>c.categories.map(e=>({id:e.id,label:e.label})));p(()=>{if(!c.searchable||!V.value.trim())return u.value;const e=V.value.toLowerCase(),a={};return c.categories.forEach(t=>{var l;(l=t.groups)==null||l.forEach(n=>{var d;(d=n.settings)==null||d.forEach(w=>{var L;(w.label.toLowerCase().includes(e)||(L=w.description)!=null&&L.toLowerCase().includes(e))&&(a[w.id]=u.value[w.id])})})}),a});const ne=p(()=>S("w-full",be("md","padding"))),le=p(()=>S("mb-6")),ie=p(()=>S("w-full")),oe=p(()=>S("w-48 flex-shrink-0")),ue=p(()=>S("flex-1"));function re(e){return S("w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",m.value===e?"bg-slate-900 text-white":"text-slate-700 hover:bg-slate-100")}const de=p(()=>S("flex justify-end gap-2 mt-6 pt-6 border-t border-slate-200"));function j(e){const a=c.categories.find(t=>t.id===e);return(a==null?void 0:a.groups)||[]}function z(e){return{input:U,select:he,toggle:ye}[e]||U}function R(e){const a={placeholder:e.placeholder,disabled:e.disabled};return e.type==="select"?{...a,options:e.options||[]}:a}function T(e,a){u.value[e]=a,g("update:settings",{...u.value}),g("change",{settingId:e,value:a})}function ce(){g("save",{...u.value})}function me(){u.value={...c.settings},g("reset"),g("update:settings",{...u.value})}return M(()=>c.settings,e=>{u.value={...e}},{deep:!0}),M(m,e=>{g("category-change",e)}),(e,a)=>(s(),i("div",{class:v(ne.value),"data-component":"DXSettingsPanel","data-searchable":o.searchable},[o.searchable?(s(),i("div",{key:0,class:v(le.value)},[E(U,{modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=t=>V.value=t),placeholder:"Поиск настроек...","prefix-icon":pe(Ce)},null,8,["modelValue","prefix-icon"])],2)):f("",!0),r("div",{class:v(ie.value)},[o.layout==="tabs"?(s(),i("div",Pe,[E(Se,{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t),tabs:ae.value},ge({_:2},[b(o.categories,t=>({name:`tab-${t.id}`,fn:h(()=>[k(e.$slots,`category-${t.id}`,{category:t,settings:u.value},()=>[r("div",Xe,[(s(!0),i(D,null,b(j(t.id),l=>(s(),i("div",{key:l.id||l.title,class:"space-y-4"},[l.title?(s(),P(I,{key:0,level:"4",size:"sm",weight:"semibold",color:"default"},{default:h(()=>[X(y(l.title),1)]),_:2},1024)):f("",!0),r("div",xe,[k(e.$slots,`setting-${l.id||l.title}`,{group:l,settings:u.value},()=>[(s(!0),i(D,null,b(l.settings,n=>(s(),i("div",{key:n.id,class:"flex items-center justify-between"},[r("div",Ve,[r("label",we,y(n.label),1),n.description?(s(),P(De,{key:0,tag:"p",size:"xs",color:"muted",class:"mt-1"},{default:h(()=>[X(y(n.description),1)]),_:2},1024)):f("",!0)]),r("div",ke,[(s(),P(O(z(n.type)),W({modelValue:u.value[n.id],"onUpdate:modelValue":d=>u.value[n.id]=d},{ref_for:!0},R(n),{"onUpdate:modelValue":d=>T(n.id,d)}),null,16,["modelValue","onUpdate:modelValue"]))])]))),128))])])]))),128))])])])}))]),1032,["modelValue","tabs"])])):o.layout==="sidebar"?(s(),i("div",$e,[r("div",{class:v(oe.value)},[E(_e,{type:"menu",class:"space-y-1"},{default:h(()=>[(s(!0),i(D,null,b(o.categories,t=>(s(),i("button",{key:t.id,class:v(re(t.id)),onClick:l=>m.value=t.id},y(t.label),11,Ae))),128))]),_:1})],2),r("div",{class:v(ue.value)},[(s(!0),i(D,null,b(o.categories,t=>fe((s(),i("div",{key:t.id,class:"space-y-6"},[k(e.$slots,`category-${t.id}`,{category:t,settings:u.value},()=>[(s(!0),i(D,null,b(j(t.id),l=>(s(),i("div",{key:l.id||l.title,class:"space-y-4"},[l.title?(s(),P(I,{key:0,level:"4",size:"sm",weight:"semibold",color:"default"},{default:h(()=>[X(y(l.title),1)]),_:2},1024)):f("",!0),r("div",Be,[(s(!0),i(D,null,b(l.settings,n=>(s(),i("div",{key:n.id,class:"flex items-center justify-between"},[r("div",Ne,[r("label",Ue,y(n.label),1),n.description?(s(),i("p",Fe,y(n.description),1)):f("",!0)]),r("div",je,[(s(),P(O(z(n.type)),W({modelValue:u.value[n.id],"onUpdate:modelValue":d=>u.value[n.id]=d},{ref_for:!0},R(n),{"onUpdate:modelValue":d=>T(n.id,d)}),null,16,["modelValue","onUpdate:modelValue"]))])]))),128))])]))),128))])])),[[ve,m.value===t.id]])),128))],2)])):f("",!0)],2),e.$slots.actions||o.showActions?(s(),i("div",{key:1,class:v(de.value)},[k(e.$slots,"actions",{},()=>[E(G,{variant:"ghost",onClick:me},{default:h(()=>[...a[2]||(a[2]=[X("Сбросить",-1)])]),_:1}),E(G,{variant:"primary",onClick:ce},{default:h(()=>[...a[3]||(a[3]=[X("Сохранить",-1)])]),_:1})])],2)):f("",!0)],10,Ee))}};x.__docgenInfo={exportName:"default",displayName:"DXSettingsPanel",description:"",tags:{},props:[{name:"settings",description:`Настройки (v-model)
Формат: { [settingId]: value }`,type:{name:"object"},required:!0,defaultValue:{func:!1,value:"{}"}},{name:"categories",description:`Категории настроек
Формат: [{ id, label, groups?: [{ title, settings: [{ id, label, type, ... }] }] }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"searchable",description:"Поиск по настройкам",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"layout",description:"Макет: tabs | sidebar",tags:{default:[{description:"'tabs'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"tabs"'},values:["tabs","sidebar"]},{name:"showActions",description:"Показывать кнопки действий",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:settings"},{name:"save"},{name:"reset"},{name:"change"},{name:"category-change"}],slots:[{name:"`category-${category.id}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"category",title:"binding"},{name:"settings",title:"binding"}]},{name:"`setting-${group.id || group.title}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"group",title:"binding"},{name:"settings",title:"binding"}]},{name:"actions"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXSettingsPanel/DXSettingsPanel.vue"]};const ot={title:"Organisms/DXSettingsPanel",component:x,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}}},F=[{id:"general",label:"Общие",groups:[{title:"Язык и регион",settings:[{id:"language",label:"Язык",type:"select",options:[{value:"ru",label:"Русский"},{value:"en",label:"English"}]},{id:"timezone",label:"Часовой пояс",type:"select",options:[{value:"Europe/Moscow",label:"Москва (UTC+3)"},{value:"Europe/London",label:"Лондон (UTC+0)"}]}]}]},{id:"notifications",label:"Уведомления",groups:[{title:"Типы уведомлений",settings:[{id:"emailNotifications",label:"Email уведомления",type:"toggle",description:"Получать уведомления на email"},{id:"pushNotifications",label:"Push уведомления",type:"toggle",description:"Получать push уведомления"},{id:"smsNotifications",label:"SMS уведомления",type:"toggle",description:"Получать SMS уведомления"}]}]},{id:"privacy",label:"Приватность",groups:[{title:"Настройки приватности",settings:[{id:"publicProfile",label:"Публичный профиль",type:"toggle",description:"Ваш профиль виден всем пользователям"},{id:"showEmail",label:"Показывать email",type:"toggle",description:"Показывать email в профиле"}]}]}],N={language:"ru",timezone:"Europe/Moscow",emailNotifications:!0,pushNotifications:!1,smsNotifications:!1,publicProfile:!0,showEmail:!1},$={args:{settings:N,categories:F,layout:"tabs",searchable:!1},parameters:{docs:{description:{story:"Базовая панель настроек с категориями в виде вкладок."}}},render:o=>({components:{DXSettingsPanel:x},setup(){const C=_(o.settings);return{args:o,settings:C,handleSave:m=>{console.log("Настройки сохранены:",m),C.value={...m}},handleReset:()=>{console.log("Настройки сброшены"),C.value={...N}}}},template:`
      <DXSettingsPanel
        v-model:settings="settings"
        v-bind="args"
        @save="handleSave"
        @reset="handleReset"
      />
    `})},A={parameters:{docs:{description:{story:"Панель настроек с боковой панелью категорий."}}},render:()=>({components:{DXSettingsPanel:x},setup(){return{settings:_(N),defaultCategories:F}},template:`
      <DXSettingsPanel
        v-model:settings="settings"
        :categories="defaultCategories"
        layout="sidebar"
      />
    `})},B={parameters:{docs:{description:{story:"Панель настроек с поиском по настройкам."}}},render:()=>({components:{DXSettingsPanel:x},setup(){return{settings:_(N),defaultCategories:F}},template:`
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
}`,...(se=(te=B.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const ut=["Default","WithSidebar","WithSearch"];export{$ as Default,B as WithSearch,A as WithSidebar,ut as __namedExportsOrder,ot as default};
