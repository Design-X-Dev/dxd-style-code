import{_ as x}from"./DXBreadcrumb-hdEQsgQC.js";import{r as e}from"./HomeIcon-BnzVSbD9.js";import{a as pe,b as ue,o as be}from"./vue.esm-bundler-C1fUoNF-.js";import{r as he}from"./TagIcon-ocTUgEzq.js";import{r as n}from"./DocumentTextIcon-BZT0hOe_.js";import{r as v}from"./FolderIcon-DPy9zs4e.js";import{r as fe}from"./ChartBarIcon-BYW9ii54.js";import{r as ge}from"./Cog6ToothIcon-B4Fko_kw.js";import{r as I}from"./UserIcon-CczDTS1j.js";import{r as S}from"./PhotoIcon-Bus_5N6F.js";import{r as ve}from"./ShoppingCartIcon-CKMnSN-v.js";import{r as xe}from"./InboxIcon-BFNsOR6t.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DXLink-BApoi3ng.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXNav-rdhJaqaA.js";import"./ChevronRightIcon-i770bDiF.js";function Ie(r,B){return be(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"})])}function t(r,B){return be(),pe("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}const Ze={title:"Molecules/DXBreadcrumb",component:x,tags:["autodocs","category:navigation"],parameters:{docs:{description:{component:`
# DXBreadcrumb

Навигационные хлебные крошки для отображения иерархии страниц и навигации.

## Назначение

DXBreadcrumb предоставляет стандартизированный способ отображения пути навигации
в приложении. Компонент автоматически обрабатывает стилизацию, разделители и
состояние текущей страницы.

## Архитектура

### Использует
- \`DXLink\` - все элементы breadcrumb являются ссылками (DXLink компонентами)
- \`DXIcon\` - для иконок элементов и разделителей
- \`ChevronRightIcon\` - иконка разделителя по умолчанию

### Используется в
- Навигация в приложениях
- Файловые системы
- E-commerce категории
- Административные панели
- Многоуровневая навигация

## Внутренняя логика

### Все элементы - DXLink
Все элементы breadcrumb рендерятся как \`DXLink\` компоненты, что обеспечивает:
- Единообразие стилей
- Правильную семантику
- Поддержку всех возможностей DXLink (router-link, href, варианты)

### Автоматическое неактивное состояние
Последний элемент (конечная точка) автоматически получает \`inactive={true}\`:
- Визуально приглушенный вид
- Остается кликабельным (если указан href/to)
- Правильная семантика с \`aria-current="page"\`

### Варианты стилизации
Через prop \`variant\` можно выбрать стиль ссылок:
- \`link\` (по умолчанию) - обычные текстовые ссылки
- \`primary\`, \`secondary\`, \`ghost\`, \`outline\` - варианты с padding и border-radius

### Разделители
Поддерживает два типа разделителей:
- \`chevron\` (по умолчанию) - иконка ChevronRightIcon
- \`slash\` - текстовый разделитель "/"

### Анимация иконок
Поддерживает анимацию иконок элементов:
- Глобальная анимация для всех иконок
- Анимация только для текущей страницы (\`animateCurrentOnly={true}\`)
- Индивидуальная анимация для каждого элемента

## Особенности

### Структура данных
Элементы передаются через prop \`items\`:
\`\`\`js
[
  { label: 'Home', href: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Current Page' } // Без href/to - будет неактивной ссылкой
]
\`\`\`

### Размеры
Поддерживает три размера: \`sm\`, \`md\` (по умолчанию), \`lg\`.
Размер влияет на размер текста и иконок.

### Кастомизация разделителей
Можно кастомизировать разделители через slot \`separator\`.
        `}}},argTypes:{separator:{control:{type:"select"},options:["slash","chevron"]},size:{control:{type:"select"},options:["sm","md","lg"]},variant:{control:{type:"select"},options:["link","primary","secondary","ghost","outline"]},iconAnimation:{control:{type:"select"},options:["none","wiggle","scale","rotate"]}}},D=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Page"}],o={args:{items:D}},s={args:{items:D,separator:"slash"}},a={args:{items:[{label:"Home",href:"/"},{label:"Page"}]}},i={args:{items:[{label:"Home",href:"/",icon:e},{label:"Products",href:"/products",icon:t},{label:"Category",href:"/products/category",icon:he},{label:"Product Details",icon:n}]}},c={args:{items:[{label:"Home",href:"/",icon:e},{label:"Folder",href:"/folder",icon:v},{label:"Document",icon:n}]}},l={args:{items:[{label:"Dashboard",href:"/dashboard",icon:fe},{label:"Settings",href:"/settings",icon:ge},{label:"Profile",href:"/settings/profile",icon:I},{label:"Edit Profile",icon:I}]}},m={args:{items:[{label:"Store",href:"/",icon:Ie},{label:"Products",href:"/products",icon:t},{label:"Electronics",href:"/products/electronics",icon:he},{label:"Laptops",href:"/products/electronics/laptops",icon:v},{label:"MacBook Pro",icon:n}]}},d={args:{items:[{label:"Home",href:"/",icon:e},{label:"Documents",href:"/documents",icon:v},{label:"Projects",href:"/documents/projects",icon:v},{label:"Images",href:"/documents/projects/images",icon:S},{label:"photo.jpg",icon:S}]}},p={args:{items:[{label:"Home",href:"/",icon:e},{label:"Products",href:"/products",icon:t},{label:"Cart",icon:ve}],iconAnimation:"wiggle"}},u={args:{items:[{label:"Home",href:"/",icon:e},{label:"Inbox",href:"/inbox",icon:xe},{label:"Message",icon:n}],iconAnimation:"scale",animateCurrentOnly:!0}},b={args:{items:[{label:"Home",href:"/",icon:e,iconAnimation:"wiggle"},{label:"Products",href:"/products",icon:t,iconAnimation:"scale"},{label:"Details",icon:n,iconAnimation:"rotate"}]}},h={render:()=>({components:{DXBreadcrumb:x},setup(){return{items:D,itemsWithIcons:[{label:"Home",href:"/",icon:e},{label:"Products",href:"/products",icon:t},{label:"Details",icon:n}]}},template:`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Small</p>
          <DXBreadcrumb :items="itemsWithIcons" size="sm" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (default)</p>
          <DXBreadcrumb :items="itemsWithIcons" size="md" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Large</p>
          <DXBreadcrumb :items="itemsWithIcons" size="lg" />
        </div>
      </div>
    `})},f={render:()=>({components:{DXBreadcrumb:x},setup(){return{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Current"}]}},template:`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Link (default)</h3>
          <DXBreadcrumb :items="items" variant="link" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Ghost</h3>
          <DXBreadcrumb :items="items" variant="ghost" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Outline</h3>
          <DXBreadcrumb :items="items" variant="outline" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Primary</h3>
          <DXBreadcrumb :items="items" variant="primary" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Secondary</h3>
          <DXBreadcrumb :items="items" variant="secondary" />
        </div>
      </div>
    `})},g={render:()=>({components:{DXBreadcrumb:x},setup(){return{simple:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Current"}],withIcons:[{label:"Home",href:"/",icon:e},{label:"Products",href:"/products",icon:t},{label:"Current",icon:n}],animated:[{label:"Dashboard",href:"/",icon:fe},{label:"Settings",href:"/settings",icon:ge},{label:"Profile",icon:I}]}},template:`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXBreadcrumb :items="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXBreadcrumb :items="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons & Animation</h3>
          <DXBreadcrumb :items="animated" icon-animation="scale" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Slash Separator</h3>
          <DXBreadcrumb :items="withIcons" separator="slash" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Animate Current Only</h3>
          <DXBreadcrumb :items="animated" icon-animation="wiggle" animate-current-only />
        </div>
      </div>
    `})};var y,X,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...(P=(X=o.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var H,C,w;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items,
    separator: 'slash'
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,A,W;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Page'
    }]
  }
}`,...(W=(A=a.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var L,M,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Category',
      href: '/products/category',
      icon: TagIcon
    }, {
      label: 'Product Details',
      icon: DocumentTextIcon
    }]
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var T,j,$;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Folder',
      href: '/folder',
      icon: FolderIcon
    }, {
      label: 'Document',
      icon: DocumentTextIcon
    }]
  }
}`,...($=(j=c.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var V,_,z;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      href: '/dashboard',
      icon: ChartBarIcon
    }, {
      label: 'Settings',
      href: '/settings',
      icon: Cog6ToothIcon
    }, {
      label: 'Profile',
      href: '/settings/profile',
      icon: UserIcon
    }, {
      label: 'Edit Profile',
      icon: UserIcon
    }]
  }
}`,...(z=(_=l.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var E,F,Z;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Store',
      href: '/',
      icon: BuildingStorefrontIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Electronics',
      href: '/products/electronics',
      icon: TagIcon
    }, {
      label: 'Laptops',
      href: '/products/electronics/laptops',
      icon: FolderIcon
    }, {
      label: 'MacBook Pro',
      icon: DocumentTextIcon
    }]
  }
}`,...(Z=(F=m.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var N,U,G;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Documents',
      href: '/documents',
      icon: FolderIcon
    }, {
      label: 'Projects',
      href: '/documents/projects',
      icon: FolderIcon
    }, {
      label: 'Images',
      href: '/documents/projects/images',
      icon: PhotoIcon
    }, {
      label: 'photo.jpg',
      icon: PhotoIcon
    }]
  }
}`,...(G=(U=d.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var R,q,J;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon
    }, {
      label: 'Cart',
      icon: ShoppingCartIcon
    }],
    iconAnimation: 'wiggle'
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon
    }, {
      label: 'Inbox',
      href: '/inbox',
      icon: InboxIcon
    }, {
      label: 'Message',
      icon: DocumentTextIcon
    }],
    iconAnimation: 'scale',
    animateCurrentOnly: true
  }
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,ne,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '/',
      icon: HomeIcon,
      iconAnimation: 'wiggle'
    }, {
      label: 'Products',
      href: '/products',
      icon: ShoppingBagIcon,
      iconAnimation: 'scale'
    }, {
      label: 'Details',
      icon: DocumentTextIcon,
      iconAnimation: 'rotate'
    }]
  }
}`,...(te=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,oe,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBreadcrumb
    },
    setup() {
      const itemsWithIcons = [{
        label: 'Home',
        href: '/',
        icon: HomeIcon
      }, {
        label: 'Products',
        href: '/products',
        icon: ShoppingBagIcon
      }, {
        label: 'Details',
        icon: DocumentTextIcon
      }];
      return {
        items,
        itemsWithIcons
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <p class="text-xs text-slate-500 mb-2">Small</p>
          <DXBreadcrumb :items="itemsWithIcons" size="sm" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Medium (default)</p>
          <DXBreadcrumb :items="itemsWithIcons" size="md" />
        </div>
        <div>
          <p class="text-xs text-slate-500 mb-2">Large</p>
          <DXBreadcrumb :items="itemsWithIcons" size="lg" />
        </div>
      </div>
    \`
  })
}`,...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ie,ce;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBreadcrumb
    },
    setup() {
      const items = [{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Current'
      }];
      return {
        items
      };
    },
    template: \`
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Link (default)</h3>
          <DXBreadcrumb :items="items" variant="link" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Ghost</h3>
          <DXBreadcrumb :items="items" variant="ghost" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Outline</h3>
          <DXBreadcrumb :items="items" variant="outline" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Primary</h3>
          <DXBreadcrumb :items="items" variant="primary" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Secondary</h3>
          <DXBreadcrumb :items="items" variant="secondary" />
        </div>
      </div>
    \`
  })
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,me,de;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXBreadcrumb
    },
    setup() {
      const simple = [{
        label: 'Home',
        href: '/'
      }, {
        label: 'Products',
        href: '/products'
      }, {
        label: 'Current'
      }];
      const withIcons = [{
        label: 'Home',
        href: '/',
        icon: HomeIcon
      }, {
        label: 'Products',
        href: '/products',
        icon: ShoppingBagIcon
      }, {
        label: 'Current',
        icon: DocumentTextIcon
      }];
      const animated = [{
        label: 'Dashboard',
        href: '/',
        icon: ChartBarIcon
      }, {
        label: 'Settings',
        href: '/settings',
        icon: Cog6ToothIcon
      }, {
        label: 'Profile',
        icon: UserIcon
      }];
      return {
        simple,
        withIcons,
        animated
      };
    },
    template: \`
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Simple</h3>
          <DXBreadcrumb :items="simple" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons</h3>
          <DXBreadcrumb :items="withIcons" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">With Icons & Animation</h3>
          <DXBreadcrumb :items="animated" icon-animation="scale" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Slash Separator</h3>
          <DXBreadcrumb :items="withIcons" separator="slash" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Animate Current Only</h3>
          <DXBreadcrumb :items="animated" icon-animation="wiggle" animate-current-only />
        </div>
      </div>
    \`
  })
}`,...(de=(me=g.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const Ne=["Default","WithSlash","Short","WithIcons","IconsOnly","Navigation","ECommerce","FileSystem","WithAnimation","AnimateCurrentOnly","CustomIconAnimations","Sizes","LinkVariants","AllVariants"];export{g as AllVariants,u as AnimateCurrentOnly,b as CustomIconAnimations,o as Default,m as ECommerce,d as FileSystem,c as IconsOnly,f as LinkVariants,l as Navigation,a as Short,h as Sizes,p as WithAnimation,i as WithIcons,s as WithSlash,Ne as __namedExportsOrder,Ze as default};
