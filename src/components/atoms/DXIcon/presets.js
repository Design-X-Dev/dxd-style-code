// DXIcon Presets - наиболее часто используемые иконки с готовыми конфигами
import {
  // Actions
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
  
  // Navigation
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  
  // Status
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  
  // UI
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  BellIcon,
  UserIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  ClockIcon,
  
  // Files & Documents
  DocumentIcon,
  FolderIcon,
  CloudArrowUpIcon,
  CloudArrowDownIcon,
  
  // Social & Media
  HeartIcon,
  StarIcon,
  ShareIcon,
  ChatBubbleLeftIcon,
  
  // View & Display
  EyeIcon,
  EyeSlashIcon,
  Squares2X2Icon,
  ListBulletIcon,
  
} from '@heroicons/vue/24/outline';

import {
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon as XCircleIconSolid,
  ExclamationCircleIcon as ExclamationCircleIconSolid,
  ExclamationTriangleIcon as ExclamationTriangleIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
  HeartIcon as HeartIconSolid,
  StarIcon as StarIconSolid,
} from '@heroicons/vue/24/solid';

/**
 * Icon Presets - готовые конфигурации для часто используемых иконок
 * 
 * Использование:
 * import { IconPresets } from '@/components/atoms/DXIcon/presets';
 * <DXIcon v-bind="IconPresets.close" />
 */
export const IconPresets = {
  // Actions
  close: { icon: XMarkIcon, size: 'md', animation: 'scale' },
  add: { icon: PlusIcon, size: 'sm', animation: 'scale' },
  remove: { icon: MinusIcon, size: 'sm', animation: 'scale' },
  edit: { icon: PencilIcon, size: 'sm', animation: 'wiggle' },
  delete: { icon: TrashIcon, size: 'sm', animation: 'wiggle' },
  check: { icon: CheckIcon, size: 'sm', animation: 'scale' },
  
  // Navigation
  chevronLeft: { icon: ChevronLeftIcon, size: 'sm', animation: 'none' },
  chevronRight: { icon: ChevronRightIcon, size: 'sm', animation: 'none' },
  chevronUp: { icon: ChevronUpIcon, size: 'sm', animation: 'none' },
  chevronDown: { icon: ChevronDownIcon, size: 'sm', animation: 'none' },
  arrowLeft: { icon: ArrowLeftIcon, size: 'sm', animation: 'none' },
  arrowRight: { icon: ArrowRightIcon, size: 'sm', animation: 'none' },
  
  // Status (Outline)
  success: { icon: CheckCircleIcon, size: 'md', animation: 'scale' },
  error: { icon: XCircleIcon, size: 'md', animation: 'scale' },
  warning: { icon: ExclamationTriangleIcon, size: 'md', animation: 'scale' },
  info: { icon: InformationCircleIcon, size: 'md', animation: 'scale' },
  
  // Status (Solid)
  successSolid: { icon: CheckCircleIconSolid, size: 'md', animation: 'scale' },
  errorSolid: { icon: XCircleIconSolid, size: 'md', animation: 'scale' },
  warningSolid: { icon: ExclamationTriangleIconSolid, size: 'md', animation: 'scale' },
  infoSolid: { icon: InformationCircleIconSolid, size: 'md', animation: 'scale' },
  
  // UI
  search: { icon: MagnifyingGlassIcon, size: 'sm', animation: 'none' },
  settings: { icon: Cog6ToothIcon, size: 'md', animation: 'rotate' },
  notification: { icon: BellIcon, size: 'md', animation: 'wiggle' },
  user: { icon: UserIcon, size: 'md', animation: 'none' },
  home: { icon: HomeIcon, size: 'md', animation: 'none' },
  email: { icon: EnvelopeIcon, size: 'sm', animation: 'none' },
  phone: { icon: PhoneIcon, size: 'sm', animation: 'none' },
  calendar: { icon: CalendarIcon, size: 'sm', animation: 'none' },
  clock: { icon: ClockIcon, size: 'sm', animation: 'none' },
  
  // Files
  document: { icon: DocumentIcon, size: 'md', animation: 'none' },
  folder: { icon: FolderIcon, size: 'md', animation: 'none' },
  upload: { icon: CloudArrowUpIcon, size: 'lg', animation: 'none' },
  download: { icon: CloudArrowDownIcon, size: 'md', animation: 'none' },
  
  // Social
  heart: { icon: HeartIcon, size: 'md', animation: 'scale' },
  heartSolid: { icon: HeartIconSolid, size: 'md', animation: 'scale' },
  star: { icon: StarIcon, size: 'md', animation: 'wiggle' },
  starSolid: { icon: StarIconSolid, size: 'md', animation: 'wiggle' },
  share: { icon: ShareIcon, size: 'sm', animation: 'wiggle' },
  chat: { icon: ChatBubbleLeftIcon, size: 'sm', animation: 'none' },
  
  // View
  eye: { icon: EyeIcon, size: 'md', animation: 'scale' },
  eyeSlash: { icon: EyeSlashIcon, size: 'md', animation: 'scale' },
  grid: { icon: Squares2X2Icon, size: 'md', animation: 'none' },
  list: { icon: ListBulletIcon, size: 'md', animation: 'none' },
};

/**
 * Icon Collections - сгруппированные коллекции иконок
 */
export const IconCollections = {
  actions: {
    close: XMarkIcon,
    add: PlusIcon,
    remove: MinusIcon,
    edit: PencilIcon,
    delete: TrashIcon,
    check: CheckIcon,
  },
  navigation: {
    chevronLeft: ChevronLeftIcon,
    chevronRight: ChevronRightIcon,
    chevronUp: ChevronUpIcon,
    chevronDown: ChevronDownIcon,
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
  },
  status: {
    success: CheckCircleIcon,
    error: XCircleIcon,
    warning: ExclamationTriangleIcon,
    info: InformationCircleIcon,
  },
  statusSolid: {
    success: CheckCircleIconSolid,
    error: XCircleIconSolid,
    warning: ExclamationTriangleIconSolid,
    info: InformationCircleIconSolid,
  },
};

export default IconPresets;

