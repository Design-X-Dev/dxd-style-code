import{_ as u}from"./DXImage-0wzmLVnc.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXObserver-BdOJti0k.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./PhotoIcon-Bus_5N6F.js";const T={title:"Atoms/DXImage",component:u,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`
# DXImage

Универсальный компонент для отображения изображений с поддержкой lazy loading, fallback и обработки ошибок.

## Назначение

DXImage предоставляет улучшенную функциональность по сравнению с обычным \`<img>\` тегом:
- Lazy loading через DXObserver
- Автоматический fallback при ошибке загрузки
- Skeleton/placeholder при загрузке
- Поддержка responsive изображений (srcset)
- Различные размеры и режимы отображения

## Архитектура

### Использует
- \`useSize\` composable - для предопределенных размеров
- \`useClassComposition\` composable - для объединения классов
- \`DXObserver\` - для lazy loading
- \`DXIcon\` - для fallback иконки

### Используется в
- Логотипы и брендинг
- Галереи изображений
- Карточки товаров
- Профили пользователей
- Любые места, где требуется отображение изображений

## Внутренняя логика

### Обработка ошибок
При ошибке загрузки основного изображения:
1. Если указан \`fallback\` → загружает fallback изображение
2. Если есть slot \`fallback\` → показывает кастомный fallback
3. Иначе показывает дефолтный placeholder с иконкой

### Lazy Loading
- Использует \`DXObserver\` для отслеживания видимости
- Показывает skeleton/placeholder до загрузки
- Загружает изображение только при появлении в viewport

### Размеры
- Предопределенные размеры через \`size\` prop (xs, sm, md, lg, xl)
- Кастомные размеры через \`width\` и \`height\` props
- Использует \`useSize\` composable для унификации

## Особенности

### Базовое использование
\`\`\`vue
<DXImage src="/logo.png" alt="Logo" size="md" />
\`\`\`

### С lazy loading
\`\`\`vue
<DXImage src="/image.jpg" alt="Image" lazy />
\`\`\`

### С fallback
\`\`\`vue
<DXImage src="/image.jpg" fallback="/fallback.jpg" alt="Image" />
\`\`\`

### Responsive изображения
\`\`\`vue
<DXImage 
  src="/image.jpg" 
  srcset="/image-small.jpg 400w, /image-large.jpg 800w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Responsive image"
/>
\`\`\`

### Кастомные размеры
\`\`\`vue
<DXImage src="/image.jpg" :width="200" :height="150" alt="Image" />
\`\`\`

## Ограничения

- Lazy loading работает только с DXObserver
- Fallback изображение также может вызвать ошибку (отслеживается отдельно)
- Skeleton показывается только при lazy loading
        `}}},argTypes:{src:{control:"text",description:"URL изображения. Обязательный параметр.",table:{type:{summary:"string"},category:"Image"}},alt:{control:"text",description:"Alt текст для доступности. Важен для SEO и скринридеров.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Image"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Предопределенный размер изображения. Использует useSize composable для унификации размеров.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Size"}},width:{control:"text",description:'Кастомная ширина изображения. Может быть числом (пиксели) или строкой (например, "200px", "50%").',table:{type:{summary:"string | number"},defaultValue:{summary:"null"},category:"Size"}},height:{control:"text",description:'Кастомная высота изображения. Может быть числом (пиксели) или строкой (например, "200px", "50%").',table:{type:{summary:"string | number"},defaultValue:{summary:"null"},category:"Size"}},objectFit:{control:"select",options:["cover","contain","fill","none","scale-down"],description:"CSS object-fit свойство. Определяет, как изображение вписывается в контейнер.",table:{type:{summary:"string"},defaultValue:{summary:'"cover"'},category:"Appearance"}},lazy:{control:"boolean",description:"Включить lazy loading. Изображение загружается только при появлении в viewport через DXObserver.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},fallback:{control:"text",description:"URL fallback изображения при ошибке загрузки основного изображения.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Error Handling"}},placeholder:{control:"text",description:"URL placeholder изображения. Показывается до загрузки основного изображения при lazy loading.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Loading"}},showSkeleton:{control:"boolean",description:"Показывать skeleton при загрузке (только для lazy loading).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Loading"}},rounded:{control:"select",options:["none","sm","md","lg","xl","full"],description:"Скругление углов изображения.",table:{type:{summary:"string"},defaultValue:{summary:'"none"'},category:"Appearance"}},srcset:{control:"text",description:"Responsive изображения (srcset атрибут). Позволяет браузеру выбирать оптимальное изображение.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Responsive"}},sizes:{control:"text",description:"Sizes атрибут для responsive изображений. Определяет размер изображения в разных условиях.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Responsive"}}}},t={args:{src:"https://via.placeholder.com/400x300",alt:"Placeholder image"},parameters:{docs:{description:{story:"Базовое использование DXImage. Простое отображение изображения с alt текстом."}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:'<DXImage v-bind="args" />'})},a={parameters:{docs:{description:{story:"Предопределенные размеры изображений. Использует useSize composable для унификации размеров."}}},render:()=>({components:{DXImage:u},template:`
      <div class="flex items-end gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/64x64" alt="XS" size="xs" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XS</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/96x96" alt="SM" size="sm" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/128x128" alt="MD" size="md" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/192x192" alt="LG" size="lg" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/256x256" alt="XL" size="xl" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XL</p>
        </div>
      </div>
    `})},s={args:{src:"https://via.placeholder.com/400x300",alt:"Custom size image",width:200,height:150},parameters:{docs:{description:{story:'Кастомные размеры через width и height props. Размеры могут быть числами (пиксели) или строками (например, "200px", "50%").'}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:'<DXImage v-bind="args" rounded="lg" />'})},n={parameters:{docs:{description:{story:"Различные режимы object-fit. Определяет, как изображение вписывается в контейнер."}}},render:()=>({components:{DXImage:u},template:`
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Cover" 
            :width="200" 
            :height="150" 
            object-fit="cover"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Cover</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Contain" 
            :width="200" 
            :height="150" 
            object-fit="contain"
            rounded="lg"
            class="bg-slate-100"
          />
          <p class="text-xs text-slate-500 mt-2">Contain</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Fill" 
            :width="200" 
            :height="150" 
            object-fit="fill"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Fill</p>
        </div>
      </div>
    `})},r={parameters:{docs:{description:{story:"Различные варианты скругления углов изображения."}}},render:()=>({components:{DXImage:u},template:`
      <div class="flex gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="None" rounded="none" />
          <p class="text-xs text-slate-500 mt-2">None</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="SM" rounded="sm" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="MD" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="LG" rounded="lg" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="Full" rounded="full" />
          <p class="text-xs text-slate-500 mt-2">Full</p>
        </div>
      </div>
    `})},l={args:{src:"https://via.placeholder.com/800x600",alt:"Lazy loaded image",lazy:!0},parameters:{docs:{description:{story:"Lazy loading изображения. Изображение загружается только при появлении в viewport. Прокрутите вниз, чтобы увидеть загрузку."}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:`
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p class="text-slate-600">Прокрутите вниз для загрузки изображения</p>
        </div>
        <DXImage v-bind="args" :width="800" :height="600" rounded="lg" />
      </div>
    `})},o={args:{src:"https://invalid-url-that-will-fail.com/image.jpg",alt:"Image with fallback",fallback:"https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Fallback"},parameters:{docs:{description:{story:"Изображение с fallback. При ошибке загрузки основного изображения автоматически загружается fallback изображение."}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:'<DXImage v-bind="args" :width="400" :height="300" rounded="lg" />'})},c={args:{src:"https://invalid-url-that-will-fail.com/image.jpg",alt:"Image with custom fallback"},parameters:{docs:{description:{story:"Кастомный fallback через slot. Позволяет использовать любой контент в качестве fallback."}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:`
      <DXImage v-bind="args" :width="400" :height="300" rounded="lg">
        <template #fallback>
          <div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center rounded-lg">
            <div class="text-center">
              <p class="text-slate-600 font-medium">Изображение не загружено</p>
              <p class="text-slate-400 text-sm mt-1">Используется кастомный fallback</p>
            </div>
          </div>
        </template>
      </DXImage>
    `})},i={args:{src:"https://via.placeholder.com/800x600",alt:"Responsive image",srcset:"https://via.placeholder.com/400x300 400w, https://via.placeholder.com/800x600 800w, https://via.placeholder.com/1200x900 1200w",sizes:"(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"},parameters:{docs:{description:{story:"Responsive изображение с srcset и sizes. Браузер автоматически выбирает оптимальное изображение в зависимости от размера экрана и плотности пикселей."}}},render:e=>({components:{DXImage:u},setup(){return{args:e}},template:'<DXImage v-bind="args" class="w-full" rounded="lg" />'})};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Placeholder image'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование DXImage. Простое отображение изображения с alt текстом.'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXImage v-bind="args" />'
  })
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Предопределенные размеры изображений. Использует useSize composable для унификации размеров.'
      }
    }
  },
  render: () => ({
    components: {
      DXImage
    },
    template: \`
      <div class="flex items-end gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/64x64" alt="XS" size="xs" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XS</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/96x96" alt="SM" size="sm" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/128x128" alt="MD" size="md" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/192x192" alt="LG" size="lg" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/256x256" alt="XL" size="xl" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">XL</p>
        </div>
      </div>
    \`
  })
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,D,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Custom size image',
    width: 200,
    height: 150
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомные размеры через width и height props. Размеры могут быть числами (пиксели) или строками (например, "200px", "50%").'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXImage v-bind="args" rounded="lg" />'
  })
}`,...(b=(D=s.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var f,y,X;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные режимы object-fit. Определяет, как изображение вписывается в контейнер.'
      }
    }
  },
  render: () => ({
    components: {
      DXImage
    },
    template: \`
      <div class="grid grid-cols-3 gap-4">
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Cover" 
            :width="200" 
            :height="150" 
            object-fit="cover"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Cover</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Contain" 
            :width="200" 
            :height="150" 
            object-fit="contain"
            rounded="lg"
            class="bg-slate-100"
          />
          <p class="text-xs text-slate-500 mt-2">Contain</p>
        </div>
        <div class="text-center">
          <DXImage 
            src="https://via.placeholder.com/400x300" 
            alt="Fill" 
            :width="200" 
            :height="150" 
            object-fit="fill"
            rounded="lg"
          />
          <p class="text-xs text-slate-500 mt-2">Fill</p>
        </div>
      </div>
    \`
  })
}`,...(X=(y=n.parameters)==null?void 0:y.docs)==null?void 0:X.source}}};var I,E,z;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты скругления углов изображения.'
      }
    }
  },
  render: () => ({
    components: {
      DXImage
    },
    template: \`
      <div class="flex gap-4">
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="None" rounded="none" />
          <p class="text-xs text-slate-500 mt-2">None</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="SM" rounded="sm" />
          <p class="text-xs text-slate-500 mt-2">SM</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="MD" rounded="md" />
          <p class="text-xs text-slate-500 mt-2">MD</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="LG" rounded="lg" />
          <p class="text-xs text-slate-500 mt-2">LG</p>
        </div>
        <div class="text-center">
          <DXImage src="https://via.placeholder.com/100x100" alt="Full" rounded="full" />
          <p class="text-xs text-slate-500 mt-2">Full</p>
        </div>
      </div>
    \`
  })
}`,...(z=(E=r.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var F,w,C;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Lazy loaded image',
    lazy: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Lazy loading изображения. Изображение загружается только при появлении в viewport. Прокрутите вниз, чтобы увидеть загрузку.'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="space-y-4">
        <div class="h-screen bg-slate-50 p-4">
          <p class="text-slate-600">Прокрутите вниз для загрузки изображения</p>
        </div>
        <DXImage v-bind="args" :width="800" :height="600" rounded="lg" />
      </div>
    \`
  })
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,S,B;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image with fallback',
    fallback: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Fallback'
  },
  parameters: {
    docs: {
      description: {
        story: 'Изображение с fallback. При ошибке загрузки основного изображения автоматически загружается fallback изображение.'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXImage v-bind="args" :width="400" :height="300" rounded="lg" />'
  })
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var L,A,j;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Image with custom fallback'
  },
  parameters: {
    docs: {
      description: {
        story: 'Кастомный fallback через slot. Позволяет использовать любой контент в качестве fallback.'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <DXImage v-bind="args" :width="400" :height="300" rounded="lg">
        <template #fallback>
          <div class="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center rounded-lg">
            <div class="text-center">
              <p class="text-slate-600 font-medium">Изображение не загружено</p>
              <p class="text-slate-400 text-sm mt-1">Используется кастомный fallback</p>
            </div>
          </div>
        </template>
      </DXImage>
    \`
  })
}`,...(j=(A=c.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var M,R,V;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/800x600',
    alt: 'Responsive image',
    srcset: 'https://via.placeholder.com/400x300 400w, https://via.placeholder.com/800x600 800w, https://via.placeholder.com/1200x900 1200w',
    sizes: '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px'
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive изображение с srcset и sizes. Браузер автоматически выбирает оптимальное изображение в зависимости от размера экрана и плотности пикселей.'
      }
    }
  },
  render: args => ({
    components: {
      DXImage
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXImage v-bind="args" class="w-full" rounded="lg" />'
  })
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};const q=["Default","Sizes","CustomSizes","ObjectFit","Rounded","LazyLoading","WithFallback","WithCustomFallback","Responsive"];export{s as CustomSizes,t as Default,l as LazyLoading,n as ObjectFit,i as Responsive,r as Rounded,a as Sizes,c as WithCustomFallback,o as WithFallback,q as __namedExportsOrder,T as default};
