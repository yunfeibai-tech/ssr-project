/**
 * @Author: yunfei_bai
 * @Date: 2018/7/11 15:46
 * @Description:
 * */
import axios from '~/plugins/axios'
import {formatDate} from '../plugins/filters'
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
  },
  data(){
    return{
      radio: '1',
      text:'',
      tableData:[]
    }
  },

  // middleware:'userAuth',
  mounted(){
    var _this =this;
    axios.get('/api/user/getList').then((res) => {
      res.data.forEach((obj) =>{
        obj.address = obj.country+obj.province+obj.city
      });
      _this.tableData = res.data
    })
  },
}
