import { ref, computed } from 'vue';

/**
 * Composable для управления столбцами таблицы
 */
export function useTableColumns(props, emit) {
  // Скрытые столбцы (по ключу)
  const hiddenColumns = ref([]);

  // Видимые столбцы
  const visibleColumns = computed(() => {
    return props.columns.filter(col => !hiddenColumns.value.includes(col.key));
  });

  // Все столбцы с информацией о видимости
  const columnsWithVisibility = computed(() => {
    return props.columns.map(col => ({
      ...col,
      visible: !hiddenColumns.value.includes(col.key),
    }));
  });

  // Переключить видимость столбца
  const toggleColumn = (key) => {
    const index = hiddenColumns.value.indexOf(key);
    if (index > -1) {
      hiddenColumns.value.splice(index, 1);
    } else {
      hiddenColumns.value.push(key);
    }
    
    emit('column-toggle', { 
      column: key, 
      visible: index > -1,
      hiddenColumns: [...hiddenColumns.value] 
    });
  };

  // Показать столбец
  const showColumn = (key) => {
    const index = hiddenColumns.value.indexOf(key);
    if (index > -1) {
      hiddenColumns.value.splice(index, 1);
      emit('column-show', key);
    }
  };

  // Скрыть столбец
  const hideColumn = (key) => {
    if (!hiddenColumns.value.includes(key)) {
      hiddenColumns.value.push(key);
      emit('column-hide', key);
    }
  };

  // Показать все столбцы
  const showAllColumns = () => {
    hiddenColumns.value = [];
    emit('columns-show-all');
  };

  // Скрыть все столбцы кроме обязательных
  const hideAllColumns = (exceptKeys = []) => {
    hiddenColumns.value = props.columns
      .filter(col => !exceptKeys.includes(col.key))
      .map(col => col.key);
    emit('columns-hide-all');
  };

  // Сбросить к дефолтным
  const resetColumns = () => {
    hiddenColumns.value = [];
    emit('columns-reset');
  };

  return {
    hiddenColumns,
    visibleColumns,
    columnsWithVisibility,
    toggleColumn,
    showColumn,
    hideColumn,
    showAllColumns,
    hideAllColumns,
    resetColumns,
  };
}

