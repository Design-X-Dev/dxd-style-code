import { ref, computed } from 'vue';
import DXSearchBar from './DXSearchBar.vue';

export default {
  title: 'Molecules/DXSearchBar',
  component: DXSearchBar,
  tags: ['autodocs', 'category:feedback', 'status:ready'],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Поисковая строка с автодополнением и расширенными возможностями поиска.

## Назначение

DXSearchBar предоставляет полнофункциональную поисковую строку с автодополнением,
историей поиска, фильтрами и поддержкой горячих клавиш. Используется для глобального
поиска в приложении, поиска в таблицах и каталогах.

## Архитектура

### Использует
- \`DXInput\` - базовый компонент input
- \`DXIcon\` - для иконок
- \`DXLoader\` - для индикации загрузки
- \`useSize\` composable - для размеров
- \`useClassComposition\` composable - для стилей

### Используется в
- \`DXHeaderBar\` - для глобального поиска
- \`DXTableToolbar\` - для поиска в таблице
- Каталоги товаров
- Поиск пользователей

## Внутренняя логика

### Debounce
Поиск выполняется с задержкой (debounce) для оптимизации запросов к серверу.

### Горячие клавиши
Поддерживает настройку горячих клавиш (например, Ctrl+K) для быстрого фокуса на поиск.

### Автодополнение
Показывает предложения из массива suggestions при вводе текста.

### История поиска
Сохраняет и отображает историю поисковых запросов.

## Особенности

### Клавиатурная навигация
- Стрелки вверх/вниз - навигация по предложениям
- Enter - выбор выделенного предложения
- Escape - закрытие dropdown

### Очистка
Кнопка очистки появляется при наличии текста (если clearable={true}).
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер компонента.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
        category: 'Appearance',
      },
    },
    debounce: {
      control: 'number',
      min: 0,
      max: 2000,
      step: 50,
      description: 'Задержка debounce в миллисекундах.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
        category: 'Behavior',
      },
    },
    loading: {
      control: 'boolean',
      description: 'Индикация загрузки.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    hotkey: {
      control: 'text',
      description: 'Горячая клавиша (например, "ctrl+k").',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'null' },
        category: 'Behavior',
      },
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Поиск...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Базовая поисковая строка без дополнительных функций.',
      },
    },
  },
  render: (args) => ({
    components: { DXSearchBar },
    setup() {
      const searchQuery = ref('');
      const handleSearch = (query) => {
        console.log('Поиск:', query);
      };
      return { args, searchQuery, handleSearch };
    },
    template: `
      <DXSearchBar
        v-model="searchQuery"
        v-bind="args"
        @search="handleSearch"
      />
    `,
  }),
};

export const WithSuggestions = {
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с автодополнением. Предложения отображаются при вводе текста.',
      },
    },
  },
  render: () => ({
    components: { DXSearchBar },
    setup() {
      const searchQuery = ref('');
      const isLoading = ref(false);
      
      const suggestions = computed(() => {
        if (!searchQuery.value) return [];
        return [
          { id: 1, title: 'Vue 3 документация', category: 'Docs' },
          { id: 2, title: 'Vue Router', category: 'Library' },
          { id: 3, title: 'Vuex/Pinia', category: 'State' },
          { id: 4, title: 'Composition API', category: 'Guide' },
        ].filter((item) =>
          item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
      
      const handleSearch = (query) => {
        console.log('Поиск:', query);
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      };
      
      const handleSelectSuggestion = (suggestion) => {
        console.log('Выбрано:', suggestion);
      };
      
      return { searchQuery, suggestions, isLoading, handleSearch, handleSelectSuggestion };
    },
    template: `
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        placeholder="Поиск товаров..."
        @search="handleSearch"
        @select-suggestion="handleSelectSuggestion"
      />
    `,
  }),
};

export const WithHistory = {
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с историей поиска. История отображается при фокусе на пустом поле.',
      },
    },
  },
  render: () => ({
    components: { DXSearchBar },
    setup() {
      const searchQuery = ref('');
      const searchHistory = ref(['Vue 3', 'TypeScript', 'Composition API', 'Tailwind CSS']);
      
      const handleSearch = (query) => {
        console.log('Поиск:', query);
        if (query && !searchHistory.value.includes(query)) {
          searchHistory.value.unshift(query);
          if (searchHistory.value.length > 10) {
            searchHistory.value.pop();
          }
        }
      };
      
      return { searchQuery, searchHistory, handleSearch };
    },
    template: `
      <DXSearchBar
        v-model="searchQuery"
        :show-history="true"
        :history-items="searchHistory"
        placeholder="Поиск с историей..."
        @search="handleSearch"
      />
    `,
  }),
};

export const WithHotkey = {
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с горячей клавишей. Нажмите Ctrl+K (или Cmd+K на Mac) для фокуса на поиск.',
      },
    },
  },
  render: () => ({
    components: { DXSearchBar },
    setup() {
      const globalSearch = ref('');
      const handleGlobalSearch = (query) => {
        console.log('Глобальный поиск:', query);
      };
      return { globalSearch, handleGlobalSearch };
    },
    template: `
      <DXSearchBar
        v-model="globalSearch"
        hotkey="ctrl+k"
        placeholder="Глобальный поиск (Ctrl+K)"
        @search="handleGlobalSearch"
      />
    `,
  }),
};

export const WithFilters = {
  parameters: {
    docs: {
      description: {
        story: 'Поисковая строка с фильтрами для расширенного поиска.',
      },
    },
  },
  render: () => ({
    components: { DXSearchBar },
    setup() {
      const searchQuery = ref('');
      const searchFilters = ref([
        { id: 'type', label: 'Тип', options: ['Все', 'Документы', 'Код', 'Изображения'] },
        { id: 'date', label: 'Дата', options: ['Все', 'Сегодня', 'Неделя', 'Месяц'] },
      ]);
      
      const handleSearch = (query) => {
        console.log('Поиск:', query);
      };
      
      const handleFilterChange = (filters) => {
        console.log('Фильтры:', filters);
      };
      
      return { searchQuery, searchFilters, handleSearch, handleFilterChange };
    },
    template: `
      <DXSearchBar
        v-model="searchQuery"
        :filters="searchFilters"
        placeholder="Расширенный поиск..."
        @search="handleSearch"
        @filter-change="handleFilterChange"
      />
    `,
  }),
};

export const FullFeatured = {
  parameters: {
    docs: {
      description: {
        story: 'Полнофункциональная поисковая строка со всеми возможностями: автодополнение, история, фильтры и горячая клавиша.',
      },
    },
  },
  render: () => ({
    components: { DXSearchBar },
    setup() {
      const searchQuery = ref('');
      const isLoading = ref(false);
      const searchHistory = ref(['Vue 3', 'TypeScript']);
      
      const suggestions = computed(() => {
        if (!searchQuery.value) return [];
        return [
          { id: 1, title: 'Vue 3 документация', category: 'Docs' },
          { id: 2, title: 'Vue Router', category: 'Library' },
        ].filter((item) =>
          item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
      
      const searchFilters = ref([
        { id: 'type', label: 'Тип', options: ['Все', 'Документы', 'Код'] },
      ]);
      
      const handleSearch = (query) => {
        console.log('Поиск:', query);
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 1000);
      };
      
      return {
        searchQuery,
        suggestions,
        isLoading,
        searchHistory,
        searchFilters,
        handleSearch,
      };
    },
    template: `
      <DXSearchBar
        v-model="searchQuery"
        :suggestions="suggestions"
        :loading="isLoading"
        :show-history="true"
        :history-items="searchHistory"
        :filters="searchFilters"
        hotkey="ctrl+k"
        placeholder="Полнофункциональный поиск..."
        @search="handleSearch"
      />
    `,
  }),
};

