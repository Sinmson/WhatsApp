import 'cypress-storybook/angular';

import { themes } from '@storybook/theming';

// thats the wrong preview.js dont ask me why 

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  }
};