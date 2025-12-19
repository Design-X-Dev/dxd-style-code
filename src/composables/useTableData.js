import { ref, watch } from 'vue';

/**
 * Composable для управления данными таблицы
 * Поддержка локального и API режимов
 */
export function useTableData(props, emit) {
  const localData = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Локальный режим - копируем данные из props
  const loadLocalData = () => {
    localData.value = [...props.data];
  };

  // API режим - загрузка данных с сервера
  const loadApiData = async (params = {}) => {
    if (!props.apiUrl) {
      error.value = 'API URL не указан';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const queryParams = new URLSearchParams({
        ...props.apiParams,
        ...params,
      }).toString();

      const url = `${props.apiUrl}${queryParams ? `?${queryParams}` : ''}`;
      
      const response = await fetch(url, {
        method: props.apiMethod || 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      localData.value = Array.isArray(data) ? data : data.data || [];
      
      emit('data-loaded', localData.value);
    } catch (err) {
      error.value = err.message;
      emit('error', err);
    } finally {
      loading.value = false;
    }
  };

  // Загрузка данных в зависимости от режима
  const loadData = (params) => {
    if (props.mode === 'api') {
      return loadApiData(params);
    } else {
      loadLocalData();
      return Promise.resolve();
    }
  };

  // Следим за изменениями в props.data для локального режима
  watch(() => props.data, () => {
    if (props.mode === 'local') {
      loadLocalData();
    }
  }, { immediate: true, deep: true });

  return {
    localData,
    loading,
    error,
    loadData,
  };
}

