# useTabsScroll

Composable для управления прокруткой табов.

## Import

```javascript
import { useTabsScroll } from 'dxd-style-code';
```

## Signature

```typescript
function useTabsScroll(
  containerRef: Ref<HTMLElement | null>,
  showScrollButtons: Ref<boolean>
): {
  canScrollLeft: Ref<boolean>;
  canScrollRight: Ref<boolean>;
  scrollLeft: () => void;
  scrollRight: () => void;
  scrollToActiveTab: () => void;
  updateScrollState: () => void;
}
```

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `containerRef` | `Ref<HTMLElement>` | Ссылка на контейнер табов |
| `showScrollButtons` | `Ref<boolean>` | Показывать ли кнопки прокрутки |

## Returns

| Property | Type | Description |
|----------|------|-------------|
| `canScrollLeft` | `Ref<boolean>` | Можно прокрутить влево |
| `canScrollRight` | `Ref<boolean>` | Можно прокрутить вправо |
| `scrollLeft` | `Function` | Прокрутка влево (200px) |
| `scrollRight` | `Function` | Прокрутка вправо (200px) |
| `scrollToActiveTab` | `Function` | Прокрутка к активному табу |
| `updateScrollState` | `Function` | Обновить состояние прокрутки |

## Usage

### Basic

```vue
<script setup>
import { ref } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const containerRef = ref(null);
const showScrollButtons = ref(true);

const { 
  canScrollLeft, 
  canScrollRight, 
  scrollLeft, 
  scrollRight 
} = useTabsScroll(containerRef, showScrollButtons);
</script>

<template>
  <div class="flex items-center">
    <DXButton 
      v-if="showScrollButtons && canScrollLeft"
      variant="ghost"
      @click="scrollLeft"
    >
      ←
    </DXButton>
    
    <div 
      ref="containerRef"
      class="flex overflow-x-auto scrollbar-hide"
    >
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab-btn"
        :class="{ active: activeTab === tab.id }"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <DXButton 
      v-if="showScrollButtons && canScrollRight"
      variant="ghost"
      @click="scrollRight"
    >
      →
    </DXButton>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
```

### With Active Tab Scroll

```vue
<script setup>
import { watch } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const { scrollToActiveTab } = useTabsScroll(containerRef, showScrollButtons);

const activeTab = ref('tab1');

// Прокрутка к активному табу при его изменении
watch(activeTab, () => {
  scrollToActiveTab();
});
</script>
```

### Responsive Scroll Buttons

```vue
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useTabsScroll } from 'dxd-style-code';

const containerRef = ref(null);
const showScrollButtons = ref(true);

const { canScrollLeft, canScrollRight, updateScrollState } = useTabsScroll(
  containerRef, 
  showScrollButtons
);

// Показывать кнопки только если есть что прокручивать
const needsScrollButtons = computed(() => 
  canScrollLeft.value || canScrollRight.value
);
</script>

<template>
  <div class="relative">
    <button 
      v-if="needsScrollButtons && canScrollLeft"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10"
      @click="scrollLeft"
    >
      ‹
    </button>
    
    <div ref="containerRef" class="flex overflow-x-auto px-8">
      <slot />
    </div>
    
    <button 
      v-if="needsScrollButtons && canScrollRight"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10"
      @click="scrollRight"
    >
      ›
    </button>
  </div>
</template>
```

### Manual Update

```vue
<script setup>
const { updateScrollState } = useTabsScroll(containerRef, showScrollButtons);

// Обновить состояние после динамического добавления табов
const addTab = (tab) => {
  tabs.value.push(tab);
  nextTick(() => {
    updateScrollState();
  });
};
</script>
```

## Features

- Автоматическое отслеживание возможности прокрутки
- Плавная прокрутка (`behavior: 'smooth'`)
- Автоматическое обновление при ресайзе окна
- Прокрутка активного таба в центр видимой области
- Автоматическая очистка при размонтировании

## Notes

- Контейнер должен иметь `overflow-x: auto` или `overflow-x: scroll`
- Для корректной работы `scrollToActiveTab` активный таб должен иметь класс `active`
- Прокрутка происходит на 200px за клик

## See Also

- [DXTabs](../organisms/DXTabs.md)
- [DXSegmentedControl](../molecules/DXSegmentedControl.md)

