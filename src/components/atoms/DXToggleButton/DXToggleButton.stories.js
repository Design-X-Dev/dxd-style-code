import DXToggleButton from "./DXToggleButton.vue";
import { ref } from "vue";
import {
  HeartIcon as HeartOutline,
  BookmarkIcon as BookmarkOutline,
  StarIcon as StarOutline,
  BellIcon as BellOutline,
  EyeIcon as EyeOutline,
  LockOpenIcon,
  SunIcon,
  SpeakerWaveIcon,
  PlayIcon,
  LightBulbIcon,
} from "@heroicons/vue/24/outline";
import {
  HeartIcon as HeartSolid,
  BookmarkIcon as BookmarkSolid,
  StarIcon as StarSolid,
  BellIcon as BellSolid,
  EyeSlashIcon,
  LockClosedIcon,
  MoonIcon,
  SpeakerXMarkIcon,
  PauseIcon,
} from "@heroicons/vue/24/solid";

export default {
  title: "Atoms/DXToggleButton",
  component: DXToggleButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconAnimation: {
      control: "select",
      options: ["none", "wiggle", "scale", "rotate"],
    },
    activeVariant: {
      control: "select",
      options: ["primary", "ghost", "danger", "success", "warning", "outline"],
    },
    inactiveVariant: {
      control: "select",
      options: ["primary", "ghost", "danger", "success", "warning", "outline"],
    },
  },
};

// Избранное (Like)
export const Favorite = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isFavorite = ref(false);
      return { isFavorite, HeartOutline, HeartSolid };
    },
    template: `
      <div class="space-y-4">
        <DXToggleButton
          v-model="isFavorite"
          :active-icon="HeartSolid"
          :inactive-icon="HeartOutline"
          active-variant="danger"
          inactive-variant="ghost"
        />
        <p class="text-sm text-slate-600">
          Status: {{ isFavorite ? '❤️ Liked' : '🤍 Not liked' }}
        </p>
      </div>
    `,
  }),
};

// Закладка (Bookmark)
export const Bookmark = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isBookmarked = ref(false);
      return { isBookmarked, BookmarkOutline, BookmarkSolid };
    },
    template: `
      <DXToggleButton
        v-model="isBookmarked"
        :active-icon="BookmarkSolid"
        :inactive-icon="BookmarkOutline"
        active-variant="warning"
        inactive-variant="ghost"
      />
    `,
  }),
};

// Звезда (Star/Rating)
export const Star = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isStarred = ref(true);
      return { isStarred, StarOutline, StarSolid };
    },
    template: `
      <DXToggleButton
        v-model="isStarred"
        :active-icon="StarSolid"
        :inactive-icon="StarOutline"
        active-variant="warning"
        inactive-variant="ghost"
        icon-animation="scale"
      />
    `,
  }),
};

// Уведомления (Notifications)
export const Notifications = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const notificationsEnabled = ref(true);
      return { notificationsEnabled, BellOutline, BellSolid };
    },
    template: `
      <DXToggleButton
        v-model="notificationsEnabled"
        :active-icon="BellSolid"
        :inactive-icon="BellOutline"
        active-variant="primary"
        inactive-variant="ghost"
      />
    `,
  }),
};

// Видимость (Show/Hide)
export const Visibility = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isVisible = ref(true);
      return { isVisible, EyeOutline, EyeSlashIcon };
    },
    template: `
      <div class="space-y-4">
        <DXToggleButton
          v-model="isVisible"
          :active-icon="EyeOutline"
          :inactive-icon="EyeSlashIcon"
          active-label="Visible"
          inactive-label="Hidden"
          active-variant="success"
          inactive-variant="ghost"
          size="lg"
        />
        <p class="text-sm text-slate-600">
          Content is {{ isVisible ? 'visible 👁️' : 'hidden 🙈' }}
        </p>
      </div>
    `,
  }),
};

