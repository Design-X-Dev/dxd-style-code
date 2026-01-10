import DXRadioCard from './DXRadioCard.vue';
import { ref } from 'vue';

export default {
  title: 'Molecules/DXRadioCard',
  component: DXRadioCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент карточки с радиокнопкой для выбора одного варианта из группы с визуальным выделением.

## Назначение

DXRadioCard предоставляет способ выбора одного варианта из группы через карточки вместо
обычных радиокнопок. Компонент идеально подходит для выбора планов, тарифов и других
вариантов, требующих визуального выделения.

## Архитектура

### Использует
- Нативный input type="radio" - для семантики и доступности
- Динамический рендеринг иконки - для опциональной иконки

### Используется в
- Выбор планов подписки
- Выбор тарифов
- Выбор вариантов доставки
- Любые места, требующие визуальный выбор варианта

## Внутренняя логика

### Визуальное состояние
- **selected**: Темная рамка (\`border-slate-900\`), светлый фон (\`bg-slate-50\`), галочка справа
- **unselected**: Светлая рамка (\`border-slate-200\`), белый фон, hover эффект

### Иконка
Опциональная иконка слева от контента:
- В выбранном состоянии: темный цвет (\`text-slate-900\`)
- В невыбранном состоянии: серый цвет (\`text-slate-400\`)

### Галочка
При выборе карточки:
- Отображается круглая галочка справа вверху
- Темный фон с белой галочкой

## Особенности

### v-model
Полностью поддерживает двустороннее связывание через \`v-model\` для String, Number или Boolean значений.

### Структура
Карточка состоит из:
- Иконка (опционально)
- Заголовок (\`title\`)
- Описание (\`description\`)
- Дополнительный контент (через default slot)

### Состояния
- **disabled** - отключает карточку (opacity, cursor-not-allowed)
- **selected** - визуально выделяет выбранную карточку

### Слоты
- **default** - дополнительный контент внутри карточки
        `,
      },
    },
  },
};

export const Default = {
  render: () => ({
    components: { DXRadioCard },
    setup() {
      const selected = ref('plan1');
      return { selected };
    },
    template: `
      <div class="space-y-3 max-w-md">
        <DXRadioCard 
          v-model="selected" 
          value="plan1"
          title="Basic Plan" 
          description="Perfect for getting started"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan2"
          title="Pro Plan" 
          description="For growing businesses"
        />
        <DXRadioCard 
          v-model="selected" 
          value="plan3"
          title="Enterprise" 
          description="For large organizations"
        />
      </div>
    `,
  }),
};

export const Disabled = {
  render: () => ({
    components: { DXRadioCard },
    setup() {
      const selected = ref('option1');
      return { selected };
    },
    template: `
      <DXRadioCard 
        v-model="selected" 
        value="option1"
        title="Disabled Option" 
        description="This option cannot be changed"
        disabled
      />
    `,
  }),
};

