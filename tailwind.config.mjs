/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',
        'primary-deep': '#0051D5',
        success: '#34C759',
        'bg-light': '#FFFFFF',
        'bg-gray': '#F2F2F7',
        'text-main': '#1C1C1E',
        'text-muted': '#8E8E93',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'PingFang SC', 'Noto Sans SC', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        'card-xl': '24px',
      },
      transitionTimingFunction: {
        'out-smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'soft': 'cubic-bezier(0.33, 1, 0.68, 1)',
        'soft-bounce': 'cubic-bezier(0.34, 1.2, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
