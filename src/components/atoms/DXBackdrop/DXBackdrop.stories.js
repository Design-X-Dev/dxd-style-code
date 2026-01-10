import DXBackdrop from './DXBackdrop.vue';
import DXButton from '../DXButton/DXButton.vue';
import { ref, computed } from 'vue';

export default {
  title: 'Atoms/DXBackdrop',
  component: DXBackdrop,
  tags: ['autodocs', 'category:overlay', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент фона (backdrop) для модальных окон и overlay элементов с поддержкой размытия и блокировки скролла.

## Назначение

DXBackdrop предоставляет стандартизированный фон для модальных окон, сайдбаров и других overlay элементов.
Компонент поддерживает различные уровни размытия, настраиваемый цвет фона, блокировку скролла
и возможность закрытия по клику.

## Архитектура

### Использует
- \`Teleport\` - для рендеринга в body
- \`Transition\` - для анимации появления/исчезновения

### Используется в
- \`DXModal\` - фон для модальных окон
- \`DXSidebar\` - фон для боковых панелей (в overlay режиме)
- \`DXDropdown\` - фон для выпадающих меню
- Любые overlay компоненты

## Внутренняя логика

### Размытие

| Значение | Описание |
|----------|----------|
| \`none\` | Без размытия |
| \`sm\` | Слабое размытие (по умолчанию) |
| \`md\` | Среднее размытие |
| \`lg\` | Сильное размытие |
| \`xl\` | Очень сильное размытие |

### Цвет фона
Настраивается через \`backgroundColor\` prop:
- По умолчанию: \`bg-slate-900/40\` (темный полупрозрачный)
- Можно использовать любые Tailwind классы: \`bg-black/50\`, \`bg-slate-900/60\` и т.д.
- Можно использовать CSS значения: \`rgb(0, 0, 0, 0.5)\`

### Z-index
Поддерживает настраиваемый z-index:
- **0, 10, 20, 30, 40, 50, auto**
- По умолчанию: \`50\` (для модальных окон)

### Блокировка скролла
При \`lockScroll={true}\` (по умолчанию):
- Добавляет \`overflow-hidden\` к body при показе
- Убирает при скрытии
- Автоматически очищается при размонтировании компонента

### Закрытие
При \`dismissible={true}\` (по умолчанию):
- Клик на backdrop эмитит событие \`close\`
- Курсор меняется на pointer для визуальной индикации

## Особенности

### Teleport
Компонент автоматически рендерится в \`body\` через Vue Teleport для правильного z-index стека.

### Анимация
Использует fade transition для плавного появления/исчезновения.

### События
- \`@click\` - эмитится при клике на backdrop
- \`@close\` - эмитится при закрытии (если \`dismissible={true}\`)

### Слоты
Поддерживает default slot для размещения контента поверх backdrop (например, модальное окно).
        `,
      },
    },
  },
  argTypes: {
    blur: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Уровень размытия backdrop'
    },
    backgroundColor: {
      control: 'text',
      description: 'Цвет фона (Tailwind класс или CSS значение): bg-slate-900/40 | bg-black/50 | rgb(...)'
    },
    zIndex: {
      control: 'select',
      options: ['0', '10', '20', '30', '40', '50', 'auto'],
      description: 'z-index backdrop'
    },
    dismissible: {
      control: 'boolean',
      description: 'Можно ли закрыть кликом'
    },
    lockScroll: {
      control: 'boolean',
      description: 'Блокировать скролл body'
    }
  },
};

// 1. Default - базовый backdrop
export const Default = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show = ref(false);
      return { show };
    },
    template: `
      <div>
        <DXButton @click="show = true">Показать Backdrop</DXButton>
        <DXBackdrop :show="show" @close="show = false" />
      </div>
    `,
  }),
};

// 2. BlurLevels - разные уровни размытия
export const BlurLevels = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const blurs = ['none', 'sm', 'md', 'lg', 'xl'];
      const currentBlur = ref(null);
      return { blurs, currentBlur };
    },
    template: `
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="blur in blurs" 
          :key="blur"
          @click="currentBlur = blur"
          size="sm"
        >
          Blur: {{ blur }}
        </DXButton>
        <DXBackdrop 
          :show="currentBlur !== null" 
          :blur="currentBlur"
          @close="currentBlur = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">{{ currentBlur }}</div>
              <div class="text-sm opacity-80">Кликните на backdrop чтобы закрыть</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 3. Colors - разные цвета
export const Colors = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const colors = [
        { name: 'Slate', value: 'slate-900' },
        { name: 'Gray', value: 'gray-900' },
        { name: 'Black', value: 'black' },
        { name: 'White', value: 'white' }
      ];
      const currentColor = ref(null);
      const backgroundColor = computed(() => {
        if (!currentColor.value) return 'bg-slate-900/40';
        return `bg-${currentColor.value.value}/40`;
      });
      return { colors, currentColor, backgroundColor };
    },
    template: `
      <div class="flex flex-wrap gap-4">
        <DXButton 
          v-for="color in colors" 
          :key="color.value"
          @click="currentColor = color"
          size="sm"
        >
          {{ color.name }}
        </DXButton>
        <DXBackdrop 
          :show="currentColor !== null" 
          :background-color="backgroundColor"
          @close="currentColor = null"
        >
          <div class="flex items-center justify-center h-full">
            <div class="text-center" :class="currentColor?.value === 'white' ? 'text-slate-900' : 'text-white'">
              <div class="text-3xl font-bold mb-2">{{ currentColor?.name }}</div>
              <div class="text-sm opacity-80">Цвет: {{ currentColor?.value }}</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 4. WithContent - backdrop с контентом (модалка внутри)
