import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import RESP_CODE from '/@/common/js/code'
import { getStorageToken } from '/@/utils/storage'
import { ResponseInfoStructure } from '/@/utils'

// 处理请求 loading
let loadingCount = 0

function loadingInterceptors (instance: AxiosInstance): void {
  // const history = useHistory()
  // 打开 loading
  const openLoading = (config: AxiosRequestConfig): AxiosRequestConfig => {
    loadingCount++
    if (getStorageToken()) {
      config.headers['Authorization'] = getStorageToken()
    }
    return config
  }
  // 关闭 loading
  const closeLoading = () => {
    loadingCount--
    if (loadingCount < 0) {
      loadingCount = 0
    }
  }

  instance.interceptors.request.use(openLoading)
  instance.interceptors.response.use(
    (response: AxiosResponse<ResponseInfoStructure>) => {
      if (response.data.code === RESP_CODE.REQ_STOP) {
        window.location.href = 'stopServer'
        // history.push('/stopServer')
      } else if (response.data.code === RESP_CODE.REQ_LOGIN_EXPIRES && response.data.data.invalid_type) {
        if (response.data.data.invalid_type === RESP_CODE.REQ_LOGIN_SINGLE) {
          // message.error('您的账号在其他电脑登录，如果这不是您的操作，请及时修改您的登录密码')
        } else if (response.data.data.invalid_type === RESP_CODE.REQ_LOGIN_OFF) {
          // message.error('账号已被注销处理')
        } else if (response.data.data.invalid_type === RESP_CODE.REQ_LOGIN_FORBIDDEN) {
          // message.error('帐号已被禁用处理')
        } else if (response.data.data.invalid_type === RESP_CODE.REQ_LOGIN_TIMEOUT) {
          // message.error('登录过期,请重新登录')
        }
      } else if (response.data.code === RESP_CODE.REQ_ACCOUNT_EXPIRES) {
      } else if (response.data.code === RESP_CODE.REQ_ACCOUNT_NO_AUTHOR) {
        // message.error(`您的账号权限发生变化，请重新登录`)
      } else if (response.data.code === RESP_CODE.REQ_500) {
        // message.error(response.data.msg)
      } else if (response.data.code !== RESP_CODE.REQ_OK) {
        if (response.data.msg && !response.data.data.error_next) {
          // message.error(response.data.msg)
        }
      }
      closeLoading()
      return response
    },
    (error) => {
      closeLoading()
      // message.error(`网络异常，请重试~`)
      return Promise.reject(error)
    }
  )
}

export default function createAxiosInstance (baseURL = '', isLoading = false): AxiosInstance {
  const instance = axios.create({
    baseURL,
    timeout: 30000
  })
  isLoading && loadingInterceptors(instance)
  return instance
}
