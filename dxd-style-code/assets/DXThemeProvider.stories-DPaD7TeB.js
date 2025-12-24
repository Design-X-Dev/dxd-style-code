import{r as n,c,I as W,w as k,A as $,a as z,m as L,l as U,o as G,B as Q}from"./vue.esm-bundler-CzLKT_w4.js";import{u as q}from"./useClassComposition-Dym2pzZ_.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as p}from"./DXCard-BX01pIOu.js";import{_ as v}from"./DXButton-ChBdj9Dq.js";import"./useSpacing-BOHUzi8w.js";import"./useSize-DIMNv1Ms.js";import"./useVariant-vdsOb9m8.js";import"./InformationCircleIcon-BhW4k1dY.js";import"./CheckCircleIcon-Ch9wT4dl.js";const J=["data-theme"],w={__name:"DXThemeProvider",props:{theme:{type:String,default:"light"},themes:{type:Object,default:()=>({})},persist:{type:Boolean,default:!1},storageKey:{type:String,default:"dx-theme"},useSystemTheme:{type:Boolean,default:!1}},emits:["theme-change"],setup(r,{emit:t}){const u=r,a=t,o=n(u.theme),O=c(()=>q("w-full h-full")),l=c(()=>u.useSystemTheme?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":o.value),T=c(()=>{const e=u.themes[l.value];return!e||!e.colors?{}:e.colors});function g(){const e=T.value,s=document.documentElement;Object.keys(e).forEach(b=>{const D=`--color-${b}`;s.style.setProperty(D,e[b])}),document.body.setAttribute("data-theme",l.value)}function K(){if(u.persist)try{const e=localStorage.getItem(u.storageKey);e&&u.themes[e]&&(o.value=e,a("theme-change",e))}catch(e){console.warn("DXThemeProvider: Ошибка загрузки темы из localStorage",e)}}function C(){if(u.persist)try{localStorage.setItem(u.storageKey,o.value)}catch(e){console.warn("DXThemeProvider: Ошибка сохранения темы в localStorage",e)}}function M(e=null){const s=Object.keys(u.themes);if(s.length!==0){if(e&&u.themes[e])o.value=e;else{const D=(s.indexOf(o.value)+1)%s.length;o.value=s[D]}C(),a("theme-change",o.value)}}W("theme",{currentTheme:c(()=>o.value),effectiveTheme:l,themeColors:T,setTheme:M,availableThemes:c(()=>Object.keys(u.themes))}),k([l,()=>u.themes],()=>{g()},{immediate:!0});let X=null;return u.useSystemTheme&&(X=window.matchMedia("(prefers-color-scheme: dark)"),X.addEventListener("change",()=>{g()})),$(()=>{K(),g()}),k(()=>u.theme,e=>{e!==o.value&&u.themes[e]&&(o.value=e,C(),a("theme-change",e))}),(e,s)=>(G(),z("div",{class:U(O.value),"data-theme":o.value,"data-component":"DXThemeProvider"},[L(e.$slots,"default",{},void 0,!0)],10,J))}},m=H(w,[["__scopeId","data-v-ade52433"]]);w.__docgenInfo={exportName:"default",displayName:"DXThemeProvider",description:"",tags:{},props:[{name:"theme",description:"Текущая тема",tags:{default:[{description:"'light'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"light"'}},{name:"themes",description:`Объект с доступными темами
Формат: { themeName: { name, colors: { primary, background, text, ... } } }`,tags:{default:[{description:"{}",title:"default"}]},type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"persist",description:"Сохранять тему в localStorage",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"storageKey",description:"Ключ для сохранения в localStorage",tags:{default:[{description:"'dx-theme'",title:"default"}]},type:{name:"string"},defaultValue:{func:!1,value:'"dx-theme"'}},{name:"useSystemTheme",description:"Использовать системную тему (prefers-color-scheme)",tags:{default:[{description:"false",title:"default"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"theme-change"}],slots:[{name:"default"}],sourceFiles:["/Users/lea_alex/Projects/1_DEVELOP/0_DESIGN_X_DEV/dxd-style-code/src/components/utilities/DXThemeProvider/DXThemeProvider.vue"]};const se={title:"Utilities/DXThemeProvider",component:m,tags:["autodocs","category:provider"],parameters:{docs:{description:{component:`
# DXThemeProvider

Провайдер для управления темами и цветовыми схемами приложения.

## Назначение

DXThemeProvider предоставляет систему управления темами через provide/inject и CSS переменные.
Позволяет переключаться между темами, сохранять выбор пользователя и использовать системную тему.

## Архитектура

### Использует
- Vue provide/inject - для доступа к теме в компонентах
- CSS переменные - для применения цветов темы
- localStorage - для сохранения выбранной темы (опционально)
- prefers-color-scheme - для определения системной темы (опционально)

### Используется в
- Корневой компонент приложения
- Любые компоненты, требующие доступа к теме

## Внутренняя логика

### CSS переменные
Цвета темы применяются как CSS переменные с префиксом \`--color-\`:
- \`--color-primary\`
- \`--color-background\`
- \`--color-text\`
- И другие цвета из объекта темы

### Provide/Inject
Компоненты могут получить доступ к теме через inject:
\`\`\`javascript
const theme = inject('theme');
theme.setTheme('dark');
\`\`\`

### Сохранение темы
Если \`persist={true}\`, тема сохраняется в localStorage и восстанавливается при загрузке.

## Особенности

### Системная тема
При \`useSystemTheme={true}\` автоматически определяется системная тема через \`prefers-color-scheme\`.

### Динамическое переключение
Тема может быть изменена динамически, все CSS переменные обновляются автоматически.
        `}}},argTypes:{theme:{control:"text",description:"Текущая тема.",table:{type:{summary:"string"},defaultValue:{summary:"light"},category:"Theme"}},persist:{control:"boolean",description:"Сохранять тему в localStorage.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},useSystemTheme:{control:"boolean",description:"Использовать системную тему (prefers-color-scheme).",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}}}},y={light:{name:"Светлая",colors:{primary:"#007bff",background:"#ffffff",text:"#000000",border:"#e5e7eb",surface:"#f9fafb"}},dark:{name:"Темная",colors:{primary:"#0d6efd",background:"#1a1a1a",text:"#ffffff",border:"#374151",surface:"#2d2d2d"}}},d={args:{theme:"light",themes:y},parameters:{docs:{description:{story:"Базовое использование провайдера тем с переключением между светлой и темной темой."}}},render:r=>({components:{DXThemeProvider:m,DXCard:p,DXButton:v},setup(){const t=n(r.theme),u=n(r.themes);return{theme:t,themes:u,toggleTheme:()=>{t.value=t.value==="light"?"dark":"light"}}},template:`
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <p>Этот контент использует цвета текущей темы через CSS переменные.</p>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    `})},i={args:{theme:"light",themes:y,persist:!0},parameters:{docs:{description:{story:"Провайдер с сохранением темы в localStorage. Тема сохраняется и восстанавливается при перезагрузке."}}},render:r=>({components:{DXThemeProvider:m,DXCard:p,DXButton:v},setup(){const t=n(r.theme),u=n(r.themes);return{theme:t,themes:u,toggleTheme:()=>{t.value=t.value==="light"?"dark":"light"}}},template:`
      <DXThemeProvider :theme="theme" :themes="themes" :persist="true">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
              <p class="mb-2">Тема сохраняется в localStorage</p>
              <p class="text-sm text-slate-500">Перезагрузите страницу, чтобы увидеть сохранение</p>
            </DXCard>
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
          </div>
        </div>
      </DXThemeProvider>
    `})},h={parameters:{docs:{description:{story:"Использование темы через inject в дочерних компонентах."}}},render:()=>({components:{DXThemeProvider:m,DXCard:p,DXButton:v},setup(){return{themes:n(y),ThemedComponent:{setup(){return{theme:Q("theme")}},template:`
          <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
            <h3 class="font-semibold mb-2">Доступ к теме через inject</h3>
            <p class="mb-2">Текущая тема: {{ theme.currentTheme.value }}</p>
            <p class="mb-2">Доступные темы: {{ theme.availableThemes.value.join(', ') }}</p>
            <DXButton @click="theme.setTheme()" size="sm">
              Переключить тему
            </DXButton>
          </DXCard>
        `}}},template:`
      <DXThemeProvider :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <ThemedComponent />
        </div>
      </DXThemeProvider>
    `})},f={parameters:{docs:{description:{story:"Кастомные темы с дополнительными цветами."}}},render:()=>({components:{DXThemeProvider:m,DXCard:p,DXButton:v},setup(){const r=n("blue"),t=n({blue:{name:"Синяя",colors:{primary:"#3b82f6",background:"#eff6ff",text:"#1e3a8a",border:"#93c5fd",surface:"#dbeafe"}},green:{name:"Зеленая",colors:{primary:"#10b981",background:"#ecfdf5",text:"#065f46",border:"#6ee7b7",surface:"#d1fae5"}},purple:{name:"Фиолетовая",colors:{primary:"#8b5cf6",background:"#f5f3ff",text:"#5b21b6",border:"#c4b5fd",surface:"#e9d5ff"}}});return{theme:r,themes:t,setTheme:a=>{r.value=a}}},template:`
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <div class="flex gap-2">
              <DXButton
                v-for="(themeData, themeName) in themes"
                :key="themeName"
                :variant="theme === themeName ? 'primary' : 'ghost'"
                @click="setTheme(themeName)"
              >
                {{ themeData.name }}
              </DXButton>
            </div>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    `})};var B,x,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    themes: defaultThemes
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовое использование провайдера тем с переключением между светлой и темной темой.'
      }
    }
  },
  render: args => ({
    components: {
      DXThemeProvider,
      DXCard,
      DXButton
    },
    setup() {
      const theme = ref(args.theme);
      const themes = ref(args.themes);
      const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      };
      return {
        theme,
        themes,
        toggleTheme
      };
    },
    template: \`
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <p>Этот контент использует цвета текущей темы через CSS переменные.</p>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    \`
  })
}`,...(E=(x=d.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var S,P,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    themes: defaultThemes,
    persist: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Провайдер с сохранением темы в localStorage. Тема сохраняется и восстанавливается при перезагрузке.'
      }
    }
  },
  render: args => ({
    components: {
      DXThemeProvider,
      DXCard,
      DXButton
    },
    setup() {
      const theme = ref(args.theme);
      const themes = ref(args.themes);
      const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
      };
      return {
        theme,
        themes,
        toggleTheme
      };
    },
    template: \`
      <DXThemeProvider :theme="theme" :themes="themes" :persist="true">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
              <p class="mb-2">Тема сохраняется в localStorage</p>
              <p class="text-sm text-slate-500">Перезагрузите страницу, чтобы увидеть сохранение</p>
            </DXCard>
            <DXButton @click="toggleTheme">
              Переключить тему ({{ theme === 'light' ? 'Темная' : 'Светлая' }})
            </DXButton>
          </div>
        </div>
      </DXThemeProvider>
    \`
  })
}`,...(F=(P=i.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var _,j,A;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Использование темы через inject в дочерних компонентах.'
      }
    }
  },
  render: () => ({
    components: {
      DXThemeProvider,
      DXCard,
      DXButton
    },
    setup() {
      const themes = ref(defaultThemes);

      // Компонент, использующий inject
      const ThemedComponent = {
        setup() {
          const theme = inject('theme');
          return {
            theme
          };
        },
        template: \`
          <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb);">
            <h3 class="font-semibold mb-2">Доступ к теме через inject</h3>
            <p class="mb-2">Текущая тема: {{ theme.currentTheme.value }}</p>
            <p class="mb-2">Доступные темы: {{ theme.availableThemes.value.join(', ') }}</p>
            <DXButton @click="theme.setTheme()" size="sm">
              Переключить тему
            </DXButton>
          </DXCard>
        \`
      };
      return {
        themes,
        ThemedComponent
      };
    },
    template: \`
      <DXThemeProvider :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <ThemedComponent />
        </div>
      </DXThemeProvider>
    \`
  })
}`,...(A=(j=h.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var I,N,V;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Кастомные темы с дополнительными цветами.'
      }
    }
  },
  render: () => ({
    components: {
      DXThemeProvider,
      DXCard,
      DXButton
    },
    setup() {
      const theme = ref('blue');
      const themes = ref({
        blue: {
          name: 'Синяя',
          colors: {
            primary: '#3b82f6',
            background: '#eff6ff',
            text: '#1e3a8a',
            border: '#93c5fd',
            surface: '#dbeafe'
          }
        },
        green: {
          name: 'Зеленая',
          colors: {
            primary: '#10b981',
            background: '#ecfdf5',
            text: '#065f46',
            border: '#6ee7b7',
            surface: '#d1fae5'
          }
        },
        purple: {
          name: 'Фиолетовая',
          colors: {
            primary: '#8b5cf6',
            background: '#f5f3ff',
            text: '#5b21b6',
            border: '#c4b5fd',
            surface: '#e9d5ff'
          }
        }
      });
      const setTheme = themeName => {
        theme.value = themeName;
      };
      return {
        theme,
        themes,
        setTheme
      };
    },
    template: \`
      <DXThemeProvider :theme="theme" :themes="themes">
        <div class="min-h-screen p-8" style="background-color: var(--color-background, #ffffff); color: var(--color-text, #000000);">
          <div class="space-y-4">
            <div class="flex gap-2">
              <DXButton
                v-for="(themeData, themeName) in themes"
                :key="themeName"
                :variant="theme === themeName ? 'primary' : 'ghost'"
                @click="setTheme(themeName)"
              >
                {{ themeData.name }}
              </DXButton>
            </div>
            <DXCard class="p-4" style="background-color: var(--color-surface, #f9fafb); border-color: var(--color-border, #e5e7eb);">
              <h2 class="text-xl font-semibold mb-2">Текущая тема: {{ theme }}</h2>
              <div class="mt-4 p-3 rounded" style="background-color: var(--color-primary, #007bff); color: white;">
                Primary цвет темы
              </div>
            </DXCard>
          </div>
        </div>
      </DXThemeProvider>
    \`
  })
}`,...(V=(N=f.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const ce=["Default","WithPersistence","WithInject","CustomThemes"];export{f as CustomThemes,d as Default,h as WithInject,i as WithPersistence,ce as __namedExportsOrder,se as default};
