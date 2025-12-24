import{c as r,e as i,g as d,l as o,o as a,a as c,k as l,b as C,m as D,f as de,x as m,u as f,F as S,D as F,r as E}from"./vue.esm-bundler-CzLKT_w4.js";import{u as g}from"./useClassComposition-Dym2pzZ_.js";import{_ as ce}from"./DXCard-BX01pIOu.js";import{_ as me}from"./DXAvatar-DaIMde_I.js";import{_ as B}from"./DXButton-ChBdj9Dq.js";import{_ as fe}from"./DXBadge-CxZg7KEC.js";import{_ as ge}from"./DXHeading-DwWVK5ab.js";import{_ as V}from"./DXText-DW7ThwBY.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const pe={class:"flex items-center gap-4"},ve={class:"flex flex-wrap gap-2"},p={__name:"DXUserProfileCard",props:{user:{type:Object,required:!0},showActions:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},showStats:{type:Boolean,default:!0},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},clickable:{type:Boolean,default:!1},cardVariant:{type:String,default:"default",validator:e=>["default","bordered","elevated","flat"].includes(e)},padding:{type:String,default:"md",validator:e=>["none","xs","sm","md","lg","xl"].includes(e)}},emits:["click","edit","message"],setup(e,{emit:X}){const t=e,U=X,H=r(()=>({sm:"md",md:"lg",lg:"xl"})[t.size]||"lg"),K=r(()=>t.size==="sm"?"sm":"md"),Q=r(()=>g("w-full",t.clickable?"cursor-pointer hover:border-slate-300 transition-all":"")),R=r(()=>g("flex justify-center mb-4")),Y=r(()=>g("text-center mb-4")),Z=r(()=>{const s={sm:"lg",md:"xl",lg:"2xl"};return s[t.size]||s.md}),_=r(()=>{const s={sm:"sm",md:"md",lg:"lg"};return s[t.size]||s.md}),ee=r(()=>{const s={sm:"xs",md:"sm",lg:"md"};return s[t.size]||s.md}),se=r(()=>g("mb-4 pt-4 border-t border-slate-200")),ae=r(()=>{const s={sm:"text-lg font-semibold text-slate-900",md:"text-xl font-semibold text-slate-900",lg:"text-2xl font-semibold text-slate-900"};return s[t.size]||s.md}),te=r(()=>{const s={sm:"text-xs text-slate-500 mt-1",md:"text-sm text-slate-500 mt-1",lg:"text-base text-slate-500 mt-1"};return s[t.size]||s.md}),ue=r(()=>g("mb-4 flex justify-center")),re=r(()=>g("flex justify-center gap-2"));function ne(s){return{posts:"Постов",followers:"Подписчиков",following:"Подписок",views:"Просмотров",likes:"Лайков"}[s]||s}function le(){t.clickable&&U("click",t.user)}function oe(){U("edit",t.user)}function ie(){U("message",t.user)}return(s,v)=>(a(),i(ce,{class:o(Q.value),variant:e.cardVariant,padding:e.padding,"data-component":"DXUserProfileCard","data-size":e.size,"data-clickable":e.clickable,onClick:le},{default:d(()=>{var P,w,A;return[s.$slots.avatar||(P=e.user)!=null&&P.avatar?(a(),c("div",{key:0,class:o(R.value)},[D(s.$slots,"avatar",{},()=>{var n,u;return[de(me,{src:(n=e.user)==null?void 0:n.avatar,name:(u=e.user)==null?void 0:u.name,size:H.value},null,8,["src","name","size"])]})],2)):l("",!0),C("div",{class:o(Y.value)},[D(s.$slots,"info",{},()=>{var n,u,b;return[(n=e.user)!=null&&n.name?(a(),i(ge,{key:0,level:3,size:Z.value,weight:"semibold",color:"default"},{default:d(()=>[m(f(e.user.name),1)]),_:1},8,["size"])):l("",!0),(u=e.user)!=null&&u.role?(a(),i(V,{key:1,tag:"p",size:_.value,color:"muted",class:"mt-1"},{default:d(()=>[m(f(e.user.role),1)]),_:1},8,["size"])):l("",!0),(b=e.user)!=null&&b.bio?(a(),i(V,{key:2,tag:"p",size:ee.value,color:"muted",class:"mt-2"},{default:d(()=>[m(f(e.user.bio),1)]),_:1},8,["size"])):l("",!0)]})],2),s.$slots.stats||(w=e.user)!=null&&w.stats&&e.showStats?(a(),c("div",{key:1,class:o(se.value)},[D(s.$slots,"stats",{},()=>{var n;return[C("div",pe,[(a(!0),c(S,null,F((n=e.user)==null?void 0:n.stats,(u,b)=>(a(),c("div",{key:b,class:"text-center"},[C("div",{class:o(ae.value)},f(u),3),C("div",{class:o(te.value)},f(ne(b)),3)]))),128))])]})],2)):l("",!0),s.$slots.badges||(A=e.user)!=null&&A.badges&&e.user.badges.length>0?(a(),c("div",{key:2,class:o(ue.value)},[D(s.$slots,"badges",{},()=>{var n;return[C("div",ve,[(a(!0),c(S,null,F((n=e.user)==null?void 0:n.badges,u=>(a(),i(fe,{key:u.id||u,variant:u.variant||"default",size:K.value},{default:d(()=>[m(f(u.label||u),1)]),_:2},1032,["variant","size"]))),128))])]})],2)):l("",!0),(s.$slots.actions||e.showActions)&&!e.clickable?(a(),c("div",{key:3,class:o(re.value)},[D(s.$slots,"actions",{},()=>[e.showActions?(a(),i(B,{key:0,variant:"primary",size:"sm",onClick:ie},{default:d(()=>[...v[0]||(v[0]=[m(" Написать ",-1)])]),_:1})):l("",!0),e.showActions&&e.editable?(a(),i(B,{key:1,variant:"ghost",size:"sm",onClick:oe},{default:d(()=>[...v[1]||(v[1]=[m(" Редактировать ",-1)])]),_:1})):l("",!0)])],2)):l("",!0)]}),_:3},8,["class","variant","padding","data-size","data-clickable"]))}};p.__docgenInfo={exportName:"default",displayName:"DXUserProfileCard",description:"",tags:{},props:[{name:"user",description:`Данные пользователя
Формат: { name, role?, bio?, avatar?, stats?, badges? }`,type:{name:"object"},required:!0},{name:"showActions",description:"Показывать действия",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"editable",description:"Можно редактировать",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showStats",description:"Показывать статистику",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"size",description:"Размер карточки: sm | md | lg",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["sm","md","lg"]},{name:"clickable",description:"Кликабельная карточка",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cardVariant",description:"Вариант DXCard",tags:{default:[{description:"'default'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","bordered","elevated","flat"]},{name:"padding",description:"Padding для DXCard",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["none","xs","sm","md","lg","xl"]}],events:[{name:"click"},{name:"edit"},{name:"message"}],slots:[{name:"avatar"},{name:"info"},{name:"stats"},{name:"badges"},{name:"actions"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXUserProfileCard/DXUserProfileCard.vue"]};const Fe={title:"Organisms/DXUserProfileCard",component:p,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXUserProfileCard

Карточка профиля пользователя с информацией, действиями и настройками.

## Назначение

DXUserProfileCard предоставляет карточку профиля пользователя с отображением
аватара, основной информации, статистики, badges и действий.

## Архитектура

### Использует
- \`DXCard\` - как базовый контейнер
- \`DXAvatar\` - для аватара
- \`DXButton\` - для действий
- \`DXBadge\` - для badges
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- Профили пользователей
- Карточки в списках пользователей
- Виджеты профиля
- Панели управления профилем

## Внутренняя логика

### Размеры
Поддерживает размеры: sm, md, lg.

### Статистика
Отображает статистику пользователя (посты, подписчики, подписки и т.д.).

### Badges
Поддерживает отображение badges для статусов пользователя.

## Особенности

### Слоты
- **avatar**: Кастомный аватар
- **info**: Кастомная информация
- **stats**: Кастомная статистика
- **badges**: Кастомные badges
- **actions**: Кастомные действия

### Кликабельность
При \`clickable={true}\` карточка становится кликабельной.
        `}}}},x={id:1,name:"John Doe",role:"Senior Developer",bio:"Passionate about web development and design",avatar:"/avatar.jpg",stats:{posts:125,followers:1250,following:340},badges:[{id:1,label:"Верифицирован",variant:"success"},{id:2,label:"Премиум",variant:"info"}]},z={args:{user:x,showActions:!0,showStats:!0},parameters:{docs:{description:{story:"Базовая карточка профиля с аватаром, информацией, статистикой и действиями."}}},render:e=>({components:{DXUserProfileCard:p},setup(){return{args:e}},template:`
      <div class="max-w-sm">
        <DXUserProfileCard v-bind="args" />
      </div>
    `})},h={parameters:{docs:{description:{story:"Карточка профиля с действиями (написать, редактировать)."}}},render:()=>({components:{DXUserProfileCard:p},setup(){return{user:E(x),handleEdit:()=>{console.log("Редактирование профиля")},handleMessage:()=>{console.log("Отправка сообщения")}}},template:`
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :show-actions="true"
          :editable="true"
          @edit="handleEdit"
          @message="handleMessage"
        />
      </div>
    `})},k={parameters:{docs:{description:{story:"Кликабельная карточка профиля."}}},render:()=>({components:{DXUserProfileCard:p},setup(){const e=E(x);return{user:e,handleClick:()=>{console.log("Клик по карточке:",e.value)}}},template:`
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :clickable="true"
          @click="handleClick"
        />
      </div>
    `})},y={parameters:{docs:{description:{story:"Карточки профиля разных размеров."}}},render:()=>({components:{DXUserProfileCard:p},setup(){return{user:E(x)}},template:`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DXUserProfileCard :user="user" size="sm" />
        <DXUserProfileCard :user="user" size="md" />
        <DXUserProfileCard :user="user" size="lg" />
      </div>
    `})};var $,M,j;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    user: defaultUser,
    showActions: true,
    showStats: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая карточка профиля с аватаром, информацией, статистикой и действиями.'
      }
    }
  },
  render: args => ({
    components: {
      DXUserProfileCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-sm">
        <DXUserProfileCard v-bind="args" />
      </div>
    \`
  })
}`,...(j=(M=z.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var N,L,O;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Карточка профиля с действиями (написать, редактировать).'
      }
    }
  },
  render: () => ({
    components: {
      DXUserProfileCard
    },
    setup() {
      const user = ref(defaultUser);
      const handleEdit = () => {
        console.log('Редактирование профиля');
      };
      const handleMessage = () => {
        console.log('Отправка сообщения');
      };
      return {
        user,
        handleEdit,
        handleMessage
      };
    },
    template: \`
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :show-actions="true"
          :editable="true"
          @edit="handleEdit"
          @message="handleMessage"
        />
      </div>
    \`
  })
}`,...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,I,W;k.parameters={...k.parameters,docs:{...(q=k.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кликабельная карточка профиля.'
      }
    }
  },
  render: () => ({
    components: {
      DXUserProfileCard
    },
    setup() {
      const user = ref(defaultUser);
      const handleClick = () => {
        console.log('Клик по карточке:', user.value);
      };
      return {
        user,
        handleClick
      };
    },
    template: \`
      <div class="max-w-sm">
        <DXUserProfileCard
          :user="user"
          :clickable="true"
          @click="handleClick"
        />
      </div>
    \`
  })
}`,...(W=(I=k.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var G,J,T;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Карточки профиля разных размеров.'
      }
    }
  },
  render: () => ({
    components: {
      DXUserProfileCard
    },
    setup() {
      const user = ref(defaultUser);
      return {
        user
      };
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DXUserProfileCard :user="user" size="sm" />
        <DXUserProfileCard :user="user" size="md" />
        <DXUserProfileCard :user="user" size="lg" />
      </div>
    \`
  })
}`,...(T=(J=y.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};const Be=["Default","WithActions","Clickable","DifferentSizes"];export{k as Clickable,z as Default,y as DifferentSizes,h as WithActions,Be as __namedExportsOrder,Fe as default};
