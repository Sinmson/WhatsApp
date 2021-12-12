import 'cypress-storybook/angular';

import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import { themes } from '@storybook/theming';

// .storybook/preview.js


const customViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark },
    // Override the default light theme
    light: { ...themes.normal },
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light"
  },
  viewport: {
    viewports: {
      //  ...INITIAL_VIEWPORTS,
       ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
