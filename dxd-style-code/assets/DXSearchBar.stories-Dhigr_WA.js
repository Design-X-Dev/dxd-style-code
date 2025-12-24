import{r,c as k}from"./vue.esm-bundler-C1fUoNF-.js";import{D as s}from"./DXSearchBar-BRjmc8VO.js";import"./DXInput-BG2R0LGs.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXLoader-DAWlORDv.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./DXText-Bu-Qlv6N.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./XMarkIcon-DTqRFgaM.js";import"./MagnifyingGlassIcon-DKNfedfR.js";import"./ClockIcon-Dxvdr19S.js";const $={title:"Molecules/DXSearchBar",component:s,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},debounce:{control:"number",min:0,max:2e3,step:50,description:"Задержка debounce в миллисекундах.",table:{type:{summary:"number"},defaultValue:{summary:"300"},category:"Behavior"}},loading:{control:"boolean",description:"Индикация загрузки.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},hotkey:{control:"text",description:'Горячая клавиша (например, "ctrl+k").',table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Behavior"}}}},c={args:{placeholder:"Поиск..."},parameters:{docs:{description:{story:"Базовая поисковая строка без дополнительных функций."}}},render:e=>({components:{DXSearchBar:s},setup(){const u=r("");return{args:e,searchQuery:u,handleSearch:n=>{console.log("Поиск:",n)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        v-bind="args"
        @search="handleSearch"
      />
    `})},l={parameters:{docs:{description:{story:"Поисковая строка с автодополнением. Предложения отображаются при вводе текста."}}},render:()=>({components:{DXSearchBar:s},setup(){const e=r(""),u=r(!1),a=k(()=>e.value?[{id:1,title:"Vue 3 документация",category:"Docs"},{id:2,title:"Vue Router",category:"Library"},{id:3,title:"Vuex/Pinia",category:"State"},{id:4,title:"Composition API",category:"Guide"}].filter(o=>o.title.toLowerCase().includes(e.value.toLowerCase())):[]);return{searchQuery:e,suggestions:a,isLoading:u,handleSearch:o=>{console.log("Поиск:",o),u.value=!0,setTimeout(()=>{u.value=!1},1e3)},handleSelectSuggestion:o=>{console.log("Выбрано:",o)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        placeholder="Поиск товаров..."
        @search="handleSearch"
        @select-suggestion="handleSelectSuggestion"
      />
    `})},i={parameters:{docs:{description:{story:"Поисковая строка с историей поиска. История отображается при фокусе на пустом поле."}}},render:()=>({components:{DXSearchBar:s},setup(){const e=r(""),u=r(["Vue 3","TypeScript","Composition API","Tailwind CSS"]);return{searchQuery:e,searchHistory:u,handleSearch:n=>{console.log("Поиск:",n),n&&!u.value.includes(n)&&(u.value.unshift(n),u.value.length>10&&u.value.pop())}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :show-history="true"
        :history-items="searchHistory"
        placeholder="Поиск с историей..."
        @search="handleSearch"
      />
    `})},h={parameters:{docs:{description:{story:"Поисковая строка с горячей клавишей. Нажмите Ctrl+K (или Cmd+K на Mac) для фокуса на поиск."}}},render:()=>({components:{DXSearchBar:s},setup(){return{globalSearch:r(""),handleGlobalSearch:a=>{console.log("Глобальный поиск:",a)}}},template:`
      <DXSearchBar
        v-model="globalSearch"
        hotkey="ctrl+k"
        placeholder="Глобальный поиск (Ctrl+K)"
        @search="handleGlobalSearch"
      />
    `})},d={parameters:{docs:{description:{story:"Поисковая строка с фильтрами для расширенного поиска."}}},render:()=>({components:{DXSearchBar:s},setup(){const e=r(""),u=r([{id:"type",label:"Тип",options:["Все","Документы","Код","Изображения"]},{id:"date",label:"Дата",options:["Все","Сегодня","Неделя","Месяц"]}]);return{searchQuery:e,searchFilters:u,handleSearch:t=>{console.log("Поиск:",t)},handleFilterChange:t=>{console.log("Фильтры:",t)}}},template:`
      <DXSearchBar
        v-model="searchQuery"
        :filters="searchFilters"
        placeholder="Расширенный поиск..."
        @search="handleSearch"
        @filter-change="handleFilterChange"
      />
    `})},p={parameters:{docs:{description:{story:"Полнофункциональная поисковая строка со всеми возможностями: автодополнение, история, фильтры и горячая клавиша."}}},render:()=>({components:{DXSearchBar:s},setup(){const e=r(""),u=r(!1),a=r(["Vue 3","TypeScript"]),n=k(()=>e.value?[{id:1,title:"Vue 3 документация",category:"Docs"},{id:2,title:"Vue Router",category:"Library"}].filter(m=>m.title.toLowerCase().includes(e.value.toLowerCase())):[]),t=r([{id:"type",label:"Тип",options:["Все","Документы","Код"]}]);return{searchQuery:e,suggestions:n,isLoading:u,searchHistory:a,searchFilters:t,handleSearch:m=>{console.log("Поиск:",m),u.value=!0,setTimeout(()=>{u.value=!1},1e3)}}},template:`
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
    `})};var g,y,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var E,F,D;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(F=l.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var B,f,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var A,b,v;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(v=(b=h.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var Q,X,L;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(L=(X=d.parameters)==null?void 0:X.docs)==null?void 0:L.source}}};var H,V,w;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(w=(V=p.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const uu=["Default","WithSuggestions","WithHistory","WithHotkey","WithFilters","FullFeatured"];export{c as Default,p as FullFeatured,d as WithFilters,i as WithHistory,h as WithHotkey,l as WithSuggestions,uu as __namedExportsOrder,$ as default};
