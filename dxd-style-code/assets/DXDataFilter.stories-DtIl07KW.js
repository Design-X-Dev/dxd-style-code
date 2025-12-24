import{r as n}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as u}from"./DXDataFilter-DhvlwcvZ.js";import{_ as o}from"./DXCard-CLY4ojX0.js";import"./useClassComposition-Dym2pzZ_.js";import"./useSpacing-BOHUzi8w.js";import"./DXInput-BG2R0LGs.js";import"./useSize-DIMNv1Ms.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXSelect-CgmhnMxb.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDatePicker-BJkPB1Pe.js";import"./DXButton-DzgLKRkE.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./DXHeading-S6mljWwV.js";import"./DXText-Bu-Qlv6N.js";import"./XMarkIcon-DTqRFgaM.js";const J={title:"Molecules/DXDataFilter",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXDataFilter

Комплексный фильтр данных с различными типами условий, группировкой и сохранением фильтров.

## Назначение

DXDataFilter предоставляет расширенную систему фильтрации с поддержкой различных типов
условий (текст, число, дата, выбор), группировки условий (AND/OR) и сохранения фильтров.

## Архитектура

### Использует
- \`DXInput\` - для текстовых и числовых фильтров
- \`DXSelect\` - для фильтров выбора
- \`DXDatePicker\` - для фильтров даты
- \`DXButton\` - для действий
- \`DXIcon\` - для иконок
- \`useClassComposition\` composable - для стилей
- \`useSpacing\` composable - для отступов

### Используется в
- \`DXTable\` - для фильтрации данных
- \`DXReportGenerator\` - для фильтрации отчетов
- Каталоги товаров
- Аналитические панели

## Внутренняя логика

### Типы фильтров
- **text**: Текстовый фильтр
- **number**: Числовой фильтр с диапазоном (min/max)
- **select**: Фильтр выбора из списка
- **date**: Фильтр даты (с поддержкой диапазона)

### Группировка
Условия могут быть сгруппированы через AND или OR логику.

### Кастомные фильтры
Можно использовать slots для кастомных типов фильтров.

## Особенности

### Удаление фильтров
При \`removable={true}\` каждый фильтр можно удалить.

### События
Компонент эмитит события при изменении, применении и сбросе фильтров.
        `}}},argTypes:{grouping:{control:"select",options:["AND","OR"],description:"Группировка условий: AND (все условия) | OR (любое условие).",table:{type:{summary:"string"},defaultValue:{summary:"AND"},category:"Behavior"}},removable:{control:"boolean",description:"Можно ли удалять фильтры.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}},showActions:{control:"boolean",description:"Показывать кнопки действий (Применить/Сбросить).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}}}},l=[{id:"name",label:"Название",type:"text",placeholder:"Введите название"},{id:"status",label:"Статус",type:"select",options:[{value:"active",label:"Активный"},{value:"inactive",label:"Неактивный"},{value:"pending",label:"Ожидание"}]},{id:"price",label:"Цена",type:"number"},{id:"date",label:"Дата",type:"date",range:!0}],r={args:{filters:[{id:"name",type:"text",value:""},{id:"status",type:"select",value:""}],filterDefinitions:l,grouping:"AND"},parameters:{docs:{description:{story:"Базовый фильтр с текстовым и select фильтрами."}}},render:e=>({components:{DXDataFilter:u,DXCard:o},setup(){const t=n(e.filters);return{args:e,filters:t,handleApply:A=>{console.log("Применены фильтры:",A)},handleReset:()=>{console.log("Фильтры сброшены")}}},template:`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
          @apply="handleApply"
          @reset="handleReset"
        />
      </DXCard>
    `})},a={parameters:{docs:{description:{story:"Фильтр со всеми типами условий: текст, число, выбор, дата."}}},render:()=>({components:{DXDataFilter:u,DXCard:o},setup(){return{filters:n([{id:"name",type:"text",value:""},{id:"status",type:"select",value:""},{id:"price",type:"number",value:{min:"",max:""}},{id:"date",type:"date",value:null,range:!0}]),defaultFilterDefinitions:l,handleApply:p=>{console.log("Применены фильтры:",p)}}},template:`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          :filter-definitions="defaultFilterDefinitions"
          @apply="handleApply"
        />
      </DXCard>
    `})},s={parameters:{docs:{description:{story:"Фильтр с группировкой условий. Можно переключать между AND и OR."}}},render:()=>({components:{DXDataFilter:u,DXCard:o},setup(){const e=n([{id:"name",type:"text",value:""},{id:"status",type:"select",value:""}]),t=n("AND");return{filters:e,grouping:t,defaultFilterDefinitions:l,handleGroupingChange:d=>{console.log("Группировка изменена:",d)}}},template:`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-model:grouping="grouping"
          :filter-definitions="defaultFilterDefinitions"
          @grouping-change="handleGroupingChange"
        />
      </DXCard>
    `})},i={args:{filters:[{id:"name",type:"text",value:""}],filterDefinitions:l,showActions:!1},parameters:{docs:{description:{story:"Фильтр без кнопок действий. Используйте кастомные действия через slot actions."}}},render:e=>({components:{DXDataFilter:u,DXCard:o,DXButton},setup(){const t=n(e.filters);return{args:e,filters:t}},template:`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
        >
          <template #actions>
            <DXButton variant="ghost">Отмена</DXButton>
            <DXButton variant="primary">Применить фильтры</DXButton>
          </template>
        </DXDataFilter>
      </DXCard>
    `})};var c,D,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: 'name',
      type: 'text',
      value: ''
    }, {
      id: 'status',
      type: 'select',
      value: ''
    }],
    filterDefinitions: defaultFilterDefinitions,
    grouping: 'AND'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый фильтр с текстовым и select фильтрами.'
      }
    }
  },
  render: args => ({
    components: {
      DXDataFilter,
      DXCard
    },
    setup() {
      const filters = ref(args.filters);
      const handleApply = data => {
        console.log('Применены фильтры:', data);
      };
      const handleReset = () => {
        console.log('Фильтры сброшены');
      };
      return {
        args,
        filters,
        handleApply,
        handleReset
      };
    },
    template: \`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
          @apply="handleApply"
          @reset="handleReset"
        />
      </DXCard>
    \`
  })
}`,...(m=(D=r.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Фильтр со всеми типами условий: текст, число, выбор, дата.'
      }
    }
  },
  render: () => ({
    components: {
      DXDataFilter,
      DXCard
    },
    setup() {
      const filters = ref([{
        id: 'name',
        type: 'text',
        value: ''
      }, {
        id: 'status',
        type: 'select',
        value: ''
      }, {
        id: 'price',
        type: 'number',
        value: {
          min: '',
          max: ''
        }
      }, {
        id: 'date',
        type: 'date',
        value: null,
        range: true
      }]);
      const handleApply = data => {
        console.log('Применены фильтры:', data);
      };
      return {
        filters,
        defaultFilterDefinitions,
        handleApply
      };
    },
    template: \`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          :filter-definitions="defaultFilterDefinitions"
          @apply="handleApply"
        />
      </DXCard>
    \`
  })
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var X,C,h;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Фильтр с группировкой условий. Можно переключать между AND и OR.'
      }
    }
  },
  render: () => ({
    components: {
      DXDataFilter,
      DXCard
    },
    setup() {
      const filters = ref([{
        id: 'name',
        type: 'text',
        value: ''
      }, {
        id: 'status',
        type: 'select',
        value: ''
      }]);
      const grouping = ref('AND');
      const handleGroupingChange = newGrouping => {
        console.log('Группировка изменена:', newGrouping);
      };
      return {
        filters,
        grouping,
        defaultFilterDefinitions,
        handleGroupingChange
      };
    },
    template: \`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-model:grouping="grouping"
          :filter-definitions="defaultFilterDefinitions"
          @grouping-change="handleGroupingChange"
        />
      </DXCard>
    \`
  })
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var v,F,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    filters: [{
      id: 'name',
      type: 'text',
      value: ''
    }],
    filterDefinitions: defaultFilterDefinitions,
    showActions: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Фильтр без кнопок действий. Используйте кастомные действия через slot actions.'
      }
    }
  },
  render: args => ({
    components: {
      DXDataFilter,
      DXCard,
      DXButton
    },
    setup() {
      const filters = ref(args.filters);
      return {
        args,
        filters
      };
    },
    template: \`
      <DXCard class="p-6">
        <DXDataFilter
          v-model:filters="filters"
          v-bind="args"
        >
          <template #actions>
            <DXButton variant="ghost">Отмена</DXButton>
            <DXButton variant="primary">Применить фильтры</DXButton>
          </template>
        </DXDataFilter>
      </DXCard>
    \`
  })
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};const K=["Default","WithAllTypes","WithGrouping","WithoutActions"];export{r as Default,a as WithAllTypes,s as WithGrouping,i as WithoutActions,K as __namedExportsOrder,J as default};
