import { request } from './request';
export function getDetailData(id) {
  return request({
    url: '/detail',
    params: {
      id
    }
  })
}

export class getDetailParam{
  constructor(res) {
    this.img = res[0].img;
    this.content = res[0].content;
    this.price = res[0].price;
    this.param = res[0].param;
    this.comment = res[0].comment;
  }
}