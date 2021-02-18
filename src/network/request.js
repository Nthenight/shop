import axios from 'axios'

export function request(config) {
   
  const instance = axios.create({
    /**
     * 本地调试接口
     */
    baseURL: 'http://127.0.0.1:3000/index',
    /**
     * 手机端调试接口
     */
    // baseURL: 'http://192.168.0.104:3000/index',
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    return config
  },
    err => {
      console.log(err);
    })
  instance.interceptors.response.use(res => {
    return res.data
  },
    err => {  
      console.log(err); 
    })
  return instance(config)
}