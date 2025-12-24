import{_ as e}from"./DXFileUpload-IUbdL-Kw.js";import{r as a}from"./vue.esm-bundler-C1fUoNF-.js";import"./DXIcon-Bc0cQL8C.js";import"./useSize-DIMNv1Ms.js";import"./useAnimation-ByVAdqmf.js";import"./DocumentIcon-BNcD3fZD.js";import"./XMarkIcon-DTqRFgaM.js";import"./PlusIcon-Dnen0WQA.js";const B={title:"Molecules/DXFileUpload",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
# DXFileUpload

Компонент загрузки файлов с поддержкой drag & drop, предпросмотра и множественного выбора.

## Назначение

DXFileUpload предоставляет полнофункциональный компонент для загрузки файлов с поддержкой
перетаскивания, предпросмотра изображений, множественного выбора и валидации типов/размеров.

## Архитектура

### Использует
- \`DXIcon\` - для иконок загрузки и удаления
- Нативный input type="file" - для выбора файлов

### Используется в
- Загрузка документов
- Загрузка изображений
- Множественная загрузка файлов
- Любые места, требующие загрузку файлов

## Внутренняя логика

### Drag & Drop
Поддерживает перетаскивание файлов:
- Визуальная индикация при наведении (scale, изменение цвета)
- Обработка событий dragenter, dragover, dragleave, drop

### Предпросмотр
Для изображений:
- Автоматически создается preview через FileReader
- Отображается миниатюра 48×48px
- Для других файлов отображается иконка документа

### Множественный выбор
При \`multiple={true}\`:
- Можно выбрать несколько файлов
- Отображается кнопка "Добавить ещё" для добавления дополнительных файлов

### Валидация
- \`accept\` - ограничение типов файлов (например, "image/*", ".pdf")
- \`maxSize\` - максимальный размер файла (отображается в подсказке)

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\`:
- Для single: File объект или null
- Для multiple: Array файлов

### События
- \`@change\` - эмитится при изменении файлов

### Удаление файлов
Каждый файл имеет кнопку удаления для удаления из списка.

### Форматирование размера
Размер файла автоматически форматируется в читаемый формат (KB, MB).
        `}}}},l={render:()=>({components:{DXFileUpload:e},setup(){return{file:a(null)}},template:'<DXFileUpload v-model="file" label="Upload file" />'})},o={render:()=>({components:{DXFileUpload:e},setup(){return{files:a([])}},template:'<DXFileUpload v-model="files" label="Upload files" multiple />'})},n={render:()=>({components:{DXFileUpload:e},setup(){return{file:a(null)}},template:'<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />'})},r={render:()=>({components:{DXFileUpload:e},setup(){return{file:a(null)}},template:'<DXFileUpload v-model="file" label="Disabled upload" disabled />'})};var p,s,i;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Upload file" />'
  })
}`,...(i=(s=l.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,m,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const files = ref([]);
      return {
        files
      };
    },
    template: '<DXFileUpload v-model="files" label="Upload files" multiple />'
  })
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,f,D;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Upload image" accept="image/*" helper="PNG, JPG up to 5MB" />'
  })
}`,...(D=(f=n.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var U,F,X;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DXFileUpload
    },
    setup() {
      const file = ref(null);
      return {
        file
      };
    },
    template: '<DXFileUpload v-model="file" label="Disabled upload" disabled />'
  })
}`,...(X=(F=r.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};const G=["Default","Multiple","ImagesOnly","Disabled"];export{l as Default,r as Disabled,n as ImagesOnly,o as Multiple,G as __namedExportsOrder,B as default};
