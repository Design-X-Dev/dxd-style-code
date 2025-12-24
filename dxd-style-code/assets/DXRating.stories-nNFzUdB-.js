import{r as w,c as s,a as p,o as l,k as S,F as ie,D as ce,l as i,u as de,q as H,s as me,e as V,p as x}from"./vue.esm-bundler-CzLKT_w4.js";import{u as d}from"./useClassComposition-Dym2pzZ_.js";import{r as pe}from"./HeartIcon-DvsVISFD.js";import{r as ge}from"./StarIcon-Bb7sZlAl.js";import{r as ye}from"./HeartIcon-C-RYqEe_.js";import{r as fe}from"./StarIcon-C6qU1LrZ.js";import{_ as ve}from"./DXFormControl-AlN7sECA.js";import"./DXText-DW7ThwBY.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXValidationIcon-CNh0i5IT.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useVariant-vdsOb9m8.js";const De=["data-size","data-readonly","data-symbol","data-color","aria-label"],be=["disabled","aria-label","aria-checked","onClick","onMouseenter","onKeydown"],r={__name:"DXRating",props:{modelValue:{type:Number,default:0},max:{type:Number,default:5},readonly:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},symbol:{type:String,default:"star",validator:a=>["star","heart","number"].includes(a)},color:{type:String,default:"yellow",validator:a=>["yellow","red","blue","green","purple"].includes(a)},size:{type:String,default:"md",validator:a=>["xs","sm","md","lg","xl"].includes(a)},count:{type:Number,default:null},ariaLabel:{type:String,default:null}},emits:["update:modelValue","change"],setup(a,{emit:m}){const u=a,B=m,o=w(0),ae=s(()=>u.symbol==="heart"?pe:ge),z=s(()=>u.symbol==="heart"?ye:fe),ue=s(()=>d("inline-flex items-center gap-1"));function ne(e){const t=F(e),n=o.value>=e;return o.value||u.modelValue,d("relative inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded",{"cursor-pointer":!u.readonly,"cursor-default":u.readonly,[c.value.active]:t||n,[c.value.inactive]:!t&&!n,[X.value]:!0})}function A(e){return d(X.value,{[c.value.active]:h(e),[c.value.inactive]:!h(e)})}function te(e){return d(X.value,c.value.active,"absolute left-0 top-0 overflow-hidden")}const re=s(()=>{const e={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl"};return d(e[u.size]||e.md,"text-slate-500 ml-1")}),X=s(()=>{const e={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};return{value:e[u.size]||e.md}}),c=s(()=>{const e={yellow:{active:"text-yellow-400",inactive:"text-slate-300"},red:{active:"text-rose-500",inactive:"text-slate-300"},blue:{active:"text-blue-500",inactive:"text-slate-300"},green:{active:"text-green-500",inactive:"text-slate-300"},purple:{active:"text-purple-500",inactive:"text-slate-300"}};return e[u.color]||e.yellow});function F(e){return(o.value||u.modelValue)>=e}function h(e){const t=o.value||u.modelValue;return Math.floor(t)>=e}function oe(e){if(!u.allowHalf)return!1;const t=o.value||u.modelValue;return Math.floor(t)===e-1&&t%1>=.5}function C(e){if(u.readonly)return;let t=e;u.allowHalf&&u.modelValue===e&&(t=e-.5),B("update:modelValue",t),B("change",t)}function le(e){u.readonly||(o.value=e)}function se(){u.readonly||(o.value=0)}return(e,t)=>(l(),p("div",{class:i(ue.value),"data-component":"DXRating","data-size":a.size,"data-readonly":a.readonly,"data-symbol":a.symbol,"data-color":a.color,role:"radiogroup","aria-label":a.ariaLabel||"Рейтинг"},[(l(!0),p(ie,null,ce(a.max,n=>(l(),p("button",{key:n,type:"button",class:i(ne(n)),disabled:a.readonly,"aria-label":`Оценка ${n} из ${a.max}`,"aria-checked":F(n),role:"radio",tabindex:"0",onClick:E=>C(n),onMouseenter:E=>le(n),onMouseleave:se,onKeydown:[H(E=>C(n),["enter"]),H(me(E=>C(n),["prevent"]),["space"])]},[h(n)?(l(),V(x(z.value),{key:0,class:i(A(n))},null,8,["class"])):(l(),V(x(ae.value),{key:1,class:i(A(n))},null,8,["class"])),a.allowHalf&&oe(n)?(l(),V(x(z.value),{key:2,class:i(te())},null,8,["class"])):S("",!0)],42,be))),128)),a.count?(l(),p("span",{key:0,class:i(re.value)}," ("+de(a.count)+") ",3)):S("",!0)],10,De))}};r.__docgenInfo={exportName:"default",displayName:"DXRating",description:"",tags:{},props:[{name:"modelValue",description:`Значение рейтинга (v-model)
Может быть целым числом или дробным (например, 4.5)`,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",description:"Максимальное значение рейтинга",tags:{default:[{description:"5",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"5"}},{name:"readonly",description:"Только для чтения (не интерактивный)",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"allowHalf",description:"Разрешить половину значения (например, 4.5)",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"symbol",description:"Символ для отображения: star | heart | number",tags:{default:[{description:"'star'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"star"'},values:["star","heart","number"]},{name:"color",description:"Цвет: yellow | red | blue | green | purple",tags:{default:[{description:"'yellow'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"yellow"'},values:["yellow","red","blue","green","purple"]},{name:"size",description:"Размер: xs | sm | md | lg | xl",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["xs","sm","md","lg","xl"]},{name:"count",description:"Количество оценок для отображения",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",description:"Кастомный aria-label",type:{name:"string"},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"},{name:"change"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXRating/DXRating.vue"]};const Ie={title:"Molecules/DXRating",component:r,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXRating

Компонент для отображения и выбора рейтинга с использованием звезд или других символов.

## Назначение

DXRating позволяет отображать и выбирать рейтинг в различных форматах:
звезды, сердца или числа. Поддерживает дробные значения и различные размеры.

## Архитектура

### Использует
- \`DXIcon\` - для отображения символов (звезды, сердца)
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- Формы отзывов
- Карточки товаров для отображения рейтинга
- Системы обратной связи

## Внутренняя логика

### Символы
- **star**: Звезды (по умолчанию)
- **heart**: Сердца
- **number**: Числа (будущая реализация)

### Дробные значения
При \`allowHalf={true}\` можно выбирать половину значения (например, 4.5).

### Hover эффект
При наведении курсора элементы подсвечиваются для визуальной обратной связи.

## Особенности

### Доступность
- ARIA атрибуты для screen readers
- Клавиатурная навигация (Enter, Space)
- Role="radiogroup" для семантики

### Readonly режим
В readonly режиме компонент только отображает рейтинг без возможности изменения.
        `}}},argTypes:{modelValue:{control:"number",min:0,max:5,step:.5,description:"Значение рейтинга (v-model).",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"Content"}},max:{control:"number",min:1,max:10,description:"Максимальное значение рейтинга.",table:{type:{summary:"number"},defaultValue:{summary:"5"},category:"Content"}},readonly:{control:"boolean",description:"Только для чтения (не интерактивный).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},allowHalf:{control:"boolean",description:"Разрешить половину значения (например, 4.5).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},symbol:{control:"select",options:["star","heart","number"],description:"Символ для отображения: star | heart | number.",table:{type:{summary:"string"},defaultValue:{summary:"star"},category:"Appearance"}},color:{control:"select",options:["yellow","red","blue","green","purple"],description:"Цвет символов.",table:{type:{summary:"string"},defaultValue:{summary:"yellow"},category:"Appearance"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},count:{control:"number",description:"Количество оценок для отображения.",table:{type:{summary:"number"},defaultValue:{summary:"null"},category:"Content"}}}},g={args:{modelValue:4.5,readonly:!0},parameters:{docs:{description:{story:"Базовое использование для отображения рейтинга (readonly режим)."}}},render:a=>({components:{DXRating:r},setup(){return{args:a}},template:'<DXRating v-bind="args" />'})},y={parameters:{docs:{description:{story:"Интерактивный выбор рейтинга. Пользователь может выбрать рейтинг кликом."}}},render:()=>({components:{DXRating:r,DXFormControl:ve},setup(){return{productRating:w(0),handleRatingChange:u=>{console.log("Выбран рейтинг:",u)}}},template:`
      <DXFormControl label="Оцените товар">
        <DXRating
          v-model="productRating"
          :max="5"
          @change="handleRatingChange"
        />
      </DXFormControl>
    `})},f={args:{modelValue:3.5,allowHalf:!0,readonly:!0},parameters:{docs:{description:{story:"Рейтинг с поддержкой дробных значений. Можно выбрать половину звезды."}}},render:a=>({components:{DXRating:r},setup(){return{args:a}},template:'<DXRating v-bind="args" />'})},v={args:{modelValue:4.2,count:125,readonly:!0},parameters:{docs:{description:{story:"Рейтинг с количеством оценок. Отображает количество оценок рядом с рейтингом."}}},render:a=>({components:{DXRating:r},setup(){return{args:a}},template:'<DXRating v-bind="args" />'})},D={args:{modelValue:4,symbol:"heart",color:"red",readonly:!0},parameters:{docs:{description:{story:"Рейтинг с сердцами вместо звезд. Полезно для лайков и избранного."}}},render:a=>({components:{DXRating:r},setup(){const m=w(0);return{args:a,heartRating:m}},template:`
      <div class="space-y-4">
        <DXRating v-bind="args" />
        <DXRating
          v-model="heartRating"
          :max="5"
          symbol="heart"
          color="red"
        />
        <DXText tag="p" size="sm" color="muted">Выбрано: {{ heartRating }}</DXText>
      </div>
    `})},b={parameters:{docs:{description:{story:"Различные размеры компонента."}}},render:()=>({components:{DXRating:r},setup(){return{}},template:`
      <div class="space-y-4">
        <DXRating :model-value="4" size="xs" readonly />
        <DXRating :model-value="4" size="sm" readonly />
        <DXRating :model-value="4" size="md" readonly />
        <DXRating :model-value="4" size="lg" readonly />
        <DXRating :model-value="4" size="xl" readonly />
      </div>
    `})},R={parameters:{docs:{description:{story:"Различные цвета символов."}}},render:()=>({components:{DXRating:r},setup(){return{}},template:`
      <div class="space-y-4">
        <DXRating :model-value="4" color="yellow" readonly />
        <DXRating :model-value="4" color="red" readonly />
        <DXRating :model-value="4" color="blue" readonly />
        <DXRating :model-value="4" color="green" readonly />
        <DXRating :model-value="4" color="purple" readonly />
      </div>
    `})};var k,M,I;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: 4.5,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для отображения рейтинга (readonly режим).'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(I=(M=g.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var $,N,L;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Интерактивный выбор рейтинга. Пользователь может выбрать рейтинг кликом.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating,
      DXFormControl
    },
    setup() {
      const productRating = ref(0);
      const handleRatingChange = value => {
        console.log('Выбран рейтинг:', value);
      };
      return {
        productRating,
        handleRatingChange
      };
    },
    template: \`
      <DXFormControl label="Оцените товар">
        <DXRating
          v-model="productRating"
          :max="5"
          @change="handleRatingChange"
        />
      </DXFormControl>
    \`
  })
}`,...(L=(N=y.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var T,W,K;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    modelValue: 3.5,
    allowHalf: true,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с поддержкой дробных значений. Можно выбрать половину звезды.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(K=(W=f.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var j,O,P;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: 4.2,
    count: 125,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с количеством оценок. Отображает количество оценок рядом с рейтингом.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(P=(O=v.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var q,G,U;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    modelValue: 4,
    symbol: 'heart',
    color: 'red',
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с сердцами вместо звезд. Полезно для лайков и избранного.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      const heartRating = ref(0);
      return {
        args,
        heartRating
      };
    },
    template: \`
      <div class="space-y-4">
        <DXRating v-bind="args" />
        <DXRating
          v-model="heartRating"
          :max="5"
          symbol="heart"
          color="red"
        />
        <DXText tag="p" size="sm" color="muted">Выбрано: {{ heartRating }}</DXText>
      </div>
    \`
  })
}`,...(U=(G=D.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var _,J,Q;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXRating :model-value="4" size="xs" readonly />
        <DXRating :model-value="4" size="sm" readonly />
        <DXRating :model-value="4" size="md" readonly />
        <DXRating :model-value="4" size="lg" readonly />
        <DXRating :model-value="4" size="xl" readonly />
      </div>
    \`
  })
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные цвета символов.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXRating :model-value="4" color="yellow" readonly />
        <DXRating :model-value="4" color="red" readonly />
        <DXRating :model-value="4" color="blue" readonly />
        <DXRating :model-value="4" color="green" readonly />
        <DXRating :model-value="4" color="purple" readonly />
      </div>
    \`
  })
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const $e=["Default","Interactive","WithHalf","WithCount","HeartSymbol","AllSizes","AllColors"];export{R as AllColors,b as AllSizes,g as Default,D as HeartSymbol,y as Interactive,v as WithCount,f as WithHalf,$e as __namedExportsOrder,Ie as default};
