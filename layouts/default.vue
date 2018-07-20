<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo-fixed"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="index">用户列表</el-menu-item>
      <el-menu-item index="detail">详情页</el-menu-item>
    </el-menu>
    <div class="content">
      <el-row>
        <el-col :span="24" style="height: 100vh;overflow:auto">
          <nuxt/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
          radio: '1',
          activeIndex: ''
        };
    },

    methods:{
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
          if(key == 'index'){
            this.$router.push('/')
          }else{
            this.$router.push('/'+key)
          }
      }
    },
    mounted(){
      this.activeIndex =  this.$route.name
    }
  }
</script>
<style lang="less" scope>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow: hidden;

}
.content{
  padding: 80px 20px 20px;
  overflow-y: hidden;
  height: 100vh;
  box-sizing: content-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.el-menu-demo-fixed{
    position: fixed;
    z-index: 1000;
    width: 100%;
}
.el-menu-vertical{
  position: relative;
  height: 100vh;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
