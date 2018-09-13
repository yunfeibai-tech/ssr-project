/**
 * @Author: yunfei_bai
 * @Date: 2018/7/16 10:49
 * @Description:
 * */
import axios from '../../plugins/axios'
export default {
  layout:'login',
  data(){
    return{
      account:'',
      password:'',
      accountTips:false,
      passWordTips:false
    }
  },
  methods:{
    clickSubmit(){
      if(this.account ==''){
        this.accountTips = true
      }else if(this.password ==''){
        this.passWordTips = true
      }else if(this.account !='' && this.password !=''){
        let params ={
          account:this.account,
          password:this.password
        };
        axios.post('/api/login',params).then((res) => {
          console.log(res.data);
          this.$router.push('/')
        })
      }
    }
  },
  watch:{
    account:function(newQuestion) {
      newQuestion ==''?this.accountTips = true:this.accountTips = false;
    },
    password:function (newWord) {
      newWord ==''?this.passWordTips = true:this.passWordTips = false;
    }
  }
}
