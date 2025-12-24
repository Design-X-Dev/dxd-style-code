import{r as n}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as t}from"./DXTablePagination-C1NyvhCh.js";import"./DXPagination-C9wlZ4pU.js";import"./DXButton-DzgLKRkE.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./DXNav-rdhJaqaA.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXSelect-CgmhnMxb.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ChevronDownIcon-DF-4rgxU.js";const se={title:"Molecules/DXTablePagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXTablePagination

Компонент пагинации для таблиц с информацией о результатах и выбором размера страницы.

## Назначение

DXTablePagination предоставляет комплексную пагинацию для таблиц данных, объединяя
навигацию по страницам, информацию о количестве результатов и выбор размера страницы
в единый компонент.

## Архитектура

### Использует
- \`DXPagination\` - для навигации по страницам
- \`DXSelect\` - для выбора размера страницы

### Используется в
- \`DXTable\` - пагинация таблицы
- Таблицы данных с большим количеством записей
- Административные панели

## Внутренняя логика

### Информация о результатах
Отображается в формате "Показано X-Y из Z":
- \`from\` - номер первого элемента на странице
- \`to\` - номер последнего элемента на странице
- \`total\` - общее количество элементов

### Навигация по страницам
Использует \`DXPagination\` для навигации:
- \`currentPage\` - текущая страница (v-model)
- \`totalPages\` - общее количество страниц

### Выбор размера страницы
Использует \`DXSelect\` для выбора:
- \`pageSize\` - текущий размер страницы (v-model)
- \`pageSizeOptions\` - опции размера (по умолчанию [10, 25, 50, 100])
- Формат отображения: "N / стр"

### Размеры
Поддерживает 3 размера:
- **sm** - маленький (text-xs)
- **md** - средний (text-sm, по умолчанию)
- **lg** - большой (text-base)

## Особенности

### v-model
Поддерживает двустороннее связывание:
- \`v-model:currentPage\` - для текущей страницы
- \`v-model:pageSize\` - для размера страницы

### События
- \`@update:currentPage\` - изменение текущей страницы
- \`@update:pageSize\` - изменение размера страницы

### Адаптивность
Размер текста автоматически адаптируется к размеру компонента для единообразия.
        `}}}},r={render:()=>({components:{DXTablePagination:t},setup(){const e=n(1),a=n(10);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="1"
        :to="10"
        :total="100"
      />
    `})},o={render:()=>({components:{DXTablePagination:t},setup(){const e=n(5),a=n(25);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="20"
        :from="101"
        :to="125"
        :total="500"
      />
    `})},g={render:()=>({components:{DXTablePagination:t},setup(){const e=n(10),a=n(10);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="91"
        :to="100"
        :total="100"
      />
    `})},i={render:()=>({components:{DXTablePagination:t},setup(){const e=n(42),a=n(50);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="200"
        :pageSizeOptions="[10, 25, 50, 100, 200]"
        :from="2051"
        :to="2100"
        :total="10000"
      />
    `})},s={render:()=>({components:{DXTablePagination:t},setup(){const e=n(1),a=n(10);return{currentPage:e,pageSize:a,handlePageChange:u=>{console.log("Page changed to:",u)},handlePageSizeChange:u=>{console.log("Page size changed to:",u),e.value=1}}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="50"
        :from="(currentPage - 1) * pageSize + 1"
        :to="Math.min(currentPage * pageSize, 500)"
        :total="500"
        @update:currentPage="handlePageChange"
        @update:pageSize="handlePageSizeChange"
      />
    `})},c={render:()=>({components:{DXTablePagination:t},setup(){const e=n(5),a=n(10);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="sm"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `})},p={render:()=>({components:{DXTablePagination:t},setup(){const e=n(5),a=n(10);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="md"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `})},l={render:()=>({components:{DXTablePagination:t},setup(){const e=n(5),a=n(10);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="lg"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    `})},m={args:{size:"md",currentPage:1,totalPages:10,pageSize:10,pageSizeOptions:[10,25,50,100],from:1,to:10,total:100},argTypes:{size:{control:"select",options:["sm","md","lg"]},currentPage:{control:"number"},totalPages:{control:"number"},pageSize:{control:"select",options:[10,25,50,100]},from:{control:"number"},to:{control:"number"},total:{control:"number"}},render:e=>({components:{DXTablePagination:t},setup(){const a=n(e.currentPage),P=n(e.pageSize);return{args:e,currentPage:a,pageSize:P}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        v-bind="args"
      />
    `})};var d,z,S;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(1);
      const pageSize = ref(10);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="1"
        :to="10"
        :total="100"
      />
    \`
  })
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,D,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(25);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="20"
        :from="101"
        :to="125"
        :total="500"
      />
    \`
  })
}`,...(v=(D=o.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var f,X,T;g.parameters={...g.parameters,docs:{...(f=g.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(10);
      const pageSize = ref(10);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="10"
        :from="91"
        :to="100"
        :total="100"
      />
    \`
  })
}`,...(T=(X=g.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var h,C,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(42);
      const pageSize = ref(50);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="200"
        :pageSizeOptions="[10, 25, 50, 100, 200]"
        :from="2051"
        :to="2100"
        :total="10000"
      />
    \`
  })
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var x,L,O;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(1);
      const pageSize = ref(10);
      const handlePageChange = page => {
        console.log('Page changed to:', page);
      };
      const handlePageSizeChange = size => {
        console.log('Page size changed to:', size);
        currentPage.value = 1;
      };
      return {
        currentPage,
        pageSize,
        handlePageChange,
        handlePageSizeChange
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="50"
        :from="(currentPage - 1) * pageSize + 1"
        :to="Math.min(currentPage * pageSize, 500)"
        :total="500"
        @update:currentPage="handlePageChange"
        @update:pageSize="handlePageSizeChange"
      />
    \`
  })
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var _,y,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="sm"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    \`
  })
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var E,N,Y;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="md"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    \`
  })
}`,...(Y=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var Z,j,k;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(5);
      const pageSize = ref(10);
      return {
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        size="lg"
        :totalPages="20"
        :from="41"
        :to="50"
        :total="200"
      />
    \`
  })
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,w,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
    from: 1,
    to: 10,
    total: 100
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    currentPage: {
      control: 'number'
    },
    totalPages: {
      control: 'number'
    },
    pageSize: {
      control: 'select',
      options: [10, 25, 50, 100]
    },
    from: {
      control: 'number'
    },
    to: {
      control: 'number'
    },
    total: {
      control: 'number'
    }
  },
  render: args => ({
    components: {
      DXTablePagination
    },
    setup() {
      const currentPage = ref(args.currentPage);
      const pageSize = ref(args.pageSize);
      return {
        args,
        currentPage,
        pageSize
      };
    },
    template: \`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        v-bind="args"
      />
    \`
  })
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const ce=["Default","MiddlePage","LastPage","LargeDataset","Interactive","SmallSize","MediumSize","LargeSize","Playground"];export{r as Default,s as Interactive,i as LargeDataset,l as LargeSize,g as LastPage,p as MediumSize,o as MiddlePage,m as Playground,c as SmallSize,ce as __namedExportsOrder,se as default};
