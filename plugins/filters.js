import Vue from 'vue'
import moment from 'moment'
// 时间格式化
export function formatDate (date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss')
}
let filters = {
  formatDate
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters
