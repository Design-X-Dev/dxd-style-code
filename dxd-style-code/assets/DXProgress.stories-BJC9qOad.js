import{c as t,a as u,o as n,k as f,b as g,m as H,t as D,L as J,l as b,q as K}from"./vue.esm-bundler-Nfu98kES.js";import{u as Q}from"./useSize-D8MrabOp.js";import{u as R}from"./useAnimation-CL8rPOHu.js";import{g as Y}from"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const Z=["data-size","data-color","data-animated","data-striped"],ee={key:0,class:"flex justify-between items-center mb-1"},se={class:"text-sm font-medium text-slate-700"},ae={key:0,class:"text-sm font-semibold text-slate-900"},le=["aria-valuenow","aria-valuemin","aria-valuemax"],te={key:0,class:"text-xs font-medium text-white px-1"},s={__name:"DXProgress",props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},label:{type:String,default:""},showLabel:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1},showInnerValue:{type:Boolean,default:!1},size:{type:String,default:"md"},color:{type:String,default:"default"},animated:{type:Boolean,default:!1},striped:{type:Boolean,default:!1}},setup(e){const a=e,p=t(()=>{const l=a.max-a.min;return Math.min(100,Math.max(0,(a.value-a.min)/l*100))}),h=t(()=>`${Math.round(p.value)}%`),q=t(()=>["w-full bg-slate-200 rounded-full overflow-hidden",Q(a.size,"progress")]),G=t(()=>["h-full rounded-full transition-all duration-300 flex items-center justify-end",Y(a.color),a.striped&&"dx-bg-stripes",a.animated&&a.striped&&R("stripes","progress")]);return(l,ue)=>(n(),u("div",{class:"w-full","data-component":"DXProgress","data-size":e.size,"data-color":e.color,"data-animated":e.animated,"data-striped":e.striped},[e.showLabel||l.$slots.label?(n(),u("div",ee,[g("span",se,[H(l.$slots,"label",{},()=>[K(D(e.label),1)])]),e.showValue?(n(),u("span",ae,D(h.value),1)):f("",!0)])):f("",!0),g("div",{class:b(q.value)},[g("div",{class:b(G.value),style:J({width:`${p.value}%`}),role:"progressbar","aria-valuenow":e.value,"aria-valuemin":e.min,"aria-valuemax":e.max},[e.showInnerValue&&p.value>10?(n(),u("span",te,D(h.value),1)):f("",!0)],14,le)],2)],8,Z))}};s.__docgenInfo={exportName:"default",displayName:"DXProgress",description:"",tags:{},props:[{name:"value",description:"Текущее значение",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"min",description:"Минимум",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Максимум",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"showLabel",description:"Показывать лейбл",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showValue",description:"Показывать значение справа",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showInnerValue",description:"Показывать значение внутри бара",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер: xs | sm | md | lg",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"color",description:"Цвет: default | success | warning | danger | info",type:{name:"string"},defaultValue:{func:!1,value:'"default"'}},{name:"animated",description:"Анимация",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"striped",description:"Полосатый",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"label"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXProgress/DXProgress.vue"]};const me={title:"Atoms/DXProgress",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100},description:"Текущее значение прогресса"},min:{control:{type:"number"},description:"Минимальное значение"},max:{control:{type:"number"},description:"Максимальное значение"},size:{control:{type:"select"},options:["xs","sm","md","lg"],description:"Размер прогресс-бара"},color:{control:{type:"select"},options:["default","success","warning","danger","info"],description:"Цвет прогресс-бара"},label:{control:{type:"text"},description:"Текст лейбла"},showLabel:{control:{type:"boolean"},description:"Показывать лейбл"},showValue:{control:{type:"boolean"},description:"Показывать значение справа"},showInnerValue:{control:{type:"boolean"},description:"Показывать значение внутри бара"},striped:{control:{type:"boolean"},description:"Полосатый фон"},animated:{control:{type:"boolean"},description:"Анимированные полосы"}}},r={args:{value:60,size:"md",color:"default"},render:e=>({components:{DXProgress:s},setup(){return{args:e}},template:'<DXProgress v-bind="args" />'})},o={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">xs (h-1)</span>
          <DXProgress :value="60" size="xs" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">sm (h-2)</span>
          <DXProgress :value="60" size="sm" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">md (h-3)</span>
          <DXProgress :value="60" size="md" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">lg (h-4)</span>
          <DXProgress :value="60" size="lg" />
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg
        </div>
      </div>
    `})},c={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4 w-full">
          <h3 class="text-sm font-semibold text-slate-700">Цветовые варианты</h3>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Default</span>
              <DXProgress :value="75" color="default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Success</span>
              <DXProgress :value="75" color="success" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Warning</span>
              <DXProgress :value="75" color="warning" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Danger</span>
              <DXProgress :value="75" color="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Info</span>
              <DXProgress :value="75" color="info" />
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | success | warning | danger | info
        </div>
      </div>
    `})},i={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и значением</h3>
          <DXProgress 
            :value="75" 
            label="Загрузка файлов" 
            :show-label="true" 
            :show-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только лейбл</h3>
          <DXProgress 
            :value="50" 
            label="Обработка данных" 
            :show-label="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только значение</h3>
          <DXProgress 
            :value="90" 
            :show-value="true" 
          />
        </div>
      </div>
    `})},d={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Значение внутри бара</h3>
          <DXProgress 
            :value="65" 
            color="success"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и внутренним значением</h3>
          <DXProgress 
            :value="80" 
            label="Синхронизация"
            color="info"
            :show-label="true"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные значения</h3>
          <DXProgress :value="25" color="danger" :show-inner-value="true" />
          <DXProgress :value="50" color="warning" :show-inner-value="true" />
          <DXProgress :value="75" color="success" :show-inner-value="true" />
        </div>
      </div>
    `})},m={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Полосатый (без анимации)</h3>
          <DXProgress :value="70" color="default" :striped="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Анимированные полосы</h3>
          <DXProgress :value="70" color="success" :striped="true" :animated="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные цвета с анимацией</h3>
          <DXProgress :value="60" color="default" :striped="true" :animated="true" />
          <DXProgress :value="60" color="success" :striped="true" :animated="true" />
          <DXProgress :value="60" color="warning" :striped="true" :animated="true" />
          <DXProgress :value="60" color="danger" :striped="true" :animated="true" />
          <DXProgress :value="60" color="info" :striped="true" :animated="true" />
        </div>
      </div>
    `})},v={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="space-y-4">
            <DXProgress :value="70" size="xs" color="success" />
            <DXProgress :value="70" size="sm" color="success" />
            <DXProgress :value="70" size="md" color="success" />
            <DXProgress :value="70" size="lg" color="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="space-y-4">
            <DXProgress :value="40" size="xs" color="danger" />
            <DXProgress :value="40" size="sm" color="danger" />
            <DXProgress :value="40" size="md" color="danger" />
            <DXProgress :value="40" size="lg" color="danger" />
          </div>
        </div>
      </div>
    `})},x={render:()=>({components:{DXProgress:s},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Загрузка файла</h3>
          <DXProgress 
            :value="45" 
            label="Загрузка файла.pdf" 
            :show-label="true" 
            :show-value="true"
            color="info"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Обработка данных</h3>
          <DXProgress 
            :value="80" 
            label="Обработка данных" 
            :show-label="true" 
            :show-inner-value="true"
            color="success"
            :striped="true"
            :animated="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Ошибка загрузки</h3>
          <DXProgress 
            :value="30" 
            label="Ошибка загрузки" 
            :show-label="true" 
            :show-value="true"
            color="danger"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Кастомный диапазон</h3>
          <DXProgress 
            :value="150" 
            :min="0" 
            :max="200"
            label="Прогресс: 150/200" 
            :show-label="true" 
            :show-value="true"
            color="warning"
          />
        </div>
      </div>
    `})};var P,X,w;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'md',
    color: 'default'
  },
  render: args => ({
    components: {
      DXProgress
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXProgress v-bind="args" />'
  })
}`,...(w=(X=r.parameters)==null?void 0:X.docs)==null?void 0:w.source}}};var y,z,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">xs (h-1)</span>
          <DXProgress :value="60" size="xs" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">sm (h-2)</span>
          <DXProgress :value="60" size="sm" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">md (h-3)</span>
          <DXProgress :value="60" size="md" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <span class="text-sm text-slate-600">lg (h-4)</span>
          <DXProgress :value="60" size="lg" />
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg
        </div>
      </div>
    \`
  })
}`,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var E,V,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4 w-full">
          <h3 class="text-sm font-semibold text-slate-700">Цветовые варианты</h3>
          <div class="space-y-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Default</span>
              <DXProgress :value="75" color="default" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Success</span>
              <DXProgress :value="75" color="success" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Warning</span>
              <DXProgress :value="75" color="warning" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Danger</span>
              <DXProgress :value="75" color="danger" />
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-xs text-slate-600">Info</span>
              <DXProgress :value="75" color="info" />
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | success | warning | danger | info
        </div>
      </div>
    \`
  })
}`,...(S=(V=c.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var C,A,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и значением</h3>
          <DXProgress 
            :value="75" 
            label="Загрузка файлов" 
            :show-label="true" 
            :show-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только лейбл</h3>
          <DXProgress 
            :value="50" 
            label="Обработка данных" 
            :show-label="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Только значение</h3>
          <DXProgress 
            :value="90" 
            :show-value="true" 
          />
        </div>
      </div>
    \`
  })
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var N,L,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Значение внутри бара</h3>
          <DXProgress 
            :value="65" 
            color="success"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С лейблом и внутренним значением</h3>
          <DXProgress 
            :value="80" 
            label="Синхронизация"
            color="info"
            :show-label="true"
            :show-inner-value="true" 
          />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные значения</h3>
          <DXProgress :value="25" color="danger" :show-inner-value="true" />
          <DXProgress :value="50" color="warning" :show-inner-value="true" />
          <DXProgress :value="75" color="success" :show-inner-value="true" />
        </div>
      </div>
    \`
  })
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var F,W,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Полосатый (без анимации)</h3>
          <DXProgress :value="70" color="default" :striped="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Анимированные полосы</h3>
          <DXProgress :value="70" color="success" :striped="true" :animated="true" />
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные цвета с анимацией</h3>
          <DXProgress :value="60" color="default" :striped="true" :animated="true" />
          <DXProgress :value="60" color="success" :striped="true" :animated="true" />
          <DXProgress :value="60" color="warning" :striped="true" :animated="true" />
          <DXProgress :value="60" color="danger" :striped="true" :animated="true" />
          <DXProgress :value="60" color="info" :striped="true" :animated="true" />
        </div>
      </div>
    \`
  })
}`,...(_=(W=m.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var $,j,M;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="space-y-4">
            <DXProgress :value="70" size="xs" color="success" />
            <DXProgress :value="70" size="sm" color="success" />
            <DXProgress :value="70" size="md" color="success" />
            <DXProgress :value="70" size="lg" color="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="space-y-4">
            <DXProgress :value="40" size="xs" color="danger" />
            <DXProgress :value="40" size="sm" color="danger" />
            <DXProgress :value="40" size="md" color="danger" />
            <DXProgress :value="40" size="lg" color="danger" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(M=(j=v.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var U,O,T;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXProgress
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Загрузка файла</h3>
          <DXProgress 
            :value="45" 
            label="Загрузка файла.pdf" 
            :show-label="true" 
            :show-value="true"
            color="info"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Обработка данных</h3>
          <DXProgress 
            :value="80" 
            label="Обработка данных" 
            :show-label="true" 
            :show-inner-value="true"
            color="success"
            :striped="true"
            :animated="true"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Ошибка загрузки</h3>
          <DXProgress 
            :value="30" 
            label="Ошибка загрузки" 
            :show-label="true" 
            :show-value="true"
            color="danger"
          />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Кастомный диапазон</h3>
          <DXProgress 
            :value="150" 
            :min="0" 
            :max="200"
            label="Прогресс: 150/200" 
            :show-label="true" 
            :show-value="true"
            color="warning"
          />
        </div>
      </div>
    \`
  })
}`,...(T=(O=x.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const ve=["Default","Sizes","Variants","WithLabel","WithInnerValue","Striped","SizesAndVariants","UseCases"];export{r as Default,o as Sizes,v as SizesAndVariants,m as Striped,x as UseCases,c as Variants,d as WithInnerValue,i as WithLabel,ve as __namedExportsOrder,me as default};
