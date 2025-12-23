import{a as o,o as a,b as xe,c as S,k as l,m as he,l as d,f as X,t as z}from"./vue.esm-bundler-Nfu98kES.js";import{_ as B}from"./DXIcon-DQdlGsO1.js";import{r as be}from"./TrashIcon-C_ge7fVs.js";import{r as fe}from"./PencilIcon-BNDZDOj4.js";import{r as ve}from"./EyeIcon-DCzVVwPa.js";import{_ as ge}from"./DXButton-D4QV5g9V.js";import{r as ye}from"./ShareIcon-BEVk76Tx.js";import"./useSize-D8MrabOp.js";import"./useAnimation-CL8rPOHu.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./useClassComposition-Dym2pzZ_.js";function De(e,s){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[xe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})])}const we=["disabled"],Be={key:0},Ae=["disabled"],Xe={key:0},ze=["disabled"],Ve={key:0},n={__name:"DXActionButtons",props:{showView:{type:Boolean,default:!1},showEdit:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},viewLabel:{type:String,default:"Просмотр"},editLabel:{type:String,default:"Редактировать"},deleteLabel:{type:String,default:"Удалить"},viewIcon:{type:[Object,Function],default:()=>ve},editIcon:{type:[Object,Function],default:()=>fe},deleteIcon:{type:[Object,Function],default:()=>be},size:{type:String,default:"sm"},iconOnly:{type:Boolean,default:!1},align:{type:String,default:"left"},disabled:{type:Boolean,default:!1}},emits:["view","edit","delete"],setup(e){const s=e,r=S(()=>s.size==="xs"?"xs":s.size==="md"?"sm":"xs"),A=S(()=>{const t="font-semibold rounded-xl";return s.iconOnly?s.size==="xs"?`${t} p-1.5`:s.size==="md"?`${t} p-2.5`:`${t} p-2`:s.size==="xs"?`${t} px-2 py-1 text-xs`:s.size==="md"?`${t} px-4 py-2.5 text-sm`:`${t} px-3 py-2 text-xs`});return(t,i)=>(a(),o("div",{class:d(["flex gap-2",{"justify-end":e.align==="right","justify-center":e.align==="center"}]),"data-component":"DXActionButtons"},[e.showView?(a(),o("button",{key:0,type:"button",class:d(["inline-flex items-center gap-1.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",A.value]),disabled:e.disabled,onClick:i[0]||(i[0]=V=>t.$emit("view"))},[X(B,{icon:e.viewIcon,size:r.value,animation:"scale"},null,8,["icon","size"]),e.iconOnly?l("",!0):(a(),o("span",Be,z(e.viewLabel),1))],10,we)):l("",!0),e.showEdit?(a(),o("button",{key:1,type:"button",class:d(["inline-flex items-center gap-1.5 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",A.value]),disabled:e.disabled,onClick:i[1]||(i[1]=V=>t.$emit("edit"))},[X(B,{icon:e.editIcon,size:r.value,animation:"wiggle"},null,8,["icon","size"]),e.iconOnly?l("",!0):(a(),o("span",Xe,z(e.editLabel),1))],10,Ae)):l("",!0),e.showDelete?(a(),o("button",{key:2,type:"button",class:d(["inline-flex items-center gap-1.5 bg-rose-600 text-white hover:bg-rose-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",A.value]),disabled:e.disabled,onClick:i[2]||(i[2]=V=>t.$emit("delete"))},[X(B,{icon:e.deleteIcon,size:r.value,animation:"scale"},null,8,["icon","size"]),e.iconOnly?l("",!0):(a(),o("span",Ve,z(e.deleteLabel),1))],10,ze)):l("",!0),he(t.$slots,"default")],2))}};n.__docgenInfo={exportName:"default",displayName:"DXActionButtons",description:"",tags:{},props:[{name:"showView",description:"Показывать кнопку просмотра",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showEdit",description:"Показывать кнопку редактирования",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showDelete",description:"Показывать кнопку удаления",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"viewLabel",description:"Текст кнопки просмотра",type:{name:"string"},defaultValue:{func:!1,value:'"Просмотр"'}},{name:"editLabel",description:"Текст кнопки редактирования",type:{name:"string"},defaultValue:{func:!1,value:'"Редактировать"'}},{name:"deleteLabel",description:"Текст кнопки удаления",type:{name:"string"},defaultValue:{func:!1,value:'"Удалить"'}},{name:"viewIcon",description:"Иконка для кнопки просмотра",type:{name:"object|func"},defaultValue:{func:!0,value:"() => EyeIcon"}},{name:"editIcon",description:"Иконка для кнопки редактирования",type:{name:"object|func"},defaultValue:{func:!0,value:"() => PencilIcon"}},{name:"deleteIcon",description:"Иконка для кнопки удаления",type:{name:"object|func"},defaultValue:{func:!0,value:"() => TrashIcon"}},{name:"size",description:"Размер кнопок: xs | sm | md",type:{name:"string"},defaultValue:{func:!1,value:'"sm"'}},{name:"iconOnly",description:"Только иконки без текста",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"align",description:"Выравнивание: left | center | right",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"disabled",description:"Отключить все кнопки",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"view"},{name:"edit"},{name:"delete"}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXActionButtons/DXActionButtons.vue"]};const Je={title:"Molecules/DXActionButtons",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md"]},align:{control:"select",options:["left","center","right"]}}},c={args:{}},u={args:{showEdit:!0,showDelete:!1}},m={args:{showEdit:!1,showDelete:!0}},p={args:{showView:!0,showEdit:!0,showDelete:!0}},x={args:{iconOnly:!0,showView:!0,showEdit:!0,showDelete:!0}},h={render:()=>({components:{DXActionButtons:n},template:`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Extra Small (xs)</p>
          <DXActionButtons size="xs" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Small (sm) - Default</p>
          <DXActionButtons size="sm" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (md)</p>
          <DXActionButtons size="md" />
        </div>
      </div>
    `})},b={render:()=>({components:{DXActionButtons:n},template:`
      <div class="space-y-6">
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Left (default)</p>
          <DXActionButtons align="left" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Center</p>
          <DXActionButtons align="center" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Right</p>
          <DXActionButtons align="right" />
        </div>
      </div>
    `})},f={render:()=>({components:{DXActionButtons:n,DXButton:ge,DXIcon:B},setup(){return{ShareIcon:ye,ArrowDownTrayIcon:De}},template:`
      <DXActionButtons>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ShareIcon" size="xs" />
          Share
        </DXButton>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ArrowDownTrayIcon" size="xs" />
          Download
        </DXButton>
      </DXActionButtons>
    `})},v={render:()=>({components:{DXActionButtons:n},template:`
      <div class="overflow-hidden rounded-xl border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Name</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Role</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">John Doe</td>
              <td class="px-6 py-4 text-sm text-slate-600">john@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Admin</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Jane Smith</td>
              <td class="px-6 py-4 text-sm text-slate-600">jane@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">User</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Bob Johnson</td>
              <td class="px-6 py-4 text-sm text-slate-600">bob@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Moderator</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `})},g={render:()=>({components:{DXActionButtons:n},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Product Title</h3>
          <p class="text-sm text-slate-600 mb-4">Product description goes here...</p>
          <DXActionButtons show-view />
        </div>
        
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Another Product</h3>
          <p class="text-sm text-slate-600 mb-4">Another product description...</p>
          <DXActionButtons show-view />
        </div>
      </div>
    `})},y={args:{disabled:!0,showView:!0}},D={render:()=>({components:{DXActionButtons:n},setup(){return{handleView:()=>alert("View clicked!"),handleEdit:()=>alert("Edit clicked!"),handleDelete:()=>{confirm("Are you sure you want to delete this item?")&&alert("Item deleted!")}}},template:`
      <div class="p-6 bg-slate-50 rounded-xl">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Try clicking the buttons</h3>
        <DXActionButtons 
          show-view
          @view="handleView"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>
    `})},w={render:()=>({components:{DXActionButtons:n},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Standard (Edit + Delete)</h3>
          <DXActionButtons />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With View</h3>
          <DXActionButtons show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Icon Only</h3>
          <DXActionButtons icon-only show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Different Sizes</h3>
          <div class="space-y-3">
            <DXActionButtons size="xs" />
            <DXActionButtons size="sm" />
            <DXActionButtons size="md" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Alignment</h3>
          <div class="space-y-3">
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="left" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="center" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="right" />
            </div>
          </div>
        </div>
      </div>
    `})};var I,E,k;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var O,$,j;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    showEdit: true,
    showDelete: false
  }
}`,...(j=($=u.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};var C,L,T;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    showEdit: false,
    showDelete: true
  }
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var P,N,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showView: true,
    showEdit: true,
    showDelete: true
  }
}`,...(M=(N=p.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var J,W,F;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    iconOnly: true,
    showView: true,
    showEdit: true,
    showDelete: true
  }
}`,...(F=(W=x.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var R,U,G;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Extra Small (xs)</p>
          <DXActionButtons size="xs" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Small (sm) - Default</p>
          <DXActionButtons size="sm" />
        </div>
        
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (md)</p>
          <DXActionButtons size="md" />
        </div>
      </div>
    \`
  })
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var q,H,K;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    template: \`
      <div class="space-y-6">
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Left (default)</p>
          <DXActionButtons align="left" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Center</p>
          <DXActionButtons align="center" />
        </div>
        
        <div class="p-4 border border-slate-200 rounded-xl">
          <p class="text-xs text-slate-500 mb-2">Right</p>
          <DXActionButtons align="right" />
        </div>
      </div>
    \`
  })
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,Y,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons,
      DXButton,
      DXIcon
    },
    setup() {
      return {
        ShareIcon,
        ArrowDownTrayIcon
      };
    },
    template: \`
      <DXActionButtons>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ShareIcon" size="xs" />
          Share
        </DXButton>
        <DXButton variant="outline" size="sm">
          <DXIcon :icon="ArrowDownTrayIcon" size="xs" />
          Download
        </DXButton>
      </DXActionButtons>
    \`
  })
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,te;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    template: \`
      <div class="overflow-hidden rounded-xl border border-slate-200">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Name</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Email</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-slate-700">Role</th>
              <th class="px-6 py-3 text-right text-xs font-semibold text-slate-700">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 bg-white">
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">John Doe</td>
              <td class="px-6 py-4 text-sm text-slate-600">john@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Admin</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Jane Smith</td>
              <td class="px-6 py-4 text-sm text-slate-600">jane@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">User</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm text-slate-900">Bob Johnson</td>
              <td class="px-6 py-4 text-sm text-slate-600">bob@example.com</td>
              <td class="px-6 py-4 text-sm text-slate-600">Moderator</td>
              <td class="px-6 py-4">
                <DXActionButtons align="right" size="xs" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ne,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Product Title</h3>
          <p class="text-sm text-slate-600 mb-4">Product description goes here...</p>
          <DXActionButtons show-view />
        </div>
        
        <div class="p-6 border border-slate-200 rounded-xl bg-white">
          <h3 class="text-lg font-semibold text-slate-900 mb-2">Another Product</h3>
          <p class="text-sm text-slate-600 mb-4">Another product description...</p>
          <DXActionButtons show-view />
        </div>
      </div>
    \`
  })
}`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ae,ie,le;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showView: true
  }
}`,...(le=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var re,de,ce;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    setup() {
      const handleView = () => alert('View clicked!');
      const handleEdit = () => alert('Edit clicked!');
      const handleDelete = () => {
        if (confirm('Are you sure you want to delete this item?')) {
          alert('Item deleted!');
        }
      };
      return {
        handleView,
        handleEdit,
        handleDelete
      };
    },
    template: \`
      <div class="p-6 bg-slate-50 rounded-xl">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">Try clicking the buttons</h3>
        <DXActionButtons 
          show-view
          @view="handleView"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>
    \`
  })
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXActionButtons
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Standard (Edit + Delete)</h3>
          <DXActionButtons />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With View</h3>
          <DXActionButtons show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Icon Only</h3>
          <DXActionButtons icon-only show-view />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Different Sizes</h3>
          <div class="space-y-3">
            <DXActionButtons size="xs" />
            <DXActionButtons size="sm" />
            <DXActionButtons size="md" />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Alignment</h3>
          <div class="space-y-3">
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="left" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="center" />
            </div>
            <div class="p-3 border border-slate-200 rounded">
              <DXActionButtons align="right" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...(pe=(me=w.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const We=["Default","EditOnly","DeleteOnly","WithView","IconOnly","Sizes","Alignment","WithCustomButtons","InTable","InCards","Disabled","Interactive","AllVariants"];export{b as Alignment,w as AllVariants,c as Default,m as DeleteOnly,y as Disabled,u as EditOnly,x as IconOnly,g as InCards,v as InTable,D as Interactive,h as Sizes,f as WithCustomButtons,p as WithView,We as __namedExportsOrder,Je as default};
