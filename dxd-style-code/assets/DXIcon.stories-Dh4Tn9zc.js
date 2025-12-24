import{_ as n}from"./DXIcon-Bc0cQL8C.js";import{r as e}from"./HeartIcon-DNFEd_wb.js";import{r as $}from"./Cog6ToothIcon-B4Fko_kw.js";import{r as w}from"./BellIcon-Dyw4foDT.js";import{r}from"./StarIcon-D8S068nZ.js";import{r as B}from"./HomeIcon-BnzVSbD9.js";import{r as O}from"./UserIcon-CczDTS1j.js";import{r as T}from"./MagnifyingGlassIcon-DKNfedfR.js";import{r as y}from"./ShoppingCartIcon-CKMnSN-v.js";import{r as _}from"./EnvelopeIcon-W02SAIOs.js";import{r as A}from"./PhoneIcon-Ci3GZRnt.js";import{r as E}from"./StarIcon-BfBLtMMD.js";import{r as G}from"./HeartIcon-DEmfWIR9.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";const Z={title:"Atoms/DXIcon",component:n,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXIcon

Компонент иконки для отображения Heroicons с поддержкой размеров и анимаций.

## Назначение

DXIcon предоставляет стандартизированный способ отображения иконок из библиотеки Heroicons.
Компонент поддерживает различные размеры, анимации при наведении и интеграцию с group-hover эффектами.

## Архитектура

### Использует
- Heroicons компоненты - библиотека иконок (outline и solid варианты)
- \`useSize\` composable - для унификации размеров (xs, sm, md, lg, xl)
- \`useAnimation\` composable - для анимаций при hover

### Используется в
- \`DXButton\` - иконки в кнопках
- \`DXInput\` - иконки в полях ввода
- \`DXMenu\` - иконки в меню
- \`DXBadge\` - иконки в бейджах
- \`DXAvatar\` - иконки fallback
- Любые места, требующие отображения иконок

## Внутренняя логика

### Размеры
Поддерживает 5 размеров:
- **xs** - очень маленький
- **sm** - маленький
- **md** - средний (по умолчанию)
- **lg** - большой
- **xl** - очень большой

### Анимации
Поддерживает 4 типа анимаций при hover:
- **none** (по умолчанию) - без анимации
- **wiggle** - тряска (wiggle animation)
- **scale** - увеличение (scale 1.1)
- **rotate** - поворот на 90 градусов

### Group Hover
При \`groupHover={true}\`:
- Анимация срабатывает при наведении на родительский элемент с классом \`group\`
- Полезно для анимации иконок в кнопках, ссылках и других интерактивных элементах

## Особенности

### Heroicons
Компонент работает с Heroicons компонентами:
- **Outline** - контурные иконки (24/outline)
- **Solid** - закрашенные иконки (24/solid)

### Кастомные классы
Поддерживает \`class\` prop для добавления дополнительных CSS классов:
- Цвета (text-blue-500, text-rose-500 и т.д.)
- Позиционирование
- Другие стили

### Динамический рендеринг
Использует \`<component :is="icon">\` для динамического рендеринга Heroicon компонента.

### Производительность
- Минимальный overhead
- CSS анимации для плавности
- Transition для плавных переходов
        `}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},animation:{control:"select",options:["none","wiggle","scale","rotate"]}}},t={args:{icon:e,size:"md",animation:"none"}},o=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e}},template:`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xs" />
      <DXIcon :icon="HeartIcon" size="sm" />
      <DXIcon :icon="HeartIcon" size="md" />
      <DXIcon :icon="HeartIcon" size="lg" />
      <DXIcon :icon="HeartIcon" size="xl" />
    </div>
  `}),s=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e,StarIcon:r,BellIcon:w,Cog6ToothIcon:$}},template:`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="none" />
        <p class="text-xs mt-2 text-slate-600">None</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" />
        <p class="text-xs mt-2 text-slate-600">Wiggle</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="BellIcon" size="xl" animation="scale" />
        <p class="text-xs mt-2 text-slate-600">Scale</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="Cog6ToothIcon" size="xl" animation="rotate" />
        <p class="text-xs mt-2 text-slate-600">Rotate</p>
      </div>
    </div>
  `}),a=()=>({components:{DXIcon:n},setup(){return{icons:[{name:"Heart",icon:e},{name:"Star",icon:r},{name:"Bell",icon:w},{name:"Home",icon:B},{name:"User",icon:O},{name:"Settings",icon:$},{name:"Search",icon:T},{name:"Cart",icon:y},{name:"Email",icon:_},{name:"Phone",icon:A}]}},template:`
    <div class="grid grid-cols-5 gap-6">
      <div v-for="item in icons" :key="item.name" class="text-center">
        <DXIcon :icon="item.icon" size="xl" animation="scale" class="text-slate-700 mx-auto" />
        <p class="text-xs mt-2 text-slate-600">{{ item.name }}</p>
      </div>
    </div>
  `}),c=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e,HeartIconSolid:G,StarIcon:r,StarIconSolid:E}},template:`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="HeartIconSolid" size="xl" animation="scale" class="text-rose-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIconSolid" size="xl" animation="wiggle" class="text-amber-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
    </div>
  `}),i=()=>({components:{DXIcon:n},setup(){return{HeartIcon:e}},template:`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-rose-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-blue-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-emerald-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-amber-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-purple-500" />
    </div>
  `});var l,m,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: HeartIcon,
    size: 'md',
    animation: 'none'
  }
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,d,I;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon
    };
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xs" />
      <DXIcon :icon="HeartIcon" size="sm" />
      <DXIcon :icon="HeartIcon" size="md" />
      <DXIcon :icon="HeartIcon" size="lg" />
      <DXIcon :icon="HeartIcon" size="xl" />
    </div>
  \`
})`,...(I=(d=o.parameters)==null?void 0:d.docs)==null?void 0:I.source}}};var u,v,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon,
      StarIcon,
      BellIcon,
      Cog6ToothIcon
    };
  },
  template: \`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="none" />
        <p class="text-xs mt-2 text-slate-600">None</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" />
        <p class="text-xs mt-2 text-slate-600">Wiggle</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="BellIcon" size="xl" animation="scale" />
        <p class="text-xs mt-2 text-slate-600">Scale</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="Cog6ToothIcon" size="xl" animation="rotate" />
        <p class="text-xs mt-2 text-slate-600">Rotate</p>
      </div>
    </div>
  \`
})`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var D,X,H;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      icons: [{
        name: 'Heart',
        icon: HeartIcon
      }, {
        name: 'Star',
        icon: StarIcon
      }, {
        name: 'Bell',
        icon: BellIcon
      }, {
        name: 'Home',
        icon: HomeIcon
      }, {
        name: 'User',
        icon: UserIcon
      }, {
        name: 'Settings',
        icon: Cog6ToothIcon
      }, {
        name: 'Search',
        icon: MagnifyingGlassIcon
      }, {
        name: 'Cart',
        icon: ShoppingCartIcon
      }, {
        name: 'Email',
        icon: EnvelopeIcon
      }, {
        name: 'Phone',
        icon: PhoneIcon
      }]
    };
  },
  template: \`
    <div class="grid grid-cols-5 gap-6">
      <div v-for="item in icons" :key="item.name" class="text-center">
        <DXIcon :icon="item.icon" size="xl" animation="scale" class="text-slate-700 mx-auto" />
        <p class="text-xs mt-2 text-slate-600">{{ item.name }}</p>
      </div>
    </div>
  \`
})`,...(H=(X=a.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var S,z,f;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon,
      HeartIconSolid,
      StarIcon,
      StarIconSolid
    };
  },
  template: \`
    <div class="flex items-center gap-8">
      <div class="text-center">
        <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="HeartIconSolid" size="xl" animation="scale" class="text-rose-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIcon" size="xl" animation="wiggle" class="text-slate-700" />
        <p class="text-xs mt-2 text-slate-600">Outline</p>
      </div>
      <div class="text-center">
        <DXIcon :icon="StarIconSolid" size="xl" animation="wiggle" class="text-amber-500" />
        <p class="text-xs mt-2 text-slate-600">Solid</p>
      </div>
    </div>
  \`
})`,...(f=(z=c.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var h,C,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => ({
  components: {
    DXIcon
  },
  setup() {
    return {
      HeartIcon
    };
  },
  template: \`
    <div class="flex items-center gap-4">
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-rose-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-blue-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-emerald-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-amber-500" />
      <DXIcon :icon="HeartIcon" size="xl" animation="scale" class="text-purple-500" />
    </div>
  \`
})`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const nn=["Default","Sizes","Animations","IconGallery","OutlineVsSolid","WithColors"];export{s as Animations,t as Default,a as IconGallery,c as OutlineVsSolid,o as Sizes,i as WithColors,nn as __namedExportsOrder,Z as default};
