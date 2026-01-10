# Статусы компонентов

## Статусы

- **ready** - Компонент готов к использованию, полностью протестирован и задокументирован
- **in-development** - Компонент в разработке, API может измениться
- **deprecated** - Компонент устарел, не рекомендуется использовать
- **beta** - Бета-версия, требует тестирования

## Формат в Storybook

### 1. Tags (для фильтрации)

```javascript
export default {
  title: "Atoms/DXButton",
  component: DXButton,
  tags: ["autodocs", "category:form", "status:ready"],
  // ...
};
```

### 2. Badge в component description

```javascript
parameters: {
  docs: {
    description: {
      component: `
**Статус:** 🟢 Готов к использованию

Компонент полностью протестирован и готов к использованию в production.

## Назначение
...
      `,
    },
  },
},
```

## Статусы компонентов

### Atoms

| Компонент      | Статус | Примечания |
| -------------- | ------ | ---------- |
| DXButton       | ready  |            |
| DXInput        | ready  |            |
| DXIcon         | ready  |            |
| DXText         | ready  |            |
| DXCard         | ready  |            |
| DXBadge        | ready  |            |
| DXCheckbox     | ready  |            |
| DXRadio        | ready  |            |
| DXToggle       | ready  |            |
| DXSlider       | ready  |            |
| DXProgress     | ready  |            |
| DXLoader       | ready  |            |
| DXSkeleton     | ready  |            |
| DXToast        | ready  |            |
| DXTooltip      | ready  |            |
| DXBackdrop     | ready  |            |
| DXDivider      | ready  |            |
| DXList         | ready  |            |
| DXTags         | ready  |            |
| DXLink         | ready  |            |
| DXNav          | ready  |            |
| DXHeading      | ready  |            |
| DXLabel        | ready  |            |
| DXFormLabel    | ready  |            |
| DXCode         | ready  |            |
| DXBlockquote   | ready  |            |
| DXQuote        | ready  |            |
| DXImage        | ready  |            |
| DXAvatar       | ready  |            |
| DXBox          | ready  |            |
| DXFlex         | ready  |            |
| DXStack        | ready  |            |
| DXGrid         | ready  |            |
| DXContainer    | ready  |            |
| DXSpacer       | ready  |            |
| DXIconWrapper  | ready  |            |
| DXInputAddon   | ready  |            |
| DXToggleButton | ready  |            |
| DX             | ready  |            |

### Molecules

| Компонент          | Статус | Примечания |
| ------------------ | ------ | ---------- |
| DXFormControl      | ready  |            |
| DXInputGroup       | ready  |            |
| DXButtonGroup      | ready  |            |
| DXAlert            | ready  |            |
| DXSegmentedControl | ready  |            |
| DXSelect           | ready  |            |
| DXComboBox         | ready  |            |
| DXSearchSelect     | ready  |            |
| DXDatePicker       | ready  |            |
| DXTimePicker       | ready  |            |
| DXTextarea         | ready  |            |
| DXPasswordInput    | ready  |            |
| DXInputMask        | ready  |            |
| DXFileUpload       | ready  |            |
| DXPagination       | ready  |            |
| DXTablePagination  | ready  |            |
| DXTableToolbar     | ready  |            |
| DXFilterGroup      | ready  |            |
| DXDataFilter       | ready  |            |
| DXMenu             | ready  |            |
| DXBreadcrumb       | ready  |            |
| DXActionButtons    | ready  |            |
| DXCloseButton      | ready  |            |
| DXCopyField        | ready  |            |
| DXValidationIcon   | ready  |            |
| DXRating           | ready  |            |
| DXSearchBar        | ready  |            |
| DXStatCard         | ready  |            |
| DXRadioGroup       | ready  |            |
| DXRadioCard        | ready  |            |

### Organisms

| Компонент            | Статус | Примечания |
| -------------------- | ------ | ---------- |
| DXTable              | ready  |            |
| DXBaseTable          | ready  |            |
| DXDataTable          | ready  |            |
| DXModal              | ready  |            |
| DXTabs               | ready  |            |
| DXAccordion          | ready  |            |
| DXDropdown           | ready  |            |
| DXSidebarMenu        | ready  |            |
| DXSidebar            | ready  |            |
| DXAppLayout          | ready  |            |
| DXHeaderBar          | ready  |            |
| DXEmptyState         | ready  |            |
| DXAuthenticationForm | ready  |            |
| DXFormWizard         | ready  |            |
| DXDashboardWidget    | ready  |            |
| DXDashboardGrid      | ready  |            |
| DXNotificationCenter | ready  |            |
| DXUserProfileCard    | ready  |            |
| DXMediaGallery       | ready  |            |
| DXSettingsPanel      | ready  |            |
| DXWizard             | ready  |            |
| DXChatInterface      | ready  |            |
| DXCommentSection     | ready  |            |
| DXChartContainer     | ready  |            |
| DXReportGenerator    | ready  |            |

### Utilities

| Компонент            | Статус | Примечания |
| -------------------- | ------ | ---------- |
| DXPortal             | ready  |            |
| DXObserver           | ready  |            |
| DXThemeProvider      | ready  |            |
| DXBreakpointProvider | ready  |            |
| DXAnimatePresence    | ready  |            |
| DXStaggeredAnimation | ready  |            |
| DXTransitionGroup    | ready  |            |
