import{_ as s}from"./DXCard-BX01pIOu.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useSpacing-BOHUzi8w.js";const b={title:"Atoms/DXCard",component:s,tags:["autodocs","category:data-display"],argTypes:{variant:{control:"select",options:["default","bordered","elevated","flat"],description:"Card variant style"},padding:{control:"select",options:["none","sm","md","lg"],description:"Card padding size"}}},t={args:{variant:"default",padding:"md"},render:x=>({components:{DXCard:s},setup(){return{args:x}},template:`
      <DXCard v-bind="args">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Card Title</h3>
        <p class="text-sm text-slate-600">
          This is a card component with default styling. It includes border, shadow, and padding.
        </p>
      </DXCard>
    `})},e={render:()=>({components:{DXCard:s},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Default (border + shadow)</p>
          <DXCard variant="default">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Default Card</h3>
            <p class="text-sm text-slate-600">
              Subtle border and shadow for a clean, modern look.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Bordered (2px border, no shadow)</p>
          <DXCard variant="bordered">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Bordered Card</h3>
            <p class="text-sm text-slate-600">
              More prominent border without shadow for emphasis.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Elevated (large shadow)</p>
          <DXCard variant="elevated">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Elevated Card</h3>
            <p class="text-sm text-slate-600">
              Pronounced shadow creates a floating effect.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Flat (no border or shadow)</p>
          <DXCard variant="flat">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Flat Card</h3>
            <p class="text-sm text-slate-600">
              Minimal styling, just background color and rounded corners.
            </p>
          </DXCard>
        </div>
      </div>
    `})},a={render:()=>({components:{DXCard:s},template:`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">No Padding</p>
          <DXCard padding="none">
            <div class="h-32 flex items-center justify-center text-slate-500">
              Content with no padding
            </div>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small Padding (p-3)</p>
          <DXCard padding="sm">
            <h3 class="text-base font-semibold text-slate-900 mb-1">Small</h3>
            <p class="text-sm text-slate-600">Compact padding for dense layouts.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium Padding (p-5, default)</p>
          <DXCard padding="md">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Medium</h3>
            <p class="text-sm text-slate-600">Standard padding for most use cases.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large Padding (p-8)</p>
          <DXCard padding="lg">
            <h3 class="text-xl font-semibold text-slate-900 mb-3">Large</h3>
            <p class="text-sm text-slate-600">Generous padding for spacious layouts.</p>
          </DXCard>
        </div>
      </div>
    `})};var d,n,r;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    padding: 'md'
  },
  render: args => ({
    components: {
      DXCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXCard v-bind="args">
        <h3 class="text-lg font-semibold text-slate-900 mb-2">Card Title</h3>
        <p class="text-sm text-slate-600">
          This is a card component with default styling. It includes border, shadow, and padding.
        </p>
      </DXCard>
    \`
  })
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var l,o,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCard
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Default (border + shadow)</p>
          <DXCard variant="default">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Default Card</h3>
            <p class="text-sm text-slate-600">
              Subtle border and shadow for a clean, modern look.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Bordered (2px border, no shadow)</p>
          <DXCard variant="bordered">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Bordered Card</h3>
            <p class="text-sm text-slate-600">
              More prominent border without shadow for emphasis.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Elevated (large shadow)</p>
          <DXCard variant="elevated">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Elevated Card</h3>
            <p class="text-sm text-slate-600">
              Pronounced shadow creates a floating effect.
            </p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Flat (no border or shadow)</p>
          <DXCard variant="flat">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Flat Card</h3>
            <p class="text-sm text-slate-600">
              Minimal styling, just background color and rounded corners.
            </p>
          </DXCard>
        </div>
      </div>
    \`
  })
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXCard
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">No Padding</p>
          <DXCard padding="none">
            <div class="h-32 flex items-center justify-center text-slate-500">
              Content with no padding
            </div>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Small Padding (p-3)</p>
          <DXCard padding="sm">
            <h3 class="text-base font-semibold text-slate-900 mb-1">Small</h3>
            <p class="text-sm text-slate-600">Compact padding for dense layouts.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Medium Padding (p-5, default)</p>
          <DXCard padding="md">
            <h3 class="text-lg font-semibold text-slate-900 mb-2">Medium</h3>
            <p class="text-sm text-slate-600">Standard padding for most use cases.</p>
          </DXCard>
        </div>
        
        <div>
          <p class="text-sm font-medium text-slate-700 mb-2">Large Padding (p-8)</p>
          <DXCard padding="lg">
            <h3 class="text-xl font-semibold text-slate-900 mb-3">Large</h3>
            <p class="text-sm text-slate-600">Generous padding for spacious layouts.</p>
          </DXCard>
        </div>
      </div>
    \`
  })
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Default","Variants","PaddingSizes"];export{t as Default,a as PaddingSizes,e as Variants,v as __namedExportsOrder,b as default};
