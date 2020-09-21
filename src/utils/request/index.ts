import createAxiosInstance from './axios'
import customBaseConfig from '/@/utils/config'
export interface ResponseInfoStructure {
  data: any // 返回结果
  code: string // 状态码
  msg: string // 状态信息
}
console.log(process.env.NODE_ENV)
const { baseURL } = customBaseConfig[process.env.NODE_ENV ? process.env.NODE_ENV : 'dev']
export default createAxiosInstance(baseURL, true)
