const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/vue-simple-noticebar-demo/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
}