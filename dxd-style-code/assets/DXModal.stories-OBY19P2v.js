import{r as t}from"./vue.esm-bundler-C1fUoNF-.js";import{D as n}from"./DXModal-B2RDHCKG.js";import{_ as l}from"./DXButton-DzgLKRkE.js";import"./DXBackdrop-D0xxNXxX.js";import"./DXCloseButton-xtCn8OZ8.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./XMarkIcon-DTqRFgaM.js";import"./DXHeading-S6mljWwV.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Squares2X2Icon-BfHN8L_E.js";import"./ViewColumnsIcon-DRckdqun.js";import"./useClassComposition-Dym2pzZ_.js";const j={title:"Organisms/DXModal",component:n,tags:["autodocs","category:overlay"],parameters:{docs:{description:{component:`
# DXModal

Универсальный компонент модального окна с поддержкой различных вариантов отображения и режимов.

## Назначение

DXModal предоставляет полнофункциональное модальное окно с поддержкой различных вариантов отображения
(модальное окно, полноэкранный режим, боковая панель, половина экрана справа), настраиваемым backdrop,
переключателем режимов и слотами для кастомизации контента.

## Архитектура

### Использует
- \`DXBackdrop\` - фон модального окна с размытием и блокировкой скролла
- \`DXCloseButton\` - кнопка закрытия
- \`DXHeading\` - заголовок модального окна
- \`Transition\` - анимации появления/исчезновения

### Используется в
- Формы редактирования
- Диалоги подтверждения
- Детальные просмотры
- Настройки и конфигурация
- Любые места, требующие фокусированного взаимодействия

## Внутренняя логика

### Варианты отображения
- **modal** (по умолчанию): Классическое модальное окно по центру экрана с настраиваемой шириной
- **fullscreen**: Полноэкранный режим, занимает весь экран
- **sidebar-right**: Боковая панель справа, выезжает с правой стороны
- **half-right**: Половина экрана справа, фиксированная позиция

### Анимации
- **modal/fullscreen**: Использует анимацию \`fade-scale\` (появление с масштабированием)
- **sidebar-right/half-right**: Использует анимацию \`slide-right\` (выезд справа)

### Управление состоянием
- Управляется через \`open\` prop (Boolean)
- События: \`close\`, \`opened\`, \`closed\`
- Поддержка \`update:variant\` для динамического изменения режима

### Backdrop
- Настраиваемое размытие: \`none\`, \`sm\`, \`md\`, \`lg\`, \`xl\`
- Настраиваемая прозрачность (0-100)
- Настраиваемый цвет: \`slate-900\`, \`gray-900\`, \`black\`, \`white\`
- Блокировка скролла body (по умолчанию включена)
- Возможность закрытия по клику на backdrop (через \`closable\`)

### Переключатель режимов
При \`showModeSwitcher={true}\` отображается переключатель режимов в заголовке:
- Иконки для каждого режима
- Визуальное выделение текущего режима
- Событие \`update:variant\` при смене режима

## Особенности

### Слоты
- **default** - основной контент модального окна
- **title** - заголовок (по умолчанию "Диалог")
- **actions** - кнопки действий внизу модального окна

### Ширина (для modal)
Поддерживает 4 размера ширины:
- **sm** - маленькая ширина
- **md** - средняя ширина (по умолчанию)
- **lg** - большая ширина
- **xl** - очень большая ширина

### Закрытие
- Кнопка закрытия в заголовке (если \`closable={true}\`)
- Закрытие по клику на backdrop (если \`closable={true}\`)
- Событие \`close\` для программного закрытия

### Структура контента
Модальное окно имеет три секции:
1. **Заголовок** - заголовок, переключатель режимов (опционально), кнопка закрытия
2. **Контент** - основной контент с прокруткой
3. **Действия** - кнопки действий (если используется слот \`actions\`)

### Специальные варианты
- **half-right**: Не использует backdrop, фиксированная позиция справа, z-index 20
- **sidebar-right**: Backdrop с z-index 50, выезжает справа
- **fullscreen**: Занимает весь экран, padding 8
        `}}},argTypes:{variant:{control:"select",options:["modal","fullscreen","sidebar-right","half-right"],description:"Тип модального окна"},width:{control:"select",options:["sm","md","lg","xl"],description:"Ширина (только для modal)"},closable:{control:"boolean",description:"Можно ли закрыть"},showModeSwitcher:{control:"boolean",description:"Показать переключатель режимов"}}},o={render:u=>({components:{DXModal:n,DXButton:l},setup(){const e=t(!1);return{args:u,open:e}},template:`
      <div>
        <DXButton @click="open = true">Открыть модал</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Заголовок</template>
          <p>Контент модального окна. Здесь может быть любое содержимое.</p>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Отмена</DXButton>
            <DXButton @click="open = false">Сохранить</DXButton>
          </template>
        </DXModal>
      </div>
    `})},a={args:{variant:"sidebar-right"},render:u=>({components:{DXModal:n,DXButton:l},setup(){const e=t(!1);return{args:u,open:e}},template:`
      <div>
        <DXButton @click="open = true">Открыть сайдбар</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Боковая панель</template>
          <div class="space-y-4">
            <p>Этот вариант отлично подходит для форм редактирования.</p>
            <p>Контент может быть любой длины.</p>
          </div>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})},r={args:{variant:"fullscreen"},render:u=>({components:{DXModal:n,DXButton:l},setup(){const e=t(!1);return{args:u,open:e}},template:`
      <div>
        <DXButton @click="open = true">Открыть на весь экран</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Полноэкранный режим</template>
          <p>Этот вариант занимает весь экран.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})},s={args:{showModeSwitcher:!0},render:u=>({components:{DXModal:n,DXButton:l},setup(){const e=t(!1),h=t("modal");return{args:u,open:e,variant:h}},template:`
      <div>
        <DXButton @click="open = true">Открыть с переключателем</DXButton>
        <DXModal 
          v-bind="args" 
          :open="open" 
          :variant="variant"
          @close="open = false"
          @update:variant="variant = $event"
        >
          <template #title>Переключатель режимов</template>
          <p>Используйте кнопки справа от заголовка для смены режима отображения.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    `})};var p,i,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть модал</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Заголовок</template>
          <p>Контент модального окна. Здесь может быть любое содержимое.</p>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Отмена</DXButton>
            <DXButton @click="open = false">Сохранить</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,D,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-right'
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть сайдбар</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Боковая панель</template>
          <div class="space-y-4">
            <p>Этот вариант отлично подходит для форм редактирования.</p>
            <p>Контент может быть любой длины.</p>
          </div>
          <template #actions>
            <DXButton variant="ghost" @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(m=(D=a.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};var B,X,v;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'fullscreen'
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      return {
        args,
        open
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть на весь экран</DXButton>
        <DXModal v-bind="args" :open="open" @close="open = false">
          <template #title>Полноэкранный режим</template>
          <p>Этот вариант занимает весь экран.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(v=(X=r.parameters)==null?void 0:X.docs)==null?void 0:v.source}}};var f,g,E;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showModeSwitcher: true
  },
  render: args => ({
    components: {
      DXModal,
      DXButton
    },
    setup() {
      const open = ref(false);
      const variant = ref('modal');
      return {
        args,
        open,
        variant
      };
    },
    template: \`
      <div>
        <DXButton @click="open = true">Открыть с переключателем</DXButton>
        <DXModal 
          v-bind="args" 
          :open="open" 
          :variant="variant"
          @close="open = false"
          @update:variant="variant = $event"
        >
          <template #title>Переключатель режимов</template>
          <p>Используйте кнопки справа от заголовка для смены режима отображения.</p>
          <template #actions>
            <DXButton @click="open = false">Закрыть</DXButton>
          </template>
        </DXModal>
      </div>
    \`
  })
}`,...(E=(g=s.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const q=["Default","Sidebar","Fullscreen","WithModeSwitcher"];export{o as Default,r as Fullscreen,a as Sidebar,s as WithModeSwitcher,q as __namedExportsOrder,j as default};
