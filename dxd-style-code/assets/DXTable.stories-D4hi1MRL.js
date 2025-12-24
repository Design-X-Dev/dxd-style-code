import{r as Ee}from"./vue.esm-bundler-CzLKT_w4.js";import{D as e}from"./DXTable-BAe1uulp.js";import{_ as ye}from"./DXButton-ChBdj9Dq.js";import{_ as Ce}from"./DXBadge-CxZg7KEC.js";import"./DXHeading-DwWVK5ab.js";import"./DXText-DW7ThwBY.js";import"./DXBaseTable-CQ7MQRkz.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXCheckbox-ztLTdipt.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./CheckIcon-CKhG8hn0.js";import"./DXDropdown-BME4Lvuj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./DXDropdownItem-CaNyf6TV.js";import"./useClassComposition-Dym2pzZ_.js";import"./ChevronRightIcon-3JO9-dGk.js";import"./DXDropdownDivider-CNjXQi0n.js";import"./DXDivider-Yv-XXyN6.js";import"./useSpacing-BOHUzi8w.js";import"./DXLoader-BMlBTXd1.js";import"./DXSearchSelect-u2V-p1fX.js";import"./PencilIcon-CpxY3S_F.js";import"./TrashIcon-NtQ19PgI.js";import"./DXTableToolbar-pEwJ_iLG.js";import"./DXInput-BLwLEfW9.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./DXIconWrapper-DA1ppaUf.js";import"./MagnifyingGlassIcon-ssG6g_B7.js";import"./ViewColumnsIcon-DiU4uUWi.js";import"./DXTablePagination-DjIiVqpo.js";import"./DXPagination-Du3-Wl5M.js";import"./ChevronLeftIcon-BRnQlYlk.js";import"./DXSelect-BFLeTBtC.js";import"./DXTags-D9TDb5EF.js";import"./XMarkIcon-DVfh0bwU.js";import"./XCircleIcon-D6eSwy5a.js";const Tn={title:"Organisms/DXTable",component:e,tags:["autodocs","category:data-display"]},Ae=[{key:"name",label:"Имя"},{key:"email",label:"Email"},{key:"role",label:"Роль"}],n=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0},{key:"status",label:"Статус",sortable:!0,filterable:!0},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center"}],w=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0,filterOptions:[{value:"Admin",label:"Администратор"},{value:"User",label:"Пользователь"},{value:"Manager",label:"Менеджер"}]},{key:"status",label:"Статус",sortable:!0,filterable:!0,filterOptions:[{value:"Active",label:"Активный"},{value:"Inactive",label:"Неактивный"},{value:"Pending",label:"В ожидании"}]},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center",filterable:!1}],l=[{id:1,name:"Иван Иванов",email:"ivan@example.com",role:"Admin",status:"Active",age:32},{id:2,name:"Мария Петрова",email:"maria@example.com",role:"User",status:"Active",age:28},{id:3,name:"Петр Сидоров",email:"petr@example.com",role:"User",status:"Inactive",age:45}],u=Array.from({length:50},(r,a)=>({id:a+1,name:`Пользователь ${a+1}`,email:`user${a+1}@example.com`,role:["Admin","User","Manager"][a%3],status:["Active","Inactive","Pending"][a%3],age:20+a%50,category:["Tech","Sales","Marketing"][a%3]})),o={render:()=>({components:{DXTable:e},setup(){return{simpleColumns:Ae,simpleData:l}},template:`
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    `})},s={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    `})},c={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    `})},i={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:u}},template:`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры в заголовках столбцов</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Кликните на иконку воронки в заголовке столбца, чтобы открыть фильтр.
          Активные фильтры отображаются в панели над таблицей.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},m={render:()=>({components:{DXTable:e},setup(){return{columns:w,data:u}},template:`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры с предопределенными опциями</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Некоторые столбцы имеют предопределенные опции фильтрации.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},d={render:()=>({components:{DXTable:e},setup(){return{columns:w,data:u}},template:`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Множественные активные фильтры</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Примените несколько фильтров одновременно. Все активные фильтры 
          отображаются в панели над таблицей с возможностью удаления.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},p={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    `})},b={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l,handleRowSelect:t=>{console.log("Row selected:",t)},handleSelectAll:t=>{console.log("Select all:",t)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    `})},g={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l,handleEdit:t=>{alert(`Редактировать: ${t.name}`)},handleDelete:t=>{alert(`Удалить: ${t.name}`)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `})},D={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    `})},h={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    `})},X={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    `})},T={render:()=>({components:{DXTable:e,DXButton:ye},setup(){const r=t=>{console.log("Row clicked:",t)},a=Ee("md");return{columns:w,data:u,handleRowClick:r,size:a}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :searchable="true"
        :filterable="true"
        :sortable="true"
        :paginated="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
        height="600px"
        :striped="true"
        @row-click="handleRowClick"
      >
        <template #toolbar-actions>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTable>
    `})},f={render:()=>({components:{DXTable:e,DXBadge:Ce,DXButton:ye},setup(){const r=Ee("md");return{columns:n,data:l,size:r}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :paginated="false"
        :actions="true"
      >
        <template #cell-status="{ value }">
          <DXBadge
            :variant="value === 'Active' ? 'success' : value === 'Inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </DXBadge>
        </template>
        
        <template #cell-role="{ value }">
          <DXText tag="span" weight="semibold" color="primary">{{ value }}</DXText>
        </template>

        <template #actions="{ row }">
          <div class="flex gap-2 justify-center">
            <DXButton :size="size" variant="ghost">Просмотр</DXButton>
            <DXButton :size="size" variant="primary">Изменить</DXButton>
          </div>
        </template>
      </DXTable>
    `})},z={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},v={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},B={render:()=>({components:{DXTable:e},setup(){return{columns:n,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},S={args:{size:"md",columns:n,data:u,searchable:!0,filterable:!1,sortable:!0,paginated:!0,selectable:!1,actions:!1,columnToggle:!1,height:"",stickyHeader:!0,striped:!1,bordered:!1,hoverable:!0,dense:!1,showToolbar:!0,defaultPageSize:10},argTypes:{size:{control:"select",options:["sm","md","lg"]},searchable:{control:"boolean"},filterable:{control:"boolean"},sortable:{control:"boolean"},paginated:{control:"boolean"},selectable:{control:"boolean"},actions:{control:"boolean"},columnToggle:{control:"boolean"},height:{control:"text"},stickyHeader:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},dense:{control:"boolean"},showToolbar:{control:"boolean"},defaultPageSize:{control:"select",options:[10,25,50,100]}},render:r=>({components:{DXTable:e},setup(){return{args:r}},template:`
      <DXTable v-bind="args" />
    `})};var E,y,C;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        simpleColumns,
        simpleData
      };
    },
    template: \`
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var A,x,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    \`
  })
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var W,F,H;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    \`
  })
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var P,R,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры в заголовках столбцов</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Кликните на иконку воронки в заголовке столбца, чтобы открыть фильтр.
          Активные фильтры отображаются в панели над таблицей.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var _,I,M;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Фильтры с предопределенными опциями</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Некоторые столбцы имеют предопределенные опции фильтрации.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var $,U,j;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <DXHeading level="3" size="lg" weight="semibold" class="mb-4">Множественные активные фильтры</DXHeading>
        <DXText tag="p" size="sm" color="muted" class="mb-4">
          Примените несколько фильтров одновременно. Все активные фильтры 
          отображаются в панели над таблицей с возможностью удаления.
        </DXText>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var G,L,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var J,K,N;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      const handleRowSelect = data => {
        console.log('Row selected:', data);
      };
      const handleSelectAll = data => {
        console.log('Select all:', data);
      };
      return {
        columns,
        data: simpleData,
        handleRowSelect,
        handleSelectAll
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    \`
  })
}`,...(N=(K=b.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,V,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
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
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    \`
  })
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,ne;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    \`
  })
}`,...(ne=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,le;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ue,re,oe;X.parameters={...X.parameters,docs:{...(ue=X.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(oe=(re=X.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ce,ie;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable,
      DXButton
    },
    setup() {
      const handleRowClick = row => {
        console.log('Row clicked:', row);
      };
      const size = ref('md');
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset,
        handleRowClick,
        size
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :searchable="true"
        :filterable="true"
        :sortable="true"
        :paginated="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
        height="600px"
        :striped="true"
        @row-click="handleRowClick"
      >
        <template #toolbar-actions>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTable>
    \`
  })
}`,...(ie=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,de,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable,
      DXBadge,
      DXButton
    },
    setup() {
      const size = ref('md');
      return {
        columns,
        data: simpleData,
        size
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :paginated="false"
        :actions="true"
      >
        <template #cell-status="{ value }">
          <DXBadge
            :variant="value === 'Active' ? 'success' : value === 'Inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </DXBadge>
        </template>
        
        <template #cell-role="{ value }">
          <DXText tag="span" weight="semibold" color="primary">{{ value }}</DXText>
        </template>

        <template #actions="{ row }">
          <div class="flex gap-2 justify-center">
            <DXButton :size="size" variant="ghost">Просмотр</DXButton>
            <DXButton :size="size" variant="primary">Изменить</DXButton>
          </div>
        </template>
      </DXTable>
    \`
  })
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var be,ge,De;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(De=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var he,Xe,Te;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(Te=(Xe=v.parameters)==null?void 0:Xe.docs)==null?void 0:Te.source}}};var fe,ze,ve;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(ve=(ze=B.parameters)==null?void 0:ze.docs)==null?void 0:ve.source}}};var Be,Se,we;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    size: 'md',
    columns,
    data: largeDataset,
    searchable: true,
    filterable: false,
    sortable: true,
    paginated: true,
    selectable: false,
    actions: false,
    columnToggle: false,
    height: '',
    stickyHeader: true,
    striped: false,
    bordered: false,
    hoverable: true,
    dense: false,
    showToolbar: true,
    defaultPageSize: 10
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    searchable: {
      control: 'boolean'
    },
    filterable: {
      control: 'boolean'
    },
    sortable: {
      control: 'boolean'
    },
    paginated: {
      control: 'boolean'
    },
    selectable: {
      control: 'boolean'
    },
    actions: {
      control: 'boolean'
    },
    columnToggle: {
      control: 'boolean'
    },
    height: {
      control: 'text'
    },
    stickyHeader: {
      control: 'boolean'
    },
    striped: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    hoverable: {
      control: 'boolean'
    },
    dense: {
      control: 'boolean'
    },
    showToolbar: {
      control: 'boolean'
    },
    defaultPageSize: {
      control: 'select',
      options: [10, 25, 50, 100]
    }
  },
  render: args => ({
    components: {
      DXTable
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXTable v-bind="args" />
    \`
  })
}`,...(we=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const fn=["SimpleTable","WithPagination","WithSearch","WithFilters","WithFilterOptions","WithMultipleFilters","WithSort","WithSelection","WithActions","WithColumnToggle","WithGrouping","WithCustomHeight","AdvancedTable","CustomCells","SmallSize","MediumSize","LargeSize","Playground"];export{T as AdvancedTable,f as CustomCells,B as LargeSize,v as MediumSize,S as Playground,o as SimpleTable,z as SmallSize,g as WithActions,D as WithColumnToggle,X as WithCustomHeight,m as WithFilterOptions,i as WithFilters,h as WithGrouping,d as WithMultipleFilters,s as WithPagination,c as WithSearch,b as WithSelection,p as WithSort,fn as __namedExportsOrder,Tn as default};
