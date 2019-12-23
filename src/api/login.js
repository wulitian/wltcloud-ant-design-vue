import axios from '@/utils/request'

/**
 * 测试
 * @param id
 */
export const test = (id) => {
  const params = { id: id }
  return axios({
    url: '/api/test',
    data: params,
    method: 'get',
    // headers:{
    //   "Content-Type":"application/json"
    // }
  })
}

/**
 * 获取用户信息
 * @param menuId
 */
export const getUserInfo = () => {
  return axios({
    url: '/api/login',
    method: 'get',
  })
}

/**
 * 获取用户信息
 * @param menuId
 */
export const getToken = (data) => {
  return axios({
    url: '/api/getToken',
    data:data,
    method: 'get',
  })
}
