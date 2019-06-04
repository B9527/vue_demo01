
import request from './request'

let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
 
export function requestLogin (params) {
  return request({
    url: `/api_admin/user/login`,
    method: 'post',
    data: params,
    showLoading: true // loading效果
  })
}

export function appLogin(params){
  return request(
    {
      url: `/api_user/v1/auth/login/`,
      method: 'post',
      data: params,
      showLoading: true // loading效果
    }
  )
}