import{_ as u}from"./DXLink-Dne95vSb.js";import{_ as M}from"./DXIcon-BbhqsR95.js";import{r as O}from"./HomeIcon-CdtK5ct4.js";import"./vue.esm-bundler-CzLKT_w4.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";import"./useClassComposition-Dym2pzZ_.js";import"./useAnimation-ByVAdqmf.js";const K={title:"Atoms/DXLink",component:u,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXLink

Компонент ссылки с поддержкой обычных ссылок и Vue Router.

## Назначение

DXLink - атомарный компонент для создания ссылок с различными вариантами стилизации.
Поддерживает как обычные HTML ссылки, так и навигацию через Vue Router.

## Архитектура

### Использует
- \`useSize\` composable - для размеров текста (xs, sm, md, lg, xl)
- \`useVariantButton\` composable - для вариантов стилизации (primary, secondary, ghost, link)
- \`useClassComposition\` composable - для объединения классов
- \`DXIcon\` - для иконки внешних ссылок (ArrowTopRightOnSquareIcon)

### Используется в
- \`DXBreadcrumb\` - ссылки в хлебных крошках
- \`DXHeaderBar\` - навигационные ссылки в шапке
- Навигационные меню
- Footer ссылки

## Внутренняя логика

### Автоматическое определение типа ссылки
- Если указан \`to\` prop → использует \`router-link\`
- Если указан \`href\` prop → использует обычный \`<a>\` тег
- Если ничего не указано → использует \`<span>\` (fallback)

### Автоматическое определение внешних ссылок
Компонент автоматически определяет внешние ссылки по префиксам:
- \`http://\`
- \`https://\`
- \`//\` (protocol-relative)

### Безопасность
Для внешних ссылок с \`target="_blank"\` автоматически добавляется:
- \`rel="noopener noreferrer"\` - для защиты от tabnabbing атак
- Иконка внешней ссылки (если \`showExternalIcon={true}\`)

### Disabled состояние
- Блокирует клик через \`preventDefault\` и \`stopPropagation\`
- Применяет визуальные стили (opacity, cursor)
- Отключает pointer-events

## Особенности

### Vue Router интеграция
При использовании \`to\` prop требуется установленный Vue Router:
\`\`\`vue
<DXLink :to="{ name: 'home' }">Главная</DXLink>
<DXLink :to="/dashboard">Дашборд</DXLink>
\`\`\`

### Обычные ссылки
Для внешних или обычных ссылок используйте \`href\`:
\`\`\`vue
<DXLink href="https://example.com" target="_blank">Внешний сайт</DXLink>
<DXLink href="/about">О нас</DXLink>
\`\`\`

## Ограничения

- Не используйте одновременно \`href\` и \`to\` - приоритет у \`to\`
- Для Vue Router требуется установленный \`vue-router\`
- Disabled ссылки не кликабельны, но остаются в DOM
        `}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","link"],description:"Вариант стилизации ссылки. Определяет цвет и стиль.",table:{type:{summary:"string"},defaultValue:{summary:"link"},category:"Appearance"}},size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Размер ссылки. Влияет на размер текста.",table:{type:{summary:"string"},defaultValue:{summary:"md"},category:"Appearance"}},disabled:{control:"boolean",description:"Отключенное состояние. Блокирует клик и применяет визуальные стили.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},href:{control:"text",description:"URL для обычной HTML ссылки. Используется для внешних или обычных ссылок.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Navigation"}},to:{control:"text",description:"Путь для Vue Router. Может быть строкой или объектом с параметрами маршрута.",table:{type:{summary:"string | object"},defaultValue:{summary:"null"},category:"Navigation"}},target:{control:"select",options:["_blank","_self","_parent","_top"],description:'Target атрибут для ссылки. Для внешних ссылок с _blank автоматически добавляется rel="noopener noreferrer".',table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Navigation"}},rel:{control:"text",description:'Rel атрибут для ссылки. Если не указан, для внешних ссылок с target="_blank" автоматически добавляется "noopener noreferrer".',table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Navigation"}},ariaLabel:{control:"text",description:"Кастомный aria-label для улучшения доступности.",table:{type:{summary:"string"},defaultValue:{summary:"null"},category:"Accessibility"}},showExternalIcon:{control:"boolean",description:"Показывать иконку для внешних ссылок. Автоматически определяется по префиксу URL.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Accessibility"}}}},e={args:{href:"/about",variant:"link"},parameters:{docs:{description:{story:'Базовая ссылка с вариантом "link". Это стандартный вариант для обычных текстовых ссылок.'}}},render:H=>({components:{DXLink:u},setup(){return{args:H}},template:'<DXLink v-bind="args">О нас</DXLink>'})},n={parameters:{docs:{description:{story:'Все доступные варианты стилизации ссылок. Вариант "link" - стандартный для текстовых ссылок, остальные варианты делают ссылку похожей на кнопку.'}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Варианты стилизации</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/link" variant="link">Link</DXLink>
            <DXLink href="/primary" variant="primary">Primary</DXLink>
            <DXLink href="/secondary" variant="secondary">Secondary</DXLink>
            <DXLink href="/ghost" variant="ghost">Ghost</DXLink>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: link | primary | secondary | ghost
        </div>
      </div>
    `})},r={parameters:{docs:{description:{story:"Все доступные размеры ссылок. Размер влияет на размер текста и соответствующих элементов."}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/xs" size="xs">Extra Small</DXLink>
          <DXLink href="/sm" size="sm">Small</DXLink>
          <DXLink href="/md" size="md">Medium</DXLink>
          <DXLink href="/lg" size="lg">Large</DXLink>
          <DXLink href="/xl" size="xl">Extra Large</DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    `})},a={parameters:{docs:{description:{story:'Внешние ссылки автоматически определяются по префиксам http://, https:// или //. Для ссылок с target="_blank" автоматически добавляется rel="noopener noreferrer" для защиты от tabnabbing атак, а также иконка внешней ссылки.'}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Внешние ссылки</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="https://example.com" 
              target="_blank"
              variant="link"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="https://vuejs.org" 
              target="_blank"
              variant="primary"
            >
              Vue.js документация
            </DXLink>
            <DXLink 
              href="https://github.com" 
              target="_blank"
              variant="ghost"
            >
              GitHub
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Внешние ссылки автоматически получают иконку и rel="noopener noreferrer" для безопасности
          </div>
        </div>
      </div>
    `})},t={parameters:{docs:{description:{story:'Интеграция с Vue Router. При использовании prop "to" компонент автоматически использует router-link вместо обычного тега <a>. Поддерживает как строковые пути, так и объекты с параметрами маршрута. Требуется установленный vue-router.'}}},render:()=>({components:{DXLink:u},setup(){return{userId:123}},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-2">
          <DXLink :to="{ name: 'home' }" variant="link">
            Главная страница
          </DXLink>
          <DXLink :to="{ name: 'profile', params: { id: userId } }" variant="primary">
            Профиль пользователя
          </DXLink>
          <DXLink to="/dashboard" variant="secondary">
            Дашборд
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Используется router-link для навигации внутри приложения
        </div>
      </div>
    `})},s={parameters:{docs:{description:{story:"Отключенное состояние ссылки. Блокирует клик через preventDefault и stopPropagation, применяет визуальные стили (opacity, cursor-not-allowed) и отключает pointer-events. Ссылка остается в DOM, но не интерактивна."}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/disabled" disabled variant="link">
            Отключенная ссылка
          </DXLink>
          <DXLink href="/disabled" disabled variant="primary">
            Отключенная Primary
          </DXLink>
          <DXLink href="/disabled" disabled variant="secondary">
            Отключенная Secondary
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Отключенные ссылки не кликабельны и имеют визуальную индикацию
        </div>
      </div>
    `})},i={parameters:{docs:{description:{story:"Ссылки с иконками. Можно добавлять иконки через слот. Для внешних ссылок автоматически добавляется дополнительная иконка ArrowTopRightOnSquareIcon справа от текста."}}},render:()=>({components:{DXLink:u,DXIcon:M},setup(){return{HomeIcon:O}},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/home" variant="link">
            <DXIcon :icon="HomeIcon" size="sm" />
            Главная
          </DXLink>
          <DXLink href="/about" variant="primary">
            <DXIcon :icon="HomeIcon" size="sm" />
            О нас
          </DXLink>
          <DXLink href="https://example.com" target="_blank" variant="ghost">
            <DXIcon :icon="HomeIcon" size="sm" />
            Внешняя ссылка
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Ссылки с иконками и автоматической иконкой для внешних ссылок
        </div>
      </div>
    `})},o={parameters:{docs:{description:{story:"Ссылки с вариантами кнопок (primary, secondary, ghost). Используются для действий, которые семантически должны быть ссылками (например, скачивание файла, переход на другую страницу), но визуально выглядят как кнопки."}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Ссылки-кнопки</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/download" variant="primary" size="md">
              Скачать файл
            </DXLink>
            <DXLink href="/action" variant="secondary" size="md">
              Выполнить действие
            </DXLink>
            <DXLink href="/cancel" variant="ghost" size="md">
              Отмена
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Ссылки с вариантами кнопок для действий, которые должны быть ссылками семантически
          </div>
        </div>
      </div>
    `})},l={parameters:{docs:{description:{story:'Поддержка доступности через aria-label. Компонент автоматически добавляет rel="noopener noreferrer" для внешних ссылок с target="_blank" для защиты от tabnabbing атак. Иконка внешней ссылки имеет aria-hidden="true" для screen readers.'}}},render:()=>({components:{DXLink:u},template:`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Доступность</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="/about" 
              aria-label="Перейти на страницу о нас"
            >
              О нас
            </DXLink>
            <DXLink 
              href="https://example.com" 
              target="_blank"
              aria-label="Открыть внешний сайт в новой вкладке"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="/download" 
              variant="primary"
              aria-label="Скачать файл"
            >
              Скачать
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Поддержка aria-label для улучшения доступности. Внешние ссылки автоматически получают rel="noopener noreferrer"
          </div>
        </div>
      </div>
    `})};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    href: '/about',
    variant: 'link'
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая ссылка с вариантом "link". Это стандартный вариант для обычных текстовых ссылок.'
      }
    }
  },
  render: args => ({
    components: {
      DXLink
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXLink v-bind="args">О нас</DXLink>'
  })
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,D,k;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все доступные варианты стилизации ссылок. Вариант "link" - стандартный для текстовых ссылок, остальные варианты делают ссылку похожей на кнопку.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-6">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Варианты стилизации</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/link" variant="link">Link</DXLink>
            <DXLink href="/primary" variant="primary">Primary</DXLink>
            <DXLink href="/secondary" variant="secondary">Secondary</DXLink>
            <DXLink href="/ghost" variant="ghost">Ghost</DXLink>
          </div>
        </div>
        <div class="text-sm text-slate-600">
          Все варианты: link | primary | secondary | ghost
        </div>
      </div>
    \`
  })
}`,...(k=(D=n.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var f,v,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Все доступные размеры ссылок. Размер влияет на размер текста и соответствующих элементов.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/xs" size="xs">Extra Small</DXLink>
          <DXLink href="/sm" size="sm">Small</DXLink>
          <DXLink href="/md" size="md">Medium</DXLink>
          <DXLink href="/lg" size="lg">Large</DXLink>
          <DXLink href="/xl" size="xl">Extra Large</DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Все размеры: xs | sm | md | lg | xl
        </div>
      </div>
    \`
  })
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,L,X;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Внешние ссылки автоматически определяются по префиксам http://, https:// или //. Для ссылок с target="_blank" автоматически добавляется rel="noopener noreferrer" для защиты от tabnabbing атак, а также иконка внешней ссылки.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Внешние ссылки</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="https://example.com" 
              target="_blank"
              variant="link"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="https://vuejs.org" 
              target="_blank"
              variant="primary"
            >
              Vue.js документация
            </DXLink>
            <DXLink 
              href="https://github.com" 
              target="_blank"
              variant="ghost"
            >
              GitHub
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Внешние ссылки автоматически получают иконку и rel="noopener noreferrer" для безопасности
          </div>
        </div>
      </div>
    \`
  })
}`,...(X=(L=a.parameters)==null?void 0:L.docs)==null?void 0:X.source}}};var E,g,h;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Интеграция с Vue Router. При использовании prop "to" компонент автоматически использует router-link вместо обычного тега <a>. Поддерживает как строковые пути, так и объекты с параметрами маршрута. Требуется установленный vue-router.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    setup() {
      return {
        userId: 123
      };
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-2">
          <DXLink :to="{ name: 'home' }" variant="link">
            Главная страница
          </DXLink>
          <DXLink :to="{ name: 'profile', params: { id: userId } }" variant="primary">
            Профиль пользователя
          </DXLink>
          <DXLink to="/dashboard" variant="secondary">
            Дашборд
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Используется router-link для навигации внутри приложения
        </div>
      </div>
    \`
  })
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var A,b,y;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние ссылки. Блокирует клик через preventDefault и stopPropagation, применяет визуальные стили (opacity, cursor-not-allowed) и отключает pointer-events. Ссылка остается в DOM, но не интерактивна.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/disabled" disabled variant="link">
            Отключенная ссылка
          </DXLink>
          <DXLink href="/disabled" disabled variant="primary">
            Отключенная Primary
          </DXLink>
          <DXLink href="/disabled" disabled variant="secondary">
            Отключенная Secondary
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Отключенные ссылки не кликабельны и имеют визуальную индикацию
        </div>
      </div>
    \`
  })
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var F,C,_;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Ссылки с иконками. Можно добавлять иконки через слот. Для внешних ссылок автоматически добавляется дополнительная иконка ArrowTopRightOnSquareIcon справа от текста.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink,
      DXIcon
    },
    setup() {
      return {
        HomeIcon
      };
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex items-center gap-4 flex-wrap">
          <DXLink href="/home" variant="link">
            <DXIcon :icon="HomeIcon" size="sm" />
            Главная
          </DXLink>
          <DXLink href="/about" variant="primary">
            <DXIcon :icon="HomeIcon" size="sm" />
            О нас
          </DXLink>
          <DXLink href="https://example.com" target="_blank" variant="ghost">
            <DXIcon :icon="HomeIcon" size="sm" />
            Внешняя ссылка
          </DXLink>
        </div>
        <div class="text-sm text-slate-600">
          Ссылки с иконками и автоматической иконкой для внешних ссылок
        </div>
      </div>
    \`
  })
}`,...(_=(C=i.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var I,z,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Ссылки с вариантами кнопок (primary, secondary, ghost). Используются для действий, которые семантически должны быть ссылками (например, скачивание файла, переход на другую страницу), но визуально выглядят как кнопки.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Ссылки-кнопки</h3>
          <div class="flex items-center gap-4 flex-wrap">
            <DXLink href="/download" variant="primary" size="md">
              Скачать файл
            </DXLink>
            <DXLink href="/action" variant="secondary" size="md">
              Выполнить действие
            </DXLink>
            <DXLink href="/cancel" variant="ghost" size="md">
              Отмена
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Ссылки с вариантами кнопок для действий, которые должны быть ссылками семантически
          </div>
        </div>
      </div>
    \`
  })
}`,...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var V,w,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Поддержка доступности через aria-label. Компонент автоматически добавляет rel="noopener noreferrer" для внешних ссылок с target="_blank" для защиты от tabnabbing атак. Иконка внешней ссылки имеет aria-hidden="true" для screen readers.'
      }
    }
  },
  render: () => ({
    components: {
      DXLink
    },
    template: \`
      <div class="flex flex-col items-start gap-4">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-700">Доступность</h3>
          <div class="flex flex-col gap-2">
            <DXLink 
              href="/about" 
              aria-label="Перейти на страницу о нас"
            >
              О нас
            </DXLink>
            <DXLink 
              href="https://example.com" 
              target="_blank"
              aria-label="Открыть внешний сайт в новой вкладке"
            >
              Внешний сайт
            </DXLink>
            <DXLink 
              href="/download" 
              variant="primary"
              aria-label="Скачать файл"
            >
              Скачать
            </DXLink>
          </div>
          <div class="text-sm text-slate-600">
            Поддержка aria-label для улучшения доступности. Внешние ссылки автоматически получают rel="noopener noreferrer"
          </div>
        </div>
      </div>
    \`
  })
}`,...(R=(w=l.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const Q=["Default","Variants","Sizes","ExternalLinks","RouterLinks","Disabled","WithIcons","LinkAsButton","Accessibility"];export{l as Accessibility,e as Default,s as Disabled,a as ExternalLinks,o as LinkAsButton,t as RouterLinks,r as Sizes,n as Variants,i as WithIcons,Q as __namedExportsOrder,K as default};
