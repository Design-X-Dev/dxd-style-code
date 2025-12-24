import{r as b,c as p,a as c,k as s,l as g,m as y,o as u,f as i,g as r,x as h,e as w,b as ee}from"./vue.esm-bundler-CzLKT_w4.js";import{u as v}from"./useClassComposition-Dym2pzZ_.js";import{u as te}from"./useSpacing-BOHUzi8w.js";import{_ as A}from"./DXCard-BX01pIOu.js";import{_ as B}from"./DXButton-ChBdj9Dq.js";import{_ as G}from"./DXHeading-DwWVK5ab.js";import{D as ae}from"./DXTable-BAe1uulp.js";import{_ as ne}from"./DXDataFilter-CVVYhHHx.js";import{_ as ue}from"./DXSelect-BFLeTBtC.js";import{_ as se}from"./DXDatePicker-CTqZmQCY.js";import{_ as S}from"./DXFormControl-AlN7sECA.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXBaseTable-CQ7MQRkz.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./DXCheckbox-ztLTdipt.js";import"./CheckIcon-CKhG8hn0.js";import"./DXDropdown-BME4Lvuj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./DXDropdownItem-CaNyf6TV.js";import"./DXBadge-CxZg7KEC.js";import"./ChevronRightIcon-3JO9-dGk.js";import"./DXDropdownDivider-CNjXQi0n.js";import"./DXDivider-Yv-XXyN6.js";import"./DXLoader-BMlBTXd1.js";import"./DXSearchSelect-u2V-p1fX.js";import"./PencilIcon-CpxY3S_F.js";import"./TrashIcon-NtQ19PgI.js";import"./DXTableToolbar-pEwJ_iLG.js";import"./DXInput-BLwLEfW9.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";import"./MagnifyingGlassIcon-ssG6g_B7.js";import"./ViewColumnsIcon-DiU4uUWi.js";import"./DXTablePagination-DjIiVqpo.js";import"./DXPagination-Du3-Wl5M.js";import"./ChevronLeftIcon-BRnQlYlk.js";import"./DXTags-D9TDb5EF.js";import"./XMarkIcon-DVfh0bwU.js";import"./XCircleIcon-D6eSwy5a.js";import"./DXText-DW7ThwBY.js";import"./XMarkIcon-B2lmC1bd.js";import"./DXValidationIcon-CNh0i5IT.js";const re={class:"space-y-4"},C={__name:"DXReportGenerator",props:{data:{type:Array,default:()=>[]},columns:{type:Array,required:!0},exportFormats:{type:Array,default:()=>[{value:"pdf",label:"PDF"},{value:"excel",label:"Excel"},{value:"csv",label:"CSV"}]},filterDefinitions:{type:Array,default:()=>[]},showHeader:{type:Boolean,default:!0},showFilters:{type:Boolean,default:!0},showSettings:{type:Boolean,default:!0},showPreview:{type:Boolean,default:!0},showActions:{type:Boolean,default:!0},generating:{type:Boolean,default:!1},exporting:{type:Boolean,default:!1}},emits:["generate","export","filter-change","setting-change"],setup(t,{emit:D}){const d=t,m=D,o=b([]),n=b({format:"pdf",dateRange:null}),f=b([...d.data]),q=p(()=>f.value.length>0),W=p(()=>v("w-full space-y-6",te("md","padding"))),I=p(()=>v("mb-6")),L=p(()=>v("")),J=p(()=>v("")),M=p(()=>v("")),Q=p(()=>v("flex justify-end gap-2"));function Y(a,e){const l=o.value.find(_=>_.id===a);l?l.value=e:o.value.push({id:a,value:e}),m("filter-change",{filterId:a,value:e})}function Z(a,e){n.value[a]=e,m("setting-change",{settingKey:a,value:e})}function K(a){f.value=[...d.data],m("filter-change",a)}function V(){m("generate",{filters:o.value,settings:n.value,data:f.value})}function k(){m("export",{format:n.value.format,filters:o.value,settings:n.value,data:f.value,columns:d.columns})}return(a,e)=>(u(),c("div",{class:g(W.value),"data-component":"DXReportGenerator"},[t.showHeader||a.$slots.header?(u(),c("div",{key:0,class:g(I.value)},[y(a.$slots,"header",{},()=>[i(G,{level:"2",size:"2xl",weight:"bold",color:"default"},{default:r(()=>[...e[3]||(e[3]=[h("Генератор отчетов",-1)])]),_:1})])],2)):s("",!0),a.$slots.filters||t.showFilters?(u(),c("div",{key:1,class:g(L.value)},[y(a.$slots,"filters",{filters:o.value,updateFilter:Y},()=>[t.showFilters?(u(),w(ne,{key:0,filters:o.value,"onUpdate:filters":e[0]||(e[0]=l=>o.value=l),"filter-definitions":t.filterDefinitions,onApply:K},null,8,["filters","filter-definitions"])):s("",!0)])],2)):s("",!0),a.$slots.settings||t.showSettings?(u(),c("div",{key:2,class:g(J.value)},[y(a.$slots,"settings",{settings:n.value,updateSetting:Z},()=>[t.showSettings?(u(),w(A,{key:0,class:"p-4"},{default:r(()=>[i(G,{level:"3",weight:"semibold",class:"mb-4"},{default:r(()=>[...e[4]||(e[4]=[h("Настройки отчета",-1)])]),_:1}),ee("div",re,[i(S,{label:"Формат экспорта"},{default:r(()=>[i(ue,{modelValue:n.value.format,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value.format=l),options:t.exportFormats},null,8,["modelValue","options"])]),_:1}),i(S,{label:"Период"},{default:r(()=>[i(se,{modelValue:n.value.dateRange,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value.dateRange=l),range:""},null,8,["modelValue"])]),_:1})])]),_:1})):s("",!0)])],2)):s("",!0),a.$slots.preview||t.showPreview?(u(),c("div",{key:3,class:g(M.value)},[y(a.$slots,"preview",{data:f.value,columns:t.columns},()=>[t.showPreview?(u(),w(A,{key:0,class:"p-4"},{default:r(()=>[i(G,{level:"3",weight:"semibold",class:"mb-4"},{default:r(()=>[...e[5]||(e[5]=[h("Предпросмотр",-1)])]),_:1}),i(ae,{columns:t.columns,data:f.value,paginated:!1,size:"sm"},null,8,["columns","data"])]),_:1})):s("",!0)])],2)):s("",!0),a.$slots.actions||t.showActions?(u(),c("div",{key:4,class:g(Q.value)},[y(a.$slots,"actions",{generate:V,export:k},()=>[t.showActions?(u(),w(B,{key:0,variant:"ghost",loading:t.generating,onClick:V},{default:r(()=>[...e[6]||(e[6]=[h(" Сгенерировать ",-1)])]),_:1},8,["loading"])):s("",!0),t.showActions?(u(),w(B,{key:1,variant:"primary",loading:t.exporting,disabled:!q.value,onClick:k},{default:r(()=>[...e[7]||(e[7]=[h(" Экспортировать ",-1)])]),_:1},8,["loading","disabled"])):s("",!0)])],2)):s("",!0)],2))}};C.__docgenInfo={exportName:"default",displayName:"DXReportGenerator",description:"",tags:{},props:[{name:"data",description:"Данные для отчета",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",description:`Колонки отчета
Формат: [{ key, label, format? }]`,type:{name:"array"},required:!0},{name:"exportFormats",description:`Форматы экспорта
Формат: [{ value, label }]`,tags:{default:[{description:"[{ value: 'pdf', label: 'PDF' }, { value: 'excel', label: 'Excel' }, { value: 'csv', label: 'CSV' }]",title:"default"}]},type:{name:"array"},defaultValue:{func:!1,value:`[
  { value: "pdf", label: "PDF" },
  { value: "excel", label: "Excel" },
  { value: "csv", label: "CSV" },
]`}},{name:"filterDefinitions",description:`Определения фильтров
Формат: [{ id, label, type, options? }]`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showHeader",description:"Показывать header",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showFilters",description:"Показывать фильтры",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showSettings",description:"Показывать настройки",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showPreview",description:"Показывать предпросмотр",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showActions",description:"Показывать действия",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"generating",description:"Состояние генерации",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"exporting",description:"Состояние экспорта",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"generate"},{name:"export"},{name:"filter-change"},{name:"setting-change"}],slots:[{name:"header"},{name:"filters",scoped:!0,bindings:[{name:"filters",title:"binding"},{name:"update-filter",title:"binding"}]},{name:"settings",scoped:!0,bindings:[{name:"settings",title:"binding"},{name:"update-setting",title:"binding"}]},{name:"preview",scoped:!0,bindings:[{name:"data",title:"binding"},{name:"columns",title:"binding"}]},{name:"actions",scoped:!0,bindings:[{name:"generate",title:"binding"},{name:"export",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXReportGenerator/DXReportGenerator.vue"]};const at={title:"Organisms/DXReportGenerator",component:C,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXReportGenerator

Генератор отчетов с фильтрацией, настройками параметров и экспортом в различные форматы.

## Назначение

DXReportGenerator предоставляет полнофункциональный генератор отчетов с поддержкой
фильтрации данных, настройки параметров, предпросмотра и экспорта в различные форматы.

## Архитектура

### Использует
- \`DXDataFilter\` - для фильтрации данных
- \`DXTable\` - для предпросмотра
- \`DXCard\` - для контейнеров
- \`DXButton\` - для действий
- \`DXSelect\` - для выбора формата
- \`DXDatePicker\` - для выбора периода
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- Аналитические панели
- Системы отчетности
- Экспорт данных
- Административные панели

## Внутренняя логика

### Фильтрация
Использует \`DXDataFilter\` для фильтрации данных перед генерацией отчета.

### Форматы экспорта
Поддерживает экспорт в PDF, Excel, CSV и другие форматы.

### Предпросмотр
Показывает предпросмотр данных перед экспортом.

## Особенности

### Слоты
- **filters**: Кастомные фильтры
- **settings**: Кастомные настройки
- **preview**: Кастомный предпросмотр
- **actions**: Кастомные действия

### Гибкость
Все секции можно кастомизировать через slots.
        `}}}},F=[{key:"id",label:"ID"},{key:"name",label:"Название"},{key:"amount",label:"Сумма"},{key:"date",label:"Дата"}],R=[{id:1,name:"Товар 1",amount:1e3,date:"2024-01-15"},{id:2,name:"Товар 2",amount:2e3,date:"2024-01-20"},{id:3,name:"Товар 3",amount:1500,date:"2024-01-25"}],oe=[{id:"name",label:"Название",type:"text"},{id:"date",label:"Дата",type:"date",range:!0}],E={args:{columns:F,data:R,filterDefinitions:oe,showFilters:!0,showSettings:!0,showPreview:!0,showActions:!0},parameters:{docs:{description:{story:"Базовый генератор отчетов с фильтрами, настройками, предпросмотром и экспортом."}}},render:t=>({components:{DXReportGenerator:C},setup(){const D=b(!1),d=b(!1);return{args:t,generating:D,exporting:d,handleGenerate:n=>{console.log("Генерация отчета:",n),D.value=!0,setTimeout(()=>{D.value=!1},2e3)},handleExport:n=>{console.log("Экспорт отчета:",n),d.value=!0,setTimeout(()=>{d.value=!1},2e3)}}},template:`
      <DXReportGenerator
        v-bind="args"
        :generating="generating"
        :exporting="exporting"
        @generate="handleGenerate"
        @export="handleExport"
      />
    `})},x={parameters:{docs:{description:{story:"Генератор отчетов с кастомными фильтрами через slot."}}},render:()=>({components:{DXReportGenerator:C,DXCard},setup(){return{defaultColumns:F,defaultData:R}},template:`
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
      >
        <template #filters>
          <DXCard class="p-4">
            <p class="text-sm text-slate-600">Кастомные фильтры</p>
          </DXCard>
        </template>
      </DXReportGenerator>
    `})},X={parameters:{docs:{description:{story:"Генератор отчетов только с экспортом (без фильтров и настроек)."}}},render:()=>({components:{DXReportGenerator:C},setup(){return{defaultColumns:F,defaultData:R}},template:`
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
        :show-settings="false"
        :show-preview="false"
      />
    `})};var $,P,N;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    columns: defaultColumns,
    data: defaultData,
    filterDefinitions: defaultFilterDefinitions,
    showFilters: true,
    showSettings: true,
    showPreview: true,
    showActions: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый генератор отчетов с фильтрами, настройками, предпросмотром и экспортом.'
      }
    }
  },
  render: args => ({
    components: {
      DXReportGenerator
    },
    setup() {
      const generating = ref(false);
      const exporting = ref(false);
      const handleGenerate = data => {
        console.log('Генерация отчета:', data);
        generating.value = true;
        setTimeout(() => {
          generating.value = false;
        }, 2000);
      };
      const handleExport = data => {
        console.log('Экспорт отчета:', data);
        exporting.value = true;
        setTimeout(() => {
          exporting.value = false;
        }, 2000);
      };
      return {
        args,
        generating,
        exporting,
        handleGenerate,
        handleExport
      };
    },
    template: \`
      <DXReportGenerator
        v-bind="args"
        :generating="generating"
        :exporting="exporting"
        @generate="handleGenerate"
        @export="handleExport"
      />
    \`
  })
}`,...(N=(P=E.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var T,O,U;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Генератор отчетов с кастомными фильтрами через slot.'
      }
    }
  },
  render: () => ({
    components: {
      DXReportGenerator,
      DXCard
    },
    setup() {
      return {
        defaultColumns,
        defaultData
      };
    },
    template: \`
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
      >
        <template #filters>
          <DXCard class="p-4">
            <p class="text-sm text-slate-600">Кастомные фильтры</p>
          </DXCard>
        </template>
      </DXReportGenerator>
    \`
  })
}`,...(U=(O=x.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var z,H,j;X.parameters={...X.parameters,docs:{...(z=X.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Генератор отчетов только с экспортом (без фильтров и настроек).'
      }
    }
  },
  render: () => ({
    components: {
      DXReportGenerator
    },
    setup() {
      return {
        defaultColumns,
        defaultData
      };
    },
    template: \`
      <DXReportGenerator
        :columns="defaultColumns"
        :data="defaultData"
        :show-filters="false"
        :show-settings="false"
        :show-preview="false"
      />
    \`
  })
}`,...(j=(H=X.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const nt=["Default","WithCustomFilters","ExportOnly"];export{E as Default,X as ExportOnly,x as WithCustomFilters,nt as __namedExportsOrder,at as default};
