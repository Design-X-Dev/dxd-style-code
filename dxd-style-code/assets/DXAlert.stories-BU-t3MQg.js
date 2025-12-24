import{_ as t}from"./DXAlert-CisRDAlQ.js";import{_}from"./DXButton-DzgLKRkE.js";import"./vue.esm-bundler-C1fUoNF-.js";import"./DX-C5LZz0an.js";import"./DXAvatar-CBvTh_o7.js";import"./useSize-DIMNv1Ms.js";import"./DXIcon-Bc0cQL8C.js";import"./useAnimation-ByVAdqmf.js";import"./DXBackdrop-D0xxNXxX.js";import"./DXBadge-Cnl9-G8k.js";import"./useVariant-2nzc00zP.js";import"./InformationCircleIcon-BdSdF6Ec.js";import"./CheckCircleIcon-BfzIyqt6.js";import"./useClassComposition-Dym2pzZ_.js";import"./DXBlockquote-56KYmpO4.js";import"./DXBox-BETOFdSU.js";import"./useSpacing-BOHUzi8w.js";import"./DXCard-CLY4ojX0.js";import"./DXCheckbox-DQusejYU.js";import"./CheckIcon-B1lKtPCn.js";import"./DXCode-9eJ3x3YL.js";import"./DXContainer-DdAaCCrN.js";import"./DXDivider-Cu8D1wP6.js";import"./DXDropdownItem-sgbg46Q-.js";import"./ChevronRightIcon-i770bDiF.js";import"./DXFlex-wmS4uXZI.js";import"./DXFormLabel-DO2rZe0p.js";import"./ExclamationCircleIcon-4GpTxUBf.js";import"./DXGrid-CzBFoCRA.js";import"./DXHeading-S6mljWwV.js";import"./DXIconWrapper-Dj2l5Guj.js";import"./DXImage-0wzmLVnc.js";import"./DXObserver-BdOJti0k.js";import"./PhotoIcon-Bus_5N6F.js";import"./DXInputAddon-DgJzdsLu.js";import"./DXLabel-CawZsE44.js";import"./DXLink-BApoi3ng.js";import"./DXList-BqIgZjEd.js";import"./DXLoader-DAWlORDv.js";import"./DXNav-rdhJaqaA.js";import"./DXProgress-kFfDE3m6.js";import"./DXRadio-CRh-GVY2.js";import"./DXSkeleton-Bdkkus-3.js";import"./DXSlider-BmXbmwYm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DXSpacer-Cmns9whx.js";import"./DXStack-D6-bNsWk.js";import"./DXTags-CLVQQJAQ.js";import"./XMarkIcon-DuL0Z66U.js";import"./DXText-Bu-Qlv6N.js";import"./DXToast-C7fDgW_4.js";import"./DXToggle-BJ1nSv9U.js";import"./DXToggleButton-DkgvzhFe.js";import"./DXTooltip-Dp5bmrPy.js";import"./DXCloseButton-xtCn8OZ8.js";import"./XMarkIcon-DTqRFgaM.js";const Y4={title:"Molecules/DXAlert",component:t,tags:["autodocs","category:feedback"],parameters:{docs:{description:{component:`
# DXAlert

Компонент уведомления с поддержкой различных вариантов, иконок, возможности закрытия и действий.

## Назначение

DXAlert предоставляет стандартизированный способ отображения уведомлений, предупреждений и сообщений
пользователю. Компонент поддерживает различные семантические варианты (info, success, warning, danger),
иконки, возможность закрытия и слот для кнопок действий.

## Архитектура

### Использует
- \`DX\` - базовый polymorphic компонент
- \`DXIcon\` - иконка уведомления
- \`DXText\` - текст заголовка
- \`DXBox\` - контейнеры для контента
- \`DXFlex\` - layout для элементов
- \`DXCloseButton\` - кнопка закрытия

### Используется в
- Уведомления об успешных операциях
- Предупреждения перед действиями
- Сообщения об ошибках
- Информационные сообщения
- Любые места, требующие обратной связи с пользователем

## Внутренняя логика

### Варианты
- **info** (по умолчанию): Информационное сообщение (синий цвет)
- **success**: Успешная операция (зеленый цвет)
- **warning**: Предупреждение (желтый цвет)
- **danger**: Ошибка или критическое сообщение (красный цвет)

### Иконки
- По умолчанию для каждого варианта используется соответствующая иконка:
  - info → InformationCircleIcon
  - success → CheckCircleIcon
  - warning → ExclamationTriangleIcon
  - danger → XCircleIcon
- Можно переопределить через \`icon\` prop
- Можно скрыть через \`showIcon={false}\`

### Закрытие
- При \`dismissible={true}\` отображается кнопка закрытия справа
- При закрытии компонент скрывается (управляется внутренним состоянием)
- Событие \`dismiss\` при закрытии

### Действия
- Слот \`actions\` для размещения кнопок действий
- Выравнивание действий через \`actionsAlign\`: \`left\` (по умолчанию), \`center\`, \`right\`

## Особенности

### Структура
Алерт состоит из:
1. **Иконка** (слева) - визуальный индикатор типа сообщения
2. **Заголовок** (опционально) - через \`title\` prop
3. **Контент** - основной текст через default slot
4. **Кнопка закрытия** (справа, опционально) - при \`dismissible={true}\`
5. **Действия** (внизу, опционально) - через слот \`actions\`

### Цветовая схема
Каждый вариант имеет свою цветовую схему:
- Фон: светлый оттенок цвета варианта (например, bg-blue-50)
- Рамка: средний оттенок (например, border-blue-200)
- Иконка: основной цвет (например, text-blue-500)
- Заголовок: темный оттенок (например, text-blue-900)
- Контент: средний оттенок (например, text-blue-800)

### Доступность
- Использует \`role="alert"\` для семантики
- Автоматически скрывается при закрытии
- Поддержка клавиатурной навигации

### Использование
Алерты обычно используются для:
- Временных уведомлений (успех, ошибка)
- Предупреждений перед действиями
- Информационных сообщений
- Сообщений о состоянии системы
        `}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger"]},actionsAlign:{control:{type:"select"},options:["left","center","right"]}}},n={args:{variant:"info",title:"Information"},render:u=>({components:{DXAlert:t},setup(){return{args:u}},template:'<DXAlert v-bind="args">This is an informational message.</DXAlert>'})},e={args:{variant:"success",title:"Success"},render:u=>({components:{DXAlert:t},setup(){return{args:u}},template:'<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'})},r={args:{variant:"warning",title:"Warning"},render:u=>({components:{DXAlert:t},setup(){return{args:u}},template:'<DXAlert v-bind="args">Please review before continuing.</DXAlert>'})},a={args:{variant:"danger",title:"Error"},render:u=>({components:{DXAlert:t},setup(){return{args:u}},template:'<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'})},i={args:{variant:"info",title:"Dismissible",dismissible:!0},render:u=>({components:{DXAlert:t},setup(){return{args:u}},template:'<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'})},s={render:()=>({components:{DXAlert:t},template:`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    `})},o={parameters:{docs:{description:{story:"Пример использования слота `actions` для добавления кнопок действий в alert."}}},render:()=>({components:{DXAlert:t,DXButton:_},setup(){return{handleConfirm:()=>alert("Подтверждено!"),handleCancel:()=>alert("Отменено"),handleRetry:()=>alert("Повторная попытка..."),handleUpdate:()=>alert("Обновление..."),handleLater:()=>alert("Отложено")}},template:`
      <div class="space-y-4">
        <DXAlert variant="warning" title="Подтвердите действие">
          Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Отменить</DXButton>
            <DXButton variant="danger" size="sm" @click="handleConfirm">Удалить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="danger" title="Ошибка загрузки">
          Не удалось загрузить данные. Пожалуйста, попробуйте еще раз.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleRetry">Повторить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Доступно обновление">
          Доступна новая версия приложения. Рекомендуем обновить для получения новых функций и исправлений.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleUpdate">Обновить</DXButton>
            <DXButton variant="ghost" size="sm" @click="handleLater">Позже</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="success" title="Изменения сохранены" dismissible>
          Все ваши изменения были успешно сохранены.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Закрыть</DXButton>
          </template>
        </DXAlert>
      </div>
    `})},l={parameters:{docs:{description:{story:"Различные варианты выравнивания кнопок действий через проп `actionsAlign`."}}},render:()=>({components:{DXAlert:t,DXButton:_},setup(){return{handleAction:()=>alert("Действие выполнено!")}},template:`
      <div class="space-y-4">
        <DXAlert variant="info" title="Выравнивание слева (по умолчанию)" actions-align="left">
          Кнопки действий выровнены по левому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание по центру" actions-align="center">
          Кнопки действий выровнены по центру.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание справа" actions-align="right">
          Кнопки действий выровнены по правому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>
      </div>
    `})};var c,m,D;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">This is an informational message.</DXAlert>'
  })
}`,...(D=(m=n.parameters)==null?void 0:m.docs)==null?void 0:D.source}}};var p,d,X;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Your changes have been saved successfully.</DXAlert>'
  })
}`,...(X=(d=e.parameters)==null?void 0:d.docs)==null?void 0:X.source}}};var A,g,B;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Please review before continuing.</DXAlert>'
  })
}`,...(B=(g=r.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var v,E,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Error'
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Something went wrong. Please try again.</DXAlert>'
  })
}`,...(h=(E=a.parameters)==null?void 0:E.docs)==null?void 0:h.source}}};var C,f,F;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible',
    dismissible: true
  },
  render: args => ({
    components: {
      DXAlert
    },
    setup() {
      return {
        args
      };
    },
    template: '<DXAlert v-bind="args">Click the X to dismiss this alert.</DXAlert>'
  })
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var y,b,k;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXAlert
    },
    template: \`
      <div class="space-y-4">
        <DXAlert variant="info" title="Info">Informational message</DXAlert>
        <DXAlert variant="success" title="Success">Success message</DXAlert>
        <DXAlert variant="warning" title="Warning">Warning message</DXAlert>
        <DXAlert variant="danger" title="Error">Error message</DXAlert>
      </div>
    \`
  })
}`,...(k=(b=s.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var z,S,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Пример использования слота \`actions\` для добавления кнопок действий в alert.'
      }
    }
  },
  render: () => ({
    components: {
      DXAlert,
      DXButton
    },
    setup() {
      const handleConfirm = () => alert('Подтверждено!');
      const handleCancel = () => alert('Отменено');
      const handleRetry = () => alert('Повторная попытка...');
      const handleUpdate = () => alert('Обновление...');
      const handleLater = () => alert('Отложено');
      return {
        handleConfirm,
        handleCancel,
        handleRetry,
        handleUpdate,
        handleLater
      };
    },
    template: \`
      <div class="space-y-4">
        <DXAlert variant="warning" title="Подтвердите действие">
          Вы уверены, что хотите удалить этот элемент? Это действие нельзя отменить.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Отменить</DXButton>
            <DXButton variant="danger" size="sm" @click="handleConfirm">Удалить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="danger" title="Ошибка загрузки">
          Не удалось загрузить данные. Пожалуйста, попробуйте еще раз.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleRetry">Повторить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Доступно обновление">
          Доступна новая версия приложения. Рекомендуем обновить для получения новых функций и исправлений.
          <template #actions>
            <DXButton variant="primary" size="sm" @click="handleUpdate">Обновить</DXButton>
            <DXButton variant="ghost" size="sm" @click="handleLater">Позже</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="success" title="Изменения сохранены" dismissible>
          Все ваши изменения были успешно сохранены.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleCancel">Закрыть</DXButton>
          </template>
        </DXAlert>
      </div>
    \`
  })
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,W,x;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Различные варианты выравнивания кнопок действий через проп \`actionsAlign\`.'
      }
    }
  },
  render: () => ({
    components: {
      DXAlert,
      DXButton
    },
    setup() {
      const handleAction = () => alert('Действие выполнено!');
      return {
        handleAction
      };
    },
    template: \`
      <div class="space-y-4">
        <DXAlert variant="info" title="Выравнивание слева (по умолчанию)" actions-align="left">
          Кнопки действий выровнены по левому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание по центру" actions-align="center">
          Кнопки действий выровнены по центру.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>

        <DXAlert variant="info" title="Выравнивание справа" actions-align="right">
          Кнопки действий выровнены по правому краю.
          <template #actions>
            <DXButton variant="outline" size="sm" @click="handleAction">Отмена</DXButton>
            <DXButton variant="primary" size="sm" @click="handleAction">Применить</DXButton>
          </template>
        </DXAlert>
      </div>
    \`
  })
}`,...(x=(W=l.parameters)==null?void 0:W.docs)==null?void 0:x.source}}};const M4=["Info","Success","Warning","Danger","Dismissible","AllVariants","WithActions","ActionsAlignment"];export{l as ActionsAlignment,s as AllVariants,a as Danger,i as Dismissible,n as Info,e as Success,r as Warning,o as WithActions,M4 as __namedExportsOrder,Y4 as default};
