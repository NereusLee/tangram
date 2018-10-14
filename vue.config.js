module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") return;
    config.optimization.splitChunks({
      cacheGroups:{
        vant:{
          name:'chunk-vant',
          test:/[\\/]node_modules[\\/vant]/,
          priority: 10,
        }
      }
    })
  },
  lintOnSave: false,
  productionSourceMap:false,
  pwa: {
    name: 'tangram'
  }
}