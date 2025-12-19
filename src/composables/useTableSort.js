import { ref, computed } from 'vue';

/**
 * Composable для сортировки данных таблицы
 */
export function useTableSort(data, props, emit) {
  const sortBy = ref(props.defaultSort?.column || null);
  const sortDirection = ref(props.defaultSort?.direction || 'asc');

  // Сортированные данные
  const sortedData = computed(() => {
    if (!sortBy.value || !props.sortable) {
      return data.value;
    }

    const sorted = [...data.value].sort((a, b) => {
      const aVal = a[sortBy.value];
      const bVal = b[sortBy.value];

      // Обработка null/undefined
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      // Числовая сортировка
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection.value === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // Строковая сортировка (case-insensitive)
      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();

      if (sortDirection.value === 'asc') {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });

    return sorted;
  });

  // Переключение сортировки
  const toggleSort = (column) => {
    if (sortBy.value === column) {
      // Циклическая смена: asc -> desc -> null
      if (sortDirection.value === 'asc') {
        sortDirection.value = 'desc';
      } else if (sortDirection.value === 'desc') {
        sortBy.value = null;
        sortDirection.value = 'asc';
      }
    } else {
      sortBy.value = column;
      sortDirection.value = 'asc';
    }

    emit('sort', { column: sortBy.value, direction: sortDirection.value });
  };

  // Сброс сортировки
  const resetSort = () => {
    sortBy.value = props.defaultSort?.column || null;
    sortDirection.value = props.defaultSort?.direction || 'asc';
  };

  return {
    sortBy,
    sortDirection,
    sortedData,
    toggleSort,
    resetSort,
  };
}

