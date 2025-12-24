import{r as i,c as z,A as Ce,d as we,w as Ve,a as h,o,f as y,g as p,q as C,s as $,z as I,T as ke,b as G,e as w,k as g,x as f,u as b,l as K,F as V,D as k,E as Ae,U as xe}from"./vue.esm-bundler-CzLKT_w4.js";import{_ as Le}from"./DXInput-BLwLEfW9.js";import{_ as P}from"./DXIcon-BbhqsR95.js";import{_ as Xe}from"./DXLoader-BMlBTXd1.js";import{_ as v}from"./DXText-DW7ThwBY.js";import{_ as Qe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as He}from"./XMarkIcon-B2lmC1bd.js";import{r as ze}from"./MagnifyingGlassIcon-ssG6g_B7.js";import{r as Ie}from"./ClockIcon-swgwmcUE.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-CkXlkm95.js";import"./ExclamationCircleIcon-CzLk2qiN.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./DXIconWrapper-DA1ppaUf.js";import"./useAnimation-ByVAdqmf.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";const Ke=["data-size","data-loading"],Te={class:"flex items-center gap-1"},Me={key:0,class:"p-2"},qe=["onClick","onMouseenter"],We={key:1,class:"p-2"},$e=["onClick","onMouseenter"],Ge={key:2,class:"p-2 border-t border-slate-200"},Pe=["onUpdate:modelValue"],Ne=["value"],ce={__name:"DXSearchBar",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"Поиск..."},label:{type:String,default:""},helper:{type:String,default:""},error:{type:String,default:""},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:"md"},suggestions:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},hotkey:{type:String,default:null},showHistory:{type:Boolean,default:!1},historyItems:{type:Array,default:()=>[]},filters:{type:Array,default:()=>[]},debounce:{type:Number,default:300},clearable:{type:Boolean,default:!0},dropdownWidth:{type:String,default:"auto"}},emits:["update:modelValue","search","select-suggestion","filter-change","clear"],setup(e,{emit:r}){const t=e,a=r,l=i(!1),c=i(-1),m=i(-1),F=i({});let D=null;const ie=z(()=>{const u={sm:"w-64",md:"w-80",lg:"w-96",xl:"w-[28rem]",auto:"w-full"};return u[t.dropdownWidth]||u.auto}),de=z(()=>{if(!t.hotkey)return"";const u=t.hotkey.toLowerCase().split("+"),d=u.slice(0,-1),s=u[u.length-1].toUpperCase(),n={ctrl:"Ctrl",cmd:"⌘",meta:"⌘",alt:"Alt",shift:"Shift"};return[...d.map(B=>n[B]||B),s].join("+")});function he(u){a("update:modelValue",u),l.value=!0,D&&clearTimeout(D),D=setTimeout(()=>{u.trim()&&a("search",u)},t.debounce)}function me(){l.value=!0}function pe(){setTimeout(()=>{l.value=!1},200)}function ye(){c.value>=0&&t.suggestions[c.value]?T(t.suggestions[c.value]):t.modelValue.trim()&&a("search",t.modelValue)}function ge(){l.value=!1}function fe(){t.suggestions.length>0?c.value=Math.min(c.value+1,t.suggestions.length-1):t.historyItems.length>0&&(m.value=Math.min(m.value+1,t.historyItems.length-1))}function ve(){t.suggestions.length>0?c.value=Math.max(c.value-1,-1):t.historyItems.length>0&&(m.value=Math.max(m.value-1,-1))}function T(u){a("update:modelValue",u.title),a("select-suggestion",u),l.value=!1}function Se(u){a("update:modelValue",u),a("search",u),l.value=!1}function Ee(){a("filter-change",{...F.value})}function be(){a("update:modelValue",""),a("clear"),l.value=!1}function M(u){if(!t.hotkey)return;const d=t.hotkey.toLowerCase().split("+"),s=d[d.length-1].toLowerCase(),n=d.slice(0,-1),E=u.key.toLowerCase()===s,B=n.includes("ctrl")?u.ctrlKey:!u.ctrlKey,Fe=n.includes("cmd")||n.includes("meta")?u.metaKey:!u.metaKey,De=n.includes("alt")?u.altKey:!u.altKey,Be=n.includes("shift")?u.shiftKey:!u.shiftKey;if(E&&B&&Fe&&De&&Be){u.preventDefault();const W=document.querySelector('[data-component="DXSearchBar"] input');W&&W.focus()}}function q(u){rootElement.value&&!rootElement.value.contains(u.target)&&(l.value=!1)}return Ce(()=>{t.hotkey&&document.addEventListener("keydown",M),document.addEventListener("click",q)}),we(()=>{t.hotkey&&document.removeEventListener("keydown",M),document.removeEventListener("click",q),D&&clearTimeout(D)}),Ve(()=>t.filters,u=>{u&&u.length>0&&u.forEach(d=>{F.value[d.id]||(F.value[d.id]=d.options[0]||"")})},{immediate:!0}),(u,d)=>(o(),h("div",{ref:"rootElement",class:"relative w-full","data-component":"DXSearchBar","data-size":e.size,"data-loading":e.loading},[y(Le,{"model-value":e.modelValue,placeholder:e.placeholder,disabled:e.disabled,size:e.size,error:e.error,helper:e.helper,label:e.label,required:e.required,"prefix-icon":I(ze),"onUpdate:modelValue":he,onFocus:me,onBlur:pe,onKeydown:[C(ye,["enter"]),C(ge,["escape"]),C($(fe,["prevent"]),["down"]),C($(ve,["prevent"]),["up"])]},{suffix:p(()=>[G("div",Te,[e.loading?(o(),w(Xe,{key:0,size:"sm"})):e.modelValue&&e.clearable?(o(),w(P,{key:1,icon:I(He),size:"sm",class:"cursor-pointer text-slate-400 hover:text-slate-600",onClick:be},null,8,["icon"])):g("",!0),e.hotkey&&!e.modelValue?(o(),w(v,{key:2,tag:"span",size:"xs",color:"muted",class:"border border-slate-200 rounded px-1.5 py-0.5"},{default:p(()=>[f(b(de.value),1)]),_:1})):g("",!0)])]),_:1},8,["model-value","placeholder","disabled","size","error","helper","label","required","prefix-icon","onKeydown"]),y(ke,{name:"fade"},{default:p(()=>[l.value&&(e.suggestions.length>0||e.showHistory&&e.historyItems.length>0||e.filters.length>0)?(o(),h("div",{key:0,class:K(["absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg max-h-96 overflow-y-auto",ie.value])},[e.showHistory&&e.historyItems.length>0&&!e.modelValue?(o(),h("div",Me,[y(v,{tag:"div",size:"xs",weight:"semibold",color:"muted",class:"px-2 py-1 uppercase"},{default:p(()=>[...d[0]||(d[0]=[f(" История поиска ",-1)])]),_:1}),(o(!0),h(V,null,k(e.historyItems,(s,n)=>(o(),h("div",{key:n,class:K(["px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer flex items-center justify-between",{"bg-slate-50":m.value===n}]),onClick:E=>Se(s),onMouseenter:E=>m.value=n},[y(v,{tag:"span"},{default:p(()=>[f(b(s),1)]),_:2},1024),y(P,{icon:I(Ie),size:"xs",class:"text-slate-400"},null,8,["icon"])],42,qe))),128))])):g("",!0),e.suggestions&&e.suggestions.length>0?(o(),h("div",We,[(o(!0),h(V,null,k(e.suggestions,(s,n)=>(o(),h("div",{key:s.id||n,class:K(["px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer",{"bg-slate-50":c.value===n}]),onClick:E=>T(s),onMouseenter:E=>c.value=n},[y(v,{tag:"div",weight:"medium"},{default:p(()=>[f(b(s.title),1)]),_:2},1024),s.category?(o(),w(v,{key:0,tag:"div",size:"xs",color:"muted",class:"mt-0.5"},{default:p(()=>[f(b(s.category),1)]),_:2},1024)):g("",!0)],42,$e))),128))])):g("",!0),e.filters&&e.filters.length>0?(o(),h("div",Ge,[y(v,{tag:"div",size:"xs",weight:"semibold",color:"muted",class:"px-2 py-1 uppercase mb-2"},{default:p(()=>[...d[1]||(d[1]=[f(" Фильтры ",-1)])]),_:1}),(o(!0),h(V,null,k(e.filters,s=>(o(),h("div",{key:s.id,class:"mb-2"},[y(v,{tag:"label",size:"xs",color:"muted",class:"block mb-1"},{default:p(()=>[f(b(s.label),1)]),_:2},1024),Ae(G("select",{"onUpdate:modelValue":n=>F.value[s.id]=n,class:"w-full text-sm border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-slate-900/10",onChange:Ee},[(o(!0),h(V,null,k(s.options,n=>(o(),h("option",{key:n,value:n},b(n),9,Ne))),128))],40,Pe),[[xe,F.value[s.id]]])]))),128))])):g("",!0)],2)):g("",!0)]),_:1})],8,Ke))}},S=Qe(ce,[["__scopeId","data-v-83424ed8"]]);ce.__docgenInfo={exportName:"default",displayName:"DXSearchBar",description:"",tags:{},props:[{name:"modelValue",description:"Значение поискового запроса (v-model)",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"Placeholder",type:{name:"string"},defaultValue:{func:!1,value:'"Поиск..."'}},{name:"label",description:"Лейбл",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"helper",description:"Вспомогательный текст",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"error",description:"Текст ошибки",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"required",description:"Обязательное поле",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Отключенное состояние",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Размер: xs | sm | md | lg | xl",type:{name:"string"},defaultValue:{func:!1,value:'"md"'}},{name:"suggestions",description:`Массив предложений для автодополнения
Формат: [{ id, title, category? }]`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"loading",description:"Индикация загрузки",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hotkey",description:'Горячая клавиша (например, "ctrl+k" или "cmd+k")',type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"showHistory",description:"Показывать историю поиска",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"historyItems",description:"Элементы истории поиска",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"filters",description:`Фильтры для расширенного поиска
Формат: [{ id, label, options: [] }]`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"debounce",description:"Задержка debounce в миллисекундах",type:{name:"number"},defaultValue:{func:!1,value:"300"}},{name:"clearable",description:"Показывать кнопку очистки",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"dropdownWidth",description:"Ширина dropdown: sm | md | lg | xl | auto",type:{name:"string"},defaultValue:{func:!1,value:'"auto"'}}],events:[{name:"update:modelValue"},{name:"search"},{name:"select-suggestion"},{name:"filter-change"},{name:"clear"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/molecules/DXSearchBar/DXSearchBar.vue"]};const iu={title:"Molecules/DXSearchBar",component:S,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXSearchBar

Поисковая строка с автодополнением и расширенными возможностями поиска.

## Назначение

DXSearchBar предоставляет полнофункциональную поисковую строку с автодополнением,
историей поиска, фильтрами и поддержкой горячих клавиш. Используется для глобального
поиска в приложении, поиска в таблицах и каталогах.

## Архитектура

### Использует
- \`DXInput\` - базовый компонент input
- \`DXIcon\` - для иконок
- \`DXLoader\` - для индикации загрузки
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXHeaderBar\` - для глобального поиска
- \`DXTableToolbar\` - для поиска в таблице
- Каталоги товаров
- Поиск пользователей

## Внутренняя логика

### Debounce
Поиск выполняется с задержкой (debounce) для оптимизации запросов к серверу.

### Горячие клавиши
Поддерживает настройку горячих клавиш (например, Ctrl+K) для быстрого фокуса на поиск.

### Автодополнение
Показывает предложения из массива suggestions при вводе текста.

### История поиска
Сохраняет и отображает историю поисковых запросов.

## Особенности

### Клавиатурная навигация
- Стрелки вверх/вниз - навигация по предложениям
- Enter - выбор выделенного предложения
- Escape - закрытие dropdown

### Очистка
Кнопка очистки появляется при наличии текста (если clearable={true}).
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},debounce:{control:"number",min:0,max:2e3,step:50,description:"Задержка debounce в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"300"},category:"Behavior"}},loading:{control:"boolean",description:"Индикация загрузки.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},hotkey:{control:"text",description:'Горячая клавиша (например, "ctrl+k").',table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Behavior"}}}},A={args:{placeholder:"Поиск..."},parameters:{docs:{description:{story:"Базовая поисковая строка без дополнительных функций."}}},render:e=>({components:{DXSearchBar:S},setup(){const r=i("");return{args:e,searchQuery:r,handleSearch:a=>{console.log("Поиск:",a)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        v-bind="args"
        @search="handleSearch"
      />
    `})},x={parameters:{docs:{description:{story:"Поисковая строка с автодополнением. Предложения отображаются при вводе текста."}}},render:()=>({components:{DXSearchBar:S},setup(){const e=i(""),r=i(!1),t=z(()=>e.value?[{id:1,title:"Vue 3 документация",category:"Docs"},{id:2,title:"Vue Router",category:"Library"},{id:3,title:"Vuex/Pinia",category:"State"},{id:4,title:"Composition API",category:"Guide"}].filter(c=>c.title.toLowerCase().includes(e.value.toLowerCase())):[]);return{searchQuery:e,suggestions:t,isLoading:r,handleSearch:c=>{console.log("Поиск:",c),r.value=!0,setTimeout(()=>{r.value=!1},1e3)},handleSelectSuggestion:c=>{console.log("Выбрано:",c)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        placeholder="Поиск товаров..."
        @search="handleSearch"
        @select-suggestion="handleSelectSuggestion"
      />
    `})},L={parameters:{docs:{description:{story:"Поисковая строка с историей поиска. История отображается при фокусе на пустом поле."}}},render:()=>({components:{DXSearchBar:S},setup(){const e=i(""),r=i(["Vue 3","TypeScript","Composition API","Tailwind CSS"]);return{searchQuery:e,searchHistory:r,handleSearch:a=>{console.log("Поиск:",a),a&&!r.value.includes(a)&&(r.value.unshift(a),r.value.length>10&&r.value.pop())}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :show-history="true"
        :history-items="searchHistory"
        placeholder="Поиск с историей..."
        @search="handleSearch"
      />
    `})},X={parameters:{docs:{description:{story:"Поисковая строка с горячей клавишей. Нажмите Ctrl+K (или Cmd+K на Mac) для фокуса на поиск."}}},render:()=>({components:{DXSearchBar:S},setup(){return{globalSearch:i(""),handleGlobalSearch:t=>{console.log("Глобальный поиск:",t)}}},template:`
      <DXSearchBar
        v-model="globalSearch"
        hotkey="ctrl+k"
        placeholder="Глобальный поиск (Ctrl+K)"
        @search="handleGlobalSearch"
      />
    `})},Q={parameters:{docs:{description:{story:"Поисковая строка с фильтрами для расширенного поиска."}}},render:()=>({components:{DXSearchBar:S},setup(){const e=i(""),r=i([{id:"type",label:"Тип",options:["Все","Документы","Код","Изображения"]},{id:"date",label:"Дата",options:["Все","Сегодня","Неделя","Месяц"]}]);return{searchQuery:e,searchFilters:r,handleSearch:l=>{console.log("Поиск:",l)},handleFilterChange:l=>{console.log("Фильтры:",l)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :filters="searchFilters"
        placeholder="Расширенный поиск..."
        @search="handleSearch"
        @filter-change="handleFilterChange"
      />
    `})},H={parameters:{docs:{description:{story:"Полнофункциональная поисковая строка со всеми возможностями: автодополнение, история, фильтры и горячая клавиша."}}},render:()=>({components:{DXSearchBar:S},setup(){const e=i(""),r=i(!1),t=i(["Vue 3","TypeScript"]),a=z(()=>e.value?[{id:1,title:"Vue 3 документация",category:"Docs"},{id:2,title:"Vue Router",category:"Library"}].filter(m=>m.title.toLowerCase().includes(e.value.toLowerCase())):[]),l=i([{id:"type",label:"Тип",options:["Все","Документы","Код"]}]);return{searchQuery:e,suggestions:a,isLoading:r,searchHistory:t,searchFilters:l,handleSearch:m=>{console.log("Поиск:",m),r.value=!0,setTimeout(()=>{r.value=!1},1e3)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        :show-history="true"
        :history-items="searchHistory"
        :filters="searchFilters"
        hotkey="ctrl+k"
        placeholder="Полнофункциональный поиск..."
        @search="handleSearch"
      />
    `})};var N,U,R;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Поиск...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая поисковая строка без дополнительных функций.'
      }
    }
  },
  render: args => ({
    components: {
      DXSearchBar
    },
    setup() {
      const searchQuery = ref('');
      const handleSearch = query => {
        console.log('Поиск:', query);
      };
      return {
        args,
        searchQuery,
        handleSearch
      };
    },
    template: \`
      <DXSearchBar
        v-model="searchQuery"
        v-bind="args"
        @search="handleSearch"
      />
    \`
  })
}`,...(R=(U=A.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var j,O,J;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с автодополнением. Предложения отображаются при вводе текста.'
      }
    }
  },
  render: () => ({
    components: {
      DXSearchBar
    },
    setup() {
      const searchQuery = ref('');
      const isLoading = ref(false);
      const suggestions = computed(() => {
        if (!searchQuery.value) return [];
        return [{
          id: 1,
          title: 'Vue 3 документация',
          category: 'Docs'
        }, {
          id: 2,
          title: 'Vue Router',
          category: 'Library'
        }, {
          id: 3,
          title: 'Vuex/Pinia',
          category: 'State'
        }, {
          id: 4,
          title: 'Composition API',
          category: 'Guide'
        }].filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
      });
      const handleSearch = query => {
        console.log('Поиск:', query);
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      };
      const handleSelectSuggestion = suggestion => {
        console.log('Выбрано:', suggestion);
      };
      return {
        searchQuery,
        suggestions,
        isLoading,
        handleSearch,
        handleSelectSuggestion
      };
    },
    template: \`
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        placeholder="Поиск товаров..."
        @search="handleSearch"
        @select-suggestion="handleSelectSuggestion"
      />
    \`
  })
}`,...(J=(O=x.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Y,Z,_;L.parameters={...L.parameters,docs:{...(Y=L.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с историей поиска. История отображается при фокусе на пустом поле.'
      }
    }
  },
  render: () => ({
    components: {
      DXSearchBar
    },
    setup() {
      const searchQuery = ref('');
      const searchHistory = ref(['Vue 3', 'TypeScript', 'Composition API', 'Tailwind CSS']);
      const handleSearch = query => {
        console.log('Поиск:', query);
        if (query && !searchHistory.value.includes(query)) {
          searchHistory.value.unshift(query);
          if (searchHistory.value.length > 10) {
            searchHistory.value.pop();
          }
        }
      };
      return {
        searchQuery,
        searchHistory,
        handleSearch
      };
    },
    template: \`
      <DXSearchBar
        v-model="searchQuery"
        :show-history="true"
        :history-items="searchHistory"
        placeholder="Поиск с историей..."
        @search="handleSearch"
      />
    \`
  })
}`,...(_=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var ee,ue,te;X.parameters={...X.parameters,docs:{...(ee=X.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с горячей клавишей. Нажмите Ctrl+K (или Cmd+K на Mac) для фокуса на поиск.'
      }
    }
  },
  render: () => ({
    components: {
      DXSearchBar
    },
    setup() {
      const globalSearch = ref('');
      const handleGlobalSearch = query => {
        console.log('Глобальный поиск:', query);
      };
      return {
        globalSearch,
        handleGlobalSearch
      };
    },
    template: \`
      <DXSearchBar
        v-model="globalSearch"
        hotkey="ctrl+k"
        placeholder="Глобальный поиск (Ctrl+K)"
        @search="handleGlobalSearch"
      />
    \`
  })
}`,...(te=(ue=X.parameters)==null?void 0:ue.docs)==null?void 0:te.source}}};var ae,ne,re;Q.parameters={...Q.parameters,docs:{...(ae=Q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с фильтрами для расширенного поиска.'
      }
    }
  },
  render: () => ({
    components: {
      DXSearchBar
    },
    setup() {
      const searchQuery = ref('');
      const searchFilters = ref([{
        id: 'type',
        label: 'Тип',
        options: ['Все', 'Документы', 'Код', 'Изображения']
      }, {
        id: 'date',
        label: 'Дата',
        options: ['Все', 'Сегодня', 'Неделя', 'Месяц']
      }]);
      const handleSearch = query => {
        console.log('Поиск:', query);
      };
      const handleFilterChange = filters => {
        console.log('Фильтры:', filters);
      };
      return {
        searchQuery,
        searchFilters,
        handleSearch,
        handleFilterChange
      };
    },
    template: \`
      <DXSearchBar
        v-model="searchQuery"
        :filters="searchFilters"
        placeholder="Расширенный поиск..."
        @search="handleSearch"
        @filter-change="handleFilterChange"
      />
    \`
  })
}`,...(re=(ne=Q.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,oe,le;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Полнофункциональная поисковая строка со всеми возможностями: автодополнение, история, фильтры и горячая клавиша.'
      }
    }
  },
  render: () => ({
    components: {
      DXSearchBar
    },
    setup() {
      const searchQuery = ref('');
      const isLoading = ref(false);
      const searchHistory = ref(['Vue 3', 'TypeScript']);
      const suggestions = computed(() => {
        if (!searchQuery.value) return [];
        return [{
          id: 1,
          title: 'Vue 3 документация',
          category: 'Docs'
        }, {
          id: 2,
          title: 'Vue Router',
          category: 'Library'
        }].filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
      });
      const searchFilters = ref([{
        id: 'type',
        label: 'Тип',
        options: ['Все', 'Документы', 'Код']
      }]);
      const handleSearch = query => {
        console.log('Поиск:', query);
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      };
      return {
        searchQuery,
        suggestions,
        isLoading,
        searchHistory,
        searchFilters,
        handleSearch
      };
    },
    template: \`
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        :show-history="true"
        :history-items="searchHistory"
        :filters="searchFilters"
        hotkey="ctrl+k"
        placeholder="Полнофункциональный поиск..."
        @search="handleSearch"
      />
    \`
  })
}`,...(le=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const du=["Default","WithSuggestions","WithHistory","WithHotkey","WithFilters","FullFeatured"];export{A as Default,H as FullFeatured,Q as WithFilters,L as WithHistory,X as WithHotkey,x as WithSuggestions,du as __namedExportsOrder,iu as default};
