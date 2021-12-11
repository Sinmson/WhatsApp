import 'cypress-storybook/angular';

import { themes } from '@storybook/theming';


export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark},
    // Override the default light theme
    light: { ...themes.normal },
    // current: "dark",
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light"
  }
};