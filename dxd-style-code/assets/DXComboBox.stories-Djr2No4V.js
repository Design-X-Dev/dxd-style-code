import{_ as e}from"./DXComboBox-BSuwYm6m.js";import{r as a}from"./vue.esm-bundler-C1fUoNF-.js";const f={title:"Molecules/DXComboBox",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXComboBox

Компонент комбобокса с поиском и возможностью выбора из списка или ввода кастомного значения.

## Назначение

DXComboBox предоставляет гибридный компонент, объединяющий возможности input и select.
Компонент поддерживает поиск по опциям, выбор из списка и возможность ввода кастомного значения.

## Архитектура

### Использует
- Нативный input - для ввода текста
- Динамический dropdown - для отображения опций

### Используется в
- Выбор с поиском
- Ввод с автодополнением
- Кастомные значения
- Любые места, требующие гибкий выбор/ввод

## Внутренняя логика

### Поиск
При \`filterable={true}\` (по умолчанию):
- Опции фильтруются по введенному тексту
- Поиск нечувствителен к регистру
- Фильтрация происходит в реальном времени

### Кастомные значения
При \`allowCustom={true}\`:
- Можно ввести значение, которого нет в списке
- При нажатии Enter создается новое значение
- Отображается подсказка "Нажмите Enter для ..."

### Клавиатурная навигация
- **ArrowDown/ArrowUp** - навигация по опциям
- **Enter** - выбор выделенной опции или создание кастомного значения
- **Escape** - закрытие dropdown

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String или Number значений.

### Структура опций
Опции передаются через массив объектов:
\`\`\`
[{ value: 'value', label: 'Label', icon?: Icon }]
\`\`\`

### Иконки
Каждая опция может иметь иконку через \`icon\` свойство.

### Визуальная индикация
- Выбранная опция отмечена галочкой
- Выделенная опция имеет серый фон
- Chevron поворачивается при открытии dropdown
        `}}}},l=[{value:"ru",label:"Russia"},{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"}],o={render:()=>({components:{DXComboBox:e},setup(){return{value:a(""),countries:l}},template:'<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />'})},n={render:()=>({components:{DXComboBox:e},setup(){return{value:a("ru"),countries:l}},template:'<DXComboBox v-model="value" :options="countries" label="Country" />'})},r={render:()=>({components:{DXComboBox:e},setup(){return{value:a(""),countries:l}},template:'<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />'})},t={render:()=>({components:{DXComboBox:e},setup(){return{value:a("us"),countries:l}},template:'<DXComboBox v-model="value" :options="countries" label="Country" disabled />'})};var u,c,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Search country..." />'
  })
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,i;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('ru');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" />'
  })
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var v,b,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" placeholder="Type or select..." allow-custom helper="You can type a custom value" />'
  })
}`,...(C=(b=r.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var D,x,B;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXComboBox
    },
    setup() {
      const value = ref('us');
      return {
        value,
        countries
      };
    },
    template: '<DXComboBox v-model="value" :options="countries" label="Country" disabled />'
  })
}`,...(B=(x=t.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const h=["Default","WithValue","AllowCustom","Disabled"];export{r as AllowCustom,o as Default,t as Disabled,n as WithValue,h as __namedExportsOrder,f as default};
