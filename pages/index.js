/**
 * @Author: yunfei_bai
 * @Date: 2018/7/11 15:46
 * @Description:
 * */
import nav from '~/components/nav'
import axios from 'axios'
export default {
  head: {
    title: '首页',
    meta: [
      { charset: 'utf-8' },
      { name: 'keyword', content: '大数据' }
    ],
  },
  components: {
  },
  methods:{
    clickButton(){
      console.log(11111)
    }
  },
  data(){
    return{
      radio: '1',
      text:''
    }
  },
  middleware:'userAuth',
  mounted(){
  },
  async asyncData () {
    let { data } = await axios.get('/api/userList')
    return {
      text:  data.userList,
    }
  },
}
