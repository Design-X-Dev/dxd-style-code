import{r as e}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as s}from"./DXTableToolbar-zNIf53Pf.js";import{_ as m}from"./DXButton-DzgLKRkE.js";import"./DXInput-BG2R0LGs.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXCheckbox-DQusejYU.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckIcon-B1lKtPCn.js";import"./DXDropdown-DAfwPhYF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./MagnifyingGlassIcon-DKNfedfR.js";import"./ViewColumnsIcon-DRckdqun.js";const pe={title:"Molecules/DXTableToolbar",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXTableToolbar

Компонент панели инструментов для таблиц с поддержкой поиска, переключения столбцов и кастомных действий.

## Назначение

DXTableToolbar предоставляет стандартизированную панель инструментов для таблиц данных.
Компонент объединяет поиск, информацию о выбранных элементах, переключение видимости столбцов
и слоты для кастомных действий.

## Архитектура

### Использует
- \`DXInput\` - для поисковой строки
- \`DXIcon\` - для иконок
- \`DXCheckbox\` - для переключения видимости столбцов
- \`DXDropdown\` - для меню переключения столбцов

### Используется в
- \`DXTable\` - панель инструментов таблицы
- Таблицы данных с поиском и фильтрацией
- Административные панели

## Внутренняя логика

### Поиск
При \`searchable={true}\`:
- Отображается поисковая строка с иконкой поиска
- Поддерживает v-model для двустороннего связывания
- Максимальная ширина: \`max-w-xs\`

### Информация о выборе
При \`selectedCount > 0\`:
- Отображается текст "Выбрано: N"
- Показывается слева от поиска

### Переключение столбцов
При \`columnToggle={true}\`:
- Отображается dropdown с чекбоксами для каждого столбца
- Каждый столбц имеет \`key\`, \`label\` и \`visible\` свойства
- При переключении эмитится событие \`toggle-column\` с ключом столбца

### Размеры
Поддерживает 3 размера:
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой

## Особенности

### Слоты
- **left** - кастомные элементы слева от поиска
- **right** - кастомные элементы справа (перед переключателем столбцов)

### События
- \`@update:searchQuery\` - изменение поискового запроса
- \`@toggle-column\` - переключение видимости столбца

### Структура столбцов
Столбцы передаются через массив объектов:
\`\`\`
[{ key: 'id', label: 'ID', visible: true }, ...]
\`\`\`
        `}}}},c=[{key:"id",label:"ID",visible:!0},{key:"name",label:"Имя",visible:!0},{key:"email",label:"Email",visible:!0},{key:"role",label:"Роль",visible:!1},{key:"status",label:"Статус",visible:!0}],i={render:()=>({components:{DXTableToolbar:s},setup(){return{searchQuery:e(""),sampleColumns:c}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
      />
    `})},g={render:()=>({components:{DXTableToolbar:s},setup(){const n=e(""),o=e(5);return{searchQuery:n,selectedCount:o}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :selectedCount="selectedCount"
      />
    `})},d={render:()=>({components:{DXTableToolbar:s},setup(){const n=e(""),o=e(c);return{searchQuery:n,columns:o,handleToggle:u=>{const l=o.value.find(t=>t.key===u);l&&(l.visible=!l.visible)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      />
    `})},b={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e("md");return{searchQuery:n,size:o}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `})},p={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c),u=e("md");return{searchQuery:n,selectedCount:o,columns:r,size:u,handleToggle:t=>{const a=r.value.find(J=>J.key===t);a&&(a.visible=!a.visible)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `})},T={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c);return{searchQuery:n,selectedCount:o,columns:r,handleToggle:l=>{const t=r.value.find(a=>a.key===l);t&&(t.visible=!t.visible)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="sm"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="sm" variant="primary">Добавить</DXButton>
          <DXButton size="sm" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `})},h={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c);return{searchQuery:n,selectedCount:o,columns:r,handleToggle:l=>{const t=r.value.find(a=>a.key===l);t&&(t.visible=!t.visible)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="md"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="md" variant="primary">Добавить</DXButton>
          <DXButton size="md" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `})},D={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c);return{searchQuery:n,selectedCount:o,columns:r,handleToggle:l=>{const t=r.value.find(a=>a.key===l);t&&(t.visible=!t.visible)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="lg"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="lg" variant="primary">Добавить</DXButton>
          <DXButton size="lg" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    `})},y={args:{size:"md",searchQuery:"",searchable:!0,selectedCount:0,columnToggle:!1,columns:c},argTypes:{size:{control:"select",options:["sm","md","lg"]},searchable:{control:"boolean"},selectedCount:{control:"number"},columnToggle:{control:"boolean"}},render:n=>({components:{DXTableToolbar:s},setup(){const o=e(n.searchQuery);return{args:n,searchQuery:o,handleToggle:u=>{console.log("Toggle column:",u)}}},template:`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        v-bind="args"
        @toggle-column="handleToggle"
      />
    `})};var X,v,Q;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar
    },
    setup() {
      const searchQuery = ref('');
      return {
        searchQuery,
        sampleColumns
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
      />
    \`
  })
}`,...(Q=(v=i.parameters)==null?void 0:v.docs)==null?void 0:Q.source}}};var z,C,f;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar
    },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(5);
      return {
        searchQuery,
        selectedCount
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :selectedCount="selectedCount"
      />
    \`
  })
}`,...(f=(C=g.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var B,k,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar
    },
    setup() {
      const searchQuery = ref('');
      const columns = ref(sampleColumns);
      const handleToggle = key => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return {
        searchQuery,
        columns,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :searchable="true"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      />
    \`
  })
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var E,F,_;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar,
      DXButton
    },
    setup() {
      const searchQuery = ref('');
      const size = ref('md');
      return {
        searchQuery,
        size
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    \`
  })
}`,...(_=(F=b.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,I,W;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar,
      DXButton
    },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const size = ref('md');
      const handleToggle = key => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return {
        searchQuery,
        selectedCount,
        columns,
        size,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        :size="size"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    \`
  })
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var x,w,M;T.parameters={...T.parameters,docs:{...(x=T.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar,
      DXButton
    },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = key => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return {
        searchQuery,
        selectedCount,
        columns,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="sm"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="sm" variant="primary">Добавить</DXButton>
          <DXButton size="sm" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    \`
  })
}`,...(M=(w=T.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var L,P,N;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar,
      DXButton
    },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = key => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return {
        searchQuery,
        selectedCount,
        columns,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="md"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="md" variant="primary">Добавить</DXButton>
          <DXButton size="md" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    \`
  })
}`,...(N=(P=h.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var O,$,j;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTableToolbar,
      DXButton
    },
    setup() {
      const searchQuery = ref('');
      const selectedCount = ref(3);
      const columns = ref(sampleColumns);
      const handleToggle = key => {
        const col = columns.value.find(c => c.key === key);
        if (col) col.visible = !col.visible;
      };
      return {
        searchQuery,
        selectedCount,
        columns,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        size="lg"
        :searchable="true"
        :selectedCount="selectedCount"
        :columnToggle="true"
        :columns="columns"
        @toggle-column="handleToggle"
      >
        <template #right>
          <DXButton size="lg" variant="primary">Добавить</DXButton>
          <DXButton size="lg" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTableToolbar>
    \`
  })
}`,...(j=($=D.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var q,G,H;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    searchQuery: '',
    searchable: true,
    selectedCount: 0,
    columnToggle: false,
    columns: sampleColumns
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    searchable: {
      control: 'boolean'
    },
    selectedCount: {
      control: 'number'
    },
    columnToggle: {
      control: 'boolean'
    }
  },
  render: args => ({
    components: {
      DXTableToolbar
    },
    setup() {
      const searchQuery = ref(args.searchQuery);
      const handleToggle = key => {
        console.log('Toggle column:', key);
      };
      return {
        args,
        searchQuery,
        handleToggle
      };
    },
    template: \`
      <DXTableToolbar
        v-model:searchQuery="searchQuery"
        v-bind="args"
        @toggle-column="handleToggle"
      />
    \`
  })
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const Te=["Default","WithSelectionInfo","WithColumnToggle","WithCustomActions","FullFeatures","SmallSize","MediumSize","LargeSize","Playground"];export{i as Default,p as FullFeatures,D as LargeSize,h as MediumSize,y as Playground,T as SmallSize,d as WithColumnToggle,b as WithCustomActions,g as WithSelectionInfo,Te as __namedExportsOrder,pe as default};
