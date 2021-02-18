import { request } from './request';
export function getDetailData(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}