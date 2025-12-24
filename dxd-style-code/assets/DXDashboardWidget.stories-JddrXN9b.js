import{a as s,b as d,o as t,c as l,e as a,g as r,l as c,k as i,m as o,x as pe,u as q,f as m,z as X}from"./vue.esm-bundler-CzLKT_w4.js";import{u as g}from"./useClassComposition-Dym2pzZ_.js";import{_ as fe}from"./DXCard-BX01pIOu.js";import{_ as W}from"./DXButton-ChBdj9Dq.js";import{_ as C}from"./DXIcon-BbhqsR95.js";import{_ as be}from"./DXHeading-DwWVK5ab.js";import{_ as he}from"./DXStatCard-DaVeqiJM.js";import{_ as De}from"./DXChartContainer-1yC6uZkc.js";import{D as ye}from"./DXTable-BAe1uulp.js";import{r as ve}from"./Cog6ToothIcon-By8I8Qry.js";import{r as xe}from"./XMarkIcon-B2lmC1bd.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useAnimation-ByVAdqmf.js";import"./DXText-DW7ThwBY.js";import"./DXSelect-BFLeTBtC.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./DXBaseTable-CQ7MQRkz.js";import"./DXCheckbox-ztLTdipt.js";import"./CheckIcon-CKhG8hn0.js";import"./DXDropdown-BME4Lvuj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DXDropdownItem-CaNyf6TV.js";import"./DXBadge-CxZg7KEC.js";import"./ChevronRightIcon-3JO9-dGk.js";import"./DXDropdownDivider-CNjXQi0n.js";import"./DXDivider-Yv-XXyN6.js";import"./DXLoader-BMlBTXd1.js";import"./DXSearchSelect-u2V-p1fX.js";import"./PencilIcon-CpxY3S_F.js";import"./TrashIcon-NtQ19PgI.js";import"./DXTableToolbar-pEwJ_iLG.js";import"./DXInput-BLwLEfW9.js";import"./MagnifyingGlassIcon-ssG6g_B7.js";import"./ViewColumnsIcon-DiU4uUWi.js";import"./DXTablePagination-DjIiVqpo.js";import"./DXPagination-Du3-Wl5M.js";import"./ChevronLeftIcon-BRnQlYlk.js";import"./DXTags-D9TDb5EF.js";import"./XMarkIcon-DVfh0bwU.js";import"./XCircleIcon-D6eSwy5a.js";function Xe(e,y){return t(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{d:"M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z"}),d("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z","clip-rule":"evenodd"})])}function We(e,y){return t(),s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"})])}const Ce={class:"flex items-center justify-between"},Ee={key:1,class:"flex items-center gap-2"},ke={key:0,class:"text-slate-700"},n={__name:"DXDashboardWidget",props:{id:{type:[String,Number],required:!0},type:{type:String,default:"stat",validator:e=>["stat","chart","table","text"].includes(e)},title:{type:String,default:""},config:{type:Object,default:()=>({})},editable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},refreshable:{type:Boolean,default:!0},cardVariant:{type:String,default:"default",validator:e=>["default","bordered","elevated","flat"].includes(e)},padding:{type:String,default:"md",validator:e=>["none","xs","sm","md","lg","xl"].includes(e)}},emits:["edit","delete","refresh"],setup(e,{emit:y}){const v=e,x=y,se=l(()=>g("w-full h-full")),oe=l(()=>g("mb-4 pb-4 border-b border-slate-200")),de=l(()=>g("w-full")),le=l(()=>g("text-slate-700"));function ce(){x("edit",v.id)}function me(){x("delete",v.id)}function ge(){x("refresh",v.id)}return(u,Be)=>(t(),a(fe,{class:c(se.value),variant:e.cardVariant,padding:e.padding,"data-component":"DXDashboardWidget","data-type":e.type,"data-editable":e.editable},{default:r(()=>[e.title||u.$slots.header||e.editable?(t(),s("div",{key:0,class:c(oe.value)},[o(u.$slots,"header",{},()=>[d("div",Ce,[e.title?(t(),a(be,{key:0,level:"3",size:"lg",weight:"semibold",color:"default"},{default:r(()=>[pe(q(e.title),1)]),_:1})):i("",!0),e.editable?(t(),s("div",Ee,[e.refreshable?(t(),a(W,{key:0,variant:"ghost",size:"sm",onClick:ge},{icon:r(()=>[m(C,{icon:X(We),size:"sm"},null,8,["icon"])]),_:1})):i("",!0),m(W,{variant:"ghost",size:"sm",onClick:ce},{icon:r(()=>[m(C,{icon:X(ve),size:"sm"},null,8,["icon"])]),_:1}),e.deletable?(t(),a(W,{key:1,variant:"ghost",size:"sm",onClick:me},{icon:r(()=>[m(C,{icon:X(xe),size:"sm"},null,8,["icon"])]),_:1})):i("",!0)])):i("",!0)])])],2)):i("",!0),d("div",{class:c(de.value)},[o(u.$slots,"content",{},()=>{var E,k,B,w,S,V,$,F,A,z,T,N,j,I,M,J,O,Z,P,U;return[e.type==="stat"?(t(),a(he,{key:0,title:(E=e.config)==null?void 0:E.title,value:(k=e.config)==null?void 0:k.value,description:(B=e.config)==null?void 0:B.description,trend:(w=e.config)==null?void 0:w.trend,icon:(S=e.config)==null?void 0:S.icon,color:((V=e.config)==null?void 0:V.color)||"primary",size:(($=e.config)==null?void 0:$.size)||"md"},null,8,["title","value","description","trend","icon","color","size"])):e.type==="chart"?(t(),a(De,{key:1,title:(F=e.config)==null?void 0:F.title,type:((A=e.config)==null?void 0:A.chartType)||"line",data:(z=e.config)==null?void 0:z.data,options:(T=e.config)==null?void 0:T.options,legend:((N=e.config)==null?void 0:N.legend)!==!1,"legend-data":(j=e.config)==null?void 0:j.legendData,controls:(I=e.config)==null?void 0:I.controls,height:((M=e.config)==null?void 0:M.height)||"300px"},{chart:r(()=>[o(u.$slots,"chart",{config:e.config})]),_:3},8,["title","type","data","options","legend","legend-data","controls","height"])):e.type==="table"?(t(),a(ye,{key:2,columns:((J=e.config)==null?void 0:J.columns)||[],data:((O=e.config)==null?void 0:O.data)||[],paginated:((Z=e.config)==null?void 0:Z.paginated)!==!1,size:((P=e.config)==null?void 0:P.size)||"sm"},null,8,["columns","data","paginated","size"])):e.type==="text"?(t(),s("div",{key:3,class:c(le.value)},[(U=e.config)!=null&&U.text?(t(),s("p",ke,q(e.config.text),1)):i("",!0),o(u.$slots,"text",{config:e.config})],2)):o(u.$slots,"default",{key:4,type:e.type,config:e.config})]})],2)]),_:3},8,["class","variant","padding","data-type","data-editable"]))}};n.__docgenInfo={exportName:"default",displayName:"DXDashboardWidget",description:"",tags:{},props:[{name:"id",description:"ID виджета",type:{name:"string|number"},required:!0},{name:"type",description:"Тип виджета: stat | chart | table | text",tags:{default:[{description:"'stat'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"stat"'},values:["stat","chart","table","text"]},{name:"title",description:"Заголовок виджета",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"config",description:"Конфигурация виджета (зависит от типа)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"editable",description:"Редактируемый виджет",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"deletable",description:"Можно ли удалять виджет",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"refreshable",description:"Можно ли обновлять данные",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"cardVariant",description:"Вариант DXCard",tags:{default:[{description:"'default'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"default"'},values:["default","bordered","elevated","flat"]},{name:"padding",description:"Padding для DXCard",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["none","xs","sm","md","lg","xl"]}],events:[{name:"edit"},{name:"delete"},{name:"refresh"}],slots:[{name:"header"},{name:"content"},{name:"chart",scoped:!0,bindings:[{name:"config",title:"binding"}]},{name:"text",scoped:!0,bindings:[{name:"config",title:"binding"}]},{name:"default",scoped:!0,bindings:[{name:"type",title:"binding"},{name:"config",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXDashboardWidget/DXDashboardWidget.vue"]};const xt={title:"Organisms/DXDashboardWidget",component:n,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXDashboardWidget

Виджет для дашборда с настройками, обновлением данных и различными типами контента.

## Назначение

DXDashboardWidget предоставляет универсальный виджет для дашбордов с поддержкой
различных типов контента (статистика, графики, таблицы, текст) и действий (редактирование, удаление, обновление).

## Архитектура

### Использует
- \`DXCard\` - как базовый контейнер
- \`DXStatCard\` - для статистики
- \`DXChartContainer\` - для графиков
- \`DXTable\` - для таблиц
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSize\` composable - для размеров

### Используется в
- \`DXDashboardGrid\` - для размещения виджетов
- Дашборды с аналитикой
- Настраиваемые панели мониторинга

## Внутренняя логика

### Типы виджетов
- **stat**: Виджет статистики (использует DXStatCard)
- **chart**: Виджет графика (использует DXChartContainer)
- **table**: Виджет таблицы (использует DXTable)
- **text**: Текстовый виджет

### Конфигурация
Каждый тип виджета имеет свою конфигурацию через prop \`config\`.

### Действия
Виджет поддерживает редактирование, удаление и обновление данных.

## Особенности

### Слоты
- **header**: Кастомный заголовок
- **content**: Кастомный контент
- **chart**: Кастомный график (для type="chart")
- **text**: Кастомный текст (для type="text")

### Редактирование
При \`editable={true}\` показываются кнопки действий в header.
        `}}},argTypes:{type:{control:"select",options:["stat","chart","table","text"],description:"Тип виджета: stat (статистика) | chart (график) | table (таблица) | text (текст).",table:{type:{summary:"string"},defaultValue:{summary:"stat"},category:"Content"}},editable:{control:"boolean",description:"Редактируемый виджет (показывает кнопки действий).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},p={args:{id:1,type:"stat",title:"Продажи",config:{title:"Всего продаж",value:125e3,valueFormat:"currency",currency:"USD",trend:{direction:"up",value:12.5},icon:Xe,color:"primary"},editable:!0},parameters:{docs:{description:{story:"Виджет статистики с трендом и иконкой."}}},render:e=>({components:{DXDashboardWidget:n},setup(){return{args:e}},template:`
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    `})},f={args:{id:2,type:"chart",title:"График продаж",config:{chartType:"line",data:{labels:["Янв","Фев","Мар"],datasets:[{data:[100,150,200]}]},legend:!0,legendData:[{label:"Продажи",color:"bg-blue-500",visible:!0}],height:"300px"},editable:!0},parameters:{docs:{description:{story:"Виджет графика с легендой."}}},render:e=>({components:{DXDashboardWidget:n},setup(){return{args:e}},template:`
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args">
          <template #chart>
            <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
              <p class="text-slate-500 text-sm">График здесь</p>
            </div>
          </template>
        </DXDashboardWidget>
      </div>
    `})},b={args:{id:3,type:"table",title:"Последние заказы",config:{columns:[{key:"id",label:"ID"},{key:"customer",label:"Клиент"},{key:"amount",label:"Сумма"}],data:[{id:1,customer:"John Doe",amount:"$100"},{id:2,customer:"Jane Smith",amount:"$200"},{id:3,customer:"Bob Johnson",amount:"$150"}],paginated:!1},editable:!0},parameters:{docs:{description:{story:"Виджет таблицы с данными."}}},render:e=>({components:{DXDashboardWidget:n},setup(){return{args:e}},template:`
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args" />
      </div>
    `})},h={args:{id:4,type:"text",title:"Заметки",config:{text:"Это текстовый виджет для отображения произвольного контента."},editable:!0},parameters:{docs:{description:{story:"Текстовый виджет для произвольного контента."}}},render:e=>({components:{DXDashboardWidget:n},setup(){return{args:e}},template:`
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    `})},D={parameters:{docs:{description:{story:"Демонстрация всех типов виджетов."}}},render:()=>({components:{DXDashboardWidget:n},setup(){return{}},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXDashboardWidget
          :id="1"
          type="stat"
          title="Продажи"
          :config="{ title: 'Всего', value: 125000, valueFormat: 'currency' }"
          :editable="true"
        />
        <DXDashboardWidget
          :id="2"
          type="text"
          title="Заметки"
          :config="{ text: 'Текстовый виджет' }"
          :editable="true"
        />
      </div>
    `})};var G,L,R;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: 1,
    type: 'stat',
    title: 'Продажи',
    config: {
      title: 'Всего продаж',
      value: 125000,
      valueFormat: 'currency',
      currency: 'USD',
      trend: {
        direction: 'up',
        value: 12.5
      },
      icon: CurrencyDollarIcon,
      color: 'primary'
    },
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет статистики с трендом и иконкой.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardWidget
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    \`
  })
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var H,K,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: 2,
    type: 'chart',
    title: 'График продаж',
    config: {
      chartType: 'line',
      data: {
        labels: ['Янв', 'Фев', 'Мар'],
        datasets: [{
          data: [100, 150, 200]
        }]
      },
      legend: true,
      legendData: [{
        label: 'Продажи',
        color: 'bg-blue-500',
        visible: true
      }],
      height: '300px'
    },
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет графика с легендой.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardWidget
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args">
          <template #chart>
            <div class="flex items-center justify-center h-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
              <p class="text-slate-500 text-sm">График здесь</p>
            </div>
          </template>
        </DXDashboardWidget>
      </div>
    \`
  })
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,_,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: 3,
    type: 'table',
    title: 'Последние заказы',
    config: {
      columns: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'customer',
        label: 'Клиент'
      }, {
        key: 'amount',
        label: 'Сумма'
      }],
      data: [{
        id: 1,
        customer: 'John Doe',
        amount: '$100'
      }, {
        id: 2,
        customer: 'Jane Smith',
        amount: '$200'
      }, {
        id: 3,
        customer: 'Bob Johnson',
        amount: '$150'
      }],
      paginated: false
    },
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Виджет таблицы с данными.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardWidget
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-2xl">
        <DXDashboardWidget v-bind="args" />
      </div>
    \`
  })
}`,...(ee=(_=b.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,ae,ne;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    id: 4,
    type: 'text',
    title: 'Заметки',
    config: {
      text: 'Это текстовый виджет для отображения произвольного контента.'
    },
    editable: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Текстовый виджет для произвольного контента.'
      }
    }
  },
  render: args => ({
    components: {
      DXDashboardWidget
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="max-w-md">
        <DXDashboardWidget v-bind="args" />
      </div>
    \`
  })
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ue,re,ie;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех типов виджетов.'
      }
    }
  },
  render: () => ({
    components: {
      DXDashboardWidget
    },
    setup() {
      return {};
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DXDashboardWidget
          :id="1"
          type="stat"
          title="Продажи"
          :config="{ title: 'Всего', value: 125000, valueFormat: 'currency' }"
          :editable="true"
        />
        <DXDashboardWidget
          :id="2"
          type="text"
          title="Заметки"
          :config="{ text: 'Текстовый виджет' }"
          :editable="true"
        />
      </div>
    \`
  })
}`,...(ie=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};const Xt=["StatWidget","ChartWidget","TableWidget","TextWidget","AllTypes"];export{D as AllTypes,f as ChartWidget,p as StatWidget,b as TableWidget,h as TextWidget,Xt as __namedExportsOrder,xt as default};
