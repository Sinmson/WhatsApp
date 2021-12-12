const path = require('path');

module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials', 
  'storybook-dark-mode', 
  '@storybook/addon-links', 
  '@storybook/addon-interactions', 
  // '@storybook/addon-viewport', // TODO: Can be uninstalled
  // '@storybook/addon-backgrounds' // TODO: Can be uninstalled
],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
