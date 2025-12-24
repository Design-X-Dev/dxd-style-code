import{_ as e}from"./DXInputMask-CAs9JJwx.js";import{r as t}from"./vue.esm-bundler-C1fUoNF-.js";const v={title:"Molecules/DXInputMask",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXInputMask

Компонент поля ввода с маской для форматирования ввода (телефоны, карты, даты и т.д.).

## Назначение

DXInputMask предоставляет способ форматирования ввода данных по заданной маске.
Компонент автоматически применяет маску при вводе и извлекает сырое значение для v-model.

## Архитектура

### Использует
- Нативный input - для ввода текста
- Логика маскирования - для форматирования

### Используется в
- Ввод телефонов
- Ввод номеров карт
- Ввод дат в определенном формате
- Ввод SSN и других форматов
- Любые места, требующие форматированный ввод

## Внутренняя логика

### Маска
Маска задается через \`mask\` prop:
- \`#\` - цифра (0-9)
- Любые другие символы - статичные символы маски

Примеры:
- \`"+7 (###) ###-##-##"\` - телефон
- \`"#### #### #### ####"\` - номер карты
- \`"##/##/####"\` - дата

### Форматирование
- При вводе автоматически применяется маска
- Извлекаются только цифры для v-model
- Статичные символы маски добавляются автоматически

### Валидация ввода
- Разрешаются только цифры (для масок с #)
- Служебные клавиши (Backspace, Delete, стрелки) разрешены
- Остальные символы блокируются

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Значение содержит только цифры (без форматирования)
- При установке значения автоматически применяется маска

### Позиция курсора
Курсор автоматически позиционируется в конец введенного текста.

### Примеры масок
- Телефон: \`"+7 (###) ###-##-##"\`
- Карта: \`"#### #### #### ####"\`
- Дата: \`"##/##/####"\`
- SSN: \`"###-##-####"\`
        `}}}},n={render:()=>({components:{DXInputMask:e},setup(){return{phone:t("")}},template:'<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />'})},a={render:()=>({components:{DXInputMask:e},setup(){return{card:t("")}},template:'<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />'})},r={render:()=>({components:{DXInputMask:e},setup(){return{date:t("")}},template:'<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />'})},s={render:()=>({components:{DXInputMask:e},setup(){return{ssn:t("")}},template:'<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />'})};var p,c,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const phone = ref('');
      return {
        phone
      };
    },
    template: '<DXInputMask v-model="phone" mask="+7 (###) ###-##-##" label="Phone" placeholder="+7 (999) 123-45-67" />'
  })
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const card = ref('');
      return {
        card
      };
    },
    template: '<DXInputMask v-model="card" mask="#### #### #### ####" label="Card Number" placeholder="0000 0000 0000 0000" />'
  })
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var k,D,M;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const date = ref('');
      return {
        date
      };
    },
    template: '<DXInputMask v-model="date" mask="##/##/####" label="Date" placeholder="DD/MM/YYYY" />'
  })
}`,...(M=(D=r.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,X,h;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXInputMask
    },
    setup() {
      const ssn = ref('');
      return {
        ssn
      };
    },
    template: '<DXInputMask v-model="ssn" mask="###-##-####" label="SSN" placeholder="123-45-6789" />'
  })
}`,...(h=(X=s.parameters)==null?void 0:X.docs)==null?void 0:h.source}}};const b=["Phone","CreditCard","Date","SSN"];export{a as CreditCard,r as Date,n as Phone,s as SSN,b as __namedExportsOrder,v as default};
