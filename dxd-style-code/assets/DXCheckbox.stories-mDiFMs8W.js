import{_ as c}from"./DXCheckbox-DQusejYU.js";import{a as J,o as K,b as Q,r as e}from"./vue.esm-bundler-C1fUoNF-.js";import{r as R}from"./HeartIcon-DEmfWIR9.js";import{r as U}from"./XMarkIcon-DuL0Z66U.js";import{r as Y}from"./CheckIcon-B1lKtPCn.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";function ee(t,o){return K(),J("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[Q("path",{"fill-rule":"evenodd",d:"M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z","clip-rule":"evenodd"})])}const xe={title:"Atoms/DXCheckbox",component:c,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXCheckbox

Компонент чекбокса с поддержкой двух вариантов (нативный и кастомный), различных размеров, цветов и иконок.

## Назначение

DXCheckbox предоставляет стандартизированный чекбокс для выбора одного или нескольких значений.
Компонент поддерживает два варианта оформления (нативный и кастомный), различные размеры, цвета,
иконки и работу как с boolean значениями, так и с массивами.

## Архитектура

### Использует
- \`DXIcon\` - для отображения иконок в кастомном варианте
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useVariantCheckbox\` composable - для вариантов оформления кастомного чекбокса
- \`Transition\` - для анимации иконок

### Используется в
- Формы с выбором опций
- Списки с множественным выбором
- Согласия и подтверждения
- Фильтры и настройки
- Любые места, требующие выбора true/false или множественного выбора

## Внутренняя логика

### Варианты
- **default** (по умолчанию): Нативный HTML checkbox с кастомной стилизацией
- **custom**: Кастомный чекбокс с иконками и настраиваемыми цветами

### Режимы работы
- **Boolean режим**: При \`modelValue\` - Boolean, чекбокс работает как переключатель
- **Array режим**: При \`modelValue\` - Array и указан \`value\`, чекбокс добавляет/удаляет значение из массива

### Кастомный вариант
При \`variant="custom"\`:
- Поддерживает различные формы: \`square\` (квадрат), \`circle\` (круг)
- Поддерживает различные цвета: \`slate\`, \`primary\`, \`success\`, \`danger\`, \`warning\`, \`info\`
- Иконки для checked/unchecked состояний (по умолчанию CheckIcon для checked)
- Анимации иконок: \`none\`, \`scale\`, \`wiggle\`

### Размеры
Поддерживает 5 размеров:
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой
- **xl** - очень большой

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для boolean: \`v-model="checked"\` где checked - Boolean
- Для массива: \`v-model="selected"\` где selected - Array, и указан \`value\` prop

### Лейбл
- Текст лейбла через \`label\` prop
- Лейбл кликабелен и переключает чекбокс

### Состояния
- **disabled** - отключает чекбокс
- **checked** - отмеченное состояние
- **unchecked** - неотмеченное состояние

### Доступность
- Нативный checkbox: полная поддержка нативной доступности
- Кастомный checkbox: использует \`role="checkbox"\`, \`aria-checked\`, \`aria-disabled\`
- Поддержка клавиатурной навигации (Space для переключения)

### Иконки
В кастомном варианте:
- **checkedIcon**: Иконка для отмеченного состояния (по умолчанию CheckIcon)
- **uncheckedIcon**: Иконка для неотмеченного состояния (опционально)
- Размер иконки автоматически адаптируется к размеру чекбокса
        `}}},argTypes:{variant:{control:"select",options:["default","custom"],description:"Checkbox variant"},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Checkbox size"},shape:{control:"select",options:["square","circle"],description:"Shape for custom variant"},color:{control:"select",options:["slate","primary","success","danger","warning","info"],description:"Color for custom variant"},iconAnimation:{control:"select",options:["none","scale","wiggle"],description:"Icon animation"}}},l={render:()=>({components:{DXCheckbox:c},setup(){return{checked:e(!1)}},template:'<DXCheckbox v-model="checked" label="Accept terms" />'})},r={render:()=>({components:{DXCheckbox:c},setup(){return{checked:e(!0)}},template:'<DXCheckbox v-model="checked" label="Already checked" />'})},i={render:()=>({components:{DXCheckbox:c},setup(){return{checked:e(!1)}},template:'<DXCheckbox v-model="checked" label="Disabled checkbox" disabled />'})},m={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0),n=e(!0),s=e(!0),a=e(!0);return{xs:t,sm:o,md:n,lg:s,xl:a}},template:`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" size="xs" label="Extra small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" size="sm" label="Small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" size="md" label="Medium checkbox (default)" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" size="lg" label="Large checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" size="xl" label="Extra large checkbox" />
        </div>
      </div>
    `})},d={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!1),n=e(!0),s=e(!1);return{option1:t,option2:o,option3:n,option4:s}},template:`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select options:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="option1" label="Option 1" />
          <DXCheckbox v-model="option2" label="Option 2" />
          <DXCheckbox v-model="option3" label="Option 3" />
          <DXCheckbox v-model="option4" label="Option 4" />
        </div>
      </div>
    `})},x={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0),n=e(!1),s=e(!0);return{feature1:t,feature2:o,feature3:n,feature4:s}},template:`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select features:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="feature1" variant="custom" color="success" label="Feature A" />
          <DXCheckbox v-model="feature2" variant="custom" color="info" label="Feature B" />
          <DXCheckbox v-model="feature3" variant="custom" color="warning" label="Feature C" />
          <DXCheckbox v-model="feature4" variant="custom" color="primary" label="Feature D" />
        </div>
      </div>
    `})},u={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0),n=e(!0),s=e(!0);return{defaultCheck:t,xMark:o,minus:n,heart:s,XMarkIcon:U,MinusIcon:ee,HeartIcon:R}},template:`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Default check icon</p>
          <DXCheckbox v-model="defaultCheck" variant="custom" label="Custom checkbox with check icon" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">X mark icon</p>
          <DXCheckbox v-model="xMark" variant="custom" :checked-icon="XMarkIcon" label="Mark as deleted" color="danger" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Minus icon (indeterminate style)</p>
          <DXCheckbox v-model="minus" variant="custom" :checked-icon="MinusIcon" label="Partially selected" color="warning" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Heart icon (circle shape)</p>
          <DXCheckbox v-model="heart" variant="custom" :checked-icon="HeartIcon" label="Add to favorites" color="danger" shape="circle" />
        </div>
      </div>
    `})},p={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0);return{square:t,circle:o,CheckIcon:Y}},template:`
      <div class="space-y-3">
        <DXCheckbox v-model="square" variant="custom" shape="square" label="Square (default)" />
        <DXCheckbox v-model="circle" variant="custom" shape="circle" label="Circle" />
      </div>
    `})},v={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0),n=e(!0),s=e(!0),a=e(!0),G=e(!0);return{slate:t,primary:o,success:n,danger:s,warning:a,info:G}},template:`
      <div class="space-y-3">
        <DXCheckbox v-model="slate" variant="custom" color="slate" label="Slate" />
        <DXCheckbox v-model="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXCheckbox v-model="success" variant="custom" color="success" label="Success" />
        <DXCheckbox v-model="danger" variant="custom" color="danger" label="Danger" />
        <DXCheckbox v-model="warning" variant="custom" color="warning" label="Warning" />
        <DXCheckbox v-model="info" variant="custom" color="info" label="Info" />
      </div>
    `})},f={render:()=>({components:{DXCheckbox:c},setup(){const t=e(!0),o=e(!0),n=e(!0),s=e(!0),a=e(!0);return{xs:t,sm:o,md:n,lg:s,xl:a}},template:`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" variant="custom" size="xs" label="Extra small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" variant="custom" size="sm" label="Small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" variant="custom" size="md" label="Medium custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" variant="custom" size="lg" label="Large custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" variant="custom" size="xl" label="Extra large custom" />
        </div>
      </div>
    `})};var b,h,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: '<DXCheckbox v-model="checked" label="Accept terms" />'
  })
}`,...(k=(h=l.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var C,g,D;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const checked = ref(true);
      return {
        checked
      };
    },
    template: '<DXCheckbox v-model="checked" label="Already checked" />'
  })
}`,...(D=(g=r.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var X,S,y;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const checked = ref(false);
      return {
        checked
      };
    },
    template: '<DXCheckbox v-model="checked" label="Disabled checkbox" disabled />'
  })
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var I,z,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const xs = ref(true);
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      const xl = ref(true);
      return {
        xs,
        sm,
        md,
        lg,
        xl
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" size="xs" label="Extra small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" size="sm" label="Small checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" size="md" label="Medium checkbox (default)" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" size="lg" label="Large checkbox" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" size="xl" label="Extra large checkbox" />
        </div>
      </div>
    \`
  })
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var w,E,L;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const option1 = ref(true);
      const option2 = ref(false);
      const option3 = ref(true);
      const option4 = ref(false);
      return {
        option1,
        option2,
        option3,
        option4
      };
    },
    template: \`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select options:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="option1" label="Option 1" />
          <DXCheckbox v-model="option2" label="Option 2" />
          <DXCheckbox v-model="option3" label="Option 3" />
          <DXCheckbox v-model="option4" label="Option 4" />
        </div>
      </div>
    \`
  })
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,q,B;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const feature1 = ref(true);
      const feature2 = ref(true);
      const feature3 = ref(false);
      const feature4 = ref(true);
      return {
        feature1,
        feature2,
        feature3,
        feature4
      };
    },
    template: \`
      <div>
        <p class="text-sm font-medium text-slate-700 mb-2">Select features:</p>
        <div class="flex flex-wrap items-center">
          <DXCheckbox v-model="feature1" variant="custom" color="success" label="Feature A" />
          <DXCheckbox v-model="feature2" variant="custom" color="info" label="Feature B" />
          <DXCheckbox v-model="feature3" variant="custom" color="warning" label="Feature C" />
          <DXCheckbox v-model="feature4" variant="custom" color="primary" label="Feature D" />
        </div>
      </div>
    \`
  })
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var O,F,H;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const defaultCheck = ref(true);
      const xMark = ref(true);
      const minus = ref(true);
      const heart = ref(true);
      return {
        defaultCheck,
        xMark,
        minus,
        heart,
        XMarkIcon,
        MinusIcon,
        HeartIcon
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Default check icon</p>
          <DXCheckbox v-model="defaultCheck" variant="custom" label="Custom checkbox with check icon" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">X mark icon</p>
          <DXCheckbox v-model="xMark" variant="custom" :checked-icon="XMarkIcon" label="Mark as deleted" color="danger" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Minus icon (indeterminate style)</p>
          <DXCheckbox v-model="minus" variant="custom" :checked-icon="MinusIcon" label="Partially selected" color="warning" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Heart icon (circle shape)</p>
          <DXCheckbox v-model="heart" variant="custom" :checked-icon="HeartIcon" label="Add to favorites" color="danger" shape="circle" />
        </div>
      </div>
    \`
  })
}`,...(H=(F=u.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var _,P,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const square = ref(true);
      const circle = ref(true);
      return {
        square,
        circle,
        CheckIcon
      };
    },
    template: \`
      <div class="space-y-3">
        <DXCheckbox v-model="square" variant="custom" shape="square" label="Square (default)" />
        <DXCheckbox v-model="circle" variant="custom" shape="circle" label="Circle" />
      </div>
    \`
  })
}`,...(V=(P=p.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var T,$,W;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const slate = ref(true);
      const primary = ref(true);
      const success = ref(true);
      const danger = ref(true);
      const warning = ref(true);
      const info = ref(true);
      return {
        slate,
        primary,
        success,
        danger,
        warning,
        info
      };
    },
    template: \`
      <div class="space-y-3">
        <DXCheckbox v-model="slate" variant="custom" color="slate" label="Slate" />
        <DXCheckbox v-model="primary" variant="custom" color="primary" label="Primary (default)" />
        <DXCheckbox v-model="success" variant="custom" color="success" label="Success" />
        <DXCheckbox v-model="danger" variant="custom" color="danger" label="Danger" />
        <DXCheckbox v-model="warning" variant="custom" color="warning" label="Warning" />
        <DXCheckbox v-model="info" variant="custom" color="info" label="Info" />
      </div>
    \`
  })
}`,...(W=($=v.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var N,Z,j;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCheckbox
    },
    setup() {
      const xs = ref(true);
      const sm = ref(true);
      const md = ref(true);
      const lg = ref(true);
      const xl = ref(true);
      return {
        xs,
        sm,
        md,
        lg,
        xl
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Small (12px)</p>
          <DXCheckbox v-model="xs" variant="custom" size="xs" label="Extra small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Small (16px)</p>
          <DXCheckbox v-model="sm" variant="custom" size="sm" label="Small custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Medium (20px) - Default</p>
          <DXCheckbox v-model="md" variant="custom" size="md" label="Medium custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Large (24px)</p>
          <DXCheckbox v-model="lg" variant="custom" size="lg" label="Large custom" />
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-xs font-medium text-slate-500">Extra Large (24px)</p>
          <DXCheckbox v-model="xl" variant="custom" size="xl" label="Extra large custom" />
        </div>
      </div>
    \`
  })
}`,...(j=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:j.source}}};const ue=["Default","Checked","Disabled","Sizes","InlineLayout","CustomInlineLayout","CustomIcons","CustomShapes","CustomColors","CustomSizes"];export{r as Checked,v as CustomColors,u as CustomIcons,x as CustomInlineLayout,p as CustomShapes,f as CustomSizes,l as Default,i as Disabled,d as InlineLayout,m as Sizes,ue as __namedExportsOrder,xe as default};
