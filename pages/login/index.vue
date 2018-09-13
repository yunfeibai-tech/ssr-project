<template>
    <div>
      <div class="loginMain">
        <div class="loginHead">
          <img src="../../assets/logo.png" >
        </div>
        <div class="loginPanel">
          <div class="warp">
            <div class="left">
              <div class="content">
                <div class="sign">Welcome</div>
                <div class="line"></div>
                <div class="logoName">微信公众号管理系统</div>
              </div>
            </div>
            <div class="right">
              <div class="content">

                <input :class="accountTips?'error':''" v-model="account" name="account" autocomplete="off" type="text" placeholder="请输入企业账号"/>
                <p v-if="accountTips" class="errorInfo">请输入企业账号</p>
                <input :class="passWordTips?'error':''" v-model="password" autocomplete="off" type="password" placeholder="请输入企业号密码"/>
                <p  v-if="passWordTips" class="errorInfo">请输入企业密码</p>
                <div class="checkReg">
                  <input type="checkbox" class="rember" />
                  <span>自助登录</span>
                  <span class="notLogin">忘记密码</span>
                </div>
                <div @click="clickSubmit" class="loginBtn">登录</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  module.exports = require('./index.js')
</script>
<style lang="less" scoped>
  @import "index";
</style>
