import{_ as o,a as t}from"./DXInputGroup-BQwhhxm_.js";import{_ as p}from"./DXInput-DUVmhVHV.js";import{_ as q}from"./DXSelect-BtacXorN.js";import{_ as F}from"./DXTextarea-BIyhopr-.js";import{r as n}from"./vue.esm-bundler-Nfu98kES.js";import{r as i,a as u}from"./GlobeAltIcon-DUrTJk_D.js";import{r as H}from"./MagnifyingGlassIcon-DjnTFUrM.js";import"./useSize-D8MrabOp.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-Drk-51Wk.js";import"./DXIcon-DQdlGsO1.js";import"./useAnimation-CL8rPOHu.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./DXIconWrapper-DKYfCJ0D.js";import"./ChevronDownIcon-DnL0EvPK.js";const sn={title:"Molecules/DXInputGroup",component:o,tags:["autodocs"]},l={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{url:n("")}},template:`
      <DXInputGroup label="Website">
        <DXInputAddon>https://</DXInputAddon>
        <DXInput v-model="url" placeholder="example.com" />
      </DXInputGroup>
    `})},d={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{price:n("")}},template:`
      <DXInputGroup label="Price">
        <DXInput v-model="price" type="number" placeholder="0.00" />
        <DXInputAddon>USD</DXInputAddon>
      </DXInputGroup>
    `})},a={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){return{amount:n(""),CurrencyDollarIcon:i}},template:`
      <DXInputGroup label="Amount">
        <DXInputAddon :icon="CurrencyDollarIcon">$</DXInputAddon>
        <DXInput v-model="amount" type="number" placeholder="0.00" />
        <DXInputAddon>.00</DXInputAddon>
      </DXInputGroup>
    `})},c={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXSelect:q},setup(){return{country:n(""),countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"de",label:"Germany"}],GlobeAltIcon:u}},template:`
      <DXInputGroup label="Country">
        <DXInputAddon :icon="GlobeAltIcon" />
        <DXSelect v-model="country" :options="countries" placeholder="Select country" />
      </DXInputGroup>
    `})},s={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXTextarea:F},setup(){return{message:n(""),MagnifyingGlassIcon:H}},template:`
      <DXInputGroup label="Message">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXTextarea v-model="message" placeholder="Enter your message..." :rows="4" />
      </DXInputGroup>
    `})},I={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n(""),r=n(""),b=n("");return{small:e,medium:r,large:b,GlobeAltIcon:u}},template:`
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
    `})},D={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n("example.com"),r=n("100.00");return{url:e,price:r,GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
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
    `})},m={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p},setup(){const e=n("invalid-url"),r=n("abc");return{url:e,price:r,GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
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
    `})},X={render:()=>({components:{DXInputGroup:o,DXInputAddon:t,DXInput:p,DXSelect:q},setup(){const e=n(""),r=n(""),b=n("");return{website:e,price:r,country:b,countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"}],GlobeAltIcon:u,CurrencyDollarIcon:i}},template:`
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
        
        <DXInputGroup label="Country">
          <DXInputAddon :icon="GlobeAltIcon" />
          <DXSelect v-model="country" :options="countries" placeholder="Select country" />
        </DXInputGroup>
      </div>
    `})};var A,G,v;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
}`,...(v=(G=l.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};var y,h,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
}`,...(f=(h=d.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,S,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
        <DXInputAddon>.00</DXInputAddon>
      </DXInputGroup>
    \`
  })
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var C,U,_;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXSelect
    },
    setup() {
      const country = ref('');
      const countries = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }, {
        value: 'de',
        label: 'Germany'
      }];
      return {
        country,
        countries,
        GlobeAltIcon
      };
    },
    template: \`
      <DXInputGroup label="Country">
        <DXInputAddon :icon="GlobeAltIcon" />
        <DXSelect v-model="country" :options="countries" placeholder="Select country" />
      </DXInputGroup>
    \`
  })
}`,...(_=(U=c.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var W,w,z;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXTextarea
    },
    setup() {
      const message = ref('');
      return {
        message,
        MagnifyingGlassIcon
      };
    },
    template: \`
      <DXInputGroup label="Message">
        <DXInputAddon :icon="MagnifyingGlassIcon" />
        <DXTextarea v-model="message" placeholder="Enter your message..." :rows="4" />
      </DXInputGroup>
    \`
  })
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var $,M,L;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
}`,...(L=(M=I.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var P,R,T;D.parameters={...D.parameters,docs:{...(P=D.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
}`,...(T=(R=D.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var E,k,K;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
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
}`,...(K=(k=m.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var B,O,j;X.parameters={...X.parameters,docs:{...(B=X.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputGroup,
      DXInputAddon,
      DXInput,
      DXSelect
    },
    setup() {
      const website = ref('');
      const price = ref('');
      const country = ref('');
      const countries = [{
        value: 'us',
        label: 'United States'
      }, {
        value: 'uk',
        label: 'United Kingdom'
      }, {
        value: 'ca',
        label: 'Canada'
      }];
      return {
        website,
        price,
        country,
        countries,
        GlobeAltIcon,
        CurrencyDollarIcon
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
        
        <DXInputGroup label="Country">
          <DXInputAddon :icon="GlobeAltIcon" />
          <DXSelect v-model="country" :options="countries" placeholder="Select country" />
        </DXInputGroup>
      </div>
    \`
  })
}`,...(j=(O=X.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const In=["Default","WithSuffix","BothSides","WithSelect","WithTextarea","Sizes","Disabled","WithError","UseCases"];export{a as BothSides,l as Default,D as Disabled,I as Sizes,X as UseCases,m as WithError,c as WithSelect,d as WithSuffix,s as WithTextarea,In as __namedExportsOrder,sn as default};
