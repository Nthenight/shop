// 混入函数
import BackTop from 'components/content/backTop/BackTop';
// import Message from 'components/content/messageBox/MessageBox';

export const backTopMixin = {
  data() {
    return {
      scrollvalue:false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    }
  },
}
// export const messageBox = {
//   data () {
//         return {
//           messageShow: false,
//           infomation: ''
//         }
//   },
//     methods:{
//       isShow(number,message='请输入提示信息!') {
//         if(number==0){
//           this.messageShow=true;
//           this.infomation=message;
//         }
//         else this.messageShow = false
//       },
//   },
//   components: {
//       Message
//     }
// }