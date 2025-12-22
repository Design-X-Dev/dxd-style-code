import DXSlider from './DXSlider.vue';
import { ref } from 'vue';
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  SignalIcon,
  SignalSlashIcon,
  SunIcon,
  MoonIcon,
  FireIcon,
  BeakerIcon,
  FaceSmileIcon,
  FaceFrownIcon,
} from '@heroicons/vue/24/outline';

export default {
  title: 'Atoms/DXSlider',
  component: DXSlider,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер слайдера',
    },
    variant: {
      control: 'select',
      options: ['slate', 'primary', 'success', 'danger', 'warning', 'info'],
      description: 'Вариант цвета',
    },
    spacing: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Отступы между элементами',
    },
    modelValue: {
      control: 'number',
      description: 'Текущее значение',
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
    },
    step: {
      control: 'number',
      description: 'Шаг изменения',
    },
    label: {
      control: 'text',
      description: 'Лейбл',
    },
    helper: {
      control: 'text',
      description: 'Вспомогательный текст',
    },
    showValue: {
      control: 'boolean',
      description: 'Показывать текущее значение',
    },
    ticks: {
      control: 'boolean',
      description: 'Показывать засечки',
    },
    showTickLabels: {
      control: 'boolean',
      description: 'Показывать подписи к засечкам',
    },
    tickCount: {
      control: 'number',
      description: 'Количество засечек',
    },
    tickIconAnimation: {
      control: 'select',
      options: ['none', 'wiggle', 'scale', 'rotate'],
      description: 'Анимация активной иконки',
    },
    unit: {
      control: 'text',
      description: 'Единица измерения',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
  },
};

export const Default = {
  args: {
    modelValue: 50,
    size: 'md',
    variant: 'primary',
    spacing: 'sm',
    label: 'Volume',
    showValue: true,
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => ({
    components: { DXSlider },
    setup() {
      const value = ref(args.modelValue);
      return { value, args };
    },
    template: '<DXSlider v-model="value" v-bind="args" />',
  }),
};

export const Sizes = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const xs = ref(30);
      const sm = ref(40);
      const md = ref(50);
      const lg = ref(60);
      const xl = ref(70);
      return { xs, sm, md, lg, xl };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Extra Small (xs)</h3>
          <DXSlider v-model="xs" label="Size: xs" size="xs" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Small (sm)</h3>
          <DXSlider v-model="sm" label="Size: sm" size="sm" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Medium (md)</h3>
          <DXSlider v-model="md" label="Size: md" size="md" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Large (lg)</h3>
          <DXSlider v-model="lg" label="Size: lg" size="lg" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Extra Large (xl)</h3>
          <DXSlider v-model="xl" label="Size: xl" size="xl" />
        </div>
      </div>
    `,
  }),
};

export const Variants = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const slate = ref(40);
      const primary = ref(50);
      const success = ref(60);
      const danger = ref(30);
      const warning = ref(70);
      const info = ref(55);
      return { slate, primary, success, danger, warning, info };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Slate</h3>
          <DXSlider v-model="slate" label="Slate variant" variant="slate" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Primary</h3>
          <DXSlider v-model="primary" label="Primary variant" variant="primary" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Success</h3>
          <DXSlider v-model="success" label="Success variant" variant="success" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Danger</h3>
          <DXSlider v-model="danger" label="Danger variant" variant="danger" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Warning</h3>
          <DXSlider v-model="warning" label="Warning variant" variant="warning" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Info</h3>
          <DXSlider v-model="info" label="Info variant" variant="info" />
        </div>
      </div>
    `,
  }),
};

export const Spacing = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const none = ref(50);
      const xs = ref(50);
      const sm = ref(50);
      const md = ref(50);
      const lg = ref(50);
      const xl = ref(50);
      return { none, xs, sm, md, lg, xl };
    },
    template: `
      <div class="space-y-12">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: none</h3>
          <DXSlider v-model="none" label="No spacing" spacing="none" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: xs</h3>
          <DXSlider v-model="xs" label="Extra small spacing" spacing="xs" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: sm</h3>
          <DXSlider v-model="sm" label="Small spacing" spacing="sm" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: md</h3>
          <DXSlider v-model="md" label="Medium spacing" spacing="md" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: lg</h3>
          <DXSlider v-model="lg" label="Large spacing" spacing="lg" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Spacing: xl</h3>
          <DXSlider v-model="xl" label="Extra large spacing" spacing="xl" />
        </div>
      </div>
    `,
  }),
};

export const WithLabel = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(75);
      return { value };
    },
    template: '<DXSlider v-model="value" label="Volume" />',
  }),
};

export const Range = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(30);
      return { value };
    },
    template: '<DXSlider v-model="value" :min="0" :max="100" :step="10" label="Brightness" />',
  }),
};

export const WithTicks = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(50);
      return { value };
    },
    template: '<DXSlider v-model="value" label="Volume" ticks />',
  }),
};

export const TicksWithoutLabels = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(75);
      return { value };
    },
    template: '<DXSlider v-model="value" label="Brightness" ticks :show-tick-labels="false" />',
  }),
};

export const CustomTickCount = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(5);
      return { value };
    },
    template: '<DXSlider v-model="value" label="Rating" :min="0" :max="10" ticks :tick-count="11" />',
  }),
};

export const WithUnit = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const temperature = ref(22);
      return { temperature };
    },
    template: '<DXSlider v-model="temperature" label="Temperature" :min="16" :max="30" unit="°C" ticks :tick-count="8" />',
  }),
};

