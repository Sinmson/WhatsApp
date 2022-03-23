
module.exports = {
  content: [
    './apps/whats-app/src/**/*.{html,ts}',
    './libs/ui/src/**/*.{html,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'partner-profil-small': 'auto 50px 1fr auto auto',
        'partner-profil': '40px 1fr minmax(0, 40px) minmax(0, 40px)',
        'chats-profil': '50px 1fr minmax(0, 40px) minmax(0, 40px)',
      }, 
      colors: {
        "wa-chat": { "dark": "#0d1418", "light": "#e5ddd5" }, // conversation-panel-background
        "wa-chats": { "dark": "#131c21",  "light": "#FFFFFF" },
        "wa-header": { "dark": "#2a2f32",  "light": "#ededed" }, // panel-header-background
        "wa-thumb": { "dark": "#394045",  "light": "#CCCCCC" },
        "wa-search": { "dark": "#323739",  "light": "#F6F6F6" },
        "wa-sidemenu-header": { "dark": "#323739",  "light": "#00bfa5", "text-dark": "#e1e1e3", "text-light": "#ffffff" }, // panel-background-colored, drawer-header-title
        "wa-message-them": { "dark": "#262D31",  "light": "#FFFFFF" },
        "wa-message-me": { "dark": "#056162",  "light": "#DCF8C6" },
        "wa-tab-marker": { "dark": "#00af9c",  "light": "#009688" },
        "wa-message-bar": { "dark": "#1e2428;",  "light": "#f0f0f0" }, // compose-panel-background
        "wa-system-message": { "dark": "#1e2a30;",  "light": "#e1f5fe" }, // system-message-background
      },
      screens: {  
      },
      maxWidth: {
        "inherit": "inherit"
      },
      fontSize: {
        '2xs': ['.7rem', '1rem'],
      }
    }
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
