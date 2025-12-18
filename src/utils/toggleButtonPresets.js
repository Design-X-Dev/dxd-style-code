import { 
  HeartIcon, 
  StarIcon, 
  BookmarkIcon,
  BellIcon,
  EyeIcon,
  LockOpenIcon,
  SunIcon,
  SpeakerWaveIcon,
  PlayIcon,
} from '@heroicons/vue/24/outline';

import { 
  HeartIcon as HeartSolid, 
  StarIcon as StarSolid, 
  BookmarkIcon as BookmarkSolid,
  BellIcon as BellSolid,
  EyeSlashIcon,
  LockClosedIcon,
  MoonIcon,
  SpeakerXMarkIcon,
  PauseIcon,
} from '@heroicons/vue/24/solid';

/**
 * Готовые конфигурации для DXToggleButton
 * 
 * Использование:
 * import { TOGGLE_PRESETS } from '@/utils/toggleButtonPresets';
 * 
 * <DXToggleButton v-bind="TOGGLE_PRESETS.favorite" v-model="isFavorite" />
 */
export const TOGGLE_PRESETS = {
  favorite: {
    activeIcon: HeartSolid,
    inactiveIcon: HeartIcon,
    activeVariant: 'danger',
    inactiveVariant: 'ghost',
    iconAnimation: 'scale',
  },
  bookmark: {
    activeIcon: BookmarkSolid,
    inactiveIcon: BookmarkIcon,
    activeVariant: 'warning',
    inactiveVariant: 'ghost',
    iconAnimation: 'scale',
  },
  star: {
    activeIcon: StarSolid,
    inactiveIcon: StarIcon,
    activeVariant: 'warning',
    inactiveVariant: 'ghost',
    iconAnimation: 'scale',
  },
  notifications: {
    activeIcon: BellSolid,
    inactiveIcon: BellIcon,
    activeVariant: 'primary',
    inactiveVariant: 'ghost',
    iconAnimation: 'wiggle',
  },
  visibility: {
    activeIcon: EyeIcon,
    inactiveIcon: EyeSlashIcon,
    activeLabel: 'Visible',
    inactiveLabel: 'Hidden',
    activeVariant: 'success',
    inactiveVariant: 'ghost',
    iconAnimation: 'scale',
  },
  lock: {
    activeIcon: LockClosedIcon,
    inactiveIcon: LockOpenIcon,
    activeLabel: 'Locked',
    inactiveLabel: 'Unlocked',
    activeVariant: 'danger',
    inactiveVariant: 'success',
    iconAnimation: 'rotate',
  },
  theme: {
    activeIcon: MoonIcon,
    inactiveIcon: SunIcon,
    activeLabel: 'Dark',
    inactiveLabel: 'Light',
    activeVariant: 'primary',
    inactiveVariant: 'warning',
    iconAnimation: 'rotate',
  },
  sound: {
    activeIcon: SpeakerXMarkIcon,
    inactiveIcon: SpeakerWaveIcon,
    activeVariant: 'danger',
    inactiveVariant: 'primary',
    iconAnimation: 'scale',
  },
  playPause: {
    activeIcon: PauseIcon,
    inactiveIcon: PlayIcon,
    activeLabel: 'Pause',
    inactiveLabel: 'Play',
    activeVariant: 'warning',
    inactiveVariant: 'success',
    iconAnimation: 'scale',
  },
};

/**
 * Хелпер для использования preset
 * @param {string} presetName - favorite | bookmark | star | notifications и др.
 * @returns {Object} Конфигурация для DXToggleButton
 */
export function useTogglePreset(presetName) {
  return TOGGLE_PRESETS[presetName] || TOGGLE_PRESETS.favorite;
}

