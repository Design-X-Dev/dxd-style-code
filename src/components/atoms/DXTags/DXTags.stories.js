import DXTags from './DXTags.vue';
import { ref } from 'vue';
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
} from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/v1/DXTags',
  component: DXTags,
  tags: ['autodocs'],
};

export const Default = {
  args: { 
    tags: ['Vue.js', 'React', 'Angular', 'TypeScript'] 
  },
};

export const Large = {
  args: { 
    tags: ['Frontend', 'Backend', 'DevOps'], 
    variant: 'large' 
  },
};

export const WithIcons = {
  args: {
    tags: [
      { label: 'Frontend', icon: CodeBracketIcon },
      { label: 'Backend', icon: CpuChipIcon },
      { label: 'Cloud', icon: CloudIcon },
      { label: 'Security', icon: LockClosedIcon },
    ],
  },
};

export const WithAnimatedIcons = {
  args: {
    tags: [
      { label: 'Vue.js', icon: CodeBracketIcon, iconAnimation: 'wiggle' },
      { label: 'React', icon: CodeBracketIcon, iconAnimation: 'scale' },
      { label: 'Angular', icon: CodeBracketIcon, iconAnimation: 'rotate' },
    ],
    variant: 'large',
  },
};

export const Colored = {
  args: {
    tags: [
      { label: 'Default', color: 'default' },
      { label: 'Primary', color: 'primary' },
      { label: 'Success', color: 'success' },
      { label: 'Warning', color: 'warning' },
      { label: 'Danger', color: 'danger' },
      { label: 'Info', color: 'info' },
    ],
  },
};

export const ColoredWithIcons = {
  args: {
    tags: [
      { label: 'Verified', icon: CheckBadgeIcon, color: 'success' },
      { label: 'Warning', icon: ExclamationTriangleIcon, color: 'warning' },
      { label: 'Critical', icon: FireIcon, color: 'danger' },
      { label: 'Info', icon: SparklesIcon, color: 'info' },
    ],
    variant: 'large',
  },
};

export const Closable = {
  render: () => ({
    components: { DXTags },
    setup() {
      const tags = ref(['Vue.js', 'React', 'Angular', 'TypeScript', 'Node.js']);
      
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
        { label: 'Frontend', icon: CodeBracketIcon },
        { label: 'Backend', icon: CpuChipIcon },
        { label: 'Cloud', icon: CloudIcon },
        { label: 'Security', icon: LockClosedIcon },
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
      { label: 'Active', icon: CheckBadgeIcon, color: 'success', closable: false },
      { label: 'Pending', icon: SparklesIcon, color: 'warning', closable: true },
      { label: 'Featured', icon: RocketLaunchIcon, color: 'primary', iconAnimation: 'wiggle' },
      { label: 'Hot', icon: FireIcon, color: 'danger', iconAnimation: 'scale' },
    ],
    variant: 'large',
  },
};

export const AllVariants = {
  render: () => ({
    components: { DXTags },
    setup() {
      const simpleTags = ref(['Vue', 'React', 'Angular']);
      const iconTags = [
        { label: 'Frontend', icon: CodeBracketIcon },
        { label: 'Backend', icon: CpuChipIcon },
      ];
      const coloredTags = [
        { label: 'Success', color: 'success' },
        { label: 'Warning', color: 'warning' },
        { label: 'Danger', color: 'danger' },
      ];
      const closableTags = ref([
        { label: 'Tag 1', icon: TagIcon },
        { label: 'Tag 2', icon: TagIcon },
        { label: 'Tag 3', icon: TagIcon },
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

