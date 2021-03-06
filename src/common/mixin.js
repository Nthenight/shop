// 混入函数
import BackTop from 'components/content/backTop/BackTop';
import MessageBox from 'components/content/messageBox/MessageBox';
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

export const messages = {
  data () {
        return {
          messageShow: false,
        }
  },
  methods: {
      // 是否要显示MessageBox组件
      messageisShow(bool) {
        bool = true ? this.messageShow = bool : this.messageShow = bool;
      }
  },
  components: {
    MessageBox
  }
}