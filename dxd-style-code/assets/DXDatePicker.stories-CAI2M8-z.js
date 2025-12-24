import{_ as a}from"./DXDatePicker-BJkPB1Pe.js";import{r as n}from"./vue.esm-bundler-C1fUoNF-.js";const k={title:"Molecules/DXDatePicker",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXDatePicker

Компонент выбора даты с поддержкой одиночной даты и диапазона дат.

## Назначение

DXDatePicker предоставляет стандартизированный способ выбора даты или диапазона дат.
Компонент использует нативный input type="date" для одиночной даты и кастомный интерфейс
для выбора диапазона.

## Архитектура

### Использует
- Нативный input type="date" - для одиночной даты
- Кастомный интерфейс - для диапазона дат

### Используется в
- Формы с датами
- Фильтры по датам
- Календари событий
- Любые места, требующие выбор даты

## Внутренняя логика

### Режимы
- **single** (по умолчанию): Выбор одной даты
- **range**: Выбор диапазона дат (от и до)

### Формат значений
- **single**: Строка в формате YYYY-MM-DD
- **range**: Объект \`{ start: 'YYYY-MM-DD', end: 'YYYY-MM-DD' }\`

### Отображение диапазона
При range режиме:
- Отображается форматированная строка "DD.MM.YYYY - DD.MM.YYYY"
- При клике открывается календарь с двумя полями (от/до)
- Кнопки "Применить" и "Отмена" для подтверждения выбора

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single: String (YYYY-MM-DD)
- Для range: Object ({ start, end })

### Форматирование
Даты форматируются в локализованном формате (ru-RU) для отображения.

### Иконка календаря
Отображается иконка календаря справа от поля для визуальной индикации.
        `}}}},e={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("")}},template:'<DXDatePicker v-model="date" label="Date" />'})},t={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("2024-01-15")}},template:'<DXDatePicker v-model="date" label="Selected Date" />'})},r={render:()=>({components:{DXDatePicker:a},setup(){return{date:n("")}},template:'<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'})};var s,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Date" />'
  })
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,D,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('2024-01-15');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Selected Date" />'
  })
}`,...(p=(D=t.parameters)==null?void 0:D.docs)==null?void 0:p.source}}};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXDatePicker
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXDatePicker v-model="date" label="Birth Date" placeholder="Select your birth date" />'
  })
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const X=["Default","WithValue","WithPlaceholder"];export{e as Default,r as WithPlaceholder,t as WithValue,X as __namedExportsOrder,k as default};
