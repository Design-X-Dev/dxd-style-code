import{c as T,a as ia,k as Z,o as P,b as F,f as K,C as b,t as xa,r as X,w as ma,u as Aa,e as ae,g as se,O as te,P as Fa,B as Pa,m as re,n as ka,h as Oa}from"./vue.esm-bundler-Nfu98kES.js";import{D as Ra}from"./DXBaseTable-CzJLZi7r.js";import{_ as Va}from"./DXTableToolbar-sU632wm_.js";import{_ as Wa}from"./DXTablePagination-DCixRVUF.js";import{_ as ce}from"./DXIcon-DQdlGsO1.js";import{_ as $a}from"./DXTags-BnwywDQo.js";import{r as La}from"./DXDropdownDivider-CazJIIB9.js";import{r as Ua}from"./XCircleIcon-CTSXM3gI.js";import{_ as ja}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as da}from"./DXButton-D4QV5g9V.js";import{_ as Ia}from"./DXBadge-BzIj_AZP.js";import"./DXCheckbox-CMQTsUrW.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";import"./DXDropdown-CoL0Joua.js";import"./ChevronDownIcon-DnL0EvPK.js";import"./DXDropdownItem-BNem-Fpn.js";import"./useClassComposition-Dym2pzZ_.js";import"./ChevronRightIcon-Bln9TrNK.js";import"./DXLoader-B_ug0-wM.js";import"./DXSearchSelect-B4x4JO4n.js";import"./PencilIcon-BNDZDOj4.js";import"./TrashIcon-C_ge7fVs.js";import"./DXInput-DUVmhVHV.js";import"./DXFormLabel-Drk-51Wk.js";import"./ExclamationCircleIcon-DOJNx4bv.js";import"./DXIconWrapper-DKYfCJ0D.js";import"./MagnifyingGlassIcon-DjnTFUrM.js";import"./ViewColumnsIcon-z06zZ7Kw.js";import"./DXPagination-DJPZd1wo.js";import"./ChevronLeftIcon-CgJmgnPf.js";import"./DXSelect-BtacXorN.js";import"./useAnimation-CL8rPOHu.js";import"./XMarkIcon-ZneicKdX.js";import"./DXDivider-DIbZiQd2.js";import"./useSpacing-BOHUzi8w.js";const Ha={key:0,class:"flex items-center justify-between gap-4 px-4 py-3 bg-slate-50 border-b border-slate-200","data-component":"DXTableFiltersPanel"},Ma={class:"flex items-center gap-3 flex-1 flex-wrap"},Na={class:"flex items-center gap-2 text-sm text-slate-600 font-medium"},pa={__name:"DXTableFiltersPanel",props:{activeFilters:{type:Array,default:()=>[]}},emits:["remove-filter","clear-all"],setup(e,{emit:u}){const t=e,a=u,n=T(()=>t.activeFilters.map(m=>({label:`${m.columnLabel}: ${m.valueLabel}`,closable:!0,color:"primary",data:m}))),r=m=>{const i=(m==null?void 0:m.tag)||m;i!=null&&i.data&&a("remove-filter",i.data.column)},B=()=>{a("clear-all")};return(m,i)=>e.activeFilters.length>0?(P(),ia("div",Ha,[F("div",Ma,[F("div",Na,[K(ce,{icon:b(La),size:"sm",class:"text-slate-500"},null,8,["icon"]),F("span",null,"Активные фильтры ("+xa(e.activeFilters.length)+")",1)]),K($a,{tags:n.value,variant:"default",color:"primary",onRemove:r},null,8,["tags"])]),F("button",{type:"button",onClick:B,class:"flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"},[K(ce,{icon:b(Ua),size:"sm",class:"text-slate-500"},null,8,["icon"]),i[0]||(i[0]=F("span",null,"Очистить все",-1))])])):Z("",!0)}};pa.__docgenInfo={exportName:"default",displayName:"DXTableFiltersPanel",description:"",tags:{},props:[{name:"activeFilters",description:"Список активных фильтров: [{ column, columnLabel, value, valueLabel }]",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],events:[{name:"remove-filter"},{name:"clear-all"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXTableFiltersPanel/DXTableFiltersPanel.vue"]};function qa(e,u){const t=X([]),a=X(!1),n=X(null),r=()=>{t.value=[...e.data]},B=async(i={})=>{if(!e.apiUrl){n.value="API URL не указан";return}a.value=!0,n.value=null;try{const h=new URLSearchParams({...e.apiParams,...i}).toString(),p=`${e.apiUrl}${h?`?${h}`:""}`,o=await fetch(p,{method:e.apiMethod||"GET",headers:{"Content-Type":"application/json"}});if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const l=await o.json();t.value=Array.isArray(l)?l:l.data||[],u("data-loaded",t.value)}catch(h){n.value=h.message,u("error",h)}finally{a.value=!1}},m=i=>e.mode==="api"?B(i):(r(),Promise.resolve());return ma(()=>e.data,()=>{e.mode==="local"&&r()},{immediate:!0,deep:!0}),{localData:t,loading:a,error:n,loadData:m}}function Ga(e,u,t){var i,h;const a=X(((i=u.defaultSort)==null?void 0:i.column)||null),n=X(((h=u.defaultSort)==null?void 0:h.direction)||"asc"),r=T(()=>!a.value||!u.sortable?e.value:[...e.value].sort((o,l)=>{const g=o[a.value],z=l[a.value];if(g==null)return 1;if(z==null)return-1;if(typeof g=="number"&&typeof z=="number")return n.value==="asc"?g-z:z-g;const s=String(g).toLowerCase(),c=String(z).toLowerCase();return n.value==="asc"?s.localeCompare(c):c.localeCompare(s)}));return{sortBy:a,sortDirection:n,sortedData:r,toggleSort:p=>{a.value===p?n.value==="asc"?n.value="desc":n.value==="desc"&&(a.value=null,n.value="asc"):(a.value=p,n.value="asc"),t("sort",{column:a.value,direction:n.value})},resetSort:()=>{var p,o;a.value=((p=u.defaultSort)==null?void 0:p.column)||null,n.value=((o=u.defaultSort)==null?void 0:o.direction)||"asc"}}}function Qa(e,u,t,a=null){const n=X({}),r=X(""),B=a||e,m=T(()=>{let s=[...e.value];if(r.value&&u.searchable){const c=r.value.toLowerCase();s=s.filter(y=>u.columns.some(f=>{const C=y[f.key];return C!=null&&String(C).toLowerCase().includes(c)}))}return u.filterable&&Object.keys(n.value).length>0&&(s=s.filter(c=>Object.entries(n.value).every(([y,f])=>!f||f===""?!0:c[y]===f))),s}),i=(s,c)=>{c?n.value[s]=c:delete n.value[s],t("filter",{column:s,value:c,filters:{...n.value}})},h=()=>{n.value={},r.value="",t("filter-clear")},p=s=>{delete n.value[s],t("filter",{column:s,value:null,filters:{...n.value}})},o=s=>{const c=new Set;return B.value.forEach(y=>{const f=y[s];f!=null&&f!==""&&c.add(f)}),Array.from(c).sort().map(y=>({value:y,label:String(y)}))},l=s=>{if(s.filterOptions&&Array.isArray(s.filterOptions))return s.filterOptions.some(f=>f.value===""||f.value===null)?s.filterOptions:[{value:"",label:"Все"},...s.filterOptions];const c=o(s.key);return[{value:"",label:"Все"},...c]},g=T(()=>!u.filterable||Object.keys(n.value).length===0?[]:Object.entries(n.value).map(([s,c])=>{if(!c||c==="")return null;const y=u.columns.find(A=>A.key===s);if(!y)return null;const C=l(y).find(A=>A.value===c),_=C?C.label:String(c);return{column:s,columnLabel:y.label,value:c,valueLabel:_}}).filter(Boolean)),z=T(()=>g.value.length);return{filters:n,searchQuery:r,filteredData:m,applyFilter:i,clearFilters:h,clearColumnFilter:p,getFilterOptions:l,activeFilters:g,activeFiltersCount:z}}function Ja(e,u,t){const a=X(1),n=X(u.defaultPageSize||10),r=T(()=>!u.paginated||e.value.length===0?1:Math.ceil(e.value.length/n.value)),B=T(()=>{if(!u.paginated)return e.value;const l=(a.value-1)*n.value,g=l+n.value;return e.value.slice(l,g)}),m=T(()=>{const l=e.value.length;if(l===0)return{from:0,to:0,total:0};const g=(a.value-1)*n.value+1,z=Math.min(a.value*n.value,l);return{from:g,to:z,total:l}}),i=l=>{l<1||l>r.value||(a.value=l,t("page-change",a.value))},h=()=>{a.value<r.value&&(a.value++,t("page-change",a.value))},p=()=>{a.value>1&&(a.value--,t("page-change",a.value))},o=l=>{n.value=l,a.value=1,t("page-size-change",n.value)};return ma(()=>e.value.length,()=>{a.value>r.value&&(a.value=Math.max(1,r.value))}),{currentPage:a,pageSize:n,totalPages:r,paginatedData:B,paginationInfo:m,goToPage:i,nextPage:h,previousPage:p,changePageSize:o}}function Ya(e,u,t){const a=X([]),n=T(()=>e.value.length===0?!1:a.value.length===e.value.length),r=T(()=>a.value.length>0&&a.value.length<e.value.length);return{selectedRows:a,allSelected:n,someSelected:r,isSelected:l=>a.value.includes(l),toggleRow:l=>{const g=a.value.indexOf(l);g>-1?a.value.splice(g,1):a.value.push(l),t("row-select",{id:l,selected:g===-1,selectedRows:[...a.value]})},selectAll:()=>{n.value?(a.value=[],t("select-all",{selected:!1,selectedRows:[]})):(a.value=e.value.map(l=>l.id),t("select-all",{selected:!0,selectedRows:[...a.value]}))},clearSelection:()=>{a.value=[],t("selection-clear")},selectRows:l=>{a.value=[...l],t("selection-change",[...a.value])},getSelectedRowsData:()=>e.value.filter(l=>a.value.includes(l.id))}}function Za(e,u){const t=X([]),a=T(()=>e.columns.filter(o=>!t.value.includes(o.key))),n=T(()=>e.columns.map(o=>({...o,visible:!t.value.includes(o.key)})));return{hiddenColumns:t,visibleColumns:a,columnsWithVisibility:n,toggleColumn:o=>{const l=t.value.indexOf(o);l>-1?t.value.splice(l,1):t.value.push(o),u("column-toggle",{column:o,visible:l>-1,hiddenColumns:[...t.value]})},showColumn:o=>{const l=t.value.indexOf(o);l>-1&&(t.value.splice(l,1),u("column-show",o))},hideColumn:o=>{t.value.includes(o)||(t.value.push(o),u("column-hide",o))},showAllColumns:()=>{t.value=[],u("columns-show-all")},hideAllColumns:(o=[])=>{t.value=e.columns.filter(l=>!o.includes(l.key)).map(l=>l.key),u("columns-hide-all")},resetColumns:()=>{t.value=[],u("columns-reset")}}}const Ka={class:"dx-table-wrapper","data-component":"DXTable"},ga={__name:"DXTable",props:{columns:{type:Array,required:!0},data:{type:Array,default:()=>[]},mode:{type:String,default:"local",validator:e=>["local","api"].includes(e)},apiUrl:{type:String},apiMethod:{type:String,default:"GET"},apiParams:{type:Object,default:()=>({})},searchable:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},sortable:{type:Boolean,default:!0},paginated:{type:Boolean,default:!0},selectable:{type:Boolean,default:!1},groupBy:{type:String},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},height:{type:String},stickyHeader:{type:Boolean,default:!0},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},showToolbar:{type:Boolean,default:!0},columnToggle:{type:Boolean,default:!1},actions:{type:Boolean,default:!1},defaultPageSize:{type:Number,default:10},pageSizeOptions:{type:Array,default:()=>[10,25,50,100]},defaultSort:{type:Object},loading:{type:Boolean,default:!1}},emits:["row-click","row-select","select-all","sort","filter","filter-clear","page-change","page-size-change","edit","delete","data-loaded","error","column-toggle","selection-clear"],setup(e,{emit:u}){const t=Aa(),a=e,n=u,{localData:r}=qa(a,n),{sortBy:B,sortDirection:m,sortedData:i,toggleSort:h}=Ga(r,a,n),{searchQuery:p,filters:o,filteredData:l,applyFilter:g,getFilterOptions:z,activeFilters:s,clearFilters:c,clearColumnFilter:y}=Qa(i,a,n,r),{currentPage:f,pageSize:C,totalPages:_,paginatedData:A,paginationInfo:ee}=Ja(l,a,n),{selectedRows:le,toggleRow:ba,selectAll:fa}=Ya(l,a,n),{visibleColumns:va,columnsWithVisibility:ha,toggleColumn:Da}=Za(a,n),ya=T(()=>a.searchable||a.columnToggle||!!t["toolbar-actions"]),ue=T(()=>a.groupBy?l.value:A.value),Ta=v=>z(v),Sa=({column:v,value:D})=>{g(v,D)},Xa=v=>{y(v)},Ba=()=>{c()},wa=({column:v,direction:D})=>{h(v)},za=({id:v,selected:D})=>{ba(v)},Ca=v=>{fa()};return(v,D)=>(P(),ia("div",Ka,[e.showToolbar&&ya.value?(P(),ae(Va,{key:0,searchQuery:b(p),"onUpdate:searchQuery":D[0]||(D[0]=w=>te(p)?p.value=w:null),size:e.size,searchable:e.searchable,selectedCount:b(le).length,columnToggle:e.columnToggle,columns:b(ha),onToggleColumn:b(Da)},{right:se(()=>[re(v.$slots,"toolbar-actions",{},void 0,!0)]),_:3},8,["searchQuery","size","searchable","selectedCount","columnToggle","columns","onToggleColumn"])):Z("",!0),e.filterable?(P(),ae(pa,{key:1,activeFilters:b(s),onRemoveFilter:Xa,onClearAll:Ba},null,8,["activeFilters"])):Z("",!0),K(Ra,{columns:b(va),data:ue.value,sortBy:b(B),sortDirection:b(m),selectedRows:b(le),selectable:e.selectable,actions:e.actions,filterable:e.filterable,filters:b(o),getFilterOptions:Ta,groupBy:e.groupBy,height:e.height,stickyHeader:e.stickyHeader,striped:e.striped,bordered:e.bordered,hoverable:e.hoverable,dense:e.dense,size:e.size,loading:e.loading,onSort:wa,onFilter:Sa,onRowClick:D[1]||(D[1]=w=>v.$emit("row-click",w)),onRowSelect:za,onSelectAll:Ca,onEdit:D[2]||(D[2]=w=>v.$emit("edit",w)),onDelete:D[3]||(D[3]=w=>v.$emit("delete",w))},Fa({_:2},[Pa(v.$slots,(w,oe)=>({name:oe,fn:se(Ea=>[re(v.$slots,oe,ka(Oa(Ea||{})),void 0,!0)])}))]),1032,["columns","data","sortBy","sortDirection","selectedRows","selectable","actions","filterable","filters","groupBy","height","stickyHeader","striped","bordered","hoverable","dense","size","loading"]),e.paginated&&!e.loading&&ue.value.length>0?(P(),ae(Wa,{key:2,currentPage:b(f),"onUpdate:currentPage":D[4]||(D[4]=w=>te(f)?f.value=w:null),pageSize:b(C),"onUpdate:pageSize":D[5]||(D[5]=w=>te(C)?C.value=w:null),size:e.size,totalPages:b(_),pageSizeOptions:e.pageSizeOptions,from:b(ee).from,to:b(ee).to,total:b(ee).total},null,8,["currentPage","pageSize","size","totalPages","pageSizeOptions","from","to","total"])):Z("",!0)]))}},d=ja(ga,[["__scopeId","data-v-cb483d8c"]]);ga.__docgenInfo={exportName:"default",displayName:"DXTable",description:"",tags:{},props:[{name:"columns",type:{name:"array"},required:!0},{name:"data",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"mode",type:{name:"string"},defaultValue:{func:!1,value:"'local'"},values:["local","api"]},{name:"apiUrl",type:{name:"string"}},{name:"apiMethod",type:{name:"string"},defaultValue:{func:!1,value:"'GET'"}},{name:"apiParams",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"searchable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"filterable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sortable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"paginated",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"selectable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"groupBy",type:{name:"string"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["sm","md","lg"]},{name:"height",type:{name:"string"}},{name:"stickyHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"striped",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hoverable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dense",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showToolbar",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"columnToggle",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"actions",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultPageSize",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"pageSizeOptions",type:{name:"array"},defaultValue:{func:!1,value:"[10, 25, 50, 100]"}},{name:"defaultSort",type:{name:"object"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"row-click"},{name:"edit"},{name:"delete"},{name:"row-select"},{name:"select-all"},{name:"sort"},{name:"filter"},{name:"filter-clear"},{name:"page-change"},{name:"page-size-change"},{name:"data-loaded"},{name:"error"},{name:"column-toggle"},{name:"selection-clear"}],slots:[{name:"toolbar-actions"},{name:"slot",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXTable/DXTable.vue"]};const $t={title:"Organisms/DXTable",component:d,tags:["autodocs"]},_a=[{key:"name",label:"Имя"},{key:"email",label:"Email"},{key:"role",label:"Роль"}],S=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0},{key:"status",label:"Статус",sortable:!0,filterable:!0},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center"}],ne=[{key:"id",label:"ID",width:"80px",sortable:!0,filterable:!1},{key:"name",label:"Имя",sortable:!0,filterable:!0},{key:"email",label:"Email",sortable:!0,filterable:!0},{key:"role",label:"Роль",sortable:!0,filterable:!0,filterOptions:[{value:"Admin",label:"Администратор"},{value:"User",label:"Пользователь"},{value:"Manager",label:"Менеджер"}]},{key:"status",label:"Статус",sortable:!0,filterable:!0,filterOptions:[{value:"Active",label:"Активный"},{value:"Inactive",label:"Неактивный"},{value:"Pending",label:"В ожидании"}]},{key:"age",label:"Возраст",sortable:!0,width:"100px",align:"center",filterable:!1}],E=[{id:1,name:"Иван Иванов",email:"ivan@example.com",role:"Admin",status:"Active",age:32},{id:2,name:"Мария Петрова",email:"maria@example.com",role:"User",status:"Active",age:28},{id:3,name:"Петр Сидоров",email:"petr@example.com",role:"User",status:"Inactive",age:45}],x=Array.from({length:50},(e,u)=>({id:u+1,name:`Пользователь ${u+1}`,email:`user${u+1}@example.com`,role:["Admin","User","Manager"][u%3],status:["Active","Inactive","Pending"][u%3],age:20+u%50,category:["Tech","Sales","Marketing"][u%3]})),k={render:()=>({components:{DXTable:d},setup(){return{simpleColumns:_a,simpleData:E}},template:`
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    `})},O={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:x}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    `})},R={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:x}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    `})},V={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:x}},template:`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Фильтры в заголовках столбцов</h3>
        <p class="text-sm text-slate-600 mb-4">
          Кликните на иконку воронки в заголовке столбца, чтобы открыть фильтр.
          Активные фильтры отображаются в панели над таблицей.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},W={render:()=>({components:{DXTable:d},setup(){return{columns:ne,data:x}},template:`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Фильтры с предопределенными опциями</h3>
        <p class="text-sm text-slate-600 mb-4">
          Некоторые столбцы имеют предопределенные опции фильтрации.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},$={render:()=>({components:{DXTable:d},setup(){return{columns:ne,data:x}},template:`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Множественные активные фильтры</h3>
        <p class="text-sm text-slate-600 mb-4">
          Примените несколько фильтров одновременно. Все активные фильтры 
          отображаются в панели над таблицей с возможностью удаления.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    `})},L={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    `})},U={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E,handleRowSelect:t=>{console.log("Row selected:",t)},handleSelectAll:t=>{console.log("Select all:",t)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    `})},j={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E,handleEdit:t=>{alert(`Редактировать: ${t.name}`)},handleDelete:t=>{alert(`Удалить: ${t.name}`)}}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    `})},I={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    `})},H={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:x}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    `})},M={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:x}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    `})},N={render:()=>({components:{DXTable:d,DXButton:da},setup(){const e=t=>{console.log("Row clicked:",t)},u=X("md");return{columns:ne,data:x,handleRowClick:e,size:u}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :searchable="true"
        :filterable="true"
        :sortable="true"
        :paginated="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
        height="600px"
        :striped="true"
        @row-click="handleRowClick"
      >
        <template #toolbar-actions>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTable>
    `})},q={render:()=>({components:{DXTable:d,DXBadge:Ia,DXButton:da},setup(){const e=X("md");return{columns:S,data:E,size:e}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :paginated="false"
        :actions="true"
      >
        <template #cell-status="{ value }">
          <DXBadge
            :variant="value === 'Active' ? 'success' : value === 'Inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </DXBadge>
        </template>
        
        <template #cell-role="{ value }">
          <span class="font-semibold text-blue-600">{{ value }}</span>
        </template>

        <template #actions="{ row }">
          <div class="flex gap-2 justify-center">
            <DXButton :size="size" variant="ghost">Просмотр</DXButton>
            <DXButton :size="size" variant="primary">Изменить</DXButton>
          </div>
        </template>
      </DXTable>
    `})},G={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},Q={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},J={render:()=>({components:{DXTable:d},setup(){return{columns:S,data:E}},template:`
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    `})},Y={args:{size:"md",columns:S,data:x,searchable:!0,filterable:!1,sortable:!0,paginated:!0,selectable:!1,actions:!1,columnToggle:!1,height:"",stickyHeader:!0,striped:!1,bordered:!1,hoverable:!0,dense:!1,showToolbar:!0,defaultPageSize:10},argTypes:{size:{control:"select",options:["sm","md","lg"]},searchable:{control:"boolean"},filterable:{control:"boolean"},sortable:{control:"boolean"},paginated:{control:"boolean"},selectable:{control:"boolean"},actions:{control:"boolean"},columnToggle:{control:"boolean"},height:{control:"text"},stickyHeader:{control:"boolean"},striped:{control:"boolean"},bordered:{control:"boolean"},hoverable:{control:"boolean"},dense:{control:"boolean"},showToolbar:{control:"boolean"},defaultPageSize:{control:"select",options:[10,25,50,100]}},render:e=>({components:{DXTable:d},setup(){return{args:e}},template:`
      <DXTable v-bind="args" />
    `})};var ie,me,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        simpleColumns,
        simpleData
      };
    },
    template: \`
      <DXTable
        :columns="simpleColumns"
        :data="simpleData"
        :paginated="false"
        :searchable="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(de=(me=k.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,ge,be;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :paginated="true"
        :defaultPageSize="10"
        :showToolbar="false"
      />
    \`
  })
}`,...(be=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ve,he;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :searchable="true"
        :paginated="true"
        :defaultPageSize="10"
      />
    \`
  })
}`,...(he=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var De,ye,Te;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Фильтры в заголовках столбцов</h3>
        <p class="text-sm text-slate-600 mb-4">
          Кликните на иконку воронки в заголовке столбца, чтобы открыть фильтр.
          Активные фильтры отображаются в панели над таблицей.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(Te=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var Se,Xe,Be;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Фильтры с предопределенными опциями</h3>
        <p class="text-sm text-slate-600 mb-4">
          Некоторые столбцы имеют предопределенные опции фильтрации.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(Be=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Be.source}}};var we,ze,Ce;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset
      };
    },
    template: \`
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-4">Множественные активные фильтры</h3>
        <p class="text-sm text-slate-600 mb-4">
          Примените несколько фильтров одновременно. Все активные фильтры 
          отображаются в панели над таблицей с возможностью удаления.
        </p>
        <DXTable
          :columns="columns"
          :data="data"
          :filterable="true"
          :searchable="true"
          :paginated="true"
          :defaultPageSize="10"
        />
      </div>
    \`
  })
}`,...(Ce=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var Ee,xe,Ae;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :sortable="true"
        :defaultSort="{ column: 'name', direction: 'asc' }"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(Ae=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var Fe,Pe,ke;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      const handleRowSelect = data => {
        console.log('Row selected:', data);
      };
      const handleSelectAll = data => {
        console.log('Select all:', data);
      };
      return {
        columns,
        data: simpleData,
        handleRowSelect,
        handleSelectAll
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :selectable="true"
        :paginated="false"
        @row-select="handleRowSelect"
        @select-all="handleSelectAll"
      />
    \`
  })
}`,...(ke=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var Oe,Re,Ve;j.parameters={...j.parameters,docs:{...(Oe=j.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      const handleEdit = row => {
        alert(\`Редактировать: \${row.name}\`);
      };
      const handleDelete = row => {
        alert(\`Удалить: \${row.name}\`);
      };
      return {
        columns,
        data: simpleData,
        handleEdit,
        handleDelete
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :actions="true"
        :paginated="false"
        @edit="handleEdit"
        @delete="handleDelete"
      />
    \`
  })
}`,...(Ve=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source}}};var We,$e,Le;I.parameters={...I.parameters,docs:{...(We=I.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :columnToggle="true"
        :paginated="false"
      />
    \`
  })
}`,...(Le=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Le.source}}};var Ue,je,Ie;H.parameters={...H.parameters,docs:{...(Ue=H.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        groupBy="category"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(Ie=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var He,Me,Ne;M.parameters={...M.parameters,docs:{...(He=M.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: largeDataset
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        height="400px"
        :stickyHeader="true"
        :paginated="false"
        :showToolbar="false"
      />
    \`
  })
}`,...(Ne=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var qe,Ge,Qe;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable,
      DXButton
    },
    setup() {
      const handleRowClick = row => {
        console.log('Row clicked:', row);
      };
      const size = ref('md');
      return {
        columns: columnsWithFilterOptions,
        data: largeDataset,
        handleRowClick,
        size
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :searchable="true"
        :filterable="true"
        :sortable="true"
        :paginated="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
        height="600px"
        :striped="true"
        @row-click="handleRowClick"
      >
        <template #toolbar-actions>
          <DXButton :size="size" variant="primary">Добавить</DXButton>
          <DXButton :size="size" variant="ghost">Экспорт</DXButton>
        </template>
      </DXTable>
    \`
  })
}`,...(Qe=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Je,Ye,Ze;q.parameters={...q.parameters,docs:{...(Je=q.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable,
      DXBadge,
      DXButton
    },
    setup() {
      const size = ref('md');
      return {
        columns,
        data: simpleData,
        size
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        :size="size"
        :paginated="false"
        :actions="true"
      >
        <template #cell-status="{ value }">
          <DXBadge
            :variant="value === 'Active' ? 'success' : value === 'Inactive' ? 'danger' : 'warning'"
          >
            {{ value }}
          </DXBadge>
        </template>
        
        <template #cell-role="{ value }">
          <span class="font-semibold text-blue-600">{{ value }}</span>
        </template>

        <template #actions="{ row }">
          <div class="flex gap-2 justify-center">
            <DXButton :size="size" variant="ghost">Просмотр</DXButton>
            <DXButton :size="size" variant="primary">Изменить</DXButton>
          </div>
        </template>
      </DXTable>
    \`
  })
}`,...(Ze=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var Ke,_e,ea;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="sm"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(ea=(_e=G.parameters)==null?void 0:_e.docs)==null?void 0:ea.source}}};var aa,ta,na;Q.parameters={...Q.parameters,docs:{...(aa=Q.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="md"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(na=(ta=Q.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var la,ua,oa;J.parameters={...J.parameters,docs:{...(la=J.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTable
    },
    setup() {
      return {
        columns,
        data: simpleData
      };
    },
    template: \`
      <DXTable
        :columns="columns"
        :data="data"
        size="lg"
        :searchable="true"
        :selectable="true"
        :actions="true"
        :columnToggle="true"
      />
    \`
  })
}`,...(oa=(ua=J.parameters)==null?void 0:ua.docs)==null?void 0:oa.source}}};var sa,ra,ca;Y.parameters={...Y.parameters,docs:{...(sa=Y.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    size: 'md',
    columns,
    data: largeDataset,
    searchable: true,
    filterable: false,
    sortable: true,
    paginated: true,
    selectable: false,
    actions: false,
    columnToggle: false,
    height: '',
    stickyHeader: true,
    striped: false,
    bordered: false,
    hoverable: true,
    dense: false,
    showToolbar: true,
    defaultPageSize: 10
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    searchable: {
      control: 'boolean'
    },
    filterable: {
      control: 'boolean'
    },
    sortable: {
      control: 'boolean'
    },
    paginated: {
      control: 'boolean'
    },
    selectable: {
      control: 'boolean'
    },
    actions: {
      control: 'boolean'
    },
    columnToggle: {
      control: 'boolean'
    },
    height: {
      control: 'text'
    },
    stickyHeader: {
      control: 'boolean'
    },
    striped: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    hoverable: {
      control: 'boolean'
    },
    dense: {
      control: 'boolean'
    },
    showToolbar: {
      control: 'boolean'
    },
    defaultPageSize: {
      control: 'select',
      options: [10, 25, 50, 100]
    }
  },
  render: args => ({
    components: {
      DXTable
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXTable v-bind="args" />
    \`
  })
}`,...(ca=(ra=Y.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};const Lt=["SimpleTable","WithPagination","WithSearch","WithFilters","WithFilterOptions","WithMultipleFilters","WithSort","WithSelection","WithActions","WithColumnToggle","WithGrouping","WithCustomHeight","AdvancedTable","CustomCells","SmallSize","MediumSize","LargeSize","Playground"];export{N as AdvancedTable,q as CustomCells,J as LargeSize,Q as MediumSize,Y as Playground,k as SimpleTable,G as SmallSize,j as WithActions,I as WithColumnToggle,M as WithCustomHeight,W as WithFilterOptions,V as WithFilters,H as WithGrouping,$ as WithMultipleFilters,O as WithPagination,R as WithSearch,U as WithSelection,L as WithSort,Lt as __namedExportsOrder,$t as default};
