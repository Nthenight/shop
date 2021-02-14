import { request } from './request'

export function getHomeMultidata() {
  return request({
     url:'/home'
   })
}

export function getHomeGoodsdata(type,page) {
  return request({
    url: 'home/list',
    params: {
      type,
      page
    }
  })
}