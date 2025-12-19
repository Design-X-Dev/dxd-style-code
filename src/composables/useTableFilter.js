import { ref, computed } from 'vue';

/**
 * Composable для фильтрации данных таблицы
 */
export function useTableFilter(data, props, emit, sourceData = null) {
  const filters = ref({});
  const searchQuery = ref('');

  // Исходные данные для сбора опций фильтра (если не переданы, используем data)
  const sourceDataForOptions = sourceData || data;

  // Фильтрованные данные
  const filteredData = computed(() => {
    let result = [...data.value];

    // Глобальный поиск
    if (searchQuery.value && props.searchable) {
      const query = searchQuery.value.toLowerCase();
      result = result.filter(row => {
        return props.columns.some(col => {
          const value = row[col.key];
          return value != null && String(value).toLowerCase().includes(query);
        });
      });
    }

    // Фильтрация по столбцам
    if (props.filterable && Object.keys(filters.value).length > 0) {
      result = result.filter(row => {
        return Object.entries(filters.value).every(([column, filterValue]) => {
          // Пустое значение = показать все
          if (!filterValue || filterValue === '') return true;
          
          const cellValue = row[column];
          
          // Точное совпадение для select-based фильтров
          return cellValue === filterValue;
        });
      });
    }

    return result;
  });

  // Применить фильтр для столбца
  const applyFilter = (column, value) => {
    if (value) {
      filters.value[column] = value;
    } else {
      delete filters.value[column];
    }

    emit('filter', { column, value, filters: { ...filters.value } });
  };

  // Очистить все фильтры
  const clearFilters = () => {
    filters.value = {};
    searchQuery.value = '';
    emit('filter-clear');
  };

  // Очистить фильтр столбца
  const clearColumnFilter = (column) => {
    delete filters.value[column];
    emit('filter', { column, value: null, filters: { ...filters.value } });
  };

  // Собрать уникальные значения для столбца (из исходных данных)
  const getUniqueColumnValues = (columnKey) => {
    const uniqueValues = new Set();
    sourceDataForOptions.value.forEach(row => {
      const value = row[columnKey];
      if (value != null && value !== '') {
        uniqueValues.add(value);
      }
    });
    
    return Array.from(uniqueValues)
      .sort()
      .map(value => ({
        value: value,
        label: String(value),
      }));
  };

  // Получить опции фильтра для столбца
  const getFilterOptions = (column) => {
    // Приоритет явным filterOptions
    if (column.filterOptions && Array.isArray(column.filterOptions)) {
      // Добавляем опцию "Все" в начало, если её нет
      const hasAllOption = column.filterOptions.some(opt => opt.value === '' || opt.value === null);
      if (!hasAllOption) {
        return [
          { value: '', label: 'Все' },
          ...column.filterOptions
        ];
      }
      return column.filterOptions;
    }
    
    // Иначе собираем из данных
    const uniqueValues = getUniqueColumnValues(column.key);
    // Добавляем опцию "Все" в начало
    return [
      { value: '', label: 'Все' },
      ...uniqueValues
    ];
  };

  // Получить список активных фильтров с метаданными
  const activeFilters = computed(() => {
    if (!props.filterable || Object.keys(filters.value).length === 0) {
      return [];
    }

    return Object.entries(filters.value)
      .map(([columnKey, filterValue]) => {
        if (!filterValue || filterValue === '') return null;

        // Найти колонку
        const column = props.columns.find(col => col.key === columnKey);
        if (!column) return null;

        // Найти label для значения
        const filterOptions = getFilterOptions(column);
        const option = filterOptions.find(opt => opt.value === filterValue);
        const valueLabel = option ? option.label : String(filterValue);

        return {
          column: columnKey,
          columnLabel: column.label,
          value: filterValue,
          valueLabel: valueLabel,
        };
      })
      .filter(Boolean);
  });

  // Количество активных фильтров
  const activeFiltersCount = computed(() => {
    return activeFilters.value.length;
  });

  return {
    filters,
    searchQuery,
    filteredData,
    applyFilter,
    clearFilters,
    clearColumnFilter,
    getFilterOptions,
    activeFilters,
    activeFiltersCount,
  };
}

