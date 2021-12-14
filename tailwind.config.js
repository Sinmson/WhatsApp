
module.exports = {
  mode: "jit",
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
    
  // },
  content: [
    './apps/whats-app/src/**/*.{html,ts}',
    './libs/ui/src/**/*.{html,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'partner-profil-small': 'auto 50px 1fr auto auto',
        'partner-profil': '50px 1fr auto auto',
        'chats-profil': '40px 1fr minmax(0, 40px) minmax(0, 40px)',
      }, 
      colors: {
        "wa-chat": { "dark": "#0d1418", "light": "#e5ddd5" }, // conversation-panel-background
        "wa-chats": { "dark": "#131c21",  "light": "#FFFFFF" },
        "wa-header": { "dark": "#2a2f32",  "light": "#ededed" }, // panel-header-background
        "wa-thumb": { "dark": "#394045",  "light": "#CCCCCC" },
        "wa-search": { "dark": "#323739",  "light": "#F6F6F6" },
        "wa-message-them": { "dark": "#262D31",  "light": "#FFFFFF" },
        "wa-message-me": { "dark": "#056162",  "light": "#DCF8C6" },
        "wa-message-bar": { "dark": "#1e2428;",  "light": "#f0f0f0" }, // compose-panel-background
      },
      screens: {  
      },
      maxWidth: {
        "inherit": "inherit"
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
