/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        coral: 'rgb(var(--color-coral) / <alpha-value>)',
        cloud: 'rgb(var(--color-cloud) / <alpha-value>)',
      },
    },
  },
  daisyui: {
    themes: [{ shopitrack: {
      primary: '#1264e8', secondary: '#092c78', accent: '#ff6848', neutral: '#122958', 'base-100': '#ffffff', 'base-200': '#eef7ff', 'base-300': '#d9e9fa', info: '#1264e8', success: '#12a879', warning: '#f4b740', error: '#de4b5f',
    } }],
  },
  plugins: [require('daisyui')],
};
