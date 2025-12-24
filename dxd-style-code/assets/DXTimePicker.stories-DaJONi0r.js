import{r as d,c as p,w as De,a as i,o as l,b as S,f as Se,E as ke,k as $,z as Ve,F as V,D as x,l as v,u as P}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as xe}from"./DXInput-BLwLEfW9.js";import{r as Pe}from"./ClockIcon-swgwmcUE.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";const Te=["data-format","data-size"],Ee={class:"relative"},Ce={key:0,class:"absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-64 overflow-y-auto"},we={class:"p-2"},Xe={key:0,class:"grid grid-cols-12 gap-1 mb-2"},Me=["onClick"],Fe={key:1,class:"grid grid-cols-6 gap-1 mb-2"},$e=["onClick"],Ae={class:"grid grid-cols-6 gap-1 mb-2"},Be=["onClick"],He={key:2,class:"grid grid-cols-6 gap-1"},ze=["onClick"],_e={key:3,class:"flex gap-2 mt-2 pt-2 border-t border-slate-200"},f={__name:"DXTimePicker",props:{modelValue:{type:String,default:null},format:{type:String,default:"24h",validator:r=>["12h","24h"].includes(r)},showSeconds:{type:Boolean,default:!1},placeholder:{type:String,default:""},label:{type:String,default:""},helper:{type:String,default:""},error:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:"md"},minTime:{type:String,default:null},maxTime:{type:String,default:null},showDropdown:{type:Boolean,default:!0}},emits:["update:modelValue","change","blur","focus"],setup(r,{emit:o}){const n=r,m=o,b=d(!1),y=d(""),oe=p(()=>Array.from({length:12},(e,t)=>({value:t+1,label:String(t+1)}))),se=p(()=>Array.from({length:24},(e,t)=>t)),ie=p(()=>Array.from({length:12},(e,t)=>t*5)),le=p(()=>Array.from({length:12},(e,t)=>t*5)),A=p(()=>{if(!n.modelValue)return null;const e=c(n.modelValue);return e?n.format==="12h"?e.hour===0?12:e.hour>12?e.hour-12:e.hour:e.hour:null}),me=p(()=>{if(!n.modelValue)return null;const e=c(n.modelValue);return e?e.minute:null}),ce=p(()=>{if(!n.modelValue)return null;const e=c(n.modelValue);return e?e.second||0:null}),k=p(()=>{if(!n.modelValue||n.format!=="12h")return!0;const e=c(n.modelValue);return e?e.hour<12:!0}),B=p(()=>{if(!n.modelValue)return y.value||"";const e=c(n.modelValue);if(!e)return n.modelValue;if(n.format==="12h"){let t=e.hour;const u=t>=12?"PM":"AM";return t===0?t=12:t>12&&(t-=12),n.showSeconds?`${String(t).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second||0).padStart(2,"0")} ${u}`:`${String(t).padStart(2,"0")}:${String(e.minute).padStart(2,"0")} ${u}`}return n.showSeconds?`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second||0).padStart(2,"0")}`:`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}`});function c(e){var u;if(!e)return null;if(n.format==="12h"){const a=e.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)?/i);if(a){let s=parseInt(a[1],10);const D=parseInt(a[2],10),ye=a[3]?parseInt(a[3],10):0,_=(u=a[4])==null?void 0:u.toUpperCase();return _==="PM"&&s!==12&&(s+=12),_==="AM"&&s===12&&(s=0),{hour:s,minute:D,second:ye}}}const t=e.match(/(\d{1,2}):(\d{2})(?::(\d{2}))?/);if(t){const a=parseInt(t[1],10),s=parseInt(t[2],10),D=t[3]?parseInt(t[3],10):0;if(a>=0&&a<=23&&s>=0&&s<=59&&D>=0&&D<=59)return{hour:a,minute:s,second:D}}return null}function h(e){if(!e)return"";if(n.format==="12h"){let t=e.hour;const u=t>=12?"PM":"AM";return t===0?t=12:t>12&&(t-=12),n.showSeconds?`${String(t).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second||0).padStart(2,"0")} ${u}`:`${String(t).padStart(2,"0")}:${String(e.minute).padStart(2,"0")} ${u}`}return n.showSeconds?`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second||0).padStart(2,"0")}`:`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}`}function g(e){if(!e)return!1;if(n.minTime){const t=c(n.minTime);if(t){const u=e.hour*60+e.minute+(e.second||0)/60,a=t.hour*60+t.minute+(t.second||0)/60;if(u<a)return!1}}if(n.maxTime){const t=c(n.maxTime);if(t){const u=e.hour*60+e.minute+(e.second||0)/60,a=t.hour*60+t.minute+(t.second||0)/60;if(u>a)return!1}}return!0}function de(e){y.value=e;const t=c(e);if(t&&g(t)){const u=h(t);m("update:modelValue",u),m("change",u)}}function H(e){const t=n.modelValue?c(n.modelValue):{minute:0,second:0};let u=e;n.format==="12h"&&(e===12?u=k.value?0:12:u=k.value?e:e+12);const a={hour:u,minute:(t==null?void 0:t.minute)||0,second:(t==null?void 0:t.second)||0};if(g(a)){const s=h(a);m("update:modelValue",s),m("change",s)}}function pe(e){const t=n.modelValue?c(n.modelValue):{hour:0,second:0},u={hour:(t==null?void 0:t.hour)||0,minute:e,second:(t==null?void 0:t.second)||0};if(g(u)){const a=h(u);m("update:modelValue",a),m("change",a)}}function fe(e){const t=n.modelValue?c(n.modelValue):{hour:0,minute:0},u={hour:(t==null?void 0:t.hour)||0,minute:(t==null?void 0:t.minute)||0,second:e};if(g(u)){const a=h(u);m("update:modelValue",a),m("change",a)}}function z(e){if(n.format!=="12h")return;const t=n.modelValue?c(n.modelValue):{hour:0,minute:0,second:0};if(!t)return;let u=t.hour;e&&u>=12?(u-=12,u===0&&(u=12)):!e&&u<12&&(u===0&&(u=12),u+=12);const a={...t,hour:u};if(g(a)){const s=h(a);m("update:modelValue",s),m("change",s)}}function he(e){n.showDropdown&&(b.value=!0),m("focus",e)}function ge(e){if(b.value=!1,y.value){const t=c(y.value);if(t&&g(t)){const u=h(t);m("update:modelValue",u)}else y.value=B.value}m("blur",e)}function ve(){b.value=!1}const be={mounted(e,t){e.clickOutsideEvent=u=>{e===u.target||e.contains(u.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted(e){document.removeEventListener("click",e.clickOutsideEvent)}};return De(()=>n.showDropdown,e=>{e||(b.value=!1)}),(e,t)=>(l(),i("div",{class:"w-full","data-component":"DXTimePicker","data-format":r.format,"data-size":r.size},[S("div",Ee,[Se(xe,{"model-value":B.value,placeholder:r.placeholder,disabled:r.disabled,size:r.size,error:r.error,helper:r.helper,label:r.label,required:r.required,type:"text","suffix-icon":Ve(Pe),"onUpdate:modelValue":de,onBlur:ge,onFocus:he},null,8,["model-value","placeholder","disabled","size","error","helper","label","required","suffix-icon"]),b.value&&!r.disabled?ke((l(),i("div",Ce,[S("div",we,[r.format==="12h"?(l(),i("div",Xe,[(l(!0),i(V,null,x(oe.value,u=>(l(),i("button",{key:u.value,type:"button",class:v(["px-3 py-2 text-sm rounded-lg transition-colors",A.value===u.value?"bg-slate-900 text-white":"hover:bg-slate-100 text-slate-700"]),onClick:a=>H(u.value)},P(u.label),11,Me))),128))])):(l(),i("div",Fe,[(l(!0),i(V,null,x(se.value,u=>(l(),i("button",{key:u,type:"button",class:v(["px-3 py-2 text-sm rounded-lg transition-colors",A.value===u?"bg-slate-900 text-white":"hover:bg-slate-100 text-slate-700"]),onClick:a=>H(u)},P(String(u).padStart(2,"0")),11,$e))),128))])),S("div",Ae,[(l(!0),i(V,null,x(ie.value,u=>(l(),i("button",{key:u,type:"button",class:v(["px-3 py-2 text-sm rounded-lg transition-colors",me.value===u?"bg-slate-900 text-white":"hover:bg-slate-100 text-slate-700"]),onClick:a=>pe(u)},P(String(u).padStart(2,"0")),11,Be))),128))]),r.showSeconds?(l(),i("div",He,[(l(!0),i(V,null,x(le.value,u=>(l(),i("button",{key:u,type:"button",class:v(["px-3 py-2 text-sm rounded-lg transition-colors",ce.value===u?"bg-slate-900 text-white":"hover:bg-slate-100 text-slate-700"]),onClick:a=>fe(u)},P(String(u).padStart(2,"0")),11,ze))),128))])):$("",!0),r.format==="12h"?(l(),i("div",_e,[S("button",{type:"button",class:v(["flex-1 px-3 py-2 text-sm rounded-lg transition-colors",k.value?"bg-slate-900 text-white":"bg-slate-100 text-slate-700 hover:bg-slate-200"]),onClick:t[0]||(t[0]=u=>z(!0))}," AM ",2),S("button",{type:"button",class:v(["flex-1 px-3 py-2 text-sm rounded-lg transition-colors",k.value?"bg-slate-100 text-slate-700 hover:bg-slate-200":"bg-slate-900 text-white"]),onClick:t[1]||(t[1]=u=>z(!1))}," PM ",2)])):$("",!0)])])),[[be,ve]]):$("",!0)])],8,Te))}};f.__docgenInfo={exportName:"default",displayName:"DXTimePicker",description:"",tags:{},props:[{name:"modelValue",description:"Значение времени (v-model) в формате HH:mm или HH:mm:ss",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"format",description:"Формат времени: 12h | 24h",type:{name:"string"},defaultValue:{func:!1,value:'"24h"'},values:["12h","24h"]},{name:"showSeconds",description:"Показывать секунды",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"placeholder",description:"Placeholder",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",description:"Текст ошибки",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",description:"Обязательное поле",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер: xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"minTime",description:"Минимальное время (HH:mm или HH:mm:ss)",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"maxTime",description:"Максимальное время (HH:mm или HH:mm:ss)",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showDropdown",description:"Показывать dropdown для выбора",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"change"},{name:"blur"},{name:"focus"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXTimePicker/DXTimePicker.vue"]};const Qe={title:"Molecules/DXTimePicker",component:f,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXTimePicker

Компонент выбора времени с валидацией и поддержкой различных форматов.

## Назначение

DXTimePicker позволяет пользователям выбирать время через input с валидацией или через dropdown.
Поддерживает форматы 12h и 24h, с секундами или без.

## Архитектура

### Использует
- \`DXInput\` - базовый компонент input
- \`useSize\` composable - для размеров
- \`ClockIcon\` - иконка часов

### Используется в
- Формы с выбором времени
- Интеграция с \`DXDatePicker\` для выбора даты и времени
- Планировщики и календари

## Внутренняя логика

### Форматы времени
- **12h**: формат с AM/PM (например, "02:30 PM")
- **24h**: 24-часовой формат (например, "14:30")

### Валидация
- Проверка корректности формата времени
- Поддержка min-time и max-time для ограничения диапазона
- Автоматическая валидация при blur

### Dropdown
- Грид с часами, минутами и секундами (опционально)
- Выбор через клик
- Автоматическое закрытие при клике вне компонента

## Особенности

### Ручной ввод
Пользователь может вводить время вручную в input. Компонент автоматически парсит и валидирует введенное значение.

### Dropdown выбор
При фокусе на input открывается dropdown с предустановленными значениями для быстрого выбора.

### Интеграция с формами
Полностью совместим с v-model и стандартными событиями Vue (change, blur, focus).
        `}}},argTypes:{format:{control:"select",options:["12h","24h"],description:"Формат времени: 12h (с AM/PM) или 24h.",table:{type:{summary:"string"},defaultValue:{summary:"24h"},category:"Format"}},showSeconds:{control:"boolean",description:"Показывать секунды в формате времени.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Format"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},disabled:{control:"boolean",description:"Отключенное состояние.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},minTime:{control:"text",description:"Минимальное допустимое время (HH:mm или HH:mm:ss).",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Validation"}},maxTime:{control:"text",description:"Максимальное допустимое время (HH:mm или HH:mm:ss).",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Validation"}}}},T={args:{format:"24h",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Базовое использование компонента в 24-часовом формате."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},E={args:{format:"12h",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Использование 12-часового формата с AM/PM."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время (12h)" />'})},C={args:{format:"24h",showSeconds:!0,placeholder:"Выберите время"},parameters:{docs:{description:{story:"Компонент с отображением секунд."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время с секундами" />'})},w={args:{format:"24h",minTime:"09:00",maxTime:"18:00",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Компонент с ограничением диапазона времени (рабочие часы 9:00 - 18:00)."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Рабочее время" helper="Выберите время с 9:00 до 18:00" />'})},X={args:{format:"24h"},parameters:{docs:{description:{story:"Компонент с предустановленным значением."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("14:30");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},M={args:{format:"24h",disabled:!0},parameters:{docs:{description:{story:"Отключенное состояние компонента."}}},render:r=>({components:{DXTimePicker:f},setup(){const o=d("14:30");return{args:r,time:o}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},F={parameters:{docs:{description:{story:"Различные размеры компонента."}}},render:()=>({components:{DXTimePicker:f},setup(){const r=d(""),o=d(""),n=d("");return{time1:r,time2:o,time3:n}},template:`
      <div class="space-y-4">
        <DXTimePicker v-model="time1" size="sm" label="Маленький" />
        <DXTimePicker v-model="time2" size="md" label="Средний" />
        <DXTimePicker v-model="time3" size="lg" label="Большой" />
      </div>
    `})};var I,N,O;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    format: '24h',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование компонента в 24-часовом формате.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(O=(N=T.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var W,q,L;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    format: '12h',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Использование 12-часового формата с AM/PM.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время (12h)" />'
  })
}`,...(L=(q=E.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var U,j,G;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    format: '24h',
    showSeconds: true,
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с отображением секунд.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время с секундами" />'
  })
}`,...(G=(j=C.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    format: '24h',
    minTime: '09:00',
    maxTime: '18:00',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с ограничением диапазона времени (рабочие часы 9:00 - 18:00).'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Рабочее время" helper="Выберите время с 9:00 до 18:00" />'
  })
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,Y,Z;X.parameters={...X.parameters,docs:{...(R=X.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    format: '24h'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с предустановленным значением.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('14:30');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(Z=(Y=X.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ue;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    format: '24h',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние компонента.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('14:30');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(ue=(te=M.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var ne,re,ae;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.'
      }
    }
  },
  render: () => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time1 = ref('');
      const time2 = ref('');
      const time3 = ref('');
      return {
        time1,
        time2,
        time3
      };
    },
    template: \`
      <div class="space-y-4">
        <DXTimePicker v-model="time1" size="sm" label="Маленький" />
        <DXTimePicker v-model="time2" size="md" label="Средний" />
        <DXTimePicker v-model="time3" size="lg" label="Большой" />
      </div>
    \`
  })
}`,...(ae=(re=F.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Re=["Default","Format12h","WithSeconds","WithMinMax","WithValue","Disabled","Sizes"];export{T as Default,M as Disabled,E as Format12h,F as Sizes,w as WithMinMax,C as WithSeconds,X as WithValue,Re as __namedExportsOrder,Qe as default};
