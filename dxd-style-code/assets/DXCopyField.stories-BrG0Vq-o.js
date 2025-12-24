import{_ as e,r as ae}from"./DXCopyField-CjG-v3Rp.js";import{r as oe}from"./CodeBracketIcon-CxTNyRqz.js";import{a as U,o as Z,b as q}from"./vue.esm-bundler-C1fUoNF-.js";import{r as te}from"./DocumentDuplicateIcon-BvOpnVZf.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./CheckIcon-BtoXMcpp.js";function Q(ee,ne){return Z(),U("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[q("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"})])}function Y(ee,ne){return Z(),U("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[q("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"})])}const ye={title:"Molecules/DXCopyField",component:e,tags:["autodocs","category:form"],parameters:{docs:{description:{component:`
# DXCopyField

Компонент для отображения значения с возможностью копирования в буфер обмена.

## Назначение

DXCopyField предоставляет удобный способ отображения значений (ссылок, кодов, API ключей и т.д.)
с одной кнопкой для копирования в буфер обмена. Компонент автоматически показывает состояние успеха
после копирования и поддерживает различные анимации иконок.

## Архитектура

### Использует
- \`DXIcon\` - для иконок копирования и успеха
- \`useSize\` composable - для унификации размеров с другими компонентами формы

### Используется в
- Отображение API ключей и токенов
- Ссылки для шаринга
- Команды установки и коды
- Любые значения, которые нужно быстро скопировать

## Внутренняя логика

### Копирование в буфер обмена
Компонент использует \`navigator.clipboard.writeText()\` для копирования значения.
После успешного копирования показывается состояние успеха с зеленой рамкой и иконкой галочки.

### Анимации иконок
Поддерживает четыре типа анимаций:
- \`none\` - без анимации
- \`wiggle\` - покачивание
- \`scale\` - масштабирование (по умолчанию)
- \`rotate\` - вращение

### Размерная сетка
Компонент поддерживает три размера, соответствующие другим элементам формы:
- \`sm\` - компактный (h-8, text-xs, px-3 py-1.5)
- \`md\` - стандартный (h-10, text-sm, px-4 py-2.5) - по умолчанию
- \`lg\` - крупный (h-12, text-base, px-5 py-3)

Размеры автоматически синхронизируются:
- Padding контейнера соответствует размерам input
- Размер текста соответствует размерам текста
- Размер кнопки соответствует размерам buttonIcon
- Размер иконки адаптируется под размер компонента

## Особенности

### Скругления
- Контейнер: \`rounded-xl\` (12px) - соответствует стандартам дизайн-системы
- Кнопка: \`rounded-xl\` (12px) - соответствует стандартам дизайн-системы

### Состояния
- **default**: Обычное состояние с иконкой копирования
- **copied**: Состояние успеха с зеленой рамкой и иконкой галочки
- Автоматическое возвращение к default через \`successDuration\` (по умолчанию 2000мс)

### События
- \`@copied\` - эмитится при успешном копировании, передает скопированное значение

## Ограничения

- Требует поддержки \`navigator.clipboard\` API (современные браузеры)
- При ошибке копирования выводит сообщение в консоль
        `}}},argTypes:{size:{control:{type:"select"},options:["sm","md","lg"],description:"Размер компонента",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},copyIconAnimation:{control:"select",options:["none","wiggle","scale","rotate"],description:"Анимация иконки копирования"},copiedIconAnimation:{control:"select",options:["none","wiggle","scale","rotate"],description:"Анимация иконки успеха"}}},n={args:{value:"https://example.com/share/abc123",label:"Share Link"}},a={args:{value:"npm install dxd-style-code",label:"Installation"}},o={args:{value:"sk_live_abc123xyz789",label:"API Key"}},t={parameters:{docs:{description:{story:"Примеры всех размеров компонента. Размеры синхронизированы с другими элементами формы (DXInput, DXButton)."}}},render:()=>({components:{DXCopyField:e},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Small (sm)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="sm"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Medium (md) - Default</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="md"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Large (lg)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="lg"
          />
        </div>
      </div>
    `})},i={args:{value:"https://example.com/share/abc123",label:"Share Link",copyIconAnimation:"wiggle",copiedIconAnimation:"wiggle"}},s={args:{value:"npm install dxd-style-code",label:"Installation",copyIconAnimation:"scale",copiedIconAnimation:"scale"}},l={args:{value:"sk_live_abc123xyz789",label:"API Key",copyIconAnimation:"rotate",copiedIconAnimation:"rotate"}},c={args:{value:"https://example.com/share",label:"Link",copyIconAnimation:"none",copiedIconAnimation:"none"}},r={render:()=>({components:{DXCopyField:e},setup(){return{KeyIcon:Q,LinkIcon:Y,CodeBracketIcon:oe}},template:`
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dxd-style-code'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    `})},p={args:{value:"https://example.com/share/abc123",label:"Share Link",copyIconAnimation:"wiggle",copiedIconAnimation:"scale"}},m={render:()=>({components:{DXCopyField:e},setup(){return{ClipboardDocumentIcon:ae,KeyIcon:Q,LinkIcon:Y,DocumentDuplicateIcon:te}},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    `})},d={render:()=>({components:{DXCopyField:e},template:`
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    `})};var u,y,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,h,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 'npm install dxd-style-code',
    label: 'Installation'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,I,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key'
  }
}`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,k,A;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Примеры всех размеров компонента. Размеры синхронизированы с другими элементами формы (DXInput, DXButton).'
      }
    }
  },
  render: () => ({
    components: {
      DXCopyField
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Small (sm)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="sm"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Medium (md) - Default</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="md"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Large (lg)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            size="lg"
          />
        </div>
      </div>
    \`
  })
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var X,F,f;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'wiggle'
  }
}`,...(f=(F=i.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var S,L,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'npm install dxd-style-code',
    label: 'Installation',
    copyIconAnimation: 'scale',
    copiedIconAnimation: 'scale'
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var _,z,B;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 'sk_live_abc123xyz789',
    label: 'API Key',
    copyIconAnimation: 'rotate',
    copiedIconAnimation: 'rotate'
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var K,P,M;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share',
    label: 'Link',
    copyIconAnimation: 'none',
    copiedIconAnimation: 'none'
  }
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var E,J,T;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    setup() {
      return {
        KeyIcon,
        LinkIcon,
        CodeBracketIcon
      };
    },
    template: \`
      <div class="space-y-6">
        <DXCopyField
          value="sk_live_abc123xyz789"
          label="API Key"
          :copy-icon="KeyIcon"
          copy-icon-animation="wiggle"
        />
        
        <DXCopyField
          value="https://example.com/invite/abc123"
          label="Invite Link"
          :copy-icon="LinkIcon"
          copy-icon-animation="scale"
        />
        
        <DXCopyField
          value="import { DXButton } from 'dxd-style-code'"
          label="Import Code"
          :copy-icon="CodeBracketIcon"
          copy-icon-animation="rotate"
        />
      </div>
    \`
  })
}`,...(T=(J=r.parameters)==null?void 0:J.docs)==null?void 0:T.source}}};var R,V,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com/share/abc123',
    label: 'Share Link',
    copyIconAnimation: 'wiggle',
    copiedIconAnimation: 'scale'
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var N,$,H;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    setup() {
      return {
        ClipboardDocumentIcon,
        KeyIcon,
        LinkIcon,
        DocumentDuplicateIcon
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Default (Scale animation)</h3>
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Wiggle Animation</h3>
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation"
            copy-icon-animation="wiggle"
            copied-icon-animation="wiggle"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Rotate Animation</h3>
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
            copied-icon-animation="rotate"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Custom Icon</h3>
          <DXCopyField
            value="https://example.com/invite/abc123"
            label="Invite Link"
            :copy-icon="LinkIcon"
            copy-icon-animation="scale"
          />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Mixed Animations</h3>
          <DXCopyField
            value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
            label="JWT Token"
            copy-icon-animation="wiggle"
            copied-icon-animation="scale"
          />
        </div>
      </div>
    \`
  })
}`,...(H=($=m.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var O,j,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCopyField
    },
    template: \`
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">Try copying these values!</h3>
        <div class="space-y-4">
          <DXCopyField
            value="https://example.com/share/abc123"
            label="Share Link"
            copy-icon-animation="scale"
            @copied="(val) => console.log('Copied:', val)"
          />
          <DXCopyField
            value="npm install dxd-style-code"
            label="Installation Command"
            copy-icon-animation="wiggle"
          />
          <DXCopyField
            value="sk_live_abc123xyz789"
            label="API Key"
            copy-icon-animation="rotate"
          />
        </div>
        <p class="text-xs text-slate-500">Click the copy button to copy to clipboard</p>
      </div>
    \`
  })
}`,...(G=(j=d.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};const ve=["Default","Code","ApiKey","Sizes","WiggleAnimation","ScaleAnimation","RotateAnimation","NoAnimation","CustomIcons","MixedAnimations","AllVariants","Interactive"];export{m as AllVariants,o as ApiKey,a as Code,r as CustomIcons,n as Default,d as Interactive,p as MixedAnimations,c as NoAnimation,l as RotateAnimation,s as ScaleAnimation,t as Sizes,i as WiggleAnimation,ve as __namedExportsOrder,ye as default};
