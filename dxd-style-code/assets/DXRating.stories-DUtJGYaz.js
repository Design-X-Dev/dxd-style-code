import{r as S}from"./vue.esm-bundler-C1fUoNF-.js";import{_ as e}from"./DXRating-chfDzlNz.js";import{_}from"./DXFormControl-Dg_VsVTj.js";import"./DXText-Bu-Qlv6N.js";import"./useClassComposition-Dym2pzZ_.js";import"./HeartIcon-DNFEd_wb.js";import"./StarIcon-D8S068nZ.js";import"./HeartIcon-DEmfWIR9.js";import"./StarIcon-BfBLtMMD.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXValidationIcon-n1eDkzYR.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useVariant-2nzc00zP.js";const U={title:"Molecules/DXRating",component:e,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXRating

Компонент для отображения и выбора рейтинга с использованием звезд или других символов.

## Назначение

DXRating позволяет отображать и выбирать рейтинг в различных форматах:
звезды, сердца или числа. Поддерживает дробные значения и различные размеры.

## Архитектура

### Использует
- \`DXIcon\` - для отображения символов (звезды, сердца)
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- Формы отзывов
- Карточки товаров для отображения рейтинга
- Системы обратной связи

## Внутренняя логика

### Символы
- **star**: Звезды (по умолчанию)
- **heart**: Сердца
- **number**: Числа (будущая реализация)

### Дробные значения
При \`allowHalf={true}\` можно выбирать половину значения (например, 4.5).

### Hover эффект
При наведении курсора элементы подсвечиваются для визуальной обратной связи.

## Особенности

### Доступность
- ARIA атрибуты для screen readers
- Клавиатурная навигация (Enter, Space)
- Role="radiogroup" для семантики

### Readonly режим
В readonly режиме компонент только отображает рейтинг без возможности изменения.
        `}}},argTypes:{modelValue:{control:"number",min:0,max:5,step:.5,description:"Значение рейтинга (v-model).",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"Content"}},max:{control:"number",min:1,max:10,description:"Максимальное значение рейтинга.",table:{type:{summary:"number"},defaultValue:{summary:"5"},category:"Content"}},readonly:{control:"boolean",description:"Только для чтения (не интерактивный).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},allowHalf:{control:"boolean",description:"Разрешить половину значения (например, 4.5).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},symbol:{control:"select",options:["star","heart","number"],description:"Символ для отображения: star | heart | number.",table:{type:{summary:"string"},defaultValue:{summary:"star"},category:"Appearance"}},color:{control:"select",options:["yellow","red","blue","green","purple"],description:"Цвет символов.",table:{type:{summary:"string"},defaultValue:{summary:"yellow"},category:"Appearance"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер компонента.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},count:{control:"number",description:"Количество оценок для отображения.",table:{type:{summary:"number"},defaultValue:{summary:"null"},category:"Content"}}}},n={args:{modelValue:4.5,readonly:!0},parameters:{docs:{description:{story:"Базовое использование для отображения рейтинга (readonly режим)."}}},render:u=>({components:{DXRating:e},setup(){return{args:u}},template:'<DXRating v-bind="args" />'})},r={parameters:{docs:{description:{story:"Интерактивный выбор рейтинга. Пользователь может выбрать рейтинг кликом."}}},render:()=>({components:{DXRating:e,DXFormControl:_},setup(){return{productRating:S(0),handleRatingChange:H=>{console.log("Выбран рейтинг:",H)}}},template:`
      <DXFormControl label="Оцените товар">
        <DXRating
          v-model="productRating"
          :max="5"
          @change="handleRatingChange"
        />
      </DXFormControl>
    `})},a={args:{modelValue:3.5,allowHalf:!0,readonly:!0},parameters:{docs:{description:{story:"Рейтинг с поддержкой дробных значений. Можно выбрать половину звезды."}}},render:u=>({components:{DXRating:e},setup(){return{args:u}},template:'<DXRating v-bind="args" />'})},t={args:{modelValue:4.2,count:125,readonly:!0},parameters:{docs:{description:{story:"Рейтинг с количеством оценок. Отображает количество оценок рядом с рейтингом."}}},render:u=>({components:{DXRating:e},setup(){return{args:u}},template:'<DXRating v-bind="args" />'})},o={args:{modelValue:4,symbol:"heart",color:"red",readonly:!0},parameters:{docs:{description:{story:"Рейтинг с сердцами вместо звезд. Полезно для лайков и избранного."}}},render:u=>({components:{DXRating:e},setup(){const m=S(0);return{args:u,heartRating:m}},template:`
      <div class="space-y-4">
        <DXRating v-bind="args" />
        <DXRating
          v-model="heartRating"
          :max="5"
          symbol="heart"
          color="red"
        />
        <DXText tag="p" size="sm" color="muted">Выбрано: {{ heartRating }}</DXText>
      </div>
    `})},s={parameters:{docs:{description:{story:"Различные размеры компонента."}}},render:()=>({components:{DXRating:e},setup(){return{}},template:`
      <div class="space-y-4">
        <DXRating :model-value="4" size="xs" readonly />
        <DXRating :model-value="4" size="sm" readonly />
        <DXRating :model-value="4" size="md" readonly />
        <DXRating :model-value="4" size="lg" readonly />
        <DXRating :model-value="4" size="xl" readonly />
      </div>
    `})},l={parameters:{docs:{description:{story:"Различные цвета символов."}}},render:()=>({components:{DXRating:e},setup(){return{}},template:`
      <div class="space-y-4">
        <DXRating :model-value="4" color="yellow" readonly />
        <DXRating :model-value="4" color="red" readonly />
        <DXRating :model-value="4" color="blue" readonly />
        <DXRating :model-value="4" color="green" readonly />
        <DXRating :model-value="4" color="purple" readonly />
      </div>
    `})};var i,d,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: 4.5,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование для отображения рейтинга (readonly режим).'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Интерактивный выбор рейтинга. Пользователь может выбрать рейтинг кликом.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating,
      DXFormControl
    },
    setup() {
      const productRating = ref(0);
      const handleRatingChange = value => {
        console.log('Выбран рейтинг:', value);
      };
      return {
        productRating,
        handleRatingChange
      };
    },
    template: \`
      <DXFormControl label="Оцените товар">
        <DXRating
          v-model="productRating"
          :max="5"
          @change="handleRatingChange"
        />
      </DXFormControl>
    \`
  })
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var D,R,X;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    modelValue: 3.5,
    allowHalf: true,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с поддержкой дробных значений. Можно выбрать половину звезды.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(X=(R=a.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var v,E,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: 4.2,
    count: 125,
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с количеством оценок. Отображает количество оценок рядом с рейтингом.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXRating v-bind="args" />'
  })
}`,...(b=(E=t.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var C,h,f;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: 4,
    symbol: 'heart',
    color: 'red',
    readonly: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Рейтинг с сердцами вместо звезд. Полезно для лайков и избранного.'
      }
    }
  },
  render: args => ({
    components: {
      DXRating
    },
    setup() {
      const heartRating = ref(0);
      return {
        args,
        heartRating
      };
    },
    template: \`
      <div class="space-y-4">
        <DXRating v-bind="args" />
        <DXRating
          v-model="heartRating"
          :max="5"
          symbol="heart"
          color="red"
        />
        <DXText tag="p" size="sm" color="muted">Выбрано: {{ heartRating }}</DXText>
      </div>
    \`
  })
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var B,x,A;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные размеры компонента.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXRating :model-value="4" size="xs" readonly />
        <DXRating :model-value="4" size="sm" readonly />
        <DXRating :model-value="4" size="md" readonly />
        <DXRating :model-value="4" size="lg" readonly />
        <DXRating :model-value="4" size="xl" readonly />
      </div>
    \`
  })
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var V,z,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные цвета символов.'
      }
    }
  },
  render: () => ({
    components: {
      DXRating
    },
    setup() {
      return {};
    },
    template: \`
      <div class="space-y-4">
        <DXRating :model-value="4" color="yellow" readonly />
        <DXRating :model-value="4" color="red" readonly />
        <DXRating :model-value="4" color="blue" readonly />
        <DXRating :model-value="4" color="green" readonly />
        <DXRating :model-value="4" color="purple" readonly />
      </div>
    \`
  })
}`,...(F=(z=l.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const Y=["Default","Interactive","WithHalf","WithCount","HeartSymbol","AllSizes","AllColors"];export{l as AllColors,s as AllSizes,n as Default,o as HeartSymbol,r as Interactive,t as WithCount,a as WithHalf,Y as __namedExportsOrder,U as default};
