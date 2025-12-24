import{a as r,o,b as i,r as d,w as H,k as f,u,f as k,z as v,x as B,F as K,D as q,s as b,l as Q,e as Y}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as g}from"./DXIcon-BbhqsR95.js";import{r as ee}from"./DocumentIcon-CUCYbdQ8.js";import{r as le}from"./XMarkIcon-B2lmC1bd.js";import{r as te}from"./PlusIcon-C_U3AjOX.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";function ae(l,X){return o(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"})])}const se={class:"w-full","data-component":"DXFileUpload"},ne={key:0,class:"block text-sm font-medium text-slate-700 mb-1"},oe=["accept","multiple","disabled"],re={key:0,class:"text-center"},ie={class:"text-sm font-medium text-slate-700 mb-1"},de=["disabled"],ue={class:"text-xs text-slate-500"},ce={key:1,class:"space-y-2"},pe={key:0,class:"w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-slate-200"},me=["src","alt"],fe={class:"flex-1 min-w-0"},ve={class:"text-sm font-medium text-slate-900 truncate"},be={class:"text-xs text-slate-500"},ge=["onClick"],he=["disabled"],xe={key:1,class:"mt-1 text-xs text-slate-500"},ye={key:2,class:"mt-1 text-xs text-rose-500"},p={__name:"DXFileUpload",props:{modelValue:[File,FileList,Array],label:{type:String,default:""},helper:{type:String,default:""},accept:{type:String,default:""},multiple:{type:Boolean,default:!1},maxSize:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","upload"],setup(l,{emit:X}){const c=l,w=X,F=d(null),V=d(null),m=d(!1),n=d([]),U=d(""),A=t=>{const e=Array.from(t.target.files||[]);_(e)},R=t=>{var a;if(m.value=!1,c.disabled)return;const e=Array.from(((a=t.dataTransfer)==null?void 0:a.files)||[]);_(e)},Z=()=>{c.disabled||(m.value=!0)},J=t=>{t.target===V.value&&(m.value=!1)},_=t=>{U.value="";const e=t.map(a=>{if(a.type.startsWith("image/")){const s=URL.createObjectURL(a);return Object.assign(a,{preview:s})}return a});c.multiple?n.value=[...n.value,...e]:n.value=e.slice(0,1),w("update:modelValue",c.multiple?n.value:n.value[0])},T=t=>{const e=n.value[t];e.preview&&URL.revokeObjectURL(e.preview),n.value.splice(t,1),w("update:modelValue",c.multiple?n.value:n.value[0]||null)},W=t=>{if(t===0)return"0 Bytes";const e=1024,a=["Bytes","KB","MB","GB"],s=Math.floor(Math.log(t)/Math.log(e));return Math.round(t/Math.pow(e,s)*100)/100+" "+a[s]};return H(()=>c.modelValue,t=>{t||(n.value=[])}),(t,e)=>(o(),r("div",se,[l.label?(o(),r("label",ne,u(l.label),1)):f("",!0),i("div",{ref_key:"dropZone",ref:V,class:Q(["relative border-2 border-dashed rounded-xl p-6 transition-all",[m.value?"border-slate-900 bg-slate-50 scale-105":"border-slate-300 bg-white hover:border-slate-400",l.disabled&&"opacity-60 cursor-not-allowed"]]),onDragenter:b(Z,["prevent"]),onDragover:e[2]||(e[2]=b(()=>{},["prevent"])),onDragleave:b(J,["prevent"]),onDrop:b(R,["prevent"])},[i("input",{ref_key:"fileInput",ref:F,type:"file",accept:l.accept,multiple:l.multiple,disabled:l.disabled,class:"hidden",onChange:A},null,40,oe),n.value.length?(o(),r("div",ce,[(o(!0),r(K,null,q(n.value,(a,s)=>{var S;return o(),r("div",{key:s,class:"flex items-center gap-3 p-3 bg-slate-50 rounded-lg"},[(S=a.type)!=null&&S.startsWith("image/")?(o(),r("div",pe,[i("img",{src:a.preview,alt:a.name,class:"w-full h-full object-cover"},null,8,me)])):(o(),Y(g,{key:1,icon:v(ee),size:"lg",animation:"none",class:"text-slate-400 flex-shrink-0"},null,8,["icon"])),i("div",fe,[i("p",ve,u(a.name),1),i("p",be,u(W(a.size)),1)]),i("button",{type:"button",class:"text-slate-400 hover:text-slate-600 transition-colors",onClick:De=>T(s),"aria-label":"Удалить файл"},[k(g,{icon:v(le),size:"md",animation:"scale"},null,8,["icon"])],8,ge)])}),128)),l.multiple?(o(),r("button",{key:0,type:"button",class:"w-full py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50",disabled:l.disabled,onClick:e[1]||(e[1]=a=>{var s;return(s=F.value)==null?void 0:s.click()})},[k(g,{icon:v(te),size:"sm",animation:"none",class:"inline mr-1"},null,8,["icon"]),e[4]||(e[4]=B(" Добавить ещё ",-1))],8,he)):f("",!0)])):(o(),r("div",re,[k(g,{icon:v(ae),size:"xl",animation:"none",class:"mx-auto text-slate-400 mb-3 w-12 h-12"},null,8,["icon"]),i("p",ie,[e[3]||(e[3]=B(" Перетащите файлы сюда или ",-1)),i("button",{type:"button",class:"text-slate-900 underline hover:no-underline",disabled:l.disabled,onClick:e[0]||(e[0]=a=>{var s;return(s=F.value)==null?void 0:s.click()})}," выберите ",8,de)]),i("p",ue,u(l.accept||"Любые файлы")+" "+u(l.maxSize?`• Макс. ${l.maxSize}`:""),1)]))],34),l.helper?(o(),r("p",xe,u(l.helper),1)):f("",!0),U.value?(o(),r("p",ye,u(U.value),1)):f("",!0)]))}};p.__docgenInfo={exportName:"default",displayName:"DXFileUpload",description:"",tags:{},props:[{name:"modelValue",type:{name:"File|FileList|array"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxSize",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"upload"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXFileUpload/DXFileUpload.vue"]};const Se={title:"Molecules/DXFileUpload",component:p,tags:["autodocs"]},h={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Upload file" />'})},x={render:()=>({components:{DXFileUpload:p},setup(){return{files:d([])}},template:'<DXFileUpload v-model="files" label="Upload files" multiple />'})},y={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />'})},D={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Disabled upload" disabled />'})};var M,z,L;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Upload file" />'
  })
}`,...(L=(z=h.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,C,$;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const files = ref([]);
      return {
        files
      };
    },
    template: '<DXFileUpload v-model="files" label="Upload files" multiple />'
  })
}`,...($=(C=x.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var E,O,j;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />'
  })
}`,...(j=(O=y.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,I,P;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Disabled upload" disabled />'
  })
}`,...(P=(I=D.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const Be=["Default","Multiple","ImagesOnly","Disabled"];export{h as Default,D as Disabled,y as ImagesOnly,x as Multiple,Be as __namedExportsOrder,Se as default};
