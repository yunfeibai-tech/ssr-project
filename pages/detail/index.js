
/**
 * @Author: yunfei_bai
 * @Date: 2018/7/23 14:20
 * @Description:
 * */
import axios from '../../plugins/axios'
export default {
  head: {
    title: '详情页',
    meta: [
      { charset: 'utf-8' },
      { name: 'keyword', content: '大数据' }
    ],
  },
  middleware:'userAuth',
}
