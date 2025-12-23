/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // Настройка базового пути для деплоя в подпапку
  viteFinal: async (config) => {
    // Базовый путь для статических ресурсов
    // Можно переопределить через переменную окружения BASE_PATH
    const basePath = process.env.BASE_PATH || '/file/dxd-style-code/';
    config.base = basePath;
    return config;
  },
};

export default config;
