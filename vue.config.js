const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/vue-showmore-demo/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
}