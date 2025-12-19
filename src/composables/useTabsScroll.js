import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Composable для управления прокруткой табов
 * @param {Ref} containerRef - ссылка на контейнер с табами
 * @param {Ref} showScrollButtons - показывать ли кнопки прокрутки
 */
export function useTabsScroll(containerRef, showScrollButtons) {
  const canScrollLeft = ref(false);
  const canScrollRight = ref(false);

  /**
   * Обновить состояние возможности прокрутки
   */
  const updateScrollState = () => {
    if (!containerRef.value) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.value;
    canScrollLeft.value = scrollLeft > 0;
    canScrollRight.value = scrollLeft + clientWidth < scrollWidth - 1; // -1 для погрешности
  };

  /**
   * Прокрутка влево
   */
  const scrollLeft = () => {
    if (containerRef.value) {
      containerRef.value.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  /**
   * Прокрутка вправо
   */
  const scrollRight = () => {
    if (containerRef.value) {
      containerRef.value.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  /**
   * Прокрутка к активному табу
   */
  const scrollToActiveTab = () => {
    if (!containerRef.value) return;

    const activeTab = containerRef.value.querySelector('.tab-btn.active');
    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  let scrollHandler = null;

  onMounted(() => {
    if (containerRef.value && showScrollButtons.value) {
      scrollHandler = () => updateScrollState();
      containerRef.value.addEventListener('scroll', scrollHandler);
      
      // Инициализация состояния
      setTimeout(updateScrollState, 0);
      
      // Обновление при ресайзе окна
      window.addEventListener('resize', updateScrollState);
    }
  });

  onBeforeUnmount(() => {
    if (containerRef.value && scrollHandler) {
      containerRef.value.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', updateScrollState);
    }
  });

  return {
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    scrollToActiveTab,
    updateScrollState,
  };
}

