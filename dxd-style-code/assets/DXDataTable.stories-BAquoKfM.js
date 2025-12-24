import{r as p,c as B,w as le,d as y,U as ne,G as A,e as b,q as ue,o as f,a as g,g as D,A as I,b as ie,z as M,n as de,k as oe,j as V,y as $}from"./vue.esm-bundler-C1fUoNF-.js";import{u as se}from"./useClassComposition-Dym2pzZ_.js";import{D as re}from"./DXTable-CEZc5DF4.js";import{_ as ce}from"./DXInput-BG2R0LGs.js";import{_ as me}from"./DXSelect-CgmhnMxb.js";import{_ as fe}from"./DXDatePicker-BJkPB1Pe.js";import{_ as R}from"./DXButton-DzgLKRkE.js";import{_ as pe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DXBaseTable-DOauzPC8.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXCheckbox-DQusejYU.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./CheckIcon-B1lKtPCn.js";import"./DXDropdown-DAfwPhYF.js";import"./ChevronDownIcon-DF-4rgxU.js";import"./DXDropdownItem-sgbg46Q-.js";import"./DXBadge-Cnl9-G8k.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXDropdownDivider-DVs74pqL.js";import"./DXDivider-Cu8D1wP6.js";import"./useSpacing-BOHUzi8w.js";import"./DXLoader-DAWlORDv.js";import"./DXSearchSelect-Cl2oWNWm.js";import"./FunnelIcon-Ba3wLEuE.js";import"./PencilIcon-BVI5idyX.js";import"./TrashIcon-DHw2oPM1.js";import"./DXTableToolbar-zNIf53Pf.js";import"./MagnifyingGlassIcon-DKNfedfR.js";import"./ViewColumnsIcon-DRckdqun.js";import"./DXTablePagination-C1NyvhCh.js";import"./DXPagination-C9wlZ4pU.js";import"./DXNav-rdhJaqaA.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./DXTags-CLVQQJAQ.js";import"./XMarkIcon-DuL0Z66U.js";import"./XCircleIcon-CCzMyyl7.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXIconWrapper-Dj2l5Guj.js";const ve={key:0,class:"dx-data-table-editor"},be={class:"text-sm text-slate-500"},ye={key:1},ge={key:0,class:"flex gap-2"},De={key:1,class:"flex gap-2"},G={__name:"DXDataTable",props:{columns:{type:Array,required:!0},data:{type:Array,required:!0},editable:{type:Boolean,default:!1},editMode:{type:String,default:"cell",validator:l=>["cell","row"].includes(l)},validation:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},paginated:{type:Boolean,default:!0},selectable:{type:Boolean,default:!1},sortable:{type:Boolean,default:!0},filterable:{type:Boolean,default:!1},size:{type:String,default:"md",validator:l=>["sm","md","lg"].includes(l)},stickyHeader:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},bordered:{type:Boolean,default:!0},hoverable:{type:Boolean,default:!0},dense:{type:Boolean,default:!1}},emits:["cell-edit","row-edit","row-save","row-cancel","row-click","update:data"],setup(l,{emit:s}){const i=l,o=s,t=p({}),r=p(new Set),c=p({}),v=B(()=>i.columns.filter(e=>e.editable!==!1)),w=B(()=>i.editable?i.data.map(e=>t.value[e.id]?{...e,...t.value[e.id]}:e):i.data),L=B(()=>se("w-full"));function T(e){return r.value.has(e)}function W(e,n){return i.editMode==="row"?T(e.id):c.value[`${e.id}-${n}`]===!0}function Q(e,n){return e==null?"":n.format?n.format(e):String(e)}function Y(e,n,a){t.value[e]||(t.value[e]={}),t.value[e][n]=a}function z(e,n){var u;const a=(u=t.value[e.id])==null?void 0:u[n];o("cell-edit",{row:e,column:n,value:a})}function S(e,n){var a;if(i.editMode==="cell"){const u=(a=t.value[e.id])==null?void 0:a[n],m=e[n];if(u!==m){if(i.columns.find(d=>d.key===n)&&i.validation[n]){const d=i.validation[n](u);if(d!==!0){console.warn("Валидация не пройдена:",d);return}}o("cell-edit",{row:e,column:n,value:u,originalValue:m}),o("update:data",w.value)}delete c.value[`${e.id}-${n}`],t.value[e.id]&&(delete t.value[e.id][n],Object.keys(t.value[e.id]).length===0&&delete t.value[e.id])}}function Z(e,n){t.value[e.id]&&(delete t.value[e.id][n],Object.keys(t.value[e.id]).length===0&&delete t.value[e.id]),delete c.value[`${e.id}-${n}`]}function _(e){i.editable&&i.editMode,o("row-click",e)}function K(e){r.value.add(e.id),t.value[e.id]={...e},o("row-edit",e)}function ee(e){const n=t.value[e.id];if(n){let a=!0;for(const u of v.value)if(i.validation[u.key]){const m=i.validation[u.key](n[u.key]);if(m!==!0){console.warn("Валидация не пройдена:",m),a=!1;break}}a&&(o("row-save",{row:e,editedRow:n}),o("update:data",w.value),r.value.delete(e.id),delete t.value[e.id])}}function ae(e){r.value.delete(e.id),delete t.value[e.id],o("row-cancel",e)}return le(()=>i.data,()=>{t.value={},r.value.clear(),c.value={}},{deep:!0}),(e,n)=>(f(),y(re,{class:ue(L.value),columns:l.columns,data:w.value,loading:l.loading,paginated:l.paginated,selectable:l.selectable,sortable:l.sortable,filterable:l.filterable,size:l.size,"sticky-header":l.stickyHeader,striped:l.striped,bordered:l.bordered,hoverable:l.hoverable,dense:l.dense,"data-component":"DXDataTable","data-editable":l.editable,"data-edit-mode":l.editMode,onRowClick:_},ne({"cell-actions":b(({row:a})=>[l.editMode==="row"&&T(a.id)?(f(),g("div",ge,[V(R,{size:"sm",variant:"primary",onClick:u=>ee(a)},{default:b(()=>[...n[0]||(n[0]=[$(" Сохранить ",-1)])]),_:1},8,["onClick"]),V(R,{size:"sm",variant:"ghost",onClick:u=>ae(a)},{default:b(()=>[...n[1]||(n[1]=[$(" Отмена ",-1)])]),_:1},8,["onClick"])])):l.editMode==="row"&&l.editable?(f(),g("div",De,[V(R,{size:"sm",variant:"ghost",onClick:u=>K(a)},{default:b(()=>[...n[2]||(n[2]=[$(" Редактировать ",-1)])]),_:1},8,["onClick"]),D(e.$slots,"row-actions",{row:a},void 0,!0)])):D(e.$slots,"row-actions",{key:2,row:a},void 0,!0)]),_:2},[A(v.value,a=>({name:`cell-${a.key}`,fn:b(({row:u,value:m,column:te})=>[W(u,a.key)?(f(),g("div",ve,[!a.editor||a.editor==="input"?(f(),y(ce,{key:0,modelValue:t.value[u.id][a.key],"onUpdate:modelValue":d=>t.value[u.id][a.key]=d,type:a.type||"text",size:l.size,onBlur:d=>S(u,a.key),onKeydown:[I(d=>S(u,a.key),["enter"]),I(d=>Z(u,a.key),["escape"])]},null,8,["modelValue","onUpdate:modelValue","type","size","onBlur","onKeydown"])):a.editor==="select"?(f(),y(me,{key:1,modelValue:t.value[u.id][a.key],"onUpdate:modelValue":[d=>t.value[u.id][a.key]=d,d=>z(u,a.key)],options:a.options||[],size:l.size},null,8,["modelValue","onUpdate:modelValue","options","size"])):a.editor==="date"?(f(),y(fe,{key:2,modelValue:t.value[u.id][a.key],"onUpdate:modelValue":[d=>t.value[u.id][a.key]=d,d=>z(u,a.key)],size:l.size},null,8,["modelValue","onUpdate:modelValue","size"])):D(e.$slots,`editor-${a.editor}`,{key:3,row:u,column:a,value:t.value[u.id][a.key],updateValue:d=>Y(u.id,a.key,d)},()=>[ie("span",be," Используйте slot editor-"+M(a.editor),1)],!0)])):(f(),g("span",ye,M(Q(m,a)),1))])})),A(e.$slots,(a,u)=>({name:u,fn:b(m=>[D(e.$slots,u,de(oe(m||{})),void 0,!0)])}))]),1032,["class","columns","data","loading","paginated","selectable","sortable","filterable","size","sticky-header","striped","bordered","hoverable","dense","data-editable","data-edit-mode"]))}},E=pe(G,[["__scopeId","data-v-95b340c2"]]);G.__docgenInfo={exportName:"default",displayName:"DXDataTable",description:"",tags:{},props:[{name:"columns",description:`Колонки таблицы
Формат: [{ key, label, editable?, editor?, type?, options? }]`,type:{name:"array"},required:!0},{name:"data",description:"Данные таблицы",type:{name:"array"},required:!0},{name:"editable",description:"Редактируемая таблица",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editMode",description:"Режим редактирования: cell | row",tags:{default:[{description:"'cell'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"cell"'},values:["cell","row"]},{name:"validation",description:`Валидация при редактировании
Формат: { [columnKey]: (value) => boolean | string }`,type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"loading",description:"Загрузка данных",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"paginated",description:"Пагинация",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"selectable",description:"Выбор строк",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"sortable",description:"Сортировка",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"filterable",description:"Фильтрация",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер таблицы",tags:{default:[{description:"'md'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"md"'},values:["sm","md","lg"]},{name:"stickyHeader",description:"Липкий заголовок",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"striped",description:"Чередующиеся строки",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"bordered",description:"Границы",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"hoverable",description:"Подсветка при наведении",tags:{default:[{description:"true",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dense",description:"Плотный режим",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"cell-edit"},{name:"row-edit"},{name:"row-save"},{name:"row-cancel"},{name:"row-click"},{name:"update:data"}],slots:[{name:"`editor-${column.editor}`",scoped:!0,bindings:[{name:"name",title:"binding"},{name:"row",title:"binding"},{name:"column",title:"binding"},{name:"value",title:"binding"},{name:"update-value",title:"binding"}]},{name:"row-actions",scoped:!0,bindings:[{name:"row",title:"binding"}]},{name:"slot",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXDataTable/DXDataTable.vue"]};const sa={title:"Organisms/DXDataTable",component:E,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXDataTable

Расширенная таблица с редактированием ячеек, inline-редактированием и расширенными возможностями.

## Назначение

DXDataTable расширяет функциональность DXTable, добавляя возможность редактирования
ячеек и строк прямо в таблице. Поддерживает различные типы редакторов и валидацию.

## Архитектура

### Использует
- \`DXTable\` - как базовую таблицу
- \`DXInput\` - для текстовых редакторов
- \`DXSelect\` - для редакторов выбора
- \`DXDatePicker\` - для редакторов даты
- \`DXButton\` - для действий
- \`useClassComposition\` composable - для стилей

### Используется в
- Административные панели
- Таблицы с массовым редактированием
- Таблицы с inline-редактированием

## Внутренняя логика

### Режимы редактирования
- **cell**: Редактирование отдельных ячеек
- **row**: Редактирование всей строки

### Типы редакторов
- **input**: Текстовый редактор
- **select**: Редактор выбора
- **date**: Редактор даты
- Кастомные редакторы через slots

### Валидация
Поддерживает валидацию через prop \`validation\`.

## Особенности

### Автоматическое сохранение
В режиме cell изменения сохраняются при потере фокуса или нажатии Enter.

### Отмена изменений
Изменения можно отменить нажатием Escape или кнопкой "Отмена" (в режиме row).
        `}}},argTypes:{editable:{control:"boolean",description:"Редактируемая таблица.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},editMode:{control:"select",options:["cell","row"],description:"Режим редактирования: cell (ячейки) | row (строки).",table:{type:{summary:"string"},defaultValue:{summary:"cell"},category:"Behavior"}}}},X=[{key:"id",label:"ID",editable:!1},{key:"name",label:"Имя",editable:!0,editor:"input"},{key:"email",label:"Email",editable:!0,editor:"input",type:"email"},{key:"role",label:"Роль",editable:!0,editor:"select",options:[{value:"admin",label:"Администратор"},{value:"user",label:"Пользователь"},{value:"guest",label:"Гость"}]},{key:"created",label:"Создан",editable:!0,editor:"date"}],x=[{id:1,name:"John Doe",email:"john@example.com",role:"admin",created:"2024-01-15"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"user",created:"2024-01-20"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"guest",created:"2024-01-25"}],k={args:{columns:X,data:x,editable:!0,editMode:"cell"},parameters:{docs:{description:{story:"Редактирование отдельных ячеек. Кликните на ячейку для редактирования."}}},render:l=>({components:{DXDataTable:E},setup(){const s=p(l.data);return{args:l,data:s,handleCellEdit:({row:o,column:t,value:r})=>{console.log("Ячейка отредактирована:",o,t,r);const c=s.value.findIndex(v=>v.id===o.id);c!==-1&&(s.value[c][t]=r)}}},template:`
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @cell-edit="handleCellEdit"
      />
    `})},C={args:{columns:X,data:x,editable:!0,editMode:"row"},parameters:{docs:{description:{story:'Редактирование целых строк. Нажмите "Редактировать" для начала редактирования строки.'}}},render:l=>({components:{DXDataTable:E},setup(){const s=p(l.data);return{args:l,data:s,handleRowSave:({row:t,editedRow:r})=>{console.log("Строка сохранена:",t,r);const c=s.value.findIndex(v=>v.id===t.id);c!==-1&&(s.value[c]={...s.value[c],...r})},handleRowCancel:t=>{console.log("Редактирование отменено:",t)}}},template:`
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @row-save="handleRowSave"
        @row-cancel="handleRowCancel"
      />
    `})},h={parameters:{docs:{description:{story:"Таблица с валидацией. Email должен быть валидным."}}},render:()=>({components:{DXDataTable:E},setup(){const l=p(X),s=p(x),i=p({email:o=>o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?!0:"Неверный формат email":"Email обязателен"});return{columns:l,data:s,validation:i}},template:`
      <DXDataTable
        :columns="columns"
        :data="data"
        :editable="true"
        :validation="validation"
        edit-mode="cell"
      />
    `})};var F,j,U;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    columns: defaultColumns,
    data: defaultData,
    editable: true,
    editMode: 'cell'
  },
  parameters: {
    docs: {
      description: {
        story: 'Редактирование отдельных ячеек. Кликните на ячейку для редактирования.'
      }
    }
  },
  render: args => ({
    components: {
      DXDataTable
    },
    setup() {
      const data = ref(args.data);
      const handleCellEdit = ({
        row,
        column,
        value
      }) => {
        console.log('Ячейка отредактирована:', row, column, value);
        // Обновляем данные
        const rowIndex = data.value.findIndex(r => r.id === row.id);
        if (rowIndex !== -1) {
          data.value[rowIndex][column] = value;
        }
      };
      return {
        args,
        data,
        handleCellEdit
      };
    },
    template: \`
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @cell-edit="handleCellEdit"
      />
    \`
  })
}`,...(U=(j=k.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};var N,O,q;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    columns: defaultColumns,
    data: defaultData,
    editable: true,
    editMode: 'row'
  },
  parameters: {
    docs: {
      description: {
        story: 'Редактирование целых строк. Нажмите "Редактировать" для начала редактирования строки.'
      }
    }
  },
  render: args => ({
    components: {
      DXDataTable
    },
    setup() {
      const data = ref(args.data);
      const handleRowSave = ({
        row,
        editedRow
      }) => {
        console.log('Строка сохранена:', row, editedRow);
        const rowIndex = data.value.findIndex(r => r.id === row.id);
        if (rowIndex !== -1) {
          data.value[rowIndex] = {
            ...data.value[rowIndex],
            ...editedRow
          };
        }
      };
      const handleRowCancel = row => {
        console.log('Редактирование отменено:', row);
      };
      return {
        args,
        data,
        handleRowSave,
        handleRowCancel
      };
    },
    template: \`
      <DXDataTable
        v-bind="args"
        v-model:data="data"
        @row-save="handleRowSave"
        @row-cancel="handleRowCancel"
      />
    \`
  })
}`,...(q=(O=C.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var P,H,J;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Таблица с валидацией. Email должен быть валидным.'
      }
    }
  },
  render: () => ({
    components: {
      DXDataTable
    },
    setup() {
      const columns = ref(defaultColumns);
      const data = ref(defaultData);
      const validation = ref({
        email: value => {
          if (!value) return 'Email обязателен';
          if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
            return 'Неверный формат email';
          }
          return true;
        }
      });
      return {
        columns,
        data,
        validation
      };
    },
    template: \`
      <DXDataTable
        :columns="columns"
        :data="data"
        :editable="true"
        :validation="validation"
        edit-mode="cell"
      />
    \`
  })
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ra=["CellEditing","RowEditing","WithValidation"];export{k as CellEditing,C as RowEditing,h as WithValidation,ra as __namedExportsOrder,sa as default};
