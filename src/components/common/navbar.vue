<template>
  <div class="navbar-fixed">
    <nav class="nav-wrapper">
      <div class="row no-margin">
        <div class="col s3 logo main-color">淘米淘</div>
        <div class="col s6 no-padding margin-top6">
          <input class="search no-margin no-border border-radius6" type="text" placeholder="搜商品，共4800件好物品">
        </div>
        <div class="col s3 login main-color">登录</div>
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
        text-align:center;
      }
      .search{
        width:100%;
        height:3.2rem;
        background:#f7f7f7;
        text-align:center;
        display:block;
      }
      .login{
        text-align:center;
      }
    }
  }
</style>
