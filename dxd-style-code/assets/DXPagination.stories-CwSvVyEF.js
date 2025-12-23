import{_ as e}from"./DXPagination-DJPZd1wo.js";import{r as s}from"./vue.esm-bundler-Nfu98kES.js";import"./DXIcon-DQdlGsO1.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./ChevronLeftIcon-CgJmgnPf.js";import"./ChevronRightIcon-Bln9TrNK.js";const E={title:"Molecules/DXPagination",component:e,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","md","lg"]}}},a={render:()=>({components:{DXPagination:e},setup(){return{page:s(1)}},template:'<DXPagination v-model="page" :total-pages="10" />'})},n={render:()=>({components:{DXPagination:e},setup(){return{page:s(5)}},template:'<DXPagination v-model="page" :total-pages="10" />'})},t={render:()=>({components:{DXPagination:e},setup(){return{page:s(15)}},template:'<DXPagination v-model="page" :total-pages="50" />'})},o={render:()=>({components:{DXPagination:e},setup(){return{page:s(1)}},template:`
      <div class="space-y-4">
        <DXPagination v-model="page" :total-pages="10" size="sm" />
        <DXPagination v-model="page" :total-pages="10" size="md" />
        <DXPagination v-model="page" :total-pages="10" size="lg" />
      </div>
    `})};var p,i,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />'
  })
}`,...(g=(i=a.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var m,c,l;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(5);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />'
  })
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,u,P;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(15);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="50" />'
  })
}`,...(P=(u=t.parameters)==null?void 0:u.docs)==null?void 0:P.source}}};var D,X,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: \`
      <div class="space-y-4">
        <DXPagination v-model="page" :total-pages="10" size="sm" />
        <DXPagination v-model="page" :total-pages="10" size="md" />
        <DXPagination v-model="page" :total-pages="10" size="lg" />
      </div>
    \`
  })
}`,...(v=(X=o.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};const O=["Default","MiddlePage","ManyPages","Sizes"];export{a as Default,t as ManyPages,n as MiddlePage,o as Sizes,O as __namedExportsOrder,E as default};
