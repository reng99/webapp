<template>
  <div class="navbar-fixed">
    <nav class="nav-wrapper row">
      <router-link class="col s3 logo" :to="{path:'/'}"></router-link>
      <router-link :to="{ path: '/gameSearch'}" class="col s7 no-padding margin-top6">
        <p class="search no-margin no-border border-radius-4"><i class="tmt-header-search-icon"></i>搜商品，共4800件好物品</p>
      </router-link>
      <router-link :to="{path:path}" class="col s2 login main-color">{{value}}</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        path:'/login',
        value:'登录'
      }
    },
    created:function(){
      //已登录
      if (this.$getCookie('logindata')) {
         this.path='/personalCenter';
         this.value='我的';
      }
    }
  }
</script>

<style scoped lang="less">
  .navbar-fixed{
    height:4.4rem;
    .nav-wrapper{
      height:4.4rem;
      background:#fff;
      font-size:1.6rem;
      line-height:4.4rem;
      display:flex;
      flex-direction:row;
      justify-content: space-between;
      .logo{
        max-width: 13rem;
        align-items: center;
        background: url("../../../static/icons/svg/home_logo.svg") no-repeat center center;
        background-size: 80%;
      }
      .search{
        width:100%;
        height:3.2rem;
        background:#f7f7f7;
        text-align:center;
        color: #999;
        font-size:1.2rem;
        display:flex;
        justify-content:center;
        align-items:center;
        i{
          width:1.2rem;
          height:1.2rem;
        }
      }
      .login{
        text-align: center;
      }
    }
  }
</style>
