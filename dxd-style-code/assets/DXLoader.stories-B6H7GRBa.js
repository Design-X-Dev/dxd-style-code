import{_ as e}from"./DXLoader-B_ug0-wM.js";import"./vue.esm-bundler-Nfu98kES.js";import"./useSize-D8MrabOp.js";import"./useVariant-DBYBwuJ6.js";import"./InformationCircleIcon-DsJgS0pw.js";import"./CheckCircleIcon-BeodL6Lf.js";const V={title:"Atoms/DXLoader",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер лоадера"},variant:{control:"select",options:["default","primary","success","warning","danger","info","slate"],description:"Вариант цвета"},text:{control:"text",description:"Текст лоадера. Если не указан и нет слота, текст не отображается"},showText:{control:"boolean",description:"Показывать текст. Если false, текст не отображается. Если true - всегда показывать"}}},s={args:{size:"md",variant:"default"},render:C=>({components:{DXLoader:e},setup(){return{args:C}},template:'<DXLoader v-bind="args" />'})},a={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex items-center gap-6">
          <DXLoader size="xs" />
          <span class="text-sm text-slate-600">xs (8×8px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="sm" />
          <span class="text-sm text-slate-600">sm (12×12px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="md" />
          <span class="text-sm text-slate-600">md (16×16px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="lg" />
          <span class="text-sm text-slate-600">lg (20×20px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="xl" />
          <span class="text-sm text-slate-600">xl (24×24px)</span>
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    `})},t={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="default" />
              <span class="text-xs text-slate-600">Default</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="primary" />
              <span class="text-xs text-slate-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="slate" />
              <span class="text-xs text-slate-600">Slate</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="success" />
              <span class="text-xs text-slate-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="warning" />
              <span class="text-xs text-slate-600">Warning</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="danger" />
              <span class="text-xs text-slate-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="info" />
              <span class="text-xs text-slate-600">Info</span>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | primary | success | warning | danger | info | slate
        </div>
      </div>
    `})},n={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом default</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="default" />
            <DXLoader size="sm" variant="default" />
            <DXLoader size="md" variant="default" />
            <DXLoader size="lg" variant="default" />
            <DXLoader size="xl" variant="default" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="success" />
            <DXLoader size="sm" variant="success" />
            <DXLoader size="md" variant="success" />
            <DXLoader size="lg" variant="success" />
            <DXLoader size="xl" variant="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="danger" />
            <DXLoader size="sm" variant="danger" />
            <DXLoader size="md" variant="danger" />
            <DXLoader size="lg" variant="danger" />
            <DXLoader size="xl" variant="danger" />
          </div>
        </div>
      </div>
    `})},l={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С текстом по умолчанию</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="info" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С кастомным текстом</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default">Загрузка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success">Обработка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="warning">Пожалуйста, подождите...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="danger">Ошибка загрузки...</DXLoader>
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Без текста (только спиннер)</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" :show-text="false" />
            <DXLoader size="sm" :show-text="false" />
            <DXLoader size="md" :show-text="false" />
            <DXLoader size="lg" :show-text="false" />
            <DXLoader size="xl" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные варианты без текста</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="md" variant="default" :show-text="false" />
            <DXLoader size="md" variant="primary" :show-text="false" />
            <DXLoader size="md" variant="success" :show-text="false" />
            <DXLoader size="md" variant="warning" :show-text="false" />
            <DXLoader size="md" variant="danger" :show-text="false" />
            <DXLoader size="md" variant="info" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Использование без текста</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" :show-text="false" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Используйте <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">:show-text="false"</code> или не передавайте prop <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">text</code> и слот для отображения только спиннера
        </div>
      </div>
    `})},d={render:()=>({components:{DXLoader:e},template:`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В карточке</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В списке</h3>
          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <DXLoader size="sm" variant="info" />
              <span class="text-sm text-slate-700">Синхронизация с сервером</span>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Инлайн загрузка</h3>
          <div class="flex items-center gap-2">
            <span class="text-sm text-slate-700">Статус:</span>
            <DXLoader size="xs" variant="success" :show-text="false" />
            <span class="text-sm text-emerald-700">Активен</span>
          </div>
        </div>
      </div>
    `})};var r,u,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  },
  render: args => ({
    components: {
      DXLoader
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLoader v-bind="args" />'
  })
}`,...(o=(u=s.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var c,x,v;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex items-center gap-6">
          <DXLoader size="xs" />
          <span class="text-sm text-slate-600">xs (8×8px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="sm" />
          <span class="text-sm text-slate-600">sm (12×12px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="md" />
          <span class="text-sm text-slate-600">md (16×16px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="lg" />
          <span class="text-sm text-slate-600">lg (20×20px)</span>
        </div>
        <div class="flex items-center gap-6">
          <DXLoader size="xl" />
          <span class="text-sm text-slate-600">xl (24×24px)</span>
        </div>
        <div class="text-sm text-slate-500 mt-2">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    \`
  })
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var m,p,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Основные варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="default" />
              <span class="text-xs text-slate-600">Default</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="primary" />
              <span class="text-xs text-slate-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="slate" />
              <span class="text-xs text-slate-600">Slate</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Семантические варианты</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="success" />
              <span class="text-xs text-slate-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="warning" />
              <span class="text-xs text-slate-600">Warning</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="danger" />
              <span class="text-xs text-slate-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <DXLoader variant="info" />
              <span class="text-xs text-slate-600">Info</span>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Все варианты: default | primary | success | warning | danger | info | slate
        </div>
      </div>
    \`
  })
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,D,L;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом default</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="default" />
            <DXLoader size="sm" variant="default" />
            <DXLoader size="md" variant="default" />
            <DXLoader size="lg" variant="default" />
            <DXLoader size="xl" variant="default" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом success</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="success" />
            <DXLoader size="sm" variant="success" />
            <DXLoader size="md" variant="success" />
            <DXLoader size="lg" variant="success" />
            <DXLoader size="xl" variant="success" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Размеры с вариантом danger</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" variant="danger" />
            <DXLoader size="sm" variant="danger" />
            <DXLoader size="md" variant="danger" />
            <DXLoader size="lg" variant="danger" />
            <DXLoader size="xl" variant="danger" />
          </div>
        </div>
      </div>
    \`
  })
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var X,z,h;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С текстом по умолчанию</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success" />
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="info" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">С кастомным текстом</h3>
          <div class="flex items-center gap-2">
            <DXLoader size="sm" variant="default">Загрузка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="success">Обработка...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="lg" variant="warning">Пожалуйста, подождите...</DXLoader>
          </div>
          <div class="flex items-center gap-2">
            <DXLoader size="md" variant="danger">Ошибка загрузки...</DXLoader>
          </div>
        </div>
      </div>
    \`
  })
}`,...(h=(z=l.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var b,w,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Без текста (только спиннер)</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="xs" :show-text="false" />
            <DXLoader size="sm" :show-text="false" />
            <DXLoader size="md" :show-text="false" />
            <DXLoader size="lg" :show-text="false" />
            <DXLoader size="xl" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Разные варианты без текста</h3>
          <div class="flex items-center gap-6">
            <DXLoader size="md" variant="default" :show-text="false" />
            <DXLoader size="md" variant="primary" :show-text="false" />
            <DXLoader size="md" variant="success" :show-text="false" />
            <DXLoader size="md" variant="warning" :show-text="false" />
            <DXLoader size="md" variant="danger" :show-text="false" />
            <DXLoader size="md" variant="info" :show-text="false" />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Использование без текста</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" :show-text="false" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div class="text-sm text-slate-500">
          Используйте <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">:show-text="false"</code> или не передавайте prop <code class="text-xs bg-slate-100 px-1 py-0.5 rounded">text</code> и слот для отображения только спиннера
        </div>
      </div>
    \`
  })
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var y,A,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXLoader
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В карточке</h3>
          <div class="border border-slate-200 rounded-lg p-6">
            <div class="flex flex-col items-center justify-center gap-4 py-8">
              <DXLoader size="lg" variant="primary" />
              <p class="text-sm text-slate-600">Загрузка данных...</p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">В списке</h3>
          <div class="border border-slate-200 rounded-lg p-4">
            <div class="flex items-center gap-3">
              <DXLoader size="sm" variant="info" />
              <span class="text-sm text-slate-700">Синхронизация с сервером</span>
            </div>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-4">Инлайн загрузка</h3>
          <div class="flex items-center gap-2">
            <span class="text-sm text-slate-700">Статус:</span>
            <DXLoader size="xs" variant="success" :show-text="false" />
            <span class="text-sm text-emerald-700">Активен</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const I=["Default","Sizes","Variants","SizesAndVariants","WithText","WithoutText","UseCases"];export{s as Default,a as Sizes,n as SizesAndVariants,d as UseCases,t as Variants,l as WithText,i as WithoutText,I as __namedExportsOrder,V as default};
