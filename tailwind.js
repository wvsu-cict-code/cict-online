module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-background': 'var(--background-primary)',
        'sec-background': 'var(--background-sec)',
        'primary-text': 'var(--color-text-primary)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
};
