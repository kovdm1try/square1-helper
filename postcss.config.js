export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 2,
    },
    cssnano:
      process.env.NODE_ENV === 'production' ? { preset: 'default' } : false,
  },
}
