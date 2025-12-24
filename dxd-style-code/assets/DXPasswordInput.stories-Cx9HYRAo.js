import{_ as o}from"./DXPasswordInput-DYj06sp-.js";import{r as t}from"./vue.esm-bundler-CzLKT_w4.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./EyeIcon-OVb4bIYJ.js";const W={title:"Molecules/DXPasswordInput",component:o,tags:["autodocs","category:form"]},s={render:()=>({components:{DXPasswordInput:o},setup(){return{password:t("")}},template:'<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'})},r={render:()=>({components:{DXPasswordInput:o},setup(){return{password:t("secretpassword")}},template:'<DXPasswordInput v-model="password" label="Password" />'})},e={render:()=>({components:{DXPasswordInput:o},setup(){return{password:t("")}},template:'<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'})};var n,p,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" placeholder="Enter password" />'
  })
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,m,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('secretpassword');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" />'
  })
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,w,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPasswordInput
    },
    setup() {
      const password = ref('');
      return {
        password
      };
    },
    template: '<DXPasswordInput v-model="password" label="Password" helper="At least 8 characters" />'
  })
}`,...(i=(w=e.parameters)==null?void 0:w.docs)==null?void 0:i.source}}};const E=["Default","WithValue","WithHelper"];export{s as Default,e as WithHelper,r as WithValue,E as __namedExportsOrder,W as default};
