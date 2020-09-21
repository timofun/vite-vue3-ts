/**
 * @Author QINGYU FAN
 * @Version
 * @Description 数据请求返回code类型
 * @date 2020/8/25 5:31 下午
 */

// 未使用，通用类型
export const CODE_MESSAGE = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 请求返回code
enum RESP_CODE {
  'REQ_OK' = '200',
  'REQ_STOP' = '301',
  'REQ_ERROR' = '400',
  'REQ_LOGIN_EXPIRES' = '401',
  'REQ_LOGIN_TIMEOUT' = 1,
  'REQ_LOGIN_SINGLE' = 2,
  'REQ_LOGIN_OFF' = 3,
  'REQ_LOGIN_FORBIDDEN' = 4,
  'REQ_ACCOUNT_EXPIRES' = '402',
  'REQ_ACCOUNT_NO_AUTHOR' = '406',
  'REQ_500' = '500',
  'NO_STATUS' = 0,
  'QR_STATUS_INVALID' = 1,
  'SCAN_SUCCESS' = 2,
  'LOGIN_SUCCESS' = 3,
}

export default RESP_CODE

// 系统通用选项id值
export enum SYS_OPTION_ID {
  'USER_STATUS' = 1, // 用户状态
  'USER_TYPE', // 用户类型
  'SERVER_TYPE', // 服务类型
  'DEPLOY_TYPE', // 部署版本
  'BASE_VERSION', // 基础版本
  'CUSTOMER_SOURCE', // 客户来源
  'RESG_CODE_STATUS', // 注册码状态
  'CODE_ENCRYPTION', // 代码加密版本或方式
  'PROJECT_STATUS', // 项目状态
}