export const WithContent = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show = ref(false);
      return { show };
    },
    template: `
      <div>
        <DXButton @click="show = true">Открыть модалку</DXButton>
        <DXBackdrop :show="show" @close="show = false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Модальное окно</h2>
              <p class="text-slate-600 mb-4">
                Это пример содержимого внутри backdrop. 
                Backdrop предоставляет фон с размытием, 
                а контент рендерится через slot.
              </p>
              <div class="flex gap-2">
                <DXButton @click="show = false" variant="primary">Закрыть</DXButton>
                <DXButton @click="show = false" variant="secondary">Отмена</DXButton>
              </div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 5. NotDismissible - backdrop без возможности закрытия
export const NotDismissible = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show = ref(false);
      return { show };
    },
    template: `
      <div>
        <DXButton @click="show = true">Открыть (не закрывается кликом)</DXButton>
        <DXBackdrop :show="show" :dismissible="false">
          <div class="flex items-center justify-center h-full p-4">
            <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h2 class="text-xl font-bold mb-4 text-slate-900">Важное уведомление</h2>
              <p class="text-slate-600 mb-4">
                Этот backdrop нельзя закрыть кликом по фону.
                Только через кнопку закрытия.
              </p>
              <DXButton @click="show = false" variant="primary" block>
                Понятно, закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 6. CustomZIndex - разные z-index
export const CustomZIndex = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show1 = ref(false);
      const show2 = ref(false);
      return { show1, show2 };
    },
    template: `
      <div class="flex gap-4">
        <DXButton @click="show1 = true">Backdrop z-10</DXButton>
        <DXButton @click="show2 = true">Backdrop z-20</DXButton>
        
        <DXBackdrop :show="show1" z-index="10" @close="show1 = false" background-color="bg-slate-900/30">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 10</h3>
              <p class="text-sm text-slate-600 mb-4">Нижний слой</p>
              <DXButton @click="show1 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
        
        <DXBackdrop :show="show2" z-index="20" @close="show2 = false">
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-2">z-index: 20</h3>
              <p class="text-sm text-slate-600 mb-4">Верхний слой</p>
              <DXButton @click="show2 = false" size="sm">Закрыть</DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 7. NoBlur - backdrop без размытия
export const NoBlur = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show = ref(false);
      return { show };
    },
    template: `
      <div>
        <DXButton @click="show = true">Без размытия</DXButton>
        <DXBackdrop :show="show" blur="none" background-color="bg-slate-900/60" @close="show = false">
          <div class="flex items-center justify-center h-full">
            <div class="text-center text-white">
              <div class="text-3xl font-bold mb-2">Без размытия</div>
              <div class="text-sm opacity-80">Только затемнение без backdrop-blur</div>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

// 8. Interactive - интерактивный пример с настройками
export const Interactive = {
  render: () => ({
    components: { DXBackdrop, DXButton },
    setup() {
      const show = ref(false);
      const blur = ref('md');
      const opacity = ref('40');
      const color = ref('slate-900');
      
      const backgroundColor = computed(() => {
        const tailwindOpacities = ['0', '5', '10', '20', '30', '40', '50', '60', '70', '80', '90', '95', '100'];
        if (tailwindOpacities.includes(String(opacity.value))) {
          return `bg-${color.value}/${opacity.value}`;
        }
        const colorMap = {
          'slate-900': 'rgb(15 23 42',
          'gray-900': 'rgb(17 24 39',
          'black': 'rgb(0 0 0',
          'white': 'rgb(255 255 255',
        };
        const rgb = colorMap[color.value] || colorMap['slate-900'];
        return `${rgb} / ${opacity.value}%)`;
      });
      
      return { show, blur, opacity, color, backgroundColor };
    },
    template: `
      <div>
        <div class="flex flex-col gap-4 mb-4 p-4 bg-slate-50 rounded-xl">
          <div>
            <label class="block text-sm font-medium mb-2">Размытие:</label>
            <div class="flex gap-2">
              <DXButton 
                v-for="b in ['none', 'sm', 'md', 'lg', 'xl']"
                :key="b"
                :variant="blur === b ? 'primary' : 'secondary'"
                size="sm"
                @click="blur = b"
              >
                {{ b }}
              </DXButton>
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">Прозрачность: {{ opacity }}%</label>
            <input 
              type="range" 
              v-model="opacity" 
              min="0" 
              max="100" 
              step="5"
              class="w-full"
            />
          </div>
          
          <DXButton @click="show = true">Показать backdrop</DXButton>
        </div>
        
        <DXBackdrop 
          :show="show" 
          :blur="blur"
          :background-color="backgroundColor"
          @close="show = false"
        >
          <div class="flex items-center justify-center h-full">
            <div class="bg-white rounded-2xl p-6 max-w-md shadow-2xl">
              <h3 class="font-bold mb-4">Настройки backdrop</h3>
              <div class="space-y-2 text-sm text-slate-600 mb-4">
                <p><strong>Blur:</strong> {{ blur }}</p>
                <p><strong>Opacity:</strong> {{ opacity }}%</p>
                <p><strong>Color:</strong> {{ color }}</p>
              </div>
              <DXButton @click="show = false" variant="primary" block>
                Закрыть
              </DXButton>
            </div>
          </div>
        </DXBackdrop>
      </div>
    `,
  }),
};

