import{r}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as n}from"./DXTimePicker-DfXpPveT.js";import"./DXInput-BG2R0LGs.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./ClockIcon-Dxvdr19S.js";const K={title:"Molecules/DXTimePicker",component:n,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXTimePicker

Компонент выбора времени с валидацией и поддержкой различных форматов.

## Назначение

DXTimePicker позволяет пользователям выбирать время через input с валидацией или через dropdown.
Поддерживает форматы 12h и 24h, с секундами или без.

## Архитектура

### Использует
- \`DXInput\` - базовый компонент input
- \`useSize\` composable - для размеров
- \`ClockIcon\` - иконка часов

### Используется в
- Формы с выбором времени
- Интеграция с \`DXDatePicker\` для выбора даты и времени
- Планировщики и календари

## Внутренняя логика

### Форматы времени
- **12h**: формат с AM/PM (например, "02:30 PM")
- **24h**: 24-часовой формат (например, "14:30")

### Валидация
- Проверка корректности формата времени
- Поддержка min-time и max-time для ограничения диапазона
- Автоматическая валидация при blur

### Dropdown
- Грид с часами, минутами и секундами (опционально)
- Выбор через клик
- Автоматическое закрытие при клике вне компонента

## Особенности

### Ручной ввод
Пользователь может вводить время вручную в input. Компонент автоматически парсит и валидирует введенное значение.

### Dropdown выбор
При фокусе на input открывается dropdown с предустановленными значениями для быстрого выбора.

### Интеграция с формами
Полностью совместим с v-model и стандартными событиями Vue (change, blur, focus).
        `}}},argTypes:{format:{control:"select",options:["12h","24h"],description:"Формат времени: 12h (с AM/PM) или 24h.",table:{type:{summary:"string"},defaultValue:{summary:"24h"},category:"Format"}},showSeconds:{control:"boolean",description:"Показывать секунды в формате времени.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Format"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},disabled:{control:"boolean",description:"Отключенное состояние.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},minTime:{control:"text",description:"Минимальное допустимое время (HH:mm или HH:mm:ss).",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Validation"}},maxTime:{control:"text",description:"Максимальное допустимое время (HH:mm или HH:mm:ss).",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Validation"}}}},t={args:{format:"24h",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Базовое использование компонента в 24-часовом формате."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},s={args:{format:"12h",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Использование 12-часового формата с AM/PM."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время (12h)" />'})},o={args:{format:"24h",showSeconds:!0,placeholder:"Выберите время"},parameters:{docs:{description:{story:"Компонент с отображением секунд."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время с секундами" />'})},a={args:{format:"24h",minTime:"09:00",maxTime:"18:00",placeholder:"Выберите время"},parameters:{docs:{description:{story:"Компонент с ограничением диапазона времени (рабочие часы 9:00 - 18:00)."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Рабочее время" helper="Выберите время с 9:00 до 18:00" />'})},m={args:{format:"24h"},parameters:{docs:{description:{story:"Компонент с предустановленным значением."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("14:30");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},i={args:{format:"24h",disabled:!0},parameters:{docs:{description:{story:"Отключенное состояние компонента."}}},render:e=>({components:{DXTimePicker:n},setup(){const u=r("14:30");return{args:e,time:u}},template:'<DXTimePicker v-model="time" v-bind="args" label="Время" />'})},c={parameters:{docs:{description:{story:"Различные размеры компонента."}}},render:()=>({components:{DXTimePicker:n},setup(){const e=r(""),u=r(""),x=r("");return{time1:e,time2:u,time3:x}},template:`
      <div class="space-y-4">
        <DXTimePicker v-model="time1" size="sm" label="Маленький" />
        <DXTimePicker v-model="time2" size="md" label="Средний" />
        <DXTimePicker v-model="time3" size="lg" label="Большой" />
      </div>
    `})};var l,p,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    format: '24h',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование компонента в 24-часовом формате.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var D,g,b;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    format: '12h',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Использование 12-часового формата с AM/PM.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время (12h)" />'
  })
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,T,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    format: '24h',
    showSeconds: true,
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с отображением секунд.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время с секундами" />'
  })
}`,...(y=(T=o.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var P,E,f;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    format: '24h',
    minTime: '09:00',
    maxTime: '18:00',
    placeholder: 'Выберите время'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с ограничением диапазона времени (рабочие часы 9:00 - 18:00).'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Рабочее время" helper="Выберите время с 9:00 до 18:00" />'
  })
}`,...(f=(E=a.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var k,X,v;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    format: '24h'
  },
  parameters: {
    docs: {
      description: {
        story: 'Компонент с предустановленным значением.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('14:30');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(v=(X=m.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};var C,F,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    format: '24h',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние компонента.'
      }
    }
  },
  render: args => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time = ref('14:30');
      return {
        args,
        time
      };
    },
    template: '<DXTimePicker v-model="time" v-bind="args" label="Время" />'
  })
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var A,S,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.'
      }
    }
  },
  render: () => ({
    components: {
      DXTimePicker
    },
    setup() {
      const time1 = ref('');
      const time2 = ref('');
      const time3 = ref('');
      return {
        time1,
        time2,
        time3
      };
    },
    template: \`
      <div class="space-y-4">
        <DXTimePicker v-model="time1" size="sm" label="Маленький" />
        <DXTimePicker v-model="time2" size="md" label="Средний" />
        <DXTimePicker v-model="time3" size="lg" label="Большой" />
      </div>
    \`
  })
}`,...(M=(S=c.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const L=["Default","Format12h","WithSeconds","WithMinMax","WithValue","Disabled","Sizes"];export{t as Default,i as Disabled,s as Format12h,c as Sizes,a as WithMinMax,o as WithSeconds,m as WithValue,L as __namedExportsOrder,K as default};
