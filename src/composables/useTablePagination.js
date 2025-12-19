import { ref, computed, watch } from 'vue';

/**
 * Composable для пагинации данных таблицы
 */
export function useTablePagination(data, props, emit) {
  const currentPage = ref(1);
  const pageSize = ref(props.defaultPageSize || 10);

  // Общее количество страниц
  const totalPages = computed(() => {
    if (!props.paginated || data.value.length === 0) return 1;
    return Math.ceil(data.value.length / pageSize.value);
  });

  // Пагинированные данные
  const paginatedData = computed(() => {
    if (!props.paginated) {
      return data.value;
    }

    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return data.value.slice(start, end);
  });

  // Информация о пагинации
  const paginationInfo = computed(() => {
    const total = data.value.length;
    if (total === 0) {
      return { from: 0, to: 0, total: 0 };
    }

    const from = (currentPage.value - 1) * pageSize.value + 1;
    const to = Math.min(currentPage.value * pageSize.value, total);

    return { from, to, total };
  });

  // Переход на страницу
  const goToPage = (page) => {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
    emit('page-change', currentPage.value);
  };

  // Следующая страница
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      emit('page-change', currentPage.value);
    }
  };

  // Предыдущая страница
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      emit('page-change', currentPage.value);
    }
  };

  // Изменение размера страницы
  const changePageSize = (newSize) => {
    pageSize.value = newSize;
    currentPage.value = 1; // Сброс на первую страницу
    emit('page-size-change', pageSize.value);
  };

  // Сброс на первую страницу при изменении данных
  watch(() => data.value.length, () => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = Math.max(1, totalPages.value);
    }
  });

  return {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,
    paginationInfo,
    goToPage,
    nextPage,
    previousPage,
    changePageSize,
  };
}

