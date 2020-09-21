/**
 * @Author QINGYU FAN
 * @Version
 * @Description 获取本地环境配置
 * @date 2020/9/21 11:09 下午
 */

// 开发 http://api-asset.jc-test.cn http://10.10.10.109:3000
const DEV_API = 'http://10.10.10.109:3000/api'
// 测试
const TEST_API = 'http://api-asset.jc-test.cn/api'
// 生产
const PRO_API = 'https://api.jingchenyun.com/api'

interface childTypes {
  baseURL: string;
}

interface IConfig {
  [key: string]: childTypes;
}

const customBaseConfig: IConfig = {
  development: {
    baseURL: DEV_API
  },
  test: {
    baseURL: TEST_API
  },
  production: {
    baseURL: PRO_API
  }
};

export default customBaseConfig;