export const WithIcons = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const volume = ref(50);
      const volumeIcons = [SpeakerXMarkIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon];
      return { volume, volumeIcons };
    },
    template: `
      <DXSlider 
        v-model="volume" 
        label="Volume" 
        ticks 
        :tick-icons="volumeIcons"
      />
    `,
  }),
};

export const IconsWithLabels = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const brightness = ref(70);
      const icons = [MoonIcon, null, null, null, SunIcon];
      return { brightness, icons };
    },
    template: `
      <DXSlider 
        v-model="brightness" 
        label="Brightness" 
        ticks 
        :tick-icons="icons"
        unit="%"
      />
    `,
  }),
};

export const IconsOnly = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const signal = ref(75);
      const icons = [SignalSlashIcon, SignalIcon, SignalIcon, SignalIcon, SignalIcon];
      return { signal, icons };
    },
    template: `
      <DXSlider 
        v-model="signal" 
        label="Signal Strength" 
        ticks 
        :tick-icons="icons"
        :show-tick-labels="false"
      />
    `,
  }),
};

export const CustomIconSets = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const temperature = ref(3);
      const mood = ref(50);
      const tempIcons = [BeakerIcon, null, null, null, FireIcon];
      const moodIcons = [FaceFrownIcon, null, FaceSmileIcon, null, FaceSmileIcon];
      return { temperature, mood, tempIcons, moodIcons };
    },
    template: `
      <div class="space-y-8">
        <DXSlider 
          v-model="temperature" 
          label="Temperature" 
          :min="1"
          :max="5"
          ticks 
          :tick-icons="tempIcons"
          :show-tick-labels="false"
        />
        <DXSlider 
          v-model="mood" 
          label="Mood" 
          ticks 
          :tick-icons="moodIcons"
        />
      </div>
    `,
  }),
};

export const AnimatedIcons = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const wiggle = ref(50);
      const scale = ref(50);
      const rotate = ref(50);
      const icons = [SpeakerXMarkIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon];
      return { wiggle, scale, rotate, icons };
    },
    template: `
      <div class="space-y-8">
        <DXSlider 
          v-model="wiggle" 
          label="Wiggle Animation" 
          ticks 
          :tick-icons="icons"
          tick-icon-animation="wiggle"
        />
        <DXSlider 
          v-model="scale" 
          label="Scale Animation" 
          ticks 
          :tick-icons="icons"
          tick-icon-animation="scale"
        />
        <DXSlider 
          v-model="rotate" 
          label="Rotate Animation" 
          ticks 
          :tick-icons="icons"
          tick-icon-animation="rotate"
        />
      </div>
    `,
  }),
};

export const InteractiveDemo = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(50);
      const volumeIcons = [SpeakerXMarkIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon];
      return { value, volumeIcons };
    },
    template: `
      <div class="p-8 bg-slate-50 rounded-xl">
        <h3 class="text-lg font-semibold text-slate-900 mb-4">
          Подвигайте слайдер 👇
        </h3>
        <DXSlider 
          v-model="value" 
          label="Volume Control" 
          ticks 
          :tick-icons="volumeIcons"
          tick-icon-animation="wiggle"
        />
        <p class="mt-4 text-sm text-slate-600">
          Иконка анимируется, когда бегунок находится напротив неё
        </p>
      </div>
    `,
  }),
};

export const Combinations = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const smallSuccess = ref(60);
      const mediumDanger = ref(40);
      const largeWarning = ref(70);
      const xlInfo = ref(55);
      const xsPrimary = ref(50);
      return { smallSuccess, mediumDanger, largeWarning, xlInfo, xsPrimary };
    },
    template: `
      <div class="space-y-8">
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Small + Success</h3>
          <DXSlider v-model="smallSuccess" label="Small Success" size="sm" variant="success" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Medium + Danger</h3>
          <DXSlider v-model="mediumDanger" label="Medium Danger" size="md" variant="danger" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">Large + Warning</h3>
          <DXSlider v-model="largeWarning" label="Large Warning" size="lg" variant="warning" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">XL + Info</h3>
          <DXSlider v-model="xlInfo" label="XL Info" size="xl" variant="info" />
        </div>
        <div>
          <h3 class="text-sm font-semibold text-slate-700 mb-2">XS + Primary + Large Spacing</h3>
          <DXSlider v-model="xsPrimary" label="XS Primary Large Spacing" size="xs" variant="primary" spacing="lg" />
        </div>
      </div>
    `,
  }),
};

export const AllVariants = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const simple = ref(50);
      const withTicks = ref(60);
      const withTicksNoLabels = ref(40);
      const price = ref(500);
      const volume = ref(75);
      const volumeIcons = [SpeakerXMarkIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon, SpeakerWaveIcon];
      return { simple, withTicks, withTicksNoLabels, price, volume, volumeIcons };
    },
    template: `
      <div class="space-y-8">
        <DXSlider v-model="simple" label="Простой слайдер" />
        <DXSlider v-model="withTicks" label="С засечками и подписями" ticks />
        <DXSlider v-model="withTicksNoLabels" label="Только засечки" ticks :show-tick-labels="false" />
        <DXSlider v-model="price" label="Цена" :min="0" :max="1000" :step="50" ticks :tick-count="6" unit="₽" />
        <DXSlider v-model="volume" label="Громкость с иконками" ticks :tick-icons="volumeIcons" />
      </div>
    `,
  }),
};

