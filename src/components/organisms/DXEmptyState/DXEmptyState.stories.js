import DXEmptyState from './DXEmptyState.vue';

export default {
  title: 'Organisms/DXEmptyState',
  component: DXEmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Компонент пустого состояния для отображения, когда нет данных или контента.

## Назначение

DXEmptyState предоставляет стандартизированный способ отображения пустого состояния
в интерфейсе. Компонент используется для информирования пользователя об отсутствии данных
и предоставления действий для заполнения контента.

## Архитектура

### Использует
- \`DXText\` - для заголовка и описания
- Динамический рендеринг иконки - для отображения иконки состояния

### Используется в
- Пустые списки и таблицы
- Пустые результаты поиска
- Пустые состояния после фильтрации
- Начальные состояния (когда пользователь еще ничего не создал)
- Любые места, требующие информирования об отсутствии данных

## Внутренняя логика

### Структура
Компонент состоит из:
1. **Иконка** - визуальный индикатор состояния (обязательно)
2. **Заголовок** - краткое описание состояния (обязательно)
3. **Описание** - подробное объяснение (опционально)
4. **Действие** - кнопка или ссылка для заполнения (через слот \`action\`)

### Анимация иконки
При \`animated={true}\`:
- Иконка получает медленную bounce анимацию
- Анимация длится 3.2 секунды и повторяется бесконечно
- Создает живой эффект для привлечения внимания

## Особенности

### Визуальное оформление
- Белый фон с рамкой и тенью
- Скругление \`rounded-3xl\`
- Padding \`p-8\` для пространства
- Центрирование контента

### Слоты
- **action** - кастомное действие (кнопка, ссылка и т.д.)

### Иконка
Иконка передается через \`icon\` prop (Heroicon компонент) и отображается размером 40×40px.

### Типичные сценарии использования
- "Нет элементов" - когда список пуст
- "Нет результатов" - когда поиск не дал результатов
- "Создайте первый элемент" - для начального состояния
        `,
      },
    },
  },
};

export const Default = {
  args: {
    title: 'No items found',
    description: 'Get started by creating your first item.',
  },
};

export const NoResults = {
  args: {
    title: 'No results',
    description: 'Try adjusting your search or filter to find what you\'re looking for.',
  },
};

export const WithAction = {
  render: () => ({
    components: { DXEmptyState },
    template: `
      <DXEmptyState title="No projects yet" description="Create your first project to get started.">
        <template #action>
          <button class="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold">
            Create Project
          </button>
        </template>
      </DXEmptyState>
    `,
  }),
};

