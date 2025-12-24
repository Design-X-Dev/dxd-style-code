import{a as o,_ as t}from"./DXInputGroup-BdBflbt0.js";import{_ as r}from"./DXInput-BLwLEfW9.js";import{a as q,o as F,b as J,r as n}from"./vue.esm-bundler-CzLKT_w4.js";import{r as N}from"./MagnifyingGlassIcon-ssG6g_B7.js";import{r as X}from"./CurrencyDollarIcon-CZLhDret.js";import{r as i}from"./GlobeAltIcon-E9GBDZD6.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./DXIcon-BbhqsR95.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";function O(e,p){return F(),q("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[J("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"})])}const sn={title:"Atoms/DXInputAddon",component:o,tags:["autodocs","category:form"],argTypes:{icon:{control:!1,description:"Heroicon компонент для отображения иконки"}}},u={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{url:n("")}},template:`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    `})},l={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{price:n("")}},template:`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},d={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{search:n(""),MagnifyingGlassIcon:N}},template:`
      <DXInputGroup label="Search">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXInput v-model="search" placeholder="Search..." />
      </DXInputGroup>
    `})},a={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{email:n(""),AtSymbolIcon:O}},template:`
      <DXInputGroup label="Email">
        <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
        <DXInput v-model="email" type="email" placeholder="username" />
      </DXInputGroup>
    `})},c={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){return{amount:n(""),CurrencyDollarIcon:X}},template:`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},s={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n(""),p=n(""),A=n("");return{small:e,medium:p,large:A,GlobeAltIcon:i}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Small" size="sm">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="small" size="sm" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Medium (default)" size="md">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="medium" size="md" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Large" size="lg">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="large" size="lg" placeholder="example.com" />
        </DXInputGroup>
      </div>
    `})},I={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n("example.com"),p=n("100.00");return{url:e,price:p,GlobeAltIcon:i,CurrencyDollarIcon:X}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Disabled Website" disabled>
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" disabled placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Disabled Price" disabled>
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" disabled placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `})},m={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n("invalid-url"),p=n("abc");return{url:e,price:p,GlobeAltIcon:i,CurrencyDollarIcon:X}},template:`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Website URL" error="Invalid URL format">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" error="Invalid URL format" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price" error="Must be a number">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" error="Must be a number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    `})},D={render:()=>({components:{DXInputAddon:o,DXInputGroup:t,DXInput:r},setup(){const e=n(""),p=n(""),A=n(""),Z=n("");return{website:e,price:p,search:A,email:Z,GlobeAltIcon:i,CurrencyDollarIcon:X,MagnifyingGlassIcon:N,AtSymbolIcon:O}},template:`
      <div class="space-y-6 max-w-md">
        <DXInputGroup label="Website URL">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="website" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
        
        <DXInputGroup label="Search">
          <DXInputAddon :icon="MagnifyingGlassIcon" />
          <DXInput v-model="search" placeholder="Search..." />
        </DXInputGroup>
        
        <DXInputGroup label="Email">
          <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
          <DXInput v-model="email" type="email" placeholder="username" />
        </DXInputGroup>
      </div>
    `})};var G,b,h;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const url = ref('');
      return {
        url
      };
    },
    template: \`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    \`
  })
}`,...(h=(b=u.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,y,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const price = ref('');
      return {
        price
      };
    },
    template: \`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,g,x;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const search = ref('');
      return {
        search,
        MagnifyingGlassIcon
      };
    },
    template: \`
      <DXInputGroup label="Search">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXInput v-model="search" placeholder="Search..." />
      </DXInputGroup>
    \`
  })
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var U,w,C;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const email = ref('');
      return {
        email,
        AtSymbolIcon
      };
    },
    template: \`
      <DXInputGroup label="Email">
        <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
        <DXInput v-model="email" type="email" placeholder="username" />
      </DXInputGroup>
    \`
  })
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var M,W,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const amount = ref('');
      return {
        amount,
        CurrencyDollarIcon
      };
    },
    template: \`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var _,$,L;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      return {
        small,
        medium,
        large,
        GlobeAltIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Small" size="sm">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="small" size="sm" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Medium (default)" size="md">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="medium" size="md" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Large" size="lg">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="large" size="lg" placeholder="example.com" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var E,P,R;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const url = ref('example.com');
      const price = ref('100.00');
      return {
        url,
        price,
        GlobeAltIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Disabled Website" disabled>
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" disabled placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Disabled Price" disabled>
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" disabled placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    \`
  })
}`,...(R=(P=I.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var k,B,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const url = ref('invalid-url');
      const price = ref('abc');
      return {
        url,
        price,
        GlobeAltIcon,
        CurrencyDollarIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXInputGroup label="Website URL" error="Invalid URL format">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="url" error="Invalid URL format" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price" error="Must be a number">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" error="Must be a number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
      </div>
    \`
  })
}`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var V,j,H;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputAddon,
      DXInputGroup,
      DXInput
    },
    setup() {
      const website = ref('');
      const price = ref('');
      const search = ref('');
      const email = ref('');
      return {
        website,
        price,
        search,
        email,
        GlobeAltIcon,
        CurrencyDollarIcon,
        MagnifyingGlassIcon,
        AtSymbolIcon
      };
    },
    template: \`
      <div class="space-y-6 max-w-md">
        <DXInputGroup label="Website URL">
          <DXInputAddon :icon="GlobeAltIcon">https://</DXInputAddon>
          <DXInput v-model="website" placeholder="example.com" />
        </DXInputGroup>
        
        <DXInputGroup label="Price">
          <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
          <DXInput v-model="price" type="number" placeholder="0.00" />
          <DXInputAddon>USD</DXInputAddon>
        </DXInputGroup>
        
        <DXInputGroup label="Search">
          <DXInputAddon :icon="MagnifyingGlassIcon" />
          <DXInput v-model="search" placeholder="Search..." />
        </DXInputGroup>
        
        <DXInputGroup label="Email">
          <DXInputAddon :icon="AtSymbolIcon">@</DXInputAddon>
          <DXInput v-model="email" type="email" placeholder="username" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(H=(j=D.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const In=["Default","WithSuffix","WithIcon","WithIconAndText","BothSides","Sizes","Disabled","WithError","UseCases"];export{c as BothSides,u as Default,I as Disabled,s as Sizes,D as UseCases,m as WithError,d as WithIcon,a as WithIconAndText,l as WithSuffix,In as __namedExportsOrder,sn as default};
