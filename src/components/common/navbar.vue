<template>
  <div class="navbar-fixed">
    <nav class="nav-wrapper">
      <div class="row no-margin">
        <router-link class="col s3 logo main-color" :to="{path:'/'}">淘米淘</router-link>
        <div class="col s7 no-padding margin-top6">
          <input class="search no-margin no-border border-radius-4" type="text" placeholder="搜商品，共4800件好物品">
        </div>
        <router-link :to="{path:'/login'}" class="col s2 login main-color">登录</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {

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
      .logo{
        text-align:left;
      }
      .search{
        width:100%;
        height:3.2rem;
        background:#f7f7f7;
        text-align:center;
        display:block;
      }
      .login{
        text-align:right;
      }
    }
  }
</style>
