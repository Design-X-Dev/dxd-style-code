import{_ as s}from"./DXCloseButton-xtCn8OZ8.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./DXButton-DzgLKRkE.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./XMarkIcon-DTqRFgaM.js";const S={title:"Molecules/DXCloseButton",component:s,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXCloseButton

Компонент кнопки закрытия с поддержкой различных размеров и вариантов оформления.

## Назначение

DXCloseButton предоставляет стандартизированную кнопку закрытия для модальных окон, алертов,
панелей и других компонентов, требующих возможность закрытия. Компонент поддерживает различные
размеры и варианты оформления для адаптации под различные контексты использования.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконки закрытия (XMarkIcon)
- \`useSize\` composable - для унификации размеров (sm, md, lg)

### Используется в
- \`DXModal\` - кнопка закрытия модальных окон
- \`DXAlert\` - кнопка закрытия уведомлений
- \`DXSidebar\` - кнопка закрытия боковой панели
- Панели и панели настроек
- Любые компоненты, требующие кнопку закрытия

## Внутренняя логика

### Варианты оформления
- **default** (по умолчанию): Стандартная кнопка для светлого фона
- **light**: Кнопка для темного фона (светлая иконка)
- **danger**: Кнопка с красным цветом для критических действий

### Размеры
Поддерживает три размера:
- **sm** - маленький размер
- **md** - средний размер (по умолчанию)
- **lg** - большой размер

### Иконка
Всегда использует \`XMarkIcon\` из Heroicons для единообразия.

## Особенности

### События
- Событие \`click\` при клике на кнопку
- Обычно обрабатывается родительским компонентом для закрытия

### Доступность
- Использует \`aria-label\` для описания действия
- Поддержка клавиатурной навигации
- Правильные семантические атрибуты

### Визуальное оформление
- Круглая форма кнопки
- Иконка по центру
- Hover эффекты для интерактивности
- Transition для плавных переходов
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","light","danger"]}}},e={args:{size:"md",variant:"default"}},t=()=>({components:{DXCloseButton:s},template:`
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  `}),o=()=>({components:{DXCloseButton:s},template:`
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  `});var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,l,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    DXCloseButton
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXCloseButton size="sm" />
      <DXCloseButton size="md" />
      <DXCloseButton size="lg" />
    </div>
  \`
})`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => ({
  components: {
    DXCloseButton
  },
  template: \`
    <div class="flex items-center gap-4">
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="default" />
      </div>
      <div class="p-4 bg-slate-800 rounded">
        <DXCloseButton variant="light" />
      </div>
      <div class="p-4 bg-white border rounded">
        <DXCloseButton variant="danger" />
      </div>
    </div>
  \`
})`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["Default","Sizes","Variants"];export{e as Default,t as Sizes,o as Variants,x as __namedExportsOrder,S as default};
