import{r as D,c as l,a as v,o as s,k as c,b as p,l as C,m as T,F as ie,D as de,f as r,R as me,q as ce,s as pe,g as i,x as d,u as k,e as E}from"./vue.esm-bundler-CzLKT_w4.js";import{u as h}from"./useClassComposition-Dym2pzZ_.js";import{u as fe}from"./useSpacing-BOHUzi8w.js";import{_ as ge}from"./DXTextarea-BWvf_8d7.js";import{_ as y}from"./DXButton-ChBdj9Dq.js";import{_ as ve}from"./DXAvatar-DaIMde_I.js";import{_ as R}from"./DXText-DW7ThwBY.js";import{_ as Ce}from"./DXPagination-Du3-Wl5M.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./ChevronLeftIcon-BRnQlYlk.js";import"./ChevronRightIcon-3JO9-dGk.js";const he=["data-threading"],ye={class:"space-y-3"},De={class:"flex items-center justify-end gap-2"},we={class:"flex gap-3"},be={class:"flex-1"},Se={class:"flex items-center gap-2 mb-1"},ke={class:"flex items-center gap-4"},w={__name:"DXCommentSection",props:{comments:{type:Array,required:!0,default:()=>[]},threading:{type:Boolean,default:!0},sortBy:{type:String,default:"newest",validator:n=>["newest","oldest","popular"].includes(n)},filterBy:{type:String,default:""},showForm:{type:Boolean,default:!0},formPlaceholder:{type:String,default:"Добавить комментарий..."},formRows:{type:Number,default:3},editable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1},showReactions:{type:Boolean,default:!0},paginated:{type:Boolean,default:!1},pageSize:{type:Number,default:10}},emits:["add-comment","reply","edit","delete","like","page-change"],setup(n,{emit:_}){const o=n,m=_,f=D(""),b=D(1),S=D(null),P=l(()=>{const e=[...o.comments];switch(o.sortBy){case"oldest":return e.sort((t,u)=>new Date(t.date)-new Date(u.date));case"popular":return e.sort((t,u)=>(u.likes||0)-(t.likes||0));case"newest":default:return e.sort((t,u)=>new Date(u.date)-new Date(t.date))}}),B=l(()=>o.filterBy?P.value.filter(e=>{var t,u;return(u=(t=e.author)==null?void 0:t.name)==null?void 0:u.toLowerCase().includes(o.filterBy.toLowerCase())}):P.value),Q=l(()=>{if(!o.paginated)return B.value;const e=(b.value-1)*o.pageSize,t=e+o.pageSize;return B.value.slice(e,t)}),N=l(()=>o.paginated?Math.ceil(B.value.length/o.pageSize):1),Y=l(()=>h("w-full space-y-6")),Z=l(()=>h("mb-6",fe("md","padding"))),ee=l(()=>h("space-y-4"));function te(e){return h("pb-4",e.parentId?"ml-8 border-l-2 border-slate-200 pl-4":"")}const ne=l(()=>h("mt-4 ml-8 space-y-4")),ae=l(()=>h("mt-6 flex justify-center"));function oe(e){return e?new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):""}function j(){f.value.trim()&&(m("add-comment",{text:f.value,parentId:S.value}),f.value="",S.value=null)}function ue(){f.value="",S.value=null}function A(e){S.value=e,m("reply",e)}function F(e){m("edit",e)}function z(e){m("delete",e)}function se(e){m("like",e)}function le(e){m("add-comment",e)}function re(e){b.value=e,m("page-change",e)}return(e,t)=>{const u=me("DXCommentSection",!0);return s(),v("div",{class:C(Y.value),"data-component":"DXCommentSection","data-threading":n.threading},[n.showForm||e.$slots["comment-form"]?(s(),v("div",{key:0,class:C(Z.value)},[T(e.$slots,"comment-form",{},()=>[p("div",ye,[r(ge,{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=a=>f.value=a),placeholder:n.formPlaceholder,rows:n.formRows,onKeydown:ce(pe(j,["ctrl"]),["enter"])},null,8,["modelValue","placeholder","rows","onKeydown"]),p("div",De,[r(y,{variant:"ghost",onClick:ue},{default:i(()=>[...t[2]||(t[2]=[d(" Отмена ",-1)])]),_:1}),r(y,{variant:"primary",onClick:j},{default:i(()=>[...t[3]||(t[3]=[d(" Отправить ",-1)])]),_:1})])])])],2)):c("",!0),p("div",{class:C(ee.value)},[(s(!0),v(ie,null,de(Q.value,a=>(s(),v("div",{key:a.id,class:C(te(a))},[T(e.$slots,"comment",{comment:a,reply:A,edit:F,delete:z},()=>{var L,U;return[p("div",we,[r(ve,{src:(L=a.author)==null?void 0:L.avatar,name:(U=a.author)==null?void 0:U.name,size:"md"},null,8,["src","name"]),p("div",be,[p("div",Se,[r(R,{tag:"span",weight:"semibold",color:"default"},{default:i(()=>{var g;return[d(k(((g=a.author)==null?void 0:g.name)||"Аноним"),1)]}),_:2},1024),r(R,{tag:"span",size:"xs",color:"muted"},{default:i(()=>[d(k(oe(a.date)),1)]),_:2},1024)]),r(R,{tag:"div",size:"sm",color:"default",class:"mb-2"},{default:i(()=>[d(k(a.text),1)]),_:2},1024),p("div",ke,[n.showReactions?(s(),E(y,{key:0,size:"sm",variant:"ghost",onClick:g=>se(a.id)},{default:i(()=>[d(" 👍 "+k(a.likes||0),1)]),_:2},1032,["onClick"])):c("",!0),n.threading?(s(),E(y,{key:1,size:"sm",variant:"ghost",onClick:g=>A(a.id)},{default:i(()=>[...t[4]||(t[4]=[d(" Ответить ",-1)])]),_:1},8,["onClick"])):c("",!0),n.editable&&a.canEdit?(s(),E(y,{key:2,size:"sm",variant:"ghost",onClick:g=>F(a.id)},{default:i(()=>[...t[5]||(t[5]=[d(" Редактировать ",-1)])]),_:1},8,["onClick"])):c("",!0),n.deletable&&a.canDelete?(s(),E(y,{key:3,size:"sm",variant:"ghost",onClick:g=>z(a.id)},{default:i(()=>[...t[6]||(t[6]=[d(" Удалить ",-1)])]),_:1},8,["onClick"])):c("",!0)])])])]}),n.threading&&a.replies&&a.replies.length>0?(s(),v("div",{key:0,class:C(ne.value)},[r(u,{comments:a.replies,threading:n.threading,editable:n.editable,deletable:n.deletable,"show-reactions":n.showReactions,onAddComment:le,onReply:A,onEdit:F,onDelete:z},null,8,["comments","threading","editable","deletable","show-reactions"])],2)):c("",!0)],2))),128))],2),n.paginated&&N.value>1?(s(),v("div",{key:1,class:C(ae.value)},[r(Ce,{modelValue:b.value,"onUpdate:modelValue":[t[1]||(t[1]=a=>b.value=a),re],"total-pages":N.value},null,8,["modelValue","total-pages"])],2)):c("",!0)],10,he)}}};w.__docgenInfo={exportName:"default",displayName:"DXCommentSection",description:"",tags:{},props:[{name:"comments",description:`Комментарии
Формат: [{ id, text, author: { name, avatar }, date, likes?, replies?, canEdit?, canDelete? }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"threading",description:"Поддержка вложенности (threading)",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"sortBy",description:"Сортировка: newest | oldest | popular",tags:{default:[{description:"'newest'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"newest"'},values:["newest","oldest","popular"]},{name:"filterBy",description:"Фильтр по автору",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"showForm",description:"Показывать форму добавления",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"formPlaceholder",description:"Placeholder для формы",type:{name:"string"},defaultValue:{func:!1,value:'"Добавить комментарий..."'}},{name:"formRows",description:"Количество строк в форме",tags:{default:[{description:"3",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"editable",description:"Можно редактировать комментарии",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"deletable",description:"Можно удалять комментарии",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showReactions",description:"Показывать реакции (лайки)",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"paginated",description:"Пагинация",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pageSize",description:"Количество комментариев на странице",tags:{default:[{description:"10",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"10"}}],events:[{name:"add-comment"},{name:"reply"},{name:"edit"},{name:"delete"},{name:"like"},{name:"page-change"}],slots:[{name:"comment-form"},{name:"comment",scoped:!0,bindings:[{name:"comment",title:"binding"},{name:"reply",title:"binding"},{name:"edit",title:"binding"},{name:"delete",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXCommentSection/DXCommentSection.vue"]};const We={title:"Organisms/DXCommentSection",component:w,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXCommentSection

Секция комментариев с поддержкой вложенности, ответов и модерации.

## Назначение

DXCommentSection предоставляет полнофункциональную систему комментариев с поддержкой
вложенности (threading), ответов, редактирования, удаления и реакций.

## Архитектура

### Использует
- \`DXTextarea\` - для ввода комментария
- \`DXButton\` - для действий
- \`DXAvatar\` - для аватаров
- \`DXPagination\` - для пагинации
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Статьи и блоги
- Обсуждения
- Отзывы с ответами
- Системы обратной связи

## Внутренняя логика

### Вложенность
При \`threading={true}\` комментарии могут иметь вложенные ответы.

### Сортировка
Поддерживает сортировку: newest (новые), oldest (старые), popular (популярные).

### Пагинация
При \`paginated={true}\` комментарии разбиваются на страницы.

## Особенности

### Редактирование и удаление
При \`editable={true}\` и \`deletable={true}\` показываются соответствующие кнопки.

### Реакции
При \`showReactions={true}\` показываются лайки.
        `}}}},$=[{id:1,text:"Отличная статья! Очень полезная информация.",author:{name:"John Doe",avatar:"/avatar1.jpg"},date:new Date,likes:5,canEdit:!0,canDelete:!0},{id:2,text:"Спасибо за подробное объяснение.",author:{name:"Jane Smith",avatar:"/avatar2.jpg"},date:new Date(Date.now()-36e5),likes:2,replies:[{id:3,text:"Пожалуйста!",author:{name:"Author",avatar:"/avatar3.jpg"},date:new Date(Date.now()-18e5),likes:1,parentId:2}],canEdit:!1,canDelete:!1}],X={parameters:{docs:{description:{story:"Базовая секция комментариев с формой добавления."}}},render:()=>({components:{DXCommentSection:w},setup(){const n=D($);return{comments:n,handleAddComment:o=>{console.log("Добавлен комментарий:",o),n.value.push({id:n.value.length+1,text:o.text,author:{name:"Current User",avatar:"/avatar.jpg"},date:new Date,likes:0,canEdit:!0,canDelete:!0})}}},template:`
      <DXCommentSection
        :comments="comments"
        @add-comment="handleAddComment"
      />
    `})},x={parameters:{docs:{description:{story:"Секция комментариев с поддержкой вложенности (ответы на комментарии)."}}},render:()=>({components:{DXCommentSection:w},setup(){return{comments:D($)}},template:`
      <DXCommentSection
        :comments="comments"
        :threading="true"
      />
    `})},V={parameters:{docs:{description:{story:"Секция комментариев с возможностью редактирования и удаления."}}},render:()=>({components:{DXCommentSection:w},setup(){return{comments:D($)}},template:`
      <DXCommentSection
        :comments="comments"
        :editable="true"
        :deletable="true"
      />
    `})};var I,M,W;X.parameters={...X.parameters,docs:{...(I=X.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Базовая секция комментариев с формой добавления.'
      }
    }
  },
  render: () => ({
    components: {
      DXCommentSection
    },
    setup() {
      const comments = ref(defaultComments);
      const handleAddComment = data => {
        console.log('Добавлен комментарий:', data);
        comments.value.push({
          id: comments.value.length + 1,
          text: data.text,
          author: {
            name: 'Current User',
            avatar: '/avatar.jpg'
          },
          date: new Date(),
          likes: 0,
          canEdit: true,
          canDelete: true
        });
      };
      return {
        comments,
        handleAddComment
      };
    },
    template: \`
      <DXCommentSection
        :comments="comments"
        @add-comment="handleAddComment"
      />
    \`
  })
}`,...(W=(M=X.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var q,K,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Секция комментариев с поддержкой вложенности (ответы на комментарии).'
      }
    }
  },
  render: () => ({
    components: {
      DXCommentSection
    },
    setup() {
      const comments = ref(defaultComments);
      return {
        comments
      };
    },
    template: \`
      <DXCommentSection
        :comments="comments"
        :threading="true"
      />
    \`
  })
}`,...(O=(K=x.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var J,G,H;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Секция комментариев с возможностью редактирования и удаления.'
      }
    }
  },
  render: () => ({
    components: {
      DXCommentSection
    },
    setup() {
      const comments = ref(defaultComments);
      return {
        comments
      };
    },
    template: \`
      <DXCommentSection
        :comments="comments"
        :editable="true"
        :deletable="true"
      />
    \`
  })
}`,...(H=(G=V.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const qe=["Default","WithThreading","WithModeration"];export{X as Default,V as WithModeration,x as WithThreading,qe as __namedExportsOrder,We as default};
