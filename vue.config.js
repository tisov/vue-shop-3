module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  filenameHashing: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
};