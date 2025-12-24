import{_ as r}from"./DXTextarea-D9Exn-g-.js";import{r as e}from"./vue.esm-bundler-C1fUoNF-.js";import{r as D}from"./ChatBubbleLeftIcon-Cy-qpGyW.js";import{r as h}from"./StarIcon-D8S068nZ.js";import{r as ne}from"./PencilIcon-BVI5idyX.js";import{r as Z}from"./DocumentTextIcon-BZT0hOe_.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXFormLabel-DO2rZe0p.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./DXIconWrapper-Dj2l5Guj.js";const ve={title:"Molecules/DXTextarea",component:r,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXTextarea

Компонент многострочного текстового поля с поддержкой иконок, валидации, счетчика символов и интеграции с группами полей.

## Назначение

DXTextarea предоставляет стандартизированное многострочное текстовое поле для ввода длинных текстов.
Компонент поддерживает иконки, валидацию, ограничение длины, счетчик символов и автоматическую адаптацию
при использовании внутри DXInputGroup.

## Архитектура

### Использует
- \`DXFormLabel\` - для отображения лейбла, ошибок, вспомогательного текста и счетчика символов
- \`DXIconWrapper\` - для отображения иконок слева и справа
- \`useClassComposition\` composable - для объединения CSS классов
- \`provide/inject\` - для интеграции с DXInputGroup

### Используется в
- \`DXInputGroup\` - группы полей с аддонами
- Формы с длинными текстовыми полями
- Комментарии и описания
- Любые места, требующие многострочного ввода

## Внутренняя логика

### Интеграция с DXInputGroup
При использовании внутри \`DXInputGroup\`:
- Поле автоматически регистрируется в группе через \`provide/inject\`
- Размер синхронизируется с размером группы
- Состояние \`disabled\` наследуется от группы
- Состояние \`error\` синхронизируется с группой
- Border-radius адаптируется в зависимости от наличия аддонов слева/справа

### Иконки
- **prefixIcon**: Иконка слева от textarea (Heroicon компонент)
- **suffixIcon**: Иконка справа от textarea (Heroicon компонент)
- Иконки выравниваются по верху (\`verticalAlign="top"\`) для многострочного поля

### Счетчик символов
- При \`maxLength > 0\` и \`showCount={true}\` отображается счетчик символов
- Формат: "текущее / максимальное" (например, "150 / 500")
- Отображается через \`DXFormLabel\`

### Валидация
- При наличии \`error\` prop, поле получает красную рамку
- Текст ошибки отображается через \`DXFormLabel\`
- Состояние ошибки синхронизируется с \`DXInputGroup\`

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String значений.

### Количество строк
- Настраивается через \`rows\` prop (по умолчанию 4)
- Поле автоматически расширяется при вводе текста

### Ограничение длины
- При \`maxLength > 0\` ограничивает количество вводимых символов
- Нативный атрибут \`maxlength\` применяется к textarea

### Состояния
- **disabled** - отключает поле
- **error** - визуально выделяет ошибку (красная рамка)
- **required** - отмечает поле как обязательное

### Лейбл и вспомогательный текст
- \`label\` - отображается над полем
- \`helper\` - вспомогательный текст под полем
- \`error\` - текст ошибки (заменяет helper при наличии)
- \`showCount\` - показывать счетчик символов

### Нативный textarea
Компонент использует нативный HTML \`<textarea>\` элемент, что обеспечивает:
- Нативную доступность
- Работу с клавиатурой
- Автоматическое изменение размера
        `}}}},t={render:()=>({components:{DXTextarea:r},setup(){return{value:e("")}},template:'<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />'})},a={render:()=>({components:{DXTextarea:r},setup(){return{value:e("This is some sample text in the textarea.")}},template:'<DXTextarea v-model="value" label="Notes" />'})},o={render:()=>({components:{DXTextarea:r},setup(){return{value:e("")}},template:'<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />'})},s={render:()=>({components:{DXTextarea:r},setup(){return{value:e("Disabled content")}},template:'<DXTextarea v-model="value" label="Disabled" disabled />'})},c={render:()=>({components:{DXTextarea:r},setup(){return{value:e("Invalid content")}},template:'<DXTextarea v-model="value" label="Description" error="This field is required" />'})},l={render:()=>({components:{DXTextarea:r},setup(){return{message:e(""),ChatBubbleLeftIcon:D}},template:`
      <DXTextarea
        v-model="message"
        label="Message"
        placeholder="Write your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :rows="4"
      />
    `})},i={render:()=>({components:{DXTextarea:r},setup(){return{note:e(""),StarIcon:h}},template:`
      <DXTextarea
        v-model="note"
        label="Note"
        placeholder="Add a note..."
        :suffix-icon="StarIcon"
        :rows="3"
      />
    `})},p={render:()=>({components:{DXTextarea:r},setup(){return{text:e(""),ChatBubbleLeftIcon:D,StarIcon:h}},template:`
      <DXTextarea
        v-model="text"
        label="Message with Icons"
        placeholder="Type your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :suffix-icon="StarIcon"
        :rows="4"
      />
    `})},u={render:()=>({components:{DXTextarea:r},setup(){return{description:e(""),PencilIcon:ne}},template:`
      <DXTextarea
        v-model="description"
        label="Description"
        placeholder="Describe your product..."
        :prefix-icon="PencilIcon"
        :max-length="500"
        :show-count="true"
        :rows="6"
      />
    `})},m={render:()=>({components:{DXTextarea:r},setup(){return{review:e(""),StarIcon:h}},template:`
      <DXTextarea
        v-model="review"
        label="Your Review"
        placeholder="Share your experience..."
        :prefix-icon="StarIcon"
        :max-length="1000"
        :show-count="true"
        :rows="5"
        helper="Write a detailed review to help others"
      />
    `})},d={render:()=>({components:{DXTextarea:r},setup(){return{text:e(""),DocumentTextIcon:Z}},template:`
      <DXTextarea
        v-model="text"
        label="Auto-resize Textarea"
        placeholder="Start typing and watch it grow..."
        :prefix-icon="DocumentTextIcon"
        :auto-resize="true"
        :rows="3"
        helper="This textarea will automatically expand as you type"
      />
    `})},x={render:()=>({components:{DXTextarea:r},setup(){const n=e(""),ee=e(""),re=e("");return{message:n,description:ee,review:re,ChatBubbleLeftIcon:D,DocumentTextIcon:Z,StarIcon:h}},template:`
      <div class="space-y-6 max-w-2xl">
        <DXTextarea
          v-model="message"
          label="Message"
          placeholder="Write your message..."
          :prefix-icon="ChatBubbleLeftIcon"
          :rows="3"
        />
        
        <DXTextarea
          v-model="description"
          label="Description"
          placeholder="Describe it..."
          :prefix-icon="DocumentTextIcon"
          :max-length="300"
          :show-count="true"
          :rows="4"
        />
        
        <DXTextarea
          v-model="review"
          label="Review"
          placeholder="Your feedback..."
          :prefix-icon="StarIcon"
          :max-length="500"
          :show-count="true"
          :rows="5"
        />
      </div>
    `})};var v,T,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Description" placeholder="Enter description..." />'
  })
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var b,X,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('This is some sample text in the textarea.');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Notes" />'
  })
}`,...(I=(X=a.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var w,g,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Bio" helper="Maximum 500 characters" />'
  })
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,W,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('Disabled content');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Disabled" disabled />'
  })
}`,...(C=(W=s.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var L,B,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const value = ref('Invalid content');
      return {
        value
      };
    },
    template: '<DXTextarea v-model="value" label="Description" error="This field is required" />'
  })
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var A,R,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const message = ref('');
      return {
        message,
        ChatBubbleLeftIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="message"
        label="Message"
        placeholder="Write your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :rows="4"
      />
    \`
  })
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,P,_;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const note = ref('');
      return {
        note,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="note"
        label="Note"
        placeholder="Add a note..."
        :suffix-icon="StarIcon"
        :rows="3"
      />
    \`
  })
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var E,H,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const text = ref('');
      return {
        text,
        ChatBubbleLeftIcon,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="text"
        label="Message with Icons"
        placeholder="Type your message..."
        :prefix-icon="ChatBubbleLeftIcon"
        :suffix-icon="StarIcon"
        :rows="4"
      />
    \`
  })
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Y,q,F;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const description = ref('');
      return {
        description,
        PencilIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="description"
        label="Description"
        placeholder="Describe your product..."
        :prefix-icon="PencilIcon"
        :max-length="500"
        :show-count="true"
        :rows="6"
      />
    \`
  })
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var $,j,k;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const review = ref('');
      return {
        review,
        StarIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="review"
        label="Your Review"
        placeholder="Share your experience..."
        :prefix-icon="StarIcon"
        :max-length="1000"
        :show-count="true"
        :rows="5"
        helper="Write a detailed review to help others"
      />
    \`
  })
}`,...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var V,O,J;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const text = ref('');
      return {
        text,
        DocumentTextIcon
      };
    },
    template: \`
      <DXTextarea
        v-model="text"
        label="Auto-resize Textarea"
        placeholder="Start typing and watch it grow..."
        :prefix-icon="DocumentTextIcon"
        :auto-resize="true"
        :rows="3"
        helper="This textarea will automatically expand as you type"
      />
    \`
  })
}`,...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXTextarea
    },
    setup() {
      const message = ref('');
      const description = ref('');
      const review = ref('');
      return {
        message,
        description,
        review,
        ChatBubbleLeftIcon,
        DocumentTextIcon,
        StarIcon
      };
    },
    template: \`
      <div class="space-y-6 max-w-2xl">
        <DXTextarea
          v-model="message"
          label="Message"
          placeholder="Write your message..."
          :prefix-icon="ChatBubbleLeftIcon"
          :rows="3"
        />
        
        <DXTextarea
          v-model="description"
          label="Description"
          placeholder="Describe it..."
          :prefix-icon="DocumentTextIcon"
          :max-length="300"
          :show-count="true"
          :rows="4"
        />
        
        <DXTextarea
          v-model="review"
          label="Review"
          placeholder="Your feedback..."
          :prefix-icon="StarIcon"
          :max-length="500"
          :show-count="true"
          :rows="5"
        />
      </div>
    \`
  })
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Te=["Default","WithValue","WithHelper","Disabled","WithError","WithPrefixIcon","WithSuffixIcon","WithBothIcons","WithCharacterCount","Review","WithAutoResize","AllIconTypes"];export{x as AllIconTypes,t as Default,s as Disabled,m as Review,d as WithAutoResize,p as WithBothIcons,u as WithCharacterCount,c as WithError,o as WithHelper,l as WithPrefixIcon,i as WithSuffixIcon,a as WithValue,Te as __namedExportsOrder,ve as default};
