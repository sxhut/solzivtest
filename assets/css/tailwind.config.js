const themeDir = __dirname + '/../../';

module.exports = {
  important: true,
  purge: {
    enabled: true,
    content: [
      themeDir + 'layouts/**/*.html',
      themeDir + 'exampleSite/content/**/*.html',
      'layouts/**/*.html',
      'content/**/*.html',
    ],
  },
  theme: {
    fontFamily: {
      'serif': ['Lora', 'Noto Serif SC', 'serif'],
      'mono': ['SFMono-Regular', 'Menlo'],
    },
    extend: {
      inset: {
        '16': '4rem',
      },
      colors: {
        'eureka': 'var(--color-eureka)',
        'primary-bg': 'var(--color-primary-bg)',
        'secondary-bg': 'var(--color-secondary-bg)',
        'tertiary-bg': 'var(--color-tertiary-bg)',
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'tertiary-text': 'var(--color-tertiary-text)',
      }
    }
  },
  variants: {},
  plugins: []
}
