import{a as r,o as s,b as i,r as d,w as W,k as f,t as c,f as w,C as v,q as S,F as q,B as K,z as b,l as Q,e as Y}from"./vue.esm-bundler-Nfu98kES.js";import{_ as g}from"./DXIcon-DQdlGsO1.js";import{r as ee}from"./XMarkIcon-BiPc0SME.js";import{r as le}from"./PlusIcon-B7YZdFDa.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";function te(l,F){return s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"})])}function ae(l,F){return s(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})])}const ne={class:"w-full","data-component":"DXFileUpload"},se={key:0,class:"block text-sm font-medium text-slate-700 mb-1"},oe=["accept","multiple","disabled"],re={key:0,class:"text-center"},ie={class:"text-sm font-medium text-slate-700 mb-1"},de=["disabled"],ce={class:"text-xs text-slate-500"},ue={key:1,class:"space-y-2"},pe={key:0,class:"w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-slate-200"},me=["src","alt"],fe={class:"flex-1 min-w-0"},ve={class:"text-sm font-medium text-slate-900 truncate"},be={class:"text-xs text-slate-500"},ge=["onClick"],he=["disabled"],xe={key:1,class:"mt-1 text-xs text-slate-500"},ye={key:2,class:"mt-1 text-xs text-rose-500"},p={__name:"DXFileUpload",props:{modelValue:[File,FileList,Array],label:{type:String,default:""},helper:{type:String,default:""},accept:{type:String,default:""},multiple:{type:Boolean,default:!1},maxSize:{type:String,default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","upload"],setup(l,{emit:F}){const u=l,X=F,k=d(null),V=d(null),m=d(!1),o=d([]),U=d(""),A=t=>{const e=Array.from(t.target.files||[]);_(e)},R=t=>{var a;if(m.value=!1,u.disabled)return;const e=Array.from(((a=t.dataTransfer)==null?void 0:a.files)||[]);_(e)},Z=()=>{u.disabled||(m.value=!0)},H=t=>{t.target===V.value&&(m.value=!1)},_=t=>{U.value="";const e=t.map(a=>{if(a.type.startsWith("image/")){const n=URL.createObjectURL(a);return Object.assign(a,{preview:n})}return a});u.multiple?o.value=[...o.value,...e]:o.value=e.slice(0,1),X("update:modelValue",u.multiple?o.value:o.value[0])},J=t=>{const e=o.value[t];e.preview&&URL.revokeObjectURL(e.preview),o.value.splice(t,1),X("update:modelValue",u.multiple?o.value:o.value[0]||null)},T=t=>{if(t===0)return"0 Bytes";const e=1024,a=["Bytes","KB","MB","GB"],n=Math.floor(Math.log(t)/Math.log(e));return Math.round(t/Math.pow(e,n)*100)/100+" "+a[n]};return W(()=>u.modelValue,t=>{t||(o.value=[])}),(t,e)=>(s(),r("div",ne,[l.label?(s(),r("label",se,c(l.label),1)):f("",!0),i("div",{ref_key:"dropZone",ref:V,class:Q(["relative border-2 border-dashed rounded-xl p-6 transition-all",[m.value?"border-slate-900 bg-slate-50 scale-105":"border-slate-300 bg-white hover:border-slate-400",l.disabled&&"opacity-60 cursor-not-allowed"]]),onDragenter:b(Z,["prevent"]),onDragover:e[2]||(e[2]=b(()=>{},["prevent"])),onDragleave:b(H,["prevent"]),onDrop:b(R,["prevent"])},[i("input",{ref_key:"fileInput",ref:k,type:"file",accept:l.accept,multiple:l.multiple,disabled:l.disabled,class:"hidden",onChange:A},null,40,oe),o.value.length?(s(),r("div",ue,[(s(!0),r(q,null,K(o.value,(a,n)=>{var B;return s(),r("div",{key:n,class:"flex items-center gap-3 p-3 bg-slate-50 rounded-lg"},[(B=a.type)!=null&&B.startsWith("image/")?(s(),r("div",pe,[i("img",{src:a.preview,alt:a.name,class:"w-full h-full object-cover"},null,8,me)])):(s(),Y(g,{key:1,icon:v(ae),size:"lg",animation:"none",class:"text-slate-400 flex-shrink-0"},null,8,["icon"])),i("div",fe,[i("p",ve,c(a.name),1),i("p",be,c(T(a.size)),1)]),i("button",{type:"button",class:"text-slate-400 hover:text-slate-600 transition-colors",onClick:De=>J(n),"aria-label":"Удалить файл"},[w(g,{icon:v(ee),size:"md",animation:"scale"},null,8,["icon"])],8,ge)])}),128)),l.multiple?(s(),r("button",{key:0,type:"button",class:"w-full py-2 text-sm text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50",disabled:l.disabled,onClick:e[1]||(e[1]=a=>{var n;return(n=k.value)==null?void 0:n.click()})},[w(g,{icon:v(le),size:"sm",animation:"none",class:"inline mr-1"},null,8,["icon"]),e[4]||(e[4]=S(" Добавить ещё ",-1))],8,he)):f("",!0)])):(s(),r("div",re,[w(g,{icon:v(te),size:"xl",animation:"none",class:"mx-auto text-slate-400 mb-3 w-12 h-12"},null,8,["icon"]),i("p",ie,[e[3]||(e[3]=S(" Перетащите файлы сюда или ",-1)),i("button",{type:"button",class:"text-slate-900 underline hover:no-underline",disabled:l.disabled,onClick:e[0]||(e[0]=a=>{var n;return(n=k.value)==null?void 0:n.click()})}," выберите ",8,de)]),i("p",ce,c(l.accept||"Любые файлы")+" "+c(l.maxSize?`• Макс. ${l.maxSize}`:""),1)]))],34),l.helper?(s(),r("p",xe,c(l.helper),1)):f("",!0),U.value?(s(),r("p",ye,c(U.value),1)):f("",!0)]))}};p.__docgenInfo={exportName:"default",displayName:"DXFileUpload",description:"",tags:{},props:[{name:"modelValue",type:{name:"File|FileList|array"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"accept",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"multiple",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"maxSize",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"upload"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXFileUpload/DXFileUpload.vue"]};const _e={title:"Molecules/DXFileUpload",component:p,tags:["autodocs"]},h={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Upload file" />'})},x={render:()=>({components:{DXFileUpload:p},setup(){return{files:d([])}},template:'<DXFileUpload v-model="files" label="Upload files" multiple />'})},y={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />'})},D={render:()=>({components:{DXFileUpload:p},setup(){return{file:d(null)}},template:'<DXFileUpload v-model="file" label="Disabled upload" disabled />'})};var M,z,C;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(C=(z=h.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var L,N,$;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(N=x.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,E,O;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(E=y.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var G,I,P;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(P=(I=D.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const Be=["Default","Multiple","ImagesOnly","Disabled"];export{h as Default,D as Disabled,y as ImagesOnly,x as Multiple,Be as __namedExportsOrder,_e as default};
