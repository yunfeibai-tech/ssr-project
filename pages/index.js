/**
 * @Author: yunfei_bai
 * @Date: 2018/7/11 15:46
 * @Description:
 * */
import axios from '~/plugins/axios'
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
    },
    formatterTime(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
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
    let { data } = await axios.get('/userList');
    return {
      tableData:  data.userList,
    }
  },
}
