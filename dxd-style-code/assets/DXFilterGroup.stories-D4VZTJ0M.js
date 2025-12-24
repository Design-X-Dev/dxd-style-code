import{_ as l}from"./DXFilterGroup-BKBYHaHl.js";import{r as u}from"./vue.esm-bundler-C1fUoNF-.js";const f={title:"Molecules/DXFilterGroup",component:l,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXFilterGroup

Компонент группы фильтров для выбора одного значения из списка опций с поддержкой счетчиков.

## Назначение

DXFilterGroup предоставляет простой способ создания группы фильтров с кнопками-переключателями.
Компонент поддерживает счетчики для каждой опции и возможность сброса выбранного значения.

## Архитектура

### Использует
- Нативные HTML элементы - для простоты и доступности

### Используется в
- Фильтры списков и таблиц
- Переключение режимов отображения
- Категории и теги
- Любые места, требующие выбор одного значения из группы

## Внутренняя логика

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'all', label: 'All', count?: 50 }]
\`\`\`

Каждая опция может содержать:
- \`value\` - значение опции (обязательно)
- \`label\` - текст опции (обязательно)
- \`count\` - счетчик (опционально)

### Счетчики
При наличии \`count\` в опции, счетчик отображается рядом с текстом.

### Сброс
При \`clearable={true}\` (по умолчанию) и выбранном значении:
- Отображается кнопка "Сбросить"
- При клике значение сбрасывается в \`null\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Boolean значений.

### Визуальное оформление
- Активная опция: темный фон (\`bg-slate-800\`), белый текст
- Неактивные опции: белый фон, серый текст, hover эффект
- Кнопка сброса: желтый фон (\`bg-amber-50\`), желтый текст

### Лейбл
Поддерживает опциональный \`label\` prop для отображения заголовка группы.
        `}}}},p=[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"pending",label:"Pending"},{value:"completed",label:"Completed"}],e={render:()=>({components:{DXFilterGroup:l},setup(){return{selected:u("all"),filters:p}},template:'<DXFilterGroup v-model="selected" :filters="filters" />'})},t={render:()=>({components:{DXFilterGroup:l},setup(){return{selected:u("all"),filtersWithCount:[{value:"all",label:"All",count:50},{value:"active",label:"Active",count:32},{value:"completed",label:"Completed",count:18}]}},template:'<DXFilterGroup v-model="selected" :filters="filtersWithCount" />'})};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFilterGroup
    },
    setup() {
      const selected = ref('all');
      return {
        selected,
        filters
      };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filters" />'
  })
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,a,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFilterGroup
    },
    setup() {
      const selected = ref('all');
      const filtersWithCount = [{
        value: 'all',
        label: 'All',
        count: 50
      }, {
        value: 'active',
        label: 'Active',
        count: 32
      }, {
        value: 'completed',
        label: 'Completed',
        count: 18
      }];
      return {
        selected,
        filtersWithCount
      };
    },
    template: '<DXFilterGroup v-model="selected" :filters="filtersWithCount" />'
  })
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const b=["Default","WithCounts"];export{e as Default,t as WithCounts,b as __namedExportsOrder,f as default};