// Блокировка (Lock/Unlock)
export const Lock = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isLocked = ref(false);
      return { isLocked, LockOpenIcon, LockClosedIcon };
    },
    template: `
      <DXToggleButton
        v-model="isLocked"
        :active-icon="LockClosedIcon"
        :inactive-icon="LockOpenIcon"
        active-label="Locked"
        inactive-label="Unlocked"
        active-variant="danger"
        inactive-variant="success"
      />
    `,
  }),
};

// Тема (Light/Dark)
export const Theme = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isDark = ref(false);
      return { isDark, SunIcon, MoonIcon };
    },
    template: `
      <DXToggleButton
        v-model="isDark"
        :active-icon="MoonIcon"
        :inactive-icon="SunIcon"
        active-label="Dark"
        inactive-label="Light"
        active-variant="primary"
        inactive-variant="warning"
        icon-animation="rotate"
      />
    `,
  }),
};

// Звук (Mute/Unmute)
export const Sound = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isMuted = ref(false);
      return { isMuted, SpeakerWaveIcon, SpeakerXMarkIcon };
    },
    template: `
      <DXToggleButton
        v-model="isMuted"
        :active-icon="SpeakerXMarkIcon"
        :inactive-icon="SpeakerWaveIcon"
        active-variant="danger"
        inactive-variant="primary"
      />
    `,
  }),
};

// Play/Pause
export const PlayPause = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const isPlaying = ref(false);
      return { isPlaying, PlayIcon, PauseIcon };
    },
    template: `
      <DXToggleButton
        v-model="isPlaying"
        :active-icon="PauseIcon"
        :inactive-icon="PlayIcon"
        active-label="Pause"
        inactive-label="Play"
        active-variant="warning"
        inactive-variant="success"
        size="lg"
        icon-animation="scale"
      />
    `,
  }),
};

// Размеры
export const Sizes = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const small = ref(false);
      const medium = ref(true);
      const large = ref(false);
      return { small, medium, large, HeartOutline, HeartSolid };
    },
    template: `
      <div class="flex items-center gap-4">
        <DXToggleButton
          v-model="small"
          :active-icon="HeartSolid"
          :inactive-icon="HeartOutline"
          active-variant="danger"
          inactive-variant="ghost"
          size="sm"
        />
        <DXToggleButton
          v-model="medium"
          :active-icon="HeartSolid"
          :inactive-icon="HeartOutline"
          active-variant="danger"
          inactive-variant="ghost"
          size="md"
        />
        <DXToggleButton
          v-model="large"
          :active-icon="HeartSolid"
          :inactive-icon="HeartOutline"
          active-variant="danger"
          inactive-variant="ghost"
          size="lg"
        />
      </div>
    `,
  }),
};

// Анимации
export const Animations = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const wiggle = ref(false);
      const scale = ref(false);
      const rotate = ref(false);
      const none = ref(false);
      return { wiggle, scale, rotate, none, LightBulbIcon };
    },
    template: `
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <DXToggleButton
            v-model="wiggle"
            :active-icon="LightBulbIcon"
            :inactive-icon="LightBulbIcon"
            active-variant="warning"
            inactive-variant="ghost"
            icon-animation="wiggle"
          />
          <span class="text-sm text-slate-600">Wiggle</span>
        </div>
        
        <div class="flex items-center gap-4">
          <DXToggleButton
            v-model="scale"
            :active-icon="LightBulbIcon"
            :inactive-icon="LightBulbIcon"
            active-variant="warning"
            inactive-variant="ghost"
            icon-animation="scale"
          />
          <span class="text-sm text-slate-600">Scale</span>
        </div>
        
        <div class="flex items-center gap-4">
          <DXToggleButton
            v-model="rotate"
            :active-icon="LightBulbIcon"
            :inactive-icon="LightBulbIcon"
            active-variant="warning"
            inactive-variant="ghost"
            icon-animation="rotate"
          />
          <span class="text-sm text-slate-600">Rotate</span>
        </div>
        
        <div class="flex items-center gap-4">
          <DXToggleButton
            v-model="none"
            :active-icon="LightBulbIcon"
            :inactive-icon="LightBulbIcon"
            active-variant="warning"
            inactive-variant="ghost"
            icon-animation="none"
          />
          <span class="text-sm text-slate-600">None</span>
        </div>
      </div>
    `,
  }),
};

