import { request } from './request';

export function getSearchContent(content) {
  return request({
    url: 'search',
    params: {
      content
    }
  })
}