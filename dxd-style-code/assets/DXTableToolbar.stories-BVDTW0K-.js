import{r as e}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as s}from"./DXTableToolbar-pEwJ_iLG.js";import{_ as m}from"./DXButton-ChBdj9Dq.js";import"./DXInput-BLwLEfW9.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./DXCheckbox-ztLTdipt.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckIcon-CKhG8hn0.js";import"./DXDropdown-BME4Lvuj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ChevronDownIcon-oXhPA-Up.js";import"./MagnifyingGlassIcon-ssG6g_B7.js";import"./ViewColumnsIcon-DiU4uUWi.js";const be={title:"Molecules/DXTableToolbar",component:s,tags:["autodocs"]},c=[{key:"id",label:"ID",visible:!0},{key:"name",label:"Имя",visible:!0},{key:"email",label:"Email",visible:!0},{key:"role",label:"Роль",visible:!1},{key:"status",label:"Статус",visible:!0}],i={render:()=>({components:{DXTableToolbar:s},setup(){return{searchQuery:e(""),sampleColumns:c}},template:`
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
    `})},p={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e("md");return{searchQuery:n,size:o}},template:`
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
    `})},b={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c),u=e("md");return{searchQuery:n,selectedCount:o,columns:r,size:u,handleToggle:t=>{const a=r.value.find(K=>K.key===t);a&&(a.visible=!a.visible)}}},template:`
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
    `})},y={render:()=>({components:{DXTableToolbar:s,DXButton:m},setup(){const n=e(""),o=e(3),r=e(c);return{searchQuery:n,selectedCount:o,columns:r,handleToggle:l=>{const t=r.value.find(a=>a.key===l);t&&(t.visible=!t.visible)}}},template:`
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
    `})},D={args:{size:"md",searchQuery:"",searchable:!0,selectedCount:0,columnToggle:!1,columns:c},argTypes:{size:{control:"select",options:["sm","md","lg"]},searchable:{control:"boolean"},selectedCount:{control:"number"},columnToggle:{control:"boolean"}},render:n=>({components:{DXTableToolbar:s},setup(){const o=e(n.searchQuery);return{args:n,searchQuery:o,handleToggle:u=>{console.log("Toggle column:",u)}}},template:`
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
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var E,F,_;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(F=p.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,W,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(W=b.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var M,x,L;T.parameters={...T.parameters,docs:{...(M=T.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(x=T.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var P,O,$;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var j,q,w;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(q=y.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var G,H,J;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=D.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Te=["Default","WithSelectionInfo","WithColumnToggle","WithCustomActions","FullFeatures","SmallSize","MediumSize","LargeSize","Playground"];export{i as Default,b as FullFeatures,y as LargeSize,h as MediumSize,D as Playground,T as SmallSize,d as WithColumnToggle,p as WithCustomActions,g as WithSelectionInfo,Te as __namedExportsOrder,be as default};
