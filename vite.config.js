const path = require('path');
module.exports = {
  // 别名配置
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        // less设置全局变量
        'preprocess-custom-color': 'green'
      }
    }
  }
}
