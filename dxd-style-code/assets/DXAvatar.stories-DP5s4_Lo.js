import{_ as u,r as z}from"./DXAvatar-CBvTh_o7.js";import{a as w,o as q,b as i}from"./vue.esm-bundler-C1fUoNF-.js";import{r as H}from"./SparklesIcon-BvnHtV9x.js";import{r as U}from"./StarIcon-BfBLtMMD.js";import{r as o}from"./HeartIcon-DEmfWIR9.js";import"./useSize-DIMNv1Ms.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";function L(V,W){return q(),w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[i("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z","clip-rule":"evenodd"}),i("path",{d:"M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"})])}const O={title:"Atoms/DXAvatar",component:u,tags:["autodocs","category:data-display"],parameters:{docs:{description:{component:`

Компонент аватара пользователя с поддержкой изображений, инициалов и иконок.

## Назначение

DXAvatar - атомарный компонент для отображения аватаров пользователей.
Поддерживает изображения, инициалы или иконки с автоматическим fallback.

## Архитектура

### Использует
- \`useSize\` composable - для размеров аватара (xs, sm, md, lg, xl)
- \`DXIcon\` - для отображения иконок fallback
- \`UserIcon\` (Heroicons) - дефолтная иконка fallback

### Используется в
- \`DXChatInterface\` - аватары в сообщениях
- Профили пользователей
- Списки пользователей
- Комментарии и отзывы

## Внутренняя логика

### Fallback система
Компонент использует трехуровневую систему fallback:
1. **Изображение** - если указан \`src\` и загрузка успешна
2. **Инициалы** - если нет изображения, но указаны \`initials\`
3. **Иконка** - если нет ни изображения, ни инициалов (по умолчанию UserIcon)

### Обработка ошибок изображения
- При ошибке загрузки изображения автоматически переключается на fallback
- Ошибка отслеживается через \`@error\` событие на \`<img>\`
- При изменении \`src\` ошибка сбрасывается для новой попытки загрузки

### Размеры иконки
Размер иконки автоматически вычисляется на основе размера аватара:
- xs → sm
- sm → sm
- md → md
- lg → lg
- xl → xl

### Анимации
- Поддержка анимаций иконки при hover: none, wiggle, scale, rotate
- Анимация scale на самом аватаре при hover (если iconAnimation !== 'none')

## Особенности

### Формы
- \`circle\` - круглая форма (по умолчанию)
- \`square\` - квадратная форма с закругленными углами

### Кастомные иконки
Можно указать кастомную иконку через prop \`icon\`:
\`\`\`vue
<DXAvatar :icon="HeartIcon" />
\`\`\`

### Инициалы
Инициалы автоматически преобразуются в uppercase:
\`\`\`vue
<DXAvatar initials="JD" /> <!-- Покажет "JD" -->
\`\`\`

## Ограничения

- Инициалы должны быть короткими (1-3 символа) для лучшего отображения
- Изображения должны быть квадратными для правильного отображения
- При ошибке загрузки изображения автоматически переключается на fallback
        `}}},argTypes:{src:{control:{type:"text"},description:"URL изображения аватара. При ошибке загрузки автоматически переключается на fallback.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Content"}},alt:{control:{type:"text"},description:"Alt текст для изображения. Используется для доступности.",table:{type:{summary:"string"},defaultValue:{summary:'"Avatar"'},category:"Content"}},initials:{control:{type:"text"},description:"Инициалы пользователя. Отображаются если нет изображения. Автоматически преобразуются в uppercase.",table:{type:{summary:"string"},defaultValue:{summary:'""'},category:"Content"}},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"],description:"Размер аватара. Влияет на размер контейнера, текста и иконки.",table:{type:{summary:"string"},defaultValue:{summary:'"md"'},category:"Appearance"}},shape:{control:{type:"select"},options:["circle","square"],description:"Форма аватара. Circle - круглая, square - квадратная с закругленными углами.",table:{type:{summary:"string"},defaultValue:{summary:'"circle"'},category:"Appearance"}},icon:{control:!1,description:"Кастомная иконка для fallback. Если не указана, используется UserIcon по умолчанию.",table:{type:{summary:"Object | Function"},defaultValue:{summary:"null"},category:"Content"}},iconAnimation:{control:{type:"select"},options:["none","wiggle","scale","rotate"],description:"Анимация иконки при hover. Также влияет на анимацию scale самого аватара.",table:{type:{summary:"string"},defaultValue:{summary:'"wiggle"'},category:"Appearance"}}}},e={args:{initials:"JD"},parameters:{docs:{description:{story:"Базовый аватар с инициалами. Инициалы автоматически преобразуются в uppercase и отображаются, если нет изображения."}}}},a={args:{src:"https://i.pravatar.cc/100",alt:"User"},parameters:{docs:{description:{story:"Аватар с изображением. При ошибке загрузки изображения автоматически переключается на fallback (инициалы или иконку)."}}}},t={parameters:{docs:{description:{story:"Все доступные размеры аватаров. Размер влияет на размер контейнера, текста иконки и инициалов."}}},render:()=>({components:{DXAvatar:u},template:`
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    `})},n={parameters:{docs:{description:{story:"Две доступные формы аватара: circle (круглая) и square (квадратная с закругленными углами)."}}},render:()=>({components:{DXAvatar:u},template:`
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    `})},s={parameters:{docs:{description:{story:"Кастомные иконки для fallback. Можно использовать любую иконку из Heroicons. Если иконка не указана, используется UserIcon по умолчанию."}}},render:()=>({components:{DXAvatar:u},setup(){return{UserIcon:z,HeartIcon:o,StarIcon:U,SparklesIcon:H,RocketLaunchIcon:L}},template:`
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    `})},r={parameters:{docs:{description:{story:"Все варианты fallback системы: изображение (приоритет 1), инициалы (приоритет 2), дефолтная иконка UserIcon (приоритет 3), кастомная иконка (приоритет 3, если указана)."}}},render:()=>({components:{DXAvatar:u},setup(){return{HeartIcon:o}},template:`
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    `})},c={parameters:{docs:{description:{story:'Анимации иконки при hover. При iconAnimation !== "none" также применяется анимация scale на самом аватаре. Доступны варианты: none (без анимации), wiggle (тряска), scale (масштабирование), rotate (вращение).'}}},render:()=>({components:{DXAvatar:u},setup(){return{UserIcon:z,HeartIcon:o,StarIcon:U,SparklesIcon:H}},template:`
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    `})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    initials: 'JD'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовый аватар с инициалами. Инициалы автоматически преобразуются в uppercase и отображаются, если нет изображения.'
      }
    }
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,v,D;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/100',
    alt: 'User'
  },
  parameters: {
    docs: {
      description: {
        story: 'Аватар с изображением. При ошибке загрузки изображения автоматически переключается на fallback (инициалы или иконку).'
      }
    }
  }
}`,...(D=(v=a.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var A,x,g;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры аватаров. Размер влияет на размер контейнера, текста иконки и инициалов.'
      }
    }
  },
  render: () => ({
    components: {
      DXAvatar
    },
    template: \`
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    \`
  })
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var X,E,I;n.parameters={...n.parameters,docs:{...(X=n.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Две доступные формы аватара: circle (круглая) и square (квадратная с закругленными углами).'
      }
    }
  },
  render: () => ({
    components: {
      DXAvatar
    },
    template: \`
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    \`
  })
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var y,f,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кастомные иконки для fallback. Можно использовать любую иконку из Heroicons. Если иконка не указана, используется UserIcon по умолчанию.'
      }
    }
  },
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        UserIcon,
        HeartIcon,
        StarIcon,
        SparklesIcon,
        RocketLaunchIcon
      };
    },
    template: \`
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    \`
  })
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var C,F,S;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все варианты fallback системы: изображение (приоритет 1), инициалы (приоритет 2), дефолтная иконка UserIcon (приоритет 3), кастомная иконка (приоритет 3, если указана).'
      }
    }
  },
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        HeartIcon
      };
    },
    template: \`
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    \`
  })
}`,...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var h,k,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Анимации иконки при hover. При iconAnimation !== "none" также применяется анимация scale на самом аватаре. Доступны варианты: none (без анимации), wiggle (тряска), scale (масштабирование), rotate (вращение).'
      }
    }
  },
  render: () => ({
    components: {
      DXAvatar
    },
    setup() {
      return {
        UserIcon,
        HeartIcon,
        StarIcon,
        SparklesIcon
      };
    },
    template: \`
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    \`
  })
}`,...(b=(k=c.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const Q=["Default","WithImage","Sizes","Shapes","WithCustomIcons","FallbackScenarios","WithAnimations"];export{e as Default,r as FallbackScenarios,n as Shapes,t as Sizes,c as WithAnimations,s as WithCustomIcons,a as WithImage,Q as __namedExportsOrder,O as default};
