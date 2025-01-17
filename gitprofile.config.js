// gitprofile.config.js
const config = {
  github: {
    username: 'daniellendvai', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['portfolio', 'calculator', 'Felkeszito'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    email: 'lendvai.daniel92@gmail.com',
    linkedin: 'dániel-lendvai-48bba5146',
    facebook: 'lendvai.daniel',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    github: 'https://daniellendvai.github.io',
    phone: '',
  },
  skills: [
    'Angular',
    'React',
    'C#',
    'MySQL',
    'CSS/SCSS',
    'Tailwind',
    ],
  experiences: [
    {
      company: 'Webforyou ltd.',
      position: 'Frontend developer',
      from: 'January 2023',
      to: 'Present',
    },
  ],
  education: [
    {
      institution: 'Szent Istvan University',
      degree: 'Economics & Social Sciences',
      to: 'Class of 2016',
    },
    {
      institution: 'Soter-Line Education Center',
      degree: 'Software Engineering',
      to: 'Class of 2021',
    },
    {
      institution: 'CodeCool',
      degree: 'Front-end Development',
      to: 'Class of 2022',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'lendvai.daniel92',
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: '', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'garden',

    // Hides the switch in the navbar

    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme f5f3f4 / 27f256
    customTheme: {
      primary: '#cc1150',
      secondary: '#27f256',
      accent: '#27f256',
      neutral: '#27f256',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
