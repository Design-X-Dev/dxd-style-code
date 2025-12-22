import DXAvatar from './DXAvatar.vue';
import { 
  UserIcon,
  HeartIcon, 
  StarIcon, 
  SparklesIcon,
  RocketLaunchIcon,
} from '@heroicons/vue/24/solid';

export default {
  title: 'Atoms/DXAvatar',
  component: DXAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    shape: { control: { type: 'select' }, options: ['circle', 'square'] },
    iconAnimation: { control: { type: 'select' }, options: ['none', 'wiggle', 'scale', 'rotate'] },
  },
};

export const Default = {
  args: { initials: 'JD' },
};

export const WithImage = {
  args: { src: 'https://i.pravatar.cc/100', alt: 'User' },
};

export const Sizes = {
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex items-end gap-4">
        <DXAvatar size="xs" initials="XS" />
        <DXAvatar size="sm" initials="SM" />
        <DXAvatar size="md" initials="MD" />
        <DXAvatar size="lg" initials="LG" />
        <DXAvatar size="xl" initials="XL" />
      </div>
    `,
  }),
};

export const Shapes = {
  render: () => ({
    components: { DXAvatar },
    template: `
      <div class="flex gap-4">
        <DXAvatar initials="CI" shape="circle" />
        <DXAvatar initials="SQ" shape="square" />
      </div>
    `,
  }),
};

export const WithCustomIcons = {
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { UserIcon, HeartIcon, StarIcon, SparklesIcon, RocketLaunchIcon };
    },
    template: `
      <div class="flex gap-4">
        <DXAvatar :icon="HeartIcon"/>
        <DXAvatar :icon="StarIcon"/>
        <DXAvatar :icon="SparklesIcon" shape="square"/>
        <DXAvatar :icon="RocketLaunchIcon" shape="square"/>
      </div>
    `,
  }),
};

export const FallbackScenarios = {
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { HeartIcon };
    },
    template: `
      <div class="flex gap-4 items-center">
        <div class="text-center">
          <DXAvatar src="https://i.pravatar.cc/100" />
          <p class="text-xs mt-2 text-slate-600">С изображением</p>
        </div>
        <div class="text-center">
          <DXAvatar initials="AB" />
          <p class="text-xs mt-2 text-slate-600">С инициалами</p>
        </div>
        <div class="text-center">
          <DXAvatar />
          <p class="text-xs mt-2 text-slate-600">Дефолтная иконка</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" />
          <p class="text-xs mt-2 text-slate-600">Кастомная иконка</p>
        </div>
      </div>
    `,
  }),
};

export const WithAnimations = {
  render: () => ({
    components: { DXAvatar },
    setup() {
      return { UserIcon, HeartIcon, StarIcon, SparklesIcon };
    },
    template: `
      <div class="flex gap-8 items-center">
        <div class="text-center">
          <DXAvatar :icon="UserIcon" icon-animation="none" size="lg" />
          <p class="text-xs mt-2 text-slate-600">None</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="HeartIcon" icon-animation="wiggle" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Wiggle</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="StarIcon" icon-animation="scale" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Scale</p>
        </div>
        <div class="text-center">
          <DXAvatar :icon="SparklesIcon" icon-animation="rotate" size="lg" />
          <p class="text-xs mt-2 text-slate-600">Rotate</p>
        </div>
      </div>
    `,
  }),
};
