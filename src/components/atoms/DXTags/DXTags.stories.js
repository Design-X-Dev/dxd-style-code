import DXTags from "./DXTags.vue";
import { ref } from "vue";
import {
  TagIcon,
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  LockClosedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ExclamationTriangleIcon,
  FireIcon,
} from "@heroicons/vue/24/outline";

export default {
  title: "Atoms/DXTags",
  component: DXTags,
  tags: ["autodocs", "status:ready"],
  parameters: {
    docs: {
      description: {
        component: `
**Статус:** 🟢 Готов к использованию

Компонент для отображения группы тегов с поддержкой иконок, цветов и возможности удаления.

## Назначение

DXTags предоставляет стандартизированный способ отображения группы тегов (меток, категорий).
Компонент поддерживает иконки, различные цвета, анимации и возможность удаления отдельных тегов.

## Архитектура

### Использует
- \`DXIcon\` - для иконок в тегах и кнопки удаления
- \`useSize\` composable - для размеров
- \`useVariantTag\` composable - для цветовых вариантов
- \`useClassComposition\` composable - для объединения классов

### Используется в
- Категории и метки
- Фильтры
- Теги в формах
- Любые места, требующие отображения группы тегов

## Внутренняя логика

### Структура тегов
Теги могут быть переданы как:
- **Строки**: \`["Vue.js", "React"]\` - простые теги
- **Объекты**: \`[{ label: "Vue.js", icon: Icon, color: "primary" }]\` - теги с дополнительными свойствами

### Варианты размера

| Значение | Описание |
|----------|----------|
| \`default\` | Стандартный размер (по умолчанию) |
| \`large\` | Увеличенный размер |

### Цвета

| Значение | Описание |
|----------|----------|
| \`default\` | Нейтральный серый (по умолчанию) |
| \`primary\` | Основной цвет |
| \`success\` | Зеленый цвет |
| \`warning\` | Желтый цвет |
| \`danger\` | Красный цвет |
| \`info\` | Синий цвет |

Цвет можно задать глобально через \`color\` prop или индивидуально для каждого тега.

### Иконки
- Можно добавить иконку слева от текста через \`icon\` в объекте тега
- Размер иконки автоматически адаптируется к размеру тега
- Поддерживает анимации иконок через \`iconAnimation\`

### Удаление тегов
- При \`closable={true}\` все теги становятся удаляемыми
- Можно задать индивидуально для каждого тега через \`closable\` в объекте
- При удалении эмитится событие \`remove\` с данными тега

## Особенности

### События
- \`@remove\` - эмитится при удалении тега, передает данные тега и индекс

### Анимации иконок
Поддерживает те же анимации, что и DXIcon:
- **none** - без анимации
- **wiggle** - тряска
- **scale** - масштабирование
- **rotate** - вращение

### Групповое удаление
При \`closable={true}\` все теги получают кнопку удаления с иконкой XMarkIcon.
        `,
      },
    },
  },
};

export const Default = {
  args: {
    tags: ["Vue.js", "React", "Angular", "TypeScript"],
  },
};

export const Large = {
  args: {
    tags: ["Frontend", "Backend", "DevOps"],
    variant: "large",
  },
};

export const WithIcons = {
  args: {
    tags: [
      { label: "Frontend", icon: CodeBracketIcon },
      { label: "Backend", icon: CpuChipIcon },
      { label: "Cloud", icon: CloudIcon },
      { label: "Security", icon: LockClosedIcon },
    ],
  },
};

export const WithAnimatedIcons = {
  args: {
    tags: [
      { label: "Vue.js", icon: CodeBracketIcon, iconAnimation: "wiggle" },
      { label: "React", icon: CodeBracketIcon, iconAnimation: "scale" },
      { label: "Angular", icon: CodeBracketIcon, iconAnimation: "rotate" },
    ],
    variant: "large",
  },
};

export const Colored = {
  args: {
    tags: [
      { label: "Default", color: "default" },
      { label: "Primary", color: "primary" },
      { label: "Success", color: "success" },
      { label: "Warning", color: "warning" },
      { label: "Danger", color: "danger" },
      { label: "Info", color: "info" },
    ],
  },
};

export const ColoredWithIcons = {
  args: {
    tags: [
      { label: "Verified", icon: CheckBadgeIcon, color: "success" },
      { label: "Warning", icon: ExclamationTriangleIcon, color: "warning" },
      { label: "Critical", icon: FireIcon, color: "danger" },
      { label: "Info", icon: SparklesIcon, color: "info" },
    ],
    variant: "large",
  },
};

export const Closable = {
  render: () => ({
    components: { DXTags },
    setup() {
      const tags = ref(["Vue.js", "React", "Angular", "TypeScript", "Node.js"]);

      const handleRemove = ({ index }) => {
        tags.value.splice(index, 1);
      };

      return { tags, handleRemove };
    },
    template: `
      <div class="space-y-4">
        <DXTags :tags="tags" closable @remove="handleRemove" />
        <p class="text-sm text-slate-600">
          {{ tags.length }} tags remaining
        </p>
      </div>
    `,
  }),
};

export const ClosableWithIcons = {
  render: () => ({
    components: { DXTags },
    setup() {
      const tags = ref([
        { label: "Frontend", icon: CodeBracketIcon },
        { label: "Backend", icon: CpuChipIcon },
        { label: "Cloud", icon: CloudIcon },
        { label: "Security", icon: LockClosedIcon },
      ]);

      const handleRemove = ({ index }) => {
        tags.value.splice(index, 1);
      };

      return { tags, handleRemove };
    },
    template: `
      <DXTags :tags="tags" closable @remove="handleRemove" variant="large" />
    `,
  }),
};

export const MixedStyles = {
  args: {
    tags: [
      {
        label: "Active",
        icon: CheckBadgeIcon,
        color: "success",
        closable: false,
      },
      {
        label: "Pending",
        icon: SparklesIcon,
        color: "warning",
        closable: true,
      },
      {
        label: "Featured",
        icon: RocketLaunchIcon,
        color: "primary",
        iconAnimation: "wiggle",
      },
      { label: "Hot", icon: FireIcon, color: "danger", iconAnimation: "scale" },
    ],
    variant: "large",
  },
};

export const AllVariants = {
  render: () => ({
    components: { DXTags },
    setup() {
      const simpleTags = ref(["Vue", "React", "Angular"]);
      const iconTags = [
        { label: "Frontend", icon: CodeBracketIcon },
        { label: "Backend", icon: CpuChipIcon },
      ];
      const coloredTags = [
        { label: "Success", color: "success" },
        { label: "Warning", color: "warning" },
        { label: "Danger", color: "danger" },
      ];
      const closableTags = ref([
        { label: "Tag 1", icon: TagIcon },
        { label: "Tag 2", icon: TagIcon },
        { label: "Tag 3", icon: TagIcon },
      ]);

      const handleRemove = ({ index }) => {
        closableTags.value.splice(index, 1);
      };

      return { simpleTags, iconTags, coloredTags, closableTags, handleRemove };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-2">Simple Tags</h3>
          <DXTags :tags="simpleTags" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-2">With Icons</h3>
          <DXTags :tags="iconTags" variant="large" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-2">Colored</h3>
          <DXTags :tags="coloredTags" />
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-2">Closable with Icons</h3>
          <DXTags :tags="closableTags" closable @remove="handleRemove" variant="large" />
          <p class="text-xs text-slate-500 mt-2">{{ closableTags.length }} tags remaining</p>
        </div>
      </div>
    `,
  }),
};
