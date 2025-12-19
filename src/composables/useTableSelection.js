import { ref, computed } from 'vue';

/**
 * Composable для выделения строк таблицы
 */
export function useTableSelection(data, props, emit) {
  const selectedRows = ref([]);

  // Все ли строки выбраны
  const allSelected = computed(() => {
    if (data.value.length === 0) return false;
    return selectedRows.value.length === data.value.length;
  });

  // Некоторые строки выбраны (для indeterminate состояния)
  const someSelected = computed(() => {
    return selectedRows.value.length > 0 && selectedRows.value.length < data.value.length;
  });

  // Проверка выбрана ли строка
  const isSelected = (id) => {
    return selectedRows.value.includes(id);
  };

  // Переключение выделения строки
  const toggleRow = (id) => {
    const index = selectedRows.value.indexOf(id);
    if (index > -1) {
      selectedRows.value.splice(index, 1);
    } else {
      selectedRows.value.push(id);
    }
    
    emit('row-select', { id, selected: index === -1, selectedRows: [...selectedRows.value] });
  };

  // Выбрать все строки
  const selectAll = () => {
    if (allSelected.value) {
      selectedRows.value = [];
      emit('select-all', { selected: false, selectedRows: [] });
    } else {
      selectedRows.value = data.value.map(row => row.id);
      emit('select-all', { selected: true, selectedRows: [...selectedRows.value] });
    }
  };

  // Очистить выделение
  const clearSelection = () => {
    selectedRows.value = [];
    emit('selection-clear');
  };

  // Выбрать определенные строки
  const selectRows = (ids) => {
    selectedRows.value = [...ids];
    emit('selection-change', [...selectedRows.value]);
  };

  // Получить выбранные объекты данных
  const getSelectedRowsData = () => {
    return data.value.filter(row => selectedRows.value.includes(row.id));
  };

  return {
    selectedRows,
    allSelected,
    someSelected,
    isSelected,
    toggleRow,
    selectAll,
    clearSelection,
    selectRows,
    getSelectedRowsData,
  };
}

