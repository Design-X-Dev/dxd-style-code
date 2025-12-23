import{_ as l}from"./DXSelect-BtacXorN.js";import{a as W,b as Y,o as $,r as e}from"./vue.esm-bundler-Nfu98kES.js";import{a as _,r as R}from"./GlobeAltIcon-DUrTJk_D.js";import{r as J}from"./MapPinIcon-BFV8g3FK.js";import{r as K,a as j}from"./LanguageIcon-Rffm2JyW.js";import"./useSize-D8MrabOp.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-Drk-51Wk.js";import"./DXIcon-DQdlGsO1.js";import"./useAnimation-CL8rPOHu.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./DXIconWrapper-DKYfCJ0D.js";import"./ChevronDownIcon-DnL0EvPK.js";function H(n,r){return $(),W("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[Y("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"})])}const ie={title:"Molecules/DXSelect",component:l,tags:["autodocs"]},m=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"}],o={render:()=>({components:{DXSelect:l},setup(){return{value:e(""),options:m}},template:'<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />'})},a={render:()=>({components:{DXSelect:l},setup(){return{value:e("banana"),options:m}},template:'<DXSelect v-model="value" :options="options" label="Fruit" />'})},c={render:()=>({components:{DXSelect:l},setup(){return{value:e("apple"),options:m}},template:'<DXSelect v-model="value" :options="options" label="Disabled" disabled />'})},t={render:()=>({components:{DXSelect:l},setup(){return{country:e(""),countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],GlobeAltIcon:_}},template:`
      <DXSelect
        v-model="country"
        label="Country"
        :options="countries"
        :prefix-icon="GlobeAltIcon"
        placeholder="Select country"
      />
    `})},s={render:()=>({components:{DXSelect:l},setup(){return{currency:e(""),currencies:[{value:"usd",label:"USD - US Dollar"},{value:"eur",label:"EUR - Euro"},{value:"gbp",label:"GBP - British Pound"},{value:"jpy",label:"JPY - Japanese Yen"}],CurrencyDollarIcon:R}},template:`
      <DXSelect
        v-model="currency"
        label="Currency"
        :options="currencies"
        :prefix-icon="CurrencyDollarIcon"
        placeholder="Select currency"
      />
    `})},i={render:()=>({components:{DXSelect:l},setup(){return{city:e(""),cities:[{value:"nyc",label:"New York"},{value:"lon",label:"London"},{value:"tok",label:"Tokyo"},{value:"par",label:"Paris"}],MapPinIcon:J}},template:`
      <DXSelect
        v-model="city"
        label="City"
        :options="cities"
        :prefix-icon="MapPinIcon"
        placeholder="Select city"
      />
    `})},u={render:()=>({components:{DXSelect:l},setup(){return{form:e({language:"",country:"",currency:"",role:""}),languages:[{value:"en",label:"English"},{value:"es",label:"Spanish"},{value:"fr",label:"French"}],countries:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"}],currencies:[{value:"usd",label:"USD"},{value:"eur",label:"EUR"},{value:"gbp",label:"GBP"}],roles:[{value:"dev",label:"Developer"},{value:"des",label:"Designer"},{value:"pm",label:"Product Manager"}],LanguageIcon:K,GlobeAltIcon:_,CurrencyDollarIcon:R,BriefcaseIcon:H}},template:`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="form.language"
          label="Language"
          :options="languages"
          :prefix-icon="LanguageIcon"
          placeholder="Select language"
        />
        
        <DXSelect
          v-model="form.country"
          label="Country"
          :options="countries"
          :prefix-icon="GlobeAltIcon"
          placeholder="Select country"
        />
        
        <DXSelect
          v-model="form.currency"
          label="Currency"
          :options="currencies"
          :prefix-icon="CurrencyDollarIcon"
          placeholder="Select currency"
        />
        
        <DXSelect
          v-model="form.role"
          label="Role"
          :options="roles"
          :prefix-icon="BriefcaseIcon"
          placeholder="Select role"
        />
      </div>
    `})},p={render:()=>({components:{DXSelect:l},setup(){const n=e(""),r=e(""),d=e("");return{small:n,medium:r,large:d,priorities:[{value:"low",label:"Low"},{value:"med",label:"Medium"},{value:"high",label:"High"}],FlagIcon:j}},template:`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="small"
          size="sm"
          label="Small"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="medium"
          size="md"
          label="Medium (default)"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="large"
          size="lg"
          label="Large"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
      </div>
    `})};var v,b,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Choose fruit" placeholder="Select..." />'
  })
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('banana');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Fruit" />'
  })
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var D,h,X;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const value = ref('apple');
      return {
        value,
        options
      };
    },
    template: '<DXSelect v-model="value" :options="options" label="Disabled" disabled />'
  })
}`,...(X=(h=c.parameters)==null?void 0:h.docs)==null?void 0:X.source}}};var I,x,C;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
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
      }, {
        value: 'fr',
        label: 'France'
      }];
      return {
        country,
        countries,
        GlobeAltIcon
      };
    },
    template: \`
      <DXSelect
        v-model="country"
        label="Country"
        :options="countries"
        :prefix-icon="GlobeAltIcon"
        placeholder="Select country"
      />
    \`
  })
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var P,U,k;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const currency = ref('');
      const currencies = [{
        value: 'usd',
        label: 'USD - US Dollar'
      }, {
        value: 'eur',
        label: 'EUR - Euro'
      }, {
        value: 'gbp',
        label: 'GBP - British Pound'
      }, {
        value: 'jpy',
        label: 'JPY - Japanese Yen'
      }];
      return {
        currency,
        currencies,
        CurrencyDollarIcon
      };
    },
    template: \`
      <DXSelect
        v-model="currency"
        label="Currency"
        :options="currencies"
        :prefix-icon="CurrencyDollarIcon"
        placeholder="Select currency"
      />
    \`
  })
}`,...(k=(U=s.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var w,F,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const city = ref('');
      const cities = [{
        value: 'nyc',
        label: 'New York'
      }, {
        value: 'lon',
        label: 'London'
      }, {
        value: 'tok',
        label: 'Tokyo'
      }, {
        value: 'par',
        label: 'Paris'
      }];
      return {
        city,
        cities,
        MapPinIcon
      };
    },
    template: \`
      <DXSelect
        v-model="city"
        label="City"
        :options="cities"
        :prefix-icon="MapPinIcon"
        placeholder="Select city"
      />
    \`
  })
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var G,A,L;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const form = ref({
        language: '',
        country: '',
        currency: '',
        role: ''
      });
      const languages = [{
        value: 'en',
        label: 'English'
      }, {
        value: 'es',
        label: 'Spanish'
      }, {
        value: 'fr',
        label: 'French'
      }];
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
      const currencies = [{
        value: 'usd',
        label: 'USD'
      }, {
        value: 'eur',
        label: 'EUR'
      }, {
        value: 'gbp',
        label: 'GBP'
      }];
      const roles = [{
        value: 'dev',
        label: 'Developer'
      }, {
        value: 'des',
        label: 'Designer'
      }, {
        value: 'pm',
        label: 'Product Manager'
      }];
      return {
        form,
        languages,
        countries,
        currencies,
        roles,
        LanguageIcon,
        GlobeAltIcon,
        CurrencyDollarIcon,
        BriefcaseIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="form.language"
          label="Language"
          :options="languages"
          :prefix-icon="LanguageIcon"
          placeholder="Select language"
        />
        
        <DXSelect
          v-model="form.country"
          label="Country"
          :options="countries"
          :prefix-icon="GlobeAltIcon"
          placeholder="Select country"
        />
        
        <DXSelect
          v-model="form.currency"
          label="Currency"
          :options="currencies"
          :prefix-icon="CurrencyDollarIcon"
          placeholder="Select currency"
        />
        
        <DXSelect
          v-model="form.role"
          label="Role"
          :options="roles"
          :prefix-icon="BriefcaseIcon"
          placeholder="Select role"
        />
      </div>
    \`
  })
}`,...(L=(A=u.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var M,E,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXSelect
    },
    setup() {
      const small = ref('');
      const medium = ref('');
      const large = ref('');
      const priorities = [{
        value: 'low',
        label: 'Low'
      }, {
        value: 'med',
        label: 'Medium'
      }, {
        value: 'high',
        label: 'High'
      }];
      return {
        small,
        medium,
        large,
        priorities,
        FlagIcon
      };
    },
    template: \`
      <div class="space-y-4 max-w-md">
        <DXSelect
          v-model="small"
          size="sm"
          label="Small"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="medium"
          size="md"
          label="Medium (default)"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
        
        <DXSelect
          v-model="large"
          size="lg"
          label="Large"
          :options="priorities"
          :prefix-icon="FlagIcon"
          placeholder="Select priority"
        />
      </div>
    \`
  })
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const ue=["Default","WithValue","Disabled","WithPrefixIcon","Currency","Location","FormWithIcons","AllSizes"];export{p as AllSizes,s as Currency,o as Default,c as Disabled,u as FormWithIcons,i as Location,t as WithPrefixIcon,a as WithValue,ue as __namedExportsOrder,ie as default};
