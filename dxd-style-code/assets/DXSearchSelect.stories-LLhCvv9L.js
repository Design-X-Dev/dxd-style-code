import{_ as s}from"./DXSearchSelect-B4x4JO4n.js";import{r as l}from"./vue.esm-bundler-Nfu98kES.js";const b={title:"Molecules/DXSearchSelect",component:s,tags:["autodocs"]},n=[{value:"1",label:"John Doe"},{value:"2",label:"Jane Smith"},{value:"3",label:"Bob Johnson"},{value:"4",label:"Alice Williams"},{value:"5",label:"Charlie Brown"}],e={render:()=>({components:{DXSearchSelect:s},setup(){return{value:l(""),users:n}},template:'<DXSearchSelect v-model="value" :options="users" label="Select User" placeholder="Search users..." />'})},r={render:()=>({components:{DXSearchSelect:s},setup(){return{value:l("2"),users:n}},template:'<DXSearchSelect v-model="value" :options="users" label="Assigned To" />'})},a={render:()=>({components:{DXSearchSelect:s},setup(){return{value:l([]),users:n}},template:'<DXSearchSelect v-model="value" :options="users" label="Team Members" multiple />'})};var o,c,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSearchSelect
    },
    setup() {
      const value = ref('');
      return {
        value,
        users
      };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Select User" placeholder="Search users..." />'
  })
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSearchSelect
    },
    setup() {
      const value = ref('2');
      return {
        value,
        users
      };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Assigned To" />'
  })
}`,...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var i,d,v;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSearchSelect
    },
    setup() {
      const value = ref([]);
      return {
        value,
        users
      };
    },
    template: '<DXSearchSelect v-model="value" :options="users" label="Team Members" multiple />'
  })
}`,...(v=(d=a.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const X=["Default","WithValue","Multiple"];export{e as Default,a as Multiple,r as WithValue,X as __namedExportsOrder,b as default};
