import{r as n}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as t}from"./DXTablePagination-DjIiVqpo.js";import"./DXPagination-Du3-Wl5M.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ChevronLeftIcon-BRnQlYlk.js";import"./ChevronRightIcon-3JO9-dGk.js";import"./DXSelect-BFLeTBtC.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./ChevronDownIcon-oXhPA-Up.js";const re={title:"Molecules/DXTablePagination",component:t,tags:["autodocs"]},r={render:()=>({components:{DXTablePagination:t},setup(){const e=n(1),a=n(10);return{currentPage:e,pageSize:a}},template:`
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
    `})},s={render:()=>({components:{DXTablePagination:t},setup(){const e=n(42),a=n(50);return{currentPage:e,pageSize:a}},template:`
      <DXTablePagination
        v-model:currentPage="currentPage"
        v-model:pageSize="pageSize"
        :totalPages="200"
        :pageSizeOptions="[10, 25, 50, 100, 200]"
        :from="2051"
        :to="2100"
        :total="10000"
      />
    `})},i={render:()=>({components:{DXTablePagination:t},setup(){const e=n(1),a=n(10);return{currentPage:e,pageSize:a,handlePageChange:u=>{console.log("Page changed to:",u)},handlePageSizeChange:u=>{console.log("Page size changed to:",u),e.value=1}}},template:`
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
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var b,f,v;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var D,T,X;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(X=(T=g.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};var h,C,M;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(M=(C=s.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var L,_,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var y,x,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(x=c.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var E,j,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(j=p.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,w,A;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var B,F,G;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const oe=["Default","MiddlePage","LastPage","LargeDataset","Interactive","SmallSize","MediumSize","LargeSize","Playground"];export{r as Default,i as Interactive,s as LargeDataset,l as LargeSize,g as LastPage,p as MediumSize,o as MiddlePage,m as Playground,c as SmallSize,oe as __namedExportsOrder,re as default};
