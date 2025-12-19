/**
 * Composable для управления меню (sidebar и embedded)
 * Предоставляет переиспользуемую логику для DXSidebarMenu и DXMenu
 */

import { ref, computed, onMounted, provide } from 'vue';

export function useMenu(props, emit) {
  // Reactive state
  const searchQuery = ref('');
  const internalCompact = ref(props.compact);
  
  // Computed для compact mode
  const compact = computed(() => internalCompact.value);
  
  // Check if vue-router is available
  let hasRouter = false;
  onMounted(() => {
    try {
      hasRouter = !!window?.$router || false;
    } catch (e) {
      hasRouter = false;
    }
  });
  
  provide('hasRouter', hasRouter);
  
  // Filtered sections based on search query
  const filteredSections = computed(() => {
    if (!searchQuery.value.trim()) return props.sections;

    const query = searchQuery.value.toLowerCase();
    return props.sections
      .map(section => ({
        ...section,
        items: section.items.filter(item => {
          const labelMatch = item.label?.toLowerCase().includes(query);
          const childrenMatch = item.children?.some(child => 
            child.label?.toLowerCase().includes(query)
          );
          return labelMatch || childrenMatch;
        })
      }))
      .filter(section => section.items.length > 0);
  });
  
  // Check if item is active
  const isItemActive = (item) => {
    if (!props.activeItem) return false;
    
    // Проверка основного элемента
    if (item.to === props.activeItem || item.id === props.activeItem) {
      return true;
    }
    
    // Проверка дочерних элементов
    if (item.children) {
      return item.children.some(child => 
        child.to === props.activeItem || child.id === props.activeItem
      );
    }
    
    return false;
  };
  
  // Toggle compact mode
  const toggleCompact = () => {
    internalCompact.value = !internalCompact.value;
    emit('update:compact', internalCompact.value);
  };
  
  // Handle item click
  const handleItemClick = (item, event) => {
    emit('item-click', item, event);
  };
  
  return {
    searchQuery,
    internalCompact,
    compact,
    filteredSections,
    isItemActive,
    toggleCompact,
    handleItemClick,
    hasRouter
  };
}

