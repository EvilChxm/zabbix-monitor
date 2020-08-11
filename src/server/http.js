import qs from 'qs'
import axios from 'axios'

const baseURL = process.env.NODE_ENV !== 'production' ? '/api' : ''
const TIMEOUT = 5000

const codeMessage = {
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

/**
 * 请求失败后的错误统一处理，当然还有更多状态码判断，根据自己业务需求去扩展即可
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      // 跳转登录页
      break
      // 403 token过期
    case 403:
      // 如果不需要自动刷新token，可以在这里移除本地存储中的token，跳转登录页

      break
      // 404请求不存在
    case 404:
      // 提示资源不存在
      break
    default:
      console.log(other)
  }
}

const config = {
  baseURL,
  timeout: TIMEOUT,
  withCredentials: true

}

const _axios = axios.create(config)

_axios.interceptors.request.use(config => {
  // 从vuex里获取token
  // const token = store.state.token
  // // 如果token存在就在请求头里添加
  // token && (config.headers.token = token)
  return config
}, error => {
  error.data = {}
  error.data.msg = '服务器异常'
  return Promise.reject(error)
})

// 响应拦截器
_axios.interceptors.response.use(
  response => {
    // 只返回response中的data数据
    return response.data
  },
  error => {
    if (error) {
      // 请求已发出，但不在2xx范围内
      errorHandle(error.status, error.data.msg)
      return Promise.reject(error)
    } else {
      // 断网
      return Promise.reject(error)
    }
  }
)

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    _axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    _axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
