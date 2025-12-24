import{r as d}from"./vue.esm-bundler-C1fUoNF-.js";import{D as a}from"./DXBaseTable-DOauzPC8.js";import{_ as Se}from"./DXBadge-Cnl9-G8k.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXCheckbox-DQusejYU.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./CheckIcon-B1lKtPCn.js";import"./DXDropdown-DAfwPhYF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDropdownItem-sgbg46Q-.js";import"./useClassComposition-Dym2pzZ_.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXDropdownDivider-DVs74pqL.js";import"./DXDivider-Cu8D1wP6.js";import"./useSpacing-BOHUzi8w.js";import"./DXLoader-DAWlORDv.js";import"./DXSearchSelect-Cl2oWNWm.js";import"./FunnelIcon-Ba3wLEuE.js";import"./PencilIcon-BVI5idyX.js";import"./TrashIcon-DHw2oPM1.js";const Ke={title:"Organisms/DXBaseTable",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXBaseTable

Базовая таблица данных с поддержкой сортировки, кастомных ячеек и различных вариантов оформления.

## Назначение

DXBaseTable предоставляет базовую функциональность таблицы данных без расширенных функций
(фильтрация, пагинация, выбор). Используется как основа для DXTable или для простых таблиц,
требующих только сортировку и кастомное отображение ячеек.

## Архитектура

### Использует
- Нативные HTML таблицы (\`<table>\`, \`<thead>\`, \`<tbody>\`, \`<tr>\`, \`<td>\`, \`<th>\`)
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXTable\` - как базовая таблица
- Простые таблицы данных
- Таблицы без расширенных функций

## Внутренняя логика

### Структура колонок
Колонки определяются через массив объектов:
\`\`\`
[{
  key: 'id',
  label: 'ID',
  sortable?: true,
  width?: '80px',
  align?: 'left' | 'center' | 'right'
}]
\`\`\`

### Сортировка
При \`sortable={true}\` в колонке:
- Отображается иконка сортировки в заголовке
- При клике эмитится событие \`sort\` с информацией о колонке и направлении
- Сортировка должна обрабатываться родительским компонентом

### Кастомные ячейки
Можно использовать named slots для кастомного отображения ячеек:
- \`cell-{key}\` - кастомная ячейка для колонки (например, \`cell-status\`)
- \`header-{key}\` - кастомный заголовок для колонки

### Выравнивание
Каждая колонка может иметь свое выравнивание:
- **left** (по умолчанию) - по левому краю
- **center** - по центру
- **right** - по правому краю

### Ширина колонок
Можно указать фиксированную ширину колонки через \`width\` prop.

## Особенности

### События
- \`@sort\` - эмитится при клике на сортируемую колонку, передает \`{ column, direction }\`

### Варианты оформления
Поддерживает различные варианты оформления:
- **default** - стандартное оформление
- **bordered** - с рамками
- **striped** - с чередующимися строками

### Слоты
- **cell-{key}** - кастомная ячейка для колонки
- **header-{key}** - кастомный заголовок для колонки
        `}}}},we=[{key:"name",label:"Имя"},{key:"email",label:"Email"},{key:"role",label:"Роль"}],l=[{key:"id",label:"ID",width:"80px",sortable:!0},{key:"name",label:"Имя",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Роль",sortable:!0},{key:"status",label:"Статус",sortable:!0},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center"}],r=[{id:1,name:"Иван Иванов",email:"ivan@example.com",role:"Admin",status:"Active",age:32},{id:2,name:"Мария Петрова",email:"maria@example.com",role:"User",status:"Active",age:28},{id:3,name:"Петр Сидоров",email:"petr@example.com",role:"User",status:"Inactive",age:45},{id:4,name:"Анна Смирнова",email:"anna@example.com",role:"Manager",status:"Active",age:35},{id:5,name:"Дмитрий Козлов",email:"dmitry@example.com",role:"User",status:"Pending",age:29}],Xe=Array.from({length:20},(t,e)=>({id:e+1,name:`Пользователь ${e+1}`,email:`user${e+1}@example.com`,role:["Admin","User","Manager"][e%3],status:["Active","Inactive","Pending"][e%3],age:20+e%50,category:["Tech","Sales","Marketing"][e%3]})),p={render:()=>({components:{DXBaseTable:a},setup(){return{simpleColumns:we,simpleData:r}},template:`
      <DXBaseTable
        :columns="simpleColumns"
        :data="simpleData"
      />
    `})},D={render:()=>({components:{DXBaseTable:a},setup(){const t=d("name"),e=d("asc"),n=d([...r]);return{columns:l,data:n,sortBy:t,sortDirection:e,handleSort:({column:u,direction:i})=>{t.value=u,e.value=i,n.value=[...n.value].sort((x,V)=>{const s=x[u],c=V[u],m=i==="asc"?1:-1;return s<c?-1*m:s>c?1*m:0})}}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        @sort="handleSort"
      />
    `})},b={render:()=>({components:{DXBaseTable:a},setup(){const t=d([]);return{columns:l,data:r,selectedRows:t,handleRowSelect:({id:o,selected:u})=>{u?t.value.push(o):t.value=t.value.filter(i=>i!==o)},handleSelectAll:o=>{o?t.value=r.map(u=>u.id):t.value=[]}}},template:`
      <div>
        <div class="mb-4 text-sm text-slate-600">
          Выбрано строк: {{ selectedRows.length }}
        </div>
        <DXBaseTable
          :columns="columns"
          :data="data"
          :selectable="true"
          :selectedRows="selectedRows"
          @row-select="handleRowSelect"
          @select-all="handleSelectAll"
        />
      </div>
    `})},g={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r,handleEdit:n=>{alert(`Редактировать: ${n.name}`)},handleDelete:n=>{alert(`Удалить: ${n.name}`)}}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :actions="true"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `})},B={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:Xe}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        groupBy="role"
      />
    `})},v={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:Xe}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
      />
    `})},h={render:()=>({components:{DXBaseTable:a,DXBadge:Se},setup(){return{columns:l,data:r,getStatusVariant:e=>({Active:"success",Inactive:"neutral",Pending:"warning"})[e]||"neutral"}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
        <template #cell-role="{ value }">
          <span class="font-semibold text-slate-700">{{ value }}</span>
        </template>
      </DXBaseTable>
    `})},S={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :striped="true"
      />
    `})},X={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :dense="true"
      />
    `})},T={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="sm"
        :actions="true"
      />
    `})},w={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="lg"
        :actions="true"
      />
    `})},f={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:[]}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :loading="true"
      />
    `})},y={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:[]}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #empty>
          <div class="text-center">
            <p class="text-lg font-semibold text-slate-700">Нет данных</p>
            <p class="text-sm text-slate-500 mt-1">Попробуйте изменить фильтры</p>
          </div>
        </template>
      </DXBaseTable>
    `})},R={render:()=>({components:{DXBaseTable:a,DXBadge:Se},setup(){const t=d("name"),e=d("asc"),n=d([]),o=d([...r]);return{columns:l,data:o,sortBy:t,sortDirection:e,selectedRows:n,handleSort:({column:s,direction:c})=>{t.value=s,e.value=c,o.value=[...o.value].sort((m,Te)=>{const A=m[s],k=Te[s],C=c==="asc"?1:-1;return A<k?-1*C:A>k?1*C:0})},handleRowSelect:({id:s,selected:c})=>{c?n.value.push(s):n.value=n.value.filter(m=>m!==s)},handleSelectAll:s=>{s?n.value=o.value.map(c=>c.id):n.value=[]},getStatusVariant:s=>({Active:"success",Inactive:"neutral",Pending:"warning"})[s]||"neutral"}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :selectable="true"
        :selectedRows="selectedRows"
        :actions="true"
        :striped="true"
        :hoverable="true"
        @sort="handleSort"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
      </DXBaseTable>
    `})};var E,I,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        simpleColumns,
        simpleData
      };
    },
    template: \`
      <DXBaseTable
        :columns="simpleColumns"
        :data="simpleData"
      />
    \`
  })
}`,...(W=(I=p.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,_,F;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      const sortBy = ref('name');
      const sortDirection = ref('asc');
      const data = ref([...simpleData]);
      const handleSort = ({
        column,
        direction
      }) => {
        sortBy.value = column;
        sortDirection.value = direction;

        // Sort data
        data.value = [...data.value].sort((a, b) => {
          const aVal = a[column];
          const bVal = b[column];
          const modifier = direction === 'asc' ? 1 : -1;
          if (aVal < bVal) return -1 * modifier;
          if (aVal > bVal) return 1 * modifier;
          return 0;
        });
      };
      return {
        columns,
        data,
        sortBy,
        sortDirection,
        handleSort
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        @sort="handleSort"
      />
    \`
  })
}`,...(F=(_=D.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var P,$,H;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      const selectedRows = ref([]);
      const handleRowSelect = ({
        id,
        selected
      }) => {
        if (selected) {
          selectedRows.value.push(id);
        } else {
          selectedRows.value = selectedRows.value.filter(rowId => rowId !== id);
        }
      };
      const handleSelectAll = selected => {
        if (selected) {
          selectedRows.value = simpleData.map(row => row.id);
        } else {
          selectedRows.value = [];
        }
      };
      return {
        columns,
        data: simpleData,
        selectedRows,
        handleRowSelect,
        handleSelectAll
      };
    },
    template: \`
      <div>
        <div class="mb-4 text-sm text-slate-600">
          Выбрано строк: {{ selectedRows.length }}
        </div>
        <DXBaseTable
          :columns="columns"
          :data="data"
          :selectable="true"
          :selectedRows="selectedRows"
          @row-select="handleRowSelect"
          @select-all="handleSelectAll"
        />
      </div>
    \`
  })
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,M,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      const handleEdit = row => {
        alert(\`Редактировать: \${row.name}\`);
      };
      const handleDelete = row => {
        alert(\`Удалить: \${row.name}\`);
      };
      return {
        columns,
        data: simpleData,
        handleEdit,
        handleDelete
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :actions="true"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    \`
  })
}`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,O,j;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        groupBy="role"
      />
    \`
  })
}`,...(j=(O=B.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,J,K;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
      />
    \`
  })
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,Y;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable,
      DXBadge
    },
    setup() {
      const getStatusVariant = status => {
        const map = {
          'Active': 'success',
          'Inactive': 'neutral',
          'Pending': 'warning'
        };
        return map[status] || 'neutral';
      };
      return {
        columns,
        data: simpleData,
        getStatusVariant
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
        <template #cell-role="{ value }">
          <span class="font-semibold text-slate-700">{{ value }}</span>
        </template>
      </DXBaseTable>
    \`
  })
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :striped="true"
      />
    \`
  })
}`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;X.parameters={...X.parameters,docs:{...(te=X.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :dense="true"
      />
    \`
  })
}`,...(se=(ae=X.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,re,oe;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="sm"
        :actions="true"
      />
    \`
  })
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,ue,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="lg"
        :actions="true"
      />
    \`
  })
}`,...(de=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ie,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: []
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :loading="true"
      />
    \`
  })
}`,...(pe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var De,be,ge;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable
    },
    setup() {
      return {
        columns,
        data: []
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
      >
        <template #empty>
          <div class="text-center">
            <p class="text-lg font-semibold text-slate-700">Нет данных</p>
            <p class="text-sm text-slate-500 mt-1">Попробуйте изменить фильтры</p>
          </div>
        </template>
      </DXBaseTable>
    \`
  })
}`,...(ge=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Be,ve,he;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBaseTable,
      DXBadge
    },
    setup() {
      const sortBy = ref('name');
      const sortDirection = ref('asc');
      const selectedRows = ref([]);
      const data = ref([...simpleData]);
      const handleSort = ({
        column,
        direction
      }) => {
        sortBy.value = column;
        sortDirection.value = direction;
        data.value = [...data.value].sort((a, b) => {
          const aVal = a[column];
          const bVal = b[column];
          const modifier = direction === 'asc' ? 1 : -1;
          if (aVal < bVal) return -1 * modifier;
          if (aVal > bVal) return 1 * modifier;
          return 0;
        });
      };
      const handleRowSelect = ({
        id,
        selected
      }) => {
        if (selected) {
          selectedRows.value.push(id);
        } else {
          selectedRows.value = selectedRows.value.filter(rowId => rowId !== id);
        }
      };
      const handleSelectAll = selected => {
        if (selected) {
          selectedRows.value = data.value.map(row => row.id);
        } else {
          selectedRows.value = [];
        }
      };
      const getStatusVariant = status => {
        const map = {
          'Active': 'success',
          'Inactive': 'neutral',
          'Pending': 'warning'
        };
        return map[status] || 'neutral';
      };
      return {
        columns,
        data,
        sortBy,
        sortDirection,
        selectedRows,
        handleSort,
        handleRowSelect,
        handleSelectAll,
        getStatusVariant
      };
    },
    template: \`
      <DXBaseTable
        :columns="columns"
        :data="data"
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :selectable="true"
        :selectedRows="selectedRows"
        :actions="true"
        :striped="true"
        :hoverable="true"
        @sort="handleSort"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      >
        <template #cell-status="{ value }">
          <DXBadge :variant="getStatusVariant(value)">
            {{ value }}
          </DXBadge>
        </template>
      </DXBaseTable>
    \`
  })
}`,...(he=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const Ne=["SimpleTable","WithSort","WithSelection","WithActions","WithGrouping","WithCustomHeight","CustomCells","StripedTable","DenseTable","SmallSize","LargeSize","LoadingState","EmptyState","FullFeatured"];export{h as CustomCells,X as DenseTable,y as EmptyState,R as FullFeatured,w as LargeSize,f as LoadingState,p as SimpleTable,T as SmallSize,S as StripedTable,g as WithActions,v as WithCustomHeight,B as WithGrouping,b as WithSelection,D as WithSort,Ne as __namedExportsOrder,Ke as default};
