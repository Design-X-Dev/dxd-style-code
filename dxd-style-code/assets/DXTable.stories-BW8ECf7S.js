import{r as Ee}from"./vue.esm-bundler-C1fUoNF-.js";import{D as e}from"./DXTable-CEZc5DF4.js";import{_ as ye}from"./DXButton-DzgLKRkE.js";import{_ as Ce}from"./DXBadge-Cnl9-G8k.js";import"./DXHeading-S6mljWwV.js";import"./DXText-Bu-Qlv6N.js";import"./DXBaseTable-DOauzPC8.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXCheckbox-DQusejYU.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./CheckIcon-B1lKtPCn.js";import"./DXDropdown-DAfwPhYF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDropdownItem-sgbg46Q-.js";import"./useClassComposition-Dym2pzZ_.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXDropdownDivider-DVs74pqL.js";import"./DXDivider-Cu8D1wP6.js";import"./useSpacing-BOHUzi8w.js";import"./DXLoader-DAWlORDv.js";import"./DXSearchSelect-Cl2oWNWm.js";import"./FunnelIcon-Ba3wLEuE.js";import"./PencilIcon-BVI5idyX.js";import"./TrashIcon-DHw2oPM1.js";import"./DXTableToolbar-zNIf53Pf.js";import"./DXInput-BG2R0LGs.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./MagnifyingGlassIcon-DKNfedfR.js";import"./ViewColumnsIcon-DRckdqun.js";import"./DXTablePagination-C1NyvhCh.js";import"./DXPagination-C9wlZ4pU.js";import"./DXNav-rdhJaqaA.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./DXSelect-CgmhnMxb.js";import"./DXTags-CLVQQJAQ.js";import"./XMarkIcon-DuL0Z66U.js";import"./XCircleIcon-CCzMyyl7.js";const fa={title:"Organisms/DXTable",component:e,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXTable

Полнофункциональная таблица данных с поддержкой сортировки, фильтрации, поиска, пагинации и выбора строк.

## Назначение

DXTable предоставляет комплексное решение для отображения и управления табличными данными. Компонент поддерживает
локальную и API-режимы работы, сортировку, фильтрацию, поиск, пагинацию, выбор строк, группировку и множество
настроек визуального оформления.

## Архитектура

### Использует
- \`DXBaseTable\` - базовая таблица для отображения данных
- \`DXTableToolbar\` - панель инструментов с поиском и переключением колонок
- \`DXTablePagination\` - пагинация с выбором размера страницы
- \`DXTableFiltersPanel\` - панель активных фильтров
- Composables:
  - \`useTableData\` - управление данными (локальные/API)
  - \`useTableSort\` - сортировка данных
  - \`useTableFilter\` - фильтрация и поиск
  - \`useTablePagination\` - пагинация
  - \`useTableSelection\` - выбор строк
  - \`useTableColumns\` - управление видимостью колонок

### Используется в
- Списки пользователей
- Таблицы заказов
- Административные панели
- Отчеты и аналитика
- Любые места, требующие отображения структурированных данных

## Внутренняя логика

### Режимы работы с данными
- **local** (по умолчанию): Данные обрабатываются локально, все операции (сортировка, фильтрация, пагинация) выполняются на клиенте
- **api**: Данные загружаются с сервера, операции выполняются на сервере через API запросы

### Структура колонок
Каждая колонка может иметь:
- \`key\` - ключ поля в данных
- \`label\` - заголовок колонки
- \`sortable\` - можно ли сортировать
- \`filterable\` - можно ли фильтровать
- \`filterOptions\` - опции фильтра (если не указаны, собираются автоматически из данных)
- \`width\` - ширина колонки
- \`align\` - выравнивание (left, center, right)
- \`format\` - функция форматирования значения

### Сортировка
- Поддерживает сортировку по любой колонке с \`sortable={true}\`
- Три состояния: нет сортировки → asc → desc → нет сортировки
- Можно задать начальную сортировку через \`defaultSort\`
- Событие \`sort\` при изменении сортировки

### Фильтрация
- Поддерживает фильтрацию по любой колонке с \`filterable={true}\`
- Опции фильтра могут быть заданы явно через \`filterOptions\` или собираются автоматически
- Панель активных фильтров показывает примененные фильтры
- Событие \`filter\` при изменении фильтров

### Поиск
- Глобальный поиск по всем колонкам (если \`searchable={true}\`)
- Поиск выполняется в реальном времени
- Отображается в тулбаре

### Пагинация
- Поддерживает пагинацию (если \`paginated={true}\`)
- Настраиваемый размер страницы (по умолчанию 10)
- Опции размера страницы: [10, 25, 50, 100] (настраивается)
- События: \`page-change\`, \`page-size-change\`

### Выбор строк
- Поддерживает выбор строк (если \`selectable={true}\`)
- Чекбокс в заголовке для выбора всех
- События: \`row-select\`, \`select-all\`, \`selection-clear\`

### Группировка
- Поддерживает группировку по колонке (через \`groupBy\` prop)
- Группы отображаются с заголовками

## Особенности

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.

### Визуальные опции
- **stickyHeader** - фиксированный заголовок при прокрутке (по умолчанию true)
- **striped** - чередующиеся цвета строк
- **bordered** - границы вокруг ячеек
- **hoverable** - эффект при наведении на строку (по умолчанию true)
- **dense** - компактный режим

### Тулбар
- Поиск (если \`searchable={true}\`)
- Переключение видимости колонок (если \`columnToggle={true}\`)
- Слот \`toolbar-actions\` для кастомных действий
- Счетчик выбранных строк

### Слоты
- \`toolbar-actions\` - действия в тулбаре
- Слоты для кастомизации ячеек: \`cell-[columnKey]\`
- Слоты для кастомизации заголовков: \`header-[columnKey]\`
- Слоты для действий строк: \`actions\`

### События
- \`row-click\` - клик по строке
- \`row-select\` - выбор строки
- \`select-all\` - выбор всех строк
- \`sort\` - изменение сортировки
- \`filter\` - изменение фильтров
- \`page-change\` - изменение страницы
- \`page-size-change\` - изменение размера страницы
- \`edit\` - редактирование строки
- \`delete\` - удаление строки
- \`data-loaded\` - данные загружены (для API режима)
- \`error\` - ошибка загрузки данных
        `}}}},Ae=[{key:"name",label:"Имя"},{key:"email",label:"Email"},{key:"role",label:"Роль"}],a=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0},{key:"status",label:"Статус",sortable:!0,filterable:!0},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center"}],w=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0,filterOptions:[{value:"Admin",label:"Администратор"},{value:"User",label:"Пользователь"},{value:"Manager",label:"Менеджер"}]},{key:"status",label:"Статус",sortable:!0,filterable:!0,filterOptions:[{value:"Active",label:"Активный"},{value:"Inactive",label:"Неактивный"},{value:"Pending",label:"В ожидании"}]},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center",filterable:!1}],l=[{id:1,name:"Иван Иванов",email:"ivan@example.com",role:"Admin",status:"Active",age:32},{id:2,name:"Мария Петрова",email:"maria@example.com",role:"User",status:"Active",age:28},{id:3,name:"Петр Сидоров",email:"petr@example.com",role:"User",status:"Inactive",age:45}],u=Array.from({length:50},(r,n)=>({id:n+1,name:`Пользователь ${n+1}`,email:`user${n+1}@example.com`,role:["Admin","User","Manager"][n%3],status:["Active","Inactive","Pending"][n%3],age:20+n%50,category:["Tech","Sales","Marketing"][n%3]})),o={render:()=>({components:{DXTable:e},setup(){return{simpleColumns:Ae,simpleData:l}},template:`
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    `})},s={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    `})},c={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    `})},i={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:u}},template:`
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
    `})},p={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    `})},b={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l,handleRowSelect:t=>{console.log("Row selected:",t)},handleSelectAll:t=>{console.log("Select all:",t)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    `})},g={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l,handleEdit:t=>{alert(`Редактировать: ${t.name}`)},handleDelete:t=>{alert(`Удалить: ${t.name}`)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `})},D={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    `})},h={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    `})},T={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    `})},X={render:()=>({components:{DXTable:e,DXButton:ye},setup(){const r=t=>{console.log("Row clicked:",t)},n=Ee("md");return{columns:w,data:u,handleRowClick:r,size:n}},template:`
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
    `})},f={render:()=>({components:{DXTable:e,DXBadge:Ce,DXButton:ye},setup(){const r=Ee("md");return{columns:a,data:l,size:r}},template:`
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
    `})},z={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},v={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},B={render:()=>({components:{DXTable:e},setup(){return{columns:a,data:l}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},S={args:{size:"md",columns:a,data:u,searchable:!0,filterable:!1,sortable:!0,paginated:!0,selectable:!1,actions:!1,columnToggle:!1,height:"",stickyHeader:!0,striped:!1,bordered:!1,hoverable:!0,dense:!1,showToolbar:!0,defaultPageSize:10},argTypes:{size:{control:"select",options:["sm","md","lg"]},searchable:{control:"boolean"},filterable:{control:"boolean"},sortable:{control:"boolean"},paginated:{control:"boolean"},selectable:{control:"boolean"},actions:{control:"boolean"},columnToggle:{control:"boolean"},height:{control:"text"},stickyHeader:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},dense:{control:"boolean"},showToolbar:{control:"boolean"},defaultPageSize:{control:"select",options:[10,25,50,100]}},render:r=>({components:{DXTable:e},setup(){return{args:r}},template:`
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
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var A,k,x;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var F,P,W;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var H,R,O;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var I,_,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var $,U,j;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var G,K,L;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(K=p.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var q,J,N;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(J=b.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,V,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var Z,ee,ae;D.parameters={...D.parameters,docs:{...(Z=D.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,le;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(te=h.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ue,re,oe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ce,ie;X.parameters={...X.parameters,docs:{...(se=X.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ce=X.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var me,de,pe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(De=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var he,Te,Xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Xe=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:Xe.source}}};var fe,ze,ve;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const za=["SimpleTable","WithPagination","WithSearch","WithFilters","WithFilterOptions","WithMultipleFilters","WithSort","WithSelection","WithActions","WithColumnToggle","WithGrouping","WithCustomHeight","AdvancedTable","CustomCells","SmallSize","MediumSize","LargeSize","Playground"];export{X as AdvancedTable,f as CustomCells,B as LargeSize,v as MediumSize,S as Playground,o as SimpleTable,z as SmallSize,g as WithActions,D as WithColumnToggle,T as WithCustomHeight,m as WithFilterOptions,i as WithFilters,h as WithGrouping,d as WithMultipleFilters,s as WithPagination,c as WithSearch,b as WithSelection,p as WithSort,za as __namedExportsOrder,fa as default};
