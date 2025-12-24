import{_ as a}from"./DXDatePicker-CTqZmQCY.js";import{r as n}from"./vue.esm-bundler-CzLKT_w4.js";const X={title:"Molecules/DXDatePicker",component:a,tags:["autodocs"]},e={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("")}},template:'<DXDatePicker v-model="date" label="Date" />'})},t={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("2024-01-15")}},template:'<DXDatePicker v-model="date" label="Selected Date" />'})},r={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("")}},template:'<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'})};var c,s,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Date" />'
  })
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('2024-01-15');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Selected Date" />'
  })
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var D,i,u;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'
  })
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const h=["Default","WithValue","WithPlaceholder"];export{e as Default,r as WithPlaceholder,t as WithValue,h as __namedExportsOrder,X as default};
