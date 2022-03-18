module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '560': '560px',
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              p: {
                fontSize: '1rem',
                lineHeight: '1.7rem',
                color: '#333',
              },
              h1: {
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#222',
              },
              h2: {
                fontSize: '2.25rem',
                fontWeight: '400',
                color: '#222',
              },
              h3: {
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#222',
              },
              a: {
                color: theme(`colors.blue`),
                textDecoration: null,
                "&:hover": {
                  textDecoration: `underline`,
                },
              },
              "code::before": null,
              "code::after": null,
              "blockquote p:first-of-type::before": null,
              "blockquote p:last-of-type::after": null,
            },
          },
        }
      },
      colors: {
        black: '#000',
        white: '#fff',
      },
    },
    container: {
      padding: '1rem'
    },
    fontFamily: {
      sans: [
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
