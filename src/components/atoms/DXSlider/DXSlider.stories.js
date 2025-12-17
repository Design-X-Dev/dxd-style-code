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
};

export const Default = {
  render: () => ({
    components: { DXSlider },
    setup() {
      const value = ref(50);
      return { value };
    },
    template: '<DXSlider v-model="value" />',
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

