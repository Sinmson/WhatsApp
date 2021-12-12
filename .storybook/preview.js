import 'cypress-storybook/angular';

import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

import { themes } from '@storybook/theming';

// .storybook/preview.js


const customViewports = {
  SM: {
    name: 'SM',
    styles: {
      width: '640px',
      height: '1080px',
    },
  },
  MD: {
    name: 'MD',
    styles: {
      width: '768px',
      height: '1080px',
    },
  },
  LG: {
    name: 'LG',
    styles: {
      width: '1024px',
      height: '1080px',
    },
  },
  XL: {
    name: 'XL',
    styles: {
      width: '1280px',
      height: '1080px',
    },
  },
  TWO_XML: {
    name: '2XML',
    styles: {
      width: '1536px',
      height: '1080px',
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
  docs: {
    theme: themes.light,
  },
};
