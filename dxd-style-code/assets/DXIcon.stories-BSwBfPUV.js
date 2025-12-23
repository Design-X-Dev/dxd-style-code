import{_ as n}from"./DXIcon-DQdlGsO1.js";import{r as e}from"./HeartIcon-D3SZQJQS.js";import{r as b,a as B}from"./HomeIcon-V68wWz7H.js";import{r as w}from"./BellIcon-jfu7dOpO.js";import{r}from"./StarIcon-BmUz71Ps.js";import{r as O}from"./UserIcon-Bv9PVN8R.js";import{r as y}from"./MagnifyingGlassIcon-DjnTFUrM.js";import{r as T}from"./ShoppingCartIcon-JRM8QiXu.js";import{r as _}from"./EnvelopeIcon-DXz60-I1.js";import{r as E}from"./PhoneIcon-CjCmvETl.js";import{r as W}from"./StarIcon-CxW8hUJU.js";import{r as A}from"./HeartIcon-BZcpV8kH.js";import"./vue.esm-bundler-Nfu98kES.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";const Y={title:"Atoms/DXIcon",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},animation:{control:"select",options:["none","wiggle","scale","rotate"]}}},t={args:{icon:e,size:"md",animation:"none"}},o=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e}},template:`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xs" />
      <DXIcon :icon="HeartIcon" size="sm" />
      <DXIcon :icon="HeartIcon" size="md" />
      <DXIcon :icon="HeartIcon" size="lg" />
      <DXIcon :icon="HeartIcon" size="xl" />
    </div>
  `}),s=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e,StarIcon:r,BellIcon:w,Cog6ToothIcon:b}},template:`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="none" />
        <p class="text-xs mt-2 text-slate-600">None</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" />
        <p class="text-xs mt-2 text-slate-600">Wiggle</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="BellIcon" size="xl" animation="scale" />
        <p class="text-xs mt-2 text-slate-600">Scale</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="Cog6ToothIcon" size="xl" animation="rotate" />
        <p class="text-xs mt-2 text-slate-600">Rotate</p>
      </div>
    </div>
  `}),a=()=>({components:{DXIcon:n},setup(){return{icons:[{name:"Heart",icon:e},{name:"Star",icon:r},{name:"Bell",icon:w},{name:"Home",icon:B},{name:"User",icon:O},{name:"Settings",icon:b},{name:"Search",icon:y},{name:"Cart",icon:T},{name:"Email",icon:_},{name:"Phone",icon:E}]}},template:`
    <div class="grid grid-cols-5 gap-6">
      <div v-for="item in icons" :key="item.name" class="text-center">
        <DXIcon :icon="item.icon" size="xl" animation="scale" class="text-slate-700 mx-auto" />
        <p class="text-xs mt-2 text-slate-600">{{ item.name }}</p>
      </div>
    </div>
  `}),c=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e,HeartIconSolid:A,StarIcon:r,StarIconSolid:W}},template:`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="HeartIconSolid" size="xl" animation="scale" class="text-rose-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIconSolid" size="xl" animation="wiggle" class="text-amber-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
    </div>
  `}),i=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e}},template:`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-rose-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-blue-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-emerald-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-amber-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-purple-500" />
    </div>
  `});var l,m,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: HeartIcon,
    size: 'md',
    animation: 'none'
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,I,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon
    };
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xs" />
      <DXIcon :icon="HeartIcon" size="sm" />
      <DXIcon :icon="HeartIcon" size="md" />
      <DXIcon :icon="HeartIcon" size="lg" />
      <DXIcon :icon="HeartIcon" size="xl" />
    </div>
  \`
})`,...(d=(I=o.parameters)==null?void 0:I.docs)==null?void 0:d.source}}};var v,g,u;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon,
      StarIcon,
      BellIcon,
      Cog6ToothIcon
    };
  },
  template: \`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="none" />
        <p class="text-xs mt-2 text-slate-600">None</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" />
        <p class="text-xs mt-2 text-slate-600">Wiggle</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="BellIcon" size="xl" animation="scale" />
        <p class="text-xs mt-2 text-slate-600">Scale</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="Cog6ToothIcon" size="xl" animation="rotate" />
        <p class="text-xs mt-2 text-slate-600">Rotate</p>
      </div>
    </div>
  \`
})`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var D,X,S;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      icons: [{
        name: 'Heart',
        icon: HeartIcon
      }, {
        name: 'Star',
        icon: StarIcon
      }, {
        name: 'Bell',
        icon: BellIcon
      }, {
        name: 'Home',
        icon: HomeIcon
      }, {
        name: 'User',
        icon: UserIcon
      }, {
        name: 'Settings',
        icon: Cog6ToothIcon
      }, {
        name: 'Search',
        icon: MagnifyingGlassIcon
      }, {
        name: 'Cart',
        icon: ShoppingCartIcon
      }, {
        name: 'Email',
        icon: EnvelopeIcon
      }, {
        name: 'Phone',
        icon: PhoneIcon
      }]
    };
  },
  template: \`
    <div class="grid grid-cols-5 gap-6">
      <div v-for="item in icons" :key="item.name" class="text-center">
        <DXIcon :icon="item.icon" size="xl" animation="scale" class="text-slate-700 mx-auto" />
        <p class="text-xs mt-2 text-slate-600">{{ item.name }}</p>
      </div>
    </div>
  \`
})`,...(S=(X=a.parameters)==null?void 0:X.docs)==null?void 0:S.source}}};var z,H,f;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon,
      HeartIconSolid,
      StarIcon,
      StarIconSolid
    };
  },
  template: \`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="HeartIconSolid" size="xl" animation="scale" class="text-rose-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIconSolid" size="xl" animation="wiggle" class="text-amber-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
    </div>
  \`
})`,...(f=(H=c.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var h,$,C;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon
    };
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-rose-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-blue-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-emerald-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-amber-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-purple-500" />
    </div>
  \`
})`,...(C=($=i.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const Z=["Default","Sizes","Animations","IconGallery","OutlineVsSolid","WithColors"];export{s as Animations,t as Default,a as IconGallery,c as OutlineVsSolid,o as Sizes,i as WithColors,Z as __namedExportsOrder,Y as default};
