import{r as v,c as h,a,e as b,k as s,g as m,l as r,F as S,D as $,o as u,m as O,u as g,b as w,x as N,f as k,z as j}from"./vue.esm-bundler-CzLKT_w4.js";import{u as y}from"./useClassComposition-Dym2pzZ_.js";import{u as ve}from"./useSpacing-BOHUzi8w.js";import{_ as fe}from"./DXGrid-D82L3AhL.js";import{D as be}from"./DXModal-Dr4OJHYN.js";import{_ as xe}from"./DXObserver-CFvTDM2z.js";import{_ as W}from"./DXButton-ChBdj9Dq.js";import{_ as q}from"./DXIcon-BbhqsR95.js";import{_ as Ce}from"./DXHeading-DwWVK5ab.js";import{_ as De}from"./DXText-DW7ThwBY.js";import{r as Ee}from"./ChevronLeftIcon-BRnQlYlk.js";import{r as ke}from"./ChevronRightIcon-3JO9-dGk.js";import"./useSize-DIMNv1Ms.js";import"./DXBackdrop-CRxYx67P.js";import"./DXCloseButton-Cjo_FBNn.js";import"./XMarkIcon-B2lmC1bd.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Squares2X2Icon-q8K6JZ8n.js";import"./ViewColumnsIcon-DiU4uUWi.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useAnimation-ByVAdqmf.js";const Ie=["data-layout","data-columns","data-lightbox"],_e=["onClick"],Xe={key:0,class:"relative w-full h-full"},Me=["src","alt","onError"],Be=["src","poster"],Ge={key:0,class:"text-white font-medium"},Fe={key:1,class:"w-full h-full bg-slate-200 animate-pulse flex items-center justify-center"},we={key:1,class:"relative w-full h-full"},Le=["src","alt","onError"],Ve=["src","poster"],ze={key:0,class:"text-white font-medium"},Ae=["onClick"],Se=["src","alt"],$e={class:"flex-1 ml-4"},Oe={key:0,class:"font-medium text-slate-900"},Ne={key:1,class:"text-sm text-slate-500 mt-1"},je={class:"relative"},We=["src","alt"],qe=["src","poster"],Pe={key:2,class:"mt-4"},Te={key:0,class:"absolute inset-y-0 left-0 flex items-center"},Ue={key:1,class:"absolute inset-y-0 right-0 flex items-center"},d={__name:"DXMediaGallery",props:{items:{type:Array,required:!0,default:()=>[]},columns:{type:Number,default:3},columnsSm:{type:Number,default:null},columnsMd:{type:Number,default:null},columnsLg:{type:Number,default:null},layout:{type:String,default:"grid",validator:t=>["grid","list"].includes(t)},gap:{type:String,default:"md",validator:t=>["none","xs","sm","md","lg","xl"].includes(t)},lightbox:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},showOverlay:{type:Boolean,default:!1}},emits:["item-click","lightbox-open","lightbox-close"],setup(t,{emit:C}){const i=t,f=C,F=v(!1),l=v(null),c=v(0),L=v(new Set),re=h(()=>y("w-full")),ie=h(()=>y("relative aspect-square overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105",i.lightbox&&"group")),ce=h(()=>y("space-y-2",ve(i.gap,"gap"))),de=h(()=>y("flex items-center p-4 bg-white border border-slate-200 rounded-lg cursor-pointer hover:shadow-md transition-shadow",i.lightbox&&"group")),D=h(()=>y("w-full h-full object-cover")),V=h(()=>y("absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4"));function me(n){return L.value.has(n)}function pe(n){L.value.add(n)}function z(n){console.warn(`DXMediaGallery: Ошибка загрузки изображения ${n}`)}function A(n,p){f("item-click",n,p),i.lightbox&&(l.value=n,c.value=p,F.value=!0,f("lightbox-open",n,p))}function he(){F.value=!1,l.value=null,f("lightbox-close")}function ge(){c.value>0&&(c.value--,l.value=i.items[c.value])}function ye(){c.value<i.items.length-1&&(c.value++,l.value=i.items[c.value])}return(n,p)=>(u(),a("div",{class:r(re.value),"data-component":"DXMediaGallery","data-layout":t.layout,"data-columns":t.columns,"data-lightbox":t.lightbox},[t.layout==="grid"?(u(),b(fe,{key:0,cols:t.columns,"cols-sm":t.columnsSm,"cols-md":t.columnsMd,"cols-lg":t.columnsLg,gap:t.gap},{default:m(()=>[(u(!0),a(S,null,$(t.items,(e,o)=>(u(),a("div",{key:e.id||o,class:r(ie.value),onClick:E=>A(e,o)},[O(n.$slots,"item",{item:e,index:o},()=>[t.lazy?(u(),b(xe,{key:0,threshold:.1,once:!0,onIntersect:E=>pe(o)},{default:m(()=>[me(o)?(u(),a("div",Xe,[e.type==="image"||!e.type?(u(),a("img",{key:0,src:e.thumbnail||e.src,alt:e.title||e.alt||"Image",class:r(D.value),onError:E=>z(o)},null,42,Me)):e.type==="video"?(u(),a("video",{key:1,src:e.src,poster:e.thumbnail,class:r(D.value),controls:""},null,10,Be)):s("",!0),e.title||t.showOverlay?(u(),a("div",{key:2,class:r(V.value)},[e.title?(u(),a("div",Ge,g(e.title),1)):s("",!0)],2)):s("",!0)])):(u(),a("div",Fe,[...p[0]||(p[0]=[w("span",{class:"text-slate-400 text-sm"},"Загрузка...",-1)])]))]),_:2},1032,["onIntersect"])):(u(),a("div",we,[e.type==="image"||!e.type?(u(),a("img",{key:0,src:e.thumbnail||e.src,alt:e.title||e.alt||"Image",class:r(D.value),onError:E=>z(o)},null,42,Le)):e.type==="video"?(u(),a("video",{key:1,src:e.src,poster:e.thumbnail,class:r(D.value),controls:""},null,10,Ve)):s("",!0),e.title||t.showOverlay?(u(),a("div",{key:2,class:r(V.value)},[e.title?(u(),a("div",ze,g(e.title),1)):s("",!0)],2)):s("",!0)]))])],10,_e))),128))]),_:3},8,["cols","cols-sm","cols-md","cols-lg","gap"])):t.layout==="list"?(u(),a("div",{key:1,class:r(ce.value)},[(u(!0),a(S,null,$(t.items,(e,o)=>(u(),a("div",{key:e.id||o,class:r(de.value),onClick:E=>A(e,o)},[O(n.$slots,"item",{item:e,index:o},()=>[e.type==="image"||!e.type?(u(),a("img",{key:0,src:e.thumbnail||e.src,alt:e.title||e.alt||"Image",class:"w-24 h-24 object-cover rounded-lg flex-shrink-0"},null,8,Se)):s("",!0),w("div",$e,[e.title?(u(),a("div",Oe,g(e.title),1)):s("",!0),e.description?(u(),a("div",Ne,g(e.description),1)):s("",!0)])])],10,Ae))),128))],2)):s("",!0),t.lightbox&&l.value?(u(),b(be,{key:2,open:F.value,onClose:he,size:"xl"},{default:m(()=>[w("div",je,[l.value.type==="image"||!l.value.type?(u(),a("img",{key:0,src:l.value.src,alt:l.value.title||l.value.alt||"Image",class:"w-full h-auto max-h-[80vh] object-contain"},null,8,We)):l.value.type==="video"?(u(),a("video",{key:1,src:l.value.src,poster:l.value.thumbnail,class:"w-full h-auto max-h-[80vh]",controls:"",autoplay:""},null,8,qe)):s("",!0),l.value.title||l.value.description?(u(),a("div",Pe,[l.value.title?(u(),b(Ce,{key:0,level:"3",size:"lg",weight:"semibold",color:"default"},{default:m(()=>[N(g(l.value.title),1)]),_:1})):s("",!0),l.value.description?(u(),b(De,{key:1,tag:"p",size:"sm",color:"muted",class:"mt-1"},{default:m(()=>[N(g(l.value.description),1)]),_:1})):s("",!0)])):s("",!0)]),t.items.length>1?(u(),a("div",Te,[k(W,{variant:"ghost",size:"lg",disabled:c.value===0,onClick:ge},{icon:m(()=>[k(q,{icon:j(Ee),size:"lg"},null,8,["icon"])]),_:1},8,["disabled"])])):s("",!0),t.items.length>1?(u(),a("div",Ue,[k(W,{variant:"ghost",size:"lg",disabled:c.value===t.items.length-1,onClick:ye},{icon:m(()=>[k(q,{icon:j(ke),size:"lg"},null,8,["icon"])]),_:1},8,["disabled"])])):s("",!0)]),_:1},8,["open"])):s("",!0)],10,Ie))}};d.__docgenInfo={exportName:"default",displayName:"DXMediaGallery",description:"",tags:{},props:[{name:"items",description:`Массив элементов галереи
Формат: [{ id, src, thumbnail?, title?, description?, type?, alt? }]`,type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"columns",description:"Количество колонок для grid layout",tags:{default:[{description:"3",title:"default"}]},type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"columnsSm",description:"Количество колонок на sm",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"columnsMd",description:"Количество колонок на md",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"columnsLg",description:"Количество колонок на lg",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"layout",description:"Layout: grid | list",tags:{default:[{description:"'grid'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"grid"'},values:["grid","list"]},{name:"gap",description:"Отступ между элементами: none | xs | sm | md | lg | xl",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["none","xs","sm","md","lg","xl"]},{name:"lightbox",description:"Показывать lightbox при клике",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lazy",description:"Ленивая загрузка изображений",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showOverlay",description:"Показывать overlay с информацией",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"item-click"},{name:"lightbox-open"},{name:"lightbox-close"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXMediaGallery/DXMediaGallery.vue"]};const x=[{id:1,src:"https://via.placeholder.com/800x600",thumbnail:"https://via.placeholder.com/300x300",title:"Изображение 1",type:"image"},{id:2,src:"https://via.placeholder.com/800x600/0066CC",thumbnail:"https://via.placeholder.com/300x300/0066CC",title:"Изображение 2",type:"image"},{id:3,src:"https://via.placeholder.com/800x600/CC6600",thumbnail:"https://via.placeholder.com/300x300/CC6600",title:"Изображение 3",type:"image"},{id:4,src:"https://via.placeholder.com/800x600/00CC66",thumbnail:"https://via.placeholder.com/300x300/00CC66",title:"Изображение 4",type:"image"},{id:5,src:"https://via.placeholder.com/800x600/CC0066",thumbnail:"https://via.placeholder.com/300x300/CC0066",title:"Изображение 5",type:"image"},{id:6,src:"https://via.placeholder.com/800x600/6600CC",thumbnail:"https://via.placeholder.com/300x300/6600CC",title:"Изображение 6",type:"image"}],yt={title:"Organisms/DXMediaGallery",component:d,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXMediaGallery

Галерея изображений или видео с превью, полноэкранным просмотром и навигацией.

## Назначение

DXMediaGallery предоставляет компонент для отображения коллекций изображений и видео
с поддержкой grid и list layouts, lightbox режима и ленивой загрузки.

## Архитектура

### Использует
- \`DXGrid\` - для grid layout
- \`DXModal\` - для lightbox
- \`DXObserver\` - для ленивой загрузки
- \`DXButton\` - для навигации в lightbox
- \`DXIcon\` - для иконок навигации
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Галереи товаров в интернет-магазинах
- Портфолио фотографий
- Галереи документов с превью
- Медиа-библиотеки

## Внутренняя логика

### Layouts
- **grid**: Сетка изображений с настраиваемым количеством колонок
- **list**: Список изображений с описаниями

### Lightbox
При клике на элемент открывается модальное окно с полноэкранным просмотром
и навигацией между элементами.

### Ленивая загрузка
При \`lazy={true}\` изображения загружаются только при появлении в viewport
через DXObserver.

## Особенности

### Кастомные элементы
Можно использовать slot \`item\` для кастомного отображения элементов.

### Навигация в lightbox
Стрелки влево/вправо для навигации между элементами в lightbox.
        `}}},argTypes:{layout:{control:"select",options:["grid","list"],description:"Layout галереи: grid (сетка) | list (список).",table:{type:{summary:"string"},defaultValue:{summary:"grid"},category:"Layout"}},columns:{control:"number",min:1,max:12,description:"Количество колонок для grid layout.",table:{type:{summary:"number"},defaultValue:{summary:"3"},category:"Layout"}},lightbox:{control:"boolean",description:"Показывать lightbox при клике.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}},lazy:{control:"boolean",description:"Ленивая загрузка изображений.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},I={args:{layout:"grid",columns:3,lightbox:!0},parameters:{docs:{description:{story:"Базовая галерея в grid layout с lightbox. Кликните на изображение для полноэкранного просмотра."}}},render:t=>({components:{DXMediaGallery:d},setup(){return{args:t,defaultItems:x}},template:'<DXMediaGallery v-bind="args" :items="defaultItems" />'})},_={args:{items:x.slice(0,3),layout:"list",lightbox:!0},parameters:{docs:{description:{story:"Галерея в list layout. Элементы отображаются в виде списка с превью и описаниями."}}},render:t=>({components:{DXMediaGallery:d},setup(){const C=v([{id:1,src:"https://via.placeholder.com/800x600",thumbnail:"https://via.placeholder.com/300x300",title:"Изображение 1",description:"Описание изображения 1",type:"image"},{id:2,src:"https://via.placeholder.com/800x600/0066CC",thumbnail:"https://via.placeholder.com/300x300/0066CC",title:"Изображение 2",description:"Описание изображения 2",type:"image"}]);return{args:t,items:C}},template:'<DXMediaGallery v-bind="args" :items="items" />'})},X={args:{layout:"grid",columns:3,lazy:!0,lightbox:!0},parameters:{docs:{description:{story:"Галерея с ленивой загрузкой. Изображения загружаются только при появлении в viewport."}}},render:t=>({components:{DXMediaGallery:d},setup(){return{args:t,defaultItems:x}},template:`
      <div>
        <div class="h-screen bg-slate-50 p-8 mb-4">
          <p>Прокрутите вниз для загрузки изображений</p>
        </div>
        <DXMediaGallery v-bind="args" :items="defaultItems" />
      </div>
    `})},M={args:{layout:"grid",columns:3,lightbox:!1},parameters:{docs:{description:{story:"Галерея без lightbox. Клик по элементу эмитит событие item-click."}}},render:t=>({components:{DXMediaGallery:d},setup(){return{args:t,defaultItems:x,handleItemClick:(i,f)=>{console.log("Клик по элементу:",i,f)}}},template:'<DXMediaGallery v-bind="args" :items="defaultItems" @item-click="handleItemClick" />'})},B={parameters:{docs:{description:{story:"Галерея с различным количеством колонок на разных экранах."}}},render:()=>({components:{DXMediaGallery:d},setup(){return{defaultItems:v([{id:1,src:"https://via.placeholder.com/800x600",thumbnail:"https://via.placeholder.com/300x300",title:"Изображение 1",type:"image"},{id:2,src:"https://via.placeholder.com/800x600/0066CC",thumbnail:"https://via.placeholder.com/300x300/0066CC",title:"Изображение 2",type:"image"},{id:3,src:"https://via.placeholder.com/800x600/CC6600",thumbnail:"https://via.placeholder.com/300x300/CC6600",title:"Изображение 3",type:"image"},{id:4,src:"https://via.placeholder.com/800x600/00CC66",thumbnail:"https://via.placeholder.com/300x300/00CC66",title:"Изображение 4",type:"image"}])}},template:`
      <DXMediaGallery
        :items="defaultItems"
        :columns="2"
        :columns-sm="2"
        :columns-md="3"
        :columns-lg="4"
        layout="grid"
      />
    `})},G={args:{layout:"grid",columns:3,showOverlay:!0,lightbox:!0},parameters:{docs:{description:{story:"Галерея с overlay. При наведении показывается overlay с информацией об элементе."}}},render:t=>({components:{DXMediaGallery:d},setup(){return{args:t,defaultItems:x}},template:'<DXMediaGallery v-bind="args" :items="defaultItems" />'})};var P,T,U;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    lightbox: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая галерея в grid layout с lightbox. Кликните на изображение для полноэкранного просмотра.'
      }
    }
  },
  render: args => ({
    components: {
      DXMediaGallery
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" />'
  })
}`,...(U=(T=I.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var H,J,K;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: defaultItems.slice(0, 3),
    layout: 'list',
    lightbox: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея в list layout. Элементы отображаются в виде списка с превью и описаниями.'
      }
    }
  },
  render: args => ({
    components: {
      DXMediaGallery
    },
    setup() {
      const items = ref([{
        id: 1,
        src: 'https://via.placeholder.com/800x600',
        thumbnail: 'https://via.placeholder.com/300x300',
        title: 'Изображение 1',
        description: 'Описание изображения 1',
        type: 'image'
      }, {
        id: 2,
        src: 'https://via.placeholder.com/800x600/0066CC',
        thumbnail: 'https://via.placeholder.com/300x300/0066CC',
        title: 'Изображение 2',
        description: 'Описание изображения 2',
        type: 'image'
      }]);
      return {
        args,
        items
      };
    },
    template: '<DXMediaGallery v-bind="args" :items="items" />'
  })
}`,...(K=(J=_.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,Y;X.parameters={...X.parameters,docs:{...(Q=X.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    lazy: true,
    lightbox: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея с ленивой загрузкой. Изображения загружаются только при появлении в viewport.'
      }
    }
  },
  render: args => ({
    components: {
      DXMediaGallery
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: \`
      <div>
        <div class="h-screen bg-slate-50 p-8 mb-4">
          <p>Прокрутите вниз для загрузки изображений</p>
        </div>
        <DXMediaGallery v-bind="args" :items="defaultItems" />
      </div>
    \`
  })
}`,...(Y=(R=X.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var Z,ee,te;M.parameters={...M.parameters,docs:{...(Z=M.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    lightbox: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея без lightbox. Клик по элементу эмитит событие item-click.'
      }
    }
  },
  render: args => ({
    components: {
      DXMediaGallery
    },
    setup() {
      const handleItemClick = (item, index) => {
        console.log('Клик по элементу:', item, index);
      };
      return {
        args,
        defaultItems,
        handleItemClick
      };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" @item-click="handleItemClick" />'
  })
}`,...(te=(ee=M.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ue,ae,le;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Галерея с различным количеством колонок на разных экранах.'
      }
    }
  },
  render: () => ({
    components: {
      DXMediaGallery
    },
    setup() {
      const defaultItems = ref([{
        id: 1,
        src: 'https://via.placeholder.com/800x600',
        thumbnail: 'https://via.placeholder.com/300x300',
        title: 'Изображение 1',
        type: 'image'
      }, {
        id: 2,
        src: 'https://via.placeholder.com/800x600/0066CC',
        thumbnail: 'https://via.placeholder.com/300x300/0066CC',
        title: 'Изображение 2',
        type: 'image'
      }, {
        id: 3,
        src: 'https://via.placeholder.com/800x600/CC6600',
        thumbnail: 'https://via.placeholder.com/300x300/CC6600',
        title: 'Изображение 3',
        type: 'image'
      }, {
        id: 4,
        src: 'https://via.placeholder.com/800x600/00CC66',
        thumbnail: 'https://via.placeholder.com/300x300/00CC66',
        title: 'Изображение 4',
        type: 'image'
      }]);
      return {
        defaultItems
      };
    },
    template: \`
      <DXMediaGallery
        :items="defaultItems"
        :columns="2"
        :columns-sm="2"
        :columns-md="3"
        :columns-lg="4"
        layout="grid"
      />
    \`
  })
}`,...(le=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var se,ne,oe;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    showOverlay: true,
    lightbox: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Галерея с overlay. При наведении показывается overlay с информацией об элементе.'
      }
    }
  },
  render: args => ({
    components: {
      DXMediaGallery
    },
    setup() {
      return {
        args,
        defaultItems
      };
    },
    template: '<DXMediaGallery v-bind="args" :items="defaultItems" />'
  })
}`,...(oe=(ne=G.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const vt=["Default","ListLayout","WithLazyLoading","WithoutLightbox","CustomColumns","WithOverlay"];export{B as CustomColumns,I as Default,_ as ListLayout,X as WithLazyLoading,G as WithOverlay,M as WithoutLightbox,vt as __namedExportsOrder,yt as default};
