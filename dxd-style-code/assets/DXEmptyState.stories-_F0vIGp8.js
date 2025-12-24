import{a as _,d as s,j as X,p as h,g as N,q as j,f as w,e as n,o as r,y as i,z as c}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as d}from"./DXText-Bu-Qlv6N.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";const V={class:"bg-white border border-slate-100 rounded-3xl shadow-sm p-8 text-center space-y-3","data-component":"DXEmptyState"},S={__name:"DXEmptyState",props:{icon:{type:[Object,Function],required:!0},title:{type:String,required:!0},description:{type:String,default:""},animated:{type:Boolean,default:!1}},setup(t){return(b,k)=>(r(),_("div",V,[(r(),s(w(t.icon),{class:j(["w-10 h-10 text-slate-500 mx-auto",t.animated&&"animate-bounce-slow"])},null,8,["class"])),X(d,{tag:"p",size:"md",weight:"semibold",color:"default"},{default:n(()=>[i(c(t.title),1)]),_:1}),t.description?(r(),s(d,{key:0,tag:"p",size:"sm",color:"muted"},{default:n(()=>[i(c(t.description),1)]),_:1})):h("",!0),N(b.$slots,"action",{},void 0,!0)]))}},E=C(S,[["__scopeId","data-v-54499b0f"]]);S.__docgenInfo={exportName:"default",displayName:"DXEmptyState",description:"",tags:{},props:[{name:"icon",description:"Иконка (компонент)",type:{name:"object|func"},required:!0},{name:"title",description:"Заголовок",type:{name:"string"},required:!0},{name:"description",description:"Описание",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"animated",description:"Анимация иконки",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"action"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/organisms/DXEmptyState/DXEmptyState.vue"]};const T={title:"Organisms/DXEmptyState",component:E,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXEmptyState

Компонент пустого состояния для отображения, когда нет данных или контента.

## Назначение

DXEmptyState предоставляет стандартизированный способ отображения пустого состояния
в интерфейсе. Компонент используется для информирования пользователя об отсутствии данных
и предоставления действий для заполнения контента.

## Архитектура

### Использует
- \`DXText\` - для заголовка и описания
- Динамический рендеринг иконки - для отображения иконки состояния

### Используется в
- Пустые списки и таблицы
- Пустые результаты поиска
- Пустые состояния после фильтрации
- Начальные состояния (когда пользователь еще ничего не создал)
- Любые места, требующие информирования об отсутствии данных

## Внутренняя логика

### Структура
Компонент состоит из:
1. **Иконка** - визуальный индикатор состояния (обязательно)
2. **Заголовок** - краткое описание состояния (обязательно)
3. **Описание** - подробное объяснение (опционально)
4. **Действие** - кнопка или ссылка для заполнения (через слот \`action\`)

### Анимация иконки
При \`animated={true}\`:
- Иконка получает медленную bounce анимацию
- Анимация длится 3.2 секунды и повторяется бесконечно
- Создает живой эффект для привлечения внимания

## Особенности

### Визуальное оформление
- Белый фон с рамкой и тенью
- Скругление \`rounded-3xl\`
- Padding \`p-8\` для пространства
- Центрирование контента

### Слоты
- **action** - кастомное действие (кнопка, ссылка и т.д.)

### Иконка
Иконка передается через \`icon\` prop (Heroicon компонент) и отображается размером 40×40px.

### Типичные сценарии использования
- "Нет элементов" - когда список пуст
- "Нет результатов" - когда поиск не дал результатов
- "Создайте первый элемент" - для начального состояния
        `}}}},e={args:{title:"No items found",description:"Get started by creating your first item."}},o={args:{title:"No results",description:"Try adjusting your search or filter to find what you're looking for."}},a={render:()=>({components:{DXEmptyState:E},template:`
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    `})};var p,m,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    description: 'Get started by creating your first item.'
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,y,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you\\'re looking for.'
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,x,D;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXEmptyState
    },
    template: \`
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    \`
  })
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};const G=["Default","NoResults","WithAction"];export{e as Default,o as NoResults,a as WithAction,G as __namedExportsOrder,T as default};
