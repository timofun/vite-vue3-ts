import path from 'path'
module.exports = {
  // 别名配置
  alias: {
    '/@/': path.resolve(__dirname, 'src')
  },
  open: true,
  // css预处理器配置
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        // less设置全局变量
        'preprocess-custom-color': 'green'
      }
    }
  }
}
