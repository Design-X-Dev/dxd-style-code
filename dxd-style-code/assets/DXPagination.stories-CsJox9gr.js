import{_ as e}from"./DXPagination-C9wlZ4pU.js";import{r}from"./vue.esm-bundler-C1fUoNF-.js";import"./DXButton-DzgLKRkE.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./DXNav-rdhJaqaA.js";import"./ChevronLeftIcon-DZ_29e3J.js";import"./ChevronRightIcon-i770bDiF.js";const I={title:"Molecules/DXPagination",component:e,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXPagination

Компонент пагинации для навигации по страницам с поддержкой v-model.

## Назначение

DXPagination предоставляет удобный способ навигации по страницам с визуальным отображением
текущей страницы и быстрым доступом к соседним страницам. Компонент автоматически управляет
отображением номеров страниц и эллипсисов для больших списков.

## Архитектура

### Использует
- \`DXNav\` - семантическая обертка навигации с автоматическим aria-label
- \`DXButton\` - кнопки для навигации и номеров страниц
- \`DXIcon\` - иконки для кнопок Previous/Next (ChevronLeftIcon, ChevronRightIcon)

### Используется в
- Таблицы с пагинацией (\`DXTable\`, \`DXTablePagination\`)
- Списки элементов с разбивкой на страницы
- Результаты поиска
- Любые компоненты, требующие навигации по страницам

## Внутренняя логика

### Отображение страниц
Компонент автоматически вычисляет видимые страницы:
- Всегда показывает первую страницу
- Показывает страницы вокруг текущей (количество определяется \`siblingCount\`)
- Добавляет эллипсисы (\`...\`) когда есть пропуски
- Всегда показывает последнюю страницу (если страниц больше 1)

### Варианты кнопок
- **Previous/Next**: Используют \`DXButton\` с \`variant="ghost"\` и \`iconOnly={true}\`
- **Активная страница**: Использует \`DXButton\` с \`variant="primary"\`
- **Неактивные страницы**: Используют \`DXButton\` с \`variant="ghost"\`

### Состояния
- **disabled**: Кнопки Previous/Next автоматически отключаются на первой/последней странице
- **active**: Текущая страница визуально выделяется через \`variant="primary"\`
- **aria-current**: Автоматически добавляется к текущей странице для accessibility

## Особенности

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.
Размер применяется ко всем кнопкам в пагинации.

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Значение - номер текущей страницы (Number, начиная с 1)
- Автоматически валидирует границы (не может быть меньше 1 или больше \`totalPages\`)

### Accessibility
- Использует \`DXNav\` с \`aria-label="Pagination"\`
- Кнопки Previous/Next имеют \`aria-label\`
- Текущая страница имеет \`aria-current="page"\`
- Все кнопки поддерживают клавиатурную навигацию через \`DXButton\`

## Ограничения

- Минимальное количество страниц: 1
- Номер страницы начинается с 1 (не с 0)
- \`siblingCount\` определяет количество страниц вокруг текущей (по умолчанию 1)
        `}}},argTypes:{modelValue:{control:{type:"number"},description:"Текущая страница (v-model)",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},totalPages:{control:{type:"number"},description:"Всего страниц",table:{type:{summary:"number"}}},siblingCount:{control:{type:"number"},description:"Сколько страниц показывать вокруг текущей",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Размер кнопок",table:{type:{summary:"string"},defaultValue:{summary:"md"}}}}},a={render:()=>({components:{DXPagination:e},setup(){return{page:r(1)}},template:'<DXPagination v-model="page" :total-pages="10" />'})},n={render:()=>({components:{DXPagination:e},setup(){return{page:r(5)}},template:'<DXPagination v-model="page" :total-pages="10" />'})},t={render:()=>({components:{DXPagination:e},setup(){return{page:r(15)}},template:'<DXPagination v-model="page" :total-pages="50" />'})},o={render:()=>({components:{DXPagination:e},setup(){return{page:r(1)}},template:`
      <div class="space-y-4">
        <DXPagination v-model="page" :total-pages="10" size="sm" />
        <DXPagination v-model="page" :total-pages="10" size="md" />
        <DXPagination v-model="page" :total-pages="10" size="lg" />
      </div>
    `})};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />'
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,l,c;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(5);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="10" />'
  })
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,d,D;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(15);
      return {
        page
      };
    },
    template: '<DXPagination v-model="page" :total-pages="50" />'
  })
}`,...(D=(d=t.parameters)==null?void 0:d.docs)==null?void 0:D.source}}};var P,v,X;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXPagination
    },
    setup() {
      const page = ref(1);
      return {
        page
      };
    },
    template: \`
      <div class="space-y-4">
        <DXPagination v-model="page" :total-pages="10" size="sm" />
        <DXPagination v-model="page" :total-pages="10" size="md" />
        <DXPagination v-model="page" :total-pages="10" size="lg" />
      </div>
    \`
  })
}`,...(X=(v=o.parameters)==null?void 0:v.docs)==null?void 0:X.source}}};const T=["Default","MiddlePage","ManyPages","Sizes"];export{a as Default,t as ManyPages,n as MiddlePage,o as Sizes,T as __namedExportsOrder,I as default};
