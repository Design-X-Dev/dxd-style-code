import{c as V,a as H,o as G,g as L,q as k}from"./vue.esm-bundler-C1fUoNF-.js";import{u as I}from"./useClassComposition-Dym2pzZ_.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as t}from"./DXText-Bu-Qlv6N.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const U=["cite","data-variant","data-quote-style"],b={__name:"DXQuote",props:{cite:{type:String,default:null},variant:{type:String,default:"default",validator:u=>["default","highlighted"].includes(u)},quoteStyle:{type:String,default:"default",validator:u=>["default","french","german"].includes(u)}},setup(u){const c=u,_=V(()=>{const l="inline",d={default:"text-slate-700",highlighted:"text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded"},D={default:"",french:"dx-quote-french",german:"dx-quote-german"};return I(l,d[c.variant]||d.default,D[c.quoteStyle]||D.default)});return(l,d)=>(G(),H("q",{cite:u.cite,class:k(_.value),"data-component":"DXQuote","data-variant":u.variant,"data-quote-style":u.quoteStyle},[L(l.$slots,"default",{},void 0,!0)],10,U))}},e=N(b,[["__scopeId","data-v-82280b9c"]]);b.__docgenInfo={exportName:"default",displayName:"DXQuote",description:"",tags:{},props:[{name:"cite",description:"URL источника цитаты",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"variant",description:"Вариант стилизации: default | highlighted",tags:{default:[{description:"'default'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","highlighted"]},{name:"quoteStyle",description:"Стиль кавычек: default | french | german",tags:{default:[{description:"'default'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","french","german"]}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/atoms/DXQuote/DXQuote.vue"]};const M={title:"Atoms/DXQuote",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXQuote

Компонент для отображения inline-цитат в текстовом контенте.

## Назначение

DXQuote предоставляет семантический способ отображения inline-цитат с поддержкой
различных стилей кавычек и визуального выделения. Используется для цитирования
в статьях, блогах и комментариях.

## Архитектура

### Использует
- Семантический HTML тег \`<q>\` - для inline-цитат
- \`useClassComposition\` composable - для стилей

### Используется в
- Статьи и блоги
- Комментарии и обсуждения
- Вместе с \`DXText\` и \`DXBlockquote\`

## Внутренняя логика

### Варианты
- **default**: Обычная цитата без выделения
- **highlighted**: Цитата с фоном для выделения

### Стили кавычек
- **default**: Стандартные кавычки браузера
- **french**: Французские кавычки « »
- **german**: Немецкие кавычки „ "

## Особенности

### Семантика
Использует семантический тег \`<q>\` для правильной разметки цитат.

### Атрибут cite
Поддерживает атрибут \`cite\` для указания источника цитаты.
        `}}},argTypes:{cite:{control:"text",description:"URL источника цитаты.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Content"}},variant:{control:"select",options:["default","highlighted"],description:"Вариант стилизации: default (обычная) | highlighted (с выделением).",table:{type:{summary:"string"},defaultValue:{summary:"default"},category:"Appearance"}},quoteStyle:{control:"select",options:["default","french","german"],description:'Стиль кавычек: default | french (« ») | german („ ").',table:{type:{summary:"string"},defaultValue:{summary:"default"},category:"Appearance"}}}},n={args:{variant:"default",quoteStyle:"default"},parameters:{docs:{description:{story:"Базовая inline-цитата без выделения. Использует стандартные кавычки браузера."}}},render:u=>({components:{DXQuote:e,DXText:t},setup(){return{args:u}},template:`
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    `})},a={args:{cite:"https://example.com/einstein",variant:"default"},parameters:{docs:{description:{story:"Цитата с указанием источника через атрибут cite."}}},render:u=>({components:{DXQuote:e,DXText:t},setup(){return{args:u}},template:`
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    `})},r={args:{variant:"highlighted",quoteStyle:"default"},parameters:{docs:{description:{story:"Цитата с выделением. Имеет фон для визуального выделения."}}},render:u=>({components:{DXQuote:e,DXText:t},setup(){return{args:u}},template:`
      <DXText>
        В своей книге автор отмечает, что
        <DXQuote v-bind="args">успех приходит к тем, кто действует</DXQuote>
        , а не к тем, кто только мечтает.
      </DXText>
    `})},s={args:{quoteStyle:"french",variant:"default"},parameters:{docs:{description:{story:"Цитата с французскими кавычками « ». Используется во французской типографике."}}},render:u=>({components:{DXQuote:e,DXText:t},setup(){return{args:u}},template:`
      <DXText>
        <DXQuote v-bind="args">Французский стиль кавычек</DXQuote>
        используется во французской типографике.
      </DXText>
    `})},o={args:{quoteStyle:"german",variant:"default"},parameters:{docs:{description:{story:'Цитата с немецкими кавычками „ ". Используется в немецкой типографике.'}}},render:u=>({components:{DXQuote:e,DXText:t},setup(){return{args:u}},template:`
      <DXText>
        <DXQuote v-bind="args">Немецкий стиль кавычек</DXQuote>
        используется в немецкой типографике.
      </DXText>
    `})},i={parameters:{docs:{description:{story:"Демонстрация всех стилей кавычек и вариантов."}}},render:()=>({components:{DXQuote:e,DXText:t},setup(){return{}},template:`
      <div class="space-y-4">
        <DXText>
          Default: <DXQuote>Обычная цитата</DXQuote>
        </DXText>
        <DXText>
          Highlighted: <DXQuote variant="highlighted">Выделенная цитата</DXQuote>
        </DXText>
        <DXText>
          French: <DXQuote quote-style="french">Французские кавычки</DXQuote>
        </DXText>
        <DXText>
          German: <DXQuote quote-style="german">Немецкие кавычки</DXQuote>
        </DXText>
        <DXText>
          Highlighted + French: <DXQuote variant="highlighted" quote-style="french">Комбинация</DXQuote>
        </DXText>
      </div>
    `})};var p,m,X;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    quoteStyle: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая inline-цитата без выделения. Использует стандартные кавычки браузера.'
      }
    }
  },
  render: args => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    \`
  })
}`,...(X=(m=n.parameters)==null?void 0:m.docs)==null?void 0:X.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    cite: 'https://example.com/einstein',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с указанием источника через атрибут cite.'
      }
    }
  },
  render: args => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXText>
        Как говорил Эйнштейн:
        <DXQuote v-bind="args">Воображение важнее знания</DXQuote>
        , и это действительно так.
      </DXText>
    \`
  })
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,Q;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'highlighted',
    quoteStyle: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с выделением. Имеет фон для визуального выделения.'
      }
    }
  },
  render: args => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXText>
        В своей книге автор отмечает, что
        <DXQuote v-bind="args">успех приходит к тем, кто действует</DXQuote>
        , а не к тем, кто только мечтает.
      </DXText>
    \`
  })
}`,...(Q=(y=r.parameters)==null?void 0:y.docs)==null?void 0:Q.source}}};var T,E,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    quoteStyle: 'french',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с французскими кавычками « ». Используется во французской типографике.'
      }
    }
  },
  render: args => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXText>
        <DXQuote v-bind="args">Французский стиль кавычек</DXQuote>
        используется во французской типографике.
      </DXText>
    \`
  })
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var v,C,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    quoteStyle: 'german',
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Цитата с немецкими кавычками „ ". Используется в немецкой типографике.'
      }
    }
  },
  render: args => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXText>
        <DXQuote v-bind="args">Немецкий стиль кавычек</DXQuote>
        используется в немецкой типографике.
      </DXText>
    \`
  })
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var F,q,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех стилей кавычек и вариантов.'
      }
    }
  },
  render: () => ({
    components: {
      DXQuote,
      DXText
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXText>
          Default: <DXQuote>Обычная цитата</DXQuote>
        </DXText>
        <DXText>
          Highlighted: <DXQuote variant="highlighted">Выделенная цитата</DXQuote>
        </DXText>
        <DXText>
          French: <DXQuote quote-style="french">Французские кавычки</DXQuote>
        </DXText>
        <DXText>
          German: <DXQuote quote-style="german">Немецкие кавычки</DXQuote>
        </DXText>
        <DXText>
          Highlighted + French: <DXQuote variant="highlighted" quote-style="french">Комбинация</DXQuote>
        </DXText>
      </div>
    \`
  })
}`,...(S=(q=i.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};const w=["Default","WithCite","Highlighted","FrenchQuotes","GermanQuotes","AllStyles"];export{i as AllStyles,n as Default,s as FrenchQuotes,o as GermanQuotes,r as Highlighted,a as WithCite,w as __namedExportsOrder,M as default};
