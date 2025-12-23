import{r as d}from"./vue.esm-bundler-Nfu98kES.js";import{D as a}from"./DXBaseTable-CzJLZi7r.js";import{_ as he}from"./DXBadge-BzIj_AZP.js";import"./DXIcon-DQdlGsO1.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./DXCheckbox-CMQTsUrW.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./DXDropdown-CoL0Joua.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DnL0EvPK.js";import"./DXDropdownItem-BNem-Fpn.js";import"./useClassComposition-Dym2pzZ_.js";import"./ChevronRightIcon-Bln9TrNK.js";import"./DXDropdownDivider-CazJIIB9.js";import"./DXDivider-DIbZiQd2.js";import"./useSpacing-BOHUzi8w.js";import"./DXLoader-B_ug0-wM.js";import"./DXSearchSelect-B4x4JO4n.js";import"./PencilIcon-BNDZDOj4.js";import"./TrashIcon-C_ge7fVs.js";const qe={title:"Molecules/DXBaseTable",component:a,tags:["autodocs"]},Te=[{key:"name",label:"Имя"},{key:"email",label:"Email"},{key:"role",label:"Роль"}],l=[{key:"id",label:"ID",width:"80px",sortable:!0},{key:"name",label:"Имя",sortable:!0},{key:"email",label:"Email",sortable:!0},{key:"role",label:"Роль",sortable:!0},{key:"status",label:"Статус",sortable:!0},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center"}],r=[{id:1,name:"Иван Иванов",email:"ivan@example.com",role:"Admin",status:"Active",age:32},{id:2,name:"Мария Петрова",email:"maria@example.com",role:"User",status:"Active",age:28},{id:3,name:"Петр Сидоров",email:"petr@example.com",role:"User",status:"Inactive",age:45},{id:4,name:"Анна Смирнова",email:"anna@example.com",role:"Manager",status:"Active",age:35},{id:5,name:"Дмитрий Козлов",email:"dmitry@example.com",role:"User",status:"Pending",age:29}],Xe=Array.from({length:20},(t,e)=>({id:e+1,name:`Пользователь ${e+1}`,email:`user${e+1}@example.com`,role:["Admin","User","Manager"][e%3],status:["Active","Inactive","Pending"][e%3],age:20+e%50,category:["Tech","Sales","Marketing"][e%3]})),p={render:()=>({components:{DXBaseTable:a},setup(){return{simpleColumns:Te,simpleData:r}},template:`
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
    `})},v={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r,handleEdit:n=>{alert(`Редактировать: ${n.name}`)},handleDelete:n=>{alert(`Удалить: ${n.name}`)}}},template:`
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
    `})},g={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:Xe}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
      />
    `})},S={render:()=>({components:{DXBaseTable:a,DXBadge:he},setup(){return{columns:l,data:r,getStatusVariant:e=>({Active:"success",Inactive:"neutral",Pending:"warning"})[e]||"neutral"}},template:`
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
    `})},h={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
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
    `})},w={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
      <DXBaseTable
        :columns="columns"
        :data="data"
        size="sm"
        :actions="true"
      />
    `})},T={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:r}},template:`
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
    `})},R={render:()=>({components:{DXBaseTable:a},setup(){return{columns:l,data:[]}},template:`
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
    `})},y={render:()=>({components:{DXBaseTable:a,DXBadge:he},setup(){const t=d("name"),e=d("asc"),n=d([]),o=d([...r]);return{columns:l,data:o,sortBy:t,sortDirection:e,selectedRows:n,handleSort:({column:s,direction:c})=>{t.value=s,e.value=c,o.value=[...o.value].sort((m,we)=>{const A=m[s],E=we[s],C=c==="asc"?1:-1;return A<E?-1*C:A>E?1*C:0})},handleRowSelect:({id:s,selected:c})=>{c?n.value.push(s):n.value=n.value.filter(m=>m!==s)},handleSelectAll:s=>{s?n.value=o.value.map(c=>c.id):n.value=[]},getStatusVariant:s=>({Active:"success",Inactive:"neutral",Pending:"warning"})[s]||"neutral"}},template:`
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
    `})};var k,I,W;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var L,M,U;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var G,O,j;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(j=(O=B.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,Y;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Y=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,se;X.parameters={...X.parameters,docs:{...(te=X.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(se=(ae=X.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,re,oe;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(re=w.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ce,ue,de;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ie,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var De,be,ve;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ve=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var Be,ge,Se;y.parameters={...y.parameters,docs:{...(Be=y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Se=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};const Je=["SimpleTable","WithSort","WithSelection","WithActions","WithGrouping","WithCustomHeight","CustomCells","StripedTable","DenseTable","SmallSize","LargeSize","LoadingState","EmptyState","FullFeatured"];export{S as CustomCells,X as DenseTable,R as EmptyState,y as FullFeatured,T as LargeSize,f as LoadingState,p as SimpleTable,w as SmallSize,h as StripedTable,v as WithActions,g as WithCustomHeight,B as WithGrouping,b as WithSelection,D as WithSort,Je as __namedExportsOrder,qe as default};
