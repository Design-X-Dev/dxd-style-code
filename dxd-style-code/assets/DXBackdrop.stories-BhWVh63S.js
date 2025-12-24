import{_ as o}from"./DXBackdrop-CRxYx67P.js";import{_ as e}from"./DXButton-ChBdj9Dq.js";import{r as n,c as G}from"./vue.esm-bundler-CzLKT_w4.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useClassComposition-Dym2pzZ_.js";const V={title:"Atoms/DXBackdrop",component:o,tags:["autodocs","category:overlay"],argTypes:{blur:{control:"select",options:["none","sm","md","lg","xl"],description:"Уровень размытия backdrop"},backgroundColor:{control:"text",description:"Цвет фона (Tailwind класс или CSS значение): bg-slate-900/40 | bg-black/50 | rgb(...)"},zIndex:{control:"select",options:["0","10","20","30","40","50","auto"],description:"z-index backdrop"},dismissible:{control:"boolean",description:"Можно ли закрыть кликом"},lockScroll:{control:"boolean",description:"Блокировать скролл body"}}},r={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){return{show:n(!1)}},template:`
      <div>
        <DXButton @click="show = true">Показать Backdrop</DXButton>
        <DXBackdrop :show="show" @close="show = false" />
      </div>
    `})},l={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){const u=["none","sm","md","lg","xl"],t=n(null);return{blurs:u,currentBlur:t}},template:`
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="blur in blurs" 
          :key="blur"
          @click="currentBlur = blur"
          size="sm"
        >
          Blur: {{ blur }}
        </DXButton>
        <DXBackdrop 
          :show="currentBlur !== null" 
          :blur="currentBlur"
          @close="currentBlur = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">{{ currentBlur }}</div>
              <div class="text-sm opacity-80">Кликните на backdrop чтобы закрыть</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},c={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){const u=[{name:"Slate",value:"slate-900"},{name:"Gray",value:"gray-900"},{name:"Black",value:"black"},{name:"White",value:"white"}],t=n(null),s=G(()=>t.value?`bg-${t.value.value}/40`:"bg-slate-900/40");return{colors:u,currentColor:t,backgroundColor:s}},template:`
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="color in colors" 
          :key="color.value"
          @click="currentColor = color"
          size="sm"
        >
          {{ color.name }}
        </DXButton>
        <DXBackdrop 
          :show="currentColor !== null" 
          :background-color="backgroundColor"
          @close="currentColor = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center" :class="currentColor?.value === 'white' ? 'text-slate-900' : 'text-white'">
              <div class="text-3xl font-bold mb-2">{{ currentColor?.name }}</div>
              <div class="text-sm opacity-80">Цвет: {{ currentColor?.value }}</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},a={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){return{show:n(!1)}},template:`
      <div>
        <DXButton @click="show = true">Открыть модалку</DXButton>
        <DXBackdrop :show="show" @close="show = false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Модальное окно</h2>
              <p class="text-slate-600 mb-4">
                Это пример содержимого внутри backdrop. 
                Backdrop предоставляет фон с размытием, 
                а контент рендерится через slot.
              </p>
              <div class="flex gap-2">
                <DXButton @click="show = false" variant="primary">Закрыть</DXButton>
                <DXButton @click="show = false" variant="secondary">Отмена</DXButton>
              </div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},d={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){return{show:n(!1)}},template:`
      <div>
        <DXButton @click="show = true">Открыть (не закрывается кликом)</DXButton>
        <DXBackdrop :show="show" :dismissible="false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Важное уведомление</h2>
              <p class="text-slate-600 mb-4">
                Этот backdrop нельзя закрыть кликом по фону.
                Только через кнопку закрытия.
              </p>
              <DXButton @click="show = false" variant="primary" block>
                Понятно, закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},i={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){const u=n(!1),t=n(!1);return{show1:u,show2:t}},template:`
      <div class="flex gap-4">
        <DXButton @click="show1 = true">Backdrop z-10</DXButton>
        <DXButton @click="show2 = true">Backdrop z-20</DXButton>
        
        <DXBackdrop :show="show1" z-index="10" @close="show1 = false" background-color="bg-slate-900/30">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 10</h3>
              <p class="text-sm text-slate-600 mb-4">Нижний слой</p>
              <DXButton @click="show1 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
        
        <DXBackdrop :show="show2" z-index="20" @close="show2 = false">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 20</h3>
              <p class="text-sm text-slate-600 mb-4">Верхний слой</p>
              <DXButton @click="show2 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},p={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){return{show:n(!1)}},template:`
      <div>
        <DXButton @click="show = true">Без размытия</DXButton>
        <DXBackdrop :show="show" blur="none" background-color="bg-slate-900/60" @close="show = false">
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">Без размытия</div>
              <div class="text-sm opacity-80">Только затемнение без backdrop-blur</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})},m={render:()=>({components:{DXBackdrop:o,DXButton:e},setup(){const u=n(!1),t=n("md"),s=n("40"),v=n("slate-900"),L=G(()=>{if(["0","5","10","20","30","40","50","60","70","80","90","95","100"].includes(String(s.value)))return`bg-${v.value}/${s.value}`;const B={"slate-900":"rgb(15 23 42","gray-900":"rgb(17 24 39",black:"rgb(0 0 0",white:"rgb(255 255 255"};return`${B[v.value]||B["slate-900"]} / ${s.value}%)`});return{show:u,blur:t,opacity:s,color:v,backgroundColor:L}},template:`
      <div>
        <div class="flex flex-col gap-4 mb-4 p-4 bg-slate-50 rounded-xl">
          <div>
            <label class="block text-sm font-medium mb-2">Размытие:</label>
            <div class="flex gap-2">
              <DXButton 
                v-for="b in ['none', 'sm', 'md', 'lg', 'xl']"
                :key="b"
                :variant="blur === b ? 'primary' : 'secondary'"
                size="sm"
                @click="blur = b"
              >
                {{ b }}
              </DXButton>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Прозрачность: {{ opacity }}%</label>
            <input 
              type="range" 
              v-model="opacity" 
              min="0" 
              max="100" 
              step="5"
              class="w-full"
            />
          </div>
          
          <DXButton @click="show = true">Показать backdrop</DXButton>
        </div>
        
        <DXBackdrop 
          :show="show" 
          :blur="blur"
          :background-color="backgroundColor"
          @close="show = false"
        >
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-4">Настройки backdrop</h3>
              <div class="space-y-2 text-sm text-slate-600 mb-4">
                <p><strong>Blur:</strong> {{ blur }}</p>
                <p><strong>Opacity:</strong> {{ opacity }}%</p>
                <p><strong>Color:</strong> {{ color }}</p>
              </div>
              <DXButton @click="show = false" variant="primary" block>
                Закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `})};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
      <div>
        <DXButton @click="show = true">Показать Backdrop</DXButton>
        <DXBackdrop :show="show" @close="show = false" />
      </div>
    \`
  })
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var D,w,x;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const blurs = ['none', 'sm', 'md', 'lg', 'xl'];
      const currentBlur = ref(null);
      return {
        blurs,
        currentBlur
      };
    },
    template: \`
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="blur in blurs" 
          :key="blur"
          @click="currentBlur = blur"
          size="sm"
        >
          Blur: {{ blur }}
        </DXButton>
        <DXBackdrop 
          :show="currentBlur !== null" 
          :blur="currentBlur"
          @close="currentBlur = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">{{ currentBlur }}</div>
              <div class="text-sm opacity-80">Кликните на backdrop чтобы закрыть</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(x=(w=l.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var k,X,g;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const colors = [{
        name: 'Slate',
        value: 'slate-900'
      }, {
        name: 'Gray',
        value: 'gray-900'
      }, {
        name: 'Black',
        value: 'black'
      }, {
        name: 'White',
        value: 'white'
      }];
      const currentColor = ref(null);
      const backgroundColor = computed(() => {
        if (!currentColor.value) return 'bg-slate-900/40';
        return \`bg-\${currentColor.value.value}/40\`;
      });
      return {
        colors,
        currentColor,
        backgroundColor
      };
    },
    template: \`
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="color in colors" 
          :key="color.value"
          @click="currentColor = color"
          size="sm"
        >
          {{ color.name }}
        </DXButton>
        <DXBackdrop 
          :show="currentColor !== null" 
          :background-color="backgroundColor"
          @close="currentColor = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center" :class="currentColor?.value === 'white' ? 'text-slate-900' : 'text-white'">
              <div class="text-3xl font-bold mb-2">{{ currentColor?.name }}</div>
              <div class="text-sm opacity-80">Цвет: {{ currentColor?.value }}</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(g=(X=c.parameters)==null?void 0:X.docs)==null?void 0:g.source}}};var y,C,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
      <div>
        <DXButton @click="show = true">Открыть модалку</DXButton>
        <DXBackdrop :show="show" @close="show = false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Модальное окно</h2>
              <p class="text-slate-600 mb-4">
                Это пример содержимого внутри backdrop. 
                Backdrop предоставляет фон с размытием, 
                а контент рендерится через slot.
              </p>
              <div class="flex gap-2">
                <DXButton @click="show = false" variant="primary">Закрыть</DXButton>
                <DXButton @click="show = false" variant="secondary">Отмена</DXButton>
              </div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(E=(C=a.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,z,j;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
      <div>
        <DXButton @click="show = true">Открыть (не закрывается кликом)</DXButton>
        <DXBackdrop :show="show" :dismissible="false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Важное уведомление</h2>
              <p class="text-slate-600 mb-4">
                Этот backdrop нельзя закрыть кликом по фону.
                Только через кнопку закрытия.
              </p>
              <DXButton @click="show = false" variant="primary" block>
                Понятно, закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var F,S,$;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show1 = ref(false);
      const show2 = ref(false);
      return {
        show1,
        show2
      };
    },
    template: \`
      <div class="flex gap-4">
        <DXButton @click="show1 = true">Backdrop z-10</DXButton>
        <DXButton @click="show2 = true">Backdrop z-20</DXButton>
        
        <DXBackdrop :show="show1" z-index="10" @close="show1 = false" background-color="bg-slate-900/30">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 10</h3>
              <p class="text-sm text-slate-600 mb-4">Нижний слой</p>
              <DXButton @click="show1 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
        
        <DXBackdrop :show="show2" z-index="20" @close="show2 = false">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 20</h3>
              <p class="text-sm text-slate-600 mb-4">Верхний слой</p>
              <DXButton @click="show2 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...($=(S=i.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var _,O,I;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show = ref(false);
      return {
        show
      };
    },
    template: \`
      <div>
        <DXButton @click="show = true">Без размытия</DXButton>
        <DXBackdrop :show="show" blur="none" background-color="bg-slate-900/60" @close="show = false">
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">Без размытия</div>
              <div class="text-sm opacity-80">Только затемнение без backdrop-blur</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var M,N,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBackdrop,
      DXButton
    },
    setup() {
      const show = ref(false);
      const blur = ref('md');
      const opacity = ref('40');
      const color = ref('slate-900');
      const backgroundColor = computed(() => {
        const tailwindOpacities = ['0', '5', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '100'];
        if (tailwindOpacities.includes(String(opacity.value))) {
          return \`bg-\${color.value}/\${opacity.value}\`;
        }
        const colorMap = {
          'slate-900': 'rgb(15 23 42',
          'gray-900': 'rgb(17 24 39',
          'black': 'rgb(0 0 0',
          'white': 'rgb(255 255 255'
        };
        const rgb = colorMap[color.value] || colorMap['slate-900'];
        return \`\${rgb} / \${opacity.value}%)\`;
      });
      return {
        show,
        blur,
        opacity,
        color,
        backgroundColor
      };
    },
    template: \`
      <div>
        <div class="flex flex-col gap-4 mb-4 p-4 bg-slate-50 rounded-xl">
          <div>
            <label class="block text-sm font-medium mb-2">Размытие:</label>
            <div class="flex gap-2">
              <DXButton 
                v-for="b in ['none', 'sm', 'md', 'lg', 'xl']"
                :key="b"
                :variant="blur === b ? 'primary' : 'secondary'"
                size="sm"
                @click="blur = b"
              >
                {{ b }}
              </DXButton>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Прозрачность: {{ opacity }}%</label>
            <input 
              type="range" 
              v-model="opacity" 
              min="0" 
              max="100" 
              step="5"
              class="w-full"
            />
          </div>
          
          <DXButton @click="show = true">Показать backdrop</DXButton>
        </div>
        
        <DXBackdrop 
          :show="show" 
          :blur="blur"
          :background-color="backgroundColor"
          @close="show = false"
        >
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-4">Настройки backdrop</h3>
              <div class="space-y-2 text-sm text-slate-600 mb-4">
                <p><strong>Blur:</strong> {{ blur }}</p>
                <p><strong>Opacity:</strong> {{ opacity }}%</p>
                <p><strong>Color:</strong> {{ color }}</p>
              </div>
              <DXButton @click="show = false" variant="primary" block>
                Закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    \`
  })
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Y=["Default","BlurLevels","Colors","WithContent","NotDismissible","CustomZIndex","NoBlur","Interactive"];export{l as BlurLevels,c as Colors,i as CustomZIndex,r as Default,m as Interactive,p as NoBlur,d as NotDismissible,a as WithContent,Y as __namedExportsOrder,V as default};