// Полная ширина
export const FullWidth = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const subscribed = ref(false);
      return { subscribed, BellOutline, BellSolid };
    },
    template: `
      <DXToggleButton
        v-model="subscribed"
        :active-icon="BellSolid"
        :inactive-icon="BellOutline"
        active-label="Subscribed"
        inactive-label="Subscribe"
        active-variant="success"
        inactive-variant="primary"
        block
      />
    `,
  }),
};

// Интерактивная демонстрация
export const InteractiveDemo = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const favorites = ref([false, false, false, false]);
      const totalLikes = ref(42);

      const toggleFavorite = (index) => {
        const wasActive = favorites.value[index];
        favorites.value[index] = !favorites.value[index];
        totalLikes.value += wasActive ? -1 : 1;
      };

      return {
        favorites,
        totalLikes,
        toggleFavorite,
        HeartOutline,
        HeartSolid,
      };
    },
    template: `
      <div class="p-6 bg-slate-50 rounded-xl space-y-4">
        <h3 class="text-lg font-semibold text-slate-900">
          Like Demo
        </h3>
        <div class="flex items-center gap-2">
          <DXToggleButton
            v-for="(fav, index) in favorites"
            :key="index"
            :model-value="fav"
            @update:model-value="toggleFavorite(index)"
            :active-icon="HeartSolid"
            :inactive-icon="HeartOutline"
            active-variant="danger"
            inactive-variant="ghost"
            size="lg"
          />
        </div>
        <p class="text-sm text-slate-600">
          Total likes: <strong class="text-slate-900">{{ totalLikes }}</strong>
        </p>
      </div>
    `,
  }),
};

// Все варианты
export const AllVariants = {
  render: () => ({
    components: { DXToggleButton },
    setup() {
      const like = ref(true);
      const bookmark = ref(false);
      const star = ref(true);
      const bell = ref(true);
      const visible = ref(true);

      return {
        like,
        bookmark,
        star,
        bell,
        visible,
        HeartOutline,
        HeartSolid,
        BookmarkOutline,
        BookmarkSolid,
        StarOutline,
        StarSolid,
        BellOutline,
        BellSolid,
        EyeOutline,
        EyeSlashIcon,
      };
    },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">Только иконки</h3>
          <div class="flex items-center gap-3">
            <DXToggleButton
              v-model="like"
              :active-icon="HeartSolid"
              :inactive-icon="HeartOutline"
              active-variant="danger"
              inactive-variant="ghost"
            />
            <DXToggleButton
              v-model="bookmark"
              :active-icon="BookmarkSolid"
              :inactive-icon="BookmarkOutline"
              active-variant="warning"
              inactive-variant="ghost"
            />
            <DXToggleButton
              v-model="star"
              :active-icon="StarSolid"
              :inactive-icon="StarOutline"
              active-variant="warning"
              inactive-variant="ghost"
            />
            <DXToggleButton
              v-model="bell"
              :active-icon="BellSolid"
              :inactive-icon="BellOutline"
              active-variant="primary"
              inactive-variant="ghost"
            />
          </div>
        </div>
        
        <div>
          <h3 class="text-sm font-semibold text-slate-900 mb-3">С текстом</h3>
          <div class="flex items-center gap-3">
            <DXToggleButton
              v-model="visible"
              :active-icon="EyeOutline"
              :inactive-icon="EyeSlashIcon"
              active-label="Show"
              inactive-label="Hide"
              active-variant="success"
              inactive-variant="ghost"
            />
          </div>
        </div>
      </div>
    `,
  }),
};
